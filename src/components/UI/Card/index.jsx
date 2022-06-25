import styles from './index.module.scss';

const Card = ({ children, className, onChange, onClick, section, p }) => {
  if (section) {
    return (
      <section
        className={`${styles.card} ${styles.section} ${className} ${
          p ? styles.p : ''
        }`}
        onClick={onClick}
        onChange={onChange}
      >
        {children}
      </section>
    );
  }

  return (
    <div
      className={`${styles.card} ${className}`}
      onClick={onClick}
      onChange={onChange}
    >
      {children}
    </div>
  );
};

export default Card;
