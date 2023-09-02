import { useEffect, useState } from 'react'
import './Game.css'
import { Menu } from './Menu'
import { Board } from './Board'
import { ToggleIcon } from './ToggleIcon'


function Game() {
  let currentTime = 0;
  const [music, setMusic] = useState(false);
  const [sound, setSound] = useState(true);
  const [ state, setState ] = useState({
    difficulty: 'medium',
    gameStage: 0    
  }) 
  
  const playAudio = (id) => {
    const audio = document.getElementById(id);
    if (id == 'click') {
      audio.volume = 0.4;
      audio.currentTime= 0.51;
    }
    audio.play();
  }
  const pauseAudio = (id) => {
    const audio = document.getElementById(id);
    audio.pause();  
  }

  useEffect( () => {
    const clickable = [document.getElementsByTagName('div')];

    console.log(clickable);
    
    


  }, [])

  useEffect( () => {
    if (music) {
      playAudio('bg-audio');
    } else {
      pauseAudio('bg-audio');
    }
  }, [music])

  const creatures = [

  ]

  return (
    <>

    <div className="main-wrapper">

      <Menu state={state} setState={setState} />

      {state.gameStage == 1 && <Board state={state} setState={setState} />}

    </div>

    <ToggleIcon url={`music-${music == true ? 'on' : 'off'}.svg`} onClickFunction={() => setMusic(prev => !prev)} offSetX={0}/>
    <ToggleIcon url={`sound-${sound == true ? 'on' : 'off'}.svg`} onClickFunction={() => setSound(prev => !prev)} offSetX={5}/>

    <button style={ {position: 'absolute', top:'30%', left:'20%', width: '50px', height: '50px', backgroundColor: 'orange'} } 
    onClick= {() => playAudio('click')} >play</button>
    <button style={ {position: 'absolute', top:'40%', left:'20%', width: '50px', height: '50px', backgroundColor: 'orange'} } 
    onClick= {() => pauseAudio('bg-audio')} >stop</button>

    
    </>
    
  )
}

export default Game
