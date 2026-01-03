import './App.css'
import placeholder from './assets/placeholder_silhouette.png'

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><div className='name'><strong style={{fontSize: '1em'}}>Ben.</strong></div></li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className='home-page'>
      <div className='landing'>
      <div className='hero_text'>
        <h1>Hi, I'm <strong>Ben Rogers</strong>!</h1>
        <h2>Jr. Software Developer</h2>
      </div>
      <div className='landing-text'>
        <p>Motivated and results-driven software development graduate with an academic foundation in software development and cybersecurity. Proven leadership skills through managing teams professionally and within university work, as well as delivering aclient-focused R&D project.</p>
        <p>I am currently an IT Service Desk Technician for Hallensteins Glassons Holdings, providing support to retail stores and head office users.</p>
      </div>
      </div>
        <img className='landing-image' src={placeholder} alt='Placeholder'/>
      </div>
    </>
  )
}

export default App
