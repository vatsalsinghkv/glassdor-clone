import DropdownContent from './DropdownContent';
import styles from './index.module.scss';

const Dropdown = ({ children, items }) => {
  return (
    <div className={styles['dropdown']}>
      <button className={`${styles['dropdown__btn']} btn`}>{children}</button>
      {items && (
        <DropdownContent
          items={items}
          className={styles['dropdown__content']}
        />
      )}
    </div>
  );
};

export default Dropdown;
