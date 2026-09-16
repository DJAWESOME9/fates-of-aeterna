# Repository Guidelines

## Project Structure & Module Organization

This repository is a static browser game with no build tooling. `play/index.html` is Player Mode: it combines the campaign UI, roster collection, Attribute Ring, Bronze Workshop, persistence, combat definitions, and the combat engine in one file. `prototype/index.html` is an independent combat sandbox with its own roster and rules implementation; changes do not automatically propagate between the two modes. The root `index.html` is only a redirect to `prototype/`.

Within either gameplay file, CSS is in the document head, markup appears before the script, and the JavaScript is organized around character records, campaign/preset data, state and persistence, rendering, then combat/effect dispatch. Preserve that broad ordering when adding a mechanic so data remains easy to find. `docs/PROJECT_MAP.md` identifies the main anchors.

## Build, Test, and Development Commands

There is no package installation, build command, or automated test suite. Open `play/index.html` or `prototype/index.html` directly in a current browser and test the mode that changed. The public routes are `/play/` and `/prototype/`.

For Player Mode, check both a fresh save and an existing save after changing persistence, campaign rewards, crafting, roster ownership, or Attribute Rings. Save state is browser `localStorage` under `fates-of-aeterna-player-v1`; use the in-game Reset Progress control only when testing disposable browser data.

## Coding Style & Naming Conventions

The game files use plain JavaScript with compact data literals, `const` for static records, camelCase for functions and state, and lowercase identifier-style character IDs. Keep additions compatible with direct browser execution: do not introduce imports, package dependencies, or a transpilation requirement. Character records, preset IDs, campaign enemy references, persistence records, and CSS portrait classes must stay aligned by ID.

## Commit & Pull Request Guidelines

Recent commits use concise, imperative, sentence-style subjects such as `Add campaign enemy portraits` and `Fix Aquilifer ability descriptions`. Keep commits similarly scoped to one visible behavior or content change. In a pull request, state which mode was tested and call out any save-data migration, balance, campaign reward, or responsive-layout impact.

