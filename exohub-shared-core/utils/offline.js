import { openDB } from 'idb';

/**
 * Exo-Offline: 비행기 모드에서도 사육 일지를 쓰고, 연결 시 자동 동기화
 */
export const offlineDB = {
  init: async () => {
    return openDB('ExoHub_Offline', 1, {
      upgrade(db) {
        db.createObjectStore('pending_sync', { keyPath: 'id', autoIncrement: true });
      },
    });
  },
  saveForLater: async (data) => {
    const db = await offlineDB.init();
    await db.add('pending_sync', { ...data, timestamp: Date.now() });
    console.log("📝 [Exo-Offline] 오프라인 저장 완료. 연결 시 자동 전송됩니다.");
  }
};
