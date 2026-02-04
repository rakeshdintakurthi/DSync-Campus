
import React, { useState } from 'react';
import { Section } from '../types';
import { TIMETABLES } from '../constants';

interface TimetableProps {
  userSection: Section;
}

const Timetable: React.FC<TimetableProps> = ({ userSection }) => {
  const [selectedSection, setSelectedSection] = useState<Section>(userSection);
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [activeDay, setActiveDay] = useState<string>(
    new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date()) || 'Monday'
  );

  const schedule = TIMETABLES[selectedSection].find((t) => t.day === activeDay);

  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Department Timetable</h1>
          <p className="text-slate-500">Academic Year: 2025-26 • Sem: II</p>
        </div>
        
        <div className="inline-flex bg-slate-100 p-1 rounded-2xl self-start">
          {(['A', 'B', 'C'] as Section[]).map((sec) => (
            <button
              key={sec}
              onClick={() => setSelectedSection(sec)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedSection === sec
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              Sec {sec}
            </button>
          ))}
        </div>
      </header>

      {/* Day Picker */}
      <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
        {days.map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day)}
            className={`flex-shrink-0 px-6 py-3 rounded-2xl text-sm font-bold transition-all ${
              activeDay === day
                ? 'bg-blue-600 text-white shadow-md shadow-blue-100'
                : 'bg-white text-slate-500 border border-slate-100 hover:border-slate-300'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule List */}
      <div className="space-y-4">
        {schedule ? schedule.slots.map((slot, idx) => (
          <div 
            key={idx} 
            className="group relative bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex items-center gap-6"
          >
            <div className="w-32 text-center border-r border-slate-50 pr-4">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{slot.time.split(' - ')[0]}</p>
              <div className="h-4 w-px bg-slate-100 mx-auto my-1"></div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{slot.time.split(' - ')[1]}</p>
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{slot.subject}</h3>
              <div className="flex items-center gap-3 mt-1.5">
                <span className={`text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-tight ${
                  slot.type === 'Theory' ? 'bg-indigo-50 text-indigo-600' : 'bg-amber-50 text-amber-600'
                }`}>
                  {slot.type}
                </span>
                <span className="text-[10px] font-bold text-slate-400 uppercase">Period {idx + 1}</span>
              </div>
            </div>

            <div className={`p-3 rounded-2xl transition-colors ${
              slot.type === 'Lab' ? 'bg-amber-50' : 'bg-indigo-50'
            }`}>
              <svg className={`w-5 h-5 ${slot.type === 'Theory' ? 'text-indigo-400' : 'text-amber-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
          </div>
        )) : (
          <div className="py-12 text-center bg-white rounded-3xl border border-dashed border-slate-200">
             <span className="text-4xl mb-4 block">😴</span>
             <p className="text-slate-500 font-medium">No classes scheduled for {activeDay}.</p>
          </div>
        )}
        
        {/* Lunch Break Note */}
        {schedule && (
            <div className="bg-slate-100/50 p-4 rounded-2xl border border-slate-200 text-center">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Lunch Break: 12:30 PM - 01:20 PM</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Timetable;
