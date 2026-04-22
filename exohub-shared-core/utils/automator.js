/**
 * Exo-Automator: 정기적인 작업 수행 엔진
 */
export const automator = {
  // 이자 지급 등 정기 스케줄 실행 (시뮬레이션)
  runScheduledTask: (taskName, callback, intervalMinutes = 60) => {
    console.log([Automator]  작업 예약됨: 분 간격);
    return setInterval(callback, intervalMinutes * 60 * 1000);
  },
  
  // 포인트 복리 계산 자동화
  autoCompoundInterest: (account, updateCallback) => {
    const ratePerMinute = account.interestRate / (365 * 24 * 60);
    return setInterval(() => {
      const newBalance = account.balance * (1 + ratePerMinute);
      updateCallback(newBalance);
    }, 60000); // 1분마다 미세 이자 지급 시뮬레이션
  }
};
