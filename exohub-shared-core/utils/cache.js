/**
 * Exo-Cache: 서버 부하를 줄이는 지능형 캐시
 */
export const cacheManager = {
  setWithExpiry: (key, value, ttlSeconds = 3600) => {
    const item = {
      value: value,
      expiry: Date.now() + (ttlSeconds * 1000),
    };
    localStorage.setItem(key, JSON.stringify(item));
  },
  
  getWithExpiry: (key) => {
    const itemStr = localStorage.getItem(key);
    if (!itemStr) return null;
    const item = JSON.parse(itemStr);
    if (Date.now() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }
};
