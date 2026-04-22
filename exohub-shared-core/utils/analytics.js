/**
 * Exo-Analytics: 데이터 분석 엔진
 */
export const analytics = {
  // 포인트 변동 내역을 차트용 데이터로 변환
  mapToChartData: (history) => {
    return history.map(item => ({
      name: new Date(item.date).toLocaleDateString(),
      points: item.amount,
      balance: item.balance
    }));
  },
  
  // 성장률 계산 로직
  calculateGrowthRate: (current, previous) => {
    if (!previous) return 0;
    return ((current - previous) / previous * 100).toFixed(2);
  }
};
