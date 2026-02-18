
import React from 'react';
import { User } from '../types';

interface NavbarProps {
  activeTab: 'dashboard' | 'timetable' | 'subjects' | 'resources';
  onTabChange: (tab: any) => void;
  user: User;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, user, onLogout }) => {
  const navItems = [
    { id: 'dashboard', label: 'Vault', icon: (active: boolean) => (
      <svg className={`w-5 h-5 transition-all duration-300 ${active ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )},
    { id: 'timetable', label: 'Flow', icon: (active: boolean) => (
      <svg className={`w-5 h-5 transition-all duration-300 ${active ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    )},
    { id: 'resources', label: 'Archive', icon: (active: boolean) => (
      <svg className={`w-5 h-5 transition-all duration-300 ${active ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    )},
    { id: 'subjects', label: 'Core', icon: (active: boolean) => (
      <svg className={`w-5 h-5 transition-all duration-300 ${active ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    )},
  ];

  return (
    <>
      {/* Mobile Nav */}
      <div className="fixed bottom-8 left-8 right-8 z-50 md:hidden">
        <nav className="glass h-16 rounded-[2rem] flex items-center justify-around px-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="relative p-3 flex flex-col items-center group transition-all"
            >
              {item.icon(activeTab === item.id)}
              {activeTab === item.id && (
                <span className="absolute -bottom-1 w-1 h-1 bg-blue-400 rounded-full active-glow"></span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Premium Desktop Sidebar */}
      <nav className="hidden md:flex fixed top-10 left-10 bottom-10 w-24 glass rounded-[2.5rem] flex-col items-center py-10 z-30 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
        <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-500 rounded-[1.2rem] flex items-center justify-center mb-12 shadow-[0_10px_30px_rgba(59,130,246,0.3)] hover:scale-110 transition-transform cursor-pointer group">
          <span className="text-white font-black text-sm">DS</span>
        </div>
        
        <div className="flex-1 space-y-8">
          {navItems.map((item) => {
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className="relative group flex flex-col items-center gap-2"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  active 
                    ? 'bg-gradient-to-br from-blue-500 to-indigo-600 active-glow' 
                    : 'hover:bg-white/5'
                }`}>
                  {item.icon(active)}
                </div>
                <span className={`text-[9px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active ? 'text-blue-400' : 'text-slate-500 group-hover:text-slate-300'
                }`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <button 
          onClick={onLogout}
          className="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 hover:text-red-400 hover:bg-red-400/10 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
