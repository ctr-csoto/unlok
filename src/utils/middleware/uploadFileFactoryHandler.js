const { config } = require('../../config/index');
const Path = require('path');
const mkdirp = require('mkdirp');
const FileManager = require('../fileManager');

class UploadFileFactory {
  static getTmpFolder(folderName) {
    return Path.resolve(config.uploadedFilesFolder + '/tmp/' + folderName);
  }

  static getDestinationFunction(nameParam, path) {
    let destination = function(req, file, cb) {
      if (typeof req.body[nameParam] == 'undefined') {
        req.body[nameParam] = {
          path: null,
          files: []
        };
      }
      req.body[nameParam].path = path;
      mkdirp.sync(req.body[nameParam].path);
      cb(null, path);
    };

    return destination;
  }

  static getFileNameFunction(nameParam) {
    let fileName = function(req, file, callback) {
      if (typeof req.body[nameParam] == 'undefined') {
        req.body[nameParam] = {
          files: []
        };
      }
      let originalName = file.originalname;
      let fileName = new Date().getTime() + '_' + originalName;
      req.body[nameParam].files.push({
        fileName: fileName,
        originalFileName: originalName
      });
      callback(null, fileName);
    };

    return fileName;
  }

  static getUploadMiddleware(
    nameParam,
    folderName,
    compressImage = false,
    rules = null,
    limits,
    tmp
  ) {
    const path = UploadFileFactory.getTmpFolder(folderName);
    const destination = UploadFileFactory.getDestinationFunction(
      nameParam,
      path
    );
    const fileName = UploadFileFactory.getFileNameFunction(nameParam, path);

    const fileManager = new FileManager(destination, fileName);
    return fileManager.uploadFile(
      nameParam,
      'array',
      rules,
      compressImage,
      limits,
      tmp
    );
  }
}

module.exports = UploadFileFactory;
