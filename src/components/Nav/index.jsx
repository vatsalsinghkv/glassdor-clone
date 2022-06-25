import styles from './index.module.scss';
import logo from '../../assets/glassdoor-logo.png';
import Form from './NavForm';
import NavIcons from './NavIcons';
import Container from '../Container';

const Nav = () => {
  return (
    <nav className={styles['nav']}>
      <Container className={styles['nav__content']}>
        <a href="/">
          <img src={logo} alt="logo" className={styles['nav__logo']} />
        </a>
        <Form />
        <NavIcons />
      </Container>
    </nav>
  );
};

export default Nav;
