import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, f as element, C as text, g as claim_element, h as children, F as claim_text, j as detach_dev, l as add_location, n as insert_dev, p as append_dev, G as noop } from './client.bbd16f9a.js';

/* src/routes/resources.svelte generated by Svelte v3.23.2 */

const file = "src/routes/resources.svelte";

function create_fragment(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("so much data privacy");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t = claim_text(p_nodes, "so much data privacy");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Resources> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Resources", $$slots, []);
	return [];
}

class Resources extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Resources",
			options,
			id: create_fragment.name
		});
	}
}

export default Resources;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2VzLjM5Njk3Mzc5LmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
