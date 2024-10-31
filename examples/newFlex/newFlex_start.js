var fichero = "";
carga_plantillas()
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