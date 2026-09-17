# gamja-release-guide.github.io -- Claude Code Rules

Release Guard landing page. Astro + React islands, deployed to GitHub Pages.

## Commit Convention

* Format: `<type>: <description>`
* Types: `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `ci`, `style`
* Small, atomic commits. One commit = one logical change.

## PR Rules

* Work on feature branches, PR to `main`. No direct push to `main`.
* Branch names from Linear git branch names.
* PR title includes Linear issue ID (e.g., `GAM-62: hero section`).

## Tech Stack

* **Astro** for static pages (`.astro` files)
* **React** for interactive islands (`.tsx` files, `client:load` or `client:visible`)
* **CSS** in `src/styles/global.css` (design tokens as CSS custom properties)
* No Tailwind. No CSS-in-JS. Plain CSS with custom properties.

## Component Conventions

* Astro components: `src/components/*.astro` (static content)
* React components: `src/components/*.tsx` (interactive islands only)
* Data files: `src/data/*.ts` (typed exports)
* One component per file. Name matches export.

## Security

Same rules as release-guard: no real secrets in code, commits, or PR descriptions.
