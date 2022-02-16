const express = require('express');
const Communications = require('./models/communications');
const Sequelize = require('sequelize');


const app = express();

app.get('/api/comms', function(request, response) {
    Communications.findAll().then((comms) => {
        response.json(comms);
    })
});


app.listen(8000);
