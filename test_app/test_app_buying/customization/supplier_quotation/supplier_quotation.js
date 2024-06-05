frappe.ui.form.on("Supplier Quotation", {
	cost_center(frm) {
		test_demo.acccounting_dimension_filter.set_accounting_dimensions_in_item_table(frm);
	},
});
