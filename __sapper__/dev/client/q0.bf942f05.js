import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, L as validate_each_argument, v as validate_slots, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, k as add_location, M as toggle_class, l as insert_dev, m as append_dev, a as space, q as query_selector_all, c as claim_space, n as noop, N as destroy_each } from './client.e9ec61cb.js';

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

// (26:4) {#each quizSteps as {id, name, time, description}
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
			add_location(div0, file, 26, 4, 1432);
			attr_dev(div1, "class", "svelte-m0bqhn");
			toggle_class(div1, "active", /*active*/ ctx[0]);
			add_location(div1, file, 26, 45, 1473);
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
		source: "(26:4) {#each quizSteps as {id, name, time, description}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let h2;
	let t1;
	let t2;
	let div;
	let each_value = /*quizSteps*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			t0 = space();
			h2 = element("h2");
			t1 = text("This test contains 10 unique privacy tests that will take you about 30 minutes to complete. Throught the test, we will provide...");
			t2 = space();
			div = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mhs4ds\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "This test contains 10 unique privacy tests that will take you about 30 minutes to complete. Throught the test, we will provide...");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(div_nodes);
			}

			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Quiz Overview";
			add_location(h2, file, 23, 0, 1225);
			attr_dev(div, "class", "svelte-m0bqhn");
			add_location(div, file, 24, 0, 1364);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t1);
			insert_dev(target, t2, anchor);
			insert_dev(target, div, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
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
						each_blocks[i].m(div, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t2);
			if (detaching) detach_dev(div);
			destroy_each(each_blocks, detaching);
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
	$$self.$capture_state = () => ({ quizSteps, active, handleMouseShow });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTAuYmY5NDJmMDUuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblxuICAgICBjb25zdCBxdWl6U3RlcHMgPSAgW1xuICAgICAgICB7IGlkOiAncTEnLCBuYW1lOiAnV2ViY2FtIENoYWxsZW5nZScsIHRpbWU6ICcybWlucycsIGRlc2NyaXB0aW9uOlwiSWYgeW91ciBjb21wdXRlciBoYXMgYSBidWlsdC1pbiBjYW1lcmEsIGFsc28ga25vd24gYXMgYSB3ZWJjYW0sIHlvdSBzaG91bGQga25vdyB0aGF0IGl0IGNhbiBiZSB1c2VkIHRvIHNweSBvbiB5b3UuIEFuZCBubywgdGhpcyBpcyBub3QganVzdCBzY2llbmNlIGZpY3Rpb24gYXMgYSByZWNlbnQgc3VydmV5IGNvbmR1Y3RlZCBieSBIUCBzaG93cyB0aGF0IDEwJSBpbiB0aGUgVS5TLiBlaXRoZXIga25vdyBzb21lb25lIHdob3NlIHdlYmNhbSB3YXMgaGFja2VkIG9yIGhhdmUgaGFkIHRoZWlyIG93biB3ZWJjYW0gaGFja2VkLiBJbiB0aGlzIGNoYWxsZW5nZSwgd2UgYXJlIGdvaW5nIHRvIHdhbGsgeW91IHRocm91Z2ggdGhlIGJlc3QgcHJhY3RpY2UgdG8gYXZvaWQgdGhpcyByaXNrLlwifSxcbiAgICAgICAgeyBpZDogJ3EyJywgbmFtZTogJ0Jyb3dzZXIgQ2hvaWNlJywgdGltZTogJzNtaW5zJ30sXG4gICAgICAgIHsgaWQ6ICdxMycsIG5hbWU6ICdQcml2YWN5IFNldHRpbmcnLCB0aW1lOiAnNG1pbnMnfSxcbiAgICAgICAgeyBpZDogJ3E0JywgbmFtZTogJ0h0dHBzIGV2ZXJ5d2hlcmUnLCB0aW1lOiAnNG1pbnMnfSxcbiAgICAgICAgeyBpZDogJ3E1JywgbmFtZTogJ0xvY2F0aW9uIFNlcnZpY2VzIChwaG9uZSBuZWVkZWQpJywgdGltZTogJzNtaW5zJ30sXG4gICAgICAgIHsgaWQ6ICdxNicsIG5hbWU6ICdUcmFja2VyIGJsb2NrZXInLCB0aW1lOiAnM21pbnMnfSxcbiAgICAgICAgeyBpZDogJ3E3JywgbmFtZTogJ2xvY2F0aW9uIFRyYWNraW5nJywgdGltZTogJzFtaW5zJ30sXG4gICAgICAgIHsgaWQ6ICdxOCcsIG5hbWU6ICdNb2JpbGUga2V5Ym9hcmQnLCB0aW1lOiAnNW1pbnMnfSxcbiAgICAgICAgeyBpZDogJ3E5JywgbmFtZTogJ01lc3NlbmdlciBwbGF0Zm9ybScsIHRpbWU6ICcybWlucyd9LFxuICAgICAgICB7IGlkOiAncTEwJywgbmFtZTogJ2lvdCcsIHRpbWU6ICcybWlucyd9XG4gICAgIF1cbiAgICBsZXQgYWN0aXZlID0gdHJ1ZTtcbiAgICAgZnVuY3Rpb24gaGFuZGxlTW91c2VTaG93KCl7XG4gICAgICAgIGFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgIH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+UXVpeiBPdmVydmlldzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGgyPlRoaXMgdGVzdCBjb250YWlucyAxMCB1bmlxdWUgcHJpdmFjeSB0ZXN0cyB0aGF0IHdpbGwgdGFrZSB5b3UgYWJvdXQgMzAgbWludXRlcyB0byBjb21wbGV0ZS4gVGhyb3VnaHQgdGhlIHRlc3QsIHdlIHdpbGwgcHJvdmlkZS4uLjwvaDI+XG48ZGl2PlxuICAgIHsjZWFjaCBxdWl6U3RlcHMgYXMge2lkLCBuYW1lLCB0aW1lLCBkZXNjcmlwdGlvbn0sIGl9XG4gICAgPGRpdiBjbGFzcz0nbnVtJz57aX17bmFtZX0gKHt0aW1lfSk8L2Rpdj48ZGl2IGNsYXNzOmFjdGl2ZT17YWN0aXZlfT57ZGVzY3JpcHRpb259PC9kaXY+XG4gICAgey9lYWNofVxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgICAubnVtIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTAwcHg7XG4gICAgIFxuICAgIH1cbiAgICBkaXYge1xuICAgICAgICBjb2xvcjpibGFjaztcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBcbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lCQTBCeUIsR0FBSTs7O3lCQUFJLEdBQUk7Ozs7Z0NBQW9DLEdBQVc7Ozs7OzttQkFBOUQsR0FBQzs7Ozs7Ozs7Ozs7O3FDQUFELEdBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7MkNBQXlDLEdBQU07Ozs7Ozs7Ozs7Ozs7Ozs0Q0FBTixHQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQ0FEM0QsR0FBUzs7OztnQ0FBZCxNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFBQyxHQUFTOzs7OytCQUFkLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F2QkMsU0FBUzs7R0FDVixFQUFFLEVBQUUsSUFBSTtHQUFFLElBQUksRUFBRSxrQkFBa0I7R0FBRSxJQUFJLEVBQUUsT0FBTztHQUFFLFdBQVcsRUFBQyxzWUFBc1k7OztHQUNyYyxFQUFFLEVBQUUsSUFBSTtHQUFFLElBQUksRUFBRSxnQkFBZ0I7R0FBRSxJQUFJLEVBQUUsT0FBTzs7O0dBQy9DLEVBQUUsRUFBRSxJQUFJO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFFLElBQUksRUFBRSxPQUFPOzs7R0FDaEQsRUFBRSxFQUFFLElBQUk7R0FBRSxJQUFJLEVBQUUsa0JBQWtCO0dBQUUsSUFBSSxFQUFFLE9BQU87OztHQUNqRCxFQUFFLEVBQUUsSUFBSTtHQUFFLElBQUksRUFBRSxrQ0FBa0M7R0FBRSxJQUFJLEVBQUUsT0FBTzs7O0dBQ2pFLEVBQUUsRUFBRSxJQUFJO0dBQUUsSUFBSSxFQUFFLGlCQUFpQjtHQUFFLElBQUksRUFBRSxPQUFPOzs7R0FDaEQsRUFBRSxFQUFFLElBQUk7R0FBRSxJQUFJLEVBQUUsbUJBQW1CO0dBQUUsSUFBSSxFQUFFLE9BQU87OztHQUNsRCxFQUFFLEVBQUUsSUFBSTtHQUFFLElBQUksRUFBRSxpQkFBaUI7R0FBRSxJQUFJLEVBQUUsT0FBTzs7O0dBQ2hELEVBQUUsRUFBRSxJQUFJO0dBQUUsSUFBSSxFQUFFLG9CQUFvQjtHQUFFLElBQUksRUFBRSxPQUFPOztJQUNuRCxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU87OztLQUV2QyxNQUFNLEdBQUcsSUFBSTs7VUFDUCxlQUFlO2tCQUNyQixNQUFNLEdBQUcsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
