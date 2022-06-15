import React from 'react';
import styles from './style.module.css';
import logoIgnite from '../../assets/images/logo-ignite.svg';

export const Header : React.FC = () => (
  <header className={styles.header}>
    <img src={logoIgnite} alt="Logotipo do Ignite" />
    <h1>Ignite Feed</h1>
  </header>
);
