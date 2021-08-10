import React from 'react';
import './Gallery.css'

const styles = {
    mainDivStyles: {
        display: 'flex',
        alignSelf: 'center',
        justifySelf: 'center',
        width: '100%',
        height: '100%',
        animation: 'Fade 2s ease forwards',
        justifyContent: 'space-between',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        alignItems: 'center'
    },
    arrowStyles: {
        display: 'flex',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        cursor: 'pointer',
        height: '7.5vh',
        width: '5vh',
        margin: '1vh'
    },
    crossStyles: {
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        cursor: 'pointer',
        height: '5vh',
        width: '5vh',
        top: '1vh',
        right: '1vh',
        position: 'absolute'
    }
}

const DetailView = (props) => {
    const imageSrc = props.imageSrc
    const goNext = props.goNext
    const goBack = props.goBack
    const handleCrossClick = () => {
        return props.changeToDetail()
    }

    return (
        <div style={{
            ...styles.mainDivStyles,
            backgroundImage: `url(${imageSrc})`
        }}>
            <div onClick={goBack} className="Detail-arrow-left" style={{
                ...styles.arrowStyles
            }}></div>
            <div onClick={goNext} className="Detail-arrow-right" style={{
                ...styles.arrowStyles
            }}></div>
            <div className="Detail-cross" onClick={handleCrossClick} style={{
                ...styles.crossStyles
            }}></div>
        </div>
    )
}

export default DetailView;