# Lesnar Tambun’s data portfolio

React 18, TypeScript and Vite 5 build four static documents for GitHub Pages at `/personal-portfolio/`. The homepage presents Data Analytics, Business Intelligence and Data Science. Each featured project has a standalone study with its own initial HTML, fallback navigation, canonical URL and share metadata.

## Local development

Use Node 20 and npm. Run `npm ci`, then `npm run dev`. To verify the production artifact, run `npm run build` followed by `node scripts/check-pages.mjs`. Start `npm run preview` for a quick inspection. Also serve the contents of `dist` at the real project base from a plain static host when checking release routing.

## Editing

- Homepage composition is in `src/App.tsx`. Update featured work and its evidence links in `src/data/portfolio.ts`. Detail views live in `src/studies/` and use `src/studies.tsx` as their shared entry. Edit the visible content and its compact initial HTML fallback together.
- Navigation and contacts use `src/components/PageChrome.tsx`. Home fragments are `#top`, `#projects`, `#experience`, `#intro` and `#contact`. Project return links use `#work-vinix7`, `#work-air-quality` and `#work-xai`. The earlier `#case-study-1` and `#case-study-2` bookmarks redirect from home.
- For a route change, update `src/data/studyRoutes.ts`, the matching physical document under `projects/`, its study ID, project record, sitemap and build check. Vite builds the entries listed in `vite.config.ts`. Use `asset()` for runtime site-relative links.
- Visual tokens live in `src/styles/tokens.css` and responsive layouts in `src/styles/global.css`. Preserve keyboard focus, readable text contrast, native scrolling and genuinely distinct figure captions.
- `site-public/` is the publishable asset directory. The inherited `public/` and `legacy/` trees remain source history. Use only cleared files under `site-public/` and extend the explicit inventory in `scripts/check-pages.mjs` when clearing a file. Reference the specific figure, capture method, filter, scope, and source commit in its record. Inspect imagery as well as text. Excluding a file from Pages does not erase older copies from Git history.

## Evidence and release status

| Project | Evidence and interpretation |
|---|---|
| VINIX7 | [Benchmark code and exports](https://github.com/leesnar/network-intrusion-detection/tree/d8043063c67602357a6dde811cbd06addc5c68a9). Group 1 project. Distinguish input populations, source labels, Isolation Forest predictions and score-band counts. Binary recall refers to the normal class. |
| Air Quality | [Dashboard, notebook and station CSV](https://github.com/leesnar/proyek-analisis-data/tree/9be999561126d075de274a5689c8facea67d56c1). The saved notebook forward-fills observations. The dashboard reads a separate external URL and applies its date filters to the raw series. Check that visitors can see the dashboard before enabling a live action. |
| XAI | [Coauthored publication](https://garuda.kemdiktisaintek.go.id/documents/detail/6714990). Use the publication-matched research run for performance and stability. Keep semantic alignment qualitative while the scored-run discrepancy is unresolved. |
| GroundedRAG | [Internal evaluation](https://github.com/leesnar/GroundedRAG/blob/ae9719b5f633ccce393301ba0c04b59ed6b9ef06/eval/results/report.md). Distinguish 43 questions, 34 scored answers and eight unanswerable questions. |

The header, hero and footer download the owner-approved PDF from `site-public/cv/lesnar-tambun-cv.pdf`. The build check verifies its SHA-256. For a future owner-approved revision, replace that file and update the expected checksum.

The three VINIX7 dashboard JPGs and the aggregate XAI Jaccard, ROC and SHAP importance plots are cleared for this local candidate. The owner approved the saved Air Quality notebook plots as the candidate’s dashboard-preview fallback. The monthly PM2.5 box plot and six-pollutant correlation matrix come from the embedded PNG outputs of the pinned notebook linked above (zero-based cells 38 and 44). Both are labeled as notebook output. Candidate clearance and deployment approval are separate. Inspect external credentials and live destinations anonymously. Do not publish the candidate until the outstanding P0 decisions are resolved or explicitly accepted.

## November 2026 migration

Replaced the long homepage studies with a recruiter overview and dedicated VINIX7, Air Quality and XAI documents. ETL, GroundedRAG and sentiment are supporting work. Four older projects remain in Additional projects. The trading system stays in the historical implementation. The portrait, blue/white palette, display type, SVG marks and rounded cards remain.

For release verification, exercise deep refresh, native Back/Forward, both legacy bookmarks, contact at the scroll boundary, mobile navigation, keyboard focus, readable evidence and external links. Test at 320–1440 CSS pixels including 720, 860 and 900. Record automated and human findings separately. A push to main or a manual Pages workflow dispatch can publish the artifact. Review the candidate tree and its clearance decisions before either action.
