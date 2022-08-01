
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { updateGame } from '../Js/GameSlice/gameSlice';

function Update({game, ping ,setping}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setedited] = useState({});
    const dispatch=useDispatch();
    console.log(game)
  return (
    <>
    <Button variant="primary" onClick={handleShow}>
    Update
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Update Game</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder={game.name}  onChange= {(e)=>setedited({...edited, name:e.target.value})}/>
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder={game.image} onChange= {(e)=>setedited({...edited, image:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder={game.category} onChange= {(e)=>setedited({...edited,  category:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Released Date</Form.Label>
        <Form.Control type="date" placeholder={game.release_date} onChange= {(e)=>setedited({...edited, release_date:e.target.value})}/>
        
      </Form.Group>
     
      </Form>
        
        </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={()=>{dispatch(updateGame({id:game._id, edited}));setping(!ping);handleClose()}
         }>
          Update Game
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default Update