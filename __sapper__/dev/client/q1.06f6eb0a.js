import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, y as validate_each_argument, a as space, e as element, t as text, o as create_component, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, p as claim_component, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, r as mount_component, z as set_data_dev, u as transition_in, w as transition_out, x as destroy_component, A as bubble, B as null_to_empty, n as noop, C as destroy_each } from './client.e04945f1.js';
import Progress from './Progress.b17141d7.js';

/* src/routes/quiz/q1.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q1.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i];
	return child_ctx;
}

// (23:2) {#each q1Steps as step }
function create_each_block(ctx) {
	let li;
	let t_value = /*step*/ ctx[4].name + "";
	let t;
	let li_class_value;

	const block = {
		c: function create() {
			li = element("li");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			t = claim_text(li_nodes, t_value);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(li, "class", li_class_value = "" + (null_to_empty(/*step*/ ctx[4].class) + " svelte-1u03q0h"));
			add_location(li, file, 23, 3, 968);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(23:2) {#each q1Steps as step }",
		ctx
	});

	return block;
}

// (21:1) <Progress on:message>
function create_default_slot(ctx) {
	let ul;
	let each_value = /*q1Steps*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(ul, file, 21, 2, 933);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*q1Steps*/ 2) {
				each_value = /*q1Steps*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(21:1) <Progress on:message>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div;
	let h2;
	let t1;
	let t2;
	let p;
	let t3;
	let t4;
	let progress;
	let current;

	progress = new Progress({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	progress.$on("message", /*message_handler*/ ctx[2]);

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			h2 = element("h2");
			t1 = text(/*headline*/ ctx[0]);
			t2 = space();
			p = element("p");
			t3 = text("If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.");
			t4 = space();
			create_component(progress.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-11mvzac\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h2 = claim_element(div_nodes, "H2", {});
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, /*headline*/ ctx[0]);
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "If your computer has a built-in camera, also known as a webcam, you should know that it can be used to spy on you. And no, this is not just science fiction as a recent survey conducted by HP shows that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.");
			p_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			claim_component(progress.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Webcam Challenge";
			add_location(h2, file, 17, 0, 573);
			add_location(p, file, 18, 0, 594);
			attr_dev(div, "class", "quiz-holder svelte-1u03q0h");
			add_location(div, file, 16, 0, 547);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h2);
			append_dev(h2, t1);
			append_dev(div, t2);
			append_dev(div, p);
			append_dev(p, t3);
			insert_dev(target, t4, anchor);
			mount_component(progress, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (!current || dirty & /*headline*/ 1) set_data_dev(t1, /*headline*/ ctx[0]);
			const progress_changes = {};

			if (dirty & /*$$scope*/ 128) {
				progress_changes.$$scope = { dirty, ctx };
			}

			progress.$set(progress_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(progress.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(progress.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t4);
			destroy_component(progress, detaching);
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

function handleMessage(event) {
	alert(event.detail.text);
}

function instance($$self, $$props, $$invalidate) {
	const q1Steps = [
		{
			stepNum: "1",
			h2: "Webcam Challenge",
			name: "Introduction",
			class: "complete"
		},
		{
			stepNum: "2",
			h2: "Cover Your Webcam",
			name: "Permissions",
			class: "incomplete"
		},
		{
			stepNum: "3",
			component: "Great! It’s properly covered.",
			name: "Cover your webcam",
			class: "incomplete"
		}
	];

	let q = 0;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q1> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q1", $$slots, []);

	function message_handler(event) {
		bubble($$self, event);
	}

	$$self.$capture_state = () => ({
		Progress,
		q1Steps,
		q,
		handleMessage,
		headline
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(3, q = $$props.q);
		if ("headline" in $$props) $$invalidate(0, headline = $$props.headline);
	};

	let headline;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	 $$invalidate(0, headline = q1Steps[q].h2);
	return [headline, q1Steps, message_handler];
}

class Q1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q1",
			options,
			id: create_fragment.name
		});
	}
}

export default Q1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTEuMDZmNmViMGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbmltcG9ydCBQcm9ncmVzcyBmcm9tICcuL1Byb2dyZXNzLnN2ZWx0ZSdcblx0Y29uc3QgcTFTdGVwcyA9IFtcblx0eyBzdGVwTnVtOiAnMScsIGgyOiAnV2ViY2FtIENoYWxsZW5nZScsIG5hbWU6ICdJbnRyb2R1Y3Rpb24nLCBjbGFzczogJ2NvbXBsZXRlJ30sXG5cdHsgc3RlcE51bTogJzInLCBoMjogJ0NvdmVyIFlvdXIgV2ViY2FtJywgbmFtZTogJ1Blcm1pc3Npb25zJywgY2xhc3M6ICdpbmNvbXBsZXRlJ30sXG5cdHsgc3RlcE51bTogJzMnLCBjb21wb25lbnQ6ICdHcmVhdCEgSXTigJlzIHByb3Blcmx5IGNvdmVyZWQuJywgbmFtZTogJ0NvdmVyIHlvdXIgd2ViY2FtJywgY2xhc3M6ICdpbmNvbXBsZXRlJ31cblx0XVxuXHRsZXQgcSA9IDA7XG5cdGZ1bmN0aW9uIGhhbmRsZU1lc3NhZ2UoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBhbGVydChldmVudC5kZXRhaWwudGV4dCk7XG4gICAgICAgIH1cblx0JDogaGVhZGxpbmUgPSBxMVN0ZXBzW3FdLmgyXG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPldlYmNhbSBDaGFsbGVuZ2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxkaXYgY2xhc3M9J3F1aXotaG9sZGVyJz5cbjxoMj57aGVhZGxpbmV9PC9oMj4gXG48cD5JZiB5b3VyIGNvbXB1dGVyIGhhcyBhIGJ1aWx0LWluIGNhbWVyYSwgYWxzbyBrbm93biBhcyBhIHdlYmNhbSwgeW91IHNob3VsZCBrbm93IHRoYXQgaXQgY2FuIGJlIHVzZWQgdG8gc3B5IG9uIHlvdS4gQW5kIG5vLCB0aGlzIGlzIG5vdCBqdXN0IHNjaWVuY2UgZmljdGlvbiBhcyBhIHJlY2VudCBzdXJ2ZXkgY29uZHVjdGVkIGJ5IEhQIHNob3dzIHRoYXQgMTAlIGluIHRoZSBVLlMuIGVpdGhlciBrbm93IHNvbWVvbmUgd2hvc2Ugd2ViY2FtIHdhcyBoYWNrZWQgb3IgaGF2ZSBoYWQgdGhlaXIgb3duIHdlYmNhbSBoYWNrZWQuPC9wPiBcbjwvZGl2PlxuXHQ8UHJvZ3Jlc3Mgb246bWVzc2FnZT5cblx0XHQ8dWw+XG5cdFx0eyNlYWNoIHExU3RlcHMgYXMgc3RlcCB9XG5cdFx0XHQ8bGkgY2xhc3M9e3N0ZXAuY2xhc3N9ID57c3RlcC5uYW1lfTwvbGk+XG5cdFx0ey9lYWNofVxuXHRcdDwvdWw+XG5cdDwvUHJvZ3Jlc3M+XG48c3R5bGU+XG4gICAucXVpei1ob2xkZXIge1xuXHQgICB3aWR0aDogNzAlO1xuICAgICAgIHBhZGRpbmc6IDIwcHggNDBweDtcbiAgIH1cbiAgIC5pbmNvbXBsZXRlIHtcbiAgICAgICAgY29sb3I6ICNhMGEwYTA7XG4gICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O3dCQXVCNEIsR0FBSSxJQUFDLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1RUFBdkIsR0FBSSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFEZixHQUFPOzs7O2dDQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBQUMsR0FBTzs7OzsrQkFBWixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUxILEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7MENBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUVBQVIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQVRILGFBQWEsQ0FBQyxLQUFLO0NBQ2IsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztPQVBoQyxPQUFPOztHQUNYLE9BQU8sRUFBRSxHQUFHO0dBQUUsRUFBRSxFQUFFLGtCQUFrQjtHQUFFLElBQUksRUFBRSxjQUFjO0dBQUUsS0FBSyxFQUFFLFVBQVU7OztHQUM3RSxPQUFPLEVBQUUsR0FBRztHQUFFLEVBQUUsRUFBRSxtQkFBbUI7R0FBRSxJQUFJLEVBQUUsYUFBYTtHQUFFLEtBQUssRUFBRSxZQUFZOzs7R0FDL0UsT0FBTyxFQUFFLEdBQUc7R0FBRSxTQUFTLEVBQUUsK0JBQStCO0dBQUUsSUFBSSxFQUFFLG1CQUFtQjtHQUFFLEtBQUssRUFBRSxZQUFZOzs7O0tBRXRHLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBSU4sUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
