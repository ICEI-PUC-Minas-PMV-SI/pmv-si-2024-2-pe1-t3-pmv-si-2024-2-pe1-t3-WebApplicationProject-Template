

// função usada para exibir as notícias de acordo com o tipo de  usuário ao carregar a página
function showNews() {
    
  const userDataString = localStorage.getItem('userData')
  const userData = JSON.parse(userDataString)
  const begginerUser = document.getElementsByClassName('iniciante')[0]
  const intermediaryUser = document.getElementsByClassName('intermediario')[0]
  const advancedUser = document.getElementsByClassName('avancado')[0]
  const studentUser = document.getElementsByClassName('estudante')[0]
    
  if (userData.logged == true && userData.investidorType == 'iniciante') {
    intermediaryUser.style.display = 'none'
    advancedUser.style.display = 'none'
    studentUser.style.display = 'none'
  }

  if (userData.logged == true && userData.investidorType == 'intermediario') {
    begginerUser.style.display = 'none'
    advancedUser.style.display = 'none'
    studentUser.style.display = 'none'
  }
  if (userData.logged == true && userData.investidorType == 'avancado') {
    intermediaryUser.style.display = 'none'
    begginerUser.style.display = 'none'
    studentUser.style.display = 'none'
  }
  if (userData.logged == true && userData.investidorType == 'estudante') {
    intermediaryUser.style.display = 'none'
    advancedUser.style.display = 'none'
    begginerUser.style.display = 'none'
  }

}

//função utilizada para definir qual o botão (Entrar/Sair) deve ser exibido ao renderizar a página
function hasLogin() {
    const logIn = document.getElementsByClassName('logInButton')[0]
    const logOut = document.getElementsByClassName('logOutButton')[0]
    
   
    if (!localStorage.getItem('userData')) {
        
     logIn.style.display = 'flex'
    }

    if (localStorage.getItem('userData')) {
        const userDataString = localStorage.getItem('userData')
        const userData = JSON.parse(userDataString)
        
        
        const isLogged = userData.logged
      
        
        if (isLogged == 'true' || isLogged == true) {
            logIn.style.display = 'none'
            logOut.style.display = 'flex'
        } else {
            logIn.style.display = 'flex'
        }
}
   
}
//função utilizada na página de cadastro de usuário
function userRegister() {
    
    event.preventDefault();
  
    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const investidorType = document.querySelector('select[name="investidorType"]').value;
    const password = document.querySelector('input[name="password"]').value;
    const logged = 'true'
  
    const userData = {
      name,
      email,
      investidorType,
      password,
      logged,
    };
    
    window.localStorage.setItem('userData', JSON.stringify(userData));
    
    alert("Usuário cadastrado com sucesso!");
    window.location.replace('/src')
  }

//Função para fazer logout no sistema
function logOut() {
    const logIn = document.getElementsByClassName('logInButton')[0]
    const logOut = document.getElementsByClassName('logOutButton')[0]
    const userDataString = localStorage.getItem('userData')
    const userData = JSON.parse(userDataString)
    userData.logged = !userData.logged
    localStorage.setItem('userData', JSON.stringify(userData))
    logOut.style.display = 'none'
    logIn.style.display = 'flex'
}
  
function logIn(event) {
  event.preventDefault()
  
  const email = document.querySelector('input[name="email"]').value;
  const password = document.querySelector('input[name="senha"]').value;
 
  if (!localStorage.getItem('userData')) {   
    alert('Usuário não encontrado')
    window.location.replace('/src/login/index.html')
  } else {
    const userDataString = localStorage.getItem('userData')
    const userData = JSON.parse(userDataString)
    
    if (email == userData.email && password == userData.password) {
      userData.logged = !userData.logged
      localStorage.setItem('userData', JSON.stringify(userData))
      alert('Bem-vindo')
      window.location.assign('/src/index.html') 
    } else {
      alert(' usuário e/ou senha incorreta(s)')
    }
 }
}