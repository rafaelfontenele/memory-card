import { useState } from 'react'
import './Game.css'
import { Menu } from './Menu'
import { Board } from './Board'

function Game() {
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


    </>
  )
}

export default Game
