import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, o as onMount, v as validate_slots, L as afterUpdate, J as createEventDispatcher, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, f as element, g as claim_element, h as children, l as add_location, w as group_outros, x as check_outros, C as text, F as claim_text, p as append_dev, V as svg_element, k as attr_dev, W as toggle_class, R as listen_dev, X as run_all } from './client.c3f330f0.js';
import './index.eeca0e53.js';
import { T as TransHelp } from './TransHelp.4f2ca101.js';
import { c as count, s as step, q as quizSteps } from './store.84c7edd8.js';
import { C as Complete, B as Back } from './Back.502da362.js';
import { B as Btn } from './Btn.01e9c7b7.js';

/* src/routes/quiz/q3.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q3.svelte";

// (30:1) {:else}
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
	let t6;
	let svg0;
	let path0;
	let t7;
	let t8;
	let hr0;
	let t9;
	let div3;
	let div2;
	let p2;
	let t10;
	let svg1;
	let path1;
	let t11;
	let t12;
	let hr1;
	let t13;
	let div4;
	let p3;
	let a1;
	let t14;
	let t15;
	let div5;
	let complete0;
	let t16;
	let complete1;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*mac*/ ctx[0] && create_if_block_2(ctx);
	let if_block1 = /*pc*/ ctx[1] && create_if_block_1(ctx);

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
			t5 = text("Change your defualt search engine for Mac");
			t6 = space();
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			t7 = space();
			if (if_block0) if_block0.c();
			t8 = space();
			hr0 = element("hr");
			t9 = space();
			div3 = element("div");
			div2 = element("div");
			p2 = element("p");
			t10 = text("Change your defualt search engine for Windows ");
			svg1 = svg_element("svg");
			path1 = svg_element("path");
			t11 = space();
			if (if_block1) if_block1.c();
			t12 = space();
			hr1 = element("hr");
			t13 = space();
			div4 = element("div");
			p3 = element("p");
			a1 = element("a");
			t14 = text("Or you can download the DuckDuckGo Extension here");
			t15 = space();
			div5 = element("div");
			create_component(complete0.$$.fragment);
			t16 = space();
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
			a0 = claim_element(p0_nodes, "A", { href: true, class: true });
			var a0_nodes = children(a0);
			t3 = claim_text(a0_nodes, "here are a few options");
			a0_nodes.forEach(detach_dev);
			t4 = claim_text(p0_nodes, ".\n\t\t\t\n\t\t");
			p0_nodes.forEach(detach_dev);
			div1 = claim_element(nodes, "DIV", {});
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Change your defualt search engine for Mac");
			p1_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);

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
			t7 = claim_space(div1_nodes);
			if (if_block0) if_block0.l(div1_nodes);
			div1_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			hr0 = claim_element(nodes, "HR", {});
			t9 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", {});
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p2 = claim_element(div2_nodes, "P", {});
			var p2_nodes = children(p2);
			t10 = claim_text(p2_nodes, "Change your defualt search engine for Windows ");
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
			t11 = claim_space(div3_nodes);
			if (if_block1) if_block1.l(div3_nodes);
			div3_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			hr1 = claim_element(nodes, "HR", {});
			t13 = claim_space(nodes);
			div4 = claim_element(nodes, "DIV", {});
			var div4_nodes = children(div4);
			p3 = claim_element(div4_nodes, "P", {});
			var p3_nodes = children(p3);
			a1 = claim_element(p3_nodes, "A", { href: true, target: true, class: true });
			var a1_nodes = children(a1);
			t14 = claim_text(a1_nodes, "Or you can download the DuckDuckGo Extension here");
			a1_nodes.forEach(detach_dev);
			p3_nodes.forEach(detach_dev);
			div4_nodes.forEach(detach_dev);
			t15 = claim_space(nodes);
			div5 = claim_element(nodes, "DIV", { class: true });
			var div5_nodes = children(div5);
			claim_component(complete0.$$.fragment, div5_nodes);
			t16 = claim_space(div5_nodes);
			claim_component(complete1.$$.fragment, div5_nodes);
			div5_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h1, file, 31, 3, 1301);
			attr_dev(a0, "href", "https://restoreprivacy.com/private-search-engine/");
			attr_dev(a0, "class", "svelte-hhwisi");
			add_location(a0, file, 32, 370, 1710);
			add_location(p0, file, 32, 3, 1343);
			add_location(p1, file, 36, 4, 1877);
			attr_dev(path0, "d", "M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z");
			attr_dev(path0, "fill", "white");
			add_location(path0, file, 38, 5, 2033);
			attr_dev(svg0, "width", "24");
			attr_dev(svg0, "height", "24");
			attr_dev(svg0, "viewBox", "0 0 24 24");
			attr_dev(svg0, "fill", "none");
			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg0, file, 37, 5, 1932);
			attr_dev(div0, "class", "caret svelte-hhwisi");
			add_location(div0, file, 35, 3, 1853);
			toggle_class(div1, "mac", /*mac*/ ctx[0]);
			add_location(div1, file, 34, 2, 1804);
			add_location(hr0, file, 49, 2, 2372);
			add_location(p2, file, 52, 3, 2449);
			attr_dev(path1, "d", "M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z");
			attr_dev(path1, "fill", "white");
			add_location(path1, file, 53, 0, 2598);
			attr_dev(svg1, "width", "24");
			attr_dev(svg1, "height", "24");
			attr_dev(svg1, "viewBox", "0 0 24 24");
			attr_dev(svg1, "fill", "none");
			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg1, file, 52, 56, 2502);
			attr_dev(div2, "class", "caret svelte-hhwisi");
			add_location(div2, file, 51, 3, 2426);
			toggle_class(div3, "pc", /*pc*/ ctx[1]);
			add_location(div3, file, 50, 3, 2380);
			add_location(hr1, file, 63, 2, 3001);
			attr_dev(a1, "href", "https://chrome.google.com/webstore/detail/duckduckgo-privacy-essent/bkdgflcldnnnapblkhphbgpggdiikppg");
			attr_dev(a1, "target", "_blank");
			attr_dev(a1, "class", "svelte-hhwisi");
			add_location(a1, file, 65, 8, 3022);
			add_location(p3, file, 65, 5, 3019);
			add_location(div4, file, 64, 2, 3008);
			attr_dev(div5, "class", "button-holder");
			add_location(div5, file, 67, 2, 3218);
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
			append_dev(div0, t6);
			append_dev(div0, svg0);
			append_dev(svg0, path0);
			append_dev(div1, t7);
			if (if_block0) if_block0.m(div1, null);
			insert_dev(target, t8, anchor);
			insert_dev(target, hr0, anchor);
			insert_dev(target, t9, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, p2);
			append_dev(p2, t10);
			append_dev(div2, svg1);
			append_dev(svg1, path1);
			append_dev(div3, t11);
			if (if_block1) if_block1.m(div3, null);
			insert_dev(target, t12, anchor);
			insert_dev(target, hr1, anchor);
			insert_dev(target, t13, anchor);
			insert_dev(target, div4, anchor);
			append_dev(div4, p3);
			append_dev(p3, a1);
			append_dev(a1, t14);
			insert_dev(target, t15, anchor);
			insert_dev(target, div5, anchor);
			mount_component(complete0, div5, null);
			append_dev(div5, t16);
			mount_component(complete1, div5, null);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(div1, "click", /*click_handler*/ ctx[3], false, false, false),
					listen_dev(div3, "click", /*click_handler_1*/ ctx[4], false, false, false)
				];

				mounted = true;
			}
		},
		p: function update(ctx, dirty) {
			if (/*mac*/ ctx[0]) {
				if (if_block0) ; else {
					if_block0 = create_if_block_2(ctx);
					if_block0.c();
					if_block0.m(div1, null);
				}
			} else if (if_block0) {
				if_block0.d(1);
				if_block0 = null;
			}

			if (dirty & /*mac*/ 1) {
				toggle_class(div1, "mac", /*mac*/ ctx[0]);
			}

			if (/*pc*/ ctx[1]) {
				if (if_block1) ; else {
					if_block1 = create_if_block_1(ctx);
					if_block1.c();
					if_block1.m(div3, null);
				}
			} else if (if_block1) {
				if_block1.d(1);
				if_block1 = null;
			}

			if (dirty & /*pc*/ 2) {
				toggle_class(div3, "pc", /*pc*/ ctx[1]);
			}

			const complete0_changes = {};

			if (dirty & /*$$scope*/ 128) {
				complete0_changes.$$scope = { dirty, ctx };
			}

			complete0.$set(complete0_changes);
			const complete1_changes = {};

			if (dirty & /*$$scope*/ 128) {
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
			if (detaching) detach_dev(t8);
			if (detaching) detach_dev(hr0);
			if (detaching) detach_dev(t9);
			if (detaching) detach_dev(div3);
			if (if_block1) if_block1.d();
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(hr1);
			if (detaching) detach_dev(t13);
			if (detaching) detach_dev(div4);
			if (detaching) detach_dev(t15);
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
		source: "(30:1) {:else}",
		ctx
	});

	return block;
}

// (23:1) {#if $step==0}
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
			add_location(h1, file, 23, 2, 723);
			add_location(p0, file, 24, 2, 753);
			add_location(p1, file, 25, 2, 802);
			attr_dev(div, "class", "button-holder");
			add_location(div, file, 26, 2, 1212);
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

			if (dirty & /*$$scope*/ 128) {
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
		source: "(23:1) {#if $step==0}",
		ctx
	});

	return block;
}

// (42:3) {#if mac}
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
			add_location(li0, file, 43, 5, 2173);
			add_location(li1, file, 44, 5, 2237);
			add_location(li2, file, 45, 5, 2265);
			add_location(ol, file, 42, 4, 2163);
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
		source: "(42:3) {#if mac}",
		ctx
	});

	return block;
}

// (56:3) {#if pc}
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
			add_location(li0, file, 57, 5, 2727);
			add_location(li1, file, 58, 5, 2795);
			add_location(li2, file, 59, 5, 2853);
			add_location(ol, file, 56, 3, 2717);
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
		source: "(56:3) {#if pc}",
		ctx
	});

	return block;
}

// (69:3) <Complete>
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
		source: "(69:3) <Complete>",
		ctx
	});

	return block;
}

// (72:3) <Complete success={false}>
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
		source: "(72:3) <Complete success={false}>",
		ctx
	});

	return block;
}

// (28:3) <Btn yellow={true}>
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
		source: "(28:3) <Btn yellow={true}>",
		ctx
	});

	return block;
}

// (21:1) <Trans>
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
		if (/*$step*/ ctx[2] == 0) return 0;
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
			add_location(section, file, 21, 2, 694);
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
		source: "(21:1) <Trans>",
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

			if (dirty & /*$$scope, $step, pc, mac*/ 135) {
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(5, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(6, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(2, $step = $$value));

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

	let mac = false;
	let pc = false;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q3> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q3", $$slots, []);
	const click_handler = () => $$invalidate(0, mac = !mac);
	const click_handler_1 = () => $$invalidate(1, pc = !pc);

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
		mac,
		pc,
		$quizSteps,
		$count,
		$step
	});

	$$self.$inject_state = $$props => {
		if ("mac" in $$props) $$invalidate(0, mac = $$props.mac);
		if ("pc" in $$props) $$invalidate(1, pc = $$props.pc);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [mac, pc, $step, click_handler, click_handler_1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTMuY2QzZTMzYTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHQvL2ltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG5cdGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuXHQgXG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblx0b25Nb3VudChhc3luYygpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcblx0XHR9KTtcblx0bGV0IG1hYyA9IGZhbHNlO1xuXHRsZXQgcGMgPSBmYWxzZTtcblx0PC9zY3JpcHQ+XG5cdDxzdmVsdGU6aGVhZD5cblx0XHQ8dGl0bGU+U2VhcmNoIEVuZ2luZTwvdGl0bGU+XG5cdDwvc3ZlbHRlOmhlYWQ+XG5cdFxuXHQ8VHJhbnM+XG5cdFx0PHNlY3Rpb24+XG5cdHsjaWYgJHN0ZXA9PTB9IFxuXHRcdDxoMT5DaGFuZ2UgWW91ciBTZWFyY2g8L2gxPlxuXHRcdDxwPkhvdyBhcmUgeW91IHNlYXJjaGluZyBmb3IgaW5mb3JtYXRpb24/IDwvcD5cblx0XHQ8cD5Vc2luZyBhIHNlYXJjaCBlbmdpbmUgY2FuIGRpc2Nsb3NlIGhpZ2hseSBwZXJzb25hbCBpbmZvcm1hdGlvbiBhYm91dCB5b3UsIHN1Y2ggYXMgbWVkaWNhbCBpc3N1ZXMsIGVtcGxveW1lbnQgc3RhdHVzLCBmaW5hbmNpYWwgaW5mb3JtYXRpb24sIHBvbGl0aWNhbCBiZWxpZWZzLCBhbmQgb3RoZXIgcHJpdmF0ZSBkZXRhaWxzLiBUaGlzIGRhdGEsIG9mIGNvdXJzZSwgY2FuIGJlIGNvbGxlY3RlZCwgc3RvcmVkLCBhbmQgbGlua2VkIHRvIHlvdXIgZGF0YSBwcm9maWxlIChhbmQgeW91ciByZWFsIGlkZW50aXR5KS4gVGhlIG9ubHkgd2F5IHRvIGVmZmVjdGl2ZWx5IOKAnG9wdCBvdXTigJ0gaXMgdG8ga2VlcCB5b3VyIGRhdGEgc2FmZSBhbmQgb3V0IG9mIHRoZSBoYW5kcyBvZiB0aGUgZGF0YSBjb2xsZWN0b3JzLjwvcD5cblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdFx0PEJ0biB5ZWxsb3c9e3RydWV9PiBjb250aW51ZTwvQnRuPlxuXHRcdDwvZGl2PlxuXHR7OmVsc2V9XG5cdFxuXHRcdFx0PGgxPlVzZSBhbHRlcm5hdGl2ZSBzZWFyY2ggZW5naW5lPC9oMT5cblx0XHRcdDxwPlByb3RlY3QgeW91ciBwcml2YWN5IHdoaWxlIHlvdSBzZWFyY2ggdXNpbmcgYW4gYWx0ZXJuYXRpdmUgc2VhcmNoIGVuZ2luZSB3aGVuIHlvdSBuZWVkIHRvIGZpbmQgc29tZXRoaW5nIG9uIHRoZSBpbnRlcm5ldC4gVGhpcyBpc27igJl0IGFzIGhhcmQgYXN5b3UgbWlnaHQgdGhpbmsgYXMgdGhlcmUgYXJlIHNvbWUgY29tcGV0aXRpdmUgYWx0ZXJuYXRpdmVzIG5vdyB0aGF0IGRvbuKAmXQgY29sbGVjdCBvciBzaGFyZSB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIOKAlCB3ZSBsaWtlIER1Y2tEdWNrR28gYXMgYW4gZXh0ZW5zaW9uIGZvciBzZWFyY2hlcywgYnV0IGlmIHlvdeKAmWQgbGlrZSB0byBzZWFyY2ggZm9yIG90aGVyIHNlYXJjaCBlbmdpbmVzIDxhIGhyZWY9XCJodHRwczovL3Jlc3RvcmVwcml2YWN5LmNvbS9wcml2YXRlLXNlYXJjaC1lbmdpbmUvXCI+aGVyZSBhcmUgYSBmZXcgb3B0aW9uczwvYT4uXG5cdFx0XHRcblx0XHQ8ZGl2IGNsYXNzOm1hYyBvbjpjbGljaz1cInsoKSA9PiBtYWMgPSAhbWFjfVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmV0XCI+XG5cdFx0XHRcdDxwPkNoYW5nZSB5b3VyIGRlZnVhbHQgc2VhcmNoIGVuZ2luZSBmb3IgTWFjIDwvcD5cblx0XHRcdFx0XHQ8c3ZnIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cblx0XHRcdFx0XHQ8cGF0aCBkPVwiTTE4Ljg4NSA3TDEyIDEzLjc5ODlMNS4xMTUgN0wzIDkuMDkzMTJMMTIgMThMMjEgOS4wOTMxMkwxOC44ODUgN1pcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHRcdFx0PC9zdmc+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHsjaWYgbWFjfVxuXHRcdFx0XHQ8b2w+XG5cdFx0XHRcdFx0PGxpPkNob29zZSBTeXN0ZW0gUHJlZmVyZW5jZXMgZnJvbSB0aGUgQXBwbGUgKCkgbWVudS48L2xpPlxuXHRcdFx0XHRcdDxsaT5DbGljayBHZW5lcmFsPC9saT5cblx0XHRcdFx0XHQ8bGk+Q2hvb3NlIHlvdXIgd2ViIGJyb3dzZXIgZnJvbSB0aGUg4oCdRGVmYXVsdCB3ZWIgYnJvd3NlcuKAnSBwb3AtdXAgbWVudS48L2xpPlxuXHRcdFx0XHQ8L29sPlxuXHRcdFx0ey9pZn1cblx0XHQ8L2Rpdj5cblx0XHQ8aHI+XG5cdFx0IDxkaXYgY2xhc3M6cGMgb246Y2xpY2s9XCJ7KCkgPT4gcGMgPSAhcGN9XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZXRcIj5cblx0XHRcdDxwPkNoYW5nZSB5b3VyIGRlZnVhbHQgc2VhcmNoIGVuZ2luZSBmb3IgV2luZG93cyA8L3A+PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG48cGF0aCBkPVwiTTE4Ljg4NSA3TDEyIDEzLjc5ODlMNS4xMTUgN0wzIDkuMDkzMTJMMTIgMThMMjEgOS4wOTMxMkwxOC44ODUgN1pcIiBmaWxsPVwid2hpdGVcIi8+XG48L3N2Zz48L2Rpdj5cblx0XHRcdHsjaWYgcGN9XG5cdFx0XHQ8b2w+XG5cdFx0XHRcdFx0PGxpPlNlbGVjdCB0aGUgU3RhcnQgIGJ1dHRvbiwgYW5kIHRoZW4gdHlwZSBEZWZhdWx0IGFwcHMuPC9saT5cblx0XHRcdFx0XHQ8bGk+SW4gdGhlIHNlYXJjaCByZXN1bHRzLCBzZWxlY3QgRGVmYXVsdCBhcHBzLjwvbGk+XG5cdFx0XHRcdFx0PGxpPlVuZGVyIFdlYiBicm93c2VyLCBzZWxlY3QgdGhlIGJyb3dzZXIgY3VycmVudGx5IGxpc3RlZCwgYW5kIHRoZW4gc2VsZWN0IE1pY3Jvc29mdCBFZGdlIG9yIGFub3RoZXIgYnJvd3Nlci48L2xpPlxuXHRcdFx0PC9vbD5cbiAgICBcdFx0ey9pZn1cblx0XHQ8L2Rpdj5cblx0XHQ8aHI+XG5cdFx0PGRpdj5cblx0XHQgICA8cD48YSBocmVmPVwiaHR0cHM6Ly9jaHJvbWUuZ29vZ2xlLmNvbS93ZWJzdG9yZS9kZXRhaWwvZHVja2R1Y2tnby1wcml2YWN5LWVzc2VudC9ia2RnZmxjbGRubm5hcGJsa2hwaGJncGdnZGlpa3BwZ1wiIHRhcmdldD1cIl9ibGFua1wiPk9yIHlvdSBjYW4gZG93bmxvYWQgdGhlIER1Y2tEdWNrR28gRXh0ZW5zaW9uIGhlcmU8L2E+PC9wPlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0XHQ8Q29tcGxldGU+XG4gICAgICAgIFx0XHRTZWFyY2ggRW5naW5lIENoYW5nZWRcblx0XHRcdDwvQ29tcGxldGU+XG5cdFx0XHQ8Q29tcGxldGUgc3VjY2Vzcz17ZmFsc2V9PlxuICAgICAgICBcdFx0Tm8gVGhhbmtzXG4gICAgXHRcdDwvQ29tcGxldGU+XG5cdFx0PC9kaXY+XG5cdFx0ey9pZn1cblx0PC9zZWN0aW9uPlxuXHRcdDxCYWNrLz5cblx0PC9UcmFucz5cblx0XHRcblx0XHRcblx0PHN0eWxlPlxuXHRcdC5jYXJldHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdH1cblx0XHRhIHtcblx0XHRcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuXHRcdH1cblx0PC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBeUNRLEdBQUc7d0JBY0gsR0FBRTs7Ozs7Ozs7Ozs7O2FBZ0JZLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUE5Qm5CLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztjQWNILEdBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTVCTSxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUxkLEdBQUssT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQVhiLE9BQU87NkJBQWEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQzs7O0tBRTdDLEdBQUcsR0FBRyxLQUFLO0tBQ1gsRUFBRSxHQUFHLEtBQUs7Ozs7Ozs7Ozs2Q0FvQm1CLEdBQUcsSUFBSSxHQUFHOytDQWdCVixFQUFFLElBQUksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
