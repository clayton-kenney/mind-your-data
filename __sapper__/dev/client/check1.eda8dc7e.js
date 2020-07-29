import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, O as onDestroy, v as validate_slots, L as afterUpdate, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev } from './client.3222f83e.js';
import './index.44998259.js';
import './index.4e4abead.js';
import { T as TransHelp } from './TransHelp.97b5e5a9.js';
import { q as quizSteps, c as count, t as timerActive } from './store.7c51ae3a.js';
import { C as Complete, B as Back } from './Back.9181963f.js';
import { D as Detect } from './Detect.02a03a84.js';

/* src/routes/quiz/check1.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/check1.svelte";

// (41:4) <Complete>
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
		source: "(41:4) <Complete>",
		ctx
	});

	return block;
}

// (21:0) <Trans id="main-content">
function create_default_slot(ctx) {
	let section;
	let div1;
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
	let div0;
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
			div1 = element("div");
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
			div0 = element("div");
			create_component(complete.$$.fragment);
			t23 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h3 = claim_element(div1_nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, "Checkpoint1");
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Security vs Privacy: What’s at stake?");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			p0 = claim_element(div1_nodes, "P", {});
			var p0_nodes = children(p0);
			strong0 = claim_element(p0_nodes, "STRONG", { class: true });
			var strong0_nodes = children(strong0);
			t4 = claim_text(strong0_nodes, "Congratulations!");
			strong0_nodes.forEach(detach_dev);
			t5 = claim_text(p0_nodes, " By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world.");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "Some people think of privacy and security as pretty much the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.");
			p1_nodes.forEach(detach_dev);
			t8 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			strong1 = claim_element(p2_nodes, "STRONG", { class: true });
			var strong1_nodes = children(strong1);
			t9 = claim_text(strong1_nodes, "What’s the difference between privacy and security?");
			strong1_nodes.forEach(detach_dev);
			p2_nodes.forEach(detach_dev);
			t10 = claim_space(div1_nodes);
			p3 = claim_element(div1_nodes, "P", {});
			var p3_nodes = children(p3);
			t11 = claim_text(p3_nodes, "Security refers to how your personal information is protected.");
			p3_nodes.forEach(detach_dev);
			t12 = claim_space(div1_nodes);
			p4 = claim_element(div1_nodes, "P", {});
			var p4_nodes = children(p4);
			t13 = claim_text(p4_nodes, "Privacy, on the other hand, relates your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.");
			p4_nodes.forEach(detach_dev);
			t14 = claim_space(div1_nodes);
			p5 = claim_element(div1_nodes, "P", {});
			var p5_nodes = children(p5);
			strong2 = claim_element(p5_nodes, "STRONG", { class: true });
			var strong2_nodes = children(strong2);
			t15 = claim_text(strong2_nodes, "Why does privacy matter?");
			strong2_nodes.forEach(detach_dev);
			p5_nodes.forEach(detach_dev);
			t16 = claim_space(div1_nodes);
			p6 = claim_element(div1_nodes, "P", {});
			var p6_nodes = children(p6);
			t17 = claim_text(p6_nodes, "The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generates an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior.");
			p6_nodes.forEach(detach_dev);
			t18 = claim_space(div1_nodes);
			p7 = claim_element(div1_nodes, "P", {});
			var p7_nodes = children(p7);
			t19 = claim_text(p7_nodes, "You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.");
			p7_nodes.forEach(detach_dev);
			t20 = claim_space(div1_nodes);
			p8 = claim_element(div1_nodes, "P", {});
			var p8_nodes = children(p8);
			t21 = claim_text(p8_nodes, "Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.");
			p8_nodes.forEach(detach_dev);
			t22 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(complete.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t23 = claim_space(section_nodes);
			claim_component(back.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h3, file, 23, 1, 785);
			add_location(h1, file, 24, 8, 814);
			attr_dev(strong0, "class", "svelte-1u7b66w");
			add_location(strong0, file, 25, 5, 866);
			add_location(p0, file, 25, 2, 863);
			add_location(p1, file, 26, 2, 1157);
			attr_dev(strong1, "class", "svelte-1u7b66w");
			add_location(strong1, file, 27, 5, 1403);
			add_location(p2, file, 27, 2, 1400);
			add_location(p3, file, 28, 2, 1478);
			add_location(p4, file, 29, 2, 1551);
			attr_dev(strong2, "class", "svelte-1u7b66w");
			add_location(strong2, file, 31, 5, 1720);
			add_location(p5, file, 31, 2, 1717);
			add_location(p6, file, 32, 2, 1768);
			add_location(p7, file, 35, 2, 2025);
			add_location(p8, file, 37, 2, 2450);
			attr_dev(div0, "class", "button-holder svelte-1u7b66w");
			add_location(div0, file, 39, 0, 2807);
			attr_dev(div1, "class", "svelte-1u7b66w");
			add_location(div1, file, 22, 2, 778);
			attr_dev(section, "class", "svelte-1u7b66w");
			add_location(section, file, 21, 1, 766);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div1);
			append_dev(div1, h3);
			append_dev(h3, t0);
			append_dev(div1, t1);
			append_dev(div1, h1);
			append_dev(h1, t2);
			append_dev(div1, t3);
			append_dev(div1, p0);
			append_dev(p0, strong0);
			append_dev(strong0, t4);
			append_dev(p0, t5);
			append_dev(div1, t6);
			append_dev(div1, p1);
			append_dev(p1, t7);
			append_dev(div1, t8);
			append_dev(div1, p2);
			append_dev(p2, strong1);
			append_dev(strong1, t9);
			append_dev(div1, t10);
			append_dev(div1, p3);
			append_dev(p3, t11);
			append_dev(div1, t12);
			append_dev(div1, p4);
			append_dev(p4, t13);
			append_dev(div1, t14);
			append_dev(div1, p5);
			append_dev(p5, strong2);
			append_dev(strong2, t15);
			append_dev(div1, t16);
			append_dev(div1, p6);
			append_dev(p6, t17);
			append_dev(div1, t18);
			append_dev(div1, p7);
			append_dev(p7, t19);
			append_dev(div1, t20);
			append_dev(div1, p8);
			append_dev(p8, t21);
			append_dev(div1, t22);
			append_dev(div1, div0);
			mount_component(complete, div0, null);
			append_dev(section, t23);
			mount_component(back, section, null);
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
			destroy_component(back);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2sxLmVkYThkYzdlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2sxLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgRGV0ZWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0ZWN0LnN2ZWx0ZSdcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcblx0IC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHQgaW1wb3J0IHsgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdCBpbXBvcnQgeyBjb3VudCwgdGltZXJBY3RpdmUgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0IGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblx0IGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cbiAgICBvbk1vdW50KGFzeW5jKCkgPT4ge1xuXHRcdCRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuXHRcdHRpbWVyQWN0aXZlLnNldCghJHRpbWVyQWN0aXZlKVxuXHRcdH0pO1xuXHRvbkRlc3Ryb3koKCkgPT4gdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpKVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TZWN1cml0eSB2cyBQcml2YWN5OiBXaGF04oCZcyBhdCBzdGFrZT88L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucyBpZD1cIm1haW4tY29udGVudFwiPlx0XG5cdDxzZWN0aW9uPlxuXHRcdDxkaXY+XG5cdDxoMz5DaGVja3BvaW50MTwvaDM+XG4gICAgICAgIDxoMT5TZWN1cml0eSB2cyBQcml2YWN5OiBXaGF04oCZcyBhdCBzdGFrZT88L2gxPlxuXHRcdDxwPjxzdHJvbmc+Q29uZ3JhdHVsYXRpb25zITwvc3Ryb25nPiBCeSBjb21wbGV0aW5nIHRoZXNlIHRhc2tzLCB5b3UgaGF2ZSBqdXN0IHRha2VuIGEgZmV3IHN0ZXBzIHRvd2FyZCBzZWN1cmluZyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gcG90ZW50aWFsIGN5YmVyY3JpbWUuIEJ1dCB0aGUgdHJ1dGggaXMsIHlvdXIgZGF0YSDigJQgZGlmZmVyZW50IGRldGFpbHMgYWJvdXQgeW91IOKAlCBsaXZlcyBpbiBhIGxvdCBvZiBwbGFjZXMgaW4gb3VyIGluY3JlYXNpbmdseSBjb25uZWN0ZWQgd29ybGQuIDwvcD5cblx0XHQ8cD5Tb21lIHBlb3BsZSB0aGluayBvZiBwcml2YWN5IGFuZCBzZWN1cml0eSBhcyBwcmV0dHkgbXVjaCB0aGUgc2FtZSB0aGluZy4gIFdoaWxlIHRoZSB0d28gc29tZXRpbWVzIG92ZXJsYXAsIHRoZXkgYXJlbuKAmXQgdGhlIHNhbWUsIGFuZCBrbm93aW5nIGhvdyB0aGV5IGRpZmZlciB3aWxsIGhlbHAgZ2l2ZSB5b3UgY29udHJvbCBvdmVyIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gYW5kIGhvdyBpdOKAmXMgdXNlZC48L3A+XG5cdFx0PHA+PHN0cm9uZz5XaGF04oCZcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHByaXZhY3kgYW5kIHNlY3VyaXR5Pzwvc3Ryb25nPjwvcD5cblx0XHQ8cD5TZWN1cml0eSByZWZlcnMgdG8gaG93IHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgcHJvdGVjdGVkLiA8L3A+XG5cdFx0PHA+UHJpdmFjeSwgb24gdGhlIG90aGVyIGhhbmQsIHJlbGF0ZXMgeW91ciByaWdodHMgdG8gY29udHJvbCB0aGUgZGF0YSB0aGF04oCZcyBiZWluZyBjb2xsZWN0ZWQgYWJvdXQgeW91LCBob3cgaXTigJlzIGNvbGxlY3RlZCwgd2h5LCBhbmQgd2hvIGl04oCZcyBzaGFyZWQgd2l0aC48L3A+XG5cdFx0IFxuXHRcdDxwPjxzdHJvbmc+V2h5IGRvZXMgcHJpdmFjeSBtYXR0ZXI/PC9zdHJvbmc+PC9wPlxuXHRcdDxwPlRoZSBjb252ZW5pZW5jZSBvZiBsaXZpbmcgaW4gYSBjb25zdGFudGx5IGNvbm5lY3RlZCB3b3JsZCBjb21lcyBhdCBhIGNvc3QuIE91ciBkYWlseSBpbnRlcmFjdGlvbnMgd2l0aCB0ZWNobm9sb2d5IGdlbmVyYXRlcyBhbiB1bmltYWdpbmFibGUgYW1vdW50IG9mIGRhdGEgdGhhdCBpcyBiZWluZyBoYXJ2ZXN0ZWQgYW5kIHNvbGQgdG8gdGhvc2Ugd2hvIHdhbnQgdG8gcHJlZGljdCBhbmQgc2hhcGUgb3VyIGJlaGF2aW9yLiA8L3A+XG5cdFx0XG5cdFx0XG5cdFx0PHA+WW91IG1pZ2h0IHRoaW5rIGl04oCZcyBubyBiaWcgZGVhbCB0byBnaXZlIHVwIHlvdXIgZGF0YSBpbiBleGNoYW5nZSBmb3IgcGVyc29uYWxpemVkIGFkcyBhbmQgY29udGVudCwgYnV0IGNvbnN1bXB0aW9uIC0tIGJyb3dzaW5nIHRocm91Z2ggYSBzdG9yZSBhbmQgYnV5aW5nIHRoaW5ncyAtLSBhbmQgcXVpZXQgdGltZSBhbG9uZSBhcmUgYm90aCBpbXBvcnRhbnQgcGFydHMgb2YgaG93IHdlIGRlZmluZSBvdXJzZWx2ZXMuIElmIHdlIGJsaW5kbHkgYWdyZWUgdG8gbGl2ZSBpbiBhIHN0YXRlIG9mIGNvbnN0YW50IHN1cnZlaWxsYW5jZSwgd2UgbG9zZSB0aGUgYWJpbGl0eSB0byBjaG9vc2UgZm9yIG91cnNlbHZlcyBhbmQgYWxsb3cgb3RoZXJzIHRvIGluZmx1ZW5jZSBvdXIgYmVoYXZpb3JzIGFuZCBzZWxmLXBlcmNlcHRpb24uPC9wPlxuXHRcdFxuXHRcdDxwPk5vdyBpbWFnaW5lIGlmIG91ciBzb2NpZXR5IGFjY2VwdHMgc3VydmVpbGxhbmNlIGFzIHRoZSBuZXcgbm9ybWFsIGFuZCBjaXRpemVucyBrbm93IHRoZXkgYXJlIGJlaW5nIHdhdGNoZWQgY29uc3RhbnRseS4gV2UgbWF5IGhhdmUgaGlnaGx5IHBlcnNvbmFsaXplZCBhY2Nlc3MgdG8gZ29vZHMgYW5kIHNlcnZpY2VzLCBidXQgd2Ugd2lsbCBiZSBsZXNzIGxpa2VseSB0byBzcGVhayBmcmVlbHkgYW5kIGFjdCBpbmRpdmlkdWFsbHkuIFdpdGhvdXQgcHJpdmFjeSBhcyBhIGZ1bmRhbWVudGFsIHJpZ2h0LCB3ZSBsb3NlIHBvd2VyIGFuZCBiZWNvbWUgYW4gb2JlZGllbnQgYW5kIHN1Ym1pc3NpdmUgc29jaWV0eS48L3A+XG5cdFx0XG48ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuICAgIDxDb21wbGV0ZT5Db250aW51ZSB0byBuZXh0IENoYWxsZW5nZTwvQ29tcGxldGU+XG48L2Rpdj5cbjwvZGl2PlxuXG48QmFjay8+XG48L3NlY3Rpb24+XG48L1RyYW5zPlxuXG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIHNlY3Rpb257XG5cdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTU0OTM2OTcwLWU0OWEzNzNmNjk2Nz9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9NjYwJnE9ODApO1xuXHRcdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgfVxuICAgZGl2IHtcblx0d2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREOyBcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA5LjN2aCA1dncgMHZoIDkuM3ZoO1xuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgIH1cbiAgXG4gICBzdHJvbmcge1xuXHQgICBmb250LXdlaWdodDogNzAwO1xuXHQgICBmb250LXNpemU6IDIycHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FDTyxRQUFRLEdBQUcscUJBQXFCOztDQVVuQyxPQUFPOzZCQUNULFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7RUFDN0IsV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZOzs7Q0FFOUIsU0FBUyxPQUFPLFdBQVcsQ0FBQyxHQUFHLEVBQUUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
