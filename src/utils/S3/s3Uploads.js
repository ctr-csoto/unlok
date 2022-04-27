require('dotenv').config();
const fs = require('fs');
const { promisify } = require('util');
const boom = require('@hapi/boom');
const { config } = require('../../config');
const s3 = require('../../config/s3aws');

const bucketName = process.env.AWS_S3_BUCKET;

const uploadAWS = async (pathDestination, localPath, buffer = false) => {
  var params = {
    ACL: 'public-read',
    Body: buffer ? localPath : fs.createReadStream(localPath),
    Bucket: bucketName,
    Key: `${config.uploadedFilesUrl}/${pathDestination}`
  };
  try {
    const upload = promisify(s3.upload.bind(s3));
    const data = await upload(params);

    return data;
  } catch (err) {
    throw boom.badImplementation(
      `Error occured while trying to upload to S3 bucket ${err}`
    );
  }
};

const copyDocumentAWS = async (documentUrl, destinationUrl) => {
  var params = {
    ACL: 'public-read',
    Bucket: bucketName,
    CopySource: `${bucketName}/${config.uploadedFilesUrl}/${documentUrl}`,
    Key: `${config.uploadedFilesUrl}/${destinationUrl}`
  };
  try {
    const copyObject = promisify(s3.copyObject.bind(s3));
    const data = await copyObject(params);

    return data;
  } catch (err) {
    throw boom.badImplementation(
      `Error occured while trying to copy file in S3 bucket ${err}`
    );
  }
};

const deleteDocumentAWS = async documentUrl => {
  var params = {
    Bucket: bucketName,
    Key: `${config.uploadedFilesUrl}/${documentUrl}`
  };

  try {
    const deleteDocument = promisify(s3.deleteObject.bind(s3));
    const data = await deleteDocument(params);

    return data;
  } catch (err) {
    throw boom.badImplementation(
      `Error occured while trying to delete to S3 bucket ${err}`
    );
  }
};

const getDocumentAWS = async documentUrl => {
  var params = {
    Bucket: bucketName,
    Key: `${config.uploadedFilesUrl}/${documentUrl}`
  };

  try {
    const getDocument = promisify(s3.getObject.bind(s3));
    const data = await getDocument(params);

    return data;
  } catch (err) {
    throw boom.badImplementation(
      `Error occured while trying to get file in S3 bucket ${err}`
    );
  }
};

module.exports = {
  uploadAWS,
  deleteDocumentAWS,
  copyDocumentAWS,
  getDocumentAWS
};
