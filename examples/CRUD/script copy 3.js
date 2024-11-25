//!initial values
var selectedRow = null;

function recibe_Datos(e){
var datos_forma=lee_datos_forma();

  if (selectedRow == null) {
    inserta_datos_forma(datos_forma);
    crea_tabla();
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
    //cell.className="w-100 text-center border border-2"
    //alert(element)
p+=1
  });
  cell = newRow.insertCell(p);
  cell.innerHTML = '<div class="d-flex gap-1 me-2"><button class="btn btn-sm" onClick="onEdit(this)">Edit</button> <button class="btn btn-sm"  onClick = "onDelete(this)">Delete</button></div>';// data[element];
  //cell.className=" w-100 flex-grow-1 d-flex gap-1 text-center border border-2"
}




//!form submit logic
// function onFormSubmit(e) {

 
//   event.preventDefault();
//   var formData = readFormData2();
//   if (selectedRow == null) {
//     insertNewRecord(formData);
//    crea_tabla();
//   } else {
//     updateRecord(formData);
//   }
//   selectedRow = null;

// }
// var formData2 = {};
// function readFormData2(){
//   p=0
//   campos_lista.forEach(element => {
//   //  alert(p)
//     formData2[element]=storeList.getElementsByTagName("input")[p].value;
//     //alert(element)
// p+=1
//   });
// //formData2=[[campos_lista[0],""],[campos_lista[1],""]]


// sessionStorage.setItem("formData_2",JSON.stringify(formData2))
// return formData2;
// }

// var formData = {};


//!get method(Retriving the data)
// function readFormData() {

//   // formData["productCode"] = document.getElementById("productCode").value;
//   // formData["product"] = document.getElementById("product").value;
//   // formData["qty"] = document.getElementById("qty").value;
//   // formData["perPrice"] = document.getElementById("perPrice").value;

//   alert(storeList.getElementsByTagName("td")[0].innerHTML.split("<")[0])
//   //formData[storeList.getElementsByTagName("td")[0].innerHTML.split("<")[0]] = storeList.getElementsByTagName("input")[0].value;
//   formData["productCode"] = storeList.getElementsByTagName("input")[0].value;

//   formData["product"] = storeList.getElementsByTagName("input")[1].value;
//   formData["qty"] = storeList.getElementsByTagName("input")[2].value;
//   formData["perPrice"] = storeList.getElementsByTagName("input")[3].value;
//  // alert(Array.from(formData).length)
//  sessionStorage.setItem("formData_1",JSON.stringify(formData))
//  //sessionStorage.setItem("StoreList",JSON.stringify(Array.from(storeList.tbody.innerHTML)))
// //alert(formData.product)
// readFormData2()
//   return formData;
  
// }

//!insert the data (Post method)
// function insertNewRecord(data) {
//   var cell
//   var table = document
//     .getElementById("storeList")
//     .getElementsByTagName("tbody")[0];
//   var newRow = table.insertRow(table.length);
//       newRow.className="border d-flex  "
//   p=0
//   campos_lista.forEach(element => {
//    // alert(data[element])
//     data[data[element]]=storeList.getElementsByTagName("input")[p].value;
//     //newRow.cells[p].innerHTML =data[data[element]];

//     cell = newRow.insertCell(p);
//     cell.innerHTML =  data[element];
//     cell.className="w-100 text-center border border-2"
//     //alert(element)
// p+=1
//   });
//   cell = newRow.insertCell(p);
//   cell.innerHTML = '<div class="d-flex gap-1 me-2"><button class="btn btn-sm" onClick="onEdit(this)">Edit</button> <button class="btn btn-sm"  onClick = "onDelete(this)">Delete</button></div>';// data[element];
//   cell.className=" w-100 flex-grow-1 d-flex gap-1 text-center border border-2"
//   //newRow.insertCell[p].innerHTML ='<button onClick="onEdit(this)">Edit</button> <button onClick = "onDelete(this)">Delete</button>';


//   // cell1 = newRow.insertCell(0);
//   // cell1.innerHTML = data.Id;
//   // cell1.className="w-100 text-center border border-2"

//   // cell2 = newRow.insertCell(1);
//   // cell2.innerHTML = data.Name;
//   // cell2.className="w-100 text-center border border-2"

//   // cell3 = newRow.insertCell(2);
//   // cell3.innerHTML = data.Description;
//   // cell3.className="w-100 text-center border border-2"

//   // cell4 = newRow.insertCell(3);
//   // cell4.innerHTML = data.Others;
//   // cell4.className="w-100 text-center border border-2"

//   // cell5 = newRow.insertCell(4);
//   // cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick = "onDelete(this)">Delete</button>`;
//   // cell5.className="w-100 text-center border border-2"

  


// }
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
//!edit and update the data (Update method)
//editing the data(get)
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
//  alert(formData2.Name)

  p=0
  campos_lista.forEach(element => {
    formData[element]=storeList.getElementsByTagName("input")[p].value;
    selectedRow.cells[p].innerHTML =formData[element];

    //alert(element)
p+=1
  });

  crea_tabla()
  // selectedRow.cells[0].innerHTML =formData.Id;
  // selectedRow.cells[1].innerHTML = formData.Name;
  // selectedRow.cells[2].innerHTML = formData.Description;
  // selectedRow.cells[3].innerHTML = formData.Others;
}
//!deleting the data (delete method)
//delete the data
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
    //selectedRow.cells[p].innerHTML =formData[element];

    //alert(element)
p+=1
  });
  // document.getElementById("productCode").value = "";
  // document.getElementById("product").value = "";
  // document.getElementById("qty").value = "";
  // document.getElementById("perPrice").value = "";
  selectedRow = null;
  crea_tabla()
}