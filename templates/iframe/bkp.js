(function () {
    var dom, win, doc, where, iframe;
  
    iframe = document.createElement('iframe');
  //   iframe.src = "javascript:false";
  iframe.src = "http://127.0.0.1:8981/Parchis/templates";
iframe.onload="document._l();"

  //  where = document.getElementsByTagName('script')[0];
   where = document.body //.getElementsByTagName('body')[0];

    //where.parentNode.insertBefore(iframe, where);
   where.appendChild(iframe);
  
    win = iframe.contentWindow || iframe;
    doc = iframe.contentDocument || iframe.contentWindow.document;
  
  //  doc.open();
    doc._l = (function (w, d) {
      return function () {
        w.vanishing_global = new Date().getTime();
  
        var js = d.createElement("script");
        js.src = 'iframe.js?' + w.vanishing_global;
  
        w.name = "foobar";
        d.foobar = "foobar:" + Math.random();
        d.foobar = "barfoo:" + Math.random();
  
        //     window.name="foobar";
  //     this.foobar="foobar:" + Math.random();
  //     document.foobar="barfoo:" + Math.random();
  
  //     // `this` should be the document object, but it's not
      console.log("d == document: %s", d == document);
      console.log("d == doc:      %s", d == doc);
  
      var _doc = document;
  //     // the next two lines added based on @Ian's comment below
      console.log("_doc == document: %s", _doc == document);
      console.log("_doc == doc:      %s", _doc == doc);
  
      console.log("name: " + window.name + "\n" + "window.vanishing_global: " + window.vanishing_global + "\ntypeof window.vanishing_global: " + typeof window.vanishing_global + "\ndocument.foobar: " + document.foobar);
  //    
        d.body.appendChild(js);
      };
    })(win, doc);

//    doc.write('<body onload="document._l();">hola</body>');
 //   doc.close();

// doc.open();
//  doc.write('<body onload="document._l();">hola</body>');
//  doc.close();
 
  })();