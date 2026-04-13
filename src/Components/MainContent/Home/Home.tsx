import React from 'react';
import './Home.css';
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

const slides = [
  FieldTruck, RoadTruck, SunsetTruck, FogTruck,
  GravelTruck, FlagTruck, AutumnTruck, BehindTreeTruck,
  TractorTruck, TankTruck,
]

interface HomeState {
  activeIndex: number;
}

class Home extends React.Component<Record<string, never>, HomeState> {
  private intervalId: ReturnType<typeof setInterval> | null = null;

  constructor(props: Record<string, never>) {
    super(props);
    this.state = { activeIndex: 0 };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(s => ({ activeIndex: (s.activeIndex + 1) % slides.length }));
    }, 5000);
  }

  componentWillUnmount() {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  render() {
    const { activeIndex } = this.state;
    return (
      <div className="home-page">
        <div className="home-hero">
          {slides.map((src, i) => (
            <div
              key={i}
              className="home-hero-slide"
              style={{
                backgroundImage: `url(${src})`,
                opacity: i === activeIndex ? 1 : 0,
              }}
            />
          ))}
          <div className="home-hero-gradient" />
        </div>
        <div className="home-about">
          <h2 className="home-about-heading">O NÁS</h2>
          <div className="home-about-body">
            <p>
              Jsme menší rodinná firma s pěti nákladními auty a přátelským kolektivem.
              Pocházíme z Benešovska, ale naše podnikání v autodopravě se začalo psát především
              na Vysočině a pak po celé ČR. V počátku jsme se zaměřili na autodopravu v zemědělství
              (tzv. služby), převážně dopravu tekutých hnojiv (kejda, digestát) v cisterně.
              Následovalo půjčení velkoobjemového návěsu pro zajištění odvozu od překládacího vozu
              během žní a na podzim téhož roku jsme si již kupovali vlastní návěs tak, abychom byli
              schopni zajisti návoz cukrové řepy v režimu 24/7 pro cukrovar v Hrušovanech nad Jevišovkou.
              Vzhledem k tomu, že se zemědělská sezóna kryje s řepnou kampaní, muselo přijít logické
              rozšíření o silniční kamion, který jsme byli schopni nasadit na celou řepnou kampaň.
              Nyní jsme již několikátým rokem součástí dvou linek, které zavážejí cukrovar v Dobrovicích.
              Ve snaze lokalizovat pracovní náplň blíž k naší základně jsme se dostali k nákladní
              autodopravě ve stavebnictví, které se tak v průběhu času stalo naší prioritou.
            </p>
            <p>
              Snažíme se, aby naši řidiči pracovali pouze od pondělí do pátku, ale víkendovému
              nasazení se nebráníme, ba naopak vítáme a vážíme si ho. S bráchou jsme zvyklí se
              rozkrajovat, proto nepohrdneme ani prací v neděli.
            </p>
          </div>
        </div>
        <div className='Home-footer'>
          <a href="https://www.instagram.com/fabr.cz/" target='_blank' rel="noreferrer">
            <div className='instag'></div>
          </a>
          <a href="mailto: farmersbrothers@seznam.cz" target='_blank' rel="noreferrer">
            <div className="email-footer"></div>
          </a>
          <a href="tel: +420606021579" target='_blank' rel="noreferrer">
            <div className='phon'></div>
          </a>
        </div>
      </div>
    )
  }
}

export default Home;
