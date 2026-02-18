import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LucideIcon } from 'lucide-react';

import { parseClassName } from '@/utils/helpers';

import styles from './style.module.css';

type Props = {
  href: string;
  name: string;
  icon: LucideIcon;
  isClose?: boolean;
};

const SidebarNavigationItem: React.FC<Props> = ({ href, name, icon: Icon, isClose }) => {
  const pathname = usePathname();
  return (
    <div className={parseClassName([styles.relative, pathname === href ? styles.active : ""])}>
      <Link href={{pathname: href, query: isClose ? "closed" : undefined}}  className={parseClassName([styles.item, isClose ? styles.center : ""])}>
        <Icon className={styles.icon} absoluteStrokeWidth /> 
        {!isClose && <span className={styles.name}>{name}</span>}        
      </Link>
    </div>
  );
};

export default SidebarNavigationItem;