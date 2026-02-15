// menuConfig.js
const menuConfig =  [
    {
      "title": "Dashboard",
      "icon": "fas fa-tachometer-alt fs-16",
      "link": "/dashboard",
      "permissions": []
    },
    {
      "title": "Appointment",
      "icon": "fas fa-sliders-h",
      "link": "#",
      "permissions": ["appointment-read"],
      "children": [
        {
          "title": "Manage Appointment",
          "link": "/admin/appointments",
          "permissions": ["appointment-read"]
        },
        {
          "title": "My Appointment",
          "link": "/user/user_appointments",
          "permissions": []
        }
      ]
    },
    {
      "title": "Slider",
      "icon": "fas fa-sliders-h",
      "link": "#",
      "permissions": ["slider-read"],
      "children": [
        {
          "title": "Manage Slider",
          "link": "/admin/sliders",
          "permissions": ["slider-read"]
        }
      ]
    },
    {
      "title": "Brand",
      "icon": "fas fa-tags",
      "link": "#",
      "permissions": ["brand-read"],
      "children": [
        {
          "title": "Manage Brands",
          "link": "/admin/brands",
          "permissions": ["brand-read"]
        }
      ]
    },
    {
      "title": "Blog",
      "icon": "fas fa-tags",
      "link": "#",
      "permissions": ["blog-read"],
      "children": [
        {
          "title": "Manage Blogs",
          "link": "/admin/blogs",
          "permissions": ["blog-read"]
        }
      ]
    },
    {
      "title": "Teams",
      "icon": "fas fa-users",
      "link": "#",
      "permissions": ["team-read"],
      "children": [
        {
          "title": "Manage Teams",
          "link": "/admin/teams",
          "permissions": ["team-read"]
        }
      ]
    },
    {
      "title": "Certification",
      "icon": "fas fa-comment-dots",
      "link": "#",
      "permissions": ["certification-read"],
      "children": [
        {
          "title": "Manage Certifications",
          "link": "/admin/certifications",
          "permissions": ["certification-read"]
        }
      ]
    },
    {
      "title": "Testimonial",
      "icon": "fas fa-comment-dots",
      "link": "#",
      "permissions": ["testimonial-read"],
      "children": [
        {
          "title": "Manage Testimonials",
          "link": "/admin/testimonials",
          "permissions": ["testimonial-read"]
        }
      ]
    },
    {
      "title": "Faqs",
      "icon": "fas fa-question-circle",
      "link": "#",
      "permissions": ["faq-read"],
      "children": [
        {
          "title": "Manage Faqs",
          "link": "/admin/faqs",
          "permissions": ["faq-read"]
        }
      ]
    },
    {
      "title": "Users",
      "icon": "fas fa-user",
      "link": "#",
      "permissions": ["user-read"],
      "children": [
        {
          "title": "Manage Users",
          "link": "/admin/users",
          "permissions": ["user-read"]
        } 
      ]
    },
  
    {
      "title": "DietPackages",
      "icon": "fas fa-question-circle",
      "link": "#",
      "permissions": ["dietpackage-read"],
      "children": [
        {
          "title": "Manage Diet Package",
          "link": "/admin/dietpackages",
          "permissions": ["dietpackage-read"]
        },
         
      ]
    },
    {
      "title": "Settings",
      "icon": "fas fa-cog",
      "link": "#",
      "permissions": ["setting-read"],
      "children": [
        {
          "title": "Manage Settings",
          "link": "/admin/settings",
          "permissions": ["setting-read"]
        },
        {
          "title": "Manage Roles",
          "link": "/admin/roles",
          "permissions": ["role-read"]
        },
        {
          "title": "Manage Login activity",
          "link": "/admin/activity_users",
          "permissions": ["login-activity-read"]
        },
      ]
    },
  ];
  
  module.exports = menuConfig;
  