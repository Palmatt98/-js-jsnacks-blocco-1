// In un array sono contenuti i nomi degli invitati alla festa del grande
// Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o
// no alla festa.
//								0				1			2				3
let listaInvitati = ["Matteo", "Giovanni", "Davide", "Cristian"];
let userName = prompt("Ciao come ti chiami");
let isInvited = false;

for (let i = 0; i < listaInvitati.length; i++) {
	if (userName.toLowerCase() === listaInvitati[i].toLowerCase()) {
		isInvited = true;
	}
}

if (isInvited === true) {
	console.log("sei stato invitato");
} else {
	console.log("non sei stato invitato");
}
