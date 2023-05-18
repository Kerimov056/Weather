import React from 'react'
import './cart.scss'

const Cart = () => {
    return (
        <>
            <div className='cart'>
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
                            {/* <div className='underline'>
                                <p>Detalis</p>
                                <p></p>
                            </div>
                            <div>
                                <p>Feels like</p>
                                <p>22°C</p>
                            </div>
                            <div>
                                <p>Wind</p>
                                <p>2 m/s</p>
                            </div>
                            <div>
                                <p>Humidity</p>
                                <p>15%</p>
                            </div>
                            <div>
                                <p>Pressure</p>
                                <p> 15hPa</p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart