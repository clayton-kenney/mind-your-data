import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop } from './client.0a75f450.js';

/* src/routes/quiz.svelte generated by Svelte v3.23.2 */

const file = "src/routes/quiz.svelte";

function create_fragment(ctx) {
	let t0;
	let h1;
	let t1;
	let t2;
	let p;
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
			t0 = space();
			h1 = element("h1");
			t1 = text("Welcome to Mind Your Data Quiz");
			t2 = space();
			p = element("p");
			t3 = text("Only for educational purpose, this test will utilize blah blah blah. \nThere will be no personal data collected or shared... \nThis test will only  blah blah blah and utilize blah blah blah. \n");
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1tak1mj\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Welcome to Mind Your Data Quiz");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "Only for educational purpose, this test will utilize blah blah blah. \nThere will be no personal data collected or shared... \nThis test will only  blah blah blah and utilize blah blah blah. \n");
			p_nodes.forEach(detach_dev);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t4 = claim_text(h2_nodes, "this should get converted into a modal");
			h2_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			button0 = claim_element(nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			a0 = claim_element(button0_nodes, "A", { rel: true, href: true, class: true });
			var a0_nodes = children(a0);
			t6 = claim_text(a0_nodes, "cancel");
			a0_nodes.forEach(detach_dev);
			button0_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			button1 = claim_element(nodes, "BUTTON", { id: true, class: true });
			var button1_nodes = children(button1);
			a1 = claim_element(button1_nodes, "A", { rel: true, href: true, class: true });
			var a1_nodes = children(a1);
			t8 = claim_text(a1_nodes, "Agree");
			a1_nodes.forEach(detach_dev);
			button1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Data privacy quiz";
			add_location(h1, file, 4, 0, 64);
			add_location(p, file, 5, 0, 104);
			add_location(h2, file, 9, 0, 298);
			attr_dev(a0, "rel", "prefetch");
			attr_dev(a0, "href", ".");
			attr_dev(a0, "class", "svelte-earzo7");
			add_location(a0, file, 11, 4, 359);
			add_location(button0, file, 10, 0, 346);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "href", "quizmain");
			attr_dev(a1, "class", "svelte-earzo7");
			add_location(a1, file, 13, 19, 428);
			attr_dev(button1, "id", "agree");
			attr_dev(button1, "class", "svelte-earzo7");
			add_location(button1, file, 13, 0, 409);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t3);
			insert_dev(target, h2, anchor);
			append_dev(h2, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, button0, anchor);
			append_dev(button0, a0);
			append_dev(a0, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, button1, anchor);
			append_dev(button1, a1);
			append_dev(a1, t8);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(button1);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Quiz> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Quiz", $$slots, []);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei5jNmViNmU5NC5qcyIsInNvdXJjZXMiOltdLCJzb3VyY2VzQ29udGVudCI6W10sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
