import styles from './styles.module.css';

interface TypeAvatarProps {
  src: string
  alt: string
  hasBorder?: boolean
}

export const Avatar = ({ src, alt, hasBorder = true }: TypeAvatarProps) => (
  <img
    className={hasBorder ? styles.avatar : styles.avatarWithoutBorder}
    src={src}
    alt={alt}
  />
);
