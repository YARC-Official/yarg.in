'use client'

import React, { useState } from "react";
import { Moon, Sun } from "lucide-react";

import styles from "./style.module.css";

const SideBarThemeSelector: React.FC = () => {
  const [theme, setTheme] = useState<'dark'|'light'>('dark');
  
  const handleTheme = () => setTheme((current) => current === 'dark' ? 'light': 'dark');

  return (
    <button
      className={styles.selector}
      type="button"
      title="Button theme"
      onClick={handleTheme}
    >
      {theme === 'dark'? <Moon />: <Sun />}
    </button>
  );
};

export default SideBarThemeSelector;