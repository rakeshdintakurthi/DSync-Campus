
import { Subject, TimetableEntry, Section } from './types';

export const THEORY_SUBJECTS: Subject[] = [
  { id: 'ot', name: 'Optimization Techniques', code: '23A2200103', credits: 2, type: 'Theory' },
  { id: 'ps', name: 'Statistical methods for Data science', code: '23A2200202', credits: 3, type: 'Theory' },
  { id: 'de', name: 'Data Engineering', code: '23A2244401', credits: 3, type: 'Theory' },
  { id: 'dbms', name: 'DBMS', code: '23A2244402', credits: 3, type: 'Theory' },
  { id: 'dlco', name: 'Digital Logic and Computer Organization', code: '23A2242402', credits: 3, type: 'Theory' },
  { id: 'dti', name: 'Design Thinking & Innovation', code: '23A2200291', credits: 2, type: 'Theory' },
];

export const LAB_SUBJECTS: Subject[] = [
  { id: 'de-lab', name: 'Data Engineering Lab', code: '23A2244491', credits: 1.5, type: 'Lab' },
  { id: 'dbms-lab', name: 'DBMS Lab', code: '23A2244492', credits: 1.5, type: 'Lab' },
  { id: 'eda-lab', name: 'Exploratory Data Analysis with Python', code: '23A2244991', credits: 2, type: 'Lab' },
];

const SLOTS = {
  S1: '09:20 - 10:20',
  S2: '10:20 - 11:20',
  S3: '11:30 - 12:30',
  LUNCH: '12:30 - 01:20',
  S4: '01:20 - 02:20',
  S5: '02:20 - 03:20',
  S6: '03:30 - 04:30',
};

export const TIMETABLES: Record<Section, TimetableEntry[]> = {
  A: [
    {
      day: 'Monday',
      slots: [
        { time: '09:20 - 11:20', subject: 'DBMS LAB', type: 'Lab' },
        { time: SLOTS.S3, subject: 'CODING(BS)', type: 'Theory' },
        { time: SLOTS.S4, subject: 'OT', type: 'Theory' },
        { time: SLOTS.S5, subject: 'DTI', type: 'Theory' },
        { time: SLOTS.S6, subject: 'P&S', type: 'Theory' },
      ],
    },
    {
      day: 'Tuesday',
      slots: [
        { time: SLOTS.S1, subject: 'DBMS', type: 'Theory' },
        { time: SLOTS.S2, subject: 'DE', type: 'Theory' },
        { time: SLOTS.S3, subject: 'DLCO', type: 'Theory' },
        { time: SLOTS.S4, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S5, subject: 'CODING(SS)', type: 'Theory' },
        { time: SLOTS.S6, subject: 'CODING(NS)', type: 'Theory' },
      ],
    },
    {
      day: 'Wednesday',
      slots: [
        { time: SLOTS.S1, subject: 'OT', type: 'Theory' },
        { time: SLOTS.S2, subject: 'DTI', type: 'Theory' },
        { time: SLOTS.S3, subject: 'DE', type: 'Theory' },
        { time: '01:20 - 03:20', subject: 'EDA LAB', type: 'Lab' },
        { time: SLOTS.S6, subject: 'CODING', type: 'Theory' },
      ],
    },
    {
      day: 'Thursday',
      slots: [
        { time: SLOTS.S1, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S2, subject: 'DLCO', type: 'Theory' },
        { time: SLOTS.S3, subject: 'OT', type: 'Theory' },
        { time: SLOTS.S4, subject: 'DBMS', type: 'Theory' },
        { time: SLOTS.S5, subject: 'OT', type: 'Theory' },
        { time: SLOTS.S6, subject: 'DE', type: 'Theory' },
      ],
    },
    {
      day: 'Friday',
      slots: [
        { time: SLOTS.S1, subject: 'DLCO', type: 'Theory' },
        { time: SLOTS.S2, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S3, subject: 'DBMS', type: 'Theory' },
        { time: SLOTS.S4, subject: 'OT', type: 'Theory' },
        { time: SLOTS.S5, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S6, subject: 'DTI', type: 'Theory' },
      ],
    },
    {
      day: 'Saturday',
      slots: [
        { time: SLOTS.S1, subject: 'DLCO', type: 'Theory' },
        { time: SLOTS.S2, subject: 'DE', type: 'Theory' },
        { time: SLOTS.S3, subject: 'DBMS', type: 'Theory' },
        { time: '01:20 - 03:20', subject: 'DE LAB', type: 'Lab' },
        { time: SLOTS.S6, subject: 'CODING(BS)', type: 'Theory' },
      ],
    }
  ],
  B: [
    {
      day: 'Monday',
      slots: [
        { time: '09:20 - 11:20', subject: 'DBMS LAB', type: 'Lab' },
        { time: SLOTS.S3, subject: 'CODING(BS)', type: 'Theory' },
        { time: SLOTS.S4, subject: 'DTI', type: 'Theory' },
        { time: SLOTS.S5, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S6, subject: 'OT', type: 'Theory' },
      ],
    },
    {
      day: 'Tuesday',
      slots: [
        { time: SLOTS.S1, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S2, subject: 'OT', type: 'Theory' },
        { time: SLOTS.S3, subject: 'DTI', type: 'Theory' },
        { time: SLOTS.S4, subject: 'CODING(GSSR)', type: 'Theory' },
        { time: SLOTS.S5, subject: 'DLCO', type: 'Theory' },
        { time: SLOTS.S6, subject: 'DE', type: 'Theory' },
      ],
    },
    {
      day: 'Wednesday',
      slots: [
        { time: SLOTS.S1, subject: 'DE', type: 'Theory' },
        { time: SLOTS.S2, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S3, subject: 'OT', type: 'Theory' },
        { time: '01:20 - 03:20', subject: 'EDA LAB', type: 'Lab' },
        { time: SLOTS.S6, subject: 'CODING', type: 'Theory' },
      ],
    },
    {
      day: 'Thursday',
      slots: [
        { time: SLOTS.S1, subject: 'DTI', type: 'Theory' },
        { time: SLOTS.S2, subject: 'DE', type: 'Theory' },
        { time: SLOTS.S3, subject: 'DBMS', type: 'Theory' },
        { time: SLOTS.S4, subject: 'DLCO', type: 'Theory' },
        { time: SLOTS.S5, subject: 'DBMS', type: 'Theory' },
        { time: SLOTS.S6, subject: 'DLCO', type: 'Theory' },
      ],
    },
    {
      day: 'Friday',
      slots: [
        { time: SLOTS.S1, subject: 'DBMS', type: 'Theory' },
        { time: SLOTS.S2, subject: 'OT', type: 'Theory' },
        { time: SLOTS.S3, subject: 'DLCO', type: 'Theory' },
        { time: SLOTS.S4, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S5, subject: 'DE', type: 'Theory' },
        { time: SLOTS.S6, subject: 'CODING(SS)', type: 'Theory' },
      ],
    },
    {
      day: 'Saturday',
      slots: [
        { time: SLOTS.S1, subject: 'DBMS', type: 'Theory' },
        { time: SLOTS.S2, subject: 'CODING(NS)', type: 'Theory' },
        { time: SLOTS.S3, subject: 'CODING(NS)', type: 'Theory' },
        { time: '01:20 - 03:20', subject: 'DE LAB', type: 'Lab' },
        { time: SLOTS.S6, subject: 'CODING(BS)', type: 'Theory' },
      ],
    }
  ],
  C: [
    {
      day: 'Monday',
      slots: [
        { time: '09:20 - 11:20', subject: 'DBMS LAB', type: 'Lab' },
        { time: SLOTS.S3, subject: 'CODING(BS)', type: 'Theory' },
        { time: SLOTS.S4, subject: 'DLCO', type: 'Theory' },
        { time: SLOTS.S5, subject: 'DE', type: 'Theory' },
        { time: SLOTS.S6, subject: 'DBMS', type: 'Theory' },
      ],
    },
    {
      day: 'Tuesday',
      slots: [
        { time: SLOTS.S1, subject: 'DLCO', type: 'Theory' },
        { time: SLOTS.S2, subject: 'DBMS', type: 'Theory' },
        { time: SLOTS.S3, subject: 'OT', type: 'Theory' },
        { time: SLOTS.S4, subject: 'DE', type: 'Theory' },
        { time: SLOTS.S5, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S6, subject: 'DLCO', type: 'Theory' },
      ],
    },
    {
      day: 'Wednesday',
      slots: [
        { time: SLOTS.S1, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S2, subject: 'DBMS', type: 'Theory' },
        { time: SLOTS.S3, subject: 'DTI', type: 'Theory' },
        { time: '01:20 - 03:20', subject: 'EDA LAB', type: 'Lab' },
        { time: SLOTS.S6, subject: 'CODING', type: 'Theory' },
      ],
    },
    {
      day: 'Thursday',
      slots: [
        { time: SLOTS.S1, subject: 'OT', type: 'Theory' },
        { time: SLOTS.S2, subject: 'CODING(SS)', type: 'Theory' },
        { time: SLOTS.S3, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S4, subject: 'DE', type: 'Theory' },
        { time: SLOTS.S5, subject: 'CODING(BS)', type: 'Theory' },
        { time: SLOTS.S6, subject: 'CODING(BS)', type: 'Theory' },
      ],
    },
    {
      day: 'Friday',
      slots: [
        { time: SLOTS.S1, subject: 'CODING(NS)', type: 'Theory' },
        { time: SLOTS.S2, subject: 'DTI', type: 'Theory' },
        { time: SLOTS.S3, subject: 'DE', type: 'Theory' },
        { time: SLOTS.S4, subject: 'DLCO', type: 'Theory' },
        { time: SLOTS.S5, subject: 'OT', type: 'Theory' },
        { time: SLOTS.S6, subject: 'DBMS', type: 'Theory' },
      ],
    },
    {
      day: 'Saturday',
      slots: [
        { time: SLOTS.S1, subject: 'DTI', type: 'Theory' },
        { time: SLOTS.S2, subject: 'P&S', type: 'Theory' },
        { time: SLOTS.S3, subject: 'OT', type: 'Theory' },
        { time: '01:20 - 03:20', subject: 'DE LAB', type: 'Lab' },
        { time: SLOTS.S6, subject: 'CODING(BS)', type: 'Theory' },
      ],
    }
  ],
};
