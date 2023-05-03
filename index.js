// Import stylesheets
import './style.css';

// Write Javascript code!

/*
Realizzate l’interfaccia grafica per la funzionalità di ricerca: ad ogni nuovo carattere la ricerca viene ripetuta visualizzando il numero di corrispondenze trovate se più di una, altrimenti i dati del libro corrispondente.

collegare l’esercizio del cercare il libro dal titolo o dall’autore usando il DOM. 
associare una funzionalità di ricerca al digitare una lettera ed eseguire le ricerche quando vengono premute le lettere. 
ogni volta che premo una lettera viene visualizzato il match o il fatto che ci sono tanti match.


function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  }
  xhttp.open("GET", "ajax_info.txt");
  xhttp.send();
}
*/
const result = document.getElementById('result');
const btnInput = document.getElementById('btnInput');
var btnInput_value=btnInput.value;
console.log(btnInput_value);

var new_archivio=[];

class OggettoLibro {
  constructor(titolo, autore, posizione, nominativo) {
    this.titolo = titolo;
    this.autore = autore;
    this.posizione = posizione;
    this.nominativo= nominativo;
  }
}

class OggettoArchivio {
  constructor() {
    this.oggettoLibro1 = new OggettoLibro("walt whitman", "leaves of grass", "S3L3P4", "enrica di rado");
    this.oggettoLibro2 = new OggettoLibro("antonia pozzi", "desiderio di cose leggere", "S1L5P2", "davide di rado");
    this.oggettoLibro3 = new OggettoLibro("pierluigi cappello", "stato di quiete", "S3L2P5", "");
  }
  
  myFun(btn){
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      result.innerHTML=this.responseText;
      console.log(responseText);
      
    }
    xhttp.open("POST", "https://stackblitz.com/edit/js-zfkay9?file=README.md,index.html,index.js");
    xhttp.send('keyword='+btn);
  }
}

var oggettoArchivio = new OggettoArchivio();
btnInput.keyup= oggettoArchivio.myFun(btnInput_value);
