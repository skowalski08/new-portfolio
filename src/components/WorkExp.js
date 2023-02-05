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
          <div className="dropdown">
              <li className="icon solid fa-flag">
                <h3>Jericho School District</h3>
                <p>
                  Inclusion Aide
                  <br />
                  October 2022 - Present
                </p>
                <div className="dropdown-content">
                  <ul>
                    <li>
                    Assisting in maintaining a safe learning environment and collect data on student progress
                    </li>
                    <li>
                    Supervising classroom and community activities of individuals ranging from ages 16 to 21
                    </li>
                    <li>
                    Providing modifications to help students complete classwork and internships
                    </li>
                  </ul>
                </div>
              </li>
            </div>
            <div className="dropdown">
              <li className="icon solid fa-heart">
                <h3>Chembio Diagnostic Systems Inc.</h3>
                <p>
                  Quality Control Analyst II
                  <br />
                  September 2021 - October 2022
                </p>
                <div className="dropdown-content">
                  <ul>
                    <li>
                    Executed various tests to establish lower limit detection of medical devices as well as specificity and reproducibility testing
                    </li>
                    <li>
                    Interpreted manufacturing deviations , out of specification (OOS) investigations, procedure revision, and trend analysis
                    </li>
                    <li>
                    Adopted good manufacturing practices (GMPs) in the development of class 3 medical devices
                    </li>
                  </ul>
                </div>
              </li>
            </div>
            <div className="dropdown">
              <li className="icon fa-paper-plane">
                <h3>Vendor in Bloomingdale's</h3>
                <p>
                  Sale's Representative
                  <br />
                  September 2016 - February 2020
                </p>
                <div className="dropdown-content">
                  <ul>
                    <li>
                    Assisted operations management including conference calls, processing shipment, reporting statistics including calculating the business for daily, weekly, monthly transactions such as units per transaction, average transaction value, styles that performed based on percent up or down from year to date, operational and clientele updates, and shop comparisons by year
                    </li>
                    <li> Engaged customers and contributed to the shop’s daily sales target of $2,000 by meeting a personal sales goal of $500-$700 per shift</li>
                  </ul>
                </div>
              </li>
            </div>
            <div className="dropdown">
              <li className="icon solid fa-flag">
                <h3>St. Francis Hospital</h3>
                <p>
                  Patient Care Assistant
                  <br />
                  April 2018 - September 2019
                </p>
                <div className="dropdown-content">
                  <ul>
                    <li>Monitored telemetry rhythms daily for 6-13 patients daily to ensure that there were no unsafe changes in patients heart beat</li>
                    <li>
                    Responded immediately and appropriately during emergency situations, which includes EKGs, checking blood sugar, and even CPR and defibrillation if necessary
                    </li>
                  </ul>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </section>

      <section id="cta" className="wrapper style4">
        <div className="inner">
          <header>
            <h2>Connect with me!</h2>
            <p>
              Find me on Linkedin and Github!
            </p>
          </header>
        </div>
      </section>
    </div>
  )
}

export default WorkExp;
