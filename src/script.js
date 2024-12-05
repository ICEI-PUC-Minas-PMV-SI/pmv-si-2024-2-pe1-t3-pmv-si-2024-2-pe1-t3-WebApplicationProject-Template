

// função usada para exibir as notícias de acordo com o tipo de  usuário ao carregar a página
function showNews() {
    

  
  const parentDiv = document.getElementsByClassName('cardsGroupLatestNews')[0];


  function changeParentClass(targetClass) {
    parentDiv.classList.remove('iniciante', 'intermediario', 'avancado', 'estudante');
    parentDiv.classList.add(targetClass);
  }
 
  
  if (!localStorage.getItem('userData')) {
    parentDiv.classList.add('iniciante')
    parentDiv.classList.add('intermediario')
    parentDiv.classList.add('avancado')
    parentDiv.classList.add('estudante')

  }

  if (localStorage.getItem('userData')) {
    const userDataString = localStorage.getItem('userData')
    const userData = JSON.parse(userDataString)

    const filter = document.getElementById('investor')
    filter.value = userData.investidorType
    filter.style.display = 'flex'
    filter.querySelector('select').value = userData.investidorType

    if (userData.logged === false) {
      parentDiv.classList.add('iniciante')
      parentDiv.classList.add('intermediario')
      parentDiv.classList.add('avancado')
      parentDiv.classList.add('estudante')
      filter.style.display = 'none'
    } else {

      switch (userData.investidorType) {
        case 'iniciante':
          changeParentClass('iniciante')
          break
        case 'intermediario':
          changeParentClass('intermediario')
          break
        case 'avancado':
          changeParentClass('avancado')
          break
        case 'estudante':
          changeParentClass('estudante')
          break
      }
    }
  }
}


  //função utilizada para definir qual o botão (Entrar/Sair) deve ser exibido ao renderizar a página
  function hasLogin() {
    const logIn = document.getElementsByClassName('logInButton')[0]
    const logOut = document.getElementsByClassName('logOutButton')[0]
    const profile = document.getElementsByClassName('profile')[0]


   
    if (!localStorage.getItem('userData')) {
        
      logIn.style.display = 'flex'
    } else if (localStorage.getItem('userData')) {
      const userDataString = localStorage.getItem('userData')
      const userData = JSON.parse(userDataString)
        
        
      const isLogged = userData.logged
      
        
      if (isLogged == 'true' || isLogged == true) {
        logIn.style.display = 'none'
        logOut.style.display = 'flex'
        profile.style.display = 'flex'
       
      } else {
        logIn.style.display = 'flex'
        profile.style.display = 'none'
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
    const filter = document.getElementsByClassName('investorFilter')[0]
    const userDataString = localStorage.getItem('userData')
    const userData = JSON.parse(userDataString)
    userData.logged = !userData.logged
    localStorage.setItem('userData', JSON.stringify(userData))
    logOut.style.display = 'none'
    logIn.style.display = 'flex'
    filter.style.display = 'none'
    window.location.replace('/src/index.html')
  }

//função Login no sistema
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

  //Função utilizada na página meu perfil para popular os campos
function populateFields() {
  const userData = JSON.parse(localStorage.getItem('userData'));
 
  const name = userData.name
  const email = userData.email
  const senha = userData.password
  const investidorType = userData.investidorType

  if (name && email && senha && investidorType) {
    document.getElementById('nome-investidor').value = name
    document.getElementById('email').value = email 
    document.getElementById('password').value = senha 
    document.getElementById('investidor').value = investidorType
  }
  

  
}

function updateData() {
  const userDataString = localStorage.getItem('userData')
  const userData = JSON.parse(userDataString)
  const senha = document.getElementById('password').value
  userData.password = senha
  localStorage.setItem('userData', JSON.stringify(userData))
  alert('Senha atualizada com sucesso!')
  
}

function filterInvestor() {
  const userDataString = localStorage.getItem('userData')
  const userData = JSON.parse(userDataString)
  const divFilter = document.getElementById('investor')
  const investorValue = divFilter.querySelector('select').value
  userData.investidorType = investorValue
  localStorage.setItem('userData', JSON.stringify(userData))
  showNews()
}