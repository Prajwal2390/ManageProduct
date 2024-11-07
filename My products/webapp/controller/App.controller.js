sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/ObjectListItem",
    "sap/m/ObjectAttribute",
    "sap/m/ObjectStatus",
    "sap/ui/core/ValueState"
], function(Controller, ObjectListItem, ObjectAttribute, ObjectStatus , ValueState) {
    'use strict';

    return Controller.extend('ui5.product.list.controller.App',{
        onPressCreateNewProduct() {
         const sProductname = this.getView().byId("idproductname").getValue();
         const oCategory = this.getView().byId("IdCategory").getSelectedItem();
         const sPrice = this.getView().byId("Idprice").getValue();
         const sReleaseDate = this.getView().byId("IdReleseDate").getValue();
         const sdiscontinued = this.getView().byId("IddiscontinuedDate").getValue();
         

         this.getView().byId("idproductlist").addItem(new ObjectListItem({
            title: sProductname,
            number: sPrice,
            numberUnit: "EUR",
            attributes: [
                new ObjectAttribute({ title: "Category", text : oCategory.getText() }),
                new ObjectAttribute({ title: "Release date", text : sReleaseDate})
            ],
            firstStatus: new ObjectStatus({
               text: this._getAvailabilityText(sdiscontinued),
               state: this._getAvailabilityState(sdiscontinued)
            })

         }))
        },
        OnpressDelete(oEvent) {
            const oItem = oEvent.getParameter("listItem")

            this.getView().byId("idproductlist").removeItem(oItem)
        },
        _getAvailabilityText(oDate){
         return oDate > new Date() ? "Available" : "Unavailable"
        },
        _getAvailabilityState(oDate){
            return oDate > new Date() ? ValueState.Success : ValueState.Error

        }
    })
});