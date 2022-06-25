import styles from './index.module.scss';

const StarRating = ({ rating }) => {
  return <i data-star={rating} className={styles.rating}></i>;
};

export default StarRating;
