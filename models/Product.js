const { DataTypes } = require('sequelize');

const ProductModel = (sequelize, Sequelize) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Product name cannot be empty" //Custom message
                }
            }
        },
        description: {
            type: DataTypes.TEXT, 
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2), // Precision 10, scale 2
            allowNull: false,
            validate: {
                isDecimal: {
                    msg: "Price must be a decimal number"
                },
                min: {
                    args: [0],
                    msg: "Price cannot be negative"
                }
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: true, // Can be null if we use onDelete: SET NULL
            //The foreign key constraint is added in db/index.js
        },
    }, {
        timestamps: true, // Add createdAt and updatedAt columns
        // We can add indexes here if needed:
        indexes: [
            {
                fields: ['categoryId'], // Index for filtering by category
            },
        ],
    });

    return Product;
};

module.exports = ProductModel;
