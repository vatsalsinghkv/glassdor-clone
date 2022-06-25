import Company from './Company';
import Upload from './Upload';
import styles from './index.module.scss';

const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Upload />
      <Company />
    </aside>
  );
};

export default Aside;
