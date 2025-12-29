const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsController');
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/settings'; 
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }
    cb(null, uploadPath);  
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'settings' + fileExtension); 
  },
});
const upload = multer({ storage });

router.post('/upsert', upload.fields([
    { name: 'logo', maxCount: 1 },
    { name: 'favicon', maxCount: 1 }
]), settingsController.upsertSettings);

// Route to fetch settings
router.get('/get', permissionsMiddleware(['setting-read']),settingsController.fetchSettings);

module.exports = router;
