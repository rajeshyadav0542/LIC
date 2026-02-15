const express = require('express');
const authController = require('../controllers/agentauthController'); 
const fs = require('fs');
const path = require('path');
const router = express.Router();
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/users'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'users' + fileExtension); 
  },
});
const upload = multer({ storage });

// Define routes
router.post('/register',upload.single('image'), authController.register);  
router.post('/login', authController.login);   
router.post('/send_otp', authController.send_otp);
router.post('/otp_verify', authController.otp_verify);
router.post('/resetPassword', authController.sendResetPasswordEmail);
router.post('/reset-password', authController.reset_password);
router.post('/referral', authController.referral);
router.get('/referral/list', authController.referral_list);

module.exports = router;
