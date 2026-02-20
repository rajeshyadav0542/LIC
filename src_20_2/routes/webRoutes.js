const express = require('express'); 
const fs = require('fs');
const path = require('path');
const webController = require('../controllers/webController'); 
 
const router = express.Router();

router.get('/blog_get',webController.blog_get);
router.get('/faq_get',webController.faq_get);
router.get('/testimonial_get',webController.testimonial_get);
router.get('/slider_get',webController.slider_get);
router.get('/certificate_get',webController.certificate_get);
router.get('/static_get',webController.fetchSettings);
router.post('/create-order',webController.create_order);
router.post('/verify-payment',webController.verify_payment);

module.exports = router;
