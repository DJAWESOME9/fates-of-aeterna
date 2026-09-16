# Start Here

Use this page as the shortest reliable orientation for a new chat or contributor.

## Choose the right surface

| If the request concerns… | Start in… |
| --- | --- |
| Campaign progression, unlocks, rewards, player roster, crafting, Attribute Rings, or persistent saves | [../play/index.html](../play/index.html) |
| Squad experiments, free-form combat, presets, balance, or combat-rule prototyping | [../prototype/index.html](../prototype/index.html) |
| The default root route | [../index.html](../index.html), which redirects to the Test Interface |

The two gameplay files are deliberately separate. Before porting a combat change, verify whether the user wants it in Player Mode, the Test Interface, or both.

## Fast mental model

Both modes are self-contained browser applications: CSS, HTML, data, state, rendering, and combat behavior live in a single HTML file. There is no build step or dependency install.

Player Mode layers persistent progression over authored tactical battles. Its campaign uses fixed encounters and rewards; its save includes roster ownership, levels, resources, crafting, Attribute Rings, and campaign completion. The Test Interface is a non-progression sandbox for combat development.

## Before editing

1. Read [PROJECT_MAP.md](PROJECT_MAP.md) for the relevant data and behavior anchors.
2. Read [../AGENTS.md](../AGENTS.md) for repository-specific rules.
3. Search the target file for the character, status, campaign stage, or renderer you intend to change. IDs are shared across several records.
4. Test in a browser after the edit. For Player Mode persistence changes, test a fresh save and an existing save.

## Common traps

- `index.html` is a redirect, not a shared application shell.
- A character’s ID can participate in definitions, presets, campaign squads, CSS portrait classes, persistence, and effect dispatch.
- Player Mode’s Reset Progress is destructive to browser save data. Do not change its scope casually.
- Do not add a toolchain unless the task explicitly calls for one; direct-file browser use is an intentional project property.

