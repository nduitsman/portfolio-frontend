import React from 'react'
import { Link } from 'react-router-dom'


function Home(props) {
  return (
    <div className='homeContainer'>
        <p className="nick homeLink">nick</p>
        <p className="duitsman homeLink">duitsman</p>
        <p className="resume homeLink"><Link to="/about" data-text="resume" id="horiz">resume</Link></p>
        <p className="contact homeLink"><Link to="/about" data-text="contact" id="vert">contact</Link></p>
        <p className="about homeLink"><Link to="/about" data-text="about" id="vert">about</Link></p>
        <p className="github homeLink"><Link to="/projects" data-text="github" id="horiz">github</Link></p>
        <p className="goals homeLink"><Link to="/about" data-text="goals" id="horiz">goals</Link></p>
        <p className="experience homeLink"><Link to="/about" data-text="experience" id="vert">experience</Link></p>
        <p className="future homeLink"><Link to="/about" data-text="future" id="horiz">future</Link></p>
        <p className="projects homeLink"><Link to="/projects" data-text="projects" id="vert">projects</Link></p>
        <p className="codepen homeLink"><Link to="/about" data-text="codepen" id="horiz">codepen</Link></p>
    </div>
  )
}

export default Home