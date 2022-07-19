sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"

], function(Controller, MessageToast, Fragment) {
    'use strict';
    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
          // read message from i18n model
          var oBundle = this.getView().getModel("i18n").getResourceBundle();
          var sRecipient = this.getView()
            .getModel()
            .getProperty("/recipient/name");
          var sMessage = oBundle.getText("helloMsg", [sRecipient]);

          this.getView().getModel().setProperty("/isThisSelected", true);
          //page invisible turn to visible
          this.getView().getModel().setProperty("/isThisVisible", true)

          //Show a native vanillaJS alert
          MessageToast.show(sMessage);
        },
        onOpenDialog : function () {
         this.getOwnerComponent().openHelloDialog();   
        }
      });
});