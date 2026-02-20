const express = require('express'); 
const fs = require('fs');
const path = require('path');
const sliderController = require('../controllers/sliderController'); 
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/slider'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'sliders' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',permissionsMiddleware(['slider-read']),sliderController.get);
router.post('/create',upload.single('image'),permissionsMiddleware(['slider-create']),sliderController.create);
router.put('/edit',upload.single('image'),permissionsMiddleware(['slider-edit']),sliderController.edit);
router.delete('/delete',[],permissionsMiddleware(['slider-delete']),sliderController.delete);

module.exports = router;
