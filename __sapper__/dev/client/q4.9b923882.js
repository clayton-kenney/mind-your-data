import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, p as globals, a as space, r as create_component, q as query_selector_all, b as detach_dev, c as claim_space, u as claim_component, l as insert_dev, w as mount_component, z as transition_in, x as transition_out, C as destroy_component, Q as empty, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev, R as listen_dev, n as noop, T as run_all } from './client.b36812d9.js';
import './index.42fd54b0.js';
import { T as TransHelp } from './TransHelp.70c7854a.js';

/* src/routes/quiz/q4.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q4.svelte";

// (66:0) {:else}
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
	let button0;
	let t20;
	let t21;
	let button1;
	let t22;
	let mounted;
	let dispose;

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
			button0 = element("button");
			t20 = text("Yes, I did");
			t21 = space();
			button1 = element("button");
			t22 = text("No, I didn't");
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
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t20 = claim_text(button0_nodes, "Yes, I did");
			button0_nodes.forEach(detach_dev);
			t21 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t22 = claim_text(button1_nodes, "No, I didn't");
			button1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 67, 1, 2492);
			add_location(p0, file, 68, 1, 2542);
			add_location(p1, file, 69, 1, 2604);
			add_location(p2, file, 70, 1, 2660);
			add_location(p3, file, 71, 1, 2705);
			add_location(li0, file, 73, 2, 2762);
			add_location(li1, file, 74, 2, 2830);
			add_location(li2, file, 75, 2, 2934);
			add_location(li3, file, 76, 2, 3205);
			add_location(ul, file, 72, 1, 2755);
			add_location(h3, file, 78, 1, 3301);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 80, 2, 3383);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 81, 2, 3433);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 79, 1, 3353);
			add_location(section, file, 66, 0, 2481);
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
			append_dev(div, button0);
			append_dev(button0, t20);
			append_dev(div, t21);
			append_dev(div, button1);
			append_dev(button1, t22);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*complete*/ ctx[1], false, false, false),
					listen_dev(button1, "click", /*incomplete*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(66:0) {:else}",
		ctx
	});

	return block;
}

// (47:15) 
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
	let button0;
	let t20;
	let t21;
	let button1;
	let t22;
	let mounted;
	let dispose;

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
			button0 = element("button");
			t20 = text("Yes, I did");
			t21 = space();
			button1 = element("button");
			t22 = text("No, I didn't");
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
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t20 = claim_text(button0_nodes, "Yes, I did");
			button0_nodes.forEach(detach_dev);
			t21 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t22 = claim_text(button1_nodes, "No, I didn't");
			button1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 48, 1, 1469);
			add_location(p0, file, 49, 1, 1511);
			add_location(p1, file, 50, 1, 1573);
			add_location(p2, file, 51, 1, 1629);
			add_location(p3, file, 52, 1, 1674);
			add_location(li0, file, 54, 2, 1731);
			add_location(li1, file, 55, 2, 1799);
			add_location(li2, file, 56, 2, 1903);
			add_location(li3, file, 57, 2, 2174);
			add_location(ul, file, 53, 1, 1724);
			add_location(h3, file, 59, 1, 2270);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 61, 2, 2352);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 62, 2, 2402);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 60, 1, 2322);
			add_location(section, file, 47, 0, 1458);
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
			append_dev(div, button0);
			append_dev(button0, t20);
			append_dev(div, t21);
			append_dev(div, button1);
			append_dev(button1, t22);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*complete*/ ctx[1], false, false, false),
					listen_dev(button1, "click", /*incomplete*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(47:15) ",
		ctx
	});

	return block;
}

// (39:15) 
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
			add_location(h2, file, 40, 1, 1263);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 42, 2, 1334);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 43, 2, 1376);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 41, 1, 1304);
			add_location(section, file, 39, 0, 1252);
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
					listen_dev(button0, "click", /*advance*/ ctx[3], false, false, false),
					listen_dev(button1, "click", /*advanceTwo*/ ctx[4], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
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
		source: "(39:15) ",
		ctx
	});

	return block;
}

// (33:0) {#if q==0}
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
			add_location(h2, file, 34, 1, 662);
			add_location(p, file, 35, 2, 692);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 36, 2, 1167);
			add_location(section, file, 33, 0, 651);
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
				dispose = listen_dev(button, "click", /*advance*/ ctx[3], false, false, false);
				mounted = true;
			}
		},
		p: noop,
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
		source: "(33:0) {#if q==0}",
		ctx
	});

	return block;
}

// (32:0) <Trans>
function create_default_slot(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return create_if_block;
		if (/*q*/ ctx[0] == 1) return create_if_block_1;
		if (/*q*/ ctx[0] == 2) return create_if_block_2;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

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
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(32:0) <Trans>",
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

			if (dirty & /*$$scope, q*/ 65) {
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
		$$invalidate(0, q++, q);
		console.log(q);
	}

	function advanceTwo() {
		$$invalidate(0, q += 2);
		console.log(q);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q4> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q4", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		Trans: TransHelp,
		complete,
		incomplete,
		q,
		advance,
		advanceTwo
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(0, q = $$props.q);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [q, complete, incomplete, advance, advanceTwo];
}

class Q4 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q4",
			options,
			id: create_fragment.name
		});
	}
}

export default Q4;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTQuOWI5MjM4ODIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cblx0Ly9jb25maXJtIGNvbWxldGlvbiBvZiBxdWl6IHRvIG1hc3RlciBxdWl6IGNvbXBvbmVudFxuXHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAndHJ1ZSdcblx0XHR9KTtcblx0fVxuXHRmdW5jdGlvbiBpbmNvbXBsZXRlKCkge1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0cXVlc3Rpb246IDIsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICdmYWxzZSdcblx0XHR9KTtcblx0fVxuXHRsZXQgcSA9IDA7XG5cdGZ1bmN0aW9uIGFkdmFuY2UoKSB7XG5cdFx0cSsrO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuXHR9XG5cdGZ1bmN0aW9uIGFkdmFuY2VUd28oKSB7XG5cdFx0cSs9Mjtcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Mb2NhdGlvbiBUcmFja2luZzwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxueyNpZiBxPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5Mb2NhdGlvbiBUcmFja2luZzwvaDI+IFxuXHRcdDxwPlBlcnZhc2l2ZSB0cmFja2luZyBvZiBsb2NhdGlvbiBhdCB0aGUgdmVyeSBsZWFzdCByaXNrcyBwdXR0aW5nIHlvdSBhdCBhIGRpc2FkdmFudGFnZSBhcyBhIGNvbnN1bWVyLiBDZXJ0YWlubHkgaWYgeW91IGxpdmUgc29tZXdoZXJlIHdpdGhvdXQgYSBwcm9wZXIgcmVndWxhdG9yeSBmcmFtZXdvcmsgZm9yIHByaXZhY3kuIEl04oCZcyBhbHNvIHdvcnRoIGJlYXJpbmcgaW4gbWluZCBob3cgbGF4IHRlY2ggZ2lhbnRzIGNhbiBiZSB3aGVyZSBsb2NhdGlvbiBwcml2YWN5IGlzIGNvbmNlcm5lZCDigJQgd2hldGhlciBpdOKAmXMgVWJlcuKAmXMgaW5mYW1vdXMg4oCYZ29kIHZpZXfigJkgdG9vbCBvciBTbmFwY2hhdCBsZWFraW5nIHNjaG9vbGtpZHPigJkgbG9jYXRpb24gb3IgU3RyYXZhIGFjY2lkZW50YWxseSByZXZlYWxpbmcgdGhlIGxvY2F0aW9ucyBvZiBtaWxpdGFyeSBiYXNlcy4gVGhlaXIgcmVjb3JkIGlzIHByZXR0eSB0ZXJyaWJsZS48L3A+XHRcblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlfT5Db250aW51ZSB0byBuZXh0IHBhZ2U8L2J1dHRvbj5cbjwvc2VjdGlvbj5cbns6ZWxzZSBpZiBxPT0xfVxuPHNlY3Rpb24+XG5cdDxoMj5XaGF0IG1vYmlsZSBkZXZpY2UgZG8geW91IHVzZT88L2gyPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2V9PmlPUzwvYnV0dG9uPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2VUd299PmFuZHJvaWQ8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgcT09Mn1cbjxzZWN0aW9uPlxuXHQ8aDI+VHVybiBsb2NhaXRvbiBvZmYgb24gSU9TIGRldmljZTwvaDI+XG5cdDxwPlN0ZXAgMS4gR28gdG8gU2V0dGluZ3MgPiBQcml2YWN5ID4gTG9jYXRpb24gU2VydmljZXMuPC9wPlxuXHQ8cD5TdGVwIDIuIE1ha2Ugc3VyZSB0aGF0IExvY2F0aW9uIFNlcnZpY2VzIGlzIG9uLjwvcD5cblx0PHA+U3RlcCAzLiBTY3JvbGwgZG93biB0byBmaW5kIHRoZSBhcHAuPC9wPlxuXHQ8cD5TdGVwIDQuIFRhcCB0aGUgYXBwIGFuZCBzZWxlY3QgYW4gb3B0aW9uOjwvcD5cblx0PHVsPlxuXHRcdDxsaT5OZXZlcjogUHJldmVudHMgYWNjZXNzIHRvIExvY2F0aW9uIFNlcnZpY2VzIGluZm9ybWF0aW9uLjwvbGk+XG5cdFx0PGxpPkFzayBOZXh0IFRpbWU6IFRoaXMgYWxsb3dzIHlvdSB0byBjaG9vc2UgQWx3YXlzIFdoaWxlIFVzaW5nIEFwcCwgQWxsb3cgT25jZSwgb3IgRG9uJ3QgQWxsb3cuPC9saT5cblx0XHQ8bGk+V2hpbGUgVXNpbmcgdGhlIEFwcDogQWxsb3dzIGFjY2VzcyB0byBMb2NhdGlvbiBTZXJ2aWNlcyBvbmx5IHdoZW4gdGhlIGFwcCBvciBvbmUgb2YgaXRzIGZlYXR1cmVzIGlzIHZpc2libGUgb24gc2NyZWVuLiBJZiBhbiBhcHAgaXMgc2V0IHRvIFdoaWxlIFVzaW5nIHRoZSBBcHAsIHlvdSBtaWdodCBzZWUgeW91ciBzdGF0dXMgYmFyIHR1cm4gYmx1ZSB3aXRoIGEgbWVzc2FnZSB0aGF0IGFuIGFwcCBpcyBhY3RpdmVseSB1c2luZyB5b3VyIGxvY2F0aW9uLjwvbGk+XG5cdFx0PGxpPkFsd2F5czogQWxsb3dzIGFjY2VzcyB0byB5b3VyIGxvY2F0aW9uIGV2ZW4gd2hlbiB0aGUgYXBwIGlzIGluIHRoZSBiYWNrZ3JvdW5kLjwvbGk+XG5cdDwvdWw+XG5cdDxoMz5EaWQgeW91IHR1cm4gb2ZmIGxvY2F0aW9uIG9uIHlvdXIgZGV2aWNlPjwvaDM+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17Y29tcGxldGV9PlllcywgSSBkaWQ8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtpbmNvbXBsZXRlfT5ObywgSSBkaWRuJ3Q8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2V9XG48c2VjdGlvbj5cblx0PGgyPlR1cm4gbG9jYWl0b24gb2ZmIG9uIGFuZCBBbmRyb2lkIERldmljZTwvaDI+XG5cdDxwPlN0ZXAgMS4gR28gdG8gU2V0dGluZ3MgPiBQcml2YWN5ID4gTG9jYXRpb24gU2VydmljZXMuPC9wPlxuXHQ8cD5TdGVwIDIuIE1ha2Ugc3VyZSB0aGF0IExvY2F0aW9uIFNlcnZpY2VzIGlzIG9uLjwvcD5cblx0PHA+U3RlcCAzLiBTY3JvbGwgZG93biB0byBmaW5kIHRoZSBhcHAuPC9wPlxuXHQ8cD5TdGVwIDQuIFRhcCB0aGUgYXBwIGFuZCBzZWxlY3QgYW4gb3B0aW9uOjwvcD5cblx0PHVsPlxuXHRcdDxsaT5OZXZlcjogUHJldmVudHMgYWNjZXNzIHRvIExvY2F0aW9uIFNlcnZpY2VzIGluZm9ybWF0aW9uLjwvbGk+XG5cdFx0PGxpPkFzayBOZXh0IFRpbWU6IFRoaXMgYWxsb3dzIHlvdSB0byBjaG9vc2UgQWx3YXlzIFdoaWxlIFVzaW5nIEFwcCwgQWxsb3cgT25jZSwgb3IgRG9uJ3QgQWxsb3cuPC9saT5cblx0XHQ8bGk+V2hpbGUgVXNpbmcgdGhlIEFwcDogQWxsb3dzIGFjY2VzcyB0byBMb2NhdGlvbiBTZXJ2aWNlcyBvbmx5IHdoZW4gdGhlIGFwcCBvciBvbmUgb2YgaXRzIGZlYXR1cmVzIGlzIHZpc2libGUgb24gc2NyZWVuLiBJZiBhbiBhcHAgaXMgc2V0IHRvIFdoaWxlIFVzaW5nIHRoZSBBcHAsIHlvdSBtaWdodCBzZWUgeW91ciBzdGF0dXMgYmFyIHR1cm4gYmx1ZSB3aXRoIGEgbWVzc2FnZSB0aGF0IGFuIGFwcCBpcyBhY3RpdmVseSB1c2luZyB5b3VyIGxvY2F0aW9uLjwvbGk+XG5cdFx0PGxpPkFsd2F5czogQWxsb3dzIGFjY2VzcyB0byB5b3VyIGxvY2F0aW9uIGV2ZW4gd2hlbiB0aGUgYXBwIGlzIGluIHRoZSBiYWNrZ3JvdW5kLjwvbGk+XG5cdDwvdWw+XG5cdDxoMz5EaWQgeW91IHR1cm4gb2ZmIGxvY2F0aW9uIG9uIHlvdXIgZGV2aWNlPjwvaDM+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17Y29tcGxldGV9PlllcywgSSBkaWQ8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtpbmNvbXBsZXRlfT5ObywgSSBkaWRuJ3Q8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuPC9UcmFucz5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FnRm9CLEdBQVE7aURBQ1IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQXBCVixHQUFRO2lEQUNSLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQXBCVixHQUFPO2lEQUNQLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBUFYsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUp0QixHQUFDLE9BQUUsQ0FBQztZQU1DLEdBQUMsT0FBRSxDQUFDO1lBUUosR0FBQyxPQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTVDUCxRQUFRLEdBQUcscUJBQXFCOzs7VUFJN0IsUUFBUTtFQUNoQixRQUFRLENBQUMsU0FBUztHQUNqQixRQUFRLEVBQUUsQ0FBQztHQUNYLFFBQVEsRUFBRSxNQUFNOzs7O1VBR1QsVUFBVTtFQUNsQixRQUFRLENBQUMsU0FBUztHQUNqQixRQUFRLEVBQUUsQ0FBQztHQUNYLFFBQVEsRUFBRSxPQUFPOzs7O0tBR2YsQ0FBQyxHQUFHLENBQUM7O1VBQ0EsT0FBTztrQkFDZixDQUFDO0VBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7VUFFTCxVQUFVO2tCQUNsQixDQUFDLElBQUUsQ0FBQztFQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
