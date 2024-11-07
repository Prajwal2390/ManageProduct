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