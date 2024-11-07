"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/mvc/XMLView", "sap/m/MessageToast"], function (Controller, XMLView, MessageToast) {
  'use strict';

  return Controller.extend('ui5.product.list.controller.App', {
    onPressCreateNewProduct: function onPressCreateNewProduct() {
      var oBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
      MessageToast.show(oBundle.getText("messageProductCreated"), {
        at: 'center top'
      });
    }
  });
});