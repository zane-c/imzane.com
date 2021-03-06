import React from 'react';
import { browserHistory } from 'react-router';
import styles from './Resume.scss';

class Resume extends React.Component {
  componentDidMount() {
    // document.title = 'Resume | imZane.com';
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.info}>
            <span>Zane Christenson</span><br />
            Software Engineer<br />
            zane.c@berkeley.edu<br />
          </div>
          <div className={styles.goals}>
            <i>Graduating December 2018</i>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionLeft}>
            Education
          </div>
          <div className={styles.sectionRight}>
            <div className={styles.t1}>
              University of California, Berkeley - 2016 - December 2018
            </div>
            <div className={styles.t2}>
              Electrical Engineering Computer Science, B.S. GPA: 3.6
            </div>
            <ul>
              <li>Relevant courses: data structures, artificial intelligence,
              software security, discrete math, probability and algorithms,
              designing information systems, Human Computer Interaction, Operating Systems.</li>
              <li>Participating in Hackathons, code-jams, and
              team driven side projects.</li>
            </ul>
            <div className={styles.t1}>
              Santa Barbara College City - Graduated 2016
            </div>
            <div className={styles.t2}>
              Computer Engineering, Transfer GPA: 3.7 Major GPA 4.0
            </div>
            <ul>
              <li>President’s Honor Roll.</li>
              <li>Participated in CS clubs and programming competitions.</li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionLeft}>
            Employment
          </div>
          <div className={styles.sectionRight}>
            <div className={styles.t1}>
              Enterprise Software Engineering Intern, SpaceX
            </div>
            <div className={styles.t2}>
              May 2018 - <i>August 2018</i>
            </div>
            <ul>
              <li>
                Developed enterprise tools and platforms used for manufacturing the Falcon 9,
                Falcon Heavy, and Crew Dragon vehicles. Used by ~7,000 users.
              </li>
              <li>
                Implemented fullstack features in manufacturing systems to prevent bad data
                that resulted in thousands of hours of wasted labor and hundreds of
                thousands of dollars in scrapped materials.
              </li>
              <li>
                All code written had 100% integration and unit test code line coverage
              </li>
            </ul>
            <div className={styles.t1}>
              Software Engineer Intern, Tesla
            </div>
            <div className={styles.t2}>
              May 2017 - December 2017
            </div>
            <ul>
              <li>
              Developed an enterprise toolbox system that interfaced with the Model 3,
              Model X, and Model S vehicles. System was used for diagnostics,
              manufacturing, and capturing live data feeds from vehicles.
              </li>
              <li>
                Contributed to the project in a fullstack role, designing and developing user
                interfaces and also maintaining backend APIs. The system was used to
                manufacture the very first Model 3s and is still in use today.
              </li>
            </ul>
            <div className={styles.t1}>
              QA Engineer, UC Berkeley - Student Information Systems Project
            </div>
            <div className={styles.t2}>
              December 2016 - May 2017
            </div>
            <ul>
              <li>
                Created an automated testing framework that resulted in the creation of over
                two hundred bug tickets.The system could test all user functionality in less
                than 30 minutes saving nearly 60 hours of human labor per release.
              </li>
            </ul>
            <div className={styles.t1}>
              Software Engineer, AS-Group USA, INC.
            </div>
            <div className={styles.t2}>
              November 2013 - August 2016
            </div>
            <ul>
              <li>Created web crawlers that collected over 2 million price and stock points daily.</li>
              <li>
                Fullstack role designing, developing, and maintaining five websites/platforms
                during employment.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionLeft}>
            Skillset
          </div>
          <div className={styles.sectionRight}>
            <div className={styles.t1}>
              Preferred languages:
            </div>
            <div className={styles.t2}>
              Python & React Javascript & Java
            </div>
            <div className={styles.t1}>
              Areas of expertise:
            </div>
              Fullstack development, UI/UX design, data mining & analytics,
               data tool creation, artificial intelligence, security,
               QA automation testing, mobile development,
               Java, C, C++, C#, PHP, Python, Ruby, JS, jQuery, React + Redux, HTML & CSS,
               TDD, Swift/iOS + Android, SQL and other DBMS, GIT aficionado.
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionLeft}>
            Project Links
          </div>
          <div className={styles.sectionRight}>
            <div className={styles.t2}>
              <div className={styles.link} onClick={() => browserHistory.push('/projects')}>
                Recent projects.
              </div>
            </div>
            <div className={styles.t2}>
              <a href="http://bitbyte.site" target="_blank" rel="noopener noreferrer">
                My old website
              </a>
            </div>
            <div className={styles.t2}>
              <a href="https://github.com/zane-c" target="_blank" rel="noopener noreferrer">
                My github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
