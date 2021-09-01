const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    id: {type: String, required: true},
    category: {type: String, required: true}
})

const categoryModel = mongoose.model("Category", categorySchema);

module.exports = categoryModel;