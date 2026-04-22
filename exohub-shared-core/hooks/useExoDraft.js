import { useEffect } from 'react';

/**
 * useExoDraft: 글쓰기 중 예기치 못한 종료 시 데이터 보존
 */
export const useExoDraft = (key, value, setValue) => {
  useEffect(() => {
    // 1. 페이지 진입 시 저장된 초안 로드
    const saved = localStorage.getItem(\draft_\\);
    if (saved && !value) {
      setValue(JSON.parse(saved));
      console.log(\%c[Exo-Restore] \ 초안을 복구했습니다.\, 'color: #fd7e14');
    }
  }, []);

  useEffect(() => {
    // 2. 값이 바뀔 때마다 로컬에 저장
    if (value) {
      localStorage.setItem(\draft_\\, JSON.stringify(value));
    }
  }, [key, value]);

  const clearDraft = () => localStorage.removeItem(\draft_\\);
  return { clearDraft };
};
