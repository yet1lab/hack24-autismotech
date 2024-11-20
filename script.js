document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const matricula = document.getElementById('matricula').value;
    const senha = document.getElementById('senha').value;
  
    if (matricula && senha) {
      alert(`Bem-vindo, matrícula ${matricula}!`);
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
  