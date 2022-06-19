import {
  ChangeEvent, FormEvent, InvalidEvent, useState,
} from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';

import styles from './styles.module.css';

interface TypeAuthor {
  avatarUrl: string
  name: string
  rule: string
}

interface TypePost {
  type: string
  content: string[] | string
}
interface TypePosts {
  id: number
  author?: TypeAuthor
  post?: TypePost[]
  publishAt?: Date
}

export const Post = ({
  id, author, post, publishAt,
}: TypePosts) => {
  const [comments, setComments] = useState<string[]>([]);
  const [draftComment, setDraftComment] = useState('');

  const isNewCommentEmpty = draftComment.length === 0;

  function publishedDateFormatter(date: Date | undefined) {
    if (!date) {
      return;
    }

    return format(date, 'dd \'de\' LLL \'às\' HH:kk\'h\'', {
      locale: ptBR,
    });
  }

  function publishedDateRelativeToNow(date: Date | undefined) {
    if (!date) {
      return;
    }

    return formatDistanceToNow(date, {
      locale: ptBR,
      addSuffix: true,
    });
  }

  function handleSubmitComment(event: FormEvent) {
    event?.preventDefault();

    setComments([...comments, draftComment]);
    setDraftComment('');
  }

  function handleTypeComment(event: ChangeEvent<HTMLTextAreaElement>) {
    event?.target.setCustomValidity('');

    const { value } = event.target;
    setDraftComment(value);
  }

  function handleCustomValidity(event: InvalidEvent<HTMLTextAreaElement>) {
    event?.target.setCustomValidity('O Campo é obrigatório!');
  }

  function deleteComment(thisComment: string) {
    setComments((previousState) => previousState.filter((e) => e !== thisComment));
  }

  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          {author && (
          <Avatar
            src={author?.avatarUrl}
            alt="avatar profile"
          />
          )}
          <div className={styles.authorInfo}>
            <strong>{author?.name}</strong>
            <span>{author?.rule}</span>
          </div>
        </div>
        <time
          title={publishedDateFormatter(publishAt)}
          dateTime={publishAt?.toISOString()}
        >
          {publishedDateRelativeToNow(publishAt)}
        </time>
      </header>
      <div className={styles.content}>
        {post?.map((line) => (
          <div key={line.content.toString()}>
            {line.type === 'paragraph' && <p> {line.content} </p>}
            {line.type === 'link' && <p><a> {line.content} </a></p>}
            {line.type === 'hashTags' && Array.isArray(line.content) && line.content.map((hashtag) => <a key={hashtag}>{hashtag}</a>)}
          </div>
        ))}
      </div>
      <form className={styles.commentForm} onSubmit={handleSubmitComment}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe seu comentário"
          value={draftComment}
          onChange={handleTypeComment}
          required
          onInvalid={handleCustomValidity}
        />

        <footer>
          <button
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            comment={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
};
