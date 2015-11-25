define(["CodeEditors","LocalStorage"], function (codeEditors, localStorage) {
    var self = this,
        iframe = document.querySelector('#output iframe');

    // Base template
    var base_tpl =
      "<!doctype html>\n" +
      "<html>\n\t" +
      "<head>\n\t\t" +
      "<meta charset=\"utf-8\">\n\t\t" +
      "<title>Test</title>\n\n\t\t\n\t" +
      "</head>\n\t" +
      "<body>\n\t\n\t" +
      "</body>\n" +
      "</html>";

    var prepareSource = function () {
        var html = codeEditors.html_editor.getValue(),
            js = codeEditors.js_editor.getValue(),
            css = codeEditors.css_editor.getValue(),
            src = '';

        // HTML
        src = base_tpl.replace('</body>', html + '</body>');
        //Css
        var cssArray = getCss();
        var externalCss = "";
        for (var i = 0; i < cssArray.length; i++) {
            externalCss = externalCss + "<link rel=stylesheet href=" + cssArray[i] + " />";
        }

        css = externalCss + '<style>' + css + '</style>';
        src = src.replace('</head>', css + '</head>');

        // Javascript
        var scriptsArray = getScripts();
        var externalScripts = "";
        for (var i = 0; i < scriptsArray.length; i++) {
            externalScripts = externalScripts + "<script src='" + scriptsArray[i] + "'><\/script>";
        }
        js = externalScripts + '<script' + '>' + js + '<\/script>';
        src = src.replace('</body>', js + '</body>');
        return src;
    };

    var render = function () {
        localStorage.saveDocument();
        var source = prepareSource();
        iframe_doc = iframe.contentDocument;
        iframe_doc.open();
        iframe_doc.write(source);
        iframe_doc.close();
    };

    var clearIframe = function(){
      iframe_doc = iframe.contentDocument;
      iframe_doc.open();
      iframe_doc.write("");
      iframe_doc.close();
    };

    return {
        render: render,
        clearIframe: clearIframe
    }
});
