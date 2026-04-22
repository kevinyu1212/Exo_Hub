import { useEffect } from 'react';
import { automator } from '@/../../exohub-shared-core/utils/automator';
import { backupSystem } from '@/../../exohub-shared-core/utils/backup';

export const useAppAutomation = (userData) => {
  useEffect(() => {
    if (!userData) return;

    // 1. 5분마다 자동 백업 실행
    const backupInterval = setInterval(() => {
      backupSystem.saveToBackupSlot(userData);
    }, 300000);

    return () => clearInterval(backupInterval);
  }, [userData]);
};
