
function getScripts() {
      var jsScriptsOrder = [];
      $.each($("#jsLibraries").select2('data'), function(i, data) {
        jsScriptsOrder.push(data.id);
      });

      var scriptsUrl = [];
      jsScriptsOrder.forEach(function(scriptUrl) {
        scriptsUrl.push(scriptUrl);
      });

      return scriptsUrl;
}

function getCss(){
  var cssLibsOrder = [];
  $.each($("#cssLibraries").select2('data'), function(i, data) {
    cssLibsOrder.push(data.id);
  });

  var cssLibsUrls = [];
  cssLibsOrder.forEach(function(cssLibUrl) {
    cssLibsUrls.push(cssLibUrl);
  });

  return cssLibsUrls;
}

// CM OPTIONS
var cm_opt = {
    mode: 'text/html',
    gutter: true,
    lineNumbers: true,

    onChange: function (instance, changes) {
        render();
    }
};

// HTML EDITOR
var html_box = document.querySelector('#main_html textarea');
var html_editor = CodeMirror.fromTextArea(html_box, cm_opt);

// CSS EDITOR
cm_opt.mode = 'css';
var css_box = document.querySelector('#main_css textarea');
var css_editor = CodeMirror.fromTextArea(css_box, cm_opt);

// JAVASCRIPT EDITOR
cm_opt.mode = 'javascript';
var js_box = document.querySelector('#main_js textarea');
var js_editor = CodeMirror.fromTextArea(js_box, cm_opt);

// SETTING CODE EDITORS INITIAL CONTENT
html_editor.setValue('<div data-bind="text: name"></div>');
css_editor.setValue('body { color: red; }');

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

var prepareSource = function(){
  var html = html_editor.getValue(),
      js = js_editor.getValue(),
      css = css_editor.getValue(),
      src = '';

  // HTML
  src = base_tpl.replace('</body>', html + '</body>');
  //Css
  var cssArray = getCss();
  var externalCss = "";
  for(var i=0; i<cssArray.length; i++){
    externalCss = externalCss + "<link rel=stylesheet href="+cssArray[i]+" />";
  }

  css = externalCss + '<style>' + css + '</style>';
  src = src.replace('</head>', css + '</head>');

  // Javascript
  var scriptsArray = getScripts();
  var externalScripts = "";
  for(var i=0; i<scriptsArray.length; i++){
    externalScripts = externalScripts+"<script src='"+scriptsArray[i]+"'><\/script>";
  }
  js = externalScripts+'<script' + '>' + js + '<\/script>';
  src = src.replace('</body>', js + '</body>');

  return src;
};


var render = function() {
  saveDocument();
  var source = prepareSource();

  var iframe = document.querySelector('#output iframe'),
  iframe_doc = iframe.contentDocument;
  iframe_doc.open();
  iframe_doc.write(source);
  iframe_doc.close();
};

window.onerror = function(error){

  alert("error occured",error)
}
