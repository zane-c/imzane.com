import React from 'react';
import { connect } from 'react-redux';
import Markdown from 'react-markdown';
import styles from './Projects.scss';
import github from './github.scss';
//import md from 'res/projects/dashclass.js';

const Projects = ({ theme }) => (
  <div className={styles.container + ' ' + (theme === 'light' ? styles.light : styles.dark)}>
    <div className={styles.content}>
      <Markdown source={null} className={github.style} />
    </div>
    <div className={styles.grower} />
  </div>
);

const mapStateToProps = state => ({
  theme: state.app.theme,
});

export default connect(mapStateToProps)(Projects);
