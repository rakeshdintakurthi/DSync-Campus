
export interface Experiment {
  id: string;
  title: string;
  description: string;
  content: {
    subtitle?: string;
    sql?: string;
    notes?: string[];
  }[];
}

export const DBMS_LAB_EXPERIMENTS: Experiment[] = [
  {
    id: 'exp1',
    title: 'Experiment 01',
    description: 'Creation, altering and dropping of tables and inserting rows into a table (use constraints while creating tables).',
    content: [
      {
        subtitle: '1. Create Department Table (with constraints)',
        sql: `CREATE TABLE Department (
  dept_id INT PRIMARY KEY,
  dept_name VARCHAR(50) NOT NULL UNIQUE,
  hod_name VARCHAR(50) NOT NULL,
  dept_phone VARCHAR(15)
);`,
      },
      {
        subtitle: '2. Insert Rows into Department Table',
        sql: `INSERT INTO Department VALUES
(1, 'Computer Science', 'Dr. Sharma', '9876543210'),
(2, 'Information Technology', 'Dr. Mehta', '9876543211'),
(3, 'Electronics', 'Dr. Rao', '9876543212'),
(4, 'Mechanical', 'Dr. Singh', '9876543213'),
(5, 'Civil', 'Dr. Verma', '9876543214'),
(6, 'Electrical', 'Dr. Kumar', '9876543215'),
(7, 'Chemical', 'Dr. Patel', '9876543216'),
(8, 'Biotechnology', 'Dr. Iyer', '9876543217'),
(9, 'Physics', 'Dr. Das', '9876543218'),
(10, 'Mathematics', 'Dr. Sen', '9876543219');`,
      },
      {
        subtitle: '3. Create Students Table',
        sql: `CREATE TABLE Students (
  student_id INT PRIMARY KEY,
  student_name VARCHAR(50) NOT NULL,
  age INT CHECK (age >= 18),
  gender CHAR(1) CHECK (gender IN ('M', 'F')),
  dept_id INT,
  email VARCHAR(50) UNIQUE,
  CONSTRAINT fk_department
  FOREIGN KEY (dept_id)
  REFERENCES Department(dept_id)
);`,
      }
    ]
  },
  {
    id: 'exp2',
    title: 'Experiment 02',
    description: 'Queries using DML Commands (INSERT, UPDATE, DELETE) and DCL Commands (COMMIT, ROLLBACK, SAVEPOINT).',
    content: [
      {
        subtitle: 'DML: UPDATE Commands',
        sql: `UPDATE Department SET hod_name = 'Dr. R. Sharma' WHERE dept_id = 1;
UPDATE Students SET age = 22 WHERE student_id = 102;`,
      },
      {
        subtitle: 'Transaction Control: SAVEPOINT',
        sql: `SAVEPOINT sp1;
UPDATE Students SET age = 25 WHERE student_id = 101;
SAVEPOINT sp2;
DELETE FROM Students WHERE student_id = 108;
ROLLBACK TO sp2;`,
      }
    ]
  },
  {
    id: 'exp3',
    title: 'Experiment 03',
    description: 'Queries using SELECT statement with various clauses (Comparison, AND, OR, NOT, IN, BETWEEN, LIKE, ORDER BY, LIMIT).',
    content: [
      {
        subtitle: 'SELECT with WHERE and ORDER BY',
        sql: `SELECT name, marks FROM STUDENT WHERE marks > 80;
SELECT name, city FROM STUDENT WHERE city IN ('Vijayawada', 'Guntur');
SELECT name, marks FROM STUDENT ORDER BY marks DESC LIMIT 3;`,
      }
    ]
  },
  {
    id: 'exp4',
    title: 'Experiment 04',
    description: 'Queries using Aggregate functions (COUNT, SUM, AVG, MAX, MIN), GROUP BY, HAVING and Views.',
    content: [
      {
        subtitle: 'Aggregate Functions & Grouping',
        sql: `SELECT department, COUNT(*) AS student_count FROM STUDENT GROUP BY department;
SELECT department, AVG(marks) AS avg_marks FROM STUDENT GROUP BY department HAVING AVG(marks) > 80;`,
      },
      {
        subtitle: 'VIEW Creation',
        sql: `CREATE VIEW High_Mark_Students AS
SELECT student_id, name, marks FROM STUDENT WHERE marks > 85;

SELECT * FROM High_Mark_Students;`,
      }
    ]
  }
];
