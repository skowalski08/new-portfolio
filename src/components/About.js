import React from 'react'
import sk from '../assets/images/sk.png'

const About = () => {
  return (
    <div id="about">
        <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>
              A Little About Me
            </h2>
            <div className="selfie">
              <img src={sk} alt="" />
            </div>
            <p>
            I am a bio/pre-med student turn software engineer. In 2017, I graduated from Queens College with a bachelors in bio/pre-med. However, after working in healthcare, I realized I could put my talents to better use and I felt that tech was just the place for that. As a result, I attended The Grace Hopper Program through Fullstack Academy to help jumpstart my career as a software engineer. I have a diverse set of interests that make me a well rounded engineer, which includes  painting, make up, video games, fashion, and, of course, coding.
            </p>
          </header>
          <ul className="icons major">
            <li>
              <span className="icon fa-heart major style2">
                <span className="label">Heart</span>
              </span>
            </li>
            <li>
              <span className="icon solid fa-code major style3">
                <span className="label">Code</span>
              </span>
            </li>
            <li>
              <span className="icon fa-heart major style2">
                <span className="label">Heart</span>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default About
