import React from 'react';

const styles = {
    imgStyles: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        cursor: 'pointer'
    }
}

const Photo = (props) => {
    const imageBG = props.imageBG;
    const width = props.width;
    const height = props.height;

    return (
        <div style={{
            ...styles.imgStyles,
            backgroundImage: `url(${imageBG})`,
            minWidth: `calc(${width} - 0.4vw)`,
            minHeight: `calc(${height} - 0.4vw)`,
            border: `0.2vw solid var(--main-black)`
        }}>

        </div>
    )
}

export default Photo;