import { getId } from '../../../../helper';
import DropdownItem from '../DropdownItem';
import styles from './index.module.scss';

const DropdownContent = ({ items, className }) => {
  const classes = `${className} ${styles['dropdown-content']}`;

  return (
    <ul className={classes}>
      {items.map(item => (
        <DropdownItem key={getId()} name={item} />
      ))}
    </ul>
  );
};

export default DropdownContent;
