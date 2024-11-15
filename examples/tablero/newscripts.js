
var var1 = 45;
// $("#tablero").resizable();
$("#panel_drag").resizable();
$("#panel_drag").draggable();

$("#panel_conf").resizable();
$("#panel_conf").draggable();

$("#panel_test").resizable();
$("#panel_test").draggable();




function list_all_tags(id_pass) {

    Array.from(document.getElementById(id_pass).getElementsByTagName("*")).forEach(element => {
        id_textarea.value +=
            "Tag: " + element.tagName + "\n" +
            "Nodos: " + element.parentElement.tagName + "\n" +
            "innerHTML: " + element.innerHTML + "\n" +
            "  --------   ****   ----------" + "\n"
    });

}
function list_all_class(class_pass) {
    let i = 0
    Array.from(document.body.getElementsByClassName(class_pass)).forEach(element => {
        id_textarea.value +=
            "No: " + i + "\n" +
            "Tag: " + element.tagName + "\n" +
            "innerHTML: " + element.innerHTML + "\n" +
            "  --------   ****   ----------" + "\n"
        i += 1
    });

}
var contador_03 = 1
async function vuelta(id_pass, numero_pass) {
    const ficha_mover = document.getElementById(id_pass)
    id_textarea.value = id_pass + "_" + contador_03 + "\n" + id_textarea.value
    ficha_mover.setAttribute("posicion", "celda_" + contador_03)
    try {
        var pan_origen = ficha_mover//document.getElementById(ficha_seleccionada)
        var pan_destino = document.getElementById("celda_" + contador_03)
        pan_origen.style.top = pan_destino.offsetTop + "px"
        pan_origen.style.left = pan_destino.offsetLeft + "px"
        pan_origen.style.height = pan_destino.offsetHeight + "px"
        pan_origen.style.width = pan_destino.offsetHeight + "px"

        if (contador_03 > numero_pass) {
            contador_03 = 1
        }
        else {

            setTimeout(() => {
                vuelta(id_pass, numero_pass)

            }, 100);

        }
    }
    catch {
        if (contador_03 < numero_pass) {
            setTimeout(() => {
                vuelta(id_pass, numero_pass)

            }, 100);
        }
    }


    contador_03 += 1

}
var contador_04 = 1
async function vuelta2(id_pass) {

    const ficha_mover = document.getElementById(id_pass)
    id_textarea.value = id_pass + "_" + contador_04 + "\n" + id_textarea.value
    ficha_mover.setAttribute("posicion", "celda_" + contador_04)

    try {
        var pan_origen = ficha_mover//document.getElementById(ficha_seleccionada)
        var pan_destino = document.getElementById("celda_" + contador_04)
        pan_origen.style.top = pan_destino.offsetTop + "px"
        pan_origen.style.left = pan_destino.offsetLeft + "px"

        if (contador_04 > 66) {

        }
        else {

            setTimeout(() => {
                vuelta2(id_pass)

            }, 100);

        }
    }
    catch {
        if (contador_04 < 68) {
            setTimeout(() => {
                vuelta2(id_pass)

            }, 100);
        }
    }


    contador_04 += 1

}





var panel_destino;
var texto_final = "";
var contador_tags

function crea_elemento(destino_id, tag_local, id_local, class_local, innerHTML_local) {
    contador_tags = document.body.getElementsByTagName("*").length
    texto_final = ""
    panel_destino = document.getElementById(destino_id)

    texto_final += "<"
    texto_final += tag_local
    texto_final += " id='"
    texto_final += id_local
    texto_final += "'"
    texto_final += " class='"
    texto_final += class_local
    texto_final += "'"
    texto_final += "> "
    texto_final += innerHTML_local
    texto_final += "</"
    texto_final += tag_local
    texto_final += ">"


    // texto_final=
    // "< " + 
    // tag_local +
    // " id='" +
    // id_local + "'" +
    // " class='" +
    // class_local + "'" +           

    // " >" +

    // innerHTML_local +

    // "</" +

    // tag_local + ">"


}
function crear_tablero() {
    // document.ge
    //Tablero 2
    crea_elemento("panel_central", "div", "tablero2", " rounded-3 border border-5 m-0 w-100  h-100 d-flex flex-column items-stretch  justify-content-evenly gap-0 p-0", "")
    panel_destino.innerHTML = texto_final
    //Lineas
    for (let j = 1; j < 4; j++) {
        crea_elemento("tablero2", "div", "tablero_linea_" + j, "tablero-linea border rounded h-100 d-flex flex-row items-stretch  justify-content-evenly m-0 gap-0 p-0", "")
        panel_destino.innerHTML += texto_final
        //Cuadros
        for (let i = 1; i < 4; i++) {
            crea_elemento("tablero_linea_" + j, "div", "tablero_linea_" + j + "_cuadro_" + i, "linea-cuadro border rounded-3 w-100 h-100 p-0 d-flex justify-content-evenly gap-0", "")
            panel_destino.innerHTML += texto_final
        }
    }

    //casa rojas
    crea_elemento("tablero_linea_1_cuadro_1", "div", "tablero_linea_1_cuadro_1_log", "border-0 bg-danger d-flex w-100 rounded-3 p-2 ", "")
    panel_destino.innerHTML += texto_final
    var contador_01 = 1
    for (let l = 1; l < 3; l++) {
        crea_elemento("tablero_linea_1_cuadro_1_log", "div", "tablero_linea_1_cuadro_1_" + l, "border-0 text-white d-flex flex-column w-100 gap-1 p-2", "")
        panel_destino.innerHTML += texto_final

        for (let m = 1; m < 3; m++) {
            //crea_elemento("tablero_linea_1_cuadro_1_" + l, "div", "tablero_linea_1_cuadro_1_" + l, "celda border rounded-5 text-white w-100 h-100", l + "-" + m)

            crea_elemento("tablero_linea_1_cuadro_1_" + l, "div", "danger_casa_" + contador_01, "celda celda-casa border rounded-5 text-danger w-100 h-100 gap-4", 34)

            panel_destino.innerHTML += texto_final
            contador_01 += 1
        }
    }
    //casa azules
    crea_elemento("tablero_linea_1_cuadro_3", "div", "tablero_linea_1_cuadro_3_log", "border-0 bg-primary bg-gradient d-flex w-100 rounded-3 p-2", "")
    panel_destino.innerHTML += texto_final
    var contador_01 = 1
    for (let l = 1; l < 3; l++) {
        crea_elemento("tablero_linea_1_cuadro_3_log", "div", "tablero_linea_1_cuadro_3_" + l, "border-0 text-white d-flex flex-column w-100 gap-1 p-2", "")
        panel_destino.innerHTML += texto_final

        for (let m = 1; m < 3; m++) {
            crea_elemento("tablero_linea_1_cuadro_3_" + l, "div", "primary_casa_" + contador_01, "celda celda-casa border border-outset border-3 rounded-5 text-white w-100 h-100 gap-4", 17)// l + "-" + m)
            panel_destino.innerHTML += texto_final
            contador_01 += 1

        }
    }
    //casa verdes
    crea_elemento("tablero_linea_3_cuadro_1", "div", "tablero_linea_3_cuadro_1_log", "border-0 bg-success bg-gradient d-flex w-100 rounded-3 p-2 ", "")
    panel_destino.innerHTML += texto_final
    contador_01 = 1
    for (let l = 1; l < 3; l++) {
        crea_elemento("tablero_linea_3_cuadro_1_log", "div", "tablero_linea_3_cuadro_1_" + l, "border-0 text-white d-flex flex-column w-100 gap-1 p-2", "")
        panel_destino.innerHTML += texto_final

        for (let m = 1; m < 3; m++) {
            crea_elemento("tablero_linea_3_cuadro_1_" + l, "div", "success_casa_" + contador_01, "celda celda-casa border rounded-5 text-success w-100 h-100 text-center gap-4", 51)
            panel_destino.innerHTML += texto_final
            contador_01 += 1
        }
    }
    //casa amarillas
    crea_elemento("tablero_linea_3_cuadro_3", "div", "tablero_linea_3_cuadro_3_log", "border-0 bg-warning bg-gradient d-flex w-100 rounded-3 p-2", "")
    panel_destino.innerHTML += texto_final
    var contador_01 = 1

    for (let l = 1; l < 3; l++) {
        crea_elemento("tablero_linea_3_cuadro_3_log", "div", "tablero_linea_3_cuadro_3_" + l, "border-0 text-white d-flex flex-column w-100 gap-1 p-2", "")
        panel_destino.innerHTML += texto_final

        for (let m = 1; m < 3; m++) {
            crea_elemento("tablero_linea_3_cuadro_3_" + l, "div", "warning_casa_" + contador_01, "celda celda-casa border rounded-5 text-white w-100 h-100 text-center gap-4", 0)
            panel_destino.innerHTML += texto_final
            contador_01 += 1

        }
    }
    /* */

    /**/
    //casillas 1-1
    for (let b = 1; b < 4; b++) {
        crea_elemento("tablero_linea_1_cuadro_2", "div", "tablero_linea_1_cuadro_2_casillas_" + b, "border-0 w-100 h-100 d-flex flex-column", "")
        panel_destino.innerHTML += texto_final

        for (let c = 1; c < 8; c++) {
            crea_elemento("tablero_linea_1_cuadro_2_casillas_" + b, "div", "", "celda border w-100 h-100 ", "")
            panel_destino.innerHTML += texto_final

        }

    }
    document.getElementById("tablero_linea_1_cuadro_2_casillas_2").innerHTML = "<div class='bg-danger h-100 d-flex flex-column'>" + document.getElementById("tablero_linea_1_cuadro_2_casillas_2").innerHTML + "</div>"
    //casillas 3-1
    for (let b1 = 1; b1 < 4; b1++) {
        crea_elemento("tablero_linea_3_cuadro_2", "div", "tablero_linea_3_cuadro_2_casillas_" + b1, "border-0 w-100 h-100 d-flex flex-column", "")
        panel_destino.innerHTML += texto_final

        for (let c = 1; c < 8; c++) {
            crea_elemento("tablero_linea_3_cuadro_2_casillas_" + b1, "div", "", "celda border w-100 h-100 p-0 m-0  ", "")
            panel_destino.innerHTML += texto_final

        }
        // b1+=1
    }
    document.getElementById("tablero_linea_3_cuadro_2_casillas_2").innerHTML = "<div class='bg-warning h-100 d-flex flex-column'>" + document.getElementById("tablero_linea_3_cuadro_2_casillas_2").innerHTML + "</div>"
    //casillas 2-1
    document.getElementById("tablero_linea_2_cuadro_1").innerHTML = "<div id='tablero_linea_2_cuadro_1_log' class='d-flex flex-column w-100'>" + document.getElementById("tablero_linea_2_cuadro_1").innerHTML + "</div>"
    for (let b = 1; b < 4; b++) {
        crea_elemento("tablero_linea_2_cuadro_1_log", "div", "tablero_linea_2_cuadro_1_casillas_" + b, "border-0 w-100 h-100 d-flex ", "")
        panel_destino.innerHTML += texto_final
        // document.getElementById("tablero_linea_2_cuadro_1").innerHTML="<div class='d-flex flex-column'>"+     document.getElementById("tablero_linea_2_cuadro_1").innerHTML+"</div>"
        for (let s = 1; s < 8; s++) {
            crea_elemento("tablero_linea_2_cuadro_1_casillas_" + b, "div", "", "celda border w-100 h-100 p-0 m-0  ", "")
            panel_destino.innerHTML += texto_final
        }
    }
    document.getElementById("tablero_linea_2_cuadro_1_casillas_2").innerHTML = "<div class='bg-success d-flex w-100'>" + document.getElementById("tablero_linea_2_cuadro_1_casillas_2").innerHTML + "</div>"
    //casillas 2-3
    document.getElementById("tablero_linea_2_cuadro_3").innerHTML = "<div id='tablero_linea_2_cuadro_3_log' class='d-flex flex-column w-100'>" + document.getElementById("tablero_linea_2_cuadro_3").innerHTML + "</div>"
    for (let d = 1; d < 4; d++) {
        crea_elemento("tablero_linea_2_cuadro_3_log", "div", "tablero_linea_2_cuadro_3_casillas_" + d, "border-0 w-100 h-100 d-flex ", "")
        panel_destino.innerHTML += texto_final
        // document.getElementById("tablero_linea_2_cuadro_1").innerHTML="<div class='d-flex flex-column'>"+     document.getElementById("tablero_linea_2_cuadro_1").innerHTML+"</div>"
        for (let w = 1; w < 8; w++) {
            crea_elemento("tablero_linea_2_cuadro_3_casillas_" + d, "div", "", "celda border w-100 h-100 p-0 m-0  ", "")
            panel_destino.innerHTML += texto_final
        }
    }
    document.getElementById("tablero_linea_2_cuadro_3_casillas_2").innerHTML = "<div class='bg-primary d-flex w-100'>" + document.getElementById("tablero_linea_2_cuadro_3_casillas_2").innerHTML + "</div>"

    //centro
    document.getElementById("tablero_linea_2_cuadro_2").innerHTML = "<div id='centro_log' class='border-0 d-flex flex-column w-100'>" + document.getElementById("tablero_linea_2_cuadro_2").innerHTML + "</div>"
    for (let f = 1; f < 4; f++) {
        crea_elemento("centro_log", "div", "centro_casillas_" + f, "border-0 w-100 h-100 d-flex ", "")
        panel_destino.innerHTML += texto_final

        for (let o = 1; o < 4; o++) {
            crea_elemento("centro_casillas_" + f, "div", "centro_casillas_" + f + "_" + o, "border w-100 h-100 d-flex flex-column", "")
            panel_destino.innerHTML += texto_final

            for (let p = 1; p < 3; p++) {
                crea_elemento("centro_casillas_" + f + "_" + o, "div", "centro_casillas_" + f + "_" + o + "_" + p, "border-0 w-100 h-100 d-flex  ", "")
                panel_destino.innerHTML += texto_final
            }
        }

    }

}

function carga_celdas() {


    //amarillas 2
    i = 7
    Array.from(document.getElementById("tablero_linea_3_cuadro_2_casillas_3").getElementsByTagName("div")).forEach(element => {

        element.innerHTML = "<canvas class='celda w-100 h-100' id='celda_" + i + "'>" + i + "</canvas>"
        makeImage(i, ("celda_" + i), "bold 60px Calibri ")
        i -= 1
    });

    //amarillas 1
    i = 61
    Array.from(document.getElementById("tablero_linea_3_cuadro_2_casillas_1").getElementsByTagName("div")).forEach(element => {
        element.innerHTML = "<canvas class='celda w-100 h-100' id='celda_" + i + "'>" + i + "</canvas>"
        //  element.id="celda_"+i
        makeImage(i, ("celda_" + i), "bold 60px Calibri ")
        //element.innerHTML=i
        //element.id="celda_"+i

        i += 1
    });

    //azules 1
    i = 24
    Array.from(document.getElementById("tablero_linea_2_cuadro_3_casillas_1").getElementsByTagName("div")).forEach(element => {
        //element.innerHTML= "<div class='d-flex flex-column justify-content-end h-100'><div  class='celda h-auto'>" +  i + "</div></div>"

        // element.innerHTML=i
        //element.id="celda_"+i
        element.innerHTML = "<div class='d-flex flex-column justify-content-end h-100'><canvas class='celda w-100 h-100' id='celda_" + i + "'>" + i + "</canvas></div>"
        makeImage(i, ("celda_" + i), "bold 60px Calibri ")

        i -= 1
    });
    //azules 2
    i = 10
    Array.from(document.getElementById("tablero_linea_2_cuadro_3_casillas_3").getElementsByTagName("div")).forEach(element => {

        // element.innerHTML=i
        // element.id="celda_"+i
        element.innerHTML = "<div class='d-flex flex-column justify-content-end h-100'><canvas class='celda w-100 h-100' id='celda_" + i + "'>" + i + "</canvas></div>"
        makeImage(i, ("celda_" + i), "bold 60px Calibri ")
        i += 1
    });

    //verdes 1
    i = 50
    Array.from(document.getElementById("tablero_linea_2_cuadro_1_casillas_1").getElementsByTagName("div")).forEach(element => {

        // element.innerHTML= "<div class='d-flex flex-column justify-content-end h-100'><div class='h-auto'>" +  i + "</div></div>"
        // element.id="celda_"+i
        element.innerHTML = "<div class='d-flex flex-column justify-content-end h-100'><canvas class='celda w-100 h-100' id='celda_" + i + "'>" + i + "</canvas></div>"
        // makeImage(  i ,("celda_"+i),"bold 60px Calibri ") 
        //element.innerHTML="<canvas class='celda w-100 h-100' id='celda_"+i+"'>"+i+"</canvas>"
        makeImage(i, ("celda_" + i), " 60px Calibri ")
        i -= 1
    });
    //verdes 2
    i = 52
    Array.from(document.getElementById("tablero_linea_2_cuadro_1_casillas_3").getElementsByTagName("div")).forEach(element => {

        // element.innerHTML=i
        // element.id="celda_"+i
        element.innerHTML = "<canvas class='celda w-100 h-100' id='celda_" + i + "'>" + i + "</canvas>"
        makeImage(i, ("celda_" + i), " 60px Calibri ")

        i += 1
    });

    //rojas 1
    i = 35
    Array.from(document.getElementById("tablero_linea_1_cuadro_2_casillas_1").getElementsByTagName("div")).forEach(element => {

        // element.innerHTML=i
        // element.id="celda_"+i
        element.innerHTML = "<canvas class='celda w-100 h-100' id='celda_" + i + "'>" + i + "</canvas>"
        makeImage(i, ("celda_" + i), "bold 60px Calibri ")
        i += 1
    });
    //rojas 2
    i = 33
    Array.from(document.getElementById("tablero_linea_1_cuadro_2_casillas_3").getElementsByTagName("div")).forEach(element => {

        // element.innerHTML=i
        // element.id="celda_"+i
        element.innerHTML = "<canvas class='celda w-100 h-100' id='celda_" + i + "'>" + i + "</canvas>"
        makeImage(i, ("celda_" + i), "bold 60px Calibri ")
        i -= 1
    });
    //centro 1-1
    i = 42
    //"centro_casillas_1_1"
    //   Array.from(document.getElementById("centro_casillas_1_1").getElementsByTagName("div")).forEach(element => {
    document.getElementById("centro_casillas_1_1_1").innerHTML = "<div class='d-flex justify-content-end w-100'><div id='celda_" + i + "' class='centro-casilla centro-casilla-right celda w-100 h-100'>" + i + "</div></div>"
    i += 1
    //});  

    document.getElementById("centro_casillas_1_1_2").innerHTML = "<div class='d-flex justify-content-start w-100'><div id='celda_" + i + "' class='centro-casilla celda  centro-casilla-left w-100 h-100 d-flex flex-column justify-content-end'>" + i + "</div></div>"

    //centro 3-1
    i = 59
    document.getElementById("centro_casillas_3_1_1").innerHTML = "<div class='d-flex justify-content-start w-100'><div id='celda_" + i + "' class='centro-casilla centro-casilla-left  celda w-100'>" + i + "</div></div>"
    i += 1
    document.getElementById("centro_casillas_3_1_2").innerHTML = "<div class='d-flex justify-content-end w-100'><div id='celda_" + i + "' class='centro-casilla centro-casilla-right  celda w-100 h-100 d-flex flex-column justify-content-end'>" + i + "</div></div>"
    //centro 3-3
    i = 9
    document.getElementById("centro_casillas_3_3_1").innerHTML = "<div class='d-flex justify-content-end w-100 ps-3'><div id='celda_" + i + "' class='centro-casilla  centro-casilla-right celda w-100'>" + i + "</div></div>"
    i -= 1
    document.getElementById("centro_casillas_3_3_2").innerHTML = "<div class='d-flex justify-content-start w-100'><div id='celda_" + i + "' class='centro-casilla  centro-casilla-left celda w-100 h-100 d-flex flex-column justify-content-end'>" + i + "</div></div>"
    //centro 1-3
    i = 26
    //                                                       
    document.getElementById("centro_casillas_1_3").innerHTML += "<canvas id='canvas_2' style='position:absolute;background-color: transparent; width: 10%;margin-top: 10px;margin-left: 10px;'>"
    document.getElementById("centro_casillas_1_3_1").innerHTML = "<div class='d-flex justify-content-start w-100'><div id='celda_" + i + "' class='centro-casilla centro-casilla-left  celda w-100'>" + i + "</div></div>"
    i -= 1
    document.getElementById("centro_casillas_1_3_2").innerHTML = "<div class='d-flex justify-content-end w-100'><div id='celda_" + i + "' class='centro-casilla  centro-casilla-right celda w-100 h-100 d-flex flex-column justify-content-end'>" + i + "</div></div>"


    ////verdes-casa-top
    document.getElementById("centro_casillas_2_1").innerHTML = "<div class='d-flex h-100 w-100 '><div class='d-flex justify-content-start w-100 bg-success h-100'></div><div  class='   w-100'></div></div>"
    ////azules-casa-top
    document.getElementById("centro_casillas_2_3").innerHTML = "<div class='d-flex h-100 w-100 '><div  class='   w-100'></div><div class='d-flex justify-content-start w-100 bg-primary h-100'></div></div>"
    ////amarillas-casa-top
    document.getElementById("centro_casillas_3_2_2").innerHTML = "<div class='d-flex justify-content-start w-100 bg-warning h-100'></div>"

    ////rojas-casa-top
    document.getElementById("centro_casillas_1_2_1").innerHTML = "<div class='d-flex justify-content-start w-100 bg-danger h-100'></div>"


    ////verdes-casa-bottom                                  <div class='celda bg-black border w-100 h-100 p-0 m-0'>
    document.getElementById("tablero_linea_2_cuadro_1_casillas_2").getElementsByTagName("div")[1].outerHTML = "<div class=' bg-black border w-100 h-100 p-0 m-0'><div class='celda d-flex flex-column justify-content-evenly h-100 w-100 '><div id='celda_51'  class='border bg-black  rounded-5 text-center p-1'>51</div></div></div>"
    ////azules-casa-bottom
    document.getElementById("tablero_linea_2_cuadro_3_casillas_2").getElementsByTagName("div")[7].outerHTML = "<div class=' bg-black border w-100 h-100 p-0 m-0'><div class='celda d-flex flex-column justify-content-evenly h-100 w-100 '><div id='celda_17' class='border rounded-5 text-center p-1'>17</div></div></div>"
    ////amarillas-casa-bottom
    document.getElementById("tablero_linea_3_cuadro_2_casillas_2").getElementsByTagName("div")[7].outerHTML = "<div class=' bg-black border w-100 h-100 p-0 m-0'><div id='celda_68' class='celda d-flex  justify-content-evenly h-100 w-100 '><div class='border rounded-5 text-center p-1'>68</div></div></div>"

    ////rojas-casa-bottom
    document.getElementById("tablero_linea_1_cuadro_2_casillas_2").getElementsByTagName("div")[1].outerHTML = "<div class=' bg-black border w-100 h-100 p-0 m-0'><div class='celda d-flex  justify-content-evenly h-100 w-100 '><div  id='celda_34' class='celda border rounded-5 text-center p-1'>34</div></div></div>"

    ////rojas-casa-salida
    document.getElementById("celda_39").outerHTML = "<div class='d-flex justify-content-evenly'><div  id='celda_39' class='celda border rounded-5 text-center p-1'>39</div></div>"
    ////verdes-casa-salida
    document.getElementById("celda_56").outerHTML = "<div class='d-flex flex-column h-100 justify-content-evenly'><div  id='celda_56' class='celda border rounded-5 text-center p-1'>56</div></div>"
    ////amarillas-casa-salida
    document.getElementById("celda_5").outerHTML = "<div class='d-flex  w-100 justify-content-evenly'><div  id='celda_5' class='celda border rounded-5 text-center ps-2 pe-2 p-1'>5</div></div>"
    // makeImage(  "5" ,("celda_5"),"bold 110px Calibri ") 
    ////azules-casa-salida
    document.getElementById("celda_22").outerHTML = "<div class='d-flex  flex-column  h-100 justify-content-evenly'><div  id='celda_22' class='celda border rounded-5 text-center p-1'>22</div></div>"

    //centro-top
    document.getElementById("tablero_linea_2_cuadro_2").innerHTML += "<div id='centro_top' style='' ><canvas class='w-100 h-100' id='myCanvas' ></canvas></div>"

    jQuery(".celda").click(function (event) {
        celda_seleccionada = this.id
        id_textarea.value =
            "\n" + "Top: " +
            this.offsetTop + "\n" +
            "Left: " +
            this.offsetLeft + "\n" +
            "\n --------****--------- \n" +

            id_textarea.value

        id_textarea.value =
            "Celda pulsada: " +
            this.innerHTML +
            "\n" +
            "Celda Id: " +
            this.id +
            id_textarea.value

        id_textarea.value = "Ficha Pulsada_left: " + document.getElementById(ficha_seleccionada).offsetLeft + "\n" + id_textarea.value
        id_textarea.value = "Ficha Pulsada_top: " + document.getElementById(ficha_seleccionada).offsetTop + "\n" + id_textarea.value

        id_textarea.value = "Ficha Pulsada: " + ficha_seleccionada + "\n" + id_textarea.value




        document.getElementById(ficha_seleccionada).offsetTop = document.getElementById(this.id).offsetTop
        comprueba_datos()
    });

}

jQuery("#panel_partida").resize(function (event) {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});
var rtime;
var timeout = false;
var delta = 200;
function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false;
        // alert('Done resizing');
        id_textarea.value +=
            "Id: " +
            "tt" + "\n" +
            'Done resizing \n' +
            "Width: " + tablero2.offsetWidth + "\n" +
            "Height: " + tablero2.offsetHeight + "\n"
        // alert(tablero2.offsetHeight +"-" +panel_conf.offsetWidth )
        panel_conf.offsetHeight = panel_conf.offsetWidth
        recalcula_fichas()
    }
}

var ficha_seleccionada, celda_seleccionada;
const colores = ["danger", "warning", "success", "primary"]

function crea_fichas() {
    const colores = ["danger", "warning", "success", "primary"]

    colores.forEach(element => {

        for (let i = 1; i < 5; i++) {
            var final_id = element + "_" + i
            let ficha =
                "<canvas " +
                " posicion='" +
                element + "_casa_" + i +
                "' " +
                " id='" +
                final_id +
                "' " +
                " class='" +
                "ficha ficha-" + element + " rounded-5 bg-gradient bg-" + element +
                "' " +
                " style='" +
                "position:absolute; width:20px;height:20px;" +
                "' " +
                ">" +
                //i+
                "</canvas>"
            tablero2.innerHTML += ficha
        }


    });
    // $(".ficha").draggable();

    // $(".ficha").resizable();

    jQuery(".ficha").click(function (event) {
        ficha_seleccionada = this.id
        id_textarea.value =
            "Ficha pulsada: " +
            this.innerHTML +
            "\n" +
            "<code>Ficha Id: " +
            this.id +
            // "\n --------****--------- \n"+
            "\n" + "</code>Top: " +
            this.offsetTop + "\n" +
            "Left: " +
            this.offsetLeft + "\n" +
            "\n --------****--------- \n"
            + id_textarea.value
        id_textarea.value =

            "posicion: " +
            //this.getAttribute("posicion") +
            "celda_" + (parseInt(document.getElementById(this.getAttribute("posicion")).innerHTML) + parseInt(dado_valor.value)) +
            "\n" +
            id_textarea.value
        // alert("celda_"+ (parseInt(document.getElementById(this.getAttribute("posicion")).innerHTML) +parseInt(dado_valor.value)))
        celda_seleccionada = "celda_" + (parseInt(document.getElementById(this.getAttribute("posicion")).innerHTML) + parseInt(dado_valor.value))


        comprueba_datos()
        recalcula_fichas()
    });


}
function comprueba_datos() {
    id_textarea.value =
        "Ficha: " + ficha_seleccionada +
        " - Celda: " + celda_seleccionada +
        "\n" +
        "\n" +

        id_textarea.value
    var pan_origen = document.getElementById(ficha_seleccionada)
    var pan_destino = document.getElementById(celda_seleccionada)
    pan_origen.style.top = pan_destino.offsetTop + "px"
    pan_origen.style.left = pan_destino.offsetLeft + "px"
    pan_origen.setAttribute("posicion", celda_seleccionada)

    if ((pan_destino.offsetWidth / pan_destino.offsetHeight) > 1.5) {
        // alert(">1.5 | " + (pan_destino.offsetWidth/pan_destino.offsetHeight*100))
        pan_origen.style.height = pan_destino.offsetHeight + "px"
        pan_origen.style.width = pan_destino.offsetHeight + "px"

    } else {
        if ((pan_destino.offsetWidth / pan_destino.offsetHeight) < 0.7) {
            // alert("<1 | " +(pan_destino.offsetWidth/pan_destino.offsetHeight*100))
            pan_origen.style.width = pan_destino.offsetWidth + "px"
            pan_origen.style.height = pan_destino.offsetWidth + "px"
            pan_origen.style.border = "outset 8px !important;"
        }
        else {
            // alert("equal")
            pan_origen.style.width = pan_destino.offsetWidth - 30 + "px"
            pan_origen.style.height = pan_destino.offsetWidth - 30 + "px"
            pan_origen.style.top = pan_destino.offsetTop + 15 + "px"
            pan_origen.style.left = pan_destino.offsetLeft + 15 + "px"


            pan_origen.style.border = "outset 2px !important;"
        }

    }

}

function recalcula_fichas() {

    for (let i = 0; i < 16; i++) {
        //const element = array[i];
        const origen_pan = document.getElementsByClassName("ficha")[i]
        id_textarea.value =
            "\n" +
            "Posicion: " +
            origen_pan.getAttribute("posicion") +
            id_textarea.value

        //    var pan_origen=document.getElementById(element.id)
        const pan_destino = document.getElementById(origen_pan.getAttribute("posicion"))
        origen_pan.style.top = pan_destino.offsetTop + "px"
        origen_pan.style.left = pan_destino.offsetLeft + "px"

        if ((pan_destino.offsetWidth / pan_destino.offsetHeight) > 1.5) {
            // origen_pan.style.margin="10px;"
            origen_pan.style.height = (pan_destino.offsetHeight) + "px"
            origen_pan.style.width = (pan_destino.offsetHeight) + "px"

        } else {
            if ((pan_destino.offsetWidth / pan_destino.offsetHeight) < 0.7) {
                origen_pan.style.width = (pan_destino.offsetWidth) + "px"
                origen_pan.style.height = (pan_destino.offsetWidth) + "px"

            } else {
                origen_pan.style.width = pan_destino.offsetWidth - 30 + "px"
                origen_pan.style.height = pan_destino.offsetWidth - 30 + "px"
                origen_pan.style.top = pan_destino.offsetTop + 15 + "px"
                origen_pan.style.left = pan_destino.offsetLeft + 15 + "px"
                origen_pan.style.border = "outset 6px !important;"


                //   origen_pan.style.setAttribute("border","outset 18px !important;")
            }
        }
    }


    // Array.from(document.getElementsByClassName("ficha")).forEach(element => {
    //     id_textarea.value=
    //     "\n"+
    //     "Posicion: "+
    //     element.getAttribute("posicion")+
    //     id_textarea.value

    //     var pan_origen=document.getElementById(element.id)
    //     var pan_destino=document.getElementById(element.getAttribute("posicion"))
    //         pan_origen.style.top=pan_destino.offsetTop +"px"
    //         pan_origen.style.left=pan_destino.offsetLeft +"px"


    // });

}
function tira_dadoold() {
    var valor_dado = Math.floor(Math.random() * 6) + 1;
    valor_dado = Math.floor(Math.random() * 6) + 1;
    valor_dado = Math.floor(Math.random() * 6) + 1;
    var dado_field = document.getElementById("dado_valor");
    dado_field.value = valor_dado;

    var eventify = function (arr, callback) {
        arr.push = function (e) {
            Array.prototype.push.call(arr, e);
            callback(arr);
        };
    };
    var testArr = [1, 2];


    eventify(testArr, function (updatedArr) {
        //alert(updatedArr.length);
        id_textarea.value = updatedArr.length + "\n" + id_textarea.value;

    });
    testArr.push(3);

    testArr.push(4);
    testArr.push(5);
    testArr.push(6);
    sessionStorage.setItem("Test-arr", JSON.stringify(testArr))

}







function makeImage(text2, id_pass2, font_pass2) {
    // e.preventDefault();
    updateCanvas(text2, id_pass2, font_pass2);
    // this.reset();
}

function updateCanvas(text, id_pass, font_pass) {
    const c = document.getElementById(id_pass);
    const ctx = c.getContext("2d");

    //const c = document.getElementById("myCanvas");
    //const ctx = c.getContext("2d");

    //  ctx.clearRect(0, 0, 50, 50);
    //ctx.fillStyle = "#212121";
    //   ctx.fillRect(0, 0, 50, 50);

    // Customize font size, color, etc., as needed
    ctx.font = font_pass// "bold 110px Calibri ";
    //ctx.color="yellow"
    // ctx.fillStyle = "#39FF14";
    ctx.fillStyle = "yellow";

    ctx.fillText(text, 120, 110);

}

// Set up event listener
// document.querySelector(".the-words").addEventListener("submit", makeImage);
//$("#myCanvas").resizable();
//$("#myCanvas").draggable();

function carga_canvas() {
    var r;
    const colores = ["danger", "warning", "success", "primary"]

    colores.forEach(element => {

        for (r = 1; r < 5; r++) {

            makeImage(r, (element + "_" + r), "bold 110px Calibri ")

        }

    })
    var canvasElement = document.querySelector("#myCanvas");
    var context = canvasElement.getContext("2d");

    // the triangle

    var el_h = screen.height; //canvasElement.offsetHeight
    var el_w = screen.width; //canvasElement.offsetWidth
    //alert(el_h + " _" + el_w )

    context.beginPath();
    //context.moveTo((el_w/2), (el_h/2));
    context.moveTo((0), (150));

    //context.lineTo(el_w/2, (el_h/2)+50);
    //context.lineTo((el_w/2)+100, (el_h/2)+50);
    context.lineTo(150, (75));

    context.lineTo(300, 150);
    context.closePath();

    // the outline
    context.lineWidth = 1;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = "#FFCC00";
    context.fill();


    context.beginPath();
    //context.moveTo((el_w/2), (el_h/2));
    context.moveTo((0), (150));

    //context.lineTo(el_w/2, (el_h/2)+50);
    //context.lineTo((el_w/2)+100, (el_h/2)+50);
    context.lineTo(150, (75));

    context.lineTo(0, 0);
    context.closePath();

    // the outline
    context.lineWidth = 1;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = "#198754";
    context.fill();




    context.beginPath();
    //context.moveTo((el_w/2), (el_h/2));
    context.moveTo((0), (0));

    //context.lineTo(el_w/2, (el_h/2)+50);
    //context.lineTo((el_w/2)+100, (el_h/2)+50);
    context.lineTo(150, (75));

    context.lineTo(300, 0);
    context.closePath();

    // the outline
    context.lineWidth = 1;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = "#dc3545";
    context.fill();


    context.beginPath();
    //context.moveTo((el_w/2), (el_h/2));
    context.moveTo((300), (0));

    //context.lineTo(el_w/2, (el_h/2)+50);
    //context.lineTo((el_w/2)+100, (el_h/2)+50);
    context.lineTo(150, (75));

    context.lineTo(300, 150);
    context.closePath();

    // the outline
    context.lineWidth = 1;
    context.strokeStyle = '#666666';
    context.stroke();

    // the fill color
    context.fillStyle = "#0d6efd";
    context.fill()


    // canvasElement = document.querySelector("#canvas_1");
    // context = canvasElement.getContext("2d");
    // context.beginPath();
    // //context.moveTo((el_w/2), (el_h/2));
    // context.moveTo((0), (0));
    // context.lineTo(50,45);
    // context.closePath();
    // // the outline
    // context.lineWidth = 5;
    // context.strokeStyle = 'white';
    // context.stroke();

    // canvasElement = document.querySelector("#canvas_2");
    // context = canvasElement.getContext("2d");
    // context.beginPath();
    // //context.moveTo((el_w/2), (el_h/2));
    // context.moveTo((0), (50));
    // context.lineTo(65,0);
    // context.closePath();
    // // the outline
    // context.lineWidth = 5;
    // context.strokeStyle = 'white';
    // context.stroke();
    // canvasElement = document.querySelector("#canvas_4");
    // context = canvasElement.getContext("2d");
    // context.beginPath();
    // //context.moveTo((el_w/2), (el_h/2));
    // context.moveTo((0), (50));
    // context.lineTo(55,0);
    // context.closePath();
    // // the outline
    // context.lineWidth = 5;
    // context.strokeStyle = 'white';
    // context.stroke();
    // canvasElement = document.querySelector("#canvas_3");
    // context = canvasElement.getContext("2d");
    // context.beginPath();
    // //context.moveTo((el_w/2), (el_h/2));
    // context.moveTo((50), (50));
    // context.lineTo(0,5);
    // context.closePath();
    // // the outline
    // context.lineWidth = 5;
    // context.strokeStyle = 'white';
    // context.stroke();
}


panel_partida.innerHTML+=document.getElementsByTagName("template")[4].innerHTML
panel_players.innerHTML+=document.getElementsByTagName("template")[1].innerHTML


