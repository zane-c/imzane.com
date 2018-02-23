import React from 'react';
import Logo from 'res/zlogo.png';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { setState } from 'src/actions/app.js';
import styles from './Sidebar.scss';

const menuItems = [
  {
    title: 'Projects',
    link: '/projects',
  }, {
    title: 'Resume',
    link: '/resume',
  }, {
    title: 'Skills',
    link: '/skills',
  }, {
    title: 'Contact',
    link: '/contact',
  },
];

const Sidebar = () => (
  <div className={styles.container}>
    <div className={styles.menu}>
      {menuItems.map(item => (
        <div
          className={styles.menuItem}
          key={item.title}
          onClick={() => browserHistory.push(item.link)}
        >
          {item.title}
        </div>
      ))}
    </div>
  </div>
);

const mapStateToProps = state => ({
  theme: state.app.theme,
});

const mapDispatchToProps = dispatch => ({
  set: (k, v) => dispatch(setState(k, v)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
