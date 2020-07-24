import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, R as onMount, v as validate_slots, a as space, u as create_component, q as query_selector_all, b as detach_dev, c as claim_space, w as claim_component, l as insert_dev, x as mount_component, A as transition_in, y as transition_out, D as destroy_component, O as set_store_value, L as empty, F as group_outros, z as check_outros, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.a2e5ef0b.js';
import './index.42fd54b0.js';
import { T as TransHelp, C as Complete } from './complete.ba580b6c.js';
import { c as count, s as step, q as quizSteps } from './store.6b06e3e4.js';
import { N as Next } from './Next.809913d6.js';

/* src/routes/quiz/q2.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q2.svelte";

// (26:0) {:else}
function create_else_block(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let p;
	let t2;
	let t3;
	let div;
	let complete0;
	let t4;
	let complete1;
	let t5;
	let complete2;
	let current;

	complete0 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete1 = new Complete({
			props: {
				$$slots: { default: [create_default_slot_3] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	complete2 = new Complete({
			props: {
				succes: false,
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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
			create_component(complete0.$$.fragment);
			t4 = space();
			create_component(complete1.$$.fragment);
			t5 = space();
			create_component(complete2.$$.fragment);
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
			claim_component(complete0.$$.fragment, div_nodes);
			t4 = claim_space(div_nodes);
			claim_component(complete1.$$.fragment, div_nodes);
			t5 = claim_space(div_nodes);
			claim_component(complete2.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 27, 1, 1737);
			add_location(p, file, 28, 1, 1783);
			add_location(section, file, 26, 0, 1726);
			attr_dev(div, "class", "button-holder svelte-9jf7df");
			add_location(div, file, 30, 0, 2041);
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
			mount_component(complete0, div, null);
			append_dev(div, t4);
			mount_component(complete1, div, null);
			append_dev(div, t5);
			mount_component(complete2, div, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(complete0.$$.fragment, local);
			transition_in(complete1.$$.fragment, local);
			transition_in(complete2.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(complete0.$$.fragment, local);
			transition_out(complete1.$$.fragment, local);
			transition_out(complete2.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			if (detaching) detach_dev(t3);
			if (detaching) detach_dev(div);
			destroy_component(complete0);
			destroy_component(complete1);
			destroy_component(complete2);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(26:0) {:else}",
		ctx
	});

	return block;
}

// (17:0) {#if $step == 0}
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
	let next;
	let current;

	next = new Next({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

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
			create_component(next.$$.fragment);
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
			claim_component(next.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 18, 1, 619);
			add_location(p0, file, 19, 2, 648);
			add_location(p1, file, 21, 2, 1102);
			add_location(section, file, 17, 0, 608);
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
			mount_component(next, section, null);
			current = true;
		},
		i: function intro(local) {
			if (current) return;
			transition_in(next.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(next.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(next);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(17:0) {#if $step == 0}",
		ctx
	});

	return block;
}

// (32:1) <Complete>
function create_default_slot_4(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Download extension now");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Download extension now");
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
		id: create_default_slot_4.name,
		type: "slot",
		source: "(32:1) <Complete>",
		ctx
	});

	return block;
}

// (35:1) <Complete>
function create_default_slot_3(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Already Have it");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Already Have it");
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
		source: "(35:1) <Complete>",
		ctx
	});

	return block;
}

// (38:1) <Complete succes={false}>
function create_default_slot_2(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Don't want to download it");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Don't want to download it");
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
		source: "(38:1) <Complete succes={false}>",
		ctx
	});

	return block;
}

// (24:2) <Next>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Continue to next page");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Continue to next page");
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
		source: "(24:2) <Next>",
		ctx
	});

	return block;
}

// (16:0) <Trans>
function create_default_slot(ctx) {
	let current_block_type_index;
	let if_block;
	let if_block_anchor;
	let current;
	const if_block_creators = [create_if_block, create_else_block];
	const if_blocks = [];

	function select_block_type(ctx, dirty) {
		if (/*$step*/ ctx[0] == 0) return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

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
			if_blocks[current_block_type_index].m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
			current = true;
		},
		p: function update(ctx, dirty) {
			let previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);

			if (current_block_type_index !== previous_block_index) {
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
				if_block.m(if_block_anchor.parentNode, if_block_anchor);
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
			if_blocks[current_block_type_index].d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(16:0) <Trans>",
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

			if (dirty & /*$$scope, $step*/ 17) {
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
	component_subscribe($$self, quizSteps, $$value => $$invalidate(1, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(2, $count = $$value));
	validate_store(step, "step");
	component_subscribe($$self, step, $$value => $$invalidate(0, $step = $$value));
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q2> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q2", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		dispatch,
		Trans: TransHelp,
		Complete,
		Next,
		count,
		step,
		quizSteps,
		$quizSteps,
		$count,
		$step
	});

	return [$step];
}

class Q2 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q2",
			options,
			id: create_fragment.name
		});
	}
}

export default Q2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTIuZjdjY2E3OTAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xMi5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBOZXh0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmV4dC5zdmVsdGUnIC8vc2V0IDxOZXh0IHE9ezJ9PiB0byBza2lwIG11bHRpcGxlIHN0ZXBzXG5cdGltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblx0XG4gICAgIC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHRvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxfSk7XG5cdFxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5IdHRwcyBFdmVyeXdoZXJlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG57I2lmICRzdGVwID09IDB9XG48c2VjdGlvbj5cblx0PGgyPkh0dHBzIEV2ZXJ5d2hlcmU8L2gyPiBcblx0XHQ8cD5XaGVuIHlvdSBjb25uZWN0IHRvIGEgd2Vic2l0ZSB3aXRoIHJlZ3VsYXIgSFRUUCwgeW91ciBicm93c2VyIGxvb2tzIHVwIHRoZSBJUCBhZGRyZXNzIHRoYXQgY29ycmVzcG9uZHMgdG8gdGhlIHdlYnNpdGUsIGNvbm5lY3RzIHRvIHRoYXQgSVAgYWRkcmVzcywgYW5kIGFzc3VtZXMgaXTigJlzIGNvbm5lY3RlZCB0byB0aGUgY29ycmVjdCB3ZWIgc2VydmVyLiBEYXRhIGlzIHNlbnQgb3ZlciB0aGUgY29ubmVjdGlvbiBpbiBjbGVhciB0ZXh0LiBBbiBlYXZlc2Ryb3BwZXIgb24gYSBXaS1GaSBuZXR3b3JrLCB5b3VyIGludGVybmV0IHNlcnZpY2UgcHJvdmlkZXIsIG9yIGdvdmVybm1lbnQgaW50ZWxsaWdlbmNlIGFnZW5jaWVzLCBjYW4gc2VlIHRoZSB3ZWIgcGFnZXMgeW914oCZcmUgdmlzaXRpbmcgYW5kIHRoZSBkYXRhIHlvdeKAmXJlIHRyYW5zZmVycmluZyBiYWNrIGFuZCBmb3J0aC5cblx0XHQ8L3A+XG5cdFx0PHA+TWFueSBzaXRlcyBvbiB0aGUgd2ViIG9mZmVyIHNvbWUgbGltaXRlZCBzdXBwb3J0IGZvciBlbmNyeXB0aW9uIG92ZXIgSFRUUFMsIGJ1dCBtYWtlIGl0IGRpZmZpY3VsdCB0byB1c2UuIEZvciBpbnN0YW5jZSwgdGhleSBtYXkgZGVmYXVsdCB0byB1bmVuY3J5cHRlZCBIVFRQLCBvciBmaWxsIGVuY3J5cHRlZCBwYWdlcyB3aXRoIGxpbmtzIHRoYXQgZ28gYmFjayB0byB0aGUgdW5lbmNyeXB0ZWQgc2l0ZS4gVGhlIEhUVFBTIEV2ZXJ5d2hlcmUgZXh0ZW5zaW9uIGZpeGVzIHRoZXNlIHByb2JsZW1zIGJ5IHVzaW5nIGNsZXZlciB0ZWNobm9sb2d5IG1ha2UgZXZlcnkgc2l0ZSB1c2V0byByZXdyaXRlIHJlcXVlc3RzIHRvIHRoZXNlIHNpdGVzIHRvIEhUVFBTLldpdGggSFRUUFMsIHBlb3BsZSBydW5uaW5nIHRoZSBuZXR3b3JrIGJldHdlZW4geW91ciBkZXZpY2UgYW5kIHRoZSBzZXJ2ZXIgaG9zdGluZyB0aGUgd2Vic2l0ZSB5b3XigJlyZSBicm93c2luZywgb3Igb3RoZXIgcHJ5aW5nIGV5ZXMsIGNhbuKAmXQgc2VlIHlvdXIgcmVxdWVzdHMgYW5kIHlvdXIgaW50ZXJuZXQgdHJhZmZpYy4gXG5cdFx0PC9wPlxuXHRcdDxOZXh0PkNvbnRpbnVlIHRvIG5leHQgcGFnZTwvTmV4dD5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+RG93bmxvYWQgSFRUUFMgRXZlcnl3aGVyZSBleHRlbnNpb248L2gyPlxuXHQ8cD5JbmZvcm1haXRvbiBhYm91dCB0aGlzIGV4dGVuc2lvbi4gV2hhdCBpdCBkb2VzIGV4YWN0bHkuIEhvdyBpdCB3b3Jrcy4gV2hhdCBiZW5lZml0cyB1c2VycyBnZXQgZnJvbSBoYXZpbmcgdGhpcyBleHRlbnNpb24uIFRoZSBFRkYgaGFzIGRldmVsb3BlZCBhIGJyb3dzZXIgZXh0ZW5zaW9uIHRoYXQgbWFrZXMgc3VyZSB0aGF0IHlvdSBhY2Nlc3MgYWxsIHdlYnNpdGVzIHRoYXQgb2ZmZXIgSFRUUFMgdXNpbmfigKYgSFRUUFMuPC9wPlxuPC9zZWN0aW9uPlxuPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0PENvbXBsZXRlPlxuXHRcdERvd25sb2FkIGV4dGVuc2lvbiBub3dcblx0PC9Db21wbGV0ZT5cblx0PENvbXBsZXRlPlxuXHRcdEFscmVhZHkgSGF2ZSBpdFxuXHQ8L0NvbXBsZXRlPlxuXHQ8Q29tcGxldGUgc3VjY2VzPXtmYWxzZX0+XG5cdFx0RG9uJ3Qgd2FudCB0byBkb3dubG9hZCBpdFxuXHQ8L0NvbXBsZXRlPlxuXHRcbjwvZGl2Plxuey9pZn1cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFxQ21CLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXJCbkIsR0FBSyxPQUFJLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BZFIsUUFBUSxHQUFHLHFCQUFxQjs7O0NBT3RDLE9BQU87NkJBQWEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
