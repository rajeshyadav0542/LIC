const express = require('express');
const userController = require('../controllers/agentController'); 
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
router.post('/change_password', userController.changePassword);     
router.put(
    '/update-profile', 
    upload.single('image'), 
    userController.updateProfile
);
router.put('/edit',upload.single('image'),userController.edit);
router.get('/get',userController.get);
module.exports = router;
