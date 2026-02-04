
import { TheoryUnit } from './deTheoryContent';

export const DTI_THEORY_CONTENT: TheoryUnit[] = [
  {
    id: 'dti-elements',
    title: 'Unit-I: Elements of Design',
    sections: [
      {
        heading: 'Introduction',
        type: 'text',
        content: 'Elements of Design are the fundamental components or building blocks that artists and designers use to create visual compositions. They work together to communicate ideas and establish visual order.'
      },
      {
        heading: '8 Key Elements',
        type: 'bullets',
        content: [
          'Point (Dot): The most fundamental element; a precise position in space with no dimension.',
          'Line: A continuous mark made on a surface; defines edges and creates movement.',
          'Shape: A 2D enclosed area (Geometric, Organic, or Abstract).',
          'Form: 3D objects with volume and depth (Cubes, Spheres, Cylinders).',
          'Colour: Conveys mood and emotion; defined by hue, saturation, and brightness.',
          'Texture: The surface quality (Rough, Smooth, Soft, Hard).',
          'Value: The lightness or darkness of a colour.',
          'Space: The area around, between, or within elements (Positive vs. Negative space).'
        ]
      }
    ]
  },
  {
    id: 'dti-principles',
    title: 'Unit-I: Principles of Design',
    sections: [
      {
        heading: 'Design Principles',
        type: 'text',
        content: 'Fundamental guidelines that dictate how various elements should be arranged to create harmony and functionality.'
      },
      {
        heading: 'Core Principles',
        type: 'bullets',
        content: [
          'Balance: Distribution of visual weight (Symmetrical, Asymmetrical, Radial, Crystallographic).',
          'Rhythm: Repetition or alternation of elements to create flow (Progressive, Random, Flowing).',
          'Emphasis: Drawing attention to a focal point through contrast, size, or placement.',
          'Contrast: Juxtaposing different elements to highlight differences.',
          'Movement: Guiding the viewer\'s eye through a design path.',
          'Proportion: Relative size and scale (includes the Golden Ratio ~1:1.618).',
          'Unity: Coherence in composition achieved through proximity and repetition.',
          'Alignment: Arranging elements to create order and structured look.'
        ]
      }
    ]
  },
  {
    id: 'dti-process',
    title: 'Unit-I: The Design Thinking Process',
    sections: [
      {
        heading: 'Key Principles',
        type: 'bullets',
        content: [
          'Human-Centered: Starts and ends with understanding user needs.',
          'Iterative: Non-linear process of continuous testing and refining.',
          'Collaborative: Encourages diverse perspectives.',
          'Solution-Oriented: Focused on practical, impactful outcomes.'
        ]
      },
      {
        heading: 'The 5-Stage Process (Stanford d.school)',
        type: 'bullets',
        content: [
          'Empathize: Research user needs and perspectives.',
          'Define: State users\' needs and problems via a problem statement.',
          'Ideate: Challenge assumptions and create ideas (SCAMPER, Mind Mapping).',
          'Prototype: Start to create low-fidelity solutions.',
          'Test: Try your solutions out with users.'
        ]
      }
    ]
  },
  {
    id: 'dti-history',
    title: 'Unit-I: History & Key Figures',
    sections: [
      {
        heading: 'Timeline of Evolution',
        type: 'bullets',
        content: [
          '1950s: John E. Arnold introduces "Design Thinking" in Creative Engineering.',
          '1960s: Formalizing design methodology (Buckminster Fuller, Herbert Simon).',
          '1970s-80s: Focus on "Wicked Problems" (Rittel & Webber) and User-Centered design.',
          '1990s-2000s: IDEO (David Kelley) and Stanford d.school formalize the framework.',
          'Modern Era: Applied across education, healthcare, and software (Agile/Lean Startup integration).'
        ]
      },
      {
        heading: 'Key Figures',
        type: 'text',
        content: 'David Kelley (IDEO), Tim Brown (CEO of IDEO), Donald Norman (Cognitive Scientist), and Herbert Simon (Linked design to complex systems).'
      }
    ]
  },
  {
    id: 'dti-materials',
    title: 'Unit-I: New Materials in Industry',
    sections: [
      {
        heading: 'Advanced Materials Table',
        type: 'table',
        content: 'Materials that drive modern engineering innovation.',
        tableData: {
          headers: ['Material', 'Key Properties', 'Applications'],
          rows: [
            ['Graphene', 'Ultra-light, conductive, strong', 'Electronics, Energy Storage'],
            ['Self-Healing', 'Auto-repair cracks/damage', 'Automotive, Construction'],
            ['Biodegradable Polymers', 'Eco-friendly, decomposes', 'Medical devices, Packaging'],
            ['Carbon Fiber', 'High strength-to-weight ratio', 'Aerospace, Sports equipment'],
            ['SMAs', 'Shape Memory Alloys', 'Robotics, Medical implants'],
            ['Aerogels', 'Superb insulation, ultra-light', 'Space exploration, Construction'],
            ['Metamaterials', 'Unique properties (invisibility)', 'Optics, Defence']
          ]
        }
      }
    ]
  }
];
