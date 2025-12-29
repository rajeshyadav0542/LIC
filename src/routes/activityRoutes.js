const express = require('express');
const activityController = require('../controllers/activityController'); 
const router = express.Router();
const fs = require('fs');
const path = require('path');
// Define routes
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/profile'; 
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }
    cb(null, uploadPath);  
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'profile' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',activityController.get);
module.exports = router;
