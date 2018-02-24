import React from 'react';
import { browserHistory } from 'react-router';
import ASThumb from 'res/as-thumb.png';
import DCThumb from 'res/dashclass-thumb.png';
import CRYPTOThumb from 'res/crypto-thumb.png';
import FLOWThumb from 'res/flow-thumb.png';
import BBThumb from 'res/bb.png';
import gh from 'res/gh.png';
import styles from './Projects.scss';

class Projects extends React.Component {
  componentDidMount() {
    document.title = 'Projects | IMZANE.com';
  }
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.t0}>
          {'Recent Projects'}
        </div>
        <div
          className={styles.section}
          onClick={() => browserHistory.push('/projects/authenticated-services')}
        >
          <img src={ASThumb} alt="Authenticated Services" />
          <div className={styles.overlay}>
            <div className={styles.t1}>
              Authenticated Services
            </div>
            <div className={styles.t2}>
              data analytics platform.
            </div>
          </div>
        </div>

        <div
          className={styles.section}
          onClick={() => browserHistory.push('/projects/flow')}
        >
          <img src={FLOWThumb} alt="flow" />
          <div className={styles.overlay}>
            <div className={styles.t1}>
              Flow
            </div>
            <div className={styles.t2}>
              a 2D puzzle game
            </div>
          </div>
        </div>

        <div
          className={styles.section}
          onClick={() => browserHistory.push('/projects/dashclass')}
        >
          <img src={DCThumb} alt="Dash Class" />
          <div className={styles.overlay}>
            <div className={styles.t1}>
              Dash Class
            </div>
            <div className={styles.t2}>
              an interactive classroom environment
            </div>
          </div>
        </div>

        <a
          href="https://github.com/zane-c/Steganography-Encryption"
          target="__blank"
          rel="noopner noreferrer"
          className={styles.section}
        >
          <img src={CRYPTOThumb} alt="Steganography" />
          <div className={styles.overlay}>
            <div className={styles.t1}>
              Steganography Encryption
            </div>
            <div className={styles.t2}>
              encrypt hidden messages into images.
            </div>
          </div>
        </a>
        <div className={styles.t0}>
          {'Other Projects'}
        </div>
        <a
          href="https://github.com/zane-c?tab=repositories"
          target="__blank"
          rel="noopner noreferrer"
          className={styles.section}
        >
          <img src={gh} alt="" />
          <div className={styles.overlay}>
            <div className={styles.t1}>
              My Github
            </div>
            <div className={styles.t2}>
              see all my repositories and contributions.
            </div>
          </div>
        </a>
        <a
          href="http://bitbyte.site"
          target="__blank"
          rel="noopner noreferrer"
          className={styles.section}
        >
          <img src={BBThumb} alt="" />
          <div className={styles.overlay}>
            <div className={styles.t1}>
              My Old Website
            </div>
            <div className={styles.t2}>
              see some of my old projects.
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Projects;
