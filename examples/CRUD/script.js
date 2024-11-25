//!initial values
var selectedRow = null;

function recibe_Datos(e){
var datos_forma=lee_datos_forma();

  if (selectedRow == null) {
    inserta_datos_forma(datos_forma);
  //  crea_tabla();
  } else {
    updateRecord(datos_forma);
  }
  selectedRow = null;

}

function lee_datos_forma(){
  var datos_forma={}
    p=0
    campos_lista.forEach(element => {
      datos_forma[element]=storeList.getElementsByTagName("input")[p].value;
    p+=1
  });
  console.log("lee_datos_forma",datos_forma)
  sessionStorage.setItem("lee_datos_forma",JSON.stringify(Array.from((datos_forma))))

  return datos_forma
}

function inserta_datos_forma(data){
  console.log("data",data)
  var cell
  var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
     // newRow.className="border d-flex  "
  p=0
  campos_lista.forEach(element => {
   // alert(data[element])
    data[data[element]]=storeList.getElementsByTagName("input")[p].value;
    //newRow.cells[p].innerHTML =data[data[element]];

    cell = newRow.insertCell(p);
    cell.innerHTML =  data[element];
    console.log(data)
    //cell.className="w-100 text-center border border-2"
    //alert(element)
p+=1
  });
  cell = newRow.insertCell(p);
  cell.innerHTML = '<div class="d-flex gap-1 me-2"><button class="btn btn-sm" onClick="onEdit(this)">Edit</button> <button class="btn btn-sm"  onClick = "onDelete(this)">Delete</button></div>';// data[element];
  //cell.className=" w-100 flex-grow-1 d-flex gap-1 text-center border border-2"
}


function crea_tabla(){
  var table = document
  .getElementById("storeList")
  .getElementsByTagName("tbody")[0];
//var newRow = table.insertRow(table.length);
  var tabla_texto=[]

// tabla_texto=[]
   Array.from(table.rows).forEach(element => {
     var tabla_texto2=[]
 //tabla_texto2=[]
    Array.from(element.cells).forEach(element2 => {
      // alert()
     
      var cell_text =storeList.getElementsByTagName("td")[element2.cellIndex].innerHTML.split("<")[0]
      tabla_texto2.push([cell_text,element2.innerHTML])

    })
 tabla_texto.push(["linea",tabla_texto2])
   
   });

  sessionStorage.setItem("tabla1",JSON.stringify(tabla_texto))

}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement.parentElement;

  p=0
  campos_lista.forEach(element => {
  //  formData[element]=storeList.getElementsByTagName("input")[p].value;
   // selectedRow.cells[p].innerHTML =formData[element];
    storeList.getElementsByTagName("input")[p].value=selectedRow.cells[p].innerHTML
    //alert(element)
p+=1
  });
  // document.getElementById("productCode").value = selectedRow.cells[0].innerHTML;
  // document.getElementById("product").value = selectedRow.cells[1].innerHTML;
  // document.getElementById("qty").value = selectedRow.cells[2].innerHTML;
  // document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
  // storeList.getElementsByTagName("input")[0].value = selectedRow.cells[0].innerHTML;
  // storeList.getElementsByTagName("input")[1].value = selectedRow.cells[1].innerHTML;
  // storeList.getElementsByTagName("input")[2].value = selectedRow.cells[2].innerHTML;
  // storeList.getElementsByTagName("input")[3].value= selectedRow.cells[3].innerHTML;


  
}
//updating the data
function updateRecord(formData) {

  p=0
  campos_lista.forEach(element => {
    formData[element]=storeList.getElementsByTagName("input")[p].value;
    selectedRow.cells[p].innerHTML =formData[element];

  p+=1
  });

  crea_tabla()

}
//!deleting the data (delete method)
function onDelete(td) {
  if (confirm("Are you sure about deleting😒 the data ?")) {
    row = td.parentElement.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
   resetForm();
  }
}
//!reseting the values in form
function resetForm() {

  p=0
  campos_lista.forEach(element => {
        
    storeList.getElementsByTagName("input")[p].value="";

  p+=1
  });

  selectedRow = null;
  crea_tabla()
}
function carga_tabla_storage(){
  alert(JSON.parse(sessionStorage.getItem("tabla1")).length)
  y=0
  Array.from(JSON.parse(sessionStorage.getItem("tabla1"))).forEach(element => {
    console.log(element)
    console.log(element[1][2][1])
   // inserta_datos_forma(Array.from(element[1][0][1]))
    var table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  p=0
  campos_lista.forEach(element2 => {
   // alert(data[element])
    //data[data[element]]=storeList.getElementsByTagName("input")[p].value;
    //newRow.cells[p].innerHTML =data[data[element]];

    cell = newRow.insertCell(p);
    cell.innerHTML = element[1][p][1]// data[element];
    //cell.className="w-100 text-center border border-2"
    //alert(element)
  p+=1

  });
  cell = newRow.insertCell(p);
  cell.innerHTML = '<div class="d-flex gap-1 me-2"><button class="btn btn-sm" onClick="onEdit(this)">Edit</button> <button class="btn btn-sm"  onClick = "onDelete(this)">Delete</button></div>';// data[element];
  
  y+=1
})
}