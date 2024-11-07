"use strict";

sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/core/mvc/XMLView", "sap/m/MessageToast"], function (e, t, o) {
  "use strict";

  return e.extend("ui5.product.list.controller.App", {
    onPressCreateNewProduct: function onPressCreateNewProduct() {
      var e = this.getOwnerComponent().getModel("i18n").getResourceBundle();
      o.show(e.getText("messageProductCreated"), {
        at: "center top"
      });
    }
  });
});