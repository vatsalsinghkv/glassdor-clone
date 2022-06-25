import Nav from '../Nav';
import HeaderNav from '../HeaderNav';
import styles from './index.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
      <HeaderNav />
    </header>
  );
};

export default Header;
