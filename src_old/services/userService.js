const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const crypto = require("crypto");
const menuConfig = require("../config/menuConfig");
const userMenuConfig = require("../config/userMenuConfig");
const {filterMenu} = require("../helpers/menuFilter");
const {userFilter} = require("../helpers/menuFilter");
const SECRET_KEY = process.env.SECRET_KEY;
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
const { Role, Permission, User } = require('../models');
const { console } = require('inspector');
const { Op } = require('sequelize');
exports.register = async ({ name, email, password, phone, roleId }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.User.create({
        name, email, password: hashedPassword, phone: phone ?? '', profile_img: '', age: '',
        gender: '',
        role: roleId ? 2 : 3,
        roleId: roleId
    });
    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '7d' });
    const loginDetails = {
        user_id: user.id, // Assuming result contains userId
        // ipAddress: req.ip, // Get IP address from request
        ip_address: ' ',
        loginTime: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) ,   
    };

    await db.ActivityLogin.create(loginDetails);


    return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        profile_img: user.profile_img ? process.env.PUBLIC_PATH_IMG + user.profile_img : '',
        token,
    };

};

exports.login = async ({ email, password }) => {

    const user = await db.User.findOne({
        where: {
          [Op.or]: [
            { email },
            { phone:email }
          ]
        }
      });

    if (!user) {
        throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '7d' });
    const userRoleId = user.roleId ?? 0;
    const roles = await Role.findByPk(userRoleId);
    // if (!role) {
    //   return res.status(403).json({ status:false,message: 'Role not found or inactive or Access denied' });
    // }
    if (!roles) {
        var filteredMenu = userFilter(userMenuConfig, []);
        // var filteredMenu = [];
    } else {
        const permissions = await Permission.findAll({
            where: { id: roles.permissionId ?? '' },
        });
        console.log("userPermissions2222222====",permissions);
        const userPermissions = JSON.parse(permissions.map(permission => permission.name));
        console.log("userPermissions====",userPermissions);
        var filteredMenu = filterMenu(menuConfig, userPermissions);
    }

    const now = new Date();
    console.log("now======",user);
    const loginDetails = {
        user_id: user.id, // Assuming result contains userId
        // ipAddress: req.ip, // Get IP address from request
        ip_address: '  ',
        loginTime: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }) ,   
    };

    await db.ActivityLogin.create(loginDetails);

    return {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        profile_img: user.profile_img ? process.env.PUBLIC_PATH_IMG + user.profile_img : '',
        token,
        menu: filteredMenu
    };

};

exports.changePassword = async (userId, oldPassword, newPassword) => {
    try {
        // Fetch the user from the database
        const user = await db.User.findByPk(userId);

        if (!user) {
            return { success: false, message: 'User not found' };
        }

        // Verify old password
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return { success: false, message: 'Old password is incorrect' };
        }

        // Hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);

        // Update the password in the database
        user.password = hashedPassword;
        await user.save();

        return { success: true };
    } catch (error) {
        console.error('Error in changePassword:', error.message);
        throw new Error('An error occurred while changing the password');
    }
};

exports.updateProfile = async (userId, updatedData, file) => {
    try {
        // Fetch the user by primary key
        const user = await db.User.findByPk(userId);
        if (!user) {
            return { success: false, message: 'User not found' };
        }
        if (file) {
            updatedData.profile_img = `/uploads/profile/${file.filename}`;
        }
        console.log("updatedData", updatedData);
        // Use a for...of loop to handle async operations properly
        for (const key of Object.keys(updatedData)) {
            if (user.dataValues.hasOwnProperty(key)) {
                if (key === 'password') { 
                    const hashedPassword = await bcrypt.hash(updatedData[key], 10); 
                    user.password = hashedPassword;
                } else {
                    user[key] = updatedData[key];
                }
            }
        }
         
        // Save the updated user object to the database
        await user.save();

        console.log(user);

        return { success: true, message: 'Profile updated successfully', data: user };
    } catch (error) {
        console.error('Error in updateProfile:', error.message);
        return { success: false, message: 'An error occurred while updating the profile' };
    }
};

exports.temp_register = async ({ phone }) => {
    // const otp = crypto.randomInt(1000, 9999);
    const otp = 1234;
    console.log("otp===", otp);
    let temp = await db.TempUser.findOne({ where: { phone } });
    if (temp) {
        await temp.update({ temp_otp: otp });
    } else {
        temp = await db.TempUser.create({ phone: phone ?? '', temp_otp: otp });
    }
    return {
        phone: temp.phone,
        otp,
    };
};


exports.temp_verify = async ({ phone, otp }) => {
    const temp = await db.TempUser.findOne({ where: { phone, temp_otp: otp } });
    if (temp) {
        await temp.update({ verify_status: 1 });
        return {
            id: temp.id,
            phone: temp.phone,
            verify_status: temp.verify_status,
        };
    }
    return null;
};


exports.get = async ({ id, page = 1, limit = 50, search = '', sortBy = 'createdAt', order = 'DESC' } = {}) => {
    try {
        const whereClause = id
            ? { id }
            : search
                ? {
                    name: {
                        [db.Sequelize.Op.like]: `%${search}%`, // Adjust `name` field as needed for filtering
                    },
                    //   role: {
                    //     [db.Sequelize.Op.ne]: 3, // Check if role is not equal to 3
                    //   }
                }
                : {
                    // role: {
                    //     [db.Sequelize.Op.ne]: 3, // Check if role is not equal to 3
                    //   }
                }

        const offset = (page - 1) * limit;

        const users = await db.User.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });
        console.log();

        const userIds = users.rows.map(user => user.id);

        // Fetch roles for the users
        const roles = await db.Role.findAll({
            where: {
                id: userIds
            },
            attributes: ['id', 'name'],
        });

        // Create a map of roles by userId
        const roleMap = roles.reduce((map, role) => {
            map[role.id] = role.name;
            return map;
        }, {});

        const result = users.rows.map(user => ({
            ...user.toJSON(),
            roleName: roleMap[user.roleId] || 'Customer',
            imageUrl: `${PUBLIC_PATH_IMG}${user.profile_img}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: users.count,
            totalPages: Math.ceil(users.count / limit),
        };

    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }


};
exports.activity_get = async ({ id, page = 1, limit = 50, search = '', sortBy = 'createdAt', order = 'DESC' } = {}) => {
    try {
        let userIds = [];

        // If search is provided, find matching users and get their IDs
        if (search) {
            const users = await db.User.findAll({
                where: { name: { [db.Sequelize.Op.like]: `%${search}%` } },
                attributes: ['id'],
            });

            userIds = users.map(user => user.id);
        }

        const whereClause = id
            ? { id }
            : userIds.length
                ? { user_id: userIds } // Filter activity logs by found user IDs
                : {};

        const offset = (page - 1) * limit;

        // Fetch activity logs
        const activities = await db.ActivityLogin.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const activityUserIds = activities.rows.map(activity => activity.user_id);

        // Fetch user details separately
        const users = await db.User.findAll({
            where: { id: activityUserIds },
            attributes: ['id', 'name', 'email', 'phone', 'roleId'],
        });

        const userMap = users.reduce((map, user) => {
            map[user.id] = user;
            return map;
        }, {});

        const activityRoleIds = users.map(user => user.roleId);

        // Fetch roles separately
        const roles = await db.Role.findAll({
            where: { id: activityRoleIds },
            attributes: ['id', 'name'],
        });

        const roleMap = roles.reduce((map, role) => {
            map[role.id] = role.name;
            return map;
        }, {});

        // Merge data
        const result = activities.rows.map(activity => ({
            ...activity.toJSON(),
            name: userMap[activity.user_id]?.name || null,
            email: userMap[activity.user_id]?.email || null,
            phone: userMap[activity.user_id]?.phone || null,
            role: roleMap[userMap[activity.user_id]?.roleId] || 'Customer',
            imageUrl: `${PUBLIC_PATH_IMG}${activity.profile_img}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: activities.count,
            totalPages: Math.ceil(activities.count / limit),
        };

    } catch (error) {
        console.error(error.message);
        throw error;
    }
};

