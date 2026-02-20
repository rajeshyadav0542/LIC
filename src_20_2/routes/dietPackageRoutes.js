const express = require('express'); 
const fs = require('fs');
const path = require('path');
const dietPackageController = require('../controllers/dietPackageController'); 
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/dietpackage'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'dietpackages' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',permissionsMiddleware(['dietpackage-read']),dietPackageController.get);
router.post('/create',upload.single('image'),permissionsMiddleware(['dietpackage-create']),dietPackageController.create);
router.put('/edit',upload.single('image'),permissionsMiddleware(['dietpackage-edit']),dietPackageController.edit);
router.delete('/delete',[],permissionsMiddleware(['dietpackage-delete']),dietPackageController.delete);
module.exports = router;
