const express = require('express'); 
const fs = require('fs');
const path = require('path');
const productController = require('../controllers/productController'); 
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/product'; 
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() +'_'+file.fieldname  + fileExtension); 
  },
});
const upload = multer({ storage });
const uploadFields = upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'banner_image', maxCount: 1 },
  ]);
router.get('/get',productController.get);
router.get('/get_filter_type',productController.get_filter_type);
router.post('/create',uploadFields,productController.create);
// router.put('/edit',upload.single('image'),productController.edit);
router.delete('/delete',[],productController.delete);
module.exports = router;
