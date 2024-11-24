// Validação de senha
document.getElementById('register-form').addEventListener('submit', function (event) {
    const senha = document.getElementById('senha-register').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    if (senha !== confirmarSenha) {
        event.preventDefault();
        alert("As senhas não coincidem!");
    }
});

// Função de login (pode ser customizada conforme necessário)
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const emailLogin = document.getElementById('email-login').value;
    const senhaLogin = document.getElementById('senha-login').value;
    alert(`Login realizado com o e-mail: ${emailLogin}`);
});
