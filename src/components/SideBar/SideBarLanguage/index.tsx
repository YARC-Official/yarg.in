import React from 'react';

import styles from './style.module.css';

const SideBarLanguageSelect: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <select className={styles.select} title="Select language">
      {children}
    </select>
  );
};

const SideBarLanguageButton: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <button className={styles.button} type="button" title="Button language">
      {children}
    </button>
  );
};

const SideBarLanguage = {
  Select: SideBarLanguageSelect,
  Button: SideBarLanguageButton
};

export default SideBarLanguage;