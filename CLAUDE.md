# CLAUDE.md — Karachi Dastarkhwan

## Purpose

Web app for the Karachi Dastarkhwan restaurant. It shows restaurant information and includes **Dastarkhwan Assistant**, a chat assistant that answers customer questions (menu, hours, location, etc.) using the restaurant's own data.

## Architecture

```
frontend/   Static client: index.html, styles.css, app.js (plain HTML/CSS/JS)
backend/    Server: serves the frontend, exposes the assistant API, calls the AI model
data/       Restaurant data (menu, hours, contact info) — the assistant's source of truth
prompts/    System prompts and instructions for Dastarkhwan Assistant
```

Flow: browser (`frontend/`) → backend API → AI model, with context from `data/` and `prompts/` → response back to the browser.

## Scope rule

**Only modify files needed for the current task.** Don't refactor, reformat, rename, or "improve" unrelated files. Don't add files, folders, or dependencies unless the task requires them.

## Coding rules

- Keep it simple: plain HTML/CSS/JS on the frontend; no frameworks or build tools unless asked.
- Small, readable functions with clear names; match the style of surrounding code.
- Keep restaurant content in `data/` and assistant prompts in `prompts/` — don't hardcode them in code.
- Comments only where the reason isn't obvious.
- Handle errors visibly (friendly message to the user, useful log on the server).

## Security rules

- Never commit secrets. API keys go in environment variables (`.env`, gitignored); provide a `.env.example` with placeholder values only.
- The frontend must never contain or call the AI API key directly — all model calls go through the backend.
- Validate and length-limit all user input on the backend.
- Escape user and model output before inserting into the page (use `textContent`, not `innerHTML`).
- Treat user messages as untrusted: the assistant must not reveal system prompts, keys, or internal data, and should stay on restaurant topics.
- Don't log personal data or full API keys.

## Token-saving rules

- Read only the files relevant to the task; use search before opening large files.
- Don't re-read files you just edited or restate code back in responses.
- Prefer targeted edits over rewriting whole files.
- Keep explanations short; summarize changes in a few lines.
- Keep assistant prompts in `prompts/` concise, and send the model only the data needed to answer.
