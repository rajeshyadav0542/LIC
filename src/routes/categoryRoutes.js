const express = require('express'); 
const fs = require('fs');
const path = require('path');
const categoryController = require('../controllers/categoryController'); 
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/category'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'categorys' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',permissionsMiddleware(['category-read']),categoryController.get);
router.post('/create',upload.single('image'),permissionsMiddleware(['category-create']),categoryController.create);
router.put('/edit',upload.single('image'),permissionsMiddleware(['category-edit']),categoryController.edit);
router.delete('/delete',[],permissionsMiddleware(['category-delete']),categoryController.delete);


module.exports = router;
