// Stampa il cubo dei primi N numeri,
// dove N è un numero indicato dall'utente.

// TRACCIA SCRITTA MEGLIO
// Chiedere un numero N all'utente, e stampare i cubi da 1 fino ad N

const n = parseInt(prompt("Scrivi un numero"));

for (let i = 1; i <= n; i++) {
	const cube = Math.pow(i, 3);
	console.log(`cubo di ${i}: ${cube}`);
}
