import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, f as element, C as text, B as space, g as claim_element, h as children, F as claim_text, j as detach_dev, E as claim_space, k as attr_dev, l as add_location, n as insert_dev, p as append_dev, G as noop } from './client.63811fba.js';

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
	let t11;
	let h23;
	let t12;
	let t13;
	let p3;
	let a0;
	let t14;
	let t15;
	let p4;
	let a1;
	let t16;
	let t17;
	let p5;
	let a2;
	let t18;
	let t19;
	let p6;
	let a3;
	let t20;
	let t21;
	let p7;
	let a4;
	let t22;

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
			t11 = space();
			h23 = element("h2");
			t12 = text("References");
			t13 = space();
			p3 = element("p");
			a0 = element("a");
			t14 = text("Tech Crunch - How to save your privacy from the Internet’s clutches");
			t15 = space();
			p4 = element("p");
			a1 = element("a");
			t16 = text("Shoshana Zuboff - The Age of Surveillance Capitalism");
			t17 = space();
			p5 = element("p");
			a2 = element("a");
			t18 = text("FEE - Have Consumers Already Lost the Online Privacy War?");
			t19 = space();
			p6 = element("p");
			a3 = element("a");
			t20 = text("Slate - You Really Don’t Want to Sell Your Data");
			t21 = space();
			p7 = element("p");
			a4 = element("a");
			t22 = text("Electronic Frontier Foundation");
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
			t11 = claim_space(section_nodes);
			h23 = claim_element(section_nodes, "H2", { class: true });
			var h23_nodes = children(h23);
			t12 = claim_text(h23_nodes, "References");
			h23_nodes.forEach(detach_dev);
			t13 = claim_space(section_nodes);
			p3 = claim_element(section_nodes, "P", {});
			var p3_nodes = children(p3);
			a0 = claim_element(p3_nodes, "A", { href: true, rel: true });
			var a0_nodes = children(a0);
			t14 = claim_text(a0_nodes, "Tech Crunch - How to save your privacy from the Internet’s clutches");
			a0_nodes.forEach(detach_dev);
			p3_nodes.forEach(detach_dev);
			t15 = claim_space(section_nodes);
			p4 = claim_element(section_nodes, "P", {});
			var p4_nodes = children(p4);
			a1 = claim_element(p4_nodes, "A", { href: true, rel: true });
			var a1_nodes = children(a1);
			t16 = claim_text(a1_nodes, "Shoshana Zuboff - The Age of Surveillance Capitalism");
			a1_nodes.forEach(detach_dev);
			p4_nodes.forEach(detach_dev);
			t17 = claim_space(section_nodes);
			p5 = claim_element(section_nodes, "P", {});
			var p5_nodes = children(p5);
			a2 = claim_element(p5_nodes, "A", { href: true, rel: true });
			var a2_nodes = children(a2);
			t18 = claim_text(a2_nodes, "FEE - Have Consumers Already Lost the Online Privacy War?");
			a2_nodes.forEach(detach_dev);
			p5_nodes.forEach(detach_dev);
			t19 = claim_space(section_nodes);
			p6 = claim_element(section_nodes, "P", {});
			var p6_nodes = children(p6);
			a3 = claim_element(p6_nodes, "A", { href: true, rel: true });
			var a3_nodes = children(a3);
			t20 = claim_text(a3_nodes, "Slate - You Really Don’t Want to Sell Your Data");
			a3_nodes.forEach(detach_dev);
			p6_nodes.forEach(detach_dev);
			t21 = claim_space(section_nodes);
			p7 = claim_element(section_nodes, "P", {});
			var p7_nodes = children(p7);
			a4 = claim_element(p7_nodes, "A", { href: true, rel: true });
			var a4_nodes = children(a4);
			t22 = claim_text(a4_nodes, "Electronic Frontier Foundation");
			a4_nodes.forEach(detach_dev);
			p7_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			body_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h20, "class", "svelte-bpbu8d");
			add_location(h20, file, 3, 2, 21);
			add_location(p0, file, 4, 2, 39);
			attr_dev(h21, "class", "svelte-bpbu8d");
			add_location(h21, file, 15, 2, 340);
			add_location(p1, file, 16, 2, 363);
			attr_dev(h22, "class", "svelte-bpbu8d");
			add_location(h22, file, 26, 2, 618);
			add_location(p2, file, 27, 2, 641);
			attr_dev(h23, "class", "svelte-bpbu8d");
			add_location(h23, file, 34, 2, 820);
			attr_dev(a0, "href", "https://techcrunch.com/2018/04/14/how-to-save-your-privacy-from-the-internets-clutches/");
			attr_dev(a0, "rel", "external");
			add_location(a0, file, 35, 5, 845);
			add_location(p3, file, 35, 2, 842);
			attr_dev(a1, "href", "https://shoshanazuboff.com/book/about/");
			attr_dev(a1, "rel", "external");
			add_location(a1, file, 36, 5, 1037);
			add_location(p4, file, 36, 2, 1034);
			attr_dev(a2, "href", "https://fee.org/articles/have-consumers-already-lost-the-online-privacy-war/");
			attr_dev(a2, "rel", "external");
			add_location(a2, file, 37, 5, 1165);
			add_location(p5, file, 37, 2, 1162);
			attr_dev(a3, "href", "https://slate.com/technology/2020/04/sell-your-own-data-bad-idea.html");
			attr_dev(a3, "rel", "external");
			add_location(a3, file, 38, 5, 1336);
			add_location(p6, file, 38, 2, 1333);
			attr_dev(a4, "href", "https://www.eff.org/");
			attr_dev(a4, "rel", "external");
			add_location(a4, file, 39, 5, 1490);
			add_location(p7, file, 39, 2, 1487);
			attr_dev(section, "class", "svelte-bpbu8d");
			add_location(section, file, 2, 1, 9);
			attr_dev(body, "class", "svelte-bpbu8d");
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
			append_dev(section, t11);
			append_dev(section, h23);
			append_dev(h23, t12);
			append_dev(section, t13);
			append_dev(section, p3);
			append_dev(p3, a0);
			append_dev(a0, t14);
			append_dev(section, t15);
			append_dev(section, p4);
			append_dev(p4, a1);
			append_dev(a1, t16);
			append_dev(section, t17);
			append_dev(section, p5);
			append_dev(p5, a2);
			append_dev(a2, t18);
			append_dev(section, t19);
			append_dev(section, p6);
			append_dev(p6, a3);
			append_dev(a3, t20);
			append_dev(section, t21);
			append_dev(section, p7);
			append_dev(p7, a4);
			append_dev(a4, t22);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuZWQxMmMzMTUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
