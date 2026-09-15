# Fates of Aeterna

A playable tactical combat game inspired by Greek and Roman mythology, with a separate test interface for combat development.

## Player Mode

[Open the live game](https://djawesome9.github.io/fates-of-aeterna/play/)

Follow the Thread of Fate through a 12-encounter branching Chapter I, The Broken Thread. Choose between the Serpent Path and Winged Path, then converge on a longer monster road toward the Thread-Eater and the Heart of the Wild. Every Chapter I encounter remains a monster-only battle: Arachne, Medusa, Hydra, Minotaur, Harpy, Aegean Scorpion, or Basilisk.

Master Chapter I’s `thread-eater` to open Chapter II, The Contest of Heroes: an 11-encounter, hero-heavy campaign with Spear and Shield branches that reconverge around a Hydra interlude. Rival Athena, Achilles, Cassandra, Aeneas, Hector, and Odysseus can be defeated using the existing combat engine; first clears recruit Achilles, Cassandra, Aeneas, and Hector at 1★, while Odysseus remains enemy-only. Chapter II adds Iron Fragments and Laurel Leaves to the persistent ledger.

Master Chapter II’s final contest to open Chapter III, The Weight of Souls: a nine-encounter, mechanics-first Underworld campaign. Its Styx and Judgment paths separately teach Soul redistribution, threshold judgments, locked debuffs, anti-revive pressure, and turn-meter theft before reconverging against the complete Hades-led engine. The opening clear recruits Circe as a cleanser; later first clears recruit Charon, Minos, Cerberus, and Menoetes at 1★. Hades remains enemy-only and reserved for a future Journey. Victories award Stygian Obols and Moon Laurel.

Each battle uses a fixed, authored enemy squad and level. Victories award persistent gold, Woven Linen, Bronze Fragments, Monster Fangs, Iron Fragments, and Laurel Leaves; first-clear rewards and character unlocks are granted once, while every participant earns XP through victory or defeat.

Characters begin at level 1 and improve their Health, Attack, Defense, and Speed as they advance toward level 100. Every owned character also has a persistent eight-section Attribute Ring for Health, Attack, Defense, Speed, Critical Chance, Critical Damage, Potency, and Tenacity. Each section has three independent ranks with character-specific gains. Ranks 1 and 2 cost gold plus raw materials; Rank 3 also consumes exactly one deterministic, character-appropriate crafted component. Ring bonuses appear in the collection and apply directly in combat. Ascension is not yet implemented.

## Crafting

The Bronze Workshop has one persistent crafting slot. Starting a recipe immediately consumes its listed gold and raw materials. Its real-time countdown continues while navigating elsewhere or after closing the game. A completed component must be claimed before another craft can begin.

| Component | Recipe | Time |
| --- | --- | ---: |
| Bronze Ingot | 12 Bronze Fragments + 200 gold | 5 minutes |
| Iron Ingot | 12 Iron Fragments + 300 gold | 8 minutes |
| Woven Cord | 15 Woven Linen + 200 gold | 5 minutes |
| Laurel Essence | 15 Laurel Leaves + 350 gold | 10 minutes |
| Beastbone Plate | 12 Monster Fangs + 6 Iron Fragments + 400 gold | 15 minutes |

Crafted inventory and the active job are stored in the same defensive browser save as campaign and Attribute Ring progress. Reset Progress clears both.

Completed encounters remain replayable for resource farming, and mastering the Heart of the Maze unlocks Ariadne at one star.

## Test Interface

[Open the combat test interface](https://djawesome9.github.io/fates-of-aeterna/prototype/)

The Test Interface remains the free-form sandbox, with direct access to both squad compositions, presets, challenge levels, and combat controls for balance and rules testing.

The prototype runs directly in a modern browser with no build step or package installation.

## Local use

Open `play/index.html` for Player Mode or `prototype/index.html` for the Test Interface.

## Highlights

- 40 playable Greek and Roman mythic characters
- Eleven curated team presets, including Talos Alone, Hades’ Court, and Artemis’ Hunt
- Deterministic turn-meter combat and AI
- Responsive desktop and mobile layouts
- Local painted character artwork
- Persistent browser-based character XP and level progression
- A 12-stage branching monster Chapter I, an 11-stage hero-heavy Chapter II, and a nine-stage mechanics-first Underworld Chapter III
- Chapter II rival hero encounters, monster interludes, first-clear recruits, and fixed enemy levels
- Monster-focused farming across Woven Linen, Bronze Fragments, and Monster Fangs, plus Chapter II Iron Fragments and Laurel Leaves
- Persistent gold, material, first-clear, and character-unlock rewards
- Level-scaled character combat stats through level 100
- Persistent three-rank Attribute Rings with identity-informed growth, raw-material upgrade recipes, save migration, and combat stat integration
- One-slot, real-time Bronze Workshop crafting with offline progress and five Rank 3 components
