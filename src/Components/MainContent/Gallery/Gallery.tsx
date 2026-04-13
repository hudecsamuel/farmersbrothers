import React from 'react'
import Photo from './Photo'
import FieldTruck from '../../../Assets/Gallery/field_truck.jpg'
import FlagTruck from '../../../Assets/Gallery/flag_truck.jpg'
import RoadTruck from '../../../Assets/Gallery/road_truck.jpg'
import GravelTruck from '../../../Assets/Gallery/gravel_truck.jpg'
import BehindTreeTruck from '../../../Assets/Gallery/behind_tree_truck.jpg'
import SunsetTruck from '../../../Assets/Gallery/sunset_truck.jpg'
import TractorTruck from '../../../Assets/Gallery/tractor_truck.jpg'
import FogTruck from '../../../Assets/Gallery/fog_truck.jpg'
import AutumnTruck from '../../../Assets/Gallery/autumn_truck.jpg'
import TankTruck from '../../../Assets/Gallery/tank_truck.jpg'
import DetailView from './DetailView'
import { LayoutAndDevice } from '../../../types'

interface GalleryProps {
  layoutAndDevice: LayoutAndDevice;
}

interface GalleryState {
  detailView: boolean;
  viewIndex: number;
}

interface PhotoDimensions {
  imageSrc: string;
  height: string;
  width: string;
  animation?: string;
}

const imagesBG = [
  FieldTruck, FlagTruck, RoadTruck, GravelTruck, BehindTreeTruck, SunsetTruck, TractorTruck, FogTruck, AutumnTruck, TankTruck
]

const styles = {
  outerContainerStyles: {
    padding: '1vw',
    backgroundColor: 'var(--main-black)',
    width: 'calc(100% - 2vw)',
    height: 'calc(100% - 2vw)',
    position: 'relative' as const
  },
  innerContainerStyles: {
    height: '100%',
    overflowY: 'scroll' as const,
    overflowX: 'hidden' as const,
    display: 'flex',
    flexWrap: 'wrap' as const
  }
}

class Gallery extends React.Component<GalleryProps, GalleryState> {
  renderedArray: PhotoDimensions[];

  constructor(props: GalleryProps) {
    super(props)
    this.state = {
      detailView: false,
      viewIndex: 0
    }
    this.renderedArray = this.getDivision(imagesBG);
    this.changeToDetail = this.changeToDetail.bind(this)
    this.goNext = this.goNext.bind(this)
    this.goBack = this.goBack.bind(this)
  }

  changeToDetail(index = 0) {
    this.setState((prev) =>
    ({
      detailView: !prev.detailView,
      viewIndex: index
    }))
  }

  goNext() {
    this.setState(prev =>
    ({
      ...prev,
      viewIndex: prev.viewIndex % (imagesBG.length - 1) === 0 && prev.viewIndex !== 0 ? 0 : prev.viewIndex + 1
    }))
  }

  goBack() {
    this.setState(prev => ({
      ...prev,
      viewIndex: prev.viewIndex === 0 ? imagesBG.length - 1 : prev.viewIndex - 1
    }))
  }

  getDivision = (imgsArray: string[]): PhotoDimensions[] => {
    let newArray: PhotoDimensions[] = [];
    const rowsNmr = imagesBG.length % 2 === 0 || imagesBG.length === 1
      ? Math.ceil(imagesBG.length / 2)
      : (imagesBG.length / 2) + 1;

    const getDimensions = (arrayAgain: string[], nmrOfRows: number) => {
      const arrOfDims: { width: string; height: string; animation: string }[] = [];
      let remaining = arrayAgain.length;
      const height = nmrOfRows > 2 ? 100 / 3 : 50;
      let actualRowWidth = 100;
      while (remaining > 0) {
        const multiplier = remaining >= 3 ? 3 : remaining;
        const rndmNmr = Math.ceil(Math.random() * multiplier);
        for (let j = 0; j < rndmNmr; j++) {
          if (rndmNmr === 1) {
            arrOfDims.push({
              width: '100%',
              height: `${height * 2}%`,
              animation: 'Grow-up 1s ease forwards'
            })
          }
          if (rndmNmr === 2) {
            const coef = Math.ceil(Math.random() * 30);
            const widthOfActualImage = j === 0 ? 35 + coef : actualRowWidth;
            const animationOfActImg = j === 0 ? 'Slide-from-left 1s ease forwards' : 'Slide-from-right 1s ease forwards';
            arrOfDims.push({
              width: `${widthOfActualImage}%`,
              height: `${height}%`,
              animation: animationOfActImg
            })
            actualRowWidth -= widthOfActualImage;
          }
          if (rndmNmr === 3) {
            const coef = Math.ceil(Math.random() * 15);
            const widthOfActualImage = j === 0 ? 25 + coef : j === 1 ? 25 + coef : actualRowWidth;
            const animationOfActImg = j === 0 ? 'Slide-from-left 1s ease forwards' : j === 1 ? 'Grow-up 1s ease forwards' : 'Slide-from-right 1s ease forwards';
            arrOfDims.push({
              width: `${widthOfActualImage}%`,
              height: `${height}%`,
              animation: animationOfActImg
            })
            actualRowWidth -= widthOfActualImage;
          }
        }
        actualRowWidth = 100;
        remaining -= rndmNmr;
      }
      return arrOfDims;
    }

    if (rowsNmr === 1) {
      newArray = imgsArray.map(image => ({
        imageSrc: image,
        height: '100%',
        width: `${100 / imgsArray.length}%`
      }))
    }
    if (rowsNmr >= 2) {
      newArray = getDimensions(imgsArray, rowsNmr).map((item, index) => ({
        imageSrc: imgsArray[index],
        height: item.height,
        width: item.width,
        animation: item.animation
      }))
    }

    return newArray;
  }

  render() {
    const isLayDevMobile = this.props.layoutAndDevice === 'MOBILE'
    return (
      <div className="All-gallery" style={{ ...styles.outerContainerStyles, top: isLayDevMobile ? '10vh' : '0' }}>
        <div style={styles.innerContainerStyles}>
          {
            this.state.detailView ?
              <DetailView layoutAndDevice={this.props.layoutAndDevice} goNext={this.goNext} goBack={this.goBack} imageSrc={imagesBG[this.state.viewIndex]} changeToDetail={this.changeToDetail} />
              :
              this.renderedArray.map((photo, index) => {
                return <Photo thisIndex={index} changeToDetail={this.changeToDetail} width={isLayDevMobile ? '100%' : photo.width}
                  height={isLayDevMobile ? '30%' : photo.height} animation={photo.animation ?? ''} key={index} imageBG={photo.imageSrc} />
              })
          }
        </div>
      </div>
    )
  }
}

export default Gallery;
