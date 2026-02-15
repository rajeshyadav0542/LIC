const express = require('express'); 
const fs = require('fs');
const path = require('path');
const attributeController = require('../controllers/attributeController'); 
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/attributes'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'attributes' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',attributeController.get);
router.post('/create',upload.single('image'),attributeController.create);
router.put('/edit',upload.single('image'),attributeController.edit);
router.delete('/delete',[],attributeController.delete);
module.exports = router;
