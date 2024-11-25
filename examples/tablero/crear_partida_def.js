var _objeto_fichas=[];
var _objeto_partida = [];
//var _objeto_jugadores=[];
var _objeto_jugadores= JSON.parse(sessionStorage.getItem("jugadores"))

const Parchis_Partida = new parchis_objeto(_objeto_partida, _objeto_jugadores, _objeto_fichas)
function crear_partida_parchis(){
//******************************************************** */
//
//  C O N F I G U R A C I O N
//
//********************************************************* */


const lista_configuracion=[]
const lista_specs=

{
    W_Outerwidth:window.outerWidth,
    W_Outerheight:window.outerHeight,
    W_Innerwidth:window.innerWidth,
    W_Innerheight:window.innerHeight,
    Body_offsetWidth:window.document.body.offsetWidth,
    Body_offsetHeight:window.document.body.offsetHeight
}

lista_configuracion.push
    (
        ["Host",window.location.host],
        [
            "HostName",
            window.location.hostname
        ],
        [
            "location", window.location
        ],
        [
            "href", window.location.href
        ], 
        ["pathname", location.pathname], 
        ["origin", location.origin]
    )
// lista_configuracion.push(
//     [
//         "Metrics2",
//         JSON.stringify(lista_specs)
//     ]
// )

//sessionStorage.setItem("Lista_Array",JSON.stringify(lista_array))
// sessionStorage.setItem("Lista_Configuracion",
//     JSON.stringify(
//         {
//             "Nombre":"--",
//              _2cuerpo:lista_configuracion,
//               _3bottom:lista_specs
        
//         }
    
//     )

// )

//******************************************************** */
//
//  J U G A D O R E S 
//
//********************************************************* */

 _objeto_jugadores = JSON.parse(sessionStorage.getItem("jugadores"))// [];
//try{rellena_select(JSON.parse(sessionStorage.getItem('jugadores')))}catch{alert('no jugadores')}

//******************************************************** */
//
//  C O L O R E S 
//
//********************************************************* */
var _objeto_colores=["amarillo","azul","rojo","verde"]

//******************************************************** */
//
//  F I C H A S
//
//********************************************************* */


//******************************************************** */
//
//  P A R T I D A 
//
//********************************************************* */


_objeto_partida.push(
    { 
        Sesion: "1", 
        Fecha:"", 
        Configuracion: 
        JSON.parse(JSON.stringify(
            {
                "Nombre":"--",
                 _2cuerpo:lista_configuracion,
                  _3bottom:lista_specs
            
            }
        
        )
    )

        //JSON.parse(sessionStorage.getItem("Lista_Configuracion")) 
    }
)
_objeto_partida[0].Fecha= new Date().toLocaleDateString()  //("1/1/2020")

//******************************************************** */
//
//  P A R C H I S 
//
//********************************************************* */

console.log("Parchis_Partida", Parchis_Partida)
crear_fichas_parchis()
_objeto_jugadores = JSON.parse(sessionStorage.getItem("jugadores"))
sessionStorage.setItem("Parchis_Partida", JSON.stringify(Parchis_Partida))

}
function parchis_objeto(partida, jugadores, fichas) {
    this.Partida = partida
    this.Jugadores = jugadores
    this.Fichas = fichas
    partida.adjunta=function(){alert(99)}
    // Cat.meow=function(){return "Meow!"};
    // return Cat;
  
  }

  function crear_fichas_parchis(){

    try{
    _objeto_fichas.splice(0, _objeto_fichas.length);
 
        for (let x = 0; x < 16; x++) {
        //const element = _objeto_fichas[x];
        _objeto_fichas.push(
            [
                ["id", document.getElementsByClassName("ficha")[x].id],
                 ["posicion", document.getElementsByClassName("ficha")[x].getAttribute("posicion")],
                 ["casa","y"],
                 ["tiradas",0],

            ]
        )

        }
    }
    catch{
        alert("no fichas")
    }
  }
  function add_player(){
    var nombre_texto = prompt("Please enter your name", "Jugador ");
    var color_texto = prompt("Please enter your color", "color ");
    var new_array2=[]
    try{
      //  partida.adjunta()
     new_array2=Array.from(JSON.parse(sessionStorage.getItem("jugadores"))) 
    
    
    //var new_array=[]
    new_array2.push([["nombre",nombre_texto],["color",color_texto]])
    //new_array[0][1][1]="amarillas"
    
    
    
    }
    
    catch{
    alert("error")
   // parchis_objeto.Partida.adjunta
     new_array2=[]
    new_array2.push([["nombre",nombre_texto],["color",color_texto]])        
    
    //sessionStorage.setItem("jugadores",JSON.stringify(new_array2))
    }
    sessionStorage.setItem("jugadores",JSON.stringify(new_array2))
    //_objeto_jugadores = JSON.parse(JSON.stringify(new_array2))

    rellena_select(JSON.parse(sessionStorage.getItem('jugadores')))
    //document.body.getElementsByTagName("select")[0].value=""
    
    }
    function update_nombre(numero_pass){
    var new_array2=Array.from(JSON.parse(sessionStorage.getItem("jugadores")))
    //var new_array=[]
    //new_array2.push([["nombre",nombre_texto],["color",color_texto]])
    new_array2[numero_pass][0][1]=input_nombre.value
    
    
    
    sessionStorage.setItem("jugadores",JSON.stringify(new_array2))
    rellena_select(JSON.parse(sessionStorage.getItem("jugadores")))
    document.getElementsByTagName("main")[0].getElementsByTagName("select")[0].value=""
    
    }
    function update_color(numero_pass){
        var new_array2=Array.from(JSON.parse(sessionStorage.getItem("jugadores")))
        //var new_array=[]
        //new_array2.push([["nombre",nombre_texto],["color",color_texto]])
        new_array2[numero_pass][1][1]=input_color.value
        
        
        
        sessionStorage.setItem("jugadores",JSON.stringify(new_array2))
        rellena_select(JSON.parse(sessionStorage.getItem("jugadores")))
        document.getElementsByTagName("main")[0].getElementsByTagName("select")[0].value=""
        
        }
        function select_change(position_pass){
            //alert(position_pass)
        
            //alert((JSON.parse(sessionStorage.getItem("jugadores")))[position_pass][0][1])
            input_nombre.value=(JSON.parse(sessionStorage.getItem("jugadores")))[position_pass-1][0][1]
            input_color.value=(JSON.parse(sessionStorage.getItem("jugadores")))[position_pass-1][1][1]
            input_id.value=position_pass-1
            //document.getElementById("input_id").value=position_pass-1
        
        }
        
        function rellena_select(array_pass2){

            try{
          //  alert(array_pass2)
            let array_pass=Array.from(JSON.parse(sessionStorage.getItem(array_pass2)))
        //document.getElementsByTagName("main")[0].getElementsByTagName("select")[0].innerHTML=""
        document.body.getElementsByTagName("select")[0].innerHTML=""
        
        for (let j = 0; j < array_pass.length; j++) {
            const element = array_pass[j];
           //document.getElementsByTagName("main")[0].getElementsByTagName("select")[0].innerHTML+="<option>"+(j+1)+"</option>"
           document.body.getElementsByTagName("select")[0].innerHTML+="<option>"+(j+1)+"</option>"
        
        
        }
        //document.getElementsByTagName("main")[0].getElementsByTagName("select")[0].value=""
        _objeto_jugadores=JSON.parse(sessionStorage.getItem("jugadores"))//Array.from(sessionStorage.getItem(array_pass2))

        }
        catch{
            alert("no jugador")
        }
        }
        




    
 
 // sessionStorage.setItem("Parchis_Partida", JSON.stringify(Parchis_Partida))
  //crear_partida_parchis()