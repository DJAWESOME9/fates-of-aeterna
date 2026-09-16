# Fates of Aeterna

Fates of Aeterna is a browser-playable, turn-based tactical combat game inspired by Greek and Roman mythology. It has two intentionally separate experiences:

- **Player Mode** is the progression game: authored campaign encounters, character collection, leveling, Attribute Rings, crafting, and browser-saved progress.
- **Test Interface** is the free-form combat sandbox for balancing squads, presets, abilities, and rules.

The project uses no package manager, build step, server, or external asset pipeline. Each experience is a self-contained HTML file with its CSS and JavaScript embedded alongside its UI.

## Start here

Open either file directly in a current browser:

- [Player Mode](play/index.html)
- [Test Interface](prototype/index.html)

The root [index.html](index.html) redirects to the Test Interface for the published site’s legacy entry point. The hosted routes are [Player Mode](https://djawesome9.github.io/fates-of-aeterna/play/) and [Test Interface](https://djawesome9.github.io/fates-of-aeterna/prototype/).

For a concise orientation guide, read [docs/START_HERE.md](docs/START_HERE.md). For source ownership and reliable edit locations, use [docs/PROJECT_MAP.md](docs/PROJECT_MAP.md).

## What is implemented

### Player Mode

- Three authored campaign chapters: **The Broken Thread**, **The Contest of Heroes**, and **The Weight of Souls**
- Branching encounter maps, fixed enemy squads, replay rewards, first-clear rewards, and recruit unlocks
- Persistent roster ownership, XP, levels through 100, stars, resources, campaign completion, crafting jobs, and Attribute Ring ranks
- An eight-attribute, three-rank Attribute Ring whose bonuses affect combat immediately
- A single-slot Bronze Workshop with real-time crafting that continues while the game is closed
- Campaign mechanics including Thread, Soul, underworld thresholds, locked debuffs, anti-revive pressure, and turn-meter theft

### Test Interface

- One-to-five character squads, preset teams, faction filters, and a one-Deity squad rule
- Mythic rosters and faction engines for Romans, Argonauts, Artemis Hunters, Underworld teams, monsters, and more
- Deterministic turn-meter combat, contextual targeting, AI priorities, combat logs, status tooltips, speed controls, and responsive layouts

## Save data and reset behavior

Player Mode stores progress in browser `localStorage` under `fates-of-aeterna-player-v1`. It defensively migrates supported earlier save versions. **Reset Progress** in Player Mode clears campaign completion, roster progression, materials, crafted inventory, Attribute Rings, and any active craft; it does not alter source files.

The Test Interface is a separate sandbox and does not share that Player Mode progression.

## Working on the project

There is no installation command. Edit the relevant HTML file and reload it in a browser. Validate the exact mode you changed on both a desktop-size viewport and a narrow/mobile viewport. When changing Player Mode progression, test a fresh browser profile or clear the `fates-of-aeterna-player-v1` storage entry as well as an existing save, because save migration is part of the feature surface.

The main source locations are summarized in [docs/PROJECT_MAP.md](docs/PROJECT_MAP.md). Agent-specific working rules live in [AGENTS.md](AGENTS.md).

## Project layout

```text
index.html             Legacy root redirect to the Test Interface
play/index.html        Player Mode: campaign, collection, rings, crafting, combat
prototype/index.html   Test Interface: standalone combat sandbox
docs/                  Short orientation and source-map references
```
