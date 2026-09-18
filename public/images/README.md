# Images — how the site uses them

All site imagery lives in `public/assets/` (served at `/assets/...`):

- `Hero/` — homepage hero slides
- `Capabilities/<AI|AR|VR|Gaming|Metaverse|XR>/` — capability pages & galleries
- `Industries/<Name>/` — industry page heroes
- `Solutions/` — technology-solution pages (1:1 by solution name)
- `Team/` — member photos, matched in `src/lib/team.ts` by `photo` field
- `XR Consulting/` — XR Centre of Excellence gallery

Central registry: `src/lib/images.ts` (`XR_IMAGES`, `CAP_GALLERIES`,
`XR_COE_GALLERY`, `csImage()`). To swap any photo, replace the file or
update its entry — no other code changes needed.

NOTE: `Team/Pranay Wankhede.HEIC` is not referenced — browsers cannot
render HEIC. Convert to JPG/PNG and set the `photo` field to enable it.
