import Aside from '../Aside';
import Reviews from '../Reviews';
import styles from './index.module.scss';

const Main = () => {
  return (
    <main className={styles.main}>
      <Reviews />
      <Aside />
    </main>
  );
};

export default Main;
