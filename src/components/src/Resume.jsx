import React from 'react';
import { browserHistory } from 'react-router';
import styles from './Resume.scss';

class Resume extends React.Component {
  componentDidMount() {
    document.title = 'Resume | IMZANE.com';
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.info}>
            <span>Zane Christenson</span><br />
            Software Engineer - Bay Area <br />
            zane.c@berkeley.edu <br />
          </div>
          <div className={styles.goals}>
            <i>Seeking Internship 2018</i>
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
              Electrical Engineering Computer Science, B.S. GPA: 3.5
            </div>
            <ul>
              <li>Relevant courses: Data Structures, Artificial Intelligence,
              Software Security,Discrete math, Probability and Algorithms,
              Designing Information Systems.</li>
              <li>Participate in Hackathons, code-jams, and
              team driven side projects</li>
            </ul>
            <div className={styles.t1}>
              Santa Barbara College City - Graduated 2016
            </div>
            <div className={styles.t2}>
              Computer Engineering, Transfer GPA: 3.7 Major GPA 4.0
            </div>
            <ul>
              <li>President’s Honor Roll</li>
              <li>Participated in CS clubs and programming competitions</li>
            </ul>
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionLeft}>
            Employment
          </div>
          <div className={styles.sectionRight}>
            <div className={styles.t1}>
              Software Engineer Intern, Tesla
            </div>
            <div className={styles.t2}>
              May 2017 - December 2017
            </div>
            <ul>
              <li>Developed an enterprise toolbox system that interfaced
              with the Model 3, Model X, and Model S vehicles. System was used
              for diagnostics, manufacturing, and capturing live data feeds from
              vehicles.</li>
              <li>Contributed to the project in a fullstack role, designing and
              developing user interfaces and also maintaining backend APIs.</li>
              <li>The system was used to manufacture the very first Model 3s and
              is still in use today.</li>
            </ul>
            <div className={styles.t1}>
              QA Engineer, UC Berkeley - Student Information Systems Project
            </div>
            <div className={styles.t2}>
              December 2016 - May 2017
            </div>
            <ul>
              <li>Created an automated testing framework that resulted in the creation
              of over one hundred bug tickets.</li>
              <li>The system could test all user functionality
              in less than 30 minutes saving nearly 60 hours of human labor per
              release</li>
            </ul>
            <div className={styles.t1}>
              Software Engineer, AS-Group USA, inc
            </div>
            <div className={styles.t2}>
              November 2013 - August 2016
            </div>
            <ul>
              <li>Participated in a fullstack role at a data analytics company.</li>
              <li>Created web crawlers that collected over 2 million price and stock
              points daily.</li>
              <li>Designed, developed, and maintained five websites/platforms
               during employment.</li>
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
              Fullstack development, UI/UX design, Data mining & Analytics,
               data tool creation, Artificial Intelligence, Security,
               QA automation testing, mobile development,
               Java, C, C++, C#, PHP, JS, jQuery, React + Redux, HTML & CSS,
               TDD, swift/iOS + android, SQL and other DBMS, GIT aficionado
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionLeft}>
            Projects
          </div>
          <div className={styles.sectionRight}>
            <div className={styles.t1}>
              <div className={styles.link} onClick={() => browserHistory.push('/projects')}>
                Click here to view recent projects.
              </div>
            </div>
            <div className={styles.t2}>
              <a href="http://bitbyte.site" target="_blank" rel="noopener noreferrer">
                My old Website
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
