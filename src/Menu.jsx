import { useState, useEffect } from 'react';

export const Menu = ( { state, setState } ) => {
    const [isShowing, setIsShowing] = useState(state['gameStage'] == 0);

    const startGame = () => {
        console.log(`Start game at ${state['difficulty']} difficulty`);
        setIsShowing(prev => false);
        setTimeout( () => {
            setState( (prev) => {
                return {
                    ...prev,
                    gameStage: 1
                }
            })
        }, 1500)
    }
    const changeDifficulty = (newDiff) => {

        if (state['gameStage'] !== 0 || isShowing == false) {
            return
       }

        setState(prev => {
                return {
                    ...prev,
                    difficulty: newDiff
                }
            })
    }

    return (
    <div className={`menu ${isShowing ? 'show' : 'hide'}`}>
        
        <h1>Tibia</h1>        
        <h2>The Memory game</h2>

        <ol className='select-difficulty'>
        
            {['easy','medium','hard'].map(difficulty => {
                const currentDifficulty = state['difficulty'];
                return (
                    <li key={difficulty} onClick={() => changeDifficulty(difficulty)} className={`difficulty-btn ${currentDifficulty == difficulty ? 'selected' : ''} clickable`}>
                        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                    </li>
                )
            })}




        </ol>        

        <button className='start-game-btn clickable' onClick={() => startGame()}>Start</button>
    </div>
    )
}