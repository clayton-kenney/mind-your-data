import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, p as globals, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, k as add_location, l as insert_dev, A as add_render_callback, B as create_bidirectional_transition, t as text, h as claim_text, j as attr_dev, m as append_dev, U as listen_dev, n as noop, W as run_all } from './client.9332a395.js';
import { s as slide, q as quintOut, a as quintIn } from './index.0c0fb0ea.js';

/* src/routes/quiz/q6.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q6.svelte";

// (39:0) {:else}
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
			t0 = text("Configure each of your devices to use another public DNS");
			t1 = space();
			p = element("p");
			t2 = text("You can configure each of your devices to use another public DNS. But don’t use Google’s public DNS! Remember, it’s an ad company, so they really want to see your web history. Both Quad9 and Cloudflare’s 1.1.1.1 have strong privacy policies. But Quad9 is a not-for-profit organization, so it’s a little easier to trust them.");
			t3 = space();
			div = element("div");
			button0 = element("button");
			t4 = text("Link1");
			t5 = space();
			button1 = element("button");
			t6 = text("Link2");
			t7 = space();
			button2 = element("button");
			t8 = text("Already did it");
			t9 = space();
			button3 = element("button");
			t10 = text("Don't care, let then snoop");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Configure each of your devices to use another public DNS");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "You can configure each of your devices to use another public DNS. But don’t use Google’s public DNS! Remember, it’s an ad company, so they really want to see your web history. Both Quad9 and Cloudflare’s 1.1.1.1 have strong privacy policies. But Quad9 is a not-for-profit organization, so it’s a little easier to trust them.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			button0 = claim_element(div_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t4 = claim_text(button0_nodes, "Link1");
			button0_nodes.forEach(detach_dev);
			t5 = claim_space(div_nodes);
			button1 = claim_element(div_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t6 = claim_text(button1_nodes, "Link2");
			button1_nodes.forEach(detach_dev);
			t7 = claim_space(div_nodes);
			button2 = claim_element(div_nodes, "BUTTON", { class: true });
			var button2_nodes = children(button2);
			t8 = claim_text(button2_nodes, "Already did it");
			button2_nodes.forEach(detach_dev);
			t9 = claim_space(div_nodes);
			button3 = claim_element(div_nodes, "BUTTON", { class: true });
			var button3_nodes = children(button3);
			t10 = claim_text(button3_nodes, "Don't care, let then snoop");
			button3_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 40, 1, 1602);
			add_location(p, file, 41, 1, 1669);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 43, 2, 2032);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 44, 2, 2077);
			attr_dev(button2, "class", "svelte-9jf7df");
			add_location(button2, file, 45, 2, 2122);
			attr_dev(button3, "class", "svelte-9jf7df");
			add_location(button3, file, 46, 2, 2176);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 42, 1, 2002);
			add_location(section, file, 39, 0, 1591);
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
				dispose = [
					listen_dev(button0, "click", /*complete*/ ctx[1], false, false, false),
					listen_dev(button1, "click", /*complete*/ ctx[1], false, false, false),
					listen_dev(button2, "click", /*complete*/ ctx[1], false, false, false),
					listen_dev(button3, "click", /*incomplete*/ ctx[2], false, false, false)
				];

				mounted = true;
			}
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			mounted = false;
			run_all(dispose);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(39:0) {:else}",
		ctx
	});

	return block;
}

// (33:0) {#if q==0}
function create_if_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let button;
	let t4;
	let mounted;
	let dispose;

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Domain Name Service");
			t1 = space();
			p = element("p");
			t2 = text("When you type an address in the address bar (such as mindyourdata.org), your device asks a Domain Name Server to translate that address into an IP address (a unique combination of numbers and dots). By default, your ISP or your mobile carrier runs a DNS for their users. It means that they can see all your web history. Big telecom companies are going to take advantage of that to ramp up their advertising efforts. By default, your DNS query is also unencrypted and can be intercepted by people running the network. Some governments also ask telecom companies to block some websites on their DNS servers — some countries block Facebook for censorship reasons, others block The Pirate Bay for online piracy reasons.");
			t3 = space();
			button = element("button");
			t4 = text("Continue");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Domain Name Service");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "When you type an address in the address bar (such as mindyourdata.org), your device asks a Domain Name Server to translate that address into an IP address (a unique combination of numbers and dots). By default, your ISP or your mobile carrier runs a DNS for their users. It means that they can see all your web history. Big telecom companies are going to take advantage of that to ramp up their advertising efforts. By default, your DNS query is also unencrypted and can be intercepted by people running the network. Some governments also ask telecom companies to block some websites on their DNS servers — some countries block Facebook for censorship reasons, others block The Pirate Bay for online piracy reasons.");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			button = claim_element(section_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t4 = claim_text(button_nodes, "Continue");
			button_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 34, 1, 772);
			add_location(p, file, 35, 1, 803);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 36, 1, 1527);
			add_location(section, file, 33, 0, 761);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(section, t1);
			append_dev(section, p);
			append_dev(p, t2);
			append_dev(section, t3);
			append_dev(section, button);
			append_dev(button, t4);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*advance*/ ctx[3], false, false, false);
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
		source: "(33:0) {#if q==0}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t;
	let div;
	let div_transition;
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-m7zmek\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			div = claim_element(nodes, "DIV", {});
			var div_nodes = children(div);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Domain Name Service";
			add_location(div, file, 31, 0, 676);
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
				if (!div_transition) div_transition = create_bidirectional_transition(
					div,
					slide,
					{
						delay: 100,
						duration: 400,
						easing: quintOut
					},
					true
				);

				div_transition.run(1);
			});

			current = true;
		},
		o: function outro(local) {
			if (!div_transition) div_transition = create_bidirectional_transition(
				div,
				slide,
				{
					delay: 100,
					duration: 400,
					easing: quintOut
				},
				false
			);

			div_transition.run(0);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t);
			if (detaching) detach_dev(div);
			if_block.d();
			if (detaching && div_transition) div_transition.end();
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q6> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q6", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		slide,
		quintOut,
		quintIn,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTYuNmNjM2Y0ZGYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IHsgc2xpZGUgfSBmcm9tICdzdmVsdGUvdHJhbnNpdGlvbic7XG4gICAgaW1wb3J0IHsgcXVpbnRPdXQsIHF1aW50SW4gfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcblx0Ly9jb25maXJtIGNvbWxldGlvbiBvZiBxdWl6IHRvIG1hc3RlciBxdWl6IGNvbXBvbmVudFxuXHRmdW5jdGlvbiBjb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAndHJ1ZSdcblx0XHR9KTtcblx0fVxuXHRmdW5jdGlvbiBpbmNvbXBsZXRlKCkge1xuXHRcdGRpc3BhdGNoKCdtZXNzYWdlJywge1xuXHRcdFx0cXVlc3Rpb246IDIsIC8vUS0xIGJlY2F1ZSBvZiBhcnJheVxuXHRcdFx0Y29tcGxldGU6ICdmYWxzZSdcblx0XHR9KTtcblx0fVxuXHRsZXQgcSA9IDA7XG5cdGZ1bmN0aW9uIGFkdmFuY2UoKSB7XG5cdFx0cSsrO1xuXHRcdGNvbnNvbGUubG9nKHEpO1xuXHR9XG5cdGZ1bmN0aW9uIGFkdmFuY2VUd28oKSB7XG5cdFx0cSs9Mjtcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5Eb21haW4gTmFtZSBTZXJ2aWNlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48ZGl2IHRyYW5zaXRpb246c2xpZGU9XCJ7e2RlbGF5OiAxMDAsIGR1cmF0aW9uOiA0MDAsIGVhc2luZzogcXVpbnRPdXR9fVwiID5cbnsjaWYgcT09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+RG9tYWluIE5hbWUgU2VydmljZTwvaDI+IFxuXHQ8cD5XaGVuIHlvdSB0eXBlIGFuIGFkZHJlc3MgaW4gdGhlIGFkZHJlc3MgYmFyIChzdWNoIGFzIG1pbmR5b3VyZGF0YS5vcmcpLCB5b3VyIGRldmljZSBhc2tzIGEgRG9tYWluIE5hbWUgU2VydmVyIHRvIHRyYW5zbGF0ZSB0aGF0IGFkZHJlc3MgaW50byBhbiBJUCBhZGRyZXNzIChhIHVuaXF1ZSBjb21iaW5hdGlvbiBvZiBudW1iZXJzIGFuZCBkb3RzKS4gQnkgZGVmYXVsdCwgeW91ciBJU1Agb3IgeW91ciBtb2JpbGUgY2FycmllciBydW5zIGEgRE5TIGZvciB0aGVpciB1c2Vycy4gSXQgbWVhbnMgdGhhdCB0aGV5IGNhbiBzZWUgYWxsIHlvdXIgd2ViIGhpc3RvcnkuIEJpZyB0ZWxlY29tIGNvbXBhbmllcyBhcmUgZ29pbmcgdG8gdGFrZSBhZHZhbnRhZ2Ugb2YgdGhhdCB0byByYW1wIHVwIHRoZWlyIGFkdmVydGlzaW5nIGVmZm9ydHMuIEJ5IGRlZmF1bHQsIHlvdXIgRE5TIHF1ZXJ5IGlzIGFsc28gdW5lbmNyeXB0ZWQgYW5kIGNhbiBiZSBpbnRlcmNlcHRlZCBieSBwZW9wbGUgcnVubmluZyB0aGUgbmV0d29yay4gU29tZSBnb3Zlcm5tZW50cyBhbHNvIGFzayB0ZWxlY29tIGNvbXBhbmllcyB0byBibG9jayBzb21lIHdlYnNpdGVzIG9uIHRoZWlyIEROUyBzZXJ2ZXJzIOKAlCBzb21lIGNvdW50cmllcyBibG9jayBGYWNlYm9vayBmb3IgY2Vuc29yc2hpcCByZWFzb25zLCBvdGhlcnMgYmxvY2sgVGhlIFBpcmF0ZSBCYXkgZm9yIG9ubGluZSBwaXJhY3kgcmVhc29ucy48L3A+XG5cdDxidXR0b24gb246Y2xpY2s9e2FkdmFuY2V9PkNvbnRpbnVlPC9idXR0b24+XG48L3NlY3Rpb24+XG57OmVsc2V9XG48c2VjdGlvbj5cblx0PGgyPkNvbmZpZ3VyZSBlYWNoIG9mIHlvdXIgZGV2aWNlcyB0byB1c2UgYW5vdGhlciBwdWJsaWMgRE5TPC9oMj5cblx0PHA+WW91IGNhbiBjb25maWd1cmUgZWFjaCBvZiB5b3VyIGRldmljZXMgdG8gdXNlIGFub3RoZXIgcHVibGljIEROUy4gQnV0IGRvbuKAmXQgdXNlIEdvb2dsZeKAmXMgcHVibGljIEROUyEgUmVtZW1iZXIsIGl04oCZcyBhbiBhZCBjb21wYW55LCBzbyB0aGV5IHJlYWxseSB3YW50IHRvIHNlZSB5b3VyIHdlYiBoaXN0b3J5LiBCb3RoIFF1YWQ5IGFuZCBDbG91ZGZsYXJl4oCZcyAxLjEuMS4xIGhhdmUgc3Ryb25nIHByaXZhY3kgcG9saWNpZXMuIEJ1dCBRdWFkOSBpcyBhIG5vdC1mb3ItcHJvZml0IG9yZ2FuaXphdGlvbiwgc28gaXTigJlzIGEgbGl0dGxlIGVhc2llciB0byB0cnVzdCB0aGVtLjwvcD5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtjb21wbGV0ZX0+TGluazE8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtjb21wbGV0ZX0+TGluazI8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtjb21wbGV0ZX0+QWxyZWFkeSBkaWQgaXQ8L2J1dHRvbj5cblx0XHQ8YnV0dG9uIG9uOmNsaWNrPXtpbmNvbXBsZXRlfT5Eb24ndCBjYXJlLCBsZXQgdGhlbiBzbm9vcDwvYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbnsvaWZ9XG48L2Rpdj5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgYnV0dG9uIHtcblx0ICAgcGFkZGluZzogMTBweCAyMHB4O1xuXHQgICBtYXJnaW46IDEwcHg7XG5cdCAgIGJvcmRlcjogYmxhY2sgc29saWQgMHB4O1xuXHQgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0EyQ29CLEdBQVE7K0NBQ1IsR0FBUTsrQ0FDUixHQUFRO2lEQUNSLEdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0RBVlgsR0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSnJCLEdBQUMsT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BRGdCLEtBQUssRUFBRSxHQUFHO01BQUUsUUFBUSxFQUFFLEdBQUc7TUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7O0tBQTNDLEtBQUssRUFBRSxHQUFHO0tBQUUsUUFBUSxFQUFFLEdBQUc7S0FBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTdCN0QsUUFBUSxHQUFHLHFCQUFxQjs7O1VBSTdCLFFBQVE7RUFDaEIsUUFBUSxDQUFDLFNBQVM7R0FDakIsUUFBUSxFQUFFLENBQUM7R0FDWCxRQUFRLEVBQUUsTUFBTTs7OztVQUdULFVBQVU7RUFDbEIsUUFBUSxDQUFDLFNBQVM7R0FDakIsUUFBUSxFQUFFLENBQUM7R0FDWCxRQUFRLEVBQUUsT0FBTzs7OztLQUdmLENBQUMsR0FBRyxDQUFDOztVQUNBLE9BQU87a0JBQ2YsQ0FBQztFQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O1VBRUwsVUFBVTtrQkFDbEIsQ0FBQyxJQUFFLENBQUM7RUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
