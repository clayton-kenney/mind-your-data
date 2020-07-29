import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, v as validate_slots, Y as validate_each_argument, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, U as empty, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev, N as set_data_dev, _ as destroy_each, W as toggle_class, V as svg_element } from './client.35ecbae9.js';
import './index.44998259.js';
import './index.4a7cbfdd.js';
import { T as TransHelp } from './TransHelp.2158ab34.js';
import { c as count, s as step, q as quizSteps } from './store.976bfe1d.js';
import { C as Complete, B as Back } from './Back.65d19a31.js';
import { B as Btn } from './Btn.8a61a253.js';

/* src/routes/review.svelte generated by Svelte v3.23.2 */
const file = "src/routes/review.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[5] = list[i].name;
	child_ctx[6] = list[i].complete;
	child_ctx[7] = list[i].displayProgress;
	return child_ctx;
}

// (26:4) {#if displayProgress}
function create_if_block(ctx) {
	let div;
	let p;
	let t0_value = /*name*/ ctx[5] + "";
	let t0;
	let t1;

	function select_block_type(ctx, dirty) {
		if (!/*complete*/ ctx[6]) return create_if_block_1;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			div = element("div");
			p = element("p");
			t0 = text(t0_value);
			t1 = space();
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			p = claim_element(div_nodes, "P", { class: true });
			var p_nodes = children(p);
			t0 = claim_text(p_nodes, t0_value);
			p_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "svelte-iyi9e5");
			toggle_class(p, "complete", /*complete*/ ctx[6]);
			add_location(p, file, 27, 8, 1007);
			attr_dev(div, "class", "caret svelte-iyi9e5");
			toggle_class(div, "complete", /*complete*/ ctx[6]);
			add_location(div, file, 26, 4, 964);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, p);
			append_dev(p, t0);
			append_dev(div, t1);
			if_block.m(div, null);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*$quizSteps*/ 2 && t0_value !== (t0_value = /*name*/ ctx[5] + "")) set_data_dev(t0, t0_value);

			if (dirty & /*$quizSteps*/ 2) {
				toggle_class(p, "complete", /*complete*/ ctx[6]);
			}

			if (current_block_type !== (current_block_type = select_block_type(ctx))) {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(div, null);
				}
			}

			if (dirty & /*$quizSteps*/ 2) {
				toggle_class(div, "complete", /*complete*/ ctx[6]);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
			if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(26:4) {#if displayProgress}",
		ctx
	});

	return block;
}

// (35:8) {:else}
function create_else_block(ctx) {
	let svg;
	let path0;
	let path1;

	const block = {
		c: function create() {
			svg = svg_element("svg");
			path0 = svg_element("path");
			path1 = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			svg = claim_element(
				nodes,
				"svg",
				{
					width: true,
					height: true,
					viewBox: true,
					fill: true,
					xmlns: true
				},
				1
			);

			var svg_nodes = children(svg);

			path0 = claim_element(
				svg_nodes,
				"path",
				{
					d: true,
					fill: true,
					stroke: true,
					"stroke-width": true
				},
				1
			);

			children(path0).forEach(detach_dev);
			path1 = claim_element(svg_nodes, "path", { d: true, fill: true }, 1);
			children(path1).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(path0, "d", "M10.2754 19.037C15.1206 19.037 19.0509 15.1126 19.0509 10.2685C19.0509 5.42444 15.1206 1.5 10.2754 1.5C5.43025 1.5 1.5 5.42444 1.5 10.2685C1.5 15.1126 5.43025 19.037 10.2754 19.037Z");
			attr_dev(path0, "fill", "#E94040");
			attr_dev(path0, "stroke", "#E94040");
			attr_dev(path0, "stroke-width", "3");
			add_location(path0, file, 36, 12, 1580);
			attr_dev(path1, "d", "M8.28453 15.8272L3.87075 11.4176C3.60558 11.1527 3.60558 10.7232 3.87075 10.4583L4.83104 9.49886C5.09621 9.23391 5.52618 9.23391 5.79135 9.49886L8.76468 12.4693L15.1332 6.10689C15.3984 5.84197 15.8284 5.84197 16.0935 6.10689L17.0538 7.06629C17.319 7.3312 17.319 7.76074 17.0538 8.02568L9.24484 15.8272C8.97964 16.0921 8.5497 16.0921 8.28453 15.8272Z");
			attr_dev(path1, "fill", "#303538");
			add_location(path1, file, 37, 12, 1835);
			attr_dev(svg, "width", "21");
			attr_dev(svg, "height", "21");
			attr_dev(svg, "viewBox", "0 0 21 21");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg, file, 35, 8, 1472);
		},
		m: function mount(target, anchor) {
			insert_dev(target, svg, anchor);
			append_dev(svg, path0);
			append_dev(svg, path1);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(svg);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(35:8) {:else}",
		ctx
	});

	return block;
}

// (29:8) {#if !complete}
function create_if_block_1(ctx) {
	let svg;
	let circle;
	let path;

	const block = {
		c: function create() {
			svg = svg_element("svg");
			circle = svg_element("circle");
			path = svg_element("path");
			this.h();
		},
		l: function claim(nodes) {
			svg = claim_element(
				nodes,
				"svg",
				{
					width: true,
					height: true,
					viewBox: true,
					fill: true,
					xmlns: true
				},
				1
			);

			var svg_nodes = children(svg);

			circle = claim_element(
				svg_nodes,
				"circle",
				{
					cx: true,
					cy: true,
					r: true,
					stroke: true,
					"stroke-width": true
				},
				1
			);

			children(circle).forEach(detach_dev);
			path = claim_element(svg_nodes, "path", { d: true, fill: true }, 1);
			children(path).forEach(detach_dev);
			svg_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(circle, "cx", "14");
			attr_dev(circle, "cy", "14");
			attr_dev(circle, "r", "13");
			attr_dev(circle, "stroke", "#E94040");
			attr_dev(circle, "stroke-width", "2");
			add_location(circle, file, 30, 12, 1176);
			attr_dev(path, "d", "M13.9991 6.91016L12.7493 8.15993L17.6952 13.1147H6.9082V14.8874H17.6952L12.7493 19.8422L13.9991 21.092L21.09 14.0011L13.9991 6.91016Z");
			attr_dev(path, "fill", "#E94040");
			add_location(path, file, 31, 12, 1255);
			attr_dev(svg, "width", "28");
			attr_dev(svg, "height", "28");
			attr_dev(svg, "viewBox", "0 0 28 28");
			attr_dev(svg, "fill", "none");
			attr_dev(svg, "xmlns", "http://www.w3.org/2000/svg");
			add_location(svg, file, 29, 8, 1068);
		},
		m: function mount(target, anchor) {
			insert_dev(target, svg, anchor);
			append_dev(svg, circle);
			append_dev(svg, path);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(svg);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block_1.name,
		type: "if",
		source: "(29:8) {#if !complete}",
		ctx
	});

	return block;
}

// (25:4) {#each $quizSteps as {name, complete, displayProgress}}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*displayProgress*/ ctx[7] && create_if_block(ctx);

	const block = {
		c: function create() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		l: function claim(nodes) {
			if (if_block) if_block.l(nodes);
			if_block_anchor = empty();
		},
		m: function mount(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert_dev(target, if_block_anchor, anchor);
		},
		p: function update(ctx, dirty) {
			if (/*displayProgress*/ ctx[7]) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d: function destroy(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach_dev(if_block_anchor);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(25:4) {#each $quizSteps as {name, complete, displayProgress}}",
		ctx
	});

	return block;
}

// (21:0) <Trans>
function create_default_slot(ctx) {
	let section;
	let h2;
	let t0;
	let t1;
	let t2;
	let t3;
	let t4;
	let a0;
	let button0;
	let t5;
	let t6;
	let a1;
	let button1;
	let t7;
	let each_value = /*$quizSteps*/ ctx[1];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			section = element("section");
			h2 = element("h2");
			t0 = text("You have completed ");
			t1 = text(/*completed*/ ctx[0]);
			t2 = text(" / 8 challenges!");
			t3 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			a0 = element("a");
			button0 = element("button");
			t5 = text("Claim my Prize");
			t6 = space();
			a1 = element("a");
			button1 = element("button");
			t7 = text("Back to quiz");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			h2 = claim_element(section_nodes, "H2", {});
			var h2_nodes = children(h2);
			t0 = claim_text(h2_nodes, "You have completed ");
			t1 = claim_text(h2_nodes, /*completed*/ ctx[0]);
			t2 = claim_text(h2_nodes, " / 8 challenges!");
			h2_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(section_nodes);
			}

			t4 = claim_space(section_nodes);
			a0 = claim_element(section_nodes, "A", { prefetch: true, href: true });
			var a0_nodes = children(a0);
			button0 = claim_element(a0_nodes, "BUTTON", { class: true });
			var button0_nodes = children(button0);
			t5 = claim_text(button0_nodes, "Claim my Prize");
			button0_nodes.forEach(detach_dev);
			a0_nodes.forEach(detach_dev);
			t6 = claim_space(section_nodes);
			a1 = claim_element(section_nodes, "A", { prefetch: true, href: true });
			var a1_nodes = children(a1);
			button1 = claim_element(a1_nodes, "BUTTON", { class: true });
			var button1_nodes = children(button1);
			t7 = claim_text(button1_nodes, "Back to quiz");
			button1_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h2, file, 22, 4, 813);
			attr_dev(button0, "class", "svelte-iyi9e5");
			add_location(button0, file, 44, 28, 2309);
			attr_dev(a0, "prefetch", "");
			attr_dev(a0, "href", "home");
			add_location(a0, file, 44, 4, 2285);
			attr_dev(button1, "class", "svelte-iyi9e5");
			add_location(button1, file, 46, 32, 2378);
			attr_dev(a1, "prefetch", "");
			attr_dev(a1, "href", "quizmain");
			add_location(a1, file, 46, 4, 2350);
			attr_dev(section, "class", "review svelte-iyi9e5");
			add_location(section, file, 21, 0, 784);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, h2);
			append_dev(h2, t0);
			append_dev(h2, t1);
			append_dev(h2, t2);
			append_dev(section, t3);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(section, null);
			}

			append_dev(section, t4);
			append_dev(section, a0);
			append_dev(a0, button0);
			append_dev(button0, t5);
			append_dev(section, t6);
			append_dev(section, a1);
			append_dev(a1, button1);
			append_dev(button1, t7);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*completed*/ 1) set_data_dev(t1, /*completed*/ ctx[0]);

			if (dirty & /*$quizSteps*/ 2) {
				each_value = /*$quizSteps*/ ctx[1];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(section, t4);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(21:0) <Trans>",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-3r29dh\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Internet of things( Alexa, Home devices)";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope, $quizSteps, completed*/ 1027) {
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
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(1, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(2, $count = $$value));
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);

		$quizSteps.forEach(v => {
			if (v.complete && !v.displayProgress) {
				$$invalidate(0, completed++, completed);
			}
		});
	});

	let completed = 0;
	let current = "initial";
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Review> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Review", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		createEventDispatcher,
		dispatch,
		Trans: TransHelp,
		Complete,
		Btn,
		count,
		step,
		quizSteps,
		Back,
		completed,
		current,
		$quizSteps,
		$count
	});

	$$self.$inject_state = $$props => {
		if ("completed" in $$props) $$invalidate(0, completed = $$props.completed);
		if ("current" in $$props) current = $$props.current;
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [completed, $quizSteps];
}

class Review extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Review",
			options,
			id: create_fragment.name
		});
	}
}

export default Review;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2aWV3Ljk4NTkxNjcxLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3Jldmlldy5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuLi9jb21wb25lbnRzL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi4vY29tcG9uZW50cy9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblxuXHQvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcbiAgICBvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuICAgICAgICAkcXVpelN0ZXBzLmZvckVhY2goKHYpID0+IHtpZih2LmNvbXBsZXRlICYmICF2LmRpc3BsYXlQcm9ncmVzcyl7Y29tcGxldGVkKyt9fSl9KTtcbiAgICBsZXQgY29tcGxldGVkPSAwO1xuICAgXG5cdGxldCBjdXJyZW50ID0gJ2luaXRpYWwnO1xuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5JbnRlcm5ldCBvZiB0aGluZ3MoIEFsZXhhLCBIb21lIGRldmljZXMpPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG48c2VjdGlvbiBjbGFzcz0ncmV2aWV3Jz5cbiAgICA8aDI+WW91IGhhdmUgY29tcGxldGVkIHtjb21wbGV0ZWR9IC8gOCBjaGFsbGVuZ2VzITwvaDI+XG4gICAgXG4gICAgeyNlYWNoICRxdWl6U3RlcHMgYXMge25hbWUsIGNvbXBsZXRlLCBkaXNwbGF5UHJvZ3Jlc3N9fVxuICAgIHsjaWYgZGlzcGxheVByb2dyZXNzfVxuICAgIDxkaXYgY2xhc3M9XCJjYXJldFwiIGNsYXNzOmNvbXBsZXRlPlxuICAgICAgICA8cCBjbGFzczpjb21wbGV0ZT57bmFtZX08L3A+XG4gICAgICAgIHsjaWYgIWNvbXBsZXRlfVxuICAgICAgICA8c3ZnIHdpZHRoPVwiMjhcIiBoZWlnaHQ9XCIyOFwiIHZpZXdCb3g9XCIwIDAgMjggMjhcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxNFwiIGN5PVwiMTRcIiByPVwiMTNcIiBzdHJva2U9XCIjRTk0MDQwXCIgc3Ryb2tlLXdpZHRoPVwiMlwiLz5cbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMuOTk5MSA2LjkxMDE2TDEyLjc0OTMgOC4xNTk5M0wxNy42OTUyIDEzLjExNDdINi45MDgyVjE0Ljg4NzRIMTcuNjk1MkwxMi43NDkzIDE5Ljg0MjJMMTMuOTk5MSAyMS4wOTJMMjEuMDkgMTQuMDAxMUwxMy45OTkxIDYuOTEwMTZaXCIgZmlsbD1cIiNFOTQwNDBcIi8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgIFxuICAgICAgICB7OmVsc2V9XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyMVwiIGhlaWdodD1cIjIxXCIgdmlld0JveD1cIjAgMCAyMSAyMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMC4yNzU0IDE5LjAzN0MxNS4xMjA2IDE5LjAzNyAxOS4wNTA5IDE1LjExMjYgMTkuMDUwOSAxMC4yNjg1QzE5LjA1MDkgNS40MjQ0NCAxNS4xMjA2IDEuNSAxMC4yNzU0IDEuNUM1LjQzMDI1IDEuNSAxLjUgNS40MjQ0NCAxLjUgMTAuMjY4NUMxLjUgMTUuMTEyNiA1LjQzMDI1IDE5LjAzNyAxMC4yNzU0IDE5LjAzN1pcIiBmaWxsPVwiI0U5NDA0MFwiIHN0cm9rZT1cIiNFOTQwNDBcIiBzdHJva2Utd2lkdGg9XCIzXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk04LjI4NDUzIDE1LjgyNzJMMy44NzA3NSAxMS40MTc2QzMuNjA1NTggMTEuMTUyNyAzLjYwNTU4IDEwLjcyMzIgMy44NzA3NSAxMC40NTgzTDQuODMxMDQgOS40OTg4NkM1LjA5NjIxIDkuMjMzOTEgNS41MjYxOCA5LjIzMzkxIDUuNzkxMzUgOS40OTg4Nkw4Ljc2NDY4IDEyLjQ2OTNMMTUuMTMzMiA2LjEwNjg5QzE1LjM5ODQgNS44NDE5NyAxNS44Mjg0IDUuODQxOTcgMTYuMDkzNSA2LjEwNjg5TDE3LjA1MzggNy4wNjYyOUMxNy4zMTkgNy4zMzEyIDE3LjMxOSA3Ljc2MDc0IDE3LjA1MzggOC4wMjU2OEw5LjI0NDg0IDE1LjgyNzJDOC45Nzk2NCAxNi4wOTIxIDguNTQ5NyAxNi4wOTIxIDguMjg0NTMgMTUuODI3MlpcIiBmaWxsPVwiIzMwMzUzOFwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICB7L2lmfVxuICAgIDwvZGl2PiAgXG4gICAgey9pZn1cbiAgICB7L2VhY2h9XG5cbiAgICA8YSBwcmVmZXRjaCBocmVmPSdob21lJz48YnV0dG9uPkNsYWltIG15IFByaXplPC9idXR0b24+PC9hPlxuXG4gICAgPGEgcHJlZmV0Y2ggaHJlZj0ncXVpem1haW4nPjxidXR0b24+QmFjayB0byBxdWl6PC9idXR0b24+PC9hPlxuXG48L3NlY3Rpb24+XG5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAgLnJldmlld3tcbiAgICAgICAgd2lkdGg6NTB2dztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NDI0ZDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIHBhZGRpbmc6IDY1cHggMTAwcHggNjVweCA2NXB4O1xuICAgIH1cbiAgIC5jb21wbGV0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDojMzg0MjREO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuXG4gICB9XG4gICBwIHtcbiAgICAgICBcbiAgICAgICBjb2xvcjojZTk0MDQwO1xuICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgbWFyZ2luOiA1cHg7XG4gICB9XG4gICBidXR0b24ge1xuXHQgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cdCAgIG1hcmdpbjogMTBweDtcblx0ICAgYm9yZGVyOiBibGFjayBzb2xpZCAwcHg7XG5cdCAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgIH1cbiAgIC5jYXJldHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZmxvdzogcm93IG5vd3JhcDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0fVxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBMkIyQixHQUFJOzs7OztvQkFDakIsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUVBREssR0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUZ0QixHQUFlOzs7Ozs7Ozs7Ozs7Ozs7OzJCQUFmLEdBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBRGIsR0FBVTs7OztnQ0FBZixNQUFJOzs7Ozs7Ozs7MkJBRmtCLEdBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQ0FBVCxHQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrREFBVCxHQUFTOzs7Z0NBRTFCLEdBQVU7Ozs7K0JBQWYsTUFBSTs7Ozs7Ozs7Ozs7Ozs7OztvQ0FBSixNQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F0QkgsUUFBUSxHQUFHLHFCQUFxQjs7O0NBU25DLE9BQU87NkJBQWEsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLEdBQUcsQ0FBQzs7RUFDN0MsVUFBVSxDQUFDLE9BQU8sQ0FBRSxDQUFDO09BQVMsQ0FBQyxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsZUFBZTtvQkFBRSxTQUFTOzs7OztLQUN6RSxTQUFTLEdBQUUsQ0FBQztLQUVmLE9BQU8sR0FBRyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
