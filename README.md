# Caleb's Personal Writings

This site is built with MkDocs Material and the awesome-pages plugin.

## Adding New Content
I use a helper script to keep file structure consistent and to ensure front matter is properly formatted.

1. Create a new post:
   `./new-post.sh foldername filename "Title"`

2. Organize Navigation:
   This project uses mkdocs-awesome-pages-plugin. Navigation is generated automatically based on the folder structure. 

   * To change the order or title of a folder/page, create a .pages file inside the directory.
   * Plugin Documentation: https://github.com/lukasgeiter/mkdocs-awesome-pages-plugin

## Deployment
This site is deployed automatically via GitHub Actions whenever you push to the main branch. 

* Theme: Material (Dark/Light mode supported)
* Customization: See mkdocs.yml for palette and font settings.
* Drafts: Any file starting with an underscore (e.g., _draft.md) will be ignored by the site generator.