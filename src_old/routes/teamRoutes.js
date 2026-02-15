const express = require('express'); 
const fs = require('fs');
const path = require('path');
const teamController = require('../controllers/teamController'); 
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/team'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'teams' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',permissionsMiddleware(['team-read']),teamController.get);
router.post('/create',upload.single('image'),permissionsMiddleware(['team-create']),teamController.create);
router.put('/edit',upload.single('image'),permissionsMiddleware(['blog-edit']),teamController.edit);
router.delete('/delete',[],permissionsMiddleware(['blog-delete']),teamController.delete);
module.exports = router;
