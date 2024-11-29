const lista_configuracion=[]
const lista_specs=

{
    W_Outerwidth:window.outerWidth,
    W_Outerheight:window.outerHeight,
    W_Innerwidth:window.innerWidth,
    W_Innerheight:window.innerHeight,
   // Body_offsetWidth:window.document.body.offsetWidth,
    //Body_offsetHeight:window.document.body.offsetHeight
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

//lista_configuracion.push(["Specs",lista_specs])

const  obj_jugadores={
    "0-Objeto":"Jugadores",
    "Jugador":[],
    config:{}
  }

  const obj_fichas={
    "0-Objeto":"Fichas",
    "Ficha":["","","",""]
  }

  const obj_config={
    "0-Objeto":"Configuracion",
    "Lista":lista_configuracion,
    "Specs":lista_specs
  }

  const obj_partida = {};
//   const texto = "myString";
//   const aleatorio = Math.random();
  
  



  
  console.log("obj_partida", obj_partida);

  function crear_partida(){
    // Create additional properties on myObj
  obj_partida["0-Objeto"] = "Partida";
  obj_partida["Nombre"] = input_data_name.value;

  obj_partida["dateCreated"] =input_data_date.value// new Date().toLocaleDateString() ;

//   obj_partida["dateCreated"] = new Date().toLocaleDateString() ;

  obj_partida["Tipo"] = input_data_tipo.value;
    //   obj_partida[aleatorio] = "A random number is the key here";
    obj_partida["Jugadores"] = obj_jugadores;
    obj_partida["Fichas"] = obj_fichas;


    obj_partida["30-Configuracion"] = obj_config;
    sessionStorage.setItem(input_data_name.value,JSON.stringify(obj_partida))

  }


  function test_01(){

    
     const objeto_selected=JSON.parse(sessionStorage.getItem(input_data_name.value))
     // textarea_id.value+="Length: " + Array.from(sessionStorage.getItem("obj_partida")).length + "\n"
    const getNumberOfProperties = (obj) => {
        return Object.keys(obj).length;
      };
      
      const count = getNumberOfProperties(objeto_selected);
      console.log(count); // Result: 4
          textarea_id.value+="Length Obj Keys: " + count + "\n" + "______" + "\n" 

          Array.from(Object.keys(objeto_selected)).forEach(element => {
            textarea_id.value+="Key : " + element + "\n"

          });
          //  const valo_q=prompt("Date",objeto_selected.dateCreated)
           // objeto_selected.dateCreated=valo_q

          sessionStorage.setItem(input_data_name.value,JSON.stringify(objeto_selected))

  }

  $("#master").resizable();
  $("#master").draggable();
jQuery(".h3").click(function (event) {
    var c1=this.parentElement.getElementsByClassName("panel")[0]
    // alert(this.parentElement.getElementsByClassName("panel")[0].style)
//     alert(c1.style.display)
    if(c1.style.display==""){c1.style="display:none !important;"}else{c1.style.display=""}
  //  alert(c1)
   // $(event).toggle();
    // this.parentElement.getElementsByClassName("panel")[0].innerHTML.toggl
})


