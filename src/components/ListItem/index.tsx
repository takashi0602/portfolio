import Link from 'next/link';
import styles from './styles.module.css';
import React from 'react';

type Props = {
  text: string;
  isLink?: boolean;
  href?: string;
  period?: string;
  employmentStatus?: 'フルタイム' | 'パートタイム' | 'インターン';
  children?: React.ReactNode;
};

const ListItem = ({
  text,
  isLink = false,
  href = '',
  period,
  employmentStatus,
  children,
}: Props) => {
  if (isLink) {
    return (
      <li>
        <Link href={href} rel="noreferrer noopener" target="_blank">
          {text}
        </Link>
        {typeof employmentStatus === 'string' && (
          <span className={styles['employment-status']}>{employmentStatus}</span>
        )}
        {period}
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
