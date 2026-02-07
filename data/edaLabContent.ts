import { PageContent } from './dtiTheoryContent';

export interface LabManual {
  id: string;
  title: string;
  pages: PageContent[];
}

export const EDA_LAB_MANUAL: LabManual = {
  id: 'eda-manual-70',
  title: 'Exploratory Data Analysis using Python - Lab Manual',
  pages: [
    {
      pageNumber: 1,
      elements: [
        { type: 'image-placeholder', content: 'NRI Logo & Institute Header (NRI INSTITUTE OF TECHNOLOGY - Autonomous)' },
        { type: 'section-box', color: 'gray', content: 'DEPARTMENT OF CSE-DATA SCIENCE' },
        { type: 'unit-header', content: 'Exploratory Data Analysis using Python' },
        { type: 'title', content: 'LAB MANUAL' },
        { type: 'text', content: 'SUBJECT CODE: 23A2244991\nREGULATION: NRIA23\nII B.TECH II SEMESTER', highlighted: true },
        { type: 'sub-header', content: 'NRI INSTITUTE OF TECHNOLOGY (AUTONOMOUS)' },
        { type: 'text', content: 'Approved by AICTE, New Delhi: Permanently Affiliated to JNTUK, Kakinada Accredited by NAAC with "A" GRADE...' }
      ]
    },
    {
      pageNumber: 2,
      elements: [
        { type: 'section-box', color: 'gray', content: 'Vision' },
        { type: 'text', content: 'To emerge as a leading computer science and engineering department that provides high-quality education, research ability and innovative mind set capable of addressing industrial and societal concerns while maintaining ethical and social responsibilities.' },
        { type: 'section-box', color: 'gray', content: 'Mission' },
        { type: 'table', content: {
          rows: [
            ['M1', 'To equip students with fundamentals, experimental and research skills by fostering an academic atmosphere in which they achieve technical competencies.'],
            ['M2', 'To make students professionally competitive, expose them to frontier knowledge discovery, industrial and social concerns by creating strong relationships with academia, R&D institutions and industry.'],
            ['M3', 'To enrich students with global competencies, encourage creativity, innovative thinking, life- long learning, entrepreneurial mindset, teamwork, leadership, professional and social ethics.']
          ]
        }},
        { type: 'section-box', color: 'gray', content: 'Program Outcomes (PEO’S)' },
        { type: 'table', content: {
          rows: [
            ['PEO1', 'Graduates will have the fundamental domain knowledge and ability to expertise in Computer Science and Engineering.'],
            ['PEO2', 'Graduates will have research skills for devising technically sound, economically feasible and socially acceptable innovative solutions to real-world challenges.'],
            ['PEO3', 'Graduates will be excellent team leaders, communicators, and capable of adapting to new technology and upgrading their abilities on a continual basis.'],
            ['PEO4', 'Graduates will be ethically and socially responsible solution providers and entrepreneurs in Computer Science and other engineering disciplines.']
          ]
        }}
      ]
    },
    {
      pageNumber: 3,
      elements: [
        { type: 'title', content: 'Program outcomes (POs)' },
        { type: 'bullets', content: [
          '1. Engineering knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.',
          '2. Problem analysis: Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles.',
          '3. Design/development of solutions: Design solutions for complex engineering problems and design system components or processes that meet the specified needs.',
          '4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments.',
          '5. Modern tool usage: Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools.',
          '6. The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues.',
          '12. Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning.'
        ]}
      ]
    },
    {
      pageNumber: 7,
      elements: [
        { type: 'title', content: 'List of Experiments' },
        { type: 'table', content: {
          rows: [
            ['S.No.', 'Name of the Experiment', 'Pg.No.'],
            ['1', 'UNIT-I: Exploratory Data Analysis Fundamentals: Understanding data science, Significance of EDA, Steps in EDA...', '1-8'],
            ['2', 'UNIT-II: Visual Aids for EDA: Line chart, Bar charts, Scatter plot using seaborn, Polar chart, Histogram...', '9-14']
          ]
        }}
      ]
    },
    {
      pageNumber: 10,
      elements: [
        { type: 'unit-header', content: 'UNIT-I' },
        { type: 'section-box', color: 'orange', content: '1. Understanding Data Science' },
        { type: 'text', content: 'Data Science is the interdisciplinary field that extracts insights and knowledge from structured and unstructured data. It combines computer science, statistics, and domain knowledge.' },
        { type: 'bullets', content: [
          'Data Collection: Gathering data from various sources.',
          'Data Cleaning and Preprocessing: Ensuring data is clean, consistent, and usable.',
          'Exploratory Data Analysis (EDA): Understanding the nature of the data before applying complex models.'
        ]}
      ]
    },
    {
      pageNumber: 13,
      elements: [
        { type: 'title', content: 'Example Python Code for EDA' },
        { type: 'diagram', content: 'Code: import pandas as pd\nimport seaborn as sns\nimport matplotlib.pyplot as plt\n\ndf = pd.read_csv("cars4u.csv")\nprint(df.head())\nsns.histplot(df["Price"])' }
      ]
    },
    {
      pageNumber: 44,
      elements: [
        { type: 'unit-header', content: 'UNIT-IV' },
        { type: 'section-box', color: 'blue', content: '13. Study Distribution Techniques' },
        { type: 'text', content: 'Uniform distribution is a type of distribution in which every outcome has an equal chance of occurring.' },
        { type: 'diagram', content: 'import numpy as np\nimport matplotlib.pyplot as plt\n\ndata_uniform = np.random.uniform(low=0, high=10, size=1000)\nplt.hist(data_uniform, bins=30, density=True)' }
      ]
    },
    {
      pageNumber: 70,
      elements: [
        { type: 'title', content: 'Final Analysis' },
        { type: 'section-box', color: 'green', content: '3. EDA on Wine Quality Dataset' },
        { type: 'image-placeholder', content: 'Countplot visual showing distribution of Wine Quality' },
        { type: 'text', content: 'Output Explanation: The count plot visualizes how wine quality is distributed, showing frequency across scores 3 through 8.' }
      ]
    }
  ]
};
