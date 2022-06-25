import styles from './index.module.scss';

const SelectOption = ({ value, selectedValue }) => {
  const isActive = selectedValue === value;
  const containerClasses = `${styles['select-option__container']} ${
    isActive ? styles.active : ''
  }`;
  return (
    <>
      <input
        type="radio"
        name="category"
        id={value}
        value={value}
        className={styles['select-option__input']}
      />
      <div className={containerClasses}>
        <ion-icon
          name="checkmark-outline"
          className={isActive ? 'visible' : ''}
        />
        <label className={styles['select-option__label']} htmlFor={value}>
          {value}
        </label>
      </div>
    </>
  );
};

export default SelectOption;
