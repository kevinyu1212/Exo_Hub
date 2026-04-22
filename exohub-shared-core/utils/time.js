import { format, formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 * Exo-Time: 파충류 생애 및 서비스 정산 특화 시간 유틸
 */
export const timeUtils = {
  // "방금 전", "3일 전" 등 상대적 시간 표시 (커뮤니티용)
  relative: (date) => formatDistanceToNow(new Date(date), { addSuffix: true, locale: ko }),
  
  // 정산 및 이자 지급일 포맷
  billing: (date) => format(new Date(date), 'yyyy년 MM월 dd일 HH:mm'),
  
  // D-Day 계산 (부화 예정일 등)
  dDay: (targetDate) => {
    const diff = new Date(targetDate) - new Date();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? \D-\\ : days === 0 ? 'D-Day' : '종료';
  }
};
