window.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.side-nav__brand');
  if (sidebar) {
    const lighthouseBtn = document.createElement('a');
    lighthouseBtn.href = 'lighthouse/lighthouse-report.html';
    lighthouseBtn.target = '_blank';
    lighthouseBtn.innerHTML = '⚡ Lighthouse Audit';
    lighthouseBtn.style.cssText = `
      display: block;
      padding: 10px 15px;
      margin: 10px 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-weight: 500;
      text-align: center;
      transition: all 0.3s ease;
    `;
    lighthouseBtn.onmouseover = () => lighthouseBtn.style.transform = 'scale(1.02)';
    lighthouseBtn.onmouseout = () => lighthouseBtn.style.transform = 'scale(1)';
    sidebar.appendChild(lighthouseBtn);
  }
});
