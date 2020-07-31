import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, O as onDestroy, v as validate_slots, L as afterUpdate, B as space, f as element, C as text, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, g as claim_element, h as children, F as claim_text, a as claim_component, l as add_location, k as attr_dev, n as insert_dev, p as append_dev, m as mount_component, t as transition_in, q as add_render_callback, r as create_in_transition, b as transition_out, u as create_out_transition, e as destroy_component, Q as set_store_value } from './client.db749d82.js';
import { a as fly, s as sineInOut } from './index.e2564167.js';
import { T as TransHelp } from './TransHelp.9e718570.js';
import { q as quizSteps, c as count, t as timerActive } from './store.9287f65a.js';
import { C as Complete, B as Back } from './Back.ff2b59c6.js';
import { D as Detect } from './Detect.7a84d4d8.js';

/* src/routes/quiz/check1.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/check1.svelte";

// (42:4) <Complete>
function create_default_slot(ctx) {
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
		id: create_default_slot.name,
		type: "slot",
		source: "(42:4) <Complete>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div2;
	let section;
	let div1;
	let h3;
	let t1;
	let t2;
	let h1;
	let t3;
	let t4;
	let p0;
	let strong0;
	let t5;
	let t6;
	let t7;
	let p1;
	let t8;
	let t9;
	let p2;
	let strong1;
	let t10;
	let t11;
	let p3;
	let t12;
	let t13;
	let p4;
	let t14;
	let t15;
	let p5;
	let strong2;
	let t16;
	let t17;
	let p6;
	let t18;
	let t19;
	let p7;
	let t20;
	let t21;
	let p8;
	let t22;
	let t23;
	let div0;
	let complete;
	let t24;
	let back;
	let div2_intro;
	let div2_outro;
	let current;

	complete = new Complete({
			props: {
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			div2 = element("div");
			section = element("section");
			div1 = element("div");
			h3 = element("h3");
			t1 = text("Checkpoint1");
			t2 = space();
			h1 = element("h1");
			t3 = text("Security vs Privacy: What’s at stake?");
			t4 = space();
			p0 = element("p");
			strong0 = element("strong");
			t5 = text("Congratulations!");
			t6 = text(" By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world.");
			t7 = space();
			p1 = element("p");
			t8 = text("Some people think of privacy and security as pretty much the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.");
			t9 = space();
			p2 = element("p");
			strong1 = element("strong");
			t10 = text("What’s the difference between privacy and security?");
			t11 = space();
			p3 = element("p");
			t12 = text("Security refers to how your personal information is protected.");
			t13 = space();
			p4 = element("p");
			t14 = text("Privacy, on the other hand, relates your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.");
			t15 = space();
			p5 = element("p");
			strong2 = element("strong");
			t16 = text("Why does privacy matter?");
			t17 = space();
			p6 = element("p");
			t18 = text("The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generates an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior.");
			t19 = space();
			p7 = element("p");
			t20 = text("You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.");
			t21 = space();
			p8 = element("p");
			t22 = text("Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.");
			t23 = space();
			div0 = element("div");
			create_component(complete.$$.fragment);
			t24 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-16wtpf7\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { id: true, class: true });
			var div2_nodes = children(div2);
			section = claim_element(div2_nodes, "SECTION", {});
			var section_nodes = children(section);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h3 = claim_element(div1_nodes, "H3", {});
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, "Checkpoint1");
			h3_nodes.forEach(detach_dev);
			t2 = claim_space(div1_nodes);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t3 = claim_text(h1_nodes, "Security vs Privacy: What’s at stake?");
			h1_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			p0 = claim_element(div1_nodes, "P", {});
			var p0_nodes = children(p0);
			strong0 = claim_element(p0_nodes, "STRONG", { class: true });
			var strong0_nodes = children(strong0);
			t5 = claim_text(strong0_nodes, "Congratulations!");
			strong0_nodes.forEach(detach_dev);
			t6 = claim_text(p0_nodes, " By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world.");
			p0_nodes.forEach(detach_dev);
			t7 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t8 = claim_text(p1_nodes, "Some people think of privacy and security as pretty much the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.");
			p1_nodes.forEach(detach_dev);
			t9 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			strong1 = claim_element(p2_nodes, "STRONG", { class: true });
			var strong1_nodes = children(strong1);
			t10 = claim_text(strong1_nodes, "What’s the difference between privacy and security?");
			strong1_nodes.forEach(detach_dev);
			p2_nodes.forEach(detach_dev);
			t11 = claim_space(div1_nodes);
			p3 = claim_element(div1_nodes, "P", {});
			var p3_nodes = children(p3);
			t12 = claim_text(p3_nodes, "Security refers to how your personal information is protected.");
			p3_nodes.forEach(detach_dev);
			t13 = claim_space(div1_nodes);
			p4 = claim_element(div1_nodes, "P", {});
			var p4_nodes = children(p4);
			t14 = claim_text(p4_nodes, "Privacy, on the other hand, relates your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.");
			p4_nodes.forEach(detach_dev);
			t15 = claim_space(div1_nodes);
			p5 = claim_element(div1_nodes, "P", {});
			var p5_nodes = children(p5);
			strong2 = claim_element(p5_nodes, "STRONG", { class: true });
			var strong2_nodes = children(strong2);
			t16 = claim_text(strong2_nodes, "Why does privacy matter?");
			strong2_nodes.forEach(detach_dev);
			p5_nodes.forEach(detach_dev);
			t17 = claim_space(div1_nodes);
			p6 = claim_element(div1_nodes, "P", {});
			var p6_nodes = children(p6);
			t18 = claim_text(p6_nodes, "The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generates an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior.");
			p6_nodes.forEach(detach_dev);
			t19 = claim_space(div1_nodes);
			p7 = claim_element(div1_nodes, "P", {});
			var p7_nodes = children(p7);
			t20 = claim_text(p7_nodes, "You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.");
			p7_nodes.forEach(detach_dev);
			t21 = claim_space(div1_nodes);
			p8 = claim_element(div1_nodes, "P", {});
			var p8_nodes = children(p8);
			t22 = claim_text(p8_nodes, "Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.");
			p8_nodes.forEach(detach_dev);
			t23 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(complete.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t24 = claim_space(section_nodes);
			claim_component(back.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Security vs Privacy: What’s at stake?";
			add_location(h3, file, 24, 1, 1034);
			add_location(h1, file, 25, 8, 1063);
			attr_dev(strong0, "class", "svelte-su6n7t");
			add_location(strong0, file, 26, 5, 1115);
			add_location(p0, file, 26, 2, 1112);
			add_location(p1, file, 27, 2, 1406);
			attr_dev(strong1, "class", "svelte-su6n7t");
			add_location(strong1, file, 28, 5, 1652);
			add_location(p2, file, 28, 2, 1649);
			add_location(p3, file, 29, 2, 1727);
			add_location(p4, file, 30, 2, 1800);
			attr_dev(strong2, "class", "svelte-su6n7t");
			add_location(strong2, file, 32, 5, 1969);
			add_location(p5, file, 32, 2, 1966);
			add_location(p6, file, 33, 2, 2017);
			add_location(p7, file, 36, 2, 2274);
			add_location(p8, file, 38, 2, 2699);
			attr_dev(div0, "class", "button-holder svelte-su6n7t");
			add_location(div0, file, 40, 0, 3056);
			attr_dev(div1, "class", "svelte-su6n7t");
			add_location(div1, file, 23, 2, 1027);
			add_location(section, file, 22, 1, 1015);
			attr_dev(div2, "id", "main-content");
			attr_dev(div2, "class", "svelte-su6n7t");
			add_location(div2, file, 21, 0, 829);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, section);
			append_dev(section, div1);
			append_dev(div1, h3);
			append_dev(h3, t1);
			append_dev(div1, t2);
			append_dev(div1, h1);
			append_dev(h1, t3);
			append_dev(div1, t4);
			append_dev(div1, p0);
			append_dev(p0, strong0);
			append_dev(strong0, t5);
			append_dev(p0, t6);
			append_dev(div1, t7);
			append_dev(div1, p1);
			append_dev(p1, t8);
			append_dev(div1, t9);
			append_dev(div1, p2);
			append_dev(p2, strong1);
			append_dev(strong1, t10);
			append_dev(div1, t11);
			append_dev(div1, p3);
			append_dev(p3, t12);
			append_dev(div1, t13);
			append_dev(div1, p4);
			append_dev(p4, t14);
			append_dev(div1, t15);
			append_dev(div1, p5);
			append_dev(p5, strong2);
			append_dev(strong2, t16);
			append_dev(div1, t17);
			append_dev(div1, p6);
			append_dev(p6, t18);
			append_dev(div1, t19);
			append_dev(div1, p7);
			append_dev(p7, t20);
			append_dev(div1, t21);
			append_dev(div1, p8);
			append_dev(p8, t22);
			append_dev(div1, t23);
			append_dev(div1, div0);
			mount_component(complete, div0, null);
			append_dev(section, t24);
			mount_component(back, section, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
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

			add_render_callback(() => {
				if (div2_outro) div2_outro.end(1);

				if (!div2_intro) div2_intro = create_in_transition(div2, fly, {
					delay: 500,
					duration: 800,
					x: 1000,
					opacity: 0,
					easing: sineInOut
				});

				div2_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(complete.$$.fragment, local);
			transition_out(back.$$.fragment, local);
			if (div2_intro) div2_intro.invalidate();

			div2_outro = create_out_transition(div2, fly, {
				delay: 50,
				duration: 600,
				x: -800,
				opacity: 0,
				easing: sineInOut
			});

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
			destroy_component(complete);
			destroy_component(back);
			if (detaching && div2_outro) div2_outro.end();
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
		fly,
		sineInOut,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2sxLjlhNTJmOTUzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2sxLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgRGV0ZWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0ZWN0LnN2ZWx0ZSdcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcblx0IC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHQgaW1wb3J0IHsgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdCBpbXBvcnQgeyBjb3VudCwgdGltZXJBY3RpdmUgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0IGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblx0IGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG4gICAgaW1wb3J0IHsgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHNpbmVJbk91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuICAgIG9uTW91bnQoYXN5bmMoKSA9PiB7XG5cdFx0JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG5cdFx0dGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpXG5cdFx0fSk7XG5cdG9uRGVzdHJveSgoKSA9PiB0aW1lckFjdGl2ZS5zZXQoISR0aW1lckFjdGl2ZSkpXG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlNlY3VyaXR5IHZzIFByaXZhY3k6IFdoYXTigJlzIGF0IHN0YWtlPzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBpZD1cIm1haW4tY29udGVudFwiIGluOmZseT1cInt7ZGVsYXk6IDUwMCwgZHVyYXRpb246IDgwMCwgeDogMTAwMCwgb3BhY2l0eTogMC4wLCBlYXNpbmc6IHNpbmVJbk91dH19XCIgb3V0OmZseT1cInt7ZGVsYXk6IDUwLCBkdXJhdGlvbjogNjAwLCB4OiAtODAwLCBvcGFjaXR5OiAwLCBlYXNpbmc6IHNpbmVJbk91dH19XCI+XHRcblx0PHNlY3Rpb24+XG5cdFx0PGRpdj5cblx0PGgzPkNoZWNrcG9pbnQxPC9oMz5cbiAgICAgICAgPGgxPlNlY3VyaXR5IHZzIFByaXZhY3k6IFdoYXTigJlzIGF0IHN0YWtlPzwvaDE+XG5cdFx0PHA+PHN0cm9uZz5Db25ncmF0dWxhdGlvbnMhPC9zdHJvbmc+IEJ5IGNvbXBsZXRpbmcgdGhlc2UgdGFza3MsIHlvdSBoYXZlIGp1c3QgdGFrZW4gYSBmZXcgc3RlcHMgdG93YXJkIHNlY3VyaW5nIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24gZnJvbSBwb3RlbnRpYWwgY3liZXJjcmltZS4gQnV0IHRoZSB0cnV0aCBpcywgeW91ciBkYXRhIOKAlCBkaWZmZXJlbnQgZGV0YWlscyBhYm91dCB5b3Ug4oCUIGxpdmVzIGluIGEgbG90IG9mIHBsYWNlcyBpbiBvdXIgaW5jcmVhc2luZ2x5IGNvbm5lY3RlZCB3b3JsZC4gPC9wPlxuXHRcdDxwPlNvbWUgcGVvcGxlIHRoaW5rIG9mIHByaXZhY3kgYW5kIHNlY3VyaXR5IGFzIHByZXR0eSBtdWNoIHRoZSBzYW1lIHRoaW5nLiAgV2hpbGUgdGhlIHR3byBzb21ldGltZXMgb3ZlcmxhcCwgdGhleSBhcmVu4oCZdCB0aGUgc2FtZSwgYW5kIGtub3dpbmcgaG93IHRoZXkgZGlmZmVyIHdpbGwgaGVscCBnaXZlIHlvdSBjb250cm9sIG92ZXIgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBhbmQgaG93IGl04oCZcyB1c2VkLjwvcD5cblx0XHQ8cD48c3Ryb25nPldoYXTigJlzIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcHJpdmFjeSBhbmQgc2VjdXJpdHk/PC9zdHJvbmc+PC9wPlxuXHRcdDxwPlNlY3VyaXR5IHJlZmVycyB0byBob3cgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBpcyBwcm90ZWN0ZWQuIDwvcD5cblx0XHQ8cD5Qcml2YWN5LCBvbiB0aGUgb3RoZXIgaGFuZCwgcmVsYXRlcyB5b3VyIHJpZ2h0cyB0byBjb250cm9sIHRoZSBkYXRhIHRoYXTigJlzIGJlaW5nIGNvbGxlY3RlZCBhYm91dCB5b3UsIGhvdyBpdOKAmXMgY29sbGVjdGVkLCB3aHksIGFuZCB3aG8gaXTigJlzIHNoYXJlZCB3aXRoLjwvcD5cblx0XHQgXG5cdFx0PHA+PHN0cm9uZz5XaHkgZG9lcyBwcml2YWN5IG1hdHRlcj88L3N0cm9uZz48L3A+XG5cdFx0PHA+VGhlIGNvbnZlbmllbmNlIG9mIGxpdmluZyBpbiBhIGNvbnN0YW50bHkgY29ubmVjdGVkIHdvcmxkIGNvbWVzIGF0IGEgY29zdC4gT3VyIGRhaWx5IGludGVyYWN0aW9ucyB3aXRoIHRlY2hub2xvZ3kgZ2VuZXJhdGVzIGFuIHVuaW1hZ2luYWJsZSBhbW91bnQgb2YgZGF0YSB0aGF0IGlzIGJlaW5nIGhhcnZlc3RlZCBhbmQgc29sZCB0byB0aG9zZSB3aG8gd2FudCB0byBwcmVkaWN0IGFuZCBzaGFwZSBvdXIgYmVoYXZpb3IuIDwvcD5cblx0XHRcblx0XHRcblx0XHQ8cD5Zb3UgbWlnaHQgdGhpbmsgaXTigJlzIG5vIGJpZyBkZWFsIHRvIGdpdmUgdXAgeW91ciBkYXRhIGluIGV4Y2hhbmdlIGZvciBwZXJzb25hbGl6ZWQgYWRzIGFuZCBjb250ZW50LCBidXQgY29uc3VtcHRpb24gLS0gYnJvd3NpbmcgdGhyb3VnaCBhIHN0b3JlIGFuZCBidXlpbmcgdGhpbmdzIC0tIGFuZCBxdWlldCB0aW1lIGFsb25lIGFyZSBib3RoIGltcG9ydGFudCBwYXJ0cyBvZiBob3cgd2UgZGVmaW5lIG91cnNlbHZlcy4gSWYgd2UgYmxpbmRseSBhZ3JlZSB0byBsaXZlIGluIGEgc3RhdGUgb2YgY29uc3RhbnQgc3VydmVpbGxhbmNlLCB3ZSBsb3NlIHRoZSBhYmlsaXR5IHRvIGNob29zZSBmb3Igb3Vyc2VsdmVzIGFuZCBhbGxvdyBvdGhlcnMgdG8gaW5mbHVlbmNlIG91ciBiZWhhdmlvcnMgYW5kIHNlbGYtcGVyY2VwdGlvbi48L3A+XG5cdFx0XG5cdFx0PHA+Tm93IGltYWdpbmUgaWYgb3VyIHNvY2lldHkgYWNjZXB0cyBzdXJ2ZWlsbGFuY2UgYXMgdGhlIG5ldyBub3JtYWwgYW5kIGNpdGl6ZW5zIGtub3cgdGhleSBhcmUgYmVpbmcgd2F0Y2hlZCBjb25zdGFudGx5LiBXZSBtYXkgaGF2ZSBoaWdobHkgcGVyc29uYWxpemVkIGFjY2VzcyB0byBnb29kcyBhbmQgc2VydmljZXMsIGJ1dCB3ZSB3aWxsIGJlIGxlc3MgbGlrZWx5IHRvIHNwZWFrIGZyZWVseSBhbmQgYWN0IGluZGl2aWR1YWxseS4gV2l0aG91dCBwcml2YWN5IGFzIGEgZnVuZGFtZW50YWwgcmlnaHQsIHdlIGxvc2UgcG93ZXIgYW5kIGJlY29tZSBhbiBvYmVkaWVudCBhbmQgc3VibWlzc2l2ZSBzb2NpZXR5LjwvcD5cblx0XHRcbjxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgPENvbXBsZXRlPkNvbnRpbnVlIHRvIG5leHQgQ2hhbGxlbmdlPC9Db21wbGV0ZT5cbjwvZGl2PlxuPC9kaXY+XG5cbjxCYWNrLz5cbjwvc2VjdGlvbj5cbjwvZGl2PlxuXG48c3R5bGU+XG4gICAjbWFpbi1jb250ZW50e1xuXHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1ODY5NzUyNC01YTJkMWU4YTkzZDE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1NTAmcT04MCk7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0XHRwYWRkaW5nLXRvcDogMTVweDtcbiAgIH1cbiAgIGRpdiB7XG5cdHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM4NDI0RDsgXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOS4zdmggNXZ3IDB2aCA5LjN2aDtcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICB9XG4gIFxuICAgc3Ryb25nIHtcblx0ICAgZm9udC13ZWlnaHQ6IDcwMDtcblx0ICAgZm9udC1zaXplOiAyMnB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FxQmlDLEtBQUssRUFBRSxHQUFHO0tBQUUsUUFBUSxFQUFFLEdBQUc7S0FBRSxDQUFDLEVBQUUsSUFBSTtLQUFFLE9BQU8sRUFBRSxDQUFHO0tBQUUsTUFBTSxFQUFFLFNBQVM7Ozs7Ozs7Ozs7Ozs7O0lBQWUsS0FBSyxFQUFFLEVBQUU7SUFBRSxRQUFRLEVBQUUsR0FBRztJQUFFLENBQUMsR0FBRyxHQUFHO0lBQUUsT0FBTyxFQUFFLENBQUM7SUFBRSxNQUFNLEVBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FwQjVLLFFBQVEsR0FBRyxxQkFBcUI7O0NBV25DLE9BQU87NkJBQ1QsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQztFQUM3QixXQUFXLENBQUMsR0FBRyxFQUFFLFlBQVk7OztDQUU5QixTQUFTLE9BQU8sV0FBVyxDQUFDLEdBQUcsRUFBRSxZQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
