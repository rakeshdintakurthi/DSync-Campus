
import React, { useState, useEffect } from 'react';
import { User, Section } from './types';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Timetable from './components/Timetable';
import Subjects from './components/Subjects';
import Resources from './components/Resources';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'attendance' | 'timetable' | 'subjects' | 'resources'>('dashboard');

  useEffect(() => {
    const savedUser = localStorage.getItem('ds_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (u: User) => {
    setUser(u);
    localStorage.setItem('ds_user', JSON.stringify(u));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('ds_user');
  };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard user={user} setActiveTab={setActiveTab} />;
      case 'attendance':
        return <Attendance />;
      case 'timetable':
        return <Timetable userSection={user.section} />;
      case 'subjects':
        return <Subjects />;
      case 'resources':
        return <Resources />;
      default:
        return <Dashboard user={user} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} user={user} onLogout={handleLogout} />

      <main className="flex-1 w-full max-w-5xl mx-auto px-6 py-10 md:pl-40 md:pr-12 pb-32 md:pb-12">
        <header className="flex justify-between items-center mb-10 md:hidden">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
               <span className="text-white font-black text-lg">DS</span>
             </div>
             <h1 className="text-xl font-black text-slate-800 tracking-tight">Student Hub</h1>
          </div>
          <button onClick={handleLogout} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-slate-400 shadow-sm">
             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
          </button>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
