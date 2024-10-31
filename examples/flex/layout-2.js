var layout_array=[]

// Principal ***********
layout_array.push([
    ["tag", "div"],
    ["id", "principal"],
    ["class", ("border-0 border-danger  rounded d-flex flex-row items-stretch m-0 p-1 h-100 gap-2") ],
    ["destino","id","body_id"],
    ["innertext",""]
])
// Principal ***********
// ********************Panel 1
layout_array.push([
    ["tag", "div"],
    ["id", "principal_div_1"],
    ["class", ("border rounded border-secondary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1") ],
    ["destino","id","principal"],
    ["innertext",document.getElementsByTagName("template")[0].innerHTML]
])
// Principal ***********
// ********************Panel 2
layout_array.push([
    ["tag", "div"],
    ["id", "principal_div_2"],
    ["class", ("border-0 border-primary d-flex flex-column items-stretch p-0 m-0 w-100 h-100 gap-1") ],
    ["destino","id","principal"],
    ["innertext",""]
])
layout_array.push([
    ["tag", "div"],
    ["id", "principal_div_2_0"],
    ["class", ("border-0 border-primary d-flex flex-row items-stretch m-0 w-100 h-50 pe-1 gap-2") ],
    ["destino","id","principal_div_2"],
    ["innertext",""]
])
layout_array.push([
    ["tag", "div"],
    ["id", "principal_div_2_1"],
    ["class", ("border-0 border-primary d-flex flex-column items-stretch m-0 w-100 h-auto overflow-auto gap-1") ],
    ["destino","id","principal_div_2_0"],
    ["innertext",""]
])
// Principal ***********
// ********************Panel 2
//******************8********** Top*/
            layout_array.push([
                ["tag", "div"],
                ["id", "principal_div_2_top"],
                ["class", ("border border-warning border-2 rounded m-0 p-1 d-flex justify-content-between") ],
                ["destino","id","principal_div_2_1"],
                ["innertext",'             <h4 class="d-flex justify-content-evenly gap-1 p-0 mb-0">                    <p class="border border-black rounded h-auto me-1 ms-1 mt-0 mb-0 p-1 pt-0">Log</p>                    <span id="badge_log"                        class="badge border border-outset border-4 border-danger bg-success mt-1 ms-5 pt-2 w-auto h-auto">0</span>                </h4>']
            ])
                    // layout_array.push([
                    //     ["tag", "button"],
                    //     ["id", "principal_div_2_button_1"],
                    //     ["class", ("btn border border-secondary") ],
                    //     ["destino","id","principal_div_2_top"],
                    //     ["innertext","Run"]
                    // ])
                    // layout_array.push([
                    //     ["tag", "button"],
                    //     ["id", "principal_div_2_button_2"],
                    //     ["class", ("btn border border-secondary") ],
                    //     ["destino","id","principal_div_2_top"],
                    //     ["innertext","Go"]
                    // ])
//******************8********** Mid*/

            layout_array.push([
                ["tag", "div"],
                ["id", "principal_div_2_mid"],
                ["class", ("border border-secondary border-2 rounded overflow-auto h-auto w-100 m-0 p-2 ") ],
                ["destino","id","principal_div_2_1"],
                ["innertext",document.getElementsByTagName("template")[1].innerHTML]
            ])
            layout_array.push([
                ["tag", "div"],
                ["id", "principal_div_2_2"],
                ["class", ("border-0 border-primary d-flex flex-column items-stretch  m-0 w-100 h-100 gap-1") ],
                ["destino","id","principal_div_2_0"],
                ["innertext",""]
            ])
            // Principal ***********
            // ********************Panel 2
            //******************8********** Top*/
                        layout_array.push([
                            ["tag", "div"],
                            ["id", "principal_div_22_top"],
                            ["class", ("border border-warning border-2 rounded m-0 p-1 d-flex justify-content-between") ],
                            ["destino","id","principal_div_2_2"],
                            ["innertext",' <h4 class="d-flex justify-content-evenly gap-1 p-0 mb-0"> <p class="border border-black rounded me-1 ms-1 mt-0 mb-0 p-1 pt-0">Tools</p> <span id="badge_fichas" class="badge bg-success mt-2  w-auto h-auto pt-2">x</span><span id="badge_seleccion" class="badge bg-success  w-auto h-auto pt-2">0</span> </h4>']
                        ])
                                // layout_array.push([
                                //     ["tag", "button"],
                                //     ["id", "principal_div_2_button_1"],
                                //     ["class", ("btn border border-secondary") ],
                                //     ["destino","id","principal_div_22_top"],
                                //     ["innertext","Run"]
                                // ])
                                // layout_array.push([
                                //     ["tag", "button"],
                                //     ["id", "principal_div_2_button_2"],
                                //     ["class", ("btn border border-secondary") ],
                                //     ["destino","id","principal_div_22_top"],
                                //     ["innertext","Go"]
                                // ])
            //******************8********** Mid*/
            
                        layout_array.push([
                            ["tag", "div"],
                            ["id", "principal_div_22_mid"],
                            ["class", ("border border-2 border-success rounded h-auto m-0 p-0 pt-0") ],
                            ["destino","id","principal_div_2_2"],
                            ["innertext",document.getElementsByTagName("template")[2].innerHTML]
                        ])
// Principal ***********
// ********************Panel 3
// layout_array.push([
//     ["tag", "div"],
//     ["id", "principal_div_tablero"],
//     ["class", ("border rounded border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1") ],
//     ["destino","id","principal_div_1"],
//     ["innertext",document.getElementsByTagName("template")[0].innerHTML]
// ])
layout_array.push([
    ["tag", "div"],
    ["id", "principal_div_2_3"],
    ["class", ("border border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1") ],
    ["destino","id","principal_div_2"],
    ["innertext",""]
])


console.log("layout_array",layout_array)
add_elements(layout_array)
sessionStorage.setItem("Objeto",JSON.stringify(layout_array))

function add_elements(args_pass) {

    for (let j = 0; j < args_pass.length; j++) {

        var valor_texto=args_pass[j][3][2] + "_" +  args_pass[j][0][1] 
    
            element_text = '<' +  args_pass[j][0][1]  + ' id="' +  args_pass[j][1][1]  + '" class="' +  args_pass[j][2][1] + '" >' + args_pass[j][4][1] + '</' + args_pass[j][0][1]  + '>'

           document.getElementById(args_pass[j][3][2]).innerHTML += element_text
    }
    }
   

