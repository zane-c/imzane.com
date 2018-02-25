import React from 'react';
import { browserHistory } from 'react-router';
import s1 from 'res/flow-thumb.png';
import s2 from 'res/flow2.png';
import s3 from 'res/flow3.png';
import s4 from 'res/flow4.png';
import s5 from 'res/flow5.png';
import styles from './styles.scss';

export default () => (
  <div className={styles.container}>
    <div className={styles.link} onClick={() => browserHistory.push('/projects')}>
      Return to projects
    </div>
    <h3>Flow</h3>
    <p>
      Flow is a 2D puzzle game with the simple premise of moving all the balls
      from one bin to another. Add conveyor belts, walls and other contraptions
       to manipulate the balls motion and get them into the bins. Complexity and
       obstacles quickly turn every level into a Rube Goldberg style machine.
    </p>
    <h3>Development</h3>
    <p>
      This game was developed by a few other UC Berkeley students and myself over
      the course of about three months.
    </p>
    <p>
      Check out the code repository <span className={styles.elink}>
        <a
          href="https://github.com/zane-c/flow"
          rel="noopener noreferrer"
          target="_blank"
        >here</a>
      </span><br />

      Check out the development blog <span className={styles.elink}>
        <a
          href="http://flow-the-game.blogspot.com/"
          rel="noopener noreferrer"
          target="_blank"
        >here</a>
      </span>
    </p>

    <img src={s1} alt="" />
    <img src={s2} alt="" />
    <img src={s3} alt="" />
    <img src={s4} alt="" />
    <img src={s5} alt="" />
    <br />
    <br />
    <div className={styles.link} onClick={() => browserHistory.push('/projects')}>
      Return to projects
    </div>
    <br />
    <br />
    <br />
  </div>
);
