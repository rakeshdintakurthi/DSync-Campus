
import React, { useState } from 'react';
import { ResourceCategory, Subject } from '../types';
import { THEORY_SUBJECTS, LAB_SUBJECTS } from '../constants';
import { DBMS_LAB_EXPERIMENTS, Experiment } from '../data/dbmsLabContent';
import { EDA_LAB_EXPERIMENTS } from '../data/edaLabContent';
import { DE_THEORY_CONTENT, TheoryUnit } from '../data/deTheoryContent';
import { DBMS_THEORY_CONTENT } from '../data/dbmsTheoryContent';
import { DLCO_THEORY_CONTENT } from '../data/dlcoTheoryContent';
import { DTI_THEORY_CONTENT } from '../data/dtiTheoryContent';

const Resources: React.FC = () => {
  const categories: { label: ResourceCategory; icon: string; color: string }[] = [
    { label: 'Semester Notes', icon: '📘', color: 'bg-blue-50 text-blue-600' },
    { label: 'Laboratory Notes', icon: '🧪', color: 'bg-emerald-50 text-emerald-600' },
    { label: 'Previous Year Papers', icon: '📝', color: 'bg-purple-50 text-purple-600' },
    { label: 'Mid Exam Papers', icon: '📄', color: 'bg-orange-50 text-orange-600' },
    { label: 'Assignments', icon: '📂', color: 'bg-slate-50 text-slate-600' }
  ];

  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedItem, setSelectedItem] = useState<Experiment | TheoryUnit | null>(null);

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setSelectedSubject(null);
    setSelectedItem(null);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
    setSelectedItem(null);
  };

  const handleBackToItems = () => {
    setSelectedItem(null);
  };

  // 3rd Level: Detailed Content View (Theory or Lab)
  if (selectedItem) {
    const isTheory = 'sections' in selectedItem;

    return (
      <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
        <header className="flex items-center gap-4">
          <button 
            onClick={handleBackToItems}
            className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all active:scale-90"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-slate-900 leading-tight">{selectedItem.title}</h1>
            <p className="text-xs text-slate-500 mt-0.5">{selectedSubject?.name}</p>
          </div>
        </header>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-8">
          {isTheory ? (
            <div className="space-y-8">
              {(selectedItem as TheoryUnit).sections.map((sec, i) => (
                <div key={i} className="space-y-4">
                  {sec.heading && (
                    <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50 pb-2">{sec.heading}</h2>
                  )}
                  {sec.type === 'text' && (
                    <p className="text-slate-700 leading-relaxed">{sec.content}</p>
                  )}
                  {sec.type === 'bullets' && Array.isArray(sec.content) && (
                    <ul className="space-y-3">
                      {sec.content.map((bullet, bi) => (
                        <li key={bi} className="flex gap-3 text-slate-700 leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  {sec.type === 'table' && sec.tableData && (
                    <div className="overflow-x-auto rounded-2xl border border-slate-100">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 text-slate-500 font-bold">
                          <tr>
                            {sec.tableData.headers.map((h, hi) => (
                              <th key={hi} className="px-4 py-3">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {sec.tableData.rows.map((row, ri) => (
                            <tr key={ri}>
                              {row.map((cell, ci) => (
                                <td key={ci} className="px-4 py-3 text-slate-600">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <>
              <div>
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Objective</h2>
                <p className="text-slate-700 leading-relaxed font-medium">{(selectedItem as Experiment).description}</p>
              </div>
              <div className="space-y-8">
                {(selectedItem as Experiment).content.map((block, i) => (
                  <div key={i} className="space-y-3">
                    {block.subtitle && (
                      <h3 className="text-md font-bold text-slate-800 flex items-center gap-2">
                        <span className="w-1.5 h-4 bg-blue-500 rounded-full"></span>
                        {block.subtitle}
                      </h3>
                    )}
                    {block.sql && (
                      <div className="relative group">
                        <pre className="bg-slate-900 text-blue-300 p-5 rounded-2xl overflow-x-auto text-sm font-mono leading-relaxed shadow-inner">
                          <code>{block.sql}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // 2nd Level: Topic/Experiment List
  if (selectedSubject) {
    let items: (Experiment | TheoryUnit)[] = [];
    if (selectedSubject.id === 'dbms-lab') items = DBMS_LAB_EXPERIMENTS;
    if (selectedSubject.id === 'eda-lab') items = EDA_LAB_EXPERIMENTS;
    if (selectedSubject.id === 'de') items = DE_THEORY_CONTENT;
    if (selectedSubject.id === 'dbms') items = DBMS_THEORY_CONTENT;
    if (selectedSubject.id === 'dlco') items = DLCO_THEORY_CONTENT;
    if (selectedSubject.id === 'dti') items = DTI_THEORY_CONTENT;

    return (
      <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
        <header className="flex items-center gap-4">
          <button 
            onClick={handleBackToSubjects}
            className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all active:scale-90"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-900">{selectedSubject.name}</h1>
            <p className="text-sm text-slate-500">{selectedCategory}</p>
          </div>
        </header>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-3">
            {items.map((item) => (
              <div 
                key={item.id} 
                onClick={() => setSelectedItem(item)}
                className="flex flex-col p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition-all group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  </div>
                </div>
                <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed">
                  {'description' in item ? item.description : 'Explore structured study materials for this unit.'}
                </p>
                <div className="mt-4 flex items-center text-xs font-bold text-blue-600 gap-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                  Open Document
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200">
             <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
             </div>
             <p className="text-slate-500 font-medium italic">No notes uploaded yet for this subject.</p>
          </div>
        )}
      </div>
    );
  }

  // 1st Level: Subject List
  if (selectedCategory) {
    const isLabCategory = selectedCategory === 'Laboratory Notes';
    const subjectsToDisplay = isLabCategory ? LAB_SUBJECTS : THEORY_SUBJECTS;

    return (
      <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
        <header className="flex items-center gap-4">
          <button 
            onClick={handleBackToCategories}
            className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all active:scale-90"
          >
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-900">{selectedCategory}</h1>
            <p className="text-sm text-slate-500">Browse folders by subject</p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-3">
          {subjectsToDisplay.map((sub) => {
             let fileCount = 0;
             if (sub.id === 'dbms-lab') fileCount = DBMS_LAB_EXPERIMENTS.length;
             if (sub.id === 'eda-lab') fileCount = EDA_LAB_EXPERIMENTS.length;
             if (sub.id === 'de') fileCount = DE_THEORY_CONTENT.length;
             if (sub.id === 'dbms') fileCount = DBMS_THEORY_CONTENT.length;
             if (sub.id === 'dlco') fileCount = DLCO_THEORY_CONTENT.length;
             if (sub.id === 'dti') fileCount = DTI_THEORY_CONTENT.length;

             return (
               <div 
                 key={sub.id} 
                 onClick={() => setSelectedSubject(sub)}
                 className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition-all group"
               >
                 <div className="flex items-center gap-4">
                   <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                     <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                   </div>
                   <div>
                     <h3 className="font-bold text-slate-800">{sub.name}</h3>
                     <p className="text-xs text-slate-400">
                       {fileCount} {fileCount === 1 ? 'Topic' : 'Topics'} available
                     </p>
                   </div>
                 </div>
                 <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-500 translate-x-0 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
               </div>
             );
          })}
        </div>
      </div>
    );
  }

  // Home: Category Selection
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Study Resources</h1>
        <p className="text-slate-500">Access notes, papers, and assignments</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button
            key={cat.label}
            onClick={() => setSelectedCategory(cat.label)}
            className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all text-left active:scale-[0.98]"
          >
            <div className={`w-14 h-14 flex items-center justify-center text-2xl rounded-2xl ${cat.color} shadow-sm`}>
              {cat.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800">{cat.label}</h3>
              <p className="text-sm text-slate-400">Click to explore subjects</p>
            </div>
          </button>
        ))}
      </div>

      <div className="p-6 bg-blue-600 rounded-3xl text-white relative overflow-hidden mt-8">
        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-2">Need Help?</h3>
          <p className="text-blue-100 text-sm opacity-90 leading-relaxed mb-4">Can't find a specific document? Contact the class representative or department office.</p>
          <button className="bg-white text-blue-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-50 transition-colors shadow-lg shadow-blue-800/20">
            Contact Support
          </button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 blur-xl"></div>
      </div>
    </div>
  );
};

export default Resources;
