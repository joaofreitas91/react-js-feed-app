import { ImgHTMLAttributes } from 'react';
import styles from './styles.module.css';

interface TypeAvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export const Avatar = ({ hasBorder = true, ...props }: TypeAvatarProps) => (
  // eslint-disable-next-line jsx-a11y/alt-text
  <img
    className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
    {...props}
  />
);
