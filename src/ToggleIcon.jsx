

export const ToggleIcon = ( {url, onClickFunction, bgColor} ) => {
    return (
        <div className="toggle-icon-wrapper" >

            <img className='toggle-icon' src={`${url}`} alt={`${url.slice(1)} icon`} onClick={onClickFunction} />

        </div>
    )
}