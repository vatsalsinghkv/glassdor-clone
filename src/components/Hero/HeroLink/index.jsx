import DropdownContent from '../../UI/Dropdown/DropdownContent';
import styles from './index.module.scss';

const HeroLink = ({ type, value, items, active }) => {
  const linkClasses = `${styles['link']}  ${
    active === type ? styles.active : ''
  }`;

  return (
    <li className={styles['link__item']}>
      <a href="/" className={linkClasses}>
        <span className={styles['link__value']}>{value}</span>
        <span className={styles['link__type']}>{type}</span>
      </a>
      {items && (
        <DropdownContent items={items} className={styles['link__content']} />
      )}
    </li>
  );
};

export default HeroLink;
