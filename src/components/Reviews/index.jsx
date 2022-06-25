import { dateTimeFormatter } from '../../helper';
import Card from '../UI/Card';
import ReviewForm from './ReviewFrom';
import ReviewResult from './ReviewResult';
import ReviewStats from './ReviewStats';
import styles from './index.module.scss';

const Reviews = () => {
  const date = dateTimeFormatter(new Date(), {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  return (
    <Card section={true} p={true} className={styles['review']}>
      <header className={styles['review__header']}>
        <h1 className={styles['review__heading']}>nagarro reviews</h1>
        <p className={styles['review__date']}>updated {date}</p>
      </header>
      <ReviewForm />
      <ReviewResult found={3024} total="3T" />
      <ReviewStats rating={4.3} />
    </Card>
  );
};

export default Reviews;
