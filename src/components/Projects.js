import React from 'react';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

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
            <img src={pic1} alt="" />
          </div>
          <div className="content">
            <h2>
              <a href="https://plantasia.herokuapp.com/">Plantasia</a>
              <br />
              Full Stack Developer
            </h2>
            <ul>
              <li>Developed database schemas using Sequelize for easy data manipulations</li>
              <li>Expanded the seed file with mock data for demonstration purposes</li>
              <li>Created react-redux frontend components for user signup and login for seamless user addition to e-commerce database</li>
            </ul>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="content">
            <h2>
            <a href="https://github.com/skowalski08/Brick-Breaker">Brick Breaker</a>
              <br />
              Solo Developer
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
            <a href="https://servdapp.herokuapp.com/">Serv'd</a>
              <br />
              Full Stack Developer
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
