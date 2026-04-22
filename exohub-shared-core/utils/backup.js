/**
 * Exo-Backup: 데이터 보호 엔진
 */
export const backupSystem = {
  // 현재 상태를 로컬 저장소의 백업 슬롯으로 복사
  saveToBackupSlot: (data) => {
    const timestamp = new Date().toISOString();
    const backupKey = exohub_backup_;
    localStorage.setItem(backupKey, JSON.stringify(data));
    console.log([Backup] 데이터가 에 저장되었습니다.);
    
    // 오래된 백업 정리 (최신 5개만 유지 로직 추가 가능)
    this.cleanOldBackups();
  },

  cleanOldBackups: () => {
    const keys = Object.keys(localStorage).filter(k => k.startsWith('exohub_backup_'));
    if (keys.length > 5) {
      keys.sort().slice(0, keys.length - 5).forEach(k => localStorage.removeItem(k));
    }
  }
};
