﻿
namespace Indotalent.Purchase {

    @Serenity.Decorators.registerClass()
    export class VendorContactGrid extends Serenity.EntityGrid<VendorContactRow, any> {
        protected getColumnsKey() { return VendorContactColumns.columnsKey; }
        protected getDialogType() { return VendorContactDialog; }
        protected getIdProperty() { return VendorContactRow.idProperty; }
        protected getInsertPermission() { return VendorContactRow.insertPermission; }
        protected getLocalTextPrefix() { return VendorContactRow.localTextPrefix; }
        protected getService() { return VendorContactService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getColumns() {
            let columns = super.getColumns();

            if (!Q.Authorization.hasPermission("Administration:Tenant")) {
                columns = columns.filter(x => x.field != VendorContactRow.Fields.TenantName && x.field != VendorContactRow.Fields.Id);
            }

            return columns;
        }
    }
}