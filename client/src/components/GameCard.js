import React from 'react'
import { Button,Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactStars from 'react-rating-stars-component';
import { useDispatch } from 'react-redux';
import { deleteGame } from '../Js/GameSlice/gameSlice';
import GameUpdate from './GameUpdate';
import Update from './Update';



const GameCard = ({ game, ping ,setping}) => {
 const dispatch=useDispatch(); 
  return (
    <div>
    <Card style={{ width: '18rem',margin:"20px" }}>
    <Card.Img  src={game.image} alt="image" width="100px" height="150px" />
    <Card.Body>
      <Card.Title>{game.name}</Card.Title>
      <Card.Text>
       {game.release_date}
      </Card.Text>
      <ReactStars
    count={5}
    size={24}
    activeColor="#ffd700"
	edit={false}
	value={game.rating}
  />
      <Button variant="danger" 
      onClick ={()=> {
        dispatch(deleteGame(game._id));
        setping(!ping);
      }}
       >delete</Button>
       <Update game={game} ping={ping} setping={setping}/>
      {/*  <GameUpdate id={._id}/> */}
       
    </Card.Body> 
  </Card>
 
  </div>    

  );
}

export default GameCard;