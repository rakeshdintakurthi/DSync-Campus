
import React from 'react';
import { User } from '../types';
import { TIMETABLES } from '../constants';

interface DashboardProps {
  user: User;
  setActiveTab: (tab: 'dashboard' | 'timetable' | 'subjects' | 'resources') => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, setActiveTab }) => {
  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
  const todaySchedule = TIMETABLES[user.section].find((t) => t.day === today);

  const stats = [
    { label: 'Academic Flow', title: 'Schedule', icon: '⚡', color: 'from-blue-400 to-cyan-400', tab: 'timetable', subtitle: todaySchedule?.slots[0].subject || 'Rest Day' },
    { label: 'The Archive', title: 'Manuals', icon: '💎', color: 'from-purple-400 to-pink-400', tab: 'resources', subtitle: '70+ Reconstructed Pages' },
    { label: 'Intelligence', title: 'Curriculum', icon: '🧬', color: 'from-orange-400 to-red-400', tab: 'subjects', subtitle: 'Core Data Science' },
    { label: 'Secure Access', title: 'Repository', icon: '🛡️', color: 'from-emerald-400 to-teal-400', tab: 'resources', subtitle: 'Semester Resources' }
  ];

  return (
    <div className="space-y-16">
      <header className="relative">
        <div className="space-y-2">
          <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-tight">
            The <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Vault.</span>
          </h1>
          <p className="text-slate-500 font-medium text-lg md:text-xl max-w-xl">
            Welcome back, <span className="text-slate-300 font-bold">{user.rollNumber}</span>. Your personalized data intelligence command center is ready.
          </p>
        </div>
        
        {/* Top Right Date Widget */}
        <div className="absolute top-0 right-0 hidden lg:flex glass rounded-3xl p-6 flex-col items-center min-w-[140px] shadow-2xl">
          <p className="text-[10px] font-black text-blue-400 uppercase tracking-[0.3em] mb-1">{today}</p>
          <p className="text-2xl font-black text-white">{new Date().getDate()}</p>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{new Date().toLocaleDateString('en-GB', { month: 'short' })}</p>
        </div>
      </header>

      {/* Main Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {stats.map((item, idx) => (
          <div 
            key={idx}
            onClick={() => setActiveTab(item.tab as any)}
            className="group relative glass p-10 rounded-[2.5rem] cursor-pointer hover:-translate-y-2 transition-all duration-500 overflow-hidden"
          >
            {/* Subtle Gradient Glow in Background */}
            <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${item.color} opacity-[0.03] group-hover:opacity-[0.08] rounded-full blur-3xl transition-opacity duration-500`}></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl shadow-[0_10px_30px_rgba(0,0,0,0.2)] group-hover:scale-110 transition-transform duration-500`}>
                  <span className="drop-shadow-lg">{item.icon}</span>
                </div>
                <div className="flex flex-col items-end">
                   <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] mb-1">{item.label}</p>
                   <div className="w-8 h-1 bg-white/10 rounded-full group-hover:w-16 group-hover:bg-blue-400 transition-all duration-500"></div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-black text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-slate-400 tracking-wide uppercase">
                  {item.subtitle}
                </p>
              </div>

              <div className="mt-8 flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
                <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Enter Module</span>
                <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Footer or Additional Info */}
      <footer className="glass p-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-between gap-6 border-white/5">
        <div className="flex items-center gap-6">
          <div className="flex -space-x-3">
            {[1,2,3].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-[#030712] bg-slate-800 flex items-center justify-center text-[10px] font-bold">U{i}</div>
            ))}
          </div>
          <p className="text-xs font-bold text-slate-500 tracking-wide uppercase">Used by <span className="text-blue-400">180+</span> Students</p>
        </div>
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Status: Online & Encrypted</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
