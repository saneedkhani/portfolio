function initProjectDetail() {
  const mount = document.querySelector('[data-project-detail]');
  if (!mount) return;

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    mount.innerHTML = `
      <div class="empty-state">
        Record not found. <a href="projects.html" style="color: var(--accent)">Return to index →</a>
      </div>`;
    document.title = 'Not found — Portfolio';
    return;
  }

  document.title = `${project.title} — Portfolio`;

  const ledgerRows = project.ledger
    .map(([k, v]) => `<div class="row"><span>${k}</span><span>${v}</span></div>`)
    .join('');
  const tags = project.tags.map((t) => `<span class="tag">${t}</span>`).join('');

  mount.innerHTML = `
    <div class="eyebrow">IDX/${project.idx} — ${project.status}</div>
    <h1 style="margin: 12px 0 20px;">${project.title}</h1>
    <div class="card-tags" style="margin-bottom: 28px;">${tags}</div>
    <p style="font-size: 1.05rem; max-width: 64ch; margin-bottom: 32px;">${project.summary}</p>
    <div class="card-ledger" style="max-width: 480px; margin-bottom: 32px;">${ledgerRows}</div>
    <div class="card-links" style="margin-bottom: 48px;">
      ${project.links.github ? `<a href="${project.links.github}" target="_blank" rel="noopener">GitHub →</a>` : ''}
      ${project.links.demo ? `<a href="${project.links.demo}" target="_blank" rel="noopener">Live demo →</a>` : ''}
    </div>
    <a href="projects.html" class="mono" style="color: var(--text-muted);">← Back to all projects</a>
  `;
}

document.addEventListener('DOMContentLoaded', initProjectDetail);
