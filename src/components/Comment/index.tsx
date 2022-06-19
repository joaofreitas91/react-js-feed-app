import React from 'react';

import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

interface TypeProps {
  comment: string
  onDeleteComment: (comment: string) => void
}

export const Comment = ({ comment, onDeleteComment } :TypeProps) => {
  function handleDeleteComment() {
    onDeleteComment(comment);
  }
  return (
    <div className={styles.comment}>
      <Avatar
        src="https://avatars.githubusercontent.com/u/80129250?v=4"
        alt="avatar profile"
        hasBorder={false}
      />
      <div className={styles.commentBox}>

        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gui</strong>
              <time
                title="14 de Maio de 2010"
                dateTime="2010-05-14 09:14:33"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button type="button" title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{comment}</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp />
            Aplaudir
            <span>
              20
            </span>
          </button>
        </footer>

      </div>
    </div>
  );
};
