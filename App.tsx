
import React, { useState, useEffect, useMemo } from 'react';
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
    <div className="min-h-screen pb-20 md:pb-0 md:pt-16 flex flex-col bg-slate-50">
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-slate-200 h-16 flex items-center justify-between px-6 z-40 hidden md:flex">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">DS</span>
          </div>
          <h1 className="text-xl font-bold text-slate-800">Student Hub</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900">{user.rollNumber}</p>
            <p className="text-xs text-slate-500">Sec {user.section} • {user.department}</p>
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 text-slate-400 hover:text-red-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-6">
        {renderContent()}
      </main>

      <Navbar activeTab={activeTab} onTabChange={setActiveTab} user={user} onLogout={handleLogout} />
    </div>
  );
};

export default App;
