/**
 * Exo-Immune: 시스템 자가 치유 및 보호 엔진
 */
export const immuneSystem = {
  // 1. 서비스 가용성 자가 진단 (Health Check)
  checkSystemVital: async () => {
    try {
      const start = Date.now();
      // API 서버 응답 속도 체크
      const response = await fetch(process.env.NEXT_PUBLIC_API_URL + '/health');
      const latency = Date.now() - start;
      
      if (latency > 3000) return { status: 'weak', message: '지연 시간이 높습니다.' };
      return { status: 'healthy', latency: \\ms\ };
    } catch (error) {
      return { status: 'critical', message: '서버 연결이 끊겼습니다.' };
    }
  },

  // 2. 비정상적 반복 요청 차단 (Client-side Rate Limiter)
  requestGuard: {
    lastRequestTime: 0,
    isBlocked: false,
    verify: () => {
      const now = Date.now();
      if (now - this.lastRequestTime < 500) { // 0.5초 이내 재요청 시 차단
        console.warn("[Immune] 과도한 요청이 감지되어 일시 차단합니다.");
        return false;
      }
      this.lastRequestTime = now;
      return true;
    }
  },

  // 3. 에러 격리 (Error Isolation)
  quarantineError: (error, context) => {
    const errorReport = {
      fingerprint: btoa(error.message).substring(0, 8),
      message: error.message,
      location: window.location.href,
      stack: error.stack,
      userContext: context,
      timestamp: new Date().toISOString()
    };
    // 로컬 스토리지에 에러 로그 박제 (추후 관리자가 수거)
    const logs = JSON.parse(localStorage.getItem('exo_quarantine') || '[]');
    localStorage.setItem('exo_quarantine', JSON.stringify([errorReport, ...logs].slice(0, 50)));
  }
};
