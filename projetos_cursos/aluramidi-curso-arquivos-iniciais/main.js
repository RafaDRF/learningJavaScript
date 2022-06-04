
function tocaSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play()
    }
    else{
        console.log('elemento nao encontrado ou seletor invalido')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas.forEach(tecla => {
    let instrumento = tecla.classList[1];

    let idTecla = `#som_${instrumento}`;

    tecla.onclick = function(){
        tocaSom(idTecla)
    }

    tecla.onkeydown = function(evento){
        
        if (evento.code === 'Enter' || evento.code == 'Space'){
            tecla.classList.add('ativa');
        }
            
    }

    tecla.onkeyup = function(){
        tecla,this.classList.remove('ativa')
    }
});




