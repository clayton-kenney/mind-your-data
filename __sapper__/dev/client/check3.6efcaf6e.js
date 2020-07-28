import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, O as onDestroy, v as validate_slots, L as afterUpdate, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev } from './client.cda4253e.js';
import './index.44998259.js';
import './index.9ed9f64a.js';
import { T as TransHelp } from './TransHelp.7d88db48.js';
import { c as count, q as quizSteps, t as timerActive } from './store.e3a3e2ad.js';
import { C as Complete, B as Back } from './Back.879c89d6.js';
import { D as Detect } from './Detect.6f7b2433.js';

/* src/routes/quiz/check3.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/check3.svelte";

// (21:0) <Trans>
function create_default_slot(ctx) {
	let h1;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let a;
	let button0;
	let t4;
	let t5;
	let button1;
	let t6;
	let t7;
	let button2;
	let t8;
	let t9;
	let back;
	let current;
	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("We must claim our right to privacy.");
			t1 = space();
			p = element("p");
			t2 = text("Agitate for change. Like most rights, privacy draws notice only after it’s gone. At that point, it’s harder to regain. Just as we see the environmental impact of the early Industrial Age, future generations will judge today’s society on how well it rose to the challenges of surveillance and massive information collection. Push for reform.");
			t3 = space();
			div = element("div");
			a = element("a");
			button0 = element("button");
			t4 = text("See your results");
			t5 = space();
			button1 = element("button");
			t6 = text("Sign a Petition");
			t7 = space();
			button2 = element("button");
			t8 = text("Contact your Rep");
			t9 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "We must claim our right to privacy.");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p = claim_element(nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Agitate for change. Like most rights, privacy draws notice only after it’s gone. At that point, it’s harder to regain. Just as we see the environmental impact of the early Industrial Age, future generations will judge today’s society on how well it rose to the challenges of surveillance and massive information collection. Push for reform.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { rel: true, href: true });
			var a_nodes = children(a);
			button0 = claim_element(a_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t4 = claim_text(button0_nodes, "See your results");
			button0_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t5 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t6 = claim_text(button1_nodes, "Sign a Petition");
			button1_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			button2 = claim_element(div_nodes, "BUTTON", { class: true });
			var button2_nodes = children(button2);
			t8 = claim_text(button2_nodes, "Contact your Rep");
			button2_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 21, 4, 718);
			add_location(p, file, 22, 8, 771);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 24, 32, 1183);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", "review");
			add_location(a, file, 24, 2, 1153);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 25, 8, 1229);
			attr_dev(button2, "class", "svelte-9jf7df");
			add_location(button2, file, 26, 8, 1271);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 23, 4, 1123);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p, anchor);
			append_dev(p, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, a);
			append_dev(a, button0);
			append_dev(button0, t4);
			append_dev(div, t5);
			append_dev(div, button1);
			append_dev(button1, t6);
			append_dev(div, t7);
			append_dev(div, button2);
			append_dev(button2, t8);
			insert_dev(target, t9, anchor);
			mount_component(back, target, anchor);
			current = true;
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
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t9);
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1mhgd6m\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "How  to make change?";
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Check3> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check3", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		onMount,
		afterUpdate,
		onDestroy,
		Detect,
		Complete,
		Trans: TransHelp,
		count,
		quizSteps,
		timerActive,
		Back,
		$quizSteps,
		$count,
		$timerActive
	});

	return [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2szLjZlZmNhZjZlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2szLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IERldGVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGVjdC5zdmVsdGUnXG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblxuICAgIGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuIC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuIGltcG9ydCB7IGNvdW50LCBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG4gaW1wb3J0IEJhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYWNrLnN2ZWx0ZSdcblx0b25Nb3VudChhc3luYygpID0+IHtcblx0XHQkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcblx0XHR0aW1lckFjdGl2ZS5zZXQoISR0aW1lckFjdGl2ZSk7XG5cdH0pO1xuXHRvbkRlc3Ryb3koKCkgPT4gdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpKVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Ib3cgIHRvIG1ha2UgY2hhbmdlPzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxuICAgIDxoMT5XZSBtdXN0IGNsYWltIG91ciByaWdodCB0byBwcml2YWN5LjwvaDE+XG4gICAgICAgIDxwPkFnaXRhdGUgZm9yIGNoYW5nZS4gTGlrZSBtb3N0IHJpZ2h0cywgcHJpdmFjeSBkcmF3cyBub3RpY2Ugb25seSBhZnRlciBpdOKAmXMgZ29uZS4gQXQgdGhhdCBwb2ludCwgaXTigJlzIGhhcmRlciB0byByZWdhaW4uIEp1c3QgYXMgd2Ugc2VlIHRoZSBlbnZpcm9ubWVudGFsIGltcGFjdCBvZiB0aGUgZWFybHkgSW5kdXN0cmlhbCBBZ2UsIGZ1dHVyZSBnZW5lcmF0aW9ucyB3aWxsIGp1ZGdlIHRvZGF54oCZcyBzb2NpZXR5IG9uIGhvdyB3ZWxsIGl0IHJvc2UgdG8gdGhlIGNoYWxsZW5nZXMgb2Ygc3VydmVpbGxhbmNlIGFuZCBtYXNzaXZlIGluZm9ybWF0aW9uIGNvbGxlY3Rpb24uIFB1c2ggZm9yIHJlZm9ybS48L3A+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8YSByZWw9cHJlZmV0Y2ggaHJlZj1cInJldmlld1wiPjxidXR0b24+U2VlIHlvdXIgcmVzdWx0czwvYnV0dG9uPjwvYT5cbiAgICAgICAgPGJ1dHRvbiA+U2lnbiBhIFBldGl0aW9uPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gPkNvbnRhY3QgeW91ciBSZXA8L2J1dHRvbj5cblx0PC9kaXY+XG48QmFjay8+XG48L1RyYW5zPlxuXG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BRU8sUUFBUSxHQUFHLHFCQUFxQjs7Q0FTdEMsT0FBTzs2QkFDTixVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0VBQzdCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsWUFBWTs7O0NBRTlCLFNBQVMsT0FBTyxXQUFXLENBQUMsR0FBRyxFQUFFLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
