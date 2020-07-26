import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, N as onMount, Q as onDestroy, v as validate_slots, O as afterUpdate, a as space, u as create_component, q as query_selector_all, b as detach_dev, c as claim_space, w as claim_component, l as insert_dev, x as mount_component, A as transition_in, y as transition_out, D as destroy_component, J as set_store_value, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.57893185.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp, C as Complete, B as Back } from './Back.d8dc8885.js';
import { q as quizSteps, c as count, t as timerActive } from './store.425ac388.js';
import { D as Detect } from './Detect.0cce3b5a.js';

/* src/routes/quiz/check1.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/check1.svelte";

// (37:4) <Complete>
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
		source: "(37:4) <Complete>",
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
	let h2;
	let t10;
	let t11;
	let p4;
	let t12;
	let t13;
	let ul;
	let li0;
	let t14;
	let t15;
	let li1;
	let t16;
	let t17;
	let li2;
	let t18;
	let t19;
	let p5;
	let t20;
	let t21;
	let p6;
	let t22;
	let t23;
	let div;
	let complete;
	let t24;
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
			t2 = text("When it comes to privacy and security, it’s a good idea to have both. Each can impact your cyber safety. But what’s the difference?");
			t3 = space();
			p1 = element("p");
			t4 = text("Privacy relates to any rights you have to control your personal information and how it’s used. Think about those privacy policies you’re asked to read and agree to when you download new smartphone apps.");
			t5 = space();
			p2 = element("p");
			t6 = text("Security, on the other hand, refers to how your personal information is protected. Your data — different details about you — may live in a lot of places. That can challenge both your privacy and your security.");
			t7 = space();
			p3 = element("p");
			t8 = text("Some people regard privacy and security as pretty much the same thing. That’s because the two sometimes overlap in our connected world. But they aren’t the same, and knowing how they differ may help you to protect yourself in an increasingly connected world.");
			t9 = space();
			h2 = element("h2");
			t10 = text("What’s the difference between privacy and security?");
			t11 = space();
			p4 = element("p");
			t12 = text("Here’s an example. You might share personal information with your bank when you open a checking account. What happens after that? Here are three possible outcomes, all related to your personal information (not to the money you may have deposited in the checking account).");
			t13 = space();
			ul = element("ul");
			li0 = element("li");
			t14 = text("Your privacy and security are maintained. The bank uses your information to open your account and provide you with products and services. They go on to protect that data.");
			t15 = space();
			li1 = element("li");
			t16 = text("Your privacy is compromised, and your security is maintained. The bank sells some of your information to a marketer. Note: You may have agreed to this in the bank’s privacy disclosure. The result? Your personal information is in more hands than you may have wanted.");
			t17 = space();
			li2 = element("li");
			t18 = text("Both your privacy and security are compromised. The bank gets hit by a data breach. Cybercriminals penetrate a bank database, a security breach. Your information is exposed and could be sold on the dark web. Your privacy is gone. You could become the victim of cyber fraud and identity theft.");
			t19 = space();
			p5 = element("p");
			t20 = text("It would be great if your risks began and ended with that theoretical bank. But your personal information is likely all over the connected world — in government offices, at healthcare providers, at stores and restaurants, and in many of your online accounts. You might say it’s everywhere — not literally, but it’s certainly in enough places that it’s out of your control.");
			t21 = space();
			p6 = element("p");
			t22 = text("If a cybercriminal accesses that information, it could be off to the races. Your privacy and security could both get trampled.");
			t23 = space();
			div = element("div");
			create_component(complete.$$.fragment);
			t24 = space();
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
			t2 = claim_text(p0_nodes, "When it comes to privacy and security, it’s a good idea to have both. Each can impact your cyber safety. But what’s the difference?");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Privacy relates to any rights you have to control your personal information and how it’s used. Think about those privacy policies you’re asked to read and agree to when you download new smartphone apps.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "Security, on the other hand, refers to how your personal information is protected. Your data — different details about you — may live in a lot of places. That can challenge both your privacy and your security.");
			p2_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			p3 = claim_element(nodes, "P", {});
			var p3_nodes = children(p3);
			t8 = claim_text(p3_nodes, "Some people regard privacy and security as pretty much the same thing. That’s because the two sometimes overlap in our connected world. But they aren’t the same, and knowing how they differ may help you to protect yourself in an increasingly connected world.");
			p3_nodes.forEach(detach_dev);
			t9 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", {});
			var h2_nodes = children(h2);
			t10 = claim_text(h2_nodes, "What’s the difference between privacy and security?");
			h2_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			p4 = claim_element(nodes, "P", {});
			var p4_nodes = children(p4);
			t12 = claim_text(p4_nodes, "Here’s an example. You might share personal information with your bank when you open a checking account. What happens after that? Here are three possible outcomes, all related to your personal information (not to the money you may have deposited in the checking account).");
			p4_nodes.forEach(detach_dev);
			t13 = claim_space(nodes);
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t14 = claim_text(li0_nodes, "Your privacy and security are maintained. The bank uses your information to open your account and provide you with products and services. They go on to protect that data.");
			li0_nodes.forEach(detach_dev);
			t15 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t16 = claim_text(li1_nodes, "Your privacy is compromised, and your security is maintained. The bank sells some of your information to a marketer. Note: You may have agreed to this in the bank’s privacy disclosure. The result? Your personal information is in more hands than you may have wanted.");
			li1_nodes.forEach(detach_dev);
			t17 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t18 = claim_text(li2_nodes, "Both your privacy and security are compromised. The bank gets hit by a data breach. Cybercriminals penetrate a bank database, a security breach. Your information is exposed and could be sold on the dark web. Your privacy is gone. You could become the victim of cyber fraud and identity theft.");
			li2_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			t19 = claim_space(nodes);
			p5 = claim_element(nodes, "P", {});
			var p5_nodes = children(p5);
			t20 = claim_text(p5_nodes, "It would be great if your risks began and ended with that theoretical bank. But your personal information is likely all over the connected world — in government offices, at healthcare providers, at stores and restaurants, and in many of your online accounts. You might say it’s everywhere — not literally, but it’s certainly in enough places that it’s out of your control.");
			p5_nodes.forEach(detach_dev);
			t21 = claim_space(nodes);
			p6 = claim_element(nodes, "P", {});
			var p6_nodes = children(p6);
			t22 = claim_text(p6_nodes, "If a cybercriminal accesses that information, it could be off to the races. Your privacy and security could both get trampled.");
			p6_nodes.forEach(detach_dev);
			t23 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t24 = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 21, 8, 754);
			add_location(p0, file, 22, 0, 801);
			add_location(p1, file, 23, 0, 945);
			add_location(p2, file, 24, 0, 1159);
			add_location(p3, file, 25, 0, 1380);
			add_location(h2, file, 26, 0, 1650);
			add_location(p4, file, 27, 0, 1711);
			add_location(li0, file, 29, 8, 2011);
			add_location(li1, file, 30, 8, 2199);
			add_location(li2, file, 31, 8, 2482);
			add_location(ul, file, 28, 4, 1998);
			add_location(p5, file, 33, 0, 2794);
			add_location(p6, file, 34, 0, 3182);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 35, 0, 3320);
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
			insert_dev(target, h2, anchor);
			append_dev(h2, t10);
			insert_dev(target, t11, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t12);
			insert_dev(target, t13, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, t14);
			append_dev(ul, t15);
			append_dev(ul, li1);
			append_dev(li1, t16);
			append_dev(ul, t17);
			append_dev(ul, li2);
			append_dev(li2, t18);
			insert_dev(target, t19, anchor);
			insert_dev(target, p5, anchor);
			append_dev(p5, t20);
			insert_dev(target, t21, anchor);
			insert_dev(target, p6, anchor);
			append_dev(p6, t22);
			insert_dev(target, t23, anchor);
			insert_dev(target, div, anchor);
			mount_component(complete, div, null);
			insert_dev(target, t24, anchor);
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
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(p4);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(ul);
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(p5);
			if (detaching) detach_dev(t21);
			if (detaching) detach_dev(p6);
			if (detaching) detach_dev(t23);
			if (detaching) detach_dev(div);
			destroy_component(complete);
			if (detaching) detach_dev(t24);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2sxLjBhOGUyZTJmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2sxLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgRGV0ZWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0ZWN0LnN2ZWx0ZSdcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcblx0IC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHQgaW1wb3J0IHsgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdCBpbXBvcnQgeyBjb3VudCwgdGltZXJBY3RpdmUgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0IGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblx0IGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cbiAgICBvbk1vdW50KGFzeW5jKCkgPT4ge1xuXHRcdCRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuXHRcdHRpbWVyQWN0aXZlLnNldCghJHRpbWVyQWN0aXZlKVxuXHRcdH0pO1xuXHRvbkRlc3Ryb3koKCkgPT4gdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpKVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5TZWN1cml0eSB2cyBQcml2YWN5OiBXaGF04oCZcyBhdCBzdGFrZT88L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbiAgICAgICAgPGgxPlNlY3VyaXR5IHZzIFByaXZhY3k6IFdoYXTigJlzIGF0IHN0YWtlPzwvaDE+XG48cD4gV2hlbiBpdCBjb21lcyB0byBwcml2YWN5IGFuZCBzZWN1cml0eSwgaXTigJlzIGEgZ29vZCBpZGVhIHRvIGhhdmUgYm90aC4gRWFjaCBjYW4gaW1wYWN0IHlvdXIgY3liZXIgc2FmZXR5LiBCdXQgd2hhdOKAmXMgdGhlIGRpZmZlcmVuY2U/PC9wPiAgICBcbjxwPlByaXZhY3kgcmVsYXRlcyB0byBhbnkgcmlnaHRzIHlvdSBoYXZlIHRvIGNvbnRyb2wgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBhbmQgaG93IGl04oCZcyB1c2VkLiBUaGluayBhYm91dCB0aG9zZSBwcml2YWN5IHBvbGljaWVzIHlvdeKAmXJlIGFza2VkIHRvIHJlYWQgYW5kIGFncmVlIHRvIHdoZW4geW91IGRvd25sb2FkIG5ldyBzbWFydHBob25lIGFwcHMuPC9wPiAgICBcbjxwPlNlY3VyaXR5LCBvbiB0aGUgb3RoZXIgaGFuZCwgcmVmZXJzIHRvIGhvdyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIHByb3RlY3RlZC4gWW91ciBkYXRhIOKAlCBkaWZmZXJlbnQgZGV0YWlscyBhYm91dCB5b3Ug4oCUIG1heSBsaXZlIGluIGEgbG90IG9mIHBsYWNlcy4gVGhhdCBjYW4gY2hhbGxlbmdlIGJvdGggeW91ciBwcml2YWN5IGFuZCB5b3VyIHNlY3VyaXR5LjwvcD4gICAgXG48cD5Tb21lIHBlb3BsZSByZWdhcmQgcHJpdmFjeSBhbmQgc2VjdXJpdHkgYXMgcHJldHR5IG11Y2ggdGhlIHNhbWUgdGhpbmcuIFRoYXTigJlzIGJlY2F1c2UgdGhlIHR3byBzb21ldGltZXMgb3ZlcmxhcCBpbiBvdXIgY29ubmVjdGVkIHdvcmxkLiBCdXQgdGhleSBhcmVu4oCZdCB0aGUgc2FtZSwgYW5kIGtub3dpbmcgaG93IHRoZXkgZGlmZmVyIG1heSBoZWxwIHlvdSB0byBwcm90ZWN0IHlvdXJzZWxmIGluIGFuIGluY3JlYXNpbmdseSBjb25uZWN0ZWQgd29ybGQuPC9wPiAgICBcbjxoMj5XaGF04oCZcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHByaXZhY3kgYW5kIHNlY3VyaXR5PzwvaDI+XG48cD5IZXJl4oCZcyBhbiBleGFtcGxlLiBZb3UgbWlnaHQgc2hhcmUgcGVyc29uYWwgaW5mb3JtYXRpb24gd2l0aCB5b3VyIGJhbmsgd2hlbiB5b3Ugb3BlbiBhIGNoZWNraW5nIGFjY291bnQuIFdoYXQgaGFwcGVucyBhZnRlciB0aGF0PyBIZXJlIGFyZSB0aHJlZSBwb3NzaWJsZSBvdXRjb21lcywgYWxsIHJlbGF0ZWQgdG8geW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiAobm90IHRvIHRoZSBtb25leSB5b3UgbWF5IGhhdmUgZGVwb3NpdGVkIGluIHRoZSBjaGVja2luZyBhY2NvdW50KS48L3A+ICAgIFxuICAgIDx1bD5cbiAgICAgICAgPGxpPllvdXIgcHJpdmFjeSBhbmQgc2VjdXJpdHkgYXJlIG1haW50YWluZWQuIFRoZSBiYW5rIHVzZXMgeW91ciBpbmZvcm1hdGlvbiB0byBvcGVuIHlvdXIgYWNjb3VudCBhbmQgcHJvdmlkZSB5b3Ugd2l0aCBwcm9kdWN0cyBhbmQgc2VydmljZXMuIFRoZXkgZ28gb24gdG8gcHJvdGVjdCB0aGF0IGRhdGEuPC9saT5cbiAgICAgICAgPGxpPllvdXIgcHJpdmFjeSBpcyBjb21wcm9taXNlZCwgYW5kIHlvdXIgc2VjdXJpdHkgaXMgbWFpbnRhaW5lZC4gVGhlIGJhbmsgc2VsbHMgc29tZSBvZiB5b3VyIGluZm9ybWF0aW9uIHRvIGEgbWFya2V0ZXIuIE5vdGU6IFlvdSBtYXkgaGF2ZSBhZ3JlZWQgdG8gdGhpcyBpbiB0aGUgYmFua+KAmXMgcHJpdmFjeSBkaXNjbG9zdXJlLiBUaGUgcmVzdWx0PyBZb3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIGluIG1vcmUgaGFuZHMgdGhhbiB5b3UgbWF5IGhhdmUgd2FudGVkLjwvbGk+XG4gICAgICAgIDxsaT5Cb3RoIHlvdXIgcHJpdmFjeSBhbmQgc2VjdXJpdHkgYXJlIGNvbXByb21pc2VkLiBUaGUgYmFuayBnZXRzIGhpdCBieSBhIGRhdGEgYnJlYWNoLiBDeWJlcmNyaW1pbmFscyBwZW5ldHJhdGUgYSBiYW5rIGRhdGFiYXNlLCBhIHNlY3VyaXR5IGJyZWFjaC4gWW91ciBpbmZvcm1hdGlvbiBpcyBleHBvc2VkIGFuZCBjb3VsZCBiZSBzb2xkIG9uIHRoZSBkYXJrIHdlYi4gWW91ciBwcml2YWN5IGlzIGdvbmUuIFlvdSBjb3VsZCBiZWNvbWUgdGhlIHZpY3RpbSBvZiBjeWJlciBmcmF1ZCBhbmQgaWRlbnRpdHkgdGhlZnQuPC9saT5cbiAgICA8L3VsPlxuPHA+ICAgIEl0IHdvdWxkIGJlIGdyZWF0IGlmIHlvdXIgcmlza3MgYmVnYW4gYW5kIGVuZGVkIHdpdGggdGhhdCB0aGVvcmV0aWNhbCBiYW5rLiBCdXQgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBpcyBsaWtlbHkgYWxsIG92ZXIgdGhlIGNvbm5lY3RlZCB3b3JsZCDigJQgaW4gZ292ZXJubWVudCBvZmZpY2VzLCBhdCBoZWFsdGhjYXJlIHByb3ZpZGVycywgYXQgc3RvcmVzIGFuZCByZXN0YXVyYW50cywgYW5kIGluIG1hbnkgb2YgeW91ciBvbmxpbmUgYWNjb3VudHMuIFlvdSBtaWdodCBzYXkgaXTigJlzIGV2ZXJ5d2hlcmUg4oCUIG5vdCBsaXRlcmFsbHksIGJ1dCBpdOKAmXMgY2VydGFpbmx5IGluIGVub3VnaCBwbGFjZXMgdGhhdCBpdOKAmXMgb3V0IG9mIHlvdXIgY29udHJvbC48L3A+ICAgIFxuPHA+SWYgYSBjeWJlcmNyaW1pbmFsIGFjY2Vzc2VzIHRoYXQgaW5mb3JtYXRpb24sIGl0IGNvdWxkIGJlIG9mZiB0byB0aGUgcmFjZXMuIFlvdXIgcHJpdmFjeSBhbmQgc2VjdXJpdHkgY291bGQgYm90aCBnZXQgdHJhbXBsZWQuPC9wPiAgICBcbjxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgPENvbXBsZXRlPkNvbnRpbnVlIFByaXZhY3kgQ2hhbGxlZ2U8L0NvbXBsZXRlPlxuPC9kaXY+XG48QmFjay8+XG48L1RyYW5zPlxuXG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BQ08sUUFBUSxHQUFHLHFCQUFxQjs7Q0FVbkMsT0FBTzs2QkFDVCxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0VBQzdCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsWUFBWTs7O0NBRTlCLFNBQVMsT0FBTyxXQUFXLENBQUMsR0FBRyxFQUFFLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
