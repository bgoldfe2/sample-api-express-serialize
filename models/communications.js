const sequelize = require('./../database/sequelize');
const Sequelize = require('sequelize');

module.exports = sequelize.define("communications", {
    communication_id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    communication_type: {
        type: Sequelize.STRING
    },
    notes: {
        //field: 'notes',
        type: Sequelize.STRING
    },
    link_url: {
        type: Sequelize.STRING
        },
    comm_dtg: {
        type: 'TIMESTAMP'
    },
    created: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
    }, {
        timestamps: false 
    
});
