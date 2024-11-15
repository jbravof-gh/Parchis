// document.getElementById("main_content").innerHTML=document.head.getElementsByTagName("template")[3].innerHTML
// document.getElementsByTagName("header")[0].getElementsByTagName("div")[0].innerHTML=document.head.getElementsByTagName("template")[4].innerHTML
// document.getElementsByTagName("header")[0].getElementsByTagName("div")[1].innerHTML=document.head.getElementsByTagName("template")[5].innerHTML
// document.getElementsByTagName("header")[0].getElementsByTagName("div")[2].innerHTML=document.head.getElementsByTagName("template")[6].innerHTML
// document.getElementsByTagName("nav")[0].innerHTML=document.head.getElementsByTagName("template")[7].innerHTML
// // document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].innerHTML=document.head.getElementsByTagName("template")[8].innerHTML
// document.getElementsByTagName("main")[0].innerHTML=document.head.getElementsByTagName("template")[10].innerHTML
// document.getElementsByTagName("main")[0].innerHTML+=document.head.getElementsByTagName("template")[11].innerHTML
// document.getElementsByTagName("main")[0].getElementsByTagName("div")[13].innerHTML+=document.head.getElementsByTagName("template")[12].innerHTML
// //document.getElementsByTagName("footer")[0].innerHTML+=document.head.getElementsByTagName("template")[12].innerHTML

// $(".ficha").draggable();

//rellena_select(JSON.parse(sessionStorage.getItem('jugadores')))

const lista_array=[]
const lista_metrics=[]

const lista_specs={W_Outerwidth:window.outerWidth,W_Outerheight:window.outerHeight,W_Innerwidth:window.innerWidth,W_Innerheight:window.innerHeight,Body_offsetWidth:window.document.body.offsetWidth,Body_offsetHeight:window.document.body.offsetHeight}

lista_array.push(["Host",window.location.host],["HostName",window.location.hostname],["location",window.location],["href",window.location.href],["pathname",location.pathname],["origin",location.origin])
//    lista_metrics.push(["<div class='bg-danger'>Width: </div>",("<div class='bg-warning'>"+window.document.body.offsetWidth+"</div>")],["<div class='bg-danger'> Height: </div>",window.document.body.offsetHeight],["<div class='bg-danger'>  Top: </div>",window.document.body.offsetTop])
//    lista_metrics.push(["Width",["div",["div","yy"]]])
//lista_metrics.push(["<div>","hola","</div>"])
lista_metrics.push(["Width:",window.document.body.offsetWidth])
lista_metrics.push(["Height:",window.document.body.offsetHeight],[" Top:",window.document.body.offsetTop])

//lista_array.push(["Metrics",lista_metrics])
lista_array.push(["Metrics2",JSON.stringify(lista_specs)])
// for (let i = 0; i < lista_array.length; i++) {
//     const element = lista_array[i][0];
//     const element2 = lista_array[i][1];

//    document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].innerHTML+=document.head.getElementsByTagName("template")[8].innerHTML
//     document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].getElementsByTagName("div")[i*3].getElementsByTagName("div")[0].innerHTML=element //lista_array[i]
//     document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].getElementsByTagName("div")[i*3].getElementsByTagName("div")[1].innerHTML=element2 //lista_array[i]
// } 

// //alert(JSON.stringify(lista_specs).split(",").length)
//  document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].innerHTML=""
//  document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].setAttribute("class",(( document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].getAttribute("class"))+" d-flex gap-1 ")) //.style="background-color:black;"

for (let p = 0; p < JSON.stringify(lista_specs).split(",").length; p++) {
   // const element = array[p];
  //  document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].innerHTML+=document.head.getElementsByTagName("template")[8].innerHTML
 // document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].innerHTML=""
 // document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].innerHTML+="<div class='d-flex gap-0 border-0 mb-0 gap-1'><div class='bg-danger bg-gradient text-warning flex-grow-1'>"+(p+1)+" - " + JSON.stringify(lista_specs).split(",")[p].split(":")[0].replace('{','').replace('"','').replace('"','')   + "</div>" + "<div class='btn btn-sm w-25 bg-primary bg-gradient text-white p-0'>" + JSON.stringify(lista_specs).split(",")[p].split(":")[1].replace('}','') + "</div></div>"
  //document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].innerHTML+="<div>" + JSON.stringify(lista_specs).split(",")[p].split(":")[1] + "</div>"

  //document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].innerHTML+=lista_specs.W_height

}



// document.getElementsByTagName("nav")[0].getElementsByTagName("div")[2].getElementsByTagName("div")[i*3].getElementsByTagName("div")[1].innerHTML=lista_array[lista_array.length-1][1] //element2 //lista_array[i]



sessionStorage.setItem("Lista_Array",JSON.stringify(lista_array))
sessionStorage.setItem("Lista_Configuracion",JSON.stringify({"Nombre":"--", _2cuerpo:lista_array, _3bottom:lista_specs}))

function select_change(position_pass){
    //alert(position_pass)

    //alert((JSON.parse(sessionStorage.getItem("jugadores")))[position_pass][0][1])
    input_nombre.value=(JSON.parse(sessionStorage.getItem("jugadores")))[position_pass-1][0][1]
    input_color.value=(JSON.parse(sessionStorage.getItem("jugadores")))[position_pass-1][1][1]
    input_id.value=position_pass-1
    //document.getElementById("input_id").value=position_pass-1

}

function rellena_select(array_pass){
//document.getElementsByTagName("main")[0].getElementsByTagName("select")[0].innerHTML=""
document.getElementsByTagName("select")[0].innerHTML=""

for (let j = 0; j < array_pass.length; j++) {
    const element = array_pass[j];
   //document.getElementsByTagName("main")[0].getElementsByTagName("select")[0].innerHTML+="<option>"+(j+1)+"</option>"
   document.getElementsByTagName("select")[0].innerHTML+="<option>"+(j+1)+"</option>"


}
//document.getElementsByTagName("main")[0].getElementsByTagName("select")[0].value=""

}

function add_player(){
var nombre_texto = prompt("Please enter your name", "Jugador ");
var color_texto = prompt("Please enter your color", "color ");
var new_array2=[]
try{
 new_array2=Array.from(JSON.parse(sessionStorage.getItem("jugadores"))) 


//var new_array=[]
new_array2.push([["nombre",nombre_texto],["color",color_texto]])
//new_array[0][1][1]="amarillas"



}

catch{
alert("error")
 new_array2=[]
new_array2.push([["nombre",nombre_texto],["color",color_texto]])        

//sessionStorage.setItem("jugadores",JSON.stringify(new_array2))
}
sessionStorage.setItem("jugadores",JSON.stringify(new_array2))

rellena_select(JSON.parse(sessionStorage.getItem('jugadores')))
document.getElementsByTagName("main")[0].getElementsByTagName("select")[0].value=""

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
function myFunction() {
let text;
if (confirm("Quieres Borrar") == true) {
    text = "You pressed OK!";
    //alert((JSON.parse(sessionStorage.getItem("jugadores")))[input_id.value][0][1])
    const  new_array3=JSON.parse(sessionStorage.getItem("jugadores"))
    new_array3.splice(input_id.value,1)
    sessionStorage.setItem("jugadores",JSON.stringify(new_array3))
    rellena_select(JSON.parse(sessionStorage.getItem('jugadores')))
    document.getElementsByTagName("main")[0].getElementsByTagName("select")[0].value=""
} else {
    text = "You canceled!";


}
//document.getElementById("demo").innerHTML = text;
//alert(text)
}

function pregunta_01(){
var person = prompt("Please enter your name", "Harry Potter");
    if (person != null) {
   // document.getElementById("demo").innerHTML =
  alert(  "Hello " + person + "! How are you today?");
                let inputs = [];
        for (let i = 0; i < 3; i++) {
            inputs.push(prompt(`Enter input ${i + 1}:`));
        }
        console.log(inputs);
    }
}
