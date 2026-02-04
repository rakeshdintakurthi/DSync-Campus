
import React, { useState, useEffect } from 'react';
import { User, Section } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [rollNumber, setRollNumber] = useState('');
  const [section, setSection] = useState<Section>('A');
  const [error, setError] = useState('');

  // Helper to determine section based on roll number
  const getSectionFromRoll = (roll: string): Section => {
    const r = roll.trim().toUpperCase();
    if (!r) return 'A';

    // Logic: Extract the last part (usually numeric or hex-like suffix)
    // Common format is [Prefix][Suffix] e.g., 23H51A6701
    // We'll look at the last 2 characters
    const suffix = r.length >= 2 ? r.slice(-2) : r.padStart(2, '0');
    
    // Numeric part check (1-65 is A, 66-99 then A-D is B...)
    // Since the user defined "1-65", "65-D3", "C3-J8"
    // Let's implement specific marker-based logic
    
    if (suffix <= '65' && /^\d+$/.test(suffix)) return 'A';
    if (suffix <= 'D3') return 'B';
    return 'C';
  };

  useEffect(() => {
    if (rollNumber) {
      setSection(getSectionFromRoll(rollNumber));
    }
  }, [rollNumber]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rollNumber.trim()) {
      setError('Please enter your roll number.');
      return;
    }

    onLogin({
      rollNumber: rollNumber.toUpperCase(),
      section,
      department: 'CSE – DATA SCIENCE',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">DS Student Hub</h1>
          <p className="text-slate-500 mt-1">CSE – DATA SCIENCE</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Roll Number</label>
            <input
              type="text"
              required
              placeholder="e.g. 6701, 67A4, 67J8"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all bg-slate-50 focus:bg-white text-lg font-medium"
            />
            <p className="text-[10px] text-slate-400 mt-2 px-1">
              A: 01-65 | B: 66-D3 | C: C3-J8 (Automatic assignment)
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Section Detected</label>
            <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl">
               <div className="w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-xl">
                 {section}
               </div>
               <div>
                 <p className="text-xs font-bold text-blue-800 uppercase tracking-wider">Assigned Section</p>
                 <p className="text-[10px] text-blue-600">Based on your roll number</p>
               </div>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-200 transition-all active:scale-[0.98]"
          >
            Enter Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
