import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, P as onDestroy, v as validate_slots, L as afterUpdate, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, R as set_store_value, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev } from './client.f462c795.js';
import './index.44998259.js';
import './index.231880cb.js';
import { T as TransHelp } from './TransHelp.89d9b70d.js';
import { q as quizSteps, c as count, t as timerActive } from './store.d0c833db.js';
import { C as Complete, B as Back } from './Back.96a87b8c.js';
import { D as Detect } from './Detect.870986ea.js';

/* src/routes/quiz/check1.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/check1.svelte";

// (40:4) <Complete>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Continue to next Challenge");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Continue to next Challenge");
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
		source: "(40:4) <Complete>",
		ctx
	});

	return block;
}

// (21:0) <Trans id="main-content">
function create_default_slot(ctx) {
	let section;
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
	let p5;
	let strong2;
	let t15;
	let t16;
	let p6;
	let t17;
	let t18;
	let p7;
	let t19;
	let t20;
	let p8;
	let t21;
	let t22;
	let div;
	let complete;
	let t23;
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
			section = element("section");
			h3 = element("h3");
			t0 = text("Checkpoint1");
			t1 = space();
			h1 = element("h1");
			t2 = text("Security vs Privacy: What’s at stake?");
			t3 = space();
			p0 = element("p");
			strong0 = element("strong");
			t4 = text("Congratulations!");
			t5 = text(" By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world.");
			t6 = space();
			p1 = element("p");
			t7 = text("Some people think of privacy and security as pretty much the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.");
			t8 = space();
			p2 = element("p");
			strong1 = element("strong");
			t9 = text("What’s the difference between privacy and security?");
			t10 = space();
			p3 = element("p");
			t11 = text("Security refers to how your personal information is protected.");
			t12 = space();
			p4 = element("p");
			t13 = text("Privacy, on the other hand, relates your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.");
			t14 = space();
			p5 = element("p");
			strong2 = element("strong");
			t15 = text("Why does privacy matter?");
			t16 = space();
			p6 = element("p");
			t17 = text("The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generates an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior.");
			t18 = space();
			p7 = element("p");
			t19 = text("You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.");
			t20 = space();
			p8 = element("p");
			t21 = text("Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.");
			t22 = space();
			div = element("div");
			create_component(complete.$$.fragment);
			t23 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h3 = claim_element(section_nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, "Checkpoint1");
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			h1 = claim_element(section_nodes, "H1", {});
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Security vs Privacy: What’s at stake?");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			strong0 = claim_element(p0_nodes, "STRONG", { class: true });
			var strong0_nodes = children(strong0);
			t4 = claim_text(strong0_nodes, "Congratulations!");
			strong0_nodes.forEach(detach_dev);
			t5 = claim_text(p0_nodes, " By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world.");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "Some people think of privacy and security as pretty much the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.");
			p1_nodes.forEach(detach_dev);
			t8 = claim_space(section_nodes);
			p2 = claim_element(section_nodes, "P", {});
			var p2_nodes = children(p2);
			strong1 = claim_element(p2_nodes, "STRONG", { class: true });
			var strong1_nodes = children(strong1);
			t9 = claim_text(strong1_nodes, "What’s the difference between privacy and security?");
			strong1_nodes.forEach(detach_dev);
			p2_nodes.forEach(detach_dev);
			t10 = claim_space(section_nodes);
			p3 = claim_element(section_nodes, "P", {});
			var p3_nodes = children(p3);
			t11 = claim_text(p3_nodes, "Security refers to how your personal information is protected.");
			p3_nodes.forEach(detach_dev);
			t12 = claim_space(section_nodes);
			p4 = claim_element(section_nodes, "P", {});
			var p4_nodes = children(p4);
			t13 = claim_text(p4_nodes, "Privacy, on the other hand, relates your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.");
			p4_nodes.forEach(detach_dev);
			t14 = claim_space(section_nodes);
			p5 = claim_element(section_nodes, "P", {});
			var p5_nodes = children(p5);
			strong2 = claim_element(p5_nodes, "STRONG", { class: true });
			var strong2_nodes = children(strong2);
			t15 = claim_text(strong2_nodes, "Why does privacy matter?");
			strong2_nodes.forEach(detach_dev);
			p5_nodes.forEach(detach_dev);
			t16 = claim_space(section_nodes);
			p6 = claim_element(section_nodes, "P", {});
			var p6_nodes = children(p6);
			t17 = claim_text(p6_nodes, "The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generates an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior.");
			p6_nodes.forEach(detach_dev);
			t18 = claim_space(section_nodes);
			p7 = claim_element(section_nodes, "P", {});
			var p7_nodes = children(p7);
			t19 = claim_text(p7_nodes, "You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.");
			p7_nodes.forEach(detach_dev);
			t20 = claim_space(section_nodes);
			p8 = claim_element(section_nodes, "P", {});
			var p8_nodes = children(p8);
			t21 = claim_text(p8_nodes, "Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.");
			p8_nodes.forEach(detach_dev);
			t22 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			t23 = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h3, file, 22, 1, 777);
			add_location(h1, file, 23, 8, 806);
			attr_dev(strong0, "class", "svelte-1y6fii3");
			add_location(strong0, file, 24, 5, 858);
			add_location(p0, file, 24, 2, 855);
			add_location(p1, file, 25, 2, 1149);
			attr_dev(strong1, "class", "svelte-1y6fii3");
			add_location(strong1, file, 26, 5, 1395);
			add_location(p2, file, 26, 2, 1392);
			add_location(p3, file, 27, 2, 1470);
			add_location(p4, file, 28, 2, 1543);
			attr_dev(strong2, "class", "svelte-1y6fii3");
			add_location(strong2, file, 30, 5, 1712);
			add_location(p5, file, 30, 2, 1709);
			add_location(p6, file, 31, 2, 1760);
			add_location(p7, file, 34, 2, 2017);
			add_location(p8, file, 36, 2, 2442);
			attr_dev(div, "class", "button-holder svelte-1y6fii3");
			add_location(div, file, 38, 0, 2799);
			add_location(section, file, 21, 1, 766);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h3);
			append_dev(h3, t0);
			append_dev(section, t1);
			append_dev(section, h1);
			append_dev(h1, t2);
			append_dev(section, t3);
			append_dev(section, p0);
			append_dev(p0, strong0);
			append_dev(strong0, t4);
			append_dev(p0, t5);
			append_dev(section, t6);
			append_dev(section, p1);
			append_dev(p1, t7);
			append_dev(section, t8);
			append_dev(section, p2);
			append_dev(p2, strong1);
			append_dev(strong1, t9);
			append_dev(section, t10);
			append_dev(section, p3);
			append_dev(p3, t11);
			append_dev(section, t12);
			append_dev(section, p4);
			append_dev(p4, t13);
			append_dev(section, t14);
			append_dev(section, p5);
			append_dev(p5, strong2);
			append_dev(strong2, t15);
			append_dev(section, t16);
			append_dev(section, p6);
			append_dev(p6, t17);
			append_dev(section, t18);
			append_dev(section, p7);
			append_dev(p7, t19);
			append_dev(section, t20);
			append_dev(section, p8);
			append_dev(p8, t21);
			append_dev(section, t22);
			append_dev(section, div);
			mount_component(complete, div, null);
			insert_dev(target, t23, anchor);
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
			if (detaching) detach_dev(section);
			destroy_component(complete);
			if (detaching) detach_dev(t23);
			destroy_component(back, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(21:0) <Trans id=\\\"main-content\\\">",
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
				id: "main-content",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-16wtpf7\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Security vs Privacy: What’s at stake?";
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Check1> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check1", $$slots, []);

	$$self.$capture_state = () => ({
		dispatch,
		onMount,
		afterUpdate,
		createEventDispatcher,
		onDestroy,
		Detect,
		Trans: TransHelp,
		quizSteps,
		count,
		timerActive,
		Complete,
		Back,
		$quizSteps,
		$count,
		$timerActive
	});

	return [];
}

class Check1 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Check1",
			options,
			id: create_fragment.name
		});
	}
}

export default Check1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2sxLjUxMzQxNmY5LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2sxLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgRGV0ZWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0ZWN0LnN2ZWx0ZSdcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcblx0IC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHQgaW1wb3J0IHsgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdCBpbXBvcnQgeyBjb3VudCwgdGltZXJBY3RpdmUgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0IGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblx0IGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cbiAgICBvbk1vdW50KGFzeW5jKCkgPT4ge1xuXHRcdCRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuXHRcdHRpbWVyQWN0aXZlLnNldCghJHRpbWVyQWN0aXZlKVxuXHRcdH0pO1xuXHRvbkRlc3Ryb3koKCkgPT4gdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpKVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TZWN1cml0eSB2cyBQcml2YWN5OiBXaGF04oCZcyBhdCBzdGFrZT88L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucyBpZD1cIm1haW4tY29udGVudFwiPlx0XG5cdDxzZWN0aW9uPlxuXHQ8aDM+Q2hlY2twb2ludDE8L2gzPlxuICAgICAgICA8aDE+U2VjdXJpdHkgdnMgUHJpdmFjeTogV2hhdOKAmXMgYXQgc3Rha2U/PC9oMT5cblx0XHQ8cD48c3Ryb25nPkNvbmdyYXR1bGF0aW9ucyE8L3N0cm9uZz4gQnkgY29tcGxldGluZyB0aGVzZSB0YXNrcywgeW91IGhhdmUganVzdCB0YWtlbiBhIGZldyBzdGVwcyB0b3dhcmQgc2VjdXJpbmcgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIHBvdGVudGlhbCBjeWJlcmNyaW1lLiBCdXQgdGhlIHRydXRoIGlzLCB5b3VyIGRhdGEg4oCUIGRpZmZlcmVudCBkZXRhaWxzIGFib3V0IHlvdSDigJQgbGl2ZXMgaW4gYSBsb3Qgb2YgcGxhY2VzIGluIG91ciBpbmNyZWFzaW5nbHkgY29ubmVjdGVkIHdvcmxkLiA8L3A+XG5cdFx0PHA+U29tZSBwZW9wbGUgdGhpbmsgb2YgcHJpdmFjeSBhbmQgc2VjdXJpdHkgYXMgcHJldHR5IG11Y2ggdGhlIHNhbWUgdGhpbmcuICBXaGlsZSB0aGUgdHdvIHNvbWV0aW1lcyBvdmVybGFwLCB0aGV5IGFyZW7igJl0IHRoZSBzYW1lLCBhbmQga25vd2luZyBob3cgdGhleSBkaWZmZXIgd2lsbCBoZWxwIGdpdmUgeW91IGNvbnRyb2wgb3ZlciB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGFuZCBob3cgaXTigJlzIHVzZWQuPC9wPlxuXHRcdDxwPjxzdHJvbmc+V2hhdOKAmXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBwcml2YWN5IGFuZCBzZWN1cml0eT88L3N0cm9uZz48L3A+XG5cdFx0PHA+U2VjdXJpdHkgcmVmZXJzIHRvIGhvdyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIHByb3RlY3RlZC4gPC9wPlxuXHRcdDxwPlByaXZhY3ksIG9uIHRoZSBvdGhlciBoYW5kLCByZWxhdGVzIHlvdXIgcmlnaHRzIHRvIGNvbnRyb2wgdGhlIGRhdGEgdGhhdOKAmXMgYmVpbmcgY29sbGVjdGVkIGFib3V0IHlvdSwgaG93IGl04oCZcyBjb2xsZWN0ZWQsIHdoeSwgYW5kIHdobyBpdOKAmXMgc2hhcmVkIHdpdGguPC9wPlxuXHRcdCBcblx0XHQ8cD48c3Ryb25nPldoeSBkb2VzIHByaXZhY3kgbWF0dGVyPzwvc3Ryb25nPjwvcD5cblx0XHQ8cD5UaGUgY29udmVuaWVuY2Ugb2YgbGl2aW5nIGluIGEgY29uc3RhbnRseSBjb25uZWN0ZWQgd29ybGQgY29tZXMgYXQgYSBjb3N0LiBPdXIgZGFpbHkgaW50ZXJhY3Rpb25zIHdpdGggdGVjaG5vbG9neSBnZW5lcmF0ZXMgYW4gdW5pbWFnaW5hYmxlIGFtb3VudCBvZiBkYXRhIHRoYXQgaXMgYmVpbmcgaGFydmVzdGVkIGFuZCBzb2xkIHRvIHRob3NlIHdobyB3YW50IHRvIHByZWRpY3QgYW5kIHNoYXBlIG91ciBiZWhhdmlvci4gPC9wPlxuXHRcdFxuXHRcdFxuXHRcdDxwPllvdSBtaWdodCB0aGluayBpdOKAmXMgbm8gYmlnIGRlYWwgdG8gZ2l2ZSB1cCB5b3VyIGRhdGEgaW4gZXhjaGFuZ2UgZm9yIHBlcnNvbmFsaXplZCBhZHMgYW5kIGNvbnRlbnQsIGJ1dCBjb25zdW1wdGlvbiAtLSBicm93c2luZyB0aHJvdWdoIGEgc3RvcmUgYW5kIGJ1eWluZyB0aGluZ3MgLS0gYW5kIHF1aWV0IHRpbWUgYWxvbmUgYXJlIGJvdGggaW1wb3J0YW50IHBhcnRzIG9mIGhvdyB3ZSBkZWZpbmUgb3Vyc2VsdmVzLiBJZiB3ZSBibGluZGx5IGFncmVlIHRvIGxpdmUgaW4gYSBzdGF0ZSBvZiBjb25zdGFudCBzdXJ2ZWlsbGFuY2UsIHdlIGxvc2UgdGhlIGFiaWxpdHkgdG8gY2hvb3NlIGZvciBvdXJzZWx2ZXMgYW5kIGFsbG93IG90aGVycyB0byBpbmZsdWVuY2Ugb3VyIGJlaGF2aW9ycyBhbmQgc2VsZi1wZXJjZXB0aW9uLjwvcD5cblx0XHRcblx0XHQ8cD5Ob3cgaW1hZ2luZSBpZiBvdXIgc29jaWV0eSBhY2NlcHRzIHN1cnZlaWxsYW5jZSBhcyB0aGUgbmV3IG5vcm1hbCBhbmQgY2l0aXplbnMga25vdyB0aGV5IGFyZSBiZWluZyB3YXRjaGVkIGNvbnN0YW50bHkuIFdlIG1heSBoYXZlIGhpZ2hseSBwZXJzb25hbGl6ZWQgYWNjZXNzIHRvIGdvb2RzIGFuZCBzZXJ2aWNlcywgYnV0IHdlIHdpbGwgYmUgbGVzcyBsaWtlbHkgdG8gc3BlYWsgZnJlZWx5IGFuZCBhY3QgaW5kaXZpZHVhbGx5LiBXaXRob3V0IHByaXZhY3kgYXMgYSBmdW5kYW1lbnRhbCByaWdodCwgd2UgbG9zZSBwb3dlciBhbmQgYmVjb21lIGFuIG9iZWRpZW50IGFuZCBzdWJtaXNzaXZlIHNvY2lldHkuPC9wPlxuXHRcdFxuPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cbiAgICA8Q29tcGxldGU+Q29udGludWUgdG8gbmV4dCBDaGFsbGVuZ2U8L0NvbXBsZXRlPlxuPC9kaXY+XG48L3NlY3Rpb24+XG48QmFjay8+XG48L1RyYW5zPlxuXG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuICAgc3Ryb25nIHtcblx0ICAgZm9udC13ZWlnaHQ6IDcwMDtcblx0ICAgZm9udC1zaXplOiAyMnB4O1xuICAgfVxuICAgI21haW4tY29udGVudCB7XG5cdCAgIHdpZHRoOiA1MCU7XG5cdCAgIG1hcmdpbjogYXV0bztcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FDTyxRQUFRLEdBQUcscUJBQXFCOztDQVVuQyxPQUFPOzZCQUNULFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7RUFDN0IsV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZOzs7Q0FFOUIsU0FBUyxPQUFPLFdBQVcsQ0FBQyxHQUFHLEVBQUUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
