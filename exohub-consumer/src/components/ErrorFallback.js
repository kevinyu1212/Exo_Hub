"use client";
export function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div className="p-10 text-center border-2 border-red-200 rounded-lg bg-red-50">
      <h2 className="text-xl font-bold text-red-600">문제가 발생했습니다! 🦎</h2>
      <p className="mt-2 text-gray-600">{error.message}</p>
      <button 
        onClick={resetErrorBoundary}
        className="px-4 py-2 mt-4 text-white bg-primary rounded-md"
      >
        다시 시도하기
      </button>
    </div>
  );
}
