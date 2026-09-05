# boomark-web

Marketing site and release pipeline for Boomark, structured the same way as `snapback-web`:
a Next.js static-export site under `web/`, plus a generic Xcode build/release/appcast pipeline
at the repo root for shipping notarized DMGs with Sparkle auto-updates.

This is a **foundation scaffold**: the tooling and structure are complete and working, but the
actual design, copy, and marketing content still need to be written. Nothing here should be
mistaken for finished visual design, see `web/src/components/` for placeholder sections meant
to be replaced.

## Structure

```
boomark-web/
├── .github/workflows/deploy-gh-pages.yml   # builds web/ and publishes to GitHub Pages
├── config.sh                                # release pipeline config (paths, signing identity)
├── scripts/                                 # git submodule: shared macos-release-pipeline repo
├── releases/                                # DMGs + appcast.xml land here, committed directly (no LFS)
└── web/                                     # the Next.js site
    ├── assets-src/                          # drop raw images/videos here, run `npm run assets:build`
    ├── content/blog/                        # MDX blog posts
    └── src/
        ├── app/                             # routes: /, /blog, /privacy, /terms, /help
        ├── components/                      # Nav, Footer, Hero, analytics, Giscus, blog helpers
        └── lib/                             # blog/posts loading, constants, analytics helper
```

`scripts/` is a git submodule pointing at `macos-release-pipeline` (a sibling repo shared with
Snapback and Peggo), currently checked out from a local path. After cloning this repo, run
`git submodule update --init` to fetch it. Once `macos-release-pipeline` has a real remote,
update `.gitmodules` to point at that URL instead of the local path.

## Before this goes live

A few things are still placeholders and need real values before shipping:

- **Domain**: `https://boomarkapp.com` is used everywhere (metadata, sitemap, robots, appcast
  `WEBSITE_URL`) as a placeholder. Once a real domain is chosen, update `web/src/lib/constants.ts`,
  every `metadataBase`/`openGraph.url` in `web/src/app/**`, `config.sh`, and add a `web/CNAME` file.
- **Sparkle**: Boomark's Xcode project doesn't have the Sparkle framework wired in yet. The
  release pipeline (`scripts/build-and-release.sh`) assumes it does: it injects `SUFeedURL`/
  `SUPublicEDKey` into `Info.plist` and re-signs `Sparkle.framework`. Add Sparkle to the app
  target, generate an EdDSA keypair, and fill in `SPARKLE_ED_PUBLIC_KEY` in `config.sh` before
  running a real release.
- **Info.plist**: Boomark's Xcode target uses `GENERATE_INFOPLIST_FILE = YES` (no physical
  `Info.plist` checked in), but the pipeline's version-bump step edits a real file on disk via
  `PlistBuddy` at the path in `config.sh`'s `INFO_PLIST` (matching Snapback's setup, which does
  have one). Either switch Boomark to a physical Info.plist, or adjust `build-and-release.sh`/
  `build-dmg.sh` in the shared pipeline to patch `INFOPLIST_KEY_*` build settings in
  `project.pbxproj` instead, the way `MARKETING_VERSION`/`CURRENT_PROJECT_VERSION` already are.
- **Analytics IDs**: `web/src/components/ClarityAnalytics.tsx` and the GA snippet in
  `web/src/app/layout.tsx` have placeholder project/measurement IDs.
- **Giscus**: `web/src/components/Giscus.tsx` has placeholder `repo`/`repoId`/`category`/
  `categoryId` values. Set these up at [giscus.app](https://giscus.app) once this repo exists
  on GitHub with Discussions enabled.
- **Design**: colors, fonts, and every marketing section are intentionally minimal/neutral.

## Local development

```bash
cd web
npm install
npm run dev
```

## Building

```bash
cd web
npm run assets:build   # optimize anything dropped in assets-src/ (skips if empty)
npm run build           # generates feed.xml, then next build (static export to web/out/)
```

Next's static export fails the build if `/blog/[slug]`'s `generateStaticParams()` returns zero
paths, so `content/blog/` always needs at least one post with `published: true`. There's a
placeholder one (`hello-world.mdx`) there for exactly this reason, don't delete it until a real
post replaces it.

## Releasing the app (once Sparkle is wired up)

```bash
cp scripts/config.example.sh config.sh   # already done here, but re-copy if starting fresh
./scripts/build-dmg.sh --open             # local test build, no release
./scripts/build-and-release.sh            # full pipeline: archive, notarize, DMG, appcast, git
```
