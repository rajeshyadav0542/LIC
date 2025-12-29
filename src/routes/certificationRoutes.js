const express = require('express'); 
const fs = require('fs');
const path = require('path');
const certificationController = require('../controllers/certificationController'); 
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/certification'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'certifications' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',permissionsMiddleware(['certification-read']),certificationController.get);
router.post('/create',permissionsMiddleware(['certification-create']),upload.single('image'),certificationController.create);
router.put('/edit',upload.single('image'),permissionsMiddleware(['certification-edit']),certificationController.edit);
router.delete('/delete',[],permissionsMiddleware(['certification-delete']),certificationController.delete);


module.exports = router;
