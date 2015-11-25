define(function () {

    var jsLibraries = {
        'jquery.js': 'https://code.jquery.com/jquery-2.1.4.min.js',
        'jquery-ui.js': 'https://code.jquery.com/ui/1.11.4/jquery-ui.min.js',
        'knockoutjs.js': 'https://cdnjs.cloudflare.com/ajax/libs/knockout/3.3.0/knockout-min.js',
        'select2.js': 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/js/select2.min.js',
        'knockoutjs-mapping.js': 'https://cdnjs.cloudflare.com/ajax/libs/knockout.mapping/2.4.1/knockout.mapping.min.js',
        'bootstrap.js': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js',
        'dataTables.js': 'https://cdn.datatables.net/1.10.8/js/jquery.dataTables.min.js'
    }

    var cssLibraries = {
        'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css',
        'bootstrap-theme': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css',
        'select2': 'https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css',
        'dataTables': 'https://cdn.datatables.net/1.10.8/css/jquery.dataTables.min.css'
    }


    var _select2JavascriptLibs = [],
        _select2CssLibs = [];

    for (var libName in jsLibraries) {

        _select2JavascriptLibs.push({
            id: jsLibraries[libName],
            text: libName
        });
    }

    for (var libName in cssLibraries) {
        _select2CssLibs.push({
            id: cssLibraries[libName],
            text: libName
        });
    }

    var getCssLibraryUrl = function (libraryName) {
        return cssLibraries[libraryName];
    };

    var getSelect2JavascriptLibs = function () {
        return _select2JavascriptLibs;
    };

    var getSelect2CssLibs = function () {
        return _select2CssLibs;
    }

    var getJsLibraryUrl = function (libraryName) {
        return jsLibraries[libraryName];
    };

    return {
        getSelect2CssLibs: getSelect2CssLibs,
        getSelect2JavascriptLibs: getSelect2JavascriptLibs,
        getCssLibraryUrl: getCssLibraryUrl,
        getJsLibraryUrl: getJsLibraryUrl
    };

});
