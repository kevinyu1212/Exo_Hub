import { debounce } from 'lodash';

export const optimizer = {
  // 입력값 변경 시 렉 방지 (0.3초 대기)
  debounceAction: (fn, delay = 300) => debounce(fn, delay),
  
  // 메모리 누수 방지 타이머
  safeInterval: (callback, delay) => {
    const id = setInterval(callback, delay);
    return () => clearInterval(id);
  }
};
