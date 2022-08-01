import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { updateGame } from '../Js/GameSlice/gameSlice';

const GameUpdate = ({ id }) => {
  const [game , setGame] = useState({});
  const [show ,setshow] = useState(false);
 const  dispatch = useDispatch();
  return (
    <div>
      <Button onClick ={()=> setshow (!show)}>update</Button>
      {show ? 
        <div style={{padding:"20px",margin:"20px"}}>

          <Button onClick ={()=> setshow (!show)}>X</Button>

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
            <Button onClick={()=> dispatch(updateGame({id: id , game}))}>update</Button>

        </Form> 
        </div>
        : null};
    </div>
 
    )
      }

export default GameUpdate