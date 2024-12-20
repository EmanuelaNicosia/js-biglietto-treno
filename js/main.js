const chilometri = prompt("Inserisci numero di chilometri");
console.log(chilometri);

const eta = prompt("Inserisci età");
console.log(eta);

const prezzokm = 0.21;
const scontoMinorenne = 20;
const scontoOver = 40;

const prezzoPieno = prezzokm * chilometri;
console.log(prezzoPieno);



if (eta < 18) {
    console.log("Minorenne");
    const sconto = prezzoPieno * scontoMinorenne / 100;
    const prezzoFinale = prezzoPieno - sconto;
    console.log(prezzoFinale.toFixed(2));
}

if (eta > 65) {
    console.log("Over");
    const sconto = prezzoPieno * scontoOver / 100;
    const prezzoFinale = prezzoPieno - sconto;
    console.log(prezzoFinale.toFixed(2));
}
