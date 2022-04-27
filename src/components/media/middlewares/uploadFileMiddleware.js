const UploadFileFactoryHandler = require('../../../utils/middleware/uploadFileFactoryHandler');

module.exports = {
  uploadFile: function() {
    return UploadFileFactoryHandler.getUploadMiddleware(
      'userFiles',
      'userFiles',
      undefined,
      undefined,
      { files: 30 },
      false
    );
  }
};
