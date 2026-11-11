# MIRA Quest — Opportunity v2 changes

Based on player review, November 11, 2026:

- Removed fade-to-black on each screen render, including consecutive intro panels, conversation steps and environmental-scan statistics.
- The five prologue text groups advance **only** when the player presses NEXT; the final one shows CONTINUE.
- New name-entry scene immediately before the mysterious signal: physical keyboard or on-screen A-Z keyboard with Backspace, Space, Enter/Confirm, or Explorer default. Name persists in local browser storage and appears in player dialogue labels and the farewell.
- Title page has an explicit **Enable Title Music** action. Browsers cannot reliably autoplay audible sound before a user gesture; pressing Begin Journey also enables audio. Audio tracks are reused, with playback resumed when the player interacts and when the tab becomes visible again.
- Intro-to-travel card button no longer wraps an arrow.
- Centered arrival completion / Start Exploring and Establish Contact.
- Mission duration analysis returns to Opportunity/player conversation before the route map; the bridge explains the 45.16 km journey through alternating dialogue.
- The science image-inspection dialogue distinguishes the player's lines and Opportunity's lines with speaker avatars and player name.
- The Mission Analysis route-map button now displays the **local bundled NASA route image** as a fullscreen modal instead of opening the NASA website. NASA source credits remain available in the source modal.
- The Opportunity chapter ending includes a brief personalized farewell before returning to the three signals.

## Known limitations

- The bundled final panorama is a low-resolution preview. Horizontal interactive panning uses a cinematic rover composite rather than a fully authentic spherical 360° photo environment. Substitute the original panorama once acquired.
- AI-generated rover exteriors are reconstructions, not documentary photographs. Disclosure/watermark included.
- Sound can be blocked by browser autoplay restrictions until the player clicks/taps. On the opening page, use Enable Title Music or Begin Journey.
- Source-file audio licensing should be confirmed before public contest submission.
- The Eagle and Ingenuity chapters are not built in this release.

## Vercel

Static HTML project: `index.html`, `styles.css`, `src/game.js`, `assets/`, `vercel.json` are at archive root. Deploy with Framework **Other**, no Vite/build command, output directory `.`.
