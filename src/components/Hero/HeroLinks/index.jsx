import { useState } from 'react';
import HeroLink from '../HeroLink';
import Button from '../../UI/Button';
import styles from './index.module.scss';

const HeroLinks = () => {
  const [text, setText] = useState('follow');

  const links = [
    { type: 'reviews', value: '3.2k' },
    { type: 'jobs', value: '69' },
    { type: 'salaries', value: '2.9k' },
    { type: 'interviews', value: '1.1k' },
    { type: 'benefits', value: '621' },
    { type: 'photos', value: '70' },
  ];

  const overviews = ['company overview', 'locations', 'FAQ'];
  const overviewEl = (
    <p>
      overview
      <ion-icon name="chevron-down-outline" />
    </p>
  );
  const clickHandler = () => {
    setText(prev => (prev === 'follow' ? 'following' : 'follow'));
  };

  return (
    <div className={styles['links']}>
      <nav>
        <ul className={styles['links__nav']}>
          <HeroLink
            type={overviewEl}
            value={<ion-icon name="disc-outline" />}
            items={overviews}
          />
          {links.map(link => (
            <HeroLink type={link.type} value={link.value} active="reviews" />
          ))}
        </ul>
      </nav>

      <div className={styles['btn-group']}>
        <Button type="outline" onClick={clickHandler}>
          {text}
        </Button>
        <Button>
          <ion-icon name="add-outline" />
          Add a Review
        </Button>
      </div>
    </div>
  );
};

export default HeroLinks;
