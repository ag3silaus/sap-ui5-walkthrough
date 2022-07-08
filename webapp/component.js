sap.ui.define([
    'sap/ui/core/UIComponent',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/resource/ResourceModel',
    './controller/HelloDialog',
    'sap/ui/Device'
], function(UIComponent, JSONModel, ResourceModel, HelloDialog, Device) {
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
                    name: "UI5"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            //Set Device Model   

            var oDeviceModel = new JSONModel(Device);
            oDeviceModel.setDefaultBindingMode("OneWay");
            this.setModel(oDeviceModel,"device");

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