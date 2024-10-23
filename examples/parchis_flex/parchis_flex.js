var fichero = "";

function construir_fichas() {

    var colores;

    colores = ["amarillas", "azules", "rojas", "verdes"];

    for (i = 0; i < colores.length; i++) {

 

        for (j = 0; j < 4; j++) {

            fichero += "<nav posicion='' onclick='run_ficha(this.id)'  class='ficha fichas_"
            fichero += colores[i];
            fichero += "' id='";

            fichero += colores[i] + "_" + (4 - j);
         //  ficha_select.innerHTML+="<option class='border m-2' >"+ colores[i] + "_" + (4 - j) + "</option>";

            fichero += "' "
            fichero += 'data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"'
            fichero +=" >";


            fichero +=(4 - j)
            fichero += "</nav>";
        }


    }

  


}

function vete_casilla() {
    var texto_pass_x = document.getElementById(input_select2.value).offsetLeft
    var texto_pass_y = document.getElementById(input_select2.value).offsetTop

    var text_origen = document.getElementById("input_select").value
    document.getElementById(text_origen).style.left = texto_pass_x + "px"
    document.getElementById(text_origen).style.top = texto_pass_y + "px"
    document.getElementById(text_origen).setAttribute("Posicion", input_select2.value)
    document.getElementById(text_origen).setAttribute("Title", ("ficha: " + text_origen + " Posicion: " + input_select2.value))
    document.getElementById (text_origen + "_log").innerHTML=input_select2.value
    document.getElementById("radio_"+text_origen).click()
var texto_pass=document.getElementById(input_select.value).innerHTML
    log_move(input_select2.value + " - " + text_origen )
    badge_fichas.innerHTML=input_select.value
    badge_seleccion.innerHTML= input_select2.value

}       

function mueve_ficha(ficha_id,celda_id){
    var celda_x = document.getElementById(celda_id).offsetLeft
    var celda_y = document.getElementById(celda_id).offsetTop
    var ficha_origen = document.getElementById(ficha_id).id

    document.getElementById(ficha_origen).style.left = celda_x + "px"
    document.getElementById(ficha_origen).style.top = celda_y + "px"
    document.getElementById(ficha_origen).setAttribute("Posicion", celda_id)
    document.getElementById(ficha_origen).setAttribute("Title", ("ficha: " + ficha_origen + " Posicion: " + celda_id))
   // verdes_4_log.innerHTML=celda_id
 document.getElementById (ficha_id + "_log").innerHTML=celda_id
  document.getElementById("radio_"+ficha_id).click()

  badge_fichas.innerHTML=ficha_id
  badge_seleccion.innerHTML= celda_id // document.getElementById(id_pass).getAttribute("Posicion")

}
function recalcula_casilla(){

    for (j = 0; j < 16; j++) {

var ficha_sel=document.getElementsByClassName("ficha")[j]
var pos_sel=ficha_sel.getAttribute("Posicion")
     mueve_ficha(ficha_sel.id,pos_sel)
    }
}
//alert(document.getElementsByTagName("template")[0].innerHTML)
document.getElementById("div_tablero").innerHTML=document.getElementsByTagName("template")[4].innerHTML
//document.getElementById("div_tools").innerHTML+=document.getElementsByTagName("template")[2].innerHTML

construir_fichas();
document.getElementById("pantalla1").innerHTML += fichero;
$(".ficha").draggable();
$(".caja_fichas").draggable();
ubica_fichas()
$(".ficha_control").draggable();
$("#panel_log").draggable();
$("#panel_log").resizable();

$("#panel_fi_se").resizable();
$("#panel_fi_se").draggable();







jQuery(".celda").click(function (event) {
    //$(this.href).show();
    //  alert(this.id)
    console.log("position", this.style)
    let X = event.clientX;
    let Y = event.clientY;
    var valor_pass = this.id || this.innerHTML
    try { 
        // document.getElementById("input_1").value = "Celda: " + valor_pass + " - Pos_x: " + X + " - Pos_y: " + Y + " offset-left: " + this.offsetLeft + " offset-top: " + this.offsetTop 
        input_select2.value=valor_pass

      //  try{alert(mueve_auto.checked)}
            try{ if (mueve_auto.checked==true) {document.getElementById("boton_mueve").click()} }
            catch{}

    }

    catch { alert(this); }
    

});
jQuery(".form-check-input").click(function (event) {
    //$(this.href).show();
    //  alert(this.id)
    console.log("position", this.style)
    let X = event.clientX;
    let Y = event.clientY;
    var valor_pass = this.id || this.innerHTML
    try { 
        // document.getElementById("input_1").value = "Celda: " + valor_pass + " - Pos_x: " + X + " - Pos_y: " + Y + " offset-left: " + this.offsetLeft + " offset-top: " + this.offsetTop 
        input_select2.value=valor_pass
        input_select.value=this.value
        input_select2.value=document.getElementById(this.value).getAttribute("Posicion")

    }

    catch { alert(this); }

});

//recalcula_casilla()

//
