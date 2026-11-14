# MIRA Quest v8 — requested targeted edits

Base: MIRA-Quest-v7-Targeted-Hotfix.zip. No broader story or layout redesign.

- Mars journey elapsed counter now starts at 0 and increments to 202 Earth days without showing its final value early.
- Apollo 11 elapsed flight counter uses approximately 103 hours to lunar landing; the previously invented progress-dependent numerical speeds were removed, since true spacecraft speed varied.
- Uses user-provided G34 FIXED.png for rover search, preserving original aspect ratio.
- Uses user-provided Mars Panoramaa(1).jpg solely for Opportunity's farewell panoramic look-around.
- Apollo stage component choices show supplied ascent, descent, and landing-legs photographs.
- Landing Legs photograph unlocks in Gallery, with user-provided NASA credit description.
- Dialogue back arrow restores previous spoken step, including earlier choice state.
- Neil Armstrong photograph is larger and horizontally centered.
- Corrected the three requested NASA source URLs: Opportunity instrument page, Victoria Crater photo page, and Apollo 11 second look.
- On two-story completion, Open Completed Archive and Finish the Story both appear on the signal screen; removed Finish from the subsequent archive page.

## Verification
- Source JavaScript syntax checks passed.
- All newly bundled images opened successfully.
- In-memory Chromium check: page renders title and proceeds into the intro without JS exceptions.
- Full deployed-site gameplay and audio remain unverified because local browser navigation is restricted.

## Source for historical flight time
- NASA Opportunity: https://science.nasa.gov/mission/mer-opportunity/ (July 7, 2003 launch, January 24/25 2004 landing depending time zone)
- Apollo 11: https://www.nasa.gov/wp-content/uploads/static/apollo50th/pdf/A11_MissionReport.pdf (lunar orbit ~76 elapsed hours)
- Apollo 11: https://www.archives.gov/exhibits/featured-documents/apollo-11-flight-plan (touchdown ~102h 47min after launch)
