
export type Section = 'A' | 'B' | 'C';

export interface User {
  rollNumber: string;
  department: string;
  section: Section;
}

export interface TimetableEntry {
  day: string;
  slots: {
    time: string;
    subject: string;
    type: 'Theory' | 'Lab';
  }[];
}

export type ResourceCategory = 
  | 'Semester Notes'
  | 'Laboratory Notes'
  | 'Previous Year Papers'
  | 'Mid Exam Papers'
  | 'Assignments';

export interface ResourceItem {
  id: string;
  name: string;
  category: ResourceCategory;
  subject: string;
  fileUrl: string;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  credits: number;
  type: 'Theory' | 'Lab';
}
