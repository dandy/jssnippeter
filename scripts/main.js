require.config({
    paths: {
        jquery: 'jquery-1.11.3.min',
        'jquery-ui':'jquery-ui/jquery-ui.min',
        cm:"../codemirror",
        "knockout": "http://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min"
    },
    shim: {
        'bootstrap.min': {
            deps:['jquery']
        }
    }
});

require(["CodeEditors", "DataUtils", "jquery", "select2", "OutputFrame","knockout","mainVM","jquery-ui","koBindings/knockout-select2","koBindings/knockout-sortable","bootstrap.min"], function (codeEditor, utils, $, select2, outputFrame,ko,mainVM) {

    $(document).ready(function () {
        codeEditor.init();

        $("#jsLibsSortable").sortable();
        var vm = new mainVM();
        ko.applyBindings(vm);

        $("#submit").on("click",function () {
            outputFrame.render();
        });

        $("#clearIframe").on("click",function () {
            outputFrame.clearIframe();
        });

    })

});
