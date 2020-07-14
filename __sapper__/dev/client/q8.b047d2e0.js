import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, f as claim_element, g as children, h as claim_text, b as detach_dev, c as claim_space, k as add_location, l as insert_dev, m as append_dev, K as set_data_dev, n as noop, o as createEventDispatcher, Q as onMount, O as afterUpdate, p as globals, Y as empty, q as query_selector_all, x as transition_out, y as check_outros, z as transition_in, B as group_outros, r as create_component, u as claim_component, j as attr_dev, w as mount_component, V as listen_dev, A as destroy_component, W as run_all } from './client.e9ec61cb.js';

/* src/components/Detect.svelte generated by Svelte v3.23.2 */

const file = "src/components/Detect.svelte";

// (78:0) {:else}
function create_else_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Some other instructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Some other instructions");
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
		id: create_else_block.name,
		type: "else",
		source: "(78:0) {:else}",
		ctx
	});

	return block;
}

// (76:25) 
function create_if_block_6(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Edge Chromium instructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Edge Chromium instructions");
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
		id: create_if_block_6.name,
		type: "if",
		source: "(76:25) ",
		ctx
	});

	return block;
}

// (69:20) 
function create_if_block_5(ctx) {
	let ul;
	let li0;
	let t0;
	let li1;
	let t1;
	let t2;
	let li2;
	let t3;
	let t4;
	let li3;
	let t5;

	const block = {
		c: function create() {
			ul = element("ul");
			li0 = element("li");
			t0 = text("click the wrench icon in the top-right corner of the browser window and \n        ");
			li1 = element("li");
			t1 = text("choose Options > Under the Hood > Content Settings > Cookies.");
			t2 = space();
			li2 = element("li");
			t3 = text("block all third-party cookies or all tracking cookies");
			t4 = space();
			li3 = element("li");
			t5 = text("Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.");
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "click the wrench icon in the top-right corner of the browser window and \n        ");
			li0_nodes.forEach(detach_dev);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t1 = claim_text(li1_nodes, "choose Options > Under the Hood > Content Settings > Cookies.");
			li1_nodes.forEach(detach_dev);
			t2 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t3 = claim_text(li2_nodes, "block all third-party cookies or all tracking cookies");
			li2_nodes.forEach(detach_dev);
			t4 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t5 = claim_text(li3_nodes, "Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.");
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 70, 8, 2468);
			add_location(li1, file, 71, 8, 2553);
			add_location(li2, file, 72, 8, 2633);
			add_location(li3, file, 73, 8, 2704);
			add_location(ul, file, 69, 1, 2455);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, t0);
			append_dev(ul, li1);
			append_dev(li1, t1);
			append_dev(ul, t2);
			append_dev(ul, li2);
			append_dev(li2, t3);
			append_dev(ul, t4);
			append_dev(ul, li3);
			append_dev(li3, t5);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_5.name,
		type: "if",
		source: "(69:20) ",
		ctx
	});

	return block;
}

// (67:18) 
function create_if_block_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Edge insructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Edge insructions");
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
		id: create_if_block_4.name,
		type: "if",
		source: "(67:18) ",
		ctx
	});

	return block;
}

// (65:15) 
function create_if_block_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("IE instructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "IE instructions");
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
		id: create_if_block_3.name,
		type: "if",
		source: "(65:15) ",
		ctx
	});

	return block;
}

// (58:20) 
function create_if_block_2(ctx) {
	let ul;
	let li0;
	let t0;
	let li1;
	let t1;
	let t2;
	let li2;
	let t3;
	let t4;
	let li3;
	let t5;

	const block = {
		c: function create() {
			ul = element("ul");
			li0 = element("li");
			t0 = text("click the wrench icon in the top-right corner of the browser window and \n        ");
			li1 = element("li");
			t1 = text("choose Options > Under the Hood > Content Settings > Cookies.");
			t2 = space();
			li2 = element("li");
			t3 = text("block all third-party cookies or all tracking cookies");
			t4 = space();
			li3 = element("li");
			t5 = text("Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.");
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "click the wrench icon in the top-right corner of the browser window and \n        ");
			li0_nodes.forEach(detach_dev);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t1 = claim_text(li1_nodes, "choose Options > Under the Hood > Content Settings > Cookies.");
			li1_nodes.forEach(detach_dev);
			t2 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t3 = claim_text(li2_nodes, "block all third-party cookies or all tracking cookies");
			li2_nodes.forEach(detach_dev);
			t4 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t5 = claim_text(li3_nodes, "Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.");
			li3_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 59, 8, 1986);
			add_location(li1, file, 60, 8, 2071);
			add_location(li2, file, 61, 8, 2151);
			add_location(li3, file, 62, 8, 2222);
			add_location(ul, file, 58, 4, 1973);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, t0);
			append_dev(ul, li1);
			append_dev(li1, t1);
			append_dev(ul, t2);
			append_dev(ul, li2);
			append_dev(li2, t3);
			append_dev(ul, t4);
			append_dev(ul, li3);
			append_dev(li3, t5);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_2.name,
		type: "if",
		source: "(58:20) ",
		ctx
	});

	return block;
}

// (50:20) 
function create_if_block_1(ctx) {
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
	let t7;
	let li4;
	let t8;

	const block = {
		c: function create() {
			ul = element("ul");
			li0 = element("li");
			t0 = text("In Firefox, click Tools > Options > Privacy");
			t1 = space();
			li1 = element("li");
			t2 = text("select \"Use custom settings for history\" in the drop-down menu at the top of the dialog box,");
			t3 = space();
			li2 = element("li");
			t4 = text("check \"Clear history when Firefox closes,\"");
			t5 = space();
			li3 = element("li");
			t6 = text("click the Settings button.");
			t7 = space();
			li4 = element("li");
			t8 = text("In the Settings for Clearing History dialog, check the options you want to erase on exit and click OK.");
			this.h();
		},
		l: function claim(nodes) {
			ul = claim_element(nodes, "UL", {});
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "In Firefox, click Tools > Options > Privacy");
			li0_nodes.forEach(detach_dev);
			t1 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", {});
			var li1_nodes = children(li1);
			t2 = claim_text(li1_nodes, "select \"Use custom settings for history\" in the drop-down menu at the top of the dialog box,");
			li1_nodes.forEach(detach_dev);
			t3 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", {});
			var li2_nodes = children(li2);
			t4 = claim_text(li2_nodes, "check \"Clear history when Firefox closes,\"");
			li2_nodes.forEach(detach_dev);
			t5 = claim_space(ul_nodes);
			li3 = claim_element(ul_nodes, "LI", {});
			var li3_nodes = children(li3);
			t6 = claim_text(li3_nodes, "click the Settings button.");
			li3_nodes.forEach(detach_dev);
			t7 = claim_space(ul_nodes);
			li4 = claim_element(ul_nodes, "LI", {});
			var li4_nodes = children(li4);
			t8 = claim_text(li4_nodes, "In the Settings for Clearing History dialog, check the options you want to erase on exit and click OK.");
			li4_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 51, 8, 1548);
			add_location(li1, file, 52, 8, 1609);
			add_location(li2, file, 53, 8, 1720);
			add_location(li3, file, 54, 8, 1781);
			add_location(li4, file, 55, 8, 1826);
			add_location(ul, file, 50, 1, 1535);
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
			append_dev(ul, t7);
			append_dev(ul, li4);
			append_dev(li4, t8);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ul);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(50:20) ",
		ctx
	});

	return block;
}

// (48:0) {#if isOpera}
function create_if_block(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Opera instructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Opera instructions");
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
		id: create_if_block.name,
		type: "if",
		source: "(48:0) {#if isOpera}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let p0;
	let t0;
	let t1;
	let p1;
	let t2;
	let t3;
	let p2;

	function select_block_type(ctx, dirty) {
		if (/*isOpera*/ ctx[1]) return create_if_block;
		if (/*isFirefox*/ ctx[2]) return create_if_block_1;
		if (/*isSafari*/ ctx[3]) return create_if_block_2;
		if (/*isIE*/ ctx[4]) return create_if_block_3;
		if (/*isEdge*/ ctx[5]) return create_if_block_4;
		if (/*isChrome*/ ctx[6]) return create_if_block_5;
		if (/*isEdgeChromium*/ ctx[7]) return create_if_block_6;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			p0 = element("p");
			t0 = text(/*browser*/ ctx[0]);
			t1 = space();
			p1 = element("p");
			t2 = space();
			if_block.c();
			t3 = space();
			p2 = element("p");
			this.h();
		},
		l: function claim(nodes) {
			p0 = claim_element(nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, /*browser*/ ctx[0]);
			p0_nodes.forEach(detach_dev);
			t1 = claim_space(nodes);
			p1 = claim_element(nodes, "P", {});
			children(p1).forEach(detach_dev);
			t2 = claim_space(nodes);
			if_block.l(nodes);
			t3 = claim_space(nodes);
			p2 = claim_element(nodes, "P", {});
			children(p2).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p0, file, 45, 0, 1452);
			add_location(p1, file, 46, 0, 1469);
			add_location(p2, file, 80, 0, 2938);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p0, anchor);
			append_dev(p0, t0);
			insert_dev(target, t1, anchor);
			insert_dev(target, p1, anchor);
			insert_dev(target, t2, anchor);
			if_block.m(target, anchor);
			insert_dev(target, t3, anchor);
			insert_dev(target, p2, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*browser*/ 1) set_data_dev(t0, /*browser*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p0);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(p1);
			if (detaching) detach_dev(t2);
			if_block.d(detaching);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(p2);
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
	var isOpera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0
	? true
	: false;

	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== "undefined" ? true : false;

	// Safari 3.0+ "[object HTMLElementConstructor]" 
	var isSafari = (/constructor/i).test(window.HTMLElement) || (function (p) {
		return p.toString() === "[object SafariRemoteNotification]";
	})(!window["safari"] || typeof safari !== "undefined" && safari.pushNotification)
	? true
	: false;

	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/
	 !!document.documentMode ? true : false;

	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia ? true : false;

	// Chrome 1 - 79
	var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
	? true
	: false;

	// Edge (based on chromium) detection
	var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") != -1
	? true
	: false;

	// Blink engine detection
	var isBlink = (isChrome || isOpera) && !!window.CSS ? true : false;

	let browser = "Your browser is:";

	if (isOpera) {
		browser += " Opera";
	} else if (isFirefox) {
		browser += " Firefox";
	} else if (isSafari) {
		browser += " Safari";
	} else if (isIE) {
		browser += " Internet Explorer";
	} else if (isEdge) {
		browser += " Edge";
	} else if (isChrome) {
		browser += " Chrome";
	} else if (isEdgeChromium) {
		browser += " Edge Chromium";
	} //browser+= " Blink"

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Detect> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Detect", $$slots, []);

	$$self.$capture_state = () => ({
		isOpera,
		isFirefox,
		isSafari,
		isIE,
		isEdge,
		isChrome,
		isEdgeChromium,
		isBlink,
		browser
	});

	$$self.$inject_state = $$props => {
		if ("isOpera" in $$props) $$invalidate(1, isOpera = $$props.isOpera);
		if ("isFirefox" in $$props) $$invalidate(2, isFirefox = $$props.isFirefox);
		if ("isSafari" in $$props) $$invalidate(3, isSafari = $$props.isSafari);
		if ("isIE" in $$props) $$invalidate(4, isIE = $$props.isIE);
		if ("isEdge" in $$props) $$invalidate(5, isEdge = $$props.isEdge);
		if ("isChrome" in $$props) $$invalidate(6, isChrome = $$props.isChrome);
		if ("isEdgeChromium" in $$props) $$invalidate(7, isEdgeChromium = $$props.isEdgeChromium);
		if ("isBlink" in $$props) isBlink = $$props.isBlink;
		if ("browser" in $$props) $$invalidate(0, browser = $$props.browser);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [browser, isOpera, isFirefox, isSafari, isIE, isEdge, isChrome, isEdgeChromium];
}

class Detect extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Detect",
			options,
			id: create_fragment.name
		});
	}
}

/* src/routes/quiz/q8.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file$1 = "src/routes/quiz/q8.svelte";

// (43:14) 
function create_if_block_1$1(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let detect;
	let t2;
	let div;
	let h3;
	let t3;
	let t4;
	let button0;
	let t5;
	let t6;
	let button1;
	let t7;
	let current;
	let mounted;
	let dispose;
	detect = new Detect({ $$inline: true });

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Give 3rd party cookies the boot");
			t1 = space();
			create_component(detect.$$.fragment);
			t2 = space();
			div = element("div");
			h3 = element("h3");
			t3 = text("Did you disable tracking cookies?");
			t4 = space();
			button0 = element("button");
			t5 = text("Yup");
			t6 = space();
			button1 = element("button");
			t7 = text("No I then following me");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Give 3rd party cookies the boot");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			claim_component(detect.$$.fragment, section_nodes);
			t2 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h3 = claim_element(div_nodes, "H3", {});
			var h3_nodes = children(h3);
			t3 = claim_text(h3_nodes, "Did you disable tracking cookies?");
			h3_nodes.forEach(detach_dev);
			t4 = claim_space(div_nodes);
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t5 = claim_text(button0_nodes, "Yup");
			button0_nodes.forEach(detach_dev);
			t6 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t7 = claim_text(button1_nodes, "No I then following me");
			button1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 44, 1, 1216);
			add_location(h3, file$1, 47, 2, 1300);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file$1, 48, 2, 1345);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file$1, 49, 2, 1388);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file$1, 46, 1, 1270);
			add_location(section, file$1, 43, 0, 1205);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			mount_component(detect, section, null);
			append_dev(section, t2);
			append_dev(section, div);
			append_dev(div, h3);
			append_dev(h3, t3);
			append_dev(div, t4);
			append_dev(div, button0);
			append_dev(button0, t5);
			append_dev(div, t6);
			append_dev(div, button1);
			append_dev(button1, t7);
			current = true;

			if (!mounted) {
				dispose = [
					listen_dev(button0, "click", /*complete*/ ctx[1], false, false, false),
					listen_dev(button1, "click", /*incomplete*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(detect.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(detect.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(detect);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$1.name,
		type: "if",
		source: "(43:14) ",
		ctx
	});

	return block;
}

// (34:0) {#if q==0}
function create_if_block$1(ctx) {
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
	let button;
	let t6;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Privacy settings: Want a cookie?");
			t1 = space();
			p0 = element("p");
			t2 = text("Well, not that kind of cookie. Many websites allow third party cookies which are designed to hold data specific to a particular user and website.");
			t3 = space();
			p1 = element("p");
			t4 = text("You’re just supposed to trust the willingness and ability of any organization to put your privacy over their need to meet their goals, which usually entail profits. Yeah. Sure.");
			t5 = space();
			div = element("div");
			button = element("button");
			t6 = text("Continue");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Privacy settings: Want a cookie?");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Well, not that kind of cookie. Many websites allow third party cookies which are designed to hold data specific to a particular user and website.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "You’re just supposed to trust the willingness and ability of any organization to put your privacy over their need to meet their goals, which usually entail profits. Yeah. Sure.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			button = claim_element(div_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t6 = claim_text(button_nodes, "Continue");
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file$1, 35, 1, 712);
			add_location(p0, file$1, 36, 1, 756);
			add_location(p1, file$1, 37, 1, 911);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file$1, 39, 2, 1126);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file$1, 38, 1, 1096);
			add_location(section, file$1, 34, 0, 701);
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
			append_dev(div, button);
			append_dev(button, t6);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*advance*/ ctx[3], false, false, false);
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
		id: create_if_block$1.name,
		type: "if",
		source: "(34:0) {#if q==0}",
		ctx
	});

	return block;
}

function create_fragment$1(ctx) {
	let t;
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block$1, create_if_block_1$1];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return 0;
		if (/*q*/ ctx[0] = 1) return 1;
		return -1;
	}

	if (~(current_block_type_index = select_block_type(ctx))) {
		if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
	}

	const block = {
		c: function create() {
			t = space();
			if (if_block) if_block.c();
			if_block_anchor = empty();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1g6utuz\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
			this.h();
		},
		h: function hydrate() {
			document.title = "Question 4: Privacy Settings";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].m(target, anchor);
			}

			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index === previous_block_index) {
				if (~current_block_type_index) {
					if_blocks[current_block_type_index].p(ctx, dirty);
				}
			} else {
				if (if_block) {
					group_outros();

					transition_out(if_blocks[previous_block_index], 1, 1, () => {
						if_blocks[previous_block_index] = null;
					});

					check_outros();
				}

				if (~current_block_type_index) {
					if_block = if_blocks[current_block_type_index];

					if (!if_block) {
						if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
						if_block.c();
					}

					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				} else {
					if_block = null;
				}
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
			if (detaching) detach_dev(t);

			if (~current_block_type_index) {
				if_blocks[current_block_type_index].d(detaching);
			}

			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props, $$invalidate) {
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q8> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q8", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		onMount,
		afterUpdate,
		Detect,
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

	return [q, complete, incomplete, advance];
}

class Q8 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q8",
			options,
			id: create_fragment$1.name
		});
	}
}

export default Q8;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTguYjA0N2QyZTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RldGVjdC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovcTguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4vLyBPcGVyYSA4LjArXG52YXIgaXNPcGVyYSA9ICghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCA/IHRydWUgOiBmYWxzZTtcblxuLy8gRmlyZWZveCAxLjArXG52YXIgaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcblxuLy8gU2FmYXJpIDMuMCsgXCJbb2JqZWN0IEhUTUxFbGVtZW50Q29uc3RydWN0b3JdXCIgXG52YXIgaXNTYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7IH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8ICh0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpID8gdHJ1ZSA6IGZhbHNlO1xuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciA2LTExXG52YXIgaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlID8gdHJ1ZSA6IGZhbHNlO1xuXG4vLyBFZGdlIDIwK1xudmFyIGlzRWRnZSA9ICFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEgPyB0cnVlIDogZmFsc2U7XG5cbi8vIENocm9tZSAxIC0gNzlcbnZhciBpc0Nocm9tZSA9ICEhd2luZG93LmNocm9tZSAmJiAoISF3aW5kb3cuY2hyb21lLndlYnN0b3JlIHx8ICEhd2luZG93LmNocm9tZS5ydW50aW1lKSA/IHRydWUgOiBmYWxzZTtcblxuLy8gRWRnZSAoYmFzZWQgb24gY2hyb21pdW0pIGRldGVjdGlvblxudmFyIGlzRWRnZUNocm9taXVtID0gaXNDaHJvbWUgJiYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ1wiKSAhPSAtMSkgPyB0cnVlIDogZmFsc2U7XG5cbi8vIEJsaW5rIGVuZ2luZSBkZXRlY3Rpb25cbnZhciBpc0JsaW5rID0gKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUyA/IHRydWUgOiBmYWxzZTtcblxuXG5sZXQgYnJvd3NlciA9ICdZb3VyIGJyb3dzZXIgaXM6JztcbmlmIChpc09wZXJhKXtcbiAgICBicm93c2VyKz0gXCIgT3BlcmFcIlxufSBlbHNlIGlmIChpc0ZpcmVmb3gpIHtcbiAgICBicm93c2VyKz0gXCIgRmlyZWZveFwiXG59ZWxzZSBpZiAoaXNTYWZhcmkpIHtcbiAgICBicm93c2VyKz0gXCIgU2FmYXJpXCJcbn1lbHNlIGlmIChpc0lFKSB7XG4gICAgYnJvd3Nlcis9IFwiIEludGVybmV0IEV4cGxvcmVyXCJcbn1lbHNlIGlmIChpc0VkZ2UpIHtcbiAgICBicm93c2VyKz0gXCIgRWRnZVwiXG59ZWxzZSBpZiAoaXNDaHJvbWUpIHtcbiAgICBicm93c2VyKz0gXCIgQ2hyb21lXCJcbn1lbHNlIGlmIChpc0VkZ2VDaHJvbWl1bSkge1xuICAgIGJyb3dzZXIrPSBcIiBFZGdlIENocm9taXVtXCJcbn0gZWxzZSB7XG4gICAgLy9icm93c2VyKz0gXCIgQmxpbmtcIlxufVxuPC9zY3JpcHQ+XG48cD57YnJvd3Nlcn08L3A+XG48cD48L3A+XG57I2lmIGlzT3BlcmF9IFxuXHRPcGVyYSBpbnN0cnVjdGlvbnNcbns6ZWxzZSBpZiBpc0ZpcmVmb3h9IFxuXHQ8dWw+XG4gICAgICAgIDxsaT5JbiBGaXJlZm94LCBjbGljayBUb29scyA+IE9wdGlvbnMgPiBQcml2YWN5PC9saT5cbiAgICAgICAgPGxpPnNlbGVjdCBcIlVzZSBjdXN0b20gc2V0dGluZ3MgZm9yIGhpc3RvcnlcIiBpbiB0aGUgZHJvcC1kb3duIG1lbnUgYXQgdGhlIHRvcCBvZiB0aGUgZGlhbG9nIGJveCw8L2xpPiBcbiAgICAgICAgPGxpPmNoZWNrIFwiQ2xlYXIgaGlzdG9yeSB3aGVuIEZpcmVmb3ggY2xvc2VzLFwiIDwvbGk+XG4gICAgICAgIDxsaT5jbGljayB0aGUgU2V0dGluZ3MgYnV0dG9uLiA8L2xpPlxuICAgICAgICA8bGk+SW4gdGhlIFNldHRpbmdzIGZvciBDbGVhcmluZyBIaXN0b3J5IGRpYWxvZywgY2hlY2sgdGhlIG9wdGlvbnMgeW91IHdhbnQgdG8gZXJhc2Ugb24gZXhpdCBhbmQgY2xpY2sgT0suPC9saT5cbiAgICA8L3VsPlxuezplbHNlIGlmIGlzU2FmYXJpIH1cbiAgICA8dWw+XG4gICAgICAgIDxsaT5jbGljayB0aGUgd3JlbmNoIGljb24gaW4gdGhlIHRvcC1yaWdodCBjb3JuZXIgb2YgdGhlIGJyb3dzZXIgd2luZG93IGFuZCBcbiAgICAgICAgPGxpPmNob29zZSBPcHRpb25zID4gVW5kZXIgdGhlIEhvb2QgPiBDb250ZW50IFNldHRpbmdzID4gQ29va2llcy48L2xpPiBcbiAgICAgICAgPGxpPmJsb2NrIGFsbCB0aGlyZC1wYXJ0eSBjb29raWVzIG9yIGFsbCB0cmFja2luZyBjb29raWVzPC9saT5cbiAgICAgICAgPGxpPiBBbm90aGVyIG9wdGlvbiBpbiB0aGlzIGRpYWxvZyBsZXRzIHlvdSBkZWxldGUgYWxsIGNvb2tpZXMgYW5kIG90aGVyIHNpdGUgZGF0YSBhdXRvbWF0aWNhbGx5IHdoZW4geW91IGNsb3NlIHRoZSBicm93c2VyLjwvbGk+XG4gICAgPC91bD5cbns6ZWxzZSBpZiBpc0lFfSBcblx0SUUgaW5zdHJ1Y3Rpb25zXG57OmVsc2UgaWYgaXNFZGdlIH1cblx0RWRnZSBpbnNydWN0aW9uc1xuezplbHNlIGlmIGlzQ2hyb21lIH1cblx0PHVsPlxuICAgICAgICA8bGk+Y2xpY2sgdGhlIHdyZW5jaCBpY29uIGluIHRoZSB0b3AtcmlnaHQgY29ybmVyIG9mIHRoZSBicm93c2VyIHdpbmRvdyBhbmQgXG4gICAgICAgIDxsaT5jaG9vc2UgT3B0aW9ucyA+IFVuZGVyIHRoZSBIb29kID4gQ29udGVudCBTZXR0aW5ncyA+IENvb2tpZXMuPC9saT4gXG4gICAgICAgIDxsaT5ibG9jayBhbGwgdGhpcmQtcGFydHkgY29va2llcyBvciBhbGwgdHJhY2tpbmcgY29va2llczwvbGk+XG4gICAgICAgIDxsaT4gQW5vdGhlciBvcHRpb24gaW4gdGhpcyBkaWFsb2cgbGV0cyB5b3UgZGVsZXRlIGFsbCBjb29raWVzIGFuZCBvdGhlciBzaXRlIGRhdGEgYXV0b21hdGljYWxseSB3aGVuIHlvdSBjbG9zZSB0aGUgYnJvd3Nlci48L2xpPlxuICAgIDwvdWw+XG57OmVsc2UgaWYgaXNFZGdlQ2hyb21pdW19XG5cdEVkZ2UgQ2hyb21pdW0gaW5zdHJ1Y3Rpb25zXG57OmVsc2V9IFxuXHRTb21lIG90aGVyIGluc3RydWN0aW9uc1xuey9pZn1cbjxwPjwvcD5cbjxzdHlsZT5cblxuICAgIFxuPC9zdHlsZT4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGltcG9ydCBEZXRlY3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRlY3Quc3ZlbHRlJ1xuXG5cdFxuXHQvL2NvbmZpcm0gY29tbGV0aW9uIG9mIHF1aXogdG8gbWFzdGVyIHF1aXogY29tcG9uZW50XG5cdGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0cXVlc3Rpb246IDIsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICd0cnVlJ1xuXHRcdH0pO1xuXHR9XG5cdGZ1bmN0aW9uIGluY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ2ZhbHNlJ1xuXHRcdH0pO1xuXHR9XG5cdGxldCBxID0gMDtcblx0ZnVuY3Rpb24gYWR2YW5jZSgpIHtcblx0XHRxKys7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cblx0ZnVuY3Rpb24gYWR2YW5jZVR3bygpIHtcblx0XHRxKz0yO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuXHR9XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlF1ZXN0aW9uIDQ6IFByaXZhY3kgU2V0dGluZ3M8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbnsjaWYgcT09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+UHJpdmFjeSBzZXR0aW5nczogV2FudCBhIGNvb2tpZT88L2gyPiBcblx0PHA+V2VsbCwgbm90IHRoYXQga2luZCBvZiBjb29raWUuIE1hbnkgd2Vic2l0ZXMgYWxsb3cgdGhpcmQgcGFydHkgY29va2llcyB3aGljaCBhcmUgZGVzaWduZWQgdG8gaG9sZCBkYXRhIHNwZWNpZmljIHRvIGEgcGFydGljdWxhciB1c2VyIGFuZCB3ZWJzaXRlLiA8L3A+XG5cdDxwPllvdeKAmXJlIGp1c3Qgc3VwcG9zZWQgdG8gdHJ1c3QgdGhlIHdpbGxpbmduZXNzIGFuZCBhYmlsaXR5IG9mIGFueSBvcmdhbml6YXRpb24gdG8gcHV0IHlvdXIgcHJpdmFjeSBvdmVyIHRoZWlyIG5lZWQgdG8gbWVldCB0aGVpciBnb2Fscywgd2hpY2ggdXN1YWxseSBlbnRhaWwgcHJvZml0cy4gWWVhaC4gU3VyZS48L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17YWR2YW5jZX0+Q29udGludWU8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgcT0xfVxuPHNlY3Rpb24+XG5cdDxoMj5HaXZlIDNyZCBwYXJ0eSBjb29raWVzIHRoZSBib290PC9oMj5cblx0PERldGVjdCAvPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxoMz5EaWQgeW91IGRpc2FibGUgdHJhY2tpbmcgY29va2llcz88L2gzPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2NvbXBsZXRlfT5ZdXA8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtpbmNvbXBsZXRlfT5ObyBJIHRoZW4gZm9sbG93aW5nIG1lPC9idXR0b24+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuey9pZn1cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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
