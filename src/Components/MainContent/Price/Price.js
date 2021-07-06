import React,{useState} from 'react'
import './Price.css'
import Cisterna from './Chosen/Cisterna/Cisterna'
import Sklizeň from './Chosen/Sklizeň/Sklizeň'
import Zemní from './Chosen/Zemní/Zemní'

function Price() {
    const [show,setShow]=useState(false)
    const [choice, setChoice]=useState(1)

     function handleClick(e) { /* když pracuji ve funkci, tak musíš napsat že se jedná o funkci, jinak to nepozná - debil */
        const elText = e.target.innerText;
        console.log(elText);
        switch (elText) {
          case 'CISTERNOVÁ DOPRAVA':
            setChoice(1);
            break; 
          case 'SKLIZŇOVÁ DOPRAVA':
            setChoice(2);
            break;
          case 'ZEMNÍ PRÁCE':
            setChoice(3);
            break;
          default:
            setChoice(1);
        }
        setShow(!show);
      }

      function showChoice(){
        switch (choice) {
            case 1:
              return <Cisterna/>; 
            case 2:
              return <Sklizeň/>;
            case 3:
              return <Zemní/>;
            default:
              return <Cisterna/>;
          }
      }
    
        return (
            <div>
                <div className="Cover-photo-price"></div>
                <div className="under-Image">
                    <h1 className="Contact-heading">CENÍK</h1>
                    <div className="Main-div">
                        <div className="left">
                            <div className="calc">
                                <div className="Chosen">                                    
                                    <div className="výběr">
                                        <div className="roleta"><span></span> 
                                        {    
                                            show?<div id="dd">
                                                <div onClick={handleClick}>CISTERNOVÁ DOPRAVA</div>
                                                <div onClick={handleClick}>SKLIZŇOVÁ DOPRAVA</div>
                                                <div onClick={handleClick}>ZEMNÍ PRÁCE</div>
                                            </div>:null
                                        }
                                            <div className="arrow" onClick={()=>setShow(!show)}></div>
                                        </div>                                        
                                    </div>
                                </div>
                                {showChoice()}
                            </div>
                            <div className="result">
                                <span>Předpokládaná cena:</span>
                                <span>2465</span>
                            </div>
                        </div>
                        <div className="right"><p>Obvyklá míra napuštění cisterny je 21 m<sup>3</sup></p></div>
                    </div>
                

                <div className="Notes"> 
                    <span>→ vedené ceny jsou bez DPH</span>
                    <span>→ možnost zajištění dopravy 24/7</span>
                    <span>→ výše uvedené ceny nejsou závaznou nabídkou, ta bude zaslána na základě poptávky</span>
                </div>
                </div>
            </div>
        );
    }

export default Price;