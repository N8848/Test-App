frappe.provide("test_demo.acccounting_dimension_filter");

test_demo.acccounting_dimension_filter.set_accounting_dimensions_in_item_table = function (frm) {
	frm.doc.items.forEach(function (item) {
		item.cost_center = frm.doc.cost_center;
	});
	frm.refresh_field("items");
};
