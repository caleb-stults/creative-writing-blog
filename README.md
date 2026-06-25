# Caleb's Personal Writings

This site is built with [Hugo](https://gohugo.io/).

## Development Workflow

This project utilizes a feature-branch workflow to help me practice proper CI/CD and Git procedures.

### 1. Start a New Feature
To start a new post or poem, use the provided helper script:
```bash
./new-feature.sh <feature-branch-name> <section> <filename> <title>
```

### 2. Write and Format
Write your content in the generated Markdown file in content/. If needed, format the poem spacing.
```bash
./fix-poetry.sh content/<section>/<filename>.md
```

### 3. Sync and Submit
Commit your changes and push your feature branch:
```bash
./git-sync.sh
```

### 4. Merge
Open a Pull Request on GitHub.
Wait for the Hugo Build Check (GitHub Action) to pass.
Once the build is green, merge the PR into main.

### Repository Structure
- content/              # All blog posts and poetry.
- layouts/              # Custom HTML partials and templates.
- static/               # Assets like images and favicon.ico.
- .github/workflows/    # CI/CD configuration for automated building.
- *.sh                  # Automation scripts (new-feature, fix-poetry, git-sync).