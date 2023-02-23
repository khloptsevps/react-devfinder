import React from 'react';
import { ReactComponent as SunIcon } from 'assets/icon-sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icon-moon.svg';

import styles from './ThemeSwitcher.module.scss';

export const ThemeSwitcher: React.FC = () => {
  const [isDark, setIsDark] = React.useState(false);
  const themeText = isDark ? 'LIGHT' : 'DARK';
  const ThemeIcon = isDark ? SunIcon : MoonIcon;

  React.useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <div className={styles.switcher} onClick={() => setIsDark(!isDark)}>
      <span>{themeText}</span>
      <ThemeIcon className={styles.icon} />
    </div>
  );
};
