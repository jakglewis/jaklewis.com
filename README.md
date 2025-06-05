# Jak Banks Digital Garden

This repository contains a Jekyll-based digital garden integrated with Obsidian for content creation.

## Project Structure

- `_notes/`: Main content directory (shared with Obsidian)
  - `_staging/`: Draft notes not ready for publishing
- `_pages/`: Static pages (about, now, index)
- `Templates/`: Obsidian templates
- `_layouts/`: HTML templates for different content types
- `_sass/`: Styling files
- `assets/`: Static assets (images, JS, etc.)

## Workflow

### Content Creation

1. **Write in Obsidian:**
   - Use the Note Template from the Templates menu (Ctrl/Cmd+P, then search for "Templates: Insert template")
   - Place drafts in `_notes/_staging/`
   - Move to `_notes/` when ready to publish

2. **Front Matter Requirements:**
   - All notes must have front matter with at least title and date
   - Example:
     ```yaml
     ---
     title: Your Note Title
     date: YYYY-MM-DD
     tags: [optional, tags]
     ---
     ```

### Local Development

```bash
bundle exec jekyll serve
```

Visit http://127.0.0.1:4000 in your browser.

### Deployment

The site is automatically deployed via Netlify when changes are pushed to GitHub.

## Design

The site features a minimalist design inspired by Steph Ango with:
- Clean typography
- Light/dark mode support
- Single column layout for readability

## Technical Details

- Based on Jekyll 4.2.0
- Ruby 2.7.2
- Bundler 2.4.22
- Netlify for hosting

## Customization

- `_sass/_custom.scss`: Main styles
- `_layouts/`: HTML templates
- `_config.yml`: Jekyll configuration
