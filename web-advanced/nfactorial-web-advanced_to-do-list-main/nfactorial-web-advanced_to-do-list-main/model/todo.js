const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    content: {
    type: String,
    },
})
module.exports = mongoose.model('todo', todoSchema);