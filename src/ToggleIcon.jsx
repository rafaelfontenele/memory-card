

export const ToggleIcon = ( {url, onClickFunction, bgColor, offSetX} ) => {
    let leftPosition = (5 + offSetX);
    return (
        <div className="toggle-icon-wrapper" style={ {left: `${leftPosition}%`} }>

            <img className='toggle-icon' src={`${url}`} alt={`${url} icon`} onClick={onClickFunction} />

        </div>
    )
}