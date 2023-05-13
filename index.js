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

btnInput.onkeyup= oggettoArchivio.myFun(btnInput.value);
*/
const result = document.getElementById('result');
const btnInput = document.getElementById('btnInput');

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
    while(new_archivio.length > 0) {
      new_archivio.pop();
    }
    for (let x in this){
      for (let y in this[x]){
        if (this[x][y].match(btn)){
          new_archivio.push(this[x][y]);
          console.log(new_archivio);
        }
      }
    }
  }
}

var oggettoArchivio = new OggettoArchivio();
btnInput.addEventListener('keyup', function(){
  oggettoArchivio.myFun(btnInput.value);
  if(new_archivio.length==1){
    result.innerHTML=new_archivio[0];
  }
});
result.innerHTML=new_archivio;




/*codice search box
var searchBox = document.getElementById('search_box');
searchBox.addEventListener('keyup', function(){
    console.log(searchBox.value);
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      result.innerHTML='okr';
      
    }
    xhttp.open("GET", "e.html");
    xhttp.send();
    console.log(this.responseText);
});

*/
