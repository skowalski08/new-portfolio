import React from 'react';
import config from '../../config';
import Scroll from '../components/Scroll';


const Landing = () => {
  return (
    <div id="landing">
      <section id="banner">
        <div className="inner">
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
          <ul className="actions special">
            <li>
              <Scroll type="id" element="one">
                <a href="/#" className="button primary">
                  About Me
                </a>
              </Scroll>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Landing;
