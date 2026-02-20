const faqService = require('../services/faqService'); 
const sliderService = require('../services/sliderService');
const testimonialService = require('../services/testimonialService');
const blogService = require('../services/blogService');
const teamService = require('../services/teamService');
const brandService = require('../services/brandService');
const certificationService = require('../services/certificationService');
const settingsService = require('../services/settingsService');
const orderService = require('../services/orderService');
const Razorpay = require("razorpay");
const crypto = require("crypto");
exports.faq_get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;

        const data = await faqService.get( { id, page, limit, search, sortBy, order });

        res.status(200).json({ status: true, message: 'faq get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

exports.slider_get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await sliderService.get({ id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'Slider get successfully', ...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

exports.testimonial_get = async (req, res) => {
    try {
       const { id, page, limit, search, sortBy, order } =req.query;
        const data = await testimonialService.get({ id, page, limit, search, sortBy, order } );
        res.status(200).json({ status: true, message: 'testimonial get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

exports.blog_get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await blogService.get({ id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'blog get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.team_get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await teamService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'team get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

exports.brand_get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await brandService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'brand get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};
exports.certificate_get = async (req, res) => {
    try {
        const { id, page, limit, search, sortBy, order } = req.query;
        const data = await certificationService.get( { id, page, limit, search, sortBy, order });
        res.status(200).json({ status: true, message: 'brand get successfully',...data });
    } catch (error) {
        res.status(400).json({ status: false, message: error.message });
    }
};

exports.fetchSettings =async (req, res) => {
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
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
  


exports.create_order= async (req, res) => {
    try {
      const { amount, currency,token } = req.body;
  
      const options = {
        amount: amount * 100, // Convert to paisa
        currency,
        receipt: `receipt_${Date.now()}`,
      };
  
      const order = await razorpay.orders.create(options);
          order.token=token;
         await orderService.order_create(order);
         res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Verify payment
  exports.verify_payment=async  (req, res) => {
    const { order_id, payment_id, signature ,token} = req.body;
  
    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(order_id + "|" + payment_id)
      .digest("hex");
    if (expectedSignature === signature) {
        await orderService.verify_update({ order_id, payment_id, signature ,token});
      res.json({ status: true, message: "Payment verified successfully!" });
    } else {
      res.status(400).json({ status: false, message: "Invalid payment signature!" });
    }
  };
  