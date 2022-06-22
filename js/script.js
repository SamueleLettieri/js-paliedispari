const parolaUtente = prompt("inserisci una parola")
console.log(parolaUtente)

function parolaAlContrario (parola) {
    let nuovaParola = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        nuovaParola += parola[i];
    }
    return nuovaParola;
}
const nuovaParolaAlContrario = parolaAlContrario (parolaUtente);
console.log(nuovaParolaAlContrario)

if(parolaUtente === nuovaParolaAlContrario){
    alert(`${parolaUtente} è una parola palidroma`)
} else {
    alert(`${parolaUtente} non è una parola palidroma`)
}

 