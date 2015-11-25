define(["jquery","jquery.localstorage.min","cm/lib/codemirror",'cm/mode/htmlmixed/htmlmixed'], function ($,localStorage,CodeMirror) {

    var self = this;
    // CM OPTIONS
    var cm_opt = {
        mode: 'htmlmixed',
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

    var Init = function () {
        var html = $.localStorage.get("html_editor"),
            css = $.localStorage.get("css_editor"),
            js = $.localStorage.get("js_editor")

        // SETTING CODE EDITORS INITIAL CONTENT
        html_editor.setValue(html==null ? "":html);
        css_editor.setValue(css==null ? "":css);
        js_editor.setValue(js==null ? "":js);
    };

    return {
        init: Init,
        html_editor: html_editor,
        js_editor: js_editor,
        css_editor: css_editor
    }

});

//function getScripts() {
//      var jsScriptsOrder = [];
//      $.each($("#jsLibraries").select2('data'), function(i, data) {
//        jsScriptsOrder.push(data.id);
//      });
//
//      var scriptsUrl = [];
//      jsScriptsOrder.forEach(function(scriptUrl) {
//        scriptsUrl.push(scriptUrl);
//      });
//
//      return scriptsUrl;
//}
//
//function getCss(){
//  var cssLibsOrder = [];
//  $.each($("#cssLibraries").select2('data'), function(i, data) {
//    cssLibsOrder.push(data.id);
//  });
//
//  var cssLibsUrls = [];
//  cssLibsOrder.forEach(function(cssLibUrl) {
//    cssLibsUrls.push(cssLibUrl);
//  });
//
//  return cssLibsUrls;
//}
