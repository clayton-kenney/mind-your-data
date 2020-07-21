import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, T as onMount, v as validate_slots, U as afterUpdate, u as globals, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, P as set_store_value, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev, X as listen_dev, n as noop } from './client.62added3.js';
import './index.42fd54b0.js';
import { T as TransHelp } from './TransHelp.d8a724a4.js';
import { q as quizSteps, c as count } from './store.8362f28f.js';
import { D as Detect } from './Detect.a63aa96c.js';

/* src/routes/quiz/check1.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/check1.svelte";

// (38:0) <Trans>
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
	let button;
	let t24;
	let mounted;
	let dispose;

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
			button = element("button");
			t24 = text("Continue Privacy Challege");
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
			button = claim_element(div_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t24 = claim_text(button_nodes, "Continue Privacy Challege");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 38, 8, 960);
			add_location(p0, file, 39, 0, 1007);
			add_location(p1, file, 40, 0, 1151);
			add_location(p2, file, 41, 0, 1365);
			add_location(p3, file, 42, 0, 1586);
			add_location(h2, file, 43, 0, 1856);
			add_location(p4, file, 44, 0, 1917);
			add_location(li0, file, 46, 8, 2217);
			add_location(li1, file, 47, 8, 2405);
			add_location(li2, file, 48, 8, 2688);
			add_location(ul, file, 45, 4, 2204);
			add_location(p5, file, 50, 0, 3000);
			add_location(p6, file, 51, 0, 3388);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 53, 4, 3558);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 52, 0, 3526);
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
			append_dev(div, button);
			append_dev(button, t24);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*complete*/ ctx[0], false, false, false);
				mounted = true;
			}
		},
		p: noop,
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
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(38:0) <Trans>",
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(2, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(3, $count = $$value));
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
		createEventDispatcher,
		dispatch,
		onMount,
		afterUpdate,
		Detect,
		Trans: TransHelp,
		quizSteps,
		count,
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

	return [complete];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2sxLjQzN2ViY2VjLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2sxLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCBEZXRlY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRlY3Quc3ZlbHRlJ1xuICAgIGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuXHQgLy9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG5cdCBpbXBvcnQgeyBxdWl6U3RlcHMgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0IGltcG9ydCB7IGNvdW50IH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cbiAgICBvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxfSk7XG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdFx0fSk7XG5cdH1cblx0ZnVuY3Rpb24gaW5jb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAnZmFsc2UnXG5cdFx0fSk7XG5cdH1cblx0bGV0IHEgPSAwO1xuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHErKztcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuXHRmdW5jdGlvbiBhZHZhbmNlVHdvKCkge1xuXHRcdHErPTI7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U2VjdXJpdHkgdnMgUHJpdmFjeTogV2hhdOKAmXMgYXQgc3Rha2U/PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG4gICAgICAgIDxoMT5TZWN1cml0eSB2cyBQcml2YWN5OiBXaGF04oCZcyBhdCBzdGFrZT88L2gxPlxuPHA+IFdoZW4gaXQgY29tZXMgdG8gcHJpdmFjeSBhbmQgc2VjdXJpdHksIGl04oCZcyBhIGdvb2QgaWRlYSB0byBoYXZlIGJvdGguIEVhY2ggY2FuIGltcGFjdCB5b3VyIGN5YmVyIHNhZmV0eS4gQnV0IHdoYXTigJlzIHRoZSBkaWZmZXJlbmNlPzwvcD4gICAgXG48cD5Qcml2YWN5IHJlbGF0ZXMgdG8gYW55IHJpZ2h0cyB5b3UgaGF2ZSB0byBjb250cm9sIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gYW5kIGhvdyBpdOKAmXMgdXNlZC4gVGhpbmsgYWJvdXQgdGhvc2UgcHJpdmFjeSBwb2xpY2llcyB5b3XigJlyZSBhc2tlZCB0byByZWFkIGFuZCBhZ3JlZSB0byB3aGVuIHlvdSBkb3dubG9hZCBuZXcgc21hcnRwaG9uZSBhcHBzLjwvcD4gICAgXG48cD5TZWN1cml0eSwgb24gdGhlIG90aGVyIGhhbmQsIHJlZmVycyB0byBob3cgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBpcyBwcm90ZWN0ZWQuIFlvdXIgZGF0YSDigJQgZGlmZmVyZW50IGRldGFpbHMgYWJvdXQgeW91IOKAlCBtYXkgbGl2ZSBpbiBhIGxvdCBvZiBwbGFjZXMuIFRoYXQgY2FuIGNoYWxsZW5nZSBib3RoIHlvdXIgcHJpdmFjeSBhbmQgeW91ciBzZWN1cml0eS48L3A+ICAgIFxuPHA+U29tZSBwZW9wbGUgcmVnYXJkIHByaXZhY3kgYW5kIHNlY3VyaXR5IGFzIHByZXR0eSBtdWNoIHRoZSBzYW1lIHRoaW5nLiBUaGF04oCZcyBiZWNhdXNlIHRoZSB0d28gc29tZXRpbWVzIG92ZXJsYXAgaW4gb3VyIGNvbm5lY3RlZCB3b3JsZC4gQnV0IHRoZXkgYXJlbuKAmXQgdGhlIHNhbWUsIGFuZCBrbm93aW5nIGhvdyB0aGV5IGRpZmZlciBtYXkgaGVscCB5b3UgdG8gcHJvdGVjdCB5b3Vyc2VsZiBpbiBhbiBpbmNyZWFzaW5nbHkgY29ubmVjdGVkIHdvcmxkLjwvcD4gICAgXG48aDI+V2hhdOKAmXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBwcml2YWN5IGFuZCBzZWN1cml0eT88L2gyPlxuPHA+SGVyZeKAmXMgYW4gZXhhbXBsZS4gWW91IG1pZ2h0IHNoYXJlIHBlcnNvbmFsIGluZm9ybWF0aW9uIHdpdGggeW91ciBiYW5rIHdoZW4geW91IG9wZW4gYSBjaGVja2luZyBhY2NvdW50LiBXaGF0IGhhcHBlbnMgYWZ0ZXIgdGhhdD8gSGVyZSBhcmUgdGhyZWUgcG9zc2libGUgb3V0Y29tZXMsIGFsbCByZWxhdGVkIHRvIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gKG5vdCB0byB0aGUgbW9uZXkgeW91IG1heSBoYXZlIGRlcG9zaXRlZCBpbiB0aGUgY2hlY2tpbmcgYWNjb3VudCkuPC9wPiAgICBcbiAgICA8dWw+XG4gICAgICAgIDxsaT5Zb3VyIHByaXZhY3kgYW5kIHNlY3VyaXR5IGFyZSBtYWludGFpbmVkLiBUaGUgYmFuayB1c2VzIHlvdXIgaW5mb3JtYXRpb24gdG8gb3BlbiB5b3VyIGFjY291bnQgYW5kIHByb3ZpZGUgeW91IHdpdGggcHJvZHVjdHMgYW5kIHNlcnZpY2VzLiBUaGV5IGdvIG9uIHRvIHByb3RlY3QgdGhhdCBkYXRhLjwvbGk+XG4gICAgICAgIDxsaT5Zb3VyIHByaXZhY3kgaXMgY29tcHJvbWlzZWQsIGFuZCB5b3VyIHNlY3VyaXR5IGlzIG1haW50YWluZWQuIFRoZSBiYW5rIHNlbGxzIHNvbWUgb2YgeW91ciBpbmZvcm1hdGlvbiB0byBhIG1hcmtldGVyLiBOb3RlOiBZb3UgbWF5IGhhdmUgYWdyZWVkIHRvIHRoaXMgaW4gdGhlIGJhbmvigJlzIHByaXZhY3kgZGlzY2xvc3VyZS4gVGhlIHJlc3VsdD8gWW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBpcyBpbiBtb3JlIGhhbmRzIHRoYW4geW91IG1heSBoYXZlIHdhbnRlZC48L2xpPlxuICAgICAgICA8bGk+Qm90aCB5b3VyIHByaXZhY3kgYW5kIHNlY3VyaXR5IGFyZSBjb21wcm9taXNlZC4gVGhlIGJhbmsgZ2V0cyBoaXQgYnkgYSBkYXRhIGJyZWFjaC4gQ3liZXJjcmltaW5hbHMgcGVuZXRyYXRlIGEgYmFuayBkYXRhYmFzZSwgYSBzZWN1cml0eSBicmVhY2guIFlvdXIgaW5mb3JtYXRpb24gaXMgZXhwb3NlZCBhbmQgY291bGQgYmUgc29sZCBvbiB0aGUgZGFyayB3ZWIuIFlvdXIgcHJpdmFjeSBpcyBnb25lLiBZb3UgY291bGQgYmVjb21lIHRoZSB2aWN0aW0gb2YgY3liZXIgZnJhdWQgYW5kIGlkZW50aXR5IHRoZWZ0LjwvbGk+XG4gICAgPC91bD5cbjxwPiAgICBJdCB3b3VsZCBiZSBncmVhdCBpZiB5b3VyIHJpc2tzIGJlZ2FuIGFuZCBlbmRlZCB3aXRoIHRoYXQgdGhlb3JldGljYWwgYmFuay4gQnV0IHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gaXMgbGlrZWx5IGFsbCBvdmVyIHRoZSBjb25uZWN0ZWQgd29ybGQg4oCUIGluIGdvdmVybm1lbnQgb2ZmaWNlcywgYXQgaGVhbHRoY2FyZSBwcm92aWRlcnMsIGF0IHN0b3JlcyBhbmQgcmVzdGF1cmFudHMsIGFuZCBpbiBtYW55IG9mIHlvdXIgb25saW5lIGFjY291bnRzLiBZb3UgbWlnaHQgc2F5IGl04oCZcyBldmVyeXdoZXJlIOKAlCBub3QgbGl0ZXJhbGx5LCBidXQgaXTigJlzIGNlcnRhaW5seSBpbiBlbm91Z2ggcGxhY2VzIHRoYXQgaXTigJlzIG91dCBvZiB5b3VyIGNvbnRyb2wuPC9wPiAgICBcbjxwPklmIGEgY3liZXJjcmltaW5hbCBhY2Nlc3NlcyB0aGF0IGluZm9ybWF0aW9uLCBpdCBjb3VsZCBiZSBvZmYgdG8gdGhlIHJhY2VzLiBZb3VyIHByaXZhY3kgYW5kIHNlY3VyaXR5IGNvdWxkIGJvdGggZ2V0IHRyYW1wbGVkLjwvcD4gICAgXG48ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuICAgIDxidXR0b24gb246Y2xpY2s9e2NvbXBsZXRlfT5Db250aW51ZSBQcml2YWN5IENoYWxsZWdlPC9idXR0b24+XG4gICAgXG48L2Rpdj5cbjwvVHJhbnM+XG5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQXFEc0IsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FuRHZCLFFBQVEsR0FBRyxxQkFBcUI7O0NBUW5DLE9BQU87NkJBQWEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQzs7OztVQUUzQyxRQUFRO0VBQ2hCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE1BQU07Ozs7VUFHVCxVQUFVO0VBQ2xCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE9BQU87Ozs7S0FHZixDQUFDLEdBQUcsQ0FBQzs7VUFDQSxPQUFPO0VBQ2YsQ0FBQztFQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O1VBRUwsVUFBVTtFQUNsQixDQUFDLElBQUUsQ0FBQztFQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
