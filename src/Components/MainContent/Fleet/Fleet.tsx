import React from 'react'
import './Fleet.css'
import RoadTruck from '../../../Assets/Gallery/road_truck.jpg'
import SunsetTruck from '../../../Assets/Gallery/sunset_truck.jpg'
import FogTruck from '../../../Assets/Gallery/fog_truck.jpg'
import FieldTruck from '../../../Assets/Gallery/field_truck.jpg'
import GravelTruck from '../../../Assets/Gallery/gravel_truck.jpg'
import AutumnTruck from '../../../Assets/Gallery/autumn_truck.jpg'
import TractorTruck from '../../../Assets/Gallery/tractor_truck.jpg'
import FlagTruck from '../../../Assets/Gallery/flag_truck.jpg'
import BehindTreeTruck from '../../../Assets/Gallery/behind_tree_truck.jpg'
import TankTruck from '../../../Assets/Gallery/tank_truck.jpg'

interface Vehicle {
  name: string;
  price: string;
  photos: string[];
}

const vehicles: Vehicle[] = [
  {
    name: 'Scania R500',
    price: 'od 38 Kč / 1 km',
    photos: [RoadTruck, SunsetTruck, FogTruck, FieldTruck],
  },
  {
    name: 'Tatra 4x4',
    price: 'od 45 Kč / 1 m³',
    photos: [GravelTruck, AutumnTruck, TractorTruck],
  },
  {
    name: 'Scania S450',
    price: 'od 38 Kč / 1 km',
    photos: [FlagTruck, BehindTreeTruck, TankTruck],
  },
  {
    name: 'DAF XF 510',
    price: 'od 38 Kč / 1 km',
    photos: [TankTruck, RoadTruck, GravelTruck],
  },
]

interface FleetState {
  activePhoto: number[];
}

class Fleet extends React.Component<Record<string, never>, FleetState> {
  constructor(props: Record<string, never>) {
    super(props)
    this.state = {
      activePhoto: vehicles.map(() => 0),
    }
  }

  setPhoto(vehicleIndex: number, photoIndex: number) {
    const activePhoto = [...this.state.activePhoto]
    activePhoto[vehicleIndex] = photoIndex
    this.setState({ activePhoto })
  }

  render() {
    return (
      <div className="fleet-page">
        <div className="fleet-content">
          <h1 className="fleet-heading">VOZOVÝ PARK</h1>
          <div className="fleet-list">
            {vehicles.map((vehicle, vi) => {
              const active = this.state.activePhoto[vi]
              return (
                <div key={vi} className="fleet-vehicle">
                  <div
                    className="fleet-main-photo"
                    style={{ backgroundImage: `url(${vehicle.photos[active]})` }}
                  >
                    <div className="fleet-photo-overlay">
                      <span className="fleet-vehicle-name">{vehicle.name}</span>
                      <span className="fleet-vehicle-price">{vehicle.price}</span>
                    </div>
                  </div>
                  {vehicle.photos.length > 1 && (
                    <div className="fleet-thumbnails">
                      {vehicle.photos.map((photo, pi) => (
                        <div
                          key={pi}
                          className={`fleet-thumb${pi === active ? ' fleet-thumb--active' : ''}`}
                          style={{ backgroundImage: `url(${photo})` }}
                          onClick={() => this.setPhoto(vi, pi)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default Fleet
