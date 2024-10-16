
var dom, win, doc, where, iframe;
(function () {
    

    iframe = document.createElement('iframe');
    // iframe.src = "http://127.0.0.1:8981/Parchis/templates";
    
  
    iframe.class="editor" 
    iframe.id="preview" 
    iframe.name="result" 
    iframe.sandbox="allow-forms allow-popups allow-scripts allow-same-origin allow-modals" 
    iframe.frameborder="0"
    iframe.onclick="alert('ssss')"
    iframe.onload = function() { 
       alert(this.contentDocument.head.outerHTML);

       this.contentDocument.head.innerHTML+= '<link href="http://127.0.0.1:8981/Parchis/styles/linklist.css" rel="stylesheet"></link>\n<base target="ifr02"/>'
    };
       where = document.body 
    where.appendChild(iframe);

   
win = iframe.contentWindow || iframe;
    doc = iframe.contentDocument || iframe.contentWindow.document;
 
     var js = doc.createElement("script");
            js.src = 'iframe.js?'
    doc.head.appendChild(js)
 
//  function doc_l(){alert(99)}


}
)(); 
// function doc_l(){

//      var js = doc.createElement("script");
//             js.src = 'iframe.js?'
//     doc.head.appendChild(js)
// }