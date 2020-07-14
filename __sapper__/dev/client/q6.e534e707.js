import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as createEventDispatcher, v as validate_slots, p as globals, a as space, e as element, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, k as add_location, l as insert_dev, R as add_render_callback, T as create_in_transition, U as create_out_transition, t as text, h as claim_text, j as attr_dev, m as append_dev, V as listen_dev, n as noop, W as run_all } from './client.58fe0aae.js';
import { f as fly, q as quintOut, a as quintIn } from './index.afead596.js';

/* src/routes/quiz/q6.svelte generated by Svelte v3.23.2 */

const { console: console_1 } = globals;
const file = "src/routes/quiz/q6.svelte";

// (40:0) {:else}
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
			add_location(h2, file, 41, 1, 1646);
			add_location(p, file, 42, 1, 1713);
			attr_dev(button0, "class", "svelte-9jf7df");
			add_location(button0, file, 44, 2, 2076);
			attr_dev(button1, "class", "svelte-9jf7df");
			add_location(button1, file, 45, 2, 2121);
			attr_dev(button2, "class", "svelte-9jf7df");
			add_location(button2, file, 46, 2, 2166);
			attr_dev(button3, "class", "svelte-9jf7df");
			add_location(button3, file, 47, 2, 2220);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 43, 1, 2046);
			add_location(section, file, 40, 0, 1635);
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
		source: "(40:0) {:else}",
		ctx
	});

	return block;
}

// (34:0) {#if q==0}
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
			add_location(h2, file, 35, 1, 816);
			add_location(p, file, 36, 1, 847);
			attr_dev(button, "class", "svelte-9jf7df");
			add_location(button, file, 37, 1, 1571);
			add_location(section, file, 34, 0, 805);
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
		source: "(34:0) {#if q==0}",
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
			add_location(div, file, 31, 0, 674);
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
			div_outro = create_out_transition(div, fly, { y: -200, duration: 500, easing: quintOut });
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
		fly,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTYuZTUzNGU3MDcuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IHsgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHF1aW50T3V0LCBxdWludEluIH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cdC8vY29uZmlybSBjb21sZXRpb24gb2YgcXVpeiB0byBtYXN0ZXIgcXVpeiBjb21wb25lbnRcblx0ZnVuY3Rpb24gY29tcGxldGUoKSB7XG5cdFx0ZGlzcGF0Y2goJ21lc3NhZ2UnLCB7XG5cdFx0XHRxdWVzdGlvbjogMiwgLy9RLTEgYmVjYXVlIG9mIGFycmF5XG5cdFx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdFx0fSk7XG5cdH1cblx0ZnVuY3Rpb24gaW5jb21wbGV0ZSgpIHtcblx0XHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRcdHF1ZXN0aW9uOiAyLCAvL1EtMSBiZWNhdWUgb2YgYXJyYXlcblx0XHRcdGNvbXBsZXRlOiAnZmFsc2UnXG5cdFx0fSk7XG5cdH1cblx0bGV0IHEgPSAwO1xuXHRmdW5jdGlvbiBhZHZhbmNlKCkge1xuXHRcdHErKztcblx0XHRjb25zb2xlLmxvZyhxKTtcblx0fVxuXHRmdW5jdGlvbiBhZHZhbmNlVHdvKCkge1xuXHRcdHErPTI7XG5cdFx0Y29uc29sZS5sb2cocSk7XG5cdH1cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+RG9tYWluIE5hbWUgU2VydmljZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBpbjpmbHk9XCJ7eyB5OiAyMDAsIGR1cmF0aW9uOiAxNTAwLCBlYXNpbmc6IHF1aW50T3V0IH19XCIgb3V0OmZseT1cInt7IHk6IC0yMDAsIGR1cmF0aW9uOiA1MDAsIGVhc2luZzogcXVpbnRPdXQgfX1cIj5cblxueyNpZiBxPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5Eb21haW4gTmFtZSBTZXJ2aWNlPC9oMj4gXG5cdDxwPldoZW4geW91IHR5cGUgYW4gYWRkcmVzcyBpbiB0aGUgYWRkcmVzcyBiYXIgKHN1Y2ggYXMgbWluZHlvdXJkYXRhLm9yZyksIHlvdXIgZGV2aWNlIGFza3MgYSBEb21haW4gTmFtZSBTZXJ2ZXIgdG8gdHJhbnNsYXRlIHRoYXQgYWRkcmVzcyBpbnRvIGFuIElQIGFkZHJlc3MgKGEgdW5pcXVlIGNvbWJpbmF0aW9uIG9mIG51bWJlcnMgYW5kIGRvdHMpLiBCeSBkZWZhdWx0LCB5b3VyIElTUCBvciB5b3VyIG1vYmlsZSBjYXJyaWVyIHJ1bnMgYSBETlMgZm9yIHRoZWlyIHVzZXJzLiBJdCBtZWFucyB0aGF0IHRoZXkgY2FuIHNlZSBhbGwgeW91ciB3ZWIgaGlzdG9yeS4gQmlnIHRlbGVjb20gY29tcGFuaWVzIGFyZSBnb2luZyB0byB0YWtlIGFkdmFudGFnZSBvZiB0aGF0IHRvIHJhbXAgdXAgdGhlaXIgYWR2ZXJ0aXNpbmcgZWZmb3J0cy4gQnkgZGVmYXVsdCwgeW91ciBETlMgcXVlcnkgaXMgYWxzbyB1bmVuY3J5cHRlZCBhbmQgY2FuIGJlIGludGVyY2VwdGVkIGJ5IHBlb3BsZSBydW5uaW5nIHRoZSBuZXR3b3JrLiBTb21lIGdvdmVybm1lbnRzIGFsc28gYXNrIHRlbGVjb20gY29tcGFuaWVzIHRvIGJsb2NrIHNvbWUgd2Vic2l0ZXMgb24gdGhlaXIgRE5TIHNlcnZlcnMg4oCUIHNvbWUgY291bnRyaWVzIGJsb2NrIEZhY2Vib29rIGZvciBjZW5zb3JzaGlwIHJlYXNvbnMsIG90aGVycyBibG9jayBUaGUgUGlyYXRlIEJheSBmb3Igb25saW5lIHBpcmFjeSByZWFzb25zLjwvcD5cblx0PGJ1dHRvbiBvbjpjbGljaz17YWR2YW5jZX0+Q29udGludWU8L2J1dHRvbj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+Q29uZmlndXJlIGVhY2ggb2YgeW91ciBkZXZpY2VzIHRvIHVzZSBhbm90aGVyIHB1YmxpYyBETlM8L2gyPlxuXHQ8cD5Zb3UgY2FuIGNvbmZpZ3VyZSBlYWNoIG9mIHlvdXIgZGV2aWNlcyB0byB1c2UgYW5vdGhlciBwdWJsaWMgRE5TLiBCdXQgZG9u4oCZdCB1c2UgR29vZ2xl4oCZcyBwdWJsaWMgRE5TISBSZW1lbWJlciwgaXTigJlzIGFuIGFkIGNvbXBhbnksIHNvIHRoZXkgcmVhbGx5IHdhbnQgdG8gc2VlIHlvdXIgd2ViIGhpc3RvcnkuIEJvdGggUXVhZDkgYW5kIENsb3VkZmxhcmXigJlzIDEuMS4xLjEgaGF2ZSBzdHJvbmcgcHJpdmFjeSBwb2xpY2llcy4gQnV0IFF1YWQ5IGlzIGEgbm90LWZvci1wcm9maXQgb3JnYW5pemF0aW9uLCBzbyBpdOKAmXMgYSBsaXR0bGUgZWFzaWVyIHRvIHRydXN0IHRoZW0uPC9wPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2NvbXBsZXRlfT5MaW5rMTwvYnV0dG9uPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2NvbXBsZXRlfT5MaW5rMjwvYnV0dG9uPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2NvbXBsZXRlfT5BbHJlYWR5IGRpZCBpdDwvYnV0dG9uPlxuXHRcdDxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9PkRvbid0IGNhcmUsIGxldCB0aGVuIHNub29wPC9idXR0b24+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuey9pZn1cbjwvZGl2PlxuPHN0eWxlPlxuICAgLmJ1dHRvbi1ob2xkZXIge1xuXHR3aWR0aDogMjd2dztcblx0ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICB9XG4gICBidXR0b24ge1xuXHQgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdCAgIG1hcmdpbjogMTBweDtcblx0ICAgYm9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdCAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OytDQTRDb0IsR0FBUTsrQ0FDUixHQUFROytDQUNSLEdBQVE7aURBQ1IsR0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztzREFWWCxHQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBSnJCLEdBQUMsT0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lFQUZPLENBQUMsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7aURBQWlCLENBQUMsR0FBRyxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E3QjFHLFFBQVEsR0FBRyxxQkFBcUI7OztVQUk3QixRQUFRO0VBQ2hCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE1BQU07Ozs7VUFHVCxVQUFVO0VBQ2xCLFFBQVEsQ0FBQyxTQUFTO0dBQ2pCLFFBQVEsRUFBRSxDQUFDO0dBQ1gsUUFBUSxFQUFFLE9BQU87Ozs7S0FHZixDQUFDLEdBQUcsQ0FBQzs7VUFDQSxPQUFPO2tCQUNmLENBQUM7RUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7OztVQUVMLFVBQVU7a0JBQ2xCLENBQUMsSUFBRSxDQUFDO0VBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
