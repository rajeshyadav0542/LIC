const express = require('express'); 
const fs = require('fs');
const path = require('path');
const blogController = require('../controllers/blogController'); 
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/blog'; 
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
router.get('/get', permissionsMiddleware(['blog-read']),blogController.get);
router.post('/create',uploadFields,permissionsMiddleware(['blog-create']),blogController.create);
router.put('/edit',uploadFields,permissionsMiddleware(['blog-edit']),blogController.edit);
router.delete('/delete',[],permissionsMiddleware(['blog-delete']),blogController.delete);


module.exports = router;
