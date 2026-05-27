# Changelog

## 0.2.0 - 2026-05-27

- Added `chordsFound` to the parsed-tab contract so downstream parsers and viewers can access the discovered chord symbols directly.
- Kept the contract runtime-light while expanding the shared AST with a stable, de-duplicated chord index.

## 0.1.0 - 2026-05-24

- Initial release of `achorde-musical-domain`.
- Exported public musical contracts for textual ASTs, diagnostics, fretted voicings, and music-theory adapters.
- Prepared the package for open source consumption by parser, renderer, editor, and application packages.
