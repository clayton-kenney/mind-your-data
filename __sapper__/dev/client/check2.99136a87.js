import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, x as onMount, J as onDestroy, v as validate_slots, w as afterUpdate, a as space, y as create_component, q as query_selector_all, b as detach_dev, c as claim_space, z as claim_component, l as insert_dev, A as mount_component, B as transition_in, C as transition_out, D as destroy_component, L as set_store_value, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.d6663073.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.0081bb93.js';
import { q as quizSteps, c as count, t as timerActive } from './store.6e6ace04.js';
import { C as Complete, B as Back } from './Back.bdaa7d8f.js';
import { D as Detect } from './Detect.2776754e.js';

/* src/routes/quiz/check2.svelte generated by Svelte v3.23.2 */

const file = "src/routes/quiz/check2.svelte";

// (28:2) <Complete>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Continue Challenge");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Continue Challenge");
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
		source: "(28:2) <Complete>",
		ctx
	});

	return block;
}

// (21:0) <Trans>
function create_default_slot(ctx) {
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let complete;
	let t4;
	let back;
	let current;

	complete = new Complete({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Surveillance Capitalism How did this happen?");
			t1 = space();
			p = element("p");
			t2 = text("(I’m thinking spruced up version of the predictions market or surveillance capitalism flow)\n\n            It started with the internet, then google realized that they had a data surplus, and our behavior has value. Now they sell it to the highest bidder.");
			t3 = space();
			div = element("div");
			create_component(complete.$$.fragment);
			t4 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Surveillance Capitalism How did this happen?");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "(I’m thinking spruced up version of the predictions market or surveillance capitalism flow)\n\n            It started with the internet, then google realized that they had a data surplus, and our behavior has value. Now they sell it to the highest bidder.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 21, 4, 737);
			add_location(p, file, 22, 8, 799);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 26, 4, 1077);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, div, anchor);
			mount_component(complete, div, null);
			insert_dev(target, t4, anchor);
			mount_component(back, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const complete_changes = {};

			if (dirty & /*$$scope*/ 16) {
				complete_changes.$$scope = { dirty, ctx };
			}

			complete.$set(complete_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(complete.$$.fragment, local);
			transition_in(back.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(complete.$$.fragment, local);
			transition_out(back.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div);
			destroy_component(complete);
			if (detaching) detach_dev(t4);
			destroy_component(back, detaching);
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-qv8f8s\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Surveillance Capitalism How did this happen?";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope*/ 16) {
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
	let $timerActive;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(0, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(1, $count = $$value));
	validate_store(timerActive, "timerActive");
	component_subscribe($$self, timerActive, $$value => $$invalidate(2, $timerActive = $$value));
	const dispatch = createEventDispatcher();

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
		timerActive.set(!$timerActive);
	});

	onDestroy(() => timerActive.set(!$timerActive));
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Check2> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check2", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		onMount,
		afterUpdate,
		onDestroy,
		Detect,
		Trans: TransHelp,
		Complete,
		Back,
		quizSteps,
		count,
		timerActive,
		$quizSteps,
		$count,
		$timerActive
	});

	return [];
}

class Check2 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Check2",
			options,
			id: create_fragment.name
		});
	}
}

export default Check2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2syLjk5MTM2YTg3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2syLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IERldGVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGVjdC5zdmVsdGUnXG5cdGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuXHRpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wbGV0ZS5zdmVsdGUnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblx0IC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHQgaW1wb3J0IHsgcXVpelN0ZXBzLCBjb3VudCwgdGltZXJBY3RpdmUgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblxuXHRvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuXHRcdHRpbWVyQWN0aXZlLnNldCghJHRpbWVyQWN0aXZlKX0pO1xuXHRvbkRlc3Ryb3koKCkgPT4gdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpKVxuXG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlN1cnZlaWxsYW5jZSBDYXBpdGFsaXNtIEhvdyBkaWQgdGhpcyBoYXBwZW4/PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG4gICAgPGgxPlN1cnZlaWxsYW5jZSBDYXBpdGFsaXNtIEhvdyBkaWQgdGhpcyBoYXBwZW4/PC9oMT5cbiAgICAgICAgPHA+KEnigJltIHRoaW5raW5nIHNwcnVjZWQgdXAgdmVyc2lvbiBvZiB0aGUgcHJlZGljdGlvbnMgbWFya2V0IG9yIHN1cnZlaWxsYW5jZSBjYXBpdGFsaXNtIGZsb3cpXG5cbiAgICAgICAgICAgIEl0IHN0YXJ0ZWQgd2l0aCB0aGUgaW50ZXJuZXQsIHRoZW4gZ29vZ2xlIHJlYWxpemVkIHRoYXQgdGhleSBoYWQgYSBkYXRhIHN1cnBsdXMsIGFuZCBvdXIgYmVoYXZpb3IgaGFzIHZhbHVlLiBOb3cgdGhleSBzZWxsIGl0IHRvIHRoZSBoaWdoZXN0IGJpZGRlci5cbiAgICAgICAgICAgIDwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxDb21wbGV0ZT5Db250aW51ZSBDaGFsbGVuZ2U8L0NvbXBsZXRlPlxuICAgICAgICBcblx0PC9kaXY+XG5cdDxCYWNrLz5cbjwvVHJhbnM+XG5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FFTyxRQUFRLEdBQUcscUJBQXFCOztDQVV0QyxPQUFPOzZCQUFhLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7RUFDaEQsV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZOzs7Q0FDOUIsU0FBUyxPQUFPLFdBQVcsQ0FBQyxHQUFHLEVBQUUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
