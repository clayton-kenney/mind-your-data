import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, x as onMount, v as validate_slots, a as space, y as create_component, q as query_selector_all, b as detach_dev, c as claim_space, z as claim_component, l as insert_dev, A as mount_component, D as transition_in, B as transition_out, G as destroy_component, M as set_store_value, I as group_outros, C as check_outros, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.5b22a12f.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.9fa82458.js';
import { c as count, s as step, q as quizSteps } from './store.b94b446f.js';
import { C as Complete, B as Back } from './Back.c269c387.js';
import { B as Btn } from './Btn.222e5059.js';

/* src/routes/quiz/q7.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q7.svelte";

// (48:0) {:else}
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
	let complete0;
	let t20;
	let complete1;
	let current;

	complete0 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_6] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete1 = new Complete({
			props: {
				success: false,
				$$slots: { default: [create_default_slot_5] },
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
			create_component(complete0.$$.fragment);
			t20 = space();
			create_component(complete1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
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
			claim_component(complete0.$$.fragment, div_nodes);
			t20 = claim_space(div_nodes);
			claim_component(complete1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 49, 1, 2339);
			add_location(p0, file, 50, 1, 2389);
			add_location(p1, file, 51, 1, 2451);
			add_location(p2, file, 52, 1, 2507);
			add_location(p3, file, 53, 1, 2552);
			add_location(li0, file, 55, 2, 2609);
			add_location(li1, file, 56, 2, 2677);
			add_location(li2, file, 57, 2, 2781);
			add_location(li3, file, 58, 2, 3052);
			add_location(ul, file, 54, 1, 2602);
			add_location(h3, file, 60, 1, 3148);
			attr_dev(div, "class", "button-holder svelte-1y4us4j");
			add_location(div, file, 61, 1, 3200);
			attr_dev(section, "class", "svelte-1y4us4j");
			add_location(section, file, 48, 0, 2328);
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
			mount_component(complete0, div, null);
			append_dev(div, t20);
			mount_component(complete1, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(complete0.$$.fragment, local);
			transition_in(complete1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(complete0.$$.fragment, local);
			transition_out(complete1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(complete0);
			destroy_component(complete1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(48:0) {:else}",
		ctx
	});

	return block;
}

// (29:19) 
function create_if_block_1(ctx) {
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
	let complete0;
	let t20;
	let complete1;
	let current;

	complete0 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete1 = new Complete({
			props: {
				success: false,
				$$slots: { default: [create_default_slot_3] },
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
			create_component(complete0.$$.fragment);
			t20 = space();
			create_component(complete1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
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
			claim_component(complete0.$$.fragment, div_nodes);
			t20 = claim_space(div_nodes);
			claim_component(complete1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 30, 1, 1334);
			add_location(p0, file, 31, 1, 1376);
			add_location(p1, file, 32, 1, 1438);
			add_location(p2, file, 33, 1, 1494);
			add_location(p3, file, 34, 1, 1539);
			add_location(li0, file, 36, 2, 1596);
			add_location(li1, file, 37, 2, 1664);
			add_location(li2, file, 38, 2, 1768);
			add_location(li3, file, 39, 2, 2039);
			add_location(ul, file, 35, 1, 1589);
			add_location(h3, file, 41, 1, 2135);
			attr_dev(div, "class", "button-holder svelte-1y4us4j");
			add_location(div, file, 42, 1, 2187);
			attr_dev(section, "class", "svelte-1y4us4j");
			add_location(section, file, 29, 0, 1323);
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
			mount_component(complete0, div, null);
			append_dev(div, t20);
			mount_component(complete1, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(complete0.$$.fragment, local);
			transition_in(complete1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(complete0.$$.fragment, local);
			transition_out(complete1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(complete0);
			destroy_component(complete1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(29:19) ",
		ctx
	});

	return block;
}

// (19:0) {#if $step==0}
function create_if_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let h3;
	let t4;
	let t5;
	let div;
	let btn0;
	let t6;
	let btn1;
	let current;

	btn0 = new Btn({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	btn1 = new Btn({
			props: {
				n: 2,
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Location Tracking");
			t1 = space();
			p = element("p");
			t2 = text("Pervasive tracking of location at the very least risks putting you at a disadvantage as a consumer. Certainly if you live somewhere without a proper regulatory framework for privacy. It’s also worth bearing in mind how lax tech giants can be where location privacy is concerned — whether it’s Uber’s infamous ‘god view’ tool or Snapchat leaking schoolkids’ location or Strava accidentally revealing the locations of military bases. Their record is pretty terrible.");
			t3 = space();
			h3 = element("h3");
			t4 = text("What mobile device do you use?");
			t5 = space();
			div = element("div");
			create_component(btn0.$$.fragment);
			t6 = space();
			create_component(btn1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
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
			h3 = claim_element(section_nodes, "H3", {});
			var h3_nodes = children(h3);
			t4 = claim_text(h3_nodes, "What mobile device do you use?");
			h3_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(btn0.$$.fragment, div_nodes);
			t6 = claim_space(div_nodes);
			claim_component(btn1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 20, 1, 663);
			add_location(p, file, 21, 2, 693);
			add_location(h3, file, 22, 1, 1167);
			attr_dev(div, "class", "button-holder svelte-1y4us4j");
			add_location(div, file, 23, 2, 1209);
			attr_dev(section, "class", "svelte-1y4us4j");
			add_location(section, file, 19, 0, 652);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			append_dev(section, h3);
			append_dev(h3, t4);
			append_dev(section, t5);
			append_dev(section, div);
			mount_component(btn0, div, null);
			append_dev(div, t6);
			mount_component(btn1, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(btn0.$$.fragment, local);
			transition_in(btn1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(btn0.$$.fragment, local);
			transition_out(btn1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(btn0);
			destroy_component(btn1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(19:0) {#if $step==0}",
		ctx
	});

	return block;
}

// (63:2) <Complete>
function create_default_slot_6(ctx) {
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
		id: create_default_slot_6.name,
		type: "slot",
		source: "(63:2) <Complete>",
		ctx
	});

	return block;
}

// (64:2) <Complete success={false}>
function create_default_slot_5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No, I didn't");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No, I didn't");
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
		id: create_default_slot_5.name,
		type: "slot",
		source: "(64:2) <Complete success={false}>",
		ctx
	});

	return block;
}

// (44:2) <Complete>
function create_default_slot_4(ctx) {
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
		id: create_default_slot_4.name,
		type: "slot",
		source: "(44:2) <Complete>",
		ctx
	});

	return block;
}

// (45:2) <Complete success={false}>
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No, I didn't");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No, I didn't");
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
		id: create_default_slot_3.name,
		type: "slot",
		source: "(45:2) <Complete success={false}>",
		ctx
	});

	return block;
}

// (25:3) <Btn>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("iOS");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "iOS");
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
		source: "(25:3) <Btn>",
		ctx
	});

	return block;
}

// (26:3) <Btn n={2}>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Android");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Android");
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
		source: "(26:3) <Btn n={2}>",
		ctx
	});

	return block;
}

// (18:0) <Trans>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let t;
	let back;
	let current;
	const if_block_creators = [create_if_block, create_if_block_1, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$step*/ ctx[0] == 0) return 0;
		if (/*$step*/ ctx[0] == 1) return 1;
		return 2;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			if_block.c();
			t = space();
			create_component(back.$$.fragment);
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			t = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
		},
		m: function mount(target, anchor) {
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, t, anchor);
			mount_component(back, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index !== previous_block_index) {
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
				if_block.m(t.parentNode, t);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(back.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			transition_out(back.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(t);
			destroy_component(back, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(18:0) <Trans>",
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

			if (dirty & /*$$scope, $step*/ 17) {
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
	let $step;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(1, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(2, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(0, $step = $$value));
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q7> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q7", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		dispatch,
		Trans: TransHelp,
		Complete,
		Btn,
		count,
		step,
		quizSteps,
		Back,
		$quizSteps,
		$count,
		$step
	});

	return [$step];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTcuODcwZGQyODcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblx0Ly9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG5cdG9uTW91bnQoYXN5bmMoKSA9PiB7JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG5cdFx0fSk7XG5cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+TG9jYXRpb24gVHJhY2tpbmc8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbnsjaWYgJHN0ZXA9PTB9XG48c2VjdGlvbj5cblx0PGgyPkxvY2F0aW9uIFRyYWNraW5nPC9oMj4gXG5cdFx0PHA+UGVydmFzaXZlIHRyYWNraW5nIG9mIGxvY2F0aW9uIGF0IHRoZSB2ZXJ5IGxlYXN0IHJpc2tzIHB1dHRpbmcgeW91IGF0IGEgZGlzYWR2YW50YWdlIGFzIGEgY29uc3VtZXIuIENlcnRhaW5seSBpZiB5b3UgbGl2ZSBzb21ld2hlcmUgd2l0aG91dCBhIHByb3BlciByZWd1bGF0b3J5IGZyYW1ld29yayBmb3IgcHJpdmFjeS4gSXTigJlzIGFsc28gd29ydGggYmVhcmluZyBpbiBtaW5kIGhvdyBsYXggdGVjaCBnaWFudHMgY2FuIGJlIHdoZXJlIGxvY2F0aW9uIHByaXZhY3kgaXMgY29uY2VybmVkIOKAlCB3aGV0aGVyIGl04oCZcyBVYmVy4oCZcyBpbmZhbW91cyDigJhnb2Qgdmlld+KAmSB0b29sIG9yIFNuYXBjaGF0IGxlYWtpbmcgc2Nob29sa2lkc+KAmSBsb2NhdGlvbiBvciBTdHJhdmEgYWNjaWRlbnRhbGx5IHJldmVhbGluZyB0aGUgbG9jYXRpb25zIG9mIG1pbGl0YXJ5IGJhc2VzLiBUaGVpciByZWNvcmQgaXMgcHJldHR5IHRlcnJpYmxlLjwvcD5cdFxuXHQ8aDM+V2hhdCBtb2JpbGUgZGV2aWNlIGRvIHlvdSB1c2U/PC9oMz5cblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdFx0PEJ0bj5pT1M8L0J0bj5cblx0XHRcdDxCdG4gbj17Mn0+QW5kcm9pZDwvQnRuPlxuXHRcdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlIGlmICRzdGVwPT0xfVxuPHNlY3Rpb24+XG5cdDxoMj5UdXJuIGxvY2FpdG9uIG9mZiBvbiBJT1MgZGV2aWNlPC9oMj5cblx0PHA+U3RlcCAxLiBHbyB0byBTZXR0aW5ncyA+IFByaXZhY3kgPiBMb2NhdGlvbiBTZXJ2aWNlcy48L3A+XG5cdDxwPlN0ZXAgMi4gTWFrZSBzdXJlIHRoYXQgTG9jYXRpb24gU2VydmljZXMgaXMgb24uPC9wPlxuXHQ8cD5TdGVwIDMuIFNjcm9sbCBkb3duIHRvIGZpbmQgdGhlIGFwcC48L3A+XG5cdDxwPlN0ZXAgNC4gVGFwIHRoZSBhcHAgYW5kIHNlbGVjdCBhbiBvcHRpb246PC9wPlxuXHQ8dWw+XG5cdFx0PGxpPk5ldmVyOiBQcmV2ZW50cyBhY2Nlc3MgdG8gTG9jYXRpb24gU2VydmljZXMgaW5mb3JtYXRpb24uPC9saT5cblx0XHQ8bGk+QXNrIE5leHQgVGltZTogVGhpcyBhbGxvd3MgeW91IHRvIGNob29zZSBBbHdheXMgV2hpbGUgVXNpbmcgQXBwLCBBbGxvdyBPbmNlLCBvciBEb24ndCBBbGxvdy48L2xpPlxuXHRcdDxsaT5XaGlsZSBVc2luZyB0aGUgQXBwOiBBbGxvd3MgYWNjZXNzIHRvIExvY2F0aW9uIFNlcnZpY2VzIG9ubHkgd2hlbiB0aGUgYXBwIG9yIG9uZSBvZiBpdHMgZmVhdHVyZXMgaXMgdmlzaWJsZSBvbiBzY3JlZW4uIElmIGFuIGFwcCBpcyBzZXQgdG8gV2hpbGUgVXNpbmcgdGhlIEFwcCwgeW91IG1pZ2h0IHNlZSB5b3VyIHN0YXR1cyBiYXIgdHVybiBibHVlIHdpdGggYSBtZXNzYWdlIHRoYXQgYW4gYXBwIGlzIGFjdGl2ZWx5IHVzaW5nIHlvdXIgbG9jYXRpb24uPC9saT5cblx0XHQ8bGk+QWx3YXlzOiBBbGxvd3MgYWNjZXNzIHRvIHlvdXIgbG9jYXRpb24gZXZlbiB3aGVuIHRoZSBhcHAgaXMgaW4gdGhlIGJhY2tncm91bmQuPC9saT5cblx0PC91bD5cblx0PGgzPkRpZCB5b3UgdHVybiBvZmYgbG9jYXRpb24gb24geW91ciBkZXZpY2U+PC9oMz5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8Q29tcGxldGU+WWVzLCBJIGRpZDwvQ29tcGxldGU+XG5cdFx0PENvbXBsZXRlIHN1Y2Nlc3M9e2ZhbHNlfT5ObywgSSBkaWRuJ3Q8L0NvbXBsZXRlPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+VHVybiBsb2NhaXRvbiBvZmYgb24gYW5kIEFuZHJvaWQgRGV2aWNlPC9oMj5cblx0PHA+U3RlcCAxLiBHbyB0byBTZXR0aW5ncyA+IFByaXZhY3kgPiBMb2NhdGlvbiBTZXJ2aWNlcy48L3A+XG5cdDxwPlN0ZXAgMi4gTWFrZSBzdXJlIHRoYXQgTG9jYXRpb24gU2VydmljZXMgaXMgb24uPC9wPlxuXHQ8cD5TdGVwIDMuIFNjcm9sbCBkb3duIHRvIGZpbmQgdGhlIGFwcC48L3A+XG5cdDxwPlN0ZXAgNC4gVGFwIHRoZSBhcHAgYW5kIHNlbGVjdCBhbiBvcHRpb246PC9wPlxuXHQ8dWw+XG5cdFx0PGxpPk5ldmVyOiBQcmV2ZW50cyBhY2Nlc3MgdG8gTG9jYXRpb24gU2VydmljZXMgaW5mb3JtYXRpb24uPC9saT5cblx0XHQ8bGk+QXNrIE5leHQgVGltZTogVGhpcyBhbGxvd3MgeW91IHRvIGNob29zZSBBbHdheXMgV2hpbGUgVXNpbmcgQXBwLCBBbGxvdyBPbmNlLCBvciBEb24ndCBBbGxvdy48L2xpPlxuXHRcdDxsaT5XaGlsZSBVc2luZyB0aGUgQXBwOiBBbGxvd3MgYWNjZXNzIHRvIExvY2F0aW9uIFNlcnZpY2VzIG9ubHkgd2hlbiB0aGUgYXBwIG9yIG9uZSBvZiBpdHMgZmVhdHVyZXMgaXMgdmlzaWJsZSBvbiBzY3JlZW4uIElmIGFuIGFwcCBpcyBzZXQgdG8gV2hpbGUgVXNpbmcgdGhlIEFwcCwgeW91IG1pZ2h0IHNlZSB5b3VyIHN0YXR1cyBiYXIgdHVybiBibHVlIHdpdGggYSBtZXNzYWdlIHRoYXQgYW4gYXBwIGlzIGFjdGl2ZWx5IHVzaW5nIHlvdXIgbG9jYXRpb24uPC9saT5cblx0XHQ8bGk+QWx3YXlzOiBBbGxvd3MgYWNjZXNzIHRvIHlvdXIgbG9jYXRpb24gZXZlbiB3aGVuIHRoZSBhcHAgaXMgaW4gdGhlIGJhY2tncm91bmQuPC9saT5cblx0PC91bD5cblx0PGgzPkRpZCB5b3UgdHVybiBvZmYgbG9jYXRpb24gb24geW91ciBkZXZpY2U+PC9oMz5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8Q29tcGxldGU+WWVzLCBJIGRpZDwvQ29tcGxldGU+XG5cdFx0PENvbXBsZXRlIHN1Y2Nlc3M9e2ZhbHNlfT5ObywgSSBkaWRuJ3Q8L0NvbXBsZXRlPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbnsvaWZ9XG48QmFjay8+XG48L1RyYW5zPlxuPHN0eWxlPlxuXHRzZWN0aW9uIHtcblx0XHR3aWR0aDogMTAwJTtcblx0fVxuICAgLmJ1dHRvbi1ob2xkZXIge1xuXHR3aWR0aDogMjd2dztcblx0ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBK0RxQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBbkJMLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW5CZixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVBQLEdBQUssT0FBRSxDQUFDO2dCQVVILEdBQUssT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0ExQlgsUUFBUSxHQUFHLHFCQUFxQjs7O0NBUXRDLE9BQU87NkJBQWEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
