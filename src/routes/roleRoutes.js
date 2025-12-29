const express = require('express'); 
const fs = require('fs');
const path = require('path');
const rolesController = require('../controllers/rolesController'); 
const permissionsMiddleware = require('../middleware/permissionsMiddleware');

const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/slider'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'sliders' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',permissionsMiddleware(['role-read']),rolesController.get);
router.post('/create',upload.single('image'),rolesController.create);
router.put('/edit',upload.single('image'),rolesController.edit);
router.delete('/delete',[],permissionsMiddleware(['role-delete']),rolesController.delete);
module.exports = router;
