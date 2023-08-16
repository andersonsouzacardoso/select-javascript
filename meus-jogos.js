let jogoSelecionado = document.querySelector('#games')
let resultado = document.querySelector('h1')

jogoSelecionado.addEventListener('change', setgames)

function setgames(){
    let jogo = jogoSelecionado.value;

    if(jogo === 'jogo1'){
        resultado.textContent = 'Dablo IV Diablo Standard Edition Blizzard Entertainment PS4 Físico R$ 430,00'
    }else if(jogo === 'jogo2'){
        resultado.textContent = 'God of War Ragnarök Standard Edition Sony PS4 Físico R$ 179,00'
    }else if(jogo === 'jogo3'){
        resultado.textContent = 'Cod Mw 2 Call Of Duty Modern Warfare Ii Ps4 Digital R$ 110,00'
    }else if(jogo === 'jogo4'){
        resultado.textContent = 'Little Nightmares II Standard Edition Bandai Namco PS4 Físico R$ 133,00'
    }else resultado.textContent = ''
}