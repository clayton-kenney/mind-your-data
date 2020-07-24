import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, T as onMount, v as validate_slots, a as space, w as create_component, q as query_selector_all, b as detach_dev, c as claim_space, x as claim_component, l as insert_dev, y as mount_component, B as transition_in, z as transition_out, E as destroy_component, P as set_store_value, G as group_outros, A as check_outros, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.2b038edb.js';
import './index.42fd54b0.js';
import { T as TransHelp, C as Complete, B as Back } from './Back.98efb870.js';
import { c as count, s as step, q as quizSteps } from './store.234ad242.js';
import { N as Next } from './Next.1659d442.js';

/* src/routes/quiz/q7.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q7.svelte";

// (47:0) {:else}
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
			add_location(h2, file, 48, 1, 2344);
			add_location(p0, file, 49, 1, 2394);
			add_location(p1, file, 50, 1, 2456);
			add_location(p2, file, 51, 1, 2512);
			add_location(p3, file, 52, 1, 2557);
			add_location(li0, file, 54, 2, 2614);
			add_location(li1, file, 55, 2, 2682);
			add_location(li2, file, 56, 2, 2786);
			add_location(li3, file, 57, 2, 3057);
			add_location(ul, file, 53, 1, 2607);
			add_location(h3, file, 59, 1, 3153);
			attr_dev(div, "class", "button-holder svelte-1y4us4j");
			add_location(div, file, 60, 1, 3205);
			attr_dev(section, "class", "svelte-1y4us4j");
			add_location(section, file, 47, 0, 2333);
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
		source: "(47:0) {:else}",
		ctx
	});

	return block;
}

// (28:19) 
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
			add_location(h2, file, 29, 1, 1339);
			add_location(p0, file, 30, 1, 1381);
			add_location(p1, file, 31, 1, 1443);
			add_location(p2, file, 32, 1, 1499);
			add_location(p3, file, 33, 1, 1544);
			add_location(li0, file, 35, 2, 1601);
			add_location(li1, file, 36, 2, 1669);
			add_location(li2, file, 37, 2, 1773);
			add_location(li3, file, 38, 2, 2044);
			add_location(ul, file, 34, 1, 1594);
			add_location(h3, file, 40, 1, 2140);
			attr_dev(div, "class", "button-holder svelte-1y4us4j");
			add_location(div, file, 41, 1, 2192);
			attr_dev(section, "class", "svelte-1y4us4j");
			add_location(section, file, 28, 0, 1328);
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
		source: "(28:19) ",
		ctx
	});

	return block;
}

// (18:0) {#if $step==0}
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
	let next0;
	let t6;
	let next1;
	let current;

	next0 = new Next({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	next1 = new Next({
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
			create_component(next0.$$.fragment);
			t6 = space();
			create_component(next1.$$.fragment);
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
			claim_component(next0.$$.fragment, div_nodes);
			t6 = claim_space(div_nodes);
			claim_component(next1.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 19, 1, 664);
			add_location(p, file, 20, 2, 694);
			add_location(h3, file, 21, 1, 1168);
			attr_dev(div, "class", "button-holder svelte-1y4us4j");
			add_location(div, file, 22, 2, 1210);
			attr_dev(section, "class", "svelte-1y4us4j");
			add_location(section, file, 18, 0, 653);
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
			mount_component(next0, div, null);
			append_dev(div, t6);
			mount_component(next1, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(next0.$$.fragment, local);
			transition_in(next1.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(next0.$$.fragment, local);
			transition_out(next1.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(next0);
			destroy_component(next1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(18:0) {#if $step==0}",
		ctx
	});

	return block;
}

// (62:2) <Complete>
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
		source: "(62:2) <Complete>",
		ctx
	});

	return block;
}

// (63:2) <Complete success={false}>
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
		source: "(63:2) <Complete success={false}>",
		ctx
	});

	return block;
}

// (43:2) <Complete>
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
		source: "(43:2) <Complete>",
		ctx
	});

	return block;
}

// (44:2) <Complete success={false}>
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
		source: "(44:2) <Complete success={false}>",
		ctx
	});

	return block;
}

// (24:3) <Next>
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
		source: "(24:3) <Next>",
		ctx
	});

	return block;
}

// (25:3) <Next n={2}>
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
		source: "(25:3) <Next n={2}>",
		ctx
	});

	return block;
}

// (17:0) <Trans>
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
		source: "(17:0) <Trans>",
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
		Next,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTcuZTU0ZmIxNDcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBOZXh0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmV4dC5zdmVsdGUnIC8vc2V0IDxOZXh0IHE9ezJ9PiB0byBza2lwIG11bHRpcGxlIHN0ZXBzXG5cdGltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0aW1wb3J0IEJhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CYWNrLnN2ZWx0ZSdcblxuXHQvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcbiAgICBvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxfSk7XG5cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+TG9jYXRpb24gVHJhY2tpbmc8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbnsjaWYgJHN0ZXA9PTB9XG48c2VjdGlvbj5cblx0PGgyPkxvY2F0aW9uIFRyYWNraW5nPC9oMj4gXG5cdFx0PHA+UGVydmFzaXZlIHRyYWNraW5nIG9mIGxvY2F0aW9uIGF0IHRoZSB2ZXJ5IGxlYXN0IHJpc2tzIHB1dHRpbmcgeW91IGF0IGEgZGlzYWR2YW50YWdlIGFzIGEgY29uc3VtZXIuIENlcnRhaW5seSBpZiB5b3UgbGl2ZSBzb21ld2hlcmUgd2l0aG91dCBhIHByb3BlciByZWd1bGF0b3J5IGZyYW1ld29yayBmb3IgcHJpdmFjeS4gSXTigJlzIGFsc28gd29ydGggYmVhcmluZyBpbiBtaW5kIGhvdyBsYXggdGVjaCBnaWFudHMgY2FuIGJlIHdoZXJlIGxvY2F0aW9uIHByaXZhY3kgaXMgY29uY2VybmVkIOKAlCB3aGV0aGVyIGl04oCZcyBVYmVy4oCZcyBpbmZhbW91cyDigJhnb2Qgdmlld+KAmSB0b29sIG9yIFNuYXBjaGF0IGxlYWtpbmcgc2Nob29sa2lkc+KAmSBsb2NhdGlvbiBvciBTdHJhdmEgYWNjaWRlbnRhbGx5IHJldmVhbGluZyB0aGUgbG9jYXRpb25zIG9mIG1pbGl0YXJ5IGJhc2VzLiBUaGVpciByZWNvcmQgaXMgcHJldHR5IHRlcnJpYmxlLjwvcD5cdFxuXHQ8aDM+V2hhdCBtb2JpbGUgZGV2aWNlIGRvIHlvdSB1c2U/PC9oMz5cblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdFx0PE5leHQ+aU9TPC9OZXh0PlxuXHRcdFx0PE5leHQgbj17Mn0+QW5kcm9pZDwvTmV4dD5cblx0XHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZSBpZiAkc3RlcD09MX1cbjxzZWN0aW9uPlxuXHQ8aDI+VHVybiBsb2NhaXRvbiBvZmYgb24gSU9TIGRldmljZTwvaDI+XG5cdDxwPlN0ZXAgMS4gR28gdG8gU2V0dGluZ3MgPiBQcml2YWN5ID4gTG9jYXRpb24gU2VydmljZXMuPC9wPlxuXHQ8cD5TdGVwIDIuIE1ha2Ugc3VyZSB0aGF0IExvY2F0aW9uIFNlcnZpY2VzIGlzIG9uLjwvcD5cblx0PHA+U3RlcCAzLiBTY3JvbGwgZG93biB0byBmaW5kIHRoZSBhcHAuPC9wPlxuXHQ8cD5TdGVwIDQuIFRhcCB0aGUgYXBwIGFuZCBzZWxlY3QgYW4gb3B0aW9uOjwvcD5cblx0PHVsPlxuXHRcdDxsaT5OZXZlcjogUHJldmVudHMgYWNjZXNzIHRvIExvY2F0aW9uIFNlcnZpY2VzIGluZm9ybWF0aW9uLjwvbGk+XG5cdFx0PGxpPkFzayBOZXh0IFRpbWU6IFRoaXMgYWxsb3dzIHlvdSB0byBjaG9vc2UgQWx3YXlzIFdoaWxlIFVzaW5nIEFwcCwgQWxsb3cgT25jZSwgb3IgRG9uJ3QgQWxsb3cuPC9saT5cblx0XHQ8bGk+V2hpbGUgVXNpbmcgdGhlIEFwcDogQWxsb3dzIGFjY2VzcyB0byBMb2NhdGlvbiBTZXJ2aWNlcyBvbmx5IHdoZW4gdGhlIGFwcCBvciBvbmUgb2YgaXRzIGZlYXR1cmVzIGlzIHZpc2libGUgb24gc2NyZWVuLiBJZiBhbiBhcHAgaXMgc2V0IHRvIFdoaWxlIFVzaW5nIHRoZSBBcHAsIHlvdSBtaWdodCBzZWUgeW91ciBzdGF0dXMgYmFyIHR1cm4gYmx1ZSB3aXRoIGEgbWVzc2FnZSB0aGF0IGFuIGFwcCBpcyBhY3RpdmVseSB1c2luZyB5b3VyIGxvY2F0aW9uLjwvbGk+XG5cdFx0PGxpPkFsd2F5czogQWxsb3dzIGFjY2VzcyB0byB5b3VyIGxvY2F0aW9uIGV2ZW4gd2hlbiB0aGUgYXBwIGlzIGluIHRoZSBiYWNrZ3JvdW5kLjwvbGk+XG5cdDwvdWw+XG5cdDxoMz5EaWQgeW91IHR1cm4gb2ZmIGxvY2F0aW9uIG9uIHlvdXIgZGV2aWNlPjwvaDM+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PENvbXBsZXRlPlllcywgSSBkaWQ8L0NvbXBsZXRlPlxuXHRcdDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0+Tm8sIEkgZGlkbid0PC9Db21wbGV0ZT5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2V9XG48c2VjdGlvbj5cblx0PGgyPlR1cm4gbG9jYWl0b24gb2ZmIG9uIGFuZCBBbmRyb2lkIERldmljZTwvaDI+XG5cdDxwPlN0ZXAgMS4gR28gdG8gU2V0dGluZ3MgPiBQcml2YWN5ID4gTG9jYXRpb24gU2VydmljZXMuPC9wPlxuXHQ8cD5TdGVwIDIuIE1ha2Ugc3VyZSB0aGF0IExvY2F0aW9uIFNlcnZpY2VzIGlzIG9uLjwvcD5cblx0PHA+U3RlcCAzLiBTY3JvbGwgZG93biB0byBmaW5kIHRoZSBhcHAuPC9wPlxuXHQ8cD5TdGVwIDQuIFRhcCB0aGUgYXBwIGFuZCBzZWxlY3QgYW4gb3B0aW9uOjwvcD5cblx0PHVsPlxuXHRcdDxsaT5OZXZlcjogUHJldmVudHMgYWNjZXNzIHRvIExvY2F0aW9uIFNlcnZpY2VzIGluZm9ybWF0aW9uLjwvbGk+XG5cdFx0PGxpPkFzayBOZXh0IFRpbWU6IFRoaXMgYWxsb3dzIHlvdSB0byBjaG9vc2UgQWx3YXlzIFdoaWxlIFVzaW5nIEFwcCwgQWxsb3cgT25jZSwgb3IgRG9uJ3QgQWxsb3cuPC9saT5cblx0XHQ8bGk+V2hpbGUgVXNpbmcgdGhlIEFwcDogQWxsb3dzIGFjY2VzcyB0byBMb2NhdGlvbiBTZXJ2aWNlcyBvbmx5IHdoZW4gdGhlIGFwcCBvciBvbmUgb2YgaXRzIGZlYXR1cmVzIGlzIHZpc2libGUgb24gc2NyZWVuLiBJZiBhbiBhcHAgaXMgc2V0IHRvIFdoaWxlIFVzaW5nIHRoZSBBcHAsIHlvdSBtaWdodCBzZWUgeW91ciBzdGF0dXMgYmFyIHR1cm4gYmx1ZSB3aXRoIGEgbWVzc2FnZSB0aGF0IGFuIGFwcCBpcyBhY3RpdmVseSB1c2luZyB5b3VyIGxvY2F0aW9uLjwvbGk+XG5cdFx0PGxpPkFsd2F5czogQWxsb3dzIGFjY2VzcyB0byB5b3VyIGxvY2F0aW9uIGV2ZW4gd2hlbiB0aGUgYXBwIGlzIGluIHRoZSBiYWNrZ3JvdW5kLjwvbGk+XG5cdDwvdWw+XG5cdDxoMz5EaWQgeW91IHR1cm4gb2ZmIGxvY2F0aW9uIG9uIHlvdXIgZGV2aWNlPjwvaDM+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PENvbXBsZXRlPlllcywgSSBkaWQ8L0NvbXBsZXRlPlxuXHRcdDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0+Tm8sIEkgZGlkbid0PC9Db21wbGV0ZT5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuPEJhY2svPlxuPC9UcmFucz5cbjxzdHlsZT5cblx0c2VjdGlvbiB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUE4RHFCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7YUFuQkwsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BbkJkLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBUFIsR0FBSyxPQUFFLENBQUM7Z0JBVUgsR0FBSyxPQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXpCWCxRQUFRLEdBQUcscUJBQXFCOzs7Q0FRbkMsT0FBTzs2QkFBYSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
