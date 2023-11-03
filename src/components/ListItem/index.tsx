import Link from 'next/link';
import styles from './styles.module.css';
import React from 'react';

type TextProps = {
  text: string;
  isLink?: undefined;
  href?: undefined;
  period?: undefined;
  employmentStatus?: undefined;
  children?: React.ReactNode;
};

type LinkProps = {
  text: string;
  isLink: true;
  href: string;
  period?: string;
  employmentStatus?: 'フルタイム' | 'パートタイム' | 'インターン';
  children?: React.ReactNode;
};

type Props = TextProps | LinkProps;

const ListItem = ({ text, isLink, href, period, employmentStatus, children }: Props) => {
  if (isLink) {
    return (
      <li>
        <Link href={href} rel="noreferrer noopener" target="_blank">
          {text}
        </Link>
        {typeof employmentStatus === 'string' && (
          <span className={styles['employment-status']}>{employmentStatus}</span>
        )}
        {typeof period === 'string' && <span className={styles.period}>{period}</span>}
        {children !== undefined && children}
      </li>
    );
  }

  return (
    <li>
      {text}
      {children !== undefined && children}
    </li>
  );
};

export { ListItem };
