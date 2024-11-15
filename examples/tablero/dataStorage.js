        
  var old_x,old_y,old_w,old_h
        //old
        function start_1(){
            document.body.innerHTML+=adding_element("div","div_principal","div_principal","")
            document.body.innerHTML+=adding_element("div","div_principal_2","div_principal","")
    
                document.getElementById("div_principal").innerHTML+=adding_element("div","div_panel_1","div_panel","<h2>div panel 1</h2>")
                document.getElementById("div_principal").innerHTML+=adding_element("div","div_panel_2","div_panel","<h2>div panel 2</h2>")
    
                
                
                document.getElementById("div_panel_1").innerHTML+=adding_element("div","div_panel_1_top","div_panel_top","")
                document.getElementById("div_panel_1").innerHTML+=adding_element("div","div_panel_1_mid","div_panel_mid","div panel_top 1")
          
                
                document.getElementById("div_panel_1_top").innerHTML+=adding_element("button","div_panel_1_top_btn_1","div_panel_top_button","Go")
    
                    document.getElementById("div_panel_2").innerHTML+=adding_element("div","div_panel_2_top","div_panel_top","")
                    document.getElementById("div_panel_2").innerHTML+=adding_element("div","div_panel_2_mid","div_panel_mid","div panel_top 1")
    
    
                        document.getElementById("div_panel_2_top").innerHTML+=adding_element("button","div_panel_2_top_btn_1","div_panel_top_button","Go")
        }
            // Create Tags
        function start_2(){
            document.getElementById("main_content").innerHTML+=adding_element("header","panel_header","panel_header bg-black bg-gradient d-flex p-1 justify-content-start","")
            document.getElementById("main_content").innerHTML+=adding_element("footer","panel_footer","panel_footer border border-outset border-5 border-secondary","")
    
            document.getElementById("main_content").innerHTML+=adding_element("nav","panel_nav","panel_nav d-flex flex-column border border-3 border-warning","")
            document.getElementById("main_content").innerHTML+=adding_element("main","panel_main","panel_main d-flex flex-column border border-0 border-danger rounded","")
            document.getElementById("main_content").innerHTML+=adding_element("aside","panel_side","panel_side d-flex flex-column","")

        }
        function start_2_new(){
            document.getElementById("main_content").innerHTML+=adding_element("header","panel_header","","")
            document.getElementById("main_content").innerHTML+=adding_element("footer","panel_footer","","")
    
            document.getElementById("main_content").innerHTML+=adding_element("nav","panel_nav","","")
            document.getElementById("main_content").innerHTML+=adding_element("main","panel_main","","")
            document.getElementById("main_content").innerHTML+=adding_element("aside","panel_side","","")

        }
            //Create Header Buttons
        function start_3(){
    
            document.getElementsByTagName("header")[0].innerHTML+=adding_element("button","panel_header_button_1","panel_header_button btn btn-sm mt-1 mb-1 border bg-danger bg-gradient pt-1 text-white","↻ ")
            document.getElementsByTagName("header")[0].innerHTML+=adding_element("button","panel_header_button_2","panel_header_button btn  btn-sm mt-1 mb-1  border bg-success bg-gradient pt-1","▣ sessionStrg")
            document.getElementsByTagName("header")[0].innerHTML+=adding_element("button","panel_header_button_3","panel_header_button btn btn-sm mt-1 mb-1  border bg-warning bg-gradient pt-1","□ localStrg")
            document.getElementsByTagName("header")[0].innerHTML+=adding_element("button","panel_header_button_4","panel_header_button btn  btn-sm mt-1 mb-1 border bg-secondary bg-gradient pt-1 text-white","▤ indexedDB")
    
    
        }
            //Create Mid Panels
        function start_4(){
    
        document.getElementsByTagName("nav")[0].innerHTML+=adding_element("div","","h-100 mt-0 pt-1 p-2 pb-2 border-0 d-flex flex-column","")
        document.getElementsByTagName("nav")[0].getElementsByTagName("div")[1].innerHTML+=adding_element("div","div_pan"," mb-0 border-0 rounded d-flex flex-column h-100 p-1 w-100 ","<div id='sessionstrg_id' class='btn bg-white border mb-1' >▣ sessionStrg</div>")
    
        document.getElementsByTagName("aside")[0].innerHTML+=adding_element("div","","h-100 mt-1 p-2 border-0 d-flex flex-column gap-1","")
        document.getElementsByTagName("aside")[0].getElementsByTagName("div")[1].innerHTML+=adding_element("div",""," mb-0 border-0 rounded border-black h-100 p-2 d-flex flex-column gap-1","Go1")
        document.getElementsByTagName("aside")[0].getElementsByTagName("div")[1].innerHTML+=adding_element("div",""," mb-0 border-0 rounded border-black h-100 p-2","Go2  ")
    
        document.getElementsByTagName("aside")[0].getElementsByTagName("div")[1].getElementsByTagName("div")[1].innerHTML=document.head.getElementsByTagName("template")[1].innerHTML
        document.getElementsByTagName("aside")[0].getElementsByTagName("div")[1].getElementsByTagName("div")[0].innerHTML=document.head.getElementsByTagName("template")[0].innerHTML
        document.getElementsByTagName("main")[0].innerHTML+=document.head.getElementsByTagName("template")[2].innerHTML

        }
        function crea_top_bar(tag){
            document.getElementsByTagName(tag)[0].innerHTML+=adding_element("div","","top-bar mt-0 p-0 me-2 mb-0","")
    
            document.getElementsByTagName(tag)[0].getElementsByClassName("top-bar")[0].innerHTML+=adding_element("button",tag + "_button_1","top-bar-button-open text-success btn  border-0 border-black p-0 pt-0 pb-0","◫")
            document.getElementsByTagName(tag)[0].getElementsByClassName("top-bar")[0].innerHTML+=adding_element("button",tag + "_button_2","top-bar-button-close text-danger btn btn-sm  border-0 border-black p-1","X")
                document.getElementById(tag + "_button_2").disabled=true
        }
        function ad_listeners(){
        jQuery(".top-bar-button-close").click(function (event) {
    
       close_panel(this)
    
        })
        jQuery(".top-bar-button-open").click(function (event) {
             open_panel(this)
          // aria-disabled="true"
        })
    
        jQuery("#panel_header_button_1").click(function (event) {
    
            window.location.href=document.location //"http://127.0.0.1:5501/examples/flex/test_2.html "
        })
        jQuery("#panel_header_button_4").click(function (event) {
        // alert(this.id)
        //document.getElementsByTagName("main")[0].innerHTML+="<div class='border p-1'><iframe class='border rounded '></iframe></div>"
        // document.getElementsByTagName("main")[0].innerHTML+="<div class='div_iframe'><iframe class='border rounded '></iframe></div>"
        // crea_iframe_bar()
    
    
        
        })
        jQuery("#input_1").on("change",function (event) {
        //alert(this.id)
        document.getElementsByTagName("iframe")[0].src=this.value
    
        })
        jQuery("#button_go").click(function (event) {
        document.getElementsByTagName("iframe")[0].src=input_1.value
       // alert(document.getElementsByTagName("iframe")[0].contentWindow.history[1])
    
    
        })
        jQuery("#button_go_back").click(function (event) {
    //    alert(this.id)
        document.getElementsByTagName("iframe")[0].contentWindow.history.go(-1);
    //alert( document.getElementsByTagName("iframe")[0].contentWindow.history.length)
        })
        jQuery("#button_refresh").click(function (event) {
        // alert(this.id)
        document.getElementsByTagName("iframe")[0].contentWindow.location.reload();
    // alert( document.getElementsByTagName("iframe")[0].contentWindow.history.length)
        })
        jQuery("#sessionstrg_id").click(function (event) {
            rellena_select("sel_01",sessionStorage.getItem("jugadores").length)
            })
        
        }
        function open_panel(this_pass){
           //  alert(this_pass.id)
            old_x=this_pass.parentElement.parentElement.offsetLeft
            old_y=this_pass.parentElement.parentElement.offsetTop
    
            old_w=this_pass.parentElement.parentElement.offsetWidth
            old_h=this_pass.parentElement.parentElement.offsetHeight
    
            this_pass.parentElement.parentElement.style.left=0 +"px"
            this_pass.parentElement.parentElement.style.top=0 +"px"
            this_pass.parentElement.parentElement.style.width="100%"
            this_pass.parentElement.parentElement.style.height="100%"
            this_pass.parentElement.parentElement.style.zIndex="10"
            this_pass.disabled=true
            this_pass.parentElement.parentElement.getElementsByClassName("top-bar-button-close")[0].disabled=false//setAttribute("aria-disabled",false)
    
        }
        function close_panel(this_pass){
            this_pass.parentElement.parentElement.style.left=old_x +"px"
            this_pass.parentElement.parentElement.style.top=old_y +"px"
            this_pass.parentElement.parentElement.style.width=old_w +"px"
            this_pass.parentElement.parentElement.style.height=old_h +"px"
            this_pass.parentElement.parentElement.style.zIndex="1"
          //  this.parentElement.parentElement.getElementsByClassName("top-bar-button-open")[0].disabled=false//setAttribute("aria-disabled",false)
    
          this_pass.disabled=true
          this_pass.parentElement.parentElement.getElementsByClassName("top-bar-button-open")[0].disabled=false//setAttribute("aria-disabled",false)
          
        }
        function crea_iframe_bar(){
            document.getElementsByTagName("main")[0].innerHTML+="<div class='d-flex w-75 h-auto gap-2 ps-2' id='iframe_bar'></div>"
    
            document.getElementById("iframe_bar").innerHTML+=adding_element("button","button_refresh","iframe_bar_button btn border border-2 border-black rounded  mt-1 pt-1 mb-0","Refresh")
    
            document.getElementById("iframe_bar").innerHTML+=adding_element("button","button_go_back","iframe_bar_button btn border border-2 border-black rounded  mt-1 pt-1 mb-0","Back")
            // document.getElementById("iframe_bar").innerHTML+=  '<div div="input_3" class="input-group mb-3"><span class="input-group-text" id="basic-addon1">@</span><input id="input_1" type="text" class=" btn border border-black mt-1 w-auto bg-white flex-grow-1" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></div>'
    
            document.getElementById("iframe_bar").innerHTML+=adding_element("input","input_1","btn border border-black mt-1 w-auto bg-white flex-grow-1","")
             document.getElementById("input_1").setAttribute("type","text")
            document.getElementById("input_1").setAttribute("value","https://jbravof-gh.github.io/Parchis/examples/flex/test.html")
               
    
    
    
    
    
            
            document.getElementById("iframe_bar").innerHTML+=adding_element("button","button_go","iframe_bar_button btn border border-black text-white rounded bg-success bg-gradient btn-sm mt-1 pt-1 mb-0","Go")
    
                // jQuery(".top-bar-button-open").click(function (event) {
                // open_panel(this)
                // })
                // jQuery(".top-bar-button-close").click(function (event) {
                //     close_panel(this)
                // })
                
        }
            //Create SELECT -SEL_01
        function select_01(){
            document.getElementsByTagName("aside")[0].getElementsByTagName("div")[1].getElementsByTagName("div")[0].innerHTML+=adding_element("select","sel_01","h-100","<option>Option 1</option>")
            document.getElementsByTagName("aside")[0].getElementsByTagName("div")[1].getElementsByTagName("div")[0].innerHTML+=adding_element("select","sel_02","h-100 overflow-auto","<option>Option 2</option>")
    
        }    
        function select_02(){
            document.getElementsByTagName("nav")[0].getElementsByTagName("div")[1].getElementsByTagName("div")[0].innerHTML+=adding_element("div","sel_01","h-50 overflow-auto btn border bg-white p-1 mb-1 d-flex gap-1 flex-column ","")
            document.getElementsByTagName("nav")[0].getElementsByTagName("div")[1].getElementsByTagName("div")[0].innerHTML+=adding_element("div","sel_02","h-25 mb-0 p-2 border rounded bg-danger bg-gradient ","")
    document.getElementById("sel_01").setAttribute("size",3)
    document.getElementById("sel_02").setAttribute("size",3)

        }   
        function rellena_select(sel_id,items){
            var new_array=Array.from(JSON.parse(sessionStorage.getItem("jugadores")))
            for (let i = 0; i < items; i++) {
                // document.getElementById(sel_id).innerHTML+="<option class='bg-warning bg-gradient mb-1 rounded'> Option "+ i + "</option>"
              //  document.getElementById(sel_id).innerHTML+="<div class='bg-warning bg-gradient m-0 border rounded d-flex gap-2'><div class='bg-primary w-50 overflow-hidden p-2'> "+ sessionStorage.key(i) + " </div><div class='w-auto flex-grow-1 p-2'> " + sessionStorage.getItem(sessionStorage.key(i))+"</div></div>"
                document.getElementById(sel_id).innerHTML+="<div class='bg-warning bg-gradient m-0 border rounded d-flex gap-2'><div class='bg-primary w-50 overflow-hidden p-2'> "+ new_array[i][0][1] + " </div><div class='w-auto flex-grow-1 p-2'> " + new_array[i][1][1] +"</div></div>"

            }
        }
        
        function load_iframe(this_pass){
            //alert(this_pass.contentWindow.document.body.innerHTML)
        }
        function adding_element(tag_text,id_text,class_text,innerhtml_text){
  
            element_text = '<' + tag_text + ' id="' + id_text + '" class="' + class_text + '" >' + innerhtml_text + '</' + tag_text + '>'
            return element_text

        }
            //Starts 01
        function run_01(){
        // Create Tags
     //   start_2_new()
        //Create Header Buttons
      //  start_3()
        //Create Top Bar s
      //  crea_top_bar("nav")
       // crea_top_bar("aside")
       // crea_top_bar("main")
       // crea_top_bar("footer")
        //Create Mid Panels
     //   start_4()
       // select_02()
       // select_02()

   

      //  rellena_select("sel_02",4)
        //Add Listeners to top bar buttons
      
      //  document.getElementsByTagName("main")[0].innerHTML+="<div class='div_iframe'><iframe onload='load_iframe(this)' class='border rounded '></iframe></div>"
      //  crea_iframe_bar()
       // ad_listeners()

       // document.getElementsByTagName("iframe")[0].contentWindow.document.body.innerHTML=sessionStorage.getItem("objeto-3")
      //  document.getElementsByTagName("iframe")[0].parentElement.innerHTML=sessionStorage.getItem("objeto-3")
document.getElementById("main_content").innerHTML=document.head.getElementsByTagName("template")[3].innerHTML
document.getElementsByTagName("header")[0].getElementsByTagName("div")[0].innerHTML=document.head.getElementsByTagName("template")[4].innerHTML
document.getElementsByTagName("header")[0].getElementsByTagName("div")[1].innerHTML=document.head.getElementsByTagName("template")[5].innerHTML
document.getElementsByTagName("header")[0].getElementsByTagName("div")[2].innerHTML=document.head.getElementsByTagName("template")[6].innerHTML
document.getElementsByTagName("nav")[0].innerHTML=document.head.getElementsByTagName("template")[7].innerHTML

    }

       // run_01()
        
      