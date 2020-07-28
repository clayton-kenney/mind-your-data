import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, f as element, C as text, B as space, g as claim_element, h as children, F as claim_text, j as detach_dev, E as claim_space, k as attr_dev, l as add_location, n as insert_dev, p as append_dev, N as set_data_dev, G as noop } from './client.3e311d11.js';

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
	let ol;
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
			ol = element("ol");
			li0 = element("li");
			t0 = text("Click the wrench icon in the top-right corner of the browser window and \n        ");
			li1 = element("li");
			t1 = text("Choose Options > Under the Hood > Content Settings > Cookies.");
			t2 = space();
			li2 = element("li");
			t3 = text("Block all third-party cookies or all tracking cookies");
			t4 = space();
			li3 = element("li");
			t5 = text("Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.");
			this.h();
		},
		l: function claim(nodes) {
			ol = claim_element(nodes, "OL", {});
			var ol_nodes = children(ol);
			li0 = claim_element(ol_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "Click the wrench icon in the top-right corner of the browser window and \n        ");
			li0_nodes.forEach(detach_dev);
			li1 = claim_element(ol_nodes, "LI", {});
			var li1_nodes = children(li1);
			t1 = claim_text(li1_nodes, "Choose Options > Under the Hood > Content Settings > Cookies.");
			li1_nodes.forEach(detach_dev);
			t2 = claim_space(ol_nodes);
			li2 = claim_element(ol_nodes, "LI", {});
			var li2_nodes = children(li2);
			t3 = claim_text(li2_nodes, "Block all third-party cookies or all tracking cookies");
			li2_nodes.forEach(detach_dev);
			t4 = claim_space(ol_nodes);
			li3 = claim_element(ol_nodes, "LI", {});
			var li3_nodes = children(li3);
			t5 = claim_text(li3_nodes, "Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.");
			li3_nodes.forEach(detach_dev);
			ol_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 70, 8, 2480);
			add_location(li1, file, 71, 8, 2565);
			add_location(li2, file, 72, 8, 2645);
			add_location(li3, file, 73, 8, 2716);
			add_location(ol, file, 69, 1, 2467);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ol, anchor);
			append_dev(ol, li0);
			append_dev(li0, t0);
			append_dev(ol, li1);
			append_dev(li1, t1);
			append_dev(ol, t2);
			append_dev(ol, li2);
			append_dev(li2, t3);
			append_dev(ol, t4);
			append_dev(ol, li3);
			append_dev(li3, t5);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ol);
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
	let ol;
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
			ol = element("ol");
			li0 = element("li");
			t0 = text("Click the wrench icon in the top-right corner of the browser window and \n        ");
			li1 = element("li");
			t1 = text("Choose Options > Under the Hood > Content Settings > Cookies.");
			t2 = space();
			li2 = element("li");
			t3 = text("Block all third-party cookies or all tracking cookies");
			t4 = space();
			li3 = element("li");
			t5 = text("Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.");
			this.h();
		},
		l: function claim(nodes) {
			ol = claim_element(nodes, "OL", {});
			var ol_nodes = children(ol);
			li0 = claim_element(ol_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "Click the wrench icon in the top-right corner of the browser window and \n        ");
			li0_nodes.forEach(detach_dev);
			li1 = claim_element(ol_nodes, "LI", {});
			var li1_nodes = children(li1);
			t1 = claim_text(li1_nodes, "Choose Options > Under the Hood > Content Settings > Cookies.");
			li1_nodes.forEach(detach_dev);
			t2 = claim_space(ol_nodes);
			li2 = claim_element(ol_nodes, "LI", {});
			var li2_nodes = children(li2);
			t3 = claim_text(li2_nodes, "Block all third-party cookies or all tracking cookies");
			li2_nodes.forEach(detach_dev);
			t4 = claim_space(ol_nodes);
			li3 = claim_element(ol_nodes, "LI", {});
			var li3_nodes = children(li3);
			t5 = claim_text(li3_nodes, "Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.");
			li3_nodes.forEach(detach_dev);
			ol_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 59, 8, 1999);
			add_location(li1, file, 60, 8, 2084);
			add_location(li2, file, 61, 8, 2164);
			add_location(li3, file, 62, 8, 2235);
			add_location(ol, file, 58, 4, 1986);
		},
		m: function mount(target, anchor) {
			insert_dev(target, ol, anchor);
			append_dev(ol, li0);
			append_dev(li0, t0);
			append_dev(ol, li1);
			append_dev(li1, t1);
			append_dev(ol, t2);
			append_dev(ol, li2);
			append_dev(li2, t3);
			append_dev(ol, t4);
			append_dev(ol, li3);
			append_dev(li3, t5);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ol);
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
	let ol;
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
			ol = element("ol");
			li0 = element("li");
			t0 = text("In Firefox, click Tools > Options > Privacy");
			t1 = space();
			li1 = element("li");
			t2 = text("Select \"Use custom settings for history\" in the drop-down menu at the top of the dialog box");
			t3 = space();
			li2 = element("li");
			t4 = text("Check \"Clear history when Firefox closes\"");
			t5 = space();
			li3 = element("li");
			t6 = text("Click the Settings button");
			t7 = space();
			li4 = element("li");
			t8 = text("In the Settings for Clearing History dialog, check the options you want to erase on exit and click OK");
			this.h();
		},
		l: function claim(nodes) {
			ol = claim_element(nodes, "OL", {});
			var ol_nodes = children(ol);
			li0 = claim_element(ol_nodes, "LI", {});
			var li0_nodes = children(li0);
			t0 = claim_text(li0_nodes, "In Firefox, click Tools > Options > Privacy");
			li0_nodes.forEach(detach_dev);
			t1 = claim_space(ol_nodes);
			li1 = claim_element(ol_nodes, "LI", {});
			var li1_nodes = children(li1);
			t2 = claim_text(li1_nodes, "Select \"Use custom settings for history\" in the drop-down menu at the top of the dialog box");
			li1_nodes.forEach(detach_dev);
			t3 = claim_space(ol_nodes);
			li2 = claim_element(ol_nodes, "LI", {});
			var li2_nodes = children(li2);
			t4 = claim_text(li2_nodes, "Check \"Clear history when Firefox closes\"");
			li2_nodes.forEach(detach_dev);
			t5 = claim_space(ol_nodes);
			li3 = claim_element(ol_nodes, "LI", {});
			var li3_nodes = children(li3);
			t6 = claim_text(li3_nodes, "Click the Settings button");
			li3_nodes.forEach(detach_dev);
			t7 = claim_space(ol_nodes);
			li4 = claim_element(ol_nodes, "LI", {});
			var li4_nodes = children(li4);
			t8 = claim_text(li4_nodes, "In the Settings for Clearing History dialog, check the options you want to erase on exit and click OK");
			li4_nodes.forEach(detach_dev);
			ol_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(li0, file, 51, 8, 1565);
			add_location(li1, file, 52, 8, 1626);
			add_location(li2, file, 53, 8, 1736);
			add_location(li3, file, 54, 8, 1796);
			add_location(li4, file, 55, 8, 1840);
			add_location(ol, file, 50, 1, 1552);
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
			append_dev(ol, t5);
			append_dev(ol, li3);
			append_dev(li3, t6);
			append_dev(ol, t7);
			append_dev(ol, li4);
			append_dev(li4, t8);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(ol);
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
	let strong;
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
			strong = element("strong");
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
			strong = claim_element(p0_nodes, "STRONG", { class: true });
			var strong_nodes = children(strong);
			t0 = claim_text(strong_nodes, /*browser*/ ctx[0]);
			strong_nodes.forEach(detach_dev);
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
			attr_dev(strong, "class", "svelte-1qffeqo");
			add_location(strong, file, 45, 3, 1455);
			add_location(p0, file, 45, 0, 1452);
			add_location(p1, file, 46, 0, 1486);
			add_location(p2, file, 80, 0, 2949);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p0, anchor);
			append_dev(p0, strong);
			append_dev(strong, t0);
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

export { Detect as D };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGV0ZWN0LmMyYWJmOTMxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9EZXRlY3Quc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4vLyBPcGVyYSA4LjArXG52YXIgaXNPcGVyYSA9ICghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCA/IHRydWUgOiBmYWxzZTtcblxuLy8gRmlyZWZveCAxLjArXG52YXIgaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcblxuLy8gU2FmYXJpIDMuMCsgXCJbb2JqZWN0IEhUTUxFbGVtZW50Q29uc3RydWN0b3JdXCIgXG52YXIgaXNTYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7IH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8ICh0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpID8gdHJ1ZSA6IGZhbHNlO1xuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciA2LTExXG52YXIgaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlID8gdHJ1ZSA6IGZhbHNlO1xuXG4vLyBFZGdlIDIwK1xudmFyIGlzRWRnZSA9ICFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEgPyB0cnVlIDogZmFsc2U7XG5cbi8vIENocm9tZSAxIC0gNzlcbnZhciBpc0Nocm9tZSA9ICEhd2luZG93LmNocm9tZSAmJiAoISF3aW5kb3cuY2hyb21lLndlYnN0b3JlIHx8ICEhd2luZG93LmNocm9tZS5ydW50aW1lKSA/IHRydWUgOiBmYWxzZTtcblxuLy8gRWRnZSAoYmFzZWQgb24gY2hyb21pdW0pIGRldGVjdGlvblxudmFyIGlzRWRnZUNocm9taXVtID0gaXNDaHJvbWUgJiYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ1wiKSAhPSAtMSkgPyB0cnVlIDogZmFsc2U7XG5cbi8vIEJsaW5rIGVuZ2luZSBkZXRlY3Rpb25cbnZhciBpc0JsaW5rID0gKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUyA/IHRydWUgOiBmYWxzZTtcblxuXG5sZXQgYnJvd3NlciA9ICdZb3VyIGJyb3dzZXIgaXM6JztcbmlmIChpc09wZXJhKXtcbiAgICBicm93c2VyKz0gXCIgT3BlcmFcIlxufSBlbHNlIGlmIChpc0ZpcmVmb3gpIHtcbiAgICBicm93c2VyKz0gXCIgRmlyZWZveFwiXG59ZWxzZSBpZiAoaXNTYWZhcmkpIHtcbiAgICBicm93c2VyKz0gXCIgU2FmYXJpXCJcbn1lbHNlIGlmIChpc0lFKSB7XG4gICAgYnJvd3Nlcis9IFwiIEludGVybmV0IEV4cGxvcmVyXCJcbn1lbHNlIGlmIChpc0VkZ2UpIHtcbiAgICBicm93c2VyKz0gXCIgRWRnZVwiXG59ZWxzZSBpZiAoaXNDaHJvbWUpIHtcbiAgICBicm93c2VyKz0gXCIgQ2hyb21lXCJcbn1lbHNlIGlmIChpc0VkZ2VDaHJvbWl1bSkge1xuICAgIGJyb3dzZXIrPSBcIiBFZGdlIENocm9taXVtXCJcbn0gZWxzZSB7XG4gICAgLy9icm93c2VyKz0gXCIgQmxpbmtcIlxufVxuPC9zY3JpcHQ+XG48cD48c3Ryb25nPnticm93c2VyfTwvc3Ryb25nPjwvcD5cbjxwPjwvcD5cbnsjaWYgaXNPcGVyYX0gXG5cdE9wZXJhIGluc3RydWN0aW9uc1xuezplbHNlIGlmIGlzRmlyZWZveH0gXG5cdDxvbD5cbiAgICAgICAgPGxpPkluIEZpcmVmb3gsIGNsaWNrIFRvb2xzID4gT3B0aW9ucyA+IFByaXZhY3k8L2xpPlxuICAgICAgICA8bGk+U2VsZWN0IFwiVXNlIGN1c3RvbSBzZXR0aW5ncyBmb3IgaGlzdG9yeVwiIGluIHRoZSBkcm9wLWRvd24gbWVudSBhdCB0aGUgdG9wIG9mIHRoZSBkaWFsb2cgYm94PC9saT4gXG4gICAgICAgIDxsaT5DaGVjayBcIkNsZWFyIGhpc3Rvcnkgd2hlbiBGaXJlZm94IGNsb3Nlc1wiIDwvbGk+XG4gICAgICAgIDxsaT5DbGljayB0aGUgU2V0dGluZ3MgYnV0dG9uIDwvbGk+XG4gICAgICAgIDxsaT5JbiB0aGUgU2V0dGluZ3MgZm9yIENsZWFyaW5nIEhpc3RvcnkgZGlhbG9nLCBjaGVjayB0aGUgb3B0aW9ucyB5b3Ugd2FudCB0byBlcmFzZSBvbiBleGl0IGFuZCBjbGljayBPSzwvbGk+XG4gICAgPC9vbD5cbns6ZWxzZSBpZiBpc1NhZmFyaSB9XG4gICAgPG9sPlxuICAgICAgICA8bGk+Q2xpY2sgdGhlIHdyZW5jaCBpY29uIGluIHRoZSB0b3AtcmlnaHQgY29ybmVyIG9mIHRoZSBicm93c2VyIHdpbmRvdyBhbmQgXG4gICAgICAgIDxsaT5DaG9vc2UgT3B0aW9ucyA+IFVuZGVyIHRoZSBIb29kID4gQ29udGVudCBTZXR0aW5ncyA+IENvb2tpZXMuPC9saT4gXG4gICAgICAgIDxsaT5CbG9jayBhbGwgdGhpcmQtcGFydHkgY29va2llcyBvciBhbGwgdHJhY2tpbmcgY29va2llczwvbGk+XG4gICAgICAgIDxsaT5Bbm90aGVyIG9wdGlvbiBpbiB0aGlzIGRpYWxvZyBsZXRzIHlvdSBkZWxldGUgYWxsIGNvb2tpZXMgYW5kIG90aGVyIHNpdGUgZGF0YSBhdXRvbWF0aWNhbGx5IHdoZW4geW91IGNsb3NlIHRoZSBicm93c2VyLjwvbGk+XG4gICAgPC9vbD5cbns6ZWxzZSBpZiBpc0lFfSBcblx0SUUgaW5zdHJ1Y3Rpb25zXG57OmVsc2UgaWYgaXNFZGdlIH1cblx0RWRnZSBpbnNydWN0aW9uc1xuezplbHNlIGlmIGlzQ2hyb21lIH1cblx0PG9sPlxuICAgICAgICA8bGk+Q2xpY2sgdGhlIHdyZW5jaCBpY29uIGluIHRoZSB0b3AtcmlnaHQgY29ybmVyIG9mIHRoZSBicm93c2VyIHdpbmRvdyBhbmQgXG4gICAgICAgIDxsaT5DaG9vc2UgT3B0aW9ucyA+IFVuZGVyIHRoZSBIb29kID4gQ29udGVudCBTZXR0aW5ncyA+IENvb2tpZXMuPC9saT4gXG4gICAgICAgIDxsaT5CbG9jayBhbGwgdGhpcmQtcGFydHkgY29va2llcyBvciBhbGwgdHJhY2tpbmcgY29va2llczwvbGk+XG4gICAgICAgIDxsaT5Bbm90aGVyIG9wdGlvbiBpbiB0aGlzIGRpYWxvZyBsZXRzIHlvdSBkZWxldGUgYWxsIGNvb2tpZXMgYW5kIG90aGVyIHNpdGUgZGF0YSBhdXRvbWF0aWNhbGx5IHdoZW4geW91IGNsb3NlIHRoZSBicm93c2VyLjwvbGk+XG4gICAgPC9vbD5cbns6ZWxzZSBpZiBpc0VkZ2VDaHJvbWl1bX1cblx0RWRnZSBDaHJvbWl1bSBpbnN0cnVjdGlvbnNcbns6ZWxzZX0gXG5cdFNvbWUgb3RoZXIgaW5zdHJ1Y3Rpb25zXG57L2lmfVxuPHA+PC9wPlxuPHN0eWxlPlxuICAgIHN0cm9uZ3tcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBK0NLLEdBQU87b0JBRUYsR0FBUzttQkFRVCxHQUFRO2VBT1IsR0FBSTtpQkFFSixHQUFNO21CQUVOLEdBQVE7eUJBT1IsR0FBYzs7Ozs7Ozs7Ozs7eUJBOUJaLEdBQU87Ozs7Ozs7Ozs7Ozs7OzZDQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJEQUFQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQTNDZixPQUFPLEtBQU0sTUFBTSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsTUFBTSxNQUFPLE1BQU0sQ0FBQyxLQUFLLElBQUksU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxLQUFLLENBQUM7R0FBRyxJQUFJO0dBQUcsS0FBSzs7O0tBR3RILFNBQVMsVUFBVSxjQUFjLEtBQUssV0FBVyxHQUFHLElBQUksR0FBRyxLQUFLOzs7S0FHaEUsUUFBUSxJQUFHLGNBQWMsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsZ0JBQWdCLENBQUM7U0FBVyxDQUFDLENBQUMsUUFBUSxPQUFPLG1DQUFtQztLQUFNLE1BQU0sQ0FBQyxRQUFRLFlBQWEsTUFBTSxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsZ0JBQWdCO0dBQUssSUFBSTtHQUFHLEtBQUs7OztLQUdyTyxJQUFJO0lBQTBCLFFBQVEsQ0FBQyxZQUFZLEdBQUcsSUFBSSxHQUFHLEtBQUs7OztLQUdsRSxNQUFNLElBQUksSUFBSSxNQUFNLE1BQU0sQ0FBQyxVQUFVLEdBQUcsSUFBSSxHQUFHLEtBQUs7OztLQUdwRCxRQUFRLEtBQUssTUFBTSxDQUFDLE1BQU0sT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsTUFBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU87R0FBSSxJQUFJO0dBQUcsS0FBSzs7O0tBR2xHLGNBQWMsR0FBRyxRQUFRLElBQUssU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxNQUFNLENBQUM7R0FBSSxJQUFJO0dBQUcsS0FBSzs7O0tBR3RGLE9BQU8sSUFBSSxRQUFRLElBQUksT0FBTyxPQUFPLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxHQUFHLEtBQUs7O0tBRzlELE9BQU8sR0FBRyxrQkFBa0I7O0tBQzVCLE9BQU87RUFDUCxPQUFPLElBQUcsUUFBUTtZQUNYLFNBQVM7RUFDaEIsT0FBTyxJQUFHLFVBQVU7WUFDZCxRQUFRO0VBQ2QsT0FBTyxJQUFHLFNBQVM7WUFDYixJQUFJO0VBQ1YsT0FBTyxJQUFHLG9CQUFvQjtZQUN4QixNQUFNO0VBQ1osT0FBTyxJQUFHLE9BQU87WUFDWCxRQUFRO0VBQ2QsT0FBTyxJQUFHLFNBQVM7WUFDYixjQUFjO0VBQ3BCLE9BQU8sSUFBRyxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
