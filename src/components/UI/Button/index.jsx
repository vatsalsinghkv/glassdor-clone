import styles from './index.module.scss';

const Button = ({ children, onClick, className, type }) => {
  const classes = `btn ${styles.btn}  ${styles[type]} ${className}`;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
