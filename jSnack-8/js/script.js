// Chiedi un numero di 4 cifre all'utente
// e calcola la somma di tutte le cifre che compongono il numero.

// Esegui un propt per richiedere un numero
// loggare il risultato e contollare di che tipo é
// mi ritorna un numero in formato stringa. puó essere utile trasformarlo in intero?
// come faccio a controllare da quante cifre é composto il numero?

let number = prompt("Dimmi un numero di quattro cifre");
console.log(number, typeof number);

// number = "2222"
if (number.length === 4) {
	// let firstDigit = parseInt(number[0]);
	// let secondDigit = parseInt(number[1]);
	// let thirdDigit = parseInt(number[2]);
	// let fourthDigit = parseInt(number[3]);

	// const sum = firstDigit + secondDigit + thirdDigit + fourthDigit;
	//const sum = "ciao" + " " + "sono" + " " + "pluto"; // concatenazione di stringhe
	let sum = 0;
	for (let i = 0; i < 4; i++){
		let digit = parseInt(number[i]); // number[0] -> "2"
		sum += digit;
	}
	console.log("somma: ", sum);
}
