import styles from './index.module.scss';

const Input = ({ type = 'text', placeholder, className, icon }) => {
  const classes = `${styles.input} ${className}`;

  if (icon) {
    return (
      <div className={classes}>
        {icon}
        <input type={type} placeholder={placeholder} />
      </div>
    );
  }

  return <input type={type} placeholder={placeholder} className={classes} />;
};

export default Input;
