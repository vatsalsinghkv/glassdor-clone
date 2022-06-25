import styles from './index.module.scss';

const DropdownItem = ({ name }) => {
  return (
    <li>
      <a href="/" className={styles['dropdown-item']}>
        {name}
      </a>
    </li>
  );
};

export default DropdownItem;
