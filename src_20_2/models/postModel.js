module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        banner_image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    });

    // Define associations
    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: 'user_id', // foreign key in the Post model
            as: 'user', // Alias to use when accessing associated User
        });
    };

    return Post;
};
