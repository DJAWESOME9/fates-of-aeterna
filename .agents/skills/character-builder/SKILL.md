---
name: character-builder
description: Use this skill whenever the user wants to design, build, revise, or balance one or more characters or a team for the Mythology Game, including abilities, starting stats, role, synergy, or roster concepts. Collaborate on the design first and do not edit game files until the user explicitly authorizes implementation after reviewing the complete proposed kit/team.
---

# Mythology Game Character Builder

Help the user design individual characters and cohesive teams for the Mythology Game. This skill covers discussion and design through a reviewable proposal. Treat implementation as a separate phase that requires the user's explicit go-ahead.

## Collaboration rules

- Work through the design with the user before editing any project file. Discuss the kit in the prescribed order and revise from their feedback.
- Do not interpret character design requests, agreement with an ability, or a request to continue brainstorming as permission to implement. Implement only after the user explicitly says to build, implement, add, or otherwise gives clear authorization after reviewing the proposal.
- If the user says to work it through first, stay in the design phase. The stopping point is a complete, clearly presented design the user can review.
- Do not invent an Ultimate. Include one only when the user asks for an Ultimate or explicitly approves adding one. If an Ultimate is not requested, say the kit has no Ultimate for now.
- Use the established game format: one Basic ability, then one to three Special abilities. Add more only if the user asks.
- Preserve user-approved decisions across revisions. When a suggestion changes an earlier decision, state the change clearly and update the full proposal.
- Ask only for information that materially affects the design. When details are unspecified, propose sensible defaults and label them as proposals rather than facts.

## Workflow

### 1. Establish the design scope

Identify whether the user is building one character, multiple individual characters, a team, or both. Establish the requested mythology/source, intended role or play pattern, and any known constraints. Use the current game files and project documentation as source of truth for combat rules, status effects, roster limits, data conventions, and stat scales when needed. Do not assume the two game modes share the same implementation.

For a team, establish its intended identity and how its members should work together. Develop each member with the same character workflow below, while tracking team synergies and avoiding redundant roles.

### 2. Set identity, role, and starting stats

Present a compact concept card before finalizing the moves:

- Character name and title
- Faction, tags, or mythology, when relevant
- Intended combat role and play pattern
- Proposed starting stats: **Health, Attack, Defense, and Speed**

Give concrete numeric starting stats, not just labels such as "high Attack." If the project has a tier, rarity, level, or gear convention, state the assumptions behind the starting numbers and compare against relevant existing characters. Keep stats appropriate to the project's established scale. If no reliable baseline exists, mark the numbers as initial balance targets.

For a team, also state team size/formation assumptions and summarize the team's overall strengths, weaknesses, and stat distribution. Do not silently change the game's roster or battle-size rules.

### 3. Design the Basic first

Work on the Basic ability first. Propose its:

- Name
- Target
- Damage or other immediate effect
- Debuffs, buffs, resource gains, or conditional riders
- Cooldown (normally none for a Basic, unless project conventions require otherwise)
- A clear, player-facing description

Explain how the Basic reinforces the character's role. Let the user revise or settle it before moving on. Do not present the whole kit as settled before the user has had a chance to work through the Basic.

### 4. Design one to three Specials

After the Basic is agreed, work through the requested number of Specials in order, one at a time. The default is two Specials unless the user chooses one or three. For each Special, define:

- Name and intended use
- Targeting rules
- Exact effects and durations
- Damage multiplier, healing, or stat changes where applicable
- Resistance, immunity, dispel/cleanse, and boss rules when relevant
- Cooldown
- Concise in-game description

Check that each ability has a distinct job, fits the character's intended role, and interacts clearly with existing status and turn rules. Do not add an Ultimate as an unrequested fourth/fifth move. If an Ultimate is explicitly requested, design it after the Basic and Specials, and follow the project's Ultimate charge mechanic rather than assigning a normal cooldown when that mechanic applies.

### 5. Design and check the team (if applicable)

For teams, make the relationship among characters explicit:

- Define each character's role and contribution.
- State how abilities enable, protect, or set up teammates.
- Identify overlap, gaps, counters, or risks of one move making another irrelevant.
- Ensure the team fits current team-size and faction restrictions documented by the game.
- Give starting stats for every new character and summarize the team's balance profile.

Do not create passive or team-wide bonuses without naming their trigger, magnitude, duration, and scope.

### 6. Present the complete review proposal

Once the user has worked through and approved the individual parts, show the complete character or team in a consistent layout:

1. Identity, role, and starting stats
2. Basic
3. Special 1 (and its cooldown)
4. Special 2 and/or Special 3, as selected
5. Ultimate only if the user explicitly asked for or approved one; otherwise state "No Ultimate included."
6. Passive or team synergy, if designed
7. Short balance notes: key strengths, limitations, and any remaining open decision

Mark unresolved ideas as open questions or optional suggestions. Do not imply they are settled.

### 7. Wait for implementation authorization

After presenting the complete proposal, make the review point clear. Do not modify source files, roster data, docs, or assets until the user explicitly authorizes implementation. If they request changes, revise the proposal and repeat the review layout. Once they authorize implementation, inspect project guidance and the relevant mode's architecture, then implement only the approved design in the mode they specify or that the project context clearly establishes.

## Writing style

Use straightforward game language. Explain uncommon combat terms briefly. Prefer exact numbers and durations over vague words like "strong," "briefly," or "greatly." Separate a proposed mechanic from a confirmed project rule. Keep descriptions readable enough to use in an in-game ability tooltip.
