# 🦎 ExoHub Developer Manual

## 1. 아키텍처 규칙
- **Shared-Core:** 모든 비즈니스 로직, API 설정, 공통 UI 컴포넌트 관리.
- **Micro-Apps:** 각 서비스(Admin, Provider, Consumer)는 View 로직에 집중.

## 2. 데이터 흐름
- API 호출은 반드시 \shared-core/api-configs\의 정의된 인터페이스를 통한다.
- 상태 관리는 \Zustand\를 사용하며, 복잡한 비동기 데이터는 \React Query\를 권장한다.

## 3. 커밋 컨벤션
- \Feat:\: 새로운 기능 추가
- \Fix:\: 버그 수정
- \Refactor:\: 코드 최적화
- \Enterprise:\: 상용화 수준 고도화 작업
