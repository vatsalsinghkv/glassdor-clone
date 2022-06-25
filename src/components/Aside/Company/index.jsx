import Card from '../../UI/Card';
import Link from '../../UI/Link';
import styles from './index.module.scss';

const Company = () => {
  return (
    <Card section={true} className={styles['company']}>
      <div className={styles['company__header']}>
        <h1 className={styles['company__heading']}>Nagarro Careers</h1>
        <img
          className={styles['company__img']}
          src="https://media.glassdoor.com/banner/bh/240077/nagarro-banner-1613642964553.jpg"
          alt="Cover for [employer]"
        />
      </div>
      <div className={styles['company__info']}>
        <p className={styles['company__text']}>
          OUR CULTURE Zeros and ones are more fun here! We work with cool tech,
          enjoy a great work-life balance, and party hard. We treat everyone...{' '}
          <a href="/"> - More</a>
        </p>

        <Link href="/">Careers at Naggaro</Link>
        <Link href="/">Crop Initiative</Link>
      </div>
    </Card>
  );
};

export default Company;
