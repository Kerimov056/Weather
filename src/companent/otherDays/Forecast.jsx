import React from 'react'
import './forecast.scss'
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton,AccordionItemPanel} from "react-accessible-accordion";


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


const Forecast = ({data}) => {
    const toDay = new Date().getDay()
    const clack = WEEK_DAYS.splice(toDay,WEEK_DAYS.length).concat(WEEK_DAYS.slice(0,toDay));

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