const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define("people", {
    people_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    f_name: {
        type: Sequelize.STRING
    },
    l_name: {
        type: Sequelize.STRING
    },
    org_name: {
        type: Sequelize.STRING
        },
    email: {
        field: 'email',
        type: Sequelize.STRING
        },
    phone_num: {
        type: Sequelize.STRING
        },
    usr_category: {
        type: Sequelize.STRING
        },
    created: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
    }, {
        timestamps: false
    
});
