function showNews() {

    const hasLoggedUser = localStorage.getItem('nome') ? true : false
    const hotNews = document.getElementsByClassName('hotNews')[0]
    
    console.log(hasLoggedUser)

    if (hasLoggedUser) {
        hotNews.style.display = 'none'
    } 
}
