# MIRA Quest v7 — Targeted fixes to v6

Only the requested areas were changed.

1. **Travel starts audibly sooner:** trimmed ~1.65 seconds of initial silence from `assets/audio/travel.mp3`, retaining that filename and looping behavior. The track is now initiated on the signal selection click before the travel scene renders.
2. **Opportunity search:** panorama uses `assets/art/opportunity/g34.png` again, with smoother continuous pointer dragging; the rover is approached through the panorama rather than changing images. The camera advances in smaller increments using the Look buttons.
3. **Dialogue height:** the ordinary dialogue panel is a consistent fixed height within responsive limits and scrolls if necessary.
4. **Story order:** Opportunity completes discussion of later clues, the player asks how the mission ended, Opportunity becomes quiet, and a separate final-signal scene presents the 2018 storm. This no longer interrupts the discoveries.
5. **Storm visual:** fixed an opaque overlay that hid the video. Video is centered on black with normal glass-style narration at the bottom, shows after a single fade from black, and does not fade again between lines. Original H.264/AAC video now has `faststart` metadata for more reliable loading.
6. **Spacebar:** moved key handler to `document` and added handling for both dialogue and storm lines, without triggering when an input has focus or skipping required player choices.
7. **Exercise effects:** added `correct.mp3` and `incorrect.mp3` from the supplied audio files. Mars route selection uses the correct sound for the longer safer path and incorrect for the rocky shortcut; Eagle landing exercise uses correct for controlled thrust and incorrect for the other choices.

No other content, art, dialogue choices, mission mechanics, or scenes were intentionally changed.

Testing: both JavaScript files passed `node --check`; video codec / first decoded frame verified with FFmpeg; original sound clips were inspected for length. Browser UI testing is **not verified** because Chromium navigation was blocked by administrator in this runtime.
