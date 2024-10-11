var fichero = "";

function construir_fichas() {

    var colores;

    colores = ["amarillas", "azules", "rojas", "verdes"];

    for (i = 0; i < colores.length; i++) {

        fichero += "<div class='caja_fichas border p-2 w-auto fichas_";
        fichero += colores[i];

        fichero += " '>";

        for (j = 0; j < 4; j++) {

            fichero += "<nav onclick='selected_ficha_id=(this.id)'  class='ficha ui-widget-content' id='";
            fichero += colores[i] + "_" + (4 - j);
            fichero += "' >";

            fichero += "<p class='orden' >" + (4 - j) + "</p>";
            fichero += "<p class='situacion' >0</p>";

            fichero += "</nav>";
        }

        fichero += "</div > ";
    }

    //   fichero += "</div>";
   

}

// function coloca_fichas() {
//     var colores;

//     colores = ["amarillas", "azules", "rojas", "verdes"];
//     inicios_top = [300, 50, 50, 300];
//     inicios_left = [300, 300, 50, 50];

//     for (i = 0; i < colores.length; i++) {

//         for (j = 0; j < 4; j++) {
//             valor_id = colores[i] + "_" + (j + 1);

//             document.getElementById(valor_id).style.left = ((inicios_left[i]) + (j * 20)) + "px";
//             document.getElementById(valor_id).style.top = (inicios_top[i]) + "px";

//         }
//     }
// }

// function tira_dadoold() {
//     var valor_dado = Math.floor(Math.random() * 6) + 1;
//     var dado_field = document.getElementById("dado_valor");
//     dado_field.value = valor_dado;

// }
// var map = [("1,(100/21*21),0.82"), ("2,0.53,0.78"), ("3,0.53,0.74"), ("4,0.53,0.70"), ("5,0.53,0.66"), ("6,0.53,0.62"), ("7,0.53,0.58"), ("8,0.53,0.54")];
// map.push(("9,0.56,0.48"), ("10,0.62,0.48"), ("11,0.68,0.48"), ("12,0.72,0.48"), ("13,0.76,0.48"), ("14,0.80,0.48"), ("15,0.84,0.48"), ("16,0.88,0.48"));

// function mover() {

//     canvas_var = document.getElementsByTagName("IMG")[1].parentElement.parentElement;
//     var x_0 = canvas_var.style.left;
//     var y_0 = canvas_var.style.top;

//     var ximage = document.getElementsByTagName("IMG")[1].parentElement.parentElement.style.width;
//     var yimage = document.getElementsByTagName("IMG")[1].parentElement.parentElement.style.height;

//     ficha1left = 0.55
//     ficha1top = 0.85

//     document.getElementById(selected_ficha_id).getElementsByTagName("P")[1].innerHTML = parseInt(document.getElementById(selected_ficha_id).getElementsByTagName("P")[1].innerHTML) + parseInt(document.getElementsByClassName("dado_valor")[0].value);
//     var valor2 = parseInt(document.getElementById(selected_ficha_id).getElementsByTagName("P")[1].innerHTML);

//     document.getElementById(selected_ficha_id).style.left = (parseInt(ximage) * map[valor2 - 1].split(",")[1]) + "px";

//     document.getElementById(selected_ficha_id).style.top = (parseInt(yimage) * map[valor2 - 1].split(",")[2]) + "px";

//     document.getElementsByClassName('dado_img')[0].style.visibility = 'visible';
//     cambia_color();

// }

function carga_especial() {

        construir_fichas();
        document.getElementById("pantalla1").innerHTML += fichero;
        $(".ficha").draggable();
        $(".caja_fichas ").draggable();

      // coloca_fichas();

}