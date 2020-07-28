import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, x as onMount, v as validate_slots, T as validate_each_argument, a as space, y as create_component, q as query_selector_all, b as detach_dev, c as claim_space, z as claim_component, l as insert_dev, A as mount_component, B as transition_in, C as transition_out, D as destroy_component, L as set_store_value, O as empty, e as element, t as text, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, m as append_dev, W as destroy_each, P as toggle_class, H as set_data_dev } from './client.16abd395.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.e13dab50.js';
import { c as count, s as step, q as quizSteps } from './store.8af6c674.js';
import { C as Complete, B as Back } from './Back.6aba5b74.js';
import { B as Btn } from './Btn.4f45362c.js';

/* src/routes/review.svelte generated by Svelte v3.23.2 */
const file = "src/routes/review.svelte";

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
			attr_dev(p, "class", "svelte-1qnxjlt");
			toggle_class(p, "complete", /*complete*/ ctx[5]);
			add_location(p, file, 22, 4, 763);
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
	let t0;
	let a;
	let button;
	let t1;
	let each_value = /*$quizSteps*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			section = element("section");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t0 = space();
			a = element("a");
			button = element("button");
			t1 = text("Back to quiz");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section_nodes);
			}

			section_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			a = claim_element(nodes, "A", { prefetch: true, href: true });
			var a_nodes = children(a);
			button = claim_element(a_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t1 = claim_text(button_nodes, "Back to quiz");
			button_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(section, "class", "review svelte-1qnxjlt");
			add_location(section, file, 19, 0, 671);
			attr_dev(button, "class", "svelte-1qnxjlt");
			add_location(button, file, 27, 28, 854);
			attr_dev(a, "prefetch", "");
			attr_dev(a, "href", "quizmain");
			add_location(a, file, 27, 0, 826);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section, null);
			}

			insert_dev(target, t0, anchor);
			insert_dev(target, a, anchor);
			append_dev(a, button);
			append_dev(button, t1);
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
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(a);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3LjVhYjZmODYwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Jldmlldy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblxuXHQvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcbiAgICBvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxfSk7XG5cblx0bGV0IGN1cnJlbnQgPSAnaW5pdGlhbCc7XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkludGVybmV0IG9mIHRoaW5ncyggQWxleGEsIEhvbWUgZGV2aWNlcyk8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbjxzZWN0aW9uIGNsYXNzPSdyZXZpZXcnPlxuICAgIHsjZWFjaCAkcXVpelN0ZXBzIGFzIHtuYW1lLCBjb21wbGV0ZX0sIGl9XG4gICAgeyNpZiBpIDwgMTJ9XG4gICAgPHAgY2xhc3M6Y29tcGxldGU+e25hbWV9PC9wPlxuICAgIHsvaWZ9XG4gICAgey9lYWNofVxuPC9zZWN0aW9uPlxuXG48YSBwcmVmZXRjaCBocmVmPSdxdWl6bWFpbic+PGJ1dHRvbj5CYWNrIHRvIHF1aXo8L2J1dHRvbj48L2E+XG48L1RyYW5zPlxuPHN0eWxlPlxuICAgIC5yZXZpZXd7XG4gICAgICAgIHdpZHRoOjUwdnc7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODQyNGQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgLmJ1dHRvbi1ob2xkZXIge1xuXHR3aWR0aDogMjd2dztcblx0ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICB9XG4gICAuY29tcGxldGV7XG4gICAgYmFja2dyb3VuZC1jb2xvciA6IzM4NDI0RDtcbiAgICBjb2xvcjogI2ZmZmZmZjtcblxuICAgfVxuICAgcCB7XG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICBjb2xvcjojZTk0MDQwO1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbiAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dCQXNCdUIsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUVBQUosR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQkFEbEIsR0FBQyxNQUFHLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7YUFBTixHQUFDLE1BQUcsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBREosR0FBVTs7OztnQ0FBZixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBQUMsR0FBVTs7OzsrQkFBZixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7O29DQUFKLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbEJILFFBQVEsR0FBRyxxQkFBcUI7OztDQVNuQyxPQUFPOzZCQUFhLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7OztLQUVoRCxPQUFPLEdBQUcsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
