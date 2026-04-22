import React, { useState, useEffect } from 'react';

export const DevStatusWidget = () => {
  const [stats, setStats] = useState({ memory: 'N/A', status: 'Online' });

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const interval = setInterval(() => {
        setStats({
          memory: Math.round(performance.memory?.usedJSHeapSize / 1024 / 1024) + 'MB',
          status: navigator.onLine ? 'Online' : 'Offline'
        });
      }, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 p-3 bg-black/80 text-green-400 text-xs rounded-lg shadow-xl font-mono z-50">
      <div>🚀 SYSTEM: {stats.status}</div>
      <div>💾 MEMORY: {stats.memory}</div>
      <div className="mt-1 text-[10px] text-gray-400 italic">Dev Mode Active</div>
    </div>
  );
};
