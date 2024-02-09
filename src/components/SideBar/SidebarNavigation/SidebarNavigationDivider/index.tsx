import React from "react";

import styles from './style.module.css';

type Props = {
  header?: string;
};

const SidebarNavigationDivider: React.FC<Props> = ({ header }) => {
  if (header) return <span className={styles.separatorNamed}>{header}</span>;
  return <span className={styles.separator} />;
};

export default SidebarNavigationDivider;