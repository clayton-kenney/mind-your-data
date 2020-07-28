import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.8d71028b.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.dbc04d2b.js';

/* src/routes/quiz.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz.svelte";

// (7:0) <Trans>
function create_default_slot(ctx) {
	let section;
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let h2;
	let t4;
	let t5;
	let button0;
	let a0;
	let t6;
	let t7;
	let button1;
	let a1;
	let t8;

	const block = {
		c: function create() {
			section = element("section");
			h1 = element("h1");
			t0 = text("Welcome to Mind Your Data Quiz");
			t1 = space();
			p = element("p");
			t2 = text("Only for educational purpose, this test will utilize blah blah blah. \n    There will be no personal data collected or shared... \n    This test will only  blah blah blah and utilize blah blah blah.");
			t3 = space();
			h2 = element("h2");
			t4 = text("this should get converted into a modal");
			t5 = space();
			button0 = element("button");
			a0 = element("a");
			t6 = text("cancel");
			t7 = space();
			button1 = element("button");
			a1 = element("a");
			t8 = text("Agree");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { id: true, class: true });
			var section_nodes = children(section);
			h1 = claim_element(section_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Welcome to Mind Your Data Quiz");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Only for educational purpose, this test will utilize blah blah blah. \n    There will be no personal data collected or shared... \n    This test will only  blah blah blah and utilize blah blah blah.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t4 = claim_text(h2_nodes, "this should get converted into a modal");
			h2_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			button0 = claim_element(section_nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			a0 = claim_element(button0_nodes, "A", { rel: true, href: true });
			var a0_nodes = children(a0);
			t6 = claim_text(a0_nodes, "cancel");
			a0_nodes.forEach(detach_dev);
			button0_nodes.forEach(detach_dev);
			t7 = claim_space(section_nodes);
			button1 = claim_element(section_nodes, "BUTTON", { id: true });
			var button1_nodes = children(button1);
			a1 = claim_element(button1_nodes, "A", { rel: true, href: true });
			var a1_nodes = children(a1);
			t8 = claim_text(a1_nodes, "Agree");
			a1_nodes.forEach(detach_dev);
			button1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 8, 4, 170);
			add_location(p, file, 9, 4, 214);
			add_location(h2, file, 13, 4, 428);
			attr_dev(a0, "rel", "prefetch");
			attr_dev(a0, "href", ".");
			add_location(a0, file, 15, 8, 497);
			add_location(button0, file, 14, 4, 480);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "href", "quizmain");
			add_location(a1, file, 17, 23, 574);
			attr_dev(button1, "id", "agree");
			add_location(button1, file, 17, 4, 555);
			attr_dev(section, "id", "content");
			attr_dev(section, "class", "svelte-lq69he");
			add_location(section, file, 7, 0, 143);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(h1, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			append_dev(section, h2);
			append_dev(h2, t4);
			append_dev(section, t5);
			append_dev(section, button0);
			append_dev(button0, a0);
			append_dev(a0, t6);
			append_dev(section, t7);
			append_dev(section, button1);
			append_dev(button1, a1);
			append_dev(a1, t8);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(7:0) <Trans>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let trans;
	let current;

	trans = new TransHelp({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			t = space();
			create_component(trans.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1tak1mj\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Data privacy quiz";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope*/ 1) {
				trans_changes.$$scope = { dirty, ctx };
			}

			trans.$set(trans_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(trans.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(trans.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			destroy_component(trans, detaching);
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

function instance($$self, $$props, $$invalidate) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Quiz> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Quiz", $$slots, []);
	$$self.$capture_state = () => ({ Trans: TransHelp });
	return [];
}

class Quiz extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Quiz",
			options,
			id: create_fragment.name
		});
	}
}

export default Quiz;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei4yYTgwNmQwNy5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
