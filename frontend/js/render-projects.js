/**
 * Renders project index-cards into any [data-project-grid] container.
 * Reads from the PROJECTS array in data.js (stand-in for the future
 * Django API response).
 */

function cardTemplate(project) {
  const ledgerRows = project.ledger
    .map(([k, v]) => `<div class="row"><span>${k}</span><span>${v}</span></div>`)
    .join('');

  const tags = project.tags.map((t) => `<span class="tag">${t}</span>`).join('');

  return `
    <article class="card" data-tags="${project.tags.join('|').toLowerCase()}">
      <span class="card-idx">IDX/${project.idx}</span>
      <span class="card-status">${project.status}</span>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="card-tags">${tags}</div>
      <div class="card-ledger">${ledgerRows}</div>
      <div class="card-links">
        <a href="project-detail.html?slug=${project.slug}">Case study →</a>
        ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener">GitHub</a>` : ''}
      </div>
    </article>
  `;
}

function renderGrid(container, projects) {
  if (!projects.length) {
    container.innerHTML = `<div class="empty-state">No records match this filter.</div>`;
    return;
  }
  container.innerHTML = projects.map(cardTemplate).join('');
}

function initProjectGrid() {
  const container = document.querySelector('[data-project-grid]');
  if (!container) return;

  const featuredOnly = container.dataset.projectGrid === 'featured';
  const list = featuredOnly ? PROJECTS.filter((p) => p.featured) : PROJECTS;
  renderGrid(container, list);

  // optional filter bar
  const filterBar = document.querySelector('[data-filter-bar]');
  if (!filterBar) return;

  const allTags = ['All', ...new Set(PROJECTS.flatMap((p) => p.tags))];
  filterBar.innerHTML = allTags
    .map((t, i) => `<button class="filter-btn ${i === 0 ? 'active' : ''}" data-tag="${t.toLowerCase()}">${t}</button>`)
    .join('');

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    filterBar.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const tag = btn.dataset.tag;
    const filtered = tag === 'all' ? PROJECTS : PROJECTS.filter((p) => p.tags.some((t) => t.toLowerCase() === tag));
    renderGrid(container, filtered);
  });
}

document.addEventListener('DOMContentLoaded', initProjectGrid);
