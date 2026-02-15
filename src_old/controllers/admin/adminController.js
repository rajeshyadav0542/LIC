
const db=require('../../models');
exports.login = async (req, res) => {
    res.render('auth/login', { layout: '' });
}
exports.register = async (req, res) => {
    res.render('dashboard', { layout: '' });
}
exports.reset_password = async (req, res) => {
    const token = req.query.token; 
    const email = req.query.email; 
    res.render('auth/reset-password', { layout: '',token,email });
}
exports.dashboard = async (req, res) => {
   
    res.render('dashboard', { layout: '' });
}
exports.sliders = async (req, res) => {
    res.render('sliders/get', { layout: '' });
}
exports.add_sliders = async (req, res) => {
    res.render('sliders/add', { layout: '' });
}
exports.edit_sliders = async (req, res) => {
    const id = req.query.id; 
    res.render('sliders/edit', { layout: '' ,id:id});
}
exports.blogs = async (req, res) => {
    res.render('blogs/get', { layout: '' });
}
exports.add_blogs = async (req, res) => {
    res.render('blogs/add', { layout: '' });
}
exports.edit_blogs = async (req, res) => {
    const id = req.query.id; 
    res.render('blogs/edit', { layout: '' ,id:id});
}
exports.brands = async (req, res) => {
    res.render('brands/get', { layout: '' });
}
exports.add_brands = async (req, res) => {
    res.render('brands/add', { layout: '' });
}
exports.edit_brands = async (req, res) => {
    const id = req.query.id; 
    res.render('brands/edit', { layout: '' ,id:id});
}

exports.faqs = async (req, res) => {
    res.render('faqs/get', { layout: '' });
}
exports.add_faqs = async (req, res) => {
    res.render('faqs/add', { layout: '' });
}
exports.edit_faqs = async (req, res) => {
    const id = req.query.id; 
    res.render('faqs/edit', { layout: '' ,id:id});
}

exports.testimonials = async (req, res) => {
    res.render('testimonials/get', { layout: '' });
}
exports.add_testimonials = async (req, res) => {
    res.render('testimonials/add', { layout: '' });
}
exports.edit_testimonials = async (req, res) => {
    const id = req.query.id; 
    res.render('testimonials/edit', { layout: '' ,id:id});
}
exports.categories = async (req, res) => {
    res.render('categories/get', { layout: '' });
}
exports.add_categories = async (req, res) => {
    res.render('categories/add', { layout: '' });
}

exports.settings = async (req, res) => {
    res.render('settings/upsert', { layout: '' });
}
exports.change_password = async (req, res) => {
    res.render('users/change-password', { layout: '' });
}

exports.add_products = async (req, res) => {
    res.render('products/add', { layout: '' });
}
exports.products = async (req, res) => {
    res.render('products/get', { layout: '' });
}
exports.teams = async (req, res) => {
    res.render('teams/get', { layout: '' });
}
exports.add_teams = async (req, res) => {
    res.render('teams/add', { layout: '' });
}
exports.edit_teams = async (req, res) => {
    const id = req.query.id; 
    res.render('teams/edit', { layout: '' ,id:id});
}
exports.add_roles = async (req, res) => {
    res.render('roles/add', { layout: '' });
}
exports.roles = async (req, res) => {
    res.render('roles/get', { layout: '' });
}
exports.edit_roles = async (req, res) => {
    const id = req.query.id; 
    res.render('roles/edit', { layout: '' ,id:id});
}

//Users
exports.users = async (req, res) => {
    res.render('users/get', { layout: '' });
}

exports.add_users = async (req, res) => {
    res.render('users/add', { layout: '' });
}
exports.edit_users = async (req, res) => {
    const id = req.query.id; 
    res.render('users/edit', { layout: '' ,id:id});
}
exports.user_activity = async (req, res) => {
    res.render('users/activity_get', { layout: '' });
}

exports.profile_update = async (req, res) => {
    res.render('users/profile-update', { layout: '' });
}




exports.add_dietpackages = async (req, res) => {
    res.render('dietpackages/add', { layout: '' });
}
exports.dietpackages = async (req, res) => {
    res.render('dietpackages/get', { layout: '' });
}
exports.edit_dietpackages = async (req, res) => {
    const id = req.query.id; 
    res.render('dietpackages/edit', { layout: '' ,id:id});
}

exports.certifications = async (req, res) => {
    res.render('certifications/get', { layout: '' });
}
exports.add_certifications = async (req, res) => {
    res.render('certifications/add', { layout: '' });
}
exports.edit_certifications = async (req, res) => {
    const id = req.query.id; 
    res.render('certifications/edit', { layout: '' ,id:id});
}

exports.appointments = async (req, res) => {
    res.render('appointments/get', { layout: '' });
}

exports.user_appointments = async (req, res) => {
    res.render('appointments/user_get', { layout: '' });
}
exports.user_appointment_details = async (req, res) => {
    const appointmentToken=req.query.token??'';
    res.render('appointments/preview', { layout: '', appointmentToken:appointmentToken});
}
exports.appointment_popup_payment = async (req, res) => {
    const token = req.query.token??''; 
    const appointmentData = await db.Appointment.findOne({ 
        where: { appointmentToken: token }
    });

    if (!appointmentData) {
        return res.status(404).send("Invalid token or payment settings not found");
    }
    let paydetails = await db.Setting.findOne({ 
        where: { key:appointmentData.mode_consultation }
    });
    if(!paydetails){
        paydetails={
            id: 17,
            key: 'audiocall',
            value: '1499',
            status: 1,
        }
    }
    res.render('appointments/popup_payment', { layout: '' ,token:token,paydetails,appointmentData});
}

exports.appointment_booked = async (req, res) => {
    res.render('appointments/appointment_booked', { layout: ''});
}
