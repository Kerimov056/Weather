import React from 'react'
import './forecast.scss'
import {Accordion,AccordionItem,AccordionItemHeading,AccordionItemButton} from "react-accessible-accordion";


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
                    </AccordionItem>
                ))}
        </Accordion>
    </>
  )
}

export default Forecast