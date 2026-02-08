/**
 * Fetch and display GitHub Discussions for Weekly Updates using GraphQL API
 */
(function() {
  'use strict';

  const GRAPHQL_API = 'https://api.github.com/graphql';
  const OWNER = 'fvutils';
  const REPO = 'fvutils.github.io';
  const CATEGORY_ID = 'DIC_kwDOHMTiU84C2BrA';
  const MAX_ITEMS = 5;

  /**
   * Fetch discussions using GitHub GraphQL API
   */
  async function fetchDiscussions() {
    const query = `
      query {
        repository(owner: "${OWNER}", name: "${REPO}") {
          discussions(first: ${MAX_ITEMS}, categoryId: "${CATEGORY_ID}", orderBy: {field: CREATED_AT, direction: DESC}) {
            nodes {
              number
              title
              url
              createdAt
              bodyText
            }
          }
        }
      }
    `;

    try {
      const response = await fetch(GRAPHQL_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (data.errors) {
        console.error('GraphQL errors:', data.errors);
        return null;
      }

      return data.data.repository.discussions.nodes;
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
      const date = new Date(discussion.createdAt);
      const formattedDate = date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
      
      html += `
        <li class="news-item">
          <div class="news-date">${formattedDate}</div>
          <h3 class="news-title"><a href="${discussion.url}">${discussion.title}</a></h3>
          <p class="news-excerpt">${getExcerpt(discussion.bodyText)}</p>
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
