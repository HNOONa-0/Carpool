import React from 'react'
import './card.css'
const card = () => {
    return (
        <>
        <div className='content'>
            <div className='content-row'>
                <h1 className='big-title'>Top Car</h1>
            </div>
            <div className='content-row'>
                <div className='content-groups'>
                    <div className='card'>
                        <div className='card-body'>
                            <img className='img-cars' src={require('../images/308.png')} />
                        </div>
                        <div className='card-footer'>
                            <div className='card-footer-top'>
                                <h3 className='car-title'> CarName</h3>
                                <p className='per-day'>Per Day :<span className='bold-price'>$200</span></p>
                            </div>
                            <div className='card-footer-buttom'>
                                <button className='rent-now'>Rent Now </button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img className='img-cars' src={require('../images/sonata.png')} />
                        </div>
                        <div className='card-footer'>
                            <div className='card-footer-top'>
                                <h3 className='car-title'> CarName</h3>
                                <p className='per-day'>Per Day :<span className='bold-price'>$200</span></p>
                            </div>
                            <div className='card-footer-buttom'>
                                <button className='rent-now'>Rent Now </button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img className='img-cars' src={require('../images/cactus.png')} />
                        </div>
                        <div className='card-footer'>
                            <div className='card-footer-top'>
                                <h3 className='car-title'> CarName</h3>
                                <p className='per-day'>Per Day :<span className='bold-price'>$200</span></p>
                            </div>
                            <div className='card-footer-buttom'>
                                <button className='rent-now'>Rent Now </button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img className='img-cars' src={require('../images/2008.png')} />
                        </div>
                        <div className='card-footer'>
                            <div className='card-footer-top'>
                                <h3 className='car-title'> CarName</h3>
                                <p className='per-day'>Per Day :<span className='bold-price'>$200</span></p>
                            </div>
                            <div className='card-footer-buttom'>
                                <button className='rent-now'>Rent Now </button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img className='img-cars' src={require('../images/3008.png')} />
                        </div>
                        <div className='card-footer'>
                            <div className='card-footer-top'>
                                <h3 className='car-title'> CarName</h3>
                                <p className='per-day'>Per Day :<span className='bold-price'>$200</span></p>
                            </div>
                            <div className='card-footer-buttom'>
                                <button className='rent-now'>Rent Now </button>
                            </div>
                        </div>
                    </div>
                    <div className='card'>
                        <div className='card-body'>
                            <img className='img-cars' src={require('../images/berlingo.png')} />
                        </div>
                        <div className='card-footer'>
                            <div className='card-footer-top'>
                                <h3 className='car-title'> CarName</h3>
                                <p className='per-day'>Per Day :<span className='bold-price'>$200</span></p>
                            </div>
                            <div className='card-footer-buttom'>
                                <button className='rent-now'>Rent Now </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default card
