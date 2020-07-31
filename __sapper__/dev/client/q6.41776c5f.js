import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, v as validate_slots, B as space, f as element, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, g as claim_element, h as children, a as claim_component, l as add_location, n as insert_dev, p as append_dev, m as mount_component, b as transition_out, x as check_outros, t as transition_in, q as add_render_callback, r as create_in_transition, u as create_out_transition, e as destroy_component, Q as set_store_value, k as attr_dev, w as group_outros, C as text, V as svg_element, F as claim_text, W as toggle_class, R as listen_dev, X as run_all } from './client.5afa026c.js';
import { a as fly, f as fade, s as sineInOut } from './index.6b230c13.js';
import { T as TransHelp } from './TransHelp.a42e57d4.js';
import { c as count, s as step, q as quizSteps } from './store.ce49f920.js';
import { B as Back, C as Complete } from './Back.ce380307.js';
import { B as Btn } from './Btn.945867b0.js';

/* src/routes/quiz/q6.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q6.svelte";

// (29:0) {:else}
function create_else_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p0;
	let t2;
	let t3;
	let div1;
	let div0;
	let p1;
	let t4;
	let t5;
	let svg0;
	let path0;
	let t6;
	let t7;
	let hr;
	let t8;
	let div3;
	let div2;
	let p2;
	let t9;
	let t10;
	let svg1;
	let path1;
	let t11;
	let t12;
	let div4;
	let complete0;
	let t13;
	let complete1;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*mac*/ ctx[0] && create_if_block_2(ctx);
	let if_block1 = /*pc*/ ctx[1] && create_if_block_1(ctx);

	complete0 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete1 = new Complete({
			props: {
				success: false,
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Setup Quad9");
			t1 = space();
			p0 = element("p");
			t2 = text("Quad9 is a free, not-for-profit security solution that uses the DNS to protect your system against the most common cyber threats. Not only does it  preserve and protect your privacy, it will also improve your system’s performance! It’s like a painless immunization for your computer and devices.");
			t3 = space();
			div1 = element("div");
			div0 = element("div");
			p1 = element("p");
			t4 = text("Setup Quad9 for Mac:");
			t5 = space();
			svg0 = svg_element("svg");
			path0 = svg_element("path");
			t6 = space();
			if (if_block0) if_block0.c();
			t7 = space();
			hr = element("hr");
			t8 = space();
			div3 = element("div");
			div2 = element("div");
			p2 = element("p");
			t9 = text("Setup Quad9 for PC:");
			t10 = space();
			svg1 = svg_element("svg");
			path1 = svg_element("path");
			t11 = space();
			if (if_block1) if_block1.c();
			t12 = space();
			div4 = element("div");
			create_component(complete0.$$.fragment);
			t13 = space();
			create_component(complete1.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Setup Quad9");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Quad9 is a free, not-for-profit security solution that uses the DNS to protect your system against the most common cyber threats. Not only does it  preserve and protect your privacy, it will also improve your system’s performance! It’s like a painless immunization for your computer and devices.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", {});
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Setup Quad9 for Mac:");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);

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
			t7 = claim_space(section_nodes);
			hr = claim_element(section_nodes, "HR", {});
			t8 = claim_space(section_nodes);
			div3 = claim_element(section_nodes, "DIV", {});
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			p2 = claim_element(div2_nodes, "P", {});
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "Setup Quad9 for PC:");
			p2_nodes.forEach(detach_dev);
			t10 = claim_space(div2_nodes);

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
			t12 = claim_space(section_nodes);
			div4 = claim_element(section_nodes, "DIV", { class: true });
			var div4_nodes = children(div4);
			claim_component(complete0.$$.fragment, div4_nodes);
			t13 = claim_space(div4_nodes);
			claim_component(complete1.$$.fragment, div4_nodes);
			div4_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 30, 1, 1537);
			add_location(p0, file, 31, 1, 1559);
			add_location(p1, file, 34, 3, 1934);
			attr_dev(path0, "d", "M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z");
			attr_dev(path0, "fill", "white");
			add_location(path0, file, 36, 3, 2064);
			attr_dev(svg0, "width", "24");
			attr_dev(svg0, "height", "24");
			attr_dev(svg0, "viewBox", "0 0 24 24");
			attr_dev(svg0, "fill", "none");
			attr_dev(svg0, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg0, file, 35, 3, 1965);
			attr_dev(div0, "class", "caret svelte-h4ab6b");
			add_location(div0, file, 33, 2, 1911);
			toggle_class(div1, "mac", /*mac*/ ctx[0]);
			add_location(div1, file, 32, 1, 1863);
			add_location(hr, file, 43, 2, 2446);
			add_location(p2, file, 46, 3, 2521);
			attr_dev(path1, "d", "M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z");
			attr_dev(path1, "fill", "white");
			add_location(path1, file, 48, 3, 2650);
			attr_dev(svg1, "width", "24");
			attr_dev(svg1, "height", "24");
			attr_dev(svg1, "viewBox", "0 0 24 24");
			attr_dev(svg1, "fill", "none");
			attr_dev(svg1, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg1, file, 47, 3, 2551);
			attr_dev(div2, "class", "caret svelte-h4ab6b");
			add_location(div2, file, 45, 2, 2498);
			toggle_class(div3, "pc", /*pc*/ ctx[1]);
			add_location(div3, file, 44, 2, 2453);
			attr_dev(div4, "class", "button-holder svelte-h4ab6b");
			add_location(div4, file, 55, 1, 3045);
			add_location(section, file, 29, 0, 1526);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p0);
			append_dev(p0, t2);
			append_dev(section, t3);
			append_dev(section, div1);
			append_dev(div1, div0);
			append_dev(div0, p1);
			append_dev(p1, t4);
			append_dev(div0, t5);
			append_dev(div0, svg0);
			append_dev(svg0, path0);
			append_dev(div1, t6);
			if (if_block0) if_block0.m(div1, null);
			append_dev(section, t7);
			append_dev(section, hr);
			append_dev(section, t8);
			append_dev(section, div3);
			append_dev(div3, div2);
			append_dev(div2, p2);
			append_dev(p2, t9);
			append_dev(div2, t10);
			append_dev(div2, svg1);
			append_dev(svg1, path1);
			append_dev(div3, t11);
			if (if_block1) if_block1.m(div3, null);
			append_dev(section, t12);
			append_dev(section, div4);
			mount_component(complete0, div4, null);
			append_dev(div4, t13);
			mount_component(complete1, div4, null);
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

			if (dirty & /*$$scope*/ 256) {
				complete0_changes.$$scope = { dirty, ctx };
			}

			complete0.$set(complete0_changes);
			const complete1_changes = {};

			if (dirty & /*$$scope*/ 256) {
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
			if (detaching) detach_dev(section);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
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
		source: "(29:0) {:else}",
		ctx
	});

	return block;
}

// (20:0) {#if $step==0}
function create_if_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let btn;
	let current;

	btn = new Btn({
			props: {
				green: true,
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Domain Name Server (DNS): Quad9");
			t1 = space();
			p = element("p");
			t2 = text("Everything on the Internet, including websites, live at a numerical IP address. The Domain Name System, or DNS, translates these numerical IP addresses into human-readable domain names that we all know and remember (like mindyourdata.org). If your DNS settings are not working correctly, or you’re still using defaults, you may be at risk for cybercrime and performance issues. And, the websites you visit may be collected and shared by whatever entity owns the DNS service.");
			t3 = space();
			div = element("div");
			create_component(btn.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Domain Name Server (DNS): Quad9");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Everything on the Internet, including websites, live at a numerical IP address. The Domain Name System, or DNS, translates these numerical IP addresses into human-readable domain names that we all know and remember (like mindyourdata.org). If your DNS settings are not working correctly, or you’re still using defaults, you may be at risk for cybercrime and performance issues. And, the websites you visit may be collected and shared by whatever entity owns the DNS service.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(btn.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 21, 1, 908);
			add_location(p, file, 23, 1, 953);
			attr_dev(div, "class", "button-holder svelte-h4ab6b");
			add_location(div, file, 24, 1, 1436);
			add_location(section, file, 20, 0, 897);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			append_dev(section, div);
			mount_component(btn, div, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const btn_changes = {};

			if (dirty & /*$$scope*/ 256) {
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
			if (detaching) detach_dev(section);
			destroy_component(btn);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(20:0) {#if $step==0}",
		ctx
	});

	return block;
}

// (40:2) {#if mac}
function create_if_block_2(ctx) {
	let iframe;
	let iframe_src_value;

	const block = {
		c: function create() {
			iframe = element("iframe");
			this.h();
		},
		l: function claim(nodes) {
			iframe = claim_element(nodes, "IFRAME", {
				title: true,
				width: true,
				height: true,
				src: true,
				frameborder: true,
				allow: true,
				allowfullscreen: true
			});

			children(iframe).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(iframe, "title", "Setup Quad9 for mac");
			attr_dev(iframe, "width", "560");
			attr_dev(iframe, "height", "315");
			if (iframe.src !== (iframe_src_value = "https://www.youtube-nocookie.com/embed/NM4AdfEnAmY")) attr_dev(iframe, "src", iframe_src_value);
			attr_dev(iframe, "frameborder", "0");
			attr_dev(iframe, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe.allowFullscreen = true;
			add_location(iframe, file, 40, 2, 2188);
		},
		m: function mount(target, anchor) {
			insert_dev(target, iframe, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(iframe);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(40:2) {#if mac}",
		ctx
	});

	return block;
}

// (52:3) {#if pc}
function create_if_block_1(ctx) {
	let iframe;
	let iframe_src_value;

	const block = {
		c: function create() {
			iframe = element("iframe");
			this.h();
		},
		l: function claim(nodes) {
			iframe = claim_element(nodes, "IFRAME", {
				title: true,
				width: true,
				height: true,
				src: true,
				frameborder: true,
				allow: true,
				allowfullscreen: true
			});

			children(iframe).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(iframe, "title", "Setup Quad9 for Windows");
			attr_dev(iframe, "width", "560");
			attr_dev(iframe, "height", "315");
			if (iframe.src !== (iframe_src_value = "https://www.youtube-nocookie.com/embed/aujUl3yt6nM")) attr_dev(iframe, "src", iframe_src_value);
			attr_dev(iframe, "frameborder", "0");
			attr_dev(iframe, "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
			iframe.allowFullscreen = true;
			add_location(iframe, file, 52, 3, 2775);
		},
		m: function mount(target, anchor) {
			insert_dev(target, iframe, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(iframe);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(52:3) {#if pc}",
		ctx
	});

	return block;
}

// (57:2) <Complete>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Setup Complete");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Setup Complete");
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
		source: "(57:2) <Complete>",
		ctx
	});

	return block;
}

// (58:2) <Complete success={false}>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Don't care, let then snoop");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Don't care, let then snoop");
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
		source: "(58:2) <Complete success={false}>",
		ctx
	});

	return block;
}

// (26:2) <Btn green={true}>
function create_default_slot(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Continue");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Continue");
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
		source: "(26:2) <Btn green={true}>",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let div;
	let current_block_type_index;
	let if_block;
	let t1;
	let back;
	let div_intro;
	let div_outro;
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
			t0 = space();
			div = element("div");
			if_block.c();
			t1 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-m7zmek\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if_block.l(div_nodes);
			t1 = claim_space(div_nodes);
			claim_component(back.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Domain Name Service";
			add_location(div, file, 18, 0, 754);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			if_blocks[current_block_type_index].m(div, null);
			append_dev(div, t1);
			mount_component(back, div, null);
			current = true;
		},
		p: function update(ctx, [dirty]) {
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
				if_block.m(div, t1);
			}
		},
		i: function intro(local) {
			if (current) return;
			transition_in(if_block);
			transition_in(back.$$.fragment, local);

			add_render_callback(() => {
				if (div_outro) div_outro.end(1);

				if (!div_intro) div_intro = create_in_transition(div, fly, {
					delay: 150,
					duration: 800,
					y: 1000,
					opacity: 0,
					easing: sineInOut
				});

				div_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			transition_out(if_block);
			transition_out(back.$$.fragment, local);
			if (div_intro) div_intro.invalidate();
			div_outro = create_out_transition(div, fade, { delay: 100, duration: 800 });
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if_blocks[current_block_type_index].d();
			destroy_component(back);
			if (detaching && div_outro) div_outro.end();
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
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

	let mac = false;
	let pc = false;
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q6> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q6", $$slots, []);
	const click_handler = () => $$invalidate(0, mac = !mac);
	const click_handler_1 = () => $$invalidate(1, pc = !pc);

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
		fly,
		fade,
		sineInOut,
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

class Q6 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q6",
			options,
			id: create_fragment.name
		});
	}
}

export default Q6;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTYuNDE3NzZjNWYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cdGltcG9ydCB7IGZseSwgZmFkZSB9IGZyb20gJ3N2ZWx0ZS90cmFuc2l0aW9uJ1xuXHRpbXBvcnQgeyBzaW5lSW5PdXQgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcblx0Ly9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG4gICAgb25Nb3VudChhc3luYygpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMX0pO1xuXHRsZXQgbWFjID0gZmFsc2U7XG5cdGxldCBwYyA9IGZhbHNlO1xuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Eb21haW4gTmFtZSBTZXJ2aWNlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2IGluOmZseT1cInt7ZGVsYXk6IDE1MCwgZHVyYXRpb246IDgwMCwgeTogMTAwMCwgb3BhY2l0eTogMC4wLCBlYXNpbmc6IHNpbmVJbk91dH19XCIgb3V0OmZhZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA4MDB9fVwiPlxueyNpZiAkc3RlcD09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+RG9tYWluIE5hbWUgU2VydmVyIChETlMpOiBRdWFkOVxuXHQ8L2gyPiBcblx0PHA+RXZlcnl0aGluZyBvbiB0aGUgSW50ZXJuZXQsIGluY2x1ZGluZyB3ZWJzaXRlcywgbGl2ZSBhdCBhIG51bWVyaWNhbCBJUCBhZGRyZXNzLiBUaGUgRG9tYWluIE5hbWUgU3lzdGVtLCBvciBETlMsIHRyYW5zbGF0ZXMgdGhlc2UgbnVtZXJpY2FsIElQIGFkZHJlc3NlcyBpbnRvIGh1bWFuLXJlYWRhYmxlIGRvbWFpbiBuYW1lcyB0aGF0IHdlIGFsbCBrbm93IGFuZCByZW1lbWJlciAobGlrZSBtaW5keW91cmRhdGEub3JnKS4gSWYgeW91ciBETlMgc2V0dGluZ3MgYXJlIG5vdCB3b3JraW5nIGNvcnJlY3RseSwgb3IgeW914oCZcmUgc3RpbGwgdXNpbmcgZGVmYXVsdHMsIHlvdSBtYXkgYmUgYXQgcmlzayBmb3IgY3liZXJjcmltZSBhbmQgcGVyZm9ybWFuY2UgaXNzdWVzLiBBbmQsIHRoZSB3ZWJzaXRlcyB5b3UgdmlzaXQgbWF5IGJlIGNvbGxlY3RlZCBhbmQgc2hhcmVkIGJ5IHdoYXRldmVyIGVudGl0eSBvd25zIHRoZSBETlMgc2VydmljZS48L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PEJ0biBncmVlbj17dHJ1ZX0+Q29udGludWU8L0J0bj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2V9XG48c2VjdGlvbj5cblx0PGgyPlNldHVwIFF1YWQ5PC9oMj5cblx0PHA+UXVhZDkgaXMgYSBmcmVlLCBub3QtZm9yLXByb2ZpdCBzZWN1cml0eSBzb2x1dGlvbiB0aGF0IHVzZXMgdGhlIEROUyB0byBwcm90ZWN0IHlvdXIgc3lzdGVtIGFnYWluc3QgdGhlIG1vc3QgY29tbW9uIGN5YmVyIHRocmVhdHMuIE5vdCBvbmx5IGRvZXMgaXQgIHByZXNlcnZlIGFuZCBwcm90ZWN0IHlvdXIgcHJpdmFjeSwgaXQgd2lsbCBhbHNvIGltcHJvdmUgeW91ciBzeXN0ZW3igJlzIHBlcmZvcm1hbmNlISBJdOKAmXMgbGlrZSBhIHBhaW5sZXNzIGltbXVuaXphdGlvbiBmb3IgeW91ciBjb21wdXRlciBhbmQgZGV2aWNlcy48L3A+XG5cdDxkaXYgY2xhc3M6bWFjIG9uOmNsaWNrPVwieygpID0+IG1hYyA9ICFtYWN9XCI+XG5cdFx0PGRpdiBjbGFzcz1cImNhcmV0XCI+XG5cdFx0XHQ8cD5TZXR1cCBRdWFkOSBmb3IgTWFjOjwvcD5cblx0XHRcdDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0PHBhdGggZD1cIk0xOC44ODUgN0wxMiAxMy43OTg5TDUuMTE1IDdMMyA5LjA5MzEyTDEyIDE4TDIxIDkuMDkzMTJMMTguODg1IDdaXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC9kaXY+XG5cdFx0eyNpZiBtYWN9XG5cdFx0PGlmcmFtZSB0aXRsZT1cIlNldHVwIFF1YWQ5IGZvciBtYWNcIiB3aWR0aD1cIjU2MFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUtbm9jb29raWUuY29tL2VtYmVkL05NNEFkZkVuQW1ZXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cblx0XHR7L2lmfVxuXHQ8L2Rpdj5cblx0XHQ8aHI+XG4gXHQ8ZGl2IGNsYXNzOnBjIG9uOmNsaWNrPVwieygpID0+IHBjID0gIXBjfVwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjYXJldFwiPlxuXHRcdFx0PHA+U2V0dXAgUXVhZDkgZm9yIFBDOjwvcD5cblx0XHRcdDxzdmcgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuXHRcdFx0PHBhdGggZD1cIk0xOC44ODUgN0wxMiAxMy43OTg5TDUuMTE1IDdMMyA5LjA5MzEyTDEyIDE4TDIxIDkuMDkzMTJMMTguODg1IDdaXCIgZmlsbD1cIndoaXRlXCIvPlxuXHRcdFx0PC9zdmc+XG5cdFx0PC9kaXY+XG5cdFx0IHsjaWYgcGN9XG5cdFx0IDxpZnJhbWUgdGl0bGU9XCJTZXR1cCBRdWFkOSBmb3IgV2luZG93c1wiIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvYXVqVWwzeXQ2bk1cIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICB7L2lmfVxuICAgIDwvZGl2PlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxDb21wbGV0ZT5TZXR1cCBDb21wbGV0ZTwvQ29tcGxldGU+XG5cdFx0PENvbXBsZXRlIHN1Y2Nlc3M9e2ZhbHNlfT5Eb24ndCBjYXJlLCBsZXQgdGhlbiBzbm9vcDwvQ29tcGxldGU+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuey9pZn1cbjxCYWNrLz5cbjwvZGl2PlxuPHN0eWxlPlxuICAgLmJ1dHRvbi1ob2xkZXIge1xuXHR3aWR0aDogMjd2dztcblx0ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICB9XG4gICBidXR0b24ge1xuXHQgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdCAgIG1hcmdpbjogMTBweDtcblx0ICAgYm9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdCAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgIH1cbiAgIC5jYXJldHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZmxvdzogcm93IG5vd3JhcDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcblx0fVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5QkF1Q08sR0FBRzt3QkFZRixHQUFFOzs7Ozs7Ozs7Ozs7YUFNVyxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBbEJuQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Y0FZRixHQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7V0ExQkksSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFOYixHQUFLLE9BQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBREUsS0FBSyxFQUFFLEdBQUc7S0FBRSxRQUFRLEVBQUUsR0FBRztLQUFFLENBQUMsRUFBRSxJQUFJO0tBQUUsT0FBTyxFQUFFLENBQUc7S0FBRSxNQUFNLEVBQUUsU0FBUzs7Ozs7Ozs7Ozs7O2tEQUFnQixLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FoQnBILFFBQVEsR0FBRyxxQkFBcUI7OztDQVNuQyxPQUFPOzZCQUFhLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxHQUFHLENBQUM7OztLQUNoRCxHQUFHLEdBQUcsS0FBSztLQUNYLEVBQUUsR0FBRyxLQUFLOzs7Ozs7Ozs7NkNBbUJrQixHQUFHLElBQUksR0FBRzsrQ0FZVixFQUFFLElBQUksRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
