# Creative Writing Blog

This is my personal writing blog I'm hosting to keep track of both historical and future writing for myself.

## Deployment
This site is built with **MkDocs** (ReadTheDocs theme) and automatically deployed to [blog.hoss-movies.com](https://blog.hoss-movies.com) via GitHub Actions. 

## Workflow
1. Add or update Markdown files in the `docs/` directory.
2. Push changes to the `main` branch.
3. The GitHub Action `deploy.yml` will automatically build the site and publish to the live domain.