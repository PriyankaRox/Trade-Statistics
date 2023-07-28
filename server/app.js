require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");
const axios = require("axios");
const { fetchStockData } = require('./api');

const app = express();

app.use(function (req, res, next) {
    const allowedOrigins = ['http://localhost:3000'];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-credentials", true);
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, UPDATE");
    next();
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.enable('trust proxy');

app.post('/api/fetchStockData', async(req, res) => {
    // YOUR CODE GOES HERE, PLEASE DO NOT EDIT ANYTHING OUTSIDE THIS FUNCTION
    try{
        const {symbol,data}=req.body;
        const statistics = await fetchStockData (symbol,data);
        if(!statistics){
            return res.status(404).json({error:'Stock data not found'});
        }
        res.status(200).json(statistics)
    }catch(error){
        console.error('Error fetching data',error);
        res.status(500).json({error:'Internal server error'});
    }
    // res.sendStatus(200);
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));