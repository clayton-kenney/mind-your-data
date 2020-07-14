import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, n as noop, A as add_render_callback, B as create_bidirectional_transition } from './client.503447ef.js';
import { s as slide, q as quintOut, a as quintIn } from './index.42fd54b0.js';

/* src/routes/quiz.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz.svelte";

function create_fragment(ctx) {
	let t0;
	let div;
	let h1;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let h2;
	let t5;
	let t6;
	let button0;
	let a0;
	let t7;
	let t8;
	let button1;
	let a1;
	let t9;
	let div_transition;
	let current;

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			h1 = element("h1");
			t1 = text("Welcome to Mind Your Data Quiz");
			t2 = space();
			p = element("p");
			t3 = text("Only for educational purpose, this test will utilize blah blah blah. \nThere will be no personal data collected or shared... \nThis test will only  blah blah blah and utilize blah blah blah.");
			t4 = space();
			h2 = element("h2");
			t5 = text("this should get converted into a modal");
			t6 = space();
			button0 = element("button");
			a0 = element("a");
			t7 = text("cancel");
			t8 = space();
			button1 = element("button");
			a1 = element("a");
			t9 = text("Agree");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1tak1mj\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Welcome to Mind Your Data Quiz");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "Only for educational purpose, this test will utilize blah blah blah. \nThere will be no personal data collected or shared... \nThis test will only  blah blah blah and utilize blah blah blah.");
			p_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			h2 = claim_element(div_nodes, "H2", {});
			var h2_nodes = children(h2);
			t5 = claim_text(h2_nodes, "this should get converted into a modal");
			h2_nodes.forEach(detach_dev);
			t6 = claim_space(div_nodes);
			button0 = claim_element(div_nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			a0 = claim_element(button0_nodes, "A", { rel: true, href: true, class: true });
			var a0_nodes = children(a0);
			t7 = claim_text(a0_nodes, "cancel");
			a0_nodes.forEach(detach_dev);
			button0_nodes.forEach(detach_dev);
			t8 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { id: true, class: true });
			var button1_nodes = children(button1);
			a1 = claim_element(button1_nodes, "A", { rel: true, href: true, class: true });
			var a1_nodes = children(a1);
			t9 = claim_text(a1_nodes, "Agree");
			a1_nodes.forEach(detach_dev);
			button1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Data privacy quiz";
			add_location(h1, file, 9, 0, 259);
			add_location(p, file, 10, 0, 299);
			add_location(h2, file, 14, 0, 497);
			attr_dev(a0, "rel", "prefetch");
			attr_dev(a0, "href", ".");
			attr_dev(a0, "class", "svelte-earzo7");
			add_location(a0, file, 16, 4, 558);
			add_location(button0, file, 15, 0, 545);
			attr_dev(a1, "rel", "prefetch");
			attr_dev(a1, "href", "quizmain");
			attr_dev(a1, "class", "svelte-earzo7");
			add_location(a1, file, 18, 19, 627);
			attr_dev(button1, "id", "agree");
			attr_dev(button1, "class", "svelte-earzo7");
			add_location(button1, file, 18, 0, 608);
			add_location(div, file, 7, 0, 184);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t1);
			append_dev(div, t2);
			append_dev(div, p);
			append_dev(p, t3);
			append_dev(div, t4);
			append_dev(div, h2);
			append_dev(h2, t5);
			append_dev(div, t6);
			append_dev(div, button0);
			append_dev(button0, a0);
			append_dev(a0, t7);
			append_dev(div, t8);
			append_dev(div, button1);
			append_dev(button1, a1);
			append_dev(a1, t9);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(
					div,
					slide,
					{
						delay: 100,
						duration: 400,
						easing: quintOut
					},
					true
				);

				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(
				div,
				slide,
				{
					delay: 100,
					duration: 400,
					easing: quintOut
				},
				false
			);

			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if (detaching && div_transition) div_transition.end();
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
	$$self.$capture_state = () => ({ slide, quintOut, quintIn });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicXVpei45YjhjNDQ0OC5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9xdWl6LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuICAgIGltcG9ydCB7IHNsaWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkRhdGEgcHJpdmFjeSBxdWl6PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2IHRyYW5zaXRpb246c2xpZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogcXVpbnRPdXR9fVwiID5cblxuPGgxPldlbGNvbWUgdG8gTWluZCBZb3VyIERhdGEgUXVpejwvaDE+XG48cD5cbk9ubHkgZm9yIGVkdWNhdGlvbmFsIHB1cnBvc2UsIHRoaXMgdGVzdCB3aWxsIHV0aWxpemUgYmxhaCBibGFoIGJsYWguIFxuVGhlcmUgd2lsbCBiZSBubyBwZXJzb25hbCBkYXRhIGNvbGxlY3RlZCBvciBzaGFyZWQuLi4gXG5UaGlzIHRlc3Qgd2lsbCBvbmx5ICBibGFoIGJsYWggYmxhaCBhbmQgdXRpbGl6ZSBibGFoIGJsYWggYmxhaC4gPC9wPlxuPGgyPnRoaXMgc2hvdWxkIGdldCBjb252ZXJ0ZWQgaW50byBhIG1vZGFsPC9oMj5cbjxidXR0b24+XG4gICAgPGEgcmVsPXByZWZldGNoIGhyZWY9Jy4nPmNhbmNlbDwvYT5cbiAgICA8L2J1dHRvbj5cbjxidXR0b24gaWQ9XCJhZ3JlZVwiPjxhIHJlbD1wcmVmZXRjaCBocmVmPSdxdWl6bWFpbicgPkFncmVlPC9hPjwvYnV0dG9uPlxuPC9kaXY+XG48c3R5bGU+XG4gICAgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gICAgI2FncmVle1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BT3lCLEtBQUssRUFBRSxHQUFHO01BQUUsUUFBUSxFQUFFLEdBQUc7TUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0tBQTNDLEtBQUssRUFBRSxHQUFHO0tBQUUsUUFBUSxFQUFFLEdBQUc7S0FBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
