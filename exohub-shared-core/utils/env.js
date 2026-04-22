/**
 * Exo-Env: 환경 변수가 비어있어 발생하는 런타임 에러 방지
 */
export const validateEnv = () => {
  const required = ['NEXT_PUBLIC_API_URL'];
  required.forEach(key => {
    if (!process.env[key]) {
      console.warn([ExoHub-Warning] 환경 변수 \가 설정되지 않았습니다.);
    }
  });
};
