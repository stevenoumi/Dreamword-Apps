const express = require('express');
const cors = require('cors'); 
const app = express();

app.use(cors());
app.use((req, res,next) => {
    console.log('requette reçue');
    next();
}
);
app.use((req,res) => {
    res.json({message: 'votre requette a bien été reçue'});
}
);
module.exports = app;