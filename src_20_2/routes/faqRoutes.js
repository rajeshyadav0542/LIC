const express = require('express'); 
const fs = require('fs');
const path = require('path');
const faqController = require('../controllers/faqController'); 
const permissionsMiddleware = require('../middleware/permissionsMiddleware');
const router = express.Router();
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath ='public/uploads/faq'; 
    
    if (!fs.existsSync(uploadPath)) { 
      fs.mkdirSync(uploadPath, { recursive: true });
      console.log('Directory created:', uploadPath);
    }

    cb(null, uploadPath);  
  },
  
  filename: function (req, file, cb) {
    const fileExtension = path.extname(file.originalname);
    cb(null, Date.now() + 'faqs' + fileExtension); 
  },
});
const upload = multer({ storage });
router.get('/get',permissionsMiddleware(['faq-read']),faqController.get);
router.post('/create',upload.single('image'),permissionsMiddleware(['faq-create']),faqController.create);
router.put('/edit',upload.single('image'),permissionsMiddleware(['faq-edit']),faqController.edit);
router.delete('/delete',[],permissionsMiddleware(['faq-delete']),faqController.delete);
module.exports = router;
