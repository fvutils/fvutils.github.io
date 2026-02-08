/**
 * Fetch and display GitHub Discussions for Weekly Updates using REST API
 */
(function() {
  'use strict';

  const API_URL = 'https://api.github.com/repos/fvutils/fvutils.github.io/discussions';
  const CATEGORY_SLUG = 'weekly-updates';
  const MAX_ITEMS = 5;

  /**
   * Fetch discussions using GitHub REST API
   */
  async function fetchDiscussions() {
    try {
      const response = await fetch(API_URL, {
        headers: {
          'Accept': 'application/vnd.github+json',
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const discussions = await response.json();
      
      // Filter by category and sort by created date
      const filtered = discussions
        .filter(d => d.category.slug === CATEGORY_SLUG)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, MAX_ITEMS);

      return filtered;
    } catch (error) {
      console.error('Error fetching discussions:', error);
      return null;
    }
  }

  /**
   * Extract a summary from the activity report
   */
  function extractSummary(body) {
    // Count items in each section
    const commits = (body.match(/^- .+ \(.{7}\) in fvutils\//gm) || []).length;
    
    // Match PRs in the Pull Requests section only
    const prSection = body.match(/### Pull Requests\n([\s\S]*?)(?=\n###|$)/);
    const prs = prSection ? (prSection[1].match(/^- #\d+:/gm) || []).length : 0;
    
    // Build a natural language summary
    const parts = [];
    if (commits > 0) parts.push(`${commits} commit${commits !== 1 ? 's' : ''}`);
    if (prs > 0) parts.push(`${prs} pull request${prs !== 1 ? 's' : ''}`);
    
    if (parts.length === 0) {
      return 'No significant activity this week.';
    }
    
    const summary = parts.join(' and ');
    return `This week saw ${summary} across FVUtils repositories.`;
  }

  /**
   * Get excerpt from body text
   */
  function getExcerpt(text, maxWords = 30) {
    const words = text.trim().split(/\s+/);
    
    if (words.length > maxWords) {
      return words.slice(0, maxWords).join(' ') + '...';
    }
    return text;
  }

  /**
   * Render discussions in the container
   */
  function renderDiscussions(discussions) {
    const container = document.getElementById('weekly-updates-container');
    if (!container) {
      console.error('Container #weekly-updates-container not found');
      return;
    }
    
    if (!discussions || discussions.length === 0) {
      container.innerHTML = `
        <div class="news-section">
          <h2>Weekly Updates</h2>
          <p>Check back soon for updates on FVUtils projects!</p>
        </div>
      `;
      return;
    }
    
    let html = `
      <div class="news-section">
        <h2>Weekly Updates</h2>
        <ul class="news-list">
    `;
    
    discussions.forEach(discussion => {
      const date = new Date(discussion.created_at);
      const formattedDate = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      
      const summary = extractSummary(discussion.body);
      
      html += `
        <li class="news-item">
          <div class="news-date">${formattedDate}</div>
          <h3 class="news-title">${discussion.title}</h3>
          <p class="news-excerpt">${summary} <a href="${discussion.html_url}">View details →</a></p>
        </li>
      `;
    });
    
    html += `
        </ul>
        <p><a href="https://github.com/fvutils/fvutils.github.io/discussions/categories/weekly-updates">View all updates →</a></p>
      </div>
    `;
    
    container.innerHTML = html;
  }

  /**
   * Show error message
   */
  function showError() {
    const container = document.getElementById('weekly-updates-container');
    if (container) {
      container.innerHTML = `
        <div class="news-section">
          <h2>Weekly Updates</h2>
          <p>Check back soon for updates on FVUtils projects!</p>
        </div>
      `;
    }
  }

  /**
   * Initialize - fetch and render discussions
   */
  async function init() {
    try {
      const discussions = await fetchDiscussions();
      
      if (discussions === null || discussions.length === 0) {
        showError();
      } else {
        renderDiscussions(discussions);
      }
    } catch (error) {
      console.error('Failed to initialize discussions:', error);
      showError();
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
