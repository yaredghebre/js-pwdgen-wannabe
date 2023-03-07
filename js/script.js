// RACCOLTA DATI UTENTE
const userName = prompt ("Ciao! Qual'è il tuo nome?")
const userSurname = prompt ("E il tuo cognome?")
const userFavColor = prompt ("Qual'è  il tuo colore preferito?")

// ELABORAZIONE
const userResult = (userName + userSurname + userFavColor + 21)
console.log(userResult);

// OUTPUT
document.getElementById('user-password').innerHTML = userResult;