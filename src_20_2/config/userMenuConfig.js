// userMenuConfig.js
const userMenuConfig =  [
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
      "permissions": [],
      "children": [
        {
          "title": "My Appointment",
          "link": "/user/user_appointments",
          "permissions": []
        }
      ]
    },
    
  ];
  
  module.exports = userMenuConfig;
  