/**
 * Exo-Formatter: 입력값 자동 교정 (전화번호, 포인트 단위 등)
 */
export const formatter = {
  // 숫자에 콤마 추가 (예: 1000 -> 1,000)
  comma: (val) => val?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
  
  // 전화번호 하이픈 자동 삽입
  phone: (val) => val?.replace(/[^0-9]/g, '')
                    .replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, $1--),
                    
  // 포인트 단위 약어 (예: 15000 -> 15k)
  compact: (val) => new Intl.NumberFormat('en-US', { notation: 'compact' }).format(val)
};
