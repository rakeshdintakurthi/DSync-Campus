import React, { useState, useEffect } from 'react';
import { User, Section } from '../types';

interface LoginProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [section, setSection] = useState<Section>('A');
  const [error, setError] = useState('');

  const getSectionFromRoll = (roll: string): Section => {
    const r = roll.trim().toUpperCase();
    if (!r) return 'A';
    const suffix = r.slice(-2);
    if (!/^\d+$/.test(suffix)) return 'A';
    const num = parseInt(suffix);
    if (num <= 65) return 'A';
    if (num <= 130) return 'B';
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
      setError('Identity credential required.');
      return;
    }
    if (!password.trim()) {
      setError('Access key required.');
      return;
    }

    onLogin({
      rollNumber: rollNumber.toUpperCase(),
      section,
      department: 'CSE – DATA SCIENCE',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[#020617] relative overflow-hidden">
      {/* Dynamic Visual Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-blue-600/10 rounded-full blur-[150px] animate-pulse"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] bg-indigo-600/10 rounded-full blur-[150px] animate-pulse delay-1000"></div>

      <div className="w-full max-w-lg backdrop-blur-3xl bg-white/5 rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.7)] p-14 border border-white/10 relative z-10">
        <div className="flex flex-col items-center mb-14">
          <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-2xl shadow-blue-500/40 group hover:rotate-6 transition-transform cursor-pointer">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight text-center">Data Intelligence Hub</h1>
          <div className="flex items-center gap-3 mt-4">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
            <p className="text-slate-400 font-black text-[11px] uppercase tracking-[0.4em]">NRI Institute Systems</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">University Roll Number</label>
            <div className="relative group">
              <input
                type="text"
                required
                placeholder="XXXXXX"
                value={rollNumber}
                onChange={(e) => setRollNumber(e.target.value)}
                className="w-full pl-8 pr-4 py-5 rounded-[2rem] border border-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all bg-white/5 text-white font-bold text-lg placeholder:text-slate-700 tracking-widest uppercase"
              />
            </div>
          </div>

          <div className="space-y-4">
            <label className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em] ml-2">Secure Access Key</label>
            <div className="relative group">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-8 pr-16 py-5 rounded-[2rem] border border-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/50 transition-all bg-white/5 text-white font-bold text-lg placeholder:text-slate-700 tracking-widest"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 hover:text-white transition-all p-2 hover:bg-white/5 rounded-xl"
              >
                {showPassword ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.888 9.888L13.89 13.89" /></svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                )}
              </button>
            </div>
          </div>

          <div className="p-6 bg-white/5 rounded-[2.5rem] border border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 bg-blue-600/20 text-blue-400 rounded-2xl flex items-center justify-center font-black text-lg border border-blue-500/20">
                {section}
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">Automated Mapping</p>
                <p className="text-xs text-blue-400 font-bold">Section {section} Context Loaded</p>
              </div>
            </div>
          </div>

          {error && <p className="text-red-400 text-xs text-center font-black uppercase tracking-widest animate-bounce">{error}</p>}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-black py-6 rounded-[2.5rem] shadow-2xl shadow-blue-900/40 transition-all active:scale-[0.98] uppercase tracking-[0.3em] text-sm"
          >
            Authorize Access
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;