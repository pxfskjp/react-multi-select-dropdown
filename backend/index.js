const express = require('express');
const mongoose = ('mongoose');
const data = require('./data');
const cors = require('cors');

const PORT = process.env.PORT || 3301;
const app = express();

app.use(cors())

app.get('/api/v1/categories', (req, res) => {
    return res.send(data.categories);
});

app.get('/api/v1/subjects', (req, res) => {
    return res.send(data.subjects);
});

app.get('/api/v1/tags', (req, res) => {
    return res.send(data.tags);
});

app.listen(3001, () => {
    console.log(`Server listening on ${PORT}`);
    console.log(`CORS-enabled web server listening on port ${PORT}`)
});