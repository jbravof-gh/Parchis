// function display(event) {
//     let X = event.clientX;
//     let result = document.getElementById("result");
//     result.innerHTML = "<b>X-coordinate: </b>" + X;
// }
jQuery(".celda").mouseover(function (event) {
    //$(this.href).show();
    //  alert(this.id)
    console.log("position", this.style)
    let X = event.clientX;
    let Y = event.clientY;
    var valor_pass = this.id || this.innerHTML
    try { document.getElementById("input_1").value = "Celda: " + valor_pass + " - Pos_x: " + X + " - Pos_y: " + Y + " offset-left: " + this.offsetLeft + " offset-top: " + this.offsetTop }

    catch { alert(this); }

});
$(".ficha_control").draggable();

function vete_casilla(){
    var texto_pass_x=document.getElementById(input_casilla.value).offsetLeft
    var texto_pass_y=document.getElementById(input_casilla.value).offsetTop

 //   alert("left: " + texto_pass_x+ "top: " + texto_pass_y)
//     document.getElementsByClassName("ficha_control")[0].style.left=texto_pass_x + "px"
//  document.getElementsByClassName("ficha_control")[0].style.top=texto_pass_y + "px"
var text_origen=document.getElementById("ficha_select").value
document.getElementById(text_origen).style.left=texto_pass_x + "px"
document.getElementById(text_origen).style.top=texto_pass_y + "px"
document.getElementById(text_origen).setAttribute("Posicion",input_casilla.value)
document.getElementById(text_origen).setAttribute("Title",("ficha: " + text_origen + " Posicion: " + input_casilla.value))

}       

function haz_mapa(){
    alert(document.getElementsByClassName("tablero")[0].outerHTML)
    document.getElementsByClassName("mapa")[0].innerHTML=document.getElementsByClassName("tablero")[0].innerHTML
}
function ubicacion_fichas() {
    for (j = 1; j < 68; j++) {

        input_casilla.innerHTML+="<option>" + j + "</option>"

    }



    // amarillas
    var text_origen=document.getElementById("401")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("amarillas_1").style.left=(texto_pass_x +20) + "px"
    document.getElementById("amarillas_1").style.top=(texto_pass_y + 20) + "px"

    document.getElementById("amarillas_1").setAttribute("Posicion","401")


    text_origen=document.getElementById("402")
    texto_pass_x=text_origen.offsetLeft
    texto_pass_y=text_origen.offsetTop

       document.getElementById("amarillas_2").style.left=texto_pass_x + 20 + "px"
    document.getElementById("amarillas_2").style.top=texto_pass_y  + 20 + "px"

    document.getElementById("amarillas_2").setAttribute("Posicion","402")


    text_origen=document.getElementById("403")
    texto_pass_x=text_origen.offsetLeft
    texto_pass_y=text_origen.offsetTop

       document.getElementById("amarillas_3").style.left=texto_pass_x + 20  + "px"
    document.getElementById("amarillas_3").style.top=texto_pass_y  + 20 + "px"

    document.getElementById("amarillas_3").setAttribute("Posicion","403")


    text_origen=document.getElementById("404")
    texto_pass_x=text_origen.offsetLeft
    texto_pass_y=text_origen.offsetTop

       document.getElementById("amarillas_4").style.left=texto_pass_x + 20  + "px"
    document.getElementById("amarillas_4").style.top=texto_pass_y + 20  + "px"

    document.getElementById("amarillas_4").setAttribute("Posicion","404")
    document.getElementById("amarillas_4").setAttribute("Title","404")


    // azules
    var text_origen=document.getElementById("201")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("azules_1").style.left=texto_pass_x  + 20  + "px"
    document.getElementById("azules_1").style.top=texto_pass_y  + 20  + "px"

    document.getElementById("azules_1").setAttribute("Posicion","201")

    var text_origen=document.getElementById("202")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("azules_2").style.left=texto_pass_x + 20   + "px"
    document.getElementById("azules_2").style.top=texto_pass_y + 20   + "px"

    document.getElementById("azules_2").setAttribute("Posicion","202")

    var text_origen=document.getElementById("203")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("azules_3").style.left=texto_pass_x  + 20  + "px"
    document.getElementById("azules_3").style.top=texto_pass_y  + 20  + "px"

    document.getElementById("azules_3").setAttribute("Posicion","203")

    var text_origen=document.getElementById("204")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("azules_4").style.left=texto_pass_x  + 20  + "px"
    document.getElementById("azules_4").style.top=texto_pass_y  + 20  + "px"

    document.getElementById("azules_4").setAttribute("Posicion","204")

    // rojas
    var text_origen=document.getElementById("101")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("rojas_1").style.left=texto_pass_x + 20   + "px"
    document.getElementById("rojas_1").style.top=texto_pass_y + 20   + "px"

    document.getElementById("rojas_1").setAttribute("Posicion","101")

    var text_origen=document.getElementById("102")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("rojas_2").style.left=texto_pass_x + 20   + "px"
    document.getElementById("rojas_2").style.top=texto_pass_y + 20   + "px"

    document.getElementById("rojas_2").setAttribute("Posicion","102")

    var text_origen=document.getElementById("103")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("rojas_3").style.left=texto_pass_x + 20   + "px"
    document.getElementById("rojas_3").style.top=texto_pass_y + 20   + "px"

    document.getElementById("rojas_3").setAttribute("Posicion","103")

    var text_origen=document.getElementById("104")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("rojas_4").style.left=texto_pass_x  + 20  + "px"
    document.getElementById("rojas_4").style.top=texto_pass_y  + 20  + "px"

    document.getElementById("rojas_4").setAttribute("Posicion","104")
    // verdes
    var text_origen=document.getElementById("301")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("verdes_1").style.left=texto_pass_x + 20   + "px"
    document.getElementById("verdes_1").style.top=texto_pass_y  + 20  + "px"

    document.getElementById("verdes_1").setAttribute("Posicion","301")

    var text_origen=document.getElementById("302")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("verdes_2").style.left=texto_pass_x + 20   + "px"
    document.getElementById("verdes_2").style.top=texto_pass_y + 20   + "px"

    document.getElementById("verdes_2").setAttribute("Posicion","302")

    var text_origen=document.getElementById("303")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("verdes_3").style.left=texto_pass_x + 20   + "px"
    document.getElementById("verdes_3").style.top=texto_pass_y  + 20  + "px"

    document.getElementById("verdes_3").setAttribute("Posicion","303")

    var text_origen=document.getElementById("304")
    var texto_pass_x=text_origen.offsetLeft
    var texto_pass_y=text_origen.offsetTop
    
    document.getElementById("verdes_4").style.left=texto_pass_x  + 20  + "px"
    document.getElementById("verdes_4").style.top=texto_pass_y  + 20  + "px"

    document.getElementById("verdes_4").setAttribute("Posicion","304")
}
construir_fichas();
document.getElementById("pantalla1").innerHTML += fichero;
$(".ficha").draggable();
$(".caja_fichas").draggable();
ubicacion_fichas()

