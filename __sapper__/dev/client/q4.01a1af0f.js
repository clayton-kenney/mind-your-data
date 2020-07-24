import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, T as onMount, v as validate_slots, U as afterUpdate, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, P as set_store_value, G as group_outros, A as check_outros, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.5ac4186b.js';
import './index.42fd54b0.js';
import { T as TransHelp, C as Complete, B as Back } from './Back.a3d0e8bc.js';
import { c as count, s as step, q as quizSteps } from './store.7218c6fa.js';
import { N as Next } from './Next.a9fddec5.js';
import { D as Detect } from './Detect.170e6a24.js';

/* src/routes/quiz/q4.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q4.svelte";

// (29:0) {:else}
function create_else_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let detect;
	let t2;
	let div;
	let h3;
	let t3;
	let t4;
	let complete0;
	let t5;
	let complete1;
	let current;
	detect = new Detect({ $$inline: true });

	complete0 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete1 = new Complete({
			props: {
				success: false,
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Give 3rd party cookies the boot");
			t1 = space();
			create_component(detect.$$.fragment);
			t2 = space();
			div = element("div");
			h3 = element("h3");
			t3 = text("Did you disable tracking cookies?");
			t4 = space();
			create_component(complete0.$$.fragment);
			t5 = space();
			create_component(complete1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Give 3rd party cookies the boot");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			claim_component(detect.$$.fragment, section_nodes);
			t2 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h3 = claim_element(div_nodes, "H3", {});
			var h3_nodes = children(h3);
			t3 = claim_text(h3_nodes, "Did you disable tracking cookies?");
			h3_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			claim_component(complete0.$$.fragment, div_nodes);
			t5 = claim_space(div_nodes);
			claim_component(complete1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 30, 1, 1294);
			add_location(h3, file, 33, 2, 1378);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 32, 1, 1348);
			add_location(section, file, 29, 0, 1283);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			mount_component(detect, section, null);
			append_dev(section, t2);
			append_dev(section, div);
			append_dev(div, h3);
			append_dev(h3, t3);
			append_dev(div, t4);
			mount_component(complete0, div, null);
			append_dev(div, t5);
			mount_component(complete1, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(detect.$$.fragment, local);
			transition_in(complete0.$$.fragment, local);
			transition_in(complete1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(detect.$$.fragment, local);
			transition_out(complete0.$$.fragment, local);
			transition_out(complete1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(detect);
			destroy_component(complete0);
			destroy_component(complete1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(29:0) {:else}",
		ctx
	});

	return block;
}

// (20:0) {#if $step==0}
function create_if_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let div;
	let next;
	let current;

	next = new Next({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Privacy settings: Want a cookie?");
			t1 = space();
			p0 = element("p");
			t2 = text("Well, not that kind of cookie. Many websites allow third party cookies which are designed to hold data specific to a particular user and website.");
			t3 = space();
			p1 = element("p");
			t4 = text("You’re just supposed to trust the willingness and ability of any organization to put your privacy over their need to meet their goals, which usually entail profits. Yeah. Sure.");
			t5 = space();
			div = element("div");
			create_component(next.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Privacy settings: Want a cookie?");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Well, not that kind of cookie. Many websites allow third party cookies which are designed to hold data specific to a particular user and website.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "You’re just supposed to trust the willingness and ability of any organization to put your privacy over their need to meet their goals, which usually entail profits. Yeah. Sure.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(next.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 21, 1, 820);
			add_location(p0, file, 22, 1, 864);
			add_location(p1, file, 23, 1, 1019);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 24, 1, 1204);
			add_location(section, file, 20, 0, 809);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p0);
			append_dev(p0, t2);
			append_dev(section, t3);
			append_dev(section, p1);
			append_dev(p1, t4);
			append_dev(section, t5);
			append_dev(section, div);
			mount_component(next, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(next.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(next.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(next);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(20:0) {#if $step==0}",
		ctx
	});

	return block;
}

// (35:2) <Complete>
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Yup");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Yup");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_3.name,
		type: "slot",
		source: "(35:2) <Complete>",
		ctx
	});

	return block;
}

// (36:2) <Complete success={false}>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No, I don't mind them following me");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No, I don't mind them following me");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_2.name,
		type: "slot",
		source: "(36:2) <Complete success={false}>",
		ctx
	});

	return block;
}

// (26:2) <Next>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Continue");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Continue");
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot_1.name,
		type: "slot",
		source: "(26:2) <Next>",
		ctx
	});

	return block;
}

// (19:0) <Trans>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let t;
	let back;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$step*/ ctx[0] == 0) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			if_block.c();
			t = space();
			create_component(back.$$.fragment);
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			t = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, t, anchor);
			mount_component(back, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index !== previous_block_index) {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(t.parentNode, t);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(back.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			transition_out(back.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1g6utuz\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Question 4: Privacy Settings";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, $step*/ 17) {
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
	let $step;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(1, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(2, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(0, $step = $$value));
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q4> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q4", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		onMount,
		afterUpdate,
		Detect,
		Trans: TransHelp,
		Complete,
		Next,
		count,
		step,
		quizSteps,
		Back,
		$quizSteps,
		$count,
		$step
	});

	return [$step];
}

class Q4 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q4",
			options,
			id: create_fragment.name
		});
	}
}

export default Q4;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTQuMDFhMWFmMGYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IHsgb25Nb3VudCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgRGV0ZWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0ZWN0LnN2ZWx0ZSdcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBOZXh0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmV4dC5zdmVsdGUnIC8vc2V0IDxOZXh0IHE9ezJ9PiB0byBza2lwIG11bHRpcGxlIHN0ZXBzXG5cdGltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0aW1wb3J0IEJhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYWNrLnN2ZWx0ZSdcblxuXHQvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcbiAgICBvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxfSk7XG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+UXVlc3Rpb24gNDogUHJpdmFjeSBTZXR0aW5nczwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxueyNpZiAkc3RlcD09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+UHJpdmFjeSBzZXR0aW5nczogV2FudCBhIGNvb2tpZT88L2gyPiBcblx0PHA+V2VsbCwgbm90IHRoYXQga2luZCBvZiBjb29raWUuIE1hbnkgd2Vic2l0ZXMgYWxsb3cgdGhpcmQgcGFydHkgY29va2llcyB3aGljaCBhcmUgZGVzaWduZWQgdG8gaG9sZCBkYXRhIHNwZWNpZmljIHRvIGEgcGFydGljdWxhciB1c2VyIGFuZCB3ZWJzaXRlLiA8L3A+XG5cdDxwPllvdeKAmXJlIGp1c3Qgc3VwcG9zZWQgdG8gdHJ1c3QgdGhlIHdpbGxpbmduZXNzIGFuZCBhYmlsaXR5IG9mIGFueSBvcmdhbml6YXRpb24gdG8gcHV0IHlvdXIgcHJpdmFjeSBvdmVyIHRoZWlyIG5lZWQgdG8gbWVldCB0aGVpciBnb2Fscywgd2hpY2ggdXN1YWxseSBlbnRhaWwgcHJvZml0cy4gWWVhaC4gU3VyZS48L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PE5leHQ+Q29udGludWU8L05leHQ+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlfVxuPHNlY3Rpb24+XG5cdDxoMj5HaXZlIDNyZCBwYXJ0eSBjb29raWVzIHRoZSBib290PC9oMj5cblx0PERldGVjdCAvPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxoMz5EaWQgeW91IGRpc2FibGUgdHJhY2tpbmcgY29va2llcz88L2gzPlxuXHRcdDxDb21wbGV0ZT5ZdXA8L0NvbXBsZXRlPlxuXHRcdDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0+Tm8sIEkgZG9uJ3QgbWluZCB0aGVtIGZvbGxvd2luZyBtZTwvQ29tcGxldGU+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuey9pZn1cbjxCYWNrLz5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFtQ3FCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFoQnJCLEdBQUssT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FqQk4sUUFBUSxHQUFHLHFCQUFxQjs7O0NBVW5DLE9BQU87NkJBQWEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
