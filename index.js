const express = require("express");

const cors = require("cors");
//const mongoose = require("mongoose");

const UserLocation=require("../backend/routers/user_router")

const app = express();

//app.use(express.json({limit:"30mb",extended:true}));
//app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());

app.use('/api/places',UserLocation);

app.listen(5000);