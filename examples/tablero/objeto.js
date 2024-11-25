
var _objeto_jugadores =JSON.parse(sessionStorage.getItem("jugadores"))// [];

var _objeto_colores=["amarillo","azul","rojo","verde"]
var _objeto_partida = [];

var _objeto_fichas=[];




_objeto_partida.push({ Sesion: "1", Fecha:"", Configuracion: JSON.parse(sessionStorage.getItem("Lista_Configuracion")) })
_objeto_partida[0].Fecha= new Date().toLocaleDateString()  //("1/1/2020")
  const Parchis_Partida = new _Parchis(_objeto_partida, _objeto_jugadores, _objeto_fichas)
function start() {
  _objeto_fichas.splice(0, _objeto_fichas.length);

  
  
  for (let x = 0; x < 16; x++) {
    //const element = _objeto_fichas[x];
    _objeto_fichas.push([["id", document.getElementsByClassName("ficha")[x].id], ["posicion", document.getElementsByClassName("ficha")[x].getAttribute("posicion")]])

  }

  //  _objeto_jugadores.push(["Nombres", ["J1", "J2", "J3", "J4"]])
  //_objeto_jugadores.push(["Colores", ["rojo", "verde", "amarillo", "azul"]])
  console.log("Parchis_Partida", Parchis_Partida)
  sessionStorage.setItem("Parchis_Partida", JSON.stringify(Parchis_Partida))



  const jsonString = JSON.stringify(Parchis_Partida);
  console.log("jsonString", jsonString)
  //sessionStorage.setItem("jsonString", jsonString)

  const jsonobject = JSON.parse(jsonString)
  console.log("jsonobject", jsonobject)
  // sessionStorage.setItem("jsonobject", jsonobject)

  var valor_10 = sessionStorage.getItem("Objeto2")
  console.log("Objeto2", valor_10)
}
function alert_01() {
  const Parchis_Partida2 = new _Parchis(_objeto_partida, _objeto_jugadores, _objeto_partida)
  sessionStorage.setItem("Sesion2-partida-sesion", Parchis_Partida2.Partida[0].Sesion)
  sessionStorage.setItem("Sesion2", Parchis_Partida2.Partida[0].Jugadores)

  alert(Parchis_Partida2.Jugadores.Nombres)
  // let products = JSON.parse(Parchis_Partida);
}

function _Parchis(partida, jugadores, fichas) {
  this.Partida = partida
  this.Jugadores = jugadores
  this.Fichas = fichas
  this.adjunta=function(){alert(99)}
  // Cat.meow=function(){return "Meow!"};
  // return Cat;

}


// Animal properties and method encapsulation
const Animal = {
  type: "Invertebrates", // Default value of properties
  displayType() {
    // Method which will display type of Animal
    console.log(this.type);
  },
};



function crear_objeto2(){
  // Create new animal type called animal1
const animal1 = Object.create(Animal);
animal1.displayType(); // Logs: Invertebrates

// Create new animal type called fish
const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Logs: Fishes

///-----------------------

const myObj = {};
const str = "myString";
const rand = Math.random();
const anotherObj = {};

// Create additional properties on myObj
myObj.type = "Dot syntax for a key named type";
myObj["date created"] = "This key has a space";
myObj[str] = "This key is in variable str";
myObj[rand] = "A random number is the key here";
myObj[anotherObj] = "This key is object anotherObj";
myObj[""] = "This key is an empty string";

console.log("myObj", myObj);
// {
//   type: 'Dot syntax for a key named type',
//   'date created': 'This key has a space',
//   myString: 'This key is in variable str',
//   '0.6398914448618778': 'A random number is the key here',
//   '[object Object]': 'This key is object anotherObj',
//   '': 'This key is an empty string'
// }
console.log(myObj.myString); // 'This key is in variable str'
}
  const Obj_Parchis = {};
function crear_objeto(){

const str = "PArtida";
const rand = Math.random();
const anotherObj = {};
Obj_Parchis.clave1="nueva clave"
Obj_Parchis[str]={ Sesion: "1", Fecha:"1/1/2020", Configuracion: {} }

console.log("Obj_Parchis", Obj_Parchis);
const jsonString = JSON.stringify(Obj_Parchis);
console.log("jsonString_Obj_Parchis", jsonString)
sessionStorage.setItem("jsonString_Obj_Parchis  ", jsonString)
Obj_Parchis.clave1="nueva clave2"
console.log("Obj_Parchis", Obj_Parchis);
}

function run01(){
  Obj_Parchis.clave1="nueva clave2ddddd"
console.log("Obj_Parchis", Obj_Parchis);
Parchis_Partida.adjunta
}


