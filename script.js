function openModal(modalId) {
  console.log("open called here")
  document.body.style.overflow = 'hidden'; 
  const modal = document.getElementById(modalId);
  
  if (modal) {
    // Exibe o modal
    modal.style.display = 'flex';
    
    // Define os atributos de acessibilidade
    modal.setAttribute('aria-hidden', 'false');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('role', 'dialog');

    // Esconde o conteúdo de fundo
    document.querySelectorAll('body > *:not(dialog)').forEach(element => {
      console.log(element)
      element.setAttribute('aria-hidden', 'true');
    });
    console.log("modal " + modalId)
    modal.focus()
  }
}


function closeModal(modalId) {
  document.body.style.overflow = '';
  const modal = document.getElementById(modalId);
  
  if (modal) {
    // Esconde o modal
    modal.style.display = 'none';
    
    // Atualiza os atributos de acessibilidade
    modal.setAttribute('aria-hidden', 'true');
    modal.removeAttribute('aria-modal');
    
    // Mostra o conteúdo de fundo
    document.querySelectorAll('body > *:not(dialog)').forEach(element => {
      element.removeAttribute('aria-hidden');
    });
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
  const aceitarModal = document.querySelect("modal2")
  aceitarModal.focus()
}

function feedbackTranslate() {
  closeModal('modal2');
  alert('Traduz ativado com sucesso!');
  window.location.href = "correct.html";
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

