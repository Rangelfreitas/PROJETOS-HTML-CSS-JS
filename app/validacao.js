function verificaSeOChutePossuiUmValorValido (chute) {
    const numero = +chute

    if (chuteForInvalido(numero)){
        elementoChute.innerHTML +=  '<div>Valor Invalido</div>'
        return
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `<div>Fale um numero entre: ${menorValor} e ${maiorValor}</div>`
        return
   }

    if (numero === numeroScreto){
        document.body.innerHTML = `
        <h2> Você acertou!! </h2>
        <h3> O numero secreto era: ${numeroScreto} </h3>
        <button id= "jogar-novamente" class="btn-jogar">Jogar Novamente</button>

        `
    }

    else if (numero > numeroScreto) {
        elementoChute.innerHTML +=`
        <div>O numero secreto é menor <i class="fa-solid fa-down-long"></i></div>
        `
    } else {
        elementoChute.innerHTML+= 
        `<div>O numero secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload()
    }
})