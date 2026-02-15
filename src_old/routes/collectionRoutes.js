const express = require('express'); 
const fs = require('fs');
const path = require('path');
const collectionController = require('../controllers/colllectionController'); 
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/collection'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'collections' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',collectionController.get);
router.post('/create',upload.single('image'),collectionController.create);
router.put('/edit',upload.single('image'),collectionController.edit);
router.delete('/delete',[],collectionController.delete);


module.exports = router;
