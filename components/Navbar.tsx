
import React from 'react';
import { User } from '../types';

interface NavbarProps {
  activeTab: 'dashboard' | 'attendance' | 'timetable' | 'subjects' | 'resources';
  onTabChange: (tab: any) => void;
  user: User;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange, user, onLogout }) => {
  const navItems = [
    { id: 'dashboard', label: 'Home', icon: (active: boolean) => (
      <svg className={`w-6 h-6 transition-all ${active ? 'text-blue-600 scale-110' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
    )},
    { id: 'attendance', label: 'Record', icon: (active: boolean) => (
      <svg className={`w-6 h-6 transition-all ${active ? 'text-blue-600 scale-110' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    )},
    { id: 'timetable', label: 'Flow', icon: (active: boolean) => (
      <svg className={`w-6 h-6 transition-all ${active ? 'text-blue-600 scale-110' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
    )},
    { id: 'resources', label: 'Vault', icon: (active: boolean) => (
      <svg className={`w-6 h-6 transition-all ${active ? 'text-blue-600 scale-110' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
    )},
    { id: 'subjects', label: 'Cores', icon: (active: boolean) => (
      <svg className={`w-6 h-6 transition-all ${active ? 'text-blue-600 scale-110' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
    )},
  ];

  return (
    <>
      {/* Mobile Floating Bottom Nav */}
      <div className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <nav className="bg-white/90 backdrop-blur-xl border border-white/50 h-16 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.15)] flex items-center justify-around px-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className="relative flex flex-col items-center gap-1 group"
            >
              {item.icon(activeTab === item.id)}
              {activeTab === item.id && (
                <span className="absolute -bottom-2 w-1 h-1 bg-blue-600 rounded-full"></span>
              )}
            </button>
          ))}
        </nav>
      </div>

      {/* Desktop Rich Sidebar */}
      <nav className="hidden md:flex fixed top-0 left-0 bottom-0 w-28 bg-white border-r border-slate-100 flex-col items-center py-10 z-30 shadow-2xl shadow-slate-200/20">
        <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-12 shadow-xl shadow-blue-500/30">
          <span className="text-white font-black text-xl">DS</span>
        </div>
        
        <div className="flex-1 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-16 h-16 rounded-[1.5rem] flex flex-col items-center justify-center gap-1.5 transition-all group ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' 
                  : 'text-slate-400 hover:bg-slate-50'
              }`}
            >
              <div className={`${activeTab === item.id ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'}`}>
                {item.icon(activeTab === item.id)}
              </div>
              <span className={`text-[9px] font-black uppercase tracking-tight ${activeTab === item.id ? 'text-white' : 'text-slate-500'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>

        <button 
          onClick={onLogout}
          className="w-12 h-12 rounded-2xl flex items-center justify-center text-slate-300 hover:text-red-500 hover:bg-red-50 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
        </button>
      </nav>
    </>
  );
};

export default Navbar;
