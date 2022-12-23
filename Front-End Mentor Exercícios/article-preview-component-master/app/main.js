let shareIcon = document.getElementById('share-icon')
let shareItens = document.getElementById('share-itens')
let shareDescription = document.getElementById('share-description')

shareIcon.addEventListener('click', (event) => {
    if(shareItens.classList[0] == 'desaparece') {
        shareItens.classList.remove('desaparece')
        shareItens.classList.add('ajuste')
    } else {
        shareItens.classList.remove('ajuste')
        shareItens.classList.add('desaparece')
    }

    shareDescription.addEventListener('click', (event) => {
        shareItens.classList.remove('ajuste')
        shareItens.classList.add('desaparece')
    })

    
})

console.log(shareItens)
