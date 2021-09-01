const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
    id: {type: String, required: true},
    subject: {type: String, required: true},
    category_id: {type: String, required: true}
})

const subjectModel = mongoose.model("Subject", subjectSchema);

module.exports = subjectModel;