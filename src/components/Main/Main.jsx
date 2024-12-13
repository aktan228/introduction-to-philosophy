import React from 'react'
import './Main.css'
import MainOrpheus from './MainOrpheus'
import Slider from './Slider'
import Platon from './Platon'
const Main = () => {
    return (
        <>
            <div className="main_container container">
                <MainOrpheus></MainOrpheus>
                <Slider></Slider>
                <Platon></Platon>
            </div>
        </>
    )
}

export default Main