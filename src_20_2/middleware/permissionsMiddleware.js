const { Role, Permission,User } = require('../models');  
const permissionsMiddleware = (requiredPermissions) => {
   
  return async (req, res, next) => {
    try {
       
     const userId = req.user.id??0;  
     const users= await User.findByPk(userId);
      const userRoleId = users.roleId??0;   
      const role = await Role.findByPk(userRoleId);
      if (!role) {
        return res.status(403).json({ status:false,message: 'Role not found or inactive or Access denied' });
      }
 
      const permissions = await Permission.findAll({
        where: { id: role.permissionId }, 
      });
      
      const userPermissions = JSON.parse(permissions.map(permission => permission.name));
       
      const hasPermission = requiredPermissions.some(permission => 
        userPermissions.includes(permission)
      ); 

      if (hasPermission) {
        return next();  
      }

      return res.status(501).json({ status:false, message: 'Forbidden: You do not have permission to perform this action' });

    } catch (error) {
      console.error(error);
      return res.status(500).json({ status:false,message: 'Internal server error' });
    }
  };
};

module.exports = permissionsMiddleware;
