// Il software deve chiedere per 10 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

// quantitá di domande da porre all'utente
const QUESTION_NUMBER = 10;
let result = 0;

for (let i = 1; i <= QUESTION_NUMBER; i++) {
	//domanda
	const number = parseInt(prompt(`Dimmi il ${i}° numero`));
	result = result + number;
}

console.log("il risltato è: ", result);
