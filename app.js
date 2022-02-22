const express = require('express');
const Communications = require('./models/communications');
const People = require('./models/people');
const Products = require('./models/products');
const People_Communications = require('./models/people_communications');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

const app = express();

People.belongsToMany(Communications, {
    through: "People_Communications",
    //as: "Communications",
    //foreignKey: "people_id"
  });
Communications.belongsToMany(People, {
    through: "People_Communications",
    //foreignKey: "communication_id",
    //as: "People"
});

app.get('/api/comms', function(request, response) {
// This is a template for making a Where clause in Sequelize
    let filter = {};
    let { q } = request.query;

    if (q) {
        filter = {
            where: {
                notes: {
                    [Op.like]: `${q}%`
                }
            }
        };

    }
    Communications.findAll(filter).then((comms) => {
        response.json(comms);
    });
});

app.get('/api/comms/:id', function(request, response) {
    let { id } = request.params;
    
    Communications.findByPk(id).then((comm) => {
        if (comm) {
        response.json(comm);
    } else {
        response.status(404).send();
    }
    
    });
});

app.get('/api/people/:id', function(request, response) {
    let { id } = request.params;
    
    People.findByPk(id, {
        include: [ Communications], 
    }).then((people) => {
        if (people) {
        response.json(people);
    } else {
        response.status(404).send();
    }
    
    });
});

app.listen(8000);
