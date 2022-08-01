const express=require("express");
const Game = require("../Models/game");

const gameRouter=express.Router();



// post gaming
gameRouter.post("/add",async(req ,res)=>{
    try {
         let newGame = new Game(req.body);
         let result = await newGame.save();
         res.status(200).send({ game :result ,msg : "game as added"});     
    } catch (error) {
        console.log("error");
        
    }
});
gameRouter.get("/",async(req ,res)=>{
    try {
        
         let result = await Game.find();
         res.send({ games :result ,msg : "game as added"});     
    } catch (error) {
        console.log("error");
        
    }
});
gameRouter.delete("/:id",async(req ,res)=>{
    try {
        
         let result = await Game.findByIdAndDelete(req.params.id);
         res.send({ msg : "game is deleted"});     
    } catch (error) {
        console.log("error");
        
    }
});

gameRouter.put("/:id",async(req ,res)=>{
    try{ 
        let result= await Game.findByIdAndUpdate(
            {_id:req.params.id},
            {$set:{...req.body}});
        res.send({ games:result, msg:"game is changed "});
    }
    catch (error){
        console.log(error);
    }
});

module.exports = gameRouter;