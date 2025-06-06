# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Local development:**
```bash
bundle exec jekyll serve
```
Site will be available at http://127.0.0.1:4000

**Build for production:**
```bash
bundle exec jekyll build
```

## Architecture Overview

This is a Jekyll-based digital garden with Obsidian integration. The unique architecture includes:

### Content Structure
- `_notes/`: Main content directory (shared with Obsidian vault)
  - `_staging/`: Draft notes not ready for publishing
- Notes are written in Obsidian and automatically processed by Jekyll
- All notes require front matter with at least `title` and `date`

### Custom Plugin System
The site uses custom Ruby plugins for core functionality:

**Bidirectional Links (`_plugins/bidirectional_links_generator.rb`):**
- Converts `[[wiki-style]]` double-bracket links to HTML anchor tags
- Supports labeled links: `[[note-name|custom label]]`
- Creates backlink relationships between notes
- Generates `_includes/notes_graph.json` for visualization
- Handles invalid links by styling them as disabled

**Front Matter Injection (`_plugins/empty_front_matter_note_injector.rb`):**
- Automatically adds empty front matter to notes that lack it
- Runs during Jekyll's initialization phase

### Content Types
- **Notes** (`_notes/`): Primary content using `note` layout
- **Pages** (`_pages/`): Static pages using `page` layout
- Both collections output to clean URLs without `.html` extension

### Deployment
- Hosted on Netlify with automatic deployment from Git
- Ruby 2.7.2, Bundler 2.4.22, Jekyll 4.2.0
- Build command: `bundle exec jekyll build`
- Publish directory: `_site`

## Content Workflow

When creating or editing notes:
1. Content is typically created in Obsidian using `[[double-bracket]]` linking
2. Drafts go in `_notes/_staging/` until ready
3. Published notes go in `_notes/` root
4. The bidirectional links plugin processes all wiki-style links during build