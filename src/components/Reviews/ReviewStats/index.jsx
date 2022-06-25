import StarRating from '../../UI/StarRating';
import Stats from './Stats';
import Circle from '../../UI/Circle';
import { numberFormatter } from '../../../helper';
import styles from './index.module.scss';

const ReviewStats = ({ rating }) => {
  return (
    <div className={styles['stats']}>
      <div className={styles['stats__rating']}>
        <span className={styles['stats__rating--value']}>{rating}</span>{' '}
        <StarRating rating={rating} />
      </div>

      <div className={styles['stats__table']}>
        <Stats element={<Circle value={90} />}>
          <p>Recommend to a friend</p>
        </Stats>
        <Stats element={<Circle value={94} />}>
          <p>Approve of CEO</p>
        </Stats>
        <Stats
          element={
            <img
              alt="Nagarro CEO Manas Fuloria"
              src="https://media.glassdoor.com/people/sql/240077/nagarro-ceo1535461309310.png"
            />
          }
        >
          <p>Manas Fuloria</p>
          <p className={styles['sub']}>{numberFormatter(1943)} ratings</p>
        </Stats>
      </div>
    </div>
  );
};

export default ReviewStats;
