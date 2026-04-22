"use client";
/**
 * Exo-Guardian: 앱이 뻗지 않게 보호하는 에러 처리기
 */
export const ErrorFallback = ({ error, resetErrorBoundary }) => (
  <div className="p-6 border-2 border-red-500 bg-red-50 rounded-lg">
    <h2 className="text-xl font-bold text-red-700">문제가 발생했습니다! 🦎</h2>
    <p className="text-sm text-red-600 mb-4">{error.message}</p>
    <button 
      onClick={resetErrorBoundary}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      다시 시도하기
    </button>
  </div>
);
