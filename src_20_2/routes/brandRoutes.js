const express = require('express'); 
const fs = require('fs');
const path = require('path');
const brandController = require('../controllers/brandController'); 
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/brand'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'brands' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',permissionsMiddleware(['brand-read']),brandController.get);
router.post('/create',permissionsMiddleware(['brand-create']),upload.single('image'),brandController.create);
router.put('/edit',upload.single('image'),permissionsMiddleware(['brand-edit']),brandController.edit);
router.delete('/delete',[],permissionsMiddleware(['brand-delete']),brandController.delete);


module.exports = router;
