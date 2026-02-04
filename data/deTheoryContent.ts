
export interface TheorySection {
  heading?: string;
  content: string | string[];
  type: 'text' | 'bullets' | 'table';
  tableData?: { headers: string[], rows: string[][] };
}

export interface TheoryUnit {
  id: string;
  title: string;
  sections: TheorySection[];
}

export const DE_THEORY_CONTENT: TheoryUnit[] = [
  {
    id: 'de-unit1',
    title: 'Unit-I: Introduction to Data Engineering',
    sections: [
      {
        heading: 'Definition & Basics',
        type: 'text',
        content: 'Data engineering is part of the big data ecosystem and is closely linked to data science. Data engineers query data from a source (extract), perform modifications (transform), and put that data in a location where users can access it (load) - commonly known as ETL.'
      },
      {
        heading: 'Data Ingestion Stages',
        type: 'bullets',
        content: [
          'Data Ingestion: Collecting data from sources such as databases, APIs, and file systems.',
          'Data Processing: Transforming and enriching data to fit analysis needs.',
          'Data Storage: Storing processed data in a data warehouse or data lake.',
          'Data Analysis: Providing access to data for analysis and reporting.'
        ]
      },
      {
        heading: 'Data Science vs Data Engineering',
        type: 'table',
        content: 'Comparison of primary focus and skills.',
        tableData: {
          headers: ['Feature', 'Data Scientists', 'Data Engineers'],
          rows: [
            ['Primary Focus', 'Analyzing and interpreting data to extract insights', 'Designing, building, and maintaining data infrastructure'],
            ['Skills', 'Strong analytical skills, ML expertise, Python/R', 'Database management, Data modeling, SQL/Java/Python'],
            ['Common Tools', 'TensorFlow, PyTorch, R', 'SQL, Hadoop, Spark, Kafka']
          ]
        }
      },
      {
        heading: 'Evolution of Data Engineering',
        type: 'bullets',
        content: [
          '1960s-1970s: Birth of Databases (IMS, Magnetic Tapes).',
          '1980s: Relational Databases (RDBMS, SQL).',
          '1990s: Data Warehousing (Consolidated BI tasks).',
          '2000s: Big Data & Hadoop (HDFS, Distributed processing).',
          '2010s: Rise of Data Lakes & Cloud (AWS, GCP, Azure).',
          '2020s: Real-time Streaming & ML Support (Kafka, Spark).'
        ]
      }
    ]
  },
  {
    id: 'de-unit2',
    title: 'Unit-II: Data Engineering Life Cycle',
    sections: [
      {
        heading: 'The Data Life Cycle (8 Stages)',
        type: 'bullets',
        content: [
          'Generation: Data is created or acquired.',
          'Collection: Structured gathering from sources.',
          'Processing: Raw data undergoes formatting and cleaning.',
          'Storage: Securely stored in databases/warehouses.',
          'Management: Policies and procedures for security.',
          'Analysis: Discovering real value using analytical tools.',
          'Visualization: Representing data graphically.',
          'Interpretation: Drawing conclusions for business decisions.'
        ]
      },
      {
        heading: 'Data Storage Options',
        type: 'bullets',
        content: [
          'Object Storage: Designed for unstructured data (files, images, videos) like S3, Azure Blob.',
          'Hadoop HDFS: Distributed file system for big data processing.',
          'Streaming: Handle continuously generated data (Kafka, RabbitMQ).',
          'RDBMS: Structured tables with rows/columns (MySQL, PostgreSQL).',
          'NoSQL: Flexible schemas for unstructured data (MongoDB, Cassandra).'
        ]
      },
      {
        heading: 'Data Transformation Techniques',
        type: 'bullets',
        content: [
          'Data Smoothing: Removes noise (binning, regression).',
          'Attribute Construction: Adds new attributes (e.g., Revenue = Price * Qty).',
          'Data Aggregation: Summarizes data (e.g., Daily to Monthly totals).',
          'Data Normalization: Scales data into a small range (0 to 1).',
          'Data Discretization: Converts continuous data into discrete intervals.',
          'Data Generalization: Transforms detailed data into higher-level categories.'
        ]
      },
      {
        heading: 'Undercurrents of DE Lifecycle',
        type: 'bullets',
        content: [
          'Security: Access control (RBAC), Encryption (At-rest/In-transit), Auditing.',
          'Data Management: Ensuring data is collected, stored, and processed properly.',
          'DataOps: Agile approach to automate data pipelines.',
          'Data Architecture: The blueprint/structure of data assets.',
          'Orchestration: Automated coordination of complex data systems.',
          'Software Engineering: Principles for building efficient/reliable systems.'
        ]
      }
    ]
  }
];
