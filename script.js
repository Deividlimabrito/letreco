let palavraDoDia = "Navio"
let tentativa = document.querySelector('.tentativa');
let button = document.querySelectorAll('.container-keybord input');

function checarLetra(letraDigitada,indice) {

    let existeLetra = palavraDoDia.toUpperCase().indexOf(letraDigitada.toUpperCase());
    if(existeLetra != -1 && existeLetra == indice) {
        return "green"
    } else if(existeLetra != -1) {
        return "yellow"
    } else {
        return "red"
    }
} 
function execute() {
        let children = tentativa.children;
        for(let indice = 0; indice < children.length; indice++) {
            let child = children[indice];

            child.style.backgroundColor = checarLetra(child.value, indice);
            child.style.color = "#black";

        }
}