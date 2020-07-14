import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, P as onMount, N as afterUpdate, p as globals, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, l as insert_dev, m as append_dev, Q as listen_dev, n as noop, A as add_render_callback, X as create_in_transition, Y as create_out_transition } from './client.30fa6d2e.js';
import { s as slide, q as quintOut, a as quintIn } from './index.0c0fb0ea.js';
import { D as Detect } from './Detect.c5a4bc9e.js';

/* src/routes/quiz/check1.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/check1.svelte";

function create_fragment(ctx) {
	let t0;
	let div1;
	let h1;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;
	let t6;
	let p2;
	let t7;
	let t8;
	let p3;
	let t9;
	let t10;
	let h2;
	let t11;
	let t12;
	let p4;
	let t13;
	let t14;
	let ul;
	let li0;
	let t15;
	let t16;
	let li1;
	let t17;
	let t18;
	let li2;
	let t19;
	let t20;
	let p5;
	let t21;
	let t22;
	let p6;
	let t23;
	let t24;
	let div0;
	let button;
	let t25;
	let div1_intro;
	let div1_outro;
	let current;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			t0 = space();
			div1 = element("div");
			h1 = element("h1");
			t1 = text("Security vs Privacy: What’s at stake?");
			t2 = space();
			p0 = element("p");
			t3 = text("When it comes to privacy and security, it’s a good idea to have both. Each can impact your cyber safety. But what’s the difference?");
			t4 = space();
			p1 = element("p");
			t5 = text("Privacy relates to any rights you have to control your personal information and how it’s used. Think about those privacy policies you’re asked to read and agree to when you download new smartphone apps.");
			t6 = space();
			p2 = element("p");
			t7 = text("Security, on the other hand, refers to how your personal information is protected. Your data — different details about you — may live in a lot of places. That can challenge both your privacy and your security.");
			t8 = space();
			p3 = element("p");
			t9 = text("Some people regard privacy and security as pretty much the same thing. That’s because the two sometimes overlap in our connected world. But they aren’t the same, and knowing how they differ may help you to protect yourself in an increasingly connected world.");
			t10 = space();
			h2 = element("h2");
			t11 = text("What’s the difference between privacy and security?");
			t12 = space();
			p4 = element("p");
			t13 = text("Here’s an example. You might share personal information with your bank when you open a checking account. What happens after that? Here are three possible outcomes, all related to your personal information (not to the money you may have deposited in the checking account).");
			t14 = space();
			ul = element("ul");
			li0 = element("li");
			t15 = text("Your privacy and security are maintained. The bank uses your information to open your account and provide you with products and services. They go on to protect that data.");
			t16 = space();
			li1 = element("li");
			t17 = text("Your privacy is compromised, and your security is maintained. The bank sells some of your information to a marketer. Note: You may have agreed to this in the bank’s privacy disclosure. The result? Your personal information is in more hands than you may have wanted.");
			t18 = space();
			li2 = element("li");
			t19 = text("Both your privacy and security are compromised. The bank gets hit by a data breach. Cybercriminals penetrate a bank database, a security breach. Your information is exposed and could be sold on the dark web. Your privacy is gone. You could become the victim of cyber fraud and identity theft.");
			t20 = space();
			p5 = element("p");
			t21 = text("It would be great if your risks began and ended with that theoretical bank. But your personal information is likely all over the connected world — in government offices, at healthcare providers, at stores and restaurants, and in many of your online accounts. You might say it’s everywhere — not literally, but it’s certainly in enough places that it’s out of your control.");
			t22 = space();
			p6 = element("p");
			t23 = text("If a cybercriminal accesses that information, it could be off to the races. Your privacy and security could both get trampled.");
			t24 = space();
			div0 = element("div");
			button = element("button");
			t25 = text("Continue Privacy Challege");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-16wtpf7\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Security vs Privacy: What’s at stake?");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			p0 = claim_element(div1_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "When it comes to privacy and security, it’s a good idea to have both. Each can impact your cyber safety. But what’s the difference?");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Privacy relates to any rights you have to control your personal information and how it’s used. Think about those privacy policies you’re asked to read and agree to when you download new smartphone apps.");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t7 = claim_text(p2_nodes, "Security, on the other hand, refers to how your personal information is protected. Your data — different details about you — may live in a lot of places. That can challenge both your privacy and your security.");
			p2_nodes.forEach(detach_dev);
			t8 = claim_space(div1_nodes);
			p3 = claim_element(div1_nodes, "P", {});
			var p3_nodes = children(p3);
			t9 = claim_text(p3_nodes, "Some people regard privacy and security as pretty much the same thing. That’s because the two sometimes overlap in our connected world. But they aren’t the same, and knowing how they differ may help you to protect yourself in an increasingly connected world.");
			p3_nodes.forEach(detach_dev);
			t10 = claim_space(div1_nodes);
			h2 = claim_element(div1_nodes, "H2", {});
			var h2_nodes = children(h2);
			t11 = claim_text(h2_nodes, "What’s the difference between privacy and security?");
			h2_nodes.forEach(detach_dev);
			t12 = claim_space(div1_nodes);
			p4 = claim_element(div1_nodes, "P", {});
			var p4_nodes = children(p4);
			t13 = claim_text(p4_nodes, "Here’s an example. You might share personal information with your bank when you open a checking account. What happens after that? Here are three possible outcomes, all related to your personal information (not to the money you may have deposited in the checking account).");
			p4_nodes.forEach(detach_dev);
			t14 = claim_space(div1_nodes);
			ul = claim_element(div1_nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t15 = claim_text(li0_nodes, "Your privacy and security are maintained. The bank uses your information to open your account and provide you with products and services. They go on to protect that data.");
			li0_nodes.forEach(detach_dev);
			t16 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t17 = claim_text(li1_nodes, "Your privacy is compromised, and your security is maintained. The bank sells some of your information to a marketer. Note: You may have agreed to this in the bank’s privacy disclosure. The result? Your personal information is in more hands than you may have wanted.");
			li1_nodes.forEach(detach_dev);
			t18 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t19 = claim_text(li2_nodes, "Both your privacy and security are compromised. The bank gets hit by a data breach. Cybercriminals penetrate a bank database, a security breach. Your information is exposed and could be sold on the dark web. Your privacy is gone. You could become the victim of cyber fraud and identity theft.");
			li2_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			t20 = claim_space(div1_nodes);
			p5 = claim_element(div1_nodes, "P", {});
			var p5_nodes = children(p5);
			t21 = claim_text(p5_nodes, "It would be great if your risks began and ended with that theoretical bank. But your personal information is likely all over the connected world — in government offices, at healthcare providers, at stores and restaurants, and in many of your online accounts. You might say it’s everywhere — not literally, but it’s certainly in enough places that it’s out of your control.");
			p5_nodes.forEach(detach_dev);
			t22 = claim_space(div1_nodes);
			p6 = claim_element(div1_nodes, "P", {});
			var p6_nodes = children(p6);
			t23 = claim_text(p6_nodes, "If a cybercriminal accesses that information, it could be off to the races. Your privacy and security could both get trampled.");
			p6_nodes.forEach(detach_dev);
			t24 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			button = claim_element(div0_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t25 = claim_text(button_nodes, "Continue Privacy Challege");
			button_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Security vs Privacy: What’s at stake?";
			add_location(h1, file, 35, 8, 930);
			add_location(p0, file, 36, 0, 977);
			add_location(p1, file, 37, 0, 1121);
			add_location(p2, file, 38, 0, 1335);
			add_location(p3, file, 39, 0, 1556);
			add_location(h2, file, 40, 0, 1826);
			add_location(p4, file, 41, 0, 1887);
			add_location(li0, file, 43, 8, 2187);
			add_location(li1, file, 44, 8, 2375);
			add_location(li2, file, 45, 8, 2658);
			add_location(ul, file, 42, 4, 2174);
			add_location(p5, file, 47, 0, 2970);
			add_location(p6, file, 48, 0, 3358);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 50, 4, 3528);
			attr_dev(div0, "class", "button-holder svelte-9jf7df");
			add_location(div0, file, 49, 0, 3496);
			add_location(div1, file, 34, 0, 796);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, h1);
			append_dev(h1, t1);
			append_dev(div1, t2);
			append_dev(div1, p0);
			append_dev(p0, t3);
			append_dev(div1, t4);
			append_dev(div1, p1);
			append_dev(p1, t5);
			append_dev(div1, t6);
			append_dev(div1, p2);
			append_dev(p2, t7);
			append_dev(div1, t8);
			append_dev(div1, p3);
			append_dev(p3, t9);
			append_dev(div1, t10);
			append_dev(div1, h2);
			append_dev(h2, t11);
			append_dev(div1, t12);
			append_dev(div1, p4);
			append_dev(p4, t13);
			append_dev(div1, t14);
			append_dev(div1, ul);
			append_dev(ul, li0);
			append_dev(li0, t15);
			append_dev(ul, t16);
			append_dev(ul, li1);
			append_dev(li1, t17);
			append_dev(ul, t18);
			append_dev(ul, li2);
			append_dev(li2, t19);
			append_dev(div1, t20);
			append_dev(div1, p5);
			append_dev(p5, t21);
			append_dev(div1, t22);
			append_dev(div1, p6);
			append_dev(p6, t23);
			append_dev(div1, t24);
			append_dev(div1, div0);
			append_dev(div0, button);
			append_dev(button, t25);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*complete*/ ctx[0], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (div1_outro) div1_outro.end(1);

				if (!div1_intro) div1_intro = create_in_transition(div1, slide, {
					delay: 100,
					duration: 400,
					easing: quintOut
				});

				div1_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (div1_intro) div1_intro.invalidate();

			div1_outro = create_out_transition(div1, slide, {
				delay: 100,
				duration: 400,
				easing: quintOut
			});

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div1);
			if (detaching && div1_outro) div1_outro.end();
			mounted = false;
			dispose();
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
	const dispatch = createEventDispatcher();

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
		slide,
		quintOut,
		quintIn,
		complete,
		incomplete,
		q,
		advance,
		advanceTwo
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2sxLmQ4NzM0MDM4LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2sxLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCBEZXRlY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRlY3Quc3ZlbHRlJ1xuXG5cdGltcG9ydCB7IHNsaWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdFx0fSk7XG5cdH1cblx0ZnVuY3Rpb24gaW5jb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAnZmFsc2UnXG5cdFx0fSk7XG5cdH1cblx0bGV0IHEgPSAwO1xuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHErKztcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuXHRmdW5jdGlvbiBhZHZhbmNlVHdvKCkge1xuXHRcdHErPTI7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+U2VjdXJpdHkgdnMgUHJpdmFjeTogV2hhdOKAmXMgYXQgc3Rha2U/PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2IGluOnNsaWRlPVwie3tkZWxheTogMTAwLCBkdXJhdGlvbjogNDAwLCBlYXNpbmc6IHF1aW50T3V0fX1cIiBvdXQ6c2xpZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogcXVpbnRPdXR9fVwiID5cbiAgICAgICAgPGgxPlNlY3VyaXR5IHZzIFByaXZhY3k6IFdoYXTigJlzIGF0IHN0YWtlPzwvaDE+XG48cD4gV2hlbiBpdCBjb21lcyB0byBwcml2YWN5IGFuZCBzZWN1cml0eSwgaXTigJlzIGEgZ29vZCBpZGVhIHRvIGhhdmUgYm90aC4gRWFjaCBjYW4gaW1wYWN0IHlvdXIgY3liZXIgc2FmZXR5LiBCdXQgd2hhdOKAmXMgdGhlIGRpZmZlcmVuY2U/PC9wPiAgICBcbjxwPlByaXZhY3kgcmVsYXRlcyB0byBhbnkgcmlnaHRzIHlvdSBoYXZlIHRvIGNvbnRyb2wgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBhbmQgaG93IGl04oCZcyB1c2VkLiBUaGluayBhYm91dCB0aG9zZSBwcml2YWN5IHBvbGljaWVzIHlvdeKAmXJlIGFza2VkIHRvIHJlYWQgYW5kIGFncmVlIHRvIHdoZW4geW91IGRvd25sb2FkIG5ldyBzbWFydHBob25lIGFwcHMuPC9wPiAgICBcbjxwPlNlY3VyaXR5LCBvbiB0aGUgb3RoZXIgaGFuZCwgcmVmZXJzIHRvIGhvdyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIHByb3RlY3RlZC4gWW91ciBkYXRhIOKAlCBkaWZmZXJlbnQgZGV0YWlscyBhYm91dCB5b3Ug4oCUIG1heSBsaXZlIGluIGEgbG90IG9mIHBsYWNlcy4gVGhhdCBjYW4gY2hhbGxlbmdlIGJvdGggeW91ciBwcml2YWN5IGFuZCB5b3VyIHNlY3VyaXR5LjwvcD4gICAgXG48cD5Tb21lIHBlb3BsZSByZWdhcmQgcHJpdmFjeSBhbmQgc2VjdXJpdHkgYXMgcHJldHR5IG11Y2ggdGhlIHNhbWUgdGhpbmcuIFRoYXTigJlzIGJlY2F1c2UgdGhlIHR3byBzb21ldGltZXMgb3ZlcmxhcCBpbiBvdXIgY29ubmVjdGVkIHdvcmxkLiBCdXQgdGhleSBhcmVu4oCZdCB0aGUgc2FtZSwgYW5kIGtub3dpbmcgaG93IHRoZXkgZGlmZmVyIG1heSBoZWxwIHlvdSB0byBwcm90ZWN0IHlvdXJzZWxmIGluIGFuIGluY3JlYXNpbmdseSBjb25uZWN0ZWQgd29ybGQuPC9wPiAgICBcbjxoMj5XaGF04oCZcyB0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHByaXZhY3kgYW5kIHNlY3VyaXR5PzwvaDI+XG48cD5IZXJl4oCZcyBhbiBleGFtcGxlLiBZb3UgbWlnaHQgc2hhcmUgcGVyc29uYWwgaW5mb3JtYXRpb24gd2l0aCB5b3VyIGJhbmsgd2hlbiB5b3Ugb3BlbiBhIGNoZWNraW5nIGFjY291bnQuIFdoYXQgaGFwcGVucyBhZnRlciB0aGF0PyBIZXJlIGFyZSB0aHJlZSBwb3NzaWJsZSBvdXRjb21lcywgYWxsIHJlbGF0ZWQgdG8geW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiAobm90IHRvIHRoZSBtb25leSB5b3UgbWF5IGhhdmUgZGVwb3NpdGVkIGluIHRoZSBjaGVja2luZyBhY2NvdW50KS48L3A+ICAgIFxuICAgIDx1bD5cbiAgICAgICAgPGxpPllvdXIgcHJpdmFjeSBhbmQgc2VjdXJpdHkgYXJlIG1haW50YWluZWQuIFRoZSBiYW5rIHVzZXMgeW91ciBpbmZvcm1hdGlvbiB0byBvcGVuIHlvdXIgYWNjb3VudCBhbmQgcHJvdmlkZSB5b3Ugd2l0aCBwcm9kdWN0cyBhbmQgc2VydmljZXMuIFRoZXkgZ28gb24gdG8gcHJvdGVjdCB0aGF0IGRhdGEuPC9saT5cbiAgICAgICAgPGxpPllvdXIgcHJpdmFjeSBpcyBjb21wcm9taXNlZCwgYW5kIHlvdXIgc2VjdXJpdHkgaXMgbWFpbnRhaW5lZC4gVGhlIGJhbmsgc2VsbHMgc29tZSBvZiB5b3VyIGluZm9ybWF0aW9uIHRvIGEgbWFya2V0ZXIuIE5vdGU6IFlvdSBtYXkgaGF2ZSBhZ3JlZWQgdG8gdGhpcyBpbiB0aGUgYmFua+KAmXMgcHJpdmFjeSBkaXNjbG9zdXJlLiBUaGUgcmVzdWx0PyBZb3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIGluIG1vcmUgaGFuZHMgdGhhbiB5b3UgbWF5IGhhdmUgd2FudGVkLjwvbGk+XG4gICAgICAgIDxsaT5Cb3RoIHlvdXIgcHJpdmFjeSBhbmQgc2VjdXJpdHkgYXJlIGNvbXByb21pc2VkLiBUaGUgYmFuayBnZXRzIGhpdCBieSBhIGRhdGEgYnJlYWNoLiBDeWJlcmNyaW1pbmFscyBwZW5ldHJhdGUgYSBiYW5rIGRhdGFiYXNlLCBhIHNlY3VyaXR5IGJyZWFjaC4gWW91ciBpbmZvcm1hdGlvbiBpcyBleHBvc2VkIGFuZCBjb3VsZCBiZSBzb2xkIG9uIHRoZSBkYXJrIHdlYi4gWW91ciBwcml2YWN5IGlzIGdvbmUuIFlvdSBjb3VsZCBiZWNvbWUgdGhlIHZpY3RpbSBvZiBjeWJlciBmcmF1ZCBhbmQgaWRlbnRpdHkgdGhlZnQuPC9saT5cbiAgICA8L3VsPlxuPHA+ICAgIEl0IHdvdWxkIGJlIGdyZWF0IGlmIHlvdXIgcmlza3MgYmVnYW4gYW5kIGVuZGVkIHdpdGggdGhhdCB0aGVvcmV0aWNhbCBiYW5rLiBCdXQgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBpcyBsaWtlbHkgYWxsIG92ZXIgdGhlIGNvbm5lY3RlZCB3b3JsZCDigJQgaW4gZ292ZXJubWVudCBvZmZpY2VzLCBhdCBoZWFsdGhjYXJlIHByb3ZpZGVycywgYXQgc3RvcmVzIGFuZCByZXN0YXVyYW50cywgYW5kIGluIG1hbnkgb2YgeW91ciBvbmxpbmUgYWNjb3VudHMuIFlvdSBtaWdodCBzYXkgaXTigJlzIGV2ZXJ5d2hlcmUg4oCUIG5vdCBsaXRlcmFsbHksIGJ1dCBpdOKAmXMgY2VydGFpbmx5IGluIGVub3VnaCBwbGFjZXMgdGhhdCBpdOKAmXMgb3V0IG9mIHlvdXIgY29udHJvbC48L3A+ICAgIFxuPHA+SWYgYSBjeWJlcmNyaW1pbmFsIGFjY2Vzc2VzIHRoYXQgaW5mb3JtYXRpb24sIGl0IGNvdWxkIGJlIG9mZiB0byB0aGUgcmFjZXMuIFlvdXIgcHJpdmFjeSBhbmQgc2VjdXJpdHkgY291bGQgYm90aCBnZXQgdHJhbXBsZWQuPC9wPiAgICBcbjxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgPGJ1dHRvbiBvbjpjbGljaz17Y29tcGxldGV9PkNvbnRpbnVlIFByaXZhY3kgQ2hhbGxlZ2U8L2J1dHRvbj5cbiAgICBcbjwvZGl2PlxuPC9kaXY+XG5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VEQWtEc0IsR0FBUTs7Ozs7Ozs7Ozs7O0tBaEJiLEtBQUssRUFBRSxHQUFHO0tBQUUsUUFBUSxFQUFFLEdBQUc7S0FBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7O0lBQWlCLEtBQUssRUFBRSxHQUFHO0lBQUUsUUFBUSxFQUFFLEdBQUc7SUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FoQ2pILFFBQVEsR0FBRyxxQkFBcUI7OztVQU83QixRQUFRO0VBQ2hCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE1BQU07Ozs7VUFHVCxVQUFVO0VBQ2xCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE9BQU87Ozs7S0FHZixDQUFDLEdBQUcsQ0FBQzs7VUFDQSxPQUFPO0VBQ2YsQ0FBQztFQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O1VBRUwsVUFBVTtFQUNsQixDQUFDLElBQUUsQ0FBQztFQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
