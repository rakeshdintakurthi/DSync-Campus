
import { TheoryUnit } from './deTheoryContent';

export const DLCO_THEORY_CONTENT: TheoryUnit[] = [
  {
    id: 'dlco-unit1-intro',
    title: 'Unit-I: Introduction & Number Systems',
    sections: [
      {
        heading: 'Basics of Digital Logic',
        type: 'text',
        content: 'Digital logic is the foundation of all modern electronic devices, especially computers. It focuses on the manipulation of binary values using logic gates and circuits. It uses principles of Boolean Algebra for manipulating electrical signals to process and store information in binary format.'
      },
      {
        heading: 'Computer Organization',
        type: 'text',
        content: 'Computer organization refers to the internal structure and operational units of a computer system, focusing on how hardware components interact and function.'
      },
      {
        heading: 'Types of Number Systems',
        type: 'bullets',
        content: [
          'Binary Number System (Base 2)',
          'Octal Number System (Base 8)',
          'Decimal Number System (Base 10)',
          'Hexadecimal Number System (Base 16)'
        ]
      },
      {
        heading: 'Conversions Table',
        type: 'table',
        content: 'Common conversion techniques found in the notes:',
        tableData: {
          headers: ['From', 'To', 'Method'],
          rows: [
            ['Decimal', 'Binary/Oct/Hex', 'Successive division by base'],
            ['Binary/Oct/Hex', 'Decimal', 'Sum of (digit * base^position)'],
            ['Binary', 'Octal', 'Group 3 bits from right'],
            ['Binary', 'Hexadecimal', 'Group 4 bits from right'],
            ['Octal', 'Hexadecimal', 'Octal -> Binary -> Hexadecimal']
          ]
        }
      }
    ]
  },
  {
    id: 'dlco-unit1-complements',
    title: 'Unit-I: Complements & Signed Numbers',
    sections: [
      {
        heading: 'Complements',
        type: 'bullets',
        content: [
          "Diminished Radix Complement (r-1)'s: (r^n - 1) - N",
          "Radix Complement (r)'s: (r^n - N)",
          "Examples: 9's & 10's (Decimal), 1's & 2's (Binary), 7's & 8's (Octal), 15's & 16's (Hex)."
        ]
      },
      {
        heading: 'Signed Binary Representation',
        type: 'bullets',
        content: [
          'Sign-Magnitude: Leftmost bit is 0 for +ve, 1 for -ve.',
          "1's Complement: Flip all bits of the positive number.",
          "2's Complement: 1's complement + 1 (Most common in computers)."
        ]
      },
      {
        heading: 'Binary Codes',
        type: 'bullets',
        content: [
          'Weighted Codes: 8421 (BCD), 2421, 5211.',
          'Non-Weighted Codes: Excess-3 (BCD + 0011), Gray Code (Unit distance code).',
          'Alpha Numeric Codes: ASCII, EBCDIC.',
          'Error Codes: Parity Check (Even/Odd), Hamming Code (Detects & Corrects errors).'
        ]
      }
    ]
  },
  {
    id: 'dlco-unit2-representation',
    title: 'Unit-II: Data Representation',
    sections: [
      {
        heading: 'Fixed Point Representation',
        type: 'text',
        content: 'Uses a fixed number of bits for integer and fractional parts. Can be unsigned or signed (Sign | Integer | Fraction).'
      },
      {
        heading: 'Floating Point Representation (IEEE 754)',
        type: 'bullets',
        content: [
          'Single Precision (32-bit): 1 bit Sign, 8 bits Biased Exponent (Bias=127), 23 bits Mantissa.',
          'Double Precision (64-bit): 1 bit Sign, 11 bits Biased Exponent (Bias=1023), 52 bits Mantissa.',
          'Normalization: Ensures only one non-zero digit before the binary point (Implicit vs Explicit).'
        ]
      }
    ]
  },
  {
    id: 'dlco-unit3-logic',
    title: 'Unit-III: Logic Gates & Minimization',
    sections: [
      {
        heading: 'Logic Gates',
        type: 'bullets',
        content: [
          'Basic Gates: AND (Multiplication), OR (Addition), NOT (Inversion).',
          'Universal Gates: NAND, NOR (Can implement any basic gate).',
          'Derived Gates: XOR (Inequality detector), XNOR (Equality/Equivalence detector).'
        ]
      },
      {
        heading: 'Boolean Algebra Laws',
        type: 'bullets',
        content: [
          'Identity: A·1 = A, A+0 = A',
          'Null: A·0 = 0, A+1 = 1',
          "Complement: A·A' = 0, A+A' = 1",
          "De-Morgan's: (A·B)' = A'+B', (A+B)' = A'·B'",
          'Consensus Theorem: AB + A\'C + BC = AB + A\'C'
        ]
      },
      {
        heading: 'Karnaugh Maps (K-Map)',
        type: 'text',
        content: 'A graphical method to simplify Boolean expressions. Cells are ordered in Gray code. Groups of 2^n adjacent cells (pairs, quads, octets) are formed to eliminate variables.'
      }
    ]
  },
  {
    id: 'dlco-unit4-circuits',
    title: 'Unit-IV: Combinational Circuits',
    sections: [
      {
        heading: 'Decoders',
        type: 'text',
        content: 'A circuit that converts n input lines to 2^n output lines. Only one output is active at a time based on the binary input combination.'
      },
      {
        heading: 'Multiplexers (MUX)',
        type: 'text',
        content: 'Data selectors that funnel multiple inputs (2^n) into a single output based on n selection lines. Used for data transmission over long distances.'
      }
    ]
  }
];
