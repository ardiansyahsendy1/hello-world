const actionButton = document.getElementById('action-button');
const message = document.getElementById('message');
const projectsSection = document.getElementById('projects');

if (actionButton) {
  actionButton.addEventListener('click', () => {
    if (message) {
      message.textContent = 'Exploring featured projects below. This portfolio is ready for your personal details.';
    }

    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}
