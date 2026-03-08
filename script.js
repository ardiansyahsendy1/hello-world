const actionButton = document.getElementById('action-button');
const message = document.getElementById('message');

if (actionButton && message) {
  actionButton.addEventListener('click', () => {
    message.textContent = 'JavaScript is connected and working.';
  });
}
