import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, P as onMount, N as afterUpdate, p as globals, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, R as listen_dev, n as noop, A as add_render_callback, B as create_bidirectional_transition } from './client.9e23e6b8.js';
import { s as slide, q as quintOut, a as quintIn } from './index.42fd54b0.js';
import { D as Detect } from './Detect.30fb8843.js';

/* src/routes/quiz/check3.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/check3.svelte";

function create_fragment(ctx) {
	let t0;
	let div1;
	let h1;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let div0;
	let button0;
	let t5;
	let t6;
	let button1;
	let t7;
	let t8;
	let button2;
	let t9;
	let div1_transition;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text("How  to make change?");
			t2 = space();
			p = element("p");
			t3 = text("It started with the internet, then google realized that they had a data surplus, and our behavior has value. Now they sell it to the highest bidder.");
			t4 = space();
			div0 = element("div");
			button0 = element("button");
			t5 = text("Continue Challege");
			t6 = space();
			button1 = element("button");
			t7 = text("Sign a Petition");
			t8 = space();
			button2 = element("button");
			t9 = text("Contact your Rep");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mhgd6m\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "How  to make change?");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			p = claim_element(div1_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "It started with the internet, then google realized that they had a data surplus, and our behavior has value. Now they sell it to the highest bidder.");
			p_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			button0 = claim_element(div0_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t5 = claim_text(button0_nodes, "Continue Challege");
			button0_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			button1 = claim_element(div0_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t7 = claim_text(button1_nodes, "Sign a Petition");
			button1_nodes.forEach(detach_dev);
			t8 = claim_space(div0_nodes);
			button2 = claim_element(div0_nodes, "BUTTON", { class: true });
			var button2_nodes = children(button2);
			t9 = claim_text(button2_nodes, "Contact your Rep");
			button2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "How  to make change?";
			add_location(h1, file, 35, 4, 859);
			add_location(p, file, 36, 8, 897);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 39, 8, 1106);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 40, 8, 1169);
			attr_dev(button2, "class", "svelte-9jf7df");
			add_location(button2, file, 41, 8, 1211);
			attr_dev(div0, "class", "button-holder svelte-9jf7df");
			add_location(div0, file, 38, 4, 1070);
			add_location(div1, file, 34, 0, 781);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(div1, t2);
			append_dev(div1, p);
			append_dev(p, t3);
			append_dev(div1, t4);
			append_dev(div1, div0);
			append_dev(div0, button0);
			append_dev(button0, t5);
			append_dev(div0, t6);
			append_dev(div0, button1);
			append_dev(button1, t7);
			append_dev(div0, t8);
			append_dev(div0, button2);
			append_dev(button2, t9);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button0, "click", /*complete*/ ctx[0], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div1_transition) div1_transition = create_bidirectional_transition(
					div1,
					slide,
					{
						delay: 100,
						duration: 400,
						easing: quintOut
					},
					true
				);

				div1_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div1_transition) div1_transition = create_bidirectional_transition(
				div1,
				slide,
				{
					delay: 100,
					duration: 400,
					easing: quintOut
				},
				false
			);

			div1_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching && div1_transition) div1_transition.end();
			mounted = false;
			dispose();
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
	const dispatch = createEventDispatcher();

	//confirm comletion of quiz to master quiz component
	function complete() {
		dispatch("message", {
			question: 10, //Q-1 becaue of array
			complete: "true"
		});
	}

	function incomplete() {
		dispatch("message", {
			question: 10, //Q-1 becaue of array
			complete: "false"
		});
	}

	let q = 0;

	function advance() {
		q++;
		console.log(q);
	}

	function advanceTwo() {
		q += 2;
		console.log(q);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Check3> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check3", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		onMount,
		afterUpdate,
		Detect,
		slide,
		quintOut,
		quintIn,
		complete,
		incomplete,
		q,
		advance,
		advanceTwo
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) q = $$props.q;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [complete];
}

class Check3 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Check3",
			options,
			id: create_fragment.name
		});
	}
}

export default Check3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2szLjIzNDYxZGIzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2szLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCBEZXRlY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRlY3Quc3ZlbHRlJ1xuXG5cdGltcG9ydCB7IHNsaWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMTAsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICd0cnVlJ1xuXHRcdH0pO1xuXHR9XG5cdGZ1bmN0aW9uIGluY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMTAsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICdmYWxzZSdcblx0XHR9KTtcblx0fVxuXHRsZXQgcSA9IDA7XG5cdGZ1bmN0aW9uIGFkdmFuY2UoKSB7XG5cdFx0cSsrO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuXHR9XG5cdGZ1bmN0aW9uIGFkdmFuY2VUd28oKSB7XG5cdFx0cSs9Mjtcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Ib3cgIHRvIG1ha2UgY2hhbmdlPzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiB0cmFuc2l0aW9uOnNsaWRlPVwie3tkZWxheTogMTAwLCBkdXJhdGlvbjogNDAwLCBlYXNpbmc6IHF1aW50T3V0fX1cIiA+XG4gICAgPGgxPkhvdyAgdG8gbWFrZSBjaGFuZ2U/PC9oMT5cbiAgICAgICAgPHA+SXQgc3RhcnRlZCB3aXRoIHRoZSBpbnRlcm5ldCwgdGhlbiBnb29nbGUgcmVhbGl6ZWQgdGhhdCB0aGV5IGhhZCBhIGRhdGEgc3VycGx1cywgYW5kIG91ciBiZWhhdmlvciBoYXMgdmFsdWUuIE5vdyB0aGV5IHNlbGwgaXQgdG8gdGhlIGhpZ2hlc3QgYmlkZGVyLlxuICAgICAgICAgICAgPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgICAgIDxidXR0b24gb246Y2xpY2s9e2NvbXBsZXRlfT5Db250aW51ZSBDaGFsbGVnZTwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uID5TaWduIGEgUGV0aXRpb248L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiA+Q29udGFjdCB5b3VyIFJlcDwvYnV0dG9uPlxuICAgICAgICBcbiAgICA8L2Rpdj5cbjwvZGl2PlxuXG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3REF1QzBCLEdBQVE7Ozs7Ozs7Ozs7Ozs7TUFMVCxLQUFLLEVBQUUsR0FBRztNQUFFLFFBQVEsRUFBRSxHQUFHO01BQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7OztLQUEzQyxLQUFLLEVBQUUsR0FBRztLQUFFLFFBQVEsRUFBRSxHQUFHO0tBQUUsTUFBTSxFQUFFLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BaEM3RCxRQUFRLEdBQUcscUJBQXFCOzs7VUFPN0IsUUFBUTtFQUNoQixRQUFRLENBQUMsU0FBUztHQUNqQixRQUFRLEVBQUUsRUFBRTtHQUNaLFFBQVEsRUFBRSxNQUFNOzs7O1VBR1QsVUFBVTtFQUNsQixRQUFRLENBQUMsU0FBUztHQUNqQixRQUFRLEVBQUUsRUFBRTtHQUNaLFFBQVEsRUFBRSxPQUFPOzs7O0tBR2YsQ0FBQyxHQUFHLENBQUM7O1VBQ0EsT0FBTztFQUNmLENBQUM7RUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7OztVQUVMLFVBQVU7RUFDbEIsQ0FBQyxJQUFFLENBQUM7RUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
