import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as validate_store, p as component_subscribe, r as createEventDispatcher, R as onMount, v as validate_slots, a as space, u as create_component, q as query_selector_all, b as detach_dev, c as claim_space, w as claim_component, l as insert_dev, x as mount_component, A as transition_in, y as transition_out, D as destroy_component, O as set_store_value, L as empty, F as group_outros, z as check_outros, e as element, t as text, f as claim_element, g as children, h as claim_text, k as add_location, j as attr_dev, m as append_dev } from './client.ed1cf2cf.js';
import './index.42fd54b0.js';
import { T as TransHelp, C as Complete } from './complete.4c13acaf.js';
import { c as count, s as step, q as quizSteps } from './store.ce5a7a2d.js';
import { N as Next } from './Next.5e7dfd5e.js';

/* src/routes/quiz/q5.svelte generated by Svelte v3.23.2 */
const file = "src/routes/quiz/q5.svelte";

// (29:0) {:else}
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
				success: false,
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("Download Privacy Badger extention");
			t1 = space();
			p = element("p");
			t2 = text("When you view a webpage, that page will often be made up of content from many different sources. Privacy Badger keeps track of all of this. If as you browse the web, the same source seems to be tracking your browser across different websites, then Privacy Badger springs into action, telling your browser not to load any more content from that source. And when your browser stops loading content from a source, that source can no longer track you. Voila!");
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
			t0 = claim_text(h2_nodes, "Download Privacy Badger extention");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p = claim_element(section_nodes, "P", {});
			var p_nodes = children(p);
			t2 = claim_text(p_nodes, "When you view a webpage, that page will often be made up of content from many different sources. Privacy Badger keeps track of all of this. If as you browse the web, the same source seems to be tracking your browser across different websites, then Privacy Badger springs into action, telling your browser not to load any more content from that source. And when your browser stops loading content from a source, that source can no longer track you. Voila!");
			p_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div = claim_element(section_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			claim_component(complete0.$$.fragment, div_nodes);
			t4 = claim_space(div_nodes);
			claim_component(complete1.$$.fragment, div_nodes);
			t5 = claim_space(div_nodes);
			claim_component(complete2.$$.fragment, div_nodes);
			div_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 30, 1, 1896);
			add_location(p, file, 31, 1, 1940);
			attr_dev(div, "class", "button-holder svelte-338bov");
			add_location(div, file, 32, 1, 2403);
			add_location(section, file, 29, 0, 1885);
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
			destroy_component(complete0);
			destroy_component(complete1);
			destroy_component(complete2);
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

// (17:0) {#if $step==0}
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
	let p2;
	let t6;
	let t7;
	let p3;
	let t8;
	let t9;
	let p4;
	let t10;
	let t11;
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
			t0 = text("Tracker blocker");
			t1 = space();
			p0 = element("p");
			t2 = text("Are you being tracked on the web? Almost definitely.");
			t3 = space();
			p1 = element("p");
			t4 = text("While cookies are the little identifiers for websites to recognize you through multiple visits, trackers use those cookies to recognize you and analyze your behavior. Trackers will log the site you visit, the date and time, and your computer settings (more powerful trackers can even watch your mouse movement).");
			t5 = space();
			p2 = element("p");
			t6 = text("A tracker like Google adsense is watching you over multiple sites to analyze your interests. You visited a car sale site yesterday? Today we show you Ads of cars. The chance is higher that you like the ad and click it instead of an ad with cats. (bad example... Everyone clicks cat ads...)");
			t7 = space();
			p3 = element("p");
			t8 = text("If you change the site (eg from the front page to the news area) the tracker recognize you and combines the data - \"user ABC stayed 33s in the front page and switched to the news area and stayed there for 3min\". For webmaster powerful data because they know how important their front page is and where they have too change something.");
			t9 = space();
			p4 = element("p");
			t10 = text("Trackers are installed on many websites to log your behavior. Each time you open a website with a tracker (of course every sub-site of a website too). Trackers are included in the website code and are activated each time you visit the site.");
			t11 = space();
			create_component(next.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", {});
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "Tracker blocker");
			h2_nodes.forEach(detach_dev);
			t1 = claim_space(section_nodes);
			p0 = claim_element(section_nodes, "P", {});
			var p0_nodes = children(p0);
			t2 = claim_text(p0_nodes, "Are you being tracked on the web? Almost definitely.");
			p0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			p1 = claim_element(section_nodes, "P", {});
			var p1_nodes = children(p1);
			t4 = claim_text(p1_nodes, "While cookies are the little identifiers for websites to recognize you through multiple visits, trackers use those cookies to recognize you and analyze your behavior. Trackers will log the site you visit, the date and time, and your computer settings (more powerful trackers can even watch your mouse movement).");
			p1_nodes.forEach(detach_dev);
			t5 = claim_space(section_nodes);
			p2 = claim_element(section_nodes, "P", {});
			var p2_nodes = children(p2);
			t6 = claim_text(p2_nodes, "A tracker like Google adsense is watching you over multiple sites to analyze your interests. You visited a car sale site yesterday? Today we show you Ads of cars. The chance is higher that you like the ad and click it instead of an ad with cats. (bad example... Everyone clicks cat ads...)");
			p2_nodes.forEach(detach_dev);
			t7 = claim_space(section_nodes);
			p3 = claim_element(section_nodes, "P", {});
			var p3_nodes = children(p3);
			t8 = claim_text(p3_nodes, "If you change the site (eg from the front page to the news area) the tracker recognize you and combines the data - \"user ABC stayed 33s in the front page and switched to the news area and stayed there for 3min\". For webmaster powerful data because they know how important their front page is and where they have too change something.");
			p3_nodes.forEach(detach_dev);
			t9 = claim_space(section_nodes);
			p4 = claim_element(section_nodes, "P", {});
			var p4_nodes = children(p4);
			t10 = claim_text(p4_nodes, "Trackers are installed on many websites to log your behavior. Each time you open a website with a tracker (of course every sub-site of a website too). Trackers are included in the website code and are activated each time you visit the site.");
			p4_nodes.forEach(detach_dev);
			t11 = claim_space(section_nodes);
			claim_component(next.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 18, 1, 541);
			add_location(p0, file, 19, 1, 568);
			add_location(p1, file, 20, 1, 629);
			add_location(p2, file, 21, 1, 950);
			add_location(p3, file, 23, 1, 1250);
			add_location(p4, file, 25, 1, 1595);
			add_location(section, file, 17, 0, 530);
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
			append_dev(section, p2);
			append_dev(p2, t6);
			append_dev(section, t7);
			append_dev(section, p3);
			append_dev(p3, t8);
			append_dev(section, t9);
			append_dev(section, p4);
			append_dev(p4, t10);
			append_dev(section, t11);
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
		source: "(17:0) {#if $step==0}",
		ctx
	});

	return block;
}

// (34:2) <Complete>
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
		source: "(34:2) <Complete>",
		ctx
	});

	return block;
}

// (37:2) <Complete>
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
		source: "(37:2) <Complete>",
		ctx
	});

	return block;
}

// (40:2) <Complete success={false}>
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
		source: "(40:2) <Complete success={false}>",
		ctx
	});

	return block;
}

// (27:1) <Next>
function create_default_slot_1(ctx) {
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
		id: create_default_slot_1.name,
		type: "slot",
		source: "(27:1) <Next>",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1ixajda\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Tracker blocker";
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q5> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q5", $$slots, []);

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

class Q5 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q5",
			options,
			id: create_fragment.name
		});
	}
}

export default Q5;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTUuMDQ3NzcwYjkuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvcXVpei9xNS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZSdcbiAgICBpbXBvcnQgTmV4dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL05leHQuc3ZlbHRlJ1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vLi4vc3RvcmUuanMnXG5cdFxuXG5cdC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuICAgIG9uTW91bnQoYXN5bmMoKSA9PiB7JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDF9KTtcbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+VHJhY2tlciBibG9ja2VyPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG57I2lmICRzdGVwPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5UcmFja2VyIGJsb2NrZXI8L2gyPiBcblx0PHA+QXJlIHlvdSBiZWluZyB0cmFja2VkIG9uIHRoZSB3ZWI/IEFsbW9zdCBkZWZpbml0ZWx5LjwvcD5cblx0PHA+V2hpbGUgY29va2llcyBhcmUgdGhlIGxpdHRsZSBpZGVudGlmaWVycyBmb3Igd2Vic2l0ZXMgdG8gcmVjb2duaXplIHlvdSB0aHJvdWdoIG11bHRpcGxlIHZpc2l0cywgdHJhY2tlcnMgdXNlIHRob3NlIGNvb2tpZXMgdG8gcmVjb2duaXplIHlvdSBhbmQgYW5hbHl6ZSB5b3VyIGJlaGF2aW9yLiBUcmFja2VycyB3aWxsIGxvZyB0aGUgc2l0ZSB5b3UgdmlzaXQsIHRoZSBkYXRlIGFuZCB0aW1lLCBhbmQgeW91ciBjb21wdXRlciBzZXR0aW5ncyAobW9yZSBwb3dlcmZ1bCB0cmFja2VycyBjYW4gZXZlbiB3YXRjaCB5b3VyIG1vdXNlIG1vdmVtZW50KS4gPC9wPlxuXHQ8cD5BIHRyYWNrZXIgbGlrZSBHb29nbGUgYWRzZW5zZSBpcyB3YXRjaGluZyB5b3Ugb3ZlciBtdWx0aXBsZSBzaXRlcyB0byBhbmFseXplIHlvdXIgaW50ZXJlc3RzLiBZb3UgdmlzaXRlZCBhIGNhciBzYWxlIHNpdGUgeWVzdGVyZGF5PyBUb2RheSB3ZSBzaG93IHlvdSBBZHMgb2YgY2Fycy4gVGhlIGNoYW5jZSBpcyBoaWdoZXIgdGhhdCB5b3UgbGlrZSB0aGUgYWQgYW5kIGNsaWNrIGl0IGluc3RlYWQgb2YgYW4gYWQgd2l0aCBjYXRzLiAoYmFkIGV4YW1wbGUuLi4gRXZlcnlvbmUgY2xpY2tzIGNhdCBhZHMuLi4pXG5cdDwvcD5cblx0PHA+SWYgeW91IGNoYW5nZSB0aGUgc2l0ZSAoZWcgZnJvbSB0aGUgZnJvbnQgcGFnZSB0byB0aGUgbmV3cyBhcmVhKSB0aGUgdHJhY2tlciByZWNvZ25pemUgeW91IGFuZCBjb21iaW5lcyB0aGUgZGF0YSAtIFwidXNlciBBQkMgc3RheWVkIDMzcyBpbiB0aGUgZnJvbnQgcGFnZSBhbmQgc3dpdGNoZWQgdG8gdGhlIG5ld3MgYXJlYSBhbmQgc3RheWVkIHRoZXJlIGZvciAzbWluXCIuIEZvciB3ZWJtYXN0ZXIgcG93ZXJmdWwgZGF0YSBiZWNhdXNlIHRoZXkga25vdyBob3cgaW1wb3J0YW50IHRoZWlyIGZyb250IHBhZ2UgaXMgYW5kIHdoZXJlIHRoZXkgaGF2ZSB0b28gY2hhbmdlIHNvbWV0aGluZy4gXG5cdDwvcD5cblx0PHA+VHJhY2tlcnMgYXJlIGluc3RhbGxlZCBvbiBtYW55IHdlYnNpdGVzIHRvIGxvZyB5b3VyIGJlaGF2aW9yLiBFYWNoIHRpbWUgeW91IG9wZW4gYSB3ZWJzaXRlIHdpdGggYSB0cmFja2VyIChvZiBjb3Vyc2UgZXZlcnkgc3ViLXNpdGUgb2YgYSB3ZWJzaXRlIHRvbykuIFRyYWNrZXJzIGFyZSBpbmNsdWRlZCBpbiB0aGUgd2Vic2l0ZSBjb2RlIGFuZCBhcmUgYWN0aXZhdGVkIGVhY2ggdGltZSB5b3UgdmlzaXQgdGhlIHNpdGUuPC9wPlxuXHQ8TmV4dD5Db250aW51ZTwvTmV4dD5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+RG93bmxvYWQgUHJpdmFjeSBCYWRnZXIgZXh0ZW50aW9uPC9oMj5cblx0PHA+V2hlbiB5b3UgdmlldyBhIHdlYnBhZ2UsIHRoYXQgcGFnZSB3aWxsIG9mdGVuIGJlIG1hZGUgdXAgb2YgY29udGVudCBmcm9tIG1hbnkgZGlmZmVyZW50IHNvdXJjZXMuIFByaXZhY3kgQmFkZ2VyIGtlZXBzIHRyYWNrIG9mIGFsbCBvZiB0aGlzLiBJZiBhcyB5b3UgYnJvd3NlIHRoZSB3ZWIsIHRoZSBzYW1lIHNvdXJjZSBzZWVtcyB0byBiZSB0cmFja2luZyB5b3VyIGJyb3dzZXIgYWNyb3NzIGRpZmZlcmVudCB3ZWJzaXRlcywgdGhlbiBQcml2YWN5IEJhZGdlciBzcHJpbmdzIGludG8gYWN0aW9uLCB0ZWxsaW5nIHlvdXIgYnJvd3NlciBub3QgdG8gbG9hZCBhbnkgbW9yZSBjb250ZW50IGZyb20gdGhhdCBzb3VyY2UuIEFuZCB3aGVuIHlvdXIgYnJvd3NlciBzdG9wcyBsb2FkaW5nIGNvbnRlbnQgZnJvbSBhIHNvdXJjZSwgdGhhdCBzb3VyY2UgY2FuIG5vIGxvbmdlciB0cmFjayB5b3UuIFZvaWxhITwvcD5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8Q29tcGxldGU+XG5cdFx0XHREb3dubG9hZCBleHRlbnNpb24gbm93XG5cdFx0PC9Db21wbGV0ZT5cblx0XHQ8Q29tcGxldGU+XG5cdFx0XHRBbHJlYWR5IEhhdmUgaXRcblx0XHQ8L0NvbXBsZXRlPlxuXHRcdDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0+RG9uJ3Qgd2FudCB0byBkb3dubG9hZCBpdDwvQ29tcGxldGU+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuey9pZn1cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2FBdUNxQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBdkJyQixHQUFLLE9BQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0FkTixRQUFRLEdBQUcscUJBQXFCOzs7Q0FRbkMsT0FBTzs2QkFBYSxVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
