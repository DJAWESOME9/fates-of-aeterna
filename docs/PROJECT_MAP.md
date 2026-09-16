# Project Map

This is a source-navigation reference, not a second specification. The executable HTML remains the source of truth.

| Area | File | What to search for |
| --- | --- | --- |
| Published root behavior | [../index.html](../index.html) | `http-equiv="refresh"` |
| Player Mode screens and navigation | [../play/index.html](../play/index.html) | `campaign`, `sanctum`, `ring`, `crafting`, `battle` |
| Player character and enemy data | [../play/index.html](../play/index.html) | `const C=` |
| Player campaign stages and rewards | [../play/index.html](../play/index.html) | `const CAMPAIGN=` |
| Player save format and migration | [../play/index.html](../play/index.html) | `SAVE_KEY`, `SAVE_VERSION`, `freshProgress`, `loadProgress` |
| Attribute Ring rules | [../play/index.html](../play/index.html) | `RING_ATTRIBUTES`, `RING_RANK_COSTS`, `ringRequirement` |
| Crafting recipes and lifecycle | [../play/index.html](../play/index.html) | `CRAFT_RECIPES`, `startCraft`, `claimCraft` |
| Player combat engine | [../play/index.html](../play/index.html) | `startBattle`, `resolve`, `damage`, `beginTurn`, `checkDeath` |
| Test Interface roster and presets | [../prototype/index.html](../prototype/index.html) | `const C=`, `const PRE=` |
| Test Interface combat engine | [../prototype/index.html](../prototype/index.html) | `startBattle`, `resolve`, `damage`, `beginTurn`, `checkDeath` |

## Change-routing guide

| Desired change | Likely scope |
| --- | --- |
| New authored encounter, first-clear reward, campaign unlock, or progression gate | Player Mode only |
| Campaign resource, crafting, or Attribute Ring behavior | Player Mode only, including save compatibility |
| New combat mechanic intended for live campaign play | Player Mode; mirror into the Test Interface only if explicitly requested |
| Balance experiment, preset, or free-form battle UX | Test Interface first |
| Shared character or combat-rule parity | Both files; compare the implementations deliberately rather than assuming they match |

## Player Mode data flow

```text
Character / campaign data
          ↓
Browser save (roster, progress, resources, crafting, rings)
          ↓
Campaign / collection / workshop renderers
          ↓
Battle setup and combat engine
          ↓
Rewards, unlocks, XP, and save update
```

Player Mode identifies its save with `fates-of-aeterna-player-v1`. Campaign state is not portable to the Test Interface.

