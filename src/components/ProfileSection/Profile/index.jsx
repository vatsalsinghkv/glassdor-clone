import styles from './index.module.scss';

const Profile = ({ src, alt, className }) => {
  const classes = `${className} ${styles.profile}`;
  return (
    <span className={classes}>
      <img src={src} alt={alt} />
    </span>
  );
};

export default Profile;
