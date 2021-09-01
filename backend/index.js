const express = require('express');
const mongo = require('mongodb');
const cors = require('cors');
const data = require('./data');
const config = require('./config');

const Category = require('../backend/model/categoryModel');
const Subject = require('../backend/model/subjectModel');
const Tag = require('../backend/model/tagModel');

const PORT = process.env.PORT || 3001;
const app = express();

const mongodbUrl = config.MONGODB_URL;
// const MongoClient = mongo.MongoClient;
// const client = new MongoClient(mongodbUrl, { 
//     useNewUrlParser: true
//  });

app.use(cors());
// API endpoints

app.get('/api/v1/categories', (req, res) => {
    console.log("comming!");
    console.log(Category.find());
    return res.send(data.categories);
});

app.get('/api/v1/subjects', (req, res) => {
    return res.send(data.subjects);
});

app.get('/api/v1/tags', (req, res) => {
    return res.send(data.tags);
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    console.log(`CORS-enabled web server listening on port ${PORT}`)
});