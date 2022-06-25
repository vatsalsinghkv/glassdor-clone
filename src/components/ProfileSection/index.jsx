import Profile from './Profile';
import styles from './index.module.scss';

const ProfileSection = ({ name, status }) => {
  return (
    <section className={styles['profile-section']}>
      <Profile
        src="https://media.glassdoor.com/sql/240077/nagarro-squareLogo-1625723921674.png"
        alt="logo"
      />

      <h1 className={styles['profile-section__name']}>{name}</h1>

      <div className={styles['active-status']}>
        <ion-icon name="ellipse"></ion-icon>
        {status} employer
      </div>
    </section>
  );
};

export default ProfileSection;
