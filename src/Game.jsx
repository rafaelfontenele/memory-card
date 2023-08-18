import { useState } from 'react'
import './Game.css'
import { Menu } from './Menu'
import { Board } from './Board'
import { ToggleIcon } from './ToggleIcon'


function Game() {
  const [music, setMusic] = useState(true);
  const [sound, setSound] = useState(true);
  const [ state, setState ] = useState({
    difficulty: 'medium',
    gameStage: 0    
  })

  const creatures = [

  ]

  return (
    <>

    <div className="main-wrapper">

      <Menu state={state} setState={setState} />

      {state.gameStage == 1 && <Board state={state} setState={setState} />}

    </div>

    <ToggleIcon url={`music-${music == true ? 'on' : 'off'}.svg`} onClickFunction={() => setMusic(prev => !prev)} bgColor={'red'} />
    
    </>
  )
}

export default Game
