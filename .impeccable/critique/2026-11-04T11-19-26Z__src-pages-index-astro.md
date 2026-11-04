---
target: homepage
total_score: 22
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
target_identity: "file:C:\\Projects\\tarralanzilli\\v1\\src\\pages\\index.astro"
target_fingerprint: "sha256:28d1b5269623b1cca672b3b4a705d1b3e9efb51142cd3fc33913e85c558897e1"
target_path: "C:\\Projects\\tarralanzilli\\v1\\src\\pages\\index.astro"
timestamp: 2026-11-04T11-19-26Z
slug: src-pages-index-astro
---
Method: dual-agent (A: design review · B: detector + browser)

## Heuristics (22/36, n/a: 7)
1 Status 3 · 2 Real world 3 · 3 Control 3 · 4 Consistency 2 · 5 Error prevention 2 · 6 Recognition 3 · 7 n/a · 8 Minimalism 3 · 9 Recovery 2 · 10 Help 1

## Design specificity
Copy is authored (Je bent niet kapot, root/mycelium metaphors, leaf edges, organic windows); structure is the generic wellness template (dark hero, text+image, 2x2 cards, 2x2 icons, carousel, CTA). Brief world (forest, botanical plates) largely gone; crystal hero photo off-concept; root line too faint.
Detector: CLI 0 findings. Browser: dark-glow on .knop-zon on dark bg (global.css:134, hover :138), 2 at 1440, 1 at 375. Half false positive; hover and WhatsApp.astro:33 glows are closer to the rule. No overflow, no console errors, contrast >= 7.2:1.

## Priority issues
1. [P1] No safety / how-it-works layer (screening, steps, aftercare, not-suitable line). Fix: "Zo begeleid ik je" 4-step section between intro and aanbod. /impeccable shape
2. [P1] CTA labels/colour conflict: 5 labels for 2 destinations; gold = intake in header, browse in hero. Fix: one intake label, drop intro duplicate button (index.astro:42), kennismaking as equal choice in end CTA. /impeccable clarify
3. [P1] No person behind "ik": Tarra's name absent, "Meer over mij". Fix: sign-off "— Tarra" in intro; portrait in Waarom later. /impeccable clarify
4. [P2] Empty testimonial carousel before CTA. Fix: hide when no real entries; static for 1-2. /impeccable harden
5. [P2] Hero photo/palette drift; weak root line. Fix: roots/forest/hands photo; one botanical plate; stronger line. /impeccable bolder

## Persona red flags
Jordan: hero doesn't say what is offered; no duration/place/price on ayahuasca. Riley: no legality/location, prices, age limit; bracketed contacts; footer "helen van oude patronen" near healing claim. Casey: no header CTA at 375; WhatsApp covers card text; 7.7k px page. Marieke (46, first ceremony): ayahuasca before reassurance; no "what if it gets too much"; final ask is medical intake; "Stel eerst een vraag" looks secondary.

## Minor
Reveal 1.7s+blur too long; 4x "Lees meer" repetitive; unused site.json slogan "Traumagerichte coaching" conflicts with no-therapy rule; Waarom photo before heading on mobile; carousel edge mask cuts short content.

## Questions
Why a crystal still life instead of her? Is kennismaking the real first step? What does the page offer someone for whom ayahuasca is too big (ademwerk as entry)?
