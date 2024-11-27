

function start(){
//alert(this.name)
busca_datos()
}

function busca_datos(){
//alert(typeof(sessionStorage.getItem("test")))
let keys = Object.keys(sessionStorage);
for(let key of keys) {
  console.log(`${key}: ${sessionStorage.getItem(key)}`);
  config_central_3.innerHTML+=
  "<div>"+
  "Key: "+ //'${"key"}' +
  key +

  "</div><hr>"
}

for (const [key, value] of Object.entries(sessionStorage)) {
    config_central_3.innerHTML+="Key: " + key + " - Value: " + value  + "<hr>"} ;
};


function carga_tabla_storage(){
   // alert(JSON.parse(sessionStorage.getItem("tabla1")).length)
try {
      y=0
      Array.from(JSON.parse(sessionStorage.getItem("tabla1"))).forEach(element => {
        console.log(element)
        //console.log(element[1][2][1])
       // inserta_datos_forma(Array.from(element[1][0][1]))
        var table = document
        .getElementById("storeList")
        .getElementsByTagName("tbody")[0];
      //  table.innerHTML=""
  
      var newRow = table.insertRow(table.length);
      
            try {
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
                    
              
            } catch (error) {
              alert("1-"+error + "- " + p)
            }
  
      y+=1
    })
} catch (error) {
  alert("2-"+error)
}
  }

function rellena_de_array(){

    
}


function show_hide(id_pass){
    try{
        if(document.getElementById(id_pass).style.display==""){
            document.getElementById(id_pass).style="display:none !important;";

        }
        else{
            document.getElementById(id_pass).style="";

        }
    }
    catch{
        document.getElementById(id_pass).style="display:none !important;"

    }
  //  recalcula_fichas()

}
function show_hide2(id_pass,item){
//  alert(this.innerHTML)
try{
if(document.getElementById(id_pass).style.display==""){

//alert("show_hide2-[item-1].innerHTML: " + document.getElementById(id_pass).parentElement.parentElement.getElementsByTagName("div")[0].getElementsByTagName("button")[1].innerHTML)

//    alert(document.getElementById(id_pass).getElementsByTagName("div")[1].)
    document.getElementById(id_pass).style="display:none !important;";
   // this.innerHTML="-"
//    document.getElementById(id_pass).parentElement.getElementsByTagName("div")[0].getElementsByTagName("button")[item-1].innerHTML="+"
 //document.getElementById(id_pass).parentElement.parentElement.getElementsByTagName("div")[0].getElementsByTagName("button")[item-1].innerHTML="+"

}
else{

    document.getElementById(id_pass).style="";
    //this.innerHTML="+"
   // alert("show_hide2-this.innerHTML: "+this.innerHTML)
 //   alert("show_hide2-[item-1].innerHTML: " + document.getElementById(id_pass).parentElement.getElementsByTagName("div")[0].getElementsByTagName("button")[item-1].innerHTML)
 //   document.getElementById(id_pass).parentElement.parentElement.getElementsByTagName("div")[0].getElementsByTagName("button")[item-1].innerHTML="-"

}

}

catch{
// alert("show_hide2-no: "+id_pass)
// alert("show_hide2-[item-1].innerHTML: " + document.getElementById(id_pass).parentElement.getElementsByTagName("div")[0].getElementsByTagName("button")[item-1].innerHTML)
//document.getElementById(id_pass).parentElement.parentElement.getElementsByTagName("div")[0].getElementsByTagName("button")[item-1].innerHTML="+"

document.getElementById(id_pass).style="display:none !important;"

}

}
function show_hide3(id_pass,item){
// alert(
//     "Item: " +
//     item + "\n" +

//     "id_pass: "+
//     id_pass + "\n"

// )
try{
if(document.getElementById(id_pass).style.display==""){
//         alert(
//     "show_hide3-[item-1].innerHTML: "  +
//     document.getElementById(id_pass).parentElement.parentElement.getElementsByTagName("i")[item-1].innerHTML + "\n" +

//     "id_pass: "+
//     id_pass + "\n"
// )
    document.getElementById(id_pass).parentElement.parentElement.getElementsByTagName("i")[item-1].innerHTML="add"

                //      alert("show_hide3-[item-1].innerHTML: " + document.getElementById(id_pass).parentElement.getElementsByTagName("i")[item-1].innerHTML)
 //   document.getElementById(id_pass).parentElement.getElementsByTagName("div")[1].getElementsByTagName("button")[item-1].innerHTML="+"

    document.getElementById(id_pass).style="display:none !important;";

}
else{
        //    document.getElementById(id_pass).parentElement.getElementsByTagName("div")[1].getElementsByTagName("button")[item-1].innerHTML="-"
        document.getElementById(id_pass).parentElement.parentElement.getElementsByTagName("i")[item-1].innerHTML="remove"

    document.getElementById(id_pass).style="";
  //  this.innerHTML="+"
    //alert("show_hide3-this.innerHTML: "+this.innerHTML)
   // alert("show_hide3-[item-1].innerHTML: " + document.getElementById(id_pass).parentElement.getElementsByTagName("div")[1].getElementsByTagName("button")[item-1].innerHTML)

}

}

catch{
// alert("no"+id_pass)
   //   document.getElementById(id_pass).parentElement.getElementsByTagName("div")[1].getElementsByTagName("button")[item-1].innerHTML="+"

   document.getElementById(id_pass).parentElement.parentElement.getElementsByTagName("i")[item-1].innerHTML="add"

document.getElementById(id_pass).style="display:none !important;"
// alert("show_hide3-[item-1].innerHTML: " + document.getElementById(id_pass).parentElement.getElementsByTagName("div")[1].getElementsByTagName("button")[item-1].innerHTML)

}
//recalcula_fichas()

}
jQuery(".maximiza").click(function (event) {
    // alert(this.parentElement.parentElement.getElementsByTagName("DIV")[1].id) 
    const text_origen=this.parentElement.parentElement.parentElement
    const text_id =  this.parentElement.parentElement.parentElement.id
    //$(text_id).toggle()
    document.getElementById(text_id).style.position="absolute"
    document.getElementById(text_id).setAttribute("old_top",document.getElementById(text_id).offsetTop )
    document.getElementById(text_id).setAttribute("old_left",document.getElementById(text_id).offsetLeft)
    document.getElementById(text_id).setAttribute("old_width",document.getElementById(text_id).offsetWidth)
    document.getElementById(text_id).setAttribute("old_height",document.getElementById(text_id).offsetHeight )

    document.getElementById(text_id).style=
    "z-index:300;position:absolute !important;top:40px !important;left:0px !important;height:"+ (window.innerHeight-40)+"px !important;width:100% !important;background-color:black;color:white"
    //document.getElementById(text_id).style.left="0px !important;"

    // alert(
    //     "Origen: " + this.className.split(" ")[0] + "\n" +
    //     "id_destino: " + text_id + "\n" +
    //     "Top: " + document.getElementById(text_id).offsetTop + "\n" +
    //     "Left: " + document.getElementById(text_id).offsetLeft + "\n" +
    //     "Width: " + document.getElementById(text_id).offsetWidth + "\n" +
    //     "Height: " + document.getElementById(text_id).offsetHeight + "\n" 

    // )
    // alert(
    //     "Origen: " + this.className.split(" ")[0] + "\n" +
    //     "id_destino: " + text_id + "\n" +
    //     "old_Top: " + document.getElementById(text_id).getAttribute("old_top") + "\n" +
    //     "old_Left: " + document.getElementById(text_id).getAttribute("old_left") +"\n" +
    //     "old_Width: " + document.getElementById(text_id).getAttribute("old_width") +"\n" +
    //     "old_Height: " +  document.getElementById(text_id).getAttribute("old_height") +"\n" 

    //     )          
    // recalcula_fichas()// 
});
jQuery(".minimiza").click(function (event) {
// alert(this.parentElement.parentElement.getElementsByTagName("DIV")[1].id) 
const text_origen=this.parentElement.parentElement.parentElement

const text_id =  this.parentElement.parentElement.parentElement.id
//$(text_id).toggle()
// this.old_top=document.getElementById(text_id).offsetTop 
//     this.old_left=document.getElementById(text_id).offsetLeft
//     this.old_width=document.getElementById(text_id).offsetWidth
//     this.old_height=document.getElementById(text_id).offsetHeight 
   
document.getElementById(text_id).setAttribute("style","")
// "position:unset;"+
//     "top:"+
//     document.getElementById(text_id).getAttribute("old_top") +
//     "px !important;"+
//     "left:"+
//     document.getElementById(text_id).getAttribute("old_left")+
//     "px !important;"+
//     "height:" +
//     document.getElementById(text_id).getAttribute("old_height") +
//     "px !important;"+
//     "width:"+
//     document.getElementById(text_id).getAttribute("old_width")+
//     "px !important;"

   


// alert(
//        "Origen: " + this.className.split(" ")[0] + "\n" +
//        "id_destino: " + text_id + "\n" +
//        "Top: " + document.getElementById(text_id).offsetTop + "\n" +
//        "Left: " + document.getElementById(text_id).offsetLeft + "\n" +
//        "Width: " + document.getElementById(text_id).offsetWidth + "\n" +
//        "Height: " + document.getElementById(text_id).offsetHeight + "\n" 

//     )
//     alert(
//         "Origen: " + this.className.split(" ")[0] + "\n" +
//         "id_destino: " + text_id + "\n" +
//         "old_Top: " + this.old_top + "\n" +
//         "old_Left: " + this.old_left + "\n" +
//         "old_Width: " + this.old_width + "\n" +
//         "old_Height: " + this.old_height + "\n" 

//         ) 
// recalcula_fichas() 
});
$("#panel_general").resizable();
$("#panel_general").draggable();
boton_toggle_2.click()

window.onclick=win_click()

function win_click(){
//alert(this)
//alert(barra_botones)
}
start()
