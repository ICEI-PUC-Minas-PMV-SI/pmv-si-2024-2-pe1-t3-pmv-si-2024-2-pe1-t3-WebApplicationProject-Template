function showNews() {

    const hasLoggedUser = localStorage.getItem('isLogged') 
    const hotNews = document.getElementsByClassName('hotNews')[0]
    
    console.log(hasLoggedUser == 'true' ? 'logado' : 'deslogado')

    if (hasLoggedUser == 'true' ) {
        hotNews.style.display = 'none'
    } 
}

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