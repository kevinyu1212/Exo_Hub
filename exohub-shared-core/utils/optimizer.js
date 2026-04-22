import { debounce, throttle } from 'lodash';

/**
 * Exo-Optimizer: 렉 및 과부하 방지 엔진
 */
export const optimizer = {
  // 입력값 변경 등 빈번한 이벤트 발생 시 마지막 한 번만 실행 (검색창 등)
  debounceAction: (fn, delay = 300) => debounce(fn, delay),
  
  // 일정 시간 간격으로 한 번만 실행 (스크롤 이벤트, 버튼 연타 방지)
  throttleAction: (fn, delay = 1000) => throttle(fn, delay),
  
  // 메모리 누수 방지를 위한 타이머 정리 유틸리티
  safeInterval: (callback, delay) => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }
};
