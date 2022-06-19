import React from 'react';

import '../../global.css';
import styles from './style.module.css';

import { Header } from '../Header';
import { Sidebar } from '../Sidebar';
import { Post } from '../Post';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/80129250?v=4',
      name: 'João Paulo',
      rule: 'Web Developer',
    },
    post: [
      { type: 'paragraph', content: 'Fala Galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'joao.developer/doctorcare' },
      { type: 'hashTags', content: ['#novoProjeto', '#NLW', '#Rocketseat'] },
    ],
    publishAt: new Date('2021-04-18  10:29:33'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/89170849?v=4',
      name: 'Matheus Oliveira',
      rule: 'Analista de Dados',
    },
    post: [
      { type: 'paragraph', content: 'Fala Galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'matheus.developer/doctorcare' },
      { type: 'hashTags', content: ['#novoProjeto', '#NLW', '#Rocketseat'] },
    ],
    publishAt: new Date('2022-06-15  10:29:33'),
  },
];

export const App : React.FC = () => (
  <div>
    <Header />
    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(({
          id, author, post, publishAt,
        }) => (
          <Post
            key={id}
            id={id}
            author={author}
            post={post}
            publishAt={publishAt}
          />
        ))}
      </main>
    </div>

  </div>
);
