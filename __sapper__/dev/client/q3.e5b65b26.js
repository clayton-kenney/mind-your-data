import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, o as onMount, v as validate_slots, L as afterUpdate, J as createEventDispatcher, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, f as element, g as claim_element, h as children, l as add_location, w as group_outros, x as check_outros, C as text, F as claim_text, p as append_dev, V as svg_element, k as attr_dev, W as toggle_class, R as listen_dev, X as run_all } from './client.b977d48c.js';
import './index.44998259.js';
import './index.58e08879.js';
import { T as TransHelp } from './TransHelp.1440d785.js';
import { c as count, s as step, q as quizSteps } from './store.f5854ef1.js';
import { C as Complete, B as Back } from './Back.d6267c1e.js';
import { B as Btn } from './Btn.1799769e.js';

/* src/routes/quiz/q3.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q3.svelte";

// (29:1) {:else}
function create_else_block(ctx) {
	let h1;
	let t0;
	let t1;
	let p0;
	let t2;
	let a0;
	let t3;
	let t4;
	let div1;
	let div0;
	let p1;
	let t5;
	let svg0;
	let path0;
	let t6;
	let t7;
	let hr0;
	let t8;
	let div3;
	let div2;
	let p2;
	let t9;
	let svg1;
	let path1;
	let t10;
	let t11;
	let hr1;
	let t12;
	let div4;
	let p3;
	let a1;
	let t13;
	let t14;
	let div5;
	let complete0;
	let t15;
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
			div1 = element("div");
			div0 = element("div");
			p1 = element("p");
			t5 = text("Change your defualt search engine for Mac ");
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			t6 = space();
			if (if_block0) if_block0.c();
			t7 = space();
			hr0 = element("hr");
			t8 = space();
			div3 = element("div");
			div2 = element("div");
			p2 = element("p");
			t9 = text("Change your defualt search engine for Windows ");
			svg1 = svg_element("svg");
			path1 = svg_element("path");
			t10 = space();
			if (if_block1) if_block1.c();
			t11 = space();
			hr1 = element("hr");
			t12 = space();
			div4 = element("div");
			p3 = element("p");
			a1 = element("a");
			t13 = text("Or you can download the DuckDuckGo Extension here");
			t14 = space();
			div5 = element("div");
			create_component(complete0.$$.fragment);
			t15 = space();
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
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", {});
			var div0_nodes = children(div0);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Change your defualt search engine for Mac ");
			p1_nodes.forEach(detach_dev);

			svg0 = claim_element(
				div0_nodes,
				"svg",
				{
					width: true,
					height: true,
					viewBox: true,
					fill: true,
					xmlns: true
				},
				1
			);

			var svg0_nodes = children(svg0);
			path0 = claim_element(svg0_nodes, "path", { d: true, fill: true }, 1);
			children(path0).forEach(detach_dev);
			svg0_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			if (if_block0) if_block0.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			hr0 = claim_element(nodes, "HR", {});
			t8 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", {});
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", {});
			var div2_nodes = children(div2);
			p2 = claim_element(div2_nodes, "P", {});
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "Change your defualt search engine for Windows ");
			p2_nodes.forEach(detach_dev);

			svg1 = claim_element(
				div2_nodes,
				"svg",
				{
					width: true,
					height: true,
					viewBox: true,
					fill: true,
					xmlns: true
				},
				1
			);

			var svg1_nodes = children(svg1);
			path1 = claim_element(svg1_nodes, "path", { d: true, fill: true }, 1);
			children(path1).forEach(detach_dev);
			svg1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			t10 = claim_space(div3_nodes);
			if (if_block1) if_block1.l(div3_nodes);
			div3_nodes.forEach(detach_dev);
			t11 = claim_space(nodes);
			hr1 = claim_element(nodes, "HR", {});
			t12 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", {});
			var div4_nodes = children(div4);
			p3 = claim_element(div4_nodes, "P", {});
			var p3_nodes = children(p3);
			a1 = claim_element(p3_nodes, "A", { href: true, target: true });
			var a1_nodes = children(a1);
			t13 = claim_text(a1_nodes, "Or you can download the DuckDuckGo Extension here");
			a1_nodes.forEach(detach_dev);
			p3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t14 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			claim_component(complete0.$$.fragment, div5_nodes);
			t15 = claim_space(div5_nodes);
			claim_component(complete1.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 30, 3, 1292);
			attr_dev(a0, "href", "https://restoreprivacy.com/private-search-engine/");
			add_location(a0, file, 31, 370, 1701);
			add_location(p0, file, 31, 3, 1334);
			add_location(p1, file, 34, 8, 1879);
			attr_dev(path0, "d", "M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z");
			attr_dev(path0, "fill", "white");
			add_location(path0, file, 35, 0, 2024);
			attr_dev(svg0, "width", "24");
			attr_dev(svg0, "height", "24");
			attr_dev(svg0, "viewBox", "0 0 24 24");
			attr_dev(svg0, "fill", "none");
			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg0, file, 34, 57, 1928);
			add_location(div0, file, 34, 3, 1874);
			toggle_class(div1, "active", /*current*/ ctx[0] === "mac");
			add_location(div1, file, 33, 2, 1795);
			add_location(hr0, file, 45, 2, 2366);
			add_location(p2, file, 47, 8, 2456);
			attr_dev(path1, "d", "M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z");
			attr_dev(path1, "fill", "white");
			add_location(path1, file, 48, 0, 2605);
			attr_dev(svg1, "width", "24");
			attr_dev(svg1, "height", "24");
			attr_dev(svg1, "viewBox", "0 0 24 24");
			attr_dev(svg1, "fill", "none");
			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg1, file, 47, 61, 2509);
			add_location(div2, file, 47, 3, 2451);
			toggle_class(div3, "active", /*current*/ ctx[0] === "pc");
			add_location(div3, file, 46, 3, 2374);
			add_location(hr1, file, 58, 2, 3020);
			attr_dev(a1, "href", "https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg");
			attr_dev(a1, "target", "_blank");
			add_location(a1, file, 60, 8, 3041);
			add_location(p3, file, 60, 5, 3038);
			add_location(div4, file, 59, 2, 3027);
			attr_dev(div5, "class", "button-holder");
			add_location(div5, file, 62, 2, 3237);
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
			insert_dev(target, div1, anchor);
			append_dev(div1, div0);
			append_dev(div0, p1);
			append_dev(p1, t5);
			append_dev(div0, svg0);
			append_dev(svg0, path0);
			append_dev(div1, t6);
			if (if_block0) if_block0.m(div1, null);
			insert_dev(target, t7, anchor);
			insert_dev(target, hr0, anchor);
			insert_dev(target, t8, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, p2);
			append_dev(p2, t9);
			append_dev(div2, svg1);
			append_dev(svg1, path1);
			append_dev(div3, t10);
			if (if_block1) if_block1.m(div3, null);
			insert_dev(target, t11, anchor);
			insert_dev(target, hr1, anchor);
			insert_dev(target, t12, anchor);
			insert_dev(target, div4, anchor);
			append_dev(div4, p3);
			append_dev(p3, a1);
			append_dev(a1, t13);
			insert_dev(target, t14, anchor);
			insert_dev(target, div5, anchor);
			mount_component(complete0, div5, null);
			append_dev(div5, t15);
			mount_component(complete1, div5, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(div1, "click", /*click_handler*/ ctx[2], false, false, false),
					listen_dev(div3, "click", /*click_handler_1*/ ctx[3], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (/*current*/ ctx[0] === "mac") {
				if (if_block0) ; else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div1, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty & /*current*/ 1) {
				toggle_class(div1, "active", /*current*/ ctx[0] === "mac");
			}

			if (/*current*/ ctx[0] === "pc") {
				if (if_block1) ; else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div3, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*current*/ 1) {
				toggle_class(div3, "active", /*current*/ ctx[0] === "pc");
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
			if (detaching) detach_dev(div1);
			if (if_block0) if_block0.d();
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(hr0);
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(div3);
			if (if_block1) if_block1.d();
			if (detaching) detach_dev(t11);
			if (detaching) detach_dev(hr1);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(div4);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(div5);
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
		source: "(29:1) {:else}",
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
	let div;
	let btn;
	let current;

	btn = new Btn({
			props: {
				yellow: true,
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
			div = element("div");
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
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(btn.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 22, 2, 714);
			add_location(p0, file, 23, 2, 744);
			add_location(p1, file, 24, 2, 793);
			attr_dev(div, "class", "button-holder");
			add_location(div, file, 25, 2, 1203);
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
			insert_dev(target, div, anchor);
			mount_component(btn, div, null);
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
			if (detaching) detach_dev(div);
			destroy_component(btn);
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

// (38:3) {#if current==='mac'}
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
			add_location(li0, file, 39, 5, 2167);
			add_location(li1, file, 40, 5, 2231);
			add_location(li2, file, 41, 5, 2259);
			add_location(ol, file, 38, 4, 2157);
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
		source: "(38:3) {#if current==='mac'}",
		ctx
	});

	return block;
}

// (51:3) {#if current==='pc'}
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
			add_location(li0, file, 52, 5, 2746);
			add_location(li1, file, 53, 5, 2814);
			add_location(li2, file, 54, 5, 2872);
			add_location(ol, file, 51, 3, 2736);
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
		source: "(51:3) {#if current==='pc'}",
		ctx
	});

	return block;
}

// (64:3) <Complete>
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
		source: "(64:3) <Complete>",
		ctx
	});

	return block;
}

// (67:3) <Complete success={false}>
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
		source: "(67:3) <Complete success={false}>",
		ctx
	});

	return block;
}

// (27:3) <Btn yellow={true}>
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
		source: "(27:3) <Btn yellow={true}>",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTMuZTViNjViMjYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHQvL2ltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG5cdGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuXHQgXG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblx0b25Nb3VudChhc3luYygpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcblx0XHR9KTtcblx0bGV0IGN1cnJlbnQgPSAnaW5pdGlhbCc7XG5cdDwvc2NyaXB0PlxuXHQ8c3ZlbHRlOmhlYWQ+XG5cdFx0PHRpdGxlPlNlYXJjaCBFbmdpbmU8L3RpdGxlPlxuXHQ8L3N2ZWx0ZTpoZWFkPlxuXHRcblx0PFRyYW5zPlxuXHRcdDxzZWN0aW9uPlxuXHR7I2lmICRzdGVwPT0wfSBcblx0XHQ8aDE+Q2hhbmdlIFlvdXIgU2VhcmNoPC9oMT5cblx0XHQ8cD5Ib3cgYXJlIHlvdSBzZWFyY2hpbmcgZm9yIGluZm9ybWF0aW9uPyA8L3A+XG5cdFx0PHA+VXNpbmcgYSBzZWFyY2ggZW5naW5lIGNhbiBkaXNjbG9zZSBoaWdobHkgcGVyc29uYWwgaW5mb3JtYXRpb24gYWJvdXQgeW91LCBzdWNoIGFzIG1lZGljYWwgaXNzdWVzLCBlbXBsb3ltZW50IHN0YXR1cywgZmluYW5jaWFsIGluZm9ybWF0aW9uLCBwb2xpdGljYWwgYmVsaWVmcywgYW5kIG90aGVyIHByaXZhdGUgZGV0YWlscy4gVGhpcyBkYXRhLCBvZiBjb3Vyc2UsIGNhbiBiZSBjb2xsZWN0ZWQsIHN0b3JlZCwgYW5kIGxpbmtlZCB0byB5b3VyIGRhdGEgcHJvZmlsZSAoYW5kIHlvdXIgcmVhbCBpZGVudGl0eSkuIFRoZSBvbmx5IHdheSB0byBlZmZlY3RpdmVseSDigJxvcHQgb3V04oCdIGlzIHRvIGtlZXAgeW91ciBkYXRhIHNhZmUgYW5kIG91dCBvZiB0aGUgaGFuZHMgb2YgdGhlIGRhdGEgY29sbGVjdG9ycy48L3A+XG5cdFx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHRcdDxCdG4geWVsbG93PXt0cnVlfT4gY29udGludWU8L0J0bj5cblx0XHQ8L2Rpdj5cblx0ezplbHNlfVxuXHRcblx0XHRcdDxoMT5Vc2UgYWx0ZXJuYXRpdmUgc2VhcmNoIGVuZ2luZTwvaDE+XG5cdFx0XHQ8cD5Qcm90ZWN0IHlvdXIgcHJpdmFjeSB3aGlsZSB5b3Ugc2VhcmNoIHVzaW5nIGFuIGFsdGVybmF0aXZlIHNlYXJjaCBlbmdpbmUgd2hlbiB5b3UgbmVlZCB0byBmaW5kIHNvbWV0aGluZyBvbiB0aGUgaW50ZXJuZXQuIFRoaXMgaXNu4oCZdCBhcyBoYXJkIGFzeW91IG1pZ2h0IHRoaW5rIGFzIHRoZXJlIGFyZSBzb21lIGNvbXBldGl0aXZlIGFsdGVybmF0aXZlcyBub3cgdGhhdCBkb27igJl0IGNvbGxlY3Qgb3Igc2hhcmUgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiDigJQgd2UgbGlrZSBEdWNrRHVja0dvIGFzIGFuIGV4dGVuc2lvbiBmb3Igc2VhcmNoZXMsIGJ1dCBpZiB5b3XigJlkIGxpa2UgdG8gc2VhcmNoIGZvciBvdGhlciBzZWFyY2ggZW5naW5lcyA8YSBocmVmPVwiaHR0cHM6Ly9yZXN0b3JlcHJpdmFjeS5jb20vcHJpdmF0ZS1zZWFyY2gtZW5naW5lL1wiPmhlcmUgYXJlIGEgZmV3IG9wdGlvbnM8L2E+LlxuXHRcdFx0XG5cdFx0PGRpdiBjbGFzczphY3RpdmU9XCJ7Y3VycmVudCA9PT0gJ21hYyd9XCIgb246Y2xpY2s9XCJ7KCkgPT4gY3VycmVudCA9ICdtYWMnfVwiPlxuXHRcdFx0PGRpdj48cD5DaGFuZ2UgeW91ciBkZWZ1YWx0IHNlYXJjaCBlbmdpbmUgZm9yIE1hYyA8L3A+PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48cGF0aCBkPVwiTTE4Ljg4NSA3TDEyIDEzLjc5ODlMNS4xMTUgN0wzIDkuMDkzMTJMMTIgMThMMjEgOS4wOTMxMkwxOC44ODUgN1pcIiBmaWxsPVwid2hpdGVcIi8+XG48L3N2Zz48L2Rpdj5cblx0XHRcdHsjaWYgY3VycmVudD09PSdtYWMnfVxuXHRcdFx0XHQ8b2w+XG5cdFx0XHRcdFx0PGxpPkNob29zZSBTeXN0ZW0gUHJlZmVyZW5jZXMgZnJvbSB0aGUgQXBwbGUgKCkgbWVudS48L2xpPlxuXHRcdFx0XHRcdDxsaT5DbGljayBHZW5lcmFsPC9saT5cblx0XHRcdFx0XHQ8bGk+Q2hvb3NlIHlvdXIgd2ViIGJyb3dzZXIgZnJvbSB0aGUg4oCdRGVmYXVsdCB3ZWIgYnJvd3NlcuKAnSBwb3AtdXAgbWVudS48L2xpPlxuXHRcdFx0XHQ8L29sPlxuXHRcdFx0ey9pZn1cblx0XHQ8L2Rpdj5cblx0XHQ8aHI+XG4gXHRcdDxkaXYgY2xhc3M6YWN0aXZlPVwie2N1cnJlbnQgPT09ICdwYyd9XCIgb246Y2xpY2s9XCJ7KCkgPT4gY3VycmVudCA9ICdwYyd9XCI+XG5cdFx0XHQ8ZGl2PjxwPkNoYW5nZSB5b3VyIGRlZnVhbHQgc2VhcmNoIGVuZ2luZSBmb3IgV2luZG93cyA8L3A+PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48cGF0aCBkPVwiTTE4Ljg4NSA3TDEyIDEzLjc5ODlMNS4xMTUgN0wzIDkuMDkzMTJMMTIgMThMMjEgOS4wOTMxMkwxOC44ODUgN1pcIiBmaWxsPVwid2hpdGVcIi8+XG48L3N2Zz48L2Rpdj5cblx0XHRcdHsjaWYgY3VycmVudD09PSdwYyd9XG5cdFx0XHQ8b2w+XG5cdFx0XHRcdFx0PGxpPlNlbGVjdCB0aGUgU3RhcnQgIGJ1dHRvbiwgYW5kIHRoZW4gdHlwZSBEZWZhdWx0IGFwcHMuPC9saT5cblx0XHRcdFx0XHQ8bGk+SW4gdGhlIHNlYXJjaCByZXN1bHRzLCBzZWxlY3QgRGVmYXVsdCBhcHBzLjwvbGk+XG5cdFx0XHRcdFx0PGxpPlVuZGVyIFdlYiBicm93c2VyLCBzZWxlY3QgdGhlIGJyb3dzZXIgY3VycmVudGx5IGxpc3RlZCwgYW5kIHRoZW4gc2VsZWN0IE1pY3Jvc29mdCBFZGdlIG9yIGFub3RoZXIgYnJvd3Nlci48L2xpPlxuXHRcdFx0PC9vbD5cbiAgICBcdFx0ey9pZn1cblx0XHQ8L2Rpdj5cblx0XHQ8aHI+XG5cdFx0PGRpdj5cblx0XHQgICA8cD48YSBocmVmPVwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvZHVja2R1Y2tnby1wcml2YWN5LWVzc2VudC9ia2RnZmxjbGRubm5hcGJsa2hwaGJncGdnZGlpa3BwZ1wiIHRhcmdldD1cIl9ibGFua1wiPk9yIHlvdSBjYW4gZG93bmxvYWQgdGhlIER1Y2tEdWNrR28gRXh0ZW5zaW9uIGhlcmU8L2E+PC9wPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0XHQ8Q29tcGxldGU+XG4gICAgICAgIFx0XHRTZWFyY2ggRW5naW5lIENoYW5nZWRcblx0XHRcdDwvQ29tcGxldGU+XG5cdFx0XHQ8Q29tcGxldGUgc3VjY2Vzcz17ZmFsc2V9PlxuICAgICAgICBcdFx0Tm8gVGhhbmtzXG4gICAgXHRcdDwvQ29tcGxldGU+XG5cdFx0PC9kaXY+XG5cdFx0ey9pZn1cblx0PC9zZWN0aW9uPlxuXHRcdDxCYWNrLz5cblx0PC9UcmFucz5cblx0XHRcblx0XHRcblx0PHN0eWxlPlxuXHQ8L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkFxQ1EsR0FBTyxRQUFHLEtBQUs7NkJBYWYsR0FBTyxRQUFHLElBQUk7Ozs7Ozs7Ozs7OzthQWdCQSxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRDQWpDTCxHQUFPLFFBQUssS0FBSzs7Ozs7Ozs7Ozs7Ozs7NENBYWhCLEdBQU8sUUFBSyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJBVC9CLEdBQU8sUUFBRyxLQUFLOzs7Ozs7Ozs7Ozs7NkNBSkQsR0FBTyxRQUFLLEtBQUs7OzttQkFpQi9CLEdBQU8sUUFBRyxJQUFJOzs7Ozs7Ozs7Ozs7NkNBSkMsR0FBTyxRQUFLLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXBCdkIsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFMZCxHQUFLLE9BQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FWYixPQUFPOzZCQUFhLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7OztLQUU3QyxPQUFPLEdBQUcsU0FBUzs7Ozs7Ozs7OzZDQW9CbUMsT0FBTyxHQUFHLEtBQUs7K0NBYWYsT0FBTyxHQUFHLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
