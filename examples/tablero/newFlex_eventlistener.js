
function adding_listeners() {

    jQuery(".panel-div>header>h2").click(function (event) {
        // alert(this.parentElement.parentElement.getElementsByTagName("DIV")[1].id) 
        const text_id = "#" + this.parentElement.parentElement.getElementsByTagName("DIV")[1].id
        $(text_id).toggle()

    });
    jQuery(".panel-div>header>h4").click(function (event) {
        // alert(this.parentElement.parentElement.getElementsByTagName("DIV")[1].id) 
        const text_id = "#" + this.parentElement.parentElement.getElementsByTagName("DIV")[1].id
        $(text_id).toggle()

    });

    jQuery("#id_boton_carga").click(function (event) {
        document.getElementById("panel-div-body_1").innerHTML = document.getElementsByTagName("template")[0].innerHTML


    });
    jQuery("#id_boton_fichas").click(function (event) {
        //  construir_fichas();
        //   document.getElementById("pantalla1").innerHTML += fichero;
        // $(".ficha").draggable();
        //   $(".caja_fichas").draggable();
        //   ubicacion();


    });
    jQuery("#id_boton_tools").click(function (event) {
        document.getElementById("panel-div-body_2").innerHTML = document.getElementsByTagName("template")[2].innerHTML

    });
    jQuery("#id_boton_load").click(function (event) {
        document.getElementById("panel-div-body_3").innerHTML = document.getElementsByTagName("template")[3].innerHTML

    });
    jQuery(".celda").click(function (event) {
        //$(this.href).show();
        //  alert(this.id)
        console.log("position", this.style)
        let X = event.clientX;
        let Y = event.clientY;
        var valor_pass = this.id || this.innerHTML
        try {
            // document.getElementById("input_1").value = "Celda: " + valor_pass + " - Pos_x: " + X + " - Pos_y: " + Y + " offset-left: " + this.offsetLeft + " offset-top: " + this.offsetTop 
            input_select2.value = valor_pass

            //  try{alert(mueve_auto.checked)}
            try { if (mueve_auto.checked == true) { 
                 mueve_ficha(input_select.value, input_select2.value) 
                 mueve_auto.checked=false
                // document.getElementById("boton_mueve").click() 
            } }
            catch { }

        }

        catch { alert(this); }


    });
    var rtime;
    var timeout = false;
    var delta = 200;
    jQuery("#panel_tablero").resize(function (event) {
                rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
            });
    
    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
           // alert('Done resizing');
            recalcula_casilla() 
        }               
    }
    $( window ).on( "resize", function() {
        recalcula_casilla() 
        // $( "#log" ).append( "<div>Handler for `resize` called.</div>" );
      } );    
}

function add_listeners_boton_clase(){
    jQuery(".boton_clase").click(function (event) {
alert(this.getAttribute("name"))
        const valor_origen=document.getElementById(this.getAttribute("name"))
        var valor_w=valor_origen.offsetWidth
        var valor_h=valor_origen.offsetHeight

        //const valor_destino=
          //  alert(this.getAttribute("name"))
          alert("medida-x: " + valor_w + "\nl" + "medida-y: " + valor_h)

          
         const  valor_pregunta=prompt("height","width:200px !important;height:200px !important")
         alert(valor_pregunta)
          valor_origen.setAttribute("style",valor_pregunta)
    });

}