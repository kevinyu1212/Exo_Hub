import React from 'react';
import { GlobalNav } from '../../../exohub-shared-core/components/GlobalNav';
import { exoAnimation } from '../../../exohub-shared-core/design-system/animations';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-surface-paper dark:bg-surface-dark pb-24">
      {/* Hero Section */}
      <div className="pt-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-primary mb-2">ExoHub</h1>
        <p className="text-zinc-500 dark:text-zinc-400">글로벌 파충류 사육 및 자산 관리 플랫폼</p>
      </div>

      {/* Feature Cards (간단 예시) */}
      <div className="mt-12 px-6 space-y-4">
        <div className="exo-card animate-pulse">
          <h3 className="font-bold text-lg text-primary-light">실시간 경매 준비중... 🦎</h3>
          <p className="text-sm text-zinc-500">최고의 개체를 만날 준비를 하세요.</p>
        </div>
        
        <div className="exo-card">
          <h3 className="font-bold text-lg">포인트 이자 시스템</h3>
          <p className="text-sm text-zinc-500 text-accent-gold font-semibold">현재 연이율 4.2% 적립중</p>
        </div>
      </div>

      {/* 공통 내비게이션 바 */}
      <GlobalNav activeApp="consumer" />
    </main>
  );
}
