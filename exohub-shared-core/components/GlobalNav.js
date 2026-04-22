import React from 'react';
import { Home, User, Wallet, MessageSquare } from 'lucide-react';

export const GlobalNav = ({ activeApp }) => {
  const menus = [
    { id: 'consumer', icon: <Home />, label: '홈', color: 'text-primary' },
    { id: 'provider', icon: <Wallet />, label: '비즈니스', color: 'text-accent-gold' },
    { id: 'admin', icon: <User />, label: '관리자', color: 'text-accent-terracotta' }
  ];

  return (
    <nav className="fixed bottom-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 px-6 py-3 flex justify-around items-center z-50">
      {menus.map((menu) => (
        <div key={menu.id} className={\lex flex-col items-center \\}>
          {menu.icon}
          <span className="text-[10px] mt-1 font-medium">{menu.label}</span>
        </div>
      ))}
    </nav>
  );
};
