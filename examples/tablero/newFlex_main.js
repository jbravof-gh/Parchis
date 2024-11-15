
// Carga de plantillas

function carga_plantillas(){

    document.body.innerHTML += document.getElementsByTagName("template")[7].innerHTML

    document.getElementById("panel-div-body_1").innerHTML = document.getElementsByTagName("template")[5].innerHTML
    document.getElementById("panel-div-body_2").innerHTML = document.getElementsByTagName("template")[4].innerHTML
    document.getElementById("panel-div-body_3").innerHTML = document.getElementsByTagName("template")[3].innerHTML
   
    document.getElementById("panel_conf").innerHTML = document.getElementsByTagName("template")[8].innerHTML
           document.getElementById("panel_partida").innerHTML = document.getElementsByTagName("template")[12].innerHTML

    document.getElementById("panel_jugadores").innerHTML = document.getElementsByTagName("template")[9].innerHTML

    document.getElementById("panel_config2").innerHTML = document.getElementsByTagName("template")[10].innerHTML
    
    
    carga_config("panel_config2")

}

function carga_config(Id_pass){
    document.getElementById(Id_pass).innerHTML='Config<hr><div ctgr="" id="" class="border border-outset border-5 rounded-3 m-0 pb-1 h-50 overflow-auto"></div>'
    const lista_array=[]
const lista_metrics=[]

const lista_specs={W_Outerwidth:window.outerWidth,W_Outerheight:window.outerHeight,W_Innerwidth:window.innerWidth,W_Innerheight:window.innerHeight,Body_offsetWidth:window.document.body.offsetWidth,Body_offsetHeight:window.document.body.offsetHeight}

lista_array.push(["Host",window.location.host],["HostName",window.location.hostname],["location",window.location],["href",window.location.href],["pathname",location.pathname],["origin",location.origin])

lista_metrics.push(["Width:",window.document.body.offsetWidth])
lista_metrics.push(["Height:",window.document.body.offsetHeight],[" Top:",window.document.body.offsetTop])

//lista_array.push(["Metrics",lista_metrics])
lista_array.push(["Metrics2",JSON.stringify(lista_specs)])
for (let i = 0; i < lista_array.length; i++) {
    const element = lista_array[i][0];
    const element2 = lista_array[i][1];

   document.getElementById(Id_pass).getElementsByTagName("div")[0].innerHTML+=document.getElementsByTagName("template")[3].innerHTML
   document.getElementById(Id_pass).getElementsByTagName("div")[0].getElementsByTagName("div")[i*3].getElementsByTagName("div")[0].innerHTML=element //lista_array[i]
   document.getElementById(Id_pass).getElementsByTagName("div")[0].getElementsByTagName("div")[i*3].getElementsByTagName("div")[1].innerHTML=element2 //lista_array[i]
} 
// document.getElementById(Id_pass).getElementsByTagName("div")[0].innerHTML+="<hr>"

document.getElementById(Id_pass).getElementsByTagName("div")[0].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].innerHTML=""
document.getElementById(Id_pass).getElementsByTagName("div")[0].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].setAttribute("class",((   document.getElementById(Id_pass).getElementsByTagName("div")[0].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].getAttribute("class"))+" d-flex gap-1 ")) //.style="background-color:black;"

document.getElementById(Id_pass).getElementsByTagName("div")[0].getElementsByTagName("div")[(lista_array.length-1)*3].innerHTML+="<hr>"
for (let p = 0; p < JSON.stringify(lista_specs).split(",").length; p++) {
    document.getElementById(Id_pass).getElementsByTagName("div")[0].getElementsByTagName("div")[(lista_array.length-1)*3].getElementsByTagName("div")[1].innerHTML+="<div class='d-flex gap-0 border-0 mb-0 gap-1'><div class='bg-danger bg-gradient text-warning flex-grow-1 p-2'>"+(p+1)+" - " + JSON.stringify(lista_specs).split(",")[p].split(":")[0].replace('{','').replace('"','').replace('"','')   + "</div>" + "<div class='btn btn-sm w-25 bg-primary bg-gradient text-white p-0'>" + JSON.stringify(lista_specs).split(",")[p].split(":")[1].replace('}','') + "</div></div>"
 
}

sessionStorage.setItem("Lista_Array",JSON.stringify(lista_array))
sessionStorage.setItem("Lista_Configuracion",JSON.stringify({"Nombre":"--", _2cuerpo:lista_array, _3bottom:lista_specs}))

}
function load_players(Location_pass){
    //alert(Location_pass.innerHTML)
    const  datos_load=Array.from(JSON.parse(sessionStorage.getItem("Parchis_Partida")).Jugadores)
    //const datos_load=JSON.parse(sessionStorage.getItem("Parchis_Partida"))

    for (let f = 0; f < datos_load.length; f++) {
        const element = datos_load[f];
        Location_pass.getElementsByTagName("div")[f+2].innerHTML= "<p  class='border rounded bg-primary text-center m-0'>" + element[0][1] + "</p>" // + "<br>" // datos_load.Jugadores.length
        
    }
    

}

function load_configuracion(Location_pass){
  //  alert(Location_pass.innerHTML)
    const  datos_load=Array.from(JSON.parse(sessionStorage.getItem("Parchis_Partida")).Partida[0].Configuracion._2cuerpo)
    //const datos_load=JSON.parse(sessionStorage.getItem("Parchis_Partida"))
//alert(datos_load.length)
    for (let f = 0; f < datos_load.length; f++) {
        const element = datos_load[f];
        Location_pass.innerHTML+= "<p  class='border rounded bg-primary text-center m-0'>" + element[1] + "</p>" // + "<br>" // datos_load.Jugadores.length
        
    }

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

    mueve_ficha("verdes_1", "301")
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
    texto_panel += "<div class=' border-0 bg-white text-black rounded overflowx-auto d-flex flex-column justify-content-evenly  m-1 p-0' >"
    texto_panel += "<div class=' btn btn-success border border-black rounded w-auto ps-3 m-1 h-auto'>No: " + valor_cuenta
    var valor_1 = "$('#panel_nota_" + valor_cuenta + "').toggle();"
    texto_panel += "<button class='btn btn-danger w-50 border ps-3 ms-2 h-auto' onclick=" + valor_1 + ">▦ Log</button>" + "</div>"

    texto_panel += "<div style='display: none;' id='panel_nota_" + valor_cuenta + "' class='panel_nota border bg-white text-white rounded m-0 p-1  w-100  flex-wrap h-auto'>"
    texto_panel += "<div class='btn btn-warning m-0 p-2 d-flex flex-column'>"
    texto_panel += "<div class='border btn btn-secondary'>Hora</div> " + " <hr class='m-1 border-3'>" + "<div class=' btn border flex-wrap  btn-primary'>" + new Date() + "</div>"
    texto_panel += "</div>"
    texto_panel += "<h6 class='bg-warning bg-gradient border rounded mt-2 m-0 p-1 w-100 d-flex gap-3  flex-wrap h-auto   text-black '>"
    texto_panel += "<div class='border btn btn-secondary ms-2'>Ficha:</div> " + "<div class='w-50 btn btn-primary border flex-grow-1 me-2'>" + texto.split("-")[1] + "</div>"
    texto_panel += "</h6>"
    texto_panel += "<h6 class='bg-warning bg-gradient border rounded m-0 p-1 d-flex gap-3  flex-wrap h-auto  text-black '>"
    texto_panel += "<div class='border border-white border-2 btn btn-secondary w-auto ms-2'>Posicion:</div> " + "<div class='btn border w-auto btn-primary flex-grow-1 me-2'>" + texto.split("-")[0] + "</div>"
    texto_panel += "</h6>"
    texto_panel += "</div>"
    texto_panel += "</div>"
    //-----
    document.getElementById("select_log").innerHTML = texto_panel + select_log.innerHTML
// console.log("stor", document.getElementsByClassName("panel_nota")[sessionStorage.length].getElementsByTagName("*").length)
//     sessionStorage.setItem(sessionStorage.length,( texto_panel) )
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
    mueve_auto.checked=true


    }
function devuelve_width(id_pass){
//alert(document.getElementById(id_pass).style.left)
return document.getElementById(id_pass).style.left
}
function carga_paneles_div(){
    var numero_paneles, panel_destino, panel_origen,panel_origen2, texto_final="", valor_estilo=""
    numero_paneles=document.getElementsByClassName("panel-div");
    panel_destino=document.getElementById("panel_conf_main")
    for (i = 0; i < numero_paneles.length -1 ; i++) {
        panel_origen=numero_paneles[i].getAttribute("name")
        panel_origen2=numero_paneles[i].getAttribute("id")
        valor_estilo=numero_paneles[i].offsetLeft
//alert("panel_origen -"  + panel_origen2 + "valor_estilo: " + valor_estilo)
texto_final+='<div class="d-flex flex-column h-auto items-stretch overflow-hidden pb-1 pt-1">'
    texto_final+='<div class="panel_bar form-check form-switch  items-stretch pt-0 mt-0 pb-0 mb-0 overflow-hidden h-50 d-flex justify-content-evenly border-0">'
            texto_final+='<input name="'
            texto_final+=panel_origen2 
            texto_final+='" onclick="show_hide(this.name)" '
            texto_final+=' class="form-check-input mt-2 h-50 me-0 w-50 " type="checkbox" '
            texto_final+= 'id="flexSwitchCheckChecked'+i+'" > '
            texto_final+=' <button name="' 
            texto_final+=panel_origen2 + "_2"
                 texto_final+='" onclick="show_hide(this.name)" '
             texto_final+=' class="btn btn-sm border rounded w-50 p-0 m-0 mt-1 ms-0 me-0 mb-0 h-75 bg-primary text-white" '+'">'+ panel_origen
                         
             
             texto_final+='</button>'
    texto_final+='</div>'

    
    texto_final+='<div id="' 
    texto_final+=panel_origen2 + "_2"

     texto_final+='" class="panel_div h-75 overflow-auto  mt-0 mb-0 pb-0">'
            texto_final+='<div class="panel_conf_main_div  h-auto border-0 pb-0 mb-0">'

            texto_final += '<div id="' 
            texto_final+=panel_origen2 + "_5"
                        texto_final+='" class="panel_conf_main_div border-0 pt-1 pb-1 pe-2 ps-2 p-0 m-0 d-flex justify-content-evenly gap-1 ">'
                                texto_final += '<div class="valores w-25 bg-success bg-gradient  border-outset">'
                                    
                            texto_final +='<h6  >'
                            texto_final +='Id: '
                            texto_final +='</h6>'

                    texto_final += '</div>'
                    texto_final += '<div class="w-75 h-100 fs-6 valores">'
                            texto_final +='<h6 >'
                            texto_final += panel_origen2
                            texto_final +='</h6>'
                    texto_final += '</div>'
                    // texto_final += '<div class="boton_clase_div  ms-1  p-0 m-0 w-100 h-100" >'
                    // texto_final+=' <button class="boton_clase btn rounded bg-danger border-0 w-100 h-100 p-0 m-0">↻  ' 
                    // texto_final+='</button>'

                    // texto_final += '</div>'
            texto_final += '</div>'
    texto_final+='</div>'
                texto_final += '<div id="' 
    texto_final+=panel_origen2 + "_3"
                 texto_final+='" class="panel_conf_main_div border-0 pt-1 pb-1 pe-2 ps-2 p-0 m-0 d-flex justify-content-evenly gap-1 ">'
                        texto_final += '<div class="valores w-100 bg-success bg-gradient  border-outset">'
                                texto_final +='<h6 class="fs-6 mt-1" >'
                                texto_final +='Height:'
                                texto_final +='</h6>'

                        texto_final += '</div>'
                        texto_final += '<div class="w-100 fs-6 valores">'
                                texto_final +='<h6 class=" fs-6 mt-1">'
                                texto_final +=numero_paneles[i].offsetHeight
                                texto_final +='</h6>'
                        texto_final += '</div>'
                        texto_final += '<div class="boton_clase_div  ms-1  p-0 m-0 w-100 h-100" >'
                        texto_final+=' <button name="' 
                        texto_final+=panel_origen2
                        texto_final+='" class="boton_clase btn rounded bg-danger border-0 w-100 h-100 p-0 m-0">↻  ' 
                        texto_final+='</button>'

                        texto_final += '</div>'

                texto_final += '</div>'

                texto_final += '<div class="panel_conf_main_div border-0 pt-1 pb-1 p-0 m-0 d-flex justify-content-evenly gap-1 ">'
                        texto_final += '<div class="valores w-100 bg-success bg-gradient  border-outset">'
                                texto_final +='<h6 class="fs-6 mt-1" >'
                                texto_final +='Width: '
                                texto_final +='</h6>'

                        texto_final += '</div>'
                        texto_final += '<div class="w-100 fs-6 valores">'
                                texto_final +='<h6 class=" fs-6 mt-1">'
                                texto_final += numero_paneles[i].offsetWidth;//  devuelve_width(panel_origen2)
                                texto_final +='</h6>'
                        texto_final += '</div>'
                        texto_final += '<div class="boton_clase_div  ms-1  p-0 m-0 w-100 h-100" >'
                        texto_final+=' <button name="' 
                        texto_final+=panel_origen2
                        texto_final+='" class="boton_clase btn rounded bg-danger border-0 w-100 h-100 p-0 m-0">↻  ' 
                        texto_final+='</button>'

                        texto_final += '</div>'

                texto_final += '</div>'
                texto_final += '<div class="panel_conf_main_div border-0 pt-1 pb-1 p-0 m-0 d-flex justify-content-evenly gap-1 ">'

             // texto_final += '<div class="panel_conf_main_div d-flex border-0 m-0  justify-content-evenly items-stretch">'
              texto_final += '<div class="valores w-100 bg-success bg-gradient  border-outset">'

          //    texto_final += '<div class="valores bg-success w-50">'
                        texto_final +='<h6 class="fs-6 mt-1" >'
                        texto_final +='Top:'
                        texto_final +='</h6>'

                texto_final += '</div>'
                texto_final += '<div class="w-100 fs-6 valores">'
                        texto_final +='<h6 class=" fs-6 mt-1">'
                        texto_final +=numero_paneles[i].offsetTop
                        texto_final +='</h6>'
                texto_final += '</div>'
                texto_final += '<div class="boton_clase_div  ms-1  p-0 m-0 w-100 h-100" >'
                texto_final+=' <button class="boton_clase btn rounded bg-danger border-0 w-100 h-100 p-0 m-0">↻  ' 
                texto_final+='</button>'

                texto_final += '</div>'
        texto_final += '</div>'

        texto_final += '<div id="' 
                texto_final+=panel_origen2 + "_4"
                            texto_final+='" class="panel_conf_main_div border-0 pt-1 pb-1 pe-2 ps-2 p-0 m-0 d-flex justify-content-evenly gap-1 ">'
                                    texto_final += '<div class="valores w-100 bg-success bg-gradient  border-outset">'
                                        
                                texto_final +='<h6 class="fs-6 mt-1" >'
                                texto_final +='Left: '
                                texto_final +='</h6>'

                        texto_final += '</div>'
                        texto_final += '<div class="w-100 fs-6 valores">'
                                texto_final +='<h6 class="fs-6 mt-1" >'
                                texto_final +=numero_paneles[i].offsetLeft
                                texto_final +='</h6>'
                        texto_final += '</div>'
                        texto_final += '<div class="boton_clase_div  ms-1  p-0 m-0 w-100 h-100" >'
                        texto_final+=' <button class="boton_clase btn rounded bg-danger border-0 w-100 h-100 p-0 m-0">↻  ' 
                        texto_final+='</button>'

                        texto_final += '</div>'
                texto_final += '</div>'
        texto_final+='</div>'
    texto_final+='</div>'

texto_final+='</div>'


      //  panel_destino.innerHTML+= '<div class="form-check form-switch pt-2 pb-2 d-flex justify-content-evenly"> <input name="'+panel_origen2+'" onclick="show_hide(this.name)"  class="form-check-input" type="checkbox" id="flexSwitchCheckChecked'+i+'" >  <label class="form-check-label" for="flexSwitchCheckChecked'+i+'">'+ panel_origen+'</label></div>'
    //'<input class="checkbox"  type="checkbox"  checked  data-toggle="toggle"   data-size= "lg" >'   

    }
    panel_destino.innerHTML=texto_final;
   // flexSwitchCheckChecked0.checked=true
    for (i = 0; i < numero_paneles.length -1 ; i++) {
        show_hide( numero_paneles[i].id)

    }
    for (i = 0; i < document.getElementsByClassName("panel_div").length  ; i++) {
        show_hide( document.getElementsByClassName("panel_div")[i].id)

    }

    add_listeners_boton_clase()
}
function show_hide(id){
//alert(id)
    const text_id = "#" + id
    $(text_id).toggle()
}

adding_listeners()

//$("#panel_players").resizable();
//$("#panel_players").draggable();
    
$("#panel_partida").resizable();
$("#panel_partida").draggable();


