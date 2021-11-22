const express = require('express');
const app = express();
const mongos = require('mongoose');

let userModels = new mongos.Schema({
    _id: mongos.Schema.Types.ObjectId,
    name: String,
    email: String,
    address: String

});

module.exports = mongos.model('user', userModels,'user')
