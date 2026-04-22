/**
 * Exo-Bank 복리 이자 계산 엔진
 * @param {number} principal - 원금 (포인트)
 * @param {number} rate - 이율 (예: 0.05)
 * @param {number} times - 기간
 */
export const calculateCompoundInterest = (principal, rate, times) => {
  return principal * Math.pow((1 + rate), times);
};
