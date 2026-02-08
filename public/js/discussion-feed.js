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
      
      html += `
        <li class="news-item">
          <div class="news-date">${formattedDate}</div>
          <h3 class="news-title"><a href="${discussion.html_url}">${discussion.title}</a></h3>
          <p class="news-excerpt">${getExcerpt(discussion.body)}</p>
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
    const discussions = await fetchDiscussions();
    
    if (discussions === null) {
      showError();
    } else {
      renderDiscussions(discussions);
    }
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
