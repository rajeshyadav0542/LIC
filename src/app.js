const express = require('express');
const path= require('path');
const bodyParser = require('body-parser'); 
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const activityRoutes = require('./routes/activityRoutes');
const sliderRoutes = require('./routes/sliderRoutes');
const brandRoutes = require('./routes/brandRoutes');
const testimonialRoutes = require('./routes/testimonialRoutes');
const blogRoutes = require('./routes/blogRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const attributeRoutes = require('./routes/attributeRoutes');
const attributeValueRoutes = require('./routes/attributeValueRoutes');
const productRoutes = require('./routes/productRoutes');
const settingsRoutes = require('./routes/settingsRoutes');
const faqRoutes = require('./routes/faqRoutes');
const teamRoutes = require('./routes/teamRoutes');
const collectionRoutes = require('./routes/collectionRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const roleRoutes = require('./routes/roleRoutes');
const adminRoutes = require('./routes/adminRoutes');
const dietPackageRoutes = require('./routes/dietPackageRoutes');
const certificationRoutes = require('./routes/certificationRoutes');
const webRoutes = require('./routes/webRoutes');
const { swaggerUi, swaggerJson } = require('./swagger'); 
const handlebars = require('express-handlebars');
const cors = require('cors');
dotenv.config(); 
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());  

app.use(bodyParser.json());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use((req, res, next) => {
  const protocol = req.protocol; // HTTP or HTTPS
  const host = req.get('host'); // Hostname with port
  // res.locals.baseUrl = `${protocol}://${host}`;  
  res.locals.baseUrl = `${process.env.BASE_URL}`;
  res.locals.defaultUserImg = `${process.env.DEFAULTUSERIMG}`;  
  next();
});
app.get('/api', (req, res) => {
    res.send('Hello, World!');
  }); 
app.set('views', path.join(__dirname, 'views'));
 
app.engine('handlebars', handlebars.engine({ 
    defaultLayout: 'main',  
    partialsDir: path.join(__dirname, 'views', 'partials'), 
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true
    },
})); 
app.set('view engine', 'handlebars');
 

const authenticateJWT = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ status:true,message: 'Access token missing or invalid' });
  }
  jwt.verify(token.split(' ')[1], process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({status:true, message: err.message });
    }
    req.user = user;
    next();
  });
};  

app.use('/api/users', authRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', authenticateJWT,userRoutes);
app.use('/api/activities',authenticateJWT, activityRoutes);
app.use('/api/sliders',authenticateJWT, sliderRoutes);
app.use('/api/brands',authenticateJWT, brandRoutes);
app.use('/api/testimonials',authenticateJWT, testimonialRoutes);
app.use('/api/blogs',authenticateJWT, blogRoutes);
app.use('/api/categories',authenticateJWT, categoryRoutes);
app.use('/api/attributes',authenticateJWT, attributeRoutes);
app.use('/api/attribute-values',authenticateJWT, attributeValueRoutes);
app.use('/api/products',authenticateJWT, productRoutes);
app.use('/api/faqs',authenticateJWT, faqRoutes);
app.use('/api/teams',authenticateJWT, teamRoutes);
app.use('/api/collections',authenticateJWT, collectionRoutes);
app.use('/api/settings',authenticateJWT, settingsRoutes);
app.use('/api/roles',authenticateJWT, roleRoutes);
app.use('/api/user_appointments', appointmentRoutes);
app.use('/api/appointments',authenticateJWT, appointmentRoutes);
app.use('/api/dietpackages',authenticateJWT, dietPackageRoutes);
app.use('/api/certifications',authenticateJWT, certificationRoutes);
app.use('/api/web', webRoutes);

app.use('/user', adminRoutes);
app.use('/admin', adminRoutes);
app.use('/', adminRoutes);
// app.get('/dashboard', (req, res) => {
//   res.render('dashboard', {  // Don't include the full path; just the view name
//       title: 'Admin Dashboard',
//   });
// });
module.exports = app;
