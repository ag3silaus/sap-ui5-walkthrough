sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
    './controller/HelloDialog'
], function(UIComponent, JSONModel, ResourceModel, HelloDialog) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
          manifest: "json"
        },
        init : function (){
            // call the init function of the parent
            UIComponent.prototype.init.apply(this, arguments);
            
            // set the data Model on the view  
            var oData = {
                recipient : {
                    name: "Burragam"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

             // alttaki kodu manifest.json a tasidik

            /* var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales: [""],
                fallbackLocale: ""
            });
            this.setModel(i18nModel, "i18n")*/

            // SET DIALOG
            this._helloDialog = new HelloDialog(this.getRootControl());

            // Create the views based on the URL/Hash
            this.getRouter().initialize();
        },
        exit : function(){
            this._helloDialog.destroy();
            delete this._helloDialog;
        },
        openHelloDialog : function () {
            this._helloDialog.open();
        }


    })
    
});