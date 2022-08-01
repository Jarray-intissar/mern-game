import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addGame } from '../Js/GameSlice/gameSlice';
import { useNavigate } from 'react-router-dom';

const GameAdd = (ping ,setping) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [game,setGame] = useState({
    name: " ",
    image: " ",
    category:" ",
    release_date:" "
   
  })
  return (
    <div style={{padding:"20px",margin:"20px"}}>
    <Form style={{display:"block",margin:"30px",padding:"20px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Name:</Form.Label>
        <Form.Control type="text" placeholder="name of new game" 
        onChange = {(e) =>
         setGame({ ...game, name: e.target.value })
        } 
         />
        <Form.Label>Category:</Form.Label>
      <Form.Select aria-label="Default select example" 
      onChange = {(e) =>
         setGame({ ...game,category: e.target.value })
        }>
          <option value="moba">moba</option>
          <option value="fps">fps</option>
    </Form.Select>
        <Form.Label>date:</Form.Label>
        <Form.Control type="date" 
         onChange = {(e) =>
         setGame({ ...game, release_date: e.target.value })
        }/>
        <Form.Label>Image:</Form.Label>
        <Form.Control type="text" 
        onChange = {(e) =>
         setGame({ ...game, image: e.target.value })
        }/>
        </Form.Group>
         
      <Button variant="primary" type="submit" style={{margin:"30px 30px"}}
      onClick ={()=>{
        dispatch(addGame(game))
        setping(!ping);
        setTimeout(() => {
         navigate("/games");
        }, 1000);
        }}
      >
        add new Game
      </Button>

    </Form>
 </div>
  );
}

export default GameAdd