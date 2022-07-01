sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.App", {
      onShowHello: function () {
        // read message from i18n model
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        var sRecipient = this.getView()
          .getModel()
          .getProperty("/recipient/name");
        var sMessage = oBundle.getText("helloMsg", [sRecipient]);
        //Show a native vanillaJS alert
        MessageToast.show(sMessage);
      },
    });
  }
);