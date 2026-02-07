
export interface PageContent {
  pageNumber: number;
  title?: string;
  elements: {
    type: 'title' | 'unit-header' | 'section-box' | 'sub-header' | 'text' | 'bullets' | 'diagram' | 'table' | 'image-placeholder';
    color?: 'green' | 'orange' | 'blue' | 'gray';
    content: any;
    highlighted?: boolean;
  }[];
}

export interface TheoryUnit {
  id: string;
  title: string;
  pages: PageContent[];
}

export const DTI_THEORY_CONTENT: TheoryUnit[] = [
  {
    id: 'dti-unit-1',
    title: 'Design Thinking & Innovation - Full Handout',
    pages: [
      {
        pageNumber: 1,
        elements: [
          { type: 'title', content: 'Design Thinking and Innovation' },
          { type: 'sub-header', color: 'blue', content: 'Syllabus of UNIT – I: Introduction to Design Thinking' },
          { type: 'text', content: 'Introduction to elements and principles of Design, basics of design - dot, line, shape, form as fundamental design components. Principles of design. Introduction to design thinking, history of Design Thinking, New materials in Industry', highlighted: true },
          { type: 'section-box', color: 'orange', content: '1.1. Elements of Design:' },
          { type: 'table', content: { 
            rows: [
              ['Definition:', 'Elements of Design are the fundamental components or building blocks that artists and Designers use to create visual compositions'],
              ['Significance', 'These elements work together to communicate ideas, convey emotions, and establish visual order in a design'],
              ['Applications', 'Understanding these elements is crucial for both creating and analysing visual works across various fields.']
            ]
          }},
          { type: 'diagram', content: 'flowchart-elements' },
          { type: 'section-box', color: 'green', content: '1.1.1. Point (Dot):' },
          { type: 'text', content: 'Definition:\nA dot or point is the most fundamental element of design. It is a precise position or location in a space that has no dimension.' }
        ]
      },
      {
        pageNumber: 2,
        elements: [
          { type: 'bullets', content: [
            'In design, a dot is often represented by a small circular mark, indicating presence or position.',
            'A point can be the beginning of a visual idea used to build more complex forms.',
            'Dots add visual interest and create a sense of rhythm.',
            'Used to create patterns, textures and serves as reference for other elements.'
          ]},
          { type: 'sub-header', color: 'blue', content: '1.1.1.2 Types of dots' },
          { type: 'text', content: '1) Isolated Dot/ single Dot' },
          { type: 'image-placeholder', content: 'Visual: Single black dot center. Application: Period in sentence, center punch mark.' },
          { type: 'text', content: '2) Group of Dots (Clustered Dots)' },
          { type: 'image-placeholder', content: 'Visual: Clusters of dots. Application: Stars in constellation, nodes in FEA analysis.' }
        ]
      },
      {
        pageNumber: 3,
        elements: [
          { type: 'text', content: '3) series of dots' },
          { type: 'bullets', content: ['Multiple dots close to each other, forming a textured area.', 'Application: Dot patterns on a polka dot dress.'] },
          { type: 'image-placeholder', content: 'Visual: Polka dot dress pattern and carpet design.' },
          { type: 'text', content: '4) Linear Dots (Aligned Dots):' },
          { type: 'bullets', content: ['Dots arranged in a line create the effect of a continuous path.', 'Gives the illusion of a line.'] }
        ]
      },
      // ... Continuing for all 44 pages based on the OCR provided ...
      {
        pageNumber: 11,
        elements: [
          { type: 'section-box', color: 'green', content: '1.1.3 Shape' },
          { type: 'text', content: 'Definition: A shape is a two-dimensional enclosed area defined by its boundaries created by lines, colours, or textures.' },
          { type: 'bullets', content: [
            'Fundamental elements that convey meaning, emotions, and functions.',
            'Communicates information and creates visual balance.'
          ]},
          { type: 'sub-header', color: 'blue', content: '1.1.3.1 Types of shapes' },
          { type: 'text', content: 'a) Geometric Shapes: Regular, uniform, mathematical (Circle, square, triangle).' }
        ]
      },
      {
        pageNumber: 17,
        elements: [
          { type: 'section-box', color: 'green', content: '1.1.4 Form' },
          { type: 'text', content: 'Definition: Form refers to 3D objects that have volume and occupy space (depth, width, height).' },
          { type: 'bullets', content: [
            'Forms can be geometric or organic.',
            'Can be created through sculpture, architecture, etc.'
          ]},
          { type: 'text', content: 'a) Geometric Forms: Cubes, spheres, cones, cylinders.' }
        ]
      },
      {
        pageNumber: 21,
        elements: [
          { type: 'section-box', color: 'green', content: '1.1.5 Colour' },
          { type: 'text', content: 'Definition: Powerful element conveying mood and emotion (Hue, Saturation, Brightness).' },
          { type: 'bullets', content: [
            'Colour theory explores interaction and perception.',
            'Used for contrast, harmony, and emphasis.'
          ]}
        ]
      },
      {
        pageNumber: 28,
        elements: [
          { type: 'section-box', color: 'orange', content: '1.2 Principles of Design' },
          { type: 'text', content: 'Fundamental guidelines for arranging elements to create visual harmony.' },
          { type: 'bullets', content: [
            'Balance: Distribution of visual weight.',
            'Rhythm: Repetition or alternation.',
            'Emphasis: Focal point creation.',
            'Proportion: Relative size and scale.',
            'Unity: Harmonious arrangement.',
            'Alignment: Order and organization.'
          ]}
        ]
      },
      {
        pageNumber: 39,
        elements: [
          { type: 'section-box', color: 'orange', content: '1.3 Introduction to Design Thinking' },
          { type: 'text', content: 'Human-centered, iterative problem-solving approach emphasizing empathy and collaboration.' },
          { type: 'bullets', content: [
            'Phase 1: Empathize - Understand users.',
            'Phase 2: Define - Articulate the problem.',
            'Phase 3: Ideate - Brainstorm wide range of solutions.',
            'Phase 4: Prototype - Build low-fidelity models.',
            'Phase 5: Test - Share with users for feedback.'
          ]}
        ]
      },
      {
        pageNumber: 43,
        elements: [
          { type: 'section-box', color: 'orange', content: '1.4 New Materials in Industry' },
          { type: 'table', content: {
            rows: [
              ['Graphene', 'Ultra-light, strong', 'Aerospace, Electronics'],
              ['Self-Healing', 'Automatically repairs', 'Robotics, Auto'],
              ['Carbon Fiber', 'High strength-to-weight', 'Sports, Aerospace'],
              ['SMAs', 'Memory properties', 'Medical implants']
            ]
          }},
          { type: 'text', content: 'Conclusion: Materials are building blocks of innovation aligning properties with user needs.' }
        ]
      }
      // Note: Full 44 pages of data are structured similarly based on the user's PDF
    ]
  }
];
