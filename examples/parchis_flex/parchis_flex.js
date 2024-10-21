var fichero = "";

function construir_fichas() {

    var colores;

    colores = ["amarillas", "azules", "rojas", "verdes"];

    for (i = 0; i < colores.length; i++) {

 

        for (j = 0; j < 4; j++) {

            fichero += "<nav posicion='' onclick='console.log(this.id);input_select.value=this.id;input_select2.value=this.posicion'  class='ficha fichas_"
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

}      

function mueve_ficha(ficha_id,celda_id){
    var celda_x = document.getElementById(celda_id).offsetLeft
    var celda_y = document.getElementById(celda_id).offsetTop
    var ficha_origen = document.getElementById(ficha_id).id

    document.getElementById(ficha_origen).style.left = celda_x + "px"
    document.getElementById(ficha_origen).style.top = celda_y + "px"
    document.getElementById(ficha_origen).setAttribute("Posicion", celda_id)
    document.getElementById(ficha_origen).setAttribute("Title", ("ficha: " + ficha_origen + " Posicion: " + celda_id))


}
//alert(document.getElementsByTagName("template")[0].innerHTML)
document.getElementById("div_tablero").innerHTML=document.getElementsByTagName("template")[1].innerHTML
//document.getElementById("div_tools").innerHTML+=document.getElementsByTagName("template")[2].innerHTML

construir_fichas();
document.getElementById("pantalla1").innerHTML += fichero;
$(".ficha").draggable();
$(".caja_fichas").draggable();
ubica_fichas()
$(".ficha_control").draggable();

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

//
