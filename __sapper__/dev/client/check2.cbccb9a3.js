import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, H as validate_store, I as component_subscribe, J as createEventDispatcher, o as onMount, O as onDestroy, v as validate_slots, L as afterUpdate, B as space, c as create_component, D as query_selector_all, j as detach_dev, E as claim_space, a as claim_component, n as insert_dev, m as mount_component, t as transition_in, b as transition_out, e as destroy_component, Q as set_store_value, f as element, C as text, g as claim_element, h as children, F as claim_text, l as add_location, k as attr_dev, p as append_dev } from './client.4b8ddca1.js';
import './index.8c015364.js';
import { T as TransHelp } from './TransHelp.8dea884b.js';
import { q as quizSteps, c as count, t as timerActive } from './store.791728c5.js';
import { C as Complete, B as Back } from './Back.3faaccfa.js';
import { D as Detect } from './Detect.5d1ad6d8.js';

/* src/routes/quiz/check2.svelte generated by Svelte v3.23.2 */

const file = "src/routes/quiz/check2.svelte";

// (34:2) <Complete>
function create_default_slot_1(ctx) {
	let t;

	const block = {
		c: function create() {
			t = text("Start the next Challenge");
		},
		l: function claim(nodes) {
			t = claim_text(nodes, "Start the next Challenge");
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
		source: "(34:2) <Complete>",
		ctx
	});

	return block;
}

// (22:0) <Trans id="main-content">
function create_default_slot(ctx) {
	let section;
	let div1;
	let h3;
	let t0;
	let t1;
	let h1;
	let t2;
	let t3;
	let p0;
	let strong0;
	let t4;
	let t5;
	let t6;
	let p1;
	let t7;
	let t8;
	let p2;
	let strong1;
	let t9;
	let t10;
	let p3;
	let t11;
	let t12;
	let p4;
	let t13;
	let t14;
	let div0;
	let complete;
	let t15;
	let back;
	let current;

	complete = new Complete({
			props: {
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			},
			$$inline: true
		});

	back = new Back({ $$inline: true });

	const block = {
		c: function create() {
			section = element("section");
			div1 = element("div");
			h3 = element("h3");
			t0 = text("Checkpoint 2:");
			t1 = space();
			h1 = element("h1");
			t2 = text("Surveillance Capitalism How did this happen?");
			t3 = space();
			p0 = element("p");
			strong0 = element("strong");
			t4 = text("Great!");
			t5 = text("You are now on your way to claiming your privacy.");
			t6 = space();
			p1 = element("p");
			t7 = text("By now we hope you see how our private experiences are being harvested to be translated into behavioral data. This data is then processed and packaged as prediction products and sold to business customers with a commercial interest in knowing what we will do now, soon, and later. This is surveillance capitalism.");
			t8 = space();
			p2 = element("p");
			strong1 = element("strong");
			t9 = text("How did this happen?");
			t10 = space();
			p3 = element("p");
			t11 = text("It wasn’t that long ago that the internet entered our daily lives. We went online expecting empowerment, the democratization of knowledge, and help with real problems, but surveillance capitalism really was just too lucrative to resist. Google was the first to learn how to capture surplus behavioral data and use it to compute prediction products that they could sell to advertisers.");
			t12 = space();
			p4 = element("p");
			t13 = text("This economic logic has now spread beyond the tech companies to new surveillance–based ecosystems in virtually every sector, from insurance to automobiles to health, education, finance, to every product described as “smart” and every service described as “personalized.” By now it’s very difficult to participate in society without interfacing with these same channels that are supply chains for surveillance capitalism’s data flows.");
			t14 = space();
			div0 = element("div");
			create_component(complete.$$.fragment);
			t15 = space();
			create_component(back.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			h3 = claim_element(div1_nodes, "H3", {});
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, "Checkpoint 2:");
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			h1 = claim_element(div1_nodes, "H1", {});
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, "Surveillance Capitalism How did this happen?");
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(div1_nodes);
			p0 = claim_element(div1_nodes, "P", {});
			var p0_nodes = children(p0);
			strong0 = claim_element(p0_nodes, "STRONG", { class: true });
			var strong0_nodes = children(strong0);
			t4 = claim_text(strong0_nodes, "Great!");
			strong0_nodes.forEach(detach_dev);
			t5 = claim_text(p0_nodes, "You are now on your way to claiming your privacy.");
			p0_nodes.forEach(detach_dev);
			t6 = claim_space(div1_nodes);
			p1 = claim_element(div1_nodes, "P", {});
			var p1_nodes = children(p1);
			t7 = claim_text(p1_nodes, "By now we hope you see how our private experiences are being harvested to be translated into behavioral data. This data is then processed and packaged as prediction products and sold to business customers with a commercial interest in knowing what we will do now, soon, and later. This is surveillance capitalism.");
			p1_nodes.forEach(detach_dev);
			t8 = claim_space(div1_nodes);
			p2 = claim_element(div1_nodes, "P", {});
			var p2_nodes = children(p2);
			strong1 = claim_element(p2_nodes, "STRONG", { class: true });
			var strong1_nodes = children(strong1);
			t9 = claim_text(strong1_nodes, "How did this happen?");
			strong1_nodes.forEach(detach_dev);
			p2_nodes.forEach(detach_dev);
			t10 = claim_space(div1_nodes);
			p3 = claim_element(div1_nodes, "P", {});
			var p3_nodes = children(p3);
			t11 = claim_text(p3_nodes, "It wasn’t that long ago that the internet entered our daily lives. We went online expecting empowerment, the democratization of knowledge, and help with real problems, but surveillance capitalism really was just too lucrative to resist. Google was the first to learn how to capture surplus behavioral data and use it to compute prediction products that they could sell to advertisers.");
			p3_nodes.forEach(detach_dev);
			t12 = claim_space(div1_nodes);
			p4 = claim_element(div1_nodes, "P", {});
			var p4_nodes = children(p4);
			t13 = claim_text(p4_nodes, "This economic logic has now spread beyond the tech companies to new surveillance–based ecosystems in virtually every sector, from insurance to automobiles to health, education, finance, to every product described as “smart” and every service described as “personalized.” By now it’s very difficult to participate in society without interfacing with these same channels that are supply chains for surveillance capitalism’s data flows.");
			p4_nodes.forEach(detach_dev);
			t14 = claim_space(div1_nodes);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			claim_component(complete.$$.fragment, div0_nodes);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t15 = claim_space(section_nodes);
			claim_component(back.$$.fragment, section_nodes);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(h3, file, 24, 4, 777);
			add_location(h1, file, 25, 8, 808);
			attr_dev(strong0, "class", "svelte-1fien2q");
			add_location(strong0, file, 26, 5, 867);
			add_location(p0, file, 26, 2, 864);
			add_location(p1, file, 27, 2, 946);
			attr_dev(strong1, "class", "svelte-1fien2q");
			add_location(strong1, file, 28, 5, 1272);
			add_location(p2, file, 28, 2, 1269);
			add_location(p3, file, 29, 2, 1316);
			add_location(p4, file, 31, 2, 1713);
			attr_dev(div0, "class", "button-holder svelte-1fien2q");
			add_location(div0, file, 32, 4, 2158);
			attr_dev(div1, "class", "svelte-1fien2q");
			add_location(div1, file, 23, 2, 767);
			attr_dev(section, "class", "svelte-1fien2q");
			add_location(section, file, 22, 1, 755);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div1);
			append_dev(div1, h3);
			append_dev(h3, t0);
			append_dev(div1, t1);
			append_dev(div1, h1);
			append_dev(h1, t2);
			append_dev(div1, t3);
			append_dev(div1, p0);
			append_dev(p0, strong0);
			append_dev(strong0, t4);
			append_dev(p0, t5);
			append_dev(div1, t6);
			append_dev(div1, p1);
			append_dev(p1, t7);
			append_dev(div1, t8);
			append_dev(div1, p2);
			append_dev(p2, strong1);
			append_dev(strong1, t9);
			append_dev(div1, t10);
			append_dev(div1, p3);
			append_dev(p3, t11);
			append_dev(div1, t12);
			append_dev(div1, p4);
			append_dev(p4, t13);
			append_dev(div1, t14);
			append_dev(div1, div0);
			mount_component(complete, div0, null);
			append_dev(section, t15);
			mount_component(back, section, null);
			current = true;
		},
		p: function update(ctx, dirty) {
			const complete_changes = {};

			if (dirty & /*$$scope*/ 16) {
				complete_changes.$$scope = { dirty, ctx };
			}

			complete.$set(complete_changes);
		},
		i: function intro(local) {
			if (current) return;
			transition_in(complete.$$.fragment, local);
			transition_in(back.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(complete.$$.fragment, local);
			transition_out(back.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
			destroy_component(complete);
			destroy_component(back);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_default_slot.name,
		type: "slot",
		source: "(22:0) <Trans id=\\\"main-content\\\">",
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
				id: "main-content",
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
			const head_nodes = query_selector_all("[data-svelte=\"svelte-qv8f8s\"]", document.head);
			head_nodes.forEach(detach_dev);
			t = claim_space(nodes);
			claim_component(trans.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Surveillance Capitalism How did this happen?";
		},
		m: function mount(target, anchor) {
			insert_dev(target, t, anchor);
			mount_component(trans, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			const trans_changes = {};

			if (dirty & /*$$scope*/ 16) {
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
	let $timerActive;
	validate_store(quizSteps, "quizSteps");
	component_subscribe($$self, quizSteps, $$value => $$invalidate(0, $quizSteps = $$value));
	validate_store(count, "count");
	component_subscribe($$self, count, $$value => $$invalidate(1, $count = $$value));
	validate_store(timerActive, "timerActive");
	component_subscribe($$self, timerActive, $$value => $$invalidate(2, $timerActive = $$value));
	const dispatch = createEventDispatcher();

	onMount(async () => {
		set_store_value(quizSteps, $quizSteps[$count].status = 1, $quizSteps);
		timerActive.set(!$timerActive);
	});

	onDestroy(() => timerActive.set(!$timerActive));
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Check2> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Check2", $$slots, []);

	$$self.$capture_state = () => ({
		createEventDispatcher,
		dispatch,
		onMount,
		afterUpdate,
		onDestroy,
		Detect,
		Trans: TransHelp,
		Complete,
		Back,
		quizSteps,
		count,
		timerActive,
		$quizSteps,
		$count,
		$timerActive
	});

	return [];
}

class Check2 extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Check2",
			options,
			id: create_fragment.name
		});
	}
}

export default Check2;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2syLmNiY2NiOWEzLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL3F1aXovY2hlY2syLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IERldGVjdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGVjdC5zdmVsdGUnXG5cdGltcG9ydCBUcmFucyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYW5zSGVscC5zdmVsdGUnO1xuXHRpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jb21wbGV0ZS5zdmVsdGUnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cblx0IC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHQgaW1wb3J0IHsgcXVpelN0ZXBzLCBjb3VudCwgdGltZXJBY3RpdmUgfSBmcm9tICcuLi8uLi9zdG9yZS5qcydcblxuXHRvbk1vdW50KGFzeW5jKCkgPT4ge1xuXHRcdCRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxO1xuXHRcdHRpbWVyQWN0aXZlLnNldCghJHRpbWVyQWN0aXZlKX0pO1xuXHRvbkRlc3Ryb3koKCkgPT4gdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpKVxuXG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlN1cnZlaWxsYW5jZSBDYXBpdGFsaXNtIEhvdyBkaWQgdGhpcyBoYXBwZW4/PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnMgaWQ9XCJtYWluLWNvbnRlbnRcIj5cblx0PHNlY3Rpb24+XG5cdFx0PGRpdj5cbiAgICA8aDM+Q2hlY2twb2ludCAyOjwvaDM+XG4gICAgICAgIDxoMT5TdXJ2ZWlsbGFuY2UgQ2FwaXRhbGlzbSBIb3cgZGlkIHRoaXMgaGFwcGVuPzwvaDE+XG5cdFx0PHA+PHN0cm9uZz5HcmVhdCE8L3N0cm9uZz5Zb3UgYXJlIG5vdyBvbiB5b3VyIHdheSB0byBjbGFpbWluZyB5b3VyIHByaXZhY3kuPC9wPlxuXHRcdDxwPkJ5IG5vdyB3ZSBob3BlIHlvdSBzZWUgaG93IG91ciBwcml2YXRlIGV4cGVyaWVuY2VzIGFyZSBiZWluZyBoYXJ2ZXN0ZWQgdG8gYmUgdHJhbnNsYXRlZCBpbnRvIGJlaGF2aW9yYWwgZGF0YS4gVGhpcyBkYXRhIGlzIHRoZW4gcHJvY2Vzc2VkIGFuZCBwYWNrYWdlZCBhcyBwcmVkaWN0aW9uIHByb2R1Y3RzIGFuZCBzb2xkIHRvIGJ1c2luZXNzIGN1c3RvbWVycyB3aXRoIGEgY29tbWVyY2lhbCBpbnRlcmVzdCBpbiBrbm93aW5nIHdoYXQgd2Ugd2lsbCBkbyBub3csIHNvb24sIGFuZCBsYXRlci4gVGhpcyBpcyBzdXJ2ZWlsbGFuY2UgY2FwaXRhbGlzbS48L3A+XG5cdFx0PHA+PHN0cm9uZz5Ib3cgZGlkIHRoaXMgaGFwcGVuPzwvc3Ryb25nPjwvcD5cblx0XHQ8cD5JdCB3YXNu4oCZdCB0aGF0IGxvbmcgYWdvIHRoYXQgdGhlIGludGVybmV0IGVudGVyZWQgb3VyIGRhaWx5IGxpdmVzLiBXZSB3ZW50IG9ubGluZSBleHBlY3RpbmcgZW1wb3dlcm1lbnQsIHRoZSBkZW1vY3JhdGl6YXRpb24gb2Yga25vd2xlZGdlLCBhbmQgaGVscCB3aXRoIHJlYWwgcHJvYmxlbXMsIGJ1dCBzdXJ2ZWlsbGFuY2UgY2FwaXRhbGlzbSByZWFsbHkgd2FzIGp1c3QgdG9vIGx1Y3JhdGl2ZSB0byByZXNpc3QuIEdvb2dsZSB3YXMgdGhlIGZpcnN0IHRvIGxlYXJuIGhvdyB0byBjYXB0dXJlIHN1cnBsdXMgYmVoYXZpb3JhbCBkYXRhIGFuZCB1c2UgaXQgdG8gY29tcHV0ZSBwcmVkaWN0aW9uIHByb2R1Y3RzIHRoYXQgdGhleSBjb3VsZCBzZWxsIHRvIGFkdmVydGlzZXJzLlxuXHRcdDwvcD5cblx0XHQ8cD5UaGlzIGVjb25vbWljIGxvZ2ljIGhhcyBub3cgc3ByZWFkIGJleW9uZCB0aGUgdGVjaCBjb21wYW5pZXMgdG8gbmV3IHN1cnZlaWxsYW5jZeKAk2Jhc2VkIGVjb3N5c3RlbXMgaW4gdmlydHVhbGx5IGV2ZXJ5IHNlY3RvciwgZnJvbSBpbnN1cmFuY2UgdG8gYXV0b21vYmlsZXMgdG8gaGVhbHRoLCBlZHVjYXRpb24sIGZpbmFuY2UsIHRvIGV2ZXJ5IHByb2R1Y3QgZGVzY3JpYmVkIGFzIOKAnHNtYXJ04oCdIGFuZCBldmVyeSBzZXJ2aWNlIGRlc2NyaWJlZCBhcyDigJxwZXJzb25hbGl6ZWQu4oCdIEJ5IG5vdyBpdOKAmXMgdmVyeSBkaWZmaWN1bHQgdG8gcGFydGljaXBhdGUgaW4gc29jaWV0eSB3aXRob3V0IGludGVyZmFjaW5nIHdpdGggdGhlc2Ugc2FtZSBjaGFubmVscyB0aGF0IGFyZSBzdXBwbHkgY2hhaW5zIGZvciBzdXJ2ZWlsbGFuY2UgY2FwaXRhbGlzbeKAmXMgZGF0YSBmbG93cy48L3A+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8Q29tcGxldGU+U3RhcnQgdGhlIG5leHQgQ2hhbGxlbmdlPC9Db21wbGV0ZT5cblx0PC9kaXY+XG5cdDwvZGl2PlxuXHQ8QmFjay8+XG5cdDwvc2VjdGlvbj5cbjwvVHJhbnM+XG5cbjxzdHlsZT5cbiAgIHNlY3Rpb257XG5cdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM1Mzc2NDcyODEwLTVkMjI5YzY1ZGEwOT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjYwMCZxPTgwKTtcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdHBhZGRpbmctdG9wOiAxNXB4O1xuICAgfVxuICAgZGl2IHtcblx0d2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREOyBcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA5LjN2aCA1dncgMHZoIDkuM3ZoO1xuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgIH1cbiAgXG4gICBzdHJvbmcge1xuXHQgICBmb250LXdlaWdodDogNzAwO1xuXHQgICBmb250LXNpemU6IDIycHg7XG4gICB9XG48L3N0eWxlPiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O09BRU8sUUFBUSxHQUFHLHFCQUFxQjs7Q0FVdEMsT0FBTzs2QkFDTixVQUFVLENBQUMsTUFBTSxFQUFFLE1BQU0sR0FBRyxDQUFDO0VBQzdCLFdBQVcsQ0FBQyxHQUFHLEVBQUUsWUFBWTs7O0NBQzlCLFNBQVMsT0FBTyxXQUFXLENBQUMsR0FBRyxFQUFFLFlBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
