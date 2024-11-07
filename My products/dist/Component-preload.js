//@ui5-bundle ui5/product/list/Component-preload.js
sap.ui.require.preload({
	"ui5/product/list/Component.js":function(){
"use strict";

sap.ui.define(["sap/ui/core/UIComponent"], function (t) {
  "use strict";

  return t.extend("ui5.product.list.Component", {
    metadata: {
      "interface": ["sap/ui/core/IAsyncContentCreation"],
      manifest: "json"
    },
    init: function init() {
      t.prototype.init.apply(this, arguments);
    }
  });
});
},
	"ui5/product/list/controller/App.controller.js":function(){
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
},
	"ui5/product/list/i18n/i18n.properties":'\nappTittle = Product\nappDescription = A simple product list with ui5\n\ncreatebutton=Create New product\nmessageProductCreated=New Product created!',
	"ui5/product/list/i18n/i18n_en.properties":'\nappTittle = Product\nappDescription = A simple product list with ui5\n\ncreatebutton=Create New Product in eng\nmessageProductCreated=New Product created! in eng',
	"ui5/product/list/manifest.json":'{"_version":"1.54.0","sap.app":{"id":"ui5.product.list","type":"application","i18n":"i18n/i18n.properties","title":"{{appTittle}}","description":"{{appDescription}}","applicationVersion":{"version":"1.0.0"}},"sap.ui":{"technology":"UI5","deviceTypes":{"desktop":true,"phone":true,"tablet":true}},"sap.ui5":{"rootView":{"viewName":"ui5.product.list.view.App","type":"XML"},"dependencies":{"minUI5Version":"1.114","libs":{"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"ui5.product.list.i18n.i18n"}}}}}',
	"ui5/product/list/view/App.view.xml":'<mvc:View\ncontrollerName="ui5.product.list.controller.App"\ndisplayBlock="true"\nxmlns="sap.m"\nxmlns:mvc="sap.ui.core.mvc"><Button text="{i18n>createbutton}" press="onPressCreateNewProduct" /></mvc:View>'
});
//# sourceMappingURL=Component-preload.js.map
