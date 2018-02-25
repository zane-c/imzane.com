import React from 'react';
import { browserHistory } from 'react-router';
import s1 from 'res/dashclass-thumb.png';
import s2 from 'res/dashclass2.png';
import s3 from 'res/dashclass3.png';
import styles from './styles.scss';

export default () => (
  <div className={styles.container}>
    <div className={styles.link} onClick={() => browserHistory.push('/projects')}>
      Return to projects
    </div>
    <h3>Dash Class</h3>
    <p>
      Too many times
      {'I\'ve'} gone to class to see all my peers around me on their laptops or
      phones during class doing completely unrelated things; Browsing facebook,
      internet memes, and cute animal vids. In our age of technology, we are
      addicted to stimulus response. Social interaction has changed both online
      and in person. Dash Class is an app designed to innovate the classroom
      experience by creating an interactive digital room to assist the lecturer
      deliver data to students and keep them participating and focused.
    </p>
    <h3>Features</h3>
    <h4 id="features">Features</h4>
    <ul>
      <li><strong>Creating a room</strong>
        <ul>
          <li>
            Instructors create a room with a unique room code that can be
            shared with the class
          </li>
          <li>They can create some multiple choice polls before class in a
            few simple clicks
          </li>
        </ul>
      </li>
      <li><strong>Crowd sourced questions</strong>
        <ul>
          <li>During lecture, instructors can monitor the question queue.</li>
          <li>Students can ask questions that will appear on all other
          students and the {'instructor\'s'} screen.</li>
          <li>Other students can upvote those questions to order them
          higher on the queue. How many times have you wanted to raise
          your hand but felt your question was stupid? This allows students
          to ask questions, and if other students also have that question,
          upvoting will show the instructor there are multiple students with
          the same lack of understanding</li>
          <li>Instructor can click {'\'Answered\''} on the quetion queue to remove the question</li>
        </ul>
      </li>
      <li><strong>Polls</strong>
        <ul>
          <li>During lecture, the instructor can click open on a poll and
          it will now appear on all students screens</li>
          <li>students can pick an answer</li>
          <li>once polling is complete, the instructor can click
          results and a break down of how many students chose which
          answer will display on the students screen</li>
          <li>Clicking close will end the polling period</li></ul>
      </li>
      <li><strong>Chat</strong>
        <ul>
          <li>There is a twitch style chat that can be used for students
          to reach out to one another</li>
          <li>This can be used to ask questions that can be answered by
          other students</li>
          <li>Find study partners</li>
          <li>or just have fun!</li></ul>
      </li>
    </ul>
    <h3>Development</h3>
    <p>
      This is a project that I developed at a hackathon at CAL.
    </p>
    <p>
      Check out the code repository <span className={styles.elink}>
        <a
          href="https://github.com/zane-c/Dash-Class"
          rel="noopener noreferrer"
          target="_blank"
        >here</a>
      </span><br />
      Check out it live <span className={styles.elink}>
        <a
          href="http://bitbyte.site/dashclass"
          rel="noopener noreferrer"
          target="_blank"
        >here</a>
      </span>
    </p>

    <img src={s1} alt="" />
    <img src={s2} alt="" />
    <img src={s3} alt="" />
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
