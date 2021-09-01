const express = require("express");

const PORT = process.env.PORT || 3301;

const app = express();



app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
})