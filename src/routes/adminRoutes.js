const express = require('express');
const adminController = require('../controllers/admin/adminController'); 
const router = express.Router();
// Define routes
router.get('/register', adminController.register);  
router.get('/login', adminController.login);    
router.get('/reset-password', adminController.reset_password);  
router.get('/dashboard', adminController.dashboard);   
router.get('/sliders', adminController.sliders);   
router.get('/add-sliders', adminController.add_sliders);   
router.get('/edit-sliders', adminController.edit_sliders); 
router.get('/blogs', adminController.blogs);
router.get('/add-blogs', adminController.add_blogs);
router.get('/edit-blogs', adminController.edit_blogs); 
router.get('/brands', adminController.brands);
router.get('/add-brands', adminController.add_brands);
router.get('/edit-brands', adminController.edit_brands); 
router.get('/faqs', adminController.faqs);
router.get('/add-faqs', adminController.add_faqs);
router.get('/edit-faqs', adminController.edit_faqs); 
router.get('/testimonials', adminController.testimonials);
router.get('/add-testimonials', adminController.add_testimonials);
router.get('/edit-testimonials', adminController.edit_testimonials); 
router.get('/categories', adminController.categories);
router.get('/add-categories', adminController.add_categories);
router.get('/settings', adminController.settings);
router.get('/change-password', adminController.change_password);
router.get('/products', adminController.products); 
router.get('/add-products', adminController.add_products); 
router.get('/teams', adminController.teams);
router.get('/add-teams', adminController.add_teams);
router.get('/edit-teams', adminController.edit_teams); 
//Roles
router.get('/add-roles', adminController.add_roles);
router.get('/roles', adminController.roles);
router.get('/edit-roles', adminController.edit_roles); 
//Users
router.get('/users', adminController.users);
router.get('/add-users', adminController.add_users);
router.get('/edit-users', adminController.edit_users);
router.get('/activity_users', adminController.user_activity);
router.get('/profile-update', adminController.profile_update);
//appointments
router.get('/appointments', adminController.appointments);
router.get('/user_appointments', adminController.user_appointments);
router.get('/appointment_pay', adminController.appointment_popup_payment);
router.get('/appointment-booked', adminController.appointment_booked);
router.get('/user-appointment-details', adminController.user_appointment_details);
//Deit package

router.get('/dietpackages', adminController.dietpackages);
router.get('/add-dietpackages', adminController.add_dietpackages);
router.get('/edit-dietpackages', adminController.edit_dietpackages);

router.get('/certifications', adminController.certifications);
router.get('/add-certifications', adminController.add_certifications);
router.get('/edit-certifications', adminController.edit_certifications); 
module.exports = router;
