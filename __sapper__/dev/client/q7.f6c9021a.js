import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, U as onMount, v as validate_slots, u as globals, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, P as set_store_value, M as empty, G as group_outros, A as check_outros, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev, T as listen_dev, n as noop, Y as run_all } from './client.e224f2b0.js';
import './index.42fd54b0.js';
import { T as TransHelp, C as Complete } from './complete.24da63b6.js';
import { q as quizSteps, c as count } from './store.b50e1a56.js';

/* src/routes/quiz/q7.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q7.svelte";

// (74:0) {:else}
function create_else_block(ctx) {
	let section;
	let h2;
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
	let ul;
	let li0;
	let t10;
	let t11;
	let li1;
	let t12;
	let t13;
	let li2;
	let t14;
	let t15;
	let li3;
	let t16;
	let t17;
	let h3;
	let t18;
	let t19;
	let div;
	let complete_1;
	let t20;
	let button;
	let t21;
	let current;
	let mounted;
	let dispose;

	complete_1 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Turn locaiton off on and Android Device");
			t1 = space();
			p0 = element("p");
			t2 = text("Step 1. Go to Settings > Privacy > Location Services.");
			t3 = space();
			p1 = element("p");
			t4 = text("Step 2. Make sure that Location Services is on.");
			t5 = space();
			p2 = element("p");
			t6 = text("Step 3. Scroll down to find the app.");
			t7 = space();
			p3 = element("p");
			t8 = text("Step 4. Tap the app and select an option:");
			t9 = space();
			ul = element("ul");
			li0 = element("li");
			t10 = text("Never: Prevents access to Location Services information.");
			t11 = space();
			li1 = element("li");
			t12 = text("Ask Next Time: This allows you to choose Always While Using App, Allow Once, or Don't Allow.");
			t13 = space();
			li2 = element("li");
			t14 = text("While Using the App: Allows access to Location Services only when the app or one of its features is visible on screen. If an app is set to While Using the App, you might see your status bar turn blue with a message that an app is actively using your location.");
			t15 = space();
			li3 = element("li");
			t16 = text("Always: Allows access to your location even when the app is in the background.");
			t17 = space();
			h3 = element("h3");
			t18 = text("Did you turn off location on your device>");
			t19 = space();
			div = element("div");
			create_component(complete_1.$$.fragment);
			t20 = space();
			button = element("button");
			t21 = text("No, I didn't");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Turn locaiton off on and Android Device");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Step 1. Go to Settings > Privacy > Location Services.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Step 2. Make sure that Location Services is on.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			p2 = claim_element(section_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "Step 3. Scroll down to find the app.");
			p2_nodes.forEach(detach_dev);
			t7 = claim_space(section_nodes);
			p3 = claim_element(section_nodes, "P", {});
			var p3_nodes = children(p3);
			t8 = claim_text(p3_nodes, "Step 4. Tap the app and select an option:");
			p3_nodes.forEach(detach_dev);
			t9 = claim_space(section_nodes);
			ul = claim_element(section_nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t10 = claim_text(li0_nodes, "Never: Prevents access to Location Services information.");
			li0_nodes.forEach(detach_dev);
			t11 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t12 = claim_text(li1_nodes, "Ask Next Time: This allows you to choose Always While Using App, Allow Once, or Don't Allow.");
			li1_nodes.forEach(detach_dev);
			t13 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t14 = claim_text(li2_nodes, "While Using the App: Allows access to Location Services only when the app or one of its features is visible on screen. If an app is set to While Using the App, you might see your status bar turn blue with a message that an app is actively using your location.");
			li2_nodes.forEach(detach_dev);
			t15 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t16 = claim_text(li3_nodes, "Always: Allows access to your location even when the app is in the background.");
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			t17 = claim_space(section_nodes);
			h3 = claim_element(section_nodes, "H3", {});
			var h3_nodes = children(h3);
			t18 = claim_text(h3_nodes, "Did you turn off location on your device>");
			h3_nodes.forEach(detach_dev);
			t19 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete_1.$$.fragment, div_nodes);
			t20 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t21 = claim_text(button_nodes, "No, I didn't");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 75, 1, 2738);
			add_location(p0, file, 76, 1, 2788);
			add_location(p1, file, 77, 1, 2850);
			add_location(p2, file, 78, 1, 2906);
			add_location(p3, file, 79, 1, 2951);
			add_location(li0, file, 81, 2, 3008);
			add_location(li1, file, 82, 2, 3076);
			add_location(li2, file, 83, 2, 3180);
			add_location(li3, file, 84, 2, 3451);
			add_location(ul, file, 80, 1, 3001);
			add_location(h3, file, 86, 1, 3547);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 91, 2, 3670);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 87, 1, 3599);
			add_location(section, file, 74, 0, 2727);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p0);
			append_dev(p0, t2);
			append_dev(section, t3);
			append_dev(section, p1);
			append_dev(p1, t4);
			append_dev(section, t5);
			append_dev(section, p2);
			append_dev(p2, t6);
			append_dev(section, t7);
			append_dev(section, p3);
			append_dev(p3, t8);
			append_dev(section, t9);
			append_dev(section, ul);
			append_dev(ul, li0);
			append_dev(li0, t10);
			append_dev(ul, t11);
			append_dev(ul, li1);
			append_dev(li1, t12);
			append_dev(ul, t13);
			append_dev(ul, li2);
			append_dev(li2, t14);
			append_dev(ul, t15);
			append_dev(ul, li3);
			append_dev(li3, t16);
			append_dev(section, t17);
			append_dev(section, h3);
			append_dev(h3, t18);
			append_dev(section, t19);
			append_dev(section, div);
			mount_component(complete_1, div, null);
			append_dev(div, t20);
			append_dev(div, button);
			append_dev(button, t21);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*incomplete*/ ctx[1], false, false, false);
				mounted = true;
			}
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
			current = true;
		},
		o: function outro(local) {
			transition_out(complete_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(complete_1);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(74:0) {:else}",
		ctx
	});

	return block;
}

// (53:15) 
function create_if_block_2(ctx) {
	let section;
	let h2;
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
	let ul;
	let li0;
	let t10;
	let t11;
	let li1;
	let t12;
	let t13;
	let li2;
	let t14;
	let t15;
	let li3;
	let t16;
	let t17;
	let h3;
	let t18;
	let t19;
	let div;
	let complete_1;
	let t20;
	let button;
	let t21;
	let current;
	let mounted;
	let dispose;

	complete_1 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Turn locaiton off on IOS device");
			t1 = space();
			p0 = element("p");
			t2 = text("Step 1. Go to Settings > Privacy > Location Services.");
			t3 = space();
			p1 = element("p");
			t4 = text("Step 2. Make sure that Location Services is on.");
			t5 = space();
			p2 = element("p");
			t6 = text("Step 3. Scroll down to find the app.");
			t7 = space();
			p3 = element("p");
			t8 = text("Step 4. Tap the app and select an option:");
			t9 = space();
			ul = element("ul");
			li0 = element("li");
			t10 = text("Never: Prevents access to Location Services information.");
			t11 = space();
			li1 = element("li");
			t12 = text("Ask Next Time: This allows you to choose Always While Using App, Allow Once, or Don't Allow.");
			t13 = space();
			li2 = element("li");
			t14 = text("While Using the App: Allows access to Location Services only when the app or one of its features is visible on screen. If an app is set to While Using the App, you might see your status bar turn blue with a message that an app is actively using your location.");
			t15 = space();
			li3 = element("li");
			t16 = text("Always: Allows access to your location even when the app is in the background.");
			t17 = space();
			h3 = element("h3");
			t18 = text("Did you turn off location on your device>");
			t19 = space();
			div = element("div");
			create_component(complete_1.$$.fragment);
			t20 = space();
			button = element("button");
			t21 = text("No, I didn't");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Turn locaiton off on IOS device");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Step 1. Go to Settings > Privacy > Location Services.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Step 2. Make sure that Location Services is on.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			p2 = claim_element(section_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "Step 3. Scroll down to find the app.");
			p2_nodes.forEach(detach_dev);
			t7 = claim_space(section_nodes);
			p3 = claim_element(section_nodes, "P", {});
			var p3_nodes = children(p3);
			t8 = claim_text(p3_nodes, "Step 4. Tap the app and select an option:");
			p3_nodes.forEach(detach_dev);
			t9 = claim_space(section_nodes);
			ul = claim_element(section_nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t10 = claim_text(li0_nodes, "Never: Prevents access to Location Services information.");
			li0_nodes.forEach(detach_dev);
			t11 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t12 = claim_text(li1_nodes, "Ask Next Time: This allows you to choose Always While Using App, Allow Once, or Don't Allow.");
			li1_nodes.forEach(detach_dev);
			t13 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t14 = claim_text(li2_nodes, "While Using the App: Allows access to Location Services only when the app or one of its features is visible on screen. If an app is set to While Using the App, you might see your status bar turn blue with a message that an app is actively using your location.");
			li2_nodes.forEach(detach_dev);
			t15 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t16 = claim_text(li3_nodes, "Always: Allows access to your location even when the app is in the background.");
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			t17 = claim_space(section_nodes);
			h3 = claim_element(section_nodes, "H3", {});
			var h3_nodes = children(h3);
			t18 = claim_text(h3_nodes, "Did you turn off location on your device>");
			h3_nodes.forEach(detach_dev);
			t19 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete_1.$$.fragment, div_nodes);
			t20 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t21 = claim_text(button_nodes, "No, I didn't");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 54, 1, 1724);
			add_location(p0, file, 55, 1, 1766);
			add_location(p1, file, 56, 1, 1828);
			add_location(p2, file, 57, 1, 1884);
			add_location(p3, file, 58, 1, 1929);
			add_location(li0, file, 60, 2, 1986);
			add_location(li1, file, 61, 2, 2054);
			add_location(li2, file, 62, 2, 2158);
			add_location(li3, file, 63, 2, 2429);
			add_location(ul, file, 59, 1, 1979);
			add_location(h3, file, 65, 1, 2525);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 70, 2, 2648);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 66, 1, 2577);
			add_location(section, file, 53, 0, 1713);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p0);
			append_dev(p0, t2);
			append_dev(section, t3);
			append_dev(section, p1);
			append_dev(p1, t4);
			append_dev(section, t5);
			append_dev(section, p2);
			append_dev(p2, t6);
			append_dev(section, t7);
			append_dev(section, p3);
			append_dev(p3, t8);
			append_dev(section, t9);
			append_dev(section, ul);
			append_dev(ul, li0);
			append_dev(li0, t10);
			append_dev(ul, t11);
			append_dev(ul, li1);
			append_dev(li1, t12);
			append_dev(ul, t13);
			append_dev(ul, li2);
			append_dev(li2, t14);
			append_dev(ul, t15);
			append_dev(ul, li3);
			append_dev(li3, t16);
			append_dev(section, t17);
			append_dev(section, h3);
			append_dev(h3, t18);
			append_dev(section, t19);
			append_dev(section, div);
			mount_component(complete_1, div, null);
			append_dev(div, t20);
			append_dev(div, button);
			append_dev(button, t21);
			current = true;

			if (!mounted) {
				dispose = listen_dev(button, "click", /*incomplete*/ ctx[1], false, false, false);
				mounted = true;
			}
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
			current = true;
		},
		o: function outro(local) {
			transition_out(complete_1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(complete_1);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(53:15) ",
		ctx
	});

	return block;
}

// (45:15) 
function create_if_block_1(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let div;
	let button0;
	let t2;
	let t3;
	let button1;
	let t4;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("What mobile device do you use?");
			t1 = space();
			div = element("div");
			button0 = element("button");
			t2 = text("iOS");
			t3 = space();
			button1 = element("button");
			t4 = text("android");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "What mobile device do you use?");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t2 = claim_text(button0_nodes, "iOS");
			button0_nodes.forEach(detach_dev);
			t3 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t4 = claim_text(button1_nodes, "android");
			button1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 46, 1, 1518);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 48, 2, 1589);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 49, 2, 1631);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 47, 1, 1559);
			add_location(section, file, 45, 0, 1507);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, div);
			append_dev(div, button0);
			append_dev(button0, t2);
			append_dev(div, t3);
			append_dev(div, button1);
			append_dev(button1, t4);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*advance*/ ctx[2], false, false, false),
					listen_dev(button1, "click", /*advanceTwo*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(45:15) ",
		ctx
	});

	return block;
}

// (39:0) {#if q==0}
function create_if_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let button;
	let t4;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Location Tracking");
			t1 = space();
			p = element("p");
			t2 = text("Pervasive tracking of location at the very least risks putting you at a disadvantage as a consumer. Certainly if you live somewhere without a proper regulatory framework for privacy. It’s also worth bearing in mind how lax tech giants can be where location privacy is concerned — whether it’s Uber’s infamous ‘god view’ tool or Snapchat leaking schoolkids’ location or Strava accidentally revealing the locations of military bases. Their record is pretty terrible.");
			t3 = space();
			button = element("button");
			t4 = text("Continue to next page");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Location Tracking");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Pervasive tracking of location at the very least risks putting you at a disadvantage as a consumer. Certainly if you live somewhere without a proper regulatory framework for privacy. It’s also worth bearing in mind how lax tech giants can be where location privacy is concerned — whether it’s Uber’s infamous ‘god view’ tool or Snapchat leaking schoolkids’ location or Strava accidentally revealing the locations of military bases. Their record is pretty terrible.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			button = claim_element(section_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Continue to next page");
			button_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 40, 1, 917);
			add_location(p, file, 41, 2, 947);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 42, 2, 1422);
			add_location(section, file, 39, 0, 906);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			append_dev(section, button);
			append_dev(button, t4);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*advance*/ ctx[2], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(39:0) {#if q==0}",
		ctx
	});

	return block;
}

// (89:2) <Complete>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Yes, I did");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Yes, I did");
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
		id: create_default_slot_2.name,
		type: "slot",
		source: "(89:2) <Complete>",
		ctx
	});

	return block;
}

// (68:2) <Complete>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Yes, I did");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Yes, I did");
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
		source: "(68:2) <Complete>",
		ctx
	});

	return block;
}

// (38:0) <Trans>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_if_block_1, create_if_block_2, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return 0;
		if (/*q*/ ctx[0] == 1) return 1;
		if (/*q*/ ctx[0] == 2) return 2;
		return 3;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(ctx, dirty);
			} else {
				group_outros();

				transition_out(if_blocks[previous_block_index], 1, 1, () => {
					if_blocks[previous_block_index] = null;
				});

				check_outros();
				if_block = if_blocks[current_block_type_index];

				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}

				transition_in(if_block, 1);
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1qyzaks\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Location Tracking";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, q*/ 257) {
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(4, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(5, $count = $$value));
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
		$$invalidate(0, q++, q);
		console.log(q);
	}

	function advanceTwo() {
		$$invalidate(0, q += 2);
		console.log(q);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q7> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q7", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		dispatch,
		Trans: TransHelp,
		Complete,
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
		if ("q" in $$props) $$invalidate(0, q = $$props.q);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [q, incomplete, advance, advanceTwo];
}

class Q7 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q7",
			options,
			id: create_fragment.name
		});
	}
}

export default Q7;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTcuZjZjOTAyMWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcblx0IC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHQgaW1wb3J0IHsgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdCBpbXBvcnQgeyBjb3VudCB9IGZyb20gJy4uLy4uL3N0b3JlLmpzJ1xuXG4gICAgb25Nb3VudChhc3luYygpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMX0pO1xuXG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdFx0fSk7XG5cdH1cblx0ZnVuY3Rpb24gaW5jb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAnZmFsc2UnXG5cdFx0fSk7XG5cdH1cblx0bGV0IHEgPSAwO1xuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHErKztcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuXHRmdW5jdGlvbiBhZHZhbmNlVHdvKCkge1xuXHRcdHErPTI7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+TG9jYXRpb24gVHJhY2tpbmc8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbnsjaWYgcT09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+TG9jYXRpb24gVHJhY2tpbmc8L2gyPiBcblx0XHQ8cD5QZXJ2YXNpdmUgdHJhY2tpbmcgb2YgbG9jYXRpb24gYXQgdGhlIHZlcnkgbGVhc3Qgcmlza3MgcHV0dGluZyB5b3UgYXQgYSBkaXNhZHZhbnRhZ2UgYXMgYSBjb25zdW1lci4gQ2VydGFpbmx5IGlmIHlvdSBsaXZlIHNvbWV3aGVyZSB3aXRob3V0IGEgcHJvcGVyIHJlZ3VsYXRvcnkgZnJhbWV3b3JrIGZvciBwcml2YWN5LiBJdOKAmXMgYWxzbyB3b3J0aCBiZWFyaW5nIGluIG1pbmQgaG93IGxheCB0ZWNoIGdpYW50cyBjYW4gYmUgd2hlcmUgbG9jYXRpb24gcHJpdmFjeSBpcyBjb25jZXJuZWQg4oCUIHdoZXRoZXIgaXTigJlzIFViZXLigJlzIGluZmFtb3VzIOKAmGdvZCB2aWV34oCZIHRvb2wgb3IgU25hcGNoYXQgbGVha2luZyBzY2hvb2xraWRz4oCZIGxvY2F0aW9uIG9yIFN0cmF2YSBhY2NpZGVudGFsbHkgcmV2ZWFsaW5nIHRoZSBsb2NhdGlvbnMgb2YgbWlsaXRhcnkgYmFzZXMuIFRoZWlyIHJlY29yZCBpcyBwcmV0dHkgdGVycmlibGUuPC9wPlx0XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17YWR2YW5jZX0+Q29udGludWUgdG8gbmV4dCBwYWdlPC9idXR0b24+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgcT09MX1cbjxzZWN0aW9uPlxuXHQ8aDI+V2hhdCBtb2JpbGUgZGV2aWNlIGRvIHlvdSB1c2U/PC9oMj5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlfT5pT1M8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlVHdvfT5hbmRyb2lkPC9idXR0b24+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlIGlmIHE9PTJ9XG48c2VjdGlvbj5cblx0PGgyPlR1cm4gbG9jYWl0b24gb2ZmIG9uIElPUyBkZXZpY2U8L2gyPlxuXHQ8cD5TdGVwIDEuIEdvIHRvIFNldHRpbmdzID4gUHJpdmFjeSA+IExvY2F0aW9uIFNlcnZpY2VzLjwvcD5cblx0PHA+U3RlcCAyLiBNYWtlIHN1cmUgdGhhdCBMb2NhdGlvbiBTZXJ2aWNlcyBpcyBvbi48L3A+XG5cdDxwPlN0ZXAgMy4gU2Nyb2xsIGRvd24gdG8gZmluZCB0aGUgYXBwLjwvcD5cblx0PHA+U3RlcCA0LiBUYXAgdGhlIGFwcCBhbmQgc2VsZWN0IGFuIG9wdGlvbjo8L3A+XG5cdDx1bD5cblx0XHQ8bGk+TmV2ZXI6IFByZXZlbnRzIGFjY2VzcyB0byBMb2NhdGlvbiBTZXJ2aWNlcyBpbmZvcm1hdGlvbi48L2xpPlxuXHRcdDxsaT5Bc2sgTmV4dCBUaW1lOiBUaGlzIGFsbG93cyB5b3UgdG8gY2hvb3NlIEFsd2F5cyBXaGlsZSBVc2luZyBBcHAsIEFsbG93IE9uY2UsIG9yIERvbid0IEFsbG93LjwvbGk+XG5cdFx0PGxpPldoaWxlIFVzaW5nIHRoZSBBcHA6IEFsbG93cyBhY2Nlc3MgdG8gTG9jYXRpb24gU2VydmljZXMgb25seSB3aGVuIHRoZSBhcHAgb3Igb25lIG9mIGl0cyBmZWF0dXJlcyBpcyB2aXNpYmxlIG9uIHNjcmVlbi4gSWYgYW4gYXBwIGlzIHNldCB0byBXaGlsZSBVc2luZyB0aGUgQXBwLCB5b3UgbWlnaHQgc2VlIHlvdXIgc3RhdHVzIGJhciB0dXJuIGJsdWUgd2l0aCBhIG1lc3NhZ2UgdGhhdCBhbiBhcHAgaXMgYWN0aXZlbHkgdXNpbmcgeW91ciBsb2NhdGlvbi48L2xpPlxuXHRcdDxsaT5BbHdheXM6IEFsbG93cyBhY2Nlc3MgdG8geW91ciBsb2NhdGlvbiBldmVuIHdoZW4gdGhlIGFwcCBpcyBpbiB0aGUgYmFja2dyb3VuZC48L2xpPlxuXHQ8L3VsPlxuXHQ8aDM+RGlkIHlvdSB0dXJuIG9mZiBsb2NhdGlvbiBvbiB5b3VyIGRldmljZT48L2gzPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxDb21wbGV0ZT5cblx0XHRcdFllcywgSSBkaWRcblx0XHQ8L0NvbXBsZXRlPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9Pk5vLCBJIGRpZG4ndDwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+VHVybiBsb2NhaXRvbiBvZmYgb24gYW5kIEFuZHJvaWQgRGV2aWNlPC9oMj5cblx0PHA+U3RlcCAxLiBHbyB0byBTZXR0aW5ncyA+IFByaXZhY3kgPiBMb2NhdGlvbiBTZXJ2aWNlcy48L3A+XG5cdDxwPlN0ZXAgMi4gTWFrZSBzdXJlIHRoYXQgTG9jYXRpb24gU2VydmljZXMgaXMgb24uPC9wPlxuXHQ8cD5TdGVwIDMuIFNjcm9sbCBkb3duIHRvIGZpbmQgdGhlIGFwcC48L3A+XG5cdDxwPlN0ZXAgNC4gVGFwIHRoZSBhcHAgYW5kIHNlbGVjdCBhbiBvcHRpb246PC9wPlxuXHQ8dWw+XG5cdFx0PGxpPk5ldmVyOiBQcmV2ZW50cyBhY2Nlc3MgdG8gTG9jYXRpb24gU2VydmljZXMgaW5mb3JtYXRpb24uPC9saT5cblx0XHQ8bGk+QXNrIE5leHQgVGltZTogVGhpcyBhbGxvd3MgeW91IHRvIGNob29zZSBBbHdheXMgV2hpbGUgVXNpbmcgQXBwLCBBbGxvdyBPbmNlLCBvciBEb24ndCBBbGxvdy48L2xpPlxuXHRcdDxsaT5XaGlsZSBVc2luZyB0aGUgQXBwOiBBbGxvd3MgYWNjZXNzIHRvIExvY2F0aW9uIFNlcnZpY2VzIG9ubHkgd2hlbiB0aGUgYXBwIG9yIG9uZSBvZiBpdHMgZmVhdHVyZXMgaXMgdmlzaWJsZSBvbiBzY3JlZW4uIElmIGFuIGFwcCBpcyBzZXQgdG8gV2hpbGUgVXNpbmcgdGhlIEFwcCwgeW91IG1pZ2h0IHNlZSB5b3VyIHN0YXR1cyBiYXIgdHVybiBibHVlIHdpdGggYSBtZXNzYWdlIHRoYXQgYW4gYXBwIGlzIGFjdGl2ZWx5IHVzaW5nIHlvdXIgbG9jYXRpb24uPC9saT5cblx0XHQ8bGk+QWx3YXlzOiBBbGxvd3MgYWNjZXNzIHRvIHlvdXIgbG9jYXRpb24gZXZlbiB3aGVuIHRoZSBhcHAgaXMgaW4gdGhlIGJhY2tncm91bmQuPC9saT5cblx0PC91bD5cblx0PGgzPkRpZCB5b3UgdHVybiBvZmYgbG9jYXRpb24gb24geW91ciBkZXZpY2U+PC9oMz5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8Q29tcGxldGU+XG5cdFx0XHRZZXMsIEkgZGlkXG5cdFx0PC9Db21wbGV0ZT5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtpbmNvbXBsZXRlfT5ObywgSSBkaWRuJ3Q8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuPC9UcmFucz5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3lEQTJGb0IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eURBckJWLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0F0QlYsR0FBTztpREFDUCxHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBUFYsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFKdEIsR0FBQyxPQUFFLENBQUM7WUFNQyxHQUFDLE9BQUUsQ0FBQztZQVFKLEdBQUMsT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbERQLFFBQVEsR0FBRyxxQkFBcUI7O0NBT25DLE9BQU87NkJBQWEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQzs7OztVQUczQyxRQUFRO0VBQ2hCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE1BQU07Ozs7VUFHVCxVQUFVO0VBQ2xCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE9BQU87Ozs7S0FHZixDQUFDLEdBQUcsQ0FBQzs7VUFDQSxPQUFPO2tCQUNmLENBQUM7RUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7OztVQUVMLFVBQVU7a0JBQ2xCLENBQUMsSUFBRSxDQUFDO0VBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
