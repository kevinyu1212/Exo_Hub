/**
 * Exo-Monitor: 시스템 감시 및 에러 로깅
 */
export const monitor = {
  logError: (error, info) => {
    const errorLog = {
      timestamp: new Date().toISOString(),
      message: error.message,
      stack: info?.componentStack,
      url: window.location.href
    };
    console.error("[Monitor] 에러 감지:", errorLog);
    // 향후 여기서 Sentry나 백엔드로 로그 전송 가능
  },
  
  performance: {
    trackPageLoad: (pageName) => {
      const loadTime = performance.now();
      console.log([Monitor]  로드 완료: ms);
    }
  }
};
