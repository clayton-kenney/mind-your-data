import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, p as globals, a as space, r as create_component, q as query_selector_all, b as detach_dev, c as claim_space, u as claim_component, l as insert_dev, w as mount_component, z as transition_in, x as transition_out, C as destroy_component, Q as empty, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev, R as listen_dev, n as noop } from './client.503447ef.js';
import './index.42fd54b0.js';
import { T as TransHelp } from './TransHelp.71eeb73e.js';

/* src/routes/quiz/q3.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q3.svelte";

// (32:0) {:else}
function create_else_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let button0;
	let t4;
	let t5;
	let button1;
	let t6;
	let t7;
	let button2;
	let t8;
	let t9;
	let button3;
	let t10;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Download HTTPS Everywhere extension");
			t1 = space();
			p = element("p");
			t2 = text("Informaiton about this extension. What it does exactly. How it works. What benefits users get from having this extension. The EFF has developed a browser extension that makes sure that you access all websites that offer HTTPS using… HTTPS.");
			t3 = space();
			div = element("div");
			button0 = element("button");
			t4 = text("Download extension now");
			t5 = space();
			button1 = element("button");
			t6 = text("Already Have it");
			t7 = space();
			button2 = element("button");
			t8 = text("Don't want to download it");
			t9 = space();
			button3 = element("button");
			t10 = text("Submit");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Download HTTPS Everywhere extension");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "Informaiton about this extension. What it does exactly. How it works. What benefits users get from having this extension. The EFF has developed a browser extension that makes sure that you access all websites that offer HTTPS using… HTTPS.");
			p_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t4 = claim_text(button0_nodes, "Download extension now");
			button0_nodes.forEach(detach_dev);
			t5 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t6 = claim_text(button1_nodes, "Already Have it");
			button1_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			button2 = claim_element(div_nodes, "BUTTON", { class: true });
			var button2_nodes = children(button2);
			t8 = claim_text(button2_nodes, "Don't want to download it");
			button2_nodes.forEach(detach_dev);
			t9 = claim_space(div_nodes);
			button3 = claim_element(div_nodes, "BUTTON", { class: true });
			var button3_nodes = children(button3);
			t10 = claim_text(button3_nodes, "Submit");
			button3_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 33, 1, 1632);
			add_location(p, file, 34, 1, 1678);
			add_location(section, file, 32, 0, 1621);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 37, 1, 1965);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 38, 1, 2006);
			attr_dev(button2, "class", "svelte-9jf7df");
			add_location(button2, file, 39, 1, 2040);
			attr_dev(button3, "class", "svelte-9jf7df");
			add_location(button3, file, 40, 1, 2084);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 36, 0, 1936);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			insert_dev(target, t3, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, button0);
			append_dev(button0, t4);
			append_dev(div, t5);
			append_dev(div, button1);
			append_dev(button1, t6);
			append_dev(div, t7);
			append_dev(div, button2);
			append_dev(button2, t8);
			append_dev(div, t9);
			append_dev(div, button3);
			append_dev(button3, t10);

			if (!mounted) {
				dispose = listen_dev(button3, "click", /*complete*/ ctx[1], false, false, false);
				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div);
			mounted = false;
			dispose();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(32:0) {:else}",
		ctx
	});

	return block;
}

// (23:0) {#if q==0}
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
	let button;
	let t6;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Https Everywhere");
			t1 = space();
			p0 = element("p");
			t2 = text("When you connect to a website with regular HTTP, your browser looks up the IP address that corresponds to the website, connects to that IP address, and assumes it’s connected to the correct web server. Data is sent over the connection in clear text. An eavesdropper on a Wi-Fi network, your internet service provider, or government intelligence agencies, can see the web pages you’re visiting and the data you’re transferring back and forth.");
			t3 = space();
			p1 = element("p");
			t4 = text("Many sites on the web offer some limited support for encryption over HTTPS, but make it difficult to use. For instance, they may default to unencrypted HTTP, or fill encrypted pages with links that go back to the unencrypted site. The HTTPS Everywhere extension fixes these problems by using clever technology make every site useto rewrite requests to these sites to HTTPS.With HTTPS, people running the network between your device and the server hosting the website you’re browsing, or other prying eyes, can’t see your requests and your internet traffic.");
			t5 = space();
			button = element("button");
			t6 = text("Continue to next page");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Https Everywhere");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "When you connect to a website with regular HTTP, your browser looks up the IP address that corresponds to the website, connects to that IP address, and assumes it’s connected to the correct web server. Data is sent over the connection in clear text. An eavesdropper on a Wi-Fi network, your internet service provider, or government intelligence agencies, can see the web pages you’re visiting and the data you’re transferring back and forth.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "Many sites on the web offer some limited support for encryption over HTTPS, but make it difficult to use. For instance, they may default to unencrypted HTTP, or fill encrypted pages with links that go back to the unencrypted site. The HTTPS Everywhere extension fixes these problems by using clever technology make every site useto rewrite requests to these sites to HTTPS.With HTTPS, people running the network between your device and the server hosting the website you’re browsing, or other prying eyes, can’t see your requests and your internet traffic.");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			button = claim_element(section_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t6 = claim_text(button_nodes, "Continue to next page");
			button_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 24, 1, 491);
			add_location(p0, file, 25, 2, 520);
			add_location(p1, file, 27, 2, 974);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 29, 2, 1544);
			add_location(section, file, 23, 0, 480);
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
			append_dev(section, button);
			append_dev(button, t6);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*advance*/ ctx[2], false, false, false);
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
		id: create_if_block.name,
		type: "if",
		source: "(23:0) {#if q==0}",
		ctx
	});

	return block;
}

// (22:0) <Trans>
function create_default_slot(ctx) {
	let if_block_anchor;

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			}
		},
		d: function destroy(detaching) {
			if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(22:0) <Trans>",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-yv6mrh\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Https Everywhere";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, q*/ 17) {
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
	const dispatch = createEventDispatcher();

	//confirm comletion of quiz to master quiz component
	function complete() {
		dispatch("message", {
			question: 2, //Q-1 becaue of array
			complete: "true"
		});
	}

	let q = 0;

	function advance() {
		$$invalidate(0, q += 2);
		console.log(q);
	}

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q3> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q3", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		Trans: TransHelp,
		complete,
		q,
		advance
	});

	$$self.$inject_state = $$props => {
		if ("q" in $$props) $$invalidate(0, q = $$props.q);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [q, complete, advance];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTMuYjg2ZDgyMzIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cblx0Ly9jb25maXJtIGNvbWxldGlvbiBvZiBxdWl6IHRvIG1hc3RlciBxdWl6IGNvbXBvbmVudFxuXHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAndHJ1ZSdcblx0XHR9KTtcblx0fVxuXHRsZXQgcSA9IDA7XG5cdGZ1bmN0aW9uIGFkdmFuY2UoKSB7XG5cdFx0cSs9Mjtcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5IdHRwcyBFdmVyeXdoZXJlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG57I2lmIHE9PTB9XG48c2VjdGlvbj5cblx0PGgyPkh0dHBzIEV2ZXJ5d2hlcmU8L2gyPiBcblx0XHQ8cD5XaGVuIHlvdSBjb25uZWN0IHRvIGEgd2Vic2l0ZSB3aXRoIHJlZ3VsYXIgSFRUUCwgeW91ciBicm93c2VyIGxvb2tzIHVwIHRoZSBJUCBhZGRyZXNzIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHdlYnNpdGUsIGNvbm5lY3RzIHRvIHRoYXQgSVAgYWRkcmVzcywgYW5kIGFzc3VtZXMgaXTigJlzIGNvbm5lY3RlZCB0byB0aGUgY29ycmVjdCB3ZWIgc2VydmVyLiBEYXRhIGlzIHNlbnQgb3ZlciB0aGUgY29ubmVjdGlvbiBpbiBjbGVhciB0ZXh0LiBBbiBlYXZlc2Ryb3BwZXIgb24gYSBXaS1GaSBuZXR3b3JrLCB5b3VyIGludGVybmV0IHNlcnZpY2UgcHJvdmlkZXIsIG9yIGdvdmVybm1lbnQgaW50ZWxsaWdlbmNlIGFnZW5jaWVzLCBjYW4gc2VlIHRoZSB3ZWIgcGFnZXMgeW914oCZcmUgdmlzaXRpbmcgYW5kIHRoZSBkYXRhIHlvdeKAmXJlIHRyYW5zZmVycmluZyBiYWNrIGFuZCBmb3J0aC5cblx0XHQ8L3A+XG5cdFx0PHA+TWFueSBzaXRlcyBvbiB0aGUgd2ViIG9mZmVyIHNvbWUgbGltaXRlZCBzdXBwb3J0IGZvciBlbmNyeXB0aW9uIG92ZXIgSFRUUFMsIGJ1dCBtYWtlIGl0IGRpZmZpY3VsdCB0byB1c2UuIEZvciBpbnN0YW5jZSwgdGhleSBtYXkgZGVmYXVsdCB0byB1bmVuY3J5cHRlZCBIVFRQLCBvciBmaWxsIGVuY3J5cHRlZCBwYWdlcyB3aXRoIGxpbmtzIHRoYXQgZ28gYmFjayB0byB0aGUgdW5lbmNyeXB0ZWQgc2l0ZS4gVGhlIEhUVFBTIEV2ZXJ5d2hlcmUgZXh0ZW5zaW9uIGZpeGVzIHRoZXNlIHByb2JsZW1zIGJ5IHVzaW5nIGNsZXZlciB0ZWNobm9sb2d5IG1ha2UgZXZlcnkgc2l0ZSB1c2V0byByZXdyaXRlIHJlcXVlc3RzIHRvIHRoZXNlIHNpdGVzIHRvIEhUVFBTLldpdGggSFRUUFMsIHBlb3BsZSBydW5uaW5nIHRoZSBuZXR3b3JrIGJldHdlZW4geW91ciBkZXZpY2UgYW5kIHRoZSBzZXJ2ZXIgaG9zdGluZyB0aGUgd2Vic2l0ZSB5b3XigJlyZSBicm93c2luZywgb3Igb3RoZXIgcHJ5aW5nIGV5ZXMsIGNhbuKAmXQgc2VlIHlvdXIgcmVxdWVzdHMgYW5kIHlvdXIgaW50ZXJuZXQgdHJhZmZpYy4gXG5cdFx0PC9wPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2V9PkNvbnRpbnVlIHRvIG5leHQgcGFnZTwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuezplbHNlfVxuPHNlY3Rpb24+XG5cdDxoMj5Eb3dubG9hZCBIVFRQUyBFdmVyeXdoZXJlIGV4dGVuc2lvbjwvaDI+XG5cdDxwPkluZm9ybWFpdG9uIGFib3V0IHRoaXMgZXh0ZW5zaW9uLiBXaGF0IGl0IGRvZXMgZXhhY3RseS4gSG93IGl0IHdvcmtzLiBXaGF0IGJlbmVmaXRzIHVzZXJzIGdldCBmcm9tIGhhdmluZyB0aGlzIGV4dGVuc2lvbi4gVGhlIEVGRiBoYXMgZGV2ZWxvcGVkIGEgYnJvd3NlciBleHRlbnNpb24gdGhhdCBtYWtlcyBzdXJlIHRoYXQgeW91IGFjY2VzcyBhbGwgd2Vic2l0ZXMgdGhhdCBvZmZlciBIVFRQUyB1c2luZ+KApiBIVFRQUy48L3A+XG48L3NlY3Rpb24+XG48ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHQ8YnV0dG9uPkRvd25sb2FkIGV4dGVuc2lvbiBub3c8L2J1dHRvbj5cblx0PGJ1dHRvbj5BbHJlYWR5IEhhdmUgaXQ8L2J1dHRvbj5cblx0PGJ1dHRvbj5Eb24ndCB3YW50IHRvIGRvd25sb2FkIGl0PC9idXR0b24+XG5cdDxidXR0b24gb246Y2xpY2s9e2NvbXBsZXRlfT5TdWJtaXQ8L2J1dHRvbj5cbjwvZGl2Plxuey9pZn1cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0RBd0NtQixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQVhQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFQdEIsR0FBQyxPQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXBCRixRQUFRLEdBQUcscUJBQXFCOzs7VUFJN0IsUUFBUTtFQUNoQixRQUFRLENBQUMsU0FBUztHQUNqQixRQUFRLEVBQUUsQ0FBQztHQUNYLFFBQVEsRUFBRSxNQUFNOzs7O0tBR2QsQ0FBQyxHQUFHLENBQUM7O1VBQ0EsT0FBTztrQkFDZixDQUFDLElBQUUsQ0FBQztFQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
