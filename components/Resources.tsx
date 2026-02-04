import React, { useState } from 'react';
import { ResourceCategory, Subject } from '../types';
import { THEORY_SUBJECTS, LAB_SUBJECTS } from '../constants';
import { DBMS_LAB_EXPERIMENTS } from '../data/dbmsLabContent';
import { EDA_LAB_EXPERIMENTS } from '../data/edaLabContent';
import { DE_THEORY_CONTENT } from '../data/deTheoryContent';
import { DBMS_THEORY_CONTENT } from '../data/dbmsTheoryContent';
import { DLCO_THEORY_CONTENT } from '../data/dlcoTheoryContent';
import { DTI_THEORY_CONTENT, PageContent } from '../data/dtiTheoryContent';

const ElementsFlowchart = () => (
  <div className="my-10 flex flex-row items-stretch justify-center font-bold relative min-h-[400px]">
    <div className="bg-[#0f2d4e] text-white px-2 py-8 flex items-center justify-center w-12 rounded-sm shadow-md">
      <span className="[writing-mode:vertical-lr] rotate-180 uppercase text-xs tracking-[0.2em] font-black">
        Key elements of Design
      </span>
    </div>
    <div className="relative flex flex-col justify-around py-4">
      {['point(dot)', 'Line', 'shape', 'Form', 'colour', 'Texture', 'Value', 'space'].map((item) => (
        <div key={item} className="flex items-center">
          <div className="w-4 h-[2px] bg-orange-400"></div>
          <div className="bg-[#f28e40] text-white w-48 py-2 px-4 text-center shadow-sm text-sm font-bold ml-0 mb-1">
            {item}
          </div>
        </div>
      ))}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-orange-400"></div>
    </div>
  </div>
);

const DocumentPage: React.FC<{ page: PageContent; subject: Subject }> = ({ page, subject }) => {
  return (
    <div className="mx-auto w-full max-w-[850px] bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-sm min-h-[1100px] flex flex-col relative border border-slate-200 mb-12 select-text">
      <div className="px-12 pt-10 pb-4 flex justify-between items-center text-[10px] font-black tracking-widest text-slate-800 uppercase">
        <div className="border-b border-slate-200 pb-1">DATA SCIENCE • {subject.name}</div>
        <div className="border-b border-slate-200 pb-1">PAGE {page.pageNumber}</div>
      </div>

      <div className="px-16 sm:px-24 pb-24 flex-1">
        <div className="space-y-6 mt-4">
          {page.elements.map((el, i) => {
            switch (el.type) {
              case 'title':
                return (
                  <h1 key={i} className="text-2xl font-black text-slate-900 text-center uppercase tracking-tight py-4">
                    {el.content}
                  </h1>
                );
              case 'sub-header':
                return (
                  <div key={i} className="mb-4">
                    <span className="font-black text-slate-900 border-b-2 border-slate-900 pb-0.5 text-[15px]">
                      {el.content}
                    </span>
                  </div>
                );
              case 'text':
                return (
                  <p key={i} className={`text-slate-800 leading-relaxed text-[15px] whitespace-pre-wrap ${el.highlighted ? 'bg-[#4ade80] px-1' : ''}`}>
                    {el.content}
                  </p>
                );
              case 'unit-header':
                return (
                  <div key={i} className="bg-[#4ade80] text-slate-900 px-6 py-4 font-black text-xl shadow-sm border-l-[12px] border-[#22c55e] my-4">
                    {el.content}
                  </div>
                );
              case 'section-box':
                const boxColor = el.color === 'orange' ? 'bg-[#f4a261]' : el.color === 'gray' ? 'bg-slate-300' : 'bg-[#4ade80]';
                return (
                  <div key={i} className={`${boxColor} text-slate-900 px-4 py-1.5 font-black inline-block shadow-sm mt-8 uppercase text-[13px] tracking-wider`}>
                    {el.content}
                  </div>
                );
              case 'bullets':
                return (
                  <ul key={i} className="space-y-3 mt-4">
                    {(el.content as string[]).map((bullet, bi) => (
                      <li key={bi} className="flex gap-4 text-slate-800 text-[14px] leading-relaxed">
                        <span className="text-slate-900 mt-0.5 font-bold">→</span>
                        <span className="whitespace-pre-wrap">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                );
              case 'diagram':
                if (el.content === 'flowchart-elements') return <ElementsFlowchart key={i} />;
                return <div key={i} className="my-10 p-16 bg-slate-50 border border-dashed border-slate-200 text-center text-slate-400 text-xs uppercase font-bold">[ Diagram: {el.content} ]</div>;
              case 'table':
                return (
                  <div key={i} className="my-6 border rounded-sm overflow-hidden border-slate-200">
                    <table className="w-full text-[14px]">
                      <tbody className="divide-y divide-slate-100">
                        {el.content.rows.map((row: string[], ri: number) => (
                          <tr key={ri} className="bg-white">
                            <td className="w-40 font-black text-slate-900 p-4 bg-slate-50/50 border-r border-slate-100 align-top">{row[0]}</td>
                            <td className="p-4 text-slate-700 leading-relaxed">
                              {row[1]}
                              {row[2] && <div className="mt-2 text-xs italic text-slate-500">{row[2]}</div>}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              case 'image-placeholder':
                return (
                  <div key={i} className="my-8 p-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-sm flex flex-col items-center justify-center text-center">
                    <svg className="w-8 h-8 text-slate-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1">Illustration Segment</p>
                    <p className="text-xs text-slate-500 italic max-w-sm">{el.content}</p>
                  </div>
                );
              default:
                return null;
            }
          })}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100/30"></div>
    </div>
  );
};

const DocumentViewer: React.FC<{ 
  item: any; 
  subject: Subject;
  onBack: () => void;
}> = ({ item, subject, onBack }) => {
  const isDTI = subject.id === 'dti';
  const pages = isDTI ? (item.pages || []) : [{ pageNumber: 1, elements: [{ type: 'unit-header', content: item.title }, { type: 'text', content: 'Legacy format loading...' }] }];

  return (
    <div className="fixed inset-0 z-[60] bg-[#ced4da] flex flex-col animate-in fade-in duration-300 overflow-hidden">
      <header className="bg-[#1e293b] text-white h-14 flex items-center justify-between px-6 shadow-xl z-30 flex-shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-white/10 rounded-lg transition-all text-white/80">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-red-500 rounded flex items-center justify-center text-[10px] font-black">DOC</div>
            <h1 className="text-xs font-black uppercase tracking-widest truncate max-w-[150px] sm:max-w-md">{item.title}</h1>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-slate-700/50 px-3 py-1 rounded text-[10px] font-bold text-slate-300 hidden sm:block">
            {pages.length} PAGES RECONSTRUCTED
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded text-[10px] font-black transition-all shadow-lg uppercase tracking-wider">Save Offline</button>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 sm:p-10 hide-scrollbar scroll-smooth">
        <div className="flex flex-col items-center">
          {pages.map((page: any, idx: number) => (
            <DocumentPage key={idx} page={page} subject={subject} />
          ))}
          <div className="py-20 text-center opacity-40 select-none">
            <p className="text-slate-900 text-[10px] font-black uppercase tracking-[0.8em]">End of Digital Handout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

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
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const handleBackToCategories = () => { setSelectedCategory(null); setSelectedSubject(null); setSelectedItem(null); };
  const handleBackToSubjects = () => { setSelectedSubject(null); setSelectedItem(null); };
  const handleBackToItems = () => { setSelectedItem(null); };

  if (selectedItem && selectedSubject) {
    return <DocumentViewer item={selectedItem} subject={selectedSubject} onBack={handleBackToItems} />;
  }

  if (selectedSubject) {
    let items: any[] = [];
    if (selectedSubject.id === 'dbms-lab') items = DBMS_LAB_EXPERIMENTS;
    if (selectedSubject.id === 'eda-lab') items = EDA_LAB_EXPERIMENTS;
    if (selectedSubject.id === 'de') items = DE_THEORY_CONTENT;
    if (selectedSubject.id === 'dbms') items = DBMS_THEORY_CONTENT;
    if (selectedSubject.id === 'dlco') items = DLCO_THEORY_CONTENT;
    if (selectedSubject.id === 'dti') items = DTI_THEORY_CONTENT;

    return (
      <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
        <header className="flex items-center gap-4">
          <button onClick={handleBackToSubjects} className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-900">{selectedSubject.name}</h1>
            <p className="text-sm text-slate-500">{selectedCategory}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-3">
          {items.map((item) => (
            <div key={item.id} onClick={() => setSelectedItem(item)} className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-red-50 text-red-600 rounded-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{item.title}</h3>
                  <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">High Fidelity Digital Copy</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
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
      <div className="space-y-6 animate-in slide-in-from-right-4 duration-300">
        <header className="flex items-center gap-4">
          <button onClick={handleBackToCategories} className="p-3 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <div>
            <h1 className="text-xl font-bold text-slate-900">{selectedCategory}</h1>
            <p className="text-sm text-slate-500">Academic Vault</p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-3">
          {subjectsToDisplay.map((sub) => (
            <div key={sub.id} onClick={() => setSelectedSubject(sub)} className="flex items-center justify-between p-5 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md cursor-pointer transition-all group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">
                  <svg className="w-6 h-6 text-slate-400 group-hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                </div>
                <div><h3 className="font-bold text-slate-800">{sub.name}</h3></div>
              </div>
              <svg className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header><h1 className="text-2xl font-bold text-slate-900">Study Vault</h1><p className="text-slate-500">Access your 44-page Design Thinking guide and more</p></header>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {categories.map((cat) => (
          <button key={cat.label} onClick={() => setSelectedCategory(cat.label)} className="flex items-center gap-5 p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all text-left">
            <div className={`w-14 h-14 flex items-center justify-center text-2xl rounded-2xl ${cat.color} shadow-sm`}>{cat.icon}</div>
            <div className="flex-1"><h3 className="text-lg font-bold text-slate-800">{cat.label}</h3><p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Open Folder</p></div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Resources;