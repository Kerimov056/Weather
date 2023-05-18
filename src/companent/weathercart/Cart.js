import React, { useEffect } from 'react'
import './cart.scss'
import AOS from "aos";
import "aos/dist/aos.css";


const Cart = () => {

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
                            <h3>Baku</h3>
                            <h5>Sunny</h5>
                        </div>
                        <div className='cart_img'>
                            <img src='icon/01d.png'></img>
                        </div>
                    </div>
                    <div className='cart_low'>
                        <div className='weather'>
                            <h1>18°C</h1>
                        </div>
                        <div className='detalis'>
                            <div className='underline'>
                                <p>Detalis</p>
                                <p></p>
                            </div>
                            <div className='top'>
                                <p>Feels like</p>
                                <p>22°C</p>
                            </div>
                            <div className='top'>
                                <p>Wind</p>
                                <p>2 m/s</p>
                            </div>
                            <div className='top'>
                                <p>Humidity</p>
                                <p>15%</p>
                            </div>
                            <div className='top'>
                                <p>Pressure</p>
                                <p> 15hPa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Cart