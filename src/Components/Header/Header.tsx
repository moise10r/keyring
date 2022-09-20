import React from 'react';
import styles from './Header.module.scss'
import logo from '../../assets/images/logo.png';

function Header() {
    return (
        <div className={styles.mainHeaderContainer}>
            <div className={styles.mainHeaderContent}>
                <div className={styles.logo}>
                    <a href="#2"><img src={logo} alt="logo" /></a>
                </div>
                <div className={styles.serialNumberDropdown}>Dropdown</div>
            </div>
        </div>
    );
}

export default Header;