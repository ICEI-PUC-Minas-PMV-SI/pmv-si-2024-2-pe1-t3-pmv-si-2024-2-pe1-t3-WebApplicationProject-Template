const authContainer = document.getElementById("auth-container");

function checkLoginStatus() {

    const currentUser = localStorage.getItem("name");

    if (currentUser) {
        console.log("logado")
        renderLoggedIn(currentUser);
    } else {
        console.log("deslogado")
        renderLoginButton();
    }
}

function renderLoginButton() {

    authContainer.innerHTML = `
        <a href="login.html">
            <button class="login-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                Login
            </button>
        </a>
    `;
    document.getElementById("login-btn").addEventListener("click", login);
}

function renderLoggedIn(currentUser) {
    authContainer.innerHTML = `
        <li><a href="perfil-usuario.html">${currentUser}</a></li>
        <li><a href="#" id="logout-btn">Logout</a></li>
    `;
    document.getElementById("logout-btn").addEventListener("click", logout);
}

function login(){

    console.log("logar")

    let email, password;

    email = document.getElementById("email-login").value;
    password = document.getElementById("senha-login").value;

    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[];

    if (user_records.some((v) => {
        return v.email == email && v.password === password
    })){
        alert("Login realizado.")
        let current_user = user_records.filter((v) => {
            return v.email == email && v.password == password;
        })[0]

        localStorage.setItem("name", current_user.name);
        localStorage.setItem("email", current_user.email);
        
        window.location.href="/perfil-usuario.html";
    }

    else {
        alert("Dados incorretos.")
        }
    }

function logout(){

    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href="login.html";

    alert("Você foi deslogado com sucesso.");
}

checkLoginStatus();