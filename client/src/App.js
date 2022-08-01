import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import GameList from './components/GameList';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import { useDispatch } from 'react-redux';

import GameAdd from './components/GameAdd';
import { getgames } from './Js/GameSlice/gameSlice';

function App() {
  const [ping, setping] = useState(false)
 const dispatch=useDispatch();
 useEffect(() => {
  dispatch(getgames())
 }, [ping])
 

  return (
    <div className="App">
   <Header/>
   <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/about" element={<About/>} />
     <Route path="/games" element={<GameList ping={ping} setping={setping}/>}/>
     <Route path="/contact" element={<Contact />}/>
     <Route path="/add" element={<GameAdd ping={ping} setping={setping}/>}/>
     </Routes> 
    </div>
  );
}

export default App;
