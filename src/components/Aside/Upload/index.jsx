import styles from './index.module.scss';
import Card from '../../UI/Card';

const Upload = () => {
  return (
    <Card section={true} p={true} className={styles['upload']}>
      <div className={styles['upload__left']}>
        <ion-icon name="document-text-outline"></ion-icon>
      </div>
      <div className={styles['upload__right']}>
        <h1>Your CV is Missing</h1>
        <p>
          <a href="/">Upload a CV</a> now. It's easy
        </p>
      </div>
    </Card>
  );
};

export default Upload;
