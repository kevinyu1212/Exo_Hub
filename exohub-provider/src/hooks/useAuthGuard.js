import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// 보호된 페이지를 위한 보안 훅
export const useAuthGuard = (requiredRole = 'user') => {
  const router = useRouter();
  
  useEffect(() => {
    const token = localStorage.getItem('exo_token');
    if (!token) {
      router.push('/login');
    }
    // 여기에 추가적인 권한(Role) 체크 로직을 확장할 수 있습니다.
  }, [router]);
};
