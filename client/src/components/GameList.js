import React from 'react'
import { useSelector } from 'react-redux';
import GameCard from './GameCard';


const GameList = ({ping , setping}) => {
  const games = useSelector((state)=> state.game.games);
  console.log(games);
  return (
    <div style={{
     display:"flex",
     flexWrap:"wrap",
     justifyContent:"space-between",
     margin:"20px"}}>
      
{games.map((el)=>
(<GameCard game={el} ping={ping} setping={setping}/>))
};

    </div>
  );

}

export default GameList;