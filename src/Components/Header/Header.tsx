import React from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import BaseButton from '../Common/BaseButton';

function Header() {
  return (
    <div className={styles.mainHeaderContainer}>
      <div className={styles.mainHeaderContent}>
        <div className={styles.logo}>
          <a href='#2'>
            <img src={logo} alt='logo' />
          </a>
        </div>
        <div className={styles.serialNumberDropdown}>
          <BaseButton color='secondary'>Dropdown</BaseButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
