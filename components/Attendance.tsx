
import React, { useState } from 'react';

const Attendance: React.FC = () => {
  const [totalDays, setTotalDays] = useState<string>('');
  const [attendedDays, setAttendedDays] = useState<string>('');
  const requiredPercentage = 75;

  const total = parseInt(totalDays) || 0;
  const attended = parseInt(attendedDays) || 0;
  
  const percentage = total > 0 ? (attended / total) * 100 : 0;
  const isEligible = percentage >= requiredPercentage;

  const getStatusColor = () => {
    if (total === 0) return 'text-slate-400';
    return isEligible ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Attendance Calculator</h1>
        <p className="text-slate-500">Track your eligibility for examinations</p>
      </header>

      <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className={`relative w-40 h-40 flex items-center justify-center rounded-full border-8 ${isEligible ? 'border-green-100' : 'border-red-100'}`}>
            <div className="text-center">
              <p className={`text-4xl font-bold ${getStatusColor()}`}>{percentage.toFixed(1)}%</p>
              <p className="text-xs text-slate-400 font-medium uppercase mt-1">Overall</p>
            </div>
            {/* Simple ring overlay for progress */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle 
                    cx="80" cy="80" r="72" fill="transparent" 
                    stroke={total > 0 ? (isEligible ? '#22c55e' : '#ef4444') : '#f1f5f9'} 
                    strokeWidth="8"
                    strokeDasharray={452}
                    strokeDashoffset={452 - (452 * Math.min(percentage, 100) / 100)}
                    strokeLinecap="round"
                />
            </svg>
          </div>
          <div className="mt-6 text-center">
            <span className={`px-4 py-1.5 rounded-full text-sm font-bold shadow-sm ${
              isEligible ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {isEligible ? 'ELIGIBLE' : 'NOT ELIGIBLE'}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Total Working Days</label>
            <input
              type="number"
              value={totalDays}
              onChange={(e) => setTotalDays(e.target.value)}
              placeholder="Enter total days"
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-lg font-medium"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-slate-700">Days Attended</label>
            <input
              type="number"
              value={attendedDays}
              onChange={(e) => setAttendedDays(e.target.value)}
              placeholder="Enter days attended"
              className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition-all text-lg font-medium"
            />
          </div>
        </div>

        {!isEligible && total > 0 && (
          <div className="mt-8 p-4 bg-orange-50 rounded-2xl border border-orange-100 text-orange-700 text-sm flex gap-3">
             <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
             <p>You need to attend more classes to reach the minimum 75% requirement.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;
