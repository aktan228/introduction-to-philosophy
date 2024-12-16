import React from 'react'
import './Main.css'
import { Link  } from 'react-router-dom'
const Platon = (props, className ) => {
    // const styles ={
    //     // backgroundImg: `url(${imageUrl})`,
    //     width: `423px`,
    //     height: `272px`,
    //     backgroundRepeat: `no-repeat`,
    //     backgroundSize: `contain`,
    // }

    return (
        <section className='platon_school'>
            <div className="palton_text_box">
                <h1 className="platon_text_title greece gold">
                    {props.name_phil}
                </h1>
                <p className='platon_text_def'><span className='greece gold'>{props.scholl_name}</span>{props.definition}</p>
                <div className="platon_button_father">
                    <button className='platon_button'><Link className='link1' to={"/Platonism"}>MORE</Link></button>
                </div>
            </div>
            <div className="platon_main"></div>
        </section>
    )
}

export default Platon