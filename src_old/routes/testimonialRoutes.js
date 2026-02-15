const express = require('express'); 
const fs = require('fs');
const path = require('path');
const testimonialController = require('../controllers/testimonialController'); 
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/testimonial'; 
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }
    cb(null, uploadPath);  
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'testimonial' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',permissionsMiddleware(['testimonial-edit']),testimonialController.get);
router.post('/create',upload.single('image'),permissionsMiddleware(['testimonial-create']),testimonialController.create);
router.put('/edit',upload.single('image'),permissionsMiddleware(['testimonial-edit']),testimonialController.edit);
router.delete('/delete',[],permissionsMiddleware(['testimonial-delete']),testimonialController.delete);
module.exports = router;
