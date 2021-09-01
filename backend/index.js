const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const cors = require('cors');
const config = require('./config');
const PORT = process.env.PORT || 3001;
const app = express();
const mongodbUrl = config.MONGODB_URL;

// MongoDB connection

app.use(cors());

MongoClient.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, async (err, client) => {
    if (err) {
        return console.log(err);
    }

    const db = client.db('dropdownList');
    const categoryCourses = db.collection('categories');
    const subjectCourses = db.collection('subjects');
    const tagCourses = db.collection('tags');
    
    var categories = [];
    await categoryCourses.find().toArray((err, results) => {
        categories = results;
    });

    var subjects = [];
    await subjectCourses.find().toArray((err, results) => {
        subjects = results;
    });

    var tags = [];
    await tagCourses.find().toArray((err, results) => {
        tags = results;
    });

    // API endpoints
    
    app.get('/api/v1/categories', (req, res) => {
        return res.send(categories);
    });
    
    app.get('/api/v1/subjects', (req, res) => {
        return res.send(subjects);
    });
    
    app.get('/api/v1/tags', (req, res) => {
        return res.send(tags);
    });
    console.log(`MongoDB Connected: ${mongodbUrl}`);
});


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
    console.log(`CORS-enabled web server listening on port ${PORT}`)
});