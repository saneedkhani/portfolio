// nav toggle (mobile)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.navbar-toggle');
  const links = document.querySelector('.navbar-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }

  // skills grid render (if present on page)
  const skillsMount = document.querySelector('[data-skills-grid]');
  if (skillsMount && typeof SKILLS !== 'undefined') {
    skillsMount.innerHTML = SKILLS.map(
      (s) => `
      <div class="skill-cell">
        <span class="cat">${s.cat}</span>
        <ul>${s.items.map((i) => `<li>${i}</li>`).join('')}</ul>
      </div>`
    ).join('');
  }
});
