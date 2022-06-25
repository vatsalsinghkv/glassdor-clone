import styles from './index.module.scss';

const Stats = ({ children, element, className }) => {
  const classes = `${styles.stats} ${className}`;
  return (
    <div className={classes}>
      <div className={styles['stats__left']}>{element}</div>
      <div className={styles['stats__right']}>{children}</div>
    </div>
  );
};

export default Stats;
