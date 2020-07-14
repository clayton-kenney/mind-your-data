import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, p as globals, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, k as add_location, l as insert_dev, A as add_render_callback, X as create_in_transition, Y as create_out_transition, t as text, h as claim_text, j as attr_dev, m as append_dev, R as listen_dev, n as noop } from './client.04b12fd7.js';
import { s as slide, b as sineInOut } from './index.42fd54b0.js';

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
			add_location(h2, file, 33, 1, 1787);
			add_location(p, file, 34, 1, 1833);
			add_location(section, file, 32, 0, 1776);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 37, 1, 2120);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 38, 1, 2161);
			attr_dev(button2, "class", "svelte-9jf7df");
			add_location(button2, file, 39, 1, 2195);
			attr_dev(button3, "class", "svelte-9jf7df");
			add_location(button3, file, 40, 1, 2239);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 36, 0, 2091);
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
			add_location(h2, file, 24, 1, 646);
			add_location(p0, file, 25, 2, 675);
			add_location(p1, file, 27, 2, 1129);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 29, 2, 1699);
			add_location(section, file, 23, 0, 635);
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

function create_fragment(ctx) {
	let t;
	let div;
	let div_intro;
	let div_outro;
	let current;

	function select_block_type(ctx, dirty) {
		if (/*q*/ ctx[0] == 0) return create_if_block;
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-yv6mrh\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Https Everywhere";
			add_location(div, file, 21, 0, 495);
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
				if (div_outro) div_outro.end(1);

				if (!div_intro) div_intro = create_in_transition(div, slide, {
					delay: 200,
					duration: 1000,
					easing: sineInOut
				});

				div_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (div_intro) div_intro.invalidate();

			div_outro = create_out_transition(div, slide, {
				delay: 100,
				duration: 800,
				easing: sineInOut
			});

			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			if_block.d();
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
		slide,
		sineInOut,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTMuNTA0NTE2NGYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG4gICAgaW1wb3J0IHsgc2luZUluT3V0IH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdFx0fSk7XG5cdH1cblx0bGV0IHEgPSAwO1xuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHErPTI7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+SHR0cHMgRXZlcnl3aGVyZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBpbjpzbGlkZT1cInt7ZGVsYXk6IDIwMCwgZHVyYXRpb246IDEwMDAsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6c2xpZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA4MDAsIGVhc2luZzogc2luZUluT3V0fX1cIiA+XG57I2lmIHE9PTB9XG48c2VjdGlvbj5cblx0PGgyPkh0dHBzIEV2ZXJ5d2hlcmU8L2gyPiBcblx0XHQ8cD5XaGVuIHlvdSBjb25uZWN0IHRvIGEgd2Vic2l0ZSB3aXRoIHJlZ3VsYXIgSFRUUCwgeW91ciBicm93c2VyIGxvb2tzIHVwIHRoZSBJUCBhZGRyZXNzIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHdlYnNpdGUsIGNvbm5lY3RzIHRvIHRoYXQgSVAgYWRkcmVzcywgYW5kIGFzc3VtZXMgaXTigJlzIGNvbm5lY3RlZCB0byB0aGUgY29ycmVjdCB3ZWIgc2VydmVyLiBEYXRhIGlzIHNlbnQgb3ZlciB0aGUgY29ubmVjdGlvbiBpbiBjbGVhciB0ZXh0LiBBbiBlYXZlc2Ryb3BwZXIgb24gYSBXaS1GaSBuZXR3b3JrLCB5b3VyIGludGVybmV0IHNlcnZpY2UgcHJvdmlkZXIsIG9yIGdvdmVybm1lbnQgaW50ZWxsaWdlbmNlIGFnZW5jaWVzLCBjYW4gc2VlIHRoZSB3ZWIgcGFnZXMgeW914oCZcmUgdmlzaXRpbmcgYW5kIHRoZSBkYXRhIHlvdeKAmXJlIHRyYW5zZmVycmluZyBiYWNrIGFuZCBmb3J0aC5cblx0XHQ8L3A+XG5cdFx0PHA+TWFueSBzaXRlcyBvbiB0aGUgd2ViIG9mZmVyIHNvbWUgbGltaXRlZCBzdXBwb3J0IGZvciBlbmNyeXB0aW9uIG92ZXIgSFRUUFMsIGJ1dCBtYWtlIGl0IGRpZmZpY3VsdCB0byB1c2UuIEZvciBpbnN0YW5jZSwgdGhleSBtYXkgZGVmYXVsdCB0byB1bmVuY3J5cHRlZCBIVFRQLCBvciBmaWxsIGVuY3J5cHRlZCBwYWdlcyB3aXRoIGxpbmtzIHRoYXQgZ28gYmFjayB0byB0aGUgdW5lbmNyeXB0ZWQgc2l0ZS4gVGhlIEhUVFBTIEV2ZXJ5d2hlcmUgZXh0ZW5zaW9uIGZpeGVzIHRoZXNlIHByb2JsZW1zIGJ5IHVzaW5nIGNsZXZlciB0ZWNobm9sb2d5IG1ha2UgZXZlcnkgc2l0ZSB1c2V0byByZXdyaXRlIHJlcXVlc3RzIHRvIHRoZXNlIHNpdGVzIHRvIEhUVFBTLldpdGggSFRUUFMsIHBlb3BsZSBydW5uaW5nIHRoZSBuZXR3b3JrIGJldHdlZW4geW91ciBkZXZpY2UgYW5kIHRoZSBzZXJ2ZXIgaG9zdGluZyB0aGUgd2Vic2l0ZSB5b3XigJlyZSBicm93c2luZywgb3Igb3RoZXIgcHJ5aW5nIGV5ZXMsIGNhbuKAmXQgc2VlIHlvdXIgcmVxdWVzdHMgYW5kIHlvdXIgaW50ZXJuZXQgdHJhZmZpYy4gXG5cdFx0PC9wPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2V9PkNvbnRpbnVlIHRvIG5leHQgcGFnZTwvYnV0dG9uPlxuPC9zZWN0aW9uPlxuezplbHNlfVxuPHNlY3Rpb24+XG5cdDxoMj5Eb3dubG9hZCBIVFRQUyBFdmVyeXdoZXJlIGV4dGVuc2lvbjwvaDI+XG5cdDxwPkluZm9ybWFpdG9uIGFib3V0IHRoaXMgZXh0ZW5zaW9uLiBXaGF0IGl0IGRvZXMgZXhhY3RseS4gSG93IGl0IHdvcmtzLiBXaGF0IGJlbmVmaXRzIHVzZXJzIGdldCBmcm9tIGhhdmluZyB0aGlzIGV4dGVuc2lvbi4gVGhlIEVGRiBoYXMgZGV2ZWxvcGVkIGEgYnJvd3NlciBleHRlbnNpb24gdGhhdCBtYWtlcyBzdXJlIHRoYXQgeW91IGFjY2VzcyBhbGwgd2Vic2l0ZXMgdGhhdCBvZmZlciBIVFRQUyB1c2luZ+KApiBIVFRQUy48L3A+XG48L3NlY3Rpb24+XG48ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHQ8YnV0dG9uPkRvd25sb2FkIGV4dGVuc2lvbiBub3c8L2J1dHRvbj5cblx0PGJ1dHRvbj5BbHJlYWR5IEhhdmUgaXQ8L2J1dHRvbj5cblx0PGJ1dHRvbj5Eb24ndCB3YW50IHRvIGRvd25sb2FkIGl0PC9idXR0b24+XG5cdDxidXR0b24gb246Y2xpY2s9e2NvbXBsZXRlfT5TdWJtaXQ8L2J1dHRvbj5cbjwvZGl2Plxuey9pZn1cbjwvZGl2PlxuPHN0eWxlPlxuICAgLmJ1dHRvbi1ob2xkZXIge1xuXHR3aWR0aDogMjd2dztcblx0ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICB9XG4gICBidXR0b24ge1xuXHQgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdCAgIG1hcmdpbjogMTBweDtcblx0ICAgYm9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdCAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0RBd0NtQixHQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NEQVhQLEdBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFQdEIsR0FBQyxPQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQURRLEtBQUssRUFBRSxHQUFHO0tBQUUsUUFBUSxFQUFFLElBQUk7S0FBRSxNQUFNLEVBQUUsU0FBUzs7Ozs7Ozs7Ozs7O0lBQWlCLEtBQUssRUFBRSxHQUFHO0lBQUUsUUFBUSxFQUFFLEdBQUc7SUFBRSxNQUFNLEVBQUUsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQW5CcEgsUUFBUSxHQUFHLHFCQUFxQjs7O1VBSTdCLFFBQVE7RUFDaEIsUUFBUSxDQUFDLFNBQVM7R0FDakIsUUFBUSxFQUFFLENBQUM7R0FDWCxRQUFRLEVBQUUsTUFBTTs7OztLQUdkLENBQUMsR0FBRyxDQUFDOztVQUNBLE9BQU87a0JBQ2YsQ0FBQyxJQUFFLENBQUM7RUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
