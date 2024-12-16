import React from 'react'
import "./Main.css"
const Stoic = (props) => {
    return (
        <section className='stoic_school'>
            <div className="palton_text_box">
                <h1 className="platon_text_title greece gold">
                    {props.name_phil}
                </h1>
                <p className='platon_text_def'><span className='greece gold'>{props.scholl_name}</span>{props.definition}</p>
                <div className="platon_button_father">
                    <button className='platon_button'>MORE</button>
                </div>
            </div>
            <div className='platon_main'></div>
        </section>
    )
}

export default Stoic