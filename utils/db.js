const mongoose = require('mongoose');
const { db } = require('../config');

module.exports = {
    init: () => {
        const dbOptions = {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: false,
            poolSize: 5,
            family: 4
        };

        mongoose.connect(db, dbOptions);
        mongoose.set('useFindAndModify', false);

        mongoose.connection.on('connected', () => {
            console.log('Mongoose connection successfully opened!');
        });

        mongoose.connection.on('err', err => {
            console.log(`'Mongoose connection error: ' ${err.stack}`);
        });

        mongoose.connection.on('disconnected', () => {
            console.log('Mongoose connection disconnected');
        });

    }
};