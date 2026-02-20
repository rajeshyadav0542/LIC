module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        collection_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // references: {
            //     model: 'Collections',  
            //     key: 'id',
            // },
            // onUpdate: 'CASCADE',
            // onDelete: 'CASCADE',
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        slug: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          short_description: {
            type: DataTypes.TEXT,
          },
          description: {
            type: DataTypes.TEXT,
          },
          additional_description: {
            type: DataTypes.TEXT,
          },
          sku: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            defaultValue: 0,
          },
          sale_price: {
            type: DataTypes.FLOAT,
            allowNull: true,
          },
          quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
          },
          weight: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
          },
          length: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
          },
          wide: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
          },
          tags: {
            type: DataTypes.TEXT,
            defaultValue: 0,
          },
          height: {
            type: DataTypes.FLOAT,
            defaultValue: 0,
          },
          stock_status: {
            type: DataTypes.ENUM('in_stock', 'out_of_stock', 'on_backorder'),
            defaultValue: 'in_stock',
          },
          allowCheckoutWhenOutOfStock: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
          },
          Plant: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          CBD: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          THC: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        is_attribute: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        status: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        },
    });

    // Define associations
    Product.associate = (models) => {
        Product.hasMany(models.ProductVariant, {
            foreignKey: 'product_id',
            as: 'variants',  
        });
        Product.hasMany(models.ProductImage, {
            foreignKey: 'product_id',
            as: 'images',  
        });
        Product.belongsToMany(models.Category, {
            through: models.ProductCategory,
            foreignKey: 'product_id',
            as: 'categories',
        });
        // Product.belongsTo(models.Collection, {
        //     foreignKey: 'collection_id',
        //     as: 'collection',
        // });
    };

    return Product;
};
