// Shared navigation menu - imported by all pages
function renderMenu(currentPage = '') {
  const menuHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div class="container-lg">
        <a class="navbar-brand fw-bold" href="index.html">
          Lead Qualification Design
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'overview' ? 'active' : ''}" href="pages/overview.html">Overview</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'architecture' ? 'active' : ''}" href="pages/architecture.html">Architecture</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'scoring' ? 'active' : ''}" href="pages/scoring.html">Scoring</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'routing' ? 'active' : ''}" href="pages/routing.html">Routing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'schema' ? 'active' : ''}" href="pages/schema.html">Data Schema</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'stack' ? 'active' : ''}" href="pages/stack.html">Tech Stack</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'future' ? 'active' : ''}" href="pages/future.html">Future Work</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  const menuContainer = document.getElementById('menu-container');
  if (menuContainer) {
    menuContainer.innerHTML = menuHTML;
  }
}

document.addEventListener('DOMContentLoaded', renderMenu);
