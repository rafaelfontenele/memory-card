import { useState, useEffect } from 'react';

export const Board = ( { state, setState } ) => {
    const [isShowing, setIsShowing] = useState(false);
    const goBack = () => { setState( prev => { return {...prev, gameStage: 0}})};
    useEffect( () => {
        const show = state['gameStage']  == 1;
        if ( show !== isShowing) {
            setIsShowing( show );
        }
        
        }, [state])

    return (
        <div className={`board ${isShowing ? 'show' : ''}`} onClick={() => goBack()}>


            MAIN

            
        </div>
    )
}