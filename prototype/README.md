# Fates of Aeterna — Playable Prototype

Open `index.html` directly in any modern browser. No installation or server is required.

## Play path

1. Select five roster characters or choose one of the ten presets. Use the Greek, Roman, Hero, Monster, Underworld, Artemis Hunter, and Leader filters to navigate the collection.
2. The squad builder enforces a maximum of one Deity.
3. Enter the arena, choose an ability, then select a highlighted valid target.
4. Fill turn meters according to Speed, build/exploit team mechanics, and defeat the opposing squad.
5. Use Fight Again or Return to the Sanctum after victory or defeat.

## Implemented mechanics

- Thirty-eight playable Greek/Roman characters with local portrait art
- One-Deity squad rule and Legendary Journey metadata
- Ten team presets and contextual team-mechanic summaries, including Hades’ Court, Artemis’ Hunt, Argonaut Coordinated Assault, Trojan Defense, Monstrous Host, and Rome's Founding
- Artemis, Hippolytus, Callisto, Actaeon, and Meleager with dedicated portraits and a complete Quarry-focused faction engine
- Jason, Castor, and Pollux with dedicated portraits and complete Argonaut kits
- Random Argonaut assists after Basics and Specials, non-recursive assist guards, Commanded bonus assists, and the Golden Fleece team rally
- Shared Castor/Pollux cooldowns, Health equalization, twin counters, Momentum, and the surviving twin's immediate bonus turn
- Recurring Speed-based turn meter, cooldowns, targeting, Taunt, damage, healing, team healing, buffs, debuffs, Stun, assists, turn-meter manipulation, and a limited Hero revive
- Arachne's five-stack Thread / Entangled / Cocoon loop, including Stealth denial and reveal at 3+ stacks
- Shared Roman Discipline, up to 10 stacks at +2% Offense and Defense each
- Bounded Hero opportunity assists, Medusa's armed Vengeful Reflection, and Minotaur Rage buildup/spend
- Wave II kits for Hector, Cassandra, Perseus, Circe, Cerberus, Lernaean Hydra, Romulus, and Camilla
- Exposed, Foresight, Weakened, Transform, Sealed, Venom, Speed Up, and locked Hydra Heads, with cleanse and anti-revive handling
- Bounded Cerberus/Hydra multi-hit attacks and Camilla's non-recursive, once-per-turn Roman assist
- Deterministic AI priorities, combat log, turn preview, speed controls, restart, return, victory, and defeat states
- Responsive approach/impact/return animation for player attacks, AI actions, assists, counters, and multi-hit abilities
- Distinct damage, healing, buff, turn-start, revive, and shared Discipline feedback with restrained floating combat text
- Ally/enemy-labeled turn medallions, including a persistent terracotta ring for enemy units
- Keyboard-focusable status chips with custom mechanical tooltips, plus visually distinct Stunned/Petrified and defeated states
- Responsive desktop/mobile UI with persistent tactical statuses, explicit HP/meter labels, keyboard focus handling, and reduced-motion support

The combat data and effect dispatch are kept in structured JavaScript sections so character definitions can later move into JSON.
