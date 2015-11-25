define(["CodeEditors","jquery.localstorage.min"], function (codeEditors, localStorage) {

    var storage = $.localStorage;
    function saveDocument() {

        var html = codeEditors.html_editor.getValue(),
            js = codeEditors.js_editor.getValue(),
            css = codeEditors.css_editor.getValue();

        storage.set('html_editor', html)
        storage.set('js_editor', js)
        storage.set('css_editor', css)
    }

    return {
        saveDocument: saveDocument
    }
});