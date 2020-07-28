import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, x as onMount, v as validate_slots, R as validate_each_argument, a as space, y as create_component, q as query_selector_all, b as detach_dev, c as claim_space, z as claim_component, l as insert_dev, A as mount_component, B as transition_in, C as transition_out, D as destroy_component, L as set_store_value, O as empty, e as element, f as claim_element, g as children, j as attr_dev, k as add_location, T as destroy_each, t as text, h as claim_text, P as toggle_class, m as append_dev, H as set_data_dev } from './client.1c5de6b3.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.591623bb.js';
import { c as count, s as step, q as quizSteps } from './store.d3dea2d0.js';
import { C as Complete, B as Back } from './Back.f37afe57.js';
import { B as Btn } from './Btn.72802fb2.js';

/* src/routes/quiz/review.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/review.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[4] = list[i].name;
	child_ctx[5] = list[i].complete;
	child_ctx[7] = i;
	return child_ctx;
}

// (22:4) {#if i < 12}
function create_if_block(ctx) {
	let p;
	let t_value = /*name*/ ctx[4] + "";
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
			attr_dev(p, "class", "svelte-1o5adci");
			toggle_class(p, "complete", /*complete*/ ctx[5]);
			add_location(p, file, 22, 4, 778);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$quizSteps*/ 1 && t_value !== (t_value = /*name*/ ctx[4] + "")) set_data_dev(t, t_value);

			if (dirty & /*$quizSteps*/ 1) {
				toggle_class(p, "complete", /*complete*/ ctx[5]);
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
		source: "(22:4) {#if i < 12}",
		ctx
	});

	return block;
}

// (21:4) {#each $quizSteps as {name, complete}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*i*/ ctx[7] < 12 && create_if_block(ctx);

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
			if (/*i*/ ctx[7] < 12) if_block.p(ctx, dirty);
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
		source: "(21:4) {#each $quizSteps as {name, complete}",
		ctx
	});

	return block;
}

// (19:0) <Trans>
function create_default_slot(ctx) {
	let section;
	let t;
	let back;
	let current;
	let each_value = /*$quizSteps*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			section = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section_nodes);
			}

			section_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(section, "class", "review svelte-1o5adci");
			add_location(section, file, 19, 0, 686);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section, null);
			}

			insert_dev(target, t, anchor);
			mount_component(back, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$quizSteps*/ 1) {
				each_value = /*$quizSteps*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(section, null);
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
			transition_in(back.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(back.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t);
			destroy_component(back, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(19:0) <Trans>",
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

			if (dirty & /*$$scope, $quizSteps*/ 257) {
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(0, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(1, $count = $$value));
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

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
		current,
		$quizSteps,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("current" in $$props) current = $$props.current;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [$quizSteps];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LmZkMzQzOTA3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovcmV2aWV3LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50LCBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgVHJhbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcblx0aW1wb3J0IENvbXBsZXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29tcGxldGUuc3ZlbHRlJyAvL3NldCBzdWNjZXNzPXtmYWxzZX0gZm9yIGZhaWx1cmVcblx0aW1wb3J0IEJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL0J0bi5zdmVsdGUnIC8vc2V0IDxOZXh0IHE9ezJ9PiB0byBza2lwIG11bHRpcGxlIHN0ZXBzXG5cdGltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0aW1wb3J0IEJhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYWNrLnN2ZWx0ZSdcblxuXG5cdC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuICAgIG9uTW91bnQoYXN5bmMoKSA9PiB7JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDF9KTtcblxuXHRsZXQgY3VycmVudCA9ICdpbml0aWFsJztcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+SW50ZXJuZXQgb2YgdGhpbmdzKCBBbGV4YSwgSG9tZSBkZXZpY2VzKTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxuPHNlY3Rpb24gY2xhc3M9J3Jldmlldyc+XG4gICAgeyNlYWNoICRxdWl6U3RlcHMgYXMge25hbWUsIGNvbXBsZXRlfSwgaX1cbiAgICB7I2lmIGkgPCAxMn1cbiAgICA8cCBjbGFzczpjb21wbGV0ZT57bmFtZX08L3A+XG4gICAgey9pZn1cbiAgICB7L2VhY2h9XG48L3NlY3Rpb24+XG5cbjxCYWNrLz5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAgLnJldmlld3tcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICB9XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIC5jb21wbGV0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDojMzg0MjREO1xuICAgfVxuICAgcCB7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBc0J1QixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttRUFBSixHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NCQURsQixHQUFDLE1BQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7OzthQUFOLEdBQUMsTUFBRyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQURKLEdBQVU7Ozs7Z0NBQWYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUFDLEdBQVU7Ozs7K0JBQWYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQWxCSCxRQUFRLEdBQUcscUJBQXFCOzs7Q0FTbkMsT0FBTzs2QkFBYSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDOzs7S0FFaEQsT0FBTyxHQUFHLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
