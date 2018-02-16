import React from 'react';
import Logo from 'res/zlogo.png';
import styles from './Sidebar.scss';

const menuItems = [
  {
    title: 'Projects',
    link: '',
    onClick: '',
  }, {
    title: 'Resume',
    link: '',
    onClick: '',
  }, {
    title: 'Skills',
    link: '',
    onClick: '',
  }, {
    title: 'Contact',
    link: '',
    onClick: '',
  },
];

const Sidebar = () => (
    <div className={styles.container}>
      <div className={styles.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={styles.title}>
        ImZANE.com
      </div>
      <div className={styles.menu}>
        {menuItems.map(item => (
          <div className={styles.menuItem} key={item.title}>
            {item.title}
          </div>
        ))}
      </div>
    </div>
);

export default Sidebar;
