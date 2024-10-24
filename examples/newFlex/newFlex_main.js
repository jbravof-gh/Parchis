
// Carga de plantillas

function carga_plantillas(){

    document.getElementById("panel-div-body_1").innerHTML = document.getElementsByTagName("template")[0].innerHTML
    document.getElementById("panel-div-body_2").innerHTML = document.getElementsByTagName("template")[4].innerHTML
    document.getElementById("panel-div-body_3").innerHTML = document.getElementsByTagName("template")[3].innerHTML

}

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
            fichero += " >";


            fichero += (4 - j)
            fichero += "</nav>";
            // log_move( (colores[i] + "_" + (4 - j)+"_log") + " - " + (colores[i] + "_" + (4 - j)) )
        }
        


    }


    document.getElementById("pantalla1").innerHTML += fichero;

}

function ubicacion(){
    mueve_ficha("amarillas_1", "amarillas_1_log")
    mueve_ficha("amarillas_2", "amarillas_2_log")
    mueve_ficha("amarillas_3", "amarillas_3_log")
    mueve_ficha("amarillas_4", "amarillas_4_log")

    mueve_ficha("verdes_1", "verdes_1_log")
    mueve_ficha("verdes_2", "verdes_2_log")
    mueve_ficha("verdes_3", "verdes_3_log")
    mueve_ficha("verdes_4", "verdes_4_log")

    mueve_ficha("azules_1", "azules_1_log")
    mueve_ficha("azules_2", "azules_2_log")
    mueve_ficha("azules_3", "azules_3_log")
    mueve_ficha("azules_4", "azules_4_log")

    mueve_ficha("rojas_1", "rojas_1_log")
    mueve_ficha("rojas_2", "rojas_2_log")
    mueve_ficha("rojas_3", "rojas_3_log")
    mueve_ficha("rojas_4", "rojas_4_log")

}

function log_move(texto) {
    var valor_cuenta = (((document.getElementById("select_log").getElementsByTagName("DIV").length) / 10) + 1)
    badge_log.innerHTML = valor_cuenta
    var texto_panel = "";
    texto_panel += "<div class='border bg-white text-black rounded overflowx-auto d-flex flex-column justify-content-between flex-wrap m-2 p-1' >"
    texto_panel += "<div class=' btn btn-success border border-black rounded w-100 ps-3'>No: " + valor_cuenta
    var valor_1 = "$('#panel_nota_" + valor_cuenta + "').toggle();"
    texto_panel += "<button class='btn btn-danger w-50 border ps-3 ms-2' onclick=" + valor_1 + ">▦ Log</button>" + "</div>"

    texto_panel += "<div style='display: none;' id='panel_nota_" + valor_cuenta + "' class='border bg-white text-white rounded m-0 p-1  w-100  flex-wrap h-auto'>"
    texto_panel += "<div class='btn btn-warning m-0 p-2'>"
    texto_panel += "<div class='border btn btn-secondary'>Hora :</div> " + " <hr class='m-1 border-3'>" + "<div class='btn border  btn-primary'>" + new Date() + "</div>"
    texto_panel += "</div>"
    texto_panel += "<h6 class='bg-warning bg-gradient border rounded mt-2 m-0 p-2 w-100  flex-wrap h-auto   text-black '>"
    texto_panel += "<div class='border btn btn-secondary'>Ficha:</div> " + "<div class='w-50 btn btn-primary border'>" + texto.split("-")[1] + "</div>"
    texto_panel += "</h6>"
    texto_panel += "<h6 class='bg-warning bg-gradient border rounded m-0 p-2 w-100  flex-wrap h-auto  text-black '>"
    texto_panel += "<div class='border btn btn-secondary w-50'>Posicion:</div> " + "<div class='btn border w-25 btn-primary'>" + texto.split("-")[0] + "</div>"
    texto_panel += "</h6>"
    texto_panel += "</div>"
    texto_panel += "</div>"
    //-----
    document.getElementById("select_log").innerHTML = texto_panel + select_log.innerHTML
}

function mueve_ficha(ficha_id, celda_id) {
    var celda_x = document.getElementById(celda_id).offsetLeft
    var celda_y = document.getElementById(celda_id).offsetTop
    var ficha_origen = document.getElementById(ficha_id).id

    document.getElementById(ficha_origen).style.left = celda_x + "px"
    document.getElementById(ficha_origen).style.top = celda_y + "px"
    document.getElementById(ficha_origen).setAttribute("Posicion", celda_id)
    document.getElementById(ficha_origen).setAttribute("Title", ("ficha: " + ficha_origen + " Posicion: " + celda_id))
    document.getElementById(ficha_id + "_log").innerHTML = celda_id
    badge_fichas.innerHTML = ficha_id
    badge_seleccion.innerHTML = celda_id // document.getElementById(id_pass).getAttribute("Posicion")
    log_move(celda_id + " - " + ficha_id )

}


function recalcula_casilla() {

    for (j = 0; j < 16; j++) {

        var ficha_sel = document.getElementsByClassName("ficha")[j]
        var pos_sel = ficha_sel.getAttribute("Posicion")
        mueve_ficha(ficha_sel.id, pos_sel)
    }
}

function run_ficha(id_pass){
    console.log(this.id);
    input_select.value=id_pass;
    var valor_id ="radio_" + id_pass
    input_select2.value=document.getElementById(id_pass).getAttribute("Posicion");
  //  document.getElementById(valor_id).click()

    badge_fichas.innerHTML=id_pass
    badge_seleccion.innerHTML=document.getElementById(id_pass).getAttribute("Posicion")

    }


    // function vete_casilla2() {
    //     var texto_pass_x = document.getElementById(input_select2.value).offsetLeft
    //     var texto_pass_y = document.getElementById(input_select2.value).offsetTop
    
    //     var text_origen = document.getElementById("input_select").value
    //     document.getElementById(text_origen).style.left = texto_pass_x + "px"
    //     document.getElementById(text_origen).style.top = texto_pass_y + "px"
    //     document.getElementById(text_origen).setAttribute("Posicion", input_select2.value)
    //     document.getElementById(text_origen).setAttribute("Title", ("ficha: " + text_origen + " Posicion: " + input_select2.value))
    //     document.getElementById (text_origen + "_log").innerHTML=input_select2.value
    //     document.getElementById("radio_"+text_origen).click()
    // var texto_pass=document.getElementById(input_select.value).innerHTML
    //     log_move(input_select2.value + " - " + text_origen )
    //     badge_fichas.innerHTML=input_select.value
    //     badge_seleccion.innerHTML= input_select2.value
    
    // }      
    
      


