// JSnack 5
// Crea un array vuoto.
// Chiedi per 6 volte all'utente di inserire un numero,
// se è dispari inseriscilo nell'array.
let oddNumbers = [];
const QUANTITY_TO_INSERT = 6;

for (let i = 1; i <= QUANTITY_TO_INSERT; i++) {
	const number = parseInt(prompt(`inserisci il ${i}° numero`));
	if (number % 2 === 1) {
		oddNumbers.push(number);
	}
}
console.log(oddNumbers);

