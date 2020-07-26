import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, R as onMount, v as validate_slots, T as afterUpdate, W as globals, a as space, u as create_component, q as query_selector_all, b as detach_dev, c as claim_space, w as claim_component, l as insert_dev, x as mount_component, A as transition_in, y as transition_out, D as destroy_component, O as set_store_value, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.9e9c953f.js';
import './index.42fd54b0.js';
import { T as TransHelp, C as Complete, B as Back } from './Back.8ef7552b.js';
import { q as quizSteps, c as count } from './store.92a4387f.js';
import { D as Detect } from './Detect.5a196abc.js';

/* src/routes/quiz/check1.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/check1.svelte";

// (57:4) <Complete>
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
		source: "(57:4) <Complete>",
		ctx
	});

	return block;
}

// (41:0) <Trans>
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
	let complete_1;
	let t24;
	let back;
	let current;

	complete_1 = new Complete({
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
			create_component(complete_1.$$.fragment);
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
			claim_component(complete_1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			t24 = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 41, 8, 1049);
			add_location(p0, file, 42, 0, 1096);
			add_location(p1, file, 43, 0, 1240);
			add_location(p2, file, 44, 0, 1454);
			add_location(p3, file, 45, 0, 1675);
			add_location(h2, file, 46, 0, 1945);
			add_location(p4, file, 47, 0, 2006);
			add_location(li0, file, 49, 8, 2306);
			add_location(li1, file, 50, 8, 2494);
			add_location(li2, file, 51, 8, 2777);
			add_location(ul, file, 48, 4, 2293);
			add_location(p5, file, 53, 0, 3089);
			add_location(p6, file, 54, 0, 3477);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 55, 0, 3615);
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
			mount_component(complete_1, div, null);
			insert_dev(target, t24, anchor);
			mount_component(back, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const complete_1_changes = {};

			if (dirty & /*$$scope*/ 256) {
				complete_1_changes.$$scope = { dirty, ctx };
			}

			complete_1.$set(complete_1_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(complete_1.$$.fragment, local);
			transition_in(back.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(complete_1.$$.fragment, local);
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
			destroy_component(complete_1);
			if (detaching) detach_dev(t24);
			destroy_component(back, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(41:0) <Trans>",
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

			if (dirty & /*$$scope*/ 256) {
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(1, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(2, $count = $$value));
	const dispatch = createEventDispatcher();

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

	//confirm comletion of quiz to master quiz component
	function complete() {
		dispatch("message", {
			question: 2, //Q-1 becaue of array
			complete: "true"
		});
	}

	function incomplete() {
		dispatch("message", {
			question: 2, //Q-1 becaue of array
			complete: "false"
		});
	}

	let q = 0;

	function advance() {
		q++;
		console.log(q);
	}

	function advanceTwo() {
		q += 2;
		console.log(q);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Check1> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check1", $$slots, []);

	$$self.$capture_state = () => ({
		dispatch,
		onMount,
		afterUpdate,
		createEventDispatcher,
		Detect,
		Trans: TransHelp,
		quizSteps,
		count,
		Complete,
		Back,
		complete,
		incomplete,
		q,
		advance,
		advanceTwo,
		$quizSteps,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) q = $$props.q;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2sxLmViODI0MjNmLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2sxLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IERldGVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGVjdC5zdmVsdGUnXG4gICAgaW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdCAvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcblx0IGltcG9ydCB7IHF1aXpTdGVwcyB9IGZyb20gJy4uLy4uL3N0b3JlLmpzJ1xuXHQgaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0IGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblx0IGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cbiAgICBvbk1vdW50KGFzeW5jKCkgPT4ge1xuXHRcdCRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuXHRcdH0pO1xuXHQvL2NvbmZpcm0gY29tbGV0aW9uIG9mIHF1aXogdG8gbWFzdGVyIHF1aXogY29tcG9uZW50XG5cdGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0cXVlc3Rpb246IDIsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICd0cnVlJ1xuXHRcdH0pO1xuXHR9XG5cdGZ1bmN0aW9uIGluY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ2ZhbHNlJ1xuXHRcdH0pO1xuXHR9XG5cdGxldCBxID0gMDtcblx0ZnVuY3Rpb24gYWR2YW5jZSgpIHtcblx0XHRxKys7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cblx0ZnVuY3Rpb24gYWR2YW5jZVR3bygpIHtcblx0XHRxKz0yO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuXHR9XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNlY3VyaXR5IHZzIFByaXZhY3k6IFdoYXTigJlzIGF0IHN0YWtlPzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxuICAgICAgICA8aDE+U2VjdXJpdHkgdnMgUHJpdmFjeTogV2hhdOKAmXMgYXQgc3Rha2U/PC9oMT5cbjxwPiBXaGVuIGl0IGNvbWVzIHRvIHByaXZhY3kgYW5kIHNlY3VyaXR5LCBpdOKAmXMgYSBnb29kIGlkZWEgdG8gaGF2ZSBib3RoLiBFYWNoIGNhbiBpbXBhY3QgeW91ciBjeWJlciBzYWZldHkuIEJ1dCB3aGF04oCZcyB0aGUgZGlmZmVyZW5jZT88L3A+ICAgIFxuPHA+UHJpdmFjeSByZWxhdGVzIHRvIGFueSByaWdodHMgeW91IGhhdmUgdG8gY29udHJvbCB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGFuZCBob3cgaXTigJlzIHVzZWQuIFRoaW5rIGFib3V0IHRob3NlIHByaXZhY3kgcG9saWNpZXMgeW914oCZcmUgYXNrZWQgdG8gcmVhZCBhbmQgYWdyZWUgdG8gd2hlbiB5b3UgZG93bmxvYWQgbmV3IHNtYXJ0cGhvbmUgYXBwcy48L3A+ICAgIFxuPHA+U2VjdXJpdHksIG9uIHRoZSBvdGhlciBoYW5kLCByZWZlcnMgdG8gaG93IHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgcHJvdGVjdGVkLiBZb3VyIGRhdGEg4oCUIGRpZmZlcmVudCBkZXRhaWxzIGFib3V0IHlvdSDigJQgbWF5IGxpdmUgaW4gYSBsb3Qgb2YgcGxhY2VzLiBUaGF0IGNhbiBjaGFsbGVuZ2UgYm90aCB5b3VyIHByaXZhY3kgYW5kIHlvdXIgc2VjdXJpdHkuPC9wPiAgICBcbjxwPlNvbWUgcGVvcGxlIHJlZ2FyZCBwcml2YWN5IGFuZCBzZWN1cml0eSBhcyBwcmV0dHkgbXVjaCB0aGUgc2FtZSB0aGluZy4gVGhhdOKAmXMgYmVjYXVzZSB0aGUgdHdvIHNvbWV0aW1lcyBvdmVybGFwIGluIG91ciBjb25uZWN0ZWQgd29ybGQuIEJ1dCB0aGV5IGFyZW7igJl0IHRoZSBzYW1lLCBhbmQga25vd2luZyBob3cgdGhleSBkaWZmZXIgbWF5IGhlbHAgeW91IHRvIHByb3RlY3QgeW91cnNlbGYgaW4gYW4gaW5jcmVhc2luZ2x5IGNvbm5lY3RlZCB3b3JsZC48L3A+ICAgIFxuPGgyPldoYXTigJlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcHJpdmFjeSBhbmQgc2VjdXJpdHk/PC9oMj5cbjxwPkhlcmXigJlzIGFuIGV4YW1wbGUuIFlvdSBtaWdodCBzaGFyZSBwZXJzb25hbCBpbmZvcm1hdGlvbiB3aXRoIHlvdXIgYmFuayB3aGVuIHlvdSBvcGVuIGEgY2hlY2tpbmcgYWNjb3VudC4gV2hhdCBoYXBwZW5zIGFmdGVyIHRoYXQ/IEhlcmUgYXJlIHRocmVlIHBvc3NpYmxlIG91dGNvbWVzLCBhbGwgcmVsYXRlZCB0byB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIChub3QgdG8gdGhlIG1vbmV5IHlvdSBtYXkgaGF2ZSBkZXBvc2l0ZWQgaW4gdGhlIGNoZWNraW5nIGFjY291bnQpLjwvcD4gICAgXG4gICAgPHVsPlxuICAgICAgICA8bGk+WW91ciBwcml2YWN5IGFuZCBzZWN1cml0eSBhcmUgbWFpbnRhaW5lZC4gVGhlIGJhbmsgdXNlcyB5b3VyIGluZm9ybWF0aW9uIHRvIG9wZW4geW91ciBhY2NvdW50IGFuZCBwcm92aWRlIHlvdSB3aXRoIHByb2R1Y3RzIGFuZCBzZXJ2aWNlcy4gVGhleSBnbyBvbiB0byBwcm90ZWN0IHRoYXQgZGF0YS48L2xpPlxuICAgICAgICA8bGk+WW91ciBwcml2YWN5IGlzIGNvbXByb21pc2VkLCBhbmQgeW91ciBzZWN1cml0eSBpcyBtYWludGFpbmVkLiBUaGUgYmFuayBzZWxscyBzb21lIG9mIHlvdXIgaW5mb3JtYXRpb24gdG8gYSBtYXJrZXRlci4gTm90ZTogWW91IG1heSBoYXZlIGFncmVlZCB0byB0aGlzIGluIHRoZSBiYW5r4oCZcyBwcml2YWN5IGRpc2Nsb3N1cmUuIFRoZSByZXN1bHQ/IFlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgaW4gbW9yZSBoYW5kcyB0aGFuIHlvdSBtYXkgaGF2ZSB3YW50ZWQuPC9saT5cbiAgICAgICAgPGxpPkJvdGggeW91ciBwcml2YWN5IGFuZCBzZWN1cml0eSBhcmUgY29tcHJvbWlzZWQuIFRoZSBiYW5rIGdldHMgaGl0IGJ5IGEgZGF0YSBicmVhY2guIEN5YmVyY3JpbWluYWxzIHBlbmV0cmF0ZSBhIGJhbmsgZGF0YWJhc2UsIGEgc2VjdXJpdHkgYnJlYWNoLiBZb3VyIGluZm9ybWF0aW9uIGlzIGV4cG9zZWQgYW5kIGNvdWxkIGJlIHNvbGQgb24gdGhlIGRhcmsgd2ViLiBZb3VyIHByaXZhY3kgaXMgZ29uZS4gWW91IGNvdWxkIGJlY29tZSB0aGUgdmljdGltIG9mIGN5YmVyIGZyYXVkIGFuZCBpZGVudGl0eSB0aGVmdC48L2xpPlxuICAgIDwvdWw+XG48cD4gICAgSXQgd291bGQgYmUgZ3JlYXQgaWYgeW91ciByaXNrcyBiZWdhbiBhbmQgZW5kZWQgd2l0aCB0aGF0IHRoZW9yZXRpY2FsIGJhbmsuIEJ1dCB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIGxpa2VseSBhbGwgb3ZlciB0aGUgY29ubmVjdGVkIHdvcmxkIOKAlCBpbiBnb3Zlcm5tZW50IG9mZmljZXMsIGF0IGhlYWx0aGNhcmUgcHJvdmlkZXJzLCBhdCBzdG9yZXMgYW5kIHJlc3RhdXJhbnRzLCBhbmQgaW4gbWFueSBvZiB5b3VyIG9ubGluZSBhY2NvdW50cy4gWW91IG1pZ2h0IHNheSBpdOKAmXMgZXZlcnl3aGVyZSDigJQgbm90IGxpdGVyYWxseSwgYnV0IGl04oCZcyBjZXJ0YWlubHkgaW4gZW5vdWdoIHBsYWNlcyB0aGF0IGl04oCZcyBvdXQgb2YgeW91ciBjb250cm9sLjwvcD4gICAgXG48cD5JZiBhIGN5YmVyY3JpbWluYWwgYWNjZXNzZXMgdGhhdCBpbmZvcm1hdGlvbiwgaXQgY291bGQgYmUgb2ZmIHRvIHRoZSByYWNlcy4gWW91ciBwcml2YWN5IGFuZCBzZWN1cml0eSBjb3VsZCBib3RoIGdldCB0cmFtcGxlZC48L3A+ICAgIFxuPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cbiAgICA8Q29tcGxldGU+Q29udGludWUgUHJpdmFjeSBDaGFsbGVnZTwvQ29tcGxldGU+XG48L2Rpdj5cbjxCYWNrLz5cbjwvVHJhbnM+XG5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BQ08sUUFBUSxHQUFHLHFCQUFxQjs7Q0FVbkMsT0FBTzs2QkFDVCxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDOzs7O1VBR3JCLFFBQVE7RUFDaEIsUUFBUSxDQUFDLFNBQVM7R0FDakIsUUFBUSxFQUFFLENBQUM7R0FDWCxRQUFRLEVBQUUsTUFBTTs7OztVQUdULFVBQVU7RUFDbEIsUUFBUSxDQUFDLFNBQVM7R0FDakIsUUFBUSxFQUFFLENBQUM7R0FDWCxRQUFRLEVBQUUsT0FBTzs7OztLQUdmLENBQUMsR0FBRyxDQUFDOztVQUNBLE9BQU87RUFDZixDQUFDO0VBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7VUFFTCxVQUFVO0VBQ2xCLENBQUMsSUFBRSxDQUFDO0VBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
