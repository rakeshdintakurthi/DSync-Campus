
import { TheoryUnit } from './deTheoryContent';

export const DBMS_THEORY_CONTENT: TheoryUnit[] = [
  {
    id: 'dbms-unit1',
    title: 'Unit-I: Introduction & Architecture',
    sections: [
      {
        heading: 'Basic Concepts',
        type: 'bullets',
        content: [
          'Data: Raw facts like numbers or names (e.g., "89").',
          'Information: Processed data (e.g., "Marks: 89").',
          'Knowledge: Practical use and personal experience of information.',
          'Database System: Computerized record-keeping system for demand-based storage and retrieval.'
        ]
      },
      {
        heading: 'DBMS Components',
        type: 'bullets',
        content: [
          'Data: Actual operational data and metadata (description of data).',
          'Hardware: Physical electronic devices (CPU, Storage).',
          'Software: DBMS software, OS, and Application programs.',
          'Users: Application Programmers, DBAs, and End-Users.'
        ]
      },
      {
        heading: 'Three-Tier Architecture',
        type: 'bullets',
        content: [
          'External Level: Closest to users, describes part of the database relevant to them.',
          'Conceptual Level: Describes what data is stored and relationships.',
          'Internal/Physical Level: Describes how data is physically stored on disk.'
        ]
      }
    ]
  },
  {
    id: 'dbms-unit2',
    title: 'Unit-II: Relational Model & BASIC SQL',
    sections: [
      {
        heading: 'Relational Model Concepts',
        type: 'bullets',
        content: [
          'Attribute: Properties defining a relation (columns).',
          'Tuple: A row in a relation.',
          'Domain: Set of all allowable values for an attribute.',
          'Degree: Number of attributes in a relation.',
          'Cardinality: Number of tuples in a relation.'
        ]
      },
      {
        heading: 'SQL Data Types',
        type: 'bullets',
        content: [
          'Numeric: INT, SMALLINT, DECIMAL, NUMERIC, FLOAT, REAL.',
          'String: CHAR (fixed), VARCHAR (variable), TEXT.',
          'Date/Time: DATE, TIME, TIMESTAMP.',
          'Binary: BINARY, VARBINARY, IMAGE.'
        ]
      },
      {
        heading: 'Integrity Constraints',
        type: 'bullets',
        content: [
          'NOT NULL: Ensures column cannot have NULL values.',
          'UNIQUE: Ensures all values in a column are different.',
          'PRIMARY KEY: Uniquely identifies each record; cannot be NULL.',
          'FOREIGN KEY: Field that refers to the Primary Key of another table.',
          'CHECK: Ensures values meet a specific condition (e.g., AGE >= 18).'
        ]
      }
    ]
  },
  {
    id: 'dbms-unit3',
    title: 'Unit-III: ER Model & Advanced SQL',
    sections: [
      {
        heading: 'Entity-Relationship Model',
        type: 'bullets',
        content: [
          'Entity: Object distinguishable from others (Rectangular box).',
          'Attribute: Property of an entity (Ellipse).',
          'Relationship: Association among entities (Diamond box).',
          'Specialization: Top-down approach to sub-grouping.',
          'Generalization: Bottom-up approach combining entities.'
        ]
      },
      {
        heading: 'SQL Set Operations',
        type: 'bullets',
        content: [
          'UNION: Combines results, removes duplicates.',
          'UNION ALL: Combines results, keeps duplicates.',
          'INTERSECT: Returns common rows from both queries.',
          'MINUS: Returns rows from first query not in second.'
        ]
      },
      {
        heading: 'SQL Joins',
        type: 'bullets',
        content: [
          'INNER JOIN: Returns matching values in both tables.',
          'LEFT JOIN: All from left table + matched from right.',
          'RIGHT JOIN: All from right table + matched from left.',
          'FULL JOIN: All records from both tables if there is a match.'
        ]
      }
    ]
  },
  {
    id: 'dbms-unit4',
    title: 'Unit-IV: Normalization',
    sections: [
      {
        heading: 'Normalization Purpose',
        type: 'text',
        content: 'Systematic approach to decompose tables to eliminate redundancy and anomalies (Insertion, Update, Deletion).'
      },
      {
        heading: 'Normal Forms',
        type: 'bullets',
        content: [
          '1NF: Remove multi-valued attributes; atomic values only.',
          '2NF: In 1NF and no partial functional dependencies.',
          '3NF: In 2NF and no transitive dependencies.',
          'BCNF: In 3NF and every determinant is a candidate key.',
          '4NF: Handles multi-valued dependencies.',
          '5NF: Removes any remaining join-dependency anomalies.'
        ]
      }
    ]
  },
  {
    id: 'dbms-unit5',
    title: 'Unit-V: Transaction Management',
    sections: [
      {
        heading: 'ACID Properties',
        type: 'bullets',
        content: [
          'Atomicity: Entire transaction succeeds or fails.',
          'Consistency: Database remains consistent before and after.',
          'Isolation: Concurrent transactions don\'t interfere.',
          'Durability: Committed changes are permanent even after crash.'
        ]
      },
      {
        heading: 'Transaction States',
        type: 'bullets',
        content: [
          'Active: Initial state.',
          'Partially Committed: After final statement executes.',
          'Committed: After successful completion.',
          'Failed: After discovery that normal execution cannot proceed.',
          'Aborted: After rolling back and database restored.'
        ]
      }
    ]
  }
];
