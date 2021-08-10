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
                                height: `${height * 2}%`
                            })
                        }
                        if (rndmNmr === 2) {
                            let coef = Math.ceil(Math.random() * 30);
                            let widthOfActualImage = j === 0 ? 35 + coef : actualRowWidth;
                            arrOfDims.push({
                                width: `${widthOfActualImage}%`,
                                height: `${height}%`
                            })
                            actualRowWidth -= widthOfActualImage;
                        }
                        if (rndmNmr === 3) {
                            let coef = Math.ceil(Math.random() * 15);
                            let widthOfActualImage = j === 0 ? 25 + coef : j === 1 ? 25 + coef : actualRowWidth;
                            arrOfDims.push({
                                width: `${widthOfActualImage}%`,
                                height: `${height}%`
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
                        width: item.width
                    }
                })
            }

            return newArray;
        }



        return (
            <div className="All-gallery" style={styles.outerContainerStyles}>
                <div style={styles.innerContainerStyles}>
                    {
                        getDivision(imagesBG).map((photo, index) => {
                            console.log(index)
                            return <Photo width={photo.width} height={photo.height} key={index} imageBG={photo.imageSrc} />
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Gallery;