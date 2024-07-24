import React from 'react';
import { ArrowRightFromLine, LucideIcon } from 'lucide-react';

import styles from './style.module.css';
import SidebarNavigationDivider from './SidebarNavigationDivider';
import SidebarNavigationItem from './SidebarNavigationItem';

type NavigationItem = {
  href: string;
  icon: LucideIcon;
  name: string;
};

type Navigation = {
  separator: boolean;
  header?: string;
  items: Array<NavigationItem>;
};

type Props = {
  navigation: Array<Navigation>;
  isClose: boolean;
  onToggle: () => void;
};

const SidebarNavigation: React.FC<Props> = ({ navigation, isClose, onToggle }) => {
  return (
    <div className={styles.navigation}>
      {isClose && (
        <button type="button" className={styles.button} onClick={onToggle}>
          <ArrowRightFromLine className={styles.icon} />
        </button>
      )}
      {navigation?.map(({separator, header, items}) => (
        <section key={crypto.randomUUID()} className={styles.section}>
          {separator && <SidebarNavigationDivider header={isClose ? undefined : header} />}
          {items.map(({href, icon: Icon, name}) => (
            <SidebarNavigationItem
              key={crypto.randomUUID()}
              href={href}
              name={name}
              icon={Icon}
              isClose={isClose}
            />
          ))}
        </section>
      ))}
    </div>
  );
};

export default SidebarNavigation;