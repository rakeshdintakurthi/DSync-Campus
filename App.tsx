
import React, { useState, useEffect } from 'react';
import { User, Section } from './types';
import Dashboard from './components/Dashboard';
import Timetable from './components/Timetable';
import Subjects from './components/Subjects';
import Resources from './components/Resources';
import Navbar from './components/Navbar';
import Login from './components/Login';

const App: React.FC = () => {
  // We start with a default user but allow it to be null for logout functionality
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem('ds_user');
    if (saved) return JSON.parse(saved);
    // Default user to satisfy "remove the login box" requirement on first load
    return {
      rollNumber: 'DS-STUDENT',
      department: 'CSE – DATA SCIENCE',
      section: 'A',
    };
  });
  
  const [activeTab, setActiveTab] = useState<'dashboard' | 'timetable' | 'subjects' | 'resources'>('dashboard');

  const handleLogin = (newUser: User) => {
    setUser(newUser);
    localStorage.setItem('ds_user', JSON.stringify(newUser));
    setActiveTab('dashboard');
  };

  const handleLogout = () => {
    // Clear state and storage
    localStorage.removeItem('ds_user');
    setUser(null);
    setActiveTab('dashboard');
  };

  // If user is null (after logout), show the login screen to allow switching identity
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard user={user} setActiveTab={setActiveTab} />;
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
    <div className="min-h-screen bg-[#030712] text-slate-200 flex flex-col md:flex-row relative">
      {/* Abstract Background Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="fixed top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none"></div>

      <Navbar activeTab={activeTab} onTabChange={setActiveTab} user={user} onLogout={handleLogout} />

      <main className="flex-1 w-full max-w-6xl mx-auto px-6 py-12 md:pl-40 md:pr-12 pb-32 md:pb-12 z-10">
        <header className="flex justify-between items-center mb-12 md:hidden">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/20">
               <span className="text-white font-black text-xl">DS</span>
             </div>
             <div>
               <h1 className="text-lg font-black text-white tracking-tight">Intelligence Hub</h1>
               <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">DS Department</p>
             </div>
          </div>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
