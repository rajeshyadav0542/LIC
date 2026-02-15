const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ name, permissions }) => {
    console.log("description",name);
    const permission = await db.Permission.create({ name:permissions});
    const Role = await db.Role.create({ name, permissionId:permission.id });
    return Role;
};
exports.edit = async (data) => {
    try {
        const { id, name, permissions } = data;
        // Find the role by ID
        const Role = await db.Role.findByPk(id);
        if (!Role) {
            throw new Error('Role not found');
        }
        // Update the role name if provided
        if (name) {
            Role.name = name;
            await Role.save();
        }
        const updatedData = {};
        if (permissions) updatedData.name = permissions;
        await db.Permission.update(updatedData, { where: { id: Role.permissionId  } });
        return {
            status: true,
            message: 'Role updated successfully',
            role: Role
        };
    } catch (err) {
        throw new Error('Failed to update Role: ' + err.message);
    }
};


exports.get = async ({ id, page = 1, limit = 50, search = '', sortBy = 'createdAt', order = 'DESC' } = {}) => {
    try {
        const whereClause = id
            ? { id }
            : search
            ? {
                  title: {
                      [db.Sequelize.Op.like]: `%${search}%`, // Adjust `name` field as needed for filtering
                  },
              }
            : {};

        const offset = (page - 1) * limit; // Calculate offset for pagination

        const Roles = await db.Role.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = await Promise.all(
            Roles.rows.map(async (Role) => {
                const permissions = await db.Permission.findAll({
                    where: { id: Role.permissionId ?? '' }, // Adjust based on your Role model's permission field
                });
        
                const userPermissions = permissions.map(permission => permission.name);
        
                return {
                    ...Role.toJSON(),
                    userPermissions, // Add the computed permissions
                    imageUrl: `${PUBLIC_PATH_IMG}${Role.image}`, // Construct the image URL
                };
            })
        );
        

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: Roles.count,
            totalPages: Math.ceil(Roles.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {

    await db.Role.destroy({
        where: { id: req.body.id }
    });
    return true;
};
