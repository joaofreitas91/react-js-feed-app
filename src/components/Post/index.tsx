import React from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

export const Post: React.FC = () => (
  <article className={styles.post}>
    <header className={styles.header}>
      <div className={styles.author}>
        <Avatar
          src="https://avatars.githubusercontent.com/u/80129250?v=4"
          alt="avatar profile"
        />
        <div className={styles.authorInfo}>
          <strong>João Paulo</strong>
          <span>Web Developer</span>
        </div>
      </div>
      <time
        title="14 de Maio de 2010"
        dateTime="2010-05-14 09:14:33"
      >
        publicado há 1h
      </time>
    </header>
    <div className={styles.content}>
      <p>Fala galeraa 👋</p>

      <p>
        Acabei de subir mais um projeto no meu portifa.
        É um projeto que fiz no NLW Return, evento da Rocketseat.
        O nome do projeto é DoctorCare 🚀
      </p>
      <p><a href="#">jane.design/doctorcare</a></p>
      <p>
        <a href="#"> #novoprojeto</a>
        <a href="#"> #nlw</a>
        <a href="#"> #rocketseat</a>
      </p>
    </div>

    <form className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>
      <textarea
        placeholder="Deixe seu comentário"
      />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>

    <div className={styles.commentList}>
      <Comment />

    </div>
  </article>
);
