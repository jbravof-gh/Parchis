
function start_7(){

    var Id_destino = "body_id"
    var Tag_text = "div"
    var Id_text = "principal"
    var Class_text = "border border-danger  rounded d-flex flex-row items-stretch m-0 p-1 h-50 gap-2"
    document.getElementById(Id_destino).innerHTML +=   adding_element(Tag_text,Id_text,Class_text,"")

            var Id_destino = "principal"
            var Tag_text = "div"
            var Id_text = "principal_div_1"
            var Class_text = "border border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1"
            document.getElementById(Id_destino).innerHTML +=   adding_element(Tag_text,Id_text,Class_text,"")

            var Id_destino = "principal"
            var Tag_text = "div"
            var Id_text = "principal_div_2"
            var Class_text = "border-0 border-primary d-flex flex-column items-stretch m-0 p-0 w-100 h-100 gap-1"
            document.getElementById(Id_destino).innerHTML +=   adding_element(Tag_text,Id_text,Class_text,"")

                var Id_destino = "principal_div_2"
                var Tag_text = "div"
                var Id_text = "principal_div_2_top"
                var Class_text = "border border-secondary rounded m-0 d-flex justify-content-evenly"
                document.getElementById(Id_destino).innerHTML +=   adding_element(Tag_text,Id_text,Class_text,"")

                    var Id_destino = "principal_div_2_top"
                    var Tag_text = "button"
                    var Id_text = "principal_div_2_top_button_1"
                    var Class_text = "btn btn-danger bg-gradient border rounded m-1"
                    document.getElementById(Id_destino).innerHTML +=   adding_element(Tag_text,Id_text,Class_text,"Run")

                    var Id_destino = "principal_div_2_top"
                    var Tag_text = "button"
                    var Id_text = "principal_div_2_top_button_11"
                    var Class_text = "btn btn-danger bg-gradient border rounded m-1"
                    document.getElementById(Id_destino).innerHTML +=   adding_element(Tag_text,Id_text,Class_text,"Run")

                    var Id_destino = "principal_div_2_top"
                    var Tag_text = "button"
                    var Id_text = "principal_div_2_top_button_2"
                    var Class_text = "btn btn-warning bg-gradient border rounded m-1"
                    document.getElementById(Id_destino).innerHTML +=   adding_element(Tag_text,Id_text,Class_text,"Go")
                
                var Id_destino = "principal_div_2"
                var Tag_text = "div"
                var Id_text = "principal_div_2_mid"
                var Class_text = "border border-secondary h-100 rounded m-0"
                document.getElementById(Id_destino).innerHTML +=   adding_element(Tag_text,Id_text,Class_text,"")

    var Id_destino = "body_id"
    var Tag_text = "div"
    var Id_text = "principal_2"
    var Class_text = "border border-danger  rounded d-flex flex-row items-stretch m-0 p-1 h-50 gap-2"
    document.getElementById(Id_destino).innerHTML +=   adding_element(Tag_text,Id_text,Class_text,"")
}



function start_6(txt){
  //  alert(txt)
 //   alert(new_text)
  //  setTimeout(() => {
  
  //  }, 1000);
  
  
  new_text=adding_element("div","principal","border border-danger  rounded d-flex flex-row items-stretch m-1 p-2 h-100 gap-2")
  document.getElementById(txt).innerHTML +=   new_text


  new_text=adding_element("div","principal_div_1","border border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1")
  document.getElementById("principal").innerHTML +=   new_text

  new_text=adding_element("div","principal_div_2","border border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1")
  document.getElementById("principal").innerHTML +=   new_text

  new_text=adding_element("div","principal_div_3","border border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1")
  document.getElementById("principal").innerHTML +=   new_text

  new_text=adding_element("div","principal_div_2_div_1","border border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1")
  document.getElementById("principal_div_2").innerHTML +=   new_text

  new_text=adding_element("div","principal_div_2_div_2","border border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1")
  document.getElementById("principal_div_2").innerHTML +=   new_text
  
  new_text=adding_element("div","principal_div_2_div_3","border border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1")
  document.getElementById("principal_div_2").innerHTML +=   new_text
}
function adding_element(tag_text,id_text,class_text,innerhtml_text){
  
    element_text = '<' + tag_text + ' id="' + id_text + '" class="' + class_text + '" >' + innerhtml_text + '</' + tag_text + '>'



   return element_text

}


   // start_7()

//    setTimeout(() => {
//     construir_fichas();
// document.getElementById("pantalla1").innerHTML += fichero;
// $(".ficha").draggable();
// $(".caja_fichas").draggable();
// ubicacion()
// }, 5000);



var fichero = "";
//carga_plantillas()
construir_fichas()
ubicacion();

adding_listeners()

$("#panel_log_top").draggable();
$("#panel_log_top").resizable();

$("#panel_tools").resizable();
$("#panel_tools").draggable();

$("#panel_tablero").resizable();
$("#panel_tablero").draggable();

$("#panel_conf").resizable();
$("#panel_conf").draggable();

$(".panel-div").draggable();

$(".ficha").draggable();

// setTimeout(carga_paneles_div,5000)
carga_paneles_div()