var output = document.getElementById("output");
var cognomi =["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

var cognomeUtente = prompt("Inserisci il tuo cognome.");
// Aggiunge il cognome utente alla lista
cognomi.push(cognomeUtente);
// riordina la lista in ordine alfabetico
cognomi.sort(); 
var cognomeUtenteID= 0;

for(var i=0; i<cognomi.length; i++){
    // Trova la posizione del tuo cognome nella lista 
    if(cognomi[i]==cognomeUtente){
        cognomeUtenteID = i+1;
    }
    output.innerHTML+= cognomi[i] + "<br>";
}

output.innerHTML+= "Il tuo cognome è al "+ cognomeUtenteID+ "° posto della lista"; 