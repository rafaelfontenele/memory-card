import { useEffect, useState } from 'react'
import './Game.css'
import { Menu } from './Menu'
import { Board } from './Board'
import { ToggleIcon } from './ToggleIcon'


function Game() {
  const [music, setMusic] = useState(false);
  const [sound, setSound] = useState(false);
  const [ state, setState ] = useState({
    difficulty: 'medium',
    gameStage: 0    
  }) 

  
  const toggleSound = () => {
    setSound( prev => {
      console.log(!prev);
      return !prev
    });
    console.log(sound);
  }
  const toggleMusic = () => {
    setMusic( prev => {
      console.log(!prev);
      return !prev
    });
    console.log(music);
  }

  const playAudio = (id) => {
    const audio = document.getElementById(id);
    if (id == 'click') {
      if (sound == false) {
        console.log('sound if off, returning');
        return
      }
      console.log('clicking');
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

    const clickable = document.querySelectorAll('.clickable');

    for (let i=0;i<clickable.length;i++) {
      clickable[i].addEventListener('click', () => playAudio('click'))
    }

    return () => {
      for (let i=0;i<clickable.length;i++) {
        clickable[i].addEventListener('click', () => playAudio('click'))
      }
    }
  

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

    <ToggleIcon url={`music-${music == true ? 'on' : 'off'}.svg`} onClickFunction={() => toggleMusic()} offSetX={0}/>
    <ToggleIcon url={`sound-${sound == true ? 'on' : 'off'}.svg`} onClickFunction={() => toggleSound()} offSetX={5}/>

    <button className={'clickable'} style={ {position: 'absolute', top:'30%', left:'20%', width: '50px', height: '50px', backgroundColor: 'orange'} } 
    onClick= {() => console.log(sound)} >play</button>
    <button style={ {position: 'absolute', top:'40%', left:'20%', width: '50px', height: '50px', backgroundColor: 'orange'} } 
    onClick= {() => pauseAudio('bg-audio')} >stop</button>

    
    </>
    
  )
}

export default Game
