/**
 * Exo-Media: 미디어 최적화 엔진
 */
export const mediaLoader = {
  // 이미지 로드 실패 시 기본 이미지로 대체
  handleImageError: (e, fallbackSrc = '/images/default-exo.png') => {
    e.target.src = fallbackSrc;
  },
  
  // 이미지 프리로딩 (슬라이드쇼 등에 활용)
  preloadImages: (srcArray) => {
    srcArray.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }
};
