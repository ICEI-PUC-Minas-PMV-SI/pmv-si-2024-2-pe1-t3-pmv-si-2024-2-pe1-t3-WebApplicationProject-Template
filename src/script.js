function showNews() {

    window.localStorage.setItem('nome', 'Fulano da silva')    
    
    const hotNews = document.getElementsByClassName('hotNews')[0]
    
    
    if (localStorage) {
        hotNews.style.display = 'none'
        alert('tem dado no local storage o nome do usuário é ' + window.localStorage.getItem('nome'))

    } else {
        alert('nao tem dado no localstorage')
    }

}
