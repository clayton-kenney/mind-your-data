import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, v as validate_slots, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, w as group_outros, x as check_outros, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev } from './client.8c3d41c5.js';
import './index.44998259.js';
import './index.51c137df.js';
import { T as TransHelp } from './TransHelp.fa98e301.js';
import { c as count, s as step, q as quizSteps } from './store.18336152.js';
import { C as Complete, B as Back } from './Back.a3e35ddd.js';
import { B as Btn } from './Btn.0118243b.js';

/* src/routes/quiz/q8.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q8.svelte";

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
			t18 = text("Did you turn off location on your device");
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
			t18 = claim_text(h3_nodes, "Did you turn off location on your device");
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
			add_location(h2, file, 49, 1, 2365);
			add_location(p0, file, 50, 1, 2415);
			add_location(p1, file, 51, 1, 2477);
			add_location(p2, file, 52, 1, 2533);
			add_location(p3, file, 53, 1, 2578);
			add_location(li0, file, 55, 2, 2635);
			add_location(li1, file, 56, 2, 2703);
			add_location(li2, file, 57, 2, 2807);
			add_location(li3, file, 58, 2, 3078);
			add_location(ul, file, 54, 1, 2628);
			add_location(h3, file, 60, 1, 3174);
			attr_dev(div, "class", "button-holder svelte-1y4us4j");
			add_location(div, file, 61, 1, 3225);
			attr_dev(section, "class", "svelte-1y4us4j");
			add_location(section, file, 48, 0, 2354);
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
			t18 = text("Did you turn off location on your device");
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
			t18 = claim_text(h3_nodes, "Did you turn off location on your device");
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
			add_location(h2, file, 30, 1, 1361);
			add_location(p0, file, 31, 1, 1403);
			add_location(p1, file, 32, 1, 1465);
			add_location(p2, file, 33, 1, 1521);
			add_location(p3, file, 34, 1, 1566);
			add_location(li0, file, 36, 2, 1623);
			add_location(li1, file, 37, 2, 1691);
			add_location(li2, file, 38, 2, 1795);
			add_location(li3, file, 39, 2, 2066);
			add_location(ul, file, 35, 1, 1616);
			add_location(h3, file, 41, 1, 2162);
			attr_dev(div, "class", "button-holder svelte-1y4us4j");
			add_location(div, file, 42, 1, 2213);
			attr_dev(section, "class", "svelte-1y4us4j");
			add_location(section, file, 29, 0, 1350);
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
	let h1;
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
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h1 = element("h1");
			t0 = text("Is your phone tracking your every move? Probably.");
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
			h1 = claim_element(section_nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Is your phone tracking your every move? Probably.");
			h1_nodes.forEach(detach_dev);
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
			add_location(h1, file, 20, 1, 663);
			add_location(p, file, 21, 2, 725);
			add_location(h3, file, 22, 1, 1200);
			attr_dev(div, "class", "button-holder svelte-1y4us4j");
			add_location(div, file, 23, 2, 1242);
			attr_dev(section, "class", "svelte-1y4us4j");
			add_location(section, file, 19, 0, 652);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h1);
			append_dev(h1, t0);
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

// (26:3) <Btn>
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
		source: "(26:3) <Btn>",
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q8> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q8", $$slots, []);

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

class Q8 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q8",
			options,
			id: create_fragment.name
		});
	}
}

export default Q8;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTguMzBjNmM1ODguanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xOC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblx0Ly9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG5cdG9uTW91bnQoYXN5bmMoKSA9PiB7JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG5cdFx0fSk7XG5cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+TG9jYXRpb24gVHJhY2tpbmc8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbnsjaWYgJHN0ZXA9PTB9XG48c2VjdGlvbj5cblx0PGgxPklzIHlvdXIgcGhvbmUgdHJhY2tpbmcgeW91ciBldmVyeSBtb3ZlPyBQcm9iYWJseS48L2gxPiBcblx0XHQ8cD5QZXJ2YXNpdmUgdHJhY2tpbmcgb2YgbG9jYXRpb24gYXQgdGhlIHZlcnkgbGVhc3Qgcmlza3MgcHV0dGluZyB5b3UgYXQgYSBkaXNhZHZhbnRhZ2UgYXMgYSBjb25zdW1lci4gQ2VydGFpbmx5IGlmIHlvdSBsaXZlIHNvbWV3aGVyZSB3aXRob3V0IGEgcHJvcGVyIHJlZ3VsYXRvcnkgZnJhbWV3b3JrIGZvciBwcml2YWN5LiBJdOKAmXMgYWxzbyB3b3J0aCBiZWFyaW5nIGluIG1pbmQgaG93IGxheCB0ZWNoIGdpYW50cyBjYW4gYmUgd2hlcmUgbG9jYXRpb24gcHJpdmFjeSBpcyBjb25jZXJuZWQg4oCUIHdoZXRoZXIgaXTigJlzIFViZXLigJlzIGluZmFtb3VzIOKAmGdvZCB2aWV34oCZIHRvb2wgb3IgU25hcGNoYXQgbGVha2luZyBzY2hvb2xraWRz4oCZIGxvY2F0aW9uIG9yIFN0cmF2YSBhY2NpZGVudGFsbHkgcmV2ZWFsaW5nIHRoZSBsb2NhdGlvbnMgb2YgbWlsaXRhcnkgYmFzZXMuIFRoZWlyIHJlY29yZCBpcyBwcmV0dHkgdGVycmlibGUuIDwvcD5cdFxuXHQ8aDM+V2hhdCBtb2JpbGUgZGV2aWNlIGRvIHlvdSB1c2U/PC9oMz5cblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdFx0PEJ0bj5pT1M8L0J0bj5cblx0XHRcdDxCdG4+QW5kcm9pZDwvQnRuPlxuXHRcdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlIGlmICRzdGVwPT0xfVxuPHNlY3Rpb24+XG5cdDxoMj5UdXJuIGxvY2FpdG9uIG9mZiBvbiBJT1MgZGV2aWNlPC9oMj5cblx0PHA+U3RlcCAxLiBHbyB0byBTZXR0aW5ncyA+IFByaXZhY3kgPiBMb2NhdGlvbiBTZXJ2aWNlcy48L3A+XG5cdDxwPlN0ZXAgMi4gTWFrZSBzdXJlIHRoYXQgTG9jYXRpb24gU2VydmljZXMgaXMgb24uPC9wPlxuXHQ8cD5TdGVwIDMuIFNjcm9sbCBkb3duIHRvIGZpbmQgdGhlIGFwcC48L3A+XG5cdDxwPlN0ZXAgNC4gVGFwIHRoZSBhcHAgYW5kIHNlbGVjdCBhbiBvcHRpb246PC9wPlxuXHQ8dWw+XG5cdFx0PGxpPk5ldmVyOiBQcmV2ZW50cyBhY2Nlc3MgdG8gTG9jYXRpb24gU2VydmljZXMgaW5mb3JtYXRpb24uPC9saT5cblx0XHQ8bGk+QXNrIE5leHQgVGltZTogVGhpcyBhbGxvd3MgeW91IHRvIGNob29zZSBBbHdheXMgV2hpbGUgVXNpbmcgQXBwLCBBbGxvdyBPbmNlLCBvciBEb24ndCBBbGxvdy48L2xpPlxuXHRcdDxsaT5XaGlsZSBVc2luZyB0aGUgQXBwOiBBbGxvd3MgYWNjZXNzIHRvIExvY2F0aW9uIFNlcnZpY2VzIG9ubHkgd2hlbiB0aGUgYXBwIG9yIG9uZSBvZiBpdHMgZmVhdHVyZXMgaXMgdmlzaWJsZSBvbiBzY3JlZW4uIElmIGFuIGFwcCBpcyBzZXQgdG8gV2hpbGUgVXNpbmcgdGhlIEFwcCwgeW91IG1pZ2h0IHNlZSB5b3VyIHN0YXR1cyBiYXIgdHVybiBibHVlIHdpdGggYSBtZXNzYWdlIHRoYXQgYW4gYXBwIGlzIGFjdGl2ZWx5IHVzaW5nIHlvdXIgbG9jYXRpb24uPC9saT5cblx0XHQ8bGk+QWx3YXlzOiBBbGxvd3MgYWNjZXNzIHRvIHlvdXIgbG9jYXRpb24gZXZlbiB3aGVuIHRoZSBhcHAgaXMgaW4gdGhlIGJhY2tncm91bmQuPC9saT5cblx0PC91bD5cblx0PGgzPkRpZCB5b3UgdHVybiBvZmYgbG9jYXRpb24gb24geW91ciBkZXZpY2U8L2gzPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxDb21wbGV0ZT5ZZXMsIEkgZGlkPC9Db21wbGV0ZT5cblx0XHQ8Q29tcGxldGUgc3VjY2Vzcz17ZmFsc2V9Pk5vLCBJIGRpZG4ndDwvQ29tcGxldGU+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlfVxuPHNlY3Rpb24+XG5cdDxoMj5UdXJuIGxvY2FpdG9uIG9mZiBvbiBhbmQgQW5kcm9pZCBEZXZpY2U8L2gyPlxuXHQ8cD5TdGVwIDEuIEdvIHRvIFNldHRpbmdzID4gUHJpdmFjeSA+IExvY2F0aW9uIFNlcnZpY2VzLjwvcD5cblx0PHA+U3RlcCAyLiBNYWtlIHN1cmUgdGhhdCBMb2NhdGlvbiBTZXJ2aWNlcyBpcyBvbi48L3A+XG5cdDxwPlN0ZXAgMy4gU2Nyb2xsIGRvd24gdG8gZmluZCB0aGUgYXBwLjwvcD5cblx0PHA+U3RlcCA0LiBUYXAgdGhlIGFwcCBhbmQgc2VsZWN0IGFuIG9wdGlvbjo8L3A+XG5cdDx1bD5cblx0XHQ8bGk+TmV2ZXI6IFByZXZlbnRzIGFjY2VzcyB0byBMb2NhdGlvbiBTZXJ2aWNlcyBpbmZvcm1hdGlvbi48L2xpPlxuXHRcdDxsaT5Bc2sgTmV4dCBUaW1lOiBUaGlzIGFsbG93cyB5b3UgdG8gY2hvb3NlIEFsd2F5cyBXaGlsZSBVc2luZyBBcHAsIEFsbG93IE9uY2UsIG9yIERvbid0IEFsbG93LjwvbGk+XG5cdFx0PGxpPldoaWxlIFVzaW5nIHRoZSBBcHA6IEFsbG93cyBhY2Nlc3MgdG8gTG9jYXRpb24gU2VydmljZXMgb25seSB3aGVuIHRoZSBhcHAgb3Igb25lIG9mIGl0cyBmZWF0dXJlcyBpcyB2aXNpYmxlIG9uIHNjcmVlbi4gSWYgYW4gYXBwIGlzIHNldCB0byBXaGlsZSBVc2luZyB0aGUgQXBwLCB5b3UgbWlnaHQgc2VlIHlvdXIgc3RhdHVzIGJhciB0dXJuIGJsdWUgd2l0aCBhIG1lc3NhZ2UgdGhhdCBhbiBhcHAgaXMgYWN0aXZlbHkgdXNpbmcgeW91ciBsb2NhdGlvbi48L2xpPlxuXHRcdDxsaT5BbHdheXM6IEFsbG93cyBhY2Nlc3MgdG8geW91ciBsb2NhdGlvbiBldmVuIHdoZW4gdGhlIGFwcCBpcyBpbiB0aGUgYmFja2dyb3VuZC48L2xpPlxuXHQ8L3VsPlxuXHQ8aDM+RGlkIHlvdSB0dXJuIG9mZiBsb2NhdGlvbiBvbiB5b3VyIGRldmljZTwvaDM+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PENvbXBsZXRlPlllcywgSSBkaWQ8L0NvbXBsZXRlPlxuXHRcdDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0+Tm8sIEkgZGlkbid0PC9Db21wbGV0ZT5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuPEJhY2svPlxuPC9UcmFucz5cbjxzdHlsZT5cblx0c2VjdGlvbiB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQStEcUIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzthQW5CTCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBMUJyQixHQUFLLE9BQUUsQ0FBQztnQkFVSCxHQUFLLE9BQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BMUJYLFFBQVEsR0FBRyxxQkFBcUI7OztDQVF0QyxPQUFPOzZCQUFhLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
