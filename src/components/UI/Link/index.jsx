import styles from './index.module.scss';

const Link = ({ href, className, children }) => {
  const classes = `${styles.link} ${className}`;
  return (
    <a href={href} className={classes}>
      <div className={styles['link__text']}>{children}</div>
      <div className={styles['link__icon']}>
        <ion-icon name="chevron-forward-outline"></ion-icon>
      </div>
    </a>
  );
};

export default Link;
