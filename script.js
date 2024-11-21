function openModal(modalId) {
  document.body.style.overflow = 'hidden'; 
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal(modalId) {
  document.body.style.overflow = '';
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

function closeAnyModal() {
  document.body.style.overflow = '';  
  const openModal = document.querySelector('.modal[style*="display: flex"]');
  if (openModal) {
    openModal.style.display = 'none';
  }
}

function activateTranslate() {
  closeModal('modal1');
  openModal('modal2');
}

function feedbackTranslate() {
  closeModal('modal2');
  alert('Traduz ativado com sucesso!');

  document.getElementById('translate-text').style.display = 'inline'; 
}

function showTerms() {
  closeModal('modal2');
  openModal('modal3');
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeAnyModal();
  }
});

