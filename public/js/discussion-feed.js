/**
 * Fetch and display GitHub Discussions RSS feed for Weekly Updates
 */
(function() {
  'use strict';

  const RSS_FEED_URL = 'https://github.com/fvutils/fvutils.github.io/discussions.rss';
  const CATEGORY_SLUG = 'weekly-updates';
  const MAX_ITEMS = 5;

  /**
   * Fetch and parse the RSS feed
   */
  async function fetchDiscussions() {
    try {
      const response = await fetch(RSS_FEED_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const text = await response.text();
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'text/xml');
      
      // Check for parsing errors
      const parserError = xmlDoc.querySelector('parsererror');
      if (parserError) {
        throw new Error('XML parsing error');
      }
      
      return parseRSSItems(xmlDoc);
    } catch (error) {
      console.error('Error fetching discussions:', error);
      return null;
    }
  }

  /**
   * Parse RSS items and filter for Weekly Updates category
   */
  function parseRSSItems(xmlDoc) {
    const items = xmlDoc.querySelectorAll('item');
    const discussions = [];
    
    items.forEach(item => {
      const link = item.querySelector('link')?.textContent || '';
      const title = item.querySelector('title')?.textContent || '';
      const pubDate = item.querySelector('pubDate')?.textContent || '';
      const description = item.querySelector('description')?.textContent || '';
      
      // Filter by category slug in the link
      // Discussion links look like: https://github.com/fvutils/fvutils.github.io/discussions/categories/weekly-updates/...
      if (link.includes(`/categories/${CATEGORY_SLUG}`)) {
        discussions.push({
          title: title,
          link: link,
          date: new Date(pubDate),
          description: description
        });
      }
    });
    
    // Sort by date (newest first) and limit to MAX_ITEMS
    discussions.sort((a, b) => b.date - a.date);
    return discussions.slice(0, MAX_ITEMS);
  }

  /**
   * Format date as readable string
   */
  function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  /**
   * Extract plain text excerpt from HTML description
   */
  function getExcerpt(html, maxWords = 30) {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || '';
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
      html += `
        <li class="news-item">
          <div class="news-date">${formatDate(discussion.date)}</div>
          <h3 class="news-title"><a href="${discussion.link}">${discussion.title}</a></h3>
          <p class="news-excerpt">${getExcerpt(discussion.description)}</p>
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
