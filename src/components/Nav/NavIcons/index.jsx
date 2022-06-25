import styles from './index.module.scss';
import DropdownContent from '../../UI/Dropdown/DropdownContent';
const NavIcons = () => {
  const accountItems = [
    'profile',
    'CVs',
    'job preferences',
    'contributions',
    'company follows',
    'emails & alerts',
    'account settings',
    'help center',
    'sign out',
  ];

  return (
    <div className={styles['icon-group']}>
      <ion-icon name="notifications-outline" />
      <ion-icon name="person-circle-outline" class={styles.account} />
      <DropdownContent items={accountItems} className={styles.content} />
    </div>
  );
};

export default NavIcons;
