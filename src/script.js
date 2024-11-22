// função usada para exibir as notícias de acordo com o tipo de  usuário ao carregar a página
function showNews() {

    const hasLoggedUser = localStorage.getItem('isLogged') 
    const hotNews = document.getElementsByClassName('hotNews')[0]
    
    console.log(hasLoggedUser == 'true' ? 'logado' : 'deslogado')

    if (hasLoggedUser == 'true' ) {
        hotNews.style.display = 'none'
    } 
}

//função utilizada para definir qual o botão deve ser exibido ao renderizar a página
function hasLogin() {
    const logIn = document.getElementsByClassName('logInButton')[0]
    const logOut = document.getElementsByClassName('logOutButton')[0]

    window.localStorage.setItem('nome', 'joão')
    window.localStorage.setItem('isLogged', 'false')

    const isLogged = localStorage.getItem('isLogged')

    if (isLogged == 'true') {
        logIn.style.display = 'flex'
    } else {
        logOut.style.display = 'flex'
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
  
    localStorage.setItem('userData', JSON.stringify(userData));
    
    alert("Usuário cadastrado com sucesso!");
    window.location.replace('/src')
  }
  