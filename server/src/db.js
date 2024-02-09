const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/feedback');

const Table = mongoose.model('users', {
    name: String,
    email: String,
    phone: String,
    message: String
});

const ObjectId = mongoose.Types.ObjectId;

module.exports = { Table, ObjectId };