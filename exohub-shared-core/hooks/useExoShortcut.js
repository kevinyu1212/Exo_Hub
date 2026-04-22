import { useEffect } from 'react';

/**
 * useExoShortcut: 파워 유저를 위한 단축키 (예: Alt+S로 검색창 포커스)
 */
export const useExoShortcut = (key, callback, ctrlKey = false) => {
  useEffect(() => {
    const handler = (e) => {
      if (e.key.toLowerCase() === key.toLowerCase() && (ctrlKey ? e.ctrlKey || e.altKey : true)) {
        e.preventDefault();
        callback();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [key, callback, ctrlKey]);
};
