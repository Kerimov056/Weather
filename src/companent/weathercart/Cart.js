import React, { useEffect } from 'react'
import './cart.scss'
import AOS from "aos";
import "aos/dist/aos.css";


const Cart = ({data}) => {

    useEffect(() => {
        AOS.init({
            offset: 630,
            duration: 800,
            delay: 260,
        });
        AOS.refresh();
    }, []);

    return (
        <>
            <div className='cart' data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <div className='ortala'>
                    <div className='cart_up'>
                        <div className='name'>
                            <h3>{data.city}</h3>
                            <h5>{data.weather[0].description}</h5>
                        </div>
                        <div className='cart_img'>
                            <img src={`icon/${data.weather[0].icon}.png`}></img>
                        </div>
                    </div>
                    <div className='cart_low'>
                        <div className='weather'>
                            <h1>{Math.round(data.main.temp)}°C</h1>
                        </div>
                        <div className='detalis'>
                            <div className='underline'>
                                <p>Detalis</p>
                                <p></p>
                            </div>
                            <div className='top'>
                                <p>Feels like</p>
                                <p>{Math.round(data.main.feels_like)}°C</p>
                            </div>
                            <div className='top'>
                                <p>Wind</p>
                                <p>{data.wind.speed} m/s</p>
                            </div>
                            <div className='top'>
                                <p>Humidity</p>
                                <p>{data.main.humidity}%</p>
                            </div>
                            <div className='top'>
                                <p>Pressure</p>
                                <p>{data.main.pressure}hPa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Cart