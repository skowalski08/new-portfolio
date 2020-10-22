import React from 'react';

const WorkExp = () => {
  return (
    <div id="work">
      <section id="three" className="wrapper style3 special">
        <div className="inner">
          <header className="major">
            <h2>My Work Experience</h2>
          </header>
          <ul className="features">
            <li className="icon fa-paper-plane">
              <h3>Vendor in Bloomingdale's</h3>
              <p>
                Sale's Representative
                <br />
                September 2016 - February 2020
              </p>
              <ul>
                <li>
                Assisted operations management including conference calls, processing shipment, reporting statistics including calculating the business for daily, weekly, monthly transactions such as units per transaction, average transaction value, styles that performed based on percent up or down from year to date, operational and clientele updates, and shop comparisons by year
                </li>
                <li> Engaged customers and contributed to the shop’s daily sales target of $2,000 by meeting a personal sales goal of $500-$700 per shift</li>
              </ul>
            </li>
            <li className="icon solid fa-heart">
              <h3>St. Francis Hospital</h3>
              <p>
                Patient Care Assistant
                <br />
                April 2018 - September 2019
              </p>
              <ul>
                <li>Monitored telemetry rhythms daily for 6-13 patients daily to ensure that there were no unsafe changes in patients heart beat</li>
                <li>
                Responded immediately and appropriately during emergency situations, which includes EKGs, checking blood sugar, and even CPR and defibrillation if necessary
                </li>
              </ul>
            </li>
            <li className="icon solid fa-flag">
              <h3>Harbor Freight Tools</h3>
              <p>
                Sales Associate
                <br />
                July 2014 - September 2016
              </p>
              <ul>
                <li>
                Trained approximately 5 new hires annually on operational procedures, including equipment use and maintenance, customer service, and adhering to safety compliance standards
                </li>
                <li>
                Successfully maintained personal sales goal of over 90% sales in higher price-point warranties
                </li>
                <li>
                Contributed to building the store, including building fixtures and filling product while learning operation procedures
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>

      <section id="cta" className="wrapper style4">
        <div className="inner">
          <header>
            <h2>Arcue ut vel commodo</h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
              eleifend fringilla.
            </p>
          </header>
          <ul className="actions stacked">
            <li>
              <a href="/#" className="button fit primary">
                Activate
              </a>
            </li>
            <li>
              <a href="/#" className="button fit">
                Learn More
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}


export default WorkExp;
