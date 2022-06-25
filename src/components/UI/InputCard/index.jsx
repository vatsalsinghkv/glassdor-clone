import styles from './index.module.scss';

const InputCard = ({ children, className, onClick }) => {
  return (
    <div className={`${styles.card} ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default InputCard;
