import nProgress from 'nprogress';

// 페이지 이동이나 대용량 데이터 로드 시 상단에 부드러운 진행 바 표시
export const loader = {
  start: () => nProgress.start(),
  done: () => nProgress.done(),
};
