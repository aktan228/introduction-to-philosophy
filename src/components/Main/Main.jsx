import React from 'react'
import './Main.css'
import MainOrpheus from './MainOrpheus'
import Slider from './Slider'
import Platon from './Platon'
import Stoic from './Stoic'
import GreekStatuePack from './BlackWoman'


const Main = () => {
    return (
        <>
            <div className="main_container container">
                <MainOrpheus></MainOrpheus>
                <Slider></Slider>
                <Platon name_phil="Academy" className="className" definition="Plato's Academy was the first institution of higher learning in the Western world. It focused on philosophy, mathematics, and the exploration of the ideal forms underlying reality."></Platon>
                {/* <Stoic name_phil="Peripatetic School" definition="Founded by Aristotle, this school emphasized empirical observation and logical reasoning. It focused on the study of nature, ethics, politics, and the sciences."></Stoic>
                <Platon name_phil="Pyrrhonism" definition="Founded by Pyrrho of Elis, this school promoted radical skepticism. It taught that suspending judgment on all matters leads to inner peace and freedom from anxiety."> </Platon>
                <Stoic name_phil="Epicureanism" definition="Epicurus' school, known as The Garden, taught that the purpose of life is to attain happiness through pleasure, simplicity, and freedom from fear, especially fear of the gods and death."></Stoic>
                <Platon name_phil="Stoicism" definition="Zeno's Stoicism emphasized living in harmony with nature, cultivating virtue, and maintaining emotional resilience by accepting life’s events as they come."></Platon> */}
                <GreekStatuePack></GreekStatuePack>
            </div>
        </>
    )
}

export default Main