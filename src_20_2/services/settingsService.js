const db  = require('../models');
const fs = require('fs');
const path = require('path');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
class SettingsService {
    // Method to handle file upload and settings creation or update
    async upsertSettings(data) {
        const { email, phone, address, facebook_link, logoFile, faviconFile,instagram_link ,youtube_link,twitter_link,working_time,privacy_policy,terms_condition,refund_policy,disclaimer,linkedin_link} = data;
        // Prepare logo and favicon URLs if files are uploaded
        let logoUrl = null;
        let faviconUrl = null;
    
        if (logoFile) {
            logoUrl = `/uploads/settings/${logoFile.filename}`;
        }
        if (faviconFile) {
            faviconUrl = `/uploads/settings/${faviconFile.filename}`;
        }
        const settings = [
            { key: 'logo', value: logoUrl },
            { key: 'email', value: email },
            { key: 'phone', value: phone },
            { key: 'address', value: address },
            { key: 'facebook_link', value: facebook_link },
            { key: 'instagram_link', value: instagram_link },
            { key: 'youtube_link', value: youtube_link },
            { key: 'twitter_link', value: twitter_link },
            { key: 'working_time', value: working_time },
            { key: 'favicon', value: faviconUrl },
            { key: 'privacy_policy', value: privacy_policy },
            { key: 'terms_condition', value: terms_condition },
            { key: 'refund_policy', value: refund_policy },
            { key: 'disclaimer', value: disclaimer },
            { key: 'linkedin_link', value: linkedin_link },

        ];
        console.log("settings",settings);
    
        // Process each setting
        for (const setting of settings) {
            if (setting.value === null || setting.value === undefined || setting.value === '') {
                continue; // Skip blank values
            }
    
            const existingSetting = await db.Setting.findOne({ where: { key: setting.key } });
    
            if (existingSetting) { 
                await existingSetting.update({ value: setting.value });
            } else { 
                await db.Setting.create({ key: setting.key, value: setting.value });
            }
        }
    
        return {
            success: true,
            message: 'Settings processed successfully.'
        };
    }
    
    
    async fetchSettings() {
        try {
            const settings = await db.Setting.findAll();  // Fetch all settings from the database
            const settingsObject = {};

        settings.forEach(setting => {
            // If the setting is logo or favicon, prepend the base URL
            if (setting.key === 'logo' || setting.key === 'favicon') {
                settingsObject[setting.key] = PUBLIC_PATH_IMG + setting.value;
            } else {
                settingsObject[setting.key] = setting.value;
            }
        });
    
            return { status: true, data: settingsObject };
        } catch (error) {
            console.error('Error fetching settings from service:', error);
            throw new Error('An error occurred while fetching settings');
        }
    }
   
}

module.exports = new SettingsService();
