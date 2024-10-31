var layout_array=[]
// Principal ***********
layout_array.push([
    ["tag", "div"],
    ["id", "principal"],
    ["class", ("border border-danger  rounded d-flex flex-row items-stretch m-0 p-1 h-100 gap-2") ],
    ["destino","id","body_id"],
    ["innertext",""]
])
// Principal ***********
// ********************Panel 1
layout_array.push([
    ["tag", "div"],
    ["id", "principal_div_1"],
    ["class", ("border-0 border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1") ],
    ["destino","id","principal"],
    ["innertext",""]
])
// Principal ***********
// ********************Panel 2
layout_array.push([
    ["tag", "div"],
    ["id", "principal_div_2"],
    ["class", ("border-0 border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1") ],
    ["destino","id","principal"],
    ["innertext",""]
])
// Principal ***********
// ********************Panel 2
//******************8********** Top*/
            layout_array.push([
                ["tag", "div"],
                ["id", "principal_div_2_top"],
                ["class", ("border border-secondary rounded m-0 p-1 d-flex justify-content-between") ],
                ["destino","id","principal_div_1"],
                ["innertext",""]
            ])
                    layout_array.push([
                        ["tag", "button"],
                        ["id", "principal_div_2_button_1"],
                        ["class", ("btn border border-secondary") ],
                        ["destino","id","principal_div_2_top"],
                        ["innertext","Run"]
                    ])
//******************8********** Mid*/

            layout_array.push([
                ["tag", "div"],
                ["id", "principal_div_2_mid"],
                ["class", ("border border-secondary rounded h-100 m-0 p-1 d-flex justify-content-between") ],
                ["destino","id","principal_div_1"],
                ["innertext","text"]
            ])
// Principal ***********
// ********************Panel 3
layout_array.push([
    ["tag", "div"],
    ["id", "principal_div_3"],
    ["class", ("border rounded border-primary d-flex flex-column items-stretch m-0 w-100 h-100 gap-1") ],
    ["destino","id","principal"],
    ["innertext",""]
])



console.log("layout_array",layout_array)
add_elements(layout_array)

function add_elements(args_pass) {

    for (let j = 0; j < args_pass.length; j++) {

        var valor_texto=args_pass[j][3][2] + "_" +  args_pass[j][0][1] 
    
            element_text = '<' +  args_pass[j][0][1]  + ' id="' +  args_pass[j][1][1]  + '" class="' +  args_pass[j][2][1] + '" >' + args_pass[j][4][1] + '</' + args_pass[j][0][1]  + '>'

           document.getElementById(args_pass[j][3][2]).innerHTML += element_text
    }
    }
    
