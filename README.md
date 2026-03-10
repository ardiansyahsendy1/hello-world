# Autonomous Research Framework MVP

A fully static browser-side demo that turns a research objective into a visible workflow, structured findings, source notes, evidence, and a final brief.

## What this project is

This repository contains a single-page MVP for an Autonomous Research Framework.
It is intentionally implemented with plain HTML, CSS, and JavaScript only.

The app simulates a research run in the browser by walking through six stages:
- Objective
- Research plan
- Source collection
- Evidence extraction
- Synthesis
- Final brief

It does not use build tooling, package managers, frameworks, or external dependencies.

## Files

- `index.html` - product interface and page structure
- `style.css` - workbench layout, cards, status pills, and responsive styles
- `script.js` - deterministic scenario engine, workflow simulation, rendering, and interactions
- `README.md` - project description and usage

## How to use

1. Open `index.html` in a browser.
2. Enter a research objective or use the default text.
3. Choose a scope and output format.
4. Toggle whether to include risks, open questions, and source notes.
5. Click `Run Demo Research`.
6. Watch the workflow progress through the six research stages.
7. Review findings, sources, evidence, and the generated report.
8. Use `Copy Summary` to copy the executive summary.
9. Use `Load Another Scenario` to rotate through demo scenarios.

## Demo behavior

The app uses deterministic browser-side scenarios. It includes multiple predefined topics plus a generic fallback for arbitrary objectives.

Included scenario coverage:
- AI note-taking tools for small teams
- Launch channels for a niche SaaS
- Website chatbot options for customer support
- Generic fallback for unmatched objectives

## Limitations

- No live web retrieval
- No backend orchestration
- No persistence
- No user accounts
- No export pipeline
- No external APIs

This MVP is a front-end simulation designed to validate the product shape before adding live research capabilities.

## Future extensions

Possible next steps after validating the static MVP:
- Add a lightweight backend endpoint for live research requests
- Persist research runs and history
- Add export to Markdown or PDF
- Add richer evidence traceability and citations
- Add real retrieval and synthesis services
