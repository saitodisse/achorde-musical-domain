# Migration

## Recommended Order

1. Add `achorde-musical-domain` as a dependency.
2. Replace locally duplicated parser diagnostic and chord-symbol types with imports from this package.
3. Replace fretted-instrument voicing types with `FrettedInstrumentVoicing`.
4. Keep parser, renderer, persistence, routing, and application workflows in the consuming package.
5. Run type checks and package builds before publishing downstream releases.

## Cutover Criteria

- Public packages should not depend on private or machine-local contract packages.
- Downstream packages should compile with this package as their only shared musical contract source.
- Migration should not change runtime parser or renderer behavior unless the downstream package explicitly intends that change.
- Published packages should reference a registry version of `achorde-musical-domain`, not a local `file:` dependency.
