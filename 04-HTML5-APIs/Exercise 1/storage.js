//localStorage
function saveLocal(key, value){
  localStorage.setItem(key, value);
}

function removeLocal(key){
  localStorage.removeItem(key);
}
//indexedDB
let openRequest = indexedDB.open("dataBase", 1);
let db;

openRequest.onerror = function(event){
  alert("Database error: " + event.target.errorCode)
};

openRequest.onsuccess = function(event){
  db = openRequest.result;
};

openRequest.onupgradeneeded = function(event){ 
  db = openRequest.result;

  // objeto puede contener cualquier tipo de valor. La clave es generada automáticamente, o se puede indicar un argumento de clave distinto si se quiere usar una clave específica.
  db.createObjectStore("text-to-store");
};

function saveIndexedDB(key, value){
  var transaction = db.transaction([key], "readwrite");
  var target = transaction.objectStore(key)
  target.put(value, key);
}

function removeIndexedDB(key, value){
  var transaction = db.transaction([key], "readwrite");
  var target = transaction.objectStore(key);
  target.delete(value);
}

const textArea = document.getElementById("text-area");
const storeButton = document.getElementById("store-button");
const clearButton = document.getElementById("clear-button");

function saveText(event){
  event.preventDefault();
  saveLocal("text-to-store", textArea.value);
  saveIndexedDB("text-to-store", textArea.value);
}

function removeText(event){
  event.preventDefault();
  removeLocal("text-to-store");
  saveIndexedDB("text-to-store", textArea.value);
}
