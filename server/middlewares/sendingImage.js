const multer = require('multer');

// Define storage for the uploaded files
const storage = multer.memoryStorage();

// Set file size limit and file type restrictions
const limits = {
  fileSize: 1024 * 1024 * 5, // 5 MB
  files: 1 // allow only one file upload
};

// Define file type filter
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/png'
  ) {
    cb(null, true);
  } else {
    cb(new Error('Only JPEG, JPG, and PNG files are allowed'));
  }
};

// Initialize multer middleware with the above configurations
const upload = multer({ storage, limits, fileFilter });

module.exports = upload;
