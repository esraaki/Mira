# MIRA Quest v4 — urgent regression repair

This build preserves the long-form Opportunity + Eagle narrative and source images from v3. It specifically repairs the early-game cinematic flow that regressed in v3.

## Fixed
- The first **Begin Journey** click triggers the existing `opening.mp3` loop. The old saved sound-off state from broken builds no longer silently mutes a new session. No extra music-toggle button appears in the intro. Browsers cannot reliably play audible music *before* the first click.
- Removed **Skip Intro**. Restored all five deliberate prologue text beats with manual advancement.
- Restored **one central light -> click -> two glowing signals -> click one -> machine profile**; no two-card grid and no Ingenuity.
- Restored moving star travel and original full-frame planetary approach artwork, rather than incorrectly scaling whole background scenes as small isolated planets. Mars and Moon use the same progression and centered arrival CTA.
- Arrival scan now uses an appropriate rover-free NASA panorama on Mars. Rows appear sequentially; the scan audio starts upon arrival. Opportunity does not appear during the scan and is not displayed until the player has panned during exploration.
- Audio has a single active HTMLAudioElement. Each scene transition stops the previous track before starting the new scene's sound. Signal and travel loop; there is no simultaneous signal soundtrack. The supplied sandstorm footage handles its own sound in the storm scene.
- Preserved the v3 extended Opportunity/Eagle conversations, progressive NASA evidence scenes, responsive player dialogue and historical explanations.

## Verification
- Node.js syntax check passed.
- Chromium DOM interaction test: title → five prologue beats → name → transmission → one signal → two signals → Opportunity → travel → scan → look → contact; CTA button measured centered at 1440px viewport.
- Long-form simulated chapter test: both Opportunity (114 actions) and Eagle (89 actions) reach their endings via dialogues and discovery panels; no JavaScript page errors.
- The automated test environment blocks navigation to local URLs, so assets loaded from a real HTTP-served deployment, audible playback, and actual image rendering are not fully validated. Run the browser smoke test on your local/static Vercel deployment before submitting.
