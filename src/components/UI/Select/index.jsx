import { useState } from 'react';
import { getId } from '../../../helper';
import Card from '../Card';
import SelectOption from './SelectOption';
import InputCard from '../InputCard';
import styles from './index.module.scss';

const Select = ({ onChange, items, value, className }) => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(showOptions => !showOptions);
  };

  const valueChangeHandler = e => {
    onChange(e.target.value);
    toggleOptions();
  };

  return (
    <div className={`${styles.select} ${className}`}>
      <InputCard className={styles['select__header']} onClick={toggleOptions}>
        {value}
        {showOptions ? (
          <ion-icon name="chevron-up-outline"></ion-icon>
        ) : (
          <ion-icon name="chevron-down-outline"></ion-icon>
        )}
      </InputCard>

      {showOptions && (
        <Card className={styles.select__options} onChange={valueChangeHandler}>
          {items.map(item => (
            <SelectOption key={getId()} value={item} selectedValue={value} />
          ))}
        </Card>
      )}
    </div>
  );
};

export default Select;
