var fichero = "";
var mapa_casillas = []
// casillas 1-8
mapa_casillas.push({ valorx: "263.571", valory: "475.571" })
mapa_casillas.push({ valorx: "263.571", valory: "455.571" })
mapa_casillas.push({ valorx: "263.571", valory: "435.571" })
mapa_casillas.push({ valorx: "263.571", valory: "415.571" })
mapa_casillas.push({ valorx: "263.571", valory: "395.571" })
mapa_casillas.push({ valorx: "263.571", valory: "375.571" })
mapa_casillas.push({ valorx: "263.571", valory: "355.571" })
mapa_casillas.push({ valorx: "263.571", valory: "335.571" })
// casillas 9-16
mapa_casillas.push({ valorx: "263.571", valory: "315.571" })
mapa_casillas.push({ valorx: "263.571", valory: "475.571" })
mapa_casillas.push({ valorx: "263.571", valory: "455.571" })
mapa_casillas.push({ valorx: "263.571", valory: "435.571" })

console.log("x", mapa_casillas[0].valorx)


function carga_especial() {

    construir_fichas();
    document.getElementById("pantalla1").innerHTML += fichero;
    $(".ficha").draggable();
    //$(".caja_fichas ").draggable();

    // coloca_fichas();
    ubicacion_inicial()
}
function construir_fichas() {

    var colores;

    colores = ["amarillas", "azules", "rojas", "verdes"];

    for (i = 0; i < colores.length; i++) {

        fichero += "<div class='caja_fichas border-0 p-2 w-auto fichas_";
        fichero += colores[i];

        fichero += " '>";

        for (j = 0; j < 4; j++) {

            // fichero += "<nav onclick='selected_ficha_id=(this.id)'  class='ficha ui-widget-content' id='";
            fichero += "<nav onclick='selected_ficha_id=(this.id)'  class='ficha ' id='";

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
var panel_mapa_top = "";
var panel_mapa = "";
function crea_mapa() {
    // panel_mapa_top += "<div class=''>"
    // panel_mapa_top += "<select id='selector_color'>"

    // panel_mapa_top += "<option>amarillas</option><option>verdes</option><option>rojas</option><option>azules</option>"
    // panel_mapa_top += "</select>"

    // panel_mapa_top += "<select id='selector_numero'>"

    // panel_mapa_top += "<option>1</option><option>2</option><option>3</option><option>4</option>"
    // panel_mapa_top += "</select>"
    // panel_mapa_top += "</div>"
    //   panel_mapa += "<div>"
    var contador_casillas_mapa = mapa_casillas.length
    for (let i = 0; i < contador_casillas_mapa; i++) {
        //panel_fichas
        panel_mapa += "<div class='casilla border text-center p-2'>"
        panel_mapa += "<p class='p_cell  border'> cell: " + (i + 1) + "</p>"
        panel_mapa += "<div class='border p-2 pb-0 mb-2 mt-0'>"

        panel_mapa += "<code> x: " + (mapa_casillas[i].valorx) + "</code>"
        panel_mapa += "<code><p> y: " + (mapa_casillas[i].valory) + "</p></code>"

        panel_mapa += "</div>"

        panel_mapa += "<button class='btn btn-primary btn-sm border' onclick='mueve_ficha(" + (mapa_casillas[i].valorx) + "," + (mapa_casillas[i].valory) + ")'>Mueve</button>"
        panel_mapa += "</div>"

    }
    //  panel_mapa += "</div>"

    // panel_fichas.innerHTML += panel_mapa_top
    panel_fichas.innerHTML += panel_mapa



}
function mueve_ficha(val2, val3) {

    try {

        //  console.log("val1", val1)
        console.log("val2", val2)
        console.log("val3", val3)
        //var e = document.getElementById("selector_color");
        var color_seleccionado = document.getElementById("selector_color").options[document.getElementById("selector_color").selectedIndex].value;
        var ficha_seleccionada = document.getElementById("selector_numero").options[document.getElementById("selector_numero").selectedIndex].value;

        var valor_id = color_seleccionado + "_" + ficha_seleccionada
        var valor_x = val2 + "px"
        var valor_y = val3 + "px"
        var valor_style = "margin-left:" + valor_x + ";" + "margin-top:" + valor_y
        document.getElementById(valor_id).style = valor_style

    } catch (error) {
        alert(error + "\n Seleccione color y ficha")
    }



}
function crea_coordenadas() {
    console.log("creando coordenadas")
    const panel_navegacion = document.getElementById("panel_nav")

    const panel_imagen = document.getElementById("imagen_parchis")

    const panel_imagen_coordenadas = [panel_imagen.width, panel_imagen.height]


    panel_navegacion.innerHTML += "<div class='border'>" + "Width: " + panel_imagen_coordenadas[0] + "</div>"
    panel_navegacion.innerHTML += "<div  class='border'>" + "Height: " + panel_imagen_coordenadas[1] + "</div>"
    panel_navegacion.innerHTML += "<div  class='border'>" + "Top: " + panel_imagen.top + "</div>"

}

function ubicacion_inicial() {
    // amarillas
    document.getElementById("amarillas_1").style = "margin-left:310px;margin-top:360px"
    document.getElementById("amarillas_2").style = "margin-left:415px;margin-top:360px"
    document.getElementById("amarillas_3").style = "margin-left:310px;margin-top:470px"
    document.getElementById("amarillas_4").style = "margin-left:415px;margin-top:470px"

    // azules
    document.getElementById("azules_1").style = "margin-left:310px;margin-top:75px"
    document.getElementById("azules_2").style = "margin-left:415px;margin-top:75px"
    document.getElementById("azules_3").style = "margin-left:310px;margin-top:185px"
    document.getElementById("azules_4").style = "margin-left:415px;margin-top:185px"

    // rojas
    document.getElementById("rojas_1").style = "margin-left:25px;margin-top:75px"
    document.getElementById("rojas_2").style = "margin-left:130px;margin-top:75px"
    document.getElementById("rojas_3").style = "margin-left:25px;margin-top:185px"
    document.getElementById("rojas_4").style = "margin-left:130px;margin-top:185px"

    // verdes
    document.getElementById("verdes_1").style = "margin-left:25px;margin-top:360px"
    document.getElementById("verdes_2").style = "margin-left:130px;margin-top:360px"
    document.getElementById("verdes_3").style = "margin-left:25px;margin-top:470px"
    document.getElementById("verdes_4").style = "margin-left:130px;margin-top:470px"
}