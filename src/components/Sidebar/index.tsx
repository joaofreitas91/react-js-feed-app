import React from 'react';

import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export const Sidebar: React.FC = () => (
  <aside className={styles.sidebar}>
    <img
      className={styles.cover}
      src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=350&q=40"
      alt="cover"
    />

    <div className={styles.profile}>
      <img
        className={styles.avatar}
        src="https://avatars.githubusercontent.com/u/80129250?v=4"
        alt="avatar profile"
      />
      <strong>João Paulo</strong>
      <span>Web Developer</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine />
        Editar seu Perfil
      </a>
    </footer>
  </aside>
);
