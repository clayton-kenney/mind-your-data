import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, p as globals, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, k as add_location, l as insert_dev, R as add_render_callback, T as create_in_transition, U as create_out_transition, t as text, h as claim_text, j as attr_dev, m as append_dev, V as listen_dev, n as noop } from './client.a79b72f7.js';
import { f as fly, q as quintOut, a as quintIn } from './index.b08ea08f.js';

/* src/routes/quiz/q3.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q3.svelte";

// (33:0) {:else}
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
			add_location(h2, file, 34, 1, 1784);
			add_location(p, file, 35, 1, 1830);
			add_location(section, file, 33, 0, 1773);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 38, 1, 2117);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 39, 1, 2158);
			attr_dev(button2, "class", "svelte-9jf7df");
			add_location(button2, file, 40, 1, 2192);
			attr_dev(button3, "class", "svelte-9jf7df");
			add_location(button3, file, 41, 1, 2236);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 37, 0, 2088);
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
		source: "(33:0) {:else}",
		ctx
	});

	return block;
}

// (24:0) {#if q==0}
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
			add_location(h2, file, 25, 1, 643);
			add_location(p0, file, 26, 2, 672);
			add_location(p1, file, 28, 2, 1126);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 30, 2, 1696);
			add_location(section, file, 24, 0, 632);
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
		source: "(24:0) {#if q==0}",
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
			add_location(div, file, 21, 0, 501);
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
				if (!div_intro) div_intro = create_in_transition(div, fly, { y: 200, duration: 1500, easing: quintOut });
				div_intro.start();
			});

			current = true;
		},
		o: function outro(local) {
			if (div_intro) div_intro.invalidate();
			div_outro = create_out_transition(div, fly, { y: -200, duration: 1500, easing: quintIn });
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
		fly,
		quintOut,
		quintIn,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTMuNjUwZGFlZGEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IHsgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdFx0fSk7XG5cdH1cblx0bGV0IHEgPSAwO1xuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHErPTI7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+SHR0cHMgRXZlcnl3aGVyZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBpbjpmbHk9XCJ7eyB5OiAyMDAsIGR1cmF0aW9uOiAxNTAwLCBlYXNpbmc6IHF1aW50T3V0IH19XCIgb3V0OmZseT1cInt7IHk6IC0yMDAsIGR1cmF0aW9uOiAxNTAwLCBlYXNpbmc6IHF1aW50SW4gfX1cIj5cblxueyNpZiBxPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5IdHRwcyBFdmVyeXdoZXJlPC9oMj4gXG5cdFx0PHA+V2hlbiB5b3UgY29ubmVjdCB0byBhIHdlYnNpdGUgd2l0aCByZWd1bGFyIEhUVFAsIHlvdXIgYnJvd3NlciBsb29rcyB1cCB0aGUgSVAgYWRkcmVzcyB0aGF0IGNvcnJlc3BvbmRzIHRvIHRoZSB3ZWJzaXRlLCBjb25uZWN0cyB0byB0aGF0IElQIGFkZHJlc3MsIGFuZCBhc3N1bWVzIGl04oCZcyBjb25uZWN0ZWQgdG8gdGhlIGNvcnJlY3Qgd2ViIHNlcnZlci4gRGF0YSBpcyBzZW50IG92ZXIgdGhlIGNvbm5lY3Rpb24gaW4gY2xlYXIgdGV4dC4gQW4gZWF2ZXNkcm9wcGVyIG9uIGEgV2ktRmkgbmV0d29yaywgeW91ciBpbnRlcm5ldCBzZXJ2aWNlIHByb3ZpZGVyLCBvciBnb3Zlcm5tZW50IGludGVsbGlnZW5jZSBhZ2VuY2llcywgY2FuIHNlZSB0aGUgd2ViIHBhZ2VzIHlvdeKAmXJlIHZpc2l0aW5nIGFuZCB0aGUgZGF0YSB5b3XigJlyZSB0cmFuc2ZlcnJpbmcgYmFjayBhbmQgZm9ydGguXG5cdFx0PC9wPlxuXHRcdDxwPk1hbnkgc2l0ZXMgb24gdGhlIHdlYiBvZmZlciBzb21lIGxpbWl0ZWQgc3VwcG9ydCBmb3IgZW5jcnlwdGlvbiBvdmVyIEhUVFBTLCBidXQgbWFrZSBpdCBkaWZmaWN1bHQgdG8gdXNlLiBGb3IgaW5zdGFuY2UsIHRoZXkgbWF5IGRlZmF1bHQgdG8gdW5lbmNyeXB0ZWQgSFRUUCwgb3IgZmlsbCBlbmNyeXB0ZWQgcGFnZXMgd2l0aCBsaW5rcyB0aGF0IGdvIGJhY2sgdG8gdGhlIHVuZW5jcnlwdGVkIHNpdGUuIFRoZSBIVFRQUyBFdmVyeXdoZXJlIGV4dGVuc2lvbiBmaXhlcyB0aGVzZSBwcm9ibGVtcyBieSB1c2luZyBjbGV2ZXIgdGVjaG5vbG9neSBtYWtlIGV2ZXJ5IHNpdGUgdXNldG8gcmV3cml0ZSByZXF1ZXN0cyB0byB0aGVzZSBzaXRlcyB0byBIVFRQUy5XaXRoIEhUVFBTLCBwZW9wbGUgcnVubmluZyB0aGUgbmV0d29yayBiZXR3ZWVuIHlvdXIgZGV2aWNlIGFuZCB0aGUgc2VydmVyIGhvc3RpbmcgdGhlIHdlYnNpdGUgeW914oCZcmUgYnJvd3NpbmcsIG9yIG90aGVyIHByeWluZyBleWVzLCBjYW7igJl0IHNlZSB5b3VyIHJlcXVlc3RzIGFuZCB5b3VyIGludGVybmV0IHRyYWZmaWMuIFxuXHRcdDwvcD5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXthZHZhbmNlfT5Db250aW51ZSB0byBuZXh0IHBhZ2U8L2J1dHRvbj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+RG93bmxvYWQgSFRUUFMgRXZlcnl3aGVyZSBleHRlbnNpb248L2gyPlxuXHQ8cD5JbmZvcm1haXRvbiBhYm91dCB0aGlzIGV4dGVuc2lvbi4gV2hhdCBpdCBkb2VzIGV4YWN0bHkuIEhvdyBpdCB3b3Jrcy4gV2hhdCBiZW5lZml0cyB1c2VycyBnZXQgZnJvbSBoYXZpbmcgdGhpcyBleHRlbnNpb24uIFRoZSBFRkYgaGFzIGRldmVsb3BlZCBhIGJyb3dzZXIgZXh0ZW5zaW9uIHRoYXQgbWFrZXMgc3VyZSB0aGF0IHlvdSBhY2Nlc3MgYWxsIHdlYnNpdGVzIHRoYXQgb2ZmZXIgSFRUUFMgdXNpbmfigKYgSFRUUFMuPC9wPlxuPC9zZWN0aW9uPlxuPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0PGJ1dHRvbj5Eb3dubG9hZCBleHRlbnNpb24gbm93PC9idXR0b24+XG5cdDxidXR0b24+QWxyZWFkeSBIYXZlIGl0PC9idXR0b24+XG5cdDxidXR0b24+RG9uJ3Qgd2FudCB0byBkb3dubG9hZCBpdDwvYnV0dG9uPlxuXHQ8YnV0dG9uIG9uOmNsaWNrPXtjb21wbGV0ZX0+U3VibWl0PC9idXR0b24+XG48L2Rpdj5cbnsvaWZ9XG48L2Rpdj5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3dEQXlDbUIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFYUCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBUHRCLEdBQUMsT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQUZPLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7aURBQWlCLENBQUMsR0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FuQjFHLFFBQVEsR0FBRyxxQkFBcUI7OztVQUk3QixRQUFRO0VBQ2hCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE1BQU07Ozs7S0FHZCxDQUFDLEdBQUcsQ0FBQzs7VUFDQSxPQUFPO2tCQUNmLENBQUMsSUFBRSxDQUFDO0VBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
