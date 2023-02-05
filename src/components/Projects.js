import React from 'react';
import pic1 from '../assets/images/pic01.png';
import pic2 from '../assets/images/pic02.png';
import pic3 from '../assets/images/pic03.png';

const Projects = () => {
  return (
  <div id="projects">
    <section id="two" className="wrapper alt style2">
    <div className="inner">
      <header className="major">
        <h2>Projects</h2>
      </header>
      <div>
        <section className="spotlight">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="content">
            <h2>
            <a href="https://github.com/skowalski08/Brick-Breaker">Brick Breaker</a>
              <br />
              <p>Solo Developer</p>
            </h2>
            <ul>
              <li>Experimented with Phaser 3 2D game environment</li>
              <li>Implemented arcade physics, allowing for various sprite interaction resulting in expected outcomes</li>
              <li>Added level of complexity to game by increasing difficulty as user’s score goes up</li>
            </ul>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <div className="content">
            <h2>
            <a href="https://github.com/skrobles/serv-d">Serv'd</a>
              <br />
              <p>Full Stack Developer</p>
            </h2>
            <ul>
              <li>Helped put new technology into effect in the backend, including Koa and Firebase</li>
              <li>Produced frontend edit account view component using strictly react</li>
              <li>Implemented Google Oauth sign-in feature, which successfully adds new users to firebase</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
    </section>
  </div>
  )
}

export default Projects
