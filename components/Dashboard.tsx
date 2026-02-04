
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
    <div className="space-y-6">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome, {user.rollNumber}!</h1>
          <p className="text-slate-500">Section {user.section} • Data Science Department</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-lg font-semibold text-slate-700">{today}</p>
          <p className="text-sm text-slate-400">{new Date().toLocaleDateString()}</p>
        </div>
      </header>

      {/* Stats Quick View */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          onClick={() => setActiveTab('attendance')}
          className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow group"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-slate-700">Attendance status</h3>
            <span className="p-2 bg-green-50 text-green-600 rounded-xl group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </span>
          </div>
          <div className="flex items-end gap-2">
            <span className="text-3xl font-bold text-slate-900">75%</span>
            <span className="text-sm text-green-600 font-medium mb-1">Eligible</span>
          </div>
          <p className="text-xs text-slate-400 mt-2">Required: 75% • Keep it up!</p>
        </div>

        <div 
          onClick={() => setActiveTab('timetable')}
          className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 cursor-pointer hover:shadow-md transition-shadow group"
        >
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-semibold text-slate-700">Next Class</h3>
            <span className="p-2 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </span>
          </div>
          {todaySchedule ? (
            <div>
              <p className="text-xl font-bold text-slate-900 truncate">{todaySchedule.slots[0].subject}</p>
              <p className="text-sm text-slate-500">{todaySchedule.slots[0].time}</p>
            </div>
          ) : (
            <p className="text-slate-500 italic">No classes today. Enjoy your day!</p>
          )}
        </div>
      </div>

      {/* Today's Schedule List */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-800">Today's Schedule</h2>
          <button 
            onClick={() => setActiveTab('timetable')}
            className="text-sm text-blue-600 font-medium hover:underline"
          >
            Full Timetable
          </button>
        </div>
        <div className="space-y-3">
          {todaySchedule ? todaySchedule.slots.map((slot, idx) => (
            <div key={idx} className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm">
              <div className="w-16 flex flex-col items-center justify-center border-r border-slate-100 pr-4">
                <span className="text-xs font-bold text-slate-400 text-center uppercase leading-tight">
                  {slot.time.split(' - ')[0]}
                </span>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">{slot.subject}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                    slot.type === 'Theory' ? 'bg-indigo-100 text-indigo-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    {slot.type}
                  </span>
                </div>
              </div>
            </div>
          )) : (
            <div className="p-8 text-center bg-white rounded-3xl border border-dashed border-slate-200 text-slate-400">
              No classes scheduled for today.
            </div>
          )}
        </div>
      </section>

      {/* Quick Access Grid */}
      <section>
        <h2 className="text-lg font-bold text-slate-800 mb-4">Quick Access</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: 'Notes', icon: '📘', tab: 'resources' },
            { label: 'Papers', icon: '📝', tab: 'resources' },
            { label: 'Subjects', icon: '📚', tab: 'subjects' },
            { label: 'Calculator', icon: '🧮', tab: 'attendance' }
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => setActiveTab(item.tab as any)}
              className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span className="text-2xl">{item.icon}</span>
              <span className="text-xs font-semibold text-slate-700">{item.label}</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
