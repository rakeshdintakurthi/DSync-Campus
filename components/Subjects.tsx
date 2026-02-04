
import React from 'react';
import { THEORY_SUBJECTS, LAB_SUBJECTS } from '../constants';

const Subjects: React.FC = () => {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Curriculum</h1>
        <p className="text-slate-500">Overview of theory and practical courses</p>
      </header>

      <section>
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
          Theory Subjects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {THEORY_SUBJECTS.map((sub) => (
            <div key={sub.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sub.code}</span>
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-blue-100">
                    {sub.credits} CREDITS
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-slate-800 leading-snug">{sub.name}</h3>
              <p className="text-xs text-slate-400 mt-2">Semester Core Module</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="w-1.5 h-6 bg-orange-500 rounded-full"></span>
          Laboratory Subjects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {LAB_SUBJECTS.map((sub) => (
            <div key={sub.id} className="bg-white p-5 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="p-2 bg-orange-50 text-orange-600 rounded-xl">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{sub.code}</span>
                  <span className="bg-orange-50 text-orange-700 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-100">
                    {sub.credits} CREDITS
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-slate-800 leading-snug">{sub.name}</h3>
              <p className="text-xs text-slate-400 mt-2">Practical Lab Work</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Subjects;
