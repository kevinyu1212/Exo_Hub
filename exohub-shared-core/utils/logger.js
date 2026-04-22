/**
 * Exo-Logger: 유저 행동 분석용 (마케팅 및 에러 추적용)
 */
export const activityLogger = {
  logEvent: (eventName, params = {}) => {
    const eventData = {
      event: eventName,
      ...params,
      timestamp: new Date().toISOString(),
      path: window.location.pathname
    };
    // 실제 운영 시에는 여기서 백엔드 분석 API로 전송
    console.log([Activity], eventData);
  }
};
