/* const parolaUtente = prompt("inserisci una parola")
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
} */

const oddOrEven = ["pari", "dispari" ];

const userOddOrEven = prompt("inserisci cosa vuoi scegliere (pari o dispari)");
console.log(userOddOrEven);

const usernumber = parseInt(prompt("inserisci un numero da 1 a 5"));
console.log(usernumber);
 
let pari;
let dispari;

if(oddOrEven[0] === userOddOrEven){
    pari = userOddOrEven;
    console.log(pari);
} else if (oddOrEven[1] === userOddOrEven){
    dispari = userOddOrEven;
    console.log(dispari);
}


function ia (){
    return iaDice = parseInt(Math.random() * 5)+1;
}

let risultato = ia ();
console.log(risultato);


let somma = risultato + usernumber;
console.log(somma)

