import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function CardLink({children, to, style, bodyStyle}) {
  return (
    <Link to={to} className={clsx('card', styles.card)} style={style ? style : {}}>
      <div className={clsx('card__body')} style={bodyStyle ? bodyStyle : {}}>
        {children}
      </div>
    </Link>
  );
}
