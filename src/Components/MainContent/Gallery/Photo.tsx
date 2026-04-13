import React from 'react';
import './Gallery.css'

interface PhotoProps {
  imageBG: string;
  width: string;
  height: string;
  animation: string;
  changeToDetail: (index: number) => void;
  thisIndex: number;
}

const styles = {
  imgStyles: {
    backgroundRepeat: 'no-repeat' as const,
    backgroundSize: 'cover' as const,
    backgroundPosition: 'center',
    cursor: 'pointer',
    position: 'relative' as const
  }
}

const Photo = ({ imageBG, width, height, animation, changeToDetail, thisIndex }: PhotoProps) => {
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
