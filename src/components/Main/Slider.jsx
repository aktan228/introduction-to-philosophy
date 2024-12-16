// import './Main.css'
// import React from 'react'

// const Slider = () => {
//   return (
//     <section className='section_slider'>
//         <h1 className='slider_title greece gold'>Kinds of philosophical schools</h1>
//     </section>
// )
// }

// export default Slider
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import './Main.css'


export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

    <Slider {...settings}>

      <div className="aristotel" style="width: 100%; display: none;">
        <div className="jcsb">
          <div className="aristotel_img slider_img"></div>
          <div className="slider_text_box">
            <h1 className="slider_title greece gold">Aristotle </h1>
            <p className="slider_text">Aristotle was a student of Plato and the tutor of Alexander the Great. He founded the Lyceum in Athens and is known for developing formal logic, ethics, and numerous scientific disciplines. His works covered topics ranging from metaphysics to biology and politics, profoundly influencing Western thought.
            </p>
          <button className="slider_button gold"><Link to={"/Aristotelianism"}>MORE</Link></button>

          </div>
        </div>
      </div>
      <div className="piron">
        <div className="jcsb">
          <div className="piron_img slider_img"></div>
          <div className="slider_text_box">
            <h1 className="slider_title greece gold" >Pyrrho of Elis</h1>
            <p className="slider_text">Pyrrho is considered the founder of Skepticism, a school of thought that advocated suspending judgment to achieve tranquility. His philosophy focused on questioning dogmatic beliefs and promoting a life free from anxiety and doubt.</p>
            <button className="slider_button gold"><Link to={"/Skepticism"}>MORE</Link></button>
          </div>
        </div>
      </div>
      <div className="platon">
        <div className="jcsb">
          <div className="platon_img slider_img"></div>
          <div className="slider_text_box">
            <h1 className="slider_title greece gold">Platon</h1>
            <p className="slider_text"> A student of Socrates and the teacher of Aristotle, Plato is famous for his Theory of Forms and dialogues such as The Republic. He explored justice, morality, and the nature of reality, emphasizing the existence of an ideal world beyond physical perception.</p>
            <button className="slider_button gold"><Link to={"/Platonism"}>ЬЩКУ</Link></button>
            </div>
        </div>
      </div>
      <div className="epicur">
        <div className="jcsb">
          <div className="epicur_img slider_img"></div>
          <div className="slider_text_box">
            <h1 className="slider_title greece gold">Epicurus</h1>
            <p className="slider_text">Epicurus taught that the goal of life is happiness, achieved through pleasure and the absence of pain. His school, known as The Garden, emphasized simple living, friendship, and a rational understanding of the universe to overcome fear.</p>
            <button className="slider_button gold"><Link to={'/Epicureanism'}>MORE</Link></button>
            </div>
        </div>
      </div>
      <div className="zenon">
        <div className="jcsb">
          <div className="zenon_ing slider_img"></div>
          <div className="slider_text_box">
            <h1 className="slider_title greece gold">Zeno of Citium</h1>
            <p className="slider_text">Zeno established Stoicism, a philosophy centered on living in harmony with nature and practicing self-control. He emphasized the importance of rationality, virtue, and accepting the events of life with equanimity.</p>
            <button className="slider_button gold"><Link to={'/Stoicism'}>MORE</Link></button>
            </div>
        </div>
      </div>
    </Slider>
  );
}