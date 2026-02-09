
import React, { useState, useEffect } from 'react';
import { User, Section } from './types';
import Dashboard from './components/Dashboard';
import Timetable from './components/Timetable';
import Subjects from './components/Subjects';
import Resources from './components/Resources';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  // Initialize with a default Data Science student profile to bypass login
  const [user, setUser] = useState<User>({
    rollNumber: 'DS-STUDENT',
    department: 'CSE – DATA SCIENCE',
    section: 'A',
  });
  
  const [activeTab, setActiveTab] = useState<'dashboard' | 'timetable' | 'subjects' | 'resources'>('dashboard');

  useEffect(() => {
    const savedUser = localStorage.getItem('ds_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    setActiveTab('dashboard');
  };

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
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
