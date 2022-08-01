const mongoose=require("mongoose");

const DB_Connect = async ()=>{
    try{
        let result = await mongoose.connect(process.env.DB_URI);
        console.log("database is connected");

    }
    catch(error){
        console.log("error");

    }
}
module.exports = DB_Connect;