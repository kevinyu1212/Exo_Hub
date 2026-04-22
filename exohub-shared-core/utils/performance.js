/**
 * Exo-Performance: 고성능 렌더링 엔진
 */
export const perfUtils = {
  // 컴포넌트 리렌더링 방지를 위한 얕은 비교
  isEqual: (prev, next) => JSON.stringify(prev) === JSON.stringify(next),
  
  // 브라우저 탭 활성 상태에 따른 리소스 조절
  onTabActive: (callback) => {
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') callback();
    });
  }
};
