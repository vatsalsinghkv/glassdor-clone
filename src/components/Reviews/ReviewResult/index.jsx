import { useState } from 'react';
import { numberFormatter } from '../../../helper';
import Select from '../../UI/Select';
import styles from './index.module.scss';

const ReviewResult = ({ found, total }) => {
  const sortTypes = [
    'Popular',
    'Highest Rating',
    'Lowest Rating',
    'Most Recent',
    'Oldest first',
  ];

  const [sort, setSort] = useState(sortTypes[0]);

  return (
    <div className={styles['result']}>
      <p className={styles['result__heading']}>
        Found <strong>{numberFormatter(found)}</strong> of over{' '}
        <strong>{total}</strong> reviews
      </p>

      <div className={styles['result__container']}>
        <label>sort</label>
        <Select
          items={sortTypes}
          value={sort}
          onChange={setSort}
          className={styles['result__select']}
        />
      </div>
    </div>
  );
};

export default ReviewResult;
