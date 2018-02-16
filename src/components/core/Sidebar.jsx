import React from 'react';
import Logo from 'res/zlogo.png';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import FaToggleOn from 'react-icons/lib/fa/toggle-on';
import FaToggleOff from 'react-icons/lib/fa/toggle-off';
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

const Sidebar = ({ theme, set }) => (
  <div className={(theme === 'light') ? styles.wrapperLight : styles.wrapperDark}>
    <div className={styles.grower} />
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.title} onClick={() => hashHistory.push('/')}>
        ImZANE.com
      </div>
      <div className={styles.menu}>
        {menuItems.map(item => (
          <div
            className={styles.menuItem}
            key={item.title}
            onClick={() => hashHistory.push(item.link)}
          >
            {item.title}
          </div>
        ))}
      </div>
      <div className={styles.footer}>
        Light
        {theme === 'light' ?
          <FaToggleOff size={30} onClick={() => set('theme', 'dark')} />
          :
          <FaToggleOn size={30} onClick={() => set('theme', 'light')} />
        }
        Dark
      </div>
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
