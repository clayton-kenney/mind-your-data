import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, f as element, C as text, B as space, g as claim_element, h as children, F as claim_text, j as detach_dev, E as claim_space, k as attr_dev, l as add_location, n as insert_dev, p as append_dev, G as noop } from './client.3c825f9e.js';

/* src/routes/about.svelte generated by Svelte v3.23.2 */

const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let body;
	let section;
	let h20;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let h21;
	let t4;
	let t5;
	let p1;
	let t6;
	let t7;
	let h22;
	let t8;
	let t9;
	let p2;
	let t10;

	const block = {
		c: function create() {
			body = element("body");
			section = element("section");
			h20 = element("h2");
			t0 = text("WE ARE");
			t1 = space();
			p0 = element("p");
			t2 = text("For anyone concerned about\n\t\tthe lack of digital privacy\n\t\tand the implications it has\n\t\tfor our future. Mind Your Data\n\t\teducates, and empowers citizens\n\t\tto fight for a more equitable\n\t\tform of surveillance capitalism\n\t\tbecause our future freedom\n\t\tdepends on the actions we take\n\t\tnow.");
			t3 = space();
			h21 = element("h2");
			t4 = text("OUR MISSION");
			t5 = space();
			p1 = element("p");
			t6 = text("To educate people about the\n\t\timplications of surveillance\n\t\tcapitalism and empower them to\n\t\topt out.\n\t\tHelp bring forth institutions,\n\t\tregulations and laws that\n\t\tpromote a pro-social form of\n\t\tsurveillance capitalism that\n\t\tserves us all.");
			t7 = space();
			h22 = element("h2");
			t8 = text("OUR ESSENCE");
			t9 = space();
			p2 = element("p");
			t10 = text("We are a social movement for\n\t\tthe digital age, on a mission\n\t\tto help people claim their\n\t\tright to privacy. Mind Your\n\t\tData is courageous, bold, and\n\t\tinspirational.");
			this.h();
		},
		l: function claim(nodes) {
			body = claim_element(nodes, "BODY", { class: true });
			var body_nodes = children(body);
			section = claim_element(body_nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h20 = claim_element(section_nodes, "H2", { class: true });
			var h20_nodes = children(h20);
			t0 = claim_text(h20_nodes, "WE ARE");
			h20_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "For anyone concerned about\n\t\tthe lack of digital privacy\n\t\tand the implications it has\n\t\tfor our future. Mind Your Data\n\t\teducates, and empowers citizens\n\t\tto fight for a more equitable\n\t\tform of surveillance capitalism\n\t\tbecause our future freedom\n\t\tdepends on the actions we take\n\t\tnow.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			h21 = claim_element(section_nodes, "H2", { class: true });
			var h21_nodes = children(h21);
			t4 = claim_text(h21_nodes, "OUR MISSION");
			h21_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t6 = claim_text(p1_nodes, "To educate people about the\n\t\timplications of surveillance\n\t\tcapitalism and empower them to\n\t\topt out.\n\t\tHelp bring forth institutions,\n\t\tregulations and laws that\n\t\tpromote a pro-social form of\n\t\tsurveillance capitalism that\n\t\tserves us all.");
			p1_nodes.forEach(detach_dev);
			t7 = claim_space(section_nodes);
			h22 = claim_element(section_nodes, "H2", { class: true });
			var h22_nodes = children(h22);
			t8 = claim_text(h22_nodes, "OUR ESSENCE");
			h22_nodes.forEach(detach_dev);
			t9 = claim_space(section_nodes);
			p2 = claim_element(section_nodes, "P", {});
			var p2_nodes = children(p2);
			t10 = claim_text(p2_nodes, "We are a social movement for\n\t\tthe digital age, on a mission\n\t\tto help people claim their\n\t\tright to privacy. Mind Your\n\t\tData is courageous, bold, and\n\t\tinspirational.");
			p2_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h20, "class", "svelte-1kse6g9");
			add_location(h20, file, 3, 2, 21);
			add_location(p0, file, 4, 2, 39);
			attr_dev(h21, "class", "svelte-1kse6g9");
			add_location(h21, file, 15, 2, 340);
			add_location(p1, file, 16, 2, 363);
			attr_dev(h22, "class", "svelte-1kse6g9");
			add_location(h22, file, 26, 2, 618);
			add_location(p2, file, 27, 2, 641);
			attr_dev(section, "class", "svelte-1kse6g9");
			add_location(section, file, 2, 1, 9);
			attr_dev(body, "class", "svelte-1kse6g9");
			add_location(body, file, 1, 0, 1);
		},
		m: function mount(target, anchor) {
			insert_dev(target, body, anchor);
			append_dev(body, section);
			append_dev(section, h20);
			append_dev(h20, t0);
			append_dev(section, t1);
			append_dev(section, p0);
			append_dev(p0, t2);
			append_dev(section, t3);
			append_dev(section, h21);
			append_dev(h21, t4);
			append_dev(section, t5);
			append_dev(section, p1);
			append_dev(p1, t6);
			append_dev(section, t7);
			append_dev(section, h22);
			append_dev(h22, t8);
			append_dev(section, t9);
			append_dev(section, p2);
			append_dev(p2, t10);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(body);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<About> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("About", $$slots, []);
	return [];
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuZmRjNjkyZTIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
