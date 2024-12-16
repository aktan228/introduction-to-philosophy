import React from 'react'
import "./Platonism.css"
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Link } from 'react-router-dom'
const Platonism = () => {
  return (
    <>
      <Header></Header>
      <main className='platonism container'>
        <section className='platon_school'>
          <div className="palton_text_box">
            <h1 className="platon_text_title greece gold">
              Academy
            </h1>
            <p className='platon_text_def '><span className='greece gold'>Plato's Academya</span> was the first institution of higher learning in the Western world. It focused on philosophy, mathematics, and the exploration of the ideal forms underlying reality.</p>
            <div className="platon_button_father">
              {/* <button className='platon_button'><Link className='link1' to={"/Platonism"}>MORE</Link></button> */}
            </div>
          </div>
          <div className="platon_main"></div>
        </section>
        
        <div className="main_idea">
          <div className="idea_box">
            <h1 className="idea_name greece gold">Theory of Forms:</h1>
            <p className="idea_definition">Central to <span className='gold greece'> Plato's philosophy</span>, the Theory of Forms posits that the physical world is a shadow of the true, unchanging reality made up of abstract Forms.</p>
            <p className='idea_ex'>Plato illustrates his <span className='gold greece'>Theory of Ideas</span>  through the metaphor of a cave: imagine people who have lived their entire lives in a cave, facing a wall, seeing only shadows of objects projected on it. These shadows are their reality. However, the true reality lies outside the cave — it is the world of Ideas, where the actual objects casting the shadows exist. For example, if they see the shadow of a tree, the real tree exists beyond their perception. The world of Ideas is the realm of true knowledge, while the material world is merely its imperfect reflection.</p>
          </div>
          <div className="idea_img"></div>
        </div>
        <div className="main_history">
          <div className="main_history_box">
            <h1 className="history_title greece gold">History</h1>
            <p className='history'>Plato's Academy was founded around 387 BC in Athens and became the first educational organization in the history of Europe that resembled a university. Its creation is connected with Plato's desire to create a place where philosophers could study and discuss the basic issues of being, knowledge, justice and truth.</p>
          </div>
          <div className="history_img"></div>
        </div>
        <div className="main_quotes">
          <h1 className="quote_title gold greece">Key Quotes from Plato:</h1>
          <ul className='adw'>
            <div className="quote_box">
            <h1 className='quote_name gold greece'>On Knowledge</h1>
            <li className="quote1 italic">“Knowledge which is acquired under compulsion obtains no hold on the mind.”</li></div>
            <div className="quote_box">
            <h1 className='quote_name nm1 gold greece'>On Justice</h1>
            <li className="quote1 italic">“Justice means minding your own business and not meddling with other men’s concerns.”</li></div>
            <div className="quote_box">
            <h1 className='quote_name gold greece'>On Philosophy</h1>
            <li className="quote1 italic">“Philosophy begins in wonder.”</li></div>
            <div className="quote_box">
            <h1 className='quote_name nm1 gold greece'>On Education</h1>
            <li className="quote1 italic">“The direction in which education starts a man will determine his future life.”</li></div>
            {/* <div className="quote_box">
            <h1 className='quote_name gold greece'>On Virtue</h1>
            <li className="quote italic">“The measure of a man is what he does with power.”</li></div> */}
          </ul>
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Platonism