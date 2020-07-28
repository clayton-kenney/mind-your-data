import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, x as onMount, T as onDestroy, v as validate_slots, w as afterUpdate, a as space, y as create_component, q as query_selector_all, b as detach_dev, c as claim_space, z as claim_component, l as insert_dev, A as mount_component, D as transition_in, B as transition_out, G as destroy_component, M as set_store_value, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.e329706e.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.e1653898.js';
import { q as quizSteps, c as count, t as timerActive } from './store.273b16fa.js';
import { C as Complete, B as Back } from './Back.3cb41c88.js';
import { D as Detect } from './Detect.9212ada1.js';

/* src/routes/quiz/check1.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/check1.svelte";

// (38:4) <Complete>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Continue Privacy Challege");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Continue Privacy Challege");
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
		source: "(38:4) <Complete>",
		ctx
	});

	return block;
}

// (21:0) <Trans>
function create_default_slot(ctx) {
	let h1;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let p2;
	let t6;
	let t7;
	let p3;
	let t8;
	let t9;
	let p4;
	let t10;
	let t11;
	let p5;
	let t12;
	let t13;
	let p6;
	let t14;
	let t15;
	let p7;
	let t16;
	let t17;
	let p8;
	let t18;
	let t19;
	let div;
	let complete;
	let t20;
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
			t0 = text("Security vs Privacy: What’s at stake?");
			t1 = space();
			p0 = element("p");
			t2 = text("Congratulations! By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world.");
			t3 = space();
			p1 = element("p");
			t4 = text("Some people think of privacy and security as pretty much the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.");
			t5 = space();
			p2 = element("p");
			t6 = text("What’s the difference between privacy and security?");
			t7 = space();
			p3 = element("p");
			t8 = text("Security refers to how your personal information is protected.");
			t9 = space();
			p4 = element("p");
			t10 = text("Privacy, on the other hand, relates your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.");
			t11 = space();
			p5 = element("p");
			t12 = text("Why does privacy matter?");
			t13 = space();
			p6 = element("p");
			t14 = text("The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generates an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior.");
			t15 = space();
			p7 = element("p");
			t16 = text("You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.");
			t17 = space();
			p8 = element("p");
			t18 = text("Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.");
			t19 = space();
			div = element("div");
			create_component(complete.$$.fragment);
			t20 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Security vs Privacy: What’s at stake?");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Congratulations! By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Some people think of privacy and security as pretty much the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "What’s the difference between privacy and security?");
			p2_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t8 = claim_text(p3_nodes, "Security refers to how your personal information is protected.");
			p3_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			t10 = claim_text(p4_nodes, "Privacy, on the other hand, relates your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.");
			p4_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			p5 = claim_element(nodes, "P", {});
			var p5_nodes = children(p5);
			t12 = claim_text(p5_nodes, "Why does privacy matter?");
			p5_nodes.forEach(detach_dev);
			t13 = claim_space(nodes);
			p6 = claim_element(nodes, "P", {});
			var p6_nodes = children(p6);
			t14 = claim_text(p6_nodes, "The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generates an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior.");
			p6_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			p7 = claim_element(nodes, "P", {});
			var p7_nodes = children(p7);
			t16 = claim_text(p7_nodes, "You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.");
			p7_nodes.forEach(detach_dev);
			t17 = claim_space(nodes);
			p8 = claim_element(nodes, "P", {});
			var p8_nodes = children(p8);
			t18 = claim_text(p8_nodes, "Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.");
			p8_nodes.forEach(detach_dev);
			t19 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t20 = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 21, 8, 754);
			add_location(p0, file, 22, 2, 803);
			add_location(p1, file, 23, 2, 1080);
			add_location(p2, file, 24, 2, 1323);
			add_location(p3, file, 25, 2, 1384);
			add_location(p4, file, 26, 2, 1457);
			add_location(p5, file, 28, 2, 1623);
			add_location(p6, file, 29, 2, 1657);
			add_location(p7, file, 32, 2, 1914);
			add_location(p8, file, 34, 2, 2339);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 36, 0, 2696);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, p1, anchor);
			append_dev(p1, t4);
			insert_dev(target, t5, anchor);
			insert_dev(target, p2, anchor);
			append_dev(p2, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, p3, anchor);
			append_dev(p3, t8);
			insert_dev(target, t9, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, p5, anchor);
			append_dev(p5, t12);
			insert_dev(target, t13, anchor);
			insert_dev(target, p6, anchor);
			append_dev(p6, t14);
			insert_dev(target, t15, anchor);
			insert_dev(target, p7, anchor);
			append_dev(p7, t16);
			insert_dev(target, t17, anchor);
			insert_dev(target, p8, anchor);
			append_dev(p8, t18);
			insert_dev(target, t19, anchor);
			insert_dev(target, div, anchor);
			mount_component(complete, div, null);
			insert_dev(target, t20, anchor);
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
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t5);
			if (detaching) detach_dev(p2);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(p3);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(p4);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(p5);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(p6);
			if (detaching) detach_dev(t15);
			if (detaching) detach_dev(p7);
			if (detaching) detach_dev(t17);
			if (detaching) detach_dev(p8);
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(div);
			destroy_component(complete);
			if (detaching) detach_dev(t20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2sxLmIxZjRiYTEyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2sxLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgRGV0ZWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0ZWN0LnN2ZWx0ZSdcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcblx0IC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHQgaW1wb3J0IHsgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdCBpbXBvcnQgeyBjb3VudCwgdGltZXJBY3RpdmUgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0IGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblx0IGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cbiAgICBvbk1vdW50KGFzeW5jKCkgPT4ge1xuXHRcdCRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuXHRcdHRpbWVyQWN0aXZlLnNldCghJHRpbWVyQWN0aXZlKVxuXHRcdH0pO1xuXHRvbkRlc3Ryb3koKCkgPT4gdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpKVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TZWN1cml0eSB2cyBQcml2YWN5OiBXaGF04oCZcyBhdCBzdGFrZT88L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbiAgICAgICAgPGgxPlNlY3VyaXR5IHZzIFByaXZhY3k6IFdoYXTigJlzIGF0IHN0YWtlPzwvaDE+XG5cdFx0PHA+Q29uZ3JhdHVsYXRpb25zISBCeSBjb21wbGV0aW5nIHRoZXNlIHRhc2tzLCB5b3UgaGF2ZSBqdXN0IHRha2VuIGEgZmV3IHN0ZXBzIHRvd2FyZCBzZWN1cmluZyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGZyb20gcG90ZW50aWFsIGN5YmVyY3JpbWUuIEJ1dCB0aGUgdHJ1dGggaXMsIHlvdXIgZGF0YSDigJQgZGlmZmVyZW50IGRldGFpbHMgYWJvdXQgeW91IOKAlCBsaXZlcyBpbiBhIGxvdCBvZiBwbGFjZXMgaW4gb3VyIGluY3JlYXNpbmdseSBjb25uZWN0ZWQgd29ybGQuIDwvcD5cblx0XHQ8cD5Tb21lIHBlb3BsZSB0aGluayBvZiBwcml2YWN5IGFuZCBzZWN1cml0eSBhcyBwcmV0dHkgbXVjaCB0aGUgc2FtZSB0aGluZy4gIFdoaWxlIHRoZSB0d28gc29tZXRpbWVzIG92ZXJsYXAsIHRoZXkgYXJlbuKAmXQgdGhlIHNhbWUsIGFuZCBrbm93aW5nIGhvdyB0aGV5IGRpZmZlciB3aWxsIGhlbHAgZ2l2ZSB5b3UgY29udHJvbCBvdmVyIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gYW5kIGhvdyBpdOKAmXMgdXNlZC48L3A+XG5cdFx0PHA+V2hhdOKAmXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBwcml2YWN5IGFuZCBzZWN1cml0eT88L3A+XG5cdFx0PHA+U2VjdXJpdHkgcmVmZXJzIHRvIGhvdyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIHByb3RlY3RlZC4gPC9wPlxuXHRcdDxwPlByaXZhY3ksIG9uIHRoZSBvdGhlciBoYW5kLCByZWxhdGVzIHlvdXIgcmlnaHRzIHRvIGNvbnRyb2wgdGhlIGRhdGEgdGhhdOKAmXMgYmVpbmcgY29sbGVjdGVkIGFib3V0IHlvdSwgaG93IGl04oCZcyBjb2xsZWN0ZWQsIHdoeSwgYW5kIHdobyBpdOKAmXMgc2hhcmVkIHdpdGguPC9wPlxuXHRcdCBcblx0XHQ8cD5XaHkgZG9lcyBwcml2YWN5IG1hdHRlcj88L3A+XG5cdFx0PHA+VGhlIGNvbnZlbmllbmNlIG9mIGxpdmluZyBpbiBhIGNvbnN0YW50bHkgY29ubmVjdGVkIHdvcmxkIGNvbWVzIGF0IGEgY29zdC4gT3VyIGRhaWx5IGludGVyYWN0aW9ucyB3aXRoIHRlY2hub2xvZ3kgZ2VuZXJhdGVzIGFuIHVuaW1hZ2luYWJsZSBhbW91bnQgb2YgZGF0YSB0aGF0IGlzIGJlaW5nIGhhcnZlc3RlZCBhbmQgc29sZCB0byB0aG9zZSB3aG8gd2FudCB0byBwcmVkaWN0IGFuZCBzaGFwZSBvdXIgYmVoYXZpb3IuIDwvcD5cblx0XHRcblx0XHRcblx0XHQ8cD5Zb3UgbWlnaHQgdGhpbmsgaXTigJlzIG5vIGJpZyBkZWFsIHRvIGdpdmUgdXAgeW91ciBkYXRhIGluIGV4Y2hhbmdlIGZvciBwZXJzb25hbGl6ZWQgYWRzIGFuZCBjb250ZW50LCBidXQgY29uc3VtcHRpb24gLS0gYnJvd3NpbmcgdGhyb3VnaCBhIHN0b3JlIGFuZCBidXlpbmcgdGhpbmdzIC0tIGFuZCBxdWlldCB0aW1lIGFsb25lIGFyZSBib3RoIGltcG9ydGFudCBwYXJ0cyBvZiBob3cgd2UgZGVmaW5lIG91cnNlbHZlcy4gSWYgd2UgYmxpbmRseSBhZ3JlZSB0byBsaXZlIGluIGEgc3RhdGUgb2YgY29uc3RhbnQgc3VydmVpbGxhbmNlLCB3ZSBsb3NlIHRoZSBhYmlsaXR5IHRvIGNob29zZSBmb3Igb3Vyc2VsdmVzIGFuZCBhbGxvdyBvdGhlcnMgdG8gaW5mbHVlbmNlIG91ciBiZWhhdmlvcnMgYW5kIHNlbGYtcGVyY2VwdGlvbi48L3A+XG5cdFx0XG5cdFx0PHA+Tm93IGltYWdpbmUgaWYgb3VyIHNvY2lldHkgYWNjZXB0cyBzdXJ2ZWlsbGFuY2UgYXMgdGhlIG5ldyBub3JtYWwgYW5kIGNpdGl6ZW5zIGtub3cgdGhleSBhcmUgYmVpbmcgd2F0Y2hlZCBjb25zdGFudGx5LiBXZSBtYXkgaGF2ZSBoaWdobHkgcGVyc29uYWxpemVkIGFjY2VzcyB0byBnb29kcyBhbmQgc2VydmljZXMsIGJ1dCB3ZSB3aWxsIGJlIGxlc3MgbGlrZWx5IHRvIHNwZWFrIGZyZWVseSBhbmQgYWN0IGluZGl2aWR1YWxseS4gV2l0aG91dCBwcml2YWN5IGFzIGEgZnVuZGFtZW50YWwgcmlnaHQsIHdlIGxvc2UgcG93ZXIgYW5kIGJlY29tZSBhbiBvYmVkaWVudCBhbmQgc3VibWlzc2l2ZSBzb2NpZXR5LjwvcD5cblx0XHRcbjxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgPENvbXBsZXRlPkNvbnRpbnVlIFByaXZhY3kgQ2hhbGxlZ2U8L0NvbXBsZXRlPlxuPC9kaXY+XG48QmFjay8+XG48L1RyYW5zPlxuXG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BQ08sUUFBUSxHQUFHLHFCQUFxQjs7Q0FVbkMsT0FBTzs2QkFDVCxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0VBQzdCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsWUFBWTs7O0NBRTlCLFNBQVMsT0FBTyxXQUFXLENBQUMsR0FBRyxFQUFFLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
