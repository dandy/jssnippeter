/**
 * Created by Dandy on 10/17/2015.
 */

define(["knockout","DataUtils"], function(ko,utils){

    var mainVM = function(){
        var self = this;

        var jsScripts = utils.getSelect2JavascriptLibs();
        var cssScripts = utils.getSelect2CssLibs();

        self.selectedJSLib = ko.observable();
        self.JSLibs = ko.observableArray(jsScripts);
        self.selectedJSLibs = ko.observableArray();

        self.removeJSLib = function(item){
          self.selectedJSLibs.remove(item);
        };

        self.scriptToAdd = ko.observable("");

        self.customScriptName = ko.computed(function(){
            var script = self.scriptToAdd();
            var scriptName = script.substr(script.lastIndexOf('/') + 1);

            console.log(self.selectedJSLibs())
            return scriptName;

        })

        self.addCustomScript = function(){

        };

        self.onSelectJSLib = function(event,a){
            if(self.selectedJSLibs.indexOf(event.params.data)==-1){
                self.selectedJSLibs.push(event.params.data);
                self.selectedJSLib(null);
            }

            self.JSLibs.remove(event.params.data);
        };

        self.selectedCSSLibs = ko.observableArray();
        self.CSSLibs = ko.observableArray(cssScripts);

        self.selectedCSSLibsText = ko.computed(function () {
            var selectedDescriptions = [];
            //ko.utils.arrayForEach(self.CSSLibs(), function (item) {
            //    if (self.selectedCSSLibs.indexOf(item.id)!==-1)
            //        selectedDescriptions.push(item);
            //});
            return selectedDescriptions;
        });


    };

    return mainVM;

});