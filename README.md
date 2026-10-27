# Investor Brain: pitch deck diagnosis

Free lead magnet for Riley Ikni. A founder opens the landing page, clicks "Open in Claude" (the prompt is pre-filled),
attaches their deck PDF, and Claude runs Riley's diagnosis from `skill.md`: a score out of 100 across 10 sections,
no fix. It ends with a link to `report.html`, which shows the scores and sends them to the $99/month Skool tier.

## Files
- `index.html`: landing page (Hylee teardown video, two paths: free diagnosis in Claude or $99 Skool now; steps + copy-the-prompt fallback).
- `skill.md`: the instructions Claude fetches. The 10-section scoring grid lives here.
- `investor-brain/SKILL.md`: same file, as a Claude Code / Claude skill folder.
- `report.html`: reads `?s=TOTAL&p=10 scores&w=weakest` and shows the report, the teardown video and the Skool button.
- `config.js`: every link in one place (site address, Skool, video ids, Substack) and the founding seats count (`seatsLeft`, update by hand).
- `style.css` + `theme.css`: base layout, then the approved look (ivory, dark-brown ink, burnt-sienna accent, Fraunces headlines). Light only: no dark mode (Riley, Oct 27). After changing a CSS or JS file, bump the `?v=` number in both pages so visitors get the new version.
- `bella.mp4` / `bella.jpg` / `bella.vtt`: Bella's 9-second testimonial clip, poster and captions.
- `ballmer.jpg`, `xprize.jpg`, `musk.jpg`: proof photos (`musk.jpg` is a press photo Riley chose to use).

## Before publishing
1. In `config.js`, set `base`, `skool`, and `teardownId` once the Hylee video is live.
2. In `skill.md` and `investor-brain/SKILL.md`, replace `BASE_URL` with the same address as `base`.
3. Publish with GitHub Pages (repository Settings → Pages → deploy from the main branch, root folder).

Try a report: `report.html?s=42&p=6,3,5,4,2,6,7,1,4,4&w=proof`
