import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, k as add_location, l as insert_dev, m as append_dev, n as noop } from './client.035299a0.js';

/* src/routes/quiz/q3.svelte generated by Svelte v3.23.2 */

const file = "src/routes/quiz/q3.svelte";

function create_fragment(ctx) {
	let t0;
	let section0;
	let h20;
	let t1;
	let t2;
	let p0;
	let t3;
	let t4;
	let p1;
	let t5;
	let t6;
	let section1;
	let h21;
	let t7;
	let t8;
	let p2;
	let t9;
	let t10;
	let button0;
	let t11;
	let t12;
	let button1;
	let t13;
	let t14;
	let button2;
	let t15;
	let t16;
	let button3;
	let t17;

	const block = {
		c: function create() {
			t0 = space();
			section0 = element("section");
			h20 = element("h2");
			t1 = text("Https Everywhere");
			t2 = space();
			p0 = element("p");
			t3 = text("When you connect to a website with regular HTTP, your browser looks up the IP address that corresponds to the website, connects to that IP address, and assumes it’s connected to the correct web server. Data is sent over the connection in clear text. An eavesdropper on a Wi-Fi network, your internet service provider, or government intelligence agencies, can see the web pages you’re visiting and the data you’re transferring back and forth.");
			t4 = space();
			p1 = element("p");
			t5 = text("Many sites on the web offer some limited support for encryption over HTTPS, but make it difficult to use. For instance, they may default to unencrypted HTTP, or fill encrypted pages with links that go back to the unencrypted site. The HTTPS Everywhere extension fixes these problems by using clever technology make every site useto rewrite requests to these sites to HTTPS.With HTTPS, people running the network between your device and the server hosting the website you’re browsing, or other prying eyes, can’t see your requests and your internet traffic.");
			t6 = space();
			section1 = element("section");
			h21 = element("h2");
			t7 = text("Download HTTPS Everywhere extension");
			t8 = space();
			p2 = element("p");
			t9 = text("Informaiton about this extension. What it does exactly. How it works. What benefits users get from having this extension. The EFF has developed a browser extension that makes sure that you access all websites that offer HTTPS using… HTTPS.");
			t10 = space();
			button0 = element("button");
			t11 = text("Download extension now");
			t12 = space();
			button1 = element("button");
			t13 = text("Already Have it");
			t14 = space();
			button2 = element("button");
			t15 = text("Don't want to download it");
			t16 = space();
			button3 = element("button");
			t17 = text("Submit");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-yv6mrh\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			section0 = claim_element(nodes, "SECTION", {});
			var section0_nodes = children(section0);
			h20 = claim_element(section0_nodes, "H2", {});
			var h20_nodes = children(h20);
			t1 = claim_text(h20_nodes, "Https Everywhere");
			h20_nodes.forEach(detach_dev);
			t2 = claim_space(section0_nodes);
			p0 = claim_element(section0_nodes, "P", {});
			var p0_nodes = children(p0);
			t3 = claim_text(p0_nodes, "When you connect to a website with regular HTTP, your browser looks up the IP address that corresponds to the website, connects to that IP address, and assumes it’s connected to the correct web server. Data is sent over the connection in clear text. An eavesdropper on a Wi-Fi network, your internet service provider, or government intelligence agencies, can see the web pages you’re visiting and the data you’re transferring back and forth.");
			p0_nodes.forEach(detach_dev);
			t4 = claim_space(section0_nodes);
			p1 = claim_element(section0_nodes, "P", {});
			var p1_nodes = children(p1);
			t5 = claim_text(p1_nodes, "Many sites on the web offer some limited support for encryption over HTTPS, but make it difficult to use. For instance, they may default to unencrypted HTTP, or fill encrypted pages with links that go back to the unencrypted site. The HTTPS Everywhere extension fixes these problems by using clever technology make every site useto rewrite requests to these sites to HTTPS.With HTTPS, people running the network between your device and the server hosting the website you’re browsing, or other prying eyes, can’t see your requests and your internet traffic.");
			p1_nodes.forEach(detach_dev);
			section0_nodes.forEach(detach_dev);
			t6 = claim_space(nodes);
			section1 = claim_element(nodes, "SECTION", {});
			var section1_nodes = children(section1);
			h21 = claim_element(section1_nodes, "H2", {});
			var h21_nodes = children(h21);
			t7 = claim_text(h21_nodes, "Download HTTPS Everywhere extension");
			h21_nodes.forEach(detach_dev);
			t8 = claim_space(section1_nodes);
			p2 = claim_element(section1_nodes, "P", {});
			var p2_nodes = children(p2);
			t9 = claim_text(p2_nodes, "Informaiton about this extension. What it does exactly. How it works. What benefits users get from having this extension. The EFF has developed a browser extension that makes sure that you access all websites that offer HTTPS using… HTTPS.");
			p2_nodes.forEach(detach_dev);
			section1_nodes.forEach(detach_dev);
			t10 = claim_space(nodes);
			button0 = claim_element(nodes, "BUTTON", {});
			var button0_nodes = children(button0);
			t11 = claim_text(button0_nodes, "Download extension now");
			button0_nodes.forEach(detach_dev);
			t12 = claim_space(nodes);
			button1 = claim_element(nodes, "BUTTON", {});
			var button1_nodes = children(button1);
			t13 = claim_text(button1_nodes, "Already Have it");
			button1_nodes.forEach(detach_dev);
			t14 = claim_space(nodes);
			button2 = claim_element(nodes, "BUTTON", {});
			var button2_nodes = children(button2);
			t15 = claim_text(button2_nodes, "Don't want to download it");
			button2_nodes.forEach(detach_dev);
			t16 = claim_space(nodes);
			button3 = claim_element(nodes, "BUTTON", {});
			var button3_nodes = children(button3);
			t17 = claim_text(button3_nodes, "Submit");
			button3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Https Everywhere";
			add_location(h20, file, 7, 1, 93);
			add_location(p0, file, 8, 2, 122);
			add_location(p1, file, 10, 2, 576);
			add_location(section0, file, 6, 0, 82);
			add_location(h21, file, 14, 1, 1166);
			add_location(p2, file, 15, 1, 1212);
			add_location(section1, file, 13, 0, 1155);
			add_location(button0, file, 17, 0, 1470);
			add_location(button1, file, 18, 0, 1510);
			add_location(button2, file, 19, 0, 1543);
			add_location(button3, file, 20, 0, 1586);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, section0, anchor);
			append_dev(section0, h20);
			append_dev(h20, t1);
			append_dev(section0, t2);
			append_dev(section0, p0);
			append_dev(p0, t3);
			append_dev(section0, t4);
			append_dev(section0, p1);
			append_dev(p1, t5);
			insert_dev(target, t6, anchor);
			insert_dev(target, section1, anchor);
			append_dev(section1, h21);
			append_dev(h21, t7);
			append_dev(section1, t8);
			append_dev(section1, p2);
			append_dev(p2, t9);
			insert_dev(target, t10, anchor);
			insert_dev(target, button0, anchor);
			append_dev(button0, t11);
			insert_dev(target, t12, anchor);
			insert_dev(target, button1, anchor);
			append_dev(button1, t13);
			insert_dev(target, t14, anchor);
			insert_dev(target, button2, anchor);
			append_dev(button2, t15);
			insert_dev(target, t16, anchor);
			insert_dev(target, button3, anchor);
			append_dev(button3, t17);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(section0);
			if (detaching) detach_dev(t6);
			if (detaching) detach_dev(section1);
			if (detaching) detach_dev(t10);
			if (detaching) detach_dev(button0);
			if (detaching) detach_dev(t12);
			if (detaching) detach_dev(button1);
			if (detaching) detach_dev(t14);
			if (detaching) detach_dev(button2);
			if (detaching) detach_dev(t16);
			if (detaching) detach_dev(button3);
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
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Q3> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Q3", $$slots, []);
	return [];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicTMuNzZiNDU1NjcuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9