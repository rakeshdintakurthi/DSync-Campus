import React, { useState } from 'react';
import { ResourceCategory, Subject } from '../types';
import { THEORY_SUBJECTS, LAB_SUBJECTS } from '../constants';
import { DBMS_LAB_EXPERIMENTS } from '../data/dbmsLabContent';
import { EDA_LAB_MANUAL } from '../data/edaLabContent';
import { DE_THEORY_CONTENT } from '../data/deTheoryContent';
import { DBMS_THEORY_CONTENT } from '../data/dbmsTheoryContent';
import { DLCO_THEORY_CONTENT } from '../data/dlcoTheoryContent';
import { DTI_THEORY_CONTENT, PageContent } from '../data/dtiTheoryContent';

const DocumentPage: React.FC<{ page: PageContent; subject: Subject }> = ({ page, subject }) => {
  return (
    <div className="mx-auto w-full max-w-[850px] bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)] min-h-[1100px] flex flex-col relative border border-slate-200 mb-10 select-text font-serif">
      {/* PDF Page Header */}
      <div className="px-12 pt-8 pb-4 flex justify-between items-center text-[9px] font-bold text-slate-400 uppercase tracking-widest border-b border-slate-50">
        <div>NRI INSTITUTE OF TECHNOLOGY • DS DEPT</div>
        <div>PAGE {page.pageNumber}</div>
      </div>

      <div className="px-16 sm:px-20 py-12 flex-1">
        <div className="space-y-8">
          {page.elements.map((el, i) => {
            switch (el.type) {
              case 'title':
                return (
                  <h1 key={i} className="text-2xl font-bold text-slate-900 text-center uppercase tracking-tight leading-tight border-b-2 border-slate-900 pb-2">
                    {el.content}
                  </h1>
                );
              case 'sub-header':
                return (
                  <div key={i} className="text-center">
                    <span className="font-bold text-slate-800 text-sm italic">
                      {el.content}
                    </span>
                  </div>
                );
              case 'text':
                return (
                  <p key={i} className={`text-slate-800 leading-relaxed text-[14px] whitespace-pre-wrap text-justify ${el.highlighted ? 'bg-yellow-100 p-4 border-l-4 border-yellow-400' : ''}`}>
                    {el.content}
                  </p>
                );
              case 'unit-header':
                return (
                  <div key={i} className="bg-slate-900 text-white px-8 py-4 font-bold text-center text-lg shadow-lg my-8 uppercase tracking-widest">
                    {el.content}
                  </div>
                );
              case 'section-box':
                return (
                  <div key={i} className="border-2 border-dashed border-slate-900 p-4 text-center font-bold text-slate-900 uppercase tracking-widest text-sm my-6">
                    {el.content}
                  </div>
                );
              case 'bullets':
                return (
                  <ul key={i} className="space-y-4 my-6">
                    {(el.content as string[]).map((bullet, bi) => (
                      <li key={bi} className="flex gap-4 text-slate-800 text-[14px] leading-relaxed">
                        <span className="font-bold">{bi + 1}.</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                );
              case 'table':
                return (
                  <div key={i} className="my-8 border-2 border-slate-900">
                    <table className="w-full text-[13px] border-collapse">
                      <tbody>
                        {el.content.rows.map((row: string[], ri: number) => (
                          <tr key={ri} className="border-b border-slate-900 last:border-0">
                            {row.map((cell, ci) => (
                              <td key={ci} className={`p-3 border-r border-slate-900 last:border-0 align-top ${ci === 0 ? 'font-bold bg-slate-50 w-20' : ''}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              case 'diagram':
                return (
                  <div key={i} className="my-8 bg-slate-50 border border-slate-200 p-8 rounded font-mono text-[12px] whitespace-pre overflow-x-auto shadow-inner text-blue-700">
                    {el.content}
                  </div>
                );
              case 'image-placeholder':
                return (
                  <div key={i} className="my-10 p-16 bg-slate-50 border border-slate-200 text-center">
                    <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest mb-2">[ FIG / LOGO PLACEHOLDER ]</p>
                    <p className="text-xs text-slate-500 italic">{el.content}</p>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
      
      {/* PDF Page Footer */}
      <div className="px-12 py-6 border-t border-slate-50 text-center text-[8px] text-slate-300 font-bold uppercase tracking-[0.5em]">
        Academic Resource • NRI Institute of Technology
      </div>
    </div>
  );
};

const DocumentViewer: React.FC<{ 
  item: any; 
  subject: Subject;
  onBack: () => void;
}> = ({ item, subject, onBack }) => {
  const pages = item.pages || [];

  return (
    <div className="fixed inset-0 z-[60] bg-[#1e293b] flex flex-col animate-in fade-in duration-500 overflow-hidden">
      {/* Reader Toolbar */}
      <header className="bg-[#0f172a] text-white h-16 flex items-center justify-between px-6 shadow-2xl z-30 border-b border-white/5">
        <div className="flex items-center gap-6">
          <button onClick={onBack} className="w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div>
            <h1 className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">PDF Reader</h1>
            <p className="text-sm font-bold text-white truncate max-w-[200px] sm:max-w-md">{item.title}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white/5 px-4 py-2 rounded-xl text-[10px] font-black border border-white/10">
            {pages.length} PAGES RECONSTRUCTED
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-2 rounded-xl text-xs font-black transition-all shadow-lg shadow-blue-900/40 uppercase tracking-widest active:scale-95">Download PDF</button>
        </div>
      </header>

      {/* Page Container */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-12 hide-scrollbar scroll-smooth bg-[#334155]">
        <div className="flex flex-col items-center gap-8">
          {pages.map((page: any, idx: number) => (
            <DocumentPage key={idx} page={page} subject={subject} />
          ))}
          <div className="py-40 text-center">
            <div className="w-20 h-1 bg-white/20 mx-auto mb-6"></div>
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[1.5em]">End of Document</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Resources: React.FC = () => {
  const categories: { label: ResourceCategory; icon: string; color: string }[] = [
    { label: 'Semester Notes', icon: '💎', color: 'bg-blue-500/10 text-blue-400' },
    { label: 'Laboratory Notes', icon: '🧪', color: 'bg-emerald-500/10 text-emerald-400' },
    { label: 'Previous Year Papers', icon: '📝', color: 'bg-purple-500/10 text-purple-400' },
    { label: 'Mid Exam Papers', icon: '📄', color: 'bg-orange-500/10 text-orange-400' },
    { label: 'Assignments', icon: '📂', color: 'bg-slate-500/10 text-slate-400' }
  ];

  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const handleBackToSubjects = () => { setSelectedSubject(null); setSelectedItem(null); };
  const handleBackToCategories = () => { setSelectedCategory(null); setSelectedSubject(null); };

  if (selectedItem && selectedSubject) {
    return <DocumentViewer item={selectedItem} subject={selectedSubject} onBack={() => setSelectedItem(null)} />;
  }

  if (selectedSubject) {
    let items: any[] = [];
    if (selectedSubject.id === 'dbms-lab') items = DBMS_LAB_EXPERIMENTS;
    if (selectedSubject.id === 'eda-lab') items = [EDA_LAB_MANUAL];
    if (selectedSubject.id === 'de') items = DE_THEORY_CONTENT;
    if (selectedSubject.id === 'dbms') items = DBMS_THEORY_CONTENT;
    if (selectedSubject.id === 'dlco') items = DLCO_THEORY_CONTENT;
    if (selectedSubject.id === 'dti') items = DTI_THEORY_CONTENT;

    return (
      <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
        <header className="flex items-center gap-6">
          <button onClick={handleBackToSubjects} className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl border border-slate-100 shadow-2xl hover:scale-110 transition-all">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">{selectedSubject.name}</h1>
            <p className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em] mt-1">{selectedCategory}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-4">
          {items.map((item) => (
            <div key={item.id} onClick={() => setSelectedItem(item)} className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer transition-all group flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="w-16 h-16 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center group-hover:bg-red-500 group-hover:text-white transition-all shadow-sm">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">High-Fidelity Document</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (selectedCategory) {
    const isLabCategory = selectedCategory === 'Laboratory Notes';
    const subjectsToDisplay = isLabCategory ? LAB_SUBJECTS : THEORY_SUBJECTS;

    return (
      <div className="space-y-8 animate-in slide-in-from-right-8 duration-500">
        <header className="flex items-center gap-6">
          <button onClick={handleBackToCategories} className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl border border-slate-100 shadow-2xl hover:scale-110 transition-all">
            <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">{selectedCategory}</h1>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-1">Academic Vault</p>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {subjectsToDisplay.map((sub) => (
            <div key={sub.id} onClick={() => setSelectedSubject(sub)} className="p-10 bg-white rounded-[3rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer transition-all group">
              <div className="w-16 h-16 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">{sub.name}</h3>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{sub.code}</span>
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest group-hover:translate-x-2 transition-transform">Enter →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <header>
        <h1 className="text-5xl font-black text-slate-900 tracking-tight">The Vault</h1>
        <p className="text-slate-500 font-semibold text-xl mt-3">Access premium curated resources and manuals.</p>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {categories.map((cat) => (
          <button key={cat.label} onClick={() => setSelectedCategory(cat.label)} className="group p-10 bg-white rounded-[3.5rem] border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 transition-all text-left flex items-center gap-8 relative overflow-hidden">
            <div className={`w-20 h-20 flex items-center justify-center text-4xl rounded-3xl ${cat.color} group-hover:scale-110 transition-transform shadow-sm`}>{cat.icon}</div>
            <div className="flex-1 z-10">
              <h3 className="text-2xl font-black text-slate-800 group-hover:text-blue-600 transition-colors">{cat.label}</h3>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mt-2">Authorized Access</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-slate-50 rounded-full opacity-50 group-hover:scale-150 transition-transform"></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Resources;