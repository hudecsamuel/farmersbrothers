import React from 'react'
import Photo from './Photo'
// Have to manually import each image
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

const imagesBG = [
    FieldTruck, FlagTruck, RoadTruck, GravelTruck, BehindTreeTruck, SunsetTruck, TractorTruck, FogTruck, AutumnTruck, TankTruck
]


const styles = {
    outerContainerStyles: {
        padding: '1vw',
        backgroundColor: 'var(--main-black)',
        width: 'calc(100% - 2vw)',
        height: 'calc(100% - 2vw)'
    },
    innerContainerStyles: {
        height: '100%',
        overflowY: 'scroll',
        display: 'flex',
        flexWrap: 'wrap'
    }
}

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            detailView: false,
            viewIndex: 0
        }
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

    render() {
        const getDivision = (imgsArray) => {
            let newArray = [];
            // Divide images array to rows
            let rowsNmr = imagesBG.length % 2 === 0 || imagesBG.length === 1 ? Math.ceil(imagesBG.length / 2) : (imagesBG.length / 2) + 1;

            const getDimensions = (arrayAgain, nmrOfRows) => {
                let arrOfDims = [];
                let remaining = arrayAgain.length;
                let height = nmrOfRows > 2 ? 100 / 3 : 50;
                let actualRowWidth = 100;
                while (remaining > 0) {
                    let multiplier = remaining >= 3 ? 3 : remaining;
                    let rndmNmr = Math.ceil(Math.random() * multiplier); // I want nmr between 1 - 3 (because i want 1 - 3 photos in one row)
                    for (let j = 0; j < rndmNmr; j++) {
                        if (rndmNmr === 1) {
                            arrOfDims.push({
                                width: '100%',
                                height: `${height * 2}%`,
                                animation: 'Grow-up 1s ease forwards'
                            })
                        }
                        if (rndmNmr === 2) {
                            let coef = Math.ceil(Math.random() * 30);
                            let widthOfActualImage = j === 0 ? 35 + coef : actualRowWidth;
                            let animationOfActImg = j === 0 ? 'Slide-from-left 1s ease forwards' : 'Slide-from-right 1s ease forwards';
                            arrOfDims.push({
                                width: `${widthOfActualImage}%`,
                                height: `${height}%`,
                                animation: animationOfActImg
                            })
                            actualRowWidth -= widthOfActualImage;
                        }
                        if (rndmNmr === 3) {
                            let coef = Math.ceil(Math.random() * 15);
                            let widthOfActualImage = j === 0 ? 25 + coef : j === 1 ? 25 + coef : actualRowWidth;
                            let animationOfActImg = j === 0 ? 'Slide-from-left 1s ease forwards' : j === 1 ? 'Grow-up 1s ease forwards' : 'Slide-from-right 1s ease forwards';
                            arrOfDims.push({
                                width: `${widthOfActualImage}%`,
                                height: `${height}%`,
                                animation: animationOfActImg
                            })
                            actualRowWidth -= widthOfActualImage;
                            console.log(animationOfActImg)
                        }

                    }
                    actualRowWidth = 100;
                    remaining -= rndmNmr;
                }

                return arrOfDims;
            }

            if (rowsNmr === 1) {
                newArray = imgsArray.map(image => {
                    return {
                        imageSrc: image,
                        height: '100%',
                        width: `${100 / imgsArray.length}%`
                    }
                })
            }
            if (rowsNmr >= 2) {
                newArray = getDimensions(imgsArray, rowsNmr).map((item, index) => {
                    return {
                        imageSrc: imgsArray[index],
                        height: item.height,
                        width: item.width,
                        animation: item.animation
                    }
                })
            }

            return newArray;
        }

        return (
            <div className="All-gallery" style={styles.outerContainerStyles}>
                <div style={styles.innerContainerStyles}>
                    {
                        this.state.detailView ?
                            <DetailView goNext={this.goNext} goBack={this.goBack} imageSrc={imagesBG[this.state.viewIndex]} changeToDetail={this.changeToDetail} />
                            :
                            getDivision(imagesBG).map((photo, index) => {
                                return <Photo thisIndex={index} changeToDetail={this.changeToDetail} width={photo.width}
                                    height={photo.height} animation={photo.animation} key={index} imageBG={photo.imageSrc} />
                            })
                    }
                </div>
            </div>
        )
    }
}

export default Gallery;