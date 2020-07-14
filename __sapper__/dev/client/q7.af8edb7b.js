import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, p as globals, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, k as add_location, l as insert_dev, A as add_render_callback, B as create_bidirectional_transition, t as text, h as claim_text, m as append_dev, j as attr_dev, R as listen_dev, n as noop, X as toggle_class, T as run_all } from './client.7612900a.js';
import { s as slide, q as quintOut, a as quintIn } from './index.42fd54b0.js';

/* src/routes/quiz/q7.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q7.svelte";

// (95:0) {:else}
function create_else_block(ctx) {
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
			t0 = text("Hoooray!");
			t1 = space();
			p = element("p");
			t2 = text("One less way people can snoop on your privacy.");
			t3 = space();
			button = element("button");
			t4 = text("Next Challenge");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Hoooray!");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "One less way people can snoop on your privacy.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			button = claim_element(section_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Next Challenge");
			button_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 96, 2, 3599);
			add_location(p, file, 97, 2, 3619);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 98, 3, 3676);
			add_location(section, file, 95, 1, 3587);
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
				dispose = listen_dev(button, "click", /*complete*/ ctx[2], false, false, false);
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
		id: create_else_block.name,
		type: "else",
		source: "(95:0) {:else}",
		ctx
	});

	return block;
}

// (45:15) 
function create_if_block_1(ctx) {
	let section;
	let div0;
	let p0;
	let t0;
	let t1;
	let t2;
	let hr0;
	let t3;
	let div1;
	let p1;
	let t4;
	let t5;
	let t6;
	let hr1;
	let t7;
	let div2;
	let p2;
	let t8;
	let t9;
	let t10;
	let hr2;
	let t11;
	let div3;
	let h3;
	let t12;
	let t13;
	let button0;
	let t14;
	let t15;
	let button1;
	let t16;
	let mounted;
	let dispose;
	let if_block0 = /*current*/ ctx[1] === "amazon" && create_if_block_4(ctx);
	let if_block1 = /*current*/ ctx[1] === "google" && create_if_block_3(ctx);
	let if_block2 = /*current*/ ctx[1] === "apple" && create_if_block_2(ctx);

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			p0 = element("p");
			t0 = text("Amazon Alexa");
			t1 = space();
			if (if_block0) if_block0.c();
			t2 = space();
			hr0 = element("hr");
			t3 = space();
			div1 = element("div");
			p1 = element("p");
			t4 = text("Google Assistant");
			t5 = space();
			if (if_block1) if_block1.c();
			t6 = space();
			hr1 = element("hr");
			t7 = space();
			div2 = element("div");
			p2 = element("p");
			t8 = text("Apple Siri");
			t9 = space();
			if (if_block2) if_block2.c();
			t10 = space();
			hr2 = element("hr");
			t11 = space();
			div3 = element("div");
			h3 = element("h3");
			t12 = text("Did you setup privacy mode");
			t13 = space();
			button0 = element("button");
			t14 = text("Yes, I Did");
			t15 = space();
			button1 = element("button");
			t16 = text("No I don't want to");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", {});
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "Amazon Alexa");
			p0_nodes.forEach(detach_dev);
			t1 = claim_space(div0_nodes);
			if (if_block0) if_block0.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t2 = claim_space(section_nodes);
			hr0 = claim_element(section_nodes, "HR", {});
			t3 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", {});
			var div1_nodes = children(div1);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Google Assistant");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div1_nodes);
			if (if_block1) if_block1.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t6 = claim_space(section_nodes);
			hr1 = claim_element(section_nodes, "HR", {});
			t7 = claim_space(section_nodes);
			div2 = claim_element(section_nodes, "DIV", {});
			var div2_nodes = children(div2);
			p2 = claim_element(div2_nodes, "P", {});
			var p2_nodes = children(p2);
			t8 = claim_text(p2_nodes, "Apple Siri");
			p2_nodes.forEach(detach_dev);
			t9 = claim_space(div2_nodes);
			if (if_block2) if_block2.l(div2_nodes);
			div2_nodes.forEach(detach_dev);
			t10 = claim_space(section_nodes);
			hr2 = claim_element(section_nodes, "HR", {});
			t11 = claim_space(section_nodes);
			div3 = claim_element(section_nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			h3 = claim_element(div3_nodes, "H3", {});
			var h3_nodes = children(h3);
			t12 = claim_text(h3_nodes, "Did you setup privacy mode");
			h3_nodes.forEach(detach_dev);
			t13 = claim_space(div3_nodes);
			button0 = claim_element(div3_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t14 = claim_text(button0_nodes, "Yes, I Did");
			button0_nodes.forEach(detach_dev);
			t15 = claim_space(div3_nodes);
			button1 = claim_element(div3_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t16 = claim_text(button1_nodes, "No I don't want to");
			button1_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p0, file, 48, 2, 1693);
			toggle_class(div0, "active", /*current*/ ctx[1] === "amazon");
			add_location(div0, file, 46, 1, 1608);
			add_location(hr0, file, 59, 1, 2194);
			add_location(p1, file, 62, 2, 2285);
			toggle_class(div1, "active", /*current*/ ctx[1] === "google");
			add_location(div1, file, 60, 1, 2200);
			add_location(hr1, file, 73, 1, 2790);
			add_location(p2, file, 76, 2, 2879);
			toggle_class(div2, "active", /*current*/ ctx[1] === "apple");
			add_location(div2, file, 74, 1, 2796);
			add_location(hr2, file, 87, 1, 3377);
			add_location(h3, file, 89, 2, 3413);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 90, 2, 3451);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 91, 2, 3501);
			attr_dev(div3, "class", "button-holder svelte-9jf7df");
			add_location(div3, file, 88, 1, 3383);
			add_location(section, file, 45, 0, 1597);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(div0, p0);
			append_dev(p0, t0);
			append_dev(div0, t1);
			if (if_block0) if_block0.m(div0, null);
			append_dev(section, t2);
			append_dev(section, hr0);
			append_dev(section, t3);
			append_dev(section, div1);
			append_dev(div1, p1);
			append_dev(p1, t4);
			append_dev(div1, t5);
			if (if_block1) if_block1.m(div1, null);
			append_dev(section, t6);
			append_dev(section, hr1);
			append_dev(section, t7);
			append_dev(section, div2);
			append_dev(div2, p2);
			append_dev(p2, t8);
			append_dev(div2, t9);
			if (if_block2) if_block2.m(div2, null);
			append_dev(section, t10);
			append_dev(section, hr2);
			append_dev(section, t11);
			append_dev(section, div3);
			append_dev(div3, h3);
			append_dev(h3, t12);
			append_dev(div3, t13);
			append_dev(div3, button0);
			append_dev(button0, t14);
			append_dev(div3, t15);
			append_dev(div3, button1);
			append_dev(button1, t16);

			if (!mounted) {
				dispose = [
					listen_dev(div0, "click", /*click_handler*/ ctx[6], false, false, false),
					listen_dev(div1, "click", /*click_handler_1*/ ctx[7], false, false, false),
					listen_dev(div2, "click", /*click_handler_2*/ ctx[8], false, false, false),
					listen_dev(button0, "click", /*complete*/ ctx[2], false, false, false),
					listen_dev(button1, "click", /*incomplete*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (/*current*/ ctx[1] === "amazon") {
				if (if_block0) ; else {
					if_block0 = create_if_block_4(ctx);
					if_block0.c();
					if_block0.m(div0, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty & /*current*/ 2) {
				toggle_class(div0, "active", /*current*/ ctx[1] === "amazon");
			}

			if (/*current*/ ctx[1] === "google") {
				if (if_block1) ; else {
					if_block1 = create_if_block_3(ctx);
					if_block1.c();
					if_block1.m(div1, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*current*/ 2) {
				toggle_class(div1, "active", /*current*/ ctx[1] === "google");
			}

			if (/*current*/ ctx[1] === "apple") {
				if (if_block2) ; else {
					if_block2 = create_if_block_2(ctx);
					if_block2.c();
					if_block2.m(div2, null);
				}
			} else if (if_block2) {
				if_block2.d(1);
				if_block2 = null;
			}

			if (dirty & /*current*/ 2) {
				toggle_class(div2, "active", /*current*/ ctx[1] === "apple");
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			if (if_block2) if_block2.d();
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

// (34:0) {#if q==0}
function create_if_block(ctx) {
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
	let div;
	let button0;
	let t6;
	let t7;
	let button1;
	let t8;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Internet of things( Alexa, Home devices)");
			t1 = space();
			p0 = element("p");
			t2 = text("It should be clear by now that your daily interactions technology, let alone your smart speaker are anything but private. A series of investigative reports have shown that other people are reviewing recordings or transcripts of your conversations.");
			t3 = space();
			p1 = element("p");
			t4 = text("The three big makers of smart speakers—Amazon, Apple, and Google—say they do this to improve the device’s performance, not for targeting ads. But privacy advocates argue that, without prior notice, any listening from employees and contractors is unfair to consumers.");
			t5 = space();
			div = element("div");
			button0 = element("button");
			t6 = text("I own a smart speaker");
			t7 = space();
			button1 = element("button");
			t8 = text("I don't own a smart speaker");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Internet of things( Alexa, Home devices)");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "It should be clear by now that your daily interactions technology, let alone your smart speaker are anything but private. A series of investigative reports have shown that other people are reviewing recordings or transcripts of your conversations.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "The three big makers of smart speakers—Amazon, Apple, and Google—say they do this to improve the device’s performance, not for targeting ads. But privacy advocates argue that, without prior notice, any listening from employees and contractors is unfair to consumers.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t6 = claim_text(button0_nodes, "I own a smart speaker");
			button0_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t8 = claim_text(button1_nodes, "I don't own a smart speaker");
			button1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 35, 1, 819);
			add_location(p0, file, 36, 1, 871);
			add_location(p1, file, 38, 1, 1130);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 40, 2, 1435);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 41, 2, 1495);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 39, 1, 1405);
			add_location(section, file, 34, 0, 808);
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
			append_dev(section, div);
			append_dev(div, button0);
			append_dev(button0, t6);
			append_dev(div, t7);
			append_dev(div, button1);
			append_dev(button1, t8);

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*advance*/ ctx[4], false, false, false),
					listen_dev(button1, "click", /*advanceTwo*/ ctx[5], false, false, false)
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
		id: create_if_block.name,
		type: "if",
		source: "(34:0) {#if q==0}",
		ctx
	});

	return block;
}

// (50:2) {#if current==='amazon'}
function create_if_block_4(ctx) {
	let ul;
	let li0;
	let t0;
	let t1;
	let li1;
	let t2;
	let t3;
	let li2;
	let t4;
	let t5;
	let li3;
	let t6;

	const block = {
		c: function create() {
			ul = element("ul");
			li0 = element("li");
			t0 = text("Step 1: Open the Alexa app on your smartphone and tap the menu button on the top-left of the screen.");
			t1 = space();
			li1 = element("li");
			t2 = text("Step 2: Select Settings > Alexa Privacy > Manage How Your Data Improves Alexa.");
			t3 = space();
			li2 = element("li");
			t4 = text("Step 3: Switch off the toggle next to Help Improve Amazon Services and Develop New Features.");
			t5 = space();
			li3 = element("li");
			t6 = text("Step 4: Then switch off the toggle next to your name under Use Messages to Improve Transcriptions.");
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "Step 1: Open the Alexa app on your smartphone and tap the menu button on the top-left of the screen.");
			li0_nodes.forEach(detach_dev);
			t1 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t2 = claim_text(li1_nodes, "Step 2: Select Settings > Alexa Privacy > Manage How Your Data Improves Alexa.");
			li1_nodes.forEach(detach_dev);
			t3 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t4 = claim_text(li2_nodes, "Step 3: Switch off the toggle next to Help Improve Amazon Services and Develop New Features.");
			li2_nodes.forEach(detach_dev);
			t5 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t6 = claim_text(li3_nodes, "Step 4: Then switch off the toggle next to your name under Use Messages to Improve Transcriptions.");
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 51, 3, 1750);
			add_location(li1, file, 52, 3, 1863);
			add_location(li2, file, 53, 3, 1954);
			add_location(li3, file, 54, 3, 2059);
			add_location(ul, file, 50, 2, 1742);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, t0);
			append_dev(ul, t1);
			append_dev(ul, li1);
			append_dev(li1, t2);
			append_dev(ul, t3);
			append_dev(ul, li2);
			append_dev(li2, t4);
			append_dev(ul, t5);
			append_dev(ul, li3);
			append_dev(li3, t6);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_4.name,
		type: "if",
		source: "(50:2) {#if current==='amazon'}",
		ctx
	});

	return block;
}

// (64:2) {#if current==='google'}
function create_if_block_3(ctx) {
	let ul;
	let li0;
	let t0;
	let t1;
	let li1;
	let t2;
	let t3;
	let li2;
	let t4;
	let t5;
	let li3;
	let t6;

	const block = {
		c: function create() {
			ul = element("ul");
			li0 = element("li");
			t0 = text("Step 1: Open the Alexa app on your smartphone and tap the menu button on the top-left of the screen.");
			t1 = space();
			li1 = element("li");
			t2 = text("Step 2: Select Settings > Alexa Privacy > Manage How Your Data Improves Alexa.");
			t3 = space();
			li2 = element("li");
			t4 = text("Step 3: Switch off the toggle next to Help Improve Amazon Services and Develop New Features.");
			t5 = space();
			li3 = element("li");
			t6 = text("Step 4: Then switch off the toggle next to your name under Use Messages to Improve Transcriptions.");
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "Step 1: Open the Alexa app on your smartphone and tap the menu button on the top-left of the screen.");
			li0_nodes.forEach(detach_dev);
			t1 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t2 = claim_text(li1_nodes, "Step 2: Select Settings > Alexa Privacy > Manage How Your Data Improves Alexa.");
			li1_nodes.forEach(detach_dev);
			t3 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t4 = claim_text(li2_nodes, "Step 3: Switch off the toggle next to Help Improve Amazon Services and Develop New Features.");
			li2_nodes.forEach(detach_dev);
			t5 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t6 = claim_text(li3_nodes, "Step 4: Then switch off the toggle next to your name under Use Messages to Improve Transcriptions.");
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 65, 3, 2346);
			add_location(li1, file, 66, 3, 2459);
			add_location(li2, file, 67, 3, 2550);
			add_location(li3, file, 68, 3, 2655);
			add_location(ul, file, 64, 2, 2338);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, t0);
			append_dev(ul, t1);
			append_dev(ul, li1);
			append_dev(li1, t2);
			append_dev(ul, t3);
			append_dev(ul, li2);
			append_dev(li2, t4);
			append_dev(ul, t5);
			append_dev(ul, li3);
			append_dev(li3, t6);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_3.name,
		type: "if",
		source: "(64:2) {#if current==='google'}",
		ctx
	});

	return block;
}

// (78:2) {#if current==='apple'}
function create_if_block_2(ctx) {
	let ul;
	let li0;
	let t0;
	let t1;
	let li1;
	let t2;
	let t3;
	let li2;
	let t4;
	let t5;
	let li3;
	let t6;

	const block = {
		c: function create() {
			ul = element("ul");
			li0 = element("li");
			t0 = text("Step 1: Open the Alexa app on your smartphone and tap the menu button on the top-left of the screen.");
			t1 = space();
			li1 = element("li");
			t2 = text("Step 2: Select Settings > Alexa Privacy > Manage How Your Data Improves Alexa.");
			t3 = space();
			li2 = element("li");
			t4 = text("Step 3: Switch off the toggle next to Help Improve Amazon Services and Develop New Features.");
			t5 = space();
			li3 = element("li");
			t6 = text("Step 4: Then switch off the toggle next to your name under Use Messages to Improve Transcriptions.");
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "Step 1: Open the Alexa app on your smartphone and tap the menu button on the top-left of the screen.");
			li0_nodes.forEach(detach_dev);
			t1 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t2 = claim_text(li1_nodes, "Step 2: Select Settings > Alexa Privacy > Manage How Your Data Improves Alexa.");
			li1_nodes.forEach(detach_dev);
			t3 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t4 = claim_text(li2_nodes, "Step 3: Switch off the toggle next to Help Improve Amazon Services and Develop New Features.");
			li2_nodes.forEach(detach_dev);
			t5 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t6 = claim_text(li3_nodes, "Step 4: Then switch off the toggle next to your name under Use Messages to Improve Transcriptions.");
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 79, 3, 2933);
			add_location(li1, file, 80, 3, 3046);
			add_location(li2, file, 81, 3, 3137);
			add_location(li3, file, 82, 3, 3242);
			add_location(ul, file, 78, 2, 2925);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, t0);
			append_dev(ul, t1);
			append_dev(ul, li1);
			append_dev(li1, t2);
			append_dev(ul, t3);
			append_dev(ul, li2);
			append_dev(li2, t4);
			append_dev(ul, t5);
			append_dev(ul, li3);
			append_dev(li3, t6);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(78:2) {#if current==='apple'}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let div;
	let div_transition;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return create_if_block;
		if (/*q*/ ctx[0] == 1) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			t = space();
			div = element("div");
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-3r29dh\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Internet of things( Alexa, Home devices)";
			add_location(div, file, 32, 0, 723);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			insert_dev(target, div, anchor);
			if_block.m(div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div, null);
				}
			}
		},
		i: function intro(local) {
			if (current) return;

			add_render_callback(() => {
				if (!div_transition) div_transition = create_bidirectional_transition(
					div,
					slide,
					{
						delay: 100,
						duration: 400,
						easing: quintOut
					},
					true
				);

				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(
				div,
				slide,
				{
					delay: 100,
					duration: 400,
					easing: quintOut
				},
				false
			);

			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			if_block.d();
			if (detaching && div_transition) div_transition.end();
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

	let current = "initial";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q7> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q7", $$slots, []);
	const click_handler = () => $$invalidate(1, current = "amazon");
	const click_handler_1 = () => $$invalidate(1, current = "google");
	const click_handler_2 = () => $$invalidate(1, current = "apple");

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		slide,
		quintOut,
		quintIn,
		complete,
		incomplete,
		q,
		advance,
		advanceTwo,
		current
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(0, q = $$props.q);
		if ("current" in $$props) $$invalidate(1, current = $$props.current);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [
		q,
		current,
		complete,
		incomplete,
		advance,
		advanceTwo,
		click_handler,
		click_handler_1,
		click_handler_2
	];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTcuYWY4ZWRiN2IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG4gICAgaW1wb3J0IHsgcXVpbnRPdXQsIHF1aW50SW4gfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcblx0Ly9jb25maXJtIGNvbWxldGlvbiBvZiBxdWl6IHRvIG1hc3RlciBxdWl6IGNvbXBvbmVudFxuXHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAndHJ1ZSdcblx0XHR9KTtcblx0fVxuXHRmdW5jdGlvbiBpbmNvbXBsZXRlKCkge1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0cXVlc3Rpb246IDIsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICdmYWxzZSdcblx0XHR9KTtcblx0fVxuXHRsZXQgcSA9IDA7XG5cdGZ1bmN0aW9uIGFkdmFuY2UoKSB7XG5cdFx0cSsrO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuXHR9XG5cdGZ1bmN0aW9uIGFkdmFuY2VUd28oKSB7XG5cdFx0cSs9Mjtcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuXHRsZXQgY3VycmVudCA9ICdpbml0aWFsJztcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+SW50ZXJuZXQgb2YgdGhpbmdzKCBBbGV4YSwgSG9tZSBkZXZpY2VzKTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiB0cmFuc2l0aW9uOnNsaWRlPVwie3tkZWxheTogMTAwLCBkdXJhdGlvbjogNDAwLCBlYXNpbmc6IHF1aW50T3V0fX1cIiA+XG57I2lmIHE9PTB9XG48c2VjdGlvbj5cblx0PGgyPkludGVybmV0IG9mIHRoaW5ncyggQWxleGEsIEhvbWUgZGV2aWNlcyk8L2gyPiBcblx0PHA+SXQgc2hvdWxkIGJlIGNsZWFyIGJ5IG5vdyB0aGF0IHlvdXIgZGFpbHkgaW50ZXJhY3Rpb25zIHRlY2hub2xvZ3ksIGxldCBhbG9uZSB5b3VyIHNtYXJ0IHNwZWFrZXIgYXJlIGFueXRoaW5nIGJ1dCBwcml2YXRlLiBBIHNlcmllcyBvZiBpbnZlc3RpZ2F0aXZlIHJlcG9ydHMgaGF2ZSBzaG93biB0aGF0IG90aGVyIHBlb3BsZSBhcmUgcmV2aWV3aW5nIHJlY29yZGluZ3Mgb3IgdHJhbnNjcmlwdHMgb2YgeW91ciBjb252ZXJzYXRpb25zLiBcblx0PC9wPlxuXHQ8cD5UaGUgdGhyZWUgYmlnIG1ha2VycyBvZiBzbWFydCBzcGVha2Vyc+KAlEFtYXpvbiwgQXBwbGUsIGFuZCBHb29nbGXigJRzYXkgdGhleSBkbyB0aGlzIHRvIGltcHJvdmUgdGhlIGRldmljZeKAmXMgcGVyZm9ybWFuY2UsIG5vdCBmb3IgdGFyZ2V0aW5nIGFkcy4gQnV0IHByaXZhY3kgYWR2b2NhdGVzIGFyZ3VlIHRoYXQsIHdpdGhvdXQgcHJpb3Igbm90aWNlLCBhbnkgbGlzdGVuaW5nIGZyb20gZW1wbG95ZWVzIGFuZCBjb250cmFjdG9ycyBpcyB1bmZhaXIgdG8gY29uc3VtZXJzLjwvcD5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlfT5JIG93biBhIHNtYXJ0IHNwZWFrZXI8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlVHdvfT5JIGRvbid0IG93biBhIHNtYXJ0IHNwZWFrZXI8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgcT09MX1cbjxzZWN0aW9uPlxuXHQ8ZGl2IGNsYXNzOmFjdGl2ZT1cIntjdXJyZW50ID09PSAnYW1hem9uJ31cIlxuXHRvbjpjbGljaz1cInsoKSA9PiBjdXJyZW50ID0gJ2FtYXpvbid9XCI+XG5cdFx0PHA+QW1hem9uIEFsZXhhPC9wPlxuXHRcdHsjaWYgY3VycmVudD09PSdhbWF6b24nfVxuXHRcdDx1bD5cblx0XHRcdDxsaT5TdGVwIDE6IE9wZW4gdGhlIEFsZXhhIGFwcCBvbiB5b3VyIHNtYXJ0cGhvbmUgYW5kIHRhcCB0aGUgbWVudSBidXR0b24gb24gdGhlIHRvcC1sZWZ0IG9mIHRoZSBzY3JlZW4uPC9saT5cblx0XHRcdDxsaT5TdGVwIDI6IFNlbGVjdCBTZXR0aW5ncyA+IEFsZXhhIFByaXZhY3kgPiBNYW5hZ2UgSG93IFlvdXIgRGF0YSBJbXByb3ZlcyBBbGV4YS48L2xpPlxuXHRcdFx0PGxpPlN0ZXAgMzogU3dpdGNoIG9mZiB0aGUgdG9nZ2xlIG5leHQgdG8gSGVscCBJbXByb3ZlIEFtYXpvbiBTZXJ2aWNlcyBhbmQgRGV2ZWxvcCBOZXcgRmVhdHVyZXMuPC9saT5cblx0XHRcdDxsaT5TdGVwIDQ6IFRoZW4gc3dpdGNoIG9mZiB0aGUgdG9nZ2xlIG5leHQgdG8geW91ciBuYW1lIHVuZGVyIFVzZSBNZXNzYWdlcyB0byBJbXByb3ZlIFRyYW5zY3JpcHRpb25zLjwvbGk+XG5cdFx0PC91bD5cblx0XHR7L2lmfVxuXHQ8L2Rpdj5cblx0XG5cdDxocj5cblx0PGRpdiBjbGFzczphY3RpdmU9XCJ7Y3VycmVudCA9PT0gJ2dvb2dsZSd9XCJcblx0b246Y2xpY2s9XCJ7KCkgPT4gY3VycmVudCA9ICdnb29nbGUnfVwiPlxuXHRcdDxwPkdvb2dsZSBBc3Npc3RhbnQ8L3A+XG5cdFx0eyNpZiBjdXJyZW50PT09J2dvb2dsZSd9XG5cdFx0PHVsPlxuXHRcdFx0PGxpPlN0ZXAgMTogT3BlbiB0aGUgQWxleGEgYXBwIG9uIHlvdXIgc21hcnRwaG9uZSBhbmQgdGFwIHRoZSBtZW51IGJ1dHRvbiBvbiB0aGUgdG9wLWxlZnQgb2YgdGhlIHNjcmVlbi48L2xpPlxuXHRcdFx0PGxpPlN0ZXAgMjogU2VsZWN0IFNldHRpbmdzID4gQWxleGEgUHJpdmFjeSA+IE1hbmFnZSBIb3cgWW91ciBEYXRhIEltcHJvdmVzIEFsZXhhLjwvbGk+XG5cdFx0XHQ8bGk+U3RlcCAzOiBTd2l0Y2ggb2ZmIHRoZSB0b2dnbGUgbmV4dCB0byBIZWxwIEltcHJvdmUgQW1hem9uIFNlcnZpY2VzIGFuZCBEZXZlbG9wIE5ldyBGZWF0dXJlcy48L2xpPlxuXHRcdFx0PGxpPlN0ZXAgNDogVGhlbiBzd2l0Y2ggb2ZmIHRoZSB0b2dnbGUgbmV4dCB0byB5b3VyIG5hbWUgdW5kZXIgVXNlIE1lc3NhZ2VzIHRvIEltcHJvdmUgVHJhbnNjcmlwdGlvbnMuPC9saT5cblx0XHQ8L3VsPlxuXHRcdHsvaWZ9XG5cdDwvZGl2PlxuXHRcblx0PGhyPlxuXHQ8ZGl2IGNsYXNzOmFjdGl2ZT1cIntjdXJyZW50ID09PSAnYXBwbGUnfVwiXG5cdG9uOmNsaWNrPVwieygpID0+IGN1cnJlbnQgPSAnYXBwbGUnfVwiPlxuXHRcdDxwPkFwcGxlIFNpcmk8L3A+XG5cdFx0eyNpZiBjdXJyZW50PT09J2FwcGxlJ31cblx0XHQ8dWw+XG5cdFx0XHQ8bGk+U3RlcCAxOiBPcGVuIHRoZSBBbGV4YSBhcHAgb24geW91ciBzbWFydHBob25lIGFuZCB0YXAgdGhlIG1lbnUgYnV0dG9uIG9uIHRoZSB0b3AtbGVmdCBvZiB0aGUgc2NyZWVuLjwvbGk+XG5cdFx0XHQ8bGk+U3RlcCAyOiBTZWxlY3QgU2V0dGluZ3MgPiBBbGV4YSBQcml2YWN5ID4gTWFuYWdlIEhvdyBZb3VyIERhdGEgSW1wcm92ZXMgQWxleGEuPC9saT5cblx0XHRcdDxsaT5TdGVwIDM6IFN3aXRjaCBvZmYgdGhlIHRvZ2dsZSBuZXh0IHRvIEhlbHAgSW1wcm92ZSBBbWF6b24gU2VydmljZXMgYW5kIERldmVsb3AgTmV3IEZlYXR1cmVzLjwvbGk+XG5cdFx0XHQ8bGk+U3RlcCA0OiBUaGVuIHN3aXRjaCBvZmYgdGhlIHRvZ2dsZSBuZXh0IHRvIHlvdXIgbmFtZSB1bmRlciBVc2UgTWVzc2FnZXMgdG8gSW1wcm92ZSBUcmFuc2NyaXB0aW9ucy48L2xpPlxuXHRcdDwvdWw+XG5cdFx0ey9pZn1cblx0PC9kaXY+XG5cdFxuXHQ8aHI+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PGgzPkRpZCB5b3Ugc2V0dXAgcHJpdmFjeSBtb2RlPC9oMz5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtjb21wbGV0ZX0+WWVzLCBJIERpZDwvYnV0dG9uPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9Pk5vIEkgZG9uJ3Qgd2FudCB0bzwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cblx0PHNlY3Rpb24+XG5cdFx0PGgyPkhvb29yYXkhPC9oMj5cblx0XHQ8cD5PbmUgbGVzcyB3YXkgcGVvcGxlIGNhbiBzbm9vcCBvbiB5b3VyIHByaXZhY3kuPC9wPlxuXHRcdFx0PGJ1dHRvbiBvbjpjbGljaz17Y29tcGxldGV9Pk5leHQgQ2hhbGxlbmdlPC9idXR0b24+XG5cdDwvc2VjdGlvbj5cbnsvaWZ9XG48L2Rpdj5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1REFrR3FCLEdBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
