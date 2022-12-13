let numbers = document.querySelector('.numbers');
let buttonSubmit = document.querySelector('.submit');
let img = document.querySelector('.star-image');
let h1Description = document.getElementById('h1-description');
let h2Description = document.getElementById('h2-description');
let finalRating = document.querySelector('.final-rating')
let form = document.getElementById('form')

numbers.addEventListener('click', (event) => {

    var numeroClicado = event.target;

    adicionaClasse(numeroClicado)

    let numbersElementos = document.querySelectorAll('.number')
    
    for(let i = 0; i < numbersElementos.length; i++) {
        numbersElementos[i].addEventListener('click', (event) => {
            voltaClassePadrao(numeroClicado)
        })
    }   

    console.log(numeroClicado.textContent);


    form.addEventListener('submit', (event) => {
        event.preventDefault()
           document.body.innerHTML = `
           
           <section class="thank-div">

            <div class="thank-img-number">
                <img class="thank-svg" src="./css/illustration-thank-you.svg"> 
                <span class="selected-number">You selected ${numeroClicado.textContent} out 5</span>
            </div>
            
            <h1 class="h1-thank">Thank you!</h1>
            <h2 class="h2-subtitle">We appreciate you taking the time to give a rating.<br> If you ever need more support, don't hesitate to<br>get in touch.</h2>
           </section>`

    })   
    
})

function adicionaClasse (elemento) {
    elemento.classList.remove('number');
    elemento.classList.add('numbers-focus');

    if(elemento.classList[0] == 'numbers') {
        elemento.classList.remove('numbers-focus')
        elemento.classList.remove('number')
        elemento.classList.add('numbers')
    }
}

function voltaClassePadrao (elemento) {
    elemento.classList.remove('numbers-focus');
    elemento.classList.add('number')

    if(elemento.classList[0] == 'numbers') {
        elemento.classList.remove('number')
    }
}



