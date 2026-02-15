const express = require('express'); 
const fs = require('fs');
const path = require('path');
const attributeValueController = require('../controllers/attributeValueController'); 
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
router.get('/get',attributeValueController.get);
router.post('/create',upload.single('image'),attributeValueController.create);
router.put('/edit',upload.single('image'),attributeValueController.edit);
router.delete('/delete',[],attributeValueController.delete);

router.get('/get_ajax_attr_value',attributeValueController.get_attribute_value);
module.exports = router;
