const Sequelize = require('sequelize');
require('dotenv').config();

// Import database configuration and models
const sequelize = require('../config/dbConfig');
const User = require('./userModel');
const ActivityLogin = require('./activityModel');
const Slider = require('./sliderModel');
const Brand = require('./brandModel');
const Testimonial = require('./testimonialModel');
const Post = require('./postModel');
const Category = require('./CategoryModel');
const Product = require('./productModel');
const Attribute = require('./attributeModel');
const AttributeValue = require('./attributeValueModel'); 
const ProductCategory = require('./productCategoryModel');
const ProductImage = require('./productImageModel');
const ProductAttribute=require('./productAttributeModel');
const Setting=require('./settingModel.js');
const Team=require('./teamModel.js');
const Faq = require('./faqModel');
const Collection=require('./collectionModel');
const Role=require('./roleModel');
const Permission=require('./permissionModel');
const ProductFilter=require('./productFilterModel');
const TempUser=require('./tempUserModel');
const Appointment=require('./appointmentModel');
const DietPackage=require('./dietPackageModel');
const Certification=require('./certificationModel');
const AppointmentPaymentDetails=require('./appointmentPayModel');

const db = {};
// Initialize Sequelize and associate models
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// Define models
db.User = User(sequelize, Sequelize.DataTypes);
db.ActivityLogin = ActivityLogin(sequelize, Sequelize.DataTypes);
db.Slider = Slider(sequelize, Sequelize.DataTypes);
db.Brand = Brand(sequelize, Sequelize.DataTypes);
db.Faq = Faq(sequelize, Sequelize.DataTypes);
db.Team = Team(sequelize, Sequelize.DataTypes);
db.Testimonial = Testimonial(sequelize, Sequelize.DataTypes); 
db.Category = Category(sequelize, Sequelize.DataTypes);
db.Post=Post(sequelize,Sequelize.DataTypes);
db.Product = Product(sequelize, Sequelize.DataTypes);
db.Attribute = Attribute(sequelize, Sequelize.DataTypes);
db.AttributeValue = AttributeValue(sequelize, Sequelize.DataTypes);
db.ProductAttribute = ProductAttribute(sequelize, Sequelize.DataTypes);
db.ProductCategory = ProductCategory(sequelize, Sequelize.DataTypes);
db.ProductImage = ProductImage(sequelize, Sequelize.DataTypes); 
db.Setting = Setting(sequelize, Sequelize.DataTypes);
db.Collection = Collection(sequelize, Sequelize.DataTypes);
db.Role = Role(sequelize, Sequelize.DataTypes);
db.Permission = Permission(sequelize, Sequelize.DataTypes);
db.ProductFilter = ProductFilter(sequelize, Sequelize.DataTypes);
db.TempUser = TempUser(sequelize, Sequelize.DataTypes);
db.Appointment = Appointment(sequelize, Sequelize.DataTypes);
db.DietPackage = DietPackage(sequelize, Sequelize.DataTypes);
db.Certification = Certification(sequelize, Sequelize.DataTypes);
db.AppointmentPaymentDetails = AppointmentPaymentDetails(sequelize, Sequelize.DataTypes);


db.Product.belongsToMany(db.Category, { through: db.ProductCategory, foreignKey: 'product_id' });
db.Category.belongsToMany(db.Product, { through: db.ProductCategory, foreignKey: 'category_id' });
db.Product.hasMany(db.ProductImage, { foreignKey: 'product_id' });
db.ProductImage.belongsTo(db.Product, { foreignKey: 'product_id' });
db.Product.hasMany(db.ProductAttribute, { foreignKey: 'product_id' });
db.ProductAttribute.belongsTo(db.Product, { foreignKey: 'product_id' });
db.Attribute.hasMany(db.AttributeValue, { foreignKey: 'attribute_id' });
db.AttributeValue.belongsTo(db.Attribute, { foreignKey: 'attribute_id' });
db.ProductAttribute.belongsTo(db.Attribute, { foreignKey: 'attribute_id' });
db.ProductAttribute.belongsTo(db.AttributeValue, { foreignKey: 'attribute_value_id' });
db.ProductImage.belongsTo(db.ProductAttribute, { foreignKey: 'product_attribute_id' });
// Export db object containing all models and associations
module.exports = db;
