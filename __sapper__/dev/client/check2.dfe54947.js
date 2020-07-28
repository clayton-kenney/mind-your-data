import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, O as onDestroy, v as validate_slots, L as afterUpdate, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev } from './client.c8c3cccf.js';
import './index.44998259.js';
import './index.43bc5f7f.js';
import { T as TransHelp } from './TransHelp.ec1dc955.js';
import { q as quizSteps, c as count, t as timerActive } from './store.79b003de.js';
import { C as Complete, B as Back } from './Back.6110c908.js';
import { D as Detect } from './Detect.4793a627.js';

/* src/routes/quiz/check2.svelte generated by Svelte v3.23.2 */

const file = "src/routes/quiz/check2.svelte";

// (31:2) <Complete>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Start the next Challenge");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Start the next Challenge");
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
		source: "(31:2) <Complete>",
		ctx
	});

	return block;
}

// (21:0) <Trans>
function create_default_slot(ctx) {
	let h3;
	let t0;
	let t1;
	let h1;
	let t2;
	let t3;
	let p0;
	let strong0;
	let t4;
	let t5;
	let t6;
	let p1;
	let t7;
	let t8;
	let p2;
	let strong1;
	let t9;
	let t10;
	let p3;
	let t11;
	let t12;
	let p4;
	let t13;
	let t14;
	let div;
	let complete;
	let t15;
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
			h3 = element("h3");
			t0 = text("Checkpoint 2:");
			t1 = space();
			h1 = element("h1");
			t2 = text("Surveillance Capitalism How did this happen?");
			t3 = space();
			p0 = element("p");
			strong0 = element("strong");
			t4 = text("Great!");
			t5 = text("You are now on your way to claiming your privacy.");
			t6 = space();
			p1 = element("p");
			t7 = text("By now we hope you see how our private experiences are being harvested to be translated into behavioral data. This data is then processed and packaged as prediction products and sold to business customers with a commercial interest in knowing what we will do now, soon, and later. This is surveillance capitalism.");
			t8 = space();
			p2 = element("p");
			strong1 = element("strong");
			t9 = text("How did this happen?");
			t10 = space();
			p3 = element("p");
			t11 = text("It wasn’t that long ago that the internet entered our daily lives. We went online expecting empowerment, the democratization of knowledge, and help with real problems, but surveillance capitalism really was just too lucrative to resist. Google was the first to learn how to capture surplus behavioral data and use it to compute prediction products that they could sell to advertisers.");
			t12 = space();
			p4 = element("p");
			t13 = text("This economic logic has now spread beyond the tech companies to new surveillance–based ecosystems in virtually every sector, from insurance to automobiles to health, education, finance, to every product described as “smart” and every service described as “personalized.” By now it’s very difficult to participate in society without interfacing with these same channels that are supply chains for surveillance capitalism’s data flows.");
			t14 = space();
			div = element("div");
			create_component(complete.$$.fragment);
			t15 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h3 = claim_element(nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, "Checkpoint 2:");
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Surveillance Capitalism How did this happen?");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			strong0 = claim_element(p0_nodes, "STRONG", { class: true });
			var strong0_nodes = children(strong0);
			t4 = claim_text(strong0_nodes, "Great!");
			strong0_nodes.forEach(detach_dev);
			t5 = claim_text(p0_nodes, "You are now on your way to claiming your privacy.");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "By now we hope you see how our private experiences are being harvested to be translated into behavioral data. This data is then processed and packaged as prediction products and sold to business customers with a commercial interest in knowing what we will do now, soon, and later. This is surveillance capitalism.");
			p1_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			strong1 = claim_element(p2_nodes, "STRONG", { class: true });
			var strong1_nodes = children(strong1);
			t9 = claim_text(strong1_nodes, "How did this happen?");
			strong1_nodes.forEach(detach_dev);
			p2_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t11 = claim_text(p3_nodes, "It wasn’t that long ago that the internet entered our daily lives. We went online expecting empowerment, the democratization of knowledge, and help with real problems, but surveillance capitalism really was just too lucrative to resist. Google was the first to learn how to capture surplus behavioral data and use it to compute prediction products that they could sell to advertisers.");
			p3_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			t13 = claim_text(p4_nodes, "This economic logic has now spread beyond the tech companies to new surveillance–based ecosystems in virtually every sector, from insurance to automobiles to health, education, finance, to every product described as “smart” and every service described as “personalized.” By now it’s very difficult to participate in society without interfacing with these same channels that are supply chains for surveillance capitalism’s data flows.");
			p4_nodes.forEach(detach_dev);
			t14 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h3, file, 21, 4, 737);
			add_location(h1, file, 22, 8, 768);
			attr_dev(strong0, "class", "svelte-ebsw60");
			add_location(strong0, file, 23, 5, 827);
			add_location(p0, file, 23, 2, 824);
			add_location(p1, file, 24, 2, 906);
			attr_dev(strong1, "class", "svelte-ebsw60");
			add_location(strong1, file, 25, 5, 1232);
			add_location(p2, file, 25, 2, 1229);
			add_location(p3, file, 26, 2, 1276);
			add_location(p4, file, 28, 2, 1673);
			attr_dev(div, "class", "button-holder svelte-ebsw60");
			add_location(div, file, 29, 4, 2118);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h3, anchor);
			append_dev(h3, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, h1, anchor);
			append_dev(h1, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, strong0);
			append_dev(strong0, t4);
			append_dev(p0, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t7);
			insert_dev(target, t8, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, strong1);
			append_dev(strong1, t9);
			insert_dev(target, t10, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t11);
			insert_dev(target, t12, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t13);
			insert_dev(target, t14, anchor);
			insert_dev(target, div, anchor);
			mount_component(complete, div, null);
			insert_dev(target, t15, anchor);
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
			if (detaching) detach_dev(h3);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(p3);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(p4);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(div);
			destroy_component(complete);
			if (detaching) detach_dev(t15);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2syLmRmZTU0OTQ3LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2syLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IERldGVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGVjdC5zdmVsdGUnXG5cdGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuXHRpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wbGV0ZS5zdmVsdGUnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblx0IC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHQgaW1wb3J0IHsgcXVpelN0ZXBzLCBjb3VudCwgdGltZXJBY3RpdmUgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblxuXHRvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuXHRcdHRpbWVyQWN0aXZlLnNldCghJHRpbWVyQWN0aXZlKX0pO1xuXHRvbkRlc3Ryb3koKCkgPT4gdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpKVxuXG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlN1cnZlaWxsYW5jZSBDYXBpdGFsaXNtIEhvdyBkaWQgdGhpcyBoYXBwZW4/PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG4gICAgPGgzPkNoZWNrcG9pbnQgMjo8L2gzPlxuICAgICAgICA8aDE+U3VydmVpbGxhbmNlIENhcGl0YWxpc20gSG93IGRpZCB0aGlzIGhhcHBlbj88L2gxPlxuXHRcdDxwPjxzdHJvbmc+R3JlYXQhPC9zdHJvbmc+WW91IGFyZSBub3cgb24geW91ciB3YXkgdG8gY2xhaW1pbmcgeW91ciBwcml2YWN5LjwvcD5cblx0XHQ8cD5CeSBub3cgd2UgaG9wZSB5b3Ugc2VlIGhvdyBvdXIgcHJpdmF0ZSBleHBlcmllbmNlcyBhcmUgYmVpbmcgaGFydmVzdGVkIHRvIGJlIHRyYW5zbGF0ZWQgaW50byBiZWhhdmlvcmFsIGRhdGEuIFRoaXMgZGF0YSBpcyB0aGVuIHByb2Nlc3NlZCBhbmQgcGFja2FnZWQgYXMgcHJlZGljdGlvbiBwcm9kdWN0cyBhbmQgc29sZCB0byBidXNpbmVzcyBjdXN0b21lcnMgd2l0aCBhIGNvbW1lcmNpYWwgaW50ZXJlc3QgaW4ga25vd2luZyB3aGF0IHdlIHdpbGwgZG8gbm93LCBzb29uLCBhbmQgbGF0ZXIuIFRoaXMgaXMgc3VydmVpbGxhbmNlIGNhcGl0YWxpc20uPC9wPlxuXHRcdDxwPjxzdHJvbmc+SG93IGRpZCB0aGlzIGhhcHBlbj88L3N0cm9uZz48L3A+XG5cdFx0PHA+SXQgd2FzbuKAmXQgdGhhdCBsb25nIGFnbyB0aGF0IHRoZSBpbnRlcm5ldCBlbnRlcmVkIG91ciBkYWlseSBsaXZlcy4gV2Ugd2VudCBvbmxpbmUgZXhwZWN0aW5nIGVtcG93ZXJtZW50LCB0aGUgZGVtb2NyYXRpemF0aW9uIG9mIGtub3dsZWRnZSwgYW5kIGhlbHAgd2l0aCByZWFsIHByb2JsZW1zLCBidXQgc3VydmVpbGxhbmNlIGNhcGl0YWxpc20gcmVhbGx5IHdhcyBqdXN0IHRvbyBsdWNyYXRpdmUgdG8gcmVzaXN0LiBHb29nbGUgd2FzIHRoZSBmaXJzdCB0byBsZWFybiBob3cgdG8gY2FwdHVyZSBzdXJwbHVzIGJlaGF2aW9yYWwgZGF0YSBhbmQgdXNlIGl0IHRvIGNvbXB1dGUgcHJlZGljdGlvbiBwcm9kdWN0cyB0aGF0IHRoZXkgY291bGQgc2VsbCB0byBhZHZlcnRpc2Vycy5cblx0XHQ8L3A+XG5cdFx0PHA+VGhpcyBlY29ub21pYyBsb2dpYyBoYXMgbm93IHNwcmVhZCBiZXlvbmQgdGhlIHRlY2ggY29tcGFuaWVzIHRvIG5ldyBzdXJ2ZWlsbGFuY2XigJNiYXNlZCBlY29zeXN0ZW1zIGluIHZpcnR1YWxseSBldmVyeSBzZWN0b3IsIGZyb20gaW5zdXJhbmNlIHRvIGF1dG9tb2JpbGVzIHRvIGhlYWx0aCwgZWR1Y2F0aW9uLCBmaW5hbmNlLCB0byBldmVyeSBwcm9kdWN0IGRlc2NyaWJlZCBhcyDigJxzbWFydOKAnSBhbmQgZXZlcnkgc2VydmljZSBkZXNjcmliZWQgYXMg4oCccGVyc29uYWxpemVkLuKAnSBCeSBub3cgaXTigJlzIHZlcnkgZGlmZmljdWx0IHRvIHBhcnRpY2lwYXRlIGluIHNvY2lldHkgd2l0aG91dCBpbnRlcmZhY2luZyB3aXRoIHRoZXNlIHNhbWUgY2hhbm5lbHMgdGhhdCBhcmUgc3VwcGx5IGNoYWlucyBmb3Igc3VydmVpbGxhbmNlIGNhcGl0YWxpc23igJlzIGRhdGEgZmxvd3MuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PENvbXBsZXRlPlN0YXJ0IHRoZSBuZXh0IENoYWxsZW5nZTwvQ29tcGxldGU+XG5cdDwvZGl2PlxuXHQ8QmFjay8+XG48L1RyYW5zPlxuXG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIHN0cm9uZyB7XG5cdCAgIGZvbnQtd2VpZ2h0OiA3MDA7XG5cdCAgIGZvbnQtc2l6ZTogMjJweDtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQUVPLFFBQVEsR0FBRyxxQkFBcUI7O0NBVXRDLE9BQU87NkJBQWEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQztFQUNoRCxXQUFXLENBQUMsR0FBRyxFQUFFLFlBQVk7OztDQUM5QixTQUFTLE9BQU8sV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
