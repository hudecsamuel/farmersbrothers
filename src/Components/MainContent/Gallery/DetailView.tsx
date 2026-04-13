import React from 'react';
import './Gallery.css'
import { LayoutAndDevice } from '../../../types';

interface DetailViewProps {
  imageSrc: string;
  goNext: () => void;
  goBack: () => void;
  changeToDetail: () => void;
  layoutAndDevice: LayoutAndDevice;
}

const styles = {
  mainDivStyles: {
    display: 'flex',
    alignSelf: 'center',
    justifySelf: 'center',
    animation: 'Fade 2s ease forwards',
    justifyContent: 'space-between',
    backgroundRepeat: 'no-repeat' as const,
    backgroundSize: 'contain' as const,
    backgroundPosition: 'center',
    alignItems: 'center'
  },
  arrowStyles: {
    display: 'flex',
    backgroundRepeat: 'no-repeat' as const,
    backgroundSize: 'contain' as const,
    backgroundPosition: 'center',
    cursor: 'pointer',
    height: '7.5vh',
    width: '5vh',
    margin: '1vh'
  },
  crossStyles: {
    backgroundRepeat: 'no-repeat' as const,
    backgroundSize: 'contain' as const,
    backgroundPosition: 'center',
    cursor: 'pointer',
    height: '5vh',
    width: '5vh',
    position: 'absolute' as const
  }
}

const DetailView = ({ imageSrc, goNext, goBack, changeToDetail, layoutAndDevice }: DetailViewProps) => {
  const isLayDevMobile = layoutAndDevice === 'MOBILE'
  const handleCrossClick = () => changeToDetail()

  return (
    <div style={{
      ...styles.mainDivStyles,
      backgroundImage: `url(${imageSrc})`,
      height: '100%',
      position: isLayDevMobile ? 'fixed' : undefined,
      top: isLayDevMobile ? '0' : undefined,
      bottom: isLayDevMobile ? '0' : undefined,
      margin: isLayDevMobile ? 'auto 0' : undefined,
      width: isLayDevMobile ? 'calc(100% - 2vw)' : '100%'
    }}>
      <div onClick={goBack} className="Detail-arrow-left" style={{ ...styles.arrowStyles }}></div>
      <div onClick={goNext} className="Detail-arrow-right" style={{ ...styles.arrowStyles }}></div>
      <div className="Detail-cross" onClick={handleCrossClick} style={{
        ...styles.crossStyles,
        top: isLayDevMobile ? '12vh' : '2vh',
        right: isLayDevMobile ? '1vh' : '3vh'
      }}></div>
    </div>
  )
}

export default DetailView;
