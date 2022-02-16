const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define("communications", {
    id: {
        field: 'communication_id',
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    c_type: {
        field: 'communicate_type',
        type: Sequelize.STRING
    },
    notes: {
        field: 'notes',
        type: Sequelize.STRING
    },
    link: {
        field: 'link_url',
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
