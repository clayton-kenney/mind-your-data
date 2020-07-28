import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, J as validate_each_argument, r as createEventDispatcher, u as afterUpdate, v as validate_slots, R as onMount, L as globals, e as element, t as text, f as claim_element, g as children, h as claim_text, b as detach_dev, j as attr_dev, a2 as null_to_empty, k as add_location, l as insert_dev, m as append_dev, F as set_data_dev, a as space, q as query_selector_all, c as claim_space, V as listen_dev, n as noop, Q as destroy_each } from './client.d22a4490.js';
import './index.cccde779.js';
import './store.53d04333.js';
import { C as Completion } from './Completion.9c85534a.js';

/* src/routes/quiz/q1archive.svelte generated by Svelte v3.23.2 */

const { console: console_1, document: document_1 } = globals;
const file = "src/routes/quiz/q1archive.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i];
	return child_ctx;
}

// (87:2) {#each q1Steps as step}
function create_each_block(ctx) {
	let li;
	let t_value = /*step*/ ctx[10].name + "";
	let t;
	let li_class_value;

	const block = {
		c: function create() {
			li = element("li");
			t = text(t_value);
			this.h();
		},
		l: function claim(nodes) {
			li = claim_element(nodes, "LI", { class: true });
			var li_nodes = children(li);
			t = claim_text(li_nodes, t_value);
			li_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(li, "class", li_class_value = "" + (null_to_empty(/*step*/ ctx[10].classn) + " svelte-dkh3bo"));
			add_location(li, file, 87, 3, 2391);
		},
		m: function mount(target, anchor) {
			insert_dev(target, li, anchor);
			append_dev(li, t);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*q1Steps*/ 1 && t_value !== (t_value = /*step*/ ctx[10].name + "")) set_data_dev(t, t_value);

			if (dirty & /*q1Steps*/ 1 && li_class_value !== (li_class_value = "" + (null_to_empty(/*step*/ ctx[10].classn) + " svelte-dkh3bo"))) {
				attr_dev(li, "class", li_class_value);
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(li);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(87:2) {#each q1Steps as step}",
		ctx
	});

	return block;
}

// (98:1) {#if isActive}
function create_if_block(ctx) {
	let video_1;

	const block = {
		c: function create() {
			video_1 = element("video");
			this.h();
		},
		l: function claim(nodes) {
			video_1 = claim_element(nodes, "VIDEO", { autoplay: true, id: true, class: true });
			children(video_1).forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			video_1.autoplay = "true";
			attr_dev(video_1, "id", "videoElement");
			attr_dev(video_1, "class", "svelte-dkh3bo");
			add_location(video_1, file, 98, 2, 2649);
		},
		m: function mount(target, anchor) {
			insert_dev(target, video_1, anchor);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(video_1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(98:1) {#if isActive}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let section0;
	let h3;
	let t1;
	let t2;
	let t3;
	let ul;
	let t4;
	let div;
	let h1;
	let t5;
	let t6;
	let p;
	let t7;
	let t8;
	let section1;
	let button;
	let t9;
	let t10;
	let mounted;
	let dispose;
	let each_value = /*q1Steps*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	let if_block = /*isActive*/ ctx[1] && create_if_block(ctx);

	const block = {
		c: function create() {
			t0 = space();
			section0 = element("section");
			h3 = element("h3");
			t1 = text("Webcam Challenge ");
			t2 = text(/*fraction*/ ctx[4]);
			t3 = space();
			ul = element("ul");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t4 = space();
			div = element("div");
			h1 = element("h1");
			t5 = text(/*headline*/ ctx[2]);
			t6 = space();
			p = element("p");
			t7 = text(/*body*/ ctx[3]);
			t8 = space();
			section1 = element("section");
			button = element("button");
			t9 = text("Next");
			t10 = space();
			if (if_block) if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-11mvzac\"]", document_1.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section0 = claim_element(nodes, "SECTION", { id: true, class: true });
			var section0_nodes = children(section0);
			h3 = claim_element(section0_nodes, "H3", {});
			var h3_nodes = children(h3);
			t1 = claim_text(h3_nodes, "Webcam Challenge ");
			t2 = claim_text(h3_nodes, /*fraction*/ ctx[4]);
			h3_nodes.forEach(detach_dev);
			t3 = claim_space(section0_nodes);
			ul = claim_element(section0_nodes, "UL", { class: true });
			var ul_nodes = children(ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(ul_nodes);
			}

			ul_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t4 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", {});
			var h1_nodes = children(h1);
			t5 = claim_text(h1_nodes, /*headline*/ ctx[2]);
			h1_nodes.forEach(detach_dev);
			t6 = claim_space(div_nodes);
			p = claim_element(div_nodes, "P", {});
			var p_nodes = children(p);
			t7 = claim_text(p_nodes, /*body*/ ctx[3]);
			p_nodes.forEach(detach_dev);
			t8 = claim_space(div_nodes);
			section1 = claim_element(div_nodes, "SECTION", { id: true });
			var section1_nodes = children(section1);
			button = claim_element(section1_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			t9 = claim_text(button_nodes, "Next");
			button_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t10 = claim_space(div_nodes);
			if (if_block) if_block.l(div_nodes);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document_1.title = "Webcam Challenge";
			add_location(h3, file, 84, 1, 2319);
			attr_dev(ul, "class", "svelte-dkh3bo");
			add_location(ul, file, 85, 1, 2357);
			attr_dev(section0, "id", "progress");
			attr_dev(section0, "class", "svelte-dkh3bo");
			add_location(section0, file, 83, 0, 2294);
			add_location(h1, file, 92, 1, 2488);
			add_location(p, file, 93, 1, 2509);
			attr_dev(button, "class", "btn-dark svelte-dkh3bo");
			add_location(button, file, 95, 8, 2559);
			attr_dev(section1, "id", "next-skip");
			add_location(section1, file, 94, 1, 2525);
			attr_dev(div, "class", "quiz-holder svelte-dkh3bo");
			add_location(div, file, 91, 0, 2461);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section0, anchor);
			append_dev(section0, h3);
			append_dev(h3, t1);
			append_dev(h3, t2);
			append_dev(section0, t3);
			append_dev(section0, ul);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}

			insert_dev(target, t4, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t5);
			append_dev(div, t6);
			append_dev(div, p);
			append_dev(p, t7);
			append_dev(div, t8);
			append_dev(div, section1);
			append_dev(section1, button);
			append_dev(button, t9);
			append_dev(div, t10);
			if (if_block) if_block.m(div, null);

			if (!mounted) {
				dispose = listen_dev(button, "click", /*stepUp*/ ctx[5], false, false, false);
				mounted = true;
			}
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*fraction*/ 16) set_data_dev(t2, /*fraction*/ ctx[4]);

			if (dirty & /*q1Steps*/ 1) {
				each_value = /*q1Steps*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*headline*/ 4) set_data_dev(t5, /*headline*/ ctx[2]);
			if (dirty & /*body*/ 8) set_data_dev(t7, /*body*/ ctx[3]);

			if (/*isActive*/ ctx[1]) {
				if (if_block) ; else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(div, null);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section0);
			destroy_each(each_blocks, detaching);
			if (detaching) detach_dev(t4);
			if (detaching) detach_dev(div);
			if (if_block) if_block.d();
			mounted = false;
			dispose();
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

	function complete() {
		dispatch("message", { question: 0, complete: "true" });
	}

	let q1Steps = [
		{
			stepNum: "1",
			h2: "Is your Webcam Covered?",
			name: "Introduction",
			classn: "complete",
			d: "1 / 3",
			copy: "It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.  <br>  If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked."
		},
		{
			stepNum: "2",
			h2: "ACTION: Cover Your Webcam",
			name: "Permissions",
			classn: "incomplete",
			d: "2 / 3",
			copy: "Please have your webcam covered and proceed to next step. We will access to your webcam to make sure you covered the webcam properly. Click “Test” button to proceed challenge."
		},
		{
			stepNum: "3",
			h2: "Great! It’s properly covered.",
			name: "Cover your webcam",
			classn: "incomplete",
			d: "3 / 3",
			copy: "Please remember to leave your webcam covered while its not being used. This can prevent..."
		},
		{
			stepNum: "",
			h2: "",
			name: "",
			classn: "",
			d: "",
			copy: ""
		}
	];

	let isActive;

	function stepUp() {
		$$invalidate(7, q++, q);
		$$invalidate(0, q1Steps[q].classn = "complete", q1Steps);

		if (q == 2) {
			$$invalidate(1, isActive = true);
		}

		if (q > 2) {
			complete();
		}
	}

	let video;

	afterUpdate(() => {
		video = document.querySelector("#videoElement");

		if (navigator.mediaDevices.getUserMedia) {
			navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
				video.srcObject = stream;
			}).catch(function (err0r) {
				console.log("Not loaded");
			});
		}
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console_1.warn(`<Q1archive> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q1archive", $$slots, []);

	$$self.$capture_state = () => ({
		onMount,
		afterUpdate,
		createEventDispatcher,
		Completion,
		dispatch,
		complete,
		q1Steps,
		isActive,
		stepUp,
		video,
		q,
		headline,
		body,
		fraction
	});

	$$self.$inject_state = $$props => {
		if ("q1Steps" in $$props) $$invalidate(0, q1Steps = $$props.q1Steps);
		if ("isActive" in $$props) $$invalidate(1, isActive = $$props.isActive);
		if ("video" in $$props) video = $$props.video;
		if ("q" in $$props) $$invalidate(7, q = $$props.q);
		if ("headline" in $$props) $$invalidate(2, headline = $$props.headline);
		if ("body" in $$props) $$invalidate(3, body = $$props.body);
		if ("fraction" in $$props) $$invalidate(4, fraction = $$props.fraction);
	};

	let q;
	let headline;
	let body;
	let fraction;

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*q1Steps, q*/ 129) {
			 $$invalidate(2, headline = q1Steps[q].h2);
		}

		if ($$self.$$.dirty & /*q1Steps, q*/ 129) {
			 $$invalidate(3, body = q1Steps[q].copy);
		}

		if ($$self.$$.dirty & /*q1Steps, q*/ 129) {
			 $$invalidate(4, fraction = q1Steps[q].d);
		}
	};

	 $$invalidate(7, q = 0);
	return [q1Steps, isActive, headline, body, fraction, stepUp];
}

class Q1archive extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Q1archive",
			options,
			id: create_fragment.name
		});
	}
}

export default Q1archive;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTFhcmNoaXZlLmJmYzAzNTNhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovcTFhcmNoaXZlLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuaW1wb3J0IHsgb25Nb3VudCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuaW1wb3J0IHsgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcbmltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG5cbmNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cbmZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuXHRkaXNwYXRjaCgnbWVzc2FnZScsIHtcblx0XHRxdWVzdGlvbjogMCxcblx0XHRjb21wbGV0ZTogJ3RydWUnXG5cdH0pO1xufVxuXHRsZXQgcTFTdGVwcyA9IFtcblx0eyBzdGVwTnVtOiAnMScsIFxuXHRoMjogJ0lzIHlvdXIgV2ViY2FtIENvdmVyZWQ/JywgXG5cdG5hbWU6ICdJbnRyb2R1Y3Rpb24nLCBcblx0Y2xhc3NuOiAnY29tcGxldGUnLFxuXHRkOiAnMSAvIDMnLFxuXHRjb3B5OiAnSXTigJlzIGxpa2VseSB5b3VyIGNvbXB1dGVyIGFscmVhZHkgaGFzIGEgYnVpbHQtaW4gY2FtZXJhLCBhbmQgaXTigJlzIHBvc3NpYmxlIGZvciB0aGF0IGNhbWVyYSB0byBiZSB1c2VkIHRvIHNweSBvbiB5b3UuICA8YnI+ICBJZiB5b3VyIHdlYmNhbSBmb3Igd2hhdGV2ZXIgcmVhc29uIGhhcyBiZWVuIGhhY2tlZCwgdGhlIHBlcnNvbiBvbiB0aGUgb3RoZXIgc2lkZSBjYW4gdGFrZSBwaWN0dXJlcyBhbmQgdmlkZW8gb2YgYW55dGhpbmcgb3IgYW55b25lLiBObywgdGhpcyBpc27igJl0IGp1c3QgcGFyYW5vaWHigJNhIHJlY2VudCBzdXJ2ZXkgY29uZHVjdGVkIGJ5IEhQIGZvdW5kIHRoYXQgMTAlIGluIHRoZSBVLlMuIGVpdGhlciBrbm93IHNvbWVvbmUgd2hvc2Ugd2ViY2FtIHdhcyBoYWNrZWQgb3IgaGF2ZSBoYWQgdGhlaXIgb3duIHdlYmNhbSBoYWNrZWQuJ30sXG5cdHsgc3RlcE51bTogJzInLCBcblx0aDI6ICdBQ1RJT046IENvdmVyIFlvdXIgV2ViY2FtJywgXG5cdG5hbWU6ICdQZXJtaXNzaW9ucycsIFxuXHRjbGFzc246ICdpbmNvbXBsZXRlJyxcblx0ZDogJzIgLyAzJyxcblx0Y29weTogJ1BsZWFzZSBoYXZlIHlvdXIgd2ViY2FtIGNvdmVyZWQgYW5kIHByb2NlZWQgdG8gbmV4dCBzdGVwLiBXZSB3aWxsIGFjY2VzcyB0byB5b3VyIHdlYmNhbSB0byBtYWtlIHN1cmUgeW91IGNvdmVyZWQgdGhlIHdlYmNhbSBwcm9wZXJseS4gQ2xpY2sg4oCcVGVzdOKAnSBidXR0b24gdG8gcHJvY2VlZCBjaGFsbGVuZ2UuJ30sXG5cdHsgc3RlcE51bTogJzMnLCBcblx0aDI6ICdHcmVhdCEgSXTigJlzIHByb3Blcmx5IGNvdmVyZWQuJywgXG5cdG5hbWU6ICdDb3ZlciB5b3VyIHdlYmNhbScsIFxuXHRjbGFzc246ICdpbmNvbXBsZXRlJyxcblx0ZDogJzMgLyAzJyxcblx0Y29weTogJ1BsZWFzZSByZW1lbWJlciB0byBsZWF2ZSB5b3VyIHdlYmNhbSBjb3ZlcmVkIHdoaWxlIGl0cyBub3QgYmVpbmcgdXNlZC4gVGhpcyBjYW4gcHJldmVudC4uLid9LFxuXHR7c3RlcE51bTogJycsXG5cdGgyOiAnJyxcblx0bmFtZTogJycsXG5cdGNsYXNzbjogJycsXG5cdGQ6ICcnLFxuXHRjb3B5OiAnJ31cbiAgICBdXG5cdFxuXHQkOiBxID0gMDtcblx0bGV0IGlzQWN0aXZlO1xuXHRmdW5jdGlvbiBzdGVwVXAoKSB7XG5cdFx0cSsrO1xuXHRcdHExU3RlcHNbcV0uY2xhc3NuID0gJ2NvbXBsZXRlJztcblx0XHRpZiAocSA9PSAyICl7XG5cdFx0XHRpc0FjdGl2ZSA9IHRydWU7XG5cdFx0fVxuXHRcdGlmIChxID4gMikge1xuXHRcdFx0Y29tcGxldGUoKTtcblx0XHR9XG5cdH1cblx0JDogaGVhZGxpbmUgPSBxMVN0ZXBzW3FdLmgyO1xuXHQkOiBib2R5ID0gcTFTdGVwc1txXS5jb3B5O1xuXHQkOiBmcmFjdGlvbiA9IHExU3RlcHNbcV0uZDtcblx0bGV0IHZpZGVvXG5cdGFmdGVyVXBkYXRlKCgpID0+IHtcblx0dmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ZpZGVvRWxlbWVudFwiKTtcblx0XG5cdGlmIChuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICBcdG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKHsgdmlkZW86IHRydWUgfSlcbiAgICAudGhlbihmdW5jdGlvbiAoc3RyZWFtKSB7XG5cdFx0XHR2aWRlby5zcmNPYmplY3QgPSBzdHJlYW07XG4gICAgfSlcbiAgICAuY2F0Y2goZnVuY3Rpb24gKGVycjByKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIk5vdCBsb2FkZWRcIik7XG4gICAgfSk7XG5cdFx0fVxufSlcblxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5XZWJjYW0gQ2hhbGxlbmdlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48IS0tIENvbXBsZXRpb24gY2xhc3M9J3N0ZXAnLyAtLT5cbjwhLS1cblx0PGgzPldlYmNhbSBDaGFsbGVuZ2Uge2ZyYWN0aW9ufTwvaDM+XG5cdDx1bD5cblx0XHR7I2VhY2ggcTFTdGVwcyBhcyBzdGVwfVxuXHRcdFx0PGxpIGNsYXNzPXtzdGVwLmNsYXNzbn0gPntzdGVwLm5hbWV9PC9saT5cblx0XHR7L2VhY2h9XG5cdDwvdWw+XG48L1Byb2dyZXNzPiAtLT5cbjxzZWN0aW9uIGlkPVwicHJvZ3Jlc3NcIj5cblx0PGgzPldlYmNhbSBDaGFsbGVuZ2Uge2ZyYWN0aW9ufTwvaDM+XG5cdDx1bD5cblx0XHR7I2VhY2ggcTFTdGVwcyBhcyBzdGVwfVxuXHRcdFx0PGxpIGNsYXNzPXtzdGVwLmNsYXNzbn0gPntzdGVwLm5hbWV9PC9saT5cblx0XHR7L2VhY2h9XG5cdDwvdWw+XG48L3NlY3Rpb24+XG48ZGl2IGNsYXNzPSdxdWl6LWhvbGRlcic+XG5cdDxoMT57aGVhZGxpbmV9PC9oMT5cblx0PHA+e2JvZHl9PC9wPiBcblx0PHNlY3Rpb24gaWQ9J25leHQtc2tpcCc+IFxuICAgICAgICA8YnV0dG9uIG9uOmNsaWNrPXtzdGVwVXB9IGNsYXNzPSdidG4tZGFyayc+TmV4dDwvYnV0dG9uPlxuICAgIDwvc2VjdGlvbj5cblx0eyNpZiBpc0FjdGl2ZX1cblx0XHQ8dmlkZW8gYXV0b3BsYXk9XCJ0cnVlXCIgaWQ9XCJ2aWRlb0VsZW1lbnRcIj48L3ZpZGVvPlxuXHR7L2lmfVxuPC9kaXY+XG5cdFxuXHRcbjxzdHlsZT5cblx0bWFpbntcblx0XHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0fVxuICAgLnF1aXotaG9sZGVyIHtcblx0ICAgZGlzcGxheTogYmxvY2s7XG5cdCAgIHdpZHRoOiA2NXZ3OyAvKiA3Mi41IG9yaWdpbmFseSAqL1xuXHQgICBsZWZ0OiAyMHZ3O1xuXHQgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgIHBhZGRpbmc6IDIwcHggNTBweDtcbiAgIH1cbiAgIC5zdGVwe1xuXHRcdG1hcmdpbi1ib3R0b206IDU1cHg7XG4gICB9XG4gICAjcHJvZ3Jlc3Mge1xuXHQgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgfVxuICAgdWwge1xuXHQgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTVweDtcbiAgIH1cbiAgIGxpIHtcblx0ICAgbWFyZ2luOiAzMHB4IDBweDtcbiAgIH1cbiAgIC5pbmNvbXBsZXRlIHtcbiAgICAgICAgY29sb3I6ICNhMGEwYTA7XG5cdFx0bGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XG5cdH1cblx0LmNvbXBsZXRlIHtcblx0XHRsaXN0LXN0eWxlLXR5cGU6IGRpc2M7XG5cdH1cblx0LlNpZGUtaGVhZGxpbmUge1xuXHRcdGZvbnQtc2l6ZTogMjRweDtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHR9XG5cdCN2aWRlb0VsZW1lbnQge1xuXHRcdFxuXHR9XG5cdC5idG4tZGFyayB7XG4gICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMEYyMDMzO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgfVxuPC9zdHlsZT5cblxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7d0JBdUY2QixHQUFJLEtBQUMsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VFQUF4QixHQUFJLEtBQUMsTUFBTTs7Ozs7Ozs7Z0VBQUksR0FBSSxLQUFDLElBQUk7O2tHQUF4QixHQUFJLEtBQUMsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQURoQixHQUFPOzs7O2dDQUFaLE1BQUk7Ozs7NkJBV0YsR0FBUTs7Ozs7Ozs7MEJBYlMsR0FBUTs7Ozs7Ozs7Ozs7MEJBUXpCLEdBQVE7OztzQkFDVCxHQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBVGMsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBUXpCLEdBQVE7Ozs7O3FDQUNULEdBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxREFFaUIsR0FBTTs7Ozs7OERBWFQsR0FBUTs7OzZCQUV0QixHQUFPOzs7OytCQUFaLE1BQUk7Ozs7Ozs7Ozs7Ozs7Ozs7b0NBQUosTUFBSTs7OzZEQU1GLEdBQVE7cURBQ1QsR0FBSTs7b0JBSUgsR0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQTVGUixRQUFRLEdBQUcscUJBQXFCOztVQUU3QixRQUFRO0VBQ2hCLFFBQVEsQ0FBQyxTQUFTLElBQ2pCLFFBQVEsRUFBRSxDQUFDLEVBQ1gsUUFBUSxFQUFFLE1BQU07OztLQUdiLE9BQU87O0dBQ1QsT0FBTyxFQUFFLEdBQUc7R0FDZCxFQUFFLEVBQUUseUJBQXlCO0dBQzdCLElBQUksRUFBRSxjQUFjO0dBQ3BCLE1BQU0sRUFBRSxVQUFVO0dBQ2xCLENBQUMsRUFBRSxPQUFPO0dBQ1YsSUFBSSxFQUFFLDBhQUEwYTs7O0dBQzlhLE9BQU8sRUFBRSxHQUFHO0dBQ2QsRUFBRSxFQUFFLDJCQUEyQjtHQUMvQixJQUFJLEVBQUUsYUFBYTtHQUNuQixNQUFNLEVBQUUsWUFBWTtHQUNwQixDQUFDLEVBQUUsT0FBTztHQUNWLElBQUksRUFBRSxpTEFBaUw7OztHQUNyTCxPQUFPLEVBQUUsR0FBRztHQUNkLEVBQUUsRUFBRSwrQkFBK0I7R0FDbkMsSUFBSSxFQUFFLG1CQUFtQjtHQUN6QixNQUFNLEVBQUUsWUFBWTtHQUNwQixDQUFDLEVBQUUsT0FBTztHQUNWLElBQUksRUFBRSw0RkFBNEY7OztHQUNqRyxPQUFPLEVBQUUsRUFBRTtHQUNaLEVBQUUsRUFBRSxFQUFFO0dBQ04sSUFBSSxFQUFFLEVBQUU7R0FDUixNQUFNLEVBQUUsRUFBRTtHQUNWLENBQUMsRUFBRSxFQUFFO0dBQ0wsSUFBSSxFQUFFLEVBQUU7Ozs7S0FJSixRQUFROztVQUNILE1BQU07a0JBQ2QsQ0FBQztrQkFDRCxPQUFPLENBQUMsQ0FBQyxFQUFFLE1BQU0sR0FBRyxVQUFVOztNQUMxQixDQUFDLElBQUksQ0FBQzttQkFDVCxRQUFRLEdBQUcsSUFBSTs7O01BRVosQ0FBQyxHQUFHLENBQUM7R0FDUixRQUFROzs7O0tBTU4sS0FBSzs7Q0FDVCxXQUFXO0VBQ1gsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZTs7TUFFMUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxZQUFZO0dBQ3JDLFNBQVMsQ0FBQyxZQUFZLENBQUMsWUFBWSxHQUFHLEtBQUssRUFBRSxJQUFJLElBQy9DLElBQUksV0FBVyxNQUFNO0lBQ3ZCLEtBQUssQ0FBQyxTQUFTLEdBQUcsTUFBTTtNQUV0QixLQUFLLFdBQVcsS0FBSztJQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JBYjFCLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUU7Ozs7b0JBQ3hCLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLElBQUk7Ozs7b0JBQ3RCLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUM7Ozs7a0JBZHZCLENBQUMsR0FBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
