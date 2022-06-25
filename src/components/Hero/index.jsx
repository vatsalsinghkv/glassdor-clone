import HeroLinks from './HeroLinks';
import ProfileSection from '../ProfileSection';
import Card from '../UI/Card';
import styles from './index.module.scss';

const Hero = () => {
  return (
    <Card className={styles.hero}>
      <div className={styles['hero__img']}>
        <img
          alt="Cover for Nagarro"
          src="https://media.glassdoor.com/banner/bh/240077/nagarro-banner-1613642964553.jpg"
        />
      </div>
      <ProfileSection name="nagarro" status="engaged" />
      <HeroLinks />
    </Card>
  );
};

export default Hero;
