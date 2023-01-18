import logo from './logo.svg';
import './App.css';

import Action from './Action';
import ReactPlayer from 'react-player/lazy'
import {Cakeview} from './feature/cake/Cakeview'
import {IceCream} from './feature/icecream/IceCream'
import {Userview} from './feature/user/Userview'
import { Suspense } from 'react';
import {BrowserRouter, Routes} from "react-router-dom" 
function App() {


  return (
    <div className="App">
  {/* <BrowserRouter>
  <Routes>
  
    <Cakeview/>
    <IceCream/>
    <Suspense fallback={<h1>Loading posts...</h1>}> */}
    <Cakeview/>
    <IceCream/>
    <Userview/>
      {/* </Suspense>
      </Routes>
      </BrowserRouter> */}
   
{/* <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
          playing={true}
          width='22rem'
          height='22rem'
        />
      </div>
      <iframe src='https://www.youtube.com/embed/hEnr6Ewpu_U?autoplay=1&mute=1'
        frameBorder='0'
        allow='autoplay; encrypted-media'
        allowFullScreen
        title='video'
/> */}
    </div>
  );
}

export default App;
