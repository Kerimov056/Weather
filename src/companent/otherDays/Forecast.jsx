import React from 'react'
import './forecast.scss'
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from "react-accessible-accordion";

{/* Accordion nedir?  Accordionlar hazir bir funkisyalardir! */}
{/* Accordion :her hansisa bir divi daraltmasini saglamak icin bir companentdir. */}
{/* AccordionItem :Accordion icindekilerdeki companentdir.Yeni Accordion'a - bir mezmun desek AccordionItem-onun hisseleridir */}
{/* AccordionItemHeading :Bu basliq bolmesidir basliq bolmesini temsil edir */}
{/* AccordionItemButton :Bu AccordionItemHeading'la istifade olunan bir buttondur.Button'a click edende yazdiginiz hadise bas verir*/}
{/* AccordionItemPanel :Bu'da AccordionItemButton click etdiyimiz zaman acilan companentdir */}

{/* Accordion allowZeroExpanded :Normaldda Accordion ne edirdi ? Accordion-bir companent acilanda digerlerinin baglanmasini  
    sagalyirdi. Yalniz allowZeroExpanded <-- biz bu prop'u daxil etsek bu bize companentlerin ister hamisin aciq 
    ister hamisin bagli tutmasini saglayir !!!
*/}



const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const Forecast = ({data}) => {
    const toDay = new Date().getDay()
    let clack = WEEK_DAYS.splice(toDay,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,toDay));

  return (
    <>
        <label>Daily</label>
        <Accordion allowZeroExpanded> 
                {data.list.splice(0, 7).map((item,id) => (
                    <AccordionItem key={id}>
                            <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='on_esas'>
                                    <div className='left'>
                                        <img src={`icon/${item.weather[0].icon}.png`}></img>
                                        <span>{clack[id]}</span>
                                    </div>
                                    <div className='right'>
                                        <span>{item.weather[0].description}</span>
                                        <span>{Math.round(item.main.temp_min)}°C /{Math.round(item.main.temp_min)}°C</span>
                                    </div>
                                </div>
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div className='panel'>
                                    <div className='panel_left'>
                                        <div>
                                            <span>Presure:</span>
                                            <span>{item.main.pressure}</span>
                                        </div>
                                        <div>
                                            <span>Humidity:</span>
                                            <span>{item.main.humidity}</span>
                                        </div>
                                        <div>
                                            <span>Clouds:</span>
                                            <span>{item.clouds.all}%</span>
                                        </div>
                                    </div>
                                    <div className='panel_right'>
                                        <div>
                                            <span>Wind speed:</span>
                                            <span>{item.wind.speed} m/s</span>
                                        </div>
                                        <div>
                                            <span>Sea level:</span>
                                            <span>{item.main.sea_level}m</span>
                                        </div>
                                        <div>
                                            <span>Feels like:</span>
                                            <span>{item.main.feels_like}°C</span>
                                        </div>
                                    </div>
                                </div>
                            </AccordionItemPanel>
                    </AccordionItem>
                ))}
        </Accordion>
    </>
  )
}

export default Forecast