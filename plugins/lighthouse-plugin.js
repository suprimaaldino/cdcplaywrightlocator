window.addEventListener('DOMContentLoaded', function() {
  const sidebar = document.querySelector('.side-nav__brand');
  if (sidebar) {
    const btn = document.createElement('a');
    btn.href = 'lighthouse/lighthouse-report.html';
    btn.target = '_blank';
    btn.textContent = '⚡ Lighthouse Audit';
    btn.style.cssText = 'display:block; padding:10px; margin:10px 0; background:linear-gradient(135deg,#667eea,#764ba2); color:white; text-align:center; border-radius:5px; text-decoration:none;';
    sidebar.appendChild(btn);
  }
});
