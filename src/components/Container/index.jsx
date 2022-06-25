import styles from './index.module.scss';

const Container = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
