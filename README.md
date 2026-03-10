# Autonomous Research Framework MVP

This repository contains a conservative static-site MVP for an Autonomous Research Framework.

## What it is

The site is a single-page browser-run demo that simulates a transparent research workflow from objective intake to final brief. It does not use a package manager, build tooling, or external dependencies.

## Files

- `index.html` - single-page interface with objective intake, workflow tracker, findings, sources, evidence, and final report
- `style.css` - responsive styling for the MVP layout and status-driven research dashboard
- `script.js` - deterministic browser-side workflow simulation with scenario selection and report rendering

## How to use

1. Open `index.html` in a browser.
2. Review or edit the default research objective.
3. Choose scope, output format, and optional report sections.
4. Click `Run Demo Research`.
5. Inspect the workflow, findings, evidence notes, and final brief.
6. Use `Copy Summary` or `Load Another Scenario` to continue exploring the MVP.

## What the MVP demonstrates

- Objective intake in a clean static UI
- Visible workflow stages from planning through synthesis
- Deterministic mock scenarios for repeatable browser-side demos
- Structured findings, source notes, evidence notes, recommendations, risks, and open questions
- A future-friendly foundation for replacing mock data with real retrieval later

## Current limitations

- All research content is simulated in the browser
- No live web retrieval, persistent storage, or backend orchestration
- No package-based app structure or build process

## Future extension ideas

- Replace static scenarios with live retrieval-backed data
- Add export options for markdown or PDF briefs
- Introduce saved run history and richer evidence traceability
- Add a lightweight backend only after the static MVP shape is validated
