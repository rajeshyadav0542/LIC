const db = require('../models');
const PUBLIC_PATH_IMG = process.env.PUBLIC_PATH_IMG;
exports.create = async ({ name, designation, image }) => {

    const Team = await db.Team.create({ name, designation, image: image });

    return Team;

};
exports.edit = async (data) => {
    try {
        const { id, name, designation, image } = data;

        const Team = await db.Team.findByPk(id);
        if (!Team) {
            throw new Error('Team not found');
        }

        const updatedData = {};

        if (name) updatedData.name = name;
        if (designation) updatedData.designation = designation;
        if (image) updatedData.image = image;

        if (Object.keys(updatedData).length === 0) {
            throw new Error('No data provided to update');
        }

        // Update the Team with the non-empty fields
        await db.Team.update(updatedData, { where: { id } });

        // Return the updated Team data (optional)
        return {
            status: true,
            message: 'Team updated successfully',
            updatedTeam: updatedData,
        };
    } catch (err) {
        throw new Error('Failed to update Team: ' + err.message);
    }


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
              }
            : {};

        const offset = (page - 1) * limit; // Calculate offset for pagination

        const Teams = await db.Team.findAndCountAll({
            where: whereClause,
            limit: parseInt(limit),
            offset: parseInt(offset),
            order: [[sortBy, order]],
        });

        const result = Teams.rows.map(Team => ({
            ...Team.toJSON(),
            imageUrl: `${PUBLIC_PATH_IMG}${Team.image}`,
        }));

        return {
            data: result,
            currentPage: parseInt(page),
            totalItems: Teams.count,
            totalPages: Math.ceil(Teams.count / limit),
        };
    } catch (error) {
        console.error(error.message);
        throw error; // Handle the error appropriately in the caller function
    }

     
};
exports.delete = async (req) => {

    await db.Team.destroy({
        where: { id: req.body.id }
    });
    return true;
};
