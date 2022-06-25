import { useState } from 'react';
import Input from '../../UI/Input';
import Select from '../../UI/Select';
import Button from '../../UI/Button';

import styles from './index.module.scss';

const NavForm = ({ onSubmit, className }) => {
  const categories = ['job', 'companies', 'salaries', 'interviews'];

  const classes = `${styles['form']} ${className}`;

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <form className={classes} onSubmit={onSubmit}>
      <Input
        className={styles['form__input']}
        placeholder="Company Name"
        icon={<ion-icon name="search-outline" />}
      />
      <Select
        className={styles['form__select']}
        value={selectedCategory}
        items={categories}
        onChange={setSelectedCategory}
      />
      <Input className={styles['form__input']} placeholder="Location" />
      <Button type="success">Search</Button>
    </form>
  );
};

export default NavForm;
