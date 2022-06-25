import styles from './index.module.scss';

const Circle = ({ value }) => {
  const classes = `${styles['c100']} ${styles[`p${value}`]} `;

  return (
    <div className={classes}>
      <span>{value}%</span>
      <div className={styles['slice']}>
        <div className={styles['bar']}></div>
        <div className={styles['fill']}></div>
      </div>
    </div>
  );
};

export default Circle;
