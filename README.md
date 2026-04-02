# fast-food-cart

## Deployment Structure

This repository follows the exact flow below:

1. Local code change
2. Commit and push to `main`
3. GitHub Actions workflow triggers on push
4. Workflow builds project and publishes `dist` to `gh-pages`
5. GitHub Pages serves latest files from `gh-pages`

In short:

- Change = local
- Commit = save snapshot
- Push = update GitHub and trigger deploy

## Implemented Pipeline

### 1) Local sync command

Added script file: `scripts/sync-and-deploy.ps1`

What it does:

1. Ensures branch is `main`
2. Stages all changes
3. Creates a commit
4. Pushes to `origin/main`
5. Prints deploy note

### 2) NPM commands

Added in `package.json`:

1. `npm run sync`
2. `npm run sync:auto`

Use:

1. `npm run sync` for normal updates (auto message with timestamp)
2. `npm run sync:auto` for quick default message flow

### 3) GitHub workflow

Workflow file: `.github/workflows/deploy.yml`

Trigger:

1. Push to `main`

Actions:

1. Install deps
2. Build app (`npm run build`)
3. Publish `dist` to `gh-pages`

## Daily Update Steps

Whenever you change code locally, run:

```powershell
npm run sync
```

Then this happens automatically:

1. GitHub repo updates
2. Workflow runs
3. GitHub Pages updates

Live URL:

- https://bhardwaj5568.github.io/fast-food-cart/