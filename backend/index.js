const express = require('express');
const mongoose = ('mongoose');
// const data = require('./data')

const PORT = process.env.PORT || 3301;

const app = express();
// app.get('api/v1/categories', (req, res) => {
//     return res.send(categories);
// })
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})