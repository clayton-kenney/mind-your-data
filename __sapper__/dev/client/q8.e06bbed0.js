import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, t as text, a as space, T as empty, h as claim_text, c as claim_space, l as insert_dev, K as set_data_dev, n as noop, b as detach_dev, o as createEventDispatcher, N as onMount, M as afterUpdate, p as globals, q as query_selector_all, x as transition_out, y as check_outros, z as transition_in, B as group_outros, e as element, r as create_component, f as claim_element, g as children, u as claim_component, k as add_location, j as attr_dev, m as append_dev, w as mount_component, P as listen_dev, A as destroy_component, U as run_all } from './client.8f3d349e.js';

/* src/components/Detect.svelte generated by Svelte v3.23.2 */

// (61:0) {:else}
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
		source: "(61:0) {:else}",
		ctx
	});

	return block;
}

// (59:25) 
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
		source: "(59:25) ",
		ctx
	});

	return block;
}

// (57:20) 
function create_if_block_5(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Chrome instructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Chrome instructions");
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
		id: create_if_block_5.name,
		type: "if",
		source: "(57:20) ",
		ctx
	});

	return block;
}

// (55:18) 
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
		source: "(55:18) ",
		ctx
	});

	return block;
}

// (53:15) 
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
		source: "(53:15) ",
		ctx
	});

	return block;
}

// (51:20) 
function create_if_block_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Safari instructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Safari instructions");
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
		id: create_if_block_2.name,
		type: "if",
		source: "(51:20) ",
		ctx
	});

	return block;
}

// (49:20) 
function create_if_block_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Firefox instructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Firefox instructions");
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
		id: create_if_block_1.name,
		type: "if",
		source: "(49:20) ",
		ctx
	});

	return block;
}

// (47:0) {#if isOpera}
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
		source: "(47:0) {#if isOpera}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let t1;
	let if_block_anchor;

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
			t0 = text(/*browser*/ ctx[0]);
			t1 = space();
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			t0 = claim_text(nodes, /*browser*/ ctx[0]);
			t1 = claim_space(nodes);
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, t1, anchor);
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*browser*/ 1) set_data_dev(t0, /*browser*/ ctx[0]);
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(t1);
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
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
const file = "src/routes/quiz/q8.svelte";

// (51:14) 
function create_if_block_1$1(ctx) {
	let section;
	let p0;
	let t0;
	let t1;
	let detect;
	let t2;
	let t3;
	let p1;
	let t4;
	let t5;
	let div;
	let h3;
	let t6;
	let t7;
	let button0;
	let t8;
	let t9;
	let button1;
	let t10;
	let current;
	let mounted;
	let dispose;
	detect = new Detect({ $$inline: true });

	function select_block_type_1(ctx, dirty) {
		if (isOpera) return create_if_block_2$1;
		if (isFirefox) return create_if_block_3$1;
		if (isSafari) return create_if_block_4$1;
		if (isIE) return create_if_block_5$1;
		if (isEdge) return create_if_block_6$1;
		if (isChrome) return create_if_block_7;
		if (isEdgeChromium) return create_if_block_8;
		return create_else_block$1;
	}

	let current_block_type = select_block_type_1();
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			section = element("section");
			p0 = element("p");
			t0 = text("Give 3rd party cookies the boot");
			t1 = space();
			create_component(detect.$$.fragment);
			t2 = space();
			if_block.c();
			t3 = space();
			p1 = element("p");
			t4 = text("instructions to change browser settings autodetect");
			t5 = space();
			div = element("div");
			h3 = element("h3");
			t6 = text("Did you disable tracking cookies?");
			t7 = space();
			button0 = element("button");
			t8 = text("Yup");
			t9 = space();
			button1 = element("button");
			t10 = text("No I then following me");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "Give 3rd party cookies the boot");
			p0_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			claim_component(detect.$$.fragment, section_nodes);
			t2 = claim_space(section_nodes);
			if_block.l(section_nodes);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "instructions to change browser settings autodetect");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h3 = claim_element(div_nodes, "H3", {});
			var h3_nodes = children(h3);
			t6 = claim_text(h3_nodes, "Did you disable tracking cookies?");
			h3_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t8 = claim_text(button0_nodes, "Yup");
			button0_nodes.forEach(detach_dev);
			t9 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t10 = claim_text(button1_nodes, "No I then following me");
			button1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(p0, file, 52, 1, 1370);
			add_location(p1, file, 72, 1, 1761);
			add_location(h3, file, 74, 2, 1850);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 75, 2, 1895);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 76, 2, 1938);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 73, 1, 1820);
			add_location(section, file, 51, 0, 1359);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, p0);
			append_dev(p0, t0);
			append_dev(section, t1);
			mount_component(detect, section, null);
			append_dev(section, t2);
			if_block.m(section, null);
			append_dev(section, t3);
			append_dev(section, p1);
			append_dev(p1, t4);
			append_dev(section, t5);
			append_dev(section, div);
			append_dev(div, h3);
			append_dev(h3, t6);
			append_dev(div, t7);
			append_dev(div, button0);
			append_dev(button0, t8);
			append_dev(div, t9);
			append_dev(div, button1);
			append_dev(button1, t10);
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
			if_block.d();
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1$1.name,
		type: "if",
		source: "(51:14) ",
		ctx
	});

	return block;
}

// (42:0) {#if q==0}
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
			add_location(h2, file, 43, 1, 866);
			add_location(p0, file, 44, 1, 910);
			add_location(p1, file, 45, 1, 1065);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 47, 2, 1280);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 46, 1, 1250);
			add_location(section, file, 42, 0, 855);
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
		source: "(42:0) {#if q==0}",
		ctx
	});

	return block;
}

// (69:1) {:else}
function create_else_block$1(ctx) {
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
		id: create_else_block$1.name,
		type: "else",
		source: "(69:1) {:else}",
		ctx
	});

	return block;
}

// (67:26) 
function create_if_block_8(ctx) {
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
		id: create_if_block_8.name,
		type: "if",
		source: "(67:26) ",
		ctx
	});

	return block;
}

// (65:21) 
function create_if_block_7(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Chrome instructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Chrome instructions");
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
		id: create_if_block_7.name,
		type: "if",
		source: "(65:21) ",
		ctx
	});

	return block;
}

// (63:19) 
function create_if_block_6$1(ctx) {
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
		id: create_if_block_6$1.name,
		type: "if",
		source: "(63:19) ",
		ctx
	});

	return block;
}

// (61:16) 
function create_if_block_5$1(ctx) {
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
		id: create_if_block_5$1.name,
		type: "if",
		source: "(61:16) ",
		ctx
	});

	return block;
}

// (59:21) 
function create_if_block_4$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Safari instructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Safari instructions");
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
		id: create_if_block_4$1.name,
		type: "if",
		source: "(59:21) ",
		ctx
	});

	return block;
}

// (57:21) 
function create_if_block_3$1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Firefox instructions");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Firefox instructions");
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
		id: create_if_block_3$1.name,
		type: "if",
		source: "(57:21) ",
		ctx
	});

	return block;
}

// (55:1) {#if isOpera}
function create_if_block_2$1(ctx) {
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
		id: create_if_block_2$1.name,
		type: "if",
		source: "(55:1) {#if isOpera}",
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

		console.log(browser);
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

	let browserType;

	onMount(async () => {
		browserType = navigator.appCodeName;

		if (browserType == "Mozilla") {
			$$invalidate(0, q = 1);
		}
	});

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
		advanceTwo,
		browserType
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(0, q = $$props.q);
		if ("browserType" in $$props) browserType = $$props.browserType;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTguZTA2YmJlZDAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0RldGVjdC5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovcTguc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4vLyBPcGVyYSA4LjArXG52YXIgaXNPcGVyYSA9ICghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCA/IHRydWUgOiBmYWxzZTtcblxuLy8gRmlyZWZveCAxLjArXG52YXIgaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcblxuLy8gU2FmYXJpIDMuMCsgXCJbb2JqZWN0IEhUTUxFbGVtZW50Q29uc3RydWN0b3JdXCIgXG52YXIgaXNTYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7IH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8ICh0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpID8gdHJ1ZSA6IGZhbHNlO1xuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciA2LTExXG52YXIgaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlID8gdHJ1ZSA6IGZhbHNlO1xuXG4vLyBFZGdlIDIwK1xudmFyIGlzRWRnZSA9ICFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEgPyB0cnVlIDogZmFsc2U7XG5cbi8vIENocm9tZSAxIC0gNzlcbnZhciBpc0Nocm9tZSA9ICEhd2luZG93LmNocm9tZSAmJiAoISF3aW5kb3cuY2hyb21lLndlYnN0b3JlIHx8ICEhd2luZG93LmNocm9tZS5ydW50aW1lKSA/IHRydWUgOiBmYWxzZTtcblxuLy8gRWRnZSAoYmFzZWQgb24gY2hyb21pdW0pIGRldGVjdGlvblxudmFyIGlzRWRnZUNocm9taXVtID0gaXNDaHJvbWUgJiYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ1wiKSAhPSAtMSkgPyB0cnVlIDogZmFsc2U7XG5cbi8vIEJsaW5rIGVuZ2luZSBkZXRlY3Rpb25cbnZhciBpc0JsaW5rID0gKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUyA/IHRydWUgOiBmYWxzZTtcblxuXG5sZXQgYnJvd3NlciA9ICdZb3VyIGJyb3dzZXIgaXM6JztcbmlmIChpc09wZXJhKXtcbiAgICBicm93c2VyKz0gXCIgT3BlcmFcIlxufSBlbHNlIGlmIChpc0ZpcmVmb3gpIHtcbiAgICBicm93c2VyKz0gXCIgRmlyZWZveFwiXG59ZWxzZSBpZiAoaXNTYWZhcmkpIHtcbiAgICBicm93c2VyKz0gXCIgU2FmYXJpXCJcbn1lbHNlIGlmIChpc0lFKSB7XG4gICAgYnJvd3Nlcis9IFwiIEludGVybmV0IEV4cGxvcmVyXCJcbn1lbHNlIGlmIChpc0VkZ2UpIHtcbiAgICBicm93c2VyKz0gXCIgRWRnZVwiXG59ZWxzZSBpZiAoaXNDaHJvbWUpIHtcbiAgICBicm93c2VyKz0gXCIgQ2hyb21lXCJcbn1lbHNlIGlmIChpc0VkZ2VDaHJvbWl1bSkge1xuICAgIGJyb3dzZXIrPSBcIiBFZGdlIENocm9taXVtXCJcbn0gZWxzZSB7XG4gICAgLy9icm93c2VyKz0gXCIgQmxpbmtcIlxufVxuPC9zY3JpcHQ+XG57YnJvd3Nlcn1cbnsjaWYgaXNPcGVyYX0gXG5cdE9wZXJhIGluc3RydWN0aW9uc1xuezplbHNlIGlmIGlzRmlyZWZveH0gXG5cdEZpcmVmb3ggaW5zdHJ1Y3Rpb25zXG57OmVsc2UgaWYgaXNTYWZhcmkgfVxuXHRTYWZhcmkgaW5zdHJ1Y3Rpb25zXG57OmVsc2UgaWYgaXNJRX0gXG5cdElFIGluc3RydWN0aW9uc1xuezplbHNlIGlmIGlzRWRnZSB9XG5cdEVkZ2UgaW5zcnVjdGlvbnNcbns6ZWxzZSBpZiBpc0Nocm9tZSB9XG5cdENocm9tZSBpbnN0cnVjdGlvbnNcbns6ZWxzZSBpZiBpc0VkZ2VDaHJvbWl1bX1cblx0RWRnZSBDaHJvbWl1bSBpbnN0cnVjdGlvbnNcbns6ZWxzZX0gXG5cdFNvbWUgb3RoZXIgaW5zdHJ1Y3Rpb25zXG57L2lmfVxuPHN0eWxlPlxuXG4gICAgXG48L3N0eWxlPiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cdGltcG9ydCB7IG9uTW91bnQsIGFmdGVyVXBkYXRlIH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IERldGVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGVjdC5zdmVsdGUnXG5cblx0XG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdFx0fSk7XG5cdFx0Y29uc29sZS5sb2coYnJvd3Nlcik7XG5cdH1cblx0ZnVuY3Rpb24gaW5jb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAnZmFsc2UnXG5cdFx0fSk7XG5cdH1cblx0bGV0IHEgPSAwO1xuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHErKztcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuXHRmdW5jdGlvbiBhZHZhbmNlVHdvKCkge1xuXHRcdHErPTI7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cblx0bGV0IGJyb3dzZXJUeXBlO1xuXHRvbk1vdW50KGFzeW5jICgpID0+IHtcblx0XHRicm93c2VyVHlwZSA9IG5hdmlnYXRvci5hcHBDb2RlTmFtZTtcblx0XHRpZiAoYnJvd3NlclR5cGUgPT0gXCJNb3ppbGxhXCIpIHtcblx0XHRcdHE9MTtcblx0XHR9XG5cdH0pXG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlF1ZXN0aW9uIDQ6IFByaXZhY3kgU2V0dGluZ3M8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbnsjaWYgcT09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+UHJpdmFjeSBzZXR0aW5nczogV2FudCBhIGNvb2tpZT88L2gyPiBcblx0PHA+V2VsbCwgbm90IHRoYXQga2luZCBvZiBjb29raWUuIE1hbnkgd2Vic2l0ZXMgYWxsb3cgdGhpcmQgcGFydHkgY29va2llcyB3aGljaCBhcmUgZGVzaWduZWQgdG8gaG9sZCBkYXRhIHNwZWNpZmljIHRvIGEgcGFydGljdWxhciB1c2VyIGFuZCB3ZWJzaXRlLiA8L3A+XG5cdDxwPllvdeKAmXJlIGp1c3Qgc3VwcG9zZWQgdG8gdHJ1c3QgdGhlIHdpbGxpbmduZXNzIGFuZCBhYmlsaXR5IG9mIGFueSBvcmdhbml6YXRpb24gdG8gcHV0IHlvdXIgcHJpdmFjeSBvdmVyIHRoZWlyIG5lZWQgdG8gbWVldCB0aGVpciBnb2Fscywgd2hpY2ggdXN1YWxseSBlbnRhaWwgcHJvZml0cy4gWWVhaC4gU3VyZS48L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17YWR2YW5jZX0+Q29udGludWU8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgcT0xfVxuPHNlY3Rpb24+XG5cdDxwPkdpdmUgM3JkIHBhcnR5IGNvb2tpZXMgdGhlIGJvb3Q8L3A+XG5cdDxEZXRlY3QgLz5cblx0eyNpZiBpc09wZXJhfSBcblx0T3BlcmEgaW5zdHJ1Y3Rpb25zXG5cdHs6ZWxzZSBpZiBpc0ZpcmVmb3h9IFxuXHRGaXJlZm94IGluc3RydWN0aW9uc1xuXHR7OmVsc2UgaWYgaXNTYWZhcmkgfVxuXHRTYWZhcmkgaW5zdHJ1Y3Rpb25zXG5cdHs6ZWxzZSBpZiBpc0lFfSBcblx0SUUgaW5zdHJ1Y3Rpb25zXG5cdHs6ZWxzZSBpZiBpc0VkZ2UgfVxuXHRFZGdlIGluc3J1Y3Rpb25zXG5cdHs6ZWxzZSBpZiBpc0Nocm9tZSB9XG5cdENocm9tZSBpbnN0cnVjdGlvbnNcblx0ezplbHNlIGlmIGlzRWRnZUNocm9taXVtfVxuXHRFZGdlIENocm9taXVtIGluc3RydWN0aW9uc1xuXHR7OmVsc2V9IFxuXHRTb21lIG90aGVyIGluc3RydWN0aW9uc1xuXHR7L2lmfVxuXHRcblx0PHA+aW5zdHJ1Y3Rpb25zIHRvIGNoYW5nZSBicm93c2VyIHNldHRpbmdzIGF1dG9kZXRlY3Q8L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PGgzPkRpZCB5b3UgZGlzYWJsZSB0cmFja2luZyBjb29raWVzPzwvaDM+XG5cdFx0PGJ1dHRvbiBvbjpjbGljaz17Y29tcGxldGV9Pll1cDwvYnV0dG9uPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9Pk5vIEkgdGhlbiBmb2xsb3dpbmcgbWU8L2J1dHRvbj5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuPHN0eWxlPlxuICAgLmJ1dHRvbi1ob2xkZXIge1xuXHR3aWR0aDogMjd2dztcblx0ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICB9XG4gICBidXR0b24ge1xuXHQgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdCAgIG1hcmdpbjogMTBweDtcblx0ICAgYm9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdCAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBOENLLEdBQU87b0JBRUYsR0FBUzttQkFFVCxHQUFRO2VBRVIsR0FBSTtpQkFFSixHQUFNO21CQUVOLEdBQVE7eUJBRVIsR0FBYzs7Ozs7Ozs7O3lCQWJ2QixHQUFPOzs7Ozs7c0NBQVAsR0FBTzs7Ozs7Ozs7Ozs7OzJEQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTNDSixPQUFPLEtBQU0sTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxNQUFPLE1BQU0sQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLENBQUM7R0FBRyxJQUFJO0dBQUcsS0FBSzs7O0tBR3RILFNBQVMsVUFBVSxjQUFjLEtBQUssV0FBVyxHQUFHLElBQUksR0FBRyxLQUFLOzs7S0FHaEUsUUFBUSxJQUFHLGNBQWMsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsZ0JBQWdCLENBQUM7U0FBVyxDQUFDLENBQUMsUUFBUSxPQUFPLG1DQUFtQztLQUFNLE1BQU0sQ0FBQyxRQUFRLFlBQWEsTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsZ0JBQWdCO0dBQUssSUFBSTtHQUFHLEtBQUs7OztLQUdyTyxJQUFJO0lBQTBCLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEtBQUs7OztLQUdsRSxNQUFNLElBQUksSUFBSSxNQUFNLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEtBQUs7OztLQUdwRCxRQUFRLEtBQUssTUFBTSxDQUFDLE1BQU0sT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87R0FBSSxJQUFJO0dBQUcsS0FBSzs7O0tBR2xHLGNBQWMsR0FBRyxRQUFRLElBQUssU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxNQUFNLENBQUM7R0FBSSxJQUFJO0dBQUcsS0FBSzs7O0tBR3RGLE9BQU8sSUFBSSxRQUFRLElBQUksT0FBTyxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEtBQUs7O0tBRzlELE9BQU8sR0FBRyxrQkFBa0I7O0tBQzVCLE9BQU87RUFDUCxPQUFPLElBQUcsUUFBUTtZQUNYLFNBQVM7RUFDaEIsT0FBTyxJQUFHLFVBQVU7WUFDZCxRQUFRO0VBQ2QsT0FBTyxJQUFHLFNBQVM7WUFDYixJQUFJO0VBQ1YsT0FBTyxJQUFHLG9CQUFvQjtZQUN4QixNQUFNO0VBQ1osT0FBTyxJQUFHLE9BQU87WUFDWCxRQUFRO0VBQ2QsT0FBTyxJQUFHLFNBQVM7WUFDYixjQUFjO0VBQ3BCLE9BQU8sSUFBRyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DY3hCLE9BQU87TUFFRixTQUFTO01BRVQsUUFBUTtNQUVSLElBQUk7TUFFSixNQUFNO01BRU4sUUFBUTtNQUVSLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FTTCxHQUFRO2lEQUNSLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQTdCVixHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU50QixHQUFDLE9BQUUsQ0FBQztZQVNDLEdBQUMsTUFBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FoRE4sUUFBUSxHQUFHLHFCQUFxQjs7O1VBTTdCLFFBQVE7RUFDaEIsUUFBUSxDQUFDLFNBQVM7R0FDakIsUUFBUSxFQUFFLENBQUM7R0FDWCxRQUFRLEVBQUUsTUFBTTs7O0VBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTzs7O1VBRVgsVUFBVTtFQUNsQixRQUFRLENBQUMsU0FBUztHQUNqQixRQUFRLEVBQUUsQ0FBQztHQUNYLFFBQVEsRUFBRSxPQUFPOzs7O0tBR2YsQ0FBQyxHQUFHLENBQUM7O1VBQ0EsT0FBTztrQkFDZixDQUFDO0VBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7VUFFTCxVQUFVO2tCQUNsQixDQUFDLElBQUUsQ0FBQztFQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O0tBRVYsV0FBVzs7Q0FDZixPQUFPO0VBQ04sV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXOztNQUMvQixXQUFXLElBQUksU0FBUzttQkFDM0IsQ0FBQyxHQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=