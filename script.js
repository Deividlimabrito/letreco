let palavraDoDia = "Navio"
let caractere = document.querySelectorAll('.caractere');
let childs = document.querySelector(".tenta2").getElementsByTagName('*');
for (var node of childs) {
    node.disabled = true;
}
function checarLetra(letraDigitada,indice) {
    let existeLetra = palavraDoDia.toUpperCase().indexOf(letraDigitada.toUpperCase());
    if(existeLetra != -1 && existeLetra == indice) {
        return 'green' 
    } else if(existeLetra != -1) {
        return 'yellow'
    } else {
        return 'red'
    }
}
function execute() {
    tenta1()
    tenta2()
    tenta3()
    tenta4()
    tenta5()
}
function tenta1() {
    let tentativa = document.querySelector('.tenta1');
    let children = tentativa.children;
    for(let indice = 0; indice < children.length; indice++) {
        let child = children[indice];

        child.style.backgroundColor = checarLetra(child.value, indice);
        child.style.color = "#black";
    }
}
function tenta2() {
    let tentativa = document.querySelector('.tenta2');
    let children = tentativa.children;
    for(let indice = 0; indice < children.length; indice++) {
        let child = children[indice];
        child.style.backgroundColor = checarLetra(child.value, indice);
        child.style.color = "#black";
    }
}
function tenta3() {
    let tentativa = document.querySelector('.tenta3');
    let children = tentativa.children;
    for(let indice = 0; indice < children.length; indice++) {
        let child = children[indice];
        child.style.backgroundColor = checarLetra(child.value, indice);
        child.style.color = "#black";
    }
}
function tenta4() {
    let tentativa = document.querySelector('.tenta4');
    let children = tentativa.children;
    for(let indice = 0; indice < children.length; indice++) {
        let child = children[indice];
        child.style.backgroundColor = checarLetra(child.value, indice);
        child.style.color = "#black";
    }
}
function tenta5() {
    let tentativa = document.querySelector('.tenta5');
    let children = tentativa.children;
    for(let indice = 0; indice < children.length; indice++) {
        let child = children[indice];
        child.style.backgroundColor = checarLetra(child.value, indice);
        child.style.color = "#black";
    }
}
