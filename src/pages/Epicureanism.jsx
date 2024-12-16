import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
const Epicureanism = () => {
  return (
    <>
    <Header></Header>
    <main className='platonism container'>
        <section className='epicur_school'>
          <div className="palton_text_box">
            <h1 className="platon_text_title greece gold">
            Epicureanism
            </h1>
            <p className='epicur_text_def '><span className='greece gold'>Epicureanism</span>  is a philosophical school founded by Epicurus, teaching that the ultimate goal of life is to achieve happiness through the pursuit of pleasure (not excessive indulgence, but rational and moderate enjoyment) and the elimination of pain. The key principles of Epicureanism include:</p>
            <ul className='epicur_box'>
              <li><span className='gold greece'>The Concept of Pleasure:</span> Epicurus believed that the greatest good is pleasure, but he defined it as a state of tranquility (ataraxia) and freedom from physical pain (aponia). </li>
              <li><span className='gold greece'>Freedom from Fear</span>He advocated letting go of fear of gods and death, stating that gods do not interfere in human affairs and that death is simply the absence of sensation.</li>
              <li><span className='gold greece'>Simplicity of Life</span>Epicurus encouraged avoiding excess and focusing on simple pleasures such as friendship, contemplation, and fulfilling basic needs reasonably.</li>
            </ul>
            <div className="platon_button_father">
              {/* <button className='platon_button'><Link className='link1' to={"/Platonism"}>MORE</Link></button> */}
            </div>
          </div>
          <div className="epicur_main"></div>
        </section>
        {/* <div className="main_idea">
          <div className="idea_box">
            <h1 className="idea_name greece gold">Theory of Forms:</h1>
            <p className="idea_definition">Central to <span className='gold greece'> Plato's philosophy</span>, the Theory of Forms posits that the physical world is a shadow of the true, unchanging reality made up of abstract Forms.</p>
            <p className='idea_ex'>Plato illustrates his <span className='gold greece'>Theory of Ideas</span>  through the metaphor of a cave: imagine people who have lived their entire lives in a cave, facing a wall, seeing only shadows of objects projected on it. These shadows are their reality. However, the true reality lies outside the cave — it is the world of Ideas, where the actual objects casting the shadows exist. For example, if they see the shadow of a tree, the real tree exists beyond their perception. The world of Ideas is the realm of true knowledge, while the material world is merely its imperfect reflection.</p>
          </div>
          <div className="idea_img"></div>
        </div> */}
        <div className="main_history">
          <div className="main_history_box epic_box">
            <h1 className="history_title greece gold">History</h1>
            <p className='history'>Epicurus established his philosophical school, known as The Garden, around 306 BCE in Athens. Unlike other philosophical schools of the time, The Garden was open to everyone, including women and slaves.</p>
            <p>Epicurus believed that philosophy should be accessible to all and serve practical purposes in daily life.</p>
            <p>The Garden became a place where followers discussed the nature of the world, the pursuit of happiness, and the liberation from fear. Epicureans avoided political involvement, focusing on personal life and inner peace. The school thrived for centuries and left a significant legacy in Western thought.</p>
          </div>
          <div className="history_img_e"></div>
        </div>
        <div className="main_quotes1">
          <div className="quote_img1 quote"></div>
          <h3 className='quote_text greece'>"I neither affirm nor deny anything, but I investigate." - Pyrrho</h3>
        </div>
      </main>
    <Footer></Footer>
  </>
  )
}

export default Epicureanism