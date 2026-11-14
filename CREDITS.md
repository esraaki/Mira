# MIRA QUEST — Sources, photo credits and disclosures

Audit date: **November 14, 2026**. The in-game photographs, artwork, audio and video are the supplied project assets; no NASA photograph was replaced. Source IDs below were checked against official NASA, JPL or NASA-hosted records wherever available. Some gallery files are crops, downsized images, or recompressed versions of the records cited.

## Collectible photo archive

| In-game image | Verified identity and credit | Source record |
|---|---|---|
| Opportunity’s first Eagle Crater view | PIA05199, Opportunity Pancam — NASA/JPL/Cornell | [NASA Photojournal · “As Far as Opportunity’s Eye Can See”](https://science.nasa.gov/photojournal/as-far-as-opportunitys-eye-can-see/) |
| Berry Bowl (“blueberries”) | PIA05634, Opportunity Pancam — NASA/JPL/Cornell | [NASA Photojournal · “Discovery Served Up in a Bowl”](https://science.nasa.gov/photojournal/discovery-served-up-in-a-bowl/) |
| MER instrument diagram | Mars Exploration Rover science-instrument illustration — NASA/JPL-Caltech. It applies to the Spirit and Opportunity rover design; no PIA ID is listed on this source page. | [NASA · Science Instruments](https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-instruments/) |
| Opportunity tracks | PIA07310, Opportunity Navigation Camera — NASA/JPL; acquired January 26, 2005 (sol 359). | [NASA Photojournal · “Looking Back Across the Plains”](https://science.nasa.gov/photojournal/looking-back-across-the-plains/) |
| Victoria Crater / Cape Verde | PIA09104, Opportunity Pancam — NASA/JPL-Caltech/Cornell | [NASA Photojournal · “Panorama from Cape Verde”](https://science.nasa.gov/photojournal/panorama-from-cape-verde/) |
| Opportunity final traverse map | PIA23178 — NASA/JPL-Caltech/MSSS | [NASA Photojournal · Opportunity’s Final Traverse Map](https://science.nasa.gov/photojournal/opportunitys-final-traverse-map/) |
| Homestake mineral vein | PIA15033, Opportunity Pancam — NASA/JPL-Caltech/Cornell/ASU. NASA describes the vein as calcium- and sulfur-rich and possibly gypsum. | [JPL Photojournal · PIA15033](https://photojournal.jpl.nasa.gov/catalog/PIA15033) |
| Apollo 11 near the landing gear | AS11-40-5902, Buzz Aldrin beside the Lunar Module’s plus-Y strut/leg; photograph by Neil A. Armstrong — NASA | [NASA Johnson EOL · frame AS11-40-5902](https://eol.jsc.nasa.gov/SearchPhotos/photo.pl?mission=AS11&roll=40&frame=5902) |
| Apollo 11 Lunar Module | AS11-40-5927 — NASA. The in-game image is a cropped/resized version of this frame. | [NASA Johnson EOL · frame AS11-40-5927](https://eol.jsc.nasa.gov/SearchPhotos/photo.pl?mission=AS11&roll=40&frame=5927) |
| Neil Armstrong official portrait | S69-31741 — NASA | [NASA · Official Portrait of Neil A. Armstrong](https://www.nasa.gov/image-article/official-portrait-of-neil-armstrong/) |
| Apollo 11 Passive Seismic Experiment | AS11-40-5948, Buzz Aldrin with the deployed PSEP; photograph by Neil A. Armstrong — NASA | [NASA Apollo Lunar Surface Journal · Apollo 11 photogrammetry](https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/a11Photogrammetry.html) |
| Lunar laser retroreflector | **Attribution unresolved.** The supplied image and its companion file in `assets/source-originals/` show the same reflector scene, but the frame ID and exact NASA photo record could not be matched. The in-game lightbox explicitly says this; the linked NASA page explains the Apollo 11 laser-ranging experiment and is not presented as the image’s exact record. No image was substituted. | [NASA NSSDC · Apollo 11 mission/science context](https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo11info.html) |
| Apollo 11 landing site from lunar orbit | PIA12909, LROC — NASA/GSFC/Arizona State University. The bundled version is annotated/cropped. | [NASA Photojournal · “Apollo 11: Second Look”](https://science.nasa.gov/photojournal/apollo-11-second-look/) |

The Apollo 11 reflector should remain credited as unresolved unless its exact image record can be independently identified. Do not attach frame AS11-40-5952 to the supplied file: the verification pass found that frame does not visually match it. The appropriate NASA mission context for the experiment is linked above.

## Other active NASA imagery

- Opportunity’s “Lion King” supporting panorama (shown in the early Eagle-to-Endurance journey stop): PIA05755, [JPL Photojournal record](https://photojournal.jpl.nasa.gov/catalog/PIA05755). The stop label/caption identifies the image as a supporting Eagle Crater view, not as a photograph of Endurance Crater.
- Opportunity Legacy Pan used in the later Endeavour journey stop: PIA22909, [NASA Photojournal record](https://science.nasa.gov/photojournal/opportunity-legacy-pan-true-color/).
- Mission fact sources include [NASA’s Opportunity mission page](https://science.nasa.gov/mission/mer-opportunity/), [Opportunity science highlights](https://science.nasa.gov/mission/mars-exploration-rovers-spirit-and-opportunity/science-highlights/), [NASA’s Apollo 11 mission overview](https://www.nasa.gov/missions/apollo/apollo-11/apollo-11-mission-overview/), the [NASA NSSDC Apollo 11 Lunar Module/EASEP record](https://nssdc.gsfc.nasa.gov/nmc/spacecraft/display.action?id=1969-059C), and JPL’s [Apollo lunar laser-ranging overview](https://www.jpl.nasa.gov/news/the-apollo-experiment-that-keeps-on-giving/).

## Generated and supplied content

- The title, signal, travel, planetary setting, rover/Eagle hero art, and several engineering illustrations are AI-assisted cinematic reconstructions, not unmodified NASA photography. The game labels reconstructions where they appear. The Mars dust-storm video is a supplied simulation, not Opportunity footage or a recording of Martian wind.
- The Opportunity rover, Apollo hardware and their conversations are fictionalized personifications grounded in NASA history. They do not represent actual transmissions or recordings. The simplified route and landing activities are educational illustrations, not operational tools or faithful physics simulators.
- The original supplied photographs have been preserved in their intended scenes. Cropping/resizing/re-encoding is disclosed above where verified; the original-sources folder is retained for provenance. The asset manifest paths and recorded file sizes were reconciled against the actual packaged files.
- The ZIP does not document all original licenses or creators for supplied music, sound effects and simulation media. The owner should confirm reuse/competition permissions before public release. This document is a source register, not a legal rights determination.
- Project narrative/code edits were AI-assisted. Review all external event, NASA identity, media and branding requirements before submission.

## Targeted polish and test record

The original chapter order and story structure are unchanged: prologue → Opportunity → Eagle → ending. Dialogue branches, the NASA image archive, player name, supplied story art, sounds, mini-games and browser progress remain in place. Polish changes are limited to transitions and input safety, responsive panorama dragging, reduced-motion support, keyboard and focus behavior in dialogs/zoomed photos, visible photo credits, corrected exact image links, clearer image-to-caption alignment, and carefully qualified science wording.

Both complete chapters and the ending were played in the browser, including the archive and epilogue. JavaScript syntax and the 115-file asset manifest were checked. See `README.md` for start/deploy instructions and test scope; browser/device-dependent audio quality, mobile hardware behavior and supplied-media licenses remain owner-side checks.
