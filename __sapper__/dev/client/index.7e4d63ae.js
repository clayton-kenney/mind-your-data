import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.b6fbeba4.js';

/* src/routes/index.svelte generated by Svelte v3.23.2 */

const file = "src/routes/index.svelte";

function create_fragment(ctx) {
	let t0;
	let div;
	let h1;
	let t1;
	let t2;
	let p0;
	let t3;
	let br;
	let t4;
	let t5;
	let button;
	let a;
	let t6;
	let t7;
	let ul;
	let li0;
	let h30;
	let t8;
	let t9;
	let p1;
	let t10;
	let t11;
	let li1;
	let h31;
	let t12;
	let t13;
	let p2;
	let t14;
	let t15;
	let li2;
	let h32;
	let t16;
	let t17;
	let p3;
	let t18;
	let t19;
	let img;
	let img_src_value;
	let t20;
	let h2;
	let t21;
	let t22;
	let p4;
	let t23;

	const block = {
		c: function create() {
			t0 = space();
			div = element("div");
			h1 = element("h1");
			t1 = text("Mind Your Data");
			t2 = space();
			p0 = element("p");
			t3 = text("We believe that everyone in this world should be the only owner of our data.");
			br = element("br");
			t4 = text("\n\t\tBut most of us blah blah blah");
			t5 = space();
			button = element("button");
			a = element("a");
			t6 = text("Start the lesson");
			t7 = space();
			ul = element("ul");
			li0 = element("li");
			h30 = element("h3");
			t8 = text("Who We Are");
			t9 = space();
			p1 = element("p");
			t10 = text("For anyone concerned about loss of privacy and the implications it has for our democracy, Mind your Data educates, and empowers citizens to fight for a more equitable form of survillance capitalism because, our future freedom to privacy depends on the actions we take now.");
			t11 = space();
			li1 = element("li");
			h31 = element("h3");
			t12 = text("Our Mission");
			t13 = space();
			p2 = element("p");
			t14 = text("We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all.");
			t15 = space();
			li2 = element("li");
			h32 = element("h3");
			t16 = text("Somethign Else");
			t17 = space();
			p3 = element("p");
			t18 = text("We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all.");
			t19 = space();
			img = element("img");
			t20 = space();
			h2 = element("h2");
			t21 = text("Why it matters");
			t22 = space();
			p4 = element("p");
			t23 = text("I'm baby mixtape selfies duis before they sold out cronut iPhone. Butcher duis williamsburg food truck sustainable quis next level ipsum thundercats synth. Schlitz umami in meggings yuccie food truck. Fashion axe crucifix laboris asymmetrical jean shorts dolore. Freegan chillwave fashion axe vice pinterest bicycle rights vaporware four loko af eiusmod raw denim. Vexillologist fingerstache organic yr poke, lyft nulla portland heirloom elit marfa brunch. Bushwick deep v ut, thundercats air plant banjo palo santo taxidermy succulents before they sold out put a bird on it live-edge hoodie hella.");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-jy18dd\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div = claim_element(nodes, "DIV", { class: true });
			var div_nodes = children(div);
			h1 = claim_element(div_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t1 = claim_text(h1_nodes, "Mind Your Data");
			h1_nodes.forEach(detach_dev);
			t2 = claim_space(div_nodes);
			p0 = claim_element(div_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "We believe that everyone in this world should be the only owner of our data.");
			br = claim_element(p0_nodes, "BR", {});
			t4 = claim_text(p0_nodes, "\n\t\tBut most of us blah blah blah");
			p0_nodes.forEach(detach_dev);
			t5 = claim_space(div_nodes);
			button = claim_element(div_nodes, "BUTTON", { class: true });
			var button_nodes = children(button);
			a = claim_element(button_nodes, "A", { rel: true, href: true, class: true });
			var a_nodes = children(a);
			t6 = claim_text(a_nodes, "Start the lesson");
			a_nodes.forEach(detach_dev);
			button_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			t7 = claim_space(nodes);
			ul = claim_element(nodes, "UL", { class: true });
			var ul_nodes = children(ul);
			li0 = claim_element(ul_nodes, "LI", { class: true });
			var li0_nodes = children(li0);
			h30 = claim_element(li0_nodes, "H3", { class: true });
			var h30_nodes = children(h30);
			t8 = claim_text(h30_nodes, "Who We Are");
			h30_nodes.forEach(detach_dev);
			t9 = claim_space(li0_nodes);
			p1 = claim_element(li0_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t10 = claim_text(p1_nodes, "For anyone concerned about loss of privacy and the implications it has for our democracy, Mind your Data educates, and empowers citizens to fight for a more equitable form of survillance capitalism because, our future freedom to privacy depends on the actions we take now.");
			p1_nodes.forEach(detach_dev);
			li0_nodes.forEach(detach_dev);
			t11 = claim_space(ul_nodes);
			li1 = claim_element(ul_nodes, "LI", { class: true });
			var li1_nodes = children(li1);
			h31 = claim_element(li1_nodes, "H3", { class: true });
			var h31_nodes = children(h31);
			t12 = claim_text(h31_nodes, "Our Mission");
			h31_nodes.forEach(detach_dev);
			t13 = claim_space(li1_nodes);
			p2 = claim_element(li1_nodes, "P", { class: true });
			var p2_nodes = children(p2);
			t14 = claim_text(p2_nodes, "We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all.");
			p2_nodes.forEach(detach_dev);
			li1_nodes.forEach(detach_dev);
			t15 = claim_space(ul_nodes);
			li2 = claim_element(ul_nodes, "LI", { class: true });
			var li2_nodes = children(li2);
			h32 = claim_element(li2_nodes, "H3", { class: true });
			var h32_nodes = children(h32);
			t16 = claim_text(h32_nodes, "Somethign Else");
			h32_nodes.forEach(detach_dev);
			t17 = claim_space(li2_nodes);
			p3 = claim_element(li2_nodes, "P", { class: true });
			var p3_nodes = children(p3);
			t18 = claim_text(p3_nodes, "We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all.");
			p3_nodes.forEach(detach_dev);
			li2_nodes.forEach(detach_dev);
			ul_nodes.forEach(detach_dev);
			t19 = claim_space(nodes);
			img = claim_element(nodes, "IMG", { src: true, class: true, alt: true });
			t20 = claim_space(nodes);
			h2 = claim_element(nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t21 = claim_text(h2_nodes, "Why it matters");
			h2_nodes.forEach(detach_dev);
			t22 = claim_space(nodes);
			p4 = claim_element(nodes, "P", { class: true });
			var p4_nodes = children(p4);
			t23 = claim_text(p4_nodes, "I'm baby mixtape selfies duis before they sold out cronut iPhone. Butcher duis williamsburg food truck sustainable quis next level ipsum thundercats synth. Schlitz umami in meggings yuccie food truck. Fashion axe crucifix laboris asymmetrical jean shorts dolore. Freegan chillwave fashion axe vice pinterest bicycle rights vaporware four loko af eiusmod raw denim. Vexillologist fingerstache organic yr poke, lyft nulla portland heirloom elit marfa brunch. Bushwick deep v ut, thundercats air plant banjo palo santo taxidermy succulents before they sold out put a bird on it live-edge hoodie hella.");
			p4_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Mind Your Data: Aka Fuck surveillance capitalism";
			attr_dev(h1, "class", "svelte-1acdip2");
			add_location(h1, file, 106, 1, 1585);
			add_location(br, file, 107, 81, 1690);
			attr_dev(p0, "class", "svelte-1acdip2");
			add_location(p0, file, 107, 1, 1610);
			attr_dev(a, "rel", "prefetch");
			attr_dev(a, "href", "/quiz");
			attr_dev(a, "class", "svelte-1acdip2");
			add_location(a, file, 109, 9, 1741);
			attr_dev(button, "class", "svelte-1acdip2");
			add_location(button, file, 109, 1, 1733);
			attr_dev(div, "class", "hero svelte-1acdip2");
			add_location(div, file, 105, 0, 1565);
			attr_dev(h30, "class", "svelte-1acdip2");
			add_location(h30, file, 113, 2, 1834);
			attr_dev(p1, "class", "about svelte-1acdip2");
			add_location(p1, file, 114, 2, 1856);
			attr_dev(li0, "class", "about svelte-1acdip2");
			add_location(li0, file, 112, 1, 1813);
			attr_dev(h31, "class", "svelte-1acdip2");
			add_location(h31, file, 117, 2, 2181);
			attr_dev(p2, "class", "about svelte-1acdip2");
			add_location(p2, file, 118, 2, 2204);
			attr_dev(li1, "class", "about svelte-1acdip2");
			add_location(li1, file, 116, 1, 2158);
			attr_dev(h32, "class", "svelte-1acdip2");
			add_location(h32, file, 121, 2, 2489);
			attr_dev(p3, "class", "about svelte-1acdip2");
			add_location(p3, file, 122, 2, 2515);
			attr_dev(li2, "class", "about svelte-1acdip2");
			add_location(li2, file, 120, 1, 2466);
			attr_dev(ul, "class", "svelte-1acdip2");
			add_location(ul, file, 111, 0, 1807);
			if (img.src !== (img_src_value = "./1400x450.png")) attr_dev(img, "src", img_src_value);
			attr_dev(img, "class", "bigImg svelte-1acdip2");
			attr_dev(img, "alt", "placeholder");
			add_location(img, file, 125, 0, 2782);
			attr_dev(h2, "class", "why svelte-1acdip2");
			add_location(h2, file, 126, 0, 2842);
			attr_dev(p4, "class", "why svelte-1acdip2");
			add_location(p4, file, 127, 1, 2879);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div, anchor);
			append_dev(div, h1);
			append_dev(h1, t1);
			append_dev(div, t2);
			append_dev(div, p0);
			append_dev(p0, t3);
			append_dev(p0, br);
			append_dev(p0, t4);
			append_dev(div, t5);
			append_dev(div, button);
			append_dev(button, a);
			append_dev(a, t6);
			insert_dev(target, t7, anchor);
			insert_dev(target, ul, anchor);
			append_dev(ul, li0);
			append_dev(li0, h30);
			append_dev(h30, t8);
			append_dev(li0, t9);
			append_dev(li0, p1);
			append_dev(p1, t10);
			append_dev(ul, t11);
			append_dev(ul, li1);
			append_dev(li1, h31);
			append_dev(h31, t12);
			append_dev(li1, t13);
			append_dev(li1, p2);
			append_dev(p2, t14);
			append_dev(ul, t15);
			append_dev(ul, li2);
			append_dev(li2, h32);
			append_dev(h32, t16);
			append_dev(li2, t17);
			append_dev(li2, p3);
			append_dev(p3, t18);
			insert_dev(target, t19, anchor);
			insert_dev(target, img, anchor);
			insert_dev(target, t20, anchor);
			insert_dev(target, h2, anchor);
			append_dev(h2, t21);
			insert_dev(target, t22, anchor);
			insert_dev(target, p4, anchor);
			append_dev(p4, t23);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div);
			if (detaching) detach_dev(t7);
			if (detaching) detach_dev(ul);
			if (detaching) detach_dev(t19);
			if (detaching) detach_dev(img);
			if (detaching) detach_dev(t20);
			if (detaching) detach_dev(h2);
			if (detaching) detach_dev(t22);
			if (detaching) detach_dev(p4);
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

function instance($$self, $$props) {
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguN2U0ZDYzYWUuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
