// EXTRA Crea con JavaScript la funzionalità per rimuovere il link "twitter" sotto alla sezione "Altro" nell'elemento "aside". Deve avvenire al caricamento della pagina, automticamente.

window.onload = function removeTwitterLink() {
    const takeTwitterButton = document.querySelector('.blog-sidebar div:nth-of-type(3) li:nth-of-type(2)')
    takeTwitterButton.remove()
}

// EXTRA Crea con JavaScript la funzionalità per rimuovere il corrispondente elemento padre dal DOM cliccando sul link "Continua a leggere".


const continuaLeggereJumbotronButton = document.querySelector('.jumbotron a')
//console.log(continuaLeggereButton)
continuaLeggereJumbotronButton.addEventListener("click", rimuoviElementoPadre)

function rimuoviElementoPadre() {
    const rimuoviPadre = document.querySelector('p:has(a)')
    rimuoviPadre.remove()
}

const esteriButtons = document.querySelectorAll('.container .stretched-link')
 //console.log(esteriButtons)

for(let link of esteriButtons) {
    link.addEventListener("click", rimuoviEsteri)
    
}

function rimuoviEsteri(event) {
    event.target.closest("p + a").remove()
}

/* console.log(continuaLeggereEsteriButton) */

// EXTRA Crea con JavaScript la funzionalità per creare un alert col nome dell'autore ogni volta che il cursore passa sopra l'autore del post.

const getName = document.querySelectorAll(".blog-post-meta a")

for(let name of getName) {
    name.addEventListener("mouseover", showName)
}

function showName(event){
    alert(event.target.innerText)
}




