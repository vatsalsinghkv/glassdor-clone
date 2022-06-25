import styles from './index.module.scss';
import Container from '../Container';
import Dropdown from '../UI/Dropdown';

const HeaderNav = () => {
  const list1 = [
    {
      name: 'jobs',
      icon: 'briefcase-outline',
      links: ['recent activities', 'job alerts', 'saved', 'applications'],
    },
    {
      name: 'companies',
      icon: 'business-outline',
      links: [
        'discover companies',
        'compare companies',
        'suggested follows',
        'write a review',
      ],
    },
    {
      name: 'salaries',
      icon: 'cash-outline',
      links: ['discover salary', 'add a salary'],
    },
    {
      name: 'careers',
      icon: 'compass-outline',
      links: ['discover careers', 'interview questions', 'add an interview'],
    },
  ];

  const list2 = [
    {
      name: 'for employers',
      links: [
        'unlock employer account',
        'post a job',
        'employer blog',
        'talk to sales',
      ],
    },
    {
      name: 'post jobs',
      icon: 'briefcase-outline',
    },
  ];

  return (
    <nav className={styles['nav']}>
      <Container className={styles['nav__content']}>
        <ul className={styles['nav__list']}>
          {list1.map(item => {
            const active = item.name === 'companies';
            return (
              <li
                className={`${styles['nav__item']} ${
                  active ? styles.active : ''
                }`}
              >
                <Dropdown items={item.links}>
                  {item.icon && (
                    <ion-icon
                      name={
                        active ? item.icon.replace('-outline', '') : item.icon
                      }
                    />
                  )}
                  {item.name}
                </Dropdown>
              </li>
            );
          })}
        </ul>
        <ul className={styles['nav__list']}>
          {list2.map(item => (
            <li className={styles['nav__item']}>
              <Dropdown items={item?.links}>
                {item.icon && <ion-icon name={item.icon} />}
                {item.name}
              </Dropdown>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default HeaderNav;
