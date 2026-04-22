/**
 * Exo-DevTool: 오직 개발 환경에서만 동작하는 진단 도구
 */
export const devLog = {
  // 개발 환경에서만 출력되는 스마트 로그
  info: (msg, data = {}) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(\%c[Exo-Dev] \\, 'color: #007bff; font-weight: bold', data);
    }
  },
  
  // API 성능 측정 (응답 속도 체크)
  tracePerformance: async (label, fn) => {
    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    console.log(\%c[Exo-Perf] \: \ms\, 'color: #28a745');
    return result;
  }
};
