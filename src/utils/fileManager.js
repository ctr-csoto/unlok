const multer = require('multer');
const { config } = require('../config/index');
const path = require('path');
const mkdirp = require('mkdirp');
const sharp = require('sharp');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');

const RULES = /jpeg|jpg|png|gif|tiff|psd|jfif/;
const FILE_NAME = 'singleFile';
const TYPE_FILE = 'single';

function getFilename(req, file, cb) {
  crypto.pseudoRandomBytes(16, function(err, raw) {
    cb(err, err ? undefined : raw.toString('hex'));
  });
}

function getDestination(req, file, cb) {
  cb(null, os.tmpdir());
}

async function resize(imagePath, width = 400, height = undefined) {
  let buffer = await sharp(imagePath)
    .resize(width, height)
    .toBuffer();

  fs.writeFile(imagePath, buffer, function() {});
}

class ImageStorage {
  constructor(opts) {
    this.compressImage = opts.compressImage;
    this.getFilename = opts.filename || getFilename;

    if (typeof opts.destination === 'string') {
      mkdirp.sync(opts.destination);
      this.getDestination = function($0, $1, cb) {
        cb(null, opts.destination);
      };
    } else {
      this.getDestination = opts.destination || getDestination;
    }
  }

  _handleFile(req, file, cb) {
    let that = this;

    that.getDestination(req, file, function(err, destination) {
      if (err) return cb(err);

      that.getFilename(req, file, function(err, filename) {
        if (err) return cb(err);

        let finalPath = path.join(destination, filename);
        let outStream = fs.createWriteStream(finalPath);

        file.stream.pipe(outStream);
        outStream.on('error', cb);
        outStream.on('finish', async function() {
          if (that.compressImage) {
            try {
              await resize(finalPath);
            } catch (error) {
              cb(error);
            }
          }
          cb(null, {
            destination: destination,
            filename: filename,
            path: finalPath,
            size: outStream.bytesWritten
          });
        });
      });
    });
  }

  _removeFile(req, file, cb) {
    let path = file.path;

    delete file.destination;
    delete file.filename;
    delete file.path;

    fs.unlink(path, cb);
  }
}

class FileManager {
  constructor(destinationFunction, fileNameFunction) {
    let destination = function(req, file, cb) {
      mkdirp.sync(config.uploadedFilesFolder);
      cb(null, config.uploadedFilesFolder);
    };

    let fileName = function(req, file, callback) {
      callback(null, file.originalname);
    };

    this.destination = destinationFunction || destination;
    this.filename = fileNameFunction || fileName;
  }

  uploadFile(
    filename = FILE_NAME,
    type = TYPE_FILE,
    rules = RULES,
    compressImage = false,
    limits = {}
  ) {
    let multerOpts = {
      storage: multer.diskStorage({
        destination: this.destination,
        filename: this.filename
      }),
      limits,
      fileFilter: function(req, file, cb) {
        if (rules == null) return cb(null, true);
        const filetypes = rules;
        const extname = filetypes.test(
          path.extname(file.originalname).toLocaleLowerCase()
        );
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) return cb(null, true);
        cb('Error: Wrong file format');
      }
    };

    if (compressImage)
      multerOpts.storage = new ImageStorage({
        destination: this.destination,
        filename: this.filename,
        compressImage
      });
    const fileManager = multer(multerOpts)[type](filename);

    return fileManager;
  }
}

module.exports = FileManager;
