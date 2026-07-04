// Shared navigation menu component - imported on all pages
// DRY principle: define menu once, use everywhere

function renderMenu(currentPage = '') {
  // Detect if we're in the pages subdirectory
  const isInPagesDir = window.location.pathname.includes('/pages/');
  const basePath = isInPagesDir ? '../' : '';

  const menuHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom sticky-top">
      <div class="container-lg">
        <a class="navbar-brand fw-bold" href="${basePath}index.html">
          <span style="color: #667eea;">NextGen</span>LeadGen v2
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'overview' ? 'active' : ''}" href="${basePath}pages/overview.html">Overview</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'workflow' ? 'active' : ''}" href="${basePath}pages/workflow.html">Workflow</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'scoring' ? 'active' : ''}" href="${basePath}pages/scoring.html">Scoring</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'tiers' ? 'active' : ''}" href="${basePath}pages/tiers.html">Tier System</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'output' ? 'active' : ''}" href="${basePath}pages/output.html">Output & Integration</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'deployment' ? 'active' : ''}" href="${basePath}pages/deployment.html">Deployment</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'faq' ? 'active' : ''}" href="${basePath}pages/faq.html">FAQ</a>
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
