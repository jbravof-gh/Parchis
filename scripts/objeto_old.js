/* var _objeto={}
var nombrex="Nombre",colorx="Color"
var _objeto_jugadores=[];//  [["Nombre",""],["Color","rojo"]]

_objeto_jugadores.push([nombrex,""],[colorx,""])

_objeto={"Parchis":
    [
        {"Partida":[]},
      //  {"Jugadores":[[[Nombre,"Nombre_usuario"],[Color,"Rojo"]],{}]},
      {"Jugadores":_objeto_jugadores},
        {"Fichas":[]}
    ]
}

var objeto_2 

objeto_2 = _objeto 




console.log(_objeto)
console.log(objeto_2)






localStorage.setItem("Objeto",_objeto.Parchis.Jugadores)
sessionStorage.setItem("Objeto2",objeto_2)
*/


function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  const myCar = new Car("Eagle", "Talon TSi", 1993);
  const kenscar = new Car("Nissan", "300ZX", 1992);
  const vpgscar = new Car("Mazda", "Miata", 1990);
  console.log(myCar)
  console.log(Car.length)

  console.log(Car)
  sessionStorage.setItem("car",Car.arguments)

function _Parchis(partida, jugadores, fichas) {
    this.Partida = partida
    this.Jugadores = jugadores
    this.Fichas = fichas
}


  var nombrex="Nombres",colorx="Colores"
var _objeto_jugadores=[];//  [["Nombre",""],["Color","rojo"]]

_objeto_jugadores.push([nombrex,["J1","J2","J3","J4"]],[colorx,["rojo","verde","amarillo","azul"]])
  const Parchis_Partida=new _Parchis ({Sesion:"",Fecha:"",Configuracion:{}},_objeto_jugadores)
  console.log("Parchis_Partida", Parchis_Partida)
  sessionStorage.setItem("Parchis_Partida",Parchis_Partida)
  
  var valor_10=sessionStorage.getItem(3)
 console.log(valor_10)