# MIRA QUEST · Focused v5 patch · November 14, 2026

This is an incremental patch to v4, not a reversion to the original code or a design reset.

## Changes requested and implemented

- Start experience PLAY overlay: first user gesture starts the looping `opening.mp3` soundtrack, before `Begin Journey`.
- Prologue Next and dots moved upward. No Skip Intro button.
- Single signal → two signals preserved. Opportunity stays gold; lunar signal is pale white/silver.
- Space travel days made larger and clearer; removed the smaller intermediate Moon image by using one consistent full-frame lunar approach artwork.
- Removed the background fill behind `Arrival Complete`.
- Mars arrival/exploration uses the original v2-style generated Opportunity landscape instead of the low-resolution PIA22909 thumbnail; rover comes into view as panorama is moved. Moon exploration background no longer repeats, and the isolated descent stage is centered after one rightward action.
- Opportunity card stays hidden until the rover identifies itself. Dialogue is more translucent glass and retains the scene background during line updates.
- Opportunity opening and introduction rewritten, leaving the best already-approved lines intact. NASA confirms the rover's final location was Perseverance Valley at Endeavour Crater; Perseverance rover is a different vehicle operating in Jezero Crater.
- 90-sol discussion stays conversational; unnecessary act-heading cards removed from conversation screens.
- Wind ambience persists through Opportunity's science scenes. Brief dialogue cues play as each dialogue line advances; no wind on the Moon.
- Magnifier zooms into the photograph at the pointer location and can be repositioned.
- Five instrument choices now match the exact labels in the supplied image; each response is distinct.
- Rover navigation has two visibly different route overlays, results, and character-led feedback.
- Opportunity route locations revealed one by one with better contextual captions and distinct images; real source limitations are explicitly described, rather than mislabeling a map as a crater photo.
- Opportunity storm sequence now occurs only after the 2018 conversation and a hesitant pause; it fades from black into the supplied storm video, with staged Opportunity narration over the footage. The healthy-rover background does not show behind the storm.
- Opportunity end transitions into a final look-around landscape, then an explicit return-to-signals button.
- Apollo's landing exercise now distinguishes the correct method from the two unsafe options.
- Uploaded Neil Armstrong portrait appears alongside his Apollo dialogue and is collectible in the gallery, with first-crewed-Moon-landing explanation.
- Gallery cards display names, locked/unlocked state, zoom/detail view, source links, and persistent progress.
- Complete archive title is smaller; final `Finish Our Journey` opens a line-by-line thank-you outro followed by Play Again.

## Automated checks

- Node.js syntax checks for both scripts: passed.
- Chromium DOM interaction test: opening, signal reveal, Opportunity start-to-end (117 actions), Eagle start-to-end (86 actions), outro and restart; no JavaScript exceptions.
- Chromium layout spot check: lunar stage and contact button centered, background image does not repeat.
- Chromium audio invocation test confirmed audio `.play()` is triggered by Play and that Martian wind is requested for dialogue/evidence. **Actual acoustic output and full visual image rendering could not be verified in this browser environment**; test sound on the deployed URL.

## Sources / historical framing

Scientific explanations and dates are based on the NASA Opportunity mission page and the official Apollo 11 mission record. Character speech and storm imagery are artistic reconstructions, not actual live transmissions or documentary footage. The rover's last transmission was June 10, 2018; its exact internal state thereafter is not known. NASA formally ended the mission in February 2019.

## Audio note

Browser rules generally require a user action for sound. The opening PLAY overlay initiates audio on a direct tap/click. The game does not promise autoplay before user interaction. In the present build `opening.mp3`, `signal.mp3`, and `travel.mp3` keep their existing filenames and loop; Martian `wind.mp3` has a separate ambience channel, so it is not cut off by dialogue effects.
