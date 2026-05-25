# achorde-musical-domain

Contratos musicais compartilhados para `ac15`, `tab-renderer` e `svguitar-react`.

Este pacote reúne os tipos públicos que precisam sobreviver fora do produto privado AC15:

- diagnósticos de parser
- símbolo de acorde parseado
- AST textual de cifra
- AST de cifra com segmentos, linhas e seções
- voicings de instrumentos trasteados
- porta para adaptação de teoria musical

## Instalação

```bash
pnpm add achorde-musical-domain
```

## Uso

```ts
import type { FrettedInstrumentVoicing, ParsedTab } from "achorde-musical-domain";

const voicing: FrettedInstrumentVoicing = {
  id: "voicing-c-major",
  instrumentId: "guitar",
  tuningId: "standard",
  chordSymbol: "C",
  strings: [
    { stringIndex: 1, openNote: "E2", fret: null, state: "muted" },
    { stringIndex: 2, openNote: "A2", fret: 3, state: "fretted", finger: 3 },
    { stringIndex: 3, openNote: "D3", fret: 2, state: "fretted", finger: 2 },
    { stringIndex: 4, openNote: "G3", fret: 0, state: "open" },
    { stringIndex: 5, openNote: "B3", fret: 1, state: "fretted", finger: 1 },
    { stringIndex: 6, openNote: "E4", fret: 0, state: "open" },
  ],
  source: "manual",
  quality: "exact",
};

const tab: ParsedTab = {
  body: "[Verse]\nC\nA line of lyrics",
  sections: [],
  diagnostics: [],
  parserVersion: "1.0.0",
  astVersion: "1.0.0",
};
```

## Documentação

- [Arquitetura](docs/architecture.md)
- [Migração](docs/migration.md)
- [Changelog](CHANGELOG.md)

