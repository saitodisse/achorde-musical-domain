import type { ParseDiagnostic } from "./diagnostics.js";
import type { ParsedChordSymbol } from "./chord-symbol.js";

export type ParsedTabTokenKind = "ChordToken" | "LyricToken" | "SpaceToken";

export type ParsedTabToken = {
  kind: ParsedTabTokenKind;
  text: string;
  startColumn: number;
  endColumn: number;
  chord?: ParsedChordSymbol;
};

export type ParsedTabLineKind =
  | "lyrics"
  | "chords"
  | "mixed"
  | "tablature"
  | "comment"
  | "blank"
  | "unknown";

export type ParsedTabLine = {
  id: string;
  order: number;
  text: string;
  kind: ParsedTabLineKind;
  tokens: ParsedTabToken[];
};

export type ParsedTabSection = {
  id: string;
  order: number;
  title: string | null;
  originalTitle: string | null;
  lines: ParsedTabLine[];
};

export type ParsedTab = {
  body: string;
  sections: ParsedTabSection[];
  diagnostics: ParseDiagnostic[];
  parserVersion: string;
  astVersion: string;
};
