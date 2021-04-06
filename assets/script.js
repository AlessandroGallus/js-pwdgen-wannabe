var nome;
var cognome;
var colore;




nome= prompt("Come ti chiami?");
cognome = prompt("Qual'è il tuo cognome?");
colore=prompt("Qual'è il tuo colore preferito?");

var password = nome+cognome+colore+21;


document.getElementById('password').innerHTML = password;
console.log(password);