/**
 * Exo-Theme: 시력 보호를 위한 다크모드 엔진
 */
export const themeManager = {
  toggle: () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('exo-theme', isDark ? 'dark' : 'light');
  },
  init: () => {
    if (localStorage.getItem('exo-theme') === 'dark' || 
        (!('exo-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
};
