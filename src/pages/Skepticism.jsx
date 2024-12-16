import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import "./Skepticism.css"
const Skepticism = () => {
  return (
    <>
      <Header></Header>
      <main className='platonism container'>
        <section className='platon_school'>
          <div className="palton_text_box">
            <h1 className="platon_text_title greece gold">
              Skepticism
            </h1>
            <p className='platon_text_def '><span className='greece gold'>Skepticism </span>is a philosophical approach that questions the possibility of absolute knowledge or certainty. Skeptics argue that human perceptions and beliefs are often unreliable, emphasizing doubt and critical examination of dogmas and widely accepted truths.</p>
            <div className="platon_button_father">
              {/* <button className='platon_button'><Link className='link1' to={"/Platonism"}>MORE</Link></button> */}
            </div>
          </div>
          <div className="skep_main"></div>
        </section>
        {/* <div className="main_idea">
          <div className="idea_box">
            <h1 className="idea_name greece gold">Theory of Forms:</h1>
            <p className="idea_definition">Central to <span className='gold greece'> Plato's philosophy</span>, the Theory of Forms posits that the physical world is a shadow of the true, unchanging reality made up of abstract Forms.</p>
            <p className='idea_ex'>Plato illustrates his <span className='gold greece'>Theory of Ideas</span>  through the metaphor of a cave: imagine people who have lived their entire lives in a cave, facing a wall, seeing only shadows of objects projected on it. These shadows are their reality. However, the true reality lies outside the cave — it is the world of Ideas, where the actual objects casting the shadows exist. For example, if they see the shadow of a tree, the real tree exists beyond their perception. The world of Ideas is the realm of true knowledge, while the material world is merely its imperfect reflection.</p>
          </div>
          <div className="skepcisim_img"></div>
        </div> */}
        <div className="main_history">
          <div className="main_history_box">
            <h1 className="history_title greece gold">History of Origin</h1>
            <p className='history1'>Skepticism emerged in Ancient Greece during the 4th–3rd centuries BCE. Its classical roots are attributed to Pyrrho of Elis (360–270 BCE), who believed that humans cannot achieve certainty in their perceptions or reasoning. His ideas were later developed by Sextus Empiricus, who systematized ancient skeptical arguments.</p>
            <p className="history1">
              During the Renaissance and the Enlightenment, skepticism regained prominence. Philosophers like Michel de Montaigne and David Hume applied skeptical reasoning to empirical science, religion, and metaphysics, influencing modern critical philosophy and the scientific method.</p>
          </div>
          <div className="skepcisim_img"></div>
        </div>
        <div className="main_quotes1">
          <div className="quote_img1 quote"></div>
          <h3 className='quote_text greece'>"I neither affirm nor deny anything, but I investigate." - Pyrrho</h3>
          {/* <h1 className="quote_title gold greece">Key Quotes from Plato:</h1>
          <ul className='adw'>
            <h1 className='quote_name gold greece'>On Knowledge</h1>
            <li className="quote italic">“Knowledge which is acquired under compulsion obtains no hold on the mind.”</li>
            <h1 className='quote_name nm1 gold greece'>On Justice</h1>
            <li className="quote italic">“Justice means minding your own business and not meddling with other men’s concerns.”</li>
            <h1 className='quote_name gold greece'>On Philosophy</h1>
            <li className="quote italic">“Philosophy begins in wonder.”</li>
            <h1 className='quote_name nm1 gold greece'>On Education</h1>
            <li className="quote italic">“The direction in which education starts a man will determine his future life.”</li>
            <h1 className='quote_name gold greece'>On Virtue</h1>
            <li className="quote italic">“The measure of a man is what he does with power.”</li>
          </ul> */}
        </div>
      </main>
      <Footer></Footer>
    </>
  )
}

export default Skepticism