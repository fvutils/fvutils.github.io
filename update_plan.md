# FVUtils Website Update Plan

## Overview
Update the fvutils.github.io website to provide a better introduction to the organization and comprehensive coverage of all relevant projects, organized by category.

## Current State Analysis
- **Technology**: Jekyll-based static site using a sidebar theme (Lanyon/Poole-based)
- **Current Content**: Minimal - basic FVUtils introduction with placeholder text
- **Structure**: Jekyll with `_layouts`, `_includes`, `public/` for assets
- **Deployment**: GitHub Pages compatible (static site)

## Project Categories

### User-Facing Projects
Tools designed for end-users working on functional verification:

1. **pyvsc** - Python library for Verification Stimulus and Coverage
   - Homepage: https://fvutils.github.io/pyvsc
   - Topics: constrained-random, randomization, coverage, cocotb
   
2. **ivpm** - IP and Verification Package Manager
   - Homepage: https://fvutils.github.io/ivpm/
   
3. **pyhdl-if** - Python interface for cross-calling with HDL
   - Homepage: https://fvutils.github.io/pyhdl-if/
   
4. **pyucis** - Python API to UCIS (Unified Coverage Interoperability Standard) Data
   - Homepage: https://fvutils.github.io/pyucis
   - Topics: coverage-database, functional-coverage
   
5. **pyucis-viewer** - QT-based viewer for UCIS coverage data
   - Homepage: https://fvutils.github.io/pyucis-viewer
   
6. **pywellen-mcp** - MCP server for pywellen
   - Description: MCP (Model Context Protocol) server integration
   
7. **dv-transaction-trace** - SystemVerilog bindings for logging with Perfetto
   - Description: Transaction-level trace visualization support

### Developer-Focused Projects
Tools for developers building verification infrastructure:

8. **qemu-model-loader** - QEMU patches for loading shared-library models
   - Description: Enables dynamic model loading in QEMU
   
9. **svdep** - SystemVerilog dependency management tool
   - Description: Tracks file modifications for build optimization
   
10. **fltools** - Utilities for working with EDA Filelists
    - Description: Parse and manipulate EDA tool filelist formats

## Implementation Plan

### Phase 1: Design & Content Structure
- [ ] Keep Jekyll (GitHub Pages native) but modernize the layout
  
- [ ] Create content structure for index page:
  - Hero section with organization introduction
  - "User-Facing Tools" section with project cards
  - "Developer Tools" section with project cards
  - Each card should include:
    - Project name
    - Brief description
    - Key features/capabilities
    - Links to documentation
    - GitHub repository link

### Phase 2: Content Enhancement
- [ ] Research each project more deeply:
  - Review README files for accurate descriptions
  - Identify key features and use cases
  - Locate documentation links
  
- [ ] Write compelling descriptions for each project:
  - User-facing projects: Focus on problems solved and ease of use
  - Developer tools: Focus on technical capabilities and integration
  
- [ ] Create better organization introduction:
  - What is FVUtils?
  - Who is it for?
  - Why use these tools?

### Phase 3: Visual Design & Layout
- [ ] Update CSS styling:
  - Modernize color scheme
  - Create project card component styles
  - Ensure responsive design for mobile
  - Add hover effects and visual polish
  
- [ ] Create reusable components:
  - Project card include/partial
  - Section header styling
  - Call-to-action buttons
  
- [ ] Add visual elements:
  - Consider adding project icons/logos (if available)
  - Category section headers
  - Visual separation between sections

### Phase 4: Technical Implementation
- [ ] Update `index.md`:
  - Replace current minimal content
  - Add hero/introduction section
  - Add user-facing projects section with all 7 projects
  - Add developer-focused projects section with all 3 projects
  
- [ ] Update `_config.yml` if needed:
  - Verify title and tagline are appropriate
  - Check metadata
  
- [ ] Enhance styling:
  - Modify or create new CSS in `public/css/`
  - Consider adding custom CSS file for project cards
  
- [ ] Add any necessary includes:
  - Project card template in `_includes/`
  - Section header template

- [ ] Add blog/news functionality:
  - Setup Jekyll posts structure for news/updates
  - Create posts layout and styling
  - Plan for future: agentic CI workflow to generate weekly summary posts

### Phase 5: Testing & Refinement
- [ ] Test locally:
  - Run Jekyll server
  - Test all links
  - Verify responsive design
  - Check cross-browser compatibility
  
- [ ] Content review:
  - Ensure accuracy of descriptions
  - Verify all documentation links work
  - Check for typos and formatting
  
- [ ] Performance check:
  - Optimize images if added
  - Minimize CSS/JS if needed
  - Ensure fast load times

### Phase 6: Deployment
- [ ] Commit changes to repository
- [ ] Push to GitHub
- [ ] Verify GitHub Pages deployment
- [ ] Test live site
- [ ] Review and iterate based on feedback

## Technical Constraints
- **Must remain static**: No backend/server-side processing
- **GitHub Pages compatible**: Jekyll is natively supported
- **Fast loading**: Minimal dependencies
- **Mobile responsive**: Must work on all screen sizes

## Content Tone & Style Guidelines
- **Professional but approachable**: Technical audience but friendly
- **Concise**: Get to the point quickly
- **Action-oriented**: Clear next steps (install, read docs, try it)
- **Consistent**: Similar structure for all project descriptions

## Decisions Made
1. ~~Should we add a "Getting Started" guide showing how projects work together?~~
   - **No** - That's the responsibility of each project
2. ~~Do we need a separate page for each project, or is the index page sufficient?~~
   - **Index page is sufficient** - Link to individual project documentation
3. ~~Should we include code examples on the main page?~~
   - **No** - Individual projects should provide examples in their docs
4. ~~Do we want to add a blog/news section for updates?~~
   - **Yes** - Add blog/news section
   - Future enhancement: Agentic CI workflow to generate weekly summary posts
5. ~~Should we include contributor information or contribution guidelines?~~
   - **No** - Not needed at this time

## Success Criteria
- ✅ All 10 projects clearly described and categorized
- ✅ Links to documentation for each project
- ✅ Modern, professional visual design
- ✅ Mobile responsive
- ✅ Fast loading (< 2 seconds)
- ✅ Easy to navigate and understand
- ✅ Static site deployable on GitHub Pages
- ✅ Blog/news section structure in place for future updates

## Future Enhancements (Post-MVP)
- Agentic CI workflow to automatically generate weekly "What's New" blog posts
- Automated project activity summaries from GitHub
- RSS feed for news updates
