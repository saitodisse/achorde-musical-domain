import type { ParseDiagnostic } from "./diagnostics.js";
import type { ParsedChordSymbol } from "./chord-symbol.js";

export type ChordChartSectionKind =
  | "intro"
  | "verse"
  | "pre-chorus"
  | "chorus"
  | "bridge"
  | "solo"
  | "instrumental"
  | "outro"
  | "spoken"
  | "unknown";

export type ChordChartLineKind =
  | "lyrics"
  | "chords"
  | "mixed"
  | "tablature"
  | "comment"
  | "blank"
  | "unknown";

export type ChordChartSegment = {
  id: string;
  order: number;
  text: string;
  chord?: string;
  sourceRange: {
    startColumn: number;
    endColumn: number;
  };
};

export type ChordChartLine = {
  id: string;
  order: number;
  raw: string;
  kind: ChordChartLineKind;
  segments: ChordChartSegment[];
};

export type ChordChartSection = {
  id: string;
  order: number;
  kind: ChordChartSectionKind;
  label: string;
  originalLabel: string;
  lines: ChordChartLine[];
};

export type ChordChartAst = {
  sections: ChordChartSection[];
};

export type ParsedChordChart = ChordChartAst & {
  diagnostics: ParseDiagnostic[];
};

export type { ParsedChordSymbol };
