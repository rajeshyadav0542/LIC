module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      slug: {
        type: DataTypes.STRING,
        allowNull: true,
        // unique: true,  // Ensures slug values are unique
      },
      parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true, // Allow null for root categories
        references: {
          model: 'Categories', // Reference the categories table itself
          key: 'id',
        },
        onDelete: 'SET NULL',  // When a parent is deleted, set child parent_id to NULL
        onUpdate: 'CASCADE',   // When the parent id is updated, update the child parent_id
      },
      status: {
        type: DataTypes.INTEGER,
        defaultValue: 1,  // Default status is active
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,  // Allow image to be null (optional for some categories)
      },
    }, {
      tableName: 'categories',  // Specify table name if it's different from default
      timestamps: true,         // Enables createdAt and updatedAt
    });
  
    // Set up the self-referencing relationship
    Category.belongsTo(Category, { 
      foreignKey: 'parent_id', 
      as: 'parentCategory',  // Unique alias for the parent category relationship
      onDelete: 'SET NULL',  // Ensure child rows have NULL parent_id when parent is deleted
      onUpdate: 'CASCADE',   // Automatically update child rows when parent id is updated
    });
    
    Category.hasMany(Category, {
      foreignKey: 'parent_id',
      as: 'subcategories',  // Unique alias for the subcategories relationship
    });
  
    return Category;
  };
  