import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, v as validate_slots, X as validate_each_argument, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, U as empty, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev, N as set_data_dev, Z as destroy_each, V as toggle_class } from './client.7d02ac28.js';
import './index.44998259.js';
import './index.fa9fd29e.js';
import { T as TransHelp } from './TransHelp.3d176a70.js';
import { c as count, s as step, q as quizSteps } from './store.e3ad6fbf.js';
import { C as Complete, B as Back } from './Back.fe3d0cb0.js';
import { B as Btn } from './Btn.30374f20.js';

/* src/routes/review.svelte generated by Svelte v3.23.2 */
const file = "src/routes/review.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i].name;
	child_ctx[6] = list[i].complete;
	child_ctx[7] = list[i].displayProgress;
	return child_ctx;
}

// (26:4) {#if displayProgress}
function create_if_block(ctx) {
	let p;
	let t_value = /*name*/ ctx[5] + "";
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, t_value);
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "svelte-1cd6hq");
			toggle_class(p, "complete", /*complete*/ ctx[6]);
			add_location(p, file, 26, 4, 950);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$quizSteps*/ 2 && t_value !== (t_value = /*name*/ ctx[5] + "")) set_data_dev(t, t_value);

			if (dirty & /*$quizSteps*/ 2) {
				toggle_class(p, "complete", /*complete*/ ctx[6]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(26:4) {#if displayProgress}",
		ctx
	});

	return block;
}

// (25:4) {#each $quizSteps as {name, complete, displayProgress}}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*displayProgress*/ ctx[7] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*displayProgress*/ ctx[7]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(25:4) {#each $quizSteps as {name, complete, displayProgress}}",
		ctx
	});

	return block;
}

// (21:0) <Trans>
function create_default_slot(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let a0;
	let button0;
	let t5;
	let t6;
	let a1;
	let button1;
	let t7;
	let each_value = /*$quizSteps*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("You have completed ");
			t1 = text(/*completed*/ ctx[0]);
			t2 = text(" / 8 challenges!");
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			a0 = element("a");
			button0 = element("button");
			t5 = text("Claim my Prize");
			t6 = space();
			a1 = element("a");
			button1 = element("button");
			t7 = text("Back to quiz");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "You have completed ");
			t1 = claim_text(h2_nodes, /*completed*/ ctx[0]);
			t2 = claim_text(h2_nodes, " / 8 challenges!");
			h2_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section_nodes);
			}

			t4 = claim_space(section_nodes);
			a0 = claim_element(section_nodes, "A", { prefetch: true, href: true });
			var a0_nodes = children(a0);
			button0 = claim_element(a0_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t5 = claim_text(button0_nodes, "Claim my Prize");
			button0_nodes.forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			t6 = claim_space(section_nodes);
			a1 = claim_element(section_nodes, "A", { prefetch: true, href: true });
			var a1_nodes = children(a1);
			button1 = claim_element(a1_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t7 = claim_text(button1_nodes, "Back to quiz");
			button1_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 22, 4, 799);
			attr_dev(button0, "class", "svelte-1cd6hq");
			add_location(button0, file, 30, 28, 1030);
			attr_dev(a0, "prefetch", "");
			attr_dev(a0, "href", "home");
			add_location(a0, file, 30, 4, 1006);
			attr_dev(button1, "class", "svelte-1cd6hq");
			add_location(button1, file, 32, 32, 1099);
			attr_dev(a1, "prefetch", "");
			attr_dev(a1, "href", "quizmain");
			add_location(a1, file, 32, 4, 1071);
			attr_dev(section, "class", "review svelte-1cd6hq");
			add_location(section, file, 21, 0, 770);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(h2, t1);
			append_dev(h2, t2);
			append_dev(section, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section, null);
			}

			append_dev(section, t4);
			append_dev(section, a0);
			append_dev(a0, button0);
			append_dev(button0, t5);
			append_dev(section, t6);
			append_dev(section, a1);
			append_dev(a1, button1);
			append_dev(button1, t7);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*completed*/ 1) set_data_dev(t1, /*completed*/ ctx[0]);

			if (dirty & /*$quizSteps*/ 2) {
				each_value = /*$quizSteps*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(section, t4);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(21:0) <Trans>",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-3r29dh\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Internet of things( Alexa, Home devices)";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, $quizSteps, completed*/ 1027) {
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
	let $quizSteps;
	let $count;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(1, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(2, $count = $$value));
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);

		$quizSteps.forEach(v => {
			if (v.complete == true) {
				$$invalidate(0, completed++, completed);
			}
		});
	});

	let completed = 0;
	let current = "initial";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Review> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Review", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		dispatch,
		Trans: TransHelp,
		Complete,
		Btn,
		count,
		step,
		quizSteps,
		Back,
		completed,
		current,
		$quizSteps,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("completed" in $$props) $$invalidate(0, completed = $$props.completed);
		if ("current" in $$props) current = $$props.current;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [completed, $quizSteps];
}

class Review extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Review",
			options,
			id: create_fragment.name
		});
	}
}

export default Review;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LjBiMWU4MzkxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Jldmlldy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblxuXHQvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcbiAgICBvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuICAgICAgICAkcXVpelN0ZXBzLmZvckVhY2goKHYpID0+IHtpZih2LmNvbXBsZXRlID09IHRydWUpe2NvbXBsZXRlZCsrfX0pfSk7XG4gICAgbGV0IGNvbXBsZXRlZD0gMDtcbiAgIFxuXHRsZXQgY3VycmVudCA9ICdpbml0aWFsJztcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+SW50ZXJuZXQgb2YgdGhpbmdzKCBBbGV4YSwgSG9tZSBkZXZpY2VzKTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxuPHNlY3Rpb24gY2xhc3M9J3Jldmlldyc+XG4gICAgPGgyPllvdSBoYXZlIGNvbXBsZXRlZCB7Y29tcGxldGVkfSAvIDggY2hhbGxlbmdlcyE8L2gyPlxuICAgIFxuICAgIHsjZWFjaCAkcXVpelN0ZXBzIGFzIHtuYW1lLCBjb21wbGV0ZSwgZGlzcGxheVByb2dyZXNzfX1cbiAgICB7I2lmIGRpc3BsYXlQcm9ncmVzc31cbiAgICA8cCBjbGFzczpjb21wbGV0ZT57bmFtZX08L3A+XG4gICAgey9pZn1cbiAgICB7L2VhY2h9XG5cbiAgICA8YSBwcmVmZXRjaCBocmVmPSdob21lJz48YnV0dG9uPkNsYWltIG15IFByaXplPC9idXR0b24+PC9hPlxuXG4gICAgPGEgcHJlZmV0Y2ggaHJlZj0ncXVpem1haW4nPjxidXR0b24+QmFjayB0byBxdWl6PC9idXR0b24+PC9hPlxuXG48L3NlY3Rpb24+XG5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAgLnJldmlld3tcbiAgICAgICAgd2lkdGg6NTB2dztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NDI0ZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDY1cHggMTAwcHggNjVweCA2NXB4O1xuICAgIH1cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgLmNvbXBsZXRle1xuICAgIGJhY2tncm91bmQtY29sb3IgOiMzODQyNEQ7XG4gICAgY29sb3I6ICNmZmZmZmY7XG5cbiAgIH1cbiAgIHAge1xuICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgY29sb3I6I2U5NDA0MDtcbiAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgIHBhZGRpbmc6IDE1cHggMjBweCAxNXB4IDIwcHg7XG4gICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICBtYXJnaW46IDVweDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3QkEwQnVCLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21FQUFKLEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBRGxCLEdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7MkJBQWYsR0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FEYixHQUFVOzs7O2dDQUFmLE1BQUk7Ozs7Ozs7OzsyQkFGa0IsR0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJDQUFULEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytEQUFULEdBQVM7OztnQ0FFMUIsR0FBVTs7OzsrQkFBZixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXRCSCxRQUFRLEdBQUcscUJBQXFCOzs7Q0FTbkMsT0FBTzs2QkFBYSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDOztFQUM3QyxVQUFVLENBQUMsT0FBTyxDQUFFLENBQUM7T0FBUyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUk7b0JBQUUsU0FBUzs7Ozs7S0FDM0QsU0FBUyxHQUFFLENBQUM7S0FFZixPQUFPLEdBQUcsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
