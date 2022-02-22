const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define("products", {
    product_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    version: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
        },
    vnd_id: {
        type: Sequelize.INTEGER
        },   
    created: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
    }, {
        timestamps: false
    
});
