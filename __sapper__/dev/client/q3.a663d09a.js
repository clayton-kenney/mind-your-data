import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, x as onMount, v as validate_slots, w as afterUpdate, r as createEventDispatcher, a as space, y as create_component, q as query_selector_all, b as detach_dev, c as claim_space, z as claim_component, l as insert_dev, A as mount_component, B as transition_in, C as transition_out, D as destroy_component, L as set_store_value, e as element, f as claim_element, g as children, k as add_location, I as group_outros, E as check_outros, t as text, h as claim_text, m as append_dev, j as attr_dev, P as toggle_class, M as listen_dev, Q as run_all } from './client.da6de11b.js';
import './index.cccde779.js';
import './index.01b49c54.js';
import { T as TransHelp } from './TransHelp.50c135e8.js';
import { c as count, s as step, q as quizSteps } from './store.12e49830.js';
import { C as Complete, B as Back } from './Back.f77bc671.js';
import { B as Btn } from './Btn.2223f31b.js';

/* src/routes/quiz/q3.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q3.svelte";

// (27:1) {:else}
function create_else_block(ctx) {
	let h1;
	let t0;
	let t1;
	let p0;
	let t2;
	let a0;
	let t3;
	let t4;
	let div0;
	let p1;
	let t5;
	let t6;
	let t7;
	let hr0;
	let t8;
	let div1;
	let p2;
	let t9;
	let p3;
	let t10;
	let hr1;
	let t11;
	let div2;
	let p4;
	let a1;
	let t12;
	let t13;
	let div3;
	let complete0;
	let t14;
	let complete1;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*current*/ ctx[0] === "mac" && create_if_block_2(ctx);
	let if_block1 = /*current*/ ctx[0] === "pc" && create_if_block_1(ctx);

	complete0 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete1 = new Complete({
			props: {
				success: false,
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Use alternative search engine");
			t1 = space();
			p0 = element("p");
			t2 = text("Protect your privacy while you search using an alternative search engine when you need to find something on the internet. This isn’t as hard asyou might think as there are some competitive alternatives now that don’t collect or share your personal information — we like DuckDuckGo as an extension for searches, but if you’d like to search for other search engines ");
			a0 = element("a");
			t3 = text("here are a few options");
			t4 = text(".\n\t\t\t\n\t\t");
			div0 = element("div");
			p1 = element("p");
			t5 = text("Change your defualt search engine for Mac");
			t6 = space();
			if (if_block0) if_block0.c();
			t7 = space();
			hr0 = element("hr");
			t8 = space();
			div1 = element("div");
			p2 = element("p");
			t9 = text("Chance your default search engine for Windows");
			p3 = element("p");
			if (if_block1) if_block1.c();
			t10 = space();
			hr1 = element("hr");
			t11 = space();
			div2 = element("div");
			p4 = element("p");
			a1 = element("a");
			t12 = text("Or you can download the DuckDuckGo Extension here");
			t13 = space();
			div3 = element("div");
			create_component(complete0.$$.fragment);
			t14 = space();
			create_component(complete1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Use alternative search engine");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Protect your privacy while you search using an alternative search engine when you need to find something on the internet. This isn’t as hard asyou might think as there are some competitive alternatives now that don’t collect or share your personal information — we like DuckDuckGo as an extension for searches, but if you’d like to search for other search engines ");
			a0 = claim_element(p0_nodes, "A", { href: true });
			var a0_nodes = children(a0);
			t3 = claim_text(a0_nodes, "here are a few options");
			a0_nodes.forEach(detach_dev);
			t4 = claim_text(p0_nodes, ".\n\t\t\t\n\t\t");
			p0_nodes.forEach(detach_dev);
			div0 = claim_element(nodes, "DIV", {});
			var div0_nodes = children(div0);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Change your defualt search engine for Mac");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			if (if_block0) if_block0.l(div0_nodes);
			div0_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			hr0 = claim_element(nodes, "HR", {});
			t8 = claim_space(nodes);
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "Chance your default search engine for Windows");
			p2_nodes.forEach(detach_dev);
			p3 = claim_element(div1_nodes, "P", {});
			var p3_nodes = children(p3);
			if (if_block1) if_block1.l(p3_nodes);
			p3_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			hr1 = claim_element(nodes, "HR", {});
			t11 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", {});
			var div2_nodes = children(div2);
			p4 = claim_element(div2_nodes, "P", {});
			var p4_nodes = children(p4);
			a1 = claim_element(p4_nodes, "A", { href: true, target: true });
			var a1_nodes = children(a1);
			t12 = claim_text(a1_nodes, "Or you can download the DuckDuckGo Extension here");
			a1_nodes.forEach(detach_dev);
			p4_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t13 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			claim_component(complete0.$$.fragment, div3_nodes);
			t14 = claim_space(div3_nodes);
			claim_component(complete1.$$.fragment, div3_nodes);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 28, 3, 1237);
			attr_dev(a0, "href", "https://restoreprivacy.com/private-search-engine/");
			add_location(a0, file, 29, 370, 1646);
			add_location(p0, file, 29, 3, 1279);
			add_location(p1, file, 32, 3, 1819);
			toggle_class(div0, "active", /*current*/ ctx[0] === "mac");
			add_location(div0, file, 31, 2, 1740);
			add_location(hr0, file, 41, 2, 2106);
			add_location(p2, file, 43, 3, 2191);
			add_location(p3, file, 43, 51, 2239);
			toggle_class(div1, "active", /*current*/ ctx[0] === "pc");
			add_location(div1, file, 42, 3, 2114);
			add_location(hr1, file, 52, 2, 2554);
			attr_dev(a1, "href", "https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg");
			attr_dev(a1, "target", "_blank");
			add_location(a1, file, 54, 8, 2575);
			add_location(p4, file, 54, 5, 2572);
			add_location(div2, file, 53, 2, 2561);
			attr_dev(div3, "class", "button-holder svelte-1lzlbpb");
			add_location(div3, file, 56, 2, 2771);
		},
		m: function mount(target, anchor) {
			insert_dev(target, h1, anchor);
			append_dev(h1, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p0, anchor);
			append_dev(p0, t2);
			append_dev(p0, a0);
			append_dev(a0, t3);
			append_dev(p0, t4);
			insert_dev(target, div0, anchor);
			append_dev(div0, p1);
			append_dev(p1, t5);
			append_dev(div0, t6);
			if (if_block0) if_block0.m(div0, null);
			insert_dev(target, t7, anchor);
			insert_dev(target, hr0, anchor);
			insert_dev(target, t8, anchor);
			insert_dev(target, div1, anchor);
			append_dev(div1, p2);
			append_dev(p2, t9);
			append_dev(div1, p3);
			if (if_block1) if_block1.m(p3, null);
			insert_dev(target, t10, anchor);
			insert_dev(target, hr1, anchor);
			insert_dev(target, t11, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, p4);
			append_dev(p4, a1);
			append_dev(a1, t12);
			insert_dev(target, t13, anchor);
			insert_dev(target, div3, anchor);
			mount_component(complete0, div3, null);
			append_dev(div3, t14);
			mount_component(complete1, div3, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(div0, "click", /*click_handler*/ ctx[2], false, false, false),
					listen_dev(div1, "click", /*click_handler_1*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (/*current*/ ctx[0] === "mac") {
				if (if_block0) ; else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div0, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty & /*current*/ 1) {
				toggle_class(div0, "active", /*current*/ ctx[0] === "mac");
			}

			if (/*current*/ ctx[0] === "pc") {
				if (if_block1) ; else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(p3, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*current*/ 1) {
				toggle_class(div1, "active", /*current*/ ctx[0] === "pc");
			}

			const complete0_changes = {};

			if (dirty & /*$$scope*/ 64) {
				complete0_changes.$$scope = { dirty, ctx };
			}

			complete0.$set(complete0_changes);
			const complete1_changes = {};

			if (dirty & /*$$scope*/ 64) {
				complete1_changes.$$scope = { dirty, ctx };
			}

			complete1.$set(complete1_changes);
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
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(div0);
			if (if_block0) if_block0.d();
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(hr0);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(div1);
			if (if_block1) if_block1.d();
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(hr1);
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(div2);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(div3);
			destroy_component(complete0);
			destroy_component(complete1);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(27:1) {:else}",
		ctx
	});

	return block;
}

// (22:1) {#if $step==0}
function create_if_block(ctx) {
	let h1;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let btn;
	let current;

	btn = new Btn({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			h1 = element("h1");
			t0 = text("Change Your Search");
			t1 = space();
			p0 = element("p");
			t2 = text("How are you searching for information?");
			t3 = space();
			p1 = element("p");
			t4 = text("Using a search engine can disclose highly personal information about you, such as medical issues, employment status, financial information, political beliefs, and other private details. This data, of course, can be collected, stored, and linked to your data profile (and your real identity). The only way to effectively “opt out” is to keep your data safe and out of the hands of the data collectors.");
			t5 = space();
			create_component(btn.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", {});
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Change Your Search");
			h1_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "How are you searching for information?");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Using a search engine can disclose highly personal information about you, such as medical issues, employment status, financial information, political beliefs, and other private details. This data, of course, can be collected, stored, and linked to your data profile (and your real identity). The only way to effectively “opt out” is to keep your data safe and out of the hands of the data collectors.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(nodes);
			claim_component(btn.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 22, 2, 714);
			add_location(p0, file, 23, 2, 744);
			add_location(p1, file, 24, 2, 793);
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
			mount_component(btn, target, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			const btn_changes = {};

			if (dirty & /*$$scope*/ 64) {
				btn_changes.$$scope = { dirty, ctx };
			}

			btn.$set(btn_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(btn.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(btn.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(h1);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t5);
			destroy_component(btn, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(22:1) {#if $step==0}",
		ctx
	});

	return block;
}

// (34:3) {#if current==='mac'}
function create_if_block_2(ctx) {
	let ol;
	let li0;
	let t0;
	let t1;
	let li1;
	let t2;
	let t3;
	let li2;
	let t4;

	const block = {
		c: function create() {
			ol = element("ol");
			li0 = element("li");
			t0 = text("Choose System Preferences from the Apple () menu.");
			t1 = space();
			li1 = element("li");
			t2 = text("Click General");
			t3 = space();
			li2 = element("li");
			t4 = text("Choose your web browser from the ”Default web browser” pop-up menu.");
			this.h();
		},
		l: function claim(nodes) {
			ol = claim_element(nodes, "OL", {});
			var ol_nodes = children(ol);
			li0 = claim_element(ol_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "Choose System Preferences from the Apple () menu.");
			li0_nodes.forEach(detach_dev);
			t1 = claim_space(ol_nodes);
			li1 = claim_element(ol_nodes, "LI", {});
			var li1_nodes = children(li1);
			t2 = claim_text(li1_nodes, "Click General");
			li1_nodes.forEach(detach_dev);
			t3 = claim_space(ol_nodes);
			li2 = claim_element(ol_nodes, "LI", {});
			var li2_nodes = children(li2);
			t4 = claim_text(li2_nodes, "Choose your web browser from the ”Default web browser” pop-up menu.");
			li2_nodes.forEach(detach_dev);
			ol_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 35, 5, 1907);
			add_location(li1, file, 36, 5, 1971);
			add_location(li2, file, 37, 5, 1999);
			add_location(ol, file, 34, 4, 1897);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ol, anchor);
			append_dev(ol, li0);
			append_dev(li0, t0);
			append_dev(ol, t1);
			append_dev(ol, li1);
			append_dev(li1, t2);
			append_dev(ol, t3);
			append_dev(ol, li2);
			append_dev(li2, t4);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ol);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(34:3) {#if current==='mac'}",
		ctx
	});

	return block;
}

// (45:3) {#if current==='pc'}
function create_if_block_1(ctx) {
	let ol;
	let li0;
	let t0;
	let t1;
	let li1;
	let t2;
	let t3;
	let li2;
	let t4;

	const block = {
		c: function create() {
			ol = element("ol");
			li0 = element("li");
			t0 = text("Select the Start  button, and then type Default apps.");
			t1 = space();
			li1 = element("li");
			t2 = text("In the search results, select Default apps.");
			t3 = space();
			li2 = element("li");
			t4 = text("Under Web browser, select the browser currently listed, and then select Microsoft Edge or another browser.");
			this.h();
		},
		l: function claim(nodes) {
			ol = claim_element(nodes, "OL", {});
			var ol_nodes = children(ol);
			li0 = claim_element(ol_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "Select the Start  button, and then type Default apps.");
			li0_nodes.forEach(detach_dev);
			t1 = claim_space(ol_nodes);
			li1 = claim_element(ol_nodes, "LI", {});
			var li1_nodes = children(li1);
			t2 = claim_text(li1_nodes, "In the search results, select Default apps.");
			li1_nodes.forEach(detach_dev);
			t3 = claim_space(ol_nodes);
			li2 = claim_element(ol_nodes, "LI", {});
			var li2_nodes = children(li2);
			t4 = claim_text(li2_nodes, "Under Web browser, select the browser currently listed, and then select Microsoft Edge or another browser.");
			li2_nodes.forEach(detach_dev);
			ol_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 46, 5, 2280);
			add_location(li1, file, 47, 5, 2348);
			add_location(li2, file, 48, 5, 2406);
			add_location(ol, file, 45, 3, 2270);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ol, anchor);
			append_dev(ol, li0);
			append_dev(li0, t0);
			append_dev(ol, t1);
			append_dev(ol, li1);
			append_dev(li1, t2);
			append_dev(ol, t3);
			append_dev(ol, li2);
			append_dev(li2, t4);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ol);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(45:3) {#if current==='pc'}",
		ctx
	});

	return block;
}

// (58:3) <Complete>
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Search Engine Changed");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Search Engine Changed");
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
		source: "(58:3) <Complete>",
		ctx
	});

	return block;
}

// (61:3) <Complete success={false}>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("No Thanks");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "No Thanks");
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
		source: "(61:3) <Complete success={false}>",
		ctx
	});

	return block;
}

// (26:1) <Btn>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("continue");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "continue");
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
		source: "(26:1) <Btn>",
		ctx
	});

	return block;
}

// (20:1) <Trans>
function create_default_slot(ctx) {
	let section;
	let current_block_type_index;
	let if_block;
	let t;
	let back;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$step*/ ctx[1] == 0) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			section = element("section");
			if_block.c();
			t = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			if_block.l(section_nodes);
			section_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(back.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			add_location(section, file, 20, 2, 685);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			if_blocks[current_block_type_index].m(section, null);
			insert_dev(target, t, anchor);
			mount_component(back, target, anchor);
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
				if_block.m(section, null);
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
			if (detaching) detach_dev(section);
			if_blocks[current_block_type_index].d();
			if (detaching) detach_dev(t);
			destroy_component(back, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(20:1) <Trans>",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ux4qy8\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Search Engine";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, $step, current*/ 67) {
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(4, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(5, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(1, $step = $$value));

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

	let current = "initial";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q3> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q3", $$slots, []);
	const click_handler = () => $$invalidate(0, current = "mac");
	const click_handler_1 = () => $$invalidate(0, current = "pc");

	$$self.$capture_state = () => ({
		onMount,
		afterUpdate,
		createEventDispatcher,
		Trans: TransHelp,
		Complete,
		Btn,
		count,
		step,
		quizSteps,
		Back,
		current,
		$quizSteps,
		$count,
		$step
	});

	$$self.$inject_state = $$props => {
		if ("current" in $$props) $$invalidate(0, current = $$props.current);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [current, $step, click_handler, click_handler_1];
}

class Q3 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q3",
			options,
			id: create_fragment.name
		});
	}
}

export default Q3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTMuYTY2M2QwOWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHQvL2ltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG5cdGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuXHQgXG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblx0b25Nb3VudChhc3luYygpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcblx0XHR9KTtcblx0bGV0IGN1cnJlbnQgPSAnaW5pdGlhbCc7XG5cdDwvc2NyaXB0PlxuXHQ8c3ZlbHRlOmhlYWQ+XG5cdFx0PHRpdGxlPlNlYXJjaCBFbmdpbmU8L3RpdGxlPlxuXHQ8L3N2ZWx0ZTpoZWFkPlxuXHRcblx0PFRyYW5zPlxuXHRcdDxzZWN0aW9uPlxuXHR7I2lmICRzdGVwPT0wfSBcblx0XHQ8aDE+Q2hhbmdlIFlvdXIgU2VhcmNoPC9oMT5cblx0XHQ8cD5Ib3cgYXJlIHlvdSBzZWFyY2hpbmcgZm9yIGluZm9ybWF0aW9uPyA8L3A+XG5cdFx0PHA+VXNpbmcgYSBzZWFyY2ggZW5naW5lIGNhbiBkaXNjbG9zZSBoaWdobHkgcGVyc29uYWwgaW5mb3JtYXRpb24gYWJvdXQgeW91LCBzdWNoIGFzIG1lZGljYWwgaXNzdWVzLCBlbXBsb3ltZW50IHN0YXR1cywgZmluYW5jaWFsIGluZm9ybWF0aW9uLCBwb2xpdGljYWwgYmVsaWVmcywgYW5kIG90aGVyIHByaXZhdGUgZGV0YWlscy4gVGhpcyBkYXRhLCBvZiBjb3Vyc2UsIGNhbiBiZSBjb2xsZWN0ZWQsIHN0b3JlZCwgYW5kIGxpbmtlZCB0byB5b3VyIGRhdGEgcHJvZmlsZSAoYW5kIHlvdXIgcmVhbCBpZGVudGl0eSkuIFRoZSBvbmx5IHdheSB0byBlZmZlY3RpdmVseSDigJxvcHQgb3V04oCdIGlzIHRvIGtlZXAgeW91ciBkYXRhIHNhZmUgYW5kIG91dCBvZiB0aGUgaGFuZHMgb2YgdGhlIGRhdGEgY29sbGVjdG9ycy48L3A+XG5cdDxCdG4+IGNvbnRpbnVlPC9CdG4+XG5cdHs6ZWxzZX1cblx0XG5cdFx0XHQ8aDE+VXNlIGFsdGVybmF0aXZlIHNlYXJjaCBlbmdpbmU8L2gxPlxuXHRcdFx0PHA+UHJvdGVjdCB5b3VyIHByaXZhY3kgd2hpbGUgeW91IHNlYXJjaCB1c2luZyBhbiBhbHRlcm5hdGl2ZSBzZWFyY2ggZW5naW5lIHdoZW4geW91IG5lZWQgdG8gZmluZCBzb21ldGhpbmcgb24gdGhlIGludGVybmV0LiBUaGlzIGlzbuKAmXQgYXMgaGFyZCBhc3lvdSBtaWdodCB0aGluayBhcyB0aGVyZSBhcmUgc29tZSBjb21wZXRpdGl2ZSBhbHRlcm5hdGl2ZXMgbm93IHRoYXQgZG9u4oCZdCBjb2xsZWN0IG9yIHNoYXJlIHlvdXIgcGVyc29uYWwgaW5mb3JtYXRpb24g4oCUIHdlIGxpa2UgRHVja0R1Y2tHbyBhcyBhbiBleHRlbnNpb24gZm9yIHNlYXJjaGVzLCBidXQgaWYgeW914oCZZCBsaWtlIHRvIHNlYXJjaCBmb3Igb3RoZXIgc2VhcmNoIGVuZ2luZXMgPGEgaHJlZj1cImh0dHBzOi8vcmVzdG9yZXByaXZhY3kuY29tL3ByaXZhdGUtc2VhcmNoLWVuZ2luZS9cIj5oZXJlIGFyZSBhIGZldyBvcHRpb25zPC9hPi5cblx0XHRcdFxuXHRcdDxkaXYgY2xhc3M6YWN0aXZlPVwie2N1cnJlbnQgPT09ICdtYWMnfVwiIG9uOmNsaWNrPVwieygpID0+IGN1cnJlbnQgPSAnbWFjJ31cIj5cblx0XHRcdDxwPkNoYW5nZSB5b3VyIGRlZnVhbHQgc2VhcmNoIGVuZ2luZSBmb3IgTWFjPC9wPlxuXHRcdFx0eyNpZiBjdXJyZW50PT09J21hYyd9XG5cdFx0XHRcdDxvbD5cblx0XHRcdFx0XHQ8bGk+Q2hvb3NlIFN5c3RlbSBQcmVmZXJlbmNlcyBmcm9tIHRoZSBBcHBsZSAoKSBtZW51LjwvbGk+XG5cdFx0XHRcdFx0PGxpPkNsaWNrIEdlbmVyYWw8L2xpPlxuXHRcdFx0XHRcdDxsaT5DaG9vc2UgeW91ciB3ZWIgYnJvd3NlciBmcm9tIHRoZSDigJ1EZWZhdWx0IHdlYiBicm93c2Vy4oCdIHBvcC11cCBtZW51LjwvbGk+XG5cdFx0XHRcdDwvb2w+XG5cdFx0XHR7L2lmfVxuXHRcdDwvZGl2PlxuXHRcdDxocj5cbiBcdFx0PGRpdiBjbGFzczphY3RpdmU9XCJ7Y3VycmVudCA9PT0gJ3BjJ31cIiBvbjpjbGljaz1cInsoKSA9PiBjdXJyZW50ID0gJ3BjJ31cIj5cblx0XHRcdDxwPkNoYW5jZSB5b3VyIGRlZmF1bHQgc2VhcmNoIGVuZ2luZSBmb3IgV2luZG93czxwPlxuXHRcdFx0eyNpZiBjdXJyZW50PT09J3BjJ31cblx0XHRcdDxvbD5cblx0XHRcdFx0XHQ8bGk+U2VsZWN0IHRoZSBTdGFydCAgYnV0dG9uLCBhbmQgdGhlbiB0eXBlIERlZmF1bHQgYXBwcy48L2xpPlxuXHRcdFx0XHRcdDxsaT5JbiB0aGUgc2VhcmNoIHJlc3VsdHMsIHNlbGVjdCBEZWZhdWx0IGFwcHMuPC9saT5cblx0XHRcdFx0XHQ8bGk+VW5kZXIgV2ViIGJyb3dzZXIsIHNlbGVjdCB0aGUgYnJvd3NlciBjdXJyZW50bHkgbGlzdGVkLCBhbmQgdGhlbiBzZWxlY3QgTWljcm9zb2Z0IEVkZ2Ugb3IgYW5vdGhlciBicm93c2VyLjwvbGk+XG5cdFx0XHQ8L29sPlxuICAgIFx0XHR7L2lmfVxuXHRcdDwvZGl2PlxuXHRcdDxocj5cblx0XHQ8ZGl2PlxuXHRcdCAgIDxwPjxhIGhyZWY9XCJodHRwczovL2Nocm9tZS5nb29nbGUuY29tL3dlYnN0b3JlL2RldGFpbC9kdWNrZHVja2dvLXByaXZhY3ktZXNzZW50L2JrZGdmbGNsZG5ubmFwYmxraHBoYmdwZ2dkaWlrcHBnXCIgdGFyZ2V0PVwiX2JsYW5rXCI+T3IgeW91IGNhbiBkb3dubG9hZCB0aGUgRHVja0R1Y2tHbyBFeHRlbnNpb24gaGVyZTwvYT48L3A+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHRcdDxDb21wbGV0ZT5cbiAgICAgICAgXHRcdFNlYXJjaCBFbmdpbmUgQ2hhbmdlZFxuXHRcdFx0PC9Db21wbGV0ZT5cblx0XHRcdDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0+XG4gICAgICAgIFx0XHRObyBUaGFua3NcbiAgICBcdFx0PC9Db21wbGV0ZT5cblx0XHQ8L2Rpdj5cblx0XHR7L2lmfVxuXHQ8L3NlY3Rpb24+XG5cdFx0PEJhY2svPlxuXHQ8L1RyYW5zPlxuXHRcdFxuXHRcdFxuXHQ8c3R5bGU+XG5cdFx0LmJ1dHRvbi1ob2xkZXIge1xuXHRcdFx0d2lkdGg6IDI3dnc7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0ZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuXHRcdH1cblx0PC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NkJBaUNRLEdBQU8sUUFBRyxLQUFLOzZCQVdmLEdBQU8sUUFBRyxJQUFJOzs7Ozs7Ozs7Ozs7YUFnQkEsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NENBN0JMLEdBQU8sUUFBSyxLQUFLOzs7Ozs0Q0FXaEIsR0FBTyxRQUFLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkFUL0IsR0FBTyxRQUFHLEtBQUs7Ozs7Ozs7Ozs7Ozs2Q0FGRCxHQUFPLFFBQUssS0FBSzs7O21CQWEvQixHQUFPLFFBQUcsSUFBSTs7Ozs7Ozs7Ozs7OzZDQUZDLEdBQU8sUUFBSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBckJqQyxHQUFLLE9BQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FWYixPQUFPOzZCQUFhLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7OztLQUU3QyxPQUFPLEdBQUcsU0FBUzs7Ozs7Ozs7OzZDQWtCbUMsT0FBTyxHQUFHLEtBQUs7K0NBV2YsT0FBTyxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
