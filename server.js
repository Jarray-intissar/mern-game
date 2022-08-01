const express= require("express");
const DB_Connect = require("./DB_Connect");
 const app = express();
const cors=require("cors");

app.use(express.json());
require("dotenv").config();

app.use(cors());



 DB_Connect();

 app.use("/game",require("./routes/gameRouter"));


 app.listen(process.env.PORT,(err)=> err
 ? console.log(err)
 : console.log("server is runnig.."+process.env.PORT)
 );