import React from 'react';
import styles from '../assets/scss/layout/Header.scss';
import {NavLink} from "react-router-dom";

export default function Header() {
    return (
        <header className={styles.Header}>
            <h1>
                <NavLink to={'/'}>Header</NavLink>
            </h1>
        </header>
    );
}