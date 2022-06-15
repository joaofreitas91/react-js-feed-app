import React from 'react';

import '../../global.css';
import styles from './style.module.css';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Post } from '../Post';

export const App : React.FC = () => (
  <div>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post />
      </main>
    </div>

  </div>
);
