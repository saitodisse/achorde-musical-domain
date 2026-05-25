# AGENTS.md - achorde-musical-domain

## Purpose

This repository publishes shared musical contracts for chord charts, textual tab ASTs, parser diagnostics, fretted-instrument voicings, and music-theory adapter ports. It does not contain React, storage, routing, sync, SVG rendering, or product-specific application rules.

## Rules

- Use `pnpm` to install dependencies, run tests, build, and publish.
- Keep the public API small, stable, and free of runtime dependencies.
- Preserve semantic compatibility for downstream parsers, renderers, editors, and applications.
- Update `README.md`, `CHANGELOG.md`, and `docs/` whenever the public contract changes.
- Prefer type-level tests and small contract examples to validate the package.
- Keep all repository documentation, changelog entries, comments, and commit messages in English.

## Structure

- `src/` contains public contracts and version constants.
- `docs/` explains package scope, architecture, and migration guidance.

## Downstream Consumers

The following projects depend on published releases of this package:

| Project | Path                    | Dependency location                                          | Relação    |
| ------- | ----------------------- | ------------------------------------------------------------ | ---------- |
| ac15    | `/home/saito/_git/ac15` | `packages/contracts/package.json` → `achorde-musical-domain` | direta     |
| ac15    | `/home/saito/_git/ac15` | `packages/ui` → `@ac15/contracts` → `achorde-musical-domain` | transitiva |

Types flow through `@ac15/contracts` (which re-exports this package) into `packages/ui`, `packages/domain`, `packages/chord-engine`, and `apps/web`.

After publishing a new version:

1. Go to each downstream project listed above.
2. Update the dependency version in the listed `package.json`.
3. Run `pnpm install` to regenerate the lockfile.
4. Run tests and build to confirm compatibility.
5. Commit and push the downstream update.
