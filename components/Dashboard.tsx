
import React from 'react';
import { User } from '../types';
import { TIMETABLES } from '../constants';

interface DashboardProps {
  user: User;
  setActiveTab: (tab: 'dashboard' | 'attendance' | 'timetable' | 'subjects' | 'resources') => void;
}

const Dashboard: React.FC<DashboardProps> = ({ user, setActiveTab }) => {
  const today = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
  const todaySchedule = TIMETABLES[user.section].find((t) => t.day === today);

  return (
    <div className="space-y-12">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Greetings,<br/><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">{user.rollNumber}</span>
          </h1>
          <p className="text-slate-500 font-semibold text-xl mt-3">Welcome to the Data Science Intelligence Hub.</p>
        </div>
        <div className="bg-white/70 backdrop-blur-md px-8 py-4 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hidden md:block">
          <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mb-1">{today}</p>
          <p className="text-lg font-black text-slate-800">{new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long' })}</p>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          onClick={() => setActiveTab('attendance')}
          className="bg-white p-10 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100/50 cursor-pointer hover:shadow-2xl hover:shadow-blue-500/10 transition-all group relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-50 rounded-full opacity-50 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <span className="p-4 bg-blue-50 text-blue-600 rounded-3xl group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </span>
              <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest bg-blue-50/50 px-4 py-1 rounded-full">Active Record</span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-6xl font-black text-slate-900">75%</span>
              <span className="text-sm text-green-500 font-black uppercase tracking-widest">In Range</span>
            </div>
            <p className="text-xs text-slate-400 mt-6 font-bold uppercase tracking-widest">Examination Status: Eligible</p>
          </div>
        </div>

        <div 
          onClick={() => setActiveTab('timetable')}
          className="bg-white p-10 rounded-[3.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100/50 cursor-pointer hover:shadow-2xl hover:shadow-indigo-500/10 transition-all group relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-indigo-50 rounded-full opacity-50 transition-transform group-hover:scale-110"></div>
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-8">
              <span className="p-4 bg-indigo-50 text-indigo-600 rounded-3xl group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50/50 px-4 py-1 rounded-full">Next Up</span>
            </div>
            {todaySchedule ? (
              <>
                <p className="text-3xl font-black text-slate-900 truncate tracking-tight">{todaySchedule.slots[0].subject}</p>
                <p className="text-sm text-slate-400 font-bold uppercase mt-2 tracking-widest">{todaySchedule.slots[0].time}</p>
              </>
            ) : (
              <p className="text-slate-400 font-black italic">Relax mode active.</p>
            )}
          </div>
        </div>
      </div>

      {/* Grid Menu */}
      <section>
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Core Operations</h2>
          <div className="flex-1 h-px bg-slate-100"></div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { label: 'Semester', icon: '💎', tab: 'resources' },
            { label: 'Analyses', icon: '📊', tab: 'resources' },
            { label: 'Curriculum', icon: '🧬', tab: 'subjects' },
            { label: 'Estimator', icon: '⚡', tab: 'attendance' }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.tab as any)}
              className="flex flex-col items-center gap-6 p-10 bg-white rounded-[3rem] border border-slate-50 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2 transition-all group"
            >
              <span className="text-4xl group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
              <span className="text-[9px] font-black text-slate-800 uppercase tracking-[0.2em]">{item.label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
