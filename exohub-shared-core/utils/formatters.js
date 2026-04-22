// 화폐/포인트 단위 포맷터
export const formatPoint = (value) => {
  return new Intl.NumberFormat('ko-KR').format(Math.floor(value)) + ' P';
};

// 날짜 포맷터
import { format } from 'date-fns';
export const formatDate = (date) => format(new Date(date), 'yyyy-MM-dd HH:mm');
