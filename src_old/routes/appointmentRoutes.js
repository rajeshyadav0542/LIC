const express = require('express');
const appointmentController = require('../controllers/appointmentController'); 
const router = express.Router();
// Define routes
router.post('/create', appointmentController.add);
router.get('/get',appointmentController.get);
router.get('/appointment_deatails',appointmentController.appointment_deatails);
router.get('/user/get',appointmentController.user_get);

module.exports = router;
