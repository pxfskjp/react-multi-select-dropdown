const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
    id: {type: String, required: true},
    tag: {type: String, required: true},
    subject_id: {type: String, required: true}
})

const tagModel = mongoose.model("Tag", tagSchema);

module.exports = tagModel;