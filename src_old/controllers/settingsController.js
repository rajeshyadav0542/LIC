const settingsService = require('../services/settingsService');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const uploadPath ='/public/uploads/settings'; 
      if (!fs.existsSync(uploadPath)) { 
        fs.mkdirSync(uploadPath, { recursive: true });
        console.log('Directory created:', uploadPath);
      }
      cb(null, uploadPath);  
    },
    filename: function (req, file, cb) {
      const fileExtension = path.extname(file.originalname);
      cb(null, Date.now() + 'settings' + fileExtension); 
    },
  });

const upload = multer({ storage });

class SettingsController {
    // Method to handle the creation and update of settings
    async upsertSettings(req, res) {
        try {
            const { email, phone, address, facebook_link,instagram_link ,youtube_link,twitter_link,working_time,privacy_policy,terms_condition,refund_policy,disclaimer,linkedin_link } = req.body;

            // Get files from the request
            const logoFile = req.files?.logo ? req.files.logo[0] : null;
            const faviconFile = req.files?.favicon ? req.files.favicon[0] : null;

            // Call the service to handle business logic
            const result = await settingsService.upsertSettings({
                email, phone, address, facebook_link, logoFile, faviconFile,instagram_link ,youtube_link,twitter_link,working_time,privacy_policy,terms_condition,refund_policy,disclaimer,linkedin_link
            });

            return res.status(200).json({ status:true, 
                message: 'settings successfully.',data:result});
        } catch (error) {
            console.error('Error in upsertSettings:', error);
            return res.status(500).json({
                status:false,
                success: false,
                message: 'An error occurred while processing settings.',
                error
            });
        }
    }
    // Method to fetch the current settings from the database
    async fetchSettings(req, res) {
        try {
            const result = await settingsService.fetchSettings();

            if (result.status) {
                return res.status(200).json({
                    status: true,
                    message: 'Success',
                    data: result.data
                });
            } else {
                return res.status(500).json({
                    status: false,
                    message: 'Failed to fetch settings'
                });
            }
        } catch (error) {
            console.error('Error fetching settings:', error);
            return res.status(500).json({
                status: false,
                message: 'An error occurred while fetching settings.',
                error
            });
        }
    }

}

module.exports = new SettingsController();
module.exports.upload = upload; // Export upload middleware
