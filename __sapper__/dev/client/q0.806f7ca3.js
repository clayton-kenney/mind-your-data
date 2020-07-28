import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, J as validate_each_argument, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, N as toggle_class, l as insert_dev, m as append_dev, a as space, q as query_selector_all, c as claim_space, C as add_render_callback, D as create_bidirectional_transition, Q as destroy_each } from './client.1d870419.js';
import { q as quintOut, a as quintIn } from './index.cccde779.js';
import { s as slide } from './index.01b49c54.js';

/* src/routes/quiz/q0.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q0.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[3] = list[i].id;
	child_ctx[4] = list[i].name;
	child_ctx[5] = list[i].time;
	child_ctx[6] = list[i].description;
	child_ctx[8] = i;
	return child_ctx;
}

// (28:4) {#each quizSteps as {id, name, time, description}
function create_each_block(ctx) {
	let div0;
	let t0;
	let t1_value = /*name*/ ctx[4] + "";
	let t1;
	let t2;
	let t3_value = /*time*/ ctx[5] + "";
	let t3;
	let t4;
	let div1;
	let t5_value = /*description*/ ctx[6] + "";
	let t5;

	const block = {
		c: function create() {
			div0 = element("div");
			t0 = text(/*i*/ ctx[8]);
			t1 = text(t1_value);
			t2 = text(" (");
			t3 = text(t3_value);
			t4 = text(")");
			div1 = element("div");
			t5 = text(t5_value);
			this.h();
		},
		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t0 = claim_text(div0_nodes, /*i*/ ctx[8]);
			t1 = claim_text(div0_nodes, t1_value);
			t2 = claim_text(div0_nodes, " (");
			t3 = claim_text(div0_nodes, t3_value);
			t4 = claim_text(div0_nodes, ")");
			div0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			t5 = claim_text(div1_nodes, t5_value);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(div0, "class", "num svelte-m0bqhn");
			add_location(div0, file, 28, 4, 1600);
			attr_dev(div1, "class", "svelte-m0bqhn");
			toggle_class(div1, "active", /*active*/ ctx[0]);
			add_location(div1, file, 28, 45, 1641);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div0, anchor);
			append_dev(div0, t0);
			append_dev(div0, t1);
			append_dev(div0, t2);
			append_dev(div0, t3);
			append_dev(div0, t4);
			insert_dev(target, div1, anchor);
			append_dev(div1, t5);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*active*/ 1) {
				toggle_class(div1, "active", /*active*/ ctx[0]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div0);
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(28:4) {#each quizSteps as {id, name, time, description}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div1;
	let h2;
	let t1;
	let t2;
	let div0;
	let div1_transition;
	let current;
	let each_value = /*quizSteps*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			h2 = element("h2");
			t1 = text("This test contains 10 unique privacy tests that will take you about 30 minutes to complete. Throught the test, we will provide...");
			t2 = space();
			div0 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mhs4ds\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h2 = claim_element(div1_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "This test contains 10 unique privacy tests that will take you about 30 minutes to complete. Throught the test, we will provide...");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div0_nodes);
			}

			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Quiz Overview";
			add_location(h2, file, 25, 0, 1393);
			attr_dev(div0, "class", "svelte-m0bqhn");
			add_location(div0, file, 26, 0, 1532);
			attr_dev(div1, "class", "svelte-m0bqhn");
			add_location(div1, file, 24, 0, 1319);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, h2);
			append_dev(h2, t1);
			append_dev(div1, t2);
			append_dev(div1, div0);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div0, null);
			}

			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*active, quizSteps*/ 3) {
				each_value = /*quizSteps*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div0, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
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
			destroy_each(each_blocks, detaching);
			if (detaching && div1_transition) div1_transition.end();
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
	const quizSteps = [
		{
			id: "q1",
			name: "Webcam Challenge",
			time: "2mins",
			description: "If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked. In this challenge, we are going to walk you through the best practice to avoid this risk."
		},
		{
			id: "q2",
			name: "Browser Choice",
			time: "3mins"
		},
		{
			id: "q3",
			name: "Privacy Setting",
			time: "4mins"
		},
		{
			id: "q4",
			name: "Https everywhere",
			time: "4mins"
		},
		{
			id: "q5",
			name: "Location Services (phone needed)",
			time: "3mins"
		},
		{
			id: "q6",
			name: "Tracker blocker",
			time: "3mins"
		},
		{
			id: "q7",
			name: "location Tracking",
			time: "1mins"
		},
		{
			id: "q8",
			name: "Mobile keyboard",
			time: "5mins"
		},
		{
			id: "q9",
			name: "Messenger platform",
			time: "2mins"
		},
		{ id: "q10", name: "iot", time: "2mins" }
	];

	let active = true;

	function handleMouseShow() {
		$$invalidate(0, active = false);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q0> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q0", $$slots, []);

	$$self.$capture_state = () => ({
		slide,
		quintOut,
		quintIn,
		quizSteps,
		active,
		handleMouseShow
	});

	$$self.$inject_state = $$props => {
		if ("active" in $$props) $$invalidate(0, active = $$props.active);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [active, quizSteps];
}

class Q0 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q0",
			options,
			id: create_fragment.name
		});
	}
}

export default Q0;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTAuODA2ZjdjYTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiBpbXBvcnQgeyBzbGlkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJztcbmltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG4gICAgIGNvbnN0IHF1aXpTdGVwcyA9ICBbXG4gICAgICAgIHsgaWQ6ICdxMScsIG5hbWU6ICdXZWJjYW0gQ2hhbGxlbmdlJywgdGltZTogJzJtaW5zJywgZGVzY3JpcHRpb246XCJJZiB5b3VyIGNvbXB1dGVyIGhhcyBhIGJ1aWx0LWluIGNhbWVyYSwgYWxzbyBrbm93biBhcyBhIHdlYmNhbSwgeW91IHNob3VsZCBrbm93IHRoYXQgaXQgY2FuIGJlIHVzZWQgdG8gc3B5IG9uIHlvdS4gQW5kIG5vLCB0aGlzIGlzIG5vdCBqdXN0IHNjaWVuY2UgZmljdGlvbiBhcyBhIHJlY2VudCBzdXJ2ZXkgY29uZHVjdGVkIGJ5IEhQIHNob3dzIHRoYXQgMTAlIGluIHRoZSBVLlMuIGVpdGhlciBrbm93IHNvbWVvbmUgd2hvc2Ugd2ViY2FtIHdhcyBoYWNrZWQgb3IgaGF2ZSBoYWQgdGhlaXIgb3duIHdlYmNhbSBoYWNrZWQuIEluIHRoaXMgY2hhbGxlbmdlLCB3ZSBhcmUgZ29pbmcgdG8gd2FsayB5b3UgdGhyb3VnaCB0aGUgYmVzdCBwcmFjdGljZSB0byBhdm9pZCB0aGlzIHJpc2suXCJ9LFxuICAgICAgICB7IGlkOiAncTInLCBuYW1lOiAnQnJvd3NlciBDaG9pY2UnLCB0aW1lOiAnM21pbnMnfSxcbiAgICAgICAgeyBpZDogJ3EzJywgbmFtZTogJ1ByaXZhY3kgU2V0dGluZycsIHRpbWU6ICc0bWlucyd9LFxuICAgICAgICB7IGlkOiAncTQnLCBuYW1lOiAnSHR0cHMgZXZlcnl3aGVyZScsIHRpbWU6ICc0bWlucyd9LFxuICAgICAgICB7IGlkOiAncTUnLCBuYW1lOiAnTG9jYXRpb24gU2VydmljZXMgKHBob25lIG5lZWRlZCknLCB0aW1lOiAnM21pbnMnfSxcbiAgICAgICAgeyBpZDogJ3E2JywgbmFtZTogJ1RyYWNrZXIgYmxvY2tlcicsIHRpbWU6ICczbWlucyd9LFxuICAgICAgICB7IGlkOiAncTcnLCBuYW1lOiAnbG9jYXRpb24gVHJhY2tpbmcnLCB0aW1lOiAnMW1pbnMnfSxcbiAgICAgICAgeyBpZDogJ3E4JywgbmFtZTogJ01vYmlsZSBrZXlib2FyZCcsIHRpbWU6ICc1bWlucyd9LFxuICAgICAgICB7IGlkOiAncTknLCBuYW1lOiAnTWVzc2VuZ2VyIHBsYXRmb3JtJywgdGltZTogJzJtaW5zJ30sXG4gICAgICAgIHsgaWQ6ICdxMTAnLCBuYW1lOiAnaW90JywgdGltZTogJzJtaW5zJ31cbiAgICAgXVxuICAgIGxldCBhY3RpdmUgPSB0cnVlO1xuICAgICBmdW5jdGlvbiBoYW5kbGVNb3VzZVNob3coKXtcbiAgICAgICAgYWN0aXZlID0gZmFsc2U7XG5cbiAgICAgfVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5RdWl6IE92ZXJ2aWV3PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2IHRyYW5zaXRpb246c2xpZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogcXVpbnRPdXR9fVwiID5cbjxoMj5UaGlzIHRlc3QgY29udGFpbnMgMTAgdW5pcXVlIHByaXZhY3kgdGVzdHMgdGhhdCB3aWxsIHRha2UgeW91IGFib3V0IDMwIG1pbnV0ZXMgdG8gY29tcGxldGUuIFRocm91Z2h0IHRoZSB0ZXN0LCB3ZSB3aWxsIHByb3ZpZGUuLi48L2gyPlxuPGRpdj5cbiAgICB7I2VhY2ggcXVpelN0ZXBzIGFzIHtpZCwgbmFtZSwgdGltZSwgZGVzY3JpcHRpb259LCBpfVxuICAgIDxkaXYgY2xhc3M9J251bSc+e2l9e25hbWV9ICh7dGltZX0pPC9kaXY+PGRpdiBjbGFzczphY3RpdmU9e2FjdGl2ZX0+e2Rlc2NyaXB0aW9ufTwvZGl2PlxuICAgIHsvZWFjaH1cbjwvZGl2PlxuPC9kaXY+XG48c3R5bGU+XG4gICAgLm51bSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuICAgICBcbiAgICB9XG4gICAgZGl2IHtcbiAgICAgICAgY29sb3I6YmxhY2s7XG4gICAgfVxuICAgIC5hY3RpdmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBNEJ5QixHQUFJOzs7eUJBQUksR0FBSTs7OztnQ0FBb0MsR0FBVzs7Ozs7O21CQUE5RCxHQUFDOzs7Ozs7Ozs7Ozs7cUNBQUQsR0FBQzs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FBeUMsR0FBTTs7Ozs7Ozs7Ozs7Ozs7OzRDQUFOLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUQzRCxHQUFTOzs7O2dDQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQUFDLEdBQVM7Ozs7K0JBQWQsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7OztNQUhlLEtBQUssRUFBRSxHQUFHO01BQUUsUUFBUSxFQUFFLEdBQUc7TUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0tBQTNDLEtBQUssRUFBRSxHQUFHO0tBQUUsUUFBUSxFQUFFLEdBQUc7S0FBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXJCekQsU0FBUzs7R0FDVixFQUFFLEVBQUUsSUFBSTtHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRSxJQUFJLEVBQUUsT0FBTztHQUFFLFdBQVcsRUFBQyxzWUFBc1k7OztHQUNyYyxFQUFFLEVBQUUsSUFBSTtHQUFFLElBQUksRUFBRSxnQkFBZ0I7R0FBRSxJQUFJLEVBQUUsT0FBTzs7O0dBQy9DLEVBQUUsRUFBRSxJQUFJO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFFLElBQUksRUFBRSxPQUFPOzs7R0FDaEQsRUFBRSxFQUFFLElBQUk7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsSUFBSSxFQUFFLE9BQU87OztHQUNqRCxFQUFFLEVBQUUsSUFBSTtHQUFFLElBQUksRUFBRSxrQ0FBa0M7R0FBRSxJQUFJLEVBQUUsT0FBTzs7O0dBQ2pFLEVBQUUsRUFBRSxJQUFJO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFFLElBQUksRUFBRSxPQUFPOzs7R0FDaEQsRUFBRSxFQUFFLElBQUk7R0FBRSxJQUFJLEVBQUUsbUJBQW1CO0dBQUUsSUFBSSxFQUFFLE9BQU87OztHQUNsRCxFQUFFLEVBQUUsSUFBSTtHQUFFLElBQUksRUFBRSxpQkFBaUI7R0FBRSxJQUFJLEVBQUUsT0FBTzs7O0dBQ2hELEVBQUUsRUFBRSxJQUFJO0dBQUUsSUFBSSxFQUFFLG9CQUFvQjtHQUFFLElBQUksRUFBRSxPQUFPOztJQUNuRCxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU87OztLQUV2QyxNQUFNLEdBQUcsSUFBSTs7VUFDUCxlQUFlO2tCQUNyQixNQUFNLEdBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
