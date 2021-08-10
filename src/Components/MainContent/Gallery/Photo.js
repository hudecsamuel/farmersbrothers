import React from 'react';
import './Gallery.css'

const styles = {
    imgStyles: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer',
        position: 'relative'
    }
}

const Photo = (props) => {
    const imageBG = props.imageBG;
    const width = props.width;
    const height = props.height;
    const animation = props.animation;
    const changeToDetail = props.changeToDetail;
    const thisIndex = props.thisIndex;

    const handleClick = () => changeToDetail(thisIndex);

    return (
        <div onClick={handleClick} className='Photo-main-div' style={{
            ...styles.imgStyles,
            backgroundImage: `url(${imageBG})`,
            minWidth: `calc(${width} - 0.4vw)`,
            minHeight: `calc(${height} - 0.4vw)`,
            border: `0.2vw solid var(--main-black)`,
            animation: animation
        }}>

        </div>
    )
}

export default Photo;