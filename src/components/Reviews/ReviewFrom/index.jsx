import Button from '../../UI/Button';
import Input from '../../UI/Input';
import styles from './index.module.scss';

const ReviewForm = ({ className, onSubmit }) => {
  const classes = `${styles['form']} ${className}`;
  return (
    <form className={classes} onSubmit={onSubmit}>
      <Input
        className={styles['form__input']}
        placeholder="Search job titles"
        icon={<ion-icon name="search-outline" />}
      />
      <Button className={styles['form__btn']}>find reviews</Button>
    </form>
  );
};

export default ReviewForm;
