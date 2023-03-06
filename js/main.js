let buttonMobile = document.querySelectorAll(".menu-mobile")
let topBar = document.querySelector(".top-bar")
let itensMenu = document.querySelectorAll('li')


function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden'
    document.body.scroll = 'no' // IE
}

function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto'
    document.body.scroll = 'yes' // IE
}

function changenMenu() {
    if (topBar.classList.toggle('active')){
        unloadScrollBars()
    } else {
        reloadScrollBars()
    }
}


itensMenu.forEach(e => {
    e.addEventListener('click', () => {
        topBar.classList.toggle('active')   
        reloadScrollBars()
    })
})

