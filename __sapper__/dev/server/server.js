'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var sirv = _interopDefault(require('sirv'));
var polka = _interopDefault(require('polka'));
var compression = _interopDefault(require('compression'));
var fs = _interopDefault(require('fs'));
var path = _interopDefault(require('path'));
var blazeface = require('@tensorflow-models/blazeface');
require('@tensorflow/tfjs-core');
require('@tensorflow/tfjs-converter');
var Stream = _interopDefault(require('stream'));
var http = _interopDefault(require('http'));
var Url = _interopDefault(require('url'));
var https = _interopDefault(require('https'));
var zlib = _interopDefault(require('zlib'));

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'What is Sapper?',
		slug: 'what-is-sapper',
		html: `
			<p>First, you have to know what <a href='https://svelte.dev'>Svelte</a> is. Svelte is a UI framework with a bold new idea: rather than providing a library that you write code with (like React or Vue, for example), it's a compiler that turns your components into highly optimized vanilla JavaScript. If you haven't already read the <a href='https://svelte.dev/blog/frameworks-without-the-framework'>introductory blog post</a>, you should!</p>

			<p>Sapper is a Next.js-style framework (<a href='blog/how-is-sapper-different-from-next'>more on that here</a>) built around Svelte. It makes it embarrassingly easy to create extremely high performance web apps. Out of the box, you get:</p>

			<ul>
				<li>Code-splitting, dynamic imports and hot module replacement, powered by webpack</li>
				<li>Server-side rendering (SSR) with client-side hydration</li>
				<li>Service worker for offline support, and all the PWA bells and whistles</li>
				<li>The nicest development experience you've ever had, or your money back</li>
			</ul>

			<p>It's implemented as Express middleware. Everything is set up and waiting for you to get started, but you keep complete control over the server, service worker, webpack config and everything else, so it's as flexible as you need it to be.</p>
		`
	},

	{
		title: 'How to use Sapper',
		slug: 'how-to-use-sapper',
		html: `
			<h2>Step one</h2>
			<p>Create a new project, using <a href='https://github.com/Rich-Harris/degit'>degit</a>:</p>

			<pre><code>npx degit "sveltejs/sapper-template#rollup" my-app
			cd my-app
			npm install # or yarn!
			npm run dev
			</code></pre>

			<h2>Step two</h2>
			<p>Go to <a href='http://localhost:3000'>localhost:3000</a>. Open <code>my-app</code> in your editor. Edit the files in the <code>src/routes</code> directory or add new ones.</p>

			<h2>Step three</h2>
			<p>...</p>

			<h2>Step four</h2>
			<p>Resist overdone joke formats.</p>
		`
	},

	{
		title: 'Why the name?',
		slug: 'why-the-name',
		html: `
			<p>In war, the soldiers who build bridges, repair roads, clear minefields and conduct demolitions — all under combat conditions — are known as <em>sappers</em>.</p>

			<p>For web developers, the stakes are generally lower than those for combat engineers. But we face our own hostile environment: underpowered devices, poor network connections, and the complexity inherent in front-end engineering. Sapper, which is short for <strong>S</strong>velte <strong>app</strong> mak<strong>er</strong>, is your courageous and dutiful ally.</p>
		`
	},

	{
		title: 'How is Sapper different from Next.js?',
		slug: 'how-is-sapper-different-from-next',
		html: `
			<p><a href='https://github.com/zeit/next.js'>Next.js</a> is a React framework from <a href='https://vercel.com/'>Vercel</a>, and is the inspiration for Sapper. There are a few notable differences, however:</p>

			<ul>
				<li>It's powered by <a href='https://svelte.dev'>Svelte</a> instead of React, so it's faster and your apps are smaller</li>
				<li>Instead of route masking, we encode route parameters in filenames. For example, the page you're looking at right now is <code>src/routes/blog/[slug].svelte</code></li>
				<li>As well as pages (Svelte components, which render on server or client), you can create <em>server routes</em> in your <code>routes</code> directory. These are just <code>.js</code> files that export functions corresponding to HTTP methods, and receive Express <code>request</code> and <code>response</code> objects as arguments. This makes it very easy to, for example, add a JSON API such as the one <a href='blog/how-is-sapper-different-from-next.json'>powering this very page</a></li>
				<li>Links are just <code>&lt;a&gt;</code> elements, rather than framework-specific <code>&lt;Link&gt;</code> components. That means, for example, that <a href='blog/how-can-i-get-involved'>this link right here</a>, despite being inside a blob of HTML, works with the router as you'd expect.</li>
			</ul>
		`
	},

	{
		title: 'How can I get involved?',
		slug: 'how-can-i-get-involved',
		html: `
			<p>We're so glad you asked! Come on over to the <a href='https://github.com/sveltejs/svelte'>Svelte</a> and <a href='https://github.com/sveltejs/sapper'>Sapper</a> repos, and join us in the <a href='https://svelte.dev/chat'>Discord chatroom</a>. Everyone is welcome, especially you!</p>
		`
	}
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

const contents = JSON.stringify(posts.map(post => {
	return {
		title: post.title,
		slug: post.slug
	};
}));

function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}

var route_0 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get
});

const lookup = new Map();
posts.forEach(post => {
	lookup.set(post.slug, JSON.stringify(post));
});

function get$1(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

var route_1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	get: get$1
});

function noop() { }
const identity = x => x;
function assign(tar, src) {
    // @ts-ignore
    for (const k in src)
        tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') {
        throw new Error(`'${name}' is not a store with a 'subscribe' method`);
    }
}
function subscribe(store, ...callbacks) {
    if (store == null) {
        return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, _ => value = _)();
    return value;
}

const is_client = typeof window !== 'undefined';
let now = is_client
    ? () => window.performance.now()
    : () => Date.now();
let raf = is_client ? cb => requestAnimationFrame(cb) : noop;

const tasks = new Set();
function run_tasks(now) {
    tasks.forEach(task => {
        if (!task.c(now)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0)
        raf(run_tasks);
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */
function loop(callback) {
    let task;
    if (tasks.size === 0)
        raf(run_tasks);
    return {
        promise: new Promise(fulfill => {
            tasks.add(task = { c: callback, f: fulfill });
        }),
        abort() {
            tasks.delete(task);
        }
    };
}
function custom_event(type, detail) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, false, false, detail);
    return e;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component)
        throw new Error(`Function called outside component initialization`);
    return current_component;
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail) => {
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail);
            callbacks.slice().forEach(fn => {
                fn.call(component, event);
            });
        }
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, match => escaped[match]);
}
function each(items, fn) {
    let str = '';
    for (let i = 0; i < items.length; i += 1) {
        str += fn(items[i], i);
    }
    return str;
}
const missing_component = {
    $$render: () => ''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component')
            name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(parent_component ? parent_component.$$.context : []),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({ $$ });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, options = {}) => {
            on_destroy = [];
            const result = { title: '', head: '', css: new Set() };
            const html = $$render(result, props, {}, options);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map(css => css.code).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || (boolean && !value))
        return '';
    return ` ${name}${value === true ? '' : `=${typeof value === 'string' ? JSON.stringify(escape(value)) : `"${value}"`}`}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : ``;
}

function cubicOut(t) {
    const f = t - 1.0;
    return f * f * f + 1.0;
}

/* src/components/TransHelp.svelte generated by Svelte v3.23.2 */

const TransHelp = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<div>${$$slots.default
	? $$slots.default({})
	: `

    `}
</div>`;
});

/* src/routes/index.svelte generated by Svelte v3.23.2 */

const css = {
	code: "#logo-holder.svelte-1vtc7gq{background-color:white;display:flex;flex-flow:column nowrap;align-items:center}img.svelte-1vtc7gq{width:800px}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script>\\n    import { fade, blur } from 'svelte/transition';\\n    import { quintInOut } from 'svelte/easing';\\n    import { onMount } from 'svelte';\\n    import Trans from '../components/TransHelp.svelte'\\n    let visible = false;\\n    onMount(() => visible = true)\\n</script>\\n<Trans>\\n<div id=\\\"logo-holder\\\">\\n    <div>\\n    {#if visible}\\n    <a prefetch href=\\\"quiz\\\">\\n    <img src=\\\"MYDlogo_large.png\\\" alt=\\\"Mind your data logo, click to enter\\\" in:fade=\\\"{{delay: 3000, duration: 9000, }}\\\" out:blur=\\\"{{delay: 0, duration: 1000}}\\\"></a>\\n    {/if}\\n    </div>\\n</div>\\n</Trans>\\n<style>\\n    #logo-holder{\\n    background-color: white;\\n    display: flex;\\n    flex-flow: column nowrap;\\n    align-items: center;\\n    }\\n    img {\\n        width: 800px;\\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AAmBI,2BAAY,CAAC,AACb,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MAAM,CAAC,MAAM,CACxB,WAAW,CAAE,MAAM,AACnB,CAAC,AACD,GAAG,eAAC,CAAC,AACD,KAAK,CAAE,KAAK,AAChB,CAAC\"}"
};

const Routes = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let visible = false;
	onMount(() => visible = true);
	$$result.css.add(css);

	return `${validate_component(TransHelp, "Trans").$$render($$result, {}, {}, {
		default: () => `<div id="${"logo-holder"}" class="${"svelte-1vtc7gq"}"><div>${visible
		? `<a prefetch href="${"quiz"}"><img src="${"MYDlogo_large.png"}" alt="${"Mind your data logo, click to enter"}" class="${"svelte-1vtc7gq"}"></a>`
		: ``}</div></div>
`
	})}`;
});

/* src/routes/index_old.svelte generated by Svelte v3.23.2 */

const css$1 = {
	code: "h1.svelte-1acdip2.svelte-1acdip2,p.svelte-1acdip2.svelte-1acdip2{text-align:center;margin:0 auto}.hero.svelte-1acdip2.svelte-1acdip2{background-color:#3e4b59;padding-left:80px;padding-top:30vh;width:100%;height:60vh}.hero.svelte-1acdip2 p.svelte-1acdip2{margin:1em auto;color:white}h1.svelte-1acdip2.svelte-1acdip2{font-size:2.8em;text-align:left;text-transform:uppercase;font-weight:700;margin:0 0 0.5em 0;color:white;letter-spacing:25%}h2.svelte-1acdip2.svelte-1acdip2{text-align:left;margin:auto;text-transform:uppercase}h3.svelte-1acdip2.svelte-1acdip2{text-align:center;margin:auto}.bigImg.svelte-1acdip2.svelte-1acdip2{max-width:1400px;background-color:grey}button.svelte-1acdip2.svelte-1acdip2{background:#7AAF54;text-transform:uppercase;padding:10px 20px 10px 20px;font-size:30px;line-height:38px;border:none;border-radius:10px;color:white;box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25)}img.svelte-1acdip2.svelte-1acdip2{width:100%;max-width:400px;margin:0 0 1em 0}.about.svelte-1acdip2.svelte-1acdip2{padding:1.5em}p.svelte-1acdip2.svelte-1acdip2{color:black;text-align:left}ul.svelte-1acdip2.svelte-1acdip2{display:flex;flex-direction:row;list-style:none;margin-block-start:0px;margin-block-end:0px;padding-inline-start:0px}li.svelte-1acdip2.svelte-1acdip2{justify-content:space-around;margin:auto}.why.svelte-1acdip2.svelte-1acdip2{padding-left:80px;margin:1em auto}a.svelte-1acdip2.svelte-1acdip2{text-decoration:none;padding:4px 30px}@media(min-width: 480px){h1.svelte-1acdip2.svelte-1acdip2{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"index_old.svelte\",\"sources\":[\"index_old.svelte\"],\"sourcesContent\":[\"<style>\\n\\tmain {\\n\\t\\twidth: 100%;\\n\\t}\\n\\th1, figure, p {\\n\\t\\ttext-align: center;\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\t\\n\\t.hero {\\n\\t\\tbackground-color: #3e4b59;\\n\\t\\tpadding-left: 80px;\\n\\t\\tpadding-top: 30vh;\\n\\t\\twidth: 100%;\\n\\t\\theight: 60vh;\\n\\t}\\n\\t.hero p {\\n\\t\\tmargin: 1em auto;\\n\\t\\tcolor: white;\\n\\t}\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\ttext-align: left;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t\\tcolor: white;\\n\\t\\tletter-spacing: 25%;\\n\\t}\\n\\th2 {\\n\\t\\ttext-align: left;\\n\\t\\tmargin: auto;\\n\\t\\ttext-transform: uppercase;\\n\\t}\\n\\th3 {\\n\\t\\ttext-align: center;\\n\\t\\tmargin: auto;\\n\\t}\\n\\t.bigImg {\\n\\t\\tmax-width: 1400px;\\n\\t\\tbackground-color: grey;\\n\\t}\\n\\n\\tfigure {\\n\\t\\tmargin: 0 0 1em 0;\\n\\t}\\n\\tbutton {\\n\\t\\tbackground: #7AAF54;\\n\\t\\ttext-transform: uppercase;\\n\\t\\tpadding: 10px 20px 10px 20px;\\n\\t\\tfont-size: 30px;\\n\\t\\tline-height: 38px;\\n\\t\\tborder: none;\\n\\t\\tborder-radius: 10px;\\n\\t\\tcolor: white;\\n\\t\\tbox-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\\n\\t}\\n\\timg {\\n\\t\\twidth: 100%;\\n\\t\\tmax-width: 400px;\\n\\t\\tmargin: 0 0 1em 0;\\n\\t}\\n\\t.about {\\n\\t\\tpadding: 1.5em;\\n\\t}\\n\\tp {\\n\\t\\tcolor: black;\\n\\t\\ttext-align: left;\\n\\t}\\n\\tul {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: row;\\n\\t\\t\\n\\t\\tlist-style: none;\\n\\t\\tmargin-block-start: 0px;\\n\\t\\tmargin-block-end: 0px;\\n\\t\\tpadding-inline-start: 0px;\\n\\t}\\n\\tli {\\n\\t\\tjustify-content: space-around;\\n\\t\\tmargin: auto;\\n\\t}\\n\\t.why{\\n\\t\\tpadding-left: 80px;\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\t.why h2 {\\n\\t\\ttext-transform: uppercase;\\n\\t\\ttext-align: left;\\n\\t}\\n\\ta {\\n\\t\\ttext-decoration: none;\\n\\t\\tpadding: 4px 30px;\\n\\t}\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>Mind Your Data: Aka Fuck surveillance capitalism</title>\\n</svelte:head>\\n\\n<div class=\\\"hero\\\">\\n\\t<h1>Mind Your Data</h1>\\n\\t<p >We believe that everyone in this world should be the only owner of our data.<br>\\n\\t\\tBut most of us blah blah blah </p>\\n\\t\\t<a rel=prefetch href=\\\"/quiz\\\"><button>Start the lesson</button></a>\\n</div>\\n<ul>\\n\\t<li class='about'>\\n\\t\\t<h3>Who We Are</h3>\\n\\t\\t<p class='about'>For anyone concerned about loss of privacy and the implications it has for our democracy, Mind your Data educates, and empowers citizens to fight for a more equitable form of survillance capitalism because, our future freedom to privacy depends on the actions we take now.</p>\\n\\t</li>\\n\\t<li class='about'>\\t\\t\\n\\t\\t<h3>Our Mission</h3>\\n\\t\\t<p class='about'>We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all. </p>\\n\\t</li>\\n\\t<li class='about'>\\t\\t\\n\\t\\t<h3>Somethign Else</h3>\\n\\t\\t<p class='about'>We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all. </p>\\n\\t</li>\\n</ul>\\n<img src='./1400x450.png' class=\\\"bigImg\\\" alt='placeholder'>\\n<h2 class='why'>Why it matters</h2>\\n\\t<p class=\\\"why\\\">I'm baby mixtape selfies duis before they sold out cronut iPhone. Butcher duis williamsburg food truck sustainable quis next level ipsum thundercats synth. Schlitz umami in meggings yuccie food truck. Fashion axe crucifix laboris asymmetrical jean shorts dolore. Freegan chillwave fashion axe vice pinterest bicycle rights vaporware four loko af eiusmod raw denim. Vexillologist fingerstache organic yr poke, lyft nulla portland heirloom elit marfa brunch. Bushwick deep v ut, thundercats air plant banjo palo santo taxidermy succulents before they sold out put a bird on it live-edge hoodie hella.\\n\\t</p>\\n\"],\"names\":[],\"mappings\":\"AAIC,gCAAE,CAAU,CAAC,8BAAC,CAAC,AACd,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,KAAK,8BAAC,CAAC,AACN,gBAAgB,CAAE,OAAO,CACzB,YAAY,CAAE,IAAI,CAClB,WAAW,CAAE,IAAI,CACjB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,AACb,CAAC,AACD,oBAAK,CAAC,CAAC,eAAC,CAAC,AACR,MAAM,CAAE,GAAG,CAAC,IAAI,CAChB,KAAK,CAAE,KAAK,AACb,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,IAAI,CAChB,cAAc,CAAE,SAAS,CACzB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,CACnB,KAAK,CAAE,KAAK,CACZ,cAAc,CAAE,GAAG,AACpB,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,cAAc,CAAE,SAAS,AAC1B,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,IAAI,AACb,CAAC,AACD,OAAO,8BAAC,CAAC,AACR,SAAS,CAAE,MAAM,CACjB,gBAAgB,CAAE,IAAI,AACvB,CAAC,AAKD,MAAM,8BAAC,CAAC,AACP,UAAU,CAAE,OAAO,CACnB,cAAc,CAAE,SAAS,CACzB,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC5B,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,AAC5C,CAAC,AACD,GAAG,8BAAC,CAAC,AACJ,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KAAK,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,AAClB,CAAC,AACD,MAAM,8BAAC,CAAC,AACP,OAAO,CAAE,KAAK,AACf,CAAC,AACD,CAAC,8BAAC,CAAC,AACF,KAAK,CAAE,KAAK,CACZ,UAAU,CAAE,IAAI,AACjB,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CAEnB,UAAU,CAAE,IAAI,CAChB,kBAAkB,CAAE,GAAG,CACvB,gBAAgB,CAAE,GAAG,CACrB,oBAAoB,CAAE,GAAG,AAC1B,CAAC,AACD,EAAE,8BAAC,CAAC,AACH,eAAe,CAAE,YAAY,CAC7B,MAAM,CAAE,IAAI,AACb,CAAC,AACD,kCAAI,CAAC,AACJ,YAAY,CAAE,IAAI,CAClB,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAKD,CAAC,8BAAC,CAAC,AACF,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,GAAG,CAAC,IAAI,AAClB,CAAC,AACD,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,8BAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Index_old = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$1);

	return `${($$result.head += `${($$result.title = `<title>Mind Your Data: Aka Fuck surveillance capitalism</title>`, "")}`, "")}

<div class="${"hero svelte-1acdip2"}"><h1 class="${"svelte-1acdip2"}">Mind Your Data</h1>
	<p class="${"svelte-1acdip2"}">We believe that everyone in this world should be the only owner of our data.<br>
		But most of us blah blah blah </p>
		<a rel="${"prefetch"}" href="${"/quiz"}" class="${"svelte-1acdip2"}"><button class="${"svelte-1acdip2"}">Start the lesson</button></a></div>
<ul class="${"svelte-1acdip2"}"><li class="${"about svelte-1acdip2"}"><h3 class="${"svelte-1acdip2"}">Who We Are</h3>
		<p class="${"about svelte-1acdip2"}">For anyone concerned about loss of privacy and the implications it has for our democracy, Mind your Data educates, and empowers citizens to fight for a more equitable form of survillance capitalism because, our future freedom to privacy depends on the actions we take now.</p></li>
	<li class="${"about svelte-1acdip2"}"><h3 class="${"svelte-1acdip2"}">Our Mission</h3>
		<p class="${"about svelte-1acdip2"}">We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all. </p></li>
	<li class="${"about svelte-1acdip2"}"><h3 class="${"svelte-1acdip2"}">Somethign Else</h3>
		<p class="${"about svelte-1acdip2"}">We are to educate people about the implications of surveillance capitalism and empower them to Opt out and to help bring forth institutions, regulations, and laws to promote a social form of surveillance capitalism that serves all. </p></li></ul>
<img src="${"./1400x450.png"}" class="${"bigImg svelte-1acdip2"}" alt="${"placeholder"}">
<h2 class="${"why svelte-1acdip2"}">Why it matters</h2>
	<p class="${"why svelte-1acdip2"}">I&#39;m baby mixtape selfies duis before they sold out cronut iPhone. Butcher duis williamsburg food truck sustainable quis next level ipsum thundercats synth. Schlitz umami in meggings yuccie food truck. Fashion axe crucifix laboris asymmetrical jean shorts dolore. Freegan chillwave fashion axe vice pinterest bicycle rights vaporware four loko af eiusmod raw denim. Vexillologist fingerstache organic yr poke, lyft nulla portland heirloom elit marfa brunch. Bushwick deep v ut, thundercats air plant banjo palo santo taxidermy succulents before they sold out put a bird on it live-edge hoodie hella.
	</p>`;
});

/* src/routes/resources.svelte generated by Svelte v3.23.2 */

const Resources = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `<p>so much data privacy</p>`;
});

const subscriber_queue = [];
/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 * @param {*=}value initial value
 * @param {StartStopNotifier=}start start and stop notifications for subscriptions
 */
function writable(value, start = noop) {
    let stop;
    const subscribers = [];
    function set(new_value) {
        if (safe_not_equal(value, new_value)) {
            value = new_value;
            if (stop) { // store is ready
                const run_queue = !subscriber_queue.length;
                for (let i = 0; i < subscribers.length; i += 1) {
                    const s = subscribers[i];
                    s[1]();
                    subscriber_queue.push(s, value);
                }
                if (run_queue) {
                    for (let i = 0; i < subscriber_queue.length; i += 2) {
                        subscriber_queue[i][0](subscriber_queue[i + 1]);
                    }
                    subscriber_queue.length = 0;
                }
            }
        }
    }
    function update(fn) {
        set(fn(value));
    }
    function subscribe(run, invalidate = noop) {
        const subscriber = [run, invalidate];
        subscribers.push(subscriber);
        if (subscribers.length === 1) {
            stop = start(set) || noop;
        }
        run(value);
        return () => {
            const index = subscribers.indexOf(subscriber);
            if (index !== -1) {
                subscribers.splice(index, 1);
            }
            if (subscribers.length === 0) {
                stop();
                stop = null;
            }
        };
    }
    return { set, update, subscribe };
}

function is_date(obj) {
    return Object.prototype.toString.call(obj) === '[object Date]';
}

function get_interpolator(a, b) {
    if (a === b || a !== a)
        return () => a;
    const type = typeof a;
    if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
        throw new Error('Cannot interpolate values of different type');
    }
    if (Array.isArray(a)) {
        const arr = b.map((bi, i) => {
            return get_interpolator(a[i], bi);
        });
        return t => arr.map(fn => fn(t));
    }
    if (type === 'object') {
        if (!a || !b)
            throw new Error('Object cannot be null');
        if (is_date(a) && is_date(b)) {
            a = a.getTime();
            b = b.getTime();
            const delta = b - a;
            return t => new Date(a + t * delta);
        }
        const keys = Object.keys(b);
        const interpolators = {};
        keys.forEach(key => {
            interpolators[key] = get_interpolator(a[key], b[key]);
        });
        return t => {
            const result = {};
            keys.forEach(key => {
                result[key] = interpolators[key](t);
            });
            return result;
        };
    }
    if (type === 'number') {
        const delta = b - a;
        return t => a + t * delta;
    }
    throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
    const store = writable(value);
    let task;
    let target_value = value;
    function set(new_value, opts) {
        if (value == null) {
            store.set(value = new_value);
            return Promise.resolve();
        }
        target_value = new_value;
        let previous_task = task;
        let started = false;
        let { delay = 0, duration = 400, easing = identity, interpolate = get_interpolator } = assign(assign({}, defaults), opts);
        if (duration === 0) {
            if (previous_task) {
                previous_task.abort();
                previous_task = null;
            }
            store.set(value = target_value);
            return Promise.resolve();
        }
        const start = now() + delay;
        let fn;
        task = loop(now => {
            if (now < start)
                return true;
            if (!started) {
                fn = interpolate(value, new_value);
                if (typeof duration === 'function')
                    duration = duration(value, new_value);
                started = true;
            }
            if (previous_task) {
                previous_task.abort();
                previous_task = null;
            }
            const elapsed = now - start;
            if (elapsed > duration) {
                store.set(value = new_value);
                return false;
            }
            // @ts-ignore
            store.set(value = fn(easing(elapsed / duration)));
            return true;
        });
        return task.promise;
    }
    return {
        set,
        update: (fn, opts) => set(fn(target_value, value), opts),
        subscribe: store.subscribe
    };
}

//determines what quiz component is showing
const count = writable(0); //max 10

//steps within each quiz component
const step = writable(0);

//is the timer running?
const timerActive = writable(false);
//holds number 0-100 that displays progress bar
const progress = tweened(0, {
    duration: 600,
    easing: cubicOut
});

const quizSteps =  writable([
    { id:'1',  component: "Quiz1", name: 'Cover Webcam', complete:false, status: 0, steps: 3, displayProgress: true},
    { id: '2', component: "Quiz2", name: 'Https Everywhere', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '7', component: 'Quiz6', name: 'Change DNS', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '3', type:'checkpoint', component: "Checkpoint1", name: 'Security vs Privacy', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '4', component: "Quiz3", name: 'Change Search Engine', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '5', component: 'Quiz4', name: 'Change Privacy Settings', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '6', component: 'Quiz5', name: 'Tracker blocker', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '8', type:'checkpoint', component: 'Checkpoint2', name: 'Surveillance Capitalism', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '10', component: 'Quiz7', name: 'Internet of Things', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '9', component: 'Quiz8', name: 'Disable Location Tracking', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '11', type:'checkpoint', component: 'Checkpoint3', name: 'How to Make change', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '12', type:'checkpoint', component: 'Review', name: 'Review', complete:false, status: 0, steps: 0, displayProgress: false},
]);

/*
export const quizSteps =  writable([
    { id:'1',  component: "Quiz1", name: 'Cover Webcam', complete:true, status: 0, steps: 3, displayProgress: true},
    { id: '2', component: "Quiz2", name: 'Https Everywhere', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '7', component: 'Quiz6', name: 'Change DNS', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '3', type:'checkpoint', component: "Checkpoint1", name: 'Security vs Privacy', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '4', component: "Quiz3", name: 'Change Search Engine', complete:false, status: 0, steps: 2, displayProgress: true},
    { id: '5', component: 'Quiz4', name: 'Change Privacy Settings', complete:false, status: 0, steps: 1, displayProgress: true},
    { id: '6', component: 'Quiz5', name: 'Tracker blocker', complete:true, status: 0, steps: 1, displayProgress: true},
    { id: '8', type:'checkpoint', component: 'Checkpoint2', name: 'Surveillance Capitalism', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '10', component: 'Quiz7', name: 'Internet of Things', complete:true, status: 0, steps: 2, displayProgress: true},
    { id: '9', component: 'Quiz8', name: 'Disable Location Tracking', complete:true, status: 0, steps: 2, displayProgress: true},
    { id: '11', type:'checkpoint', component: 'Checkpoint3', name: 'How to Make change', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '12', type:'checkpoint', component: 'Review', name: 'Review', complete:false, status: 0, steps: 0, displayProgress: false},
]) */
/*
export const quizSteps =  writable([
    { id:'1',  component: "Quiz1", name: 'Cover Webcam', complete:true, status: 0, steps: 3, displayProgress: true},
    { id: '2', component: "Quiz2", name: 'Https Everywhere', complete:true, status: 0, steps: 1, displayProgress: true},
    { id: '7', component: 'Quiz6', name: 'Change DNS', complete:true, status: 0, steps: 1, displayProgress: true},
    { id: '3', type:'checkpoint', component: "Checkpoint1", name: 'Security vs Privacy', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '4', component: "Quiz3", name: 'Change Search Engine', complete:true, status: 0, steps: 2, displayProgress: true},
    { id: '5', component: 'Quiz4', name: 'Change Privacy Settings', complete:true, status: 0, steps: 1, displayProgress: true},
    { id: '6', component: 'Quiz5', name: 'Tracker blocker', complete:true, status: 0, steps: 1, displayProgress: true},
    { id: '8', type:'checkpoint', component: 'Checkpoint2', name: 'Surveillance Capitalism', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '10', component: 'Quiz7', name: 'Internet of Things', complete:true, status: 0, steps: 2, displayProgress: true},
    { id: '9', component: 'Quiz8', name: 'Disable Location Tracking', complete:true, status: 0, steps: 2, displayProgress: true},
    { id: '11', type:'checkpoint', component: 'Checkpoint3', name: 'How to Make change', complete:false, status: 0, steps: 0, displayProgress: false},
    { id: '12', type:'checkpoint', component: 'Review', name: 'Review', complete:false, status: 0, steps: 0, displayProgress: false},
])
*/

/* src/components/complete.svelte generated by Svelte v3.23.2 */

const css$2 = {
	code: "button.svelte-c2wm0k{}.green.svelte-c2wm0k{background-color:#73ef7b;color:#2C3C4E}.yellow.svelte-c2wm0k{background-color:#F1C330;color:#2C3C4E}.red.svelte-c2wm0k{background-color:#E74E45;color:#FFFFFF}",
	map: "{\"version\":3,\"file\":\"complete.svelte\",\"sources\":[\"complete.svelte\"],\"sourcesContent\":[\"<script>\\nimport { count, step, quizSteps, progress } from '../store.js'\\nexport let success = true;\\nexport let p = 7.6;\\nexport let green = false;\\nexport let yellow = false;\\nexport let red = false;\\n//export let destoryVid = false;\\n\\n//sets current icon for sidebar\\nfunction increment() {\\n        $quizSteps[$count].complete = true;\\n        $quizSteps[$count].status = 2;\\n        count.update(n => n + 1)\\n        progress.update(n => n+=p)\\n        step.set(0);\\n}\\nfunction incomplete() {\\n        $quizSteps[$count].complete = false;\\n        $quizSteps[$count].status = 0;\\n        count.update(n => n + 1)\\n        progress.update(n => n+=p)\\n        step.set(0);\\n}\\n</script>\\n{#if success}\\n    <button on:click={increment} class:green class:yellow class:red>\\n        <slot>\\n\\n        </slot>\\n    </button>\\n{:else}\\n    <button on:click={incomplete} class:green class:yellow class:red>\\n        <slot>\\n\\n        </slot>\\n    </button>\\n{/if}\\n       \\n<style>\\n    button {\\n        \\n    }\\n    .green {\\n        background-color: #73ef7b;\\n        color: #2C3C4E;\\n    }\\n    .yellow {\\n        background-color: #F1C330;\\n        color: #2C3C4E;\\n    }\\n    .red {\\n        background-color: #E74E45;\\n        color: #FFFFFF;\\n    }\\n</style>\\n\\n\"],\"names\":[],\"mappings\":\"AAwCI,MAAM,cAAC,CAAC,AAER,CAAC,AACD,MAAM,cAAC,CAAC,AACJ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,AAClB,CAAC,AACD,OAAO,cAAC,CAAC,AACL,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,AAClB,CAAC,AACD,IAAI,cAAC,CAAC,AACF,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,AAClB,CAAC\"}"
};

const Complete = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let { success = true } = $$props;
	let { p = 7.6 } = $$props;
	let { green = false } = $$props;
	let { yellow = false } = $$props;
	let { red = false } = $$props;

	if ($$props.success === void 0 && $$bindings.success && success !== void 0) $$bindings.success(success);
	if ($$props.p === void 0 && $$bindings.p && p !== void 0) $$bindings.p(p);
	if ($$props.green === void 0 && $$bindings.green && green !== void 0) $$bindings.green(green);
	if ($$props.yellow === void 0 && $$bindings.yellow && yellow !== void 0) $$bindings.yellow(yellow);
	if ($$props.red === void 0 && $$bindings.red && red !== void 0) $$bindings.red(red);
	$$result.css.add(css$2);

	return `${success
	? `<button class="${[
			"svelte-c2wm0k",
			(green ? "green" : "") + " " + (yellow ? "yellow" : "") + " " + (red ? "red" : "")
		].join(" ").trim()}">${$$slots.default
		? $$slots.default({})
		: `

        `}</button>`
	: `<button class="${[
			"svelte-c2wm0k",
			(green ? "green" : "") + " " + (yellow ? "yellow" : "") + " " + (red ? "red" : "")
		].join(" ").trim()}">${$$slots.default
		? $$slots.default({})
		: `

        `}</button>`}`;
});

/* src/components/Vid.svelte generated by Svelte v3.23.2 */

const css$3 = {
	code: "canvas.svelte-1qzoqa3{position:absolute;top:100px;left:525px}.alert.svelte-1qzoqa3{color:red;font-weight:700;font-size:24px}#not-covered.svelte-1qzoqa3{color:red;background:#FFEEEE;border-radius:6px;border:none;padding:15px}",
	map: "{\"version\":3,\"file\":\"Vid.svelte\",\"sources\":[\"Vid.svelte\"],\"sourcesContent\":[\"<script>\\n    import * as blazeface from '@tensorflow-models/blazeface';\\n    import * as tf from '@tensorflow/tfjs-core';\\n    import * as tfconv from '@tensorflow/tfjs-converter';\\n    import { onMount, beforeUpdate, afterUpdate, onDestroy, tick } from 'svelte';\\n    import Complete from './complete.svelte'\\n\\n    let alert = false;\\n    $: alert = alert;\\n    let model, video, ctx, videoWidth, videoHeight,  canvas, modelLoaded, predictions;\\n    \\n    async function setupCamera() {\\n    video = document.getElementById('video');\\n  const stream = await navigator.mediaDevices.getUserMedia({\\n    'audio': false,\\n    'video': { facingMode: 'user' },\\n  });\\n  video.srcObject = stream;\\n\\n  return new Promise((resolve) => {\\n    video.onloadedmetadata = () => {\\n      resolve(video);\\n    };\\n  });\\n}\\nconst renderPrediction = async () => {\\n  //stats.begin();\\n  const returnTensors = false;\\n  const flipHorizontal = true;\\n  const annotateBoxes = false;\\n  predictions = await model.estimateFaces(\\n    video, returnTensors, flipHorizontal, annotateBoxes);\\n  if (predictions.length > 0) {\\n    alert = true;\\n   \\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\\n    \\n    for (let i = 0; i < predictions.length; i++) {\\n      if (returnTensors) {\\n        predictions[i].topLeft = predictions[i].topLeft.arraySync();\\n        predictions[i].bottomRight = predictions[i].bottomRight.arraySync();\\n        if (annotateBoxes) {\\n          predictions[i].landmarks = predictions[i].landmarks.arraySync();\\n        }\\n      }\\n\\n      const start = predictions[i].topLeft;\\n      const end = predictions[i].bottomRight;\\n      const size = [end[0] - start[0], end[1] - start[1]];\\n      ctx.fillStyle = \\\"rgba(255, 0, 0, 0.5)\\\";\\n      ctx.fillRect(start[0], start[1], size[0], size[1]);\\n\\n      if (annotateBoxes) {\\n        const landmarks = predictions[i].landmarks;\\n\\n        ctx.fillStyle = \\\"blue\\\";\\n        for (let j = 0; j < landmarks.length; j++) {\\n          const x = landmarks[j][0];\\n          const y = landmarks[j][1];\\n          ctx.fillRect(x, y, 5, 5);\\n        }\\n      }\\n    }\\n  }\\n  else {\\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\\n    alert = false;\\n  }\\n  requestAnimationFrame(renderPrediction);\\n}\\nonMount(async() => {\\nconst setupPage = async () => {\\n  await setupCamera();\\n  video.play();\\n\\n  videoWidth = video.videoWidth;\\n  videoHeight = video.videoHeight;\\n  video.width = videoWidth;\\n  video.height = videoHeight;\\n\\n  canvas = document.getElementById('output');\\n  canvas.width = videoWidth;\\n  canvas.height = videoHeight;\\n  ctx = canvas.getContext('2d');\\n  ctx.fillStyle = \\\"rgba(255, 0, 0, 0.5)\\\";\\n\\n  model = await blazeface.load();\\n  modelLoaded = true;\\n};\\nsetupPage();\\n})\\n\\nfunction wait(ms) {\\n  return new Promise((resolve, reject) => setTimeout(resolve, ms));\\n}\\nasync function showText(){\\n  await wait(5000);\\n}\\n\\nlet promise = showText();\\n\\n\\n$: if(modelLoaded) {\\n  renderPrediction();\\n}\\nonDestroy(() => { \\n    console.log(\\\"destroying\\\")\\n    modelLoaded = false;\\n    /*\\n     //let video = document.querySelector('#videoElement');\\n     video.srcObject = null;\\n     navigator.getUserMedia({video: true},\\n     function(stream) {\\n       let track = stream.getTracks()[0];\\n       track.stop();\\n     },\\n     function(error){\\n      console.log('getUserMedia() error', error);\\n     })\\n     */\\n    });\\n</script>\\n\\n<style>\\ncanvas {\\n  position: absolute;\\n  top: 100px;\\n  left: 525px;\\n}\\n.alert {\\n       color: red;\\n       font-weight: 700;\\n        font-size: 24px;\\n   }\\n   #not-covered {\\n       color: red;\\n       background: #FFEEEE;\\n       border-radius: 6px;\\n       border: none;\\n       padding: 15px;\\n   }\\n</style>\\n\\n<video id=\\\"video\\\" bind:this={video} playsinline style=\\\"\\n-webkit-transform: scaleX(-1);\\ntransform: scaleX(-1);\\nwidth: auto;\\nheight: auto;\\n\\\">\\n</video>\\n<canvas id=\\\"output\\\" bind:this={canvas}></canvas>\\n{#await promise}\\n<p>loading...<br>take a deep breath</p>\\n{:then something}\\n{#if alert === true}\\n    <p class:alert>Cover your webcam</p>\\n    <p id=\\\"not-covered\\\">You haven’t covered your webcame or did not do it properly. Please cover your webcam completely to proceed to the next step.</p>\\n    <div class=\\\"button-holder\\\">\\n    <svelte:component this={Complete} p={4.75} green={true} on:click='{m => {modelLoaded = false}}'>\\n        Onwards to the next challenge\\n    </svelte:component>\\n    </div>\\n{:else}\\n    <h2>Nice job!</h2>\\n    <p >Seems like your webcam is covered, you are ouf of the frame, or didn't allow webcam access. But seriously, we recommend covering your webcam...</p>\\n    <div class=\\\"button-holder\\\">\\n    <svelte:component this={Complete} p={4.75} green={true} on:click='{m => {modelLoaded = false}}'>\\n        Onwards to the next challenge\\n    </svelte:component>\\n    </div>\\n{/if}\\n{/await}\"],\"names\":[],\"mappings\":\"AA4HA,MAAM,eAAC,CAAC,AACN,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,KAAK,AACb,CAAC,AACD,MAAM,eAAC,CAAC,AACD,KAAK,CAAE,GAAG,CACV,WAAW,CAAE,GAAG,CACf,SAAS,CAAE,IAAI,AACpB,CAAC,AACD,YAAY,eAAC,CAAC,AACV,KAAK,CAAE,GAAG,CACV,UAAU,CAAE,OAAO,CACnB,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,AACjB,CAAC\"}"
};

function wait(ms) {
	return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function showText() {
	await wait(5000);
}

const Vid = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let alert = false;
	let model, video, ctx, videoWidth, videoHeight, canvas, modelLoaded, predictions;

	async function setupCamera() {
		video = document.getElementById("video");

		const stream = await navigator.mediaDevices.getUserMedia({
			"audio": false,
			"video": { facingMode: "user" }
		});

		video.srcObject = stream;

		return new Promise(resolve => {
				video.onloadedmetadata = () => {
					resolve(video);
				};
			});
	}

	const renderPrediction = async () => {
		//stats.begin();
		const returnTensors = false;

		const flipHorizontal = true;
		const annotateBoxes = false;
		predictions = await model.estimateFaces(video, returnTensors, flipHorizontal, annotateBoxes);

		if (predictions.length > 0) {
			alert = true;
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			for (let i = 0; i < predictions.length; i++) {

				const start = predictions[i].topLeft;
				const end = predictions[i].bottomRight;
				const size = [end[0] - start[0], end[1] - start[1]];
				ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
				ctx.fillRect(start[0], start[1], size[0], size[1]);
			}
		} else {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			alert = false;
		}

		requestAnimationFrame(renderPrediction);
	};

	onMount(async () => {
		const setupPage = async () => {
			await setupCamera();
			video.play();
			videoWidth = video.videoWidth;
			videoHeight = video.videoHeight;
			video.width = videoWidth;
			video.height = videoHeight;
			canvas = document.getElementById("output");
			canvas.width = videoWidth;
			canvas.height = videoHeight;
			ctx = canvas.getContext("2d");
			ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
			model = await blazeface.load();
			modelLoaded = true;
		};

		setupPage();
	});

	let promise = showText();

	onDestroy(() => {
		console.log("destroying");
		modelLoaded = false;
	}); /*
 //let video = document.querySelector('#videoElement');
 video.srcObject = null;
 navigator.getUserMedia({video: true},
 function(stream) {
   let track = stream.getTracks()[0];
   track.stop();
 },
 function(error){
  console.log('getUserMedia() error', error);
 })
 */

	$$result.css.add(css$3);
	alert = alert;

	 {
		if (modelLoaded) {
			renderPrediction();
		}
	}

	return `<video id="${"video"}" playsinline style="${"\n-webkit-transform: scaleX(-1);\ntransform: scaleX(-1);\nwidth: auto;\nheight: auto;\n"}"${add_attribute("this", video, 1)}></video>
<canvas id="${"output"}" class="${"svelte-1qzoqa3"}"${add_attribute("this", canvas, 1)}></canvas>
${(function (__value) {
		if (is_promise(__value)) return `
<p>loading...<br>take a deep breath</p>
`;

		return (function (something) {
			return `
${alert === true
			? `<p class="${["svelte-1qzoqa3", alert ? "alert" : ""].join(" ").trim()}">Cover your webcam</p>
    <p id="${"not-covered"}" class="${"svelte-1qzoqa3"}">You haven’t covered your webcame or did not do it properly. Please cover your webcam completely to proceed to the next step.</p>
    <div class="${"button-holder"}">${validate_component(Complete || missing_component, "svelte:component").$$render($$result, { p: 4.75, green: true }, {}, {
					default: () => `Onwards to the next challenge
    `
				})}</div>`
			: `<h2>Nice job!</h2>
    <p>Seems like your webcam is covered, you are ouf of the frame, or didn&#39;t allow webcam access. But seriously, we recommend covering your webcam...</p>
    <div class="${"button-holder"}">${validate_component(Complete || missing_component, "svelte:component").$$render($$result, { p: 4.75, green: true }, {}, {
					default: () => `Onwards to the next challenge
    `
				})}</div>`}
`;
		})();
	})(promise)}`;
});

/* src/components/Btn.svelte generated by Svelte v3.23.2 */

const css$4 = {
	code: ".green.svelte-b2lwl2{background-color:#73ef7b;color:#2C3C4E}.yellow.svelte-b2lwl2{background-color:#F1C330;color:#2C3C4E}.red.svelte-b2lwl2{background-color:#E74E45;color:#FFFFFF}",
	map: "{\"version\":3,\"file\":\"Btn.svelte\",\"sources\":[\"Btn.svelte\"],\"sourcesContent\":[\"<script>\\n    import { step, progress } from '../store.js'\\n    export let q =1;\\n    export let p = 7.6;\\n    export let green = false;\\n    export let yellow = false;\\n    export let red = false;\\n   const increase = () => {\\n       step.update(n => n+= q);\\n      progress.update(n => n += p)};\\n</script>\\n<button on:click={increase} class:green class:yellow class:red>\\n    <slot>\\n\\n    </slot>\\n</button>\\n\\n<style>\\n    .green {\\n        background-color: #73ef7b;\\n        color: #2C3C4E;\\n    }\\n    .yellow {\\n        background-color: #F1C330;\\n        color: #2C3C4E;\\n    }\\n    .red {\\n        background-color: #E74E45;\\n        color: #FFFFFF;\\n    }\\n</style>\\n\"],\"names\":[],\"mappings\":\"AAkBI,MAAM,cAAC,CAAC,AACJ,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,AAClB,CAAC,AACD,OAAO,cAAC,CAAC,AACL,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,AAClB,CAAC,AACD,IAAI,cAAC,CAAC,AACF,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,AAClB,CAAC\"}"
};

const Btn = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { q = 1 } = $$props;
	let { p = 7.6 } = $$props;
	let { green = false } = $$props;
	let { yellow = false } = $$props;
	let { red = false } = $$props;

	if ($$props.q === void 0 && $$bindings.q && q !== void 0) $$bindings.q(q);
	if ($$props.p === void 0 && $$bindings.p && p !== void 0) $$bindings.p(p);
	if ($$props.green === void 0 && $$bindings.green && green !== void 0) $$bindings.green(green);
	if ($$props.yellow === void 0 && $$bindings.yellow && yellow !== void 0) $$bindings.yellow(yellow);
	if ($$props.red === void 0 && $$bindings.red && red !== void 0) $$bindings.red(red);
	$$result.css.add(css$4);

	return `<button class="${[
		"svelte-b2lwl2",
		(green ? "green" : "") + " " + (yellow ? "yellow" : "") + " " + (red ? "red" : "")
	].join(" ").trim()}">${$$slots.default
	? $$slots.default({})
	: `

    `}
</button>`;
});

/* src/components/Back.svelte generated by Svelte v3.23.2 */

const css$5 = {
	code: "#back.svelte-1x5om3e{display:flex;position:inherit;bottom:72px;flex-flow:row nowrap;align-items:center;color:#757575;margin:20px 0px}svg.svelte-1x5om3e{margin-right:20px;fill:#757575}",
	map: "{\"version\":3,\"file\":\"Back.svelte\",\"sources\":[\"Back.svelte\"],\"sourcesContent\":[\"<script>\\nimport { count, step, quizSteps, progress } from '../store.js'\\nlet p = 7.6;\\nfunction goBack() {\\n    if($count >= 1 && $step == 0) {\\n        alert('Are you sure you want to go back?')\\n        //$quizSteps[$count].complete = true;\\n        count.update(n => n - 1)\\n        $quizSteps[$count+1].status = 0;\\n        if ($quizSteps[$count].status != 2) {\\n            $quizSteps[$count].status = 1;\\n        }\\n        step.set($quizSteps[$count].steps);\\n    } else {\\n        step.update(n => n - 1)\\n    }\\n}\\n</script>\\n{#if $count >= 1}\\n<div id=\\\"back\\\" on:click={() => {goBack()\\n    progress.update(n => n-=p)\\n}}>\\n<svg width=\\\"11\\\" height=\\\"18\\\" viewBox=\\\"0 0 11 18\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <path d=\\\"M11 15.885L4.20108 9L11 2.115L8.90688 0L0 9L8.90688 18L11 15.885Z\\\" fill=\\\"#757575\\\"/>\\n    </svg> Back\\n</div>\\n{/if}\\n<style>\\n    #back {\\n        display: flex;\\n        position: inherit;\\n        bottom: 72px;\\n        flex-flow: row nowrap;\\n        align-items: center;\\n        color: #757575;\\n        margin: 20px 0px;\\n\\n    }\\n    svg {\\n        margin-right: 20px;\\n        fill: #757575;\\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AA4BI,KAAK,eAAC,CAAC,AACH,OAAO,CAAE,IAAI,CACb,QAAQ,CAAE,OAAO,CACjB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,GAAG,CAAC,MAAM,CACrB,WAAW,CAAE,MAAM,CACnB,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,IAAI,CAAC,GAAG,AAEpB,CAAC,AACD,GAAG,eAAC,CAAC,AACD,YAAY,CAAE,IAAI,CAClB,IAAI,CAAE,OAAO,AACjB,CAAC\"}"
};

const Back = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $count = get_store_value(count);
	let $step = get_store_value(step);
	let $quizSteps = get_store_value(quizSteps);

	$$result.css.add(css$5);

	return `${$count >= 1
	? `<div id="${"back"}" class="${"svelte-1x5om3e"}"><svg width="${"11"}" height="${"18"}" viewBox="${"0 0 11 18"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}" class="${"svelte-1x5om3e"}"><path d="${"M11 15.885L4.20108 9L11 2.115L8.90688 0L0 9L8.90688 18L11 15.885Z"}" fill="${"#757575"}"></path></svg> Back
</div>`
	: ``}`;
});

/* src/components/q1.svelte generated by Svelte v3.23.2 */

const css$6 = {
	code: ".video-holder.svelte-3iqsue{width:100%}",
	map: "{\"version\":3,\"file\":\"q1.svelte\",\"sources\":[\"q1.svelte\"],\"sourcesContent\":[\"<script>\\n    import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';\\n    import Vid from './Vid.svelte'\\n    import Trans from './TransHelp.svelte';\\n    import Complete from './complete.svelte'\\n\\timport Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps\\n    import { count, step, quizSteps, timerActive, progress} from '../store.js'\\n    import Back from './Back.svelte'\\n\\n    //sets aside icon to in progress via store\\n   onMount(async() => {\\n        $quizSteps[$count].status = 1;\\n        timerActive.set(!$timerActive)});\\n\\n</script>\\n{#if $step==0}\\n<section>\\n\\t<h1>Is your Webcam Covered?</h1> \\n    <p>It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.</p>  <p>If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.</p>\\n    <div class=\\\"button-holder\\\">\\n    <Btn p={4.75} green={true}>Continue</Btn>\\n    </div>\\n</section>\\n{:else if $step==1}\\n<section>\\n\\t<h2>Cover Your Webcam</h2>\\n\\t<p>Cover your webcam. You can find removable stickers for this purpose, but simple fixes can be found at your home or office. You can use a sticky note or  a piece of masking tape to obscure your webcam when it’s not in use. Like right now. </p>\\n\\t<div class=\\\"button-holder\\\">\\n        <svelte:component this={Btn} p={4.5}>It's covered</svelte:component>\\n        <svelte:component this={Complete} success={false} p={4.5} >No Thanks, It's a hassle</svelte:component> \\n\\t</div>\\n</section>\\n{:else}\\n<section>\\n   <div class=\\\"video-holder\\\">\\n       <Vid></Vid>\\n    </div>\\n</section>\\n{/if}\\n\\n<Back/>\\n<style>\\n   .video-holder{\\n       width: 100%;\\n   }\\n</style>\"],\"names\":[],\"mappings\":\"AA0CG,2BAAa,CAAC,AACV,KAAK,CAAE,IAAI,AACf,CAAC\"}"
};

const Q1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $timerActive = get_store_value(timerActive);
	let $step = get_store_value(step);

	//sets aside icon to in progress via store
	onMount(async () => {
		$quizSteps[$count].status = 1;
		timerActive.set(!$timerActive);
	});

	$$result.css.add(css$6);

	return `${$step == 0
	? `<section><h1>Is your Webcam Covered?</h1> 
    <p>It’s likely your computer already has a built-in camera, and it’s possible for that camera to be used to spy on you.</p>  <p>If your webcam for whatever reason has been hacked, the person on the other side can take pictures and video of anything or anyone. No, this isn’t just paranoia–a recent survey conducted by HP found that 10% in the U.S. either know someone whose webcam was hacked or have had their own webcam hacked.</p>
    <div class="${"button-holder"}">${validate_component(Btn, "Btn").$$render($$result, { p: 4.75, green: true }, {}, { default: () => `Continue` })}</div></section>`
	: `${$step == 1
		? `<section><h2>Cover Your Webcam</h2>
	<p>Cover your webcam. You can find removable stickers for this purpose, but simple fixes can be found at your home or office. You can use a sticky note or  a piece of masking tape to obscure your webcam when it’s not in use. Like right now. </p>
	<div class="${"button-holder"}">${validate_component(Btn || missing_component, "svelte:component").$$render($$result, { p: 4.5 }, {}, { default: () => `It&#39;s covered` })}
        ${validate_component(Complete || missing_component, "svelte:component").$$render($$result, { success: false, p: 4.5 }, {}, {
				default: () => `No Thanks, It&#39;s a hassle`
			})}</div></section>`
		: `<section><div class="${"video-holder svelte-3iqsue"}">${validate_component(Vid, "Vid").$$render($$result, {}, {}, {})}</div></section>`}`}

${validate_component(Back, "Back").$$render($$result, {}, {}, {})}`;
});

/* src/components/q2.svelte generated by Svelte v3.23.2 */

const css$7 = {
	code: ".button-holder.svelte-leh4oa{width:27vw;display:flex;flex-flow:column nowrap}a.svelte-leh4oa{text-decoration:none}",
	map: "{\"version\":3,\"file\":\"q2.svelte\",\"sources\":[\"q2.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { onMount, createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n\\timport Trans from './TransHelp.svelte';\\n\\timport Complete from './complete.svelte' //set success={false} for failure\\n\\timport Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps\\n\\timport { count, step, quizSteps } from '../store.js'\\n\\timport Back from './Back.svelte'\\n\\n     //sets aside icon to in progress via store\\n\\tonMount(() => {$quizSteps[$count].status = 1});\\n\\tlet disabled = false;\\n\\tfunction disable() {\\n\\t\\tdisabled= true;\\n\\t}\\n</script>\\n\\n{#if $step == 0}\\n<section>\\n\\t<h2>Is your information encrypted and secure?</h2> \\n\\t<p>HTTP stands for hypertext transfer protocol. It’s a protocol that allows the transferring of data from a web server to a browser to view web pages.</p>\\n\\t<p>The problem is that the data transferred by HTTP is not encrypted, and it can be intercepted by third parties to view the data being passed between the two systems. This can be addressed by using a secure version called HTTPS, where the \\\"S\\\" stands for secure.</p>\\n\\t<p>Using  HTTPS  is especially important for sites that transmit sensitive data, like ecommerce sites that accept online card payments, or login areas that require users to enter their credentials.</p>\\n\\n\\t<div class=\\\"button-holder\\\">\\n\\t\\t<Btn green={true}>Continue</Btn>\\n\\t</div>\\n</section>\\n{:else}\\n<section>\\n\\t<h2>Download HTTPS Everywhere extension</h2>\\n\\t<p>Luckily, the Electronic Frontier Foundation has created a smart extension that rewrites website requests to HTTPS. With HTTPS, the internet traffic between your device and the server hosting your website can’t be seen by prying eyes.</p>\\n\\n<div class=\\\"button-holder\\\">\\n\\t<a href='https://www.eff.org/https-everywhere' target=\\\"_blank\\\"><button on:click|once='{disable}' disabled='{disabled}'>Download extension now\\n\\t</button></a>\\n\\t<Complete>\\n\\t\\t{#if !disabled}\\n\\t\\tAlready Have it\\n\\t\\t{:else}\\n\\t\\tJust downloaded it\\n\\t\\t{/if}\\n\\t</Complete>\\n\\t<Complete success={false}>\\n\\t\\tNo Thanks\\n\\t</Complete>\\n\\t\\n\\t</div>\\n</section>\\n{/if}\\n<Back/>\\n<style>\\n   .button-holder {\\n\\twidth: 27vw;\\n\\tdisplay: flex;\\n    flex-flow: column nowrap;\\n   }\\n  \\n   a {\\n\\t   text-decoration: none;\\n   }\\n   \\n</style>\"],\"names\":[],\"mappings\":\"AAoDG,cAAc,cAAC,CAAC,AAClB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACV,SAAS,CAAE,MAAM,CAAC,MAAM,AACzB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,eAAe,CAAE,IAAI,AACtB,CAAC\"}"
};

const Q2 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $step = get_store_value(step);
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(() => {
		$quizSteps[$count].status = 1;
	});

	$$result.css.add(css$7);

	return `${$step == 0
	? `<section><h2>Is your information encrypted and secure?</h2> 
	<p>HTTP stands for hypertext transfer protocol. It’s a protocol that allows the transferring of data from a web server to a browser to view web pages.</p>
	<p>The problem is that the data transferred by HTTP is not encrypted, and it can be intercepted by third parties to view the data being passed between the two systems. This can be addressed by using a secure version called HTTPS, where the &quot;S&quot; stands for secure.</p>
	<p>Using  HTTPS  is especially important for sites that transmit sensitive data, like ecommerce sites that accept online card payments, or login areas that require users to enter their credentials.</p>

	<div class="${"button-holder svelte-leh4oa"}">${validate_component(Btn, "Btn").$$render($$result, { green: true }, {}, { default: () => `Continue` })}</div></section>`
	: `<section><h2>Download HTTPS Everywhere extension</h2>
	<p>Luckily, the Electronic Frontier Foundation has created a smart extension that rewrites website requests to HTTPS. With HTTPS, the internet traffic between your device and the server hosting your website can’t be seen by prying eyes.</p>

<div class="${"button-holder svelte-leh4oa"}"><a href="${"https://www.eff.org/https-everywhere"}" target="${"_blank"}" class="${"svelte-leh4oa"}"><button ${ ""}>Download extension now
	</button></a>
	${validate_component(Complete, "Complete").$$render($$result, {}, {}, {
			default: () => `${ `Already Have it` }`
		})}
	${validate_component(Complete, "Complete").$$render($$result, { success: false }, {}, {
			default: () => `No Thanks
	`
		})}</div></section>`}
${validate_component(Back, "Back").$$render($$result, {}, {}, {})}`;
});

/* src/components/q3.svelte generated by Svelte v3.23.2 */

const css$8 = {
	code: "a.svelte-toxb71{text-decoration:underline}",
	map: "{\"version\":3,\"file\":\"q3.svelte\",\"sources\":[\"q3.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { onMount, afterUpdate } from 'svelte';\\n\\timport { createEventDispatcher } from 'svelte';\\n\\t//import Completion from '../../components/Completion.svelte'\\n\\timport Trans from './TransHelp.svelte';\\n\\t \\n\\timport Complete from './complete.svelte' //set success={false} for failure\\n\\timport Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps\\n\\timport { count, step, quizSteps } from '../store.js'\\n\\timport Back from './Back.svelte'\\n\\n\\tonMount(async() => {$quizSteps[$count].status = 1;\\n\\t\\t});\\n\\t\\tlet disabled = false;\\n\\tfunction disable() {\\n\\t\\tdisabled= true;\\n\\t\\tconsole.log(disabled);\\n\\t}\\n\\t</script>\\n\\t<svelte:head>\\n\\t\\t<title>Search Engine</title>\\n\\t</svelte:head>\\n\\t\\n\\t\\t<section>\\n\\t{#if $step==0} \\n\\t\\t<h1>Change Your Search</h1>\\n\\t\\t<h3>How are you searching for information? </h3>\\n\\t\\t<p>Using a search engine can disclose highly personal information about you, such as medical issues, employment status, financial information, political beliefs, and other private details. This data, of course, can be collected, stored, and linked to your data profile (and your real identity). The only way to effectively “opt out” is to keep your data safe and out of the hands of the data collectors.</p>\\n\\t\\t<div class=\\\"button-holder\\\">\\n\\t\\t\\t<Btn yellow={true}>Continue</Btn>\\n\\t\\t</div>\\n\\t{:else}\\n\\t\\t\\t<h1>Use alternative search engine</h1>\\n\\t\\t\\t<p>Protect your privacy while you search using an alternative search engine when you need to find something on the internet. This isn’t as hard asyou might think as there are some competitive alternatives now that don’t collect or share your personal information — we recommend DuckDuckGo as your default search, but if you’d like to search for other options <a href=\\\"https://restoreprivacy.com/private-search-engine/\\\">check these out.</a> </p>\\n\\t\\t\\t\\t<p>Follow the link below for exact instruction on how to change your default search engine.</p>\\n\\t\\t<div class=\\\"button-holder\\\">\\n\\t\\t\\t{#if !disabled}\\n\\t\\t\\t<a href='https://duckduckgo.com/install' target=\\\"_blank\\\">\\n\\t\\t\\t\\t<button on:click|once='{disable}' disabled='{disabled}'>Switch to DuckDuck Go\\n\\t\\t\\t\\t</button>\\n\\t\\t\\t</a>\\n\\t{:else}\\n\\t\\t\\t<Complete>\\n\\t\\t\\t\\tJust changed it!\\n\\t\\t\\t</Complete>\\n\\t\\t{/if}\\n\\t\\t<Complete success={false}>\\n\\t\\t\\tNo Thanks\\n\\t\\t</Complete>\\n\\t\\n\\t\\t</div>\\n\\t\\t{/if}\\n\\t</section>\\n\\t\\t<Back />\\n\\t\\t\\n\\t\\t\\n\\t<style>\\n\\t\\ta {\\n\\t\\t\\ttext-decoration: underline;\\n\\t\\t}\\n\\t</style>\"],\"names\":[],\"mappings\":\"AAyDE,CAAC,cAAC,CAAC,AACF,eAAe,CAAE,SAAS,AAC3B,CAAC\"}"
};

const Q3 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $step = get_store_value(step);

	onMount(async () => {
		$quizSteps[$count].status = 1;
	});

	$$result.css.add(css$8);

	return `${($$result.head += `${($$result.title = `<title>Search Engine</title>`, "")}`, "")}
	
		<section>${$step == 0
	? `<h1>Change Your Search</h1>
		<h3>How are you searching for information? </h3>
		<p>Using a search engine can disclose highly personal information about you, such as medical issues, employment status, financial information, political beliefs, and other private details. This data, of course, can be collected, stored, and linked to your data profile (and your real identity). The only way to effectively “opt out” is to keep your data safe and out of the hands of the data collectors.</p>
		<div class="${"button-holder"}">${validate_component(Btn, "Btn").$$render($$result, { yellow: true }, {}, { default: () => `Continue` })}</div>`
	: `<h1>Use alternative search engine</h1>
			<p>Protect your privacy while you search using an alternative search engine when you need to find something on the internet. This isn’t as hard asyou might think as there are some competitive alternatives now that don’t collect or share your personal information — we recommend DuckDuckGo as your default search, but if you’d like to search for other options <a href="${"https://restoreprivacy.com/private-search-engine/"}" class="${"svelte-toxb71"}">check these out.</a></p>
				<p>Follow the link below for exact instruction on how to change your default search engine.</p>
		<div class="${"button-holder"}">${ `<a href="${"https://duckduckgo.com/install"}" target="${"_blank"}" class="${"svelte-toxb71"}"><button ${ ""}>Switch to DuckDuck Go
				</button></a>`
		}
		${validate_component(Complete, "Complete").$$render($$result, { success: false }, {}, {
			default: () => `No Thanks
		`
		})}</div>`}</section>
		${validate_component(Back, "Back").$$render($$result, {}, {}, {})}`;
});

/* src/components/Detect.svelte generated by Svelte v3.23.2 */

const css$9 = {
	code: "strong.svelte-1qffeqo{font-weight:600;font-size:22px;text-decoration:underline}",
	map: "{\"version\":3,\"file\":\"Detect.svelte\",\"sources\":[\"Detect.svelte\"],\"sourcesContent\":[\"<script>\\n// Opera 8.0+\\nvar isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0 ? true : false;\\n\\n// Firefox 1.0+\\nvar isFirefox = typeof InstallTrigger !== 'undefined' ? true : false;\\n\\n// Safari 3.0+ \\\"[object HTMLElementConstructor]\\\" \\nvar isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === \\\"[object SafariRemoteNotification]\\\"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification)) ? true : false;\\n\\n// Internet Explorer 6-11\\nvar isIE = /*@cc_on!@*/false || !!document.documentMode ? true : false;\\n\\n// Edge 20+\\nvar isEdge = !isIE && !!window.StyleMedia ? true : false;\\n\\n// Chrome 1 - 79\\nvar isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime) ? true : false;\\n\\n// Edge (based on chromium) detection\\nvar isEdgeChromium = isChrome && (navigator.userAgent.indexOf(\\\"Edg\\\") != -1) ? true : false;\\n\\n// Blink engine detection\\nvar isBlink = (isChrome || isOpera) && !!window.CSS ? true : false;\\n\\n\\nlet browser = 'Your browser is:';\\nif (isOpera){\\n    browser+= \\\" Opera\\\"\\n} else if (isFirefox) {\\n    browser+= \\\" Firefox\\\"\\n}else if (isSafari) {\\n    browser+= \\\" Safari\\\"\\n}else if (isIE) {\\n    browser+= \\\" Internet Explorer\\\"\\n}else if (isEdge) {\\n    browser+= \\\" Edge\\\"\\n}else if (isChrome) {\\n    browser+= \\\" Chrome\\\"\\n}else if (isEdgeChromium) {\\n    browser+= \\\" Edge Chromium\\\"\\n} else {\\n    browser += \\\" We don't know???\\\"\\n}\\n</script>\\n<p><strong>{browser}</strong></p>\\n<p></p>\\n{#if isOpera} \\n\\t<ol>\\n        <li>Go to browser’s advanced setting</li>\\n        <li>Select Privacy and security > Content settings > CookiesSelect</li>\\n        <li>Block third-party cookies on the dropdown menu.</li>\\n    </ol>\\n{:else if isFirefox} \\n\\t<ol>\\n        <li>In Firefox, click Tools > Options > Privacy</li>\\n        <li>Select \\\"Use custom settings for history\\\" in the drop-down menu at the top of the dialog box</li> \\n        <li>Check \\\"Clear history when Firefox closes\\\" </li>\\n        <li>Click the Settings button </li>\\n        <li>In the Settings for Clearing History dialog, check the options you want to erase on exit and click OK</li>\\n    </ol>\\n{:else if isSafari }\\n    <ol>\\n        <li>Click the wrench icon in the top-right corner of the browser window and \\n        <li>Choose Options > Under the Hood > Content Settings > Cookies.</li> \\n        <li>Block all third-party cookies or all tracking cookies</li>\\n        <li>Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.</li>\\n    </ol>\\n{:else if isIE} \\n\\t<h2>Honestly...you need to stop using internet explorer. Then we can talk. </h2>\\n{:else if isEdge }\\n        <ol>\\n            <li>Go to Settings</li>\\n            <li>Select View Advanced Settings</li>\\n            <li>Press the drop down arrow under Cookies</li>\\n            <li>Select the 'Block only third party cookies' option</li>\\n        </ol>\\n{:else if isChrome }\\n\\t<ol>\\n        <li>Click the wrench icon in the top-right corner of the browser window and \\n        <li>Choose Options > Under the Hood > Content Settings > Cookies.</li> \\n        <li>Block all third-party cookies or all tracking cookies</li>\\n        <li>Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.</li>\\n    </ol>\\n{:else if isEdgeChromium}\\n<ol>\\n    <li>Go to Settings</li>\\n    <li>Select View Advanced Settings</li>\\n    <li>Press the drop down arrow under Cookies</li>\\n    <li>Select the 'Block only third party cookies' option</li>\\n</ol>\\n{:else} \\n\\t<p>Sorry...we don't know what kind of browser you are using, so can't provide instructions. Try searching DuckDuckGo for an answer.</p>\\n{/if}\\n<p></p>\\n<style>\\n    strong{\\n        font-weight: 600;\\n        font-size: 22px;\\n        text-decoration: underline;\\n    }\\n    \\n</style>\"],\"names\":[],\"mappings\":\"AAgGI,qBAAM,CAAC,AACH,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,eAAe,CAAE,SAAS,AAC9B,CAAC\"}"
};

const Detect = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	var isOpera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(" OPR/") >= 0
	? true
	: false;

	// Firefox 1.0+
	var isFirefox = typeof InstallTrigger !== "undefined" ? true : false;

	// Safari 3.0+ "[object HTMLElementConstructor]" 
	var isSafari = (/constructor/i).test(window.HTMLElement) || (function (p) {
		return p.toString() === "[object SafariRemoteNotification]";
	})(!window["safari"] || typeof safari !== "undefined" && safari.pushNotification)
	? true
	: false;

	// Internet Explorer 6-11
	var isIE = /*@cc_on!@*/
	 !!document.documentMode ? true : false;

	// Edge 20+
	var isEdge = !isIE && !!window.StyleMedia ? true : false;

	// Chrome 1 - 79
	var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime)
	? true
	: false;

	// Edge (based on chromium) detection
	var isEdgeChromium = isChrome && navigator.userAgent.indexOf("Edg") != -1
	? true
	: false;

	let browser = "Your browser is:";

	if (isOpera) {
		browser += " Opera";
	} else if (isFirefox) {
		browser += " Firefox";
	} else if (isSafari) {
		browser += " Safari";
	} else if (isIE) {
		browser += " Internet Explorer";
	} else if (isEdge) {
		browser += " Edge";
	} else if (isChrome) {
		browser += " Chrome";
	} else if (isEdgeChromium) {
		browser += " Edge Chromium";
	} else {
		browser += " We don't know???";
	}

	$$result.css.add(css$9);

	return `<p><strong class="${"svelte-1qffeqo"}">${escape(browser)}</strong></p>
<p></p>
${isOpera
	? `<ol><li>Go to browser’s advanced setting</li>
        <li>Select Privacy and security &gt; Content settings &gt; CookiesSelect</li>
        <li>Block third-party cookies on the dropdown menu.</li></ol>`
	: `${isFirefox
		? `<ol><li>In Firefox, click Tools &gt; Options &gt; Privacy</li>
        <li>Select &quot;Use custom settings for history&quot; in the drop-down menu at the top of the dialog box</li> 
        <li>Check &quot;Clear history when Firefox closes&quot; </li>
        <li>Click the Settings button </li>
        <li>In the Settings for Clearing History dialog, check the options you want to erase on exit and click OK</li></ol>`
		: `${isSafari
			? `<ol><li>Click the wrench icon in the top-right corner of the browser window and 
        </li><li>Choose Options &gt; Under the Hood &gt; Content Settings &gt; Cookies.</li> 
        <li>Block all third-party cookies or all tracking cookies</li>
        <li>Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.</li></ol>`
			: `${isIE
				? `<h2>Honestly...you need to stop using internet explorer. Then we can talk. </h2>`
				: `${isEdge
					? `<ol><li>Go to Settings</li>
            <li>Select View Advanced Settings</li>
            <li>Press the drop down arrow under Cookies</li>
            <li>Select the &#39;Block only third party cookies&#39; option</li></ol>`
					: `${isChrome
						? `<ol><li>Click the wrench icon in the top-right corner of the browser window and 
        </li><li>Choose Options &gt; Under the Hood &gt; Content Settings &gt; Cookies.</li> 
        <li>Block all third-party cookies or all tracking cookies</li>
        <li>Another option in this dialog lets you delete all cookies and other site data automatically when you close the browser.</li></ol>`
						: `${isEdgeChromium
							? `<ol><li>Go to Settings</li>
    <li>Select View Advanced Settings</li>
    <li>Press the drop down arrow under Cookies</li>
    <li>Select the &#39;Block only third party cookies&#39; option</li></ol>`
							: `<p>Sorry...we don&#39;t know what kind of browser you are using, so can&#39;t provide instructions. Try searching DuckDuckGo for an answer.</p>`}`}`}`}`}`}`}
<p></p>`;
});

/* src/components/q4.svelte generated by Svelte v3.23.2 */

const css$a = {
	code: ".button-holder.svelte-1omauo6{width:27vw;display:flex;flex-flow:column nowrap}#cookie-buttons.svelte-1omauo6{margin:40px 0px 0px 0px}",
	map: "{\"version\":3,\"file\":\"q4.svelte\",\"sources\":[\"q4.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n\\timport { onMount, afterUpdate } from 'svelte';\\n\\timport Detect from './Detect.svelte'\\n\\timport Trans from './TransHelp.svelte';\\n\\timport Complete from './complete.svelte' //set success={false} for failure\\n\\timport Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps\\n\\timport { count, step, quizSteps } from '../store.js'\\n\\timport Back from './Back.svelte'\\n\\n\\t//sets aside icon to in progress via store\\n    onMount(async() => {$quizSteps[$count].status = 1});\\n\\t//confirm comletion of quiz to master quiz component\\n</script>\\n<svelte:head>\\n\\t<title>Question 4: Privacy Settings</title>\\n</svelte:head>\\n<Trans>\\n{#if $step==0}\\n<section>\\n\\t<h1>Privacy settings - 3rd party cookies</h1>\\n\\t<h2>Want some cookies?</h2>\\n\\t<p>Well, not that kind of cookie.</p>\\n\\t<p>Cookies are small files that are stored on your computer and carry information from one session on a website to another. Usually, the website that sets a cookie is the only one that reads the cookie. However, third-party cookies can be set by one website and read by another. Third-party cookies are used by servers that deliver advertisements and those annoying pop-up and pop-under ads.</p>\\n\\t<div class=\\\"button-holder\\\">\\n\\t\\t<Btn yellow={true}>Continue</Btn>\\n\\t</div>\\n</section>\\n{:else}\\n<section>\\n\\t<h2>Give 3rd party cookies the boot by managing your browser settings:</h2>\\n\\t<Detect />\\n\\t<div class=\\\"button-holder\\\" id='cookie-buttons'>\\n\\t\\t<h3>Did you disable tracking cookies?</h3>\\n\\t\\t<Complete>Yup</Complete>\\n\\t\\t<Complete success={false}>No, I don't mind them following me</Complete>\\n\\t</div>\\n</section>\\n{/if}\\n<Back/>\\n</Trans>\\n<style>\\n   .button-holder {\\n\\twidth: 27vw;\\n\\tdisplay: flex;\\n    flex-flow: column nowrap;\\n   }\\n   #cookie-buttons{\\n\\t   margin: 40px 0px 0px 0px;\\n   }\\n</style>\"],\"names\":[],\"mappings\":\"AA2CG,cAAc,eAAC,CAAC,AAClB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACV,SAAS,CAAE,MAAM,CAAC,MAAM,AACzB,CAAC,AACD,8BAAe,CAAC,AACf,MAAM,CAAE,IAAI,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,AACzB,CAAC\"}"
};

const Q4 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $step = get_store_value(step);
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		$quizSteps[$count].status = 1;
	});

	$$result.css.add(css$a);

	return `${($$result.head += `${($$result.title = `<title>Question 4: Privacy Settings</title>`, "")}`, "")}
${validate_component(TransHelp, "Trans").$$render($$result, {}, {}, {
		default: () => `${$step == 0
		? `<section><h1>Privacy settings - 3rd party cookies</h1>
	<h2>Want some cookies?</h2>
	<p>Well, not that kind of cookie.</p>
	<p>Cookies are small files that are stored on your computer and carry information from one session on a website to another. Usually, the website that sets a cookie is the only one that reads the cookie. However, third-party cookies can be set by one website and read by another. Third-party cookies are used by servers that deliver advertisements and those annoying pop-up and pop-under ads.</p>
	<div class="${"button-holder svelte-1omauo6"}">${validate_component(Btn, "Btn").$$render($$result, { yellow: true }, {}, { default: () => `Continue` })}</div></section>`
		: `<section><h2>Give 3rd party cookies the boot by managing your browser settings:</h2>
	${validate_component(Detect, "Detect").$$render($$result, {}, {}, {})}
	<div class="${"button-holder svelte-1omauo6"}" id="${"cookie-buttons"}"><h3>Did you disable tracking cookies?</h3>
		${validate_component(Complete, "Complete").$$render($$result, {}, {}, { default: () => `Yup` })}
		${validate_component(Complete, "Complete").$$render($$result, { success: false }, {}, {
				default: () => `No, I don&#39;t mind them following me`
			})}</div></section>`}
${validate_component(Back, "Back").$$render($$result, {}, {}, {})}
`
	})}`;
});

/* src/components/q5.svelte generated by Svelte v3.23.2 */

const css$b = {
	code: "a.svelte-1x8vj0q{text-decoration:none}",
	map: "{\"version\":3,\"file\":\"q5.svelte\",\"sources\":[\"q5.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { onMount, createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n\\timport Trans from './TransHelp.svelte';\\n\\timport Complete from './complete.svelte'\\n\\timport Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps\\n\\timport { count, step, quizSteps } from '../store.js'\\n\\timport Back from './Back.svelte'\\n\\n\\t//sets aside icon to in progress via store\\n\\tonMount(async() => {$quizSteps[$count].status = 1});\\n\\tlet disabled = false;\\n\\tfunction disable() {\\n\\t\\tdisabled= true;\\n\\t\\tconsole.log(disabled);\\n\\t}\\n</script>\\n<svelte:head>\\n\\t<title>Tracker blocker</title>\\n</svelte:head>\\n<Trans>\\n{#if $step==0}\\n<section>\\n\\t<h2>Tracker blocker: Privacy Badger</h2> \\n\\t<h3>Are you being tracked on the web?</h3> \\n\\t<h2>Almost definitely. </h2>\\n\\t\\t<p>Trackers are installed on many websites to log your behavior. While cookies are the little identifiers for websites to recognize you through multiple visits, trackers use those cookies to analyze your behavior and build their valuable user profiles. Trackers will log the site you visit, the date and time, and your computer settings (more powerful trackers can even watch your mouse movement) all of this without your consent.</p>\\n\\t\\t<div class=\\\"button-holder\\\">\\n\\t\\t\\t<Btn yellow={true}>Continue</Btn>\\n\\t\\t</div>\\n</section>\\n{:else}\\n<section>\\n\\t<h2>Install the Privacy Badger extension.</h2>\\n\\t<p>Privacy Badger is a free and open-source browser extension for Google Chrome, Mozilla and Firefox that automatically discovers trackers as you browse the Web. The longer you browse with Privacy Badger, the better it gets at protecting you, so start browsing a little to teach your Badger.</p>\\n\\t<div class=\\\"button-holder\\\">\\n\\t\\t<a rel=external href='https://privacybadger.org' target=\\\"_blank\\\"><button on:click|once='{disable}' disabled='{disabled}'>Download Privacy Badger\\n\\t\\t</button></a>\\n\\t\\t<Complete>\\n\\t\\t\\t{#if !disabled}\\n\\t\\t\\tAlready Have it\\n\\t\\t\\t{:else}\\n\\t\\t\\tJust downloaded it\\n\\t\\t\\t{/if}\\n\\t\\t</Complete>\\n\\t\\t<Complete success={false}>\\n\\t\\t\\tNo Thanks\\n\\t\\t</Complete>\\n\\t</div>\\n</section>\\n{/if}\\n<Back/>\\n</Trans>\\n<style>\\n   a {\\n\\t   text-decoration: none;\\n   }\\n</style>\"],\"names\":[],\"mappings\":\"AAsDG,CAAC,eAAC,CAAC,AACF,eAAe,CAAE,IAAI,AACtB,CAAC\"}"
};

const Q5 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $step = get_store_value(step);
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		$quizSteps[$count].status = 1;
	});

	$$result.css.add(css$b);

	return `${($$result.head += `${($$result.title = `<title>Tracker blocker</title>`, "")}`, "")}
${validate_component(TransHelp, "Trans").$$render($$result, {}, {}, {
		default: () => `${$step == 0
		? `<section><h2>Tracker blocker: Privacy Badger</h2> 
	<h3>Are you being tracked on the web?</h3> 
	<h2>Almost definitely. </h2>
		<p>Trackers are installed on many websites to log your behavior. While cookies are the little identifiers for websites to recognize you through multiple visits, trackers use those cookies to analyze your behavior and build their valuable user profiles. Trackers will log the site you visit, the date and time, and your computer settings (more powerful trackers can even watch your mouse movement) all of this without your consent.</p>
		<div class="${"button-holder"}">${validate_component(Btn, "Btn").$$render($$result, { yellow: true }, {}, { default: () => `Continue` })}</div></section>`
		: `<section><h2>Install the Privacy Badger extension.</h2>
	<p>Privacy Badger is a free and open-source browser extension for Google Chrome, Mozilla and Firefox that automatically discovers trackers as you browse the Web. The longer you browse with Privacy Badger, the better it gets at protecting you, so start browsing a little to teach your Badger.</p>
	<div class="${"button-holder"}"><a rel="${"external"}" href="${"https://privacybadger.org"}" target="${"_blank"}" class="${"svelte-1x8vj0q"}"><button ${ ""}>Download Privacy Badger
		</button></a>
		${validate_component(Complete, "Complete").$$render($$result, {}, {}, {
				default: () => `${ `Already Have it` }`
			})}
		${validate_component(Complete, "Complete").$$render($$result, { success: false }, {}, {
				default: () => `No Thanks
		`
			})}</div></section>`}
${validate_component(Back, "Back").$$render($$result, {}, {}, {})}
`
	})}`;
});

/* src/components/q6.svelte generated by Svelte v3.23.2 */

const css$c = {
	code: ".button-holder.svelte-h4ab6b{width:27vw;display:flex;flex-flow:column nowrap}.caret.svelte-h4ab6b{display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between}",
	map: "{\"version\":3,\"file\":\"q6.svelte\",\"sources\":[\"q6.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { onMount, createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n\\timport Trans from './TransHelp.svelte';\\n\\timport Complete from './complete.svelte' //set success={false} for failure\\n\\timport Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps\\n\\timport { count, step, quizSteps } from '../store.js'\\n\\timport Back from './Back.svelte'\\n\\timport { fly, fade } from 'svelte/transition'\\n\\timport { sineInOut } from 'svelte/easing';\\n\\t//sets aside icon to in progress via store\\n    onMount(async() => {$quizSteps[$count].status = 1});\\n\\tlet mac = false;\\n\\tlet pc = false;\\n</script>\\n<svelte:head>\\n\\t<title>Domain Name Service</title>\\n</svelte:head>\\n<div in:fly=\\\"{{delay: 150, duration: 800, y: 1000, opacity: 0.0, easing: sineInOut}}\\\" out:fade=\\\"{{delay: 100, duration: 800}}\\\">\\n{#if $step==0}\\n<section>\\n\\t<h2>Domain Name Server (DNS): Quad9\\n\\t</h2> \\n\\t<p>Everything on the Internet, including websites, live at a numerical IP address. The Domain Name System, or DNS, translates these numerical IP addresses into human-readable domain names that we all know and remember (like mindyourdata.org). If your DNS settings are not working correctly, or you’re still using defaults, you may be at risk for cybercrime and performance issues. And, the websites you visit may be collected and shared by whatever entity owns the DNS service.</p>\\n\\t<div class=\\\"button-holder\\\">\\n\\t\\t<Btn green={true}>Continue</Btn>\\n\\t</div>\\n</section>\\n{:else}\\n<section>\\n\\t<h2>Setup Quad9</h2>\\n\\t<p>Quad9 is a free, not-for-profit security solution that uses the DNS to protect your system against the most common cyber threats. Not only does it  preserve and protect your privacy, it will also improve your system’s performance! It’s like a painless immunization for your computer and devices.</p>\\n\\t<div class:mac on:click=\\\"{() => mac = !mac}\\\">\\n\\t\\t<div class=\\\"caret\\\">\\n\\t\\t\\t<p>Setup Quad9 for Mac:</p>\\n\\t\\t\\t<svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n\\t\\t\\t<path d=\\\"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z\\\" fill=\\\"white\\\"/>\\n\\t\\t\\t</svg>\\n\\t\\t</div>\\n\\t\\t{#if mac}\\n\\t\\t<iframe title=\\\"Setup Quad9 for mac\\\" width=\\\"560\\\" height=\\\"315\\\" src=\\\"https://www.youtube-nocookie.com/embed/NM4AdfEnAmY\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\\" allowfullscreen></iframe>\\n\\t\\t{/if}\\n\\t</div>\\n\\t\\t<hr>\\n \\t<div class:pc on:click=\\\"{() => pc = !pc}\\\">\\n\\t\\t<div class=\\\"caret\\\">\\n\\t\\t\\t<p>Setup Quad9 for PC:</p>\\n\\t\\t\\t<svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n\\t\\t\\t<path d=\\\"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z\\\" fill=\\\"white\\\"/>\\n\\t\\t\\t</svg>\\n\\t\\t</div>\\n\\t\\t {#if pc}\\n\\t\\t <iframe title=\\\"Setup Quad9 for Windows\\\" width=\\\"560\\\" height=\\\"315\\\" src=\\\"https://www.youtube-nocookie.com/embed/aujUl3yt6nM\\\" frameborder=\\\"0\\\" allow=\\\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\\\" allowfullscreen></iframe>\\n        {/if}\\n    </div>\\n\\t<div class=\\\"button-holder\\\">\\n\\t\\t<Complete>Setup Complete</Complete>\\n\\t\\t<Complete success={false}>Don't care, let then snoop</Complete>\\n\\t</div>\\n</section>\\n{/if}\\n<Back/>\\n</div>\\n<style>\\n   .button-holder {\\n\\twidth: 27vw;\\n\\tdisplay: flex;\\n    flex-flow: column nowrap;\\n   }\\n   button {\\n\\t   padding: 10px 20px;\\n\\t   margin: 10px;\\n\\t   border: black solid 0px;\\n\\t   border-radius: 8px;\\n   }\\n   .caret{\\n\\t\\tdisplay: flex;\\n\\t\\tflex-flow: row nowrap;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AAgEG,cAAc,cAAC,CAAC,AAClB,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACV,SAAS,CAAE,MAAM,CAAC,MAAM,AACzB,CAAC,AAOD,oBAAM,CAAC,AACR,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,MAAM,CACrB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,AAC/B,CAAC\"}"
};

const Q6 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $step = get_store_value(step);
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		$quizSteps[$count].status = 1;
	});
	$$result.css.add(css$c);

	return `${($$result.head += `${($$result.title = `<title>Domain Name Service</title>`, "")}`, "")}
<div>${$step == 0
	? `<section><h2>Domain Name Server (DNS): Quad9
	</h2> 
	<p>Everything on the Internet, including websites, live at a numerical IP address. The Domain Name System, or DNS, translates these numerical IP addresses into human-readable domain names that we all know and remember (like mindyourdata.org). If your DNS settings are not working correctly, or you’re still using defaults, you may be at risk for cybercrime and performance issues. And, the websites you visit may be collected and shared by whatever entity owns the DNS service.</p>
	<div class="${"button-holder svelte-h4ab6b"}">${validate_component(Btn, "Btn").$$render($$result, { green: true }, {}, { default: () => `Continue` })}</div></section>`
	: `<section><h2>Setup Quad9</h2>
	<p>Quad9 is a free, not-for-profit security solution that uses the DNS to protect your system against the most common cyber threats. Not only does it  preserve and protect your privacy, it will also improve your system’s performance! It’s like a painless immunization for your computer and devices.</p>
	<div${add_classes([ ""].join(" ").trim())}><div class="${"caret svelte-h4ab6b"}"><p>Setup Quad9 for Mac:</p>
			<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z"}" fill="${"white"}"></path></svg></div>
		${ ``}</div>
		<hr>
 	<div${add_classes([ ""].join(" ").trim())}><div class="${"caret svelte-h4ab6b"}"><p>Setup Quad9 for PC:</p>
			<svg width="${"24"}" height="${"24"}" viewBox="${"0 0 24 24"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z"}" fill="${"white"}"></path></svg></div>
		 ${ ``}</div>
	<div class="${"button-holder svelte-h4ab6b"}">${validate_component(Complete, "Complete").$$render($$result, {}, {}, { default: () => `Setup Complete` })}
		${validate_component(Complete, "Complete").$$render($$result, { success: false }, {}, {
			default: () => `Don&#39;t care, let then snoop`
		})}</div></section>`}
${validate_component(Back, "Back").$$render($$result, {}, {}, {})}
</div>`;
});

/* src/components/q7.svelte generated by Svelte v3.23.2 */

const Q7 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $step = get_store_value(step);
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		$quizSteps[$count].status = 1;
	});

	return `${($$result.head += `${($$result.title = `<title>Internet of things( Alexa, Home devices)</title>`, "")}`, "")}
${validate_component(TransHelp, "Trans").$$render($$result, {}, {}, {
		default: () => `${$step == 0
		? `<section><h2>Internet of things( Alexa, Home devices)</h2> 
	<p>It should be clear by now that your daily interactions technology, let alone your smart speaker are anything but private. A series of investigative reports have shown that other people are reviewing recordings or transcripts of your conversations. 
	</p>
	<p>The three big makers of smart speakers—Amazon, Apple, and Google—say they do this to improve the device’s performance, not for targeting ads. But privacy advocates argue that, without prior notice, any listening from employees and contractors is unfair to consumers.</p>
	<div class="${"button-holder"}">${validate_component(Btn, "Btn").$$render($$result, {}, {}, { default: () => `I own a smart speaker` })}
		${validate_component(Btn, "Btn").$$render($$result, { q: 2 }, {}, {
				default: () => `I don&#39;t own a smart speaker`
			})}</div></section>`
		: `${$step == 1
			? `<section><div${add_classes([ ""].join(" ").trim())}><p>Amazon Alexa</p>
		${ ``}</div>
	
	<hr>
	<div${add_classes([ ""].join(" ").trim())}><p>Google Assistant</p>
		${ ``}</div>
	
	<hr>
	<div${add_classes([ ""].join(" ").trim())}><p>Apple Siri</p>
		${ ``}</div>
	
	<hr>
	<div class="${"button-holder"}"><h3>Did you setup privacy mode</h3>
		${validate_component(Complete, "Complete").$$render($$result, {}, {}, { default: () => `Yes, I Did` })}
		${validate_component(Complete, "Complete").$$render($$result, { success: false }, {}, { default: () => `No I don&#39;t want to` })}</div></section>`
			: `<section><h2>Hoooray!</h2>
		<p>One less way people can snoop on your privacy.</p>
		${validate_component(Complete, "Complete").$$render($$result, {}, {}, { default: () => `Next Challenge` })}</section>`}`}
${validate_component(Back, "Back").$$render($$result, {}, {}, {})}
`
	})}`;
});

/* src/components/q8.svelte generated by Svelte v3.23.2 */

const css$d = {
	code: "section.svelte-17t364p{width:100%}",
	map: "{\"version\":3,\"file\":\"q8.svelte\",\"sources\":[\"q8.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { onMount, createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n\\timport Trans from './TransHelp.svelte';\\n\\timport Complete from './complete.svelte' //set success={false} for failure\\n\\timport Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps\\n\\timport { count, step, quizSteps } from '../store.js'\\n\\timport Back from './Back.svelte'\\n\\n\\t//sets aside icon to in progress via store\\n\\tonMount(async() => {$quizSteps[$count].status = 1;\\n\\t\\t});\\n\\n</script>\\n<svelte:head>\\n\\t<title>Location Tracking</title>\\n</svelte:head>\\n<Trans>\\n{#if $step==0}\\n<section>\\n\\t<h1>Is your phone tracking your every move? Probably.</h1> \\n\\t\\t<p>Pervasive tracking of location at the very least risks putting you at a disadvantage as a consumer. Certainly if you live somewhere without a proper regulatory framework for privacy. It’s also worth bearing in mind how lax tech giants can be where location privacy is concerned — whether it’s Uber’s infamous ‘god view’ tool or Snapchat leaking schoolkids’ location or Strava accidentally revealing the locations of military bases. Their record is pretty terrible. </p>\\t\\n\\t<h3>What mobile device do you use?</h3>\\n\\t\\t<div class=\\\"button-holder\\\">\\n\\t\\t\\t<Btn>iOS</Btn>\\n\\t\\t\\t<Btn>Android</Btn>\\n\\t\\t</div>\\n</section>\\n{:else if $step==1}\\n<section>\\n\\t<h2>Turn locaiton off on IOS device</h2>\\n\\t<p>Step 1. Go to Settings > Privacy > Location Services.</p>\\n\\t<p>Step 2. Make sure that Location Services is on.</p>\\n\\t<p>Step 3. Scroll down to find the app.</p>\\n\\t<p>Step 4. Tap the app and select an option:</p>\\n\\t<ul>\\n\\t\\t<li>Never: Prevents access to Location Services information.</li>\\n\\t\\t<li>Ask Next Time: This allows you to choose Always While Using App, Allow Once, or Don't Allow.</li>\\n\\t\\t<li>While Using the App: Allows access to Location Services only when the app or one of its features is visible on screen. If an app is set to While Using the App, you might see your status bar turn blue with a message that an app is actively using your location.</li>\\n\\t\\t<li>Always: Allows access to your location even when the app is in the background.</li>\\n\\t</ul>\\n\\t<h3>Did you turn off location on your device</h3>\\n\\t<div class=\\\"button-holder\\\">\\n\\t\\t<Complete>Yes, I did</Complete>\\n\\t\\t<Complete success={false}>No, I didn't</Complete>\\n\\t</div>\\n</section>\\n{:else}\\n<section>\\n\\t<h2>Turn locaiton off on and Android Device</h2>\\n\\t<p>Step 1. Go to Settings > Privacy > Location Services.</p>\\n\\t<p>Step 2. Make sure that Location Services is on.</p>\\n\\t<p>Step 3. Scroll down to find the app.</p>\\n\\t<p>Step 4. Tap the app and select an option:</p>\\n\\t<ul>\\n\\t\\t<li>Never: Prevents access to Location Services information.</li>\\n\\t\\t<li>Ask Next Time: This allows you to choose Always While Using App, Allow Once, or Don't Allow.</li>\\n\\t\\t<li>While Using the App: Allows access to Location Services only when the app or one of its features is visible on screen. If an app is set to While Using the App, you might see your status bar turn blue with a message that an app is actively using your location.</li>\\n\\t\\t<li>Always: Allows access to your location even when the app is in the background.</li>\\n\\t</ul>\\n\\t<h3>Did you turn off location on your device</h3>\\n\\t<div class=\\\"button-holder\\\">\\n\\t\\t<Complete>Yes, I did</Complete>\\n\\t\\t<Complete success={false}>No, I didn't</Complete>\\n\\t</div>\\n</section>\\n{/if}\\n<Back/>\\n</Trans>\\n<style>\\n\\tsection {\\n\\t\\twidth: 100%;\\n\\t}\\n\\n</style>\"],\"names\":[],\"mappings\":\"AAsEC,OAAO,eAAC,CAAC,AACR,KAAK,CAAE,IAAI,AACZ,CAAC\"}"
};

const Q8 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $step = get_store_value(step);
	const dispatch = createEventDispatcher();

	//sets aside icon to in progress via store
	onMount(async () => {
		$quizSteps[$count].status = 1;
	});

	$$result.css.add(css$d);

	return `${($$result.head += `${($$result.title = `<title>Location Tracking</title>`, "")}`, "")}
${validate_component(TransHelp, "Trans").$$render($$result, {}, {}, {
		default: () => `${$step == 0
		? `<section class="${"svelte-17t364p"}"><h1>Is your phone tracking your every move? Probably.</h1> 
		<p>Pervasive tracking of location at the very least risks putting you at a disadvantage as a consumer. Certainly if you live somewhere without a proper regulatory framework for privacy. It’s also worth bearing in mind how lax tech giants can be where location privacy is concerned — whether it’s Uber’s infamous ‘god view’ tool or Snapchat leaking schoolkids’ location or Strava accidentally revealing the locations of military bases. Their record is pretty terrible. </p>	
	<h3>What mobile device do you use?</h3>
		<div class="${"button-holder"}">${validate_component(Btn, "Btn").$$render($$result, {}, {}, { default: () => `iOS` })}
			${validate_component(Btn, "Btn").$$render($$result, {}, {}, { default: () => `Android` })}</div></section>`
		: `${$step == 1
			? `<section class="${"svelte-17t364p"}"><h2>Turn locaiton off on IOS device</h2>
	<p>Step 1. Go to Settings &gt; Privacy &gt; Location Services.</p>
	<p>Step 2. Make sure that Location Services is on.</p>
	<p>Step 3. Scroll down to find the app.</p>
	<p>Step 4. Tap the app and select an option:</p>
	<ul><li>Never: Prevents access to Location Services information.</li>
		<li>Ask Next Time: This allows you to choose Always While Using App, Allow Once, or Don&#39;t Allow.</li>
		<li>While Using the App: Allows access to Location Services only when the app or one of its features is visible on screen. If an app is set to While Using the App, you might see your status bar turn blue with a message that an app is actively using your location.</li>
		<li>Always: Allows access to your location even when the app is in the background.</li></ul>
	<h3>Did you turn off location on your device</h3>
	<div class="${"button-holder"}">${validate_component(Complete, "Complete").$$render($$result, {}, {}, { default: () => `Yes, I did` })}
		${validate_component(Complete, "Complete").$$render($$result, { success: false }, {}, { default: () => `No, I didn&#39;t` })}</div></section>`
			: `<section class="${"svelte-17t364p"}"><h2>Turn locaiton off on and Android Device</h2>
	<p>Step 1. Go to Settings &gt; Privacy &gt; Location Services.</p>
	<p>Step 2. Make sure that Location Services is on.</p>
	<p>Step 3. Scroll down to find the app.</p>
	<p>Step 4. Tap the app and select an option:</p>
	<ul><li>Never: Prevents access to Location Services information.</li>
		<li>Ask Next Time: This allows you to choose Always While Using App, Allow Once, or Don&#39;t Allow.</li>
		<li>While Using the App: Allows access to Location Services only when the app or one of its features is visible on screen. If an app is set to While Using the App, you might see your status bar turn blue with a message that an app is actively using your location.</li>
		<li>Always: Allows access to your location even when the app is in the background.</li></ul>
	<h3>Did you turn off location on your device</h3>
	<div class="${"button-holder"}">${validate_component(Complete, "Complete").$$render($$result, {}, {}, { default: () => `Yes, I did` })}
		${validate_component(Complete, "Complete").$$render($$result, { success: false }, {}, { default: () => `No, I didn&#39;t` })}</div></section>`}`}
${validate_component(Back, "Back").$$render($$result, {}, {}, {})}
`
	})}`;
});

/* src/components/check1.svelte generated by Svelte v3.23.2 */

const css$e = {
	code: "#main-content.svelte-su6n7t{width:100%;background-image:url(https://images.unsplash.com/photo-1558697524-5a2d1e8a93d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80);background-size:contain;padding-top:15px}div.svelte-su6n7t{width:50%;margin:auto;background:#38424D;border:none;border-radius:15px;padding:9.3vh 5vw 0vh 9.3vh;color:#FFFFFF}strong.svelte-su6n7t{font-weight:700;font-size:22px}",
	map: "{\"version\":3,\"file\":\"check1.svelte\",\"sources\":[\"check1.svelte\"],\"sourcesContent\":[\"<script>\\n\\tconst dispatch = createEventDispatcher();\\n\\timport { onMount, afterUpdate, createEventDispatcher, onDestroy } from 'svelte';\\n\\timport Detect from './Detect.svelte'\\n    import Trans from './TransHelp.svelte';\\n\\t //sets aside icon to in progress via store\\n\\t import { count, timerActive, quizSteps } from '../store.js'\\n\\t import Complete from './complete.svelte'\\n\\t import Back from './Back.svelte'\\n    import { fly } from 'svelte/transition';\\n    import { sineInOut } from 'svelte/easing';\\n    onMount(async() => {\\n\\t\\t$quizSteps[$count].status = 1;\\n\\t\\ttimerActive.set(!$timerActive)\\n\\t\\t});\\n\\tonDestroy(() => timerActive.set(!$timerActive))\\n</script>\\n\\t<section id=\\\"main-content\\\">\\n\\t\\t<div>\\n\\t<h3>Checkpoint1</h3>\\n        <h1>Security vs Privacy: What’s at stake?</h1>\\n\\t\\t<p><strong>Congratulations!</strong> By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world. </p>\\n\\t\\t<p>Some people think of privacy and security as pretty much the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.</p>\\n\\t\\t<p><strong>What’s the difference between privacy and security?</strong></p>\\n\\t\\t<p>Security refers to how your personal information is protected. </p>\\n\\t\\t<p>Privacy, on the other hand, relates your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.</p>\\n\\t\\t \\n\\t\\t<p><strong>Why does privacy matter?</strong></p>\\n\\t\\t<p>The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generates an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior. </p>\\n\\t\\t\\n\\t\\t\\n\\t\\t<p>You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.</p>\\n\\t\\t\\n\\t\\t<p>Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.</p>\\n\\t\\t\\n<div class=\\\"button-holder\\\">\\n    <Complete>Continue to next Challenge</Complete>\\n</div>\\n</div>\\n\\n<Back/>\\n</section>\\n\\n<style>\\n   #main-content{\\n\\t\\t\\twidth:100%;\\n\\t\\t\\tbackground-image: url(https://images.unsplash.com/photo-1558697524-5a2d1e8a93d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80);\\n\\t\\t\\tbackground-size: contain;\\n\\t\\t\\tpadding-top: 15px;\\n   }\\n   div {\\n\\twidth: 50%;\\n              margin: auto;\\n              background: #38424D; \\n              border: none;\\n              border-radius: 15px;\\n              padding: 9.3vh 5vw 0vh 9.3vh;\\n              color: #FFFFFF;\\n   }\\n  \\n   strong {\\n\\t   font-weight: 700;\\n\\t   font-size: 22px;\\n   }\\n</style>\"],\"names\":[],\"mappings\":\"AA4CG,2BAAa,CAAC,AACd,MAAM,IAAI,CACV,gBAAgB,CAAE,IAAI,mIAAmI,CAAC,CAC1J,eAAe,CAAE,OAAO,CACxB,WAAW,CAAE,IAAI,AACjB,CAAC,AACD,GAAG,cAAC,CAAC,AACP,KAAK,CAAE,GAAG,CACG,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAC5B,KAAK,CAAE,OAAO,AACzB,CAAC,AAED,MAAM,cAAC,CAAC,AACP,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,AAChB,CAAC\"}"
};

const Check1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $timerActive = get_store_value(timerActive);
	const dispatch = createEventDispatcher();

	onMount(async () => {
		$quizSteps[$count].status = 1;
		timerActive.set(!$timerActive);
	});

	onDestroy(() => timerActive.set(!$timerActive));
	$$result.css.add(css$e);

	return `<section id="${"main-content"}" class="${"svelte-su6n7t"}"><div class="${"svelte-su6n7t"}"><h3>Checkpoint1</h3>
        <h1>Security vs Privacy: What’s at stake?</h1>
		<p><strong class="${"svelte-su6n7t"}">Congratulations!</strong> By completing these tasks, you have just taken a few steps toward securing your personal information from potential cybercrime. But the truth is, your data — different details about you — lives in a lot of places in our increasingly connected world. </p>
		<p>Some people think of privacy and security as pretty much the same thing.  While the two sometimes overlap, they aren’t the same, and knowing how they differ will help give you control over your personal information and how it’s used.</p>
		<p><strong class="${"svelte-su6n7t"}">What’s the difference between privacy and security?</strong></p>
		<p>Security refers to how your personal information is protected. </p>
		<p>Privacy, on the other hand, relates your rights to control the data that’s being collected about you, how it’s collected, why, and who it’s shared with.</p>
		 
		<p><strong class="${"svelte-su6n7t"}">Why does privacy matter?</strong></p>
		<p>The convenience of living in a constantly connected world comes at a cost. Our daily interactions with technology generates an unimaginable amount of data that is being harvested and sold to those who want to predict and shape our behavior. </p>
		
		
		<p>You might think it’s no big deal to give up your data in exchange for personalized ads and content, but consumption -- browsing through a store and buying things -- and quiet time alone are both important parts of how we define ourselves. If we blindly agree to live in a state of constant surveillance, we lose the ability to choose for ourselves and allow others to influence our behaviors and self-perception.</p>
		
		<p>Now imagine if our society accepts surveillance as the new normal and citizens know they are being watched constantly. We may have highly personalized access to goods and services, but we will be less likely to speak freely and act individually. Without privacy as a fundamental right, we lose power and become an obedient and submissive society.</p>
		
<div class="${"button-holder svelte-su6n7t"}">${validate_component(Complete, "Complete").$$render($$result, {}, {}, {
		default: () => `Continue to next Challenge`
	})}</div></div>

${validate_component(Back, "Back").$$render($$result, {}, {}, {})}
</section>`;
});

/* src/components/check2.svelte generated by Svelte v3.23.2 */

const css$f = {
	code: "section.svelte-1fien2q{width:100%;background-image:url(https://images.unsplash.com/photo-1535376472810-5d229c65da09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80);background-size:contain;padding-top:15px}div.svelte-1fien2q{width:50%;margin:auto;background:#38424D;border:none;border-radius:15px;padding:9.3vh 5vw 0vh 9.3vh;color:#FFFFFF}strong.svelte-1fien2q{font-weight:700;font-size:22px}",
	map: "{\"version\":3,\"file\":\"check2.svelte\",\"sources\":[\"check2.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n\\timport { onMount, afterUpdate, onDestroy } from 'svelte';\\n\\timport Detect from './Detect.svelte'\\n\\timport Complete from './complete.svelte'\\n\\timport Back from './Back.svelte'\\n\\n\\t //sets aside icon to in progress via store\\n\\t import { quizSteps, count, timerActive } from '../store.js'\\n\\n\\tonMount(async() => {\\n\\t\\t$quizSteps[$count].status = 1;\\n\\t\\ttimerActive.set(!$timerActive)});\\n\\tonDestroy(() => timerActive.set(!$timerActive))\\n\\n</script>\\n\\n\\t<section>\\n\\t\\t<div>\\n    <h3>Checkpoint 2:</h3>\\n        <h1>Surveillance Capitalism How did this happen?</h1>\\n\\t\\t<p><strong>Great!</strong>You are now on your way to claiming your privacy.</p>\\n\\t\\t<p>By now we hope you see how our private experiences are being harvested to be translated into behavioral data. This data is then processed and packaged as prediction products and sold to business customers with a commercial interest in knowing what we will do now, soon, and later. This is surveillance capitalism.</p>\\n\\t\\t<p><strong>How did this happen?</strong></p>\\n\\t\\t<p>It wasn’t that long ago that the internet entered our daily lives. We went online expecting empowerment, the democratization of knowledge, and help with real problems, but surveillance capitalism really was just too lucrative to resist. Google was the first to learn how to capture surplus behavioral data and use it to compute prediction products that they could sell to advertisers.\\n\\t\\t</p>\\n\\t\\t<p>This economic logic has now spread beyond the tech companies to new surveillance–based ecosystems in virtually every sector, from insurance to automobiles to health, education, finance, to every product described as “smart” and every service described as “personalized.” By now it’s very difficult to participate in society without interfacing with these same channels that are supply chains for surveillance capitalism’s data flows.</p>\\n    <div class=\\\"button-holder\\\">\\n\\t\\t<Complete>Start the next Challenge</Complete>\\n\\t</div>\\n\\t</div>\\n\\t<Back/>\\n\\t</section>\\n\\n<style>\\n   section{\\n\\t\\t\\twidth:100%;\\n\\t\\t\\tbackground-image: url(https://images.unsplash.com/photo-1535376472810-5d229c65da09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80);\\n\\t\\t\\tbackground-size: contain;\\n\\t\\t\\tpadding-top: 15px;\\n   }\\n   div {\\n\\twidth: 50%;\\n              margin: auto;\\n              background: #38424D; \\n              border: none;\\n              border-radius: 15px;\\n              padding: 9.3vh 5vw 0vh 9.3vh;\\n              color: #FFFFFF;\\n   }\\n  \\n   strong {\\n\\t   font-weight: 700;\\n\\t   font-size: 22px;\\n   }\\n</style>\"],\"names\":[],\"mappings\":\"AAoCG,sBAAO,CAAC,AACR,MAAM,IAAI,CACV,gBAAgB,CAAE,IAAI,sIAAsI,CAAC,CAC7J,eAAe,CAAE,OAAO,CACxB,WAAW,CAAE,IAAI,AACjB,CAAC,AACD,GAAG,eAAC,CAAC,AACP,KAAK,CAAE,GAAG,CACG,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAC5B,KAAK,CAAE,OAAO,AACzB,CAAC,AAED,MAAM,eAAC,CAAC,AACP,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,AAChB,CAAC\"}"
};

const Check2 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $timerActive = get_store_value(timerActive);
	const dispatch = createEventDispatcher();

	onMount(async () => {
		$quizSteps[$count].status = 1;
		timerActive.set(!$timerActive);
	});

	onDestroy(() => timerActive.set(!$timerActive));
	$$result.css.add(css$f);

	return `<section class="${"svelte-1fien2q"}"><div class="${"svelte-1fien2q"}"><h3>Checkpoint 2:</h3>
        <h1>Surveillance Capitalism How did this happen?</h1>
		<p><strong class="${"svelte-1fien2q"}">Great!</strong>You are now on your way to claiming your privacy.</p>
		<p>By now we hope you see how our private experiences are being harvested to be translated into behavioral data. This data is then processed and packaged as prediction products and sold to business customers with a commercial interest in knowing what we will do now, soon, and later. This is surveillance capitalism.</p>
		<p><strong class="${"svelte-1fien2q"}">How did this happen?</strong></p>
		<p>It wasn’t that long ago that the internet entered our daily lives. We went online expecting empowerment, the democratization of knowledge, and help with real problems, but surveillance capitalism really was just too lucrative to resist. Google was the first to learn how to capture surplus behavioral data and use it to compute prediction products that they could sell to advertisers.
		</p>
		<p>This economic logic has now spread beyond the tech companies to new surveillance–based ecosystems in virtually every sector, from insurance to automobiles to health, education, finance, to every product described as “smart” and every service described as “personalized.” By now it’s very difficult to participate in society without interfacing with these same channels that are supply chains for surveillance capitalism’s data flows.</p>
    <div class="${"button-holder svelte-1fien2q"}">${validate_component(Complete, "Complete").$$render($$result, {}, {}, {
		default: () => `Start the next Challenge`
	})}</div></div>
	${validate_component(Back, "Back").$$render($$result, {}, {}, {})}
	</section>`;
});

/* src/components/check3.svelte generated by Svelte v3.23.2 */

const css$g = {
	code: "section.svelte-1yt86zy{width:100vw;height:100vh;background-image:url(https://images.unsplash.com/photo-1557411732-1797a9171fcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);background-size:contain;padding-top:15px;text-align:center}div.svelte-1yt86zy{width:50%;margin:auto;background:#38424D;border:none;border-radius:15px;padding:9.3vh 5vw 0vh 9.3vh;color:#FFFFFF}",
	map: "{\"version\":3,\"file\":\"check3.svelte\",\"sources\":[\"check3.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n\\timport { onMount, afterUpdate, onDestroy } from 'svelte';\\n\\timport Complete from './complete.svelte'\\n\\timport Btn from './Btn.svelte' //set <Next q={2}> to skip multiple steps\\n    import Trans from './TransHelp.svelte';\\n //sets aside icon to in progress via store\\n import { count, quizSteps, timerActive } from '../store.js'\\n import Back from './Back.svelte'\\n\\tonMount(async() => {\\n\\t\\t$quizSteps[$count].status = 1;\\n\\t\\ttimerActive.set(!$timerActive);\\n\\t});\\n\\tonDestroy(() => timerActive.set(!$timerActive))\\n</script>\\n\\n\\t<section>\\n\\t\\t<div>\\n    <h1>We must claim our right to privacy.</h1>\\n        <p>Agitate for change. Like most rights, privacy draws notice only after it’s gone. At that point, it’s harder to regain. Just as we see the environmental impact of the early Industrial Age, future generations will judge today’s society on how well it rose to the challenges of surveillance and massive information collection. Push for reform.</p>\\n    <div class=\\\"button-holder\\\">\\n\\t\\t<a rel=prefetch href=\\\"review\\\"><Btn p={0}>See your results</Btn></a>\\n        <button >Sign a Petition</button>\\n        <button >Contact your Rep</button>\\n\\t</div>\\n\\t</div>\\n<Back/>\\n</section>\\n\\n<style>\\n   section{\\n\\t\\t\\twidth:100vw;\\n\\t\\t\\theight: 100vh;\\n\\t\\t\\tbackground-image: url(https://images.unsplash.com/photo-1557411732-1797a9171fcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);\\n\\t\\t\\tbackground-size: contain;\\n\\t\\t\\tpadding-top: 15px;\\n\\t\\t\\ttext-align: center;\\n   }\\n   div {\\n\\twidth: 50%;\\n              margin: auto;\\n              background: #38424D; \\n              border: none;\\n              border-radius: 15px;\\n              padding: 9.3vh 5vw 0vh 9.3vh;\\n              color: #FFFFFF;\\n   }\\n  \\n   strong {\\n\\t   font-weight: 700;\\n\\t   font-size: 22px;\\n   }\\n   \\n</style>\"],\"names\":[],\"mappings\":\"AA+BG,sBAAO,CAAC,AACR,MAAM,KAAK,CACX,MAAM,CAAE,KAAK,CACb,gBAAgB,CAAE,IAAI,kIAAkI,CAAC,CACzJ,eAAe,CAAE,OAAO,CACxB,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,MAAM,AAClB,CAAC,AACD,GAAG,eAAC,CAAC,AACP,KAAK,CAAE,GAAG,CACG,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,OAAO,CACnB,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,IAAI,CACnB,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAC5B,KAAK,CAAE,OAAO,AACzB,CAAC\"}"
};

const Check3 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $timerActive = get_store_value(timerActive);
	const dispatch = createEventDispatcher();

	onMount(async () => {
		$quizSteps[$count].status = 1;
		timerActive.set(!$timerActive);
	});

	onDestroy(() => timerActive.set(!$timerActive));
	$$result.css.add(css$g);

	return `<section class="${"svelte-1yt86zy"}"><div class="${"svelte-1yt86zy"}"><h1>We must claim our right to privacy.</h1>
        <p>Agitate for change. Like most rights, privacy draws notice only after it’s gone. At that point, it’s harder to regain. Just as we see the environmental impact of the early Industrial Age, future generations will judge today’s society on how well it rose to the challenges of surveillance and massive information collection. Push for reform.</p>
    <div class="${"button-holder svelte-1yt86zy"}"><a rel="${"prefetch"}" href="${"review"}">${validate_component(Btn, "Btn").$$render($$result, { p: 0 }, {}, { default: () => `See your results` })}</a>
        <button>Sign a Petition</button>
        <button>Contact your Rep</button></div></div>
${validate_component(Back, "Back").$$render($$result, {}, {}, {})}
</section>`;
});

/* src/components/Check.svelte generated by Svelte v3.23.2 */

const css$h = {
	code: ".lock.svelte-n4s916{margin:auto}",
	map: "{\"version\":3,\"file\":\"Check.svelte\",\"sources\":[\"Check.svelte\"],\"sourcesContent\":[\"<script>\\n    export let color;\\n    export let active;\\n    active =0;\\n\\n</script>\\n{#if active < 1 }\\n    <svg class=\\\"lock\\\" width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <circle cx=\\\"9.83301\\\" cy=\\\"9.99805\\\" r=\\\"6.62305\\\" fill=\\\"#303538\\\"/>\\n    </svg>\\n\\n    \\n{:else if active > 1 }\\n    <svg class=\\\"lock\\\" width=\\\"21\\\" height=\\\"21\\\" viewBox=\\\"0 0 21 21\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <circle cx=\\\"10.5986\\\" cy=\\\"10.1211\\\" r=\\\"10\\\" fill=\\\"{color}\\\"/>\\n    <path d=\\\"M8.42125 14.9815L4.00747 10.5719C3.7423 10.307 3.7423 9.87749 4.00747 9.61255L4.96776 8.65315C5.23293 8.38821 5.6629 8.38821 5.92808 8.65315L8.90141 11.6236L15.27 5.26119C15.5351 4.99627 15.9651 4.99627 16.2303 5.26119L17.1906 6.22058C17.4557 6.4855 17.4557 6.91504 17.1906 7.17998L9.38156 14.9815C9.11637 15.2464 8.68642 15.2464 8.42125 14.9815Z\\\" fill=\\\"#303538\\\"/>\\n    </svg>\\n    \\n  \\n{:else}\\n<svg class=\\\"lock\\\" width=\\\"20\\\" height=\\\"20\\\" viewBox=\\\"0 0 20 20\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <circle cx=\\\"10\\\" cy=\\\"10\\\" r=\\\"10\\\" fill=\\\"{color}\\\"/>\\n    <circle cx=\\\"9.83301\\\" cy=\\\"9.99805\\\" r=\\\"6.62305\\\" fill=\\\"#303538\\\"/>\\n    </svg>\\n    \\n{/if}\\n <style>\\n     .lock {\\n         margin: auto;\\n     }\\n </style>\"],\"names\":[],\"mappings\":\"AA2BK,KAAK,cAAC,CAAC,AACH,MAAM,CAAE,IAAI,AAChB,CAAC\"}"
};

const Check = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { color } = $$props;
	let { active } = $$props;
	active = 0;
	if ($$props.color === void 0 && $$bindings.color && color !== void 0) $$bindings.color(color);
	if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
	$$result.css.add(css$h);

	return `${active < 1
	? `<svg class="${"lock svelte-n4s916"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><circle cx="${"9.83301"}" cy="${"9.99805"}" r="${"6.62305"}" fill="${"#303538"}"></circle></svg>`
	: `${active > 1
		? `<svg class="${"lock svelte-n4s916"}" width="${"21"}" height="${"21"}" viewBox="${"0 0 21 21"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><circle cx="${"10.5986"}" cy="${"10.1211"}" r="${"10"}"${add_attribute("fill", color, 0)}></circle><path d="${"M8.42125 14.9815L4.00747 10.5719C3.7423 10.307 3.7423 9.87749 4.00747 9.61255L4.96776 8.65315C5.23293 8.38821 5.6629 8.38821 5.92808 8.65315L8.90141 11.6236L15.27 5.26119C15.5351 4.99627 15.9651 4.99627 16.2303 5.26119L17.1906 6.22058C17.4557 6.4855 17.4557 6.91504 17.1906 7.17998L9.38156 14.9815C9.11637 15.2464 8.68642 15.2464 8.42125 14.9815Z"}" fill="${"#303538"}"></path></svg>`
		: `<svg class="${"lock svelte-n4s916"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><circle cx="${"10"}" cy="${"10"}" r="${"10"}"${add_attribute("fill", color, 0)}></circle><circle cx="${"9.83301"}" cy="${"9.99805"}" r="${"6.62305"}" fill="${"#303538"}"></circle></svg>`}`}`;
});

/* src/components/Completion.svelte generated by Svelte v3.23.2 */

const css$i = {
	code: "aside.svelte-btetyw{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:33.75vw;height:86vh;background-color:#38424D;border-radius:15px;border:0px;margin:12px 0px 40px 20px;min-width:33vw;position:sticky;top:50px}#timer.svelte-btetyw{display:flex;flex-flow:row wrap;margin-block-start:30px;align-items:center;justify-content:center}#minutes.svelte-btetyw{color:white;background:#0F2033;border-radius:6px;max-width:150px;height:60px;text-align:center;font-size:24px;margin:12px 40px;display:grid;align-content:center;padding:2px 30px}.done.svelte-btetyw{display:flex;flex-flow:row nowrap;align-items:center;width:95%;margin-bottom:20px\n    }progress.svelte-btetyw{-webkit-appearance:none;border:none;display:block;width:86%;position:relative;bottom:4.7vh;height:6px;z-index:-1;margin-left:31px}progress.svelte-btetyw::-webkit-progress-bar{background:#303538}progress.bg1.svelte-btetyw::-webkit-progress-value{background:#74ef7b}progress.bg2.svelte-btetyw::-webkit-progress-value{background:#F1C330}progress.bg3.svelte-btetyw::-webkit-progress-value{background:#E94040}.bg1.svelte-btetyw{background-image:url('../bg-group1.png');background-blend-mode:normal;background-size:cover;background-position:top;color:#74ef7b;font-size:20px}.bg2.svelte-btetyw{background-image:url('../bg-group2.png');background-blend-mode:normal;background-size:cover;background-position:top;color:#F1C330;font-size:20px}.bg3.svelte-btetyw{background-image:url('../bg-group3.png');background-blend-mode:normal;background-size:cover;background-position:top;color:#E94040;font-size:20px}#progress-holder.svelte-btetyw{width:80%}#challenge-name.svelte-btetyw{font-size:40px;color:white;margin:auto}",
	map: "{\"version\":3,\"file\":\"Completion.svelte\",\"sources\":[\"Completion.svelte\"],\"sourcesContent\":[\"<script>\\n    //total time for countdown\\nimport { tweened } from 'svelte/motion';\\nimport { cubicOut, sineInOut  } from 'svelte/easing';\\nimport Check from './Check.svelte';\\nimport { quizSteps, timerActive, progress, count } from '../store.js';\\nimport { afterUpdate } from 'svelte';\\nimport { slide, fly, fade } from 'svelte/transition';\\n//console.log($quizSteps);\\nlet start= 30 * 60;\\nlet timer = tweened(start);\\n  setInterval(() => {\\n    if ($timer > 0 && $timerActive) $timer--;\\n  }, 1000);\\n\\n  $: minutes = Math.floor($timer / 60);\\n  $: minname = minutes > 1 ? \\\"mins\\\" : \\\"min\\\";\\n  $: seconds = Math.floor($timer - minutes * 60).toLocaleString('en', {minimumIntegerDigits:2,useGrouping:false})\\n\\nlet bg1 = true;\\nlet bg2 = false;\\nlet bg3 = false;\\n\\nlet color;\\nafterUpdate(() =>{\\n    if($count > 3){bg1 = false; bg2 = true;}\\n    if($count  > 7){bg2= false; bg3= true;}\\n    if(bg1){color = \\\"#74ef7b\\\"}\\n    if(bg2){color = \\\"#F1C330\\\"}\\n    if(bg3){color = \\\"#E94040\\\"}\\n})\\n</script>\\n<aside class:bg1 class:bg2 class:bg3>\\n    <section id=\\\"timer\\\">\\n       <div>Time Remaining:</div> <div id='minutes' style='white-space:nowrap;'>{minutes}:{seconds}</div> \\n       <div id='challenge-name'>\\n        <slot>\\n\\n        </slot>\\n    </div>\\n    </section>\\n    <div id=\\\"progress-holder\\\">\\n    <section class='done'>\\n        {#each $quizSteps as challenge}\\n            {#if challenge.type != 'checkpoint'}\\n        <svelte:component this={Check} active={challenge.status} color={color}/> \\n            {/if}\\n        {/each}    \\n    </section>\\n    <progress value={$progress} max=\\\"100\\\" class:bg1 class:bg2 class:bg3></progress>\\n    </div>\\n</aside>\\n<style>\\n    aside {\\n        display: flex;\\n        flex-direction: column;\\n        justify-content: space-between;\\n        align-items: center;\\n        width: 33.75vw; \\n        height: 86vh; \\n        background-color: #38424D;\\n        border-radius: 15px;\\n        border: 0px;\\n        margin: 12px 0px 40px 20px;\\n        min-width: 33vw;\\n        position: sticky;\\n        top: 50px;\\n    }\\n    #timer {\\n        display: flex;\\n        flex-flow: row wrap; \\n        margin-block-start: 30px;\\n        align-items: center;\\n        justify-content: center;\\n    }\\n    \\n    #minutes {\\n        color:white;\\n        background: #0F2033;\\n        border-radius: 6px;\\n        max-width: 150px;\\n        height: 60px;\\n        text-align: center;\\n        font-size: 24px;\\n        margin: 12px 40px;\\n        display: grid;\\n        align-content: center;\\n        padding: 2px 30px; \\n\\n    }\\n    .done {\\n        display: flex;\\n        flex-flow: row nowrap;\\n        align-items: center;\\n        width: 95%;\\n        margin-bottom: 20px\\n    }\\n    progress{\\n        -webkit-appearance: none;\\n\\t    border: none;\\n        display: block;\\n        width: 86%;\\n        position: relative;\\n        bottom: 4.7vh;\\n        height: 6px;\\n        z-index: -1;\\n        margin-left: 31px;\\n    }\\n    progress::-webkit-progress-bar {\\n\\t    background: #303538;\\n\\t}\\n    progress.bg1::-webkit-progress-value {\\n        background: #74ef7b;\\n    }\\n    progress.bg2::-webkit-progress-value {\\n        background: #F1C330;\\n    }\\n    progress.bg3::-webkit-progress-value {\\n        background: #E94040;\\n    }\\n    .bg1 {\\n        background-image: url('../bg-group1.png');\\n        background-blend-mode: normal;\\n        background-size: cover;\\n        background-position: top;\\n        color: #74ef7b;\\n        font-size: 20px;\\n    }\\n    .bg2 {\\n        background-image: url('../bg-group2.png');\\n        background-blend-mode: normal;\\n        background-size: cover;\\n        background-position: top;\\n        color: #F1C330;\\n        font-size: 20px;\\n    }\\n    .bg3 {\\n        background-image: url('../bg-group3.png');\\n        background-blend-mode: normal;\\n        background-size: cover;\\n        background-position: top;\\n        color: #E94040;\\n        font-size: 20px;\\n    }\\n    #progress-holder {\\n        width: 80%;\\n    }\\n    #challenge-name {\\n        font-size: 40px;\\n        color: white;\\n        margin: auto;\\n    }\\n    \\n</style>\\n<!--\\n\\n        \\n<div class='done'>\\n    {if active}\\n    <img src='./lock-active.svg' alt=\\\"completed\\\" class='active lock' />\\n    \\n        <img src='./Ellipse-active.png' alt=\\\"completed\\\" class='ellipse active' />\\n        <img src='./Ellipse-inactive.png' alt=\\\"completed\\\" class='ellipse inactive' />\\n</div>\\n</div>-->\"],\"names\":[],\"mappings\":\"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\"}"
};

const Completion = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $timer;
	let $timerActive = get_store_value(timerActive);
	let $count = get_store_value(count);
	let $quizSteps = get_store_value(quizSteps);
	let $progress = get_store_value(progress);

	//console.log($quizSteps);
	let start = 30 * 60;

	let timer = tweened(start);
	validate_store(timer, "timer");
	$timer = get_store_value(timer);

	setInterval(
		() => {
			if ($timer > 0 && $timerActive) $timer--;
		},
		1000
	);

	let bg1 = true;
	let bg2 = false;
	let bg3 = false;
	let color;

	afterUpdate(() => {
		if ($count > 3) {
			bg1 = false;
			bg2 = true;
		}

		if ($count > 7) {
			bg2 = false;
			bg3 = true;
		}

		if (bg1) {
			color = "#74ef7b";
		}

		if (bg2) {
			color = "#F1C330";
		}

		if (bg3) {
			color = "#E94040";
		}
	});

	$$result.css.add(css$i);
	validate_store(timer, "timer");
	$timer = get_store_value(timer);
	let minutes = Math.floor($timer / 60);

	let seconds = Math.floor($timer - minutes * 60).toLocaleString("en", {
		minimumIntegerDigits: 2,
		useGrouping: false
	});

	return `<aside class="${[
		"svelte-btetyw",
		(bg1 ? "bg1" : "") + " " + (bg2 ? "bg2" : "") + " " + (bg3 ? "bg3" : "")
	].join(" ").trim()}"><section id="${"timer"}" class="${"svelte-btetyw"}"><div>Time Remaining:</div> <div id="${"minutes"}" style="${"white-space:nowrap;"}" class="${"svelte-btetyw"}">${escape(minutes)}:${escape(seconds)}</div> 
       <div id="${"challenge-name"}" class="${"svelte-btetyw"}">${$$slots.default
	? $$slots.default({})
	: `

        `}</div></section>
    <div id="${"progress-holder"}" class="${"svelte-btetyw"}"><section class="${"done svelte-btetyw"}">${each($quizSteps, challenge => `${challenge.type != "checkpoint"
	? `${validate_component(Check || missing_component, "svelte:component").$$render($$result, { active: challenge.status, color }, {}, {})}`
	: ``}`)}</section>
    <progress${add_attribute("value", $progress, 0)} max="${"100"}" class="${[
		"svelte-btetyw",
		(bg1 ? "bg1" : "") + " " + (bg2 ? "bg2" : "") + " " + (bg3 ? "bg3" : "")
	].join(" ").trim()}"></progress></div></aside>

`;
});

/* src/routes/quizmain.svelte generated by Svelte v3.23.2 */

const css$j = {
	code: "main.svelte-rizrzd{display:flex;flex-flow:row;background:#38424D}#main-content.svelte-rizrzd{background:#38424D;border-radius:15px;border:0px;margin:12px 22px 40px 20px;padding:9.3vh 5vw 0vh 9.3vh;color:#FFFFFF;width:100%;background-image:url('../bg-vector.png');background-blend-mode:darken}#checkpoint.svelte-rizrzd{}",
	map: "{\"version\":3,\"file\":\"quizmain.svelte\",\"sources\":[\"quizmain.svelte\"],\"sourcesContent\":[\"<script>\\n import Quiz1 from '../components/q1.svelte'\\n import Vid from '../components/Vid.svelte'\\n import Quiz2 from '../components/q2.svelte'\\n import Quiz3 from '../components/q3.svelte'\\n import Quiz4 from '../components/q4.svelte'\\n import Quiz5 from '../components/q5.svelte'\\n import Quiz6 from '../components/q6.svelte'\\n import Quiz7 from '../components/q7.svelte'\\n import Quiz8 from '../components/q8.svelte'\\n import Checkpoint1 from '../components/check1.svelte'\\n import Checkpoint2 from '../components/check2.svelte'\\n import Checkpoint3 from '../components/check3.svelte'\\n import Completion from '../components/Completion.svelte'\\n import Complete from '../components/Complete.svelte'\\n import { createEventDispatcher, beforeUpdate, afterUpdate, onMount } from 'svelte';\\nimport { slide, fly, fade } from 'svelte/transition';\\nimport { quintOut, quintIn, sineInOut } from 'svelte/easing';\\nimport { count } from '../store.js'\\n//import quizSteps from '../store.js'\\n\\n\\nconst quizStep =  ([\\n    {component: Quiz1, name: 'WEBCAM', showSideBar: true},\\n    {component:Quiz2, name: 'HTTPS' , showSideBar: true},\\n    {component:Quiz6, name: 'DNS' , showSideBar: true},\\n    {component:Checkpoint1, name: 'Security vs Privacy', showSideBar: false},\\n    {component:Quiz3, name: 'SEARCH' , showSideBar: true},\\n    {component:Quiz4, name: 'PRIVACY SETTINGS' , showSideBar: true},\\n    {component:Quiz5, name: 'TRACKER BLOCKER' , showSideBar: true},\\n    {component:Checkpoint2, name: 'Surveillance Capitalism', showSideBar: false},\\n    {component:Quiz7, name: 'Internet of Things' , showSideBar: true},\\n    {component:Quiz8, name: 'Location Tracking' , showSideBar: true},\\n    {component:Checkpoint3, name: 'Change' , showSideBar: false},\\n])\\n$: showSideBar = quizStep[$count].showSideBar;\\n$: quizNumber = quizStep[$count].name;\\n</script>\\n<svelte:head>\\n\\t<title>Mind your Data</title>\\n</svelte:head>\\n<main>\\n       <div in:fly=\\\"{{delay: 800, duration: 1000, x: -800, y: 0, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: -800, y: 0, opacity: 0, easing: sineInOut}}\\\">\\n       {#if showSideBar}\\n       <svelte:component this={Completion}>\\n              {quizStep[$count].name}\\n       </svelte:component>\\n       {/if}\\n       </div>\\n       <!--<div id=\\\"main-content\\\"> -->\\n       {#if $count === 0}\\n              <div id=\\\"main-content\\\" in:fly=\\\"{{delay: 1500, duration: 1500 , x: 0, y: 1000, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}\\\"> \\n                     <Quiz1 />\\n              </div>\\n       {:else if $count === 1}\\n              <div id=\\\"main-content\\\" in:fly=\\\"{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}\\\"> \\n              <Quiz2 />\\n              </div>\\n       {:else if $count === 2}\\n              <div id=\\\"main-content\\\" in:fly=\\\"{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}\\\"> \\n                     <Quiz6 />\\n              </div>\\n       {:else if $count === 3}\\n              <div id=\\\"checkpoint\\\" in:fly=\\\"{{delay: 1500, duration: 1500, x: 800, y: 0, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 800, y: 0, opacity: 0, easing: sineInOut}}\\\"> \\n                     <Checkpoint1 />\\n              </div>\\n       {:else if $count === 4}\\n              <div id=\\\"main-content\\\" in:fly=\\\"{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}\\\"> \\n                     <Quiz3 />\\n              </div>\\n       {:else if $count === 5}\\n              <div id=\\\"main-content\\\" in:fly=\\\"{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}\\\"> \\n                     <Quiz4 />\\n              </div>\\n       {:else if $count === 6}\\n              <div id=\\\"main-content\\\" in:fly=\\\"{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}\\\"> \\n                     <Quiz5 />\\n              </div>\\n       {:else if $count === 7}\\n              <div id=\\\"checkpoint\\\" in:fly=\\\"{{delay: 1500, duration: 1500 , x: 800, y: 0, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 800, y: 0, opacity: 0, easing: sineInOut}}\\\"> \\n                     <Checkpoint2 />\\n              </div>\\n       {:else if $count === 8}\\n              <div id=\\\"main-content\\\" in:fly=\\\"{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}\\\"> \\n                     <Quiz7 />\\n              </div>\\n       {:else if $count === 9}\\n              <div id=\\\"main-content\\\" in:fly=\\\"{{delay: 150, duration: 800, x:0, y: 1000, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: sineInOut}}\\\"> \\n                     <Quiz8 />\\n              </div>\\n       {:else}\\n              <div id=\\\"checkpoint\\\" in:fly=\\\"{{delay: 1500, duration: 1500 , x: 800, y: 0, opacity: 0.0, easing: sineInOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 800, y: 0, opacity: 0, easing: sineInOut}}\\\"> \\n                     <Checkpoint3 />\\n              </div>\\n       {/if}\\n       <!--<svelte:component this={quizStep[$count].component} />\\n             </div>\\n       {:else }\\n       <div id=\\\"checkpoint\\\"> \\n              <svelte:component this={quizStep[$count].component} />\\n       </div> -->\\n       \\n</main>\\n<style>\\n       main {\\n              display: flex;\\n              flex-flow: row;\\n              background: #38424D;\\n\\n       }\\n       #main-content{\\n              background: #38424D;\\n              /*height: 86vh; */\\n              border-radius: 15px;\\n              border: 0px;\\n              margin: 12px 22px 40px 20px;\\n              padding: 9.3vh 5vw 0vh 9.3vh;\\n              color: #FFFFFF;\\n              width: 100%;\\n              background-image: url('../bg-vector.png');\\n           \\n              background-blend-mode: darken;\\n              /*margin-top: -50px;\\n              margin-left: 21vw;\\n              margin-right: 50px;\\n              padding-right: 15px;*/\\n       }\\n       #checkpoint {\\n             \\n       }\\n</style>\"],\"names\":[],\"mappings\":\"AAwGO,IAAI,cAAC,CAAC,AACC,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CACd,UAAU,CAAE,OAAO,AAE1B,CAAC,AACD,2BAAa,CAAC,AACP,UAAU,CAAE,OAAO,CAEnB,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,CAC3B,OAAO,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAC5B,KAAK,CAAE,OAAO,CACd,KAAK,CAAE,IAAI,CACX,gBAAgB,CAAE,IAAI,kBAAkB,CAAC,CAEzC,qBAAqB,CAAE,MAAM,AAKpC,CAAC,AACD,WAAW,cAAC,CAAC,AAEb,CAAC\"}"
};

const Quizmain = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $count = get_store_value(count);

	//import quizSteps from '../store.js'
	const quizStep = [
		{
			component: Q1,
			name: "WEBCAM",
			showSideBar: true
		},
		{
			component: Q2,
			name: "HTTPS",
			showSideBar: true
		},
		{
			component: Q6,
			name: "DNS",
			showSideBar: true
		},
		{
			component: Check1,
			name: "Security vs Privacy",
			showSideBar: false
		},
		{
			component: Q3,
			name: "SEARCH",
			showSideBar: true
		},
		{
			component: Q4,
			name: "PRIVACY SETTINGS",
			showSideBar: true
		},
		{
			component: Q5,
			name: "TRACKER BLOCKER",
			showSideBar: true
		},
		{
			component: Check2,
			name: "Surveillance Capitalism",
			showSideBar: false
		},
		{
			component: Q7,
			name: "Internet of Things",
			showSideBar: true
		},
		{
			component: Q8,
			name: "Location Tracking",
			showSideBar: true
		},
		{
			component: Check3,
			name: "Change",
			showSideBar: false
		}
	];

	$$result.css.add(css$j);
	let showSideBar = quizStep[$count].showSideBar;
	let quizNumber = quizStep[$count].name;

	return `${($$result.head += `${($$result.title = `<title>Mind your Data</title>`, "")}`, "")}
<main class="${"svelte-rizrzd"}"><div>${showSideBar
	? `${validate_component(Completion || missing_component, "svelte:component").$$render($$result, {}, {}, {
			default: () => `${escape(quizStep[$count].name)}`
		})}`
	: ``}</div>
       
       ${$count === 0
	? `<div id="${"main-content"}" class="${"svelte-rizrzd"}">${validate_component(Q1, "Quiz1").$$render($$result, {}, {}, {})}</div>`
	: `${$count === 1
		? `<div id="${"main-content"}" class="${"svelte-rizrzd"}">${validate_component(Q2, "Quiz2").$$render($$result, {}, {}, {})}</div>`
		: `${$count === 2
			? `<div id="${"main-content"}" class="${"svelte-rizrzd"}">${validate_component(Q6, "Quiz6").$$render($$result, {}, {}, {})}</div>`
			: `${$count === 3
				? `<div id="${"checkpoint"}" class="${"svelte-rizrzd"}">${validate_component(Check1, "Checkpoint1").$$render($$result, {}, {}, {})}</div>`
				: `${$count === 4
					? `<div id="${"main-content"}" class="${"svelte-rizrzd"}">${validate_component(Q3, "Quiz3").$$render($$result, {}, {}, {})}</div>`
					: `${$count === 5
						? `<div id="${"main-content"}" class="${"svelte-rizrzd"}">${validate_component(Q4, "Quiz4").$$render($$result, {}, {}, {})}</div>`
						: `${$count === 6
							? `<div id="${"main-content"}" class="${"svelte-rizrzd"}">${validate_component(Q5, "Quiz5").$$render($$result, {}, {}, {})}</div>`
							: `${$count === 7
								? `<div id="${"checkpoint"}" class="${"svelte-rizrzd"}">${validate_component(Check2, "Checkpoint2").$$render($$result, {}, {}, {})}</div>`
								: `${$count === 8
									? `<div id="${"main-content"}" class="${"svelte-rizrzd"}">${validate_component(Q7, "Quiz7").$$render($$result, {}, {}, {})}</div>`
									: `${$count === 9
										? `<div id="${"main-content"}" class="${"svelte-rizrzd"}">${validate_component(Q8, "Quiz8").$$render($$result, {}, {}, {})}</div>`
										: `<div id="${"checkpoint"}" class="${"svelte-rizrzd"}">${validate_component(Check3, "Checkpoint3").$$render($$result, {}, {}, {})}</div>`}`}`}`}`}`}`}`}`}`}
       
       
</main>`;
});

/* src/routes/review.svelte generated by Svelte v3.23.2 */

const css$k = {
	code: "main.svelte-imo9h5{background-color:#303538}.review.svelte-imo9h5{width:50vw;background-color:#38424d;display:flex;flex-flow:column;margin:auto;color:#ffffff;padding:65px 100px 65px 65px}#complete.svelte-imo9h5{background-color:#38424D;color:#ffffff;font-weight:500;margin:5px}#incomplete.svelte-imo9h5{background-color:#ffffff;color:#e94040;font-weight:500;margin:5px}.caret.svelte-imo9h5{display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between}div.caret.svelte-imo9h5{border-radius:6px;border:none;margin:10px;padding:10px 20px}.prize1.svelte-imo9h5{color:#ffffff;display:flex;flex-flow:column nowrap;align-items:center;text-align:center}img.svelte-imo9h5{width:100%;border-radius:6px}",
	map: "{\"version\":3,\"file\":\"review.svelte\",\"sources\":[\"review.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport { onMount, beforeUpdate, createEventDispatcher } from 'svelte';\\n\\tconst dispatch = createEventDispatcher();\\n\\timport Trans from '../components/TransHelp.svelte';\\n\\timport Complete from '../components/complete.svelte' //set success={false} for failure\\n\\timport Btn from '../components/Btn.svelte' //set <Next q={2}> to skip multiple steps p=7.4 for progress\\n\\timport { count, step, quizSteps } from '../store.js'\\n\\timport Back from '../components/Back.svelte'\\n\\n    let s;\\n    let comp = 0;\\n\\t//sets aside icon to in progress via store\\n    onMount(async() => {\\n        \\n        $quizSteps[$count].status = 1;\\n        $quizSteps.forEach((v) => {\\n            if(v.complete && v.displayProgress){\\n                comp++;\\n            }\\n        })\\n        step.set(0);\\n        let percentComplete;\\n        percentComplete = (comp/8) * 100;\\n        console.log(percentComplete);\\n        if (percentComplete < 33) {\\n            s = 1;\\n        } else if (percentComplete < 90) {\\n            s=2;\\n        } else {\\n            s=3;\\n        }\\n    });\\n    let current = 'initial';\\n    \\n\\n</script>\\n<svelte:head>\\n\\t<title>Mind Your Data</title>\\n</svelte:head>\\n<Trans>\\n<main>\\n<section class='review'>\\n    {#if $step === 0}\\n    <h2>You have completed {comp} / 8 challenges!</h2>\\n    \\n    {#each $quizSteps as {name, complete, displayProgress}}\\n    {#if displayProgress}\\n    \\n        {#if !complete}\\n        <div id=\\\"incomplete\\\" class=\\\"caret\\\" >\\n            <p>{name}</p>\\n        <svg width=\\\"28\\\" height=\\\"28\\\" viewBox=\\\"0 0 28 28\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <circle cx=\\\"14\\\" cy=\\\"14\\\" r=\\\"13\\\" stroke=\\\"#E94040\\\" stroke-width=\\\"2\\\"/>\\n            <path d=\\\"M13.9991 6.91016L12.7493 8.15993L17.6952 13.1147H6.9082V14.8874H17.6952L12.7493 19.8422L13.9991 21.092L21.09 14.0011L13.9991 6.91016Z\\\" fill=\\\"#E94040\\\"/>\\n            </svg>\\n        </div>\\n        {:else}\\n        <div id=\\\"complete\\\" class=\\\"caret\\\" >\\n            <p>{name}</p>\\n        <svg width=\\\"21\\\" height=\\\"21\\\" viewBox=\\\"0 0 21 21\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n            <path d=\\\"M10.2754 19.037C15.1206 19.037 19.0509 15.1126 19.0509 10.2685C19.0509 5.42444 15.1206 1.5 10.2754 1.5C5.43025 1.5 1.5 5.42444 1.5 10.2685C1.5 15.1126 5.43025 19.037 10.2754 19.037Z\\\" fill=\\\"#FFFFFF\\\" stroke=\\\"#FFFFFF\\\" stroke-width=\\\"3\\\"/>\\n            <path d=\\\"M8.28453 15.8272L3.87075 11.4176C3.60558 11.1527 3.60558 10.7232 3.87075 10.4583L4.83104 9.49886C5.09621 9.23391 5.52618 9.23391 5.79135 9.49886L8.76468 12.4693L15.1332 6.10689C15.3984 5.84197 15.8284 5.84197 16.0935 6.10689L17.0538 7.06629C17.319 7.3312 17.319 7.76074 17.0538 8.02568L9.24484 15.8272C8.97964 16.0921 8.5497 16.0921 8.28453 15.8272Z\\\" fill=\\\"#303538\\\"/>\\n            </svg>\\n        </div> \\n        {/if}\\n     \\n    {/if}\\n    {/each}\\n    <div class=\\\"button-holder\\\">\\n       <Btn p={0} q={s}>Claim my Prize</Btn>\\n        <a prefetch href='quizmain'><button>Back to quiz</button></a>\\n    </div>\\n    {:else if $step === 1}\\n    <div class=\\\"prize1\\\">\\n        <h3>Congrats!</h3>\\n            <p>You didn't abandon us</p>\\n        <h1>Level1</h1>\\n        <h2>Maybe try harder next time...</h2>\\n        <img src=\\\"poster_mock.jpg\\\" alt=\\\"mind your data poster on the street at night\\\"/>\\n            <p>Prize: A radical mind your data poster. <br>Download it, and print it at home.</p>\\n        <div class=\\\"button-holder\\\"> \\n           <a href=\\\"./MindYourDataPoster.pdf\\\" download=\\\"\\\"> <Btn q={0} p={0}>Download the poster</Btn></a>\\n        </div>\\n    </div>\\n    {:else if $step === 2}\\n    <div class=\\\"prize1\\\">\\n        <h3>Congrats!</h3>\\n            <p>You didn't abandon us, and learned a little about data privacy</p>\\n        <h1>Level 2</h1>\\n        <h2>Not too shabby</h2>\\n        <img src=\\\"./pins.jpg\\\" alt=\\\"women wearing mind your data pins which is the prize for this level\\\"/>\\n            <p>Prize: Mind your data pin set. Availible for purchase only for a select group of people.(coming soon)</p>\\n            \\n        <div class=\\\"button-holder\\\"> \\n            <Btn q={0} p={0} disabled={true}>Claim your pins<br> (coming soon)</Btn>\\n        </div>\\n    </div>\\n    {:else}\\n    <div class=\\\"prize1\\\">\\n        <h3>Congrats!</h3>\\n            <p>You made it all the way through.<br>We are impressed!</p>\\n        <h1>Level 3: Grand Awesome Person of Privacy</h1>\\n        <h2>Thanks for caring</h2>\\n            <p>Prize: Access to a super limited editon Mind Your Data T-shirt. Only 50 made, for those dedicated to privacy.</p>\\n        <img src=\\\"./shirt_mock.jpg\\\" alt=\\\"mind your data shirt on a model\\\"/>\\n        <div class=\\\"button-holder\\\"> \\n            <Btn q={0} p={0}>Buy your shirt!!<br> (coming soon)</Btn>\\n        </div>\\n    </div>\\n    {/if}\\n\\n</section>\\n</main>\\n</Trans>\\n<style>\\n    main{\\n        background-color: #303538;\\n    }\\n    .review{\\n        width:50vw;\\n        background-color: #38424d;\\n        display: flex;\\n        flex-flow: column;\\n        margin: auto;\\n        color: #ffffff;\\n        padding: 65px 100px 65px 65px;\\n        /*height: 100vh;*/\\n    }\\n   #complete{\\n        background-color :#38424D;\\n        color: #ffffff;\\n        font-weight: 500;\\n        margin: 5px;\\n\\n   }\\n   #incomplete{\\n    background-color :#ffffff;\\n    color: #e94040;\\n    font-weight: 500;\\n    margin: 5px;\\n\\n   }\\n   .caret{\\n\\t\\tdisplay: flex;\\n\\t\\tflex-flow: row nowrap;\\n\\t\\talign-items: center;\\n        justify-content: space-between;\\n    }\\n    div.caret {\\n        border-radius: 6px;\\n        border: none;\\n        margin: 10px;\\n        padding: 10px 20px;\\n       \\n    }\\n    .prize1 {\\n        color: #ffffff;\\n        display: flex;\\n        flex-flow: column nowrap;\\n        align-items: center;\\n        text-align: center;\\n\\n    }\\n    img {\\n        width: 100%;\\n        border-radius: 6px;\\n\\n    }\\n</style>\"],\"names\":[],\"mappings\":\"AAmHI,kBAAI,CAAC,AACD,gBAAgB,CAAE,OAAO,AAC7B,CAAC,AACD,qBAAO,CAAC,AACJ,MAAM,IAAI,CACV,gBAAgB,CAAE,OAAO,CACzB,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MAAM,CACjB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CAAC,KAAK,CAAC,IAAI,CAAC,IAAI,AAEjC,CAAC,AACF,uBAAS,CAAC,AACL,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,GAAG,AAEhB,CAAC,AACD,yBAAW,CAAC,AACX,gBAAgB,CAAE,OAAO,CACzB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,GAAG,AAEZ,CAAC,AACD,oBAAM,CAAC,AACR,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,MAAM,CACrB,WAAW,CAAE,MAAM,CACb,eAAe,CAAE,aAAa,AAClC,CAAC,AACD,GAAG,MAAM,cAAC,CAAC,AACP,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,IAAI,AAEtB,CAAC,AACD,OAAO,cAAC,CAAC,AACL,KAAK,CAAE,OAAO,CACd,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,MAAM,CAAC,MAAM,CACxB,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,MAAM,AAEtB,CAAC,AACD,GAAG,cAAC,CAAC,AACD,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,GAAG,AAEtB,CAAC\"}"
};

const Review = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	let $count = get_store_value(count);
	let $step = get_store_value(step);
	const dispatch = createEventDispatcher();
	let s;
	let comp = 0;

	//sets aside icon to in progress via store
	onMount(async () => {
		$quizSteps[$count].status = 1;

		$quizSteps.forEach(v => {
			if (v.complete && v.displayProgress) {
				comp++;
			}
		});

		step.set(0);
		let percentComplete;
		percentComplete = comp / 8 * 100;
		console.log(percentComplete);

		if (percentComplete < 33) {
			s = 1;
		} else if (percentComplete < 90) {
			s = 2;
		} else {
			s = 3;
		}
	});
	$$result.css.add(css$k);

	return `${($$result.head += `${($$result.title = `<title>Mind Your Data</title>`, "")}`, "")}
${validate_component(TransHelp, "Trans").$$render($$result, {}, {}, {
		default: () => `<main class="${"svelte-imo9h5"}"><section class="${"review svelte-imo9h5"}">${$step === 0
		? `<h2>You have completed ${escape(comp)} / 8 challenges!</h2>
    
    ${each($quizSteps, ({ name, complete, displayProgress }) => `${displayProgress
			? `${!complete
				? `<div id="${"incomplete"}" class="${"caret svelte-imo9h5"}"><p>${escape(name)}</p>
        <svg width="${"28"}" height="${"28"}" viewBox="${"0 0 28 28"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><circle cx="${"14"}" cy="${"14"}" r="${"13"}" stroke="${"#E94040"}" stroke-width="${"2"}"></circle><path d="${"M13.9991 6.91016L12.7493 8.15993L17.6952 13.1147H6.9082V14.8874H17.6952L12.7493 19.8422L13.9991 21.092L21.09 14.0011L13.9991 6.91016Z"}" fill="${"#E94040"}"></path></svg>
        </div>`
				: `<div id="${"complete"}" class="${"caret svelte-imo9h5"}"><p>${escape(name)}</p>
        <svg width="${"21"}" height="${"21"}" viewBox="${"0 0 21 21"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M10.2754 19.037C15.1206 19.037 19.0509 15.1126 19.0509 10.2685C19.0509 5.42444 15.1206 1.5 10.2754 1.5C5.43025 1.5 1.5 5.42444 1.5 10.2685C1.5 15.1126 5.43025 19.037 10.2754 19.037Z"}" fill="${"#FFFFFF"}" stroke="${"#FFFFFF"}" stroke-width="${"3"}"></path><path d="${"M8.28453 15.8272L3.87075 11.4176C3.60558 11.1527 3.60558 10.7232 3.87075 10.4583L4.83104 9.49886C5.09621 9.23391 5.52618 9.23391 5.79135 9.49886L8.76468 12.4693L15.1332 6.10689C15.3984 5.84197 15.8284 5.84197 16.0935 6.10689L17.0538 7.06629C17.319 7.3312 17.319 7.76074 17.0538 8.02568L9.24484 15.8272C8.97964 16.0921 8.5497 16.0921 8.28453 15.8272Z"}" fill="${"#303538"}"></path></svg>
        </div>`}`
			: ``}`)}
    <div class="${"button-holder"}">${validate_component(Btn, "Btn").$$render($$result, { p: 0, q: s }, {}, { default: () => `Claim my Prize` })}
        <a prefetch href="${"quizmain"}"><button>Back to quiz</button></a></div>`
		: `${$step === 1
			? `<div class="${"prize1 svelte-imo9h5"}"><h3>Congrats!</h3>
            <p>You didn&#39;t abandon us</p>
        <h1>Level1</h1>
        <h2>Maybe try harder next time...</h2>
        <img src="${"poster_mock.jpg"}" alt="${"mind your data poster on the street at night"}" class="${"svelte-imo9h5"}">
            <p>Prize: A radical mind your data poster. <br>Download it, and print it at home.</p>
        <div class="${"button-holder"}"><a href="${"./MindYourDataPoster.pdf"}" download="${""}">${validate_component(Btn, "Btn").$$render($$result, { q: 0, p: 0 }, {}, { default: () => `Download the poster` })}</a></div></div>`
			: `${$step === 2
				? `<div class="${"prize1 svelte-imo9h5"}"><h3>Congrats!</h3>
            <p>You didn&#39;t abandon us, and learned a little about data privacy</p>
        <h1>Level 2</h1>
        <h2>Not too shabby</h2>
        <img src="${"./pins.jpg"}" alt="${"women wearing mind your data pins which is the prize for this level"}" class="${"svelte-imo9h5"}">
            <p>Prize: Mind your data pin set. Availible for purchase only for a select group of people.(coming soon)</p>
            
        <div class="${"button-holder"}">${validate_component(Btn, "Btn").$$render($$result, { q: 0, p: 0, disabled: true }, {}, {
						default: () => `Claim your pins<br> (coming soon)`
					})}</div></div>`
				: `<div class="${"prize1 svelte-imo9h5"}"><h3>Congrats!</h3>
            <p>You made it all the way through.<br>We are impressed!</p>
        <h1>Level 3: Grand Awesome Person of Privacy</h1>
        <h2>Thanks for caring</h2>
            <p>Prize: Access to a super limited editon Mind Your Data T-shirt. Only 50 made, for those dedicated to privacy.</p>
        <img src="${"./shirt_mock.jpg"}" alt="${"mind your data shirt on a model"}" class="${"svelte-imo9h5"}">
        <div class="${"button-holder"}">${validate_component(Btn, "Btn").$$render($$result, { q: 0, p: 0 }, {}, {
						default: () => `Buy your shirt!!<br> (coming soon)`
					})}</div></div>`}`}`}</section></main>
`
	})}`;
});

/* src/routes/about.svelte generated by Svelte v3.23.2 */

const About = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	return `${($$result.head += `${($$result.title = `<title>About</title>`, "")}`, "")}

<h1>About this site</h1>

<p>This is the &#39;about&#39; page. There&#39;s not much here.</p>`;
});

/* src/routes/blog/index.svelte generated by Svelte v3.23.2 */

const css$l = {
	code: "ul.svelte-1frg2tf{margin:0 0 1em 0;line-height:1.5}",
	map: "{\"version\":3,\"file\":\"index.svelte\",\"sources\":[\"index.svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport function preload({ params, query }) {\\n\\t\\treturn this.fetch(`blog.json`).then(r => r.json()).then(posts => {\\n\\t\\t\\treturn { posts };\\n\\t\\t});\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let posts;\\n</script>\\n\\n<style>\\n\\tul {\\n\\t\\tmargin: 0 0 1em 0;\\n\\t\\tline-height: 1.5;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>Blog</title>\\n</svelte:head>\\n\\n<h1>Recent posts</h1>\\n\\n<ul>\\n\\t{#each posts as post}\\n\\t\\t<!-- we're using the non-standard `rel=prefetch` attribute to\\n\\t\\t\\t\\ttell Sapper to load the data for the page as soon as\\n\\t\\t\\t\\tthe user hovers over the link or taps it, instead of\\n\\t\\t\\t\\twaiting for the 'click' event -->\\n\\t\\t<li><a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>\\n\\t{/each}\\n</ul>\"],\"names\":[],\"mappings\":\"AAaC,EAAE,eAAC,CAAC,AACH,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACjB,WAAW,CAAE,GAAG,AACjB,CAAC\"}"
};

function preload({ params, query }) {
	return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
		return { posts };
	});
}

const Blog = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { posts } = $$props;
	if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0) $$bindings.posts(posts);
	$$result.css.add(css$l);

	return `${($$result.head += `${($$result.title = `<title>Blog</title>`, "")}`, "")}

<h1>Recent posts</h1>

<ul class="${"svelte-1frg2tf"}">${each(posts, post => `
		<li><a rel="${"prefetch"}" href="${"blog/" + escape(post.slug)}">${escape(post.title)}</a></li>`)}</ul>`;
});

/* src/routes/blog/[slug].svelte generated by Svelte v3.23.2 */

const css$m = {
	code: ".content.svelte-gnxal1 h2{font-size:1.4em;font-weight:500}.content.svelte-gnxal1 pre{background-color:#f9f9f9;box-shadow:inset 1px 1px 5px rgba(0,0,0,0.05);padding:0.5em;border-radius:2px;overflow-x:auto}.content.svelte-gnxal1 pre code{background-color:transparent;padding:0}.content.svelte-gnxal1 ul{line-height:1.5}.content.svelte-gnxal1 li{margin:0 0 0.5em 0}",
	map: "{\"version\":3,\"file\":\"[slug].svelte\",\"sources\":[\"[slug].svelte\"],\"sourcesContent\":[\"<script context=\\\"module\\\">\\n\\texport async function preload({ params, query }) {\\n\\t\\t// the `slug` parameter is available because\\n\\t\\t// this file is called [slug].svelte\\n\\t\\tconst res = await this.fetch(`blog/${params.slug}.json`);\\n\\t\\tconst data = await res.json();\\n\\n\\t\\tif (res.status === 200) {\\n\\t\\t\\treturn { post: data };\\n\\t\\t} else {\\n\\t\\t\\tthis.error(res.status, data.message);\\n\\t\\t}\\n\\t}\\n</script>\\n\\n<script>\\n\\texport let post;\\n</script>\\n\\n<style>\\n\\t/*\\n\\t\\tBy default, CSS is locally scoped to the component,\\n\\t\\tand any unused styles are dead-code-eliminated.\\n\\t\\tIn this page, Svelte can't know which elements are\\n\\t\\tgoing to appear inside the {{{post.html}}} block,\\n\\t\\tso we have to use the :global(...) modifier to target\\n\\t\\tall elements inside .content\\n\\t*/\\n\\t.content :global(h2) {\\n\\t\\tfont-size: 1.4em;\\n\\t\\tfont-weight: 500;\\n\\t}\\n\\n\\t.content :global(pre) {\\n\\t\\tbackground-color: #f9f9f9;\\n\\t\\tbox-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);\\n\\t\\tpadding: 0.5em;\\n\\t\\tborder-radius: 2px;\\n\\t\\toverflow-x: auto;\\n\\t}\\n\\n\\t.content :global(pre) :global(code) {\\n\\t\\tbackground-color: transparent;\\n\\t\\tpadding: 0;\\n\\t}\\n\\n\\t.content :global(ul) {\\n\\t\\tline-height: 1.5;\\n\\t}\\n\\n\\t.content :global(li) {\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{post.title}</title>\\n</svelte:head>\\n\\n<h1>{post.title}</h1>\\n\\n<div class='content'>\\n\\t{@html post.html}\\n</div>\\n\"],\"names\":[],\"mappings\":\"AA4BC,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAE,CAAC,AACtB,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,KAAK,CAAC,GAAG,CAAC,GAAG,CAAC,GAAG,CAAC,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,CAC9C,OAAO,CAAE,KAAK,CACd,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,GAAG,AAAC,CAAC,AAAQ,IAAI,AAAE,CAAC,AACpC,gBAAgB,CAAE,WAAW,CAC7B,OAAO,CAAE,CAAC,AACX,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,WAAW,CAAE,GAAG,AACjB,CAAC,AAED,sBAAQ,CAAC,AAAQ,EAAE,AAAE,CAAC,AACrB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC\"}"
};

async function preload$1({ params, query }) {
	// the `slug` parameter is available because
	// this file is called [slug].svelte
	const res = await this.fetch(`blog/${params.slug}.json`);

	const data = await res.json();

	if (res.status === 200) {
		return { post: data };
	} else {
		this.error(res.status, data.message);
	}
}

const U5Bslugu5D = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { post } = $$props;
	if ($$props.post === void 0 && $$bindings.post && post !== void 0) $$bindings.post(post);
	$$result.css.add(css$m);

	return `${($$result.head += `${($$result.title = `<title>${escape(post.title)}</title>`, "")}`, "")}

<h1>${escape(post.title)}</h1>

<div class="${"content svelte-gnxal1"}">${post.html}</div>`;
});

/* src/routes/quiz/Progress.svelte generated by Svelte v3.23.2 */

const css$n = {
	code: "aside.svelte-n0ypaq{display:block;top:50px;left:0;width:27.77vw;height:100vh;padding-left:50px}section.svelte-n0ypaq{padding:10px 10px 20px 10px}",
	map: "{\"version\":3,\"file\":\"Progress.svelte\",\"sources\":[\"Progress.svelte\"],\"sourcesContent\":[\"<script>\\nlet completed;\\n\\n</script>\\n<style>\\n    aside {\\n       /* position: fixed; */\\n        display: block;\\n        top:50px;\\n        left:0;\\n        width: 27.77vw;\\n        height: 100vh;\\n        /*background-color: #e4e4e4;\\n        border: 2px solid #c7c7c7;*/\\n        padding-left: 50px;\\n    }\\n    section {\\n        padding: 10px 10px 20px 10px;\\n    }\\n    #timer {\\n        display: flex;\\n        flex-direction: column; \\n        /*border-bottom: 1px solid #c7c7c7;*/\\n    }\\n    #remaining {\\n        font-size: 20px;\\n        padding: 5px 0px 20px 0px;\\n        \\n\\n    }\\n    #minutes {\\n        color:white;\\n        background: #0F2033;\\n        border-radius: 6px;\\n        width: 9.7vw;\\n        height: 6.7vh;\\n        text-align: center;\\n        font-size: 30px;\\n        \\n\\n    }\\n    .btn-dark {\\n        color:white;\\n        background: #0F2033;\\n        border-radius: 6px;\\n        width: 30%;\\n        text-align: center;\\n        padding: 5px 10px;\\n    }\\n    button {\\n        border: none;\\n        padding: 5px 10px;\\n    }\\n    #next-skip {\\n        margin: 5px 10px;\\n        padding: 5px 0px 20px 0px;\\n    }\\n    \\n</style>\\n<aside id='sidebar'>\\n    <section id=\\\"progress\\\">\\n        <slot>\\n\\n        </slot>\\n    </section>\\n    <!--\\n    <section id='next-skip'> \\n        <button on:click={sayHello} class='btn-dark'>Next</button>\\n        <button  class='btn-dark'>Skip</button>\\n    </section> -->\\n</aside>\"],\"names\":[],\"mappings\":\"AAKI,KAAK,cAAC,CAAC,AAEH,OAAO,CAAE,KAAK,CACd,IAAI,IAAI,CACR,KAAK,CAAC,CACN,KAAK,CAAE,OAAO,CACd,MAAM,CAAE,KAAK,CAGb,YAAY,CAAE,IAAI,AACtB,CAAC,AACD,OAAO,cAAC,CAAC,AACL,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IAAI,CAAC,IAAI,AAChC,CAAC\"}"
};

const Progress = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	$$result.css.add(css$n);

	return `<aside id="${"sidebar"}" class="${"svelte-n0ypaq"}"><section id="${"progress"}" class="${"svelte-n0ypaq"}">${$$slots.default
	? $$slots.default({})
	: `

        `}</section>
    </aside>`;
});

/* src/routes/quiz.svelte generated by Svelte v3.23.2 */

const css$o = {
	code: "main.svelte-xsvjge{display:flex;flex-flow:row;justify-content:center;margin-top:15px;background:#38424D}section.svelte-xsvjge{background:#38424D;width:65vw;border-radius:15px;border:0px;margin:auto;padding:15vh 9vw;color:#FFFFFF;text-align:center;max-width:62%;background-image:url(/bg-lock.png);background-repeat:no-repeat;background-blend-mode:darken;background-position:center}#welcome.svelte-xsvjge{padding-bottom:40px}p.svelte-xsvjge{text-align:left}.welcome-text.svelte-xsvjge{text-align:center}#headline.svelte-xsvjge{font-weight:600;margin-bottom:25px;font-size:20px}#start.svelte-xsvjge{background-color:#73ef7b;margin-top:50px}#start-challenge.svelte-xsvjge{margin-top:75px}a.svelte-xsvjge{text-decoration:none}.caret.svelte-xsvjge{display:flex;flex-flow:row nowrap;align-items:center;justify-content:space-between}",
	map: "{\"version\":3,\"file\":\"quiz.svelte\",\"sources\":[\"quiz.svelte\"],\"sourcesContent\":[\"<script>\\n  import Trans from '../components/TransHelp.svelte'\\n  import { slide, blur, fade, fly } from 'svelte/transition';\\n\\timport { quintOut, expoOut, sineInOut } from 'svelte/easing';\\n    let part = 0;\\n  let current = 'initial';\\n  import { quizSteps } from '../store.js'\\n</script>\\n<svelte:head>\\n\\t<title>Data privacy quiz</title>\\n</svelte:head>\\n\\n<main>\\n    {#if part === 0}\\n    <section in:fly=\\\"{{delay: 1000, duration: 1000, x: 0, y: 1000, opacity: 0.0, easing: quintOut}}\\\" out:fly=\\\"{{delay: 50, duration: 600, x: 0, y: -800, opacity: 0, easing: quintOut}}\\\">\\n        <h1 id=\\\"welcome\\\">Welcome to the Mind Your Data Challenge</h1>\\n        <p class=\\\"welcome-text\\\">This module is designed to educate visitors about the implications of surveillance capitalism, empower them to take control over their own data, and equip them with tools to make change and opt use. </p>\\n        <p class=\\\"welcome-text\\\">Use of this site is at your own risk. If you don't know what something means, or does, skip it.</p>\\n        <button on:click='{() => part = 1}' id=\\\"start-challenge\\\">Begin</button>\\n    </section>\\n    {:else if part === 1}\\n    <section in:fly=\\\"{{delay: 150, duration: 800, x: 0, y: 1000, opacity: 0.0, easing: quintOut}}\\\">\\n        <p id=\\\"headline\\\">This test contains 8 unique privacy tests that will take no more than 30 minutes to complete. Each test will give you some background infomation and then suggestions on how to better protect your data and privacy. All suggestins are optional, but if you want access to awesome swag, you need to complete 90% of the test. </p>\\n        <div class:active=\\\"{current === 'webcam'}\\\" on:click=\\\"{() => current = 'webcam'}\\\" >\\n            <div class=\\\"caret\\\" transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">\\n                <p>{$quizSteps[0].name}</p>\\n                <svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                    <path d=\\\"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z\\\" fill=\\\"white\\\"/>\\n                    </svg>\\n            </div>\\n                {#if current === 'webcam'}\\n                <p transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">Learn why it's important to cover your webcam when not in use...</p>\\n                {/if}\\n                </div>\\n                <hr>\\n        <div class:active=\\\"{current === 'https'}\\\"\\n        on:click=\\\"{() => current = 'https'}\\\" >\\n        <div class=\\\"caret\\\" transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">\\n            <p>{$quizSteps[1].name}</p>\\n            <svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                <path d=\\\"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z\\\" fill=\\\"white\\\"/>\\n                </svg>\\n            </div>\\n            {#if current === 'https'}\\n            <p transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">See why using a handy browser extension can easily prevent unwanted snooping...</p>\\n            {/if}\\n        </div>\\n        <hr>\\n        <div class:active=\\\"{current === 'search'}\\\"\\n        on:click=\\\"{() => current = 'search'}\\\" transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">\\n        <div class=\\\"caret\\\">\\n            <p>{$quizSteps[3].name}</p>\\n            <svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                <path d=\\\"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z\\\" fill=\\\"white\\\"/>\\n                </svg>\\n            </div>\\n            {#if current === 'search'}\\n            <p transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">All of the urls you visit are converted from text to numbers before being sent across the internet. Who converts this matters...</p>\\n            {/if}\\n        </div>\\n        <hr>\\n        <div class:active=\\\"{current === 'privacy'}\\\"\\n        on:click=\\\"{() => current = 'privacy'}\\\" transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">\\n        <div class=\\\"caret\\\">\\n            <p>{$quizSteps[4].name}</p>\\n            <svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                <path d=\\\"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z\\\" fill=\\\"white\\\"/>\\n                </svg>\\n            </div>\\n            {#if current === 'privacy'}\\n            <p transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">Your search enginee is spying on you and making money off of it. However, some are better than others...</p>\\n            {/if}\\n        </div>\\n        <hr>\\n        <div class:active=\\\"{current === 'tracker'}\\\"\\n        on:click=\\\"{() => current = 'tracker' }\\\" transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">\\n        <div class=\\\"caret\\\">\\n            <p>{$quizSteps[5].name}</p>\\n            <svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                <path d=\\\"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z\\\" fill=\\\"white\\\"/>\\n                </svg>\\n            </div>\\n            {#if current === 'tracker'}\\n            <p transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">Much of the surveillance of your internet browsing is done through cookies, by changing some simple setting you can better protect your data...</p>\\n            {/if}\\n        </div>\\n        <hr>\\n        <div class:active=\\\"{current === 'dns'}\\\"\\n        on:click=\\\"{() => current = 'dns'}\\\" transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">\\n        <div class=\\\"caret\\\">\\n            <p>{$quizSteps[6].name}</p>\\n            <svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                <path d=\\\"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z\\\" fill=\\\"white\\\"/>\\n                </svg>\\n            </div>\\n            {#if current === 'dns'}\\n            <p transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">Go a step further and block all the trackers with a nifty browser add-on, and keep your data to yourself...</p>\\n            {/if}\\n        </div>\\n        <hr>\\n        <div class:active=\\\"{current === 'location'}\\\"\\n        on:click=\\\"{() => current = 'location'}\\\" transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">\\n        <div class=\\\"caret\\\">\\n            <p>{$quizSteps[8].name}</p>\\n            <svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                <path d=\\\"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z\\\" fill=\\\"white\\\"/>\\n                </svg>\\n            </div>\\n            {#if current === 'location'}\\n            <p transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">Your phone tracks just about everywhere you go, and this data commonly sold. Learn how to disable location for a little more privacy...</p>\\n            {/if}\\n        </div>\\n        <hr>\\n        <div class:active=\\\"{current === 'iot'}\\\"\\n        on:click=\\\"{() => current = 'iot'}\\\" transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">\\n        <div class=\\\"caret\\\">\\n            <p>{$quizSteps[9].name}</p>\\n            <svg width=\\\"24\\\" height=\\\"24\\\" viewBox=\\\"0 0 24 24\\\" fill=\\\"none\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n                <path d=\\\"M18.885 7L12 13.7989L5.115 7L3 9.09312L12 18L21 9.09312L18.885 7Z\\\" fill=\\\"white\\\"/>\\n                </svg>\\n            </div>\\n            {#if current === 'iot'}\\n            <p transition:slide=\\\"{{delay: 25, duration: 500, easing: quintOut }}\\\">Smart vacums, intelligents lights, internet connect theromstats, and voice assistants are part of everyday life, but also collect and sell a lot of personal data. Learn how to gain more privacy from these devices... </p>\\n            {/if}\\n        </div>\\n       <div class=\\\"button-holder\\\">\\n        <a rel=prefetch href='quizmain' ><button id=\\\"start\\\">Start Challenge</button></a>\\n        </div>\\n    </section>\\n    <!--{:else} \\n    <section id=\\\"chapter1\\\">\\n        <h1 id=\\\"chapter\\\">Chapter 1: Security</h1>\\n        <p id=\\\"permission\\\">Through out this challenge, we need your permission to give us one time non-recurring access to your webcam to test your practice. Please click allow for one time non-recurring access to your webcame to move to the next step to complete this challenge.</p>\\n        <button id=\\\"start\\\"><a rel=prefetch href='quizmain' >Start Challenge</a></button>\\n    </section> -->\\n    {/if}\\n    </main>\\n\\n<style>\\n    main {\\n              display: flex;\\n              flex-flow: row;\\n              justify-content: center;\\n              margin-top: 15px;\\n              background: #38424D;\\n       }\\n       section{\\n              background: #38424D;\\n              width: 65vw;\\n              /*min-height: 75vh;\\n              height: 86vh; */\\n              border-radius: 15px;\\n              border: 0px;\\n              margin: auto;\\n              padding: 15vh 9vw;\\n              color: #FFFFFF;\\n              text-align: center;\\n              max-width: 62%;\\n              background-image: url(/bg-lock.png);\\n            background-repeat: no-repeat;\\n            background-blend-mode: darken;\\n            background-position: center;\\n       }\\n       #welcome {\\n           padding-bottom: 40px;\\n       }\\n       p{\\n           text-align: left;\\n       }\\n       .welcome-text {\\n           text-align:center;\\n       }\\n       #headline {\\n           font-weight: 600;\\n           margin-bottom: 25px;\\n           font-size: 20px;\\n       }\\n       /*green button*/\\n        #start {\\n            background-color: #73ef7b;\\n            margin-top: 50px;\\n        }\\n        #start-challenge {\\n            margin-top: 75px;\\n        }\\n        a{\\n            text-decoration: none;        }\\n       /*.active {\\n           background-color: grey;\\n       }*/\\n       .caret{\\n\\t\\tdisplay: flex;\\n\\t\\tflex-flow: row nowrap;\\n\\t\\talign-items: center;\\n\\t\\tjustify-content: space-between;\\n\\t}\\n</style>\"],\"names\":[],\"mappings\":\"AA2II,IAAI,cAAC,CAAC,AACI,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CACd,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,OAAO,AAC1B,CAAC,AACD,qBAAO,CAAC,AACD,UAAU,CAAE,OAAO,CACnB,KAAK,CAAE,IAAI,CAGX,aAAa,CAAE,IAAI,CACnB,MAAM,CAAE,GAAG,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CAAC,GAAG,CACjB,KAAK,CAAE,OAAO,CACd,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,GAAG,CACd,gBAAgB,CAAE,IAAI,YAAY,CAAC,CACrC,iBAAiB,CAAE,SAAS,CAC5B,qBAAqB,CAAE,MAAM,CAC7B,mBAAmB,CAAE,MAAM,AAChC,CAAC,AACD,QAAQ,cAAC,CAAC,AACN,cAAc,CAAE,IAAI,AACxB,CAAC,AACD,eAAC,CAAC,AACE,UAAU,CAAE,IAAI,AACpB,CAAC,AACD,aAAa,cAAC,CAAC,AACX,WAAW,MAAM,AACrB,CAAC,AACD,SAAS,cAAC,CAAC,AACP,WAAW,CAAE,GAAG,CAChB,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,IAAI,AACnB,CAAC,AAEA,MAAM,cAAC,CAAC,AACJ,gBAAgB,CAAE,OAAO,CACzB,UAAU,CAAE,IAAI,AACpB,CAAC,AACD,gBAAgB,cAAC,CAAC,AACd,UAAU,CAAE,IAAI,AACpB,CAAC,AACD,eAAC,CAAC,AACE,eAAe,CAAE,IAAI,AAAS,CAAC,AAIpC,oBAAM,CAAC,AACZ,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,MAAM,CACrB,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,aAAa,AAC/B,CAAC\"}"
};

const Quiz = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let $quizSteps = get_store_value(quizSteps);
	$$result.css.add(css$o);

	return `${($$result.head += `${($$result.title = `<title>Data privacy quiz</title>`, "")}`, "")}

<main class="${"svelte-xsvjge"}">${ `<section class="${"svelte-xsvjge"}"><h1 id="${"welcome"}" class="${"svelte-xsvjge"}">Welcome to the Mind Your Data Challenge</h1>
        <p class="${"welcome-text svelte-xsvjge"}">This module is designed to educate visitors about the implications of surveillance capitalism, empower them to take control over their own data, and equip them with tools to make change and opt use. </p>
        <p class="${"welcome-text svelte-xsvjge"}">Use of this site is at your own risk. If you don&#39;t know what something means, or does, skip it.</p>
        <button id="${"start-challenge"}" class="${"svelte-xsvjge"}">Begin</button></section>`
	}
    </main>`;
});

/* src/components/Nav.svelte generated by Svelte v3.23.2 */

const css$p = {
	code: "nav.svelte-wgfy02{display:flex;flex-flow:row nowrap;height:50px;justify-content:space-between;align-items:center;background-color:#303538;font-weight:300;padding:0 1em;position:sticky;top:0px;left:0px;z-index:1}ul.svelte-wgfy02{display:flex;list-style:none;justify-content:flex-end;margin:0;padding:0;color:#c7c7c7}img.svelte-wgfy02{display:flex;justify-content:flex-start;height:30px;margin-left:25px}li.svelte-wgfy02{display:flex;margin:0px 20px 0px 20px;text-transform:uppercase}[aria-current].svelte-wgfy02{position:relative;display:inline-block}[aria-current].svelte-wgfy02::after{position:absolute;content:'';width:calc(100% - 1em);height:2px;background-color:#e74e45;display:block}a.svelte-wgfy02{display:flex;padding:1em 0.5em;text-decoration:none;margin:2em, 0em}.home.svelte-wgfy02{background-color:white}",
	map: "{\"version\":3,\"file\":\"Nav.svelte\",\"sources\":[\"Nav.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let segment;\\n</script>\\n\\n\\n<style>\\n\\tnav {\\n\\t\\tdisplay: flex;\\n\\t\\tflex-flow: row nowrap;\\n\\t\\theight: 50px;\\n\\t\\tjustify-content: space-between;\\n\\t\\talign-items: center;\\n\\t\\tbackground-color: #303538;\\n\\t\\t/*border-bottom: 1px solid rgba(255,62,0,0.1);*/\\n\\t\\tfont-weight: 300;\\n\\t\\tpadding: 0 1em;\\n\\t\\tposition: sticky;\\n    \\ttop: 0px;\\n\\t\\tleft: 0px;\\n\\t\\tz-index: 1;\\n\\t}\\n\\tul {\\n\\t\\tdisplay: flex;\\n\\t\\tlist-style: none;\\n\\t\\tjustify-content: flex-end;\\n\\t\\tmargin: 0;\\n\\t\\tpadding: 0;\\n\\t\\tcolor: #c7c7c7;\\n\\t}\\n\\timg {\\n\\t\\t/*display: block;\\n\\t\\tfloat: left;*/\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: flex-start;\\n\\t\\theight: 30px;\\n\\t\\tmargin-left: 25px;\\n\\t}\\n\\tli{\\n\\t\\tdisplay: flex;\\n\\t\\tmargin: 0px 20px 0px 20px;\\n\\t\\ttext-transform: uppercase;\\n\\t}\\n\\n\\t[aria-current] {\\n\\t\\tposition: relative;\\n\\t\\tdisplay: inline-block;\\n\\t}\\n\\n\\t[aria-current]::after {\\n\\t\\tposition: absolute;\\n\\t\\tcontent: '';\\n\\t\\twidth: calc(100% - 1em);\\n\\t\\theight: 2px;\\n\\t\\tbackground-color:#e74e45;\\n\\t\\tdisplay: block;\\n\\t\\t/*bottom: -1px;*/\\n\\t}\\n\\ta {\\n\\t\\tdisplay: flex;\\n\\t\\tpadding: 1em 0.5em;\\n\\t\\ttext-decoration: none;\\n\\t\\tmargin: 2em, 0em;\\n\\n\\t}\\n\\t.home {\\n\\t\\tbackground-color: white;\\n\\t}\\n</style>\\n\\n<nav class:home={segment == 'home'}>\\n\\t<a href='.'><img  src='./MYDlogo_nav.png' alt=\\\"Mind your Data logo\\\"></a>\\n\\t<ul id=\\\"navigation\\\">\\n\\t\\t<li><a aria-current=\\\"{segment === 'home' ? 'page' : undefined}\\\" href=\\\".\\\">home</a></li>\\n\\t\\t<li><a aria-current=\\\"{segment === 'quiz' ? 'page' : undefined}\\\" href=\\\"quiz\\\">quiz</a></li>\\n\\t\\t<li><a aria-current=\\\"{segment === 'about' ? 'page' : undefined}\\\" href=\\\"about\\\">about</a></li>\\n\\n\\t\\t<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches\\n\\t\\t     the blog data when we hover over the link or tap it on a touchscreen -->\\n\\t<!--\\t<li><a rel=prefetch aria-current=\\\"{segment === 'blog' ? 'page' : undefined}\\\" href=\\\"blog\\\">blog</a></li> -->\\n\\t</ul>\\n</nav>\\n\"],\"names\":[],\"mappings\":\"AAMC,GAAG,cAAC,CAAC,AACJ,OAAO,CAAE,IAAI,CACb,SAAS,CAAE,GAAG,CAAC,MAAM,CACrB,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,aAAa,CAC9B,WAAW,CAAE,MAAM,CACnB,gBAAgB,CAAE,OAAO,CAEzB,WAAW,CAAE,GAAG,CAChB,OAAO,CAAE,CAAC,CAAC,GAAG,CACd,QAAQ,CAAE,MAAM,CACb,GAAG,CAAE,GAAG,CACX,IAAI,CAAE,GAAG,CACT,OAAO,CAAE,CAAC,AACX,CAAC,AACD,EAAE,cAAC,CAAC,AACH,OAAO,CAAE,IAAI,CACb,UAAU,CAAE,IAAI,CAChB,eAAe,CAAE,QAAQ,CACzB,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,KAAK,CAAE,OAAO,AACf,CAAC,AACD,GAAG,cAAC,CAAC,AAGJ,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,UAAU,CAC3B,MAAM,CAAE,IAAI,CACZ,WAAW,CAAE,IAAI,AAClB,CAAC,AACD,gBAAE,CAAC,AACF,OAAO,CAAE,IAAI,CACb,MAAM,CAAE,GAAG,CAAC,IAAI,CAAC,GAAG,CAAC,IAAI,CACzB,cAAc,CAAE,SAAS,AAC1B,CAAC,AAED,CAAC,YAAY,CAAC,cAAC,CAAC,AACf,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,YAAY,AACtB,CAAC,AAED,CAAC,YAAY,eAAC,OAAO,AAAC,CAAC,AACtB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CACvB,MAAM,CAAE,GAAG,CACX,iBAAiB,OAAO,CACxB,OAAO,CAAE,KAAK,AAEf,CAAC,AACD,CAAC,cAAC,CAAC,AACF,OAAO,CAAE,IAAI,CACb,OAAO,CAAE,GAAG,CAAC,KAAK,CAClB,eAAe,CAAE,IAAI,CACrB,MAAM,CAAE,GAAG,CAAC,CAAC,GAAG,AAEjB,CAAC,AACD,KAAK,cAAC,CAAC,AACN,gBAAgB,CAAE,KAAK,AACxB,CAAC\"}"
};

const Nav = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$p);

	return `<nav class="${["svelte-wgfy02", segment == "home" ? "home" : ""].join(" ").trim()}"><a href="${"."}" class="${"svelte-wgfy02"}"><img src="${"./MYDlogo_nav.png"}" alt="${"Mind your Data logo"}" class="${"svelte-wgfy02"}"></a>
	<ul id="${"navigation"}" class="${"svelte-wgfy02"}"><li class="${"svelte-wgfy02"}"><a${add_attribute("aria-current", segment === "home" ? "page" : undefined, 0)} href="${"."}" class="${"svelte-wgfy02"}">home</a></li>
		<li class="${"svelte-wgfy02"}"><a${add_attribute("aria-current", segment === "quiz" ? "page" : undefined, 0)} href="${"quiz"}" class="${"svelte-wgfy02"}">quiz</a></li>
		<li class="${"svelte-wgfy02"}"><a${add_attribute("aria-current", segment === "about" ? "page" : undefined, 0)} href="${"about"}" class="${"svelte-wgfy02"}">about</a></li>

		
	</ul></nav>`;
});

/* src/routes/_layout.svelte generated by Svelte v3.23.2 */

const css$q = {
	code: "main.svelte-19axu57{background-color:white;box-sizing:border-box}",
	map: "{\"version\":3,\"file\":\"_layout.svelte\",\"sources\":[\"_layout.svelte\"],\"sourcesContent\":[\"<script>\\n\\timport Nav from '../components/Nav.svelte';\\n\\texport let segment;\\n</script>\\n\\n<style>\\n\\tmain {\\n\\t\\tbackground-color: white;\\n\\t\\tbox-sizing: border-box;\\n\\t}\\n</style>\\n\\n<Nav {segment} />\\n\\n<main>\\n\\t<slot></slot>\\n</main>\"],\"names\":[],\"mappings\":\"AAMC,IAAI,eAAC,CAAC,AACL,gBAAgB,CAAE,KAAK,CACvB,UAAU,CAAE,UAAU,AACvB,CAAC\"}"
};

const Layout = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { segment } = $$props;
	if ($$props.segment === void 0 && $$bindings.segment && segment !== void 0) $$bindings.segment(segment);
	$$result.css.add(css$q);

	return `${validate_component(Nav, "Nav").$$render($$result, { segment }, {}, {})}

<main class="${"svelte-19axu57"}">${$$slots.default ? $$slots.default({}) : ``}</main>`;
});

/* src/routes/_error.svelte generated by Svelte v3.23.2 */

const css$r = {
	code: "h1.svelte-8od9u6,p.svelte-8od9u6{margin:0 auto}h1.svelte-8od9u6{font-size:2.8em;font-weight:700;margin:0 0 0.5em 0}p.svelte-8od9u6{margin:1em auto}@media(min-width: 480px){h1.svelte-8od9u6{font-size:4em}}",
	map: "{\"version\":3,\"file\":\"_error.svelte\",\"sources\":[\"_error.svelte\"],\"sourcesContent\":[\"<script>\\n\\texport let status;\\n\\texport let error;\\n\\n\\tconst dev = \\\"development\\\" === 'development';\\n</script>\\n\\n<style>\\n\\th1, p {\\n\\t\\tmargin: 0 auto;\\n\\t}\\n\\n\\th1 {\\n\\t\\tfont-size: 2.8em;\\n\\t\\tfont-weight: 700;\\n\\t\\tmargin: 0 0 0.5em 0;\\n\\t}\\n\\n\\tp {\\n\\t\\tmargin: 1em auto;\\n\\t}\\n\\n\\t@media (min-width: 480px) {\\n\\t\\th1 {\\n\\t\\t\\tfont-size: 4em;\\n\\t\\t}\\n\\t}\\n</style>\\n\\n<svelte:head>\\n\\t<title>{status}</title>\\n</svelte:head>\\n\\n<h1>{status}</h1>\\n\\n<p>{error.message}</p>\\n\\n{#if dev && error.stack}\\n\\t<pre>{error.stack}</pre>\\n{/if}\\n\"],\"names\":[],\"mappings\":\"AAQC,gBAAE,CAAE,CAAC,cAAC,CAAC,AACN,MAAM,CAAE,CAAC,CAAC,IAAI,AACf,CAAC,AAED,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,GAAG,CAChB,MAAM,CAAE,CAAC,CAAC,CAAC,CAAC,KAAK,CAAC,CAAC,AACpB,CAAC,AAED,CAAC,cAAC,CAAC,AACF,MAAM,CAAE,GAAG,CAAC,IAAI,AACjB,CAAC,AAED,MAAM,AAAC,YAAY,KAAK,CAAC,AAAC,CAAC,AAC1B,EAAE,cAAC,CAAC,AACH,SAAS,CAAE,GAAG,AACf,CAAC,AACF,CAAC\"}"
};

const Error$1 = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { status } = $$props;
	let { error } = $$props;
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	$$result.css.add(css$r);

	return `${($$result.head += `${($$result.title = `<title>${escape(status)}</title>`, "")}`, "")}

<h1 class="${"svelte-8od9u6"}">${escape(status)}</h1>

<p class="${"svelte-8od9u6"}">${escape(error.message)}</p>

${ error.stack
	? `<pre>${escape(error.stack)}</pre>`
	: ``}`;
});

// This file is generated by Sapper — do not edit it!

const d = decodeURIComponent;

const manifest = {
	server_routes: [
		{
			// blog/index.json.js
			pattern: /^\/blog\.json$/,
			handlers: route_0,
			params: () => ({})
		},

		{
			// blog/[slug].json.js
			pattern: /^\/blog\/([^\/]+?)\.json$/,
			handlers: route_1,
			params: match => ({ slug: d(match[1]) })
		}
	],

	pages: [
		{
			// index.svelte
			pattern: /^\/$/,
			parts: [
				{ name: "index", file: "index.svelte", component: Routes }
			]
		},

		{
			// index_old.svelte
			pattern: /^\/index_old\/?$/,
			parts: [
				{ name: "index_old", file: "index_old.svelte", component: Index_old }
			]
		},

		{
			// resources.svelte
			pattern: /^\/resources\/?$/,
			parts: [
				{ name: "resources", file: "resources.svelte", component: Resources }
			]
		},

		{
			// quizmain.svelte
			pattern: /^\/quizmain\/?$/,
			parts: [
				{ name: "quizmain", file: "quizmain.svelte", component: Quizmain }
			]
		},

		{
			// review.svelte
			pattern: /^\/review\/?$/,
			parts: [
				{ name: "review", file: "review.svelte", component: Review }
			]
		},

		{
			// about.svelte
			pattern: /^\/about\/?$/,
			parts: [
				{ name: "about", file: "about.svelte", component: About }
			]
		},

		{
			// blog/index.svelte
			pattern: /^\/blog\/?$/,
			parts: [
				{ name: "blog", file: "blog/index.svelte", component: Blog, preload: preload }
			]
		},

		{
			// blog/[slug].svelte
			pattern: /^\/blog\/([^\/]+?)\/?$/,
			parts: [
				null,
				{ name: "blog_$slug", file: "blog/[slug].svelte", component: U5Bslugu5D, preload: preload$1, params: match => ({ slug: d(match[1]) }) }
			]
		},

		{
			// quiz/Progress.svelte
			pattern: /^\/quiz\/Progress\/?$/,
			parts: [
				null,
				{ name: "quiz_Progress", file: "quiz/Progress.svelte", component: Progress }
			]
		},

		{
			// quiz.svelte
			pattern: /^\/quiz\/?$/,
			parts: [
				{ name: "quiz", file: "quiz.svelte", component: Quiz }
			]
		}
	],

	root: Layout,
	root_preload: () => {},
	error: Error$1
};

const build_dir = "__sapper__/dev";

const src_dir = "src";

const CONTEXT_KEY = {};

/* src/node_modules/@sapper/internal/App.svelte generated by Svelte v3.23.2 */

const App = create_ssr_component(($$result, $$props, $$bindings, $$slots) => {
	let { stores } = $$props;
	let { error } = $$props;
	let { status } = $$props;
	let { segments } = $$props;
	let { level0 } = $$props;
	let { level1 = null } = $$props;
	let { notify } = $$props;
	afterUpdate(notify);
	setContext(CONTEXT_KEY, stores);
	if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0) $$bindings.stores(stores);
	if ($$props.error === void 0 && $$bindings.error && error !== void 0) $$bindings.error(error);
	if ($$props.status === void 0 && $$bindings.status && status !== void 0) $$bindings.status(status);
	if ($$props.segments === void 0 && $$bindings.segments && segments !== void 0) $$bindings.segments(segments);
	if ($$props.level0 === void 0 && $$bindings.level0 && level0 !== void 0) $$bindings.level0(level0);
	if ($$props.level1 === void 0 && $$bindings.level1 && level1 !== void 0) $$bindings.level1(level1);
	if ($$props.notify === void 0 && $$bindings.notify && notify !== void 0) $$bindings.notify(notify);

	return `


${validate_component(Layout, "Layout").$$render($$result, Object.assign({ segment: segments[0] }, level0.props), {}, {
		default: () => `${error
		? `${validate_component(Error$1, "Error").$$render($$result, { error, status }, {}, {})}`
		: `${validate_component(level1.component || missing_component, "svelte:component").$$render($$result, Object.assign(level1.props), {}, {})}`}`
	})}`;
});

/**
 * @param typeMap [Object] Map of MIME type -> Array[extensions]
 * @param ...
 */
function Mime() {
  this._types = Object.create(null);
  this._extensions = Object.create(null);

  for (var i = 0; i < arguments.length; i++) {
    this.define(arguments[i]);
  }

  this.define = this.define.bind(this);
  this.getType = this.getType.bind(this);
  this.getExtension = this.getExtension.bind(this);
}

/**
 * Define mimetype -> extension mappings.  Each key is a mime-type that maps
 * to an array of extensions associated with the type.  The first extension is
 * used as the default extension for the type.
 *
 * e.g. mime.define({'audio/ogg', ['oga', 'ogg', 'spx']});
 *
 * If a type declares an extension that has already been defined, an error will
 * be thrown.  To suppress this error and force the extension to be associated
 * with the new type, pass `force`=true.  Alternatively, you may prefix the
 * extension with "*" to map the type to extension, without mapping the
 * extension to the type.
 *
 * e.g. mime.define({'audio/wav', ['wav']}, {'audio/x-wav', ['*wav']});
 *
 *
 * @param map (Object) type definitions
 * @param force (Boolean) if true, force overriding of existing definitions
 */
Mime.prototype.define = function(typeMap, force) {
  for (var type in typeMap) {
    var extensions = typeMap[type].map(function(t) {return t.toLowerCase()});
    type = type.toLowerCase();

    for (var i = 0; i < extensions.length; i++) {
      var ext = extensions[i];

      // '*' prefix = not the preferred type for this extension.  So fixup the
      // extension, and skip it.
      if (ext[0] == '*') {
        continue;
      }

      if (!force && (ext in this._types)) {
        throw new Error(
          'Attempt to change mapping for "' + ext +
          '" extension from "' + this._types[ext] + '" to "' + type +
          '". Pass `force=true` to allow this, otherwise remove "' + ext +
          '" from the list of extensions for "' + type + '".'
        );
      }

      this._types[ext] = type;
    }

    // Use first extension as default
    if (force || !this._extensions[type]) {
      var ext = extensions[0];
      this._extensions[type] = (ext[0] != '*') ? ext : ext.substr(1);
    }
  }
};

/**
 * Lookup a mime type based on extension
 */
Mime.prototype.getType = function(path) {
  path = String(path);
  var last = path.replace(/^.*[/\\]/, '').toLowerCase();
  var ext = last.replace(/^.*\./, '').toLowerCase();

  var hasPath = last.length < path.length;
  var hasDot = ext.length < last.length - 1;

  return (hasDot || !hasPath) && this._types[ext] || null;
};

/**
 * Return file extension associated with a mime type
 */
Mime.prototype.getExtension = function(type) {
  type = /^\s*([^;\s]*)/.test(type) && RegExp.$1;
  return type && this._extensions[type.toLowerCase()] || null;
};

var Mime_1 = Mime;

var standard = {"application/andrew-inset":["ez"],"application/applixware":["aw"],"application/atom+xml":["atom"],"application/atomcat+xml":["atomcat"],"application/atomsvc+xml":["atomsvc"],"application/bdoc":["bdoc"],"application/ccxml+xml":["ccxml"],"application/cdmi-capability":["cdmia"],"application/cdmi-container":["cdmic"],"application/cdmi-domain":["cdmid"],"application/cdmi-object":["cdmio"],"application/cdmi-queue":["cdmiq"],"application/cu-seeme":["cu"],"application/dash+xml":["mpd"],"application/davmount+xml":["davmount"],"application/docbook+xml":["dbk"],"application/dssc+der":["dssc"],"application/dssc+xml":["xdssc"],"application/ecmascript":["ecma","es"],"application/emma+xml":["emma"],"application/epub+zip":["epub"],"application/exi":["exi"],"application/font-tdpfr":["pfr"],"application/geo+json":["geojson"],"application/gml+xml":["gml"],"application/gpx+xml":["gpx"],"application/gxf":["gxf"],"application/gzip":["gz"],"application/hjson":["hjson"],"application/hyperstudio":["stk"],"application/inkml+xml":["ink","inkml"],"application/ipfix":["ipfix"],"application/java-archive":["jar","war","ear"],"application/java-serialized-object":["ser"],"application/java-vm":["class"],"application/javascript":["js","mjs"],"application/json":["json","map"],"application/json5":["json5"],"application/jsonml+json":["jsonml"],"application/ld+json":["jsonld"],"application/lost+xml":["lostxml"],"application/mac-binhex40":["hqx"],"application/mac-compactpro":["cpt"],"application/mads+xml":["mads"],"application/manifest+json":["webmanifest"],"application/marc":["mrc"],"application/marcxml+xml":["mrcx"],"application/mathematica":["ma","nb","mb"],"application/mathml+xml":["mathml"],"application/mbox":["mbox"],"application/mediaservercontrol+xml":["mscml"],"application/metalink+xml":["metalink"],"application/metalink4+xml":["meta4"],"application/mets+xml":["mets"],"application/mods+xml":["mods"],"application/mp21":["m21","mp21"],"application/mp4":["mp4s","m4p"],"application/msword":["doc","dot"],"application/mxf":["mxf"],"application/n-quads":["nq"],"application/n-triples":["nt"],"application/octet-stream":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"],"application/oda":["oda"],"application/oebps-package+xml":["opf"],"application/ogg":["ogx"],"application/omdoc+xml":["omdoc"],"application/onenote":["onetoc","onetoc2","onetmp","onepkg"],"application/oxps":["oxps"],"application/patch-ops-error+xml":["xer"],"application/pdf":["pdf"],"application/pgp-encrypted":["pgp"],"application/pgp-signature":["asc","sig"],"application/pics-rules":["prf"],"application/pkcs10":["p10"],"application/pkcs7-mime":["p7m","p7c"],"application/pkcs7-signature":["p7s"],"application/pkcs8":["p8"],"application/pkix-attr-cert":["ac"],"application/pkix-cert":["cer"],"application/pkix-crl":["crl"],"application/pkix-pkipath":["pkipath"],"application/pkixcmp":["pki"],"application/pls+xml":["pls"],"application/postscript":["ai","eps","ps"],"application/pskc+xml":["pskcxml"],"application/raml+yaml":["raml"],"application/rdf+xml":["rdf","owl"],"application/reginfo+xml":["rif"],"application/relax-ng-compact-syntax":["rnc"],"application/resource-lists+xml":["rl"],"application/resource-lists-diff+xml":["rld"],"application/rls-services+xml":["rs"],"application/rpki-ghostbusters":["gbr"],"application/rpki-manifest":["mft"],"application/rpki-roa":["roa"],"application/rsd+xml":["rsd"],"application/rss+xml":["rss"],"application/rtf":["rtf"],"application/sbml+xml":["sbml"],"application/scvp-cv-request":["scq"],"application/scvp-cv-response":["scs"],"application/scvp-vp-request":["spq"],"application/scvp-vp-response":["spp"],"application/sdp":["sdp"],"application/set-payment-initiation":["setpay"],"application/set-registration-initiation":["setreg"],"application/shf+xml":["shf"],"application/sieve":["siv","sieve"],"application/smil+xml":["smi","smil"],"application/sparql-query":["rq"],"application/sparql-results+xml":["srx"],"application/srgs":["gram"],"application/srgs+xml":["grxml"],"application/sru+xml":["sru"],"application/ssdl+xml":["ssdl"],"application/ssml+xml":["ssml"],"application/tei+xml":["tei","teicorpus"],"application/thraud+xml":["tfi"],"application/timestamped-data":["tsd"],"application/voicexml+xml":["vxml"],"application/wasm":["wasm"],"application/widget":["wgt"],"application/winhlp":["hlp"],"application/wsdl+xml":["wsdl"],"application/wspolicy+xml":["wspolicy"],"application/xaml+xml":["xaml"],"application/xcap-diff+xml":["xdf"],"application/xenc+xml":["xenc"],"application/xhtml+xml":["xhtml","xht"],"application/xml":["xml","xsl","xsd","rng"],"application/xml-dtd":["dtd"],"application/xop+xml":["xop"],"application/xproc+xml":["xpl"],"application/xslt+xml":["xslt"],"application/xspf+xml":["xspf"],"application/xv+xml":["mxml","xhvml","xvml","xvm"],"application/yang":["yang"],"application/yin+xml":["yin"],"application/zip":["zip"],"audio/3gpp":["*3gpp"],"audio/adpcm":["adp"],"audio/basic":["au","snd"],"audio/midi":["mid","midi","kar","rmi"],"audio/mp3":["*mp3"],"audio/mp4":["m4a","mp4a"],"audio/mpeg":["mpga","mp2","mp2a","mp3","m2a","m3a"],"audio/ogg":["oga","ogg","spx"],"audio/s3m":["s3m"],"audio/silk":["sil"],"audio/wav":["wav"],"audio/wave":["*wav"],"audio/webm":["weba"],"audio/xm":["xm"],"font/collection":["ttc"],"font/otf":["otf"],"font/ttf":["ttf"],"font/woff":["woff"],"font/woff2":["woff2"],"image/aces":["exr"],"image/apng":["apng"],"image/bmp":["bmp"],"image/cgm":["cgm"],"image/dicom-rle":["drle"],"image/emf":["emf"],"image/fits":["fits"],"image/g3fax":["g3"],"image/gif":["gif"],"image/heic":["heic"],"image/heic-sequence":["heics"],"image/heif":["heif"],"image/heif-sequence":["heifs"],"image/ief":["ief"],"image/jls":["jls"],"image/jp2":["jp2","jpg2"],"image/jpeg":["jpeg","jpg","jpe"],"image/jpm":["jpm"],"image/jpx":["jpx","jpf"],"image/jxr":["jxr"],"image/ktx":["ktx"],"image/png":["png"],"image/sgi":["sgi"],"image/svg+xml":["svg","svgz"],"image/t38":["t38"],"image/tiff":["tif","tiff"],"image/tiff-fx":["tfx"],"image/webp":["webp"],"image/wmf":["wmf"],"message/disposition-notification":["disposition-notification"],"message/global":["u8msg"],"message/global-delivery-status":["u8dsn"],"message/global-disposition-notification":["u8mdn"],"message/global-headers":["u8hdr"],"message/rfc822":["eml","mime"],"model/3mf":["3mf"],"model/gltf+json":["gltf"],"model/gltf-binary":["glb"],"model/iges":["igs","iges"],"model/mesh":["msh","mesh","silo"],"model/stl":["stl"],"model/vrml":["wrl","vrml"],"model/x3d+binary":["*x3db","x3dbz"],"model/x3d+fastinfoset":["x3db"],"model/x3d+vrml":["*x3dv","x3dvz"],"model/x3d+xml":["x3d","x3dz"],"model/x3d-vrml":["x3dv"],"text/cache-manifest":["appcache","manifest"],"text/calendar":["ics","ifb"],"text/coffeescript":["coffee","litcoffee"],"text/css":["css"],"text/csv":["csv"],"text/html":["html","htm","shtml"],"text/jade":["jade"],"text/jsx":["jsx"],"text/less":["less"],"text/markdown":["markdown","md"],"text/mathml":["mml"],"text/mdx":["mdx"],"text/n3":["n3"],"text/plain":["txt","text","conf","def","list","log","in","ini"],"text/richtext":["rtx"],"text/rtf":["*rtf"],"text/sgml":["sgml","sgm"],"text/shex":["shex"],"text/slim":["slim","slm"],"text/stylus":["stylus","styl"],"text/tab-separated-values":["tsv"],"text/troff":["t","tr","roff","man","me","ms"],"text/turtle":["ttl"],"text/uri-list":["uri","uris","urls"],"text/vcard":["vcard"],"text/vtt":["vtt"],"text/xml":["*xml"],"text/yaml":["yaml","yml"],"video/3gpp":["3gp","3gpp"],"video/3gpp2":["3g2"],"video/h261":["h261"],"video/h263":["h263"],"video/h264":["h264"],"video/jpeg":["jpgv"],"video/jpm":["*jpm","jpgm"],"video/mj2":["mj2","mjp2"],"video/mp2t":["ts"],"video/mp4":["mp4","mp4v","mpg4"],"video/mpeg":["mpeg","mpg","mpe","m1v","m2v"],"video/ogg":["ogv"],"video/quicktime":["qt","mov"],"video/webm":["webm"]};

var lite = new Mime_1(standard);

function get_server_route_handler(routes) {
	async function handle_route(route, req, res, next) {
		req.params = route.params(route.pattern.exec(req.path));

		const method = req.method.toLowerCase();
		// 'delete' cannot be exported from a module because it is a keyword,
		// so check for 'del' instead
		const method_export = method === 'delete' ? 'del' : method;
		const handle_method = route.handlers[method_export];
		if (handle_method) {
			if (process.env.SAPPER_EXPORT) {
				const { write, end, setHeader } = res;
				const chunks = [];
				const headers = {};

				// intercept data so that it can be exported
				res.write = function(chunk) {
					chunks.push(Buffer.from(chunk));
					write.apply(res, arguments);
				};

				res.setHeader = function(name, value) {
					headers[name.toLowerCase()] = value;
					setHeader.apply(res, arguments);
				};

				res.end = function(chunk) {
					if (chunk) chunks.push(Buffer.from(chunk));
					end.apply(res, arguments);

					process.send({
						__sapper__: true,
						event: 'file',
						url: req.url,
						method: req.method,
						status: res.statusCode,
						type: headers['content-type'],
						body: Buffer.concat(chunks).toString()
					});
				};
			}

			const handle_next = (err) => {
				if (err) {
					res.statusCode = 500;
					res.end(err.message);
				} else {
					process.nextTick(next);
				}
			};

			try {
				await handle_method(req, res, handle_next);
			} catch (err) {
				console.error(err);
				handle_next(err);
			}
		} else {
			// no matching handler for method
			process.nextTick(next);
		}
	}

	return function find_route(req, res, next) {
		for (const route of routes) {
			if (route.pattern.test(req.path)) {
				handle_route(route, req, res, next);
				return;
			}
		}

		next();
	};
}

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var parse_1 = parse;
var serialize_1 = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {};
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim();
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}

var cookie = {
	parse: parse_1,
	serialize: serialize_1
};

var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved = /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped$1 = {
    '<': '\\u003C',
    '>': '\\u003E',
    '/': '\\u002F',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\0': '\\0',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029'
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
    var counts = new Map();
    function walk(thing) {
        if (typeof thing === 'function') {
            throw new Error("Cannot stringify a function");
        }
        if (counts.has(thing)) {
            counts.set(thing, counts.get(thing) + 1);
            return;
        }
        counts.set(thing, 1);
        if (!isPrimitive(thing)) {
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                case 'Date':
                case 'RegExp':
                    return;
                case 'Array':
                    thing.forEach(walk);
                    break;
                case 'Set':
                case 'Map':
                    Array.from(thing).forEach(walk);
                    break;
                default:
                    var proto = Object.getPrototypeOf(thing);
                    if (proto !== Object.prototype &&
                        proto !== null &&
                        Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames) {
                        throw new Error("Cannot stringify arbitrary non-POJOs");
                    }
                    if (Object.getOwnPropertySymbols(thing).length > 0) {
                        throw new Error("Cannot stringify POJOs with symbolic keys");
                    }
                    Object.keys(thing).forEach(function (key) { return walk(thing[key]); });
            }
        }
    }
    walk(value);
    var names = new Map();
    Array.from(counts)
        .filter(function (entry) { return entry[1] > 1; })
        .sort(function (a, b) { return b[1] - a[1]; })
        .forEach(function (entry, i) {
        names.set(entry[0], getName(i));
    });
    function stringify(thing) {
        if (names.has(thing)) {
            return names.get(thing);
        }
        if (isPrimitive(thing)) {
            return stringifyPrimitive(thing);
        }
        var type = getType(thing);
        switch (type) {
            case 'Number':
            case 'String':
            case 'Boolean':
                return "Object(" + stringify(thing.valueOf()) + ")";
            case 'RegExp':
                return thing.toString();
            case 'Date':
                return "new Date(" + thing.getTime() + ")";
            case 'Array':
                var members = thing.map(function (v, i) { return i in thing ? stringify(v) : ''; });
                var tail = thing.length === 0 || (thing.length - 1 in thing) ? '' : ',';
                return "[" + members.join(',') + tail + "]";
            case 'Set':
            case 'Map':
                return "new " + type + "([" + Array.from(thing).map(stringify).join(',') + "])";
            default:
                var obj = "{" + Object.keys(thing).map(function (key) { return safeKey(key) + ":" + stringify(thing[key]); }).join(',') + "}";
                var proto = Object.getPrototypeOf(thing);
                if (proto === null) {
                    return Object.keys(thing).length > 0
                        ? "Object.assign(Object.create(null)," + obj + ")"
                        : "Object.create(null)";
                }
                return obj;
        }
    }
    var str = stringify(value);
    if (names.size) {
        var params_1 = [];
        var statements_1 = [];
        var values_1 = [];
        names.forEach(function (name, thing) {
            params_1.push(name);
            if (isPrimitive(thing)) {
                values_1.push(stringifyPrimitive(thing));
                return;
            }
            var type = getType(thing);
            switch (type) {
                case 'Number':
                case 'String':
                case 'Boolean':
                    values_1.push("Object(" + stringify(thing.valueOf()) + ")");
                    break;
                case 'RegExp':
                    values_1.push(thing.toString());
                    break;
                case 'Date':
                    values_1.push("new Date(" + thing.getTime() + ")");
                    break;
                case 'Array':
                    values_1.push("Array(" + thing.length + ")");
                    thing.forEach(function (v, i) {
                        statements_1.push(name + "[" + i + "]=" + stringify(v));
                    });
                    break;
                case 'Set':
                    values_1.push("new Set");
                    statements_1.push(name + "." + Array.from(thing).map(function (v) { return "add(" + stringify(v) + ")"; }).join('.'));
                    break;
                case 'Map':
                    values_1.push("new Map");
                    statements_1.push(name + "." + Array.from(thing).map(function (_a) {
                        var k = _a[0], v = _a[1];
                        return "set(" + stringify(k) + ", " + stringify(v) + ")";
                    }).join('.'));
                    break;
                default:
                    values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
                    Object.keys(thing).forEach(function (key) {
                        statements_1.push("" + name + safeProp(key) + "=" + stringify(thing[key]));
                    });
            }
        });
        statements_1.push("return " + str);
        return "(function(" + params_1.join(',') + "){" + statements_1.join(';') + "}(" + values_1.join(',') + "))";
    }
    else {
        return str;
    }
}
function getName(num) {
    var name = '';
    do {
        name = chars[num % chars.length] + name;
        num = ~~(num / chars.length) - 1;
    } while (num >= 0);
    return reserved.test(name) ? name + "_" : name;
}
function isPrimitive(thing) {
    return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
    if (typeof thing === 'string')
        return stringifyString(thing);
    if (thing === void 0)
        return 'void 0';
    if (thing === 0 && 1 / thing < 0)
        return '-0';
    var str = String(thing);
    if (typeof thing === 'number')
        return str.replace(/^(-)?0\./, '$1.');
    return str;
}
function getType(thing) {
    return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
    return escaped$1[c] || c;
}
function escapeUnsafeChars(str) {
    return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? key : escapeUnsafeChars(JSON.stringify(key));
}
function safeProp(key) {
    return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key) ? "." + key : "[" + escapeUnsafeChars(JSON.stringify(key)) + "]";
}
function stringifyString(str) {
    var result = '"';
    for (var i = 0; i < str.length; i += 1) {
        var char = str.charAt(i);
        var code = char.charCodeAt(0);
        if (char === '"') {
            result += '\\"';
        }
        else if (char in escaped$1) {
            result += escaped$1[char];
        }
        else if (code >= 0xd800 && code <= 0xdfff) {
            var next = str.charCodeAt(i + 1);
            // If this is the beginning of a [high, low] surrogate pair,
            // add the next two characters, otherwise escape
            if (code <= 0xdbff && (next >= 0xdc00 && next <= 0xdfff)) {
                result += char + str[++i];
            }
            else {
                result += "\\u" + code.toString(16).toUpperCase();
            }
        }
        else {
            result += char;
        }
    }
    result += '"';
    return result;
}

// Based on https://github.com/tmpvar/jsdom/blob/aa85b2abf07766ff7bf5c1f6daafb3726f2f2db5/lib/jsdom/living/blob.js

// fix for "Readable" isn't a named export issue
const Readable = Stream.Readable;

const BUFFER = Symbol('buffer');
const TYPE = Symbol('type');

class Blob {
	constructor() {
		this[TYPE] = '';

		const blobParts = arguments[0];
		const options = arguments[1];

		const buffers = [];
		let size = 0;

		if (blobParts) {
			const a = blobParts;
			const length = Number(a.length);
			for (let i = 0; i < length; i++) {
				const element = a[i];
				let buffer;
				if (element instanceof Buffer) {
					buffer = element;
				} else if (ArrayBuffer.isView(element)) {
					buffer = Buffer.from(element.buffer, element.byteOffset, element.byteLength);
				} else if (element instanceof ArrayBuffer) {
					buffer = Buffer.from(element);
				} else if (element instanceof Blob) {
					buffer = element[BUFFER];
				} else {
					buffer = Buffer.from(typeof element === 'string' ? element : String(element));
				}
				size += buffer.length;
				buffers.push(buffer);
			}
		}

		this[BUFFER] = Buffer.concat(buffers);

		let type = options && options.type !== undefined && String(options.type).toLowerCase();
		if (type && !/[^\u0020-\u007E]/.test(type)) {
			this[TYPE] = type;
		}
	}
	get size() {
		return this[BUFFER].length;
	}
	get type() {
		return this[TYPE];
	}
	text() {
		return Promise.resolve(this[BUFFER].toString());
	}
	arrayBuffer() {
		const buf = this[BUFFER];
		const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		return Promise.resolve(ab);
	}
	stream() {
		const readable = new Readable();
		readable._read = function () {};
		readable.push(this[BUFFER]);
		readable.push(null);
		return readable;
	}
	toString() {
		return '[object Blob]';
	}
	slice() {
		const size = this.size;

		const start = arguments[0];
		const end = arguments[1];
		let relativeStart, relativeEnd;
		if (start === undefined) {
			relativeStart = 0;
		} else if (start < 0) {
			relativeStart = Math.max(size + start, 0);
		} else {
			relativeStart = Math.min(start, size);
		}
		if (end === undefined) {
			relativeEnd = size;
		} else if (end < 0) {
			relativeEnd = Math.max(size + end, 0);
		} else {
			relativeEnd = Math.min(end, size);
		}
		const span = Math.max(relativeEnd - relativeStart, 0);

		const buffer = this[BUFFER];
		const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
		const blob = new Blob([], { type: arguments[2] });
		blob[BUFFER] = slicedBuffer;
		return blob;
	}
}

Object.defineProperties(Blob.prototype, {
	size: { enumerable: true },
	type: { enumerable: true },
	slice: { enumerable: true }
});

Object.defineProperty(Blob.prototype, Symbol.toStringTag, {
	value: 'Blob',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * fetch-error.js
 *
 * FetchError interface for operational errors
 */

/**
 * Create FetchError instance
 *
 * @param   String      message      Error message for human
 * @param   String      type         Error type for machine
 * @param   String      systemError  For Node.js system error
 * @return  FetchError
 */
function FetchError(message, type, systemError) {
  Error.call(this, message);

  this.message = message;
  this.type = type;

  // when err.type is `system`, err.code contains system error code
  if (systemError) {
    this.code = this.errno = systemError.code;
  }

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = 'FetchError';

let convert;
try {
	convert = require('encoding').convert;
} catch (e) {}

const INTERNALS = Symbol('Body internals');

// fix an issue where "PassThrough" isn't a named export for node <10
const PassThrough = Stream.PassThrough;

/**
 * Body mixin
 *
 * Ref: https://fetch.spec.whatwg.org/#body
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
function Body(body) {
	var _this = this;

	var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
	    _ref$size = _ref.size;

	let size = _ref$size === undefined ? 0 : _ref$size;
	var _ref$timeout = _ref.timeout;
	let timeout = _ref$timeout === undefined ? 0 : _ref$timeout;

	if (body == null) {
		// body is undefined or null
		body = null;
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		body = Buffer.from(body.toString());
	} else if (isBlob(body)) ; else if (Buffer.isBuffer(body)) ; else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		body = Buffer.from(body);
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
	} else if (body instanceof Stream) ; else {
		// none of the above
		// coerce to string then buffer
		body = Buffer.from(String(body));
	}
	this[INTERNALS] = {
		body,
		disturbed: false,
		error: null
	};
	this.size = size;
	this.timeout = timeout;

	if (body instanceof Stream) {
		body.on('error', function (err) {
			const error = err.name === 'AbortError' ? err : new FetchError(`Invalid response body while trying to fetch ${_this.url}: ${err.message}`, 'system', err);
			_this[INTERNALS].error = error;
		});
	}
}

Body.prototype = {
	get body() {
		return this[INTERNALS].body;
	},

	get bodyUsed() {
		return this[INTERNALS].disturbed;
	},

	/**
  * Decode response as ArrayBuffer
  *
  * @return  Promise
  */
	arrayBuffer() {
		return consumeBody.call(this).then(function (buf) {
			return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
		});
	},

	/**
  * Return raw response as Blob
  *
  * @return Promise
  */
	blob() {
		let ct = this.headers && this.headers.get('content-type') || '';
		return consumeBody.call(this).then(function (buf) {
			return Object.assign(
			// Prevent copying
			new Blob([], {
				type: ct.toLowerCase()
			}), {
				[BUFFER]: buf
			});
		});
	},

	/**
  * Decode response as json
  *
  * @return  Promise
  */
	json() {
		var _this2 = this;

		return consumeBody.call(this).then(function (buffer) {
			try {
				return JSON.parse(buffer.toString());
			} catch (err) {
				return Body.Promise.reject(new FetchError(`invalid json response body at ${_this2.url} reason: ${err.message}`, 'invalid-json'));
			}
		});
	},

	/**
  * Decode response as text
  *
  * @return  Promise
  */
	text() {
		return consumeBody.call(this).then(function (buffer) {
			return buffer.toString();
		});
	},

	/**
  * Decode response as buffer (non-spec api)
  *
  * @return  Promise
  */
	buffer() {
		return consumeBody.call(this);
	},

	/**
  * Decode response as text, while automatically detecting the encoding and
  * trying to decode to UTF-8 (non-spec api)
  *
  * @return  Promise
  */
	textConverted() {
		var _this3 = this;

		return consumeBody.call(this).then(function (buffer) {
			return convertBody(buffer, _this3.headers);
		});
	}
};

// In browsers, all properties are enumerable.
Object.defineProperties(Body.prototype, {
	body: { enumerable: true },
	bodyUsed: { enumerable: true },
	arrayBuffer: { enumerable: true },
	blob: { enumerable: true },
	json: { enumerable: true },
	text: { enumerable: true }
});

Body.mixIn = function (proto) {
	for (const name of Object.getOwnPropertyNames(Body.prototype)) {
		// istanbul ignore else: future proof
		if (!(name in proto)) {
			const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
			Object.defineProperty(proto, name, desc);
		}
	}
};

/**
 * Consume and convert an entire Body to a Buffer.
 *
 * Ref: https://fetch.spec.whatwg.org/#concept-body-consume-body
 *
 * @return  Promise
 */
function consumeBody() {
	var _this4 = this;

	if (this[INTERNALS].disturbed) {
		return Body.Promise.reject(new TypeError(`body used already for: ${this.url}`));
	}

	this[INTERNALS].disturbed = true;

	if (this[INTERNALS].error) {
		return Body.Promise.reject(this[INTERNALS].error);
	}

	let body = this.body;

	// body is null
	if (body === null) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is blob
	if (isBlob(body)) {
		body = body.stream();
	}

	// body is buffer
	if (Buffer.isBuffer(body)) {
		return Body.Promise.resolve(body);
	}

	// istanbul ignore if: should never happen
	if (!(body instanceof Stream)) {
		return Body.Promise.resolve(Buffer.alloc(0));
	}

	// body is stream
	// get ready to actually consume the body
	let accum = [];
	let accumBytes = 0;
	let abort = false;

	return new Body.Promise(function (resolve, reject) {
		let resTimeout;

		// allow timeout on slow response body
		if (_this4.timeout) {
			resTimeout = setTimeout(function () {
				abort = true;
				reject(new FetchError(`Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`, 'body-timeout'));
			}, _this4.timeout);
		}

		// handle stream errors
		body.on('error', function (err) {
			if (err.name === 'AbortError') {
				// if the request was aborted, reject with this Error
				abort = true;
				reject(err);
			} else {
				// other errors, such as incorrect content-encoding
				reject(new FetchError(`Invalid response body while trying to fetch ${_this4.url}: ${err.message}`, 'system', err));
			}
		});

		body.on('data', function (chunk) {
			if (abort || chunk === null) {
				return;
			}

			if (_this4.size && accumBytes + chunk.length > _this4.size) {
				abort = true;
				reject(new FetchError(`content size at ${_this4.url} over limit: ${_this4.size}`, 'max-size'));
				return;
			}

			accumBytes += chunk.length;
			accum.push(chunk);
		});

		body.on('end', function () {
			if (abort) {
				return;
			}

			clearTimeout(resTimeout);

			try {
				resolve(Buffer.concat(accum, accumBytes));
			} catch (err) {
				// handle streams that have accumulated too much data (issue #414)
				reject(new FetchError(`Could not create Buffer from response body for ${_this4.url}: ${err.message}`, 'system', err));
			}
		});
	});
}

/**
 * Detect buffer encoding and convert to target encoding
 * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
 *
 * @param   Buffer  buffer    Incoming buffer
 * @param   String  encoding  Target encoding
 * @return  String
 */
function convertBody(buffer, headers) {
	if (typeof convert !== 'function') {
		throw new Error('The package `encoding` must be installed to use the textConverted() function');
	}

	const ct = headers.get('content-type');
	let charset = 'utf-8';
	let res, str;

	// header
	if (ct) {
		res = /charset=([^;]*)/i.exec(ct);
	}

	// no charset in content type, peek at response body for at most 1024 bytes
	str = buffer.slice(0, 1024).toString();

	// html5
	if (!res && str) {
		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
	}

	// html4
	if (!res && str) {
		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

		if (res) {
			res = /charset=(.*)/i.exec(res.pop());
		}
	}

	// xml
	if (!res && str) {
		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
	}

	// found charset
	if (res) {
		charset = res.pop();

		// prevent decode issues when sites use incorrect encoding
		// ref: https://hsivonen.fi/encoding-menu/
		if (charset === 'gb2312' || charset === 'gbk') {
			charset = 'gb18030';
		}
	}

	// turn raw buffers into a single utf-8 buffer
	return convert(buffer, 'UTF-8', charset).toString();
}

/**
 * Detect a URLSearchParams object
 * ref: https://github.com/bitinn/node-fetch/issues/296#issuecomment-307598143
 *
 * @param   Object  obj     Object to detect by type or brand
 * @return  String
 */
function isURLSearchParams(obj) {
	// Duck-typing as a necessary condition.
	if (typeof obj !== 'object' || typeof obj.append !== 'function' || typeof obj.delete !== 'function' || typeof obj.get !== 'function' || typeof obj.getAll !== 'function' || typeof obj.has !== 'function' || typeof obj.set !== 'function') {
		return false;
	}

	// Brand-checking and more duck-typing as optional condition.
	return obj.constructor.name === 'URLSearchParams' || Object.prototype.toString.call(obj) === '[object URLSearchParams]' || typeof obj.sort === 'function';
}

/**
 * Check if `obj` is a W3C `Blob` object (which `File` inherits from)
 * @param  {*} obj
 * @return {boolean}
 */
function isBlob(obj) {
	return typeof obj === 'object' && typeof obj.arrayBuffer === 'function' && typeof obj.type === 'string' && typeof obj.stream === 'function' && typeof obj.constructor === 'function' && typeof obj.constructor.name === 'string' && /^(Blob|File)$/.test(obj.constructor.name) && /^(Blob|File)$/.test(obj[Symbol.toStringTag]);
}

/**
 * Clone body given Res/Req instance
 *
 * @param   Mixed  instance  Response or Request instance
 * @return  Mixed
 */
function clone(instance) {
	let p1, p2;
	let body = instance.body;

	// don't allow cloning a used body
	if (instance.bodyUsed) {
		throw new Error('cannot clone body after it is used');
	}

	// check that body is a stream and not form-data object
	// note: we can't clone the form-data object without having it as a dependency
	if (body instanceof Stream && typeof body.getBoundary !== 'function') {
		// tee instance body
		p1 = new PassThrough();
		p2 = new PassThrough();
		body.pipe(p1);
		body.pipe(p2);
		// set instance body to teed body and return the other teed body
		instance[INTERNALS].body = p1;
		body = p2;
	}

	return body;
}

/**
 * Performs the operation "extract a `Content-Type` value from |object|" as
 * specified in the specification:
 * https://fetch.spec.whatwg.org/#concept-bodyinit-extract
 *
 * This function assumes that instance.body is present.
 *
 * @param   Mixed  instance  Any options.body input
 */
function extractContentType(body) {
	if (body === null) {
		// body is null
		return null;
	} else if (typeof body === 'string') {
		// body is string
		return 'text/plain;charset=UTF-8';
	} else if (isURLSearchParams(body)) {
		// body is a URLSearchParams
		return 'application/x-www-form-urlencoded;charset=UTF-8';
	} else if (isBlob(body)) {
		// body is blob
		return body.type || null;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return null;
	} else if (Object.prototype.toString.call(body) === '[object ArrayBuffer]') {
		// body is ArrayBuffer
		return null;
	} else if (ArrayBuffer.isView(body)) {
		// body is ArrayBufferView
		return null;
	} else if (typeof body.getBoundary === 'function') {
		// detect form data input from form-data module
		return `multipart/form-data;boundary=${body.getBoundary()}`;
	} else if (body instanceof Stream) {
		// body is stream
		// can't really do much about this
		return null;
	} else {
		// Body constructor defaults other things to string
		return 'text/plain;charset=UTF-8';
	}
}

/**
 * The Fetch Standard treats this as if "total bytes" is a property on the body.
 * For us, we have to explicitly get it with a function.
 *
 * ref: https://fetch.spec.whatwg.org/#concept-body-total-bytes
 *
 * @param   Body    instance   Instance of Body
 * @return  Number?            Number of bytes, or null if not possible
 */
function getTotalBytes(instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		return 0;
	} else if (isBlob(body)) {
		return body.size;
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		return body.length;
	} else if (body && typeof body.getLengthSync === 'function') {
		// detect form data input from form-data module
		if (body._lengthRetrievers && body._lengthRetrievers.length == 0 || // 1.x
		body.hasKnownLength && body.hasKnownLength()) {
			// 2.x
			return body.getLengthSync();
		}
		return null;
	} else {
		// body is stream
		return null;
	}
}

/**
 * Write a Body to a Node.js WritableStream (e.g. http.Request) object.
 *
 * @param   Body    instance   Instance of Body
 * @return  Void
 */
function writeToStream(dest, instance) {
	const body = instance.body;


	if (body === null) {
		// body is null
		dest.end();
	} else if (isBlob(body)) {
		body.stream().pipe(dest);
	} else if (Buffer.isBuffer(body)) {
		// body is buffer
		dest.write(body);
		dest.end();
	} else {
		// body is stream
		body.pipe(dest);
	}
}

// expose Promise
Body.Promise = global.Promise;

/**
 * headers.js
 *
 * Headers class offers convenient helpers
 */

const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;

function validateName(name) {
	name = `${name}`;
	if (invalidTokenRegex.test(name) || name === '') {
		throw new TypeError(`${name} is not a legal HTTP header name`);
	}
}

function validateValue(value) {
	value = `${value}`;
	if (invalidHeaderCharRegex.test(value)) {
		throw new TypeError(`${value} is not a legal HTTP header value`);
	}
}

/**
 * Find the key in the map object given a header name.
 *
 * Returns undefined if not found.
 *
 * @param   String  name  Header name
 * @return  String|Undefined
 */
function find(map, name) {
	name = name.toLowerCase();
	for (const key in map) {
		if (key.toLowerCase() === name) {
			return key;
		}
	}
	return undefined;
}

const MAP = Symbol('map');
class Headers {
	/**
  * Headers class
  *
  * @param   Object  headers  Response headers
  * @return  Void
  */
	constructor() {
		let init = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

		this[MAP] = Object.create(null);

		if (init instanceof Headers) {
			const rawHeaders = init.raw();
			const headerNames = Object.keys(rawHeaders);

			for (const headerName of headerNames) {
				for (const value of rawHeaders[headerName]) {
					this.append(headerName, value);
				}
			}

			return;
		}

		// We don't worry about converting prop to ByteString here as append()
		// will handle it.
		if (init == null) ; else if (typeof init === 'object') {
			const method = init[Symbol.iterator];
			if (method != null) {
				if (typeof method !== 'function') {
					throw new TypeError('Header pairs must be iterable');
				}

				// sequence<sequence<ByteString>>
				// Note: per spec we have to first exhaust the lists then process them
				const pairs = [];
				for (const pair of init) {
					if (typeof pair !== 'object' || typeof pair[Symbol.iterator] !== 'function') {
						throw new TypeError('Each header pair must be iterable');
					}
					pairs.push(Array.from(pair));
				}

				for (const pair of pairs) {
					if (pair.length !== 2) {
						throw new TypeError('Each header pair must be a name/value tuple');
					}
					this.append(pair[0], pair[1]);
				}
			} else {
				// record<ByteString, ByteString>
				for (const key of Object.keys(init)) {
					const value = init[key];
					this.append(key, value);
				}
			}
		} else {
			throw new TypeError('Provided initializer must be an object');
		}
	}

	/**
  * Return combined header value given name
  *
  * @param   String  name  Header name
  * @return  Mixed
  */
	get(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key === undefined) {
			return null;
		}

		return this[MAP][key].join(', ');
	}

	/**
  * Iterate over all headers
  *
  * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
  * @param   Boolean   thisArg   `this` context for callback function
  * @return  Void
  */
	forEach(callback) {
		let thisArg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;

		let pairs = getHeaders(this);
		let i = 0;
		while (i < pairs.length) {
			var _pairs$i = pairs[i];
			const name = _pairs$i[0],
			      value = _pairs$i[1];

			callback.call(thisArg, value, name, this);
			pairs = getHeaders(this);
			i++;
		}
	}

	/**
  * Overwrite header values given name
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	set(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		this[MAP][key !== undefined ? key : name] = [value];
	}

	/**
  * Append a value onto existing header
  *
  * @param   String  name   Header name
  * @param   String  value  Header value
  * @return  Void
  */
	append(name, value) {
		name = `${name}`;
		value = `${value}`;
		validateName(name);
		validateValue(value);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			this[MAP][key].push(value);
		} else {
			this[MAP][name] = [value];
		}
	}

	/**
  * Check for header name existence
  *
  * @param   String   name  Header name
  * @return  Boolean
  */
	has(name) {
		name = `${name}`;
		validateName(name);
		return find(this[MAP], name) !== undefined;
	}

	/**
  * Delete all header values given name
  *
  * @param   String  name  Header name
  * @return  Void
  */
	delete(name) {
		name = `${name}`;
		validateName(name);
		const key = find(this[MAP], name);
		if (key !== undefined) {
			delete this[MAP][key];
		}
	}

	/**
  * Return raw headers (non-spec api)
  *
  * @return  Object
  */
	raw() {
		return this[MAP];
	}

	/**
  * Get an iterator on keys.
  *
  * @return  Iterator
  */
	keys() {
		return createHeadersIterator(this, 'key');
	}

	/**
  * Get an iterator on values.
  *
  * @return  Iterator
  */
	values() {
		return createHeadersIterator(this, 'value');
	}

	/**
  * Get an iterator on entries.
  *
  * This is the default iterator of the Headers object.
  *
  * @return  Iterator
  */
	[Symbol.iterator]() {
		return createHeadersIterator(this, 'key+value');
	}
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];

Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
	value: 'Headers',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Headers.prototype, {
	get: { enumerable: true },
	forEach: { enumerable: true },
	set: { enumerable: true },
	append: { enumerable: true },
	has: { enumerable: true },
	delete: { enumerable: true },
	keys: { enumerable: true },
	values: { enumerable: true },
	entries: { enumerable: true }
});

function getHeaders(headers) {
	let kind = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'key+value';

	const keys = Object.keys(headers[MAP]).sort();
	return keys.map(kind === 'key' ? function (k) {
		return k.toLowerCase();
	} : kind === 'value' ? function (k) {
		return headers[MAP][k].join(', ');
	} : function (k) {
		return [k.toLowerCase(), headers[MAP][k].join(', ')];
	});
}

const INTERNAL = Symbol('internal');

function createHeadersIterator(target, kind) {
	const iterator = Object.create(HeadersIteratorPrototype);
	iterator[INTERNAL] = {
		target,
		kind,
		index: 0
	};
	return iterator;
}

const HeadersIteratorPrototype = Object.setPrototypeOf({
	next() {
		// istanbul ignore if
		if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
			throw new TypeError('Value of `this` is not a HeadersIterator');
		}

		var _INTERNAL = this[INTERNAL];
		const target = _INTERNAL.target,
		      kind = _INTERNAL.kind,
		      index = _INTERNAL.index;

		const values = getHeaders(target, kind);
		const len = values.length;
		if (index >= len) {
			return {
				value: undefined,
				done: true
			};
		}

		this[INTERNAL].index = index + 1;

		return {
			value: values[index],
			done: false
		};
	}
}, Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]())));

Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
	value: 'HeadersIterator',
	writable: false,
	enumerable: false,
	configurable: true
});

/**
 * Export the Headers object in a form that Node.js can consume.
 *
 * @param   Headers  headers
 * @return  Object
 */
function exportNodeCompatibleHeaders(headers) {
	const obj = Object.assign({ __proto__: null }, headers[MAP]);

	// http.request() only supports string as Host header. This hack makes
	// specifying custom Host header possible.
	const hostHeaderKey = find(headers[MAP], 'Host');
	if (hostHeaderKey !== undefined) {
		obj[hostHeaderKey] = obj[hostHeaderKey][0];
	}

	return obj;
}

/**
 * Create a Headers object from an object of headers, ignoring those that do
 * not conform to HTTP grammar productions.
 *
 * @param   Object  obj  Object of headers
 * @return  Headers
 */
function createHeadersLenient(obj) {
	const headers = new Headers();
	for (const name of Object.keys(obj)) {
		if (invalidTokenRegex.test(name)) {
			continue;
		}
		if (Array.isArray(obj[name])) {
			for (const val of obj[name]) {
				if (invalidHeaderCharRegex.test(val)) {
					continue;
				}
				if (headers[MAP][name] === undefined) {
					headers[MAP][name] = [val];
				} else {
					headers[MAP][name].push(val);
				}
			}
		} else if (!invalidHeaderCharRegex.test(obj[name])) {
			headers[MAP][name] = [obj[name]];
		}
	}
	return headers;
}

const INTERNALS$1 = Symbol('Response internals');

// fix an issue where "STATUS_CODES" aren't a named export for node <10
const STATUS_CODES = http.STATUS_CODES;

/**
 * Response class
 *
 * @param   Stream  body  Readable stream
 * @param   Object  opts  Response options
 * @return  Void
 */
class Response {
	constructor() {
		let body = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		let opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		Body.call(this, body, opts);

		const status = opts.status || 200;
		const headers = new Headers(opts.headers);

		if (body != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(body);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		this[INTERNALS$1] = {
			url: opts.url,
			status,
			statusText: opts.statusText || STATUS_CODES[status],
			headers,
			counter: opts.counter
		};
	}

	get url() {
		return this[INTERNALS$1].url || '';
	}

	get status() {
		return this[INTERNALS$1].status;
	}

	/**
  * Convenience property representing if the request ended normally
  */
	get ok() {
		return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
	}

	get redirected() {
		return this[INTERNALS$1].counter > 0;
	}

	get statusText() {
		return this[INTERNALS$1].statusText;
	}

	get headers() {
		return this[INTERNALS$1].headers;
	}

	/**
  * Clone this response
  *
  * @return  Response
  */
	clone() {
		return new Response(clone(this), {
			url: this.url,
			status: this.status,
			statusText: this.statusText,
			headers: this.headers,
			ok: this.ok,
			redirected: this.redirected
		});
	}
}

Body.mixIn(Response.prototype);

Object.defineProperties(Response.prototype, {
	url: { enumerable: true },
	status: { enumerable: true },
	ok: { enumerable: true },
	redirected: { enumerable: true },
	statusText: { enumerable: true },
	headers: { enumerable: true },
	clone: { enumerable: true }
});

Object.defineProperty(Response.prototype, Symbol.toStringTag, {
	value: 'Response',
	writable: false,
	enumerable: false,
	configurable: true
});

const INTERNALS$2 = Symbol('Request internals');

// fix an issue where "format", "parse" aren't a named export for node <10
const parse_url = Url.parse;
const format_url = Url.format;

const streamDestructionSupported = 'destroy' in Stream.Readable.prototype;

/**
 * Check if a value is an instance of Request.
 *
 * @param   Mixed   input
 * @return  Boolean
 */
function isRequest(input) {
	return typeof input === 'object' && typeof input[INTERNALS$2] === 'object';
}

function isAbortSignal(signal) {
	const proto = signal && typeof signal === 'object' && Object.getPrototypeOf(signal);
	return !!(proto && proto.constructor.name === 'AbortSignal');
}

/**
 * Request class
 *
 * @param   Mixed   input  Url or Request instance
 * @param   Object  init   Custom options
 * @return  Void
 */
class Request {
	constructor(input) {
		let init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		let parsedURL;

		// normalize input
		if (!isRequest(input)) {
			if (input && input.href) {
				// in order to support Node.js' Url objects; though WHATWG's URL objects
				// will fall into this branch also (since their `toString()` will return
				// `href` property anyway)
				parsedURL = parse_url(input.href);
			} else {
				// coerce input to a string before attempting to parse
				parsedURL = parse_url(`${input}`);
			}
			input = {};
		} else {
			parsedURL = parse_url(input.url);
		}

		let method = init.method || input.method || 'GET';
		method = method.toUpperCase();

		if ((init.body != null || isRequest(input) && input.body !== null) && (method === 'GET' || method === 'HEAD')) {
			throw new TypeError('Request with GET/HEAD method cannot have body');
		}

		let inputBody = init.body != null ? init.body : isRequest(input) && input.body !== null ? clone(input) : null;

		Body.call(this, inputBody, {
			timeout: init.timeout || input.timeout || 0,
			size: init.size || input.size || 0
		});

		const headers = new Headers(init.headers || input.headers || {});

		if (inputBody != null && !headers.has('Content-Type')) {
			const contentType = extractContentType(inputBody);
			if (contentType) {
				headers.append('Content-Type', contentType);
			}
		}

		let signal = isRequest(input) ? input.signal : null;
		if ('signal' in init) signal = init.signal;

		if (signal != null && !isAbortSignal(signal)) {
			throw new TypeError('Expected signal to be an instanceof AbortSignal');
		}

		this[INTERNALS$2] = {
			method,
			redirect: init.redirect || input.redirect || 'follow',
			headers,
			parsedURL,
			signal
		};

		// node-fetch-only options
		this.follow = init.follow !== undefined ? init.follow : input.follow !== undefined ? input.follow : 20;
		this.compress = init.compress !== undefined ? init.compress : input.compress !== undefined ? input.compress : true;
		this.counter = init.counter || input.counter || 0;
		this.agent = init.agent || input.agent;
	}

	get method() {
		return this[INTERNALS$2].method;
	}

	get url() {
		return format_url(this[INTERNALS$2].parsedURL);
	}

	get headers() {
		return this[INTERNALS$2].headers;
	}

	get redirect() {
		return this[INTERNALS$2].redirect;
	}

	get signal() {
		return this[INTERNALS$2].signal;
	}

	/**
  * Clone this request
  *
  * @return  Request
  */
	clone() {
		return new Request(this);
	}
}

Body.mixIn(Request.prototype);

Object.defineProperty(Request.prototype, Symbol.toStringTag, {
	value: 'Request',
	writable: false,
	enumerable: false,
	configurable: true
});

Object.defineProperties(Request.prototype, {
	method: { enumerable: true },
	url: { enumerable: true },
	headers: { enumerable: true },
	redirect: { enumerable: true },
	clone: { enumerable: true },
	signal: { enumerable: true }
});

/**
 * Convert a Request to Node.js http request options.
 *
 * @param   Request  A Request instance
 * @return  Object   The options object to be passed to http.request
 */
function getNodeRequestOptions(request) {
	const parsedURL = request[INTERNALS$2].parsedURL;
	const headers = new Headers(request[INTERNALS$2].headers);

	// fetch step 1.3
	if (!headers.has('Accept')) {
		headers.set('Accept', '*/*');
	}

	// Basic fetch
	if (!parsedURL.protocol || !parsedURL.hostname) {
		throw new TypeError('Only absolute URLs are supported');
	}

	if (!/^https?:$/.test(parsedURL.protocol)) {
		throw new TypeError('Only HTTP(S) protocols are supported');
	}

	if (request.signal && request.body instanceof Stream.Readable && !streamDestructionSupported) {
		throw new Error('Cancellation of streamed requests with AbortSignal is not supported in node < 8');
	}

	// HTTP-network-or-cache fetch steps 2.4-2.7
	let contentLengthValue = null;
	if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
		contentLengthValue = '0';
	}
	if (request.body != null) {
		const totalBytes = getTotalBytes(request);
		if (typeof totalBytes === 'number') {
			contentLengthValue = String(totalBytes);
		}
	}
	if (contentLengthValue) {
		headers.set('Content-Length', contentLengthValue);
	}

	// HTTP-network-or-cache fetch step 2.11
	if (!headers.has('User-Agent')) {
		headers.set('User-Agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
	}

	// HTTP-network-or-cache fetch step 2.15
	if (request.compress && !headers.has('Accept-Encoding')) {
		headers.set('Accept-Encoding', 'gzip,deflate');
	}

	let agent = request.agent;
	if (typeof agent === 'function') {
		agent = agent(parsedURL);
	}

	if (!headers.has('Connection') && !agent) {
		headers.set('Connection', 'close');
	}

	// HTTP-network fetch step 4.2
	// chunked encoding is handled by Node.js

	return Object.assign({}, parsedURL, {
		method: request.method,
		headers: exportNodeCompatibleHeaders(headers),
		agent
	});
}

/**
 * abort-error.js
 *
 * AbortError interface for cancelled requests
 */

/**
 * Create AbortError instance
 *
 * @param   String      message      Error message for human
 * @return  AbortError
 */
function AbortError(message) {
  Error.call(this, message);

  this.type = 'aborted';
  this.message = message;

  // hide custom error implementation details from end-users
  Error.captureStackTrace(this, this.constructor);
}

AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = 'AbortError';

// fix an issue where "PassThrough", "resolve" aren't a named export for node <10
const PassThrough$1 = Stream.PassThrough;
const resolve_url = Url.resolve;

/**
 * Fetch function
 *
 * @param   Mixed    url   Absolute url or Request instance
 * @param   Object   opts  Fetch options
 * @return  Promise
 */
function fetch(url, opts) {

	// allow custom promise
	if (!fetch.Promise) {
		throw new Error('native promise missing, set fetch.Promise to your favorite alternative');
	}

	Body.Promise = fetch.Promise;

	// wrap http.request into fetch
	return new fetch.Promise(function (resolve, reject) {
		// build request object
		const request = new Request(url, opts);
		const options = getNodeRequestOptions(request);

		const send = (options.protocol === 'https:' ? https : http).request;
		const signal = request.signal;

		let response = null;

		const abort = function abort() {
			let error = new AbortError('The user aborted a request.');
			reject(error);
			if (request.body && request.body instanceof Stream.Readable) {
				request.body.destroy(error);
			}
			if (!response || !response.body) return;
			response.body.emit('error', error);
		};

		if (signal && signal.aborted) {
			abort();
			return;
		}

		const abortAndFinalize = function abortAndFinalize() {
			abort();
			finalize();
		};

		// send request
		const req = send(options);
		let reqTimeout;

		if (signal) {
			signal.addEventListener('abort', abortAndFinalize);
		}

		function finalize() {
			req.abort();
			if (signal) signal.removeEventListener('abort', abortAndFinalize);
			clearTimeout(reqTimeout);
		}

		if (request.timeout) {
			req.once('socket', function (socket) {
				reqTimeout = setTimeout(function () {
					reject(new FetchError(`network timeout at: ${request.url}`, 'request-timeout'));
					finalize();
				}, request.timeout);
			});
		}

		req.on('error', function (err) {
			reject(new FetchError(`request to ${request.url} failed, reason: ${err.message}`, 'system', err));
			finalize();
		});

		req.on('response', function (res) {
			clearTimeout(reqTimeout);

			const headers = createHeadersLenient(res.headers);

			// HTTP fetch step 5
			if (fetch.isRedirect(res.statusCode)) {
				// HTTP fetch step 5.2
				const location = headers.get('Location');

				// HTTP fetch step 5.3
				const locationURL = location === null ? null : resolve_url(request.url, location);

				// HTTP fetch step 5.5
				switch (request.redirect) {
					case 'error':
						reject(new FetchError(`redirect mode is set to error: ${request.url}`, 'no-redirect'));
						finalize();
						return;
					case 'manual':
						// node-fetch-specific step: make manual redirect a bit easier to use by setting the Location header value to the resolved URL.
						if (locationURL !== null) {
							// handle corrupted header
							try {
								headers.set('Location', locationURL);
							} catch (err) {
								// istanbul ignore next: nodejs server prevent invalid response headers, we can't test this through normal request
								reject(err);
							}
						}
						break;
					case 'follow':
						// HTTP-redirect fetch step 2
						if (locationURL === null) {
							break;
						}

						// HTTP-redirect fetch step 5
						if (request.counter >= request.follow) {
							reject(new FetchError(`maximum redirect reached at: ${request.url}`, 'max-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 6 (counter increment)
						// Create a new Request object.
						const requestOpts = {
							headers: new Headers(request.headers),
							follow: request.follow,
							counter: request.counter + 1,
							agent: request.agent,
							compress: request.compress,
							method: request.method,
							body: request.body,
							signal: request.signal,
							timeout: request.timeout
						};

						// HTTP-redirect fetch step 9
						if (res.statusCode !== 303 && request.body && getTotalBytes(request) === null) {
							reject(new FetchError('Cannot follow redirect with body being a readable stream', 'unsupported-redirect'));
							finalize();
							return;
						}

						// HTTP-redirect fetch step 11
						if (res.statusCode === 303 || (res.statusCode === 301 || res.statusCode === 302) && request.method === 'POST') {
							requestOpts.method = 'GET';
							requestOpts.body = undefined;
							requestOpts.headers.delete('content-length');
						}

						// HTTP-redirect fetch step 15
						resolve(fetch(new Request(locationURL, requestOpts)));
						finalize();
						return;
				}
			}

			// prepare response
			res.once('end', function () {
				if (signal) signal.removeEventListener('abort', abortAndFinalize);
			});
			let body = res.pipe(new PassThrough$1());

			const response_options = {
				url: request.url,
				status: res.statusCode,
				statusText: res.statusMessage,
				headers: headers,
				size: request.size,
				timeout: request.timeout,
				counter: request.counter
			};

			// HTTP-network fetch step 12.1.1.3
			const codings = headers.get('Content-Encoding');

			// HTTP-network fetch step 12.1.1.4: handle content codings

			// in following scenarios we ignore compression support
			// 1. compression support is disabled
			// 2. HEAD request
			// 3. no Content-Encoding header
			// 4. no content response (204)
			// 5. content not modified response (304)
			if (!request.compress || request.method === 'HEAD' || codings === null || res.statusCode === 204 || res.statusCode === 304) {
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// For Node v6+
			// Be less strict when decoding compressed responses, since sometimes
			// servers send slightly invalid responses that are still accepted
			// by common browsers.
			// Always using Z_SYNC_FLUSH is what cURL does.
			const zlibOptions = {
				flush: zlib.Z_SYNC_FLUSH,
				finishFlush: zlib.Z_SYNC_FLUSH
			};

			// for gzip
			if (codings == 'gzip' || codings == 'x-gzip') {
				body = body.pipe(zlib.createGunzip(zlibOptions));
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// for deflate
			if (codings == 'deflate' || codings == 'x-deflate') {
				// handle the infamous raw deflate response from old servers
				// a hack for old IIS and Apache servers
				const raw = res.pipe(new PassThrough$1());
				raw.once('data', function (chunk) {
					// see http://stackoverflow.com/questions/37519828
					if ((chunk[0] & 0x0F) === 0x08) {
						body = body.pipe(zlib.createInflate());
					} else {
						body = body.pipe(zlib.createInflateRaw());
					}
					response = new Response(body, response_options);
					resolve(response);
				});
				return;
			}

			// for br
			if (codings == 'br' && typeof zlib.createBrotliDecompress === 'function') {
				body = body.pipe(zlib.createBrotliDecompress());
				response = new Response(body, response_options);
				resolve(response);
				return;
			}

			// otherwise, use response as-is
			response = new Response(body, response_options);
			resolve(response);
		});

		writeToStream(req, request);
	});
}
/**
 * Redirect code matching
 *
 * @param   Number   code  Status code
 * @return  Boolean
 */
fetch.isRedirect = function (code) {
	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
};

// expose Promise
fetch.Promise = global.Promise;

function get_page_handler(
	manifest,
	session_getter
) {
	const get_build_info =  () => JSON.parse(fs.readFileSync(path.join(build_dir, 'build.json'), 'utf-8'))
		;

	const template =  () => read_template(src_dir)
		;

	const has_service_worker = fs.existsSync(path.join(build_dir, 'service-worker.js'));

	const { server_routes, pages } = manifest;
	const error_route = manifest.error;

	function bail(req, res, err) {
		console.error(err);

		const message =  escape_html(err.message) ;

		res.statusCode = 500;
		res.end(`<pre>${message}</pre>`);
	}

	function handle_error(req, res, statusCode, error) {
		handle_page({
			pattern: null,
			parts: [
				{ name: null, component: error_route }
			]
		}, req, res, statusCode, error || new Error('Unknown error in preload function'));
	}

	async function handle_page(page, req, res, status = 200, error = null) {
		const is_service_worker_index = req.path === '/service-worker-index.html';
		const build_info




 = get_build_info();

		res.setHeader('Content-Type', 'text/html');
		res.setHeader('Cache-Control',  'no-cache' );

		// preload main.js and current route
		// TODO detect other stuff we can preload? images, CSS, fonts?
		let preloaded_chunks = Array.isArray(build_info.assets.main) ? build_info.assets.main : [build_info.assets.main];
		if (!error && !is_service_worker_index) {
			page.parts.forEach(part => {
				if (!part) return;

				// using concat because it could be a string or an array. thanks webpack!
				preloaded_chunks = preloaded_chunks.concat(build_info.assets[part.name]);
			});
		}

		if (build_info.bundler === 'rollup') {
			// TODO add dependencies and CSS
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map(file => `<${req.baseUrl}/client/${file}>;rel="modulepreload"`)
				.join(', ');

			res.setHeader('Link', link);
		} else {
			const link = preloaded_chunks
				.filter(file => file && !file.match(/\.map$/))
				.map((file) => {
					const as = /\.css$/.test(file) ? 'style' : 'script';
					return `<${req.baseUrl}/client/${file}>;rel="preload";as="${as}"`;
				})
				.join(', ');

			res.setHeader('Link', link);
		}

		let session;
		try {
			session = await session_getter(req, res);
		} catch (err) {
			return bail(req, res, err);
		}

		let redirect;
		let preload_error;

		const preload_context = {
			redirect: (statusCode, location) => {
				if (redirect && (redirect.statusCode !== statusCode || redirect.location !== location)) {
					throw new Error(`Conflicting redirects`);
				}
				location = location.replace(/^\//g, ''); // leading slash (only)
				redirect = { statusCode, location };
			},
			error: (statusCode, message) => {
				preload_error = { statusCode, message };
			},
			fetch: (url, opts) => {
				const parsed = new Url.URL(url, `http://127.0.0.1:${process.env.PORT}${req.baseUrl ? req.baseUrl + '/' :''}`);

				opts = Object.assign({}, opts);

				const include_credentials = (
					opts.credentials === 'include' ||
					opts.credentials !== 'omit' && parsed.origin === `http://127.0.0.1:${process.env.PORT}`
				);

				if (include_credentials) {
					opts.headers = Object.assign({}, opts.headers);

					const cookies = Object.assign(
						{},
						cookie.parse(req.headers.cookie || ''),
						cookie.parse(opts.headers.cookie || '')
					);

					const set_cookie = res.getHeader('Set-Cookie');
					(Array.isArray(set_cookie) ? set_cookie : [set_cookie]).forEach(str => {
						const match = /([^=]+)=([^;]+)/.exec(str);
						if (match) cookies[match[1]] = match[2];
					});

					const str = Object.keys(cookies)
						.map(key => `${key}=${cookies[key]}`)
						.join('; ');

					opts.headers.cookie = str;

					if (!opts.headers.authorization && req.headers.authorization) {
						opts.headers.authorization = req.headers.authorization;
					}
				}

				return fetch(parsed.href, opts);
			}
		};

		let preloaded;
		let match;
		let params;

		try {
			const root_preloaded = manifest.root_preload
				? manifest.root_preload.call(preload_context, {
					host: req.headers.host,
					path: req.path,
					query: req.query,
					params: {}
				}, session)
				: {};

			match = error ? null : page.pattern.exec(req.path);


			let toPreload = [root_preloaded];
			if (!is_service_worker_index) {
				toPreload = toPreload.concat(page.parts.map(part => {
					if (!part) return null;

					// the deepest level is used below, to initialise the store
					params = part.params ? part.params(match) : {};

					return part.preload
						? part.preload.call(preload_context, {
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}, session)
						: {};
				}));
			}

			preloaded = await Promise.all(toPreload);
		} catch (err) {
			if (error) {
				return bail(req, res, err)
			}

			preload_error = { statusCode: 500, message: err };
			preloaded = []; // appease TypeScript
		}

		try {
			if (redirect) {
				const location = Url.resolve((req.baseUrl || '') + '/', redirect.location);

				res.statusCode = redirect.statusCode;
				res.setHeader('Location', location);
				res.end();

				return;
			}

			if (preload_error) {
				handle_error(req, res, preload_error.statusCode, preload_error.message);
				return;
			}

			const segments = req.path.split('/').filter(Boolean);

			// TODO make this less confusing
			const layout_segments = [segments[0]];
			let l = 1;

			page.parts.forEach((part, i) => {
				layout_segments[l] = segments[i + 1];
				if (!part) return null;
				l++;
			});

			const props = {
				stores: {
					page: {
						subscribe: writable({
							host: req.headers.host,
							path: req.path,
							query: req.query,
							params
						}).subscribe
					},
					preloading: {
						subscribe: writable(null).subscribe
					},
					session: writable(session)
				},
				segments: layout_segments,
				status: error ? status : 200,
				error: error ? error instanceof Error ? error : { message: error } : null,
				level0: {
					props: preloaded[0]
				},
				level1: {
					segment: segments[0],
					props: {}
				}
			};

			if (!is_service_worker_index) {
				let l = 1;
				for (let i = 0; i < page.parts.length; i += 1) {
					const part = page.parts[i];
					if (!part) continue;

					props[`level${l++}`] = {
						component: part.component,
						props: preloaded[i + 1] || {},
						segment: segments[i]
					};
				}
			}

			const { html, head, css } = App.render(props);

			const serialized = {
				preloaded: `[${preloaded.map(data => try_serialize(data)).join(',')}]`,
				session: session && try_serialize(session, err => {
					throw new Error(`Failed to serialize session data: ${err.message}`);
				}),
				error: error && serialize_error(props.error)
			};

			let script = `__SAPPER__={${[
				error && `error:${serialized.error},status:${status}`,
				`baseUrl:"${req.baseUrl}"`,
				serialized.preloaded && `preloaded:${serialized.preloaded}`,
				serialized.session && `session:${serialized.session}`
			].filter(Boolean).join(',')}};`;

			if (has_service_worker) {
				script += `if('serviceWorker' in navigator)navigator.serviceWorker.register('${req.baseUrl}/service-worker.js');`;
			}

			const file = [].concat(build_info.assets.main).filter(file => file && /\.js$/.test(file))[0];
			const main = `${req.baseUrl}/client/${file}`;

			if (build_info.bundler === 'rollup') {
				if (build_info.legacy_assets) {
					const legacy_main = `${req.baseUrl}/client/legacy/${build_info.legacy_assets.main}`;
					script += `(function(){try{eval("async function x(){}");var main="${main}"}catch(e){main="${legacy_main}"};var s=document.createElement("script");try{new Function("if(0)import('')")();s.src=main;s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main",main);}document.head.appendChild(s);}());`;
				} else {
					script += `var s=document.createElement("script");try{new Function("if(0)import('')")();s.src="${main}";s.type="module";s.crossOrigin="use-credentials";}catch(e){s.src="${req.baseUrl}/client/shimport@${build_info.shimport}.js";s.setAttribute("data-main","${main}")}document.head.appendChild(s)`;
				}
			} else {
				script += `</script><script src="${main}">`;
			}

			let styles;

			// TODO make this consistent across apps
			// TODO embed build_info in placeholder.ts
			if (build_info.css && build_info.css.main) {
				const css_chunks = new Set();
				if (build_info.css.main) css_chunks.add(build_info.css.main);
				page.parts.forEach(part => {
					if (!part) return;
					const css_chunks_for_part = build_info.css.chunks[part.file];

					if (css_chunks_for_part) {
						css_chunks_for_part.forEach(file => {
							css_chunks.add(file);
						});
					}
				});

				styles = Array.from(css_chunks)
					.map(href => `<link rel="stylesheet" href="client/${href}">`)
					.join('');
			} else {
				styles = (css && css.code ? `<style>${css.code}</style>` : '');
			}

			// users can set a CSP nonce using res.locals.nonce
			const nonce_attr = (res.locals && res.locals.nonce) ? ` nonce="${res.locals.nonce}"` : '';

			const body = template()
				.replace('%sapper.base%', () => `<base href="${req.baseUrl}/">`)
				.replace('%sapper.scripts%', () => `<script${nonce_attr}>${script}</script>`)
				.replace('%sapper.html%', () => html)
				.replace('%sapper.head%', () => `<noscript id='sapper-head-start'></noscript>${head}<noscript id='sapper-head-end'></noscript>`)
				.replace('%sapper.styles%', () => styles);

			res.statusCode = status;
			res.end(body);
		} catch(err) {
			if (error) {
				bail(req, res, err);
			} else {
				handle_error(req, res, 500, err);
			}
		}
	}

	return function find_route(req, res, next) {
		if (req.path === '/service-worker-index.html') {
			const homePage = pages.find(page => page.pattern.test('/'));
			handle_page(homePage, req, res);
			return;
		}

		for (const page of pages) {
			if (page.pattern.test(req.path)) {
				handle_page(page, req, res);
				return;
			}
		}

		handle_error(req, res, 404, 'Not found');
	};
}

function read_template(dir = build_dir) {
	return fs.readFileSync(`${dir}/template.html`, 'utf-8');
}

function try_serialize(data, fail) {
	try {
		return devalue(data);
	} catch (err) {
		if (fail) fail(err);
		return null;
	}
}

// Ensure we return something truthy so the client will not re-render the page over the error
function serialize_error(error) {
	if (!error) return null;
	let serialized = try_serialize(error);
	if (!serialized) {
		const { name, message, stack } = error ;
		serialized = try_serialize({ name, message, stack });
	}
	if (!serialized) {
		serialized = '{}';
	}
	return serialized;
}

function escape_html(html) {
	const chars = {
		'"' : 'quot',
		"'": '#39',
		'&': 'amp',
		'<' : 'lt',
		'>' : 'gt'
	};

	return html.replace(/["'&<>]/g, c => `&${chars[c]};`);
}

function middleware(opts


 = {}) {
	const { session, ignore } = opts;

	let emitted_basepath = false;

	return compose_handlers(ignore, [
		(req, res, next) => {
			if (req.baseUrl === undefined) {
				let { originalUrl } = req;
				if (req.url === '/' && originalUrl[originalUrl.length - 1] !== '/') {
					originalUrl += '/';
				}

				req.baseUrl = originalUrl
					? originalUrl.slice(0, -req.url.length)
					: '';
			}

			if (!emitted_basepath && process.send) {
				process.send({
					__sapper__: true,
					event: 'basepath',
					basepath: req.baseUrl
				});

				emitted_basepath = true;
			}

			if (req.path === undefined) {
				req.path = req.url.replace(/\?.*/, '');
			}

			next();
		},

		fs.existsSync(path.join(build_dir, 'service-worker.js')) && serve({
			pathname: '/service-worker.js',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		fs.existsSync(path.join(build_dir, 'service-worker.js.map')) && serve({
			pathname: '/service-worker.js.map',
			cache_control: 'no-cache, no-store, must-revalidate'
		}),

		serve({
			prefix: '/client/',
			cache_control:  'no-cache' 
		}),

		get_server_route_handler(manifest.server_routes),

		get_page_handler(manifest, session || noop$1)
	].filter(Boolean));
}

function compose_handlers(ignore, handlers) {
	const total = handlers.length;

	function nth_handler(n, req, res, next) {
		if (n >= total) {
			return next();
		}

		handlers[n](req, res, () => nth_handler(n+1, req, res, next));
	}

	return !ignore
		? (req, res, next) => nth_handler(0, req, res, next)
		: (req, res, next) => {
			if (should_ignore(req.path, ignore)) {
				next();
			} else {
				nth_handler(0, req, res, next);
			}
		};
}

function should_ignore(uri, val) {
	if (Array.isArray(val)) return val.some(x => should_ignore(uri, x));
	if (val instanceof RegExp) return val.test(uri);
	if (typeof val === 'function') return val(uri);
	return uri.startsWith(val.charCodeAt(0) === 47 ? val : `/${val}`);
}

function serve({ prefix, pathname, cache_control }



) {
	const filter = pathname
		? (req) => req.path === pathname
		: (req) => req.path.startsWith(prefix);

	const read =  (file) => fs.readFileSync(path.join(build_dir, file))
		;

	return (req, res, next) => {
		if (filter(req)) {
			const type = lite.getType(req.path);

			try {
				const file = path.posix.normalize(decodeURIComponent(req.path));
				const data = read(file);

				res.setHeader('Content-Type', type);
				res.setHeader('Cache-Control', cache_control);
				res.end(data);
			} catch (err) {
				res.statusCode = 404;
				res.end('not found');
			}
		} else {
			next();
		}
	};
}

function noop$1(){}

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvX3Bvc3RzLmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9ibG9nL2luZGV4Lmpzb24uanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvW3NsdWddLmpzb24uanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL2ludGVybmFsL2luZGV4Lm1qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdmVsdGUvZWFzaW5nL2luZGV4Lm1qcyIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguc3ZlbHRlIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N2ZWx0ZS9zdG9yZS9pbmRleC5tanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3ZlbHRlL21vdGlvbi9pbmRleC5tanMiLCIuLi8uLi8uLi9zcmMvc3RvcmUuanMiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9jb21wbGV0ZS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9WaWQuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQnRuLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0JhY2suc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcTEuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcTIuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvcTMuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvRGV0ZWN0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3E0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3E1LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3E2LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3E3LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3E4LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NoZWNrMS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9jaGVjazIuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY2hlY2szLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NoZWNrLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NvbXBsZXRpb24uc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9xdWl6bWFpbi5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL3Jldmlldy5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2Jsb2cvaW5kZXguc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9ibG9nL1tzbHVnXS5zdmVsdGUiLCIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9OYXYuc3ZlbHRlIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9pbnRlcm5hbC9tYW5pZmVzdC1zZXJ2ZXIubWpzIiwiLi4vLi4vLi4vc3JjL25vZGVfbW9kdWxlcy9Ac2FwcGVyL2ludGVybmFsL3NoYXJlZC5tanMiLCIuLi8uLi8uLi9zcmMvbm9kZV9tb2R1bGVzL0BzYXBwZXIvaW50ZXJuYWwvQXBwLnN2ZWx0ZSIsIi4uLy4uLy4uL3NyYy9ub2RlX21vZHVsZXMvQHNhcHBlci9zZXJ2ZXIubWpzIiwiLi4vLi4vLi4vc3JjL3NlcnZlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBPcmRpbmFyaWx5LCB5b3UnZCBnZW5lcmF0ZSB0aGlzIGRhdGEgZnJvbSBtYXJrZG93biBmaWxlcyBpbiB5b3VyXG4vLyByZXBvLCBvciBmZXRjaCB0aGVtIGZyb20gYSBkYXRhYmFzZSBvZiBzb21lIGtpbmQuIEJ1dCBpbiBvcmRlciB0b1xuLy8gYXZvaWQgdW5uZWNlc3NhcnkgZGVwZW5kZW5jaWVzIGluIHRoZSBzdGFydGVyIHRlbXBsYXRlLCBhbmQgaW4gdGhlXG4vLyBzZXJ2aWNlIG9mIG9idmlvdXNuZXNzLCB3ZSdyZSBqdXN0IGdvaW5nIHRvIGxlYXZlIGl0IGhlcmUuXG5cbi8vIFRoaXMgZmlsZSBpcyBjYWxsZWQgYF9wb3N0cy5qc2AgcmF0aGVyIHRoYW4gYHBvc3RzLmpzYCwgYmVjYXVzZVxuLy8gd2UgZG9uJ3Qgd2FudCB0byBjcmVhdGUgYW4gYC9ibG9nL3Bvc3RzYCByb3V0ZSDigJQgdGhlIGxlYWRpbmdcbi8vIHVuZGVyc2NvcmUgdGVsbHMgU2FwcGVyIG5vdCB0byBkbyB0aGF0LlxuXG5jb25zdCBwb3N0cyA9IFtcblx0e1xuXHRcdHRpdGxlOiAnV2hhdCBpcyBTYXBwZXI/Jyxcblx0XHRzbHVnOiAnd2hhdC1pcy1zYXBwZXInLFxuXHRcdGh0bWw6IGBcblx0XHRcdDxwPkZpcnN0LCB5b3UgaGF2ZSB0byBrbm93IHdoYXQgPGEgaHJlZj0naHR0cHM6Ly9zdmVsdGUuZGV2Jz5TdmVsdGU8L2E+IGlzLiBTdmVsdGUgaXMgYSBVSSBmcmFtZXdvcmsgd2l0aCBhIGJvbGQgbmV3IGlkZWE6IHJhdGhlciB0aGFuIHByb3ZpZGluZyBhIGxpYnJhcnkgdGhhdCB5b3Ugd3JpdGUgY29kZSB3aXRoIChsaWtlIFJlYWN0IG9yIFZ1ZSwgZm9yIGV4YW1wbGUpLCBpdCdzIGEgY29tcGlsZXIgdGhhdCB0dXJucyB5b3VyIGNvbXBvbmVudHMgaW50byBoaWdobHkgb3B0aW1pemVkIHZhbmlsbGEgSmF2YVNjcmlwdC4gSWYgeW91IGhhdmVuJ3QgYWxyZWFkeSByZWFkIHRoZSA8YSBocmVmPSdodHRwczovL3N2ZWx0ZS5kZXYvYmxvZy9mcmFtZXdvcmtzLXdpdGhvdXQtdGhlLWZyYW1ld29yayc+aW50cm9kdWN0b3J5IGJsb2cgcG9zdDwvYT4sIHlvdSBzaG91bGQhPC9wPlxuXG5cdFx0XHQ8cD5TYXBwZXIgaXMgYSBOZXh0LmpzLXN0eWxlIGZyYW1ld29yayAoPGEgaHJlZj0nYmxvZy9ob3ctaXMtc2FwcGVyLWRpZmZlcmVudC1mcm9tLW5leHQnPm1vcmUgb24gdGhhdCBoZXJlPC9hPikgYnVpbHQgYXJvdW5kIFN2ZWx0ZS4gSXQgbWFrZXMgaXQgZW1iYXJyYXNzaW5nbHkgZWFzeSB0byBjcmVhdGUgZXh0cmVtZWx5IGhpZ2ggcGVyZm9ybWFuY2Ugd2ViIGFwcHMuIE91dCBvZiB0aGUgYm94LCB5b3UgZ2V0OjwvcD5cblxuXHRcdFx0PHVsPlxuXHRcdFx0XHQ8bGk+Q29kZS1zcGxpdHRpbmcsIGR5bmFtaWMgaW1wb3J0cyBhbmQgaG90IG1vZHVsZSByZXBsYWNlbWVudCwgcG93ZXJlZCBieSB3ZWJwYWNrPC9saT5cblx0XHRcdFx0PGxpPlNlcnZlci1zaWRlIHJlbmRlcmluZyAoU1NSKSB3aXRoIGNsaWVudC1zaWRlIGh5ZHJhdGlvbjwvbGk+XG5cdFx0XHRcdDxsaT5TZXJ2aWNlIHdvcmtlciBmb3Igb2ZmbGluZSBzdXBwb3J0LCBhbmQgYWxsIHRoZSBQV0EgYmVsbHMgYW5kIHdoaXN0bGVzPC9saT5cblx0XHRcdFx0PGxpPlRoZSBuaWNlc3QgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZSB5b3UndmUgZXZlciBoYWQsIG9yIHlvdXIgbW9uZXkgYmFjazwvbGk+XG5cdFx0XHQ8L3VsPlxuXG5cdFx0XHQ8cD5JdCdzIGltcGxlbWVudGVkIGFzIEV4cHJlc3MgbWlkZGxld2FyZS4gRXZlcnl0aGluZyBpcyBzZXQgdXAgYW5kIHdhaXRpbmcgZm9yIHlvdSB0byBnZXQgc3RhcnRlZCwgYnV0IHlvdSBrZWVwIGNvbXBsZXRlIGNvbnRyb2wgb3ZlciB0aGUgc2VydmVyLCBzZXJ2aWNlIHdvcmtlciwgd2VicGFjayBjb25maWcgYW5kIGV2ZXJ5dGhpbmcgZWxzZSwgc28gaXQncyBhcyBmbGV4aWJsZSBhcyB5b3UgbmVlZCBpdCB0byBiZS48L3A+XG5cdFx0YFxuXHR9LFxuXG5cdHtcblx0XHR0aXRsZTogJ0hvdyB0byB1c2UgU2FwcGVyJyxcblx0XHRzbHVnOiAnaG93LXRvLXVzZS1zYXBwZXInLFxuXHRcdGh0bWw6IGBcblx0XHRcdDxoMj5TdGVwIG9uZTwvaDI+XG5cdFx0XHQ8cD5DcmVhdGUgYSBuZXcgcHJvamVjdCwgdXNpbmcgPGEgaHJlZj0naHR0cHM6Ly9naXRodWIuY29tL1JpY2gtSGFycmlzL2RlZ2l0Jz5kZWdpdDwvYT46PC9wPlxuXG5cdFx0XHQ8cHJlPjxjb2RlPm5weCBkZWdpdCBcInN2ZWx0ZWpzL3NhcHBlci10ZW1wbGF0ZSNyb2xsdXBcIiBteS1hcHBcblx0XHRcdGNkIG15LWFwcFxuXHRcdFx0bnBtIGluc3RhbGwgIyBvciB5YXJuIVxuXHRcdFx0bnBtIHJ1biBkZXZcblx0XHRcdDwvY29kZT48L3ByZT5cblxuXHRcdFx0PGgyPlN0ZXAgdHdvPC9oMj5cblx0XHRcdDxwPkdvIHRvIDxhIGhyZWY9J2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCc+bG9jYWxob3N0OjMwMDA8L2E+LiBPcGVuIDxjb2RlPm15LWFwcDwvY29kZT4gaW4geW91ciBlZGl0b3IuIEVkaXQgdGhlIGZpbGVzIGluIHRoZSA8Y29kZT5zcmMvcm91dGVzPC9jb2RlPiBkaXJlY3Rvcnkgb3IgYWRkIG5ldyBvbmVzLjwvcD5cblxuXHRcdFx0PGgyPlN0ZXAgdGhyZWU8L2gyPlxuXHRcdFx0PHA+Li4uPC9wPlxuXG5cdFx0XHQ8aDI+U3RlcCBmb3VyPC9oMj5cblx0XHRcdDxwPlJlc2lzdCBvdmVyZG9uZSBqb2tlIGZvcm1hdHMuPC9wPlxuXHRcdGBcblx0fSxcblxuXHR7XG5cdFx0dGl0bGU6ICdXaHkgdGhlIG5hbWU/Jyxcblx0XHRzbHVnOiAnd2h5LXRoZS1uYW1lJyxcblx0XHRodG1sOiBgXG5cdFx0XHQ8cD5JbiB3YXIsIHRoZSBzb2xkaWVycyB3aG8gYnVpbGQgYnJpZGdlcywgcmVwYWlyIHJvYWRzLCBjbGVhciBtaW5lZmllbGRzIGFuZCBjb25kdWN0IGRlbW9saXRpb25zIOKAlCBhbGwgdW5kZXIgY29tYmF0IGNvbmRpdGlvbnMg4oCUIGFyZSBrbm93biBhcyA8ZW0+c2FwcGVyczwvZW0+LjwvcD5cblxuXHRcdFx0PHA+Rm9yIHdlYiBkZXZlbG9wZXJzLCB0aGUgc3Rha2VzIGFyZSBnZW5lcmFsbHkgbG93ZXIgdGhhbiB0aG9zZSBmb3IgY29tYmF0IGVuZ2luZWVycy4gQnV0IHdlIGZhY2Ugb3VyIG93biBob3N0aWxlIGVudmlyb25tZW50OiB1bmRlcnBvd2VyZWQgZGV2aWNlcywgcG9vciBuZXR3b3JrIGNvbm5lY3Rpb25zLCBhbmQgdGhlIGNvbXBsZXhpdHkgaW5oZXJlbnQgaW4gZnJvbnQtZW5kIGVuZ2luZWVyaW5nLiBTYXBwZXIsIHdoaWNoIGlzIHNob3J0IGZvciA8c3Ryb25nPlM8L3N0cm9uZz52ZWx0ZSA8c3Ryb25nPmFwcDwvc3Ryb25nPiBtYWs8c3Ryb25nPmVyPC9zdHJvbmc+LCBpcyB5b3VyIGNvdXJhZ2VvdXMgYW5kIGR1dGlmdWwgYWxseS48L3A+XG5cdFx0YFxuXHR9LFxuXG5cdHtcblx0XHR0aXRsZTogJ0hvdyBpcyBTYXBwZXIgZGlmZmVyZW50IGZyb20gTmV4dC5qcz8nLFxuXHRcdHNsdWc6ICdob3ctaXMtc2FwcGVyLWRpZmZlcmVudC1mcm9tLW5leHQnLFxuXHRcdGh0bWw6IGBcblx0XHRcdDxwPjxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS96ZWl0L25leHQuanMnPk5leHQuanM8L2E+IGlzIGEgUmVhY3QgZnJhbWV3b3JrIGZyb20gPGEgaHJlZj0naHR0cHM6Ly92ZXJjZWwuY29tLyc+VmVyY2VsPC9hPiwgYW5kIGlzIHRoZSBpbnNwaXJhdGlvbiBmb3IgU2FwcGVyLiBUaGVyZSBhcmUgYSBmZXcgbm90YWJsZSBkaWZmZXJlbmNlcywgaG93ZXZlcjo8L3A+XG5cblx0XHRcdDx1bD5cblx0XHRcdFx0PGxpPkl0J3MgcG93ZXJlZCBieSA8YSBocmVmPSdodHRwczovL3N2ZWx0ZS5kZXYnPlN2ZWx0ZTwvYT4gaW5zdGVhZCBvZiBSZWFjdCwgc28gaXQncyBmYXN0ZXIgYW5kIHlvdXIgYXBwcyBhcmUgc21hbGxlcjwvbGk+XG5cdFx0XHRcdDxsaT5JbnN0ZWFkIG9mIHJvdXRlIG1hc2tpbmcsIHdlIGVuY29kZSByb3V0ZSBwYXJhbWV0ZXJzIGluIGZpbGVuYW1lcy4gRm9yIGV4YW1wbGUsIHRoZSBwYWdlIHlvdSdyZSBsb29raW5nIGF0IHJpZ2h0IG5vdyBpcyA8Y29kZT5zcmMvcm91dGVzL2Jsb2cvW3NsdWddLnN2ZWx0ZTwvY29kZT48L2xpPlxuXHRcdFx0XHQ8bGk+QXMgd2VsbCBhcyBwYWdlcyAoU3ZlbHRlIGNvbXBvbmVudHMsIHdoaWNoIHJlbmRlciBvbiBzZXJ2ZXIgb3IgY2xpZW50KSwgeW91IGNhbiBjcmVhdGUgPGVtPnNlcnZlciByb3V0ZXM8L2VtPiBpbiB5b3VyIDxjb2RlPnJvdXRlczwvY29kZT4gZGlyZWN0b3J5LiBUaGVzZSBhcmUganVzdCA8Y29kZT4uanM8L2NvZGU+IGZpbGVzIHRoYXQgZXhwb3J0IGZ1bmN0aW9ucyBjb3JyZXNwb25kaW5nIHRvIEhUVFAgbWV0aG9kcywgYW5kIHJlY2VpdmUgRXhwcmVzcyA8Y29kZT5yZXF1ZXN0PC9jb2RlPiBhbmQgPGNvZGU+cmVzcG9uc2U8L2NvZGU+IG9iamVjdHMgYXMgYXJndW1lbnRzLiBUaGlzIG1ha2VzIGl0IHZlcnkgZWFzeSB0bywgZm9yIGV4YW1wbGUsIGFkZCBhIEpTT04gQVBJIHN1Y2ggYXMgdGhlIG9uZSA8YSBocmVmPSdibG9nL2hvdy1pcy1zYXBwZXItZGlmZmVyZW50LWZyb20tbmV4dC5qc29uJz5wb3dlcmluZyB0aGlzIHZlcnkgcGFnZTwvYT48L2xpPlxuXHRcdFx0XHQ8bGk+TGlua3MgYXJlIGp1c3QgPGNvZGU+Jmx0O2EmZ3Q7PC9jb2RlPiBlbGVtZW50cywgcmF0aGVyIHRoYW4gZnJhbWV3b3JrLXNwZWNpZmljIDxjb2RlPiZsdDtMaW5rJmd0OzwvY29kZT4gY29tcG9uZW50cy4gVGhhdCBtZWFucywgZm9yIGV4YW1wbGUsIHRoYXQgPGEgaHJlZj0nYmxvZy9ob3ctY2FuLWktZ2V0LWludm9sdmVkJz50aGlzIGxpbmsgcmlnaHQgaGVyZTwvYT4sIGRlc3BpdGUgYmVpbmcgaW5zaWRlIGEgYmxvYiBvZiBIVE1MLCB3b3JrcyB3aXRoIHRoZSByb3V0ZXIgYXMgeW91J2QgZXhwZWN0LjwvbGk+XG5cdFx0XHQ8L3VsPlxuXHRcdGBcblx0fSxcblxuXHR7XG5cdFx0dGl0bGU6ICdIb3cgY2FuIEkgZ2V0IGludm9sdmVkPycsXG5cdFx0c2x1ZzogJ2hvdy1jYW4taS1nZXQtaW52b2x2ZWQnLFxuXHRcdGh0bWw6IGBcblx0XHRcdDxwPldlJ3JlIHNvIGdsYWQgeW91IGFza2VkISBDb21lIG9uIG92ZXIgdG8gdGhlIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zdmVsdGUnPlN2ZWx0ZTwvYT4gYW5kIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9zdmVsdGVqcy9zYXBwZXInPlNhcHBlcjwvYT4gcmVwb3MsIGFuZCBqb2luIHVzIGluIHRoZSA8YSBocmVmPSdodHRwczovL3N2ZWx0ZS5kZXYvY2hhdCc+RGlzY29yZCBjaGF0cm9vbTwvYT4uIEV2ZXJ5b25lIGlzIHdlbGNvbWUsIGVzcGVjaWFsbHkgeW91ITwvcD5cblx0XHRgXG5cdH1cbl07XG5cbnBvc3RzLmZvckVhY2gocG9zdCA9PiB7XG5cdHBvc3QuaHRtbCA9IHBvc3QuaHRtbC5yZXBsYWNlKC9eXFx0ezN9L2dtLCAnJyk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcG9zdHM7XG4iLCJpbXBvcnQgcG9zdHMgZnJvbSAnLi9fcG9zdHMuanMnO1xuXG5jb25zdCBjb250ZW50cyA9IEpTT04uc3RyaW5naWZ5KHBvc3RzLm1hcChwb3N0ID0+IHtcblx0cmV0dXJuIHtcblx0XHR0aXRsZTogcG9zdC50aXRsZSxcblx0XHRzbHVnOiBwb3N0LnNsdWdcblx0fTtcbn0pKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldChyZXEsIHJlcykge1xuXHRyZXMud3JpdGVIZWFkKDIwMCwge1xuXHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0fSk7XG5cblx0cmVzLmVuZChjb250ZW50cyk7XG59IiwiaW1wb3J0IHBvc3RzIGZyb20gJy4vX3Bvc3RzLmpzJztcblxuY29uc3QgbG9va3VwID0gbmV3IE1hcCgpO1xucG9zdHMuZm9yRWFjaChwb3N0ID0+IHtcblx0bG9va3VwLnNldChwb3N0LnNsdWcsIEpTT04uc3RyaW5naWZ5KHBvc3QpKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0KHJlcSwgcmVzLCBuZXh0KSB7XG5cdC8vIHRoZSBgc2x1Z2AgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSBiZWNhdXNlXG5cdC8vIHRoaXMgZmlsZSBpcyBjYWxsZWQgW3NsdWddLmpzb24uanNcblx0Y29uc3QgeyBzbHVnIH0gPSByZXEucGFyYW1zO1xuXG5cdGlmIChsb29rdXAuaGFzKHNsdWcpKSB7XG5cdFx0cmVzLndyaXRlSGVhZCgyMDAsIHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9KTtcblxuXHRcdHJlcy5lbmQobG9va3VwLmdldChzbHVnKSk7XG5cdH0gZWxzZSB7XG5cdFx0cmVzLndyaXRlSGVhZCg0MDQsIHtcblx0XHRcdCdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcblx0XHR9KTtcblxuXHRcdHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0bWVzc2FnZTogYE5vdCBmb3VuZGBcblx0XHR9KSk7XG5cdH1cbn1cbiIsImZ1bmN0aW9uIG5vb3AoKSB7IH1cbmNvbnN0IGlkZW50aXR5ID0geCA9PiB4O1xuZnVuY3Rpb24gYXNzaWduKHRhciwgc3JjKSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGZvciAoY29uc3QgayBpbiBzcmMpXG4gICAgICAgIHRhcltrXSA9IHNyY1trXTtcbiAgICByZXR1cm4gdGFyO1xufVxuZnVuY3Rpb24gaXNfcHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gYWRkX2xvY2F0aW9uKGVsZW1lbnQsIGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhcikge1xuICAgIGVsZW1lbnQuX19zdmVsdGVfbWV0YSA9IHtcbiAgICAgICAgbG9jOiB7IGZpbGUsIGxpbmUsIGNvbHVtbiwgY2hhciB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHJ1bihmbikge1xuICAgIHJldHVybiBmbigpO1xufVxuZnVuY3Rpb24gYmxhbmtfb2JqZWN0KCkge1xuICAgIHJldHVybiBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gcnVuX2FsbChmbnMpIHtcbiAgICBmbnMuZm9yRWFjaChydW4pO1xufVxuZnVuY3Rpb24gaXNfZnVuY3Rpb24odGhpbmcpIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaW5nID09PSAnZnVuY3Rpb24nO1xufVxuZnVuY3Rpb24gc2FmZV9ub3RfZXF1YWwoYSwgYikge1xuICAgIHJldHVybiBhICE9IGEgPyBiID09IGIgOiBhICE9PSBiIHx8ICgoYSAmJiB0eXBlb2YgYSA9PT0gJ29iamVjdCcpIHx8IHR5cGVvZiBhID09PSAnZnVuY3Rpb24nKTtcbn1cbmZ1bmN0aW9uIG5vdF9lcXVhbChhLCBiKSB7XG4gICAgcmV0dXJuIGEgIT0gYSA/IGIgPT0gYiA6IGEgIT09IGI7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zdG9yZShzdG9yZSwgbmFtZSkge1xuICAgIGlmIChzdG9yZSAhPSBudWxsICYmIHR5cGVvZiBzdG9yZS5zdWJzY3JpYmUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAnJHtuYW1lfScgaXMgbm90IGEgc3RvcmUgd2l0aCBhICdzdWJzY3JpYmUnIG1ldGhvZGApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN1YnNjcmliZShzdG9yZSwgLi4uY2FsbGJhY2tzKSB7XG4gICAgaWYgKHN0b3JlID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIG5vb3A7XG4gICAgfVxuICAgIGNvbnN0IHVuc3ViID0gc3RvcmUuc3Vic2NyaWJlKC4uLmNhbGxiYWNrcyk7XG4gICAgcmV0dXJuIHVuc3ViLnVuc3Vic2NyaWJlID8gKCkgPT4gdW5zdWIudW5zdWJzY3JpYmUoKSA6IHVuc3ViO1xufVxuZnVuY3Rpb24gZ2V0X3N0b3JlX3ZhbHVlKHN0b3JlKSB7XG4gICAgbGV0IHZhbHVlO1xuICAgIHN1YnNjcmliZShzdG9yZSwgXyA9PiB2YWx1ZSA9IF8pKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gY29tcG9uZW50X3N1YnNjcmliZShjb21wb25lbnQsIHN0b3JlLCBjYWxsYmFjaykge1xuICAgIGNvbXBvbmVudC4kJC5vbl9kZXN0cm95LnB1c2goc3Vic2NyaWJlKHN0b3JlLCBjYWxsYmFjaykpO1xufVxuZnVuY3Rpb24gY3JlYXRlX3Nsb3QoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uKSB7XG4gICAgICAgIGNvbnN0IHNsb3RfY3R4ID0gZ2V0X3Nsb3RfY29udGV4dChkZWZpbml0aW9uLCBjdHgsICQkc2NvcGUsIGZuKTtcbiAgICAgICAgcmV0dXJuIGRlZmluaXRpb25bMF0oc2xvdF9jdHgpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldF9zbG90X2NvbnRleHQoZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBmbikge1xuICAgIHJldHVybiBkZWZpbml0aW9uWzFdICYmIGZuXG4gICAgICAgID8gYXNzaWduKCQkc2NvcGUuY3R4LnNsaWNlKCksIGRlZmluaXRpb25bMV0oZm4oY3R4KSkpXG4gICAgICAgIDogJCRzY29wZS5jdHg7XG59XG5mdW5jdGlvbiBnZXRfc2xvdF9jaGFuZ2VzKGRlZmluaXRpb24sICQkc2NvcGUsIGRpcnR5LCBmbikge1xuICAgIGlmIChkZWZpbml0aW9uWzJdICYmIGZuKSB7XG4gICAgICAgIGNvbnN0IGxldHMgPSBkZWZpbml0aW9uWzJdKGZuKGRpcnR5KSk7XG4gICAgICAgIGlmICgkJHNjb3BlLmRpcnR5ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBsZXRzO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgbGV0cyA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZCA9IFtdO1xuICAgICAgICAgICAgY29uc3QgbGVuID0gTWF0aC5tYXgoJCRzY29wZS5kaXJ0eS5sZW5ndGgsIGxldHMubGVuZ3RoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRbaV0gPSAkJHNjb3BlLmRpcnR5W2ldIHwgbGV0c1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICQkc2NvcGUuZGlydHkgfCBsZXRzO1xuICAgIH1cbiAgICByZXR1cm4gJCRzY29wZS5kaXJ0eTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZV9zbG90KHNsb3QsIHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbiwgZ2V0X3Nsb3RfY29udGV4dF9mbikge1xuICAgIGNvbnN0IHNsb3RfY2hhbmdlcyA9IGdldF9zbG90X2NoYW5nZXMoc2xvdF9kZWZpbml0aW9uLCAkJHNjb3BlLCBkaXJ0eSwgZ2V0X3Nsb3RfY2hhbmdlc19mbik7XG4gICAgaWYgKHNsb3RfY2hhbmdlcykge1xuICAgICAgICBjb25zdCBzbG90X2NvbnRleHQgPSBnZXRfc2xvdF9jb250ZXh0KHNsb3RfZGVmaW5pdGlvbiwgY3R4LCAkJHNjb3BlLCBnZXRfc2xvdF9jb250ZXh0X2ZuKTtcbiAgICAgICAgc2xvdC5wKHNsb3RfY29udGV4dCwgc2xvdF9jaGFuZ2VzKTtcbiAgICB9XG59XG5mdW5jdGlvbiBleGNsdWRlX2ludGVybmFsX3Byb3BzKHByb3BzKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge307XG4gICAgZm9yIChjb25zdCBrIGluIHByb3BzKVxuICAgICAgICBpZiAoa1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdWx0W2tdID0gcHJvcHNba107XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNvbXB1dGVfcmVzdF9wcm9wcyhwcm9wcywga2V5cykge1xuICAgIGNvbnN0IHJlc3QgPSB7fTtcbiAgICBrZXlzID0gbmV3IFNldChrZXlzKTtcbiAgICBmb3IgKGNvbnN0IGsgaW4gcHJvcHMpXG4gICAgICAgIGlmICgha2V5cy5oYXMoaykgJiYga1swXSAhPT0gJyQnKVxuICAgICAgICAgICAgcmVzdFtrXSA9IHByb3BzW2tdO1xuICAgIHJldHVybiByZXN0O1xufVxuZnVuY3Rpb24gb25jZShmbikge1xuICAgIGxldCByYW4gPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHJhbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcmFuID0gdHJ1ZTtcbiAgICAgICAgZm4uY2FsbCh0aGlzLCAuLi5hcmdzKTtcbiAgICB9O1xufVxuZnVuY3Rpb24gbnVsbF90b19lbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PSBudWxsID8gJycgOiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHNldF9zdG9yZV92YWx1ZShzdG9yZSwgcmV0LCB2YWx1ZSA9IHJldCkge1xuICAgIHN0b3JlLnNldCh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn1cbmNvbnN0IGhhc19wcm9wID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG5mdW5jdGlvbiBhY3Rpb25fZGVzdHJveWVyKGFjdGlvbl9yZXN1bHQpIHtcbiAgICByZXR1cm4gYWN0aW9uX3Jlc3VsdCAmJiBpc19mdW5jdGlvbihhY3Rpb25fcmVzdWx0LmRlc3Ryb3kpID8gYWN0aW9uX3Jlc3VsdC5kZXN0cm95IDogbm9vcDtcbn1cblxuY29uc3QgaXNfY2xpZW50ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCc7XG5sZXQgbm93ID0gaXNfY2xpZW50XG4gICAgPyAoKSA9PiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KClcbiAgICA6ICgpID0+IERhdGUubm93KCk7XG5sZXQgcmFmID0gaXNfY2xpZW50ID8gY2IgPT4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNiKSA6IG5vb3A7XG4vLyB1c2VkIGludGVybmFsbHkgZm9yIHRlc3RpbmdcbmZ1bmN0aW9uIHNldF9ub3coZm4pIHtcbiAgICBub3cgPSBmbjtcbn1cbmZ1bmN0aW9uIHNldF9yYWYoZm4pIHtcbiAgICByYWYgPSBmbjtcbn1cblxuY29uc3QgdGFza3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBydW5fdGFza3Mobm93KSB7XG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgaWYgKCF0YXNrLmMobm93KSkge1xuICAgICAgICAgICAgdGFza3MuZGVsZXRlKHRhc2spO1xuICAgICAgICAgICAgdGFzay5mKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGFza3Muc2l6ZSAhPT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG59XG4vKipcbiAqIEZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkhXG4gKi9cbmZ1bmN0aW9uIGNsZWFyX2xvb3BzKCkge1xuICAgIHRhc2tzLmNsZWFyKCk7XG59XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgdGFzayB0aGF0IHJ1bnMgb24gZWFjaCByYWYgZnJhbWVcbiAqIHVudGlsIGl0IHJldHVybnMgYSBmYWxzeSB2YWx1ZSBvciBpcyBhYm9ydGVkXG4gKi9cbmZ1bmN0aW9uIGxvb3AoY2FsbGJhY2spIHtcbiAgICBsZXQgdGFzaztcbiAgICBpZiAodGFza3Muc2l6ZSA9PT0gMClcbiAgICAgICAgcmFmKHJ1bl90YXNrcyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogbmV3IFByb21pc2UoZnVsZmlsbCA9PiB7XG4gICAgICAgICAgICB0YXNrcy5hZGQodGFzayA9IHsgYzogY2FsbGJhY2ssIGY6IGZ1bGZpbGwgfSk7XG4gICAgICAgIH0pLFxuICAgICAgICBhYm9ydCgpIHtcbiAgICAgICAgICAgIHRhc2tzLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh0YXJnZXQsIG5vZGUpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQobm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnQodGFyZ2V0LCBub2RlLCBhbmNob3IpIHtcbiAgICB0YXJnZXQuaW5zZXJ0QmVmb3JlKG5vZGUsIGFuY2hvciB8fCBudWxsKTtcbn1cbmZ1bmN0aW9uIGRldGFjaChub2RlKSB7XG4gICAgbm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xufVxuZnVuY3Rpb24gZGVzdHJveV9lYWNoKGl0ZXJhdGlvbnMsIGRldGFjaGluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlcmF0aW9ucy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoaXRlcmF0aW9uc1tpXSlcbiAgICAgICAgICAgIGl0ZXJhdGlvbnNbaV0uZChkZXRhY2hpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gZWxlbWVudF9pcyhuYW1lLCBpcykge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUsIHsgaXMgfSk7XG59XG5mdW5jdGlvbiBvYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzKG9iaiwgZXhjbHVkZSkge1xuICAgIGNvbnN0IHRhcmdldCA9IHt9O1xuICAgIGZvciAoY29uc3QgayBpbiBvYmopIHtcbiAgICAgICAgaWYgKGhhc19wcm9wKG9iaiwgaylcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICYmIGV4Y2x1ZGUuaW5kZXhPZihrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIHRhcmdldFtrXSA9IG9ialtrXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gc3ZnX2VsZW1lbnQobmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgbmFtZSk7XG59XG5mdW5jdGlvbiB0ZXh0KGRhdGEpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZGF0YSk7XG59XG5mdW5jdGlvbiBzcGFjZSgpIHtcbiAgICByZXR1cm4gdGV4dCgnICcpO1xufVxuZnVuY3Rpb24gZW1wdHkoKSB7XG4gICAgcmV0dXJuIHRleHQoJycpO1xufVxuZnVuY3Rpb24gbGlzdGVuKG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbiAgICByZXR1cm4gKCkgPT4gbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHByZXZlbnRfZGVmYXVsdChmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHN0b3BfcHJvcGFnYXRpb24oZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiBmbi5jYWxsKHRoaXMsIGV2ZW50KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gc2VsZihmbikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSB0aGlzKVxuICAgICAgICAgICAgZm4uY2FsbCh0aGlzLCBldmVudCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgIGVsc2UgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZSkgIT09IHZhbHVlKVxuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIHNldF9hdHRyaWJ1dGVzKG5vZGUsIGF0dHJpYnV0ZXMpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgZGVzY3JpcHRvcnMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhub2RlLl9fcHJvdG9fXyk7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgICBpZiAoYXR0cmlidXRlc1trZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoa2V5ID09PSAnX192YWx1ZScpIHtcbiAgICAgICAgICAgIG5vZGUudmFsdWUgPSBub2RlW2tleV0gPSBhdHRyaWJ1dGVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVzY3JpcHRvcnNba2V5XSAmJiBkZXNjcmlwdG9yc1trZXldLnNldCkge1xuICAgICAgICAgICAgbm9kZVtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBzZXRfc3ZnX2F0dHJpYnV0ZXMobm9kZSwgYXR0cmlidXRlcykge1xuICAgIGZvciAoY29uc3Qga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgYXR0cihub2RlLCBrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X2N1c3RvbV9lbGVtZW50X2RhdGEobm9kZSwgcHJvcCwgdmFsdWUpIHtcbiAgICBpZiAocHJvcCBpbiBub2RlKSB7XG4gICAgICAgIG5vZGVbcHJvcF0gPSB2YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGF0dHIobm9kZSwgcHJvcCwgdmFsdWUpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHhsaW5rX2F0dHIobm9kZSwgYXR0cmlidXRlLCB2YWx1ZSkge1xuICAgIG5vZGUuc2V0QXR0cmlidXRlTlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnLCBhdHRyaWJ1dGUsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGdldF9iaW5kaW5nX2dyb3VwX3ZhbHVlKGdyb3VwLCBfX3ZhbHVlLCBjaGVja2VkKSB7XG4gICAgY29uc3QgdmFsdWUgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBncm91cC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoZ3JvdXBbaV0uY2hlY2tlZClcbiAgICAgICAgICAgIHZhbHVlLmFkZChncm91cFtpXS5fX3ZhbHVlKTtcbiAgICB9XG4gICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgIHZhbHVlLmRlbGV0ZShfX3ZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWUpO1xufVxuZnVuY3Rpb24gdG9fbnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAnJyA/IHVuZGVmaW5lZCA6ICt2YWx1ZTtcbn1cbmZ1bmN0aW9uIHRpbWVfcmFuZ2VzX3RvX2FycmF5KHJhbmdlcykge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5nZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgYXJyYXkucHVzaCh7IHN0YXJ0OiByYW5nZXMuc3RhcnQoaSksIGVuZDogcmFuZ2VzLmVuZChpKSB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xufVxuZnVuY3Rpb24gY2hpbGRyZW4oZWxlbWVudCkge1xuICAgIHJldHVybiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG59XG5mdW5jdGlvbiBjbGFpbV9lbGVtZW50KG5vZGVzLCBuYW1lLCBhdHRyaWJ1dGVzLCBzdmcpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBub2Rlc1tpXTtcbiAgICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZSA9IFtdO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBub2RlLmF0dHJpYnV0ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXR0cmlidXRlID0gbm9kZS5hdHRyaWJ1dGVzW2orK107XG4gICAgICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmUucHVzaChhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCByZW1vdmUubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShyZW1vdmVba10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3ZnID8gc3ZnX2VsZW1lbnQobmFtZSkgOiBlbGVtZW50KG5hbWUpO1xufVxuZnVuY3Rpb24gY2xhaW1fdGV4dChub2RlcywgZGF0YSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IG5vZGVzW2ldO1xuICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gMykge1xuICAgICAgICAgICAgbm9kZS5kYXRhID0gJycgKyBkYXRhO1xuICAgICAgICAgICAgcmV0dXJuIG5vZGVzLnNwbGljZShpLCAxKVswXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dChkYXRhKTtcbn1cbmZ1bmN0aW9uIGNsYWltX3NwYWNlKG5vZGVzKSB7XG4gICAgcmV0dXJuIGNsYWltX3RleHQobm9kZXMsICcgJyk7XG59XG5mdW5jdGlvbiBzZXRfZGF0YSh0ZXh0LCBkYXRhKSB7XG4gICAgZGF0YSA9ICcnICsgZGF0YTtcbiAgICBpZiAodGV4dC5kYXRhICE9PSBkYXRhKVxuICAgICAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gc2V0X2lucHV0X3ZhbHVlKGlucHV0LCB2YWx1ZSkge1xuICAgIGlucHV0LnZhbHVlID0gdmFsdWUgPT0gbnVsbCA/ICcnIDogdmFsdWU7XG59XG5mdW5jdGlvbiBzZXRfaW5wdXRfdHlwZShpbnB1dCwgdHlwZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGlucHV0LnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxufVxuZnVuY3Rpb24gc2V0X3N0eWxlKG5vZGUsIGtleSwgdmFsdWUsIGltcG9ydGFudCkge1xuICAgIG5vZGUuc3R5bGUuc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSwgaW1wb3J0YW50ID8gJ2ltcG9ydGFudCcgOiAnJyk7XG59XG5mdW5jdGlvbiBzZWxlY3Rfb3B0aW9uKHNlbGVjdCwgdmFsdWUpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGVjdC5vcHRpb25zLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHNlbGVjdC5vcHRpb25zW2ldO1xuICAgICAgICBpZiAob3B0aW9uLl9fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gc2VsZWN0X29wdGlvbnMoc2VsZWN0LCB2YWx1ZSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0Lm9wdGlvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gc2VsZWN0Lm9wdGlvbnNbaV07XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IH52YWx1ZS5pbmRleE9mKG9wdGlvbi5fX3ZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzZWxlY3RfdmFsdWUoc2VsZWN0KSB7XG4gICAgY29uc3Qgc2VsZWN0ZWRfb3B0aW9uID0gc2VsZWN0LnF1ZXJ5U2VsZWN0b3IoJzpjaGVja2VkJykgfHwgc2VsZWN0Lm9wdGlvbnNbMF07XG4gICAgcmV0dXJuIHNlbGVjdGVkX29wdGlvbiAmJiBzZWxlY3RlZF9vcHRpb24uX192YWx1ZTtcbn1cbmZ1bmN0aW9uIHNlbGVjdF9tdWx0aXBsZV92YWx1ZShzZWxlY3QpIHtcbiAgICByZXR1cm4gW10ubWFwLmNhbGwoc2VsZWN0LnF1ZXJ5U2VsZWN0b3JBbGwoJzpjaGVja2VkJyksIG9wdGlvbiA9PiBvcHRpb24uX192YWx1ZSk7XG59XG4vLyB1bmZvcnR1bmF0ZWx5IHRoaXMgY2FuJ3QgYmUgYSBjb25zdGFudCBhcyB0aGF0IHdvdWxkbid0IGJlIHRyZWUtc2hha2VhYmxlXG4vLyBzbyB3ZSBjYWNoZSB0aGUgcmVzdWx0IGluc3RlYWRcbmxldCBjcm9zc29yaWdpbjtcbmZ1bmN0aW9uIGlzX2Nyb3Nzb3JpZ2luKCkge1xuICAgIGlmIChjcm9zc29yaWdpbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNyb3Nzb3JpZ2luID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHZvaWQgd2luZG93LnBhcmVudC5kb2N1bWVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNyb3Nzb3JpZ2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3Jvc3NvcmlnaW47XG59XG5mdW5jdGlvbiBhZGRfcmVzaXplX2xpc3RlbmVyKG5vZGUsIGZuKSB7XG4gICAgY29uc3QgY29tcHV0ZWRfc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgIGNvbnN0IHpfaW5kZXggPSAocGFyc2VJbnQoY29tcHV0ZWRfc3R5bGUuekluZGV4KSB8fCAwKSAtIDE7XG4gICAgaWYgKGNvbXB1dGVkX3N0eWxlLnBvc2l0aW9uID09PSAnc3RhdGljJykge1xuICAgICAgICBub2RlLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICB9XG4gICAgY29uc3QgaWZyYW1lID0gZWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBgICtcbiAgICAgICAgYG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMDsgb3BhY2l0eTogMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7IHotaW5kZXg6ICR7el9pbmRleH07YCk7XG4gICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIGlmcmFtZS50YWJJbmRleCA9IC0xO1xuICAgIGNvbnN0IGNyb3Nzb3JpZ2luID0gaXNfY3Jvc3NvcmlnaW4oKTtcbiAgICBsZXQgdW5zdWJzY3JpYmU7XG4gICAgaWYgKGNyb3Nzb3JpZ2luKSB7XG4gICAgICAgIGlmcmFtZS5zcmMgPSBgZGF0YTp0ZXh0L2h0bWwsPHNjcmlwdD5vbnJlc2l6ZT1mdW5jdGlvbigpe3BhcmVudC5wb3N0TWVzc2FnZSgwLCcqJyl9PC9zY3JpcHQ+YDtcbiAgICAgICAgdW5zdWJzY3JpYmUgPSBsaXN0ZW4od2luZG93LCAnbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnNvdXJjZSA9PT0gaWZyYW1lLmNvbnRlbnRXaW5kb3cpXG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZnJhbWUuc3JjID0gJ2Fib3V0OmJsYW5rJztcbiAgICAgICAgaWZyYW1lLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlID0gbGlzdGVuKGlmcmFtZS5jb250ZW50V2luZG93LCAncmVzaXplJywgZm4pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBhcHBlbmQobm9kZSwgaWZyYW1lKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoY3Jvc3NvcmlnaW4pIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodW5zdWJzY3JpYmUgJiYgaWZyYW1lLmNvbnRlbnRXaW5kb3cpIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGV0YWNoKGlmcmFtZSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRvZ2dsZV9jbGFzcyhlbGVtZW50LCBuYW1lLCB0b2dnbGUpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdFt0b2dnbGUgPyAnYWRkJyA6ICdyZW1vdmUnXShuYW1lKTtcbn1cbmZ1bmN0aW9uIGN1c3RvbV9ldmVudCh0eXBlLCBkZXRhaWwpIHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0N1c3RvbUV2ZW50Jyk7XG4gICAgZS5pbml0Q3VzdG9tRXZlbnQodHlwZSwgZmFsc2UsIGZhbHNlLCBkZXRhaWwpO1xuICAgIHJldHVybiBlO1xufVxuZnVuY3Rpb24gcXVlcnlfc2VsZWN0b3JfYWxsKHNlbGVjdG9yLCBwYXJlbnQgPSBkb2N1bWVudC5ib2R5KSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20ocGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcbn1cbmNsYXNzIEh0bWxUYWcge1xuICAgIGNvbnN0cnVjdG9yKGFuY2hvciA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5hID0gYW5jaG9yO1xuICAgICAgICB0aGlzLmUgPSB0aGlzLm4gPSBudWxsO1xuICAgIH1cbiAgICBtKGh0bWwsIHRhcmdldCwgYW5jaG9yID0gbnVsbCkge1xuICAgICAgICBpZiAoIXRoaXMuZSkge1xuICAgICAgICAgICAgdGhpcy5lID0gZWxlbWVudCh0YXJnZXQubm9kZU5hbWUpO1xuICAgICAgICAgICAgdGhpcy50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaShhbmNob3IpO1xuICAgIH1cbiAgICBoKGh0bWwpIHtcbiAgICAgICAgdGhpcy5lLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHRoaXMubiA9IEFycmF5LmZyb20odGhpcy5lLmNoaWxkTm9kZXMpO1xuICAgIH1cbiAgICBpKGFuY2hvcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubi5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaW5zZXJ0KHRoaXMudCwgdGhpcy5uW2ldLCBhbmNob3IpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHAoaHRtbCkge1xuICAgICAgICB0aGlzLmQoKTtcbiAgICAgICAgdGhpcy5oKGh0bWwpO1xuICAgICAgICB0aGlzLmkodGhpcy5hKTtcbiAgICB9XG4gICAgZCgpIHtcbiAgICAgICAgdGhpcy5uLmZvckVhY2goZGV0YWNoKTtcbiAgICB9XG59XG5cbmNvbnN0IGFjdGl2ZV9kb2NzID0gbmV3IFNldCgpO1xubGV0IGFjdGl2ZSA9IDA7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vZGFya3NreWFwcC9zdHJpbmctaGFzaC9ibG9iL21hc3Rlci9pbmRleC5qc1xuZnVuY3Rpb24gaGFzaChzdHIpIHtcbiAgICBsZXQgaGFzaCA9IDUzODE7XG4gICAgbGV0IGkgPSBzdHIubGVuZ3RoO1xuICAgIHdoaWxlIChpLS0pXG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSBeIHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBoYXNoID4+PiAwO1xufVxuZnVuY3Rpb24gY3JlYXRlX3J1bGUobm9kZSwgYSwgYiwgZHVyYXRpb24sIGRlbGF5LCBlYXNlLCBmbiwgdWlkID0gMCkge1xuICAgIGNvbnN0IHN0ZXAgPSAxNi42NjYgLyBkdXJhdGlvbjtcbiAgICBsZXQga2V5ZnJhbWVzID0gJ3tcXG4nO1xuICAgIGZvciAobGV0IHAgPSAwOyBwIDw9IDE7IHAgKz0gc3RlcCkge1xuICAgICAgICBjb25zdCB0ID0gYSArIChiIC0gYSkgKiBlYXNlKHApO1xuICAgICAgICBrZXlmcmFtZXMgKz0gcCAqIDEwMCArIGAleyR7Zm4odCwgMSAtIHQpfX1cXG5gO1xuICAgIH1cbiAgICBjb25zdCBydWxlID0ga2V5ZnJhbWVzICsgYDEwMCUgeyR7Zm4oYiwgMSAtIGIpfX1cXG59YDtcbiAgICBjb25zdCBuYW1lID0gYF9fc3ZlbHRlXyR7aGFzaChydWxlKX1fJHt1aWR9YDtcbiAgICBjb25zdCBkb2MgPSBub2RlLm93bmVyRG9jdW1lbnQ7XG4gICAgYWN0aXZlX2RvY3MuYWRkKGRvYyk7XG4gICAgY29uc3Qgc3R5bGVzaGVldCA9IGRvYy5fX3N2ZWx0ZV9zdHlsZXNoZWV0IHx8IChkb2MuX19zdmVsdGVfc3R5bGVzaGVldCA9IGRvYy5oZWFkLmFwcGVuZENoaWxkKGVsZW1lbnQoJ3N0eWxlJykpLnNoZWV0KTtcbiAgICBjb25zdCBjdXJyZW50X3J1bGVzID0gZG9jLl9fc3ZlbHRlX3J1bGVzIHx8IChkb2MuX19zdmVsdGVfcnVsZXMgPSB7fSk7XG4gICAgaWYgKCFjdXJyZW50X3J1bGVzW25hbWVdKSB7XG4gICAgICAgIGN1cnJlbnRfcnVsZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICBzdHlsZXNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSAke3J1bGV9YCwgc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGgpO1xuICAgIH1cbiAgICBjb25zdCBhbmltYXRpb24gPSBub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJztcbiAgICBub2RlLnN0eWxlLmFuaW1hdGlvbiA9IGAke2FuaW1hdGlvbiA/IGAke2FuaW1hdGlvbn0sIGAgOiBgYH0ke25hbWV9ICR7ZHVyYXRpb259bXMgbGluZWFyICR7ZGVsYXl9bXMgMSBib3RoYDtcbiAgICBhY3RpdmUgKz0gMTtcbiAgICByZXR1cm4gbmFtZTtcbn1cbmZ1bmN0aW9uIGRlbGV0ZV9ydWxlKG5vZGUsIG5hbWUpIHtcbiAgICBjb25zdCBwcmV2aW91cyA9IChub2RlLnN0eWxlLmFuaW1hdGlvbiB8fCAnJykuc3BsaXQoJywgJyk7XG4gICAgY29uc3QgbmV4dCA9IHByZXZpb3VzLmZpbHRlcihuYW1lXG4gICAgICAgID8gYW5pbSA9PiBhbmltLmluZGV4T2YobmFtZSkgPCAwIC8vIHJlbW92ZSBzcGVjaWZpYyBhbmltYXRpb25cbiAgICAgICAgOiBhbmltID0+IGFuaW0uaW5kZXhPZignX19zdmVsdGUnKSA9PT0gLTEgLy8gcmVtb3ZlIGFsbCBTdmVsdGUgYW5pbWF0aW9uc1xuICAgICk7XG4gICAgY29uc3QgZGVsZXRlZCA9IHByZXZpb3VzLmxlbmd0aCAtIG5leHQubGVuZ3RoO1xuICAgIGlmIChkZWxldGVkKSB7XG4gICAgICAgIG5vZGUuc3R5bGUuYW5pbWF0aW9uID0gbmV4dC5qb2luKCcsICcpO1xuICAgICAgICBhY3RpdmUgLT0gZGVsZXRlZDtcbiAgICAgICAgaWYgKCFhY3RpdmUpXG4gICAgICAgICAgICBjbGVhcl9ydWxlcygpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNsZWFyX3J1bGVzKCkge1xuICAgIHJhZigoKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGFjdGl2ZV9kb2NzLmZvckVhY2goZG9jID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlc2hlZXQgPSBkb2MuX19zdmVsdGVfc3R5bGVzaGVldDtcbiAgICAgICAgICAgIGxldCBpID0gc3R5bGVzaGVldC5jc3NSdWxlcy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoaS0tKVxuICAgICAgICAgICAgICAgIHN0eWxlc2hlZXQuZGVsZXRlUnVsZShpKTtcbiAgICAgICAgICAgIGRvYy5fX3N2ZWx0ZV9ydWxlcyA9IHt9O1xuICAgICAgICB9KTtcbiAgICAgICAgYWN0aXZlX2RvY3MuY2xlYXIoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlX2FuaW1hdGlvbihub2RlLCBmcm9tLCBmbiwgcGFyYW1zKSB7XG4gICAgaWYgKCFmcm9tKVxuICAgICAgICByZXR1cm4gbm9vcDtcbiAgICBjb25zdCB0byA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKGZyb20ubGVmdCA9PT0gdG8ubGVmdCAmJiBmcm9tLnJpZ2h0ID09PSB0by5yaWdodCAmJiBmcm9tLnRvcCA9PT0gdG8udG9wICYmIGZyb20uYm90dG9tID09PSB0by5ib3R0b20pXG4gICAgICAgIHJldHVybiBub29wO1xuICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIFxuICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogc2hvdWxkIHRoaXMgYmUgc2VwYXJhdGVkIGZyb20gZGVzdHJ1Y3R1cmluZz8gT3Igc3RhcnQvZW5kIGFkZGVkIHRvIHB1YmxpYyBhcGkgYW5kIGRvY3VtZW50YXRpb24/XG4gICAgc3RhcnQ6IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5LCBcbiAgICAvLyBAdHMtaWdub3JlIHRvZG86XG4gICAgZW5kID0gc3RhcnRfdGltZSArIGR1cmF0aW9uLCB0aWNrID0gbm9vcCwgY3NzIH0gPSBmbihub2RlLCB7IGZyb20sIHRvIH0sIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgbGV0IG5hbWU7XG4gICAgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgIG5hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWRlbGF5KSB7XG4gICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgbmFtZSk7XG4gICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgbG9vcChub3cgPT4ge1xuICAgICAgICBpZiAoIXN0YXJ0ZWQgJiYgbm93ID49IHN0YXJ0X3RpbWUpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGFydGVkICYmIG5vdyA+PSBlbmQpIHtcbiAgICAgICAgICAgIHRpY2soMSwgMCk7XG4gICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFydW5uaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXJ0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBub3cgLSBzdGFydF90aW1lO1xuICAgICAgICAgICAgY29uc3QgdCA9IDAgKyAxICogZWFzaW5nKHAgLyBkdXJhdGlvbik7XG4gICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbiAgICBzdGFydCgpO1xuICAgIHRpY2soMCwgMSk7XG4gICAgcmV0dXJuIHN0b3A7XG59XG5mdW5jdGlvbiBmaXhfcG9zaXRpb24obm9kZSkge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShub2RlKTtcbiAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09ICdhYnNvbHV0ZScgJiYgc3R5bGUucG9zaXRpb24gIT09ICdmaXhlZCcpIHtcbiAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBzdHlsZTtcbiAgICAgICAgY29uc3QgYSA9IG5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIG5vZGUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICBub2RlLnN0eWxlLndpZHRoID0gd2lkdGg7XG4gICAgICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBhZGRfdHJhbnNmb3JtKG5vZGUsIGEpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGFkZF90cmFuc2Zvcm0obm9kZSwgYSkge1xuICAgIGNvbnN0IGIgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmIChhLmxlZnQgIT09IGIubGVmdCB8fCBhLnRvcCAhPT0gYi50b3ApIHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKG5vZGUpO1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm0gPSBzdHlsZS50cmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogc3R5bGUudHJhbnNmb3JtO1xuICAgICAgICBub2RlLnN0eWxlLnRyYW5zZm9ybSA9IGAke3RyYW5zZm9ybX0gdHJhbnNsYXRlKCR7YS5sZWZ0IC0gYi5sZWZ0fXB4LCAke2EudG9wIC0gYi50b3B9cHgpYDtcbiAgICB9XG59XG5cbmxldCBjdXJyZW50X2NvbXBvbmVudDtcbmZ1bmN0aW9uIHNldF9jdXJyZW50X2NvbXBvbmVudChjb21wb25lbnQpIHtcbiAgICBjdXJyZW50X2NvbXBvbmVudCA9IGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGdldF9jdXJyZW50X2NvbXBvbmVudCgpIHtcbiAgICBpZiAoIWN1cnJlbnRfY29tcG9uZW50KVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZ1bmN0aW9uIGNhbGxlZCBvdXRzaWRlIGNvbXBvbmVudCBpbml0aWFsaXphdGlvbmApO1xuICAgIHJldHVybiBjdXJyZW50X2NvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGJlZm9yZVVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmJlZm9yZV91cGRhdGUucHVzaChmbik7XG59XG5mdW5jdGlvbiBvbk1vdW50KGZuKSB7XG4gICAgZ2V0X2N1cnJlbnRfY29tcG9uZW50KCkuJCQub25fbW91bnQucHVzaChmbik7XG59XG5mdW5jdGlvbiBhZnRlclVwZGF0ZShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmFmdGVyX3VwZGF0ZS5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIG9uRGVzdHJveShmbikge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLm9uX2Rlc3Ryb3kucHVzaChmbik7XG59XG5mdW5jdGlvbiBjcmVhdGVFdmVudERpc3BhdGNoZXIoKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgcmV0dXJuICh0eXBlLCBkZXRhaWwpID0+IHtcbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1t0eXBlXTtcbiAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgLy8gVE9ETyBhcmUgdGhlcmUgc2l0dWF0aW9ucyB3aGVyZSBldmVudHMgY291bGQgYmUgZGlzcGF0Y2hlZFxuICAgICAgICAgICAgLy8gaW4gYSBzZXJ2ZXIgKG5vbi1ET00pIGVudmlyb25tZW50P1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBjdXN0b21fZXZlbnQodHlwZSwgZGV0YWlsKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4ge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwoY29tcG9uZW50LCBldmVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5mdW5jdGlvbiBzZXRDb250ZXh0KGtleSwgY29udGV4dCkge1xuICAgIGdldF9jdXJyZW50X2NvbXBvbmVudCgpLiQkLmNvbnRleHQuc2V0KGtleSwgY29udGV4dCk7XG59XG5mdW5jdGlvbiBnZXRDb250ZXh0KGtleSkge1xuICAgIHJldHVybiBnZXRfY3VycmVudF9jb21wb25lbnQoKS4kJC5jb250ZXh0LmdldChrZXkpO1xufVxuLy8gVE9ETyBmaWd1cmUgb3V0IGlmIHdlIHN0aWxsIHdhbnQgdG8gc3VwcG9ydFxuLy8gc2hvcnRoYW5kIGV2ZW50cywgb3IgaWYgd2Ugd2FudCB0byBpbXBsZW1lbnRcbi8vIGEgcmVhbCBidWJibGluZyBtZWNoYW5pc21cbmZ1bmN0aW9uIGJ1YmJsZShjb21wb25lbnQsIGV2ZW50KSB7XG4gICAgY29uc3QgY2FsbGJhY2tzID0gY29tcG9uZW50LiQkLmNhbGxiYWNrc1tldmVudC50eXBlXTtcbiAgICBpZiAoY2FsbGJhY2tzKSB7XG4gICAgICAgIGNhbGxiYWNrcy5zbGljZSgpLmZvckVhY2goZm4gPT4gZm4oZXZlbnQpKTtcbiAgICB9XG59XG5cbmNvbnN0IGRpcnR5X2NvbXBvbmVudHMgPSBbXTtcbmNvbnN0IGludHJvcyA9IHsgZW5hYmxlZDogZmFsc2UgfTtcbmNvbnN0IGJpbmRpbmdfY2FsbGJhY2tzID0gW107XG5jb25zdCByZW5kZXJfY2FsbGJhY2tzID0gW107XG5jb25zdCBmbHVzaF9jYWxsYmFja3MgPSBbXTtcbmNvbnN0IHJlc29sdmVkX3Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbmxldCB1cGRhdGVfc2NoZWR1bGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzY2hlZHVsZV91cGRhdGUoKSB7XG4gICAgaWYgKCF1cGRhdGVfc2NoZWR1bGVkKSB7XG4gICAgICAgIHVwZGF0ZV9zY2hlZHVsZWQgPSB0cnVlO1xuICAgICAgICByZXNvbHZlZF9wcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHRpY2soKSB7XG4gICAgc2NoZWR1bGVfdXBkYXRlKCk7XG4gICAgcmV0dXJuIHJlc29sdmVkX3Byb21pc2U7XG59XG5mdW5jdGlvbiBhZGRfcmVuZGVyX2NhbGxiYWNrKGZuKSB7XG4gICAgcmVuZGVyX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmZ1bmN0aW9uIGFkZF9mbHVzaF9jYWxsYmFjayhmbikge1xuICAgIGZsdXNoX2NhbGxiYWNrcy5wdXNoKGZuKTtcbn1cbmxldCBmbHVzaGluZyA9IGZhbHNlO1xuY29uc3Qgc2Vlbl9jYWxsYmFja3MgPSBuZXcgU2V0KCk7XG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgICBpZiAoZmx1c2hpbmcpXG4gICAgICAgIHJldHVybjtcbiAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgZG8ge1xuICAgICAgICAvLyBmaXJzdCwgY2FsbCBiZWZvcmVVcGRhdGUgZnVuY3Rpb25zXG4gICAgICAgIC8vIGFuZCB1cGRhdGUgY29tcG9uZW50c1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IGRpcnR5X2NvbXBvbmVudHNbaV07XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY29tcG9uZW50KTtcbiAgICAgICAgICAgIHVwZGF0ZShjb21wb25lbnQuJCQpO1xuICAgICAgICB9XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoID0gMDtcbiAgICAgICAgd2hpbGUgKGJpbmRpbmdfY2FsbGJhY2tzLmxlbmd0aClcbiAgICAgICAgICAgIGJpbmRpbmdfY2FsbGJhY2tzLnBvcCgpKCk7XG4gICAgICAgIC8vIHRoZW4sIG9uY2UgY29tcG9uZW50cyBhcmUgdXBkYXRlZCwgY2FsbFxuICAgICAgICAvLyBhZnRlclVwZGF0ZSBmdW5jdGlvbnMuIFRoaXMgbWF5IGNhdXNlXG4gICAgICAgIC8vIHN1YnNlcXVlbnQgdXBkYXRlcy4uLlxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJlbmRlcl9jYWxsYmFja3MubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gcmVuZGVyX2NhbGxiYWNrc1tpXTtcbiAgICAgICAgICAgIGlmICghc2Vlbl9jYWxsYmFja3MuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgIC8vIC4uLnNvIGd1YXJkIGFnYWluc3QgaW5maW5pdGUgbG9vcHNcbiAgICAgICAgICAgICAgICBzZWVuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmVuZGVyX2NhbGxiYWNrcy5sZW5ndGggPSAwO1xuICAgIH0gd2hpbGUgKGRpcnR5X2NvbXBvbmVudHMubGVuZ3RoKTtcbiAgICB3aGlsZSAoZmx1c2hfY2FsbGJhY2tzLmxlbmd0aCkge1xuICAgICAgICBmbHVzaF9jYWxsYmFja3MucG9wKCkoKTtcbiAgICB9XG4gICAgdXBkYXRlX3NjaGVkdWxlZCA9IGZhbHNlO1xuICAgIGZsdXNoaW5nID0gZmFsc2U7XG4gICAgc2Vlbl9jYWxsYmFja3MuY2xlYXIoKTtcbn1cbmZ1bmN0aW9uIHVwZGF0ZSgkJCkge1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAkJC51cGRhdGUoKTtcbiAgICAgICAgcnVuX2FsbCgkJC5iZWZvcmVfdXBkYXRlKTtcbiAgICAgICAgY29uc3QgZGlydHkgPSAkJC5kaXJ0eTtcbiAgICAgICAgJCQuZGlydHkgPSBbLTFdO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5wKCQkLmN0eCwgZGlydHkpO1xuICAgICAgICAkJC5hZnRlcl91cGRhdGUuZm9yRWFjaChhZGRfcmVuZGVyX2NhbGxiYWNrKTtcbiAgICB9XG59XG5cbmxldCBwcm9taXNlO1xuZnVuY3Rpb24gd2FpdCgpIHtcbiAgICBpZiAoIXByb21pc2UpIHtcbiAgICAgICAgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICBwcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmZ1bmN0aW9uIGRpc3BhdGNoKG5vZGUsIGRpcmVjdGlvbiwga2luZCkge1xuICAgIG5vZGUuZGlzcGF0Y2hFdmVudChjdXN0b21fZXZlbnQoYCR7ZGlyZWN0aW9uID8gJ2ludHJvJyA6ICdvdXRybyd9JHtraW5kfWApKTtcbn1cbmNvbnN0IG91dHJvaW5nID0gbmV3IFNldCgpO1xubGV0IG91dHJvcztcbmZ1bmN0aW9uIGdyb3VwX291dHJvcygpIHtcbiAgICBvdXRyb3MgPSB7XG4gICAgICAgIHI6IDAsXG4gICAgICAgIGM6IFtdLFxuICAgICAgICBwOiBvdXRyb3MgLy8gcGFyZW50IGdyb3VwXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNoZWNrX291dHJvcygpIHtcbiAgICBpZiAoIW91dHJvcy5yKSB7XG4gICAgICAgIHJ1bl9hbGwob3V0cm9zLmMpO1xuICAgIH1cbiAgICBvdXRyb3MgPSBvdXRyb3MucDtcbn1cbmZ1bmN0aW9uIHRyYW5zaXRpb25faW4oYmxvY2ssIGxvY2FsKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLmkpIHtcbiAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgYmxvY2suaShsb2NhbCk7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJhbnNpdGlvbl9vdXQoYmxvY2ssIGxvY2FsLCBkZXRhY2gsIGNhbGxiYWNrKSB7XG4gICAgaWYgKGJsb2NrICYmIGJsb2NrLm8pIHtcbiAgICAgICAgaWYgKG91dHJvaW5nLmhhcyhibG9jaykpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIG91dHJvaW5nLmFkZChibG9jayk7XG4gICAgICAgIG91dHJvcy5jLnB1c2goKCkgPT4ge1xuICAgICAgICAgICAgb3V0cm9pbmcuZGVsZXRlKGJsb2NrKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGlmIChkZXRhY2gpXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrLmQoMSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGJsb2NrLm8obG9jYWwpO1xuICAgIH1cbn1cbmNvbnN0IG51bGxfdHJhbnNpdGlvbiA9IHsgZHVyYXRpb246IDAgfTtcbmZ1bmN0aW9uIGNyZWF0ZV9pbl90cmFuc2l0aW9uKG5vZGUsIGZuLCBwYXJhbXMpIHtcbiAgICBsZXQgY29uZmlnID0gZm4obm9kZSwgcGFyYW1zKTtcbiAgICBsZXQgcnVubmluZyA9IGZhbHNlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdWlkID0gMDtcbiAgICBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlLCBhbmltYXRpb25fbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdvKCkge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBpZiAoY3NzKVxuICAgICAgICAgICAgYW5pbWF0aW9uX25hbWUgPSBjcmVhdGVfcnVsZShub2RlLCAwLCAxLCBkdXJhdGlvbiwgZGVsYXksIGVhc2luZywgY3NzLCB1aWQrKyk7XG4gICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0X3RpbWUgPSBub3coKSArIGRlbGF5O1xuICAgICAgICBjb25zdCBlbmRfdGltZSA9IHN0YXJ0X3RpbWUgKyBkdXJhdGlvbjtcbiAgICAgICAgaWYgKHRhc2spXG4gICAgICAgICAgICB0YXNrLmFib3J0KCk7XG4gICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IGRpc3BhdGNoKG5vZGUsIHRydWUsICdzdGFydCcpKTtcbiAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBlbmRfdGltZSkge1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEsIDApO1xuICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaChub2RlLCB0cnVlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKHQsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzdGFydGVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhcnQoKSB7XG4gICAgICAgICAgICBpZiAoc3RhcnRlZClcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBkZWxldGVfcnVsZShub2RlKTtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgY29uZmlnID0gY29uZmlnKCk7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oZ28pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW52YWxpZGF0ZSgpIHtcbiAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgZW5kKCkge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwKCk7XG4gICAgICAgICAgICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZV9vdXRfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zKSB7XG4gICAgbGV0IGNvbmZpZyA9IGZuKG5vZGUsIHBhcmFtcyk7XG4gICAgbGV0IHJ1bm5pbmcgPSB0cnVlO1xuICAgIGxldCBhbmltYXRpb25fbmFtZTtcbiAgICBjb25zdCBncm91cCA9IG91dHJvcztcbiAgICBncm91cC5yICs9IDE7XG4gICAgZnVuY3Rpb24gZ28oKSB7XG4gICAgICAgIGNvbnN0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDMwMCwgZWFzaW5nID0gaWRlbnRpdHksIHRpY2sgPSBub29wLCBjc3MgfSA9IGNvbmZpZyB8fCBudWxsX3RyYW5zaXRpb247XG4gICAgICAgIGlmIChjc3MpXG4gICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIDEsIDAsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICBjb25zdCBzdGFydF90aW1lID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgY29uc3QgZW5kX3RpbWUgPSBzdGFydF90aW1lICsgZHVyYXRpb247XG4gICAgICAgIGFkZF9yZW5kZXJfY2FsbGJhY2soKCkgPT4gZGlzcGF0Y2gobm9kZSwgZmFsc2UsICdzdGFydCcpKTtcbiAgICAgICAgbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAobm93ID49IGVuZF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpY2soMCwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIGZhbHNlLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghLS1ncm91cC5yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdpbGwgcmVzdWx0IGluIGBlbmQoKWAgYmVpbmcgY2FsbGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gd2UgZG9uJ3QgbmVlZCB0byBjbGVhbiB1cCBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBydW5fYWxsKGdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5vdyA+PSBzdGFydF90aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBlYXNpbmcoKG5vdyAtIHN0YXJ0X3RpbWUpIC8gZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB0aWNrKDEgLSB0LCB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcnVubmluZztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgIHdhaXQoKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgZ28oKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBnbygpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBlbmQocmVzZXQpIHtcbiAgICAgICAgICAgIGlmIChyZXNldCAmJiBjb25maWcudGljaykge1xuICAgICAgICAgICAgICAgIGNvbmZpZy50aWNrKDEsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5pbWF0aW9uX25hbWUpXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZV9ydWxlKG5vZGUsIGFuaW1hdGlvbl9uYW1lKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY3JlYXRlX2JpZGlyZWN0aW9uYWxfdHJhbnNpdGlvbihub2RlLCBmbiwgcGFyYW1zLCBpbnRybykge1xuICAgIGxldCBjb25maWcgPSBmbihub2RlLCBwYXJhbXMpO1xuICAgIGxldCB0ID0gaW50cm8gPyAwIDogMTtcbiAgICBsZXQgcnVubmluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICBsZXQgYW5pbWF0aW9uX25hbWUgPSBudWxsO1xuICAgIGZ1bmN0aW9uIGNsZWFyX2FuaW1hdGlvbigpIHtcbiAgICAgICAgaWYgKGFuaW1hdGlvbl9uYW1lKVxuICAgICAgICAgICAgZGVsZXRlX3J1bGUobm9kZSwgYW5pbWF0aW9uX25hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBpbml0KHByb2dyYW0sIGR1cmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IGQgPSBwcm9ncmFtLmIgLSB0O1xuICAgICAgICBkdXJhdGlvbiAqPSBNYXRoLmFicyhkKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGE6IHQsXG4gICAgICAgICAgICBiOiBwcm9ncmFtLmIsXG4gICAgICAgICAgICBkLFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBzdGFydDogcHJvZ3JhbS5zdGFydCxcbiAgICAgICAgICAgIGVuZDogcHJvZ3JhbS5zdGFydCArIGR1cmF0aW9uLFxuICAgICAgICAgICAgZ3JvdXA6IHByb2dyYW0uZ3JvdXBcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ28oYikge1xuICAgICAgICBjb25zdCB7IGRlbGF5ID0gMCwgZHVyYXRpb24gPSAzMDAsIGVhc2luZyA9IGlkZW50aXR5LCB0aWNrID0gbm9vcCwgY3NzIH0gPSBjb25maWcgfHwgbnVsbF90cmFuc2l0aW9uO1xuICAgICAgICBjb25zdCBwcm9ncmFtID0ge1xuICAgICAgICAgICAgc3RhcnQ6IG5vdygpICsgZGVsYXksXG4gICAgICAgICAgICBiXG4gICAgICAgIH07XG4gICAgICAgIGlmICghYikge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIHByb2dyYW0uZ3JvdXAgPSBvdXRyb3M7XG4gICAgICAgICAgICBvdXRyb3MuciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChydW5uaW5nX3Byb2dyYW0pIHtcbiAgICAgICAgICAgIHBlbmRpbmdfcHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBpZiB0aGlzIGlzIGFuIGludHJvLCBhbmQgdGhlcmUncyBhIGRlbGF5LCB3ZSBuZWVkIHRvIGRvXG4gICAgICAgICAgICAvLyBhbiBpbml0aWFsIHRpY2sgYW5kL29yIGFwcGx5IENTUyBhbmltYXRpb24gaW1tZWRpYXRlbHlcbiAgICAgICAgICAgIGlmIChjc3MpIHtcbiAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25fbmFtZSA9IGNyZWF0ZV9ydWxlKG5vZGUsIHQsIGIsIGR1cmF0aW9uLCBkZWxheSwgZWFzaW5nLCBjc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGIpXG4gICAgICAgICAgICAgICAgdGljaygwLCAxKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IGluaXQocHJvZ3JhbSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgYWRkX3JlbmRlcl9jYWxsYmFjaygoKSA9PiBkaXNwYXRjaChub2RlLCBiLCAnc3RhcnQnKSk7XG4gICAgICAgICAgICBsb29wKG5vdyA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBlbmRpbmdfcHJvZ3JhbSAmJiBub3cgPiBwZW5kaW5nX3Byb2dyYW0uc3RhcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcnVubmluZ19wcm9ncmFtID0gaW5pdChwZW5kaW5nX3Byb2dyYW0sIGR1cmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgcGVuZGluZ19wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gobm9kZSwgcnVubmluZ19wcm9ncmFtLmIsICdzdGFydCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbl9uYW1lID0gY3JlYXRlX3J1bGUobm9kZSwgdCwgcnVubmluZ19wcm9ncmFtLmIsIHJ1bm5pbmdfcHJvZ3JhbS5kdXJhdGlvbiwgMCwgZWFzaW5nLCBjb25maWcuY3NzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChub3cgPj0gcnVubmluZ19wcm9ncmFtLmVuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0ID0gcnVubmluZ19wcm9ncmFtLmIsIDEgLSB0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKG5vZGUsIHJ1bm5pbmdfcHJvZ3JhbS5iLCAnZW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBlbmRpbmdfcHJvZ3JhbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlJ3JlIGRvbmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocnVubmluZ19wcm9ncmFtLmIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50cm8g4oCUIHdlIGNhbiB0aWR5IHVwIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyX2FuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3V0cm8g4oCUIG5lZWRzIHRvIGJlIGNvb3JkaW5hdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghLS1ydW5uaW5nX3Byb2dyYW0uZ3JvdXAucilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bl9hbGwocnVubmluZ19wcm9ncmFtLmdyb3VwLmMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAobm93ID49IHJ1bm5pbmdfcHJvZ3JhbS5zdGFydCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IG5vdyAtIHJ1bm5pbmdfcHJvZ3JhbS5zdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHQgPSBydW5uaW5nX3Byb2dyYW0uYSArIHJ1bm5pbmdfcHJvZ3JhbS5kICogZWFzaW5nKHAgLyBydW5uaW5nX3Byb2dyYW0uZHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGljayh0LCAxIC0gdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhKHJ1bm5pbmdfcHJvZ3JhbSB8fCBwZW5kaW5nX3Byb2dyYW0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcnVuKGIpIHtcbiAgICAgICAgICAgIGlmIChpc19mdW5jdGlvbihjb25maWcpKSB7XG4gICAgICAgICAgICAgICAgd2FpdCgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZyA9IGNvbmZpZygpO1xuICAgICAgICAgICAgICAgICAgICBnbyhiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGdvKGIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlbmQoKSB7XG4gICAgICAgICAgICBjbGVhcl9hbmltYXRpb24oKTtcbiAgICAgICAgICAgIHJ1bm5pbmdfcHJvZ3JhbSA9IHBlbmRpbmdfcHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYW5kbGVfcHJvbWlzZShwcm9taXNlLCBpbmZvKSB7XG4gICAgY29uc3QgdG9rZW4gPSBpbmZvLnRva2VuID0ge307XG4gICAgZnVuY3Rpb24gdXBkYXRlKHR5cGUsIGluZGV4LCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGlmIChpbmZvLnRva2VuICE9PSB0b2tlbilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaW5mby5yZXNvbHZlZCA9IHZhbHVlO1xuICAgICAgICBsZXQgY2hpbGRfY3R4ID0gaW5mby5jdHg7XG4gICAgICAgIGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY2hpbGRfY3R4ID0gY2hpbGRfY3R4LnNsaWNlKCk7XG4gICAgICAgICAgICBjaGlsZF9jdHhba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGJsb2NrID0gdHlwZSAmJiAoaW5mby5jdXJyZW50ID0gdHlwZSkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IG5lZWRzX2ZsdXNoID0gZmFsc2U7XG4gICAgICAgIGlmIChpbmZvLmJsb2NrKSB7XG4gICAgICAgICAgICBpZiAoaW5mby5ibG9ja3MpIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrcy5mb3JFYWNoKChibG9jaywgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gaW5kZXggJiYgYmxvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbl9vdXQoYmxvY2ssIDEsIDEsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZvLmJsb2Nrc1tpXSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrX291dHJvcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbmZvLmJsb2NrLmQoMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibG9jay5jKCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uX2luKGJsb2NrLCAxKTtcbiAgICAgICAgICAgIGJsb2NrLm0oaW5mby5tb3VudCgpLCBpbmZvLmFuY2hvcik7XG4gICAgICAgICAgICBuZWVkc19mbHVzaCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5mby5ibG9jayA9IGJsb2NrO1xuICAgICAgICBpZiAoaW5mby5ibG9ja3MpXG4gICAgICAgICAgICBpbmZvLmJsb2Nrc1tpbmRleF0gPSBibG9jaztcbiAgICAgICAgaWYgKG5lZWRzX2ZsdXNoKSB7XG4gICAgICAgICAgICBmbHVzaCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc19wcm9taXNlKHByb21pc2UpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRfY29tcG9uZW50ID0gZ2V0X2N1cnJlbnRfY29tcG9uZW50KCk7XG4gICAgICAgIHByb21pc2UudGhlbih2YWx1ZSA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgdmFsdWUpO1xuICAgICAgICAgICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KG51bGwpO1xuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoY3VycmVudF9jb21wb25lbnQpO1xuICAgICAgICAgICAgdXBkYXRlKGluZm8uY2F0Y2gsIDIsIGluZm8uZXJyb3IsIGVycm9yKTtcbiAgICAgICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChudWxsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGlmIHdlIHByZXZpb3VzbHkgaGFkIGEgdGhlbi9jYXRjaCBibG9jaywgZGVzdHJveSBpdFxuICAgICAgICBpZiAoaW5mby5jdXJyZW50ICE9PSBpbmZvLnBlbmRpbmcpIHtcbiAgICAgICAgICAgIHVwZGF0ZShpbmZvLnBlbmRpbmcsIDApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbmZvLmN1cnJlbnQgIT09IGluZm8udGhlbikge1xuICAgICAgICAgICAgdXBkYXRlKGluZm8udGhlbiwgMSwgaW5mby52YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpbmZvLnJlc29sdmVkID0gcHJvbWlzZTtcbiAgICB9XG59XG5cbmNvbnN0IGdsb2JhbHMgPSAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICA/IHdpbmRvd1xuICAgIDogdHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnXG4gICAgICAgID8gZ2xvYmFsVGhpc1xuICAgICAgICA6IGdsb2JhbCk7XG5cbmZ1bmN0aW9uIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIGJsb2NrLmQoMSk7XG4gICAgbG9va3VwLmRlbGV0ZShibG9jay5rZXkpO1xufVxuZnVuY3Rpb24gb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCkge1xuICAgIHRyYW5zaXRpb25fb3V0KGJsb2NrLCAxLCAxLCAoKSA9PiB7XG4gICAgICAgIGxvb2t1cC5kZWxldGUoYmxvY2sua2V5KTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGZpeF9hbmRfZGVzdHJveV9ibG9jayhibG9jaywgbG9va3VwKSB7XG4gICAgYmxvY2suZigpO1xuICAgIGRlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiBmaXhfYW5kX291dHJvX2FuZF9kZXN0cm95X2Jsb2NrKGJsb2NrLCBsb29rdXApIHtcbiAgICBibG9jay5mKCk7XG4gICAgb3V0cm9fYW5kX2Rlc3Ryb3lfYmxvY2soYmxvY2ssIGxvb2t1cCk7XG59XG5mdW5jdGlvbiB1cGRhdGVfa2V5ZWRfZWFjaChvbGRfYmxvY2tzLCBkaXJ0eSwgZ2V0X2tleSwgZHluYW1pYywgY3R4LCBsaXN0LCBsb29rdXAsIG5vZGUsIGRlc3Ryb3ksIGNyZWF0ZV9lYWNoX2Jsb2NrLCBuZXh0LCBnZXRfY29udGV4dCkge1xuICAgIGxldCBvID0gb2xkX2Jsb2Nrcy5sZW5ndGg7XG4gICAgbGV0IG4gPSBsaXN0Lmxlbmd0aDtcbiAgICBsZXQgaSA9IG87XG4gICAgY29uc3Qgb2xkX2luZGV4ZXMgPSB7fTtcbiAgICB3aGlsZSAoaS0tKVxuICAgICAgICBvbGRfaW5kZXhlc1tvbGRfYmxvY2tzW2ldLmtleV0gPSBpO1xuICAgIGNvbnN0IG5ld19ibG9ja3MgPSBbXTtcbiAgICBjb25zdCBuZXdfbG9va3VwID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IGRlbHRhcyA9IG5ldyBNYXAoKTtcbiAgICBpID0gbjtcbiAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkX2N0eCA9IGdldF9jb250ZXh0KGN0eCwgbGlzdCwgaSk7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoY2hpbGRfY3R4KTtcbiAgICAgICAgbGV0IGJsb2NrID0gbG9va3VwLmdldChrZXkpO1xuICAgICAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgICAgICBibG9jayA9IGNyZWF0ZV9lYWNoX2Jsb2NrKGtleSwgY2hpbGRfY3R4KTtcbiAgICAgICAgICAgIGJsb2NrLmMoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkeW5hbWljKSB7XG4gICAgICAgICAgICBibG9jay5wKGNoaWxkX2N0eCwgZGlydHkpO1xuICAgICAgICB9XG4gICAgICAgIG5ld19sb29rdXAuc2V0KGtleSwgbmV3X2Jsb2Nrc1tpXSA9IGJsb2NrKTtcbiAgICAgICAgaWYgKGtleSBpbiBvbGRfaW5kZXhlcylcbiAgICAgICAgICAgIGRlbHRhcy5zZXQoa2V5LCBNYXRoLmFicyhpIC0gb2xkX2luZGV4ZXNba2V5XSkpO1xuICAgIH1cbiAgICBjb25zdCB3aWxsX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgZGlkX21vdmUgPSBuZXcgU2V0KCk7XG4gICAgZnVuY3Rpb24gaW5zZXJ0KGJsb2NrKSB7XG4gICAgICAgIHRyYW5zaXRpb25faW4oYmxvY2ssIDEpO1xuICAgICAgICBibG9jay5tKG5vZGUsIG5leHQpO1xuICAgICAgICBsb29rdXAuc2V0KGJsb2NrLmtleSwgYmxvY2spO1xuICAgICAgICBuZXh0ID0gYmxvY2suZmlyc3Q7XG4gICAgICAgIG4tLTtcbiAgICB9XG4gICAgd2hpbGUgKG8gJiYgbikge1xuICAgICAgICBjb25zdCBuZXdfYmxvY2sgPSBuZXdfYmxvY2tzW24gLSAxXTtcbiAgICAgICAgY29uc3Qgb2xkX2Jsb2NrID0gb2xkX2Jsb2Nrc1tvIC0gMV07XG4gICAgICAgIGNvbnN0IG5ld19rZXkgPSBuZXdfYmxvY2sua2V5O1xuICAgICAgICBjb25zdCBvbGRfa2V5ID0gb2xkX2Jsb2NrLmtleTtcbiAgICAgICAgaWYgKG5ld19ibG9jayA9PT0gb2xkX2Jsb2NrKSB7XG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICBuZXh0ID0gbmV3X2Jsb2NrLmZpcnN0O1xuICAgICAgICAgICAgby0tO1xuICAgICAgICAgICAgbi0tO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCFuZXdfbG9va3VwLmhhcyhvbGRfa2V5KSkge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIG9sZCBibG9ja1xuICAgICAgICAgICAgZGVzdHJveShvbGRfYmxvY2ssIGxvb2t1cCk7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIWxvb2t1cC5oYXMobmV3X2tleSkgfHwgd2lsbF9tb3ZlLmhhcyhuZXdfa2V5KSkge1xuICAgICAgICAgICAgaW5zZXJ0KG5ld19ibG9jayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGlkX21vdmUuaGFzKG9sZF9rZXkpKSB7XG4gICAgICAgICAgICBvLS07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZGVsdGFzLmdldChuZXdfa2V5KSA+IGRlbHRhcy5nZXQob2xkX2tleSkpIHtcbiAgICAgICAgICAgIGRpZF9tb3ZlLmFkZChuZXdfa2V5KTtcbiAgICAgICAgICAgIGluc2VydChuZXdfYmxvY2spO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgd2lsbF9tb3ZlLmFkZChvbGRfa2V5KTtcbiAgICAgICAgICAgIG8tLTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aGlsZSAoby0tKSB7XG4gICAgICAgIGNvbnN0IG9sZF9ibG9jayA9IG9sZF9ibG9ja3Nbb107XG4gICAgICAgIGlmICghbmV3X2xvb2t1cC5oYXMob2xkX2Jsb2NrLmtleSkpXG4gICAgICAgICAgICBkZXN0cm95KG9sZF9ibG9jaywgbG9va3VwKTtcbiAgICB9XG4gICAgd2hpbGUgKG4pXG4gICAgICAgIGluc2VydChuZXdfYmxvY2tzW24gLSAxXSk7XG4gICAgcmV0dXJuIG5ld19ibG9ja3M7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9lYWNoX2tleXMoY3R4LCBsaXN0LCBnZXRfY29udGV4dCwgZ2V0X2tleSkge1xuICAgIGNvbnN0IGtleXMgPSBuZXcgU2V0KCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGdldF9rZXkoZ2V0X2NvbnRleHQoY3R4LCBsaXN0LCBpKSk7XG4gICAgICAgIGlmIChrZXlzLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBoYXZlIGR1cGxpY2F0ZSBrZXlzIGluIGEga2V5ZWQgZWFjaGApO1xuICAgICAgICB9XG4gICAgICAgIGtleXMuYWRkKGtleSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRfc3ByZWFkX3VwZGF0ZShsZXZlbHMsIHVwZGF0ZXMpIHtcbiAgICBjb25zdCB1cGRhdGUgPSB7fTtcbiAgICBjb25zdCB0b19udWxsX291dCA9IHt9O1xuICAgIGNvbnN0IGFjY291bnRlZF9mb3IgPSB7ICQkc2NvcGU6IDEgfTtcbiAgICBsZXQgaSA9IGxldmVscy5sZW5ndGg7XG4gICAgd2hpbGUgKGktLSkge1xuICAgICAgICBjb25zdCBvID0gbGV2ZWxzW2ldO1xuICAgICAgICBjb25zdCBuID0gdXBkYXRlc1tpXTtcbiAgICAgICAgaWYgKG4pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIG8pIHtcbiAgICAgICAgICAgICAgICBpZiAoIShrZXkgaW4gbikpXG4gICAgICAgICAgICAgICAgICAgIHRvX251bGxfb3V0W2tleV0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gbikge1xuICAgICAgICAgICAgICAgIGlmICghYWNjb3VudGVkX2ZvcltrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gbltrZXldO1xuICAgICAgICAgICAgICAgICAgICBhY2NvdW50ZWRfZm9yW2tleV0gPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldmVsc1tpXSA9IG47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvKSB7XG4gICAgICAgICAgICAgICAgYWNjb3VudGVkX2ZvcltrZXldID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0b19udWxsX291dCkge1xuICAgICAgICBpZiAoIShrZXkgaW4gdXBkYXRlKSlcbiAgICAgICAgICAgIHVwZGF0ZVtrZXldID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gdXBkYXRlO1xufVxuZnVuY3Rpb24gZ2V0X3NwcmVhZF9vYmplY3Qoc3ByZWFkX3Byb3BzKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcHJlYWRfcHJvcHMgPT09ICdvYmplY3QnICYmIHNwcmVhZF9wcm9wcyAhPT0gbnVsbCA/IHNwcmVhZF9wcm9wcyA6IHt9O1xufVxuXG4vLyBzb3VyY2U6IGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2luZGljZXMuaHRtbFxuY29uc3QgYm9vbGVhbl9hdHRyaWJ1dGVzID0gbmV3IFNldChbXG4gICAgJ2FsbG93ZnVsbHNjcmVlbicsXG4gICAgJ2FsbG93cGF5bWVudHJlcXVlc3QnLFxuICAgICdhc3luYycsXG4gICAgJ2F1dG9mb2N1cycsXG4gICAgJ2F1dG9wbGF5JyxcbiAgICAnY2hlY2tlZCcsXG4gICAgJ2NvbnRyb2xzJyxcbiAgICAnZGVmYXVsdCcsXG4gICAgJ2RlZmVyJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdmb3Jtbm92YWxpZGF0ZScsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2lzbWFwJyxcbiAgICAnbG9vcCcsXG4gICAgJ211bHRpcGxlJyxcbiAgICAnbXV0ZWQnLFxuICAgICdub21vZHVsZScsXG4gICAgJ25vdmFsaWRhdGUnLFxuICAgICdvcGVuJyxcbiAgICAncGxheXNpbmxpbmUnLFxuICAgICdyZWFkb25seScsXG4gICAgJ3JlcXVpcmVkJyxcbiAgICAncmV2ZXJzZWQnLFxuICAgICdzZWxlY3RlZCdcbl0pO1xuXG5jb25zdCBpbnZhbGlkX2F0dHJpYnV0ZV9uYW1lX2NoYXJhY3RlciA9IC9bXFxzJ1wiPi89XFx1e0ZERDB9LVxcdXtGREVGfVxcdXtGRkZFfVxcdXtGRkZGfVxcdXsxRkZGRX1cXHV7MUZGRkZ9XFx1ezJGRkZFfVxcdXsyRkZGRn1cXHV7M0ZGRkV9XFx1ezNGRkZGfVxcdXs0RkZGRX1cXHV7NEZGRkZ9XFx1ezVGRkZFfVxcdXs1RkZGRn1cXHV7NkZGRkV9XFx1ezZGRkZGfVxcdXs3RkZGRX1cXHV7N0ZGRkZ9XFx1ezhGRkZFfVxcdXs4RkZGRn1cXHV7OUZGRkV9XFx1ezlGRkZGfVxcdXtBRkZGRX1cXHV7QUZGRkZ9XFx1e0JGRkZFfVxcdXtCRkZGRn1cXHV7Q0ZGRkV9XFx1e0NGRkZGfVxcdXtERkZGRX1cXHV7REZGRkZ9XFx1e0VGRkZFfVxcdXtFRkZGRn1cXHV7RkZGRkV9XFx1e0ZGRkZGfVxcdXsxMEZGRkV9XFx1ezEwRkZGRn1dL3U7XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcbi8vIGh0dHBzOi8vaW5mcmEuc3BlYy53aGF0d2cub3JnLyNub25jaGFyYWN0ZXJcbmZ1bmN0aW9uIHNwcmVhZChhcmdzLCBjbGFzc2VzX3RvX2FkZCkge1xuICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSBPYmplY3QuYXNzaWduKHt9LCAuLi5hcmdzKTtcbiAgICBpZiAoY2xhc3Nlc190b19hZGQpIHtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMuY2xhc3MgPT0gbnVsbCkge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyA9IGNsYXNzZXNfdG9fYWRkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0cmlidXRlcy5jbGFzcyArPSAnICcgKyBjbGFzc2VzX3RvX2FkZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgc3RyID0gJyc7XG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgICAgaWYgKGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLnRlc3QobmFtZSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGNvbnN0IHZhbHVlID0gYXR0cmlidXRlc1tuYW1lXTtcbiAgICAgICAgaWYgKHZhbHVlID09PSB0cnVlKVxuICAgICAgICAgICAgc3RyICs9IFwiIFwiICsgbmFtZTtcbiAgICAgICAgZWxzZSBpZiAoYm9vbGVhbl9hdHRyaWJ1dGVzLmhhcyhuYW1lLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICAgICAgc3RyICs9IFwiIFwiICsgbmFtZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBzdHIgKz0gYCAke25hbWV9PVwiJHtTdHJpbmcodmFsdWUpLnJlcGxhY2UoL1wiL2csICcmIzM0OycpLnJlcGxhY2UoLycvZywgJyYjMzk7Jyl9XCJgO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IGVzY2FwZWQgPSB7XG4gICAgJ1wiJzogJyZxdW90OycsXG4gICAgXCInXCI6ICcmIzM5OycsXG4gICAgJyYnOiAnJmFtcDsnLFxuICAgICc8JzogJyZsdDsnLFxuICAgICc+JzogJyZndDsnXG59O1xuZnVuY3Rpb24gZXNjYXBlKGh0bWwpIHtcbiAgICByZXR1cm4gU3RyaW5nKGh0bWwpLnJlcGxhY2UoL1tcIicmPD5dL2csIG1hdGNoID0+IGVzY2FwZWRbbWF0Y2hdKTtcbn1cbmZ1bmN0aW9uIGVhY2goaXRlbXMsIGZuKSB7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgc3RyICs9IGZuKGl0ZW1zW2ldLCBpKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cjtcbn1cbmNvbnN0IG1pc3NpbmdfY29tcG9uZW50ID0ge1xuICAgICQkcmVuZGVyOiAoKSA9PiAnJ1xufTtcbmZ1bmN0aW9uIHZhbGlkYXRlX2NvbXBvbmVudChjb21wb25lbnQsIG5hbWUpIHtcbiAgICBpZiAoIWNvbXBvbmVudCB8fCAhY29tcG9uZW50LiQkcmVuZGVyKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnc3ZlbHRlOmNvbXBvbmVudCcpXG4gICAgICAgICAgICBuYW1lICs9ICcgdGhpcz17Li4ufSc7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgPCR7bmFtZX0+IGlzIG5vdCBhIHZhbGlkIFNTUiBjb21wb25lbnQuIFlvdSBtYXkgbmVlZCB0byByZXZpZXcgeW91ciBidWlsZCBjb25maWcgdG8gZW5zdXJlIHRoYXQgZGVwZW5kZW5jaWVzIGFyZSBjb21waWxlZCwgcmF0aGVyIHRoYW4gaW1wb3J0ZWQgYXMgcHJlLWNvbXBpbGVkIG1vZHVsZXNgKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmZ1bmN0aW9uIGRlYnVnKGZpbGUsIGxpbmUsIGNvbHVtbiwgdmFsdWVzKSB7XG4gICAgY29uc29sZS5sb2coYHtAZGVidWd9ICR7ZmlsZSA/IGZpbGUgKyAnICcgOiAnJ30oJHtsaW5lfToke2NvbHVtbn0pYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIGNvbnNvbGUubG9nKHZhbHVlcyk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgIHJldHVybiAnJztcbn1cbmxldCBvbl9kZXN0cm95O1xuZnVuY3Rpb24gY3JlYXRlX3Nzcl9jb21wb25lbnQoZm4pIHtcbiAgICBmdW5jdGlvbiAkJHJlbmRlcihyZXN1bHQsIHByb3BzLCBiaW5kaW5ncywgc2xvdHMpIHtcbiAgICAgICAgY29uc3QgcGFyZW50X2NvbXBvbmVudCA9IGN1cnJlbnRfY29tcG9uZW50O1xuICAgICAgICBjb25zdCAkJCA9IHtcbiAgICAgICAgICAgIG9uX2Rlc3Ryb3ksXG4gICAgICAgICAgICBjb250ZXh0OiBuZXcgTWFwKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSksXG4gICAgICAgICAgICAvLyB0aGVzZSB3aWxsIGJlIGltbWVkaWF0ZWx5IGRpc2NhcmRlZFxuICAgICAgICAgICAgb25fbW91bnQ6IFtdLFxuICAgICAgICAgICAgYmVmb3JlX3VwZGF0ZTogW10sXG4gICAgICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICAgICAgY2FsbGJhY2tzOiBibGFua19vYmplY3QoKVxuICAgICAgICB9O1xuICAgICAgICBzZXRfY3VycmVudF9jb21wb25lbnQoeyAkJCB9KTtcbiAgICAgICAgY29uc3QgaHRtbCA9IGZuKHJlc3VsdCwgcHJvcHMsIGJpbmRpbmdzLCBzbG90cyk7XG4gICAgICAgIHNldF9jdXJyZW50X2NvbXBvbmVudChwYXJlbnRfY29tcG9uZW50KTtcbiAgICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHJlbmRlcjogKHByb3BzID0ge30sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgb25fZGVzdHJveSA9IFtdO1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0geyB0aXRsZTogJycsIGhlYWQ6ICcnLCBjc3M6IG5ldyBTZXQoKSB9O1xuICAgICAgICAgICAgY29uc3QgaHRtbCA9ICQkcmVuZGVyKHJlc3VsdCwgcHJvcHMsIHt9LCBvcHRpb25zKTtcbiAgICAgICAgICAgIHJ1bl9hbGwob25fZGVzdHJveSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGh0bWwsXG4gICAgICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IEFycmF5LmZyb20ocmVzdWx0LmNzcykubWFwKGNzcyA9PiBjc3MuY29kZSkuam9pbignXFxuJyksXG4gICAgICAgICAgICAgICAgICAgIG1hcDogbnVsbCAvLyBUT0RPXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBoZWFkOiByZXN1bHQudGl0bGUgKyByZXN1bHQuaGVhZFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgJCRyZW5kZXJcbiAgICB9O1xufVxuZnVuY3Rpb24gYWRkX2F0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgYm9vbGVhbikge1xuICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IChib29sZWFuICYmICF2YWx1ZSkpXG4gICAgICAgIHJldHVybiAnJztcbiAgICByZXR1cm4gYCAke25hbWV9JHt2YWx1ZSA9PT0gdHJ1ZSA/ICcnIDogYD0ke3R5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyBKU09OLnN0cmluZ2lmeShlc2NhcGUodmFsdWUpKSA6IGBcIiR7dmFsdWV9XCJgfWB9YDtcbn1cbmZ1bmN0aW9uIGFkZF9jbGFzc2VzKGNsYXNzZXMpIHtcbiAgICByZXR1cm4gY2xhc3NlcyA/IGAgY2xhc3M9XCIke2NsYXNzZXN9XCJgIDogYGA7XG59XG5cbmZ1bmN0aW9uIGJpbmQoY29tcG9uZW50LCBuYW1lLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGluZGV4ID0gY29tcG9uZW50LiQkLnByb3BzW25hbWVdO1xuICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBvbmVudC4kJC5ib3VuZFtpbmRleF0gPSBjYWxsYmFjaztcbiAgICAgICAgY2FsbGJhY2soY29tcG9uZW50LiQkLmN0eFtpbmRleF0pO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZV9jb21wb25lbnQoYmxvY2spIHtcbiAgICBibG9jayAmJiBibG9jay5jKCk7XG59XG5mdW5jdGlvbiBjbGFpbV9jb21wb25lbnQoYmxvY2ssIHBhcmVudF9ub2Rlcykge1xuICAgIGJsb2NrICYmIGJsb2NrLmwocGFyZW50X25vZGVzKTtcbn1cbmZ1bmN0aW9uIG1vdW50X2NvbXBvbmVudChjb21wb25lbnQsIHRhcmdldCwgYW5jaG9yKSB7XG4gICAgY29uc3QgeyBmcmFnbWVudCwgb25fbW91bnQsIG9uX2Rlc3Ryb3ksIGFmdGVyX3VwZGF0ZSB9ID0gY29tcG9uZW50LiQkO1xuICAgIGZyYWdtZW50ICYmIGZyYWdtZW50Lm0odGFyZ2V0LCBhbmNob3IpO1xuICAgIC8vIG9uTW91bnQgaGFwcGVucyBiZWZvcmUgdGhlIGluaXRpYWwgYWZ0ZXJVcGRhdGVcbiAgICBhZGRfcmVuZGVyX2NhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgY29uc3QgbmV3X29uX2Rlc3Ryb3kgPSBvbl9tb3VudC5tYXAocnVuKS5maWx0ZXIoaXNfZnVuY3Rpb24pO1xuICAgICAgICBpZiAob25fZGVzdHJveSkge1xuICAgICAgICAgICAgb25fZGVzdHJveS5wdXNoKC4uLm5ld19vbl9kZXN0cm95KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIEVkZ2UgY2FzZSAtIGNvbXBvbmVudCB3YXMgZGVzdHJveWVkIGltbWVkaWF0ZWx5LFxuICAgICAgICAgICAgLy8gbW9zdCBsaWtlbHkgYXMgYSByZXN1bHQgb2YgYSBiaW5kaW5nIGluaXRpYWxpc2luZ1xuICAgICAgICAgICAgcnVuX2FsbChuZXdfb25fZGVzdHJveSk7XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LiQkLm9uX21vdW50ID0gW107XG4gICAgfSk7XG4gICAgYWZ0ZXJfdXBkYXRlLmZvckVhY2goYWRkX3JlbmRlcl9jYWxsYmFjayk7XG59XG5mdW5jdGlvbiBkZXN0cm95X2NvbXBvbmVudChjb21wb25lbnQsIGRldGFjaGluZykge1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkO1xuICAgIGlmICgkJC5mcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBydW5fYWxsKCQkLm9uX2Rlc3Ryb3kpO1xuICAgICAgICAkJC5mcmFnbWVudCAmJiAkJC5mcmFnbWVudC5kKGRldGFjaGluZyk7XG4gICAgICAgIC8vIFRPRE8gbnVsbCBvdXQgb3RoZXIgcmVmcywgaW5jbHVkaW5nIGNvbXBvbmVudC4kJCAoYnV0IG5lZWQgdG9cbiAgICAgICAgLy8gcHJlc2VydmUgZmluYWwgc3RhdGU/KVxuICAgICAgICAkJC5vbl9kZXN0cm95ID0gJCQuZnJhZ21lbnQgPSBudWxsO1xuICAgICAgICAkJC5jdHggPSBbXTtcbiAgICB9XG59XG5mdW5jdGlvbiBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSkge1xuICAgIGlmIChjb21wb25lbnQuJCQuZGlydHlbMF0gPT09IC0xKSB7XG4gICAgICAgIGRpcnR5X2NvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xuICAgICAgICBzY2hlZHVsZV91cGRhdGUoKTtcbiAgICAgICAgY29tcG9uZW50LiQkLmRpcnR5LmZpbGwoMCk7XG4gICAgfVxuICAgIGNvbXBvbmVudC4kJC5kaXJ0eVsoaSAvIDMxKSB8IDBdIHw9ICgxIDw8IChpICUgMzEpKTtcbn1cbmZ1bmN0aW9uIGluaXQoY29tcG9uZW50LCBvcHRpb25zLCBpbnN0YW5jZSwgY3JlYXRlX2ZyYWdtZW50LCBub3RfZXF1YWwsIHByb3BzLCBkaXJ0eSA9IFstMV0pIHtcbiAgICBjb25zdCBwYXJlbnRfY29tcG9uZW50ID0gY3VycmVudF9jb21wb25lbnQ7XG4gICAgc2V0X2N1cnJlbnRfY29tcG9uZW50KGNvbXBvbmVudCk7XG4gICAgY29uc3QgcHJvcF92YWx1ZXMgPSBvcHRpb25zLnByb3BzIHx8IHt9O1xuICAgIGNvbnN0ICQkID0gY29tcG9uZW50LiQkID0ge1xuICAgICAgICBmcmFnbWVudDogbnVsbCxcbiAgICAgICAgY3R4OiBudWxsLFxuICAgICAgICAvLyBzdGF0ZVxuICAgICAgICBwcm9wcyxcbiAgICAgICAgdXBkYXRlOiBub29wLFxuICAgICAgICBub3RfZXF1YWwsXG4gICAgICAgIGJvdW5kOiBibGFua19vYmplY3QoKSxcbiAgICAgICAgLy8gbGlmZWN5Y2xlXG4gICAgICAgIG9uX21vdW50OiBbXSxcbiAgICAgICAgb25fZGVzdHJveTogW10sXG4gICAgICAgIGJlZm9yZV91cGRhdGU6IFtdLFxuICAgICAgICBhZnRlcl91cGRhdGU6IFtdLFxuICAgICAgICBjb250ZXh0OiBuZXcgTWFwKHBhcmVudF9jb21wb25lbnQgPyBwYXJlbnRfY29tcG9uZW50LiQkLmNvbnRleHQgOiBbXSksXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICBjYWxsYmFja3M6IGJsYW5rX29iamVjdCgpLFxuICAgICAgICBkaXJ0eVxuICAgIH07XG4gICAgbGV0IHJlYWR5ID0gZmFsc2U7XG4gICAgJCQuY3R4ID0gaW5zdGFuY2VcbiAgICAgICAgPyBpbnN0YW5jZShjb21wb25lbnQsIHByb3BfdmFsdWVzLCAoaSwgcmV0LCAuLi5yZXN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJlc3QubGVuZ3RoID8gcmVzdFswXSA6IHJldDtcbiAgICAgICAgICAgIGlmICgkJC5jdHggJiYgbm90X2VxdWFsKCQkLmN0eFtpXSwgJCQuY3R4W2ldID0gdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQkLmJvdW5kW2ldKVxuICAgICAgICAgICAgICAgICAgICAkJC5ib3VuZFtpXSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWR5KVxuICAgICAgICAgICAgICAgICAgICBtYWtlX2RpcnR5KGNvbXBvbmVudCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9KVxuICAgICAgICA6IFtdO1xuICAgICQkLnVwZGF0ZSgpO1xuICAgIHJlYWR5ID0gdHJ1ZTtcbiAgICBydW5fYWxsKCQkLmJlZm9yZV91cGRhdGUpO1xuICAgIC8vIGBmYWxzZWAgYXMgYSBzcGVjaWFsIGNhc2Ugb2Ygbm8gRE9NIGNvbXBvbmVudFxuICAgICQkLmZyYWdtZW50ID0gY3JlYXRlX2ZyYWdtZW50ID8gY3JlYXRlX2ZyYWdtZW50KCQkLmN0eCkgOiBmYWxzZTtcbiAgICBpZiAob3B0aW9ucy50YXJnZXQpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaHlkcmF0ZSkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZXMgPSBjaGlsZHJlbihvcHRpb25zLnRhcmdldCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQubChub2Rlcyk7XG4gICAgICAgICAgICBub2Rlcy5mb3JFYWNoKGRldGFjaCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLW5vbi1udWxsLWFzc2VydGlvblxuICAgICAgICAgICAgJCQuZnJhZ21lbnQgJiYgJCQuZnJhZ21lbnQuYygpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmludHJvKVxuICAgICAgICAgICAgdHJhbnNpdGlvbl9pbihjb21wb25lbnQuJCQuZnJhZ21lbnQpO1xuICAgICAgICBtb3VudF9jb21wb25lbnQoY29tcG9uZW50LCBvcHRpb25zLnRhcmdldCwgb3B0aW9ucy5hbmNob3IpO1xuICAgICAgICBmbHVzaCgpO1xuICAgIH1cbiAgICBzZXRfY3VycmVudF9jb21wb25lbnQocGFyZW50X2NvbXBvbmVudCk7XG59XG5sZXQgU3ZlbHRlRWxlbWVudDtcbmlmICh0eXBlb2YgSFRNTEVsZW1lbnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBTdmVsdGVFbGVtZW50ID0gY2xhc3MgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSB0b2RvOiBpbXByb3ZlIHR5cGluZ3NcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuJCQuc2xvdHRlZCkge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgdG9kbzogaW1wcm92ZSB0eXBpbmdzXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLiQkLnNsb3R0ZWRba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGF0dHIsIF9vbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXNbYXR0cl0gPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgICAgIGRlc3Ryb3lfY29tcG9uZW50KHRoaXMsIDEpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgICAgIH1cbiAgICAgICAgJG9uKHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIGRlbGVnYXRlIHRvIGFkZEV2ZW50TGlzdGVuZXI/XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgICRzZXQoKSB7XG4gICAgICAgICAgICAvLyBvdmVycmlkZGVuIGJ5IGluc3RhbmNlLCBpZiBpdCBoYXMgcHJvcHNcbiAgICAgICAgfVxuICAgIH07XG59XG5jbGFzcyBTdmVsdGVDb21wb25lbnQge1xuICAgICRkZXN0cm95KCkge1xuICAgICAgICBkZXN0cm95X2NvbXBvbmVudCh0aGlzLCAxKTtcbiAgICAgICAgdGhpcy4kZGVzdHJveSA9IG5vb3A7XG4gICAgfVxuICAgICRvbih0eXBlLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSAodGhpcy4kJC5jYWxsYmFja3NbdHlwZV0gfHwgKHRoaXMuJCQuY2FsbGJhY2tzW3R5cGVdID0gW10pKTtcbiAgICAgICAgY2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBjYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICAkc2V0KCkge1xuICAgICAgICAvLyBvdmVycmlkZGVuIGJ5IGluc3RhbmNlLCBpZiBpdCBoYXMgcHJvcHNcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BhdGNoX2Rldih0eXBlLCBkZXRhaWwpIHtcbiAgICBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGN1c3RvbV9ldmVudCh0eXBlLCBPYmplY3QuYXNzaWduKHsgdmVyc2lvbjogJzMuMjMuMicgfSwgZGV0YWlsKSkpO1xufVxuZnVuY3Rpb24gYXBwZW5kX2Rldih0YXJnZXQsIG5vZGUpIHtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01JbnNlcnRcIiwgeyB0YXJnZXQsIG5vZGUgfSk7XG4gICAgYXBwZW5kKHRhcmdldCwgbm9kZSk7XG59XG5mdW5jdGlvbiBpbnNlcnRfZGV2KHRhcmdldCwgbm9kZSwgYW5jaG9yKSB7XG4gICAgZGlzcGF0Y2hfZGV2KFwiU3ZlbHRlRE9NSW5zZXJ0XCIsIHsgdGFyZ2V0LCBub2RlLCBhbmNob3IgfSk7XG4gICAgaW5zZXJ0KHRhcmdldCwgbm9kZSwgYW5jaG9yKTtcbn1cbmZ1bmN0aW9uIGRldGFjaF9kZXYobm9kZSkge1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVJlbW92ZVwiLCB7IG5vZGUgfSk7XG4gICAgZGV0YWNoKG5vZGUpO1xufVxuZnVuY3Rpb24gZGV0YWNoX2JldHdlZW5fZGV2KGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nICYmIGJlZm9yZS5uZXh0U2libGluZyAhPT0gYWZ0ZXIpIHtcbiAgICAgICAgZGV0YWNoX2RldihiZWZvcmUubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGRldGFjaF9iZWZvcmVfZGV2KGFmdGVyKSB7XG4gICAgd2hpbGUgKGFmdGVyLnByZXZpb3VzU2libGluZykge1xuICAgICAgICBkZXRhY2hfZGV2KGFmdGVyLnByZXZpb3VzU2libGluZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZGV0YWNoX2FmdGVyX2RldihiZWZvcmUpIHtcbiAgICB3aGlsZSAoYmVmb3JlLm5leHRTaWJsaW5nKSB7XG4gICAgICAgIGRldGFjaF9kZXYoYmVmb3JlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiBsaXN0ZW5fZGV2KG5vZGUsIGV2ZW50LCBoYW5kbGVyLCBvcHRpb25zLCBoYXNfcHJldmVudF9kZWZhdWx0LCBoYXNfc3RvcF9wcm9wYWdhdGlvbikge1xuICAgIGNvbnN0IG1vZGlmaWVycyA9IG9wdGlvbnMgPT09IHRydWUgPyBbXCJjYXB0dXJlXCJdIDogb3B0aW9ucyA/IEFycmF5LmZyb20oT2JqZWN0LmtleXMob3B0aW9ucykpIDogW107XG4gICAgaWYgKGhhc19wcmV2ZW50X2RlZmF1bHQpXG4gICAgICAgIG1vZGlmaWVycy5wdXNoKCdwcmV2ZW50RGVmYXVsdCcpO1xuICAgIGlmIChoYXNfc3RvcF9wcm9wYWdhdGlvbilcbiAgICAgICAgbW9kaWZpZXJzLnB1c2goJ3N0b3BQcm9wYWdhdGlvbicpO1xuICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTUFkZEV2ZW50TGlzdGVuZXJcIiwgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgIGNvbnN0IGRpc3Bvc2UgPSBsaXN0ZW4obm9kZSwgZXZlbnQsIGhhbmRsZXIsIG9wdGlvbnMpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoX2RldihcIlN2ZWx0ZURPTVJlbW92ZUV2ZW50TGlzdGVuZXJcIiwgeyBub2RlLCBldmVudCwgaGFuZGxlciwgbW9kaWZpZXJzIH0pO1xuICAgICAgICBkaXNwb3NlKCk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGF0dHJfZGV2KG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpIHtcbiAgICBhdHRyKG5vZGUsIGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgIGlmICh2YWx1ZSA9PSBudWxsKVxuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01SZW1vdmVBdHRyaWJ1dGVcIiwgeyBub2RlLCBhdHRyaWJ1dGUgfSk7XG4gICAgZWxzZVxuICAgICAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXRBdHRyaWJ1dGVcIiwgeyBub2RlLCBhdHRyaWJ1dGUsIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gcHJvcF9kZXYobm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgbm9kZVtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXRQcm9wZXJ0eVwiLCB7IG5vZGUsIHByb3BlcnR5LCB2YWx1ZSB9KTtcbn1cbmZ1bmN0aW9uIGRhdGFzZXRfZGV2KG5vZGUsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIG5vZGUuZGF0YXNldFtwcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXREYXRhc2V0XCIsIHsgbm9kZSwgcHJvcGVydHksIHZhbHVlIH0pO1xufVxuZnVuY3Rpb24gc2V0X2RhdGFfZGV2KHRleHQsIGRhdGEpIHtcbiAgICBkYXRhID0gJycgKyBkYXRhO1xuICAgIGlmICh0ZXh0LmRhdGEgPT09IGRhdGEpXG4gICAgICAgIHJldHVybjtcbiAgICBkaXNwYXRjaF9kZXYoXCJTdmVsdGVET01TZXREYXRhXCIsIHsgbm9kZTogdGV4dCwgZGF0YSB9KTtcbiAgICB0ZXh0LmRhdGEgPSBkYXRhO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVfZWFjaF9hcmd1bWVudChhcmcpIHtcbiAgICBpZiAodHlwZW9mIGFyZyAhPT0gJ3N0cmluZycgJiYgIShhcmcgJiYgdHlwZW9mIGFyZyA9PT0gJ29iamVjdCcgJiYgJ2xlbmd0aCcgaW4gYXJnKSkge1xuICAgICAgICBsZXQgbXNnID0gJ3sjZWFjaH0gb25seSBpdGVyYXRlcyBvdmVyIGFycmF5LWxpa2Ugb2JqZWN0cy4nO1xuICAgICAgICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBhcmcgJiYgU3ltYm9sLml0ZXJhdG9yIGluIGFyZykge1xuICAgICAgICAgICAgbXNnICs9ICcgWW91IGNhbiB1c2UgYSBzcHJlYWQgdG8gY29udmVydCB0aGlzIGl0ZXJhYmxlIGludG8gYW4gYXJyYXkuJztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG59XG5mdW5jdGlvbiB2YWxpZGF0ZV9zbG90cyhuYW1lLCBzbG90LCBrZXlzKSB7XG4gICAgZm9yIChjb25zdCBzbG90X2tleSBvZiBPYmplY3Qua2V5cyhzbG90KSkge1xuICAgICAgICBpZiAoIX5rZXlzLmluZGV4T2Yoc2xvdF9rZXkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYDwke25hbWV9PiByZWNlaXZlZCBhbiB1bmV4cGVjdGVkIHNsb3QgXCIke3Nsb3Rfa2V5fVwiLmApO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgU3ZlbHRlQ29tcG9uZW50RGV2IGV4dGVuZHMgU3ZlbHRlQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIGlmICghb3B0aW9ucyB8fCAoIW9wdGlvbnMudGFyZ2V0ICYmICFvcHRpb25zLiQkaW5saW5lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAndGFyZ2V0JyBpcyBhIHJlcXVpcmVkIG9wdGlvbmApO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuICAgICRkZXN0cm95KCkge1xuICAgICAgICBzdXBlci4kZGVzdHJveSgpO1xuICAgICAgICB0aGlzLiRkZXN0cm95ID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBDb21wb25lbnQgd2FzIGFscmVhZHkgZGVzdHJveWVkYCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tY29uc29sZVxuICAgICAgICB9O1xuICAgIH1cbiAgICAkY2FwdHVyZV9zdGF0ZSgpIHsgfVxuICAgICRpbmplY3Rfc3RhdGUoKSB7IH1cbn1cbmZ1bmN0aW9uIGxvb3BfZ3VhcmQodGltZW91dCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHN0YXJ0ID4gdGltZW91dCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbmZpbml0ZSBsb29wIGRldGVjdGVkYCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5leHBvcnQgeyBIdG1sVGFnLCBTdmVsdGVDb21wb25lbnQsIFN2ZWx0ZUNvbXBvbmVudERldiwgU3ZlbHRlRWxlbWVudCwgYWN0aW9uX2Rlc3Ryb3llciwgYWRkX2F0dHJpYnV0ZSwgYWRkX2NsYXNzZXMsIGFkZF9mbHVzaF9jYWxsYmFjaywgYWRkX2xvY2F0aW9uLCBhZGRfcmVuZGVyX2NhbGxiYWNrLCBhZGRfcmVzaXplX2xpc3RlbmVyLCBhZGRfdHJhbnNmb3JtLCBhZnRlclVwZGF0ZSwgYXBwZW5kLCBhcHBlbmRfZGV2LCBhc3NpZ24sIGF0dHIsIGF0dHJfZGV2LCBiZWZvcmVVcGRhdGUsIGJpbmQsIGJpbmRpbmdfY2FsbGJhY2tzLCBibGFua19vYmplY3QsIGJ1YmJsZSwgY2hlY2tfb3V0cm9zLCBjaGlsZHJlbiwgY2xhaW1fY29tcG9uZW50LCBjbGFpbV9lbGVtZW50LCBjbGFpbV9zcGFjZSwgY2xhaW1fdGV4dCwgY2xlYXJfbG9vcHMsIGNvbXBvbmVudF9zdWJzY3JpYmUsIGNvbXB1dGVfcmVzdF9wcm9wcywgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBjcmVhdGVfYW5pbWF0aW9uLCBjcmVhdGVfYmlkaXJlY3Rpb25hbF90cmFuc2l0aW9uLCBjcmVhdGVfY29tcG9uZW50LCBjcmVhdGVfaW5fdHJhbnNpdGlvbiwgY3JlYXRlX291dF90cmFuc2l0aW9uLCBjcmVhdGVfc2xvdCwgY3JlYXRlX3Nzcl9jb21wb25lbnQsIGN1cnJlbnRfY29tcG9uZW50LCBjdXN0b21fZXZlbnQsIGRhdGFzZXRfZGV2LCBkZWJ1ZywgZGVzdHJveV9ibG9jaywgZGVzdHJveV9jb21wb25lbnQsIGRlc3Ryb3lfZWFjaCwgZGV0YWNoLCBkZXRhY2hfYWZ0ZXJfZGV2LCBkZXRhY2hfYmVmb3JlX2RldiwgZGV0YWNoX2JldHdlZW5fZGV2LCBkZXRhY2hfZGV2LCBkaXJ0eV9jb21wb25lbnRzLCBkaXNwYXRjaF9kZXYsIGVhY2gsIGVsZW1lbnQsIGVsZW1lbnRfaXMsIGVtcHR5LCBlc2NhcGUsIGVzY2FwZWQsIGV4Y2x1ZGVfaW50ZXJuYWxfcHJvcHMsIGZpeF9hbmRfZGVzdHJveV9ibG9jaywgZml4X2FuZF9vdXRyb19hbmRfZGVzdHJveV9ibG9jaywgZml4X3Bvc2l0aW9uLCBmbHVzaCwgZ2V0Q29udGV4dCwgZ2V0X2JpbmRpbmdfZ3JvdXBfdmFsdWUsIGdldF9jdXJyZW50X2NvbXBvbmVudCwgZ2V0X3Nsb3RfY2hhbmdlcywgZ2V0X3Nsb3RfY29udGV4dCwgZ2V0X3NwcmVhZF9vYmplY3QsIGdldF9zcHJlYWRfdXBkYXRlLCBnZXRfc3RvcmVfdmFsdWUsIGdsb2JhbHMsIGdyb3VwX291dHJvcywgaGFuZGxlX3Byb21pc2UsIGhhc19wcm9wLCBpZGVudGl0eSwgaW5pdCwgaW5zZXJ0LCBpbnNlcnRfZGV2LCBpbnRyb3MsIGludmFsaWRfYXR0cmlidXRlX25hbWVfY2hhcmFjdGVyLCBpc19jbGllbnQsIGlzX2Nyb3Nzb3JpZ2luLCBpc19mdW5jdGlvbiwgaXNfcHJvbWlzZSwgbGlzdGVuLCBsaXN0ZW5fZGV2LCBsb29wLCBsb29wX2d1YXJkLCBtaXNzaW5nX2NvbXBvbmVudCwgbW91bnRfY29tcG9uZW50LCBub29wLCBub3RfZXF1YWwsIG5vdywgbnVsbF90b19lbXB0eSwgb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllcywgb25EZXN0cm95LCBvbk1vdW50LCBvbmNlLCBvdXRyb19hbmRfZGVzdHJveV9ibG9jaywgcHJldmVudF9kZWZhdWx0LCBwcm9wX2RldiwgcXVlcnlfc2VsZWN0b3JfYWxsLCByYWYsIHJ1biwgcnVuX2FsbCwgc2FmZV9ub3RfZXF1YWwsIHNjaGVkdWxlX3VwZGF0ZSwgc2VsZWN0X211bHRpcGxlX3ZhbHVlLCBzZWxlY3Rfb3B0aW9uLCBzZWxlY3Rfb3B0aW9ucywgc2VsZWN0X3ZhbHVlLCBzZWxmLCBzZXRDb250ZXh0LCBzZXRfYXR0cmlidXRlcywgc2V0X2N1cnJlbnRfY29tcG9uZW50LCBzZXRfY3VzdG9tX2VsZW1lbnRfZGF0YSwgc2V0X2RhdGEsIHNldF9kYXRhX2Rldiwgc2V0X2lucHV0X3R5cGUsIHNldF9pbnB1dF92YWx1ZSwgc2V0X25vdywgc2V0X3JhZiwgc2V0X3N0b3JlX3ZhbHVlLCBzZXRfc3R5bGUsIHNldF9zdmdfYXR0cmlidXRlcywgc3BhY2UsIHNwcmVhZCwgc3RvcF9wcm9wYWdhdGlvbiwgc3Vic2NyaWJlLCBzdmdfZWxlbWVudCwgdGV4dCwgdGljaywgdGltZV9yYW5nZXNfdG9fYXJyYXksIHRvX251bWJlciwgdG9nZ2xlX2NsYXNzLCB0cmFuc2l0aW9uX2luLCB0cmFuc2l0aW9uX291dCwgdXBkYXRlX2tleWVkX2VhY2gsIHVwZGF0ZV9zbG90LCB2YWxpZGF0ZV9jb21wb25lbnQsIHZhbGlkYXRlX2VhY2hfYXJndW1lbnQsIHZhbGlkYXRlX2VhY2hfa2V5cywgdmFsaWRhdGVfc2xvdHMsIHZhbGlkYXRlX3N0b3JlLCB4bGlua19hdHRyIH07XG4iLCJleHBvcnQgeyBpZGVudGl0eSBhcyBsaW5lYXIgfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5cbi8qXG5BZGFwdGVkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL21hdHRkZXNsXG5EaXN0cmlidXRlZCB1bmRlciBNSVQgTGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vbWF0dGRlc2wvZWFzZXMvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZFxuKi9cbmZ1bmN0aW9uIGJhY2tJbk91dCh0KSB7XG4gICAgY29uc3QgcyA9IDEuNzAxNTggKiAxLjUyNTtcbiAgICBpZiAoKHQgKj0gMikgPCAxKVxuICAgICAgICByZXR1cm4gMC41ICogKHQgKiB0ICogKChzICsgMSkgKiB0IC0gcykpO1xuICAgIHJldHVybiAwLjUgKiAoKHQgLT0gMikgKiB0ICogKChzICsgMSkgKiB0ICsgcykgKyAyKTtcbn1cbmZ1bmN0aW9uIGJhY2tJbih0KSB7XG4gICAgY29uc3QgcyA9IDEuNzAxNTg7XG4gICAgcmV0dXJuIHQgKiB0ICogKChzICsgMSkgKiB0IC0gcyk7XG59XG5mdW5jdGlvbiBiYWNrT3V0KHQpIHtcbiAgICBjb25zdCBzID0gMS43MDE1ODtcbiAgICByZXR1cm4gLS10ICogdCAqICgocyArIDEpICogdCArIHMpICsgMTtcbn1cbmZ1bmN0aW9uIGJvdW5jZU91dCh0KSB7XG4gICAgY29uc3QgYSA9IDQuMCAvIDExLjA7XG4gICAgY29uc3QgYiA9IDguMCAvIDExLjA7XG4gICAgY29uc3QgYyA9IDkuMCAvIDEwLjA7XG4gICAgY29uc3QgY2EgPSA0MzU2LjAgLyAzNjEuMDtcbiAgICBjb25zdCBjYiA9IDM1NDQyLjAgLyAxODA1LjA7XG4gICAgY29uc3QgY2MgPSAxNjA2MS4wIC8gMTgwNS4wO1xuICAgIGNvbnN0IHQyID0gdCAqIHQ7XG4gICAgcmV0dXJuIHQgPCBhXG4gICAgICAgID8gNy41NjI1ICogdDJcbiAgICAgICAgOiB0IDwgYlxuICAgICAgICAgICAgPyA5LjA3NSAqIHQyIC0gOS45ICogdCArIDMuNFxuICAgICAgICAgICAgOiB0IDwgY1xuICAgICAgICAgICAgICAgID8gY2EgKiB0MiAtIGNiICogdCArIGNjXG4gICAgICAgICAgICAgICAgOiAxMC44ICogdCAqIHQgLSAyMC41MiAqIHQgKyAxMC43Mjtcbn1cbmZ1bmN0aW9uIGJvdW5jZUluT3V0KHQpIHtcbiAgICByZXR1cm4gdCA8IDAuNVxuICAgICAgICA/IDAuNSAqICgxLjAgLSBib3VuY2VPdXQoMS4wIC0gdCAqIDIuMCkpXG4gICAgICAgIDogMC41ICogYm91bmNlT3V0KHQgKiAyLjAgLSAxLjApICsgMC41O1xufVxuZnVuY3Rpb24gYm91bmNlSW4odCkge1xuICAgIHJldHVybiAxLjAgLSBib3VuY2VPdXQoMS4wIC0gdCk7XG59XG5mdW5jdGlvbiBjaXJjSW5PdXQodCkge1xuICAgIGlmICgodCAqPSAyKSA8IDEpXG4gICAgICAgIHJldHVybiAtMC41ICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSk7XG4gICAgcmV0dXJuIDAuNSAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKTtcbn1cbmZ1bmN0aW9uIGNpcmNJbih0KSB7XG4gICAgcmV0dXJuIDEuMCAtIE1hdGguc3FydCgxLjAgLSB0ICogdCk7XG59XG5mdW5jdGlvbiBjaXJjT3V0KHQpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KDEgLSAtLXQgKiB0KTtcbn1cbmZ1bmN0aW9uIGN1YmljSW5PdXQodCkge1xuICAgIHJldHVybiB0IDwgMC41ID8gNC4wICogdCAqIHQgKiB0IDogMC41ICogTWF0aC5wb3coMi4wICogdCAtIDIuMCwgMy4wKSArIDEuMDtcbn1cbmZ1bmN0aW9uIGN1YmljSW4odCkge1xuICAgIHJldHVybiB0ICogdCAqIHQ7XG59XG5mdW5jdGlvbiBjdWJpY091dCh0KSB7XG4gICAgY29uc3QgZiA9IHQgLSAxLjA7XG4gICAgcmV0dXJuIGYgKiBmICogZiArIDEuMDtcbn1cbmZ1bmN0aW9uIGVsYXN0aWNJbk91dCh0KSB7XG4gICAgcmV0dXJuIHQgPCAwLjVcbiAgICAgICAgPyAwLjUgKlxuICAgICAgICAgICAgTWF0aC5zaW4oKCgrMTMuMCAqIE1hdGguUEkpIC8gMikgKiAyLjAgKiB0KSAqXG4gICAgICAgICAgICBNYXRoLnBvdygyLjAsIDEwLjAgKiAoMi4wICogdCAtIDEuMCkpXG4gICAgICAgIDogMC41ICpcbiAgICAgICAgICAgIE1hdGguc2luKCgoLTEzLjAgKiBNYXRoLlBJKSAvIDIpICogKDIuMCAqIHQgLSAxLjAgKyAxLjApKSAqXG4gICAgICAgICAgICBNYXRoLnBvdygyLjAsIC0xMC4wICogKDIuMCAqIHQgLSAxLjApKSArXG4gICAgICAgICAgICAxLjA7XG59XG5mdW5jdGlvbiBlbGFzdGljSW4odCkge1xuICAgIHJldHVybiBNYXRoLnNpbigoMTMuMCAqIHQgKiBNYXRoLlBJKSAvIDIpICogTWF0aC5wb3coMi4wLCAxMC4wICogKHQgLSAxLjApKTtcbn1cbmZ1bmN0aW9uIGVsYXN0aWNPdXQodCkge1xuICAgIHJldHVybiAoTWF0aC5zaW4oKC0xMy4wICogKHQgKyAxLjApICogTWF0aC5QSSkgLyAyKSAqIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KSArIDEuMCk7XG59XG5mdW5jdGlvbiBleHBvSW5PdXQodCkge1xuICAgIHJldHVybiB0ID09PSAwLjAgfHwgdCA9PT0gMS4wXG4gICAgICAgID8gdFxuICAgICAgICA6IHQgPCAwLjVcbiAgICAgICAgICAgID8gKzAuNSAqIE1hdGgucG93KDIuMCwgMjAuMCAqIHQgLSAxMC4wKVxuICAgICAgICAgICAgOiAtMC41ICogTWF0aC5wb3coMi4wLCAxMC4wIC0gdCAqIDIwLjApICsgMS4wO1xufVxuZnVuY3Rpb24gZXhwb0luKHQpIHtcbiAgICByZXR1cm4gdCA9PT0gMC4wID8gdCA6IE1hdGgucG93KDIuMCwgMTAuMCAqICh0IC0gMS4wKSk7XG59XG5mdW5jdGlvbiBleHBvT3V0KHQpIHtcbiAgICByZXR1cm4gdCA9PT0gMS4wID8gdCA6IDEuMCAtIE1hdGgucG93KDIuMCwgLTEwLjAgKiB0KTtcbn1cbmZ1bmN0aW9uIHF1YWRJbk91dCh0KSB7XG4gICAgdCAvPSAwLjU7XG4gICAgaWYgKHQgPCAxKVxuICAgICAgICByZXR1cm4gMC41ICogdCAqIHQ7XG4gICAgdC0tO1xuICAgIHJldHVybiAtMC41ICogKHQgKiAodCAtIDIpIC0gMSk7XG59XG5mdW5jdGlvbiBxdWFkSW4odCkge1xuICAgIHJldHVybiB0ICogdDtcbn1cbmZ1bmN0aW9uIHF1YWRPdXQodCkge1xuICAgIHJldHVybiAtdCAqICh0IC0gMi4wKTtcbn1cbmZ1bmN0aW9uIHF1YXJ0SW5PdXQodCkge1xuICAgIHJldHVybiB0IDwgMC41XG4gICAgICAgID8gKzguMCAqIE1hdGgucG93KHQsIDQuMClcbiAgICAgICAgOiAtOC4wICogTWF0aC5wb3codCAtIDEuMCwgNC4wKSArIDEuMDtcbn1cbmZ1bmN0aW9uIHF1YXJ0SW4odCkge1xuICAgIHJldHVybiBNYXRoLnBvdyh0LCA0LjApO1xufVxuZnVuY3Rpb24gcXVhcnRPdXQodCkge1xuICAgIHJldHVybiBNYXRoLnBvdyh0IC0gMS4wLCAzLjApICogKDEuMCAtIHQpICsgMS4wO1xufVxuZnVuY3Rpb24gcXVpbnRJbk91dCh0KSB7XG4gICAgaWYgKCh0ICo9IDIpIDwgMSlcbiAgICAgICAgcmV0dXJuIDAuNSAqIHQgKiB0ICogdCAqIHQgKiB0O1xuICAgIHJldHVybiAwLjUgKiAoKHQgLT0gMikgKiB0ICogdCAqIHQgKiB0ICsgMik7XG59XG5mdW5jdGlvbiBxdWludEluKHQpIHtcbiAgICByZXR1cm4gdCAqIHQgKiB0ICogdCAqIHQ7XG59XG5mdW5jdGlvbiBxdWludE91dCh0KSB7XG4gICAgcmV0dXJuIC0tdCAqIHQgKiB0ICogdCAqIHQgKyAxO1xufVxuZnVuY3Rpb24gc2luZUluT3V0KHQpIHtcbiAgICByZXR1cm4gLTAuNSAqIChNYXRoLmNvcyhNYXRoLlBJICogdCkgLSAxKTtcbn1cbmZ1bmN0aW9uIHNpbmVJbih0KSB7XG4gICAgY29uc3QgdiA9IE1hdGguY29zKHQgKiBNYXRoLlBJICogMC41KTtcbiAgICBpZiAoTWF0aC5hYnModikgPCAxZS0xNClcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gMSAtIHY7XG59XG5mdW5jdGlvbiBzaW5lT3V0KHQpIHtcbiAgICByZXR1cm4gTWF0aC5zaW4oKHQgKiBNYXRoLlBJKSAvIDIpO1xufVxuXG5leHBvcnQgeyBiYWNrSW4sIGJhY2tJbk91dCwgYmFja091dCwgYm91bmNlSW4sIGJvdW5jZUluT3V0LCBib3VuY2VPdXQsIGNpcmNJbiwgY2lyY0luT3V0LCBjaXJjT3V0LCBjdWJpY0luLCBjdWJpY0luT3V0LCBjdWJpY091dCwgZWxhc3RpY0luLCBlbGFzdGljSW5PdXQsIGVsYXN0aWNPdXQsIGV4cG9JbiwgZXhwb0luT3V0LCBleHBvT3V0LCBxdWFkSW4sIHF1YWRJbk91dCwgcXVhZE91dCwgcXVhcnRJbiwgcXVhcnRJbk91dCwgcXVhcnRPdXQsIHF1aW50SW4sIHF1aW50SW5PdXQsIHF1aW50T3V0LCBzaW5lSW4sIHNpbmVJbk91dCwgc2luZU91dCB9O1xuIiwiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBmYWRlLCBibHVyIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHF1aW50SW5PdXQgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcbiAgICBpbXBvcnQgeyBvbk1vdW50IH0gZnJvbSAnc3ZlbHRlJztcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJ1xuICAgIGxldCB2aXNpYmxlID0gZmFsc2U7XG4gICAgb25Nb3VudCgoKSA9PiB2aXNpYmxlID0gdHJ1ZSlcbjwvc2NyaXB0PlxuPFRyYW5zPlxuPGRpdiBpZD1cImxvZ28taG9sZGVyXCI+XG4gICAgPGRpdj5cbiAgICB7I2lmIHZpc2libGV9XG4gICAgPGEgcHJlZmV0Y2ggaHJlZj1cInF1aXpcIj5cbiAgICA8aW1nIHNyYz1cIk1ZRGxvZ29fbGFyZ2UucG5nXCIgYWx0PVwiTWluZCB5b3VyIGRhdGEgbG9nbywgY2xpY2sgdG8gZW50ZXJcIiBpbjpmYWRlPVwie3tkZWxheTogMzAwMCwgZHVyYXRpb246IDkwMDAsIH19XCIgb3V0OmJsdXI9XCJ7e2RlbGF5OiAwLCBkdXJhdGlvbjogMTAwMH19XCI+PC9hPlxuICAgIHsvaWZ9XG4gICAgPC9kaXY+XG48L2Rpdj5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICAgI2xvZ28taG9sZGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA4MDBweDtcbiAgICB9XG48L3N0eWxlPiIsImltcG9ydCB7IG5vb3AsIHNhZmVfbm90X2VxdWFsLCBzdWJzY3JpYmUsIHJ1bl9hbGwsIGlzX2Z1bmN0aW9uIH0gZnJvbSAnLi4vaW50ZXJuYWwnO1xuZXhwb3J0IHsgZ2V0X3N0b3JlX3ZhbHVlIGFzIGdldCB9IGZyb20gJy4uL2ludGVybmFsJztcblxuY29uc3Qgc3Vic2NyaWJlcl9xdWV1ZSA9IFtdO1xuLyoqXG4gKiBDcmVhdGVzIGEgYFJlYWRhYmxlYCBzdG9yZSB0aGF0IGFsbG93cyByZWFkaW5nIGJ5IHN1YnNjcmlwdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyfXN0YXJ0IHN0YXJ0IGFuZCBzdG9wIG5vdGlmaWNhdGlvbnMgZm9yIHN1YnNjcmlwdGlvbnNcbiAqL1xuZnVuY3Rpb24gcmVhZGFibGUodmFsdWUsIHN0YXJ0KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlOiB3cml0YWJsZSh2YWx1ZSwgc3RhcnQpLnN1YnNjcmliZSxcbiAgICB9O1xufVxuLyoqXG4gKiBDcmVhdGUgYSBgV3JpdGFibGVgIHN0b3JlIHRoYXQgYWxsb3dzIGJvdGggdXBkYXRpbmcgYW5kIHJlYWRpbmcgYnkgc3Vic2NyaXB0aW9uLlxuICogQHBhcmFtIHsqPX12YWx1ZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge1N0YXJ0U3RvcE5vdGlmaWVyPX1zdGFydCBzdGFydCBhbmQgc3RvcCBub3RpZmljYXRpb25zIGZvciBzdWJzY3JpcHRpb25zXG4gKi9cbmZ1bmN0aW9uIHdyaXRhYmxlKHZhbHVlLCBzdGFydCA9IG5vb3ApIHtcbiAgICBsZXQgc3RvcDtcbiAgICBjb25zdCBzdWJzY3JpYmVycyA9IFtdO1xuICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUpIHtcbiAgICAgICAgaWYgKHNhZmVfbm90X2VxdWFsKHZhbHVlLCBuZXdfdmFsdWUpKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG5ld192YWx1ZTtcbiAgICAgICAgICAgIGlmIChzdG9wKSB7IC8vIHN0b3JlIGlzIHJlYWR5XG4gICAgICAgICAgICAgICAgY29uc3QgcnVuX3F1ZXVlID0gIXN1YnNjcmliZXJfcXVldWUubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcyA9IHN1YnNjcmliZXJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBzWzFdKCk7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXJfcXVldWUucHVzaChzLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChydW5fcXVldWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aDsgaSArPSAyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlW2ldWzBdKHN1YnNjcmliZXJfcXVldWVbaSArIDFdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyX3F1ZXVlLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZShmbikge1xuICAgICAgICBzZXQoZm4odmFsdWUpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKHJ1biwgaW52YWxpZGF0ZSA9IG5vb3ApIHtcbiAgICAgICAgY29uc3Qgc3Vic2NyaWJlciA9IFtydW4sIGludmFsaWRhdGVdO1xuICAgICAgICBzdWJzY3JpYmVycy5wdXNoKHN1YnNjcmliZXIpO1xuICAgICAgICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBzdG9wID0gc3RhcnQoc2V0KSB8fCBub29wO1xuICAgICAgICB9XG4gICAgICAgIHJ1bih2YWx1ZSk7XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHN1YnNjcmliZXJzLmluZGV4T2Yoc3Vic2NyaWJlcik7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdWJzY3JpYmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgc3RvcCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7IHNldCwgdXBkYXRlLCBzdWJzY3JpYmUgfTtcbn1cbmZ1bmN0aW9uIGRlcml2ZWQoc3RvcmVzLCBmbiwgaW5pdGlhbF92YWx1ZSkge1xuICAgIGNvbnN0IHNpbmdsZSA9ICFBcnJheS5pc0FycmF5KHN0b3Jlcyk7XG4gICAgY29uc3Qgc3RvcmVzX2FycmF5ID0gc2luZ2xlXG4gICAgICAgID8gW3N0b3Jlc11cbiAgICAgICAgOiBzdG9yZXM7XG4gICAgY29uc3QgYXV0byA9IGZuLmxlbmd0aCA8IDI7XG4gICAgcmV0dXJuIHJlYWRhYmxlKGluaXRpYWxfdmFsdWUsIChzZXQpID0+IHtcbiAgICAgICAgbGV0IGluaXRlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICAgICAgbGV0IHBlbmRpbmcgPSAwO1xuICAgICAgICBsZXQgY2xlYW51cCA9IG5vb3A7XG4gICAgICAgIGNvbnN0IHN5bmMgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAocGVuZGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFudXAoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZuKHNpbmdsZSA/IHZhbHVlc1swXSA6IHZhbHVlcywgc2V0KTtcbiAgICAgICAgICAgIGlmIChhdXRvKSB7XG4gICAgICAgICAgICAgICAgc2V0KHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjbGVhbnVwID0gaXNfZnVuY3Rpb24ocmVzdWx0KSA/IHJlc3VsdCA6IG5vb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHVuc3Vic2NyaWJlcnMgPSBzdG9yZXNfYXJyYXkubWFwKChzdG9yZSwgaSkgPT4gc3Vic2NyaWJlKHN0b3JlLCAodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgcGVuZGluZyAmPSB+KDEgPDwgaSk7XG4gICAgICAgICAgICBpZiAoaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgc3luYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBwZW5kaW5nIHw9ICgxIDw8IGkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIGluaXRlZCA9IHRydWU7XG4gICAgICAgIHN5bmMoKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICAgICAgICBydW5fYWxsKHVuc3Vic2NyaWJlcnMpO1xuICAgICAgICAgICAgY2xlYW51cCgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5leHBvcnQgeyBkZXJpdmVkLCByZWFkYWJsZSwgd3JpdGFibGUgfTtcbiIsImltcG9ydCB7IHdyaXRhYmxlIH0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgbm93LCBsb29wLCBhc3NpZ24gfSBmcm9tICcuLi9pbnRlcm5hbCc7XG5pbXBvcnQgeyBsaW5lYXIgfSBmcm9tICcuLi9lYXNpbmcnO1xuXG5mdW5jdGlvbiBpc19kYXRlKG9iaikge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG5mdW5jdGlvbiB0aWNrX3NwcmluZyhjdHgsIGxhc3RfdmFsdWUsIGN1cnJlbnRfdmFsdWUsIHRhcmdldF92YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgY3VycmVudF92YWx1ZSA9PT0gJ251bWJlcicgfHwgaXNfZGF0ZShjdXJyZW50X3ZhbHVlKSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGRlbHRhID0gdGFyZ2V0X3ZhbHVlIC0gY3VycmVudF92YWx1ZTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB2ZWxvY2l0eSA9IChjdXJyZW50X3ZhbHVlIC0gbGFzdF92YWx1ZSkgLyAoY3R4LmR0IHx8IDEgLyA2MCk7IC8vIGd1YXJkIGRpdiBieSAwXG4gICAgICAgIGNvbnN0IHNwcmluZyA9IGN0eC5vcHRzLnN0aWZmbmVzcyAqIGRlbHRhO1xuICAgICAgICBjb25zdCBkYW1wZXIgPSBjdHgub3B0cy5kYW1waW5nICogdmVsb2NpdHk7XG4gICAgICAgIGNvbnN0IGFjY2VsZXJhdGlvbiA9IChzcHJpbmcgLSBkYW1wZXIpICogY3R4Lmludl9tYXNzO1xuICAgICAgICBjb25zdCBkID0gKHZlbG9jaXR5ICsgYWNjZWxlcmF0aW9uKSAqIGN0eC5kdDtcbiAgICAgICAgaWYgKE1hdGguYWJzKGQpIDwgY3R4Lm9wdHMucHJlY2lzaW9uICYmIE1hdGguYWJzKGRlbHRhKSA8IGN0eC5vcHRzLnByZWNpc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldF92YWx1ZTsgLy8gc2V0dGxlZFxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY3R4LnNldHRsZWQgPSBmYWxzZTsgLy8gc2lnbmFsIGxvb3AgdG8ga2VlcCB0aWNraW5nXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICByZXR1cm4gaXNfZGF0ZShjdXJyZW50X3ZhbHVlKSA/XG4gICAgICAgICAgICAgICAgbmV3IERhdGUoY3VycmVudF92YWx1ZS5nZXRUaW1lKCkgKyBkKSA6IGN1cnJlbnRfdmFsdWUgKyBkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudF92YWx1ZSkpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gY3VycmVudF92YWx1ZS5tYXAoKF8sIGkpID0+IHRpY2tfc3ByaW5nKGN0eCwgbGFzdF92YWx1ZVtpXSwgY3VycmVudF92YWx1ZVtpXSwgdGFyZ2V0X3ZhbHVlW2ldKSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiBjdXJyZW50X3ZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBjb25zdCBuZXh0X3ZhbHVlID0ge307XG4gICAgICAgIGZvciAoY29uc3QgayBpbiBjdXJyZW50X3ZhbHVlKVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgbmV4dF92YWx1ZVtrXSA9IHRpY2tfc3ByaW5nKGN0eCwgbGFzdF92YWx1ZVtrXSwgY3VycmVudF92YWx1ZVtrXSwgdGFyZ2V0X3ZhbHVlW2tdKTtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gbmV4dF92YWx1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHNwcmluZyAke3R5cGVvZiBjdXJyZW50X3ZhbHVlfSB2YWx1ZXNgKTtcbiAgICB9XG59XG5mdW5jdGlvbiBzcHJpbmcodmFsdWUsIG9wdHMgPSB7fSkge1xuICAgIGNvbnN0IHN0b3JlID0gd3JpdGFibGUodmFsdWUpO1xuICAgIGNvbnN0IHsgc3RpZmZuZXNzID0gMC4xNSwgZGFtcGluZyA9IDAuOCwgcHJlY2lzaW9uID0gMC4wMSB9ID0gb3B0cztcbiAgICBsZXQgbGFzdF90aW1lO1xuICAgIGxldCB0YXNrO1xuICAgIGxldCBjdXJyZW50X3Rva2VuO1xuICAgIGxldCBsYXN0X3ZhbHVlID0gdmFsdWU7XG4gICAgbGV0IHRhcmdldF92YWx1ZSA9IHZhbHVlO1xuICAgIGxldCBpbnZfbWFzcyA9IDE7XG4gICAgbGV0IGludl9tYXNzX3JlY292ZXJ5X3JhdGUgPSAwO1xuICAgIGxldCBjYW5jZWxfdGFzayA9IGZhbHNlO1xuICAgIGZ1bmN0aW9uIHNldChuZXdfdmFsdWUsIG9wdHMgPSB7fSkge1xuICAgICAgICB0YXJnZXRfdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgIGNvbnN0IHRva2VuID0gY3VycmVudF90b2tlbiA9IHt9O1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCBvcHRzLmhhcmQgfHwgKHNwcmluZy5zdGlmZm5lc3MgPj0gMSAmJiBzcHJpbmcuZGFtcGluZyA+PSAxKSkge1xuICAgICAgICAgICAgY2FuY2VsX3Rhc2sgPSB0cnVlOyAvLyBjYW5jZWwgYW55IHJ1bm5pbmcgYW5pbWF0aW9uXG4gICAgICAgICAgICBsYXN0X3RpbWUgPSBub3coKTtcbiAgICAgICAgICAgIGxhc3RfdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSB0YXJnZXRfdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG9wdHMuc29mdCkge1xuICAgICAgICAgICAgY29uc3QgcmF0ZSA9IG9wdHMuc29mdCA9PT0gdHJ1ZSA/IC41IDogK29wdHMuc29mdDtcbiAgICAgICAgICAgIGludl9tYXNzX3JlY292ZXJ5X3JhdGUgPSAxIC8gKHJhdGUgKiA2MCk7XG4gICAgICAgICAgICBpbnZfbWFzcyA9IDA7IC8vIGluZmluaXRlIG1hc3MsIHVuYWZmZWN0ZWQgYnkgc3ByaW5nIGZvcmNlc1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFzaykge1xuICAgICAgICAgICAgbGFzdF90aW1lID0gbm93KCk7XG4gICAgICAgICAgICBjYW5jZWxfdGFzayA9IGZhbHNlO1xuICAgICAgICAgICAgdGFzayA9IGxvb3Aobm93ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2FuY2VsX3Rhc2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsX3Rhc2sgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGFzayA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW52X21hc3MgPSBNYXRoLm1pbihpbnZfbWFzcyArIGludl9tYXNzX3JlY292ZXJ5X3JhdGUsIDEpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN0eCA9IHtcbiAgICAgICAgICAgICAgICAgICAgaW52X21hc3MsXG4gICAgICAgICAgICAgICAgICAgIG9wdHM6IHNwcmluZyxcbiAgICAgICAgICAgICAgICAgICAgc2V0dGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZHQ6IChub3cgLSBsYXN0X3RpbWUpICogNjAgLyAxMDAwXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0X3ZhbHVlID0gdGlja19zcHJpbmcoY3R4LCBsYXN0X3ZhbHVlLCB2YWx1ZSwgdGFyZ2V0X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICBsYXN0X3RpbWUgPSBub3c7XG4gICAgICAgICAgICAgICAgbGFzdF92YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHN0b3JlLnNldCh2YWx1ZSA9IG5leHRfdmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChjdHguc2V0dGxlZClcbiAgICAgICAgICAgICAgICAgICAgdGFzayA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFjdHguc2V0dGxlZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdWxmaWwgPT4ge1xuICAgICAgICAgICAgdGFzay5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbiA9PT0gY3VycmVudF90b2tlbilcbiAgICAgICAgICAgICAgICAgICAgZnVsZmlsKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHNwcmluZyA9IHtcbiAgICAgICAgc2V0LFxuICAgICAgICB1cGRhdGU6IChmbiwgb3B0cykgPT4gc2V0KGZuKHRhcmdldF92YWx1ZSwgdmFsdWUpLCBvcHRzKSxcbiAgICAgICAgc3Vic2NyaWJlOiBzdG9yZS5zdWJzY3JpYmUsXG4gICAgICAgIHN0aWZmbmVzcyxcbiAgICAgICAgZGFtcGluZyxcbiAgICAgICAgcHJlY2lzaW9uXG4gICAgfTtcbiAgICByZXR1cm4gc3ByaW5nO1xufVxuXG5mdW5jdGlvbiBnZXRfaW50ZXJwb2xhdG9yKGEsIGIpIHtcbiAgICBpZiAoYSA9PT0gYiB8fCBhICE9PSBhKVxuICAgICAgICByZXR1cm4gKCkgPT4gYTtcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIGE7XG4gICAgaWYgKHR5cGUgIT09IHR5cGVvZiBiIHx8IEFycmF5LmlzQXJyYXkoYSkgIT09IEFycmF5LmlzQXJyYXkoYikpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgaW50ZXJwb2xhdGUgdmFsdWVzIG9mIGRpZmZlcmVudCB0eXBlJyk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IGIubWFwKChiaSwgaSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGdldF9pbnRlcnBvbGF0b3IoYVtpXSwgYmkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHQgPT4gYXJyLm1hcChmbiA9PiBmbih0KSk7XG4gICAgfVxuICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICBpZiAoIWEgfHwgIWIpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBjYW5ub3QgYmUgbnVsbCcpO1xuICAgICAgICBpZiAoaXNfZGF0ZShhKSAmJiBpc19kYXRlKGIpKSB7XG4gICAgICAgICAgICBhID0gYS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBiID0gYi5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGIgLSBhO1xuICAgICAgICAgICAgcmV0dXJuIHQgPT4gbmV3IERhdGUoYSArIHQgKiBkZWx0YSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGIpO1xuICAgICAgICBjb25zdCBpbnRlcnBvbGF0b3JzID0ge307XG4gICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaW50ZXJwb2xhdG9yc1trZXldID0gZ2V0X2ludGVycG9sYXRvcihhW2tleV0sIGJba2V5XSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdCA9PiB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtrZXldID0gaW50ZXJwb2xhdG9yc1trZXldKHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgY29uc3QgZGVsdGEgPSBiIC0gYTtcbiAgICAgICAgcmV0dXJuIHQgPT4gYSArIHQgKiBkZWx0YTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgaW50ZXJwb2xhdGUgJHt0eXBlfSB2YWx1ZXNgKTtcbn1cbmZ1bmN0aW9uIHR3ZWVuZWQodmFsdWUsIGRlZmF1bHRzID0ge30pIHtcbiAgICBjb25zdCBzdG9yZSA9IHdyaXRhYmxlKHZhbHVlKTtcbiAgICBsZXQgdGFzaztcbiAgICBsZXQgdGFyZ2V0X3ZhbHVlID0gdmFsdWU7XG4gICAgZnVuY3Rpb24gc2V0KG5ld192YWx1ZSwgb3B0cykge1xuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0YXJnZXRfdmFsdWUgPSBuZXdfdmFsdWU7XG4gICAgICAgIGxldCBwcmV2aW91c190YXNrID0gdGFzaztcbiAgICAgICAgbGV0IHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IHsgZGVsYXkgPSAwLCBkdXJhdGlvbiA9IDQwMCwgZWFzaW5nID0gbGluZWFyLCBpbnRlcnBvbGF0ZSA9IGdldF9pbnRlcnBvbGF0b3IgfSA9IGFzc2lnbihhc3NpZ24oe30sIGRlZmF1bHRzKSwgb3B0cyk7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHByZXZpb3VzX3Rhc2spIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNfdGFzayA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSB0YXJnZXRfdmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbm93KCkgKyBkZWxheTtcbiAgICAgICAgbGV0IGZuO1xuICAgICAgICB0YXNrID0gbG9vcChub3cgPT4ge1xuICAgICAgICAgICAgaWYgKG5vdyA8IHN0YXJ0KVxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKCFzdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgZm4gPSBpbnRlcnBvbGF0ZSh2YWx1ZSwgbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGR1cmF0aW9uID09PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uKHZhbHVlLCBuZXdfdmFsdWUpO1xuICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByZXZpb3VzX3Rhc2spIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91c190YXNrLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNfdGFzayA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gbm93IC0gc3RhcnQ7XG4gICAgICAgICAgICBpZiAoZWxhcHNlZCA+IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgc3RvcmUuc2V0KHZhbHVlID0gbmV3X3ZhbHVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzdG9yZS5zZXQodmFsdWUgPSBmbihlYXNpbmcoZWxhcHNlZCAvIGR1cmF0aW9uKSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFzay5wcm9taXNlO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBzZXQsXG4gICAgICAgIHVwZGF0ZTogKGZuLCBvcHRzKSA9PiBzZXQoZm4odGFyZ2V0X3ZhbHVlLCB2YWx1ZSksIG9wdHMpLFxuICAgICAgICBzdWJzY3JpYmU6IHN0b3JlLnN1YnNjcmliZVxuICAgIH07XG59XG5cbmV4cG9ydCB7IHNwcmluZywgdHdlZW5lZCB9O1xuIiwiaW1wb3J0IHsgd3JpdGFibGUsIH0gZnJvbSAnc3ZlbHRlL3N0b3JlJztcbmltcG9ydCB7IHR3ZWVuZWQgfSBmcm9tICdzdmVsdGUvbW90aW9uJztcbmltcG9ydCB7IGN1YmljT3V0IH0gZnJvbSAnc3ZlbHRlL2Vhc2luZyc7XG5cbi8vZGV0ZXJtaW5lcyB3aGF0IHF1aXogY29tcG9uZW50IGlzIHNob3dpbmdcbmV4cG9ydCBjb25zdCBjb3VudCA9IHdyaXRhYmxlKDApOyAvL21heCAxMFxuXG4vL3N0ZXBzIHdpdGhpbiBlYWNoIHF1aXogY29tcG9uZW50XG5leHBvcnQgY29uc3Qgc3RlcCA9IHdyaXRhYmxlKDApO1xuXG4vL2lzIHRoZSB0aW1lciBydW5uaW5nP1xuZXhwb3J0IGNvbnN0IHRpbWVyQWN0aXZlID0gd3JpdGFibGUoZmFsc2UpO1xuLy9ob2xkcyBudW1iZXIgMC0xMDAgdGhhdCBkaXNwbGF5cyBwcm9ncmVzcyBiYXJcbmV4cG9ydCBjb25zdCBwcm9ncmVzcyA9IHR3ZWVuZWQoMCwge1xuICAgIGR1cmF0aW9uOiA2MDAsXG4gICAgZWFzaW5nOiBjdWJpY091dFxufSlcblxuZXhwb3J0IGNvbnN0IHF1aXpTdGVwcyA9ICB3cml0YWJsZShbXG4gICAgeyBpZDonMScsICBjb21wb25lbnQ6IFwiUXVpejFcIiwgbmFtZTogJ0NvdmVyIFdlYmNhbScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAzLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICcyJywgY29tcG9uZW50OiBcIlF1aXoyXCIsIG5hbWU6ICdIdHRwcyBFdmVyeXdoZXJlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDEsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzcnLCBjb21wb25lbnQ6ICdRdWl6NicsIG5hbWU6ICdDaGFuZ2UgRE5TJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDEsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzMnLCB0eXBlOidjaGVja3BvaW50JywgY29tcG9uZW50OiBcIkNoZWNrcG9pbnQxXCIsIG5hbWU6ICdTZWN1cml0eSB2cyBQcml2YWN5JywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuICAgIHsgaWQ6ICc0JywgY29tcG9uZW50OiBcIlF1aXozXCIsIG5hbWU6ICdDaGFuZ2UgU2VhcmNoIEVuZ2luZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAyLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc1JywgY29tcG9uZW50OiAnUXVpejQnLCBuYW1lOiAnQ2hhbmdlIFByaXZhY3kgU2V0dGluZ3MnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMSwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnNicsIGNvbXBvbmVudDogJ1F1aXo1JywgbmFtZTogJ1RyYWNrZXIgYmxvY2tlcicsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc4JywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogJ0NoZWNrcG9pbnQyJywgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuICAgIHsgaWQ6ICcxMCcsIGNvbXBvbmVudDogJ1F1aXo3JywgbmFtZTogJ0ludGVybmV0IG9mIFRoaW5ncycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAyLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc5JywgY29tcG9uZW50OiAnUXVpejgnLCBuYW1lOiAnRGlzYWJsZSBMb2NhdGlvbiBUcmFja2luZycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAyLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICcxMScsIHR5cGU6J2NoZWNrcG9pbnQnLCBjb21wb25lbnQ6ICdDaGVja3BvaW50MycsIG5hbWU6ICdIb3cgdG8gTWFrZSBjaGFuZ2UnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMCwgZGlzcGxheVByb2dyZXNzOiBmYWxzZX0sXG4gICAgeyBpZDogJzEyJywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogJ1JldmlldycsIG5hbWU6ICdSZXZpZXcnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMCwgZGlzcGxheVByb2dyZXNzOiBmYWxzZX0sXG5dKVxuXG4vKlxuZXhwb3J0IGNvbnN0IHF1aXpTdGVwcyA9ICB3cml0YWJsZShbXG4gICAgeyBpZDonMScsICBjb21wb25lbnQ6IFwiUXVpejFcIiwgbmFtZTogJ0NvdmVyIFdlYmNhbScsIGNvbXBsZXRlOnRydWUsIHN0YXR1czogMCwgc3RlcHM6IDMsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzInLCBjb21wb25lbnQ6IFwiUXVpejJcIiwgbmFtZTogJ0h0dHBzIEV2ZXJ5d2hlcmUnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMSwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnNycsIGNvbXBvbmVudDogJ1F1aXo2JywgbmFtZTogJ0NoYW5nZSBETlMnLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMSwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnMycsIHR5cGU6J2NoZWNrcG9pbnQnLCBjb21wb25lbnQ6IFwiQ2hlY2twb2ludDFcIiwgbmFtZTogJ1NlY3VyaXR5IHZzIFByaXZhY3knLCBjb21wbGV0ZTpmYWxzZSwgc3RhdHVzOiAwLCBzdGVwczogMCwgZGlzcGxheVByb2dyZXNzOiBmYWxzZX0sXG4gICAgeyBpZDogJzQnLCBjb21wb25lbnQ6IFwiUXVpejNcIiwgbmFtZTogJ0NoYW5nZSBTZWFyY2ggRW5naW5lJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDIsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzUnLCBjb21wb25lbnQ6ICdRdWl6NCcsIG5hbWU6ICdDaGFuZ2UgUHJpdmFjeSBTZXR0aW5ncycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc2JywgY29tcG9uZW50OiAnUXVpejUnLCBuYW1lOiAnVHJhY2tlciBibG9ja2VyJywgY29tcGxldGU6dHJ1ZSwgc3RhdHVzOiAwLCBzdGVwczogMSwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnOCcsIHR5cGU6J2NoZWNrcG9pbnQnLCBjb21wb25lbnQ6ICdDaGVja3BvaW50MicsIG5hbWU6ICdTdXJ2ZWlsbGFuY2UgQ2FwaXRhbGlzbScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwLCBkaXNwbGF5UHJvZ3Jlc3M6IGZhbHNlfSxcbiAgICB7IGlkOiAnMTAnLCBjb21wb25lbnQ6ICdRdWl6NycsIG5hbWU6ICdJbnRlcm5ldCBvZiBUaGluZ3MnLCBjb21wbGV0ZTp0cnVlLCBzdGF0dXM6IDAsIHN0ZXBzOiAyLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc5JywgY29tcG9uZW50OiAnUXVpejgnLCBuYW1lOiAnRGlzYWJsZSBMb2NhdGlvbiBUcmFja2luZycsIGNvbXBsZXRlOnRydWUsIHN0YXR1czogMCwgc3RlcHM6IDIsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzExJywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogJ0NoZWNrcG9pbnQzJywgbmFtZTogJ0hvdyB0byBNYWtlIGNoYW5nZScsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwLCBkaXNwbGF5UHJvZ3Jlc3M6IGZhbHNlfSxcbiAgICB7IGlkOiAnMTInLCB0eXBlOidjaGVja3BvaW50JywgY29tcG9uZW50OiAnUmV2aWV3JywgbmFtZTogJ1JldmlldycsIGNvbXBsZXRlOmZhbHNlLCBzdGF0dXM6IDAsIHN0ZXBzOiAwLCBkaXNwbGF5UHJvZ3Jlc3M6IGZhbHNlfSxcbl0pICovXG4vKlxuZXhwb3J0IGNvbnN0IHF1aXpTdGVwcyA9ICB3cml0YWJsZShbXG4gICAgeyBpZDonMScsICBjb21wb25lbnQ6IFwiUXVpejFcIiwgbmFtZTogJ0NvdmVyIFdlYmNhbScsIGNvbXBsZXRlOnRydWUsIHN0YXR1czogMCwgc3RlcHM6IDMsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzInLCBjb21wb25lbnQ6IFwiUXVpejJcIiwgbmFtZTogJ0h0dHBzIEV2ZXJ5d2hlcmUnLCBjb21wbGV0ZTp0cnVlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc3JywgY29tcG9uZW50OiAnUXVpejYnLCBuYW1lOiAnQ2hhbmdlIEROUycsIGNvbXBsZXRlOnRydWUsIHN0YXR1czogMCwgc3RlcHM6IDEsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzMnLCB0eXBlOidjaGVja3BvaW50JywgY29tcG9uZW50OiBcIkNoZWNrcG9pbnQxXCIsIG5hbWU6ICdTZWN1cml0eSB2cyBQcml2YWN5JywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuICAgIHsgaWQ6ICc0JywgY29tcG9uZW50OiBcIlF1aXozXCIsIG5hbWU6ICdDaGFuZ2UgU2VhcmNoIEVuZ2luZScsIGNvbXBsZXRlOnRydWUsIHN0YXR1czogMCwgc3RlcHM6IDIsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzUnLCBjb21wb25lbnQ6ICdRdWl6NCcsIG5hbWU6ICdDaGFuZ2UgUHJpdmFjeSBTZXR0aW5ncycsIGNvbXBsZXRlOnRydWUsIHN0YXR1czogMCwgc3RlcHM6IDEsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzYnLCBjb21wb25lbnQ6ICdRdWl6NScsIG5hbWU6ICdUcmFja2VyIGJsb2NrZXInLCBjb21wbGV0ZTp0cnVlLCBzdGF0dXM6IDAsIHN0ZXBzOiAxLCBkaXNwbGF5UHJvZ3Jlc3M6IHRydWV9LFxuICAgIHsgaWQ6ICc4JywgdHlwZTonY2hlY2twb2ludCcsIGNvbXBvbmVudDogJ0NoZWNrcG9pbnQyJywgbmFtZTogJ1N1cnZlaWxsYW5jZSBDYXBpdGFsaXNtJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuICAgIHsgaWQ6ICcxMCcsIGNvbXBvbmVudDogJ1F1aXo3JywgbmFtZTogJ0ludGVybmV0IG9mIFRoaW5ncycsIGNvbXBsZXRlOnRydWUsIHN0YXR1czogMCwgc3RlcHM6IDIsIGRpc3BsYXlQcm9ncmVzczogdHJ1ZX0sXG4gICAgeyBpZDogJzknLCBjb21wb25lbnQ6ICdRdWl6OCcsIG5hbWU6ICdEaXNhYmxlIExvY2F0aW9uIFRyYWNraW5nJywgY29tcGxldGU6dHJ1ZSwgc3RhdHVzOiAwLCBzdGVwczogMiwgZGlzcGxheVByb2dyZXNzOiB0cnVlfSxcbiAgICB7IGlkOiAnMTEnLCB0eXBlOidjaGVja3BvaW50JywgY29tcG9uZW50OiAnQ2hlY2twb2ludDMnLCBuYW1lOiAnSG93IHRvIE1ha2UgY2hhbmdlJywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuICAgIHsgaWQ6ICcxMicsIHR5cGU6J2NoZWNrcG9pbnQnLCBjb21wb25lbnQ6ICdSZXZpZXcnLCBuYW1lOiAnUmV2aWV3JywgY29tcGxldGU6ZmFsc2UsIHN0YXR1czogMCwgc3RlcHM6IDAsIGRpc3BsYXlQcm9ncmVzczogZmFsc2V9LFxuXSlcbiovIiwiPHNjcmlwdD5cbmltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMsIHByb2dyZXNzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5leHBvcnQgbGV0IHN1Y2Nlc3MgPSB0cnVlO1xuZXhwb3J0IGxldCBwID0gNy42O1xuZXhwb3J0IGxldCBncmVlbiA9IGZhbHNlO1xuZXhwb3J0IGxldCB5ZWxsb3cgPSBmYWxzZTtcbmV4cG9ydCBsZXQgcmVkID0gZmFsc2U7XG4vL2V4cG9ydCBsZXQgZGVzdG9yeVZpZCA9IGZhbHNlO1xuXG4vL3NldHMgY3VycmVudCBpY29uIGZvciBzaWRlYmFyXG5mdW5jdGlvbiBpbmNyZW1lbnQoKSB7XG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAyO1xuICAgICAgICBjb3VudC51cGRhdGUobiA9PiBuICsgMSlcbiAgICAgICAgcHJvZ3Jlc3MudXBkYXRlKG4gPT4gbis9cClcbiAgICAgICAgc3RlcC5zZXQoMCk7XG59XG5mdW5jdGlvbiBpbmNvbXBsZXRlKCkge1xuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgJHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDA7XG4gICAgICAgIGNvdW50LnVwZGF0ZShuID0+IG4gKyAxKVxuICAgICAgICBwcm9ncmVzcy51cGRhdGUobiA9PiBuKz1wKVxuICAgICAgICBzdGVwLnNldCgwKTtcbn1cbjwvc2NyaXB0PlxueyNpZiBzdWNjZXNzfVxuICAgIDxidXR0b24gb246Y2xpY2s9e2luY3JlbWVudH0gY2xhc3M6Z3JlZW4gY2xhc3M6eWVsbG93IGNsYXNzOnJlZD5cbiAgICAgICAgPHNsb3Q+XG5cbiAgICAgICAgPC9zbG90PlxuICAgIDwvYnV0dG9uPlxuezplbHNlfVxuICAgIDxidXR0b24gb246Y2xpY2s9e2luY29tcGxldGV9IGNsYXNzOmdyZWVuIGNsYXNzOnllbGxvdyBjbGFzczpyZWQ+XG4gICAgICAgIDxzbG90PlxuXG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2J1dHRvbj5cbnsvaWZ9XG4gICAgICAgXG48c3R5bGU+XG4gICAgYnV0dG9uIHtcbiAgICAgICAgXG4gICAgfVxuICAgIC5ncmVlbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3M2VmN2I7XG4gICAgICAgIGNvbG9yOiAjMkMzQzRFO1xuICAgIH1cbiAgICAueWVsbG93IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxQzMzMDtcbiAgICAgICAgY29sb3I6ICMyQzNDNEU7XG4gICAgfVxuICAgIC5yZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTc0RTQ1O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB9XG48L3N0eWxlPlxuXG4iLCI8c2NyaXB0PlxuICAgIGltcG9ydCAqIGFzIGJsYXplZmFjZSBmcm9tICdAdGVuc29yZmxvdy1tb2RlbHMvYmxhemVmYWNlJztcbiAgICBpbXBvcnQgKiBhcyB0ZiBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvcmUnO1xuICAgIGltcG9ydCAqIGFzIHRmY29udiBmcm9tICdAdGVuc29yZmxvdy90ZmpzLWNvbnZlcnRlcic7XG4gICAgaW1wb3J0IHsgb25Nb3VudCwgYmVmb3JlVXBkYXRlLCBhZnRlclVwZGF0ZSwgb25EZXN0cm95LCB0aWNrIH0gZnJvbSAnc3ZlbHRlJztcbiAgICBpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9jb21wbGV0ZS5zdmVsdGUnXG5cbiAgICBsZXQgYWxlcnQgPSBmYWxzZTtcbiAgICAkOiBhbGVydCA9IGFsZXJ0O1xuICAgIGxldCBtb2RlbCwgdmlkZW8sIGN0eCwgdmlkZW9XaWR0aCwgdmlkZW9IZWlnaHQsICBjYW52YXMsIG1vZGVsTG9hZGVkLCBwcmVkaWN0aW9ucztcbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBzZXR1cENhbWVyYSgpIHtcbiAgICB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWRlbycpO1xuICBjb25zdCBzdHJlYW0gPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSh7XG4gICAgJ2F1ZGlvJzogZmFsc2UsXG4gICAgJ3ZpZGVvJzogeyBmYWNpbmdNb2RlOiAndXNlcicgfSxcbiAgfSk7XG4gIHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbTtcblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICB2aWRlby5vbmxvYWRlZG1ldGFkYXRhID0gKCkgPT4ge1xuICAgICAgcmVzb2x2ZSh2aWRlbyk7XG4gICAgfTtcbiAgfSk7XG59XG5jb25zdCByZW5kZXJQcmVkaWN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICAvL3N0YXRzLmJlZ2luKCk7XG4gIGNvbnN0IHJldHVyblRlbnNvcnMgPSBmYWxzZTtcbiAgY29uc3QgZmxpcEhvcml6b250YWwgPSB0cnVlO1xuICBjb25zdCBhbm5vdGF0ZUJveGVzID0gZmFsc2U7XG4gIHByZWRpY3Rpb25zID0gYXdhaXQgbW9kZWwuZXN0aW1hdGVGYWNlcyhcbiAgICB2aWRlbywgcmV0dXJuVGVuc29ycywgZmxpcEhvcml6b250YWwsIGFubm90YXRlQm94ZXMpO1xuICBpZiAocHJlZGljdGlvbnMubGVuZ3RoID4gMCkge1xuICAgIGFsZXJ0ID0gdHJ1ZTtcbiAgIFxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZWRpY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmV0dXJuVGVuc29ycykge1xuICAgICAgICBwcmVkaWN0aW9uc1tpXS50b3BMZWZ0ID0gcHJlZGljdGlvbnNbaV0udG9wTGVmdC5hcnJheVN5bmMoKTtcbiAgICAgICAgcHJlZGljdGlvbnNbaV0uYm90dG9tUmlnaHQgPSBwcmVkaWN0aW9uc1tpXS5ib3R0b21SaWdodC5hcnJheVN5bmMoKTtcbiAgICAgICAgaWYgKGFubm90YXRlQm94ZXMpIHtcbiAgICAgICAgICBwcmVkaWN0aW9uc1tpXS5sYW5kbWFya3MgPSBwcmVkaWN0aW9uc1tpXS5sYW5kbWFya3MuYXJyYXlTeW5jKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3Qgc3RhcnQgPSBwcmVkaWN0aW9uc1tpXS50b3BMZWZ0O1xuICAgICAgY29uc3QgZW5kID0gcHJlZGljdGlvbnNbaV0uYm90dG9tUmlnaHQ7XG4gICAgICBjb25zdCBzaXplID0gW2VuZFswXSAtIHN0YXJ0WzBdLCBlbmRbMV0gLSBzdGFydFsxXV07XG4gICAgICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMCwgMCwgMC41KVwiO1xuICAgICAgY3R4LmZpbGxSZWN0KHN0YXJ0WzBdLCBzdGFydFsxXSwgc2l6ZVswXSwgc2l6ZVsxXSk7XG5cbiAgICAgIGlmIChhbm5vdGF0ZUJveGVzKSB7XG4gICAgICAgIGNvbnN0IGxhbmRtYXJrcyA9IHByZWRpY3Rpb25zW2ldLmxhbmRtYXJrcztcblxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbGFuZG1hcmtzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgY29uc3QgeCA9IGxhbmRtYXJrc1tqXVswXTtcbiAgICAgICAgICBjb25zdCB5ID0gbGFuZG1hcmtzW2pdWzFdO1xuICAgICAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCA1LCA1KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgYWxlcnQgPSBmYWxzZTtcbiAgfVxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyUHJlZGljdGlvbik7XG59XG5vbk1vdW50KGFzeW5jKCkgPT4ge1xuY29uc3Qgc2V0dXBQYWdlID0gYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBzZXR1cENhbWVyYSgpO1xuICB2aWRlby5wbGF5KCk7XG5cbiAgdmlkZW9XaWR0aCA9IHZpZGVvLnZpZGVvV2lkdGg7XG4gIHZpZGVvSGVpZ2h0ID0gdmlkZW8udmlkZW9IZWlnaHQ7XG4gIHZpZGVvLndpZHRoID0gdmlkZW9XaWR0aDtcbiAgdmlkZW8uaGVpZ2h0ID0gdmlkZW9IZWlnaHQ7XG5cbiAgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpO1xuICBjYW52YXMud2lkdGggPSB2aWRlb1dpZHRoO1xuICBjYW52YXMuaGVpZ2h0ID0gdmlkZW9IZWlnaHQ7XG4gIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBjdHguZmlsbFN0eWxlID0gXCJyZ2JhKDI1NSwgMCwgMCwgMC41KVwiO1xuXG4gIG1vZGVsID0gYXdhaXQgYmxhemVmYWNlLmxvYWQoKTtcbiAgbW9kZWxMb2FkZWQgPSB0cnVlO1xufTtcbnNldHVwUGFnZSgpO1xufSlcblxuZnVuY3Rpb24gd2FpdChtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xufVxuYXN5bmMgZnVuY3Rpb24gc2hvd1RleHQoKXtcbiAgYXdhaXQgd2FpdCg1MDAwKTtcbn1cblxubGV0IHByb21pc2UgPSBzaG93VGV4dCgpO1xuXG5cbiQ6IGlmKG1vZGVsTG9hZGVkKSB7XG4gIHJlbmRlclByZWRpY3Rpb24oKTtcbn1cbm9uRGVzdHJveSgoKSA9PiB7IFxuICAgIGNvbnNvbGUubG9nKFwiZGVzdHJveWluZ1wiKVxuICAgIG1vZGVsTG9hZGVkID0gZmFsc2U7XG4gICAgLypcbiAgICAgLy9sZXQgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdmlkZW9FbGVtZW50Jyk7XG4gICAgIHZpZGVvLnNyY09iamVjdCA9IG51bGw7XG4gICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEoe3ZpZGVvOiB0cnVlfSxcbiAgICAgZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICAgbGV0IHRyYWNrID0gc3RyZWFtLmdldFRyYWNrcygpWzBdO1xuICAgICAgIHRyYWNrLnN0b3AoKTtcbiAgICAgfSxcbiAgICAgZnVuY3Rpb24oZXJyb3Ipe1xuICAgICAgY29uc29sZS5sb2coJ2dldFVzZXJNZWRpYSgpIGVycm9yJywgZXJyb3IpO1xuICAgICB9KVxuICAgICAqL1xuICAgIH0pO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbmNhbnZhcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxMDBweDtcbiAgbGVmdDogNTI1cHg7XG59XG4uYWxlcnQge1xuICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgfVxuICAgI25vdC1jb3ZlcmVkIHtcbiAgICAgICBjb2xvcjogcmVkO1xuICAgICAgIGJhY2tncm91bmQ6ICNGRkVFRUU7XG4gICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgfVxuPC9zdHlsZT5cblxuPHZpZGVvIGlkPVwidmlkZW9cIiBiaW5kOnRoaXM9e3ZpZGVvfSBwbGF5c2lubGluZSBzdHlsZT1cIlxuLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG50cmFuc2Zvcm06IHNjYWxlWCgtMSk7XG53aWR0aDogYXV0bztcbmhlaWdodDogYXV0bztcblwiPlxuPC92aWRlbz5cbjxjYW52YXMgaWQ9XCJvdXRwdXRcIiBiaW5kOnRoaXM9e2NhbnZhc30+PC9jYW52YXM+XG57I2F3YWl0IHByb21pc2V9XG48cD5sb2FkaW5nLi4uPGJyPnRha2UgYSBkZWVwIGJyZWF0aDwvcD5cbns6dGhlbiBzb21ldGhpbmd9XG57I2lmIGFsZXJ0ID09PSB0cnVlfVxuICAgIDxwIGNsYXNzOmFsZXJ0PkNvdmVyIHlvdXIgd2ViY2FtPC9wPlxuICAgIDxwIGlkPVwibm90LWNvdmVyZWRcIj5Zb3UgaGF2ZW7igJl0IGNvdmVyZWQgeW91ciB3ZWJjYW1lIG9yIGRpZCBub3QgZG8gaXQgcHJvcGVybHkuIFBsZWFzZSBjb3ZlciB5b3VyIHdlYmNhbSBjb21wbGV0ZWx5IHRvIHByb2NlZWQgdG8gdGhlIG5leHQgc3RlcC48L3A+XG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cbiAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtDb21wbGV0ZX0gcD17NC43NX0gZ3JlZW49e3RydWV9IG9uOmNsaWNrPSd7bSA9PiB7bW9kZWxMb2FkZWQgPSBmYWxzZX19Jz5cbiAgICAgICAgT253YXJkcyB0byB0aGUgbmV4dCBjaGFsbGVuZ2VcbiAgICA8L3N2ZWx0ZTpjb21wb25lbnQ+XG4gICAgPC9kaXY+XG57OmVsc2V9XG4gICAgPGgyPk5pY2Ugam9iITwvaDI+XG4gICAgPHAgPlNlZW1zIGxpa2UgeW91ciB3ZWJjYW0gaXMgY292ZXJlZCwgeW91IGFyZSBvdWYgb2YgdGhlIGZyYW1lLCBvciBkaWRuJ3QgYWxsb3cgd2ViY2FtIGFjY2Vzcy4gQnV0IHNlcmlvdXNseSwgd2UgcmVjb21tZW5kIGNvdmVyaW5nIHlvdXIgd2ViY2FtLi4uPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgPHN2ZWx0ZTpjb21wb25lbnQgdGhpcz17Q29tcGxldGV9IHA9ezQuNzV9IGdyZWVuPXt0cnVlfSBvbjpjbGljaz0ne20gPT4ge21vZGVsTG9hZGVkID0gZmFsc2V9fSc+XG4gICAgICAgIE9ud2FyZHMgdG8gdGhlIG5leHQgY2hhbGxlbmdlXG4gICAgPC9zdmVsdGU6Y29tcG9uZW50PlxuICAgIDwvZGl2Plxuey9pZn1cbnsvYXdhaXR9IiwiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBzdGVwLCBwcm9ncmVzcyB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuICAgIGV4cG9ydCBsZXQgcSA9MTtcbiAgICBleHBvcnQgbGV0IHAgPSA3LjY7XG4gICAgZXhwb3J0IGxldCBncmVlbiA9IGZhbHNlO1xuICAgIGV4cG9ydCBsZXQgeWVsbG93ID0gZmFsc2U7XG4gICAgZXhwb3J0IGxldCByZWQgPSBmYWxzZTtcbiAgIGNvbnN0IGluY3JlYXNlID0gKCkgPT4ge1xuICAgICAgIHN0ZXAudXBkYXRlKG4gPT4gbis9IHEpO1xuICAgICAgcHJvZ3Jlc3MudXBkYXRlKG4gPT4gbiArPSBwKX07XG48L3NjcmlwdD5cbjxidXR0b24gb246Y2xpY2s9e2luY3JlYXNlfSBjbGFzczpncmVlbiBjbGFzczp5ZWxsb3cgY2xhc3M6cmVkPlxuICAgIDxzbG90PlxuXG4gICAgPC9zbG90PlxuPC9idXR0b24+XG5cbjxzdHlsZT5cbiAgICAuZ3JlZW4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzNlZjdiO1xuICAgICAgICBjb2xvcjogIzJDM0M0RTtcbiAgICB9XG4gICAgLnllbGxvdyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUMzMzA7XG4gICAgICAgIGNvbG9yOiAjMkMzQzRFO1xuICAgIH1cbiAgICAucmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0U3NEU0NTtcbiAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgfVxuPC9zdHlsZT5cbiIsIjxzY3JpcHQ+XG5pbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzLCBwcm9ncmVzcyB9IGZyb20gJy4uL3N0b3JlLmpzJ1xubGV0IHAgPSA3LjY7XG5mdW5jdGlvbiBnb0JhY2soKSB7XG4gICAgaWYoJGNvdW50ID49IDEgJiYgJHN0ZXAgPT0gMCkge1xuICAgICAgICBhbGVydCgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGdvIGJhY2s/JylcbiAgICAgICAgLy8kcXVpelN0ZXBzWyRjb3VudF0uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICBjb3VudC51cGRhdGUobiA9PiBuIC0gMSlcbiAgICAgICAgJHF1aXpTdGVwc1skY291bnQrMV0uc3RhdHVzID0gMDtcbiAgICAgICAgaWYgKCRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgIT0gMikge1xuICAgICAgICAgICAgJHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG4gICAgICAgIH1cbiAgICAgICAgc3RlcC5zZXQoJHF1aXpTdGVwc1skY291bnRdLnN0ZXBzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzdGVwLnVwZGF0ZShuID0+IG4gLSAxKVxuICAgIH1cbn1cbjwvc2NyaXB0PlxueyNpZiAkY291bnQgPj0gMX1cbjxkaXYgaWQ9XCJiYWNrXCIgb246Y2xpY2s9eygpID0+IHtnb0JhY2soKVxuICAgIHByb2dyZXNzLnVwZGF0ZShuID0+IG4tPXApXG59fT5cbjxzdmcgd2lkdGg9XCIxMVwiIGhlaWdodD1cIjE4XCIgdmlld0JveD1cIjAgMCAxMSAxOFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTEgMTUuODg1TDQuMjAxMDggOUwxMSAyLjExNUw4LjkwNjg4IDBMMCA5TDguOTA2ODggMThMMTEgMTUuODg1WlwiIGZpbGw9XCIjNzU3NTc1XCIvPlxuICAgIDwvc3ZnPiBCYWNrXG48L2Rpdj5cbnsvaWZ9XG48c3R5bGU+XG4gICAgI2JhY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICAgICAgYm90dG9tOiA3MnB4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjNzU3NTc1O1xuICAgICAgICBtYXJnaW46IDIwcHggMHB4O1xuXG4gICAgfVxuICAgIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgZmlsbDogIzc1NzU3NTtcbiAgICB9XG48L3N0eWxlPiIsIjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25Nb3VudCwgYmVmb3JlVXBkYXRlLCBhZnRlclVwZGF0ZSwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcbiAgICBpbXBvcnQgVmlkIGZyb20gJy4vVmlkLnN2ZWx0ZSdcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi9UcmFuc0hlbHAuc3ZlbHRlJztcbiAgICBpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9jb21wbGV0ZS5zdmVsdGUnXG5cdGltcG9ydCBCdG4gZnJvbSAnLi9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuICAgIGltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlLCBwcm9ncmVzc30gZnJvbSAnLi4vc3RvcmUuanMnXG4gICAgaW1wb3J0IEJhY2sgZnJvbSAnLi9CYWNrLnN2ZWx0ZSdcblxuICAgIC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuICAgb25Nb3VudChhc3luYygpID0+IHtcbiAgICAgICAgJHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG4gICAgICAgIHRpbWVyQWN0aXZlLnNldCghJHRpbWVyQWN0aXZlKX0pO1xuXG48L3NjcmlwdD5cbnsjaWYgJHN0ZXA9PTB9XG48c2VjdGlvbj5cblx0PGgxPklzIHlvdXIgV2ViY2FtIENvdmVyZWQ/PC9oMT4gXG4gICAgPHA+SXTigJlzIGxpa2VseSB5b3VyIGNvbXB1dGVyIGFscmVhZHkgaGFzIGEgYnVpbHQtaW4gY2FtZXJhLCBhbmQgaXTigJlzIHBvc3NpYmxlIGZvciB0aGF0IGNhbWVyYSB0byBiZSB1c2VkIHRvIHNweSBvbiB5b3UuPC9wPiAgPHA+SWYgeW91ciB3ZWJjYW0gZm9yIHdoYXRldmVyIHJlYXNvbiBoYXMgYmVlbiBoYWNrZWQsIHRoZSBwZXJzb24gb24gdGhlIG90aGVyIHNpZGUgY2FuIHRha2UgcGljdHVyZXMgYW5kIHZpZGVvIG9mIGFueXRoaW5nIG9yIGFueW9uZS4gTm8sIHRoaXMgaXNu4oCZdCBqdXN0IHBhcmFub2lh4oCTYSByZWNlbnQgc3VydmV5IGNvbmR1Y3RlZCBieSBIUCBmb3VuZCB0aGF0IDEwJSBpbiB0aGUgVS5TLiBlaXRoZXIga25vdyBzb21lb25lIHdob3NlIHdlYmNhbSB3YXMgaGFja2VkIG9yIGhhdmUgaGFkIHRoZWlyIG93biB3ZWJjYW0gaGFja2VkLjwvcD5cbiAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuICAgIDxCdG4gcD17NC43NX0gZ3JlZW49e3RydWV9PkNvbnRpbnVlPC9CdG4+XG4gICAgPC9kaXY+XG48L3NlY3Rpb24+XG57OmVsc2UgaWYgJHN0ZXA9PTF9XG48c2VjdGlvbj5cblx0PGgyPkNvdmVyIFlvdXIgV2ViY2FtPC9oMj5cblx0PHA+Q292ZXIgeW91ciB3ZWJjYW0uIFlvdSBjYW4gZmluZCByZW1vdmFibGUgc3RpY2tlcnMgZm9yIHRoaXMgcHVycG9zZSwgYnV0IHNpbXBsZSBmaXhlcyBjYW4gYmUgZm91bmQgYXQgeW91ciBob21lIG9yIG9mZmljZS4gWW91IGNhbiB1c2UgYSBzdGlja3kgbm90ZSBvciAgYSBwaWVjZSBvZiBtYXNraW5nIHRhcGUgdG8gb2JzY3VyZSB5b3VyIHdlYmNhbSB3aGVuIGl04oCZcyBub3QgaW4gdXNlLiBMaWtlIHJpZ2h0IG5vdy4gPC9wPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtCdG59IHA9ezQuNX0+SXQncyBjb3ZlcmVkPC9zdmVsdGU6Y29tcG9uZW50PlxuICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtDb21wbGV0ZX0gc3VjY2Vzcz17ZmFsc2V9IHA9ezQuNX0gPk5vIFRoYW5rcywgSXQncyBhIGhhc3NsZTwvc3ZlbHRlOmNvbXBvbmVudD4gXG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlfVxuPHNlY3Rpb24+XG4gICA8ZGl2IGNsYXNzPVwidmlkZW8taG9sZGVyXCI+XG4gICAgICAgPFZpZD48L1ZpZD5cbiAgICA8L2Rpdj5cbjwvc2VjdGlvbj5cbnsvaWZ9XG5cbjxCYWNrLz5cbjxzdHlsZT5cbiAgIC52aWRlby1ob2xkZXJ7XG4gICAgICAgd2lkdGg6IDEwMCU7XG4gICB9XG48L3N0eWxlPiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cdGltcG9ydCBUcmFucyBmcm9tICcuL1RyYW5zSGVscC5zdmVsdGUnO1xuXHRpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9jb21wbGV0ZS5zdmVsdGUnIC8vc2V0IHN1Y2Nlc3M9e2ZhbHNlfSBmb3IgZmFpbHVyZVxuXHRpbXBvcnQgQnRuIGZyb20gJy4vQnRuLnN2ZWx0ZScgLy9zZXQgPE5leHQgcT17Mn0+IHRvIHNraXAgbXVsdGlwbGUgc3RlcHNcblx0aW1wb3J0IHsgY291bnQsIHN0ZXAsIHF1aXpTdGVwcyB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuXHRpbXBvcnQgQmFjayBmcm9tICcuL0JhY2suc3ZlbHRlJ1xuXG4gICAgIC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHRvbk1vdW50KCgpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMX0pO1xuXHRsZXQgZGlzYWJsZWQgPSBmYWxzZTtcblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRkaXNhYmxlZD0gdHJ1ZTtcblx0fVxuPC9zY3JpcHQ+XG5cbnsjaWYgJHN0ZXAgPT0gMH1cbjxzZWN0aW9uPlxuXHQ8aDI+SXMgeW91ciBpbmZvcm1hdGlvbiBlbmNyeXB0ZWQgYW5kIHNlY3VyZT88L2gyPiBcblx0PHA+SFRUUCBzdGFuZHMgZm9yIGh5cGVydGV4dCB0cmFuc2ZlciBwcm90b2NvbC4gSXTigJlzIGEgcHJvdG9jb2wgdGhhdCBhbGxvd3MgdGhlIHRyYW5zZmVycmluZyBvZiBkYXRhIGZyb20gYSB3ZWIgc2VydmVyIHRvIGEgYnJvd3NlciB0byB2aWV3IHdlYiBwYWdlcy48L3A+XG5cdDxwPlRoZSBwcm9ibGVtIGlzIHRoYXQgdGhlIGRhdGEgdHJhbnNmZXJyZWQgYnkgSFRUUCBpcyBub3QgZW5jcnlwdGVkLCBhbmQgaXQgY2FuIGJlIGludGVyY2VwdGVkIGJ5IHRoaXJkIHBhcnRpZXMgdG8gdmlldyB0aGUgZGF0YSBiZWluZyBwYXNzZWQgYmV0d2VlbiB0aGUgdHdvIHN5c3RlbXMuIFRoaXMgY2FuIGJlIGFkZHJlc3NlZCBieSB1c2luZyBhIHNlY3VyZSB2ZXJzaW9uIGNhbGxlZCBIVFRQUywgd2hlcmUgdGhlIFwiU1wiIHN0YW5kcyBmb3Igc2VjdXJlLjwvcD5cblx0PHA+VXNpbmcgIEhUVFBTICBpcyBlc3BlY2lhbGx5IGltcG9ydGFudCBmb3Igc2l0ZXMgdGhhdCB0cmFuc21pdCBzZW5zaXRpdmUgZGF0YSwgbGlrZSBlY29tbWVyY2Ugc2l0ZXMgdGhhdCBhY2NlcHQgb25saW5lIGNhcmQgcGF5bWVudHMsIG9yIGxvZ2luIGFyZWFzIHRoYXQgcmVxdWlyZSB1c2VycyB0byBlbnRlciB0aGVpciBjcmVkZW50aWFscy48L3A+XG5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8QnRuIGdyZWVuPXt0cnVlfT5Db250aW51ZTwvQnRuPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+RG93bmxvYWQgSFRUUFMgRXZlcnl3aGVyZSBleHRlbnNpb248L2gyPlxuXHQ8cD5MdWNraWx5LCB0aGUgRWxlY3Ryb25pYyBGcm9udGllciBGb3VuZGF0aW9uIGhhcyBjcmVhdGVkIGEgc21hcnQgZXh0ZW5zaW9uIHRoYXQgcmV3cml0ZXMgd2Vic2l0ZSByZXF1ZXN0cyB0byBIVFRQUy4gV2l0aCBIVFRQUywgdGhlIGludGVybmV0IHRyYWZmaWMgYmV0d2VlbiB5b3VyIGRldmljZSBhbmQgdGhlIHNlcnZlciBob3N0aW5nIHlvdXIgd2Vic2l0ZSBjYW7igJl0IGJlIHNlZW4gYnkgcHJ5aW5nIGV5ZXMuPC9wPlxuXG48ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHQ8YSBocmVmPSdodHRwczovL3d3dy5lZmYub3JnL2h0dHBzLWV2ZXJ5d2hlcmUnIHRhcmdldD1cIl9ibGFua1wiPjxidXR0b24gb246Y2xpY2t8b25jZT0ne2Rpc2FibGV9JyBkaXNhYmxlZD0ne2Rpc2FibGVkfSc+RG93bmxvYWQgZXh0ZW5zaW9uIG5vd1xuXHQ8L2J1dHRvbj48L2E+XG5cdDxDb21wbGV0ZT5cblx0XHR7I2lmICFkaXNhYmxlZH1cblx0XHRBbHJlYWR5IEhhdmUgaXRcblx0XHR7OmVsc2V9XG5cdFx0SnVzdCBkb3dubG9hZGVkIGl0XG5cdFx0ey9pZn1cblx0PC9Db21wbGV0ZT5cblx0PENvbXBsZXRlIHN1Y2Nlc3M9e2ZhbHNlfT5cblx0XHRObyBUaGFua3Ncblx0PC9Db21wbGV0ZT5cblx0XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuey9pZn1cbjxCYWNrLz5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICBcbiAgIGEge1xuXHQgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICB9XG4gICBcbjwvc3R5bGU+IiwiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgYWZ0ZXJVcGRhdGUgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHQvL2ltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG5cdGltcG9ydCBUcmFucyBmcm9tICcuL1RyYW5zSGVscC5zdmVsdGUnO1xuXHQgXG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4vQmFjay5zdmVsdGUnXG5cblx0b25Nb3VudChhc3luYygpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcblx0XHR9KTtcblx0XHRsZXQgZGlzYWJsZWQgPSBmYWxzZTtcblx0ZnVuY3Rpb24gZGlzYWJsZSgpIHtcblx0XHRkaXNhYmxlZD0gdHJ1ZTtcblx0XHRjb25zb2xlLmxvZyhkaXNhYmxlZCk7XG5cdH1cblx0PC9zY3JpcHQ+XG5cdDxzdmVsdGU6aGVhZD5cblx0XHQ8dGl0bGU+U2VhcmNoIEVuZ2luZTwvdGl0bGU+XG5cdDwvc3ZlbHRlOmhlYWQ+XG5cdFxuXHRcdDxzZWN0aW9uPlxuXHR7I2lmICRzdGVwPT0wfSBcblx0XHQ8aDE+Q2hhbmdlIFlvdXIgU2VhcmNoPC9oMT5cblx0XHQ8aDM+SG93IGFyZSB5b3Ugc2VhcmNoaW5nIGZvciBpbmZvcm1hdGlvbj8gPC9oMz5cblx0XHQ8cD5Vc2luZyBhIHNlYXJjaCBlbmdpbmUgY2FuIGRpc2Nsb3NlIGhpZ2hseSBwZXJzb25hbCBpbmZvcm1hdGlvbiBhYm91dCB5b3UsIHN1Y2ggYXMgbWVkaWNhbCBpc3N1ZXMsIGVtcGxveW1lbnQgc3RhdHVzLCBmaW5hbmNpYWwgaW5mb3JtYXRpb24sIHBvbGl0aWNhbCBiZWxpZWZzLCBhbmQgb3RoZXIgcHJpdmF0ZSBkZXRhaWxzLiBUaGlzIGRhdGEsIG9mIGNvdXJzZSwgY2FuIGJlIGNvbGxlY3RlZCwgc3RvcmVkLCBhbmQgbGlua2VkIHRvIHlvdXIgZGF0YSBwcm9maWxlIChhbmQgeW91ciByZWFsIGlkZW50aXR5KS4gVGhlIG9ubHkgd2F5IHRvIGVmZmVjdGl2ZWx5IOKAnG9wdCBvdXTigJ0gaXMgdG8ga2VlcCB5b3VyIGRhdGEgc2FmZSBhbmQgb3V0IG9mIHRoZSBoYW5kcyBvZiB0aGUgZGF0YSBjb2xsZWN0b3JzLjwvcD5cblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdFx0PEJ0biB5ZWxsb3c9e3RydWV9PkNvbnRpbnVlPC9CdG4+XG5cdFx0PC9kaXY+XG5cdHs6ZWxzZX1cblx0XHRcdDxoMT5Vc2UgYWx0ZXJuYXRpdmUgc2VhcmNoIGVuZ2luZTwvaDE+XG5cdFx0XHQ8cD5Qcm90ZWN0IHlvdXIgcHJpdmFjeSB3aGlsZSB5b3Ugc2VhcmNoIHVzaW5nIGFuIGFsdGVybmF0aXZlIHNlYXJjaCBlbmdpbmUgd2hlbiB5b3UgbmVlZCB0byBmaW5kIHNvbWV0aGluZyBvbiB0aGUgaW50ZXJuZXQuIFRoaXMgaXNu4oCZdCBhcyBoYXJkIGFzeW91IG1pZ2h0IHRoaW5rIGFzIHRoZXJlIGFyZSBzb21lIGNvbXBldGl0aXZlIGFsdGVybmF0aXZlcyBub3cgdGhhdCBkb27igJl0IGNvbGxlY3Qgb3Igc2hhcmUgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiDigJQgd2UgcmVjb21tZW5kIER1Y2tEdWNrR28gYXMgeW91ciBkZWZhdWx0IHNlYXJjaCwgYnV0IGlmIHlvdeKAmWQgbGlrZSB0byBzZWFyY2ggZm9yIG90aGVyIG9wdGlvbnMgPGEgaHJlZj1cImh0dHBzOi8vcmVzdG9yZXByaXZhY3kuY29tL3ByaXZhdGUtc2VhcmNoLWVuZ2luZS9cIj5jaGVjayB0aGVzZSBvdXQuPC9hPiA8L3A+XG5cdFx0XHRcdDxwPkZvbGxvdyB0aGUgbGluayBiZWxvdyBmb3IgZXhhY3QgaW5zdHJ1Y3Rpb24gb24gaG93IHRvIGNoYW5nZSB5b3VyIGRlZmF1bHQgc2VhcmNoIGVuZ2luZS48L3A+XG5cdFx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHRcdHsjaWYgIWRpc2FibGVkfVxuXHRcdFx0PGEgaHJlZj0naHR0cHM6Ly9kdWNrZHVja2dvLmNvbS9pbnN0YWxsJyB0YXJnZXQ9XCJfYmxhbmtcIj5cblx0XHRcdFx0PGJ1dHRvbiBvbjpjbGlja3xvbmNlPSd7ZGlzYWJsZX0nIGRpc2FibGVkPSd7ZGlzYWJsZWR9Jz5Td2l0Y2ggdG8gRHVja0R1Y2sgR29cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2E+XG5cdHs6ZWxzZX1cblx0XHRcdDxDb21wbGV0ZT5cblx0XHRcdFx0SnVzdCBjaGFuZ2VkIGl0IVxuXHRcdFx0PC9Db21wbGV0ZT5cblx0XHR7L2lmfVxuXHRcdDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0+XG5cdFx0XHRObyBUaGFua3Ncblx0XHQ8L0NvbXBsZXRlPlxuXHRcblx0XHQ8L2Rpdj5cblx0XHR7L2lmfVxuXHQ8L3NlY3Rpb24+XG5cdFx0PEJhY2sgLz5cblx0XHRcblx0XHRcblx0PHN0eWxlPlxuXHRcdGEge1xuXHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0fVxuXHQ8L3N0eWxlPiIsIjxzY3JpcHQ+XG4vLyBPcGVyYSA4LjArXG52YXIgaXNPcGVyYSA9ICghIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zKSB8fCAhIXdpbmRvdy5vcGVyYSB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJyBPUFIvJykgPj0gMCA/IHRydWUgOiBmYWxzZTtcblxuLy8gRmlyZWZveCAxLjArXG52YXIgaXNGaXJlZm94ID0gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJyA/IHRydWUgOiBmYWxzZTtcblxuLy8gU2FmYXJpIDMuMCsgXCJbb2JqZWN0IEhUTUxFbGVtZW50Q29uc3RydWN0b3JdXCIgXG52YXIgaXNTYWZhcmkgPSAvY29uc3RydWN0b3IvaS50ZXN0KHdpbmRvdy5IVE1MRWxlbWVudCkgfHwgKGZ1bmN0aW9uIChwKSB7IHJldHVybiBwLnRvU3RyaW5nKCkgPT09IFwiW29iamVjdCBTYWZhcmlSZW1vdGVOb3RpZmljYXRpb25dXCI7IH0pKCF3aW5kb3dbJ3NhZmFyaSddIHx8ICh0eXBlb2Ygc2FmYXJpICE9PSAndW5kZWZpbmVkJyAmJiBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbikpID8gdHJ1ZSA6IGZhbHNlO1xuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciA2LTExXG52YXIgaXNJRSA9IC8qQGNjX29uIUAqL2ZhbHNlIHx8ICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlID8gdHJ1ZSA6IGZhbHNlO1xuXG4vLyBFZGdlIDIwK1xudmFyIGlzRWRnZSA9ICFpc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWEgPyB0cnVlIDogZmFsc2U7XG5cbi8vIENocm9tZSAxIC0gNzlcbnZhciBpc0Nocm9tZSA9ICEhd2luZG93LmNocm9tZSAmJiAoISF3aW5kb3cuY2hyb21lLndlYnN0b3JlIHx8ICEhd2luZG93LmNocm9tZS5ydW50aW1lKSA/IHRydWUgOiBmYWxzZTtcblxuLy8gRWRnZSAoYmFzZWQgb24gY2hyb21pdW0pIGRldGVjdGlvblxudmFyIGlzRWRnZUNocm9taXVtID0gaXNDaHJvbWUgJiYgKG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ1wiKSAhPSAtMSkgPyB0cnVlIDogZmFsc2U7XG5cbi8vIEJsaW5rIGVuZ2luZSBkZXRlY3Rpb25cbnZhciBpc0JsaW5rID0gKGlzQ2hyb21lIHx8IGlzT3BlcmEpICYmICEhd2luZG93LkNTUyA/IHRydWUgOiBmYWxzZTtcblxuXG5sZXQgYnJvd3NlciA9ICdZb3VyIGJyb3dzZXIgaXM6JztcbmlmIChpc09wZXJhKXtcbiAgICBicm93c2VyKz0gXCIgT3BlcmFcIlxufSBlbHNlIGlmIChpc0ZpcmVmb3gpIHtcbiAgICBicm93c2VyKz0gXCIgRmlyZWZveFwiXG59ZWxzZSBpZiAoaXNTYWZhcmkpIHtcbiAgICBicm93c2VyKz0gXCIgU2FmYXJpXCJcbn1lbHNlIGlmIChpc0lFKSB7XG4gICAgYnJvd3Nlcis9IFwiIEludGVybmV0IEV4cGxvcmVyXCJcbn1lbHNlIGlmIChpc0VkZ2UpIHtcbiAgICBicm93c2VyKz0gXCIgRWRnZVwiXG59ZWxzZSBpZiAoaXNDaHJvbWUpIHtcbiAgICBicm93c2VyKz0gXCIgQ2hyb21lXCJcbn1lbHNlIGlmIChpc0VkZ2VDaHJvbWl1bSkge1xuICAgIGJyb3dzZXIrPSBcIiBFZGdlIENocm9taXVtXCJcbn0gZWxzZSB7XG4gICAgYnJvd3NlciArPSBcIiBXZSBkb24ndCBrbm93Pz8/XCJcbn1cbjwvc2NyaXB0PlxuPHA+PHN0cm9uZz57YnJvd3Nlcn08L3N0cm9uZz48L3A+XG48cD48L3A+XG57I2lmIGlzT3BlcmF9IFxuXHQ8b2w+XG4gICAgICAgIDxsaT5HbyB0byBicm93c2Vy4oCZcyBhZHZhbmNlZCBzZXR0aW5nPC9saT5cbiAgICAgICAgPGxpPlNlbGVjdCBQcml2YWN5IGFuZCBzZWN1cml0eSA+IENvbnRlbnQgc2V0dGluZ3MgPiBDb29raWVzU2VsZWN0PC9saT5cbiAgICAgICAgPGxpPkJsb2NrIHRoaXJkLXBhcnR5IGNvb2tpZXMgb24gdGhlIGRyb3Bkb3duIG1lbnUuPC9saT5cbiAgICA8L29sPlxuezplbHNlIGlmIGlzRmlyZWZveH0gXG5cdDxvbD5cbiAgICAgICAgPGxpPkluIEZpcmVmb3gsIGNsaWNrIFRvb2xzID4gT3B0aW9ucyA+IFByaXZhY3k8L2xpPlxuICAgICAgICA8bGk+U2VsZWN0IFwiVXNlIGN1c3RvbSBzZXR0aW5ncyBmb3IgaGlzdG9yeVwiIGluIHRoZSBkcm9wLWRvd24gbWVudSBhdCB0aGUgdG9wIG9mIHRoZSBkaWFsb2cgYm94PC9saT4gXG4gICAgICAgIDxsaT5DaGVjayBcIkNsZWFyIGhpc3Rvcnkgd2hlbiBGaXJlZm94IGNsb3Nlc1wiIDwvbGk+XG4gICAgICAgIDxsaT5DbGljayB0aGUgU2V0dGluZ3MgYnV0dG9uIDwvbGk+XG4gICAgICAgIDxsaT5JbiB0aGUgU2V0dGluZ3MgZm9yIENsZWFyaW5nIEhpc3RvcnkgZGlhbG9nLCBjaGVjayB0aGUgb3B0aW9ucyB5b3Ugd2FudCB0byBlcmFzZSBvbiBleGl0IGFuZCBjbGljayBPSzwvbGk+XG4gICAgPC9vbD5cbns6ZWxzZSBpZiBpc1NhZmFyaSB9XG4gICAgPG9sPlxuICAgICAgICA8bGk+Q2xpY2sgdGhlIHdyZW5jaCBpY29uIGluIHRoZSB0b3AtcmlnaHQgY29ybmVyIG9mIHRoZSBicm93c2VyIHdpbmRvdyBhbmQgXG4gICAgICAgIDxsaT5DaG9vc2UgT3B0aW9ucyA+IFVuZGVyIHRoZSBIb29kID4gQ29udGVudCBTZXR0aW5ncyA+IENvb2tpZXMuPC9saT4gXG4gICAgICAgIDxsaT5CbG9jayBhbGwgdGhpcmQtcGFydHkgY29va2llcyBvciBhbGwgdHJhY2tpbmcgY29va2llczwvbGk+XG4gICAgICAgIDxsaT5Bbm90aGVyIG9wdGlvbiBpbiB0aGlzIGRpYWxvZyBsZXRzIHlvdSBkZWxldGUgYWxsIGNvb2tpZXMgYW5kIG90aGVyIHNpdGUgZGF0YSBhdXRvbWF0aWNhbGx5IHdoZW4geW91IGNsb3NlIHRoZSBicm93c2VyLjwvbGk+XG4gICAgPC9vbD5cbns6ZWxzZSBpZiBpc0lFfSBcblx0PGgyPkhvbmVzdGx5Li4ueW91IG5lZWQgdG8gc3RvcCB1c2luZyBpbnRlcm5ldCBleHBsb3Jlci4gVGhlbiB3ZSBjYW4gdGFsay4gPC9oMj5cbns6ZWxzZSBpZiBpc0VkZ2UgfVxuICAgICAgICA8b2w+XG4gICAgICAgICAgICA8bGk+R28gdG8gU2V0dGluZ3M8L2xpPlxuICAgICAgICAgICAgPGxpPlNlbGVjdCBWaWV3IEFkdmFuY2VkIFNldHRpbmdzPC9saT5cbiAgICAgICAgICAgIDxsaT5QcmVzcyB0aGUgZHJvcCBkb3duIGFycm93IHVuZGVyIENvb2tpZXM8L2xpPlxuICAgICAgICAgICAgPGxpPlNlbGVjdCB0aGUgJ0Jsb2NrIG9ubHkgdGhpcmQgcGFydHkgY29va2llcycgb3B0aW9uPC9saT5cbiAgICAgICAgPC9vbD5cbns6ZWxzZSBpZiBpc0Nocm9tZSB9XG5cdDxvbD5cbiAgICAgICAgPGxpPkNsaWNrIHRoZSB3cmVuY2ggaWNvbiBpbiB0aGUgdG9wLXJpZ2h0IGNvcm5lciBvZiB0aGUgYnJvd3NlciB3aW5kb3cgYW5kIFxuICAgICAgICA8bGk+Q2hvb3NlIE9wdGlvbnMgPiBVbmRlciB0aGUgSG9vZCA+IENvbnRlbnQgU2V0dGluZ3MgPiBDb29raWVzLjwvbGk+IFxuICAgICAgICA8bGk+QmxvY2sgYWxsIHRoaXJkLXBhcnR5IGNvb2tpZXMgb3IgYWxsIHRyYWNraW5nIGNvb2tpZXM8L2xpPlxuICAgICAgICA8bGk+QW5vdGhlciBvcHRpb24gaW4gdGhpcyBkaWFsb2cgbGV0cyB5b3UgZGVsZXRlIGFsbCBjb29raWVzIGFuZCBvdGhlciBzaXRlIGRhdGEgYXV0b21hdGljYWxseSB3aGVuIHlvdSBjbG9zZSB0aGUgYnJvd3Nlci48L2xpPlxuICAgIDwvb2w+XG57OmVsc2UgaWYgaXNFZGdlQ2hyb21pdW19XG48b2w+XG4gICAgPGxpPkdvIHRvIFNldHRpbmdzPC9saT5cbiAgICA8bGk+U2VsZWN0IFZpZXcgQWR2YW5jZWQgU2V0dGluZ3M8L2xpPlxuICAgIDxsaT5QcmVzcyB0aGUgZHJvcCBkb3duIGFycm93IHVuZGVyIENvb2tpZXM8L2xpPlxuICAgIDxsaT5TZWxlY3QgdGhlICdCbG9jayBvbmx5IHRoaXJkIHBhcnR5IGNvb2tpZXMnIG9wdGlvbjwvbGk+XG48L29sPlxuezplbHNlfSBcblx0PHA+U29ycnkuLi53ZSBkb24ndCBrbm93IHdoYXQga2luZCBvZiBicm93c2VyIHlvdSBhcmUgdXNpbmcsIHNvIGNhbid0IHByb3ZpZGUgaW5zdHJ1Y3Rpb25zLiBUcnkgc2VhcmNoaW5nIER1Y2tEdWNrR28gZm9yIGFuIGFuc3dlci48L3A+XG57L2lmfVxuPHA+PC9wPlxuPHN0eWxlPlxuICAgIHN0cm9uZ3tcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG4gICAgXG48L3N0eWxlPiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cdGltcG9ydCB7IG9uTW91bnQsIGFmdGVyVXBkYXRlIH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IERldGVjdCBmcm9tICcuL0RldGVjdC5zdmVsdGUnXG5cdGltcG9ydCBUcmFucyBmcm9tICcuL1RyYW5zSGVscC5zdmVsdGUnO1xuXHRpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9jb21wbGV0ZS5zdmVsdGUnIC8vc2V0IHN1Y2Nlc3M9e2ZhbHNlfSBmb3IgZmFpbHVyZVxuXHRpbXBvcnQgQnRuIGZyb20gJy4vQnRuLnN2ZWx0ZScgLy9zZXQgPE5leHQgcT17Mn0+IHRvIHNraXAgbXVsdGlwbGUgc3RlcHNcblx0aW1wb3J0IHsgY291bnQsIHN0ZXAsIHF1aXpTdGVwcyB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuXHRpbXBvcnQgQmFjayBmcm9tICcuL0JhY2suc3ZlbHRlJ1xuXG5cdC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuICAgIG9uTW91bnQoYXN5bmMoKSA9PiB7JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDF9KTtcblx0Ly9jb25maXJtIGNvbWxldGlvbiBvZiBxdWl6IHRvIG1hc3RlciBxdWl6IGNvbXBvbmVudFxuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5RdWVzdGlvbiA0OiBQcml2YWN5IFNldHRpbmdzPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG57I2lmICRzdGVwPT0wfVxuPHNlY3Rpb24+XG5cdDxoMT5Qcml2YWN5IHNldHRpbmdzIC0gM3JkIHBhcnR5IGNvb2tpZXM8L2gxPlxuXHQ8aDI+V2FudCBzb21lIGNvb2tpZXM/PC9oMj5cblx0PHA+V2VsbCwgbm90IHRoYXQga2luZCBvZiBjb29raWUuPC9wPlxuXHQ8cD5Db29raWVzIGFyZSBzbWFsbCBmaWxlcyB0aGF0IGFyZSBzdG9yZWQgb24geW91ciBjb21wdXRlciBhbmQgY2FycnkgaW5mb3JtYXRpb24gZnJvbSBvbmUgc2Vzc2lvbiBvbiBhIHdlYnNpdGUgdG8gYW5vdGhlci4gVXN1YWxseSwgdGhlIHdlYnNpdGUgdGhhdCBzZXRzIGEgY29va2llIGlzIHRoZSBvbmx5IG9uZSB0aGF0IHJlYWRzIHRoZSBjb29raWUuIEhvd2V2ZXIsIHRoaXJkLXBhcnR5IGNvb2tpZXMgY2FuIGJlIHNldCBieSBvbmUgd2Vic2l0ZSBhbmQgcmVhZCBieSBhbm90aGVyLiBUaGlyZC1wYXJ0eSBjb29raWVzIGFyZSB1c2VkIGJ5IHNlcnZlcnMgdGhhdCBkZWxpdmVyIGFkdmVydGlzZW1lbnRzIGFuZCB0aG9zZSBhbm5veWluZyBwb3AtdXAgYW5kIHBvcC11bmRlciBhZHMuPC9wPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxCdG4geWVsbG93PXt0cnVlfT5Db250aW51ZTwvQnRuPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+R2l2ZSAzcmQgcGFydHkgY29va2llcyB0aGUgYm9vdCBieSBtYW5hZ2luZyB5b3VyIGJyb3dzZXIgc2V0dGluZ3M6PC9oMj5cblx0PERldGVjdCAvPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiIGlkPSdjb29raWUtYnV0dG9ucyc+XG5cdFx0PGgzPkRpZCB5b3UgZGlzYWJsZSB0cmFja2luZyBjb29raWVzPzwvaDM+XG5cdFx0PENvbXBsZXRlPll1cDwvQ29tcGxldGU+XG5cdFx0PENvbXBsZXRlIHN1Y2Nlc3M9e2ZhbHNlfT5ObywgSSBkb24ndCBtaW5kIHRoZW0gZm9sbG93aW5nIG1lPC9Db21wbGV0ZT5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuPEJhY2svPlxuPC9UcmFucz5cbjxzdHlsZT5cbiAgIC5idXR0b24taG9sZGVyIHtcblx0d2lkdGg6IDI3dnc7XG5cdGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xuICAgfVxuICAgI2Nvb2tpZS1idXR0b25ze1xuXHQgICBtYXJnaW46IDQwcHggMHB4IDBweCAwcHg7XG4gICB9XG48L3N0eWxlPiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cdGltcG9ydCBUcmFucyBmcm9tICcuL1RyYW5zSGVscC5zdmVsdGUnO1xuXHRpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9jb21wbGV0ZS5zdmVsdGUnXG5cdGltcG9ydCBCdG4gZnJvbSAnLi9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4vQmFjay5zdmVsdGUnXG5cblx0Ly9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG5cdG9uTW91bnQoYXN5bmMoKSA9PiB7JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDF9KTtcblx0bGV0IGRpc2FibGVkID0gZmFsc2U7XG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0ZGlzYWJsZWQ9IHRydWU7XG5cdFx0Y29uc29sZS5sb2coZGlzYWJsZWQpO1xuXHR9XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPlRyYWNrZXIgYmxvY2tlcjwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuPFRyYW5zPlxueyNpZiAkc3RlcD09MH1cbjxzZWN0aW9uPlxuXHQ8aDI+VHJhY2tlciBibG9ja2VyOiBQcml2YWN5IEJhZGdlcjwvaDI+IFxuXHQ8aDM+QXJlIHlvdSBiZWluZyB0cmFja2VkIG9uIHRoZSB3ZWI/PC9oMz4gXG5cdDxoMj5BbG1vc3QgZGVmaW5pdGVseS4gPC9oMj5cblx0XHQ8cD5UcmFja2VycyBhcmUgaW5zdGFsbGVkIG9uIG1hbnkgd2Vic2l0ZXMgdG8gbG9nIHlvdXIgYmVoYXZpb3IuIFdoaWxlIGNvb2tpZXMgYXJlIHRoZSBsaXR0bGUgaWRlbnRpZmllcnMgZm9yIHdlYnNpdGVzIHRvIHJlY29nbml6ZSB5b3UgdGhyb3VnaCBtdWx0aXBsZSB2aXNpdHMsIHRyYWNrZXJzIHVzZSB0aG9zZSBjb29raWVzIHRvIGFuYWx5emUgeW91ciBiZWhhdmlvciBhbmQgYnVpbGQgdGhlaXIgdmFsdWFibGUgdXNlciBwcm9maWxlcy4gVHJhY2tlcnMgd2lsbCBsb2cgdGhlIHNpdGUgeW91IHZpc2l0LCB0aGUgZGF0ZSBhbmQgdGltZSwgYW5kIHlvdXIgY29tcHV0ZXIgc2V0dGluZ3MgKG1vcmUgcG93ZXJmdWwgdHJhY2tlcnMgY2FuIGV2ZW4gd2F0Y2ggeW91ciBtb3VzZSBtb3ZlbWVudCkgYWxsIG9mIHRoaXMgd2l0aG91dCB5b3VyIGNvbnNlbnQuPC9wPlxuXHRcdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0XHQ8QnRuIHllbGxvdz17dHJ1ZX0+Q29udGludWU8L0J0bj5cblx0XHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+SW5zdGFsbCB0aGUgUHJpdmFjeSBCYWRnZXIgZXh0ZW5zaW9uLjwvaDI+XG5cdDxwPlByaXZhY3kgQmFkZ2VyIGlzIGEgZnJlZSBhbmQgb3Blbi1zb3VyY2UgYnJvd3NlciBleHRlbnNpb24gZm9yIEdvb2dsZSBDaHJvbWUsIE1vemlsbGEgYW5kIEZpcmVmb3ggdGhhdCBhdXRvbWF0aWNhbGx5IGRpc2NvdmVycyB0cmFja2VycyBhcyB5b3UgYnJvd3NlIHRoZSBXZWIuIFRoZSBsb25nZXIgeW91IGJyb3dzZSB3aXRoIFByaXZhY3kgQmFkZ2VyLCB0aGUgYmV0dGVyIGl0IGdldHMgYXQgcHJvdGVjdGluZyB5b3UsIHNvIHN0YXJ0IGJyb3dzaW5nIGEgbGl0dGxlIHRvIHRlYWNoIHlvdXIgQmFkZ2VyLjwvcD5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8YSByZWw9ZXh0ZXJuYWwgaHJlZj0naHR0cHM6Ly9wcml2YWN5YmFkZ2VyLm9yZycgdGFyZ2V0PVwiX2JsYW5rXCI+PGJ1dHRvbiBvbjpjbGlja3xvbmNlPSd7ZGlzYWJsZX0nIGRpc2FibGVkPSd7ZGlzYWJsZWR9Jz5Eb3dubG9hZCBQcml2YWN5IEJhZGdlclxuXHRcdDwvYnV0dG9uPjwvYT5cblx0XHQ8Q29tcGxldGU+XG5cdFx0XHR7I2lmICFkaXNhYmxlZH1cblx0XHRcdEFscmVhZHkgSGF2ZSBpdFxuXHRcdFx0ezplbHNlfVxuXHRcdFx0SnVzdCBkb3dubG9hZGVkIGl0XG5cdFx0XHR7L2lmfVxuXHRcdDwvQ29tcGxldGU+XG5cdFx0PENvbXBsZXRlIHN1Y2Nlc3M9e2ZhbHNlfT5cblx0XHRcdE5vIFRoYW5rc1xuXHRcdDwvQ29tcGxldGU+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuey9pZn1cbjxCYWNrLz5cbjwvVHJhbnM+XG48c3R5bGU+XG4gICBhIHtcblx0ICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgfVxuPC9zdHlsZT4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBvbk1vdW50LCBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgVHJhbnMgZnJvbSAnLi9UcmFuc0hlbHAuc3ZlbHRlJztcblx0aW1wb3J0IENvbXBsZXRlIGZyb20gJy4vY29tcGxldGUuc3ZlbHRlJyAvL3NldCBzdWNjZXNzPXtmYWxzZX0gZm9yIGZhaWx1cmVcblx0aW1wb3J0IEJ0biBmcm9tICcuL0J0bi5zdmVsdGUnIC8vc2V0IDxOZXh0IHE9ezJ9PiB0byBza2lwIG11bHRpcGxlIHN0ZXBzXG5cdGltcG9ydCB7IGNvdW50LCBzdGVwLCBxdWl6U3RlcHMgfSBmcm9tICcuLi9zdG9yZS5qcydcblx0aW1wb3J0IEJhY2sgZnJvbSAnLi9CYWNrLnN2ZWx0ZSdcblx0aW1wb3J0IHsgZmx5LCBmYWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nXG5cdGltcG9ydCB7IHNpbmVJbk91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuXHQvL3NldHMgYXNpZGUgaWNvbiB0byBpbiBwcm9ncmVzcyB2aWEgc3RvcmVcbiAgICBvbk1vdW50KGFzeW5jKCkgPT4geyRxdWl6U3RlcHNbJGNvdW50XS5zdGF0dXMgPSAxfSk7XG5cdGxldCBtYWMgPSBmYWxzZTtcblx0bGV0IHBjID0gZmFsc2U7XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkRvbWFpbiBOYW1lIFNlcnZpY2U8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxkaXYgaW46Zmx5PVwie3tkZWxheTogMTUwLCBkdXJhdGlvbjogODAwLCB5OiAxMDAwLCBvcGFjaXR5OiAwLjAsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6ZmFkZT1cInt7ZGVsYXk6IDEwMCwgZHVyYXRpb246IDgwMH19XCI+XG57I2lmICRzdGVwPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5Eb21haW4gTmFtZSBTZXJ2ZXIgKEROUyk6IFF1YWQ5XG5cdDwvaDI+IFxuXHQ8cD5FdmVyeXRoaW5nIG9uIHRoZSBJbnRlcm5ldCwgaW5jbHVkaW5nIHdlYnNpdGVzLCBsaXZlIGF0IGEgbnVtZXJpY2FsIElQIGFkZHJlc3MuIFRoZSBEb21haW4gTmFtZSBTeXN0ZW0sIG9yIEROUywgdHJhbnNsYXRlcyB0aGVzZSBudW1lcmljYWwgSVAgYWRkcmVzc2VzIGludG8gaHVtYW4tcmVhZGFibGUgZG9tYWluIG5hbWVzIHRoYXQgd2UgYWxsIGtub3cgYW5kIHJlbWVtYmVyIChsaWtlIG1pbmR5b3VyZGF0YS5vcmcpLiBJZiB5b3VyIEROUyBzZXR0aW5ncyBhcmUgbm90IHdvcmtpbmcgY29ycmVjdGx5LCBvciB5b3XigJlyZSBzdGlsbCB1c2luZyBkZWZhdWx0cywgeW91IG1heSBiZSBhdCByaXNrIGZvciBjeWJlcmNyaW1lIGFuZCBwZXJmb3JtYW5jZSBpc3N1ZXMuIEFuZCwgdGhlIHdlYnNpdGVzIHlvdSB2aXNpdCBtYXkgYmUgY29sbGVjdGVkIGFuZCBzaGFyZWQgYnkgd2hhdGV2ZXIgZW50aXR5IG93bnMgdGhlIEROUyBzZXJ2aWNlLjwvcD5cblx0PGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cblx0XHQ8QnRuIGdyZWVuPXt0cnVlfT5Db250aW51ZTwvQnRuPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cbjxzZWN0aW9uPlxuXHQ8aDI+U2V0dXAgUXVhZDk8L2gyPlxuXHQ8cD5RdWFkOSBpcyBhIGZyZWUsIG5vdC1mb3ItcHJvZml0IHNlY3VyaXR5IHNvbHV0aW9uIHRoYXQgdXNlcyB0aGUgRE5TIHRvIHByb3RlY3QgeW91ciBzeXN0ZW0gYWdhaW5zdCB0aGUgbW9zdCBjb21tb24gY3liZXIgdGhyZWF0cy4gTm90IG9ubHkgZG9lcyBpdCAgcHJlc2VydmUgYW5kIHByb3RlY3QgeW91ciBwcml2YWN5LCBpdCB3aWxsIGFsc28gaW1wcm92ZSB5b3VyIHN5c3RlbeKAmXMgcGVyZm9ybWFuY2UhIEl04oCZcyBsaWtlIGEgcGFpbmxlc3MgaW1tdW5pemF0aW9uIGZvciB5b3VyIGNvbXB1dGVyIGFuZCBkZXZpY2VzLjwvcD5cblx0PGRpdiBjbGFzczptYWMgb246Y2xpY2s9XCJ7KCkgPT4gbWFjID0gIW1hY31cIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY2FyZXRcIj5cblx0XHRcdDxwPlNldHVwIFF1YWQ5IGZvciBNYWM6PC9wPlxuXHRcdFx0PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHQ8cGF0aCBkPVwiTTE4Ljg4NSA3TDEyIDEzLjc5ODlMNS4xMTUgN0wzIDkuMDkzMTJMMTIgMThMMjEgOS4wOTMxMkwxOC44ODUgN1pcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0XHR7I2lmIG1hY31cblx0XHQ8aWZyYW1lIHRpdGxlPVwiU2V0dXAgUXVhZDkgZm9yIG1hY1wiIHdpZHRoPVwiNTYwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS1ub2Nvb2tpZS5jb20vZW1iZWQvTk00QWRmRW5BbVlcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuXHRcdHsvaWZ9XG5cdDwvZGl2PlxuXHRcdDxocj5cbiBcdDxkaXYgY2xhc3M6cGMgb246Y2xpY2s9XCJ7KCkgPT4gcGMgPSAhcGN9XCI+XG5cdFx0PGRpdiBjbGFzcz1cImNhcmV0XCI+XG5cdFx0XHQ8cD5TZXR1cCBRdWFkOSBmb3IgUEM6PC9wPlxuXHRcdFx0PHN2ZyB3aWR0aD1cIjI0XCIgaGVpZ2h0PVwiMjRcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG5cdFx0XHQ8cGF0aCBkPVwiTTE4Ljg4NSA3TDEyIDEzLjc5ODlMNS4xMTUgN0wzIDkuMDkzMTJMMTIgMThMMjEgOS4wOTMxMkwxOC44ODUgN1pcIiBmaWxsPVwid2hpdGVcIi8+XG5cdFx0XHQ8L3N2Zz5cblx0XHQ8L2Rpdj5cblx0XHQgeyNpZiBwY31cblx0XHQgPGlmcmFtZSB0aXRsZT1cIlNldHVwIFF1YWQ5IGZvciBXaW5kb3dzXCIgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC9hdWpVbDN5dDZuTVwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XG4gICAgICAgIHsvaWZ9XG4gICAgPC9kaXY+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PENvbXBsZXRlPlNldHVwIENvbXBsZXRlPC9Db21wbGV0ZT5cblx0XHQ8Q29tcGxldGUgc3VjY2Vzcz17ZmFsc2V9PkRvbid0IGNhcmUsIGxldCB0aGVuIHNub29wPC9Db21wbGV0ZT5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuPEJhY2svPlxuPC9kaXY+XG48c3R5bGU+XG4gICAuYnV0dG9uLWhvbGRlciB7XG5cdHdpZHRoOiAyN3Z3O1xuXHRkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgIH1cbiAgIGJ1dHRvbiB7XG5cdCAgIHBhZGRpbmc6IDEwcHggMjBweDtcblx0ICAgbWFyZ2luOiAxMHB4O1xuXHQgICBib3JkZXI6IGJsYWNrIHNvbGlkIDBweDtcblx0ICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgfVxuICAgLmNhcmV0e1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1mbG93OiByb3cgbm93cmFwO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR9XG48L3N0eWxlPiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IG9uTW91bnQsIGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cdGltcG9ydCBUcmFucyBmcm9tICcuL1RyYW5zSGVscC5zdmVsdGUnO1xuXHRpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9jb21wbGV0ZS5zdmVsdGUnIC8vc2V0IHN1Y2Nlc3M9e2ZhbHNlfSBmb3IgZmFpbHVyZVxuXHRpbXBvcnQgQnRuIGZyb20gJy4vQnRuLnN2ZWx0ZScgLy9zZXQgPE5leHQgcT17Mn0+IHRvIHNraXAgbXVsdGlwbGUgc3RlcHNcblx0aW1wb3J0IHsgY291bnQsIHN0ZXAsIHF1aXpTdGVwcyB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuXHRpbXBvcnQgQmFjayBmcm9tICcuL0JhY2suc3ZlbHRlJ1xuXG5cblx0Ly9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG4gICAgb25Nb3VudChhc3luYygpID0+IHskcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMX0pO1xuXG5cdGxldCBjdXJyZW50ID0gJ2luaXRpYWwnO1xuPC9zY3JpcHQ+XG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT5JbnRlcm5ldCBvZiB0aGluZ3MoIEFsZXhhLCBIb21lIGRldmljZXMpPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48VHJhbnM+XG57I2lmICRzdGVwPT0wfVxuPHNlY3Rpb24+XG5cdDxoMj5JbnRlcm5ldCBvZiB0aGluZ3MoIEFsZXhhLCBIb21lIGRldmljZXMpPC9oMj4gXG5cdDxwPkl0IHNob3VsZCBiZSBjbGVhciBieSBub3cgdGhhdCB5b3VyIGRhaWx5IGludGVyYWN0aW9ucyB0ZWNobm9sb2d5LCBsZXQgYWxvbmUgeW91ciBzbWFydCBzcGVha2VyIGFyZSBhbnl0aGluZyBidXQgcHJpdmF0ZS4gQSBzZXJpZXMgb2YgaW52ZXN0aWdhdGl2ZSByZXBvcnRzIGhhdmUgc2hvd24gdGhhdCBvdGhlciBwZW9wbGUgYXJlIHJldmlld2luZyByZWNvcmRpbmdzIG9yIHRyYW5zY3JpcHRzIG9mIHlvdXIgY29udmVyc2F0aW9ucy4gXG5cdDwvcD5cblx0PHA+VGhlIHRocmVlIGJpZyBtYWtlcnMgb2Ygc21hcnQgc3BlYWtlcnPigJRBbWF6b24sIEFwcGxlLCBhbmQgR29vZ2xl4oCUc2F5IHRoZXkgZG8gdGhpcyB0byBpbXByb3ZlIHRoZSBkZXZpY2XigJlzIHBlcmZvcm1hbmNlLCBub3QgZm9yIHRhcmdldGluZyBhZHMuIEJ1dCBwcml2YWN5IGFkdm9jYXRlcyBhcmd1ZSB0aGF0LCB3aXRob3V0IHByaW9yIG5vdGljZSwgYW55IGxpc3RlbmluZyBmcm9tIGVtcGxveWVlcyBhbmQgY29udHJhY3RvcnMgaXMgdW5mYWlyIHRvIGNvbnN1bWVycy48L3A+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PEJ0bj5JIG93biBhIHNtYXJ0IHNwZWFrZXI8L0J0bj5cblx0XHQ8QnRuIHE9ezJ9PkkgZG9uJ3Qgb3duIGEgc21hcnQgc3BlYWtlcjwvQnRuPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZSBpZiAkc3RlcD09MX1cbjxzZWN0aW9uPlxuXHQ8ZGl2IGNsYXNzOmFjdGl2ZT1cIntjdXJyZW50ID09PSAnYW1hem9uJ31cIlxuXHRvbjpjbGljaz1cInsoKSA9PiBjdXJyZW50ID0gJ2FtYXpvbid9XCI+XG5cdFx0PHA+QW1hem9uIEFsZXhhPC9wPlxuXHRcdHsjaWYgY3VycmVudD09PSdhbWF6b24nfVxuXHRcdDx1bD5cblx0XHRcdDxsaT5TdGVwIDE6IE9wZW4gdGhlIEFsZXhhIGFwcCBvbiB5b3VyIHNtYXJ0cGhvbmUgYW5kIHRhcCB0aGUgbWVudSBidXR0b24gb24gdGhlIHRvcC1sZWZ0IG9mIHRoZSBzY3JlZW4uPC9saT5cblx0XHRcdDxsaT5TdGVwIDI6IFNlbGVjdCBTZXR0aW5ncyA+IEFsZXhhIFByaXZhY3kgPiBNYW5hZ2UgSG93IFlvdXIgRGF0YSBJbXByb3ZlcyBBbGV4YS48L2xpPlxuXHRcdFx0PGxpPlN0ZXAgMzogU3dpdGNoIG9mZiB0aGUgdG9nZ2xlIG5leHQgdG8gSGVscCBJbXByb3ZlIEFtYXpvbiBTZXJ2aWNlcyBhbmQgRGV2ZWxvcCBOZXcgRmVhdHVyZXMuPC9saT5cblx0XHRcdDxsaT5TdGVwIDQ6IFRoZW4gc3dpdGNoIG9mZiB0aGUgdG9nZ2xlIG5leHQgdG8geW91ciBuYW1lIHVuZGVyIFVzZSBNZXNzYWdlcyB0byBJbXByb3ZlIFRyYW5zY3JpcHRpb25zLjwvbGk+XG5cdFx0PC91bD5cblx0XHR7L2lmfVxuXHQ8L2Rpdj5cblx0XG5cdDxocj5cblx0PGRpdiBjbGFzczphY3RpdmU9XCJ7Y3VycmVudCA9PT0gJ2dvb2dsZSd9XCJcblx0b246Y2xpY2s9XCJ7KCkgPT4gY3VycmVudCA9ICdnb29nbGUnfVwiPlxuXHRcdDxwPkdvb2dsZSBBc3Npc3RhbnQ8L3A+XG5cdFx0eyNpZiBjdXJyZW50PT09J2dvb2dsZSd9XG5cdFx0PHVsPlxuXHRcdFx0PGxpPlN0ZXAgMTogT3BlbiB0aGUgQWxleGEgYXBwIG9uIHlvdXIgc21hcnRwaG9uZSBhbmQgdGFwIHRoZSBtZW51IGJ1dHRvbiBvbiB0aGUgdG9wLWxlZnQgb2YgdGhlIHNjcmVlbi48L2xpPlxuXHRcdFx0PGxpPlN0ZXAgMjogU2VsZWN0IFNldHRpbmdzID4gQWxleGEgUHJpdmFjeSA+IE1hbmFnZSBIb3cgWW91ciBEYXRhIEltcHJvdmVzIEFsZXhhLjwvbGk+XG5cdFx0XHQ8bGk+U3RlcCAzOiBTd2l0Y2ggb2ZmIHRoZSB0b2dnbGUgbmV4dCB0byBIZWxwIEltcHJvdmUgQW1hem9uIFNlcnZpY2VzIGFuZCBEZXZlbG9wIE5ldyBGZWF0dXJlcy48L2xpPlxuXHRcdFx0PGxpPlN0ZXAgNDogVGhlbiBzd2l0Y2ggb2ZmIHRoZSB0b2dnbGUgbmV4dCB0byB5b3VyIG5hbWUgdW5kZXIgVXNlIE1lc3NhZ2VzIHRvIEltcHJvdmUgVHJhbnNjcmlwdGlvbnMuPC9saT5cblx0XHQ8L3VsPlxuXHRcdHsvaWZ9XG5cdDwvZGl2PlxuXHRcblx0PGhyPlxuXHQ8ZGl2IGNsYXNzOmFjdGl2ZT1cIntjdXJyZW50ID09PSAnYXBwbGUnfVwiXG5cdG9uOmNsaWNrPVwieygpID0+IGN1cnJlbnQgPSAnYXBwbGUnfVwiPlxuXHRcdDxwPkFwcGxlIFNpcmk8L3A+XG5cdFx0eyNpZiBjdXJyZW50PT09J2FwcGxlJ31cblx0XHQ8dWw+XG5cdFx0XHQ8bGk+U3RlcCAxOiBPcGVuIHRoZSBBbGV4YSBhcHAgb24geW91ciBzbWFydHBob25lIGFuZCB0YXAgdGhlIG1lbnUgYnV0dG9uIG9uIHRoZSB0b3AtbGVmdCBvZiB0aGUgc2NyZWVuLjwvbGk+XG5cdFx0XHQ8bGk+U3RlcCAyOiBTZWxlY3QgU2V0dGluZ3MgPiBBbGV4YSBQcml2YWN5ID4gTWFuYWdlIEhvdyBZb3VyIERhdGEgSW1wcm92ZXMgQWxleGEuPC9saT5cblx0XHRcdDxsaT5TdGVwIDM6IFN3aXRjaCBvZmYgdGhlIHRvZ2dsZSBuZXh0IHRvIEhlbHAgSW1wcm92ZSBBbWF6b24gU2VydmljZXMgYW5kIERldmVsb3AgTmV3IEZlYXR1cmVzLjwvbGk+XG5cdFx0XHQ8bGk+U3RlcCA0OiBUaGVuIHN3aXRjaCBvZmYgdGhlIHRvZ2dsZSBuZXh0IHRvIHlvdXIgbmFtZSB1bmRlciBVc2UgTWVzc2FnZXMgdG8gSW1wcm92ZSBUcmFuc2NyaXB0aW9ucy48L2xpPlxuXHRcdDwvdWw+XG5cdFx0ey9pZn1cblx0PC9kaXY+XG5cdFxuXHQ8aHI+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PGgzPkRpZCB5b3Ugc2V0dXAgcHJpdmFjeSBtb2RlPC9oMz5cblx0XHQ8Q29tcGxldGU+WWVzLCBJIERpZDwvQ29tcGxldGU+XG5cdFx0PENvbXBsZXRlIHN1Y2Nlc3M9e2ZhbHNlfT5ObyBJIGRvbid0IHdhbnQgdG88L0NvbXBsZXRlPlxuXHQ8L2Rpdj5cbjwvc2VjdGlvbj5cbns6ZWxzZX1cblx0PHNlY3Rpb24+XG5cdFx0PGgyPkhvb29yYXkhPC9oMj5cblx0XHQ8cD5PbmUgbGVzcyB3YXkgcGVvcGxlIGNhbiBzbm9vcCBvbiB5b3VyIHByaXZhY3kuPC9wPlxuXHRcdDxDb21wbGV0ZT5OZXh0IENoYWxsZW5nZTwvQ29tcGxldGU+XG5cdDwvc2VjdGlvbj5cbnsvaWZ9XG48QmFjay8+XG48L1RyYW5zPlxuPHN0eWxlPlxuXHRcbjwvc3R5bGU+IiwiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgY3JlYXRlRXZlbnREaXNwYXRjaGVyIH0gZnJvbSAnc3ZlbHRlJztcblx0Y29uc3QgZGlzcGF0Y2ggPSBjcmVhdGVFdmVudERpc3BhdGNoZXIoKTtcblx0aW1wb3J0IFRyYW5zIGZyb20gJy4vVHJhbnNIZWxwLnN2ZWx0ZSc7XG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuL2NvbXBsZXRlLnN2ZWx0ZScgLy9zZXQgc3VjY2Vzcz17ZmFsc2V9IGZvciBmYWlsdXJlXG5cdGltcG9ydCBCdG4gZnJvbSAnLi9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4vQmFjay5zdmVsdGUnXG5cblx0Ly9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG5cdG9uTW91bnQoYXN5bmMoKSA9PiB7JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG5cdFx0fSk7XG5cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+TG9jYXRpb24gVHJhY2tpbmc8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbnsjaWYgJHN0ZXA9PTB9XG48c2VjdGlvbj5cblx0PGgxPklzIHlvdXIgcGhvbmUgdHJhY2tpbmcgeW91ciBldmVyeSBtb3ZlPyBQcm9iYWJseS48L2gxPiBcblx0XHQ8cD5QZXJ2YXNpdmUgdHJhY2tpbmcgb2YgbG9jYXRpb24gYXQgdGhlIHZlcnkgbGVhc3Qgcmlza3MgcHV0dGluZyB5b3UgYXQgYSBkaXNhZHZhbnRhZ2UgYXMgYSBjb25zdW1lci4gQ2VydGFpbmx5IGlmIHlvdSBsaXZlIHNvbWV3aGVyZSB3aXRob3V0IGEgcHJvcGVyIHJlZ3VsYXRvcnkgZnJhbWV3b3JrIGZvciBwcml2YWN5LiBJdOKAmXMgYWxzbyB3b3J0aCBiZWFyaW5nIGluIG1pbmQgaG93IGxheCB0ZWNoIGdpYW50cyBjYW4gYmUgd2hlcmUgbG9jYXRpb24gcHJpdmFjeSBpcyBjb25jZXJuZWQg4oCUIHdoZXRoZXIgaXTigJlzIFViZXLigJlzIGluZmFtb3VzIOKAmGdvZCB2aWV34oCZIHRvb2wgb3IgU25hcGNoYXQgbGVha2luZyBzY2hvb2xraWRz4oCZIGxvY2F0aW9uIG9yIFN0cmF2YSBhY2NpZGVudGFsbHkgcmV2ZWFsaW5nIHRoZSBsb2NhdGlvbnMgb2YgbWlsaXRhcnkgYmFzZXMuIFRoZWlyIHJlY29yZCBpcyBwcmV0dHkgdGVycmlibGUuIDwvcD5cdFxuXHQ8aDM+V2hhdCBtb2JpbGUgZGV2aWNlIGRvIHlvdSB1c2U/PC9oMz5cblx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdFx0PEJ0bj5pT1M8L0J0bj5cblx0XHRcdDxCdG4+QW5kcm9pZDwvQnRuPlxuXHRcdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlIGlmICRzdGVwPT0xfVxuPHNlY3Rpb24+XG5cdDxoMj5UdXJuIGxvY2FpdG9uIG9mZiBvbiBJT1MgZGV2aWNlPC9oMj5cblx0PHA+U3RlcCAxLiBHbyB0byBTZXR0aW5ncyA+IFByaXZhY3kgPiBMb2NhdGlvbiBTZXJ2aWNlcy48L3A+XG5cdDxwPlN0ZXAgMi4gTWFrZSBzdXJlIHRoYXQgTG9jYXRpb24gU2VydmljZXMgaXMgb24uPC9wPlxuXHQ8cD5TdGVwIDMuIFNjcm9sbCBkb3duIHRvIGZpbmQgdGhlIGFwcC48L3A+XG5cdDxwPlN0ZXAgNC4gVGFwIHRoZSBhcHAgYW5kIHNlbGVjdCBhbiBvcHRpb246PC9wPlxuXHQ8dWw+XG5cdFx0PGxpPk5ldmVyOiBQcmV2ZW50cyBhY2Nlc3MgdG8gTG9jYXRpb24gU2VydmljZXMgaW5mb3JtYXRpb24uPC9saT5cblx0XHQ8bGk+QXNrIE5leHQgVGltZTogVGhpcyBhbGxvd3MgeW91IHRvIGNob29zZSBBbHdheXMgV2hpbGUgVXNpbmcgQXBwLCBBbGxvdyBPbmNlLCBvciBEb24ndCBBbGxvdy48L2xpPlxuXHRcdDxsaT5XaGlsZSBVc2luZyB0aGUgQXBwOiBBbGxvd3MgYWNjZXNzIHRvIExvY2F0aW9uIFNlcnZpY2VzIG9ubHkgd2hlbiB0aGUgYXBwIG9yIG9uZSBvZiBpdHMgZmVhdHVyZXMgaXMgdmlzaWJsZSBvbiBzY3JlZW4uIElmIGFuIGFwcCBpcyBzZXQgdG8gV2hpbGUgVXNpbmcgdGhlIEFwcCwgeW91IG1pZ2h0IHNlZSB5b3VyIHN0YXR1cyBiYXIgdHVybiBibHVlIHdpdGggYSBtZXNzYWdlIHRoYXQgYW4gYXBwIGlzIGFjdGl2ZWx5IHVzaW5nIHlvdXIgbG9jYXRpb24uPC9saT5cblx0XHQ8bGk+QWx3YXlzOiBBbGxvd3MgYWNjZXNzIHRvIHlvdXIgbG9jYXRpb24gZXZlbiB3aGVuIHRoZSBhcHAgaXMgaW4gdGhlIGJhY2tncm91bmQuPC9saT5cblx0PC91bD5cblx0PGgzPkRpZCB5b3UgdHVybiBvZmYgbG9jYXRpb24gb24geW91ciBkZXZpY2U8L2gzPlxuXHQ8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPlxuXHRcdDxDb21wbGV0ZT5ZZXMsIEkgZGlkPC9Db21wbGV0ZT5cblx0XHQ8Q29tcGxldGUgc3VjY2Vzcz17ZmFsc2V9Pk5vLCBJIGRpZG4ndDwvQ29tcGxldGU+XG5cdDwvZGl2PlxuPC9zZWN0aW9uPlxuezplbHNlfVxuPHNlY3Rpb24+XG5cdDxoMj5UdXJuIGxvY2FpdG9uIG9mZiBvbiBhbmQgQW5kcm9pZCBEZXZpY2U8L2gyPlxuXHQ8cD5TdGVwIDEuIEdvIHRvIFNldHRpbmdzID4gUHJpdmFjeSA+IExvY2F0aW9uIFNlcnZpY2VzLjwvcD5cblx0PHA+U3RlcCAyLiBNYWtlIHN1cmUgdGhhdCBMb2NhdGlvbiBTZXJ2aWNlcyBpcyBvbi48L3A+XG5cdDxwPlN0ZXAgMy4gU2Nyb2xsIGRvd24gdG8gZmluZCB0aGUgYXBwLjwvcD5cblx0PHA+U3RlcCA0LiBUYXAgdGhlIGFwcCBhbmQgc2VsZWN0IGFuIG9wdGlvbjo8L3A+XG5cdDx1bD5cblx0XHQ8bGk+TmV2ZXI6IFByZXZlbnRzIGFjY2VzcyB0byBMb2NhdGlvbiBTZXJ2aWNlcyBpbmZvcm1hdGlvbi48L2xpPlxuXHRcdDxsaT5Bc2sgTmV4dCBUaW1lOiBUaGlzIGFsbG93cyB5b3UgdG8gY2hvb3NlIEFsd2F5cyBXaGlsZSBVc2luZyBBcHAsIEFsbG93IE9uY2UsIG9yIERvbid0IEFsbG93LjwvbGk+XG5cdFx0PGxpPldoaWxlIFVzaW5nIHRoZSBBcHA6IEFsbG93cyBhY2Nlc3MgdG8gTG9jYXRpb24gU2VydmljZXMgb25seSB3aGVuIHRoZSBhcHAgb3Igb25lIG9mIGl0cyBmZWF0dXJlcyBpcyB2aXNpYmxlIG9uIHNjcmVlbi4gSWYgYW4gYXBwIGlzIHNldCB0byBXaGlsZSBVc2luZyB0aGUgQXBwLCB5b3UgbWlnaHQgc2VlIHlvdXIgc3RhdHVzIGJhciB0dXJuIGJsdWUgd2l0aCBhIG1lc3NhZ2UgdGhhdCBhbiBhcHAgaXMgYWN0aXZlbHkgdXNpbmcgeW91ciBsb2NhdGlvbi48L2xpPlxuXHRcdDxsaT5BbHdheXM6IEFsbG93cyBhY2Nlc3MgdG8geW91ciBsb2NhdGlvbiBldmVuIHdoZW4gdGhlIGFwcCBpcyBpbiB0aGUgYmFja2dyb3VuZC48L2xpPlxuXHQ8L3VsPlxuXHQ8aDM+RGlkIHlvdSB0dXJuIG9mZiBsb2NhdGlvbiBvbiB5b3VyIGRldmljZTwvaDM+XG5cdDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PENvbXBsZXRlPlllcywgSSBkaWQ8L0NvbXBsZXRlPlxuXHRcdDxDb21wbGV0ZSBzdWNjZXNzPXtmYWxzZX0+Tm8sIEkgZGlkbid0PC9Db21wbGV0ZT5cblx0PC9kaXY+XG48L3NlY3Rpb24+XG57L2lmfVxuPEJhY2svPlxuPC9UcmFucz5cbjxzdHlsZT5cblx0c2VjdGlvbiB7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdH1cblxuPC9zdHlsZT4iLCI8c2NyaXB0PlxuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgY3JlYXRlRXZlbnREaXNwYXRjaGVyLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgRGV0ZWN0IGZyb20gJy4vRGV0ZWN0LnN2ZWx0ZSdcbiAgICBpbXBvcnQgVHJhbnMgZnJvbSAnLi9UcmFuc0hlbHAuc3ZlbHRlJztcblx0IC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuXHQgaW1wb3J0IHsgY291bnQsIHRpbWVyQWN0aXZlLCBxdWl6U3RlcHMgfSBmcm9tICcuLi9zdG9yZS5qcydcblx0IGltcG9ydCBDb21wbGV0ZSBmcm9tICcuL2NvbXBsZXRlLnN2ZWx0ZSdcblx0IGltcG9ydCBCYWNrIGZyb20gJy4vQmFjay5zdmVsdGUnXG4gICAgaW1wb3J0IHsgZmx5IH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuICAgIGltcG9ydCB7IHNpbmVJbk91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuICAgIG9uTW91bnQoYXN5bmMoKSA9PiB7XG5cdFx0JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG5cdFx0dGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpXG5cdFx0fSk7XG5cdG9uRGVzdHJveSgoKSA9PiB0aW1lckFjdGl2ZS5zZXQoISR0aW1lckFjdGl2ZSkpXG48L3NjcmlwdD5cblx0PHNlY3Rpb24gaWQ9XCJtYWluLWNvbnRlbnRcIj5cblx0XHQ8ZGl2PlxuXHQ8aDM+Q2hlY2twb2ludDE8L2gzPlxuICAgICAgICA8aDE+U2VjdXJpdHkgdnMgUHJpdmFjeTogV2hhdOKAmXMgYXQgc3Rha2U/PC9oMT5cblx0XHQ8cD48c3Ryb25nPkNvbmdyYXR1bGF0aW9ucyE8L3N0cm9uZz4gQnkgY29tcGxldGluZyB0aGVzZSB0YXNrcywgeW91IGhhdmUganVzdCB0YWtlbiBhIGZldyBzdGVwcyB0b3dhcmQgc2VjdXJpbmcgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbiBmcm9tIHBvdGVudGlhbCBjeWJlcmNyaW1lLiBCdXQgdGhlIHRydXRoIGlzLCB5b3VyIGRhdGEg4oCUIGRpZmZlcmVudCBkZXRhaWxzIGFib3V0IHlvdSDigJQgbGl2ZXMgaW4gYSBsb3Qgb2YgcGxhY2VzIGluIG91ciBpbmNyZWFzaW5nbHkgY29ubmVjdGVkIHdvcmxkLiA8L3A+XG5cdFx0PHA+U29tZSBwZW9wbGUgdGhpbmsgb2YgcHJpdmFjeSBhbmQgc2VjdXJpdHkgYXMgcHJldHR5IG11Y2ggdGhlIHNhbWUgdGhpbmcuICBXaGlsZSB0aGUgdHdvIHNvbWV0aW1lcyBvdmVybGFwLCB0aGV5IGFyZW7igJl0IHRoZSBzYW1lLCBhbmQga25vd2luZyBob3cgdGhleSBkaWZmZXIgd2lsbCBoZWxwIGdpdmUgeW91IGNvbnRyb2wgb3ZlciB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGFuZCBob3cgaXTigJlzIHVzZWQuPC9wPlxuXHRcdDxwPjxzdHJvbmc+V2hhdOKAmXMgdGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBwcml2YWN5IGFuZCBzZWN1cml0eT88L3N0cm9uZz48L3A+XG5cdFx0PHA+U2VjdXJpdHkgcmVmZXJzIHRvIGhvdyB5b3VyIHBlcnNvbmFsIGluZm9ybWF0aW9uIGlzIHByb3RlY3RlZC4gPC9wPlxuXHRcdDxwPlByaXZhY3ksIG9uIHRoZSBvdGhlciBoYW5kLCByZWxhdGVzIHlvdXIgcmlnaHRzIHRvIGNvbnRyb2wgdGhlIGRhdGEgdGhhdOKAmXMgYmVpbmcgY29sbGVjdGVkIGFib3V0IHlvdSwgaG93IGl04oCZcyBjb2xsZWN0ZWQsIHdoeSwgYW5kIHdobyBpdOKAmXMgc2hhcmVkIHdpdGguPC9wPlxuXHRcdCBcblx0XHQ8cD48c3Ryb25nPldoeSBkb2VzIHByaXZhY3kgbWF0dGVyPzwvc3Ryb25nPjwvcD5cblx0XHQ8cD5UaGUgY29udmVuaWVuY2Ugb2YgbGl2aW5nIGluIGEgY29uc3RhbnRseSBjb25uZWN0ZWQgd29ybGQgY29tZXMgYXQgYSBjb3N0LiBPdXIgZGFpbHkgaW50ZXJhY3Rpb25zIHdpdGggdGVjaG5vbG9neSBnZW5lcmF0ZXMgYW4gdW5pbWFnaW5hYmxlIGFtb3VudCBvZiBkYXRhIHRoYXQgaXMgYmVpbmcgaGFydmVzdGVkIGFuZCBzb2xkIHRvIHRob3NlIHdobyB3YW50IHRvIHByZWRpY3QgYW5kIHNoYXBlIG91ciBiZWhhdmlvci4gPC9wPlxuXHRcdFxuXHRcdFxuXHRcdDxwPllvdSBtaWdodCB0aGluayBpdOKAmXMgbm8gYmlnIGRlYWwgdG8gZ2l2ZSB1cCB5b3VyIGRhdGEgaW4gZXhjaGFuZ2UgZm9yIHBlcnNvbmFsaXplZCBhZHMgYW5kIGNvbnRlbnQsIGJ1dCBjb25zdW1wdGlvbiAtLSBicm93c2luZyB0aHJvdWdoIGEgc3RvcmUgYW5kIGJ1eWluZyB0aGluZ3MgLS0gYW5kIHF1aWV0IHRpbWUgYWxvbmUgYXJlIGJvdGggaW1wb3J0YW50IHBhcnRzIG9mIGhvdyB3ZSBkZWZpbmUgb3Vyc2VsdmVzLiBJZiB3ZSBibGluZGx5IGFncmVlIHRvIGxpdmUgaW4gYSBzdGF0ZSBvZiBjb25zdGFudCBzdXJ2ZWlsbGFuY2UsIHdlIGxvc2UgdGhlIGFiaWxpdHkgdG8gY2hvb3NlIGZvciBvdXJzZWx2ZXMgYW5kIGFsbG93IG90aGVycyB0byBpbmZsdWVuY2Ugb3VyIGJlaGF2aW9ycyBhbmQgc2VsZi1wZXJjZXB0aW9uLjwvcD5cblx0XHRcblx0XHQ8cD5Ob3cgaW1hZ2luZSBpZiBvdXIgc29jaWV0eSBhY2NlcHRzIHN1cnZlaWxsYW5jZSBhcyB0aGUgbmV3IG5vcm1hbCBhbmQgY2l0aXplbnMga25vdyB0aGV5IGFyZSBiZWluZyB3YXRjaGVkIGNvbnN0YW50bHkuIFdlIG1heSBoYXZlIGhpZ2hseSBwZXJzb25hbGl6ZWQgYWNjZXNzIHRvIGdvb2RzIGFuZCBzZXJ2aWNlcywgYnV0IHdlIHdpbGwgYmUgbGVzcyBsaWtlbHkgdG8gc3BlYWsgZnJlZWx5IGFuZCBhY3QgaW5kaXZpZHVhbGx5LiBXaXRob3V0IHByaXZhY3kgYXMgYSBmdW5kYW1lbnRhbCByaWdodCwgd2UgbG9zZSBwb3dlciBhbmQgYmVjb21lIGFuIG9iZWRpZW50IGFuZCBzdWJtaXNzaXZlIHNvY2lldHkuPC9wPlxuXHRcdFxuPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj5cbiAgICA8Q29tcGxldGU+Q29udGludWUgdG8gbmV4dCBDaGFsbGVuZ2U8L0NvbXBsZXRlPlxuPC9kaXY+XG48L2Rpdj5cblxuPEJhY2svPlxuPC9zZWN0aW9uPlxuXG48c3R5bGU+XG4gICAjbWFpbi1jb250ZW50e1xuXHRcdFx0d2lkdGg6MTAwJTtcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1ODY5NzUyNC01YTJkMWU4YTkzZDE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI1NTAmcT04MCk7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG5cdFx0XHRwYWRkaW5nLXRvcDogMTVweDtcbiAgIH1cbiAgIGRpdiB7XG5cdHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzM4NDI0RDsgXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogOS4zdmggNXZ3IDB2aCA5LjN2aDtcbiAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICB9XG4gIFxuICAgc3Ryb25nIHtcblx0ICAgZm9udC13ZWlnaHQ6IDcwMDtcblx0ICAgZm9udC1zaXplOiAyMnB4O1xuICAgfVxuPC9zdHlsZT4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgeyBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgeyBvbk1vdW50LCBhZnRlclVwZGF0ZSwgb25EZXN0cm95IH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IERldGVjdCBmcm9tICcuL0RldGVjdC5zdmVsdGUnXG5cdGltcG9ydCBDb21wbGV0ZSBmcm9tICcuL2NvbXBsZXRlLnN2ZWx0ZSdcblx0aW1wb3J0IEJhY2sgZnJvbSAnLi9CYWNrLnN2ZWx0ZSdcblxuXHQgLy9zZXRzIGFzaWRlIGljb24gdG8gaW4gcHJvZ3Jlc3MgdmlhIHN0b3JlXG5cdCBpbXBvcnQgeyBxdWl6U3RlcHMsIGNvdW50LCB0aW1lckFjdGl2ZSB9IGZyb20gJy4uL3N0b3JlLmpzJ1xuXG5cdG9uTW91bnQoYXN5bmMoKSA9PiB7XG5cdFx0JHF1aXpTdGVwc1skY291bnRdLnN0YXR1cyA9IDE7XG5cdFx0dGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpfSk7XG5cdG9uRGVzdHJveSgoKSA9PiB0aW1lckFjdGl2ZS5zZXQoISR0aW1lckFjdGl2ZSkpXG5cbjwvc2NyaXB0PlxuXG5cdDxzZWN0aW9uPlxuXHRcdDxkaXY+XG4gICAgPGgzPkNoZWNrcG9pbnQgMjo8L2gzPlxuICAgICAgICA8aDE+U3VydmVpbGxhbmNlIENhcGl0YWxpc20gSG93IGRpZCB0aGlzIGhhcHBlbj88L2gxPlxuXHRcdDxwPjxzdHJvbmc+R3JlYXQhPC9zdHJvbmc+WW91IGFyZSBub3cgb24geW91ciB3YXkgdG8gY2xhaW1pbmcgeW91ciBwcml2YWN5LjwvcD5cblx0XHQ8cD5CeSBub3cgd2UgaG9wZSB5b3Ugc2VlIGhvdyBvdXIgcHJpdmF0ZSBleHBlcmllbmNlcyBhcmUgYmVpbmcgaGFydmVzdGVkIHRvIGJlIHRyYW5zbGF0ZWQgaW50byBiZWhhdmlvcmFsIGRhdGEuIFRoaXMgZGF0YSBpcyB0aGVuIHByb2Nlc3NlZCBhbmQgcGFja2FnZWQgYXMgcHJlZGljdGlvbiBwcm9kdWN0cyBhbmQgc29sZCB0byBidXNpbmVzcyBjdXN0b21lcnMgd2l0aCBhIGNvbW1lcmNpYWwgaW50ZXJlc3QgaW4ga25vd2luZyB3aGF0IHdlIHdpbGwgZG8gbm93LCBzb29uLCBhbmQgbGF0ZXIuIFRoaXMgaXMgc3VydmVpbGxhbmNlIGNhcGl0YWxpc20uPC9wPlxuXHRcdDxwPjxzdHJvbmc+SG93IGRpZCB0aGlzIGhhcHBlbj88L3N0cm9uZz48L3A+XG5cdFx0PHA+SXQgd2FzbuKAmXQgdGhhdCBsb25nIGFnbyB0aGF0IHRoZSBpbnRlcm5ldCBlbnRlcmVkIG91ciBkYWlseSBsaXZlcy4gV2Ugd2VudCBvbmxpbmUgZXhwZWN0aW5nIGVtcG93ZXJtZW50LCB0aGUgZGVtb2NyYXRpemF0aW9uIG9mIGtub3dsZWRnZSwgYW5kIGhlbHAgd2l0aCByZWFsIHByb2JsZW1zLCBidXQgc3VydmVpbGxhbmNlIGNhcGl0YWxpc20gcmVhbGx5IHdhcyBqdXN0IHRvbyBsdWNyYXRpdmUgdG8gcmVzaXN0LiBHb29nbGUgd2FzIHRoZSBmaXJzdCB0byBsZWFybiBob3cgdG8gY2FwdHVyZSBzdXJwbHVzIGJlaGF2aW9yYWwgZGF0YSBhbmQgdXNlIGl0IHRvIGNvbXB1dGUgcHJlZGljdGlvbiBwcm9kdWN0cyB0aGF0IHRoZXkgY291bGQgc2VsbCB0byBhZHZlcnRpc2Vycy5cblx0XHQ8L3A+XG5cdFx0PHA+VGhpcyBlY29ub21pYyBsb2dpYyBoYXMgbm93IHNwcmVhZCBiZXlvbmQgdGhlIHRlY2ggY29tcGFuaWVzIHRvIG5ldyBzdXJ2ZWlsbGFuY2XigJNiYXNlZCBlY29zeXN0ZW1zIGluIHZpcnR1YWxseSBldmVyeSBzZWN0b3IsIGZyb20gaW5zdXJhbmNlIHRvIGF1dG9tb2JpbGVzIHRvIGhlYWx0aCwgZWR1Y2F0aW9uLCBmaW5hbmNlLCB0byBldmVyeSBwcm9kdWN0IGRlc2NyaWJlZCBhcyDigJxzbWFydOKAnSBhbmQgZXZlcnkgc2VydmljZSBkZXNjcmliZWQgYXMg4oCccGVyc29uYWxpemVkLuKAnSBCeSBub3cgaXTigJlzIHZlcnkgZGlmZmljdWx0IHRvIHBhcnRpY2lwYXRlIGluIHNvY2lldHkgd2l0aG91dCBpbnRlcmZhY2luZyB3aXRoIHRoZXNlIHNhbWUgY2hhbm5lbHMgdGhhdCBhcmUgc3VwcGx5IGNoYWlucyBmb3Igc3VydmVpbGxhbmNlIGNhcGl0YWxpc23igJlzIGRhdGEgZmxvd3MuPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PENvbXBsZXRlPlN0YXJ0IHRoZSBuZXh0IENoYWxsZW5nZTwvQ29tcGxldGU+XG5cdDwvZGl2PlxuXHQ8L2Rpdj5cblx0PEJhY2svPlxuXHQ8L3NlY3Rpb24+XG5cbjxzdHlsZT5cbiAgIHNlY3Rpb257XG5cdFx0XHR3aWR0aDoxMDAlO1xuXHRcdFx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTM1Mzc2NDcyODEwLTVkMjI5YzY1ZGEwOT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjYwMCZxPTgwKTtcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdHBhZGRpbmctdG9wOiAxNXB4O1xuICAgfVxuICAgZGl2IHtcblx0d2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREOyBcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA5LjN2aCA1dncgMHZoIDkuM3ZoO1xuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgIH1cbiAgXG4gICBzdHJvbmcge1xuXHQgICBmb250LXdlaWdodDogNzAwO1xuXHQgICBmb250LXNpemU6IDIycHg7XG4gICB9XG48L3N0eWxlPiIsIjxzY3JpcHQ+XG5cdGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciB9IGZyb20gJ3N2ZWx0ZSc7XG5cdGNvbnN0IGRpc3BhdGNoID0gY3JlYXRlRXZlbnREaXNwYXRjaGVyKCk7XG5cdGltcG9ydCB7IG9uTW91bnQsIGFmdGVyVXBkYXRlLCBvbkRlc3Ryb3kgfSBmcm9tICdzdmVsdGUnO1xuXHRpbXBvcnQgQ29tcGxldGUgZnJvbSAnLi9jb21wbGV0ZS5zdmVsdGUnXG5cdGltcG9ydCBCdG4gZnJvbSAnLi9CdG4uc3ZlbHRlJyAvL3NldCA8TmV4dCBxPXsyfT4gdG8gc2tpcCBtdWx0aXBsZSBzdGVwc1xuICAgIGltcG9ydCBUcmFucyBmcm9tICcuL1RyYW5zSGVscC5zdmVsdGUnO1xuIC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuIGltcG9ydCB7IGNvdW50LCBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlIH0gZnJvbSAnLi4vc3RvcmUuanMnXG4gaW1wb3J0IEJhY2sgZnJvbSAnLi9CYWNrLnN2ZWx0ZSdcblx0b25Nb3VudChhc3luYygpID0+IHtcblx0XHQkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcblx0XHR0aW1lckFjdGl2ZS5zZXQoISR0aW1lckFjdGl2ZSk7XG5cdH0pO1xuXHRvbkRlc3Ryb3koKCkgPT4gdGltZXJBY3RpdmUuc2V0KCEkdGltZXJBY3RpdmUpKVxuPC9zY3JpcHQ+XG5cblx0PHNlY3Rpb24+XG5cdFx0PGRpdj5cbiAgICA8aDE+V2UgbXVzdCBjbGFpbSBvdXIgcmlnaHQgdG8gcHJpdmFjeS48L2gxPlxuICAgICAgICA8cD5BZ2l0YXRlIGZvciBjaGFuZ2UuIExpa2UgbW9zdCByaWdodHMsIHByaXZhY3kgZHJhd3Mgbm90aWNlIG9ubHkgYWZ0ZXIgaXTigJlzIGdvbmUuIEF0IHRoYXQgcG9pbnQsIGl04oCZcyBoYXJkZXIgdG8gcmVnYWluLiBKdXN0IGFzIHdlIHNlZSB0aGUgZW52aXJvbm1lbnRhbCBpbXBhY3Qgb2YgdGhlIGVhcmx5IEluZHVzdHJpYWwgQWdlLCBmdXR1cmUgZ2VuZXJhdGlvbnMgd2lsbCBqdWRnZSB0b2RheeKAmXMgc29jaWV0eSBvbiBob3cgd2VsbCBpdCByb3NlIHRvIHRoZSBjaGFsbGVuZ2VzIG9mIHN1cnZlaWxsYW5jZSBhbmQgbWFzc2l2ZSBpbmZvcm1hdGlvbiBjb2xsZWN0aW9uLiBQdXNoIGZvciByZWZvcm0uPC9wPlxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG5cdFx0PGEgcmVsPXByZWZldGNoIGhyZWY9XCJyZXZpZXdcIj48QnRuIHA9ezB9PlNlZSB5b3VyIHJlc3VsdHM8L0J0bj48L2E+XG4gICAgICAgIDxidXR0b24gPlNpZ24gYSBQZXRpdGlvbjwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uID5Db250YWN0IHlvdXIgUmVwPC9idXR0b24+XG5cdDwvZGl2PlxuXHQ8L2Rpdj5cbjxCYWNrLz5cbjwvc2VjdGlvbj5cblxuPHN0eWxlPlxuICAgc2VjdGlvbntcblx0XHRcdHdpZHRoOjEwMHZ3O1xuXHRcdFx0aGVpZ2h0OiAxMDB2aDtcblx0XHRcdGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU1NzQxMTczMi0xNzk3YTkxNzFmY2Y/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTc1MCZxPTgwKTtcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcblx0XHRcdHBhZGRpbmctdG9wOiAxNXB4O1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuICAgfVxuICAgZGl2IHtcblx0d2lkdGg6IDUwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREOyBcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA5LjN2aCA1dncgMHZoIDkuM3ZoO1xuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgIH1cbiAgXG4gICBzdHJvbmcge1xuXHQgICBmb250LXdlaWdodDogNzAwO1xuXHQgICBmb250LXNpemU6IDIycHg7XG4gICB9XG4gICBcbjwvc3R5bGU+IiwiPHNjcmlwdD5cbiAgICBleHBvcnQgbGV0IGNvbG9yO1xuICAgIGV4cG9ydCBsZXQgYWN0aXZlO1xuICAgIGFjdGl2ZSA9MDtcblxuPC9zY3JpcHQ+XG57I2lmIGFjdGl2ZSA8IDEgfVxuICAgIDxzdmcgY2xhc3M9XCJsb2NrXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgY3g9XCI5LjgzMzAxXCIgY3k9XCI5Ljk5ODA1XCIgcj1cIjYuNjIzMDVcIiBmaWxsPVwiIzMwMzUzOFwiLz5cbiAgICA8L3N2Zz5cblxuICAgIFxuezplbHNlIGlmIGFjdGl2ZSA+IDEgfVxuICAgIDxzdmcgY2xhc3M9XCJsb2NrXCIgd2lkdGg9XCIyMVwiIGhlaWdodD1cIjIxXCIgdmlld0JveD1cIjAgMCAyMSAyMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxjaXJjbGUgY3g9XCIxMC41OTg2XCIgY3k9XCIxMC4xMjExXCIgcj1cIjEwXCIgZmlsbD1cIntjb2xvcn1cIi8+XG4gICAgPHBhdGggZD1cIk04LjQyMTI1IDE0Ljk4MTVMNC4wMDc0NyAxMC41NzE5QzMuNzQyMyAxMC4zMDcgMy43NDIzIDkuODc3NDkgNC4wMDc0NyA5LjYxMjU1TDQuOTY3NzYgOC42NTMxNUM1LjIzMjkzIDguMzg4MjEgNS42NjI5IDguMzg4MjEgNS45MjgwOCA4LjY1MzE1TDguOTAxNDEgMTEuNjIzNkwxNS4yNyA1LjI2MTE5QzE1LjUzNTEgNC45OTYyNyAxNS45NjUxIDQuOTk2MjcgMTYuMjMwMyA1LjI2MTE5TDE3LjE5MDYgNi4yMjA1OEMxNy40NTU3IDYuNDg1NSAxNy40NTU3IDYuOTE1MDQgMTcuMTkwNiA3LjE3OTk4TDkuMzgxNTYgMTQuOTgxNUM5LjExNjM3IDE1LjI0NjQgOC42ODY0MiAxNS4yNDY0IDguNDIxMjUgMTQuOTgxNVpcIiBmaWxsPVwiIzMwMzUzOFwiLz5cbiAgICA8L3N2Zz5cbiAgICBcbiAgXG57OmVsc2V9XG48c3ZnIGNsYXNzPVwibG9ja1wiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiBmaWxsPVwibm9uZVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj5cbiAgICA8Y2lyY2xlIGN4PVwiMTBcIiBjeT1cIjEwXCIgcj1cIjEwXCIgZmlsbD1cIntjb2xvcn1cIi8+XG4gICAgPGNpcmNsZSBjeD1cIjkuODMzMDFcIiBjeT1cIjkuOTk4MDVcIiByPVwiNi42MjMwNVwiIGZpbGw9XCIjMzAzNTM4XCIvPlxuICAgIDwvc3ZnPlxuICAgIFxuey9pZn1cbiA8c3R5bGU+XG4gICAgIC5sb2NrIHtcbiAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgfVxuIDwvc3R5bGU+IiwiPHNjcmlwdD5cbiAgICAvL3RvdGFsIHRpbWUgZm9yIGNvdW50ZG93blxuaW1wb3J0IHsgdHdlZW5lZCB9IGZyb20gJ3N2ZWx0ZS9tb3Rpb24nO1xuaW1wb3J0IHsgY3ViaWNPdXQsIHNpbmVJbk91dCAgfSBmcm9tICdzdmVsdGUvZWFzaW5nJztcbmltcG9ydCBDaGVjayBmcm9tICcuL0NoZWNrLnN2ZWx0ZSc7XG5pbXBvcnQgeyBxdWl6U3RlcHMsIHRpbWVyQWN0aXZlLCBwcm9ncmVzcywgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcyc7XG5pbXBvcnQgeyBhZnRlclVwZGF0ZSB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgeyBzbGlkZSwgZmx5LCBmYWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuLy9jb25zb2xlLmxvZygkcXVpelN0ZXBzKTtcbmxldCBzdGFydD0gMzAgKiA2MDtcbmxldCB0aW1lciA9IHR3ZWVuZWQoc3RhcnQpO1xuICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgaWYgKCR0aW1lciA+IDAgJiYgJHRpbWVyQWN0aXZlKSAkdGltZXItLTtcbiAgfSwgMTAwMCk7XG5cbiAgJDogbWludXRlcyA9IE1hdGguZmxvb3IoJHRpbWVyIC8gNjApO1xuICAkOiBtaW5uYW1lID0gbWludXRlcyA+IDEgPyBcIm1pbnNcIiA6IFwibWluXCI7XG4gICQ6IHNlY29uZHMgPSBNYXRoLmZsb29yKCR0aW1lciAtIG1pbnV0ZXMgKiA2MCkudG9Mb2NhbGVTdHJpbmcoJ2VuJywge21pbmltdW1JbnRlZ2VyRGlnaXRzOjIsdXNlR3JvdXBpbmc6ZmFsc2V9KVxuXG5sZXQgYmcxID0gdHJ1ZTtcbmxldCBiZzIgPSBmYWxzZTtcbmxldCBiZzMgPSBmYWxzZTtcblxubGV0IGNvbG9yO1xuYWZ0ZXJVcGRhdGUoKCkgPT57XG4gICAgaWYoJGNvdW50ID4gMyl7YmcxID0gZmFsc2U7IGJnMiA9IHRydWU7fVxuICAgIGlmKCRjb3VudCAgPiA3KXtiZzI9IGZhbHNlOyBiZzM9IHRydWU7fVxuICAgIGlmKGJnMSl7Y29sb3IgPSBcIiM3NGVmN2JcIn1cbiAgICBpZihiZzIpe2NvbG9yID0gXCIjRjFDMzMwXCJ9XG4gICAgaWYoYmczKXtjb2xvciA9IFwiI0U5NDA0MFwifVxufSlcbjwvc2NyaXB0PlxuPGFzaWRlIGNsYXNzOmJnMSBjbGFzczpiZzIgY2xhc3M6YmczPlxuICAgIDxzZWN0aW9uIGlkPVwidGltZXJcIj5cbiAgICAgICA8ZGl2PlRpbWUgUmVtYWluaW5nOjwvZGl2PiA8ZGl2IGlkPSdtaW51dGVzJyBzdHlsZT0nd2hpdGUtc3BhY2U6bm93cmFwOyc+e21pbnV0ZXN9OntzZWNvbmRzfTwvZGl2PiBcbiAgICAgICA8ZGl2IGlkPSdjaGFsbGVuZ2UtbmFtZSc+XG4gICAgICAgIDxzbG90PlxuXG4gICAgICAgIDwvc2xvdD5cbiAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICAgPGRpdiBpZD1cInByb2dyZXNzLWhvbGRlclwiPlxuICAgIDxzZWN0aW9uIGNsYXNzPSdkb25lJz5cbiAgICAgICAgeyNlYWNoICRxdWl6U3RlcHMgYXMgY2hhbGxlbmdlfVxuICAgICAgICAgICAgeyNpZiBjaGFsbGVuZ2UudHlwZSAhPSAnY2hlY2twb2ludCd9XG4gICAgICAgIDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9e0NoZWNrfSBhY3RpdmU9e2NoYWxsZW5nZS5zdGF0dXN9IGNvbG9yPXtjb2xvcn0vPiBcbiAgICAgICAgICAgIHsvaWZ9XG4gICAgICAgIHsvZWFjaH0gICAgXG4gICAgPC9zZWN0aW9uPlxuICAgIDxwcm9ncmVzcyB2YWx1ZT17JHByb2dyZXNzfSBtYXg9XCIxMDBcIiBjbGFzczpiZzEgY2xhc3M6YmcyIGNsYXNzOmJnMz48L3Byb2dyZXNzPlxuICAgIDwvZGl2PlxuPC9hc2lkZT5cbjxzdHlsZT5cbiAgICBhc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDMzLjc1dnc7IFxuICAgICAgICBoZWlnaHQ6IDg2dmg7IFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0MjREO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgbWFyZ2luOiAxMnB4IDBweCA0MHB4IDIwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMzN2dztcbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiA1MHB4O1xuICAgIH1cbiAgICAjdGltZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwOyBcbiAgICAgICAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAzMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgI21pbnV0ZXMge1xuICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgYmFja2dyb3VuZDogIzBGMjAzMztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW46IDEycHggNDBweDtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAycHggMzBweDsgXG5cbiAgICB9XG4gICAgLmRvbmUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IHJvdyBub3dyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHhcbiAgICB9XG4gICAgcHJvZ3Jlc3N7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0ICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA4NiU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm90dG9tOiA0Ljd2aDtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBtYXJnaW4tbGVmdDogMzFweDtcbiAgICB9XG4gICAgcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtYmFyIHtcblx0ICAgIGJhY2tncm91bmQ6ICMzMDM1Mzg7XG5cdH1cbiAgICBwcm9ncmVzcy5iZzE6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjNzRlZjdiO1xuICAgIH1cbiAgICBwcm9ncmVzcy5iZzI6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRjFDMzMwO1xuICAgIH1cbiAgICBwcm9ncmVzcy5iZzM6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRTk0MDQwO1xuICAgIH1cbiAgICAuYmcxIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9iZy1ncm91cDEucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtYmxlbmQtbW9kZTogbm9ybWFsO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XG4gICAgICAgIGNvbG9yOiAjNzRlZjdiO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5iZzIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2JnLWdyb3VwMi5wbmcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBub3JtYWw7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgY29sb3I6ICNGMUMzMzA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gICAgLmJnMyB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYmctZ3JvdXAzLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IG5vcm1hbDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICBjb2xvcjogI0U5NDA0MDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAjcHJvZ3Jlc3MtaG9sZGVyIHtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICB9XG4gICAgI2NoYWxsZW5nZS1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG4gICAgXG48L3N0eWxlPlxuPCEtLVxuXG4gICAgICAgIFxuPGRpdiBjbGFzcz0nZG9uZSc+XG4gICAge2lmIGFjdGl2ZX1cbiAgICA8aW1nIHNyYz0nLi9sb2NrLWFjdGl2ZS5zdmcnIGFsdD1cImNvbXBsZXRlZFwiIGNsYXNzPSdhY3RpdmUgbG9jaycgLz5cbiAgICBcbiAgICAgICAgPGltZyBzcmM9Jy4vRWxsaXBzZS1hY3RpdmUucG5nJyBhbHQ9XCJjb21wbGV0ZWRcIiBjbGFzcz0nZWxsaXBzZSBhY3RpdmUnIC8+XG4gICAgICAgIDxpbWcgc3JjPScuL0VsbGlwc2UtaW5hY3RpdmUucG5nJyBhbHQ9XCJjb21wbGV0ZWRcIiBjbGFzcz0nZWxsaXBzZSBpbmFjdGl2ZScgLz5cbjwvZGl2PlxuPC9kaXY+LS0+IiwiPHNjcmlwdD5cbiBpbXBvcnQgUXVpejEgZnJvbSAnLi4vY29tcG9uZW50cy9xMS5zdmVsdGUnXG4gaW1wb3J0IFZpZCBmcm9tICcuLi9jb21wb25lbnRzL1ZpZC5zdmVsdGUnXG4gaW1wb3J0IFF1aXoyIGZyb20gJy4uL2NvbXBvbmVudHMvcTIuc3ZlbHRlJ1xuIGltcG9ydCBRdWl6MyBmcm9tICcuLi9jb21wb25lbnRzL3EzLnN2ZWx0ZSdcbiBpbXBvcnQgUXVpejQgZnJvbSAnLi4vY29tcG9uZW50cy9xNC5zdmVsdGUnXG4gaW1wb3J0IFF1aXo1IGZyb20gJy4uL2NvbXBvbmVudHMvcTUuc3ZlbHRlJ1xuIGltcG9ydCBRdWl6NiBmcm9tICcuLi9jb21wb25lbnRzL3E2LnN2ZWx0ZSdcbiBpbXBvcnQgUXVpejcgZnJvbSAnLi4vY29tcG9uZW50cy9xNy5zdmVsdGUnXG4gaW1wb3J0IFF1aXo4IGZyb20gJy4uL2NvbXBvbmVudHMvcTguc3ZlbHRlJ1xuIGltcG9ydCBDaGVja3BvaW50MSBmcm9tICcuLi9jb21wb25lbnRzL2NoZWNrMS5zdmVsdGUnXG4gaW1wb3J0IENoZWNrcG9pbnQyIGZyb20gJy4uL2NvbXBvbmVudHMvY2hlY2syLnN2ZWx0ZSdcbiBpbXBvcnQgQ2hlY2twb2ludDMgZnJvbSAnLi4vY29tcG9uZW50cy9jaGVjazMuc3ZlbHRlJ1xuIGltcG9ydCBDb21wbGV0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGxldGlvbi5zdmVsdGUnXG4gaW1wb3J0IENvbXBsZXRlIGZyb20gJy4uL2NvbXBvbmVudHMvQ29tcGxldGUuc3ZlbHRlJ1xuIGltcG9ydCB7IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlciwgYmVmb3JlVXBkYXRlLCBhZnRlclVwZGF0ZSwgb25Nb3VudCB9IGZyb20gJ3N2ZWx0ZSc7XG5pbXBvcnQgeyBzbGlkZSwgZmx5LCBmYWRlIH0gZnJvbSAnc3ZlbHRlL3RyYW5zaXRpb24nO1xuaW1wb3J0IHsgcXVpbnRPdXQsIHF1aW50SW4sIHNpbmVJbk91dCB9IGZyb20gJ3N2ZWx0ZS9lYXNpbmcnO1xuaW1wb3J0IHsgY291bnQgfSBmcm9tICcuLi9zdG9yZS5qcydcbi8vaW1wb3J0IHF1aXpTdGVwcyBmcm9tICcuLi9zdG9yZS5qcydcblxuXG5jb25zdCBxdWl6U3RlcCA9ICAoW1xuICAgIHtjb21wb25lbnQ6IFF1aXoxLCBuYW1lOiAnV0VCQ0FNJywgc2hvd1NpZGVCYXI6IHRydWV9LFxuICAgIHtjb21wb25lbnQ6UXVpejIsIG5hbWU6ICdIVFRQUycgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpRdWl6NiwgbmFtZTogJ0ROUycgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpDaGVja3BvaW50MSwgbmFtZTogJ1NlY3VyaXR5IHZzIFByaXZhY3knLCBzaG93U2lkZUJhcjogZmFsc2V9LFxuICAgIHtjb21wb25lbnQ6UXVpejMsIG5hbWU6ICdTRUFSQ0gnICwgc2hvd1NpZGVCYXI6IHRydWV9LFxuICAgIHtjb21wb25lbnQ6UXVpejQsIG5hbWU6ICdQUklWQUNZIFNFVFRJTkdTJyAsIHNob3dTaWRlQmFyOiB0cnVlfSxcbiAgICB7Y29tcG9uZW50OlF1aXo1LCBuYW1lOiAnVFJBQ0tFUiBCTE9DS0VSJyAsIHNob3dTaWRlQmFyOiB0cnVlfSxcbiAgICB7Y29tcG9uZW50OkNoZWNrcG9pbnQyLCBuYW1lOiAnU3VydmVpbGxhbmNlIENhcGl0YWxpc20nLCBzaG93U2lkZUJhcjogZmFsc2V9LFxuICAgIHtjb21wb25lbnQ6UXVpejcsIG5hbWU6ICdJbnRlcm5ldCBvZiBUaGluZ3MnICwgc2hvd1NpZGVCYXI6IHRydWV9LFxuICAgIHtjb21wb25lbnQ6UXVpejgsIG5hbWU6ICdMb2NhdGlvbiBUcmFja2luZycgLCBzaG93U2lkZUJhcjogdHJ1ZX0sXG4gICAge2NvbXBvbmVudDpDaGVja3BvaW50MywgbmFtZTogJ0NoYW5nZScgLCBzaG93U2lkZUJhcjogZmFsc2V9LFxuXSlcbiQ6IHNob3dTaWRlQmFyID0gcXVpelN0ZXBbJGNvdW50XS5zaG93U2lkZUJhcjtcbiQ6IHF1aXpOdW1iZXIgPSBxdWl6U3RlcFskY291bnRdLm5hbWU7XG48L3NjcmlwdD5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPk1pbmQgeW91ciBEYXRhPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG48bWFpbj5cbiAgICAgICA8ZGl2IGluOmZseT1cInt7ZGVsYXk6IDgwMCwgZHVyYXRpb246IDEwMDAsIHg6IC04MDAsIHk6IDAsIG9wYWNpdHk6IDAuMCwgZWFzaW5nOiBzaW5lSW5PdXR9fVwiIG91dDpmbHk9XCJ7e2RlbGF5OiA1MCwgZHVyYXRpb246IDYwMCwgeDogLTgwMCwgeTogMCwgb3BhY2l0eTogMCwgZWFzaW5nOiBzaW5lSW5PdXR9fVwiPlxuICAgICAgIHsjaWYgc2hvd1NpZGVCYXJ9XG4gICAgICAgPHN2ZWx0ZTpjb21wb25lbnQgdGhpcz17Q29tcGxldGlvbn0+XG4gICAgICAgICAgICAgIHtxdWl6U3RlcFskY291bnRdLm5hbWV9XG4gICAgICAgPC9zdmVsdGU6Y29tcG9uZW50PlxuICAgICAgIHsvaWZ9XG4gICAgICAgPC9kaXY+XG4gICAgICAgPCEtLTxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIj4gLS0+XG4gICAgICAgeyNpZiAkY291bnQgPT09IDB9XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIiBpbjpmbHk9XCJ7e2RlbGF5OiAxNTAwLCBkdXJhdGlvbjogMTUwMCAsIHg6IDAsIHk6IDEwMDAsIG9wYWNpdHk6IDAuMCwgZWFzaW5nOiBzaW5lSW5PdXR9fVwiIG91dDpmbHk9XCJ7e2RlbGF5OiA1MCwgZHVyYXRpb246IDYwMCwgeDogMCwgeTogLTgwMCwgb3BhY2l0eTogMCwgZWFzaW5nOiBzaW5lSW5PdXR9fVwiPiBcbiAgICAgICAgICAgICAgICAgICAgIDxRdWl6MSAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICB7OmVsc2UgaWYgJGNvdW50ID09PSAxfVxuICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi1jb250ZW50XCIgaW46Zmx5PVwie3tkZWxheTogMTUwLCBkdXJhdGlvbjogODAwLCB4OjAsIHk6IDEwMDAsIG9wYWNpdHk6IDAuMCwgZWFzaW5nOiBzaW5lSW5PdXR9fVwiIG91dDpmbHk9XCJ7e2RlbGF5OiA1MCwgZHVyYXRpb246IDYwMCwgeDogMCwgeTogLTgwMCwgb3BhY2l0eTogMCwgZWFzaW5nOiBzaW5lSW5PdXR9fVwiPiBcbiAgICAgICAgICAgICAgPFF1aXoyIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIHs6ZWxzZSBpZiAkY291bnQgPT09IDJ9XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJtYWluLWNvbnRlbnRcIiBpbjpmbHk9XCJ7e2RlbGF5OiAxNTAsIGR1cmF0aW9uOiA4MDAsIHg6MCwgeTogMTAwMCwgb3BhY2l0eTogMC4wLCBlYXNpbmc6IHNpbmVJbk91dH19XCIgb3V0OmZseT1cInt7ZGVsYXk6IDUwLCBkdXJhdGlvbjogNjAwLCB4OiAwLCB5OiAtODAwLCBvcGFjaXR5OiAwLCBlYXNpbmc6IHNpbmVJbk91dH19XCI+IFxuICAgICAgICAgICAgICAgICAgICAgPFF1aXo2IC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgIHs6ZWxzZSBpZiAkY291bnQgPT09IDN9XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjaGVja3BvaW50XCIgaW46Zmx5PVwie3tkZWxheTogMTUwMCwgZHVyYXRpb246IDE1MDAsIHg6IDgwMCwgeTogMCwgb3BhY2l0eTogMC4wLCBlYXNpbmc6IHNpbmVJbk91dH19XCIgb3V0OmZseT1cInt7ZGVsYXk6IDUwLCBkdXJhdGlvbjogNjAwLCB4OiA4MDAsIHk6IDAsIG9wYWNpdHk6IDAsIGVhc2luZzogc2luZUluT3V0fX1cIj4gXG4gICAgICAgICAgICAgICAgICAgICA8Q2hlY2twb2ludDEgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgezplbHNlIGlmICRjb3VudCA9PT0gNH1cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiIGluOmZseT1cInt7ZGVsYXk6IDE1MCwgZHVyYXRpb246IDgwMCwgeDowLCB5OiAxMDAwLCBvcGFjaXR5OiAwLjAsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6Zmx5PVwie3tkZWxheTogNTAsIGR1cmF0aW9uOiA2MDAsIHg6IDAsIHk6IC04MDAsIG9wYWNpdHk6IDAsIGVhc2luZzogc2luZUluT3V0fX1cIj4gXG4gICAgICAgICAgICAgICAgICAgICA8UXVpejMgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgezplbHNlIGlmICRjb3VudCA9PT0gNX1cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiIGluOmZseT1cInt7ZGVsYXk6IDE1MCwgZHVyYXRpb246IDgwMCwgeDowLCB5OiAxMDAwLCBvcGFjaXR5OiAwLjAsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6Zmx5PVwie3tkZWxheTogNTAsIGR1cmF0aW9uOiA2MDAsIHg6IDAsIHk6IC04MDAsIG9wYWNpdHk6IDAsIGVhc2luZzogc2luZUluT3V0fX1cIj4gXG4gICAgICAgICAgICAgICAgICAgICA8UXVpejQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgezplbHNlIGlmICRjb3VudCA9PT0gNn1cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiIGluOmZseT1cInt7ZGVsYXk6IDE1MCwgZHVyYXRpb246IDgwMCwgeDowLCB5OiAxMDAwLCBvcGFjaXR5OiAwLjAsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6Zmx5PVwie3tkZWxheTogNTAsIGR1cmF0aW9uOiA2MDAsIHg6IDAsIHk6IC04MDAsIG9wYWNpdHk6IDAsIGVhc2luZzogc2luZUluT3V0fX1cIj4gXG4gICAgICAgICAgICAgICAgICAgICA8UXVpejUgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgezplbHNlIGlmICRjb3VudCA9PT0gN31cbiAgICAgICAgICAgICAgPGRpdiBpZD1cImNoZWNrcG9pbnRcIiBpbjpmbHk9XCJ7e2RlbGF5OiAxNTAwLCBkdXJhdGlvbjogMTUwMCAsIHg6IDgwMCwgeTogMCwgb3BhY2l0eTogMC4wLCBlYXNpbmc6IHNpbmVJbk91dH19XCIgb3V0OmZseT1cInt7ZGVsYXk6IDUwLCBkdXJhdGlvbjogNjAwLCB4OiA4MDAsIHk6IDAsIG9wYWNpdHk6IDAsIGVhc2luZzogc2luZUluT3V0fX1cIj4gXG4gICAgICAgICAgICAgICAgICAgICA8Q2hlY2twb2ludDIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgezplbHNlIGlmICRjb3VudCA9PT0gOH1cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiIGluOmZseT1cInt7ZGVsYXk6IDE1MCwgZHVyYXRpb246IDgwMCwgeDowLCB5OiAxMDAwLCBvcGFjaXR5OiAwLjAsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6Zmx5PVwie3tkZWxheTogNTAsIGR1cmF0aW9uOiA2MDAsIHg6IDAsIHk6IC04MDAsIG9wYWNpdHk6IDAsIGVhc2luZzogc2luZUluT3V0fX1cIj4gXG4gICAgICAgICAgICAgICAgICAgICA8UXVpejcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgezplbHNlIGlmICRjb3VudCA9PT0gOX1cbiAgICAgICAgICAgICAgPGRpdiBpZD1cIm1haW4tY29udGVudFwiIGluOmZseT1cInt7ZGVsYXk6IDE1MCwgZHVyYXRpb246IDgwMCwgeDowLCB5OiAxMDAwLCBvcGFjaXR5OiAwLjAsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6Zmx5PVwie3tkZWxheTogNTAsIGR1cmF0aW9uOiA2MDAsIHg6IDAsIHk6IC04MDAsIG9wYWNpdHk6IDAsIGVhc2luZzogc2luZUluT3V0fX1cIj4gXG4gICAgICAgICAgICAgICAgICAgICA8UXVpejggLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgezplbHNlfVxuICAgICAgICAgICAgICA8ZGl2IGlkPVwiY2hlY2twb2ludFwiIGluOmZseT1cInt7ZGVsYXk6IDE1MDAsIGR1cmF0aW9uOiAxNTAwICwgeDogODAwLCB5OiAwLCBvcGFjaXR5OiAwLjAsIGVhc2luZzogc2luZUluT3V0fX1cIiBvdXQ6Zmx5PVwie3tkZWxheTogNTAsIGR1cmF0aW9uOiA2MDAsIHg6IDgwMCwgeTogMCwgb3BhY2l0eTogMCwgZWFzaW5nOiBzaW5lSW5PdXR9fVwiPiBcbiAgICAgICAgICAgICAgICAgICAgIDxDaGVja3BvaW50MyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICB7L2lmfVxuICAgICAgIDwhLS08c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtxdWl6U3RlcFskY291bnRdLmNvbXBvbmVudH0gLz5cbiAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICB7OmVsc2UgfVxuICAgICAgIDxkaXYgaWQ9XCJjaGVja3BvaW50XCI+IFxuICAgICAgICAgICAgICA8c3ZlbHRlOmNvbXBvbmVudCB0aGlzPXtxdWl6U3RlcFskY291bnRdLmNvbXBvbmVudH0gLz5cbiAgICAgICA8L2Rpdj4gLS0+XG4gICAgICAgXG48L21haW4+XG48c3R5bGU+XG4gICAgICAgbWFpbiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMzg0MjREO1xuXG4gICAgICAgfVxuICAgICAgICNtYWluLWNvbnRlbnR7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzODQyNEQ7XG4gICAgICAgICAgICAgIC8qaGVpZ2h0OiA4NnZoOyAqL1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDBweDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxMnB4IDIycHggNDBweCAyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA5LjN2aCA1dncgMHZoIDkuM3ZoO1xuICAgICAgICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYmctdmVjdG9yLnBuZycpO1xuICAgICAgICAgICBcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBkYXJrZW47XG4gICAgICAgICAgICAgIC8qbWFyZ2luLXRvcDogLTUwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMXZ3O1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7Ki9cbiAgICAgICB9XG4gICAgICAgI2NoZWNrcG9pbnQge1xuICAgICAgICAgICAgIFxuICAgICAgIH1cbjwvc3R5bGU+IiwiPHNjcmlwdD5cblx0aW1wb3J0IHsgb25Nb3VudCwgYmVmb3JlVXBkYXRlLCBjcmVhdGVFdmVudERpc3BhdGNoZXIgfSBmcm9tICdzdmVsdGUnO1xuXHRjb25zdCBkaXNwYXRjaCA9IGNyZWF0ZUV2ZW50RGlzcGF0Y2hlcigpO1xuXHRpbXBvcnQgVHJhbnMgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFuc0hlbHAuc3ZlbHRlJztcblx0aW1wb3J0IENvbXBsZXRlIGZyb20gJy4uL2NvbXBvbmVudHMvY29tcGxldGUuc3ZlbHRlJyAvL3NldCBzdWNjZXNzPXtmYWxzZX0gZm9yIGZhaWx1cmVcblx0aW1wb3J0IEJ0biBmcm9tICcuLi9jb21wb25lbnRzL0J0bi5zdmVsdGUnIC8vc2V0IDxOZXh0IHE9ezJ9PiB0byBza2lwIG11bHRpcGxlIHN0ZXBzIHA9Ny40IGZvciBwcm9ncmVzc1xuXHRpbXBvcnQgeyBjb3VudCwgc3RlcCwgcXVpelN0ZXBzIH0gZnJvbSAnLi4vc3RvcmUuanMnXG5cdGltcG9ydCBCYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvQmFjay5zdmVsdGUnXG5cbiAgICBsZXQgcztcbiAgICBsZXQgY29tcCA9IDA7XG5cdC8vc2V0cyBhc2lkZSBpY29uIHRvIGluIHByb2dyZXNzIHZpYSBzdG9yZVxuICAgIG9uTW91bnQoYXN5bmMoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICAkcXVpelN0ZXBzWyRjb3VudF0uc3RhdHVzID0gMTtcbiAgICAgICAgJHF1aXpTdGVwcy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICBpZih2LmNvbXBsZXRlICYmIHYuZGlzcGxheVByb2dyZXNzKXtcbiAgICAgICAgICAgICAgICBjb21wKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHN0ZXAuc2V0KDApO1xuICAgICAgICBsZXQgcGVyY2VudENvbXBsZXRlO1xuICAgICAgICBwZXJjZW50Q29tcGxldGUgPSAoY29tcC84KSAqIDEwMDtcbiAgICAgICAgY29uc29sZS5sb2cocGVyY2VudENvbXBsZXRlKTtcbiAgICAgICAgaWYgKHBlcmNlbnRDb21wbGV0ZSA8IDMzKSB7XG4gICAgICAgICAgICBzID0gMTtcbiAgICAgICAgfSBlbHNlIGlmIChwZXJjZW50Q29tcGxldGUgPCA5MCkge1xuICAgICAgICAgICAgcz0yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcz0zO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgbGV0IGN1cnJlbnQgPSAnaW5pdGlhbCc7XG4gICAgXG5cbjwvc2NyaXB0PlxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+TWluZCBZb3VyIERhdGE8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cbjxUcmFucz5cbjxtYWluPlxuPHNlY3Rpb24gY2xhc3M9J3Jldmlldyc+XG4gICAgeyNpZiAkc3RlcCA9PT0gMH1cbiAgICA8aDI+WW91IGhhdmUgY29tcGxldGVkIHtjb21wfSAvIDggY2hhbGxlbmdlcyE8L2gyPlxuICAgIFxuICAgIHsjZWFjaCAkcXVpelN0ZXBzIGFzIHtuYW1lLCBjb21wbGV0ZSwgZGlzcGxheVByb2dyZXNzfX1cbiAgICB7I2lmIGRpc3BsYXlQcm9ncmVzc31cbiAgICBcbiAgICAgICAgeyNpZiAhY29tcGxldGV9XG4gICAgICAgIDxkaXYgaWQ9XCJpbmNvbXBsZXRlXCIgY2xhc3M9XCJjYXJldFwiID5cbiAgICAgICAgICAgIDxwPntuYW1lfTwvcD5cbiAgICAgICAgPHN2ZyB3aWR0aD1cIjI4XCIgaGVpZ2h0PVwiMjhcIiB2aWV3Qm94PVwiMCAwIDI4IDI4XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTRcIiBjeT1cIjE0XCIgcj1cIjEzXCIgc3Ryb2tlPVwiI0U5NDA0MFwiIHN0cm9rZS13aWR0aD1cIjJcIi8+XG4gICAgICAgICAgICA8cGF0aCBkPVwiTTEzLjk5OTEgNi45MTAxNkwxMi43NDkzIDguMTU5OTNMMTcuNjk1MiAxMy4xMTQ3SDYuOTA4MlYxNC44ODc0SDE3LjY5NTJMMTIuNzQ5MyAxOS44NDIyTDEzLjk5OTEgMjEuMDkyTDIxLjA5IDE0LjAwMTFMMTMuOTk5MSA2LjkxMDE2WlwiIGZpbGw9XCIjRTk0MDQwXCIvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7OmVsc2V9XG4gICAgICAgIDxkaXYgaWQ9XCJjb21wbGV0ZVwiIGNsYXNzPVwiY2FyZXRcIiA+XG4gICAgICAgICAgICA8cD57bmFtZX08L3A+XG4gICAgICAgIDxzdmcgd2lkdGg9XCIyMVwiIGhlaWdodD1cIjIxXCIgdmlld0JveD1cIjAgMCAyMSAyMVwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgICAgICAgICAgPHBhdGggZD1cIk0xMC4yNzU0IDE5LjAzN0MxNS4xMjA2IDE5LjAzNyAxOS4wNTA5IDE1LjExMjYgMTkuMDUwOSAxMC4yNjg1QzE5LjA1MDkgNS40MjQ0NCAxNS4xMjA2IDEuNSAxMC4yNzU0IDEuNUM1LjQzMDI1IDEuNSAxLjUgNS40MjQ0NCAxLjUgMTAuMjY4NUMxLjUgMTUuMTEyNiA1LjQzMDI1IDE5LjAzNyAxMC4yNzU0IDE5LjAzN1pcIiBmaWxsPVwiI0ZGRkZGRlwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCIzXCIvPlxuICAgICAgICAgICAgPHBhdGggZD1cIk04LjI4NDUzIDE1LjgyNzJMMy44NzA3NSAxMS40MTc2QzMuNjA1NTggMTEuMTUyNyAzLjYwNTU4IDEwLjcyMzIgMy44NzA3NSAxMC40NTgzTDQuODMxMDQgOS40OTg4NkM1LjA5NjIxIDkuMjMzOTEgNS41MjYxOCA5LjIzMzkxIDUuNzkxMzUgOS40OTg4Nkw4Ljc2NDY4IDEyLjQ2OTNMMTUuMTMzMiA2LjEwNjg5QzE1LjM5ODQgNS44NDE5NyAxNS44Mjg0IDUuODQxOTcgMTYuMDkzNSA2LjEwNjg5TDE3LjA1MzggNy4wNjYyOUMxNy4zMTkgNy4zMzEyIDE3LjMxOSA3Ljc2MDc0IDE3LjA1MzggOC4wMjU2OEw5LjI0NDg0IDE1LjgyNzJDOC45Nzk2NCAxNi4wOTIxIDguNTQ5NyAxNi4wOTIxIDguMjg0NTMgMTUuODI3MlpcIiBmaWxsPVwiIzMwMzUzOFwiLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICA8L2Rpdj4gXG4gICAgICAgIHsvaWZ9XG4gICAgIFxuICAgIHsvaWZ9XG4gICAgey9lYWNofVxuICAgIDxkaXYgY2xhc3M9XCJidXR0b24taG9sZGVyXCI+XG4gICAgICAgPEJ0biBwPXswfSBxPXtzfT5DbGFpbSBteSBQcml6ZTwvQnRuPlxuICAgICAgICA8YSBwcmVmZXRjaCBocmVmPSdxdWl6bWFpbic+PGJ1dHRvbj5CYWNrIHRvIHF1aXo8L2J1dHRvbj48L2E+XG4gICAgPC9kaXY+XG4gICAgezplbHNlIGlmICRzdGVwID09PSAxfVxuICAgIDxkaXYgY2xhc3M9XCJwcml6ZTFcIj5cbiAgICAgICAgPGgzPkNvbmdyYXRzITwvaDM+XG4gICAgICAgICAgICA8cD5Zb3UgZGlkbid0IGFiYW5kb24gdXM8L3A+XG4gICAgICAgIDxoMT5MZXZlbDE8L2gxPlxuICAgICAgICA8aDI+TWF5YmUgdHJ5IGhhcmRlciBuZXh0IHRpbWUuLi48L2gyPlxuICAgICAgICA8aW1nIHNyYz1cInBvc3Rlcl9tb2NrLmpwZ1wiIGFsdD1cIm1pbmQgeW91ciBkYXRhIHBvc3RlciBvbiB0aGUgc3RyZWV0IGF0IG5pZ2h0XCIvPlxuICAgICAgICAgICAgPHA+UHJpemU6IEEgcmFkaWNhbCBtaW5kIHlvdXIgZGF0YSBwb3N0ZXIuIDxicj5Eb3dubG9hZCBpdCwgYW5kIHByaW50IGl0IGF0IGhvbWUuPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uLWhvbGRlclwiPiBcbiAgICAgICAgICAgPGEgaHJlZj1cIi4vTWluZFlvdXJEYXRhUG9zdGVyLnBkZlwiIGRvd25sb2FkPVwiXCI+IDxCdG4gcT17MH0gcD17MH0+RG93bmxvYWQgdGhlIHBvc3RlcjwvQnRuPjwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgezplbHNlIGlmICRzdGVwID09PSAyfVxuICAgIDxkaXYgY2xhc3M9XCJwcml6ZTFcIj5cbiAgICAgICAgPGgzPkNvbmdyYXRzITwvaDM+XG4gICAgICAgICAgICA8cD5Zb3UgZGlkbid0IGFiYW5kb24gdXMsIGFuZCBsZWFybmVkIGEgbGl0dGxlIGFib3V0IGRhdGEgcHJpdmFjeTwvcD5cbiAgICAgICAgPGgxPkxldmVsIDI8L2gxPlxuICAgICAgICA8aDI+Tm90IHRvbyBzaGFiYnk8L2gyPlxuICAgICAgICA8aW1nIHNyYz1cIi4vcGlucy5qcGdcIiBhbHQ9XCJ3b21lbiB3ZWFyaW5nIG1pbmQgeW91ciBkYXRhIHBpbnMgd2hpY2ggaXMgdGhlIHByaXplIGZvciB0aGlzIGxldmVsXCIvPlxuICAgICAgICAgICAgPHA+UHJpemU6IE1pbmQgeW91ciBkYXRhIHBpbiBzZXQuIEF2YWlsaWJsZSBmb3IgcHVyY2hhc2Ugb25seSBmb3IgYSBzZWxlY3QgZ3JvdXAgb2YgcGVvcGxlLihjb21pbmcgc29vbik8L3A+XG4gICAgICAgICAgICBcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj4gXG4gICAgICAgICAgICA8QnRuIHE9ezB9IHA9ezB9IGRpc2FibGVkPXt0cnVlfT5DbGFpbSB5b3VyIHBpbnM8YnI+IChjb21pbmcgc29vbik8L0J0bj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgezplbHNlfVxuICAgIDxkaXYgY2xhc3M9XCJwcml6ZTFcIj5cbiAgICAgICAgPGgzPkNvbmdyYXRzITwvaDM+XG4gICAgICAgICAgICA8cD5Zb3UgbWFkZSBpdCBhbGwgdGhlIHdheSB0aHJvdWdoLjxicj5XZSBhcmUgaW1wcmVzc2VkITwvcD5cbiAgICAgICAgPGgxPkxldmVsIDM6IEdyYW5kIEF3ZXNvbWUgUGVyc29uIG9mIFByaXZhY3k8L2gxPlxuICAgICAgICA8aDI+VGhhbmtzIGZvciBjYXJpbmc8L2gyPlxuICAgICAgICAgICAgPHA+UHJpemU6IEFjY2VzcyB0byBhIHN1cGVyIGxpbWl0ZWQgZWRpdG9uIE1pbmQgWW91ciBEYXRhIFQtc2hpcnQuIE9ubHkgNTAgbWFkZSwgZm9yIHRob3NlIGRlZGljYXRlZCB0byBwcml2YWN5LjwvcD5cbiAgICAgICAgPGltZyBzcmM9XCIuL3NoaXJ0X21vY2suanBnXCIgYWx0PVwibWluZCB5b3VyIGRhdGEgc2hpcnQgb24gYSBtb2RlbFwiLz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbi1ob2xkZXJcIj4gXG4gICAgICAgICAgICA8QnRuIHE9ezB9IHA9ezB9PkJ1eSB5b3VyIHNoaXJ0ISE8YnI+IChjb21pbmcgc29vbik8L0J0bj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgey9pZn1cblxuPC9zZWN0aW9uPlxuPC9tYWluPlxuPC9UcmFucz5cbjxzdHlsZT5cbiAgICBtYWlue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNTM4O1xuICAgIH1cbiAgICAucmV2aWV3e1xuICAgICAgICB3aWR0aDo1MHZ3O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg0MjRkO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgcGFkZGluZzogNjVweCAxMDBweCA2NXB4IDY1cHg7XG4gICAgICAgIC8qaGVpZ2h0OiAxMDB2aDsqL1xuICAgIH1cbiAgICNjb21wbGV0ZXtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvciA6IzM4NDI0RDtcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuXG4gICB9XG4gICAjaW5jb21wbGV0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDojZmZmZmZmO1xuICAgIGNvbG9yOiAjZTk0MDQwO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiA1cHg7XG5cbiAgIH1cbiAgIC5jYXJldHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZmxvdzogcm93IG5vd3JhcDtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIGRpdi5jYXJldCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICBcbiAgICB9XG4gICAgLnByaXplMSB7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIH1cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuXG4gICAgfVxuPC9zdHlsZT4iLCI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cblx0ZXhwb3J0IGZ1bmN0aW9uIHByZWxvYWQoeyBwYXJhbXMsIHF1ZXJ5IH0pIHtcblx0XHRyZXR1cm4gdGhpcy5mZXRjaChgYmxvZy5qc29uYCkudGhlbihyID0+IHIuanNvbigpKS50aGVuKHBvc3RzID0+IHtcblx0XHRcdHJldHVybiB7IHBvc3RzIH07XG5cdFx0fSk7XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IHBvc3RzO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblx0dWwge1xuXHRcdG1hcmdpbjogMCAwIDFlbSAwO1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cblx0PHRpdGxlPkJsb2c8L3RpdGxlPlxuPC9zdmVsdGU6aGVhZD5cblxuPGgxPlJlY2VudCBwb3N0czwvaDE+XG5cbjx1bD5cblx0eyNlYWNoIHBvc3RzIGFzIHBvc3R9XG5cdFx0PCEtLSB3ZSdyZSB1c2luZyB0aGUgbm9uLXN0YW5kYXJkIGByZWw9cHJlZmV0Y2hgIGF0dHJpYnV0ZSB0b1xuXHRcdFx0XHR0ZWxsIFNhcHBlciB0byBsb2FkIHRoZSBkYXRhIGZvciB0aGUgcGFnZSBhcyBzb29uIGFzXG5cdFx0XHRcdHRoZSB1c2VyIGhvdmVycyBvdmVyIHRoZSBsaW5rIG9yIHRhcHMgaXQsIGluc3RlYWQgb2Zcblx0XHRcdFx0d2FpdGluZyBmb3IgdGhlICdjbGljaycgZXZlbnQgLS0+XG5cdFx0PGxpPjxhIHJlbD0ncHJlZmV0Y2gnIGhyZWY9J2Jsb2cve3Bvc3Quc2x1Z30nPntwb3N0LnRpdGxlfTwvYT48L2xpPlxuXHR7L2VhY2h9XG48L3VsPiIsIjxzY3JpcHQgY29udGV4dD1cIm1vZHVsZVwiPlxuXHRleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCh7IHBhcmFtcywgcXVlcnkgfSkge1xuXHRcdC8vIHRoZSBgc2x1Z2AgcGFyYW1ldGVyIGlzIGF2YWlsYWJsZSBiZWNhdXNlXG5cdFx0Ly8gdGhpcyBmaWxlIGlzIGNhbGxlZCBbc2x1Z10uc3ZlbHRlXG5cdFx0Y29uc3QgcmVzID0gYXdhaXQgdGhpcy5mZXRjaChgYmxvZy8ke3BhcmFtcy5zbHVnfS5qc29uYCk7XG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cblx0XHRpZiAocmVzLnN0YXR1cyA9PT0gMjAwKSB7XG5cdFx0XHRyZXR1cm4geyBwb3N0OiBkYXRhIH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXJyb3IocmVzLnN0YXR1cywgZGF0YS5tZXNzYWdlKTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuXHRleHBvcnQgbGV0IHBvc3Q7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHQvKlxuXHRcdEJ5IGRlZmF1bHQsIENTUyBpcyBsb2NhbGx5IHNjb3BlZCB0byB0aGUgY29tcG9uZW50LFxuXHRcdGFuZCBhbnkgdW51c2VkIHN0eWxlcyBhcmUgZGVhZC1jb2RlLWVsaW1pbmF0ZWQuXG5cdFx0SW4gdGhpcyBwYWdlLCBTdmVsdGUgY2FuJ3Qga25vdyB3aGljaCBlbGVtZW50cyBhcmVcblx0XHRnb2luZyB0byBhcHBlYXIgaW5zaWRlIHRoZSB7e3twb3N0Lmh0bWx9fX0gYmxvY2ssXG5cdFx0c28gd2UgaGF2ZSB0byB1c2UgdGhlIDpnbG9iYWwoLi4uKSBtb2RpZmllciB0byB0YXJnZXRcblx0XHRhbGwgZWxlbWVudHMgaW5zaWRlIC5jb250ZW50XG5cdCovXG5cdC5jb250ZW50IDpnbG9iYWwoaDIpIHtcblx0XHRmb250LXNpemU6IDEuNGVtO1xuXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKHByZSkge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG5cdFx0Ym94LXNoYWRvdzogaW5zZXQgMXB4IDFweCA1cHggcmdiYSgwLDAsMCwwLjA1KTtcblx0XHRwYWRkaW5nOiAwLjVlbTtcblx0XHRib3JkZXItcmFkaXVzOiAycHg7XG5cdFx0b3ZlcmZsb3cteDogYXV0bztcblx0fVxuXG5cdC5jb250ZW50IDpnbG9iYWwocHJlKSA6Z2xvYmFsKGNvZGUpIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblx0XHRwYWRkaW5nOiAwO1xuXHR9XG5cblx0LmNvbnRlbnQgOmdsb2JhbCh1bCkge1xuXHRcdGxpbmUtaGVpZ2h0OiAxLjU7XG5cdH1cblxuXHQuY29udGVudCA6Z2xvYmFsKGxpKSB7XG5cdFx0bWFyZ2luOiAwIDAgMC41ZW0gMDtcblx0fVxuPC9zdHlsZT5cblxuPHN2ZWx0ZTpoZWFkPlxuXHQ8dGl0bGU+e3Bvc3QudGl0bGV9PC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxoMT57cG9zdC50aXRsZX08L2gxPlxuXG48ZGl2IGNsYXNzPSdjb250ZW50Jz5cblx0e0BodG1sIHBvc3QuaHRtbH1cbjwvZGl2PlxuIiwiPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBzZWdtZW50O1xuPC9zY3JpcHQ+XG5cblxuPHN0eWxlPlxuXHRuYXYge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1mbG93OiByb3cgbm93cmFwO1xuXHRcdGhlaWdodDogNTBweDtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzAzNTM4O1xuXHRcdC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LDYyLDAsMC4xKTsqL1xuXHRcdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdFx0cGFkZGluZzogMCAxZW07XG5cdFx0cG9zaXRpb246IHN0aWNreTtcbiAgICBcdHRvcDogMHB4O1xuXHRcdGxlZnQ6IDBweDtcblx0XHR6LWluZGV4OiAxO1xuXHR9XG5cdHVsIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRtYXJnaW46IDA7XG5cdFx0cGFkZGluZzogMDtcblx0XHRjb2xvcjogI2M3YzdjNztcblx0fVxuXHRpbWcge1xuXHRcdC8qZGlzcGxheTogYmxvY2s7XG5cdFx0ZmxvYXQ6IGxlZnQ7Ki9cblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0bWFyZ2luLWxlZnQ6IDI1cHg7XG5cdH1cblx0bGl7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdH1cblxuXHRbYXJpYS1jdXJyZW50XSB7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0fVxuXG5cdFthcmlhLWN1cnJlbnRdOjphZnRlciB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdHdpZHRoOiBjYWxjKDEwMCUgLSAxZW0pO1xuXHRcdGhlaWdodDogMnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6I2U3NGU0NTtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHQvKmJvdHRvbTogLTFweDsqL1xuXHR9XG5cdGEge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0cGFkZGluZzogMWVtIDAuNWVtO1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRtYXJnaW46IDJlbSwgMGVtO1xuXG5cdH1cblx0LmhvbWUge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHR9XG48L3N0eWxlPlxuXG48bmF2IGNsYXNzOmhvbWU9e3NlZ21lbnQgPT0gJ2hvbWUnfT5cblx0PGEgaHJlZj0nLic+PGltZyAgc3JjPScuL01ZRGxvZ29fbmF2LnBuZycgYWx0PVwiTWluZCB5b3VyIERhdGEgbG9nb1wiPjwvYT5cblx0PHVsIGlkPVwibmF2aWdhdGlvblwiPlxuXHRcdDxsaT48YSBhcmlhLWN1cnJlbnQ9XCJ7c2VnbWVudCA9PT0gJ2hvbWUnID8gJ3BhZ2UnIDogdW5kZWZpbmVkfVwiIGhyZWY9XCIuXCI+aG9tZTwvYT48L2xpPlxuXHRcdDxsaT48YSBhcmlhLWN1cnJlbnQ9XCJ7c2VnbWVudCA9PT0gJ3F1aXonID8gJ3BhZ2UnIDogdW5kZWZpbmVkfVwiIGhyZWY9XCJxdWl6XCI+cXVpejwvYT48L2xpPlxuXHRcdDxsaT48YSBhcmlhLWN1cnJlbnQ9XCJ7c2VnbWVudCA9PT0gJ2Fib3V0JyA/ICdwYWdlJyA6IHVuZGVmaW5lZH1cIiBocmVmPVwiYWJvdXRcIj5hYm91dDwvYT48L2xpPlxuXG5cdFx0PCEtLSBmb3IgdGhlIGJsb2cgbGluaywgd2UncmUgdXNpbmcgcmVsPXByZWZldGNoIHNvIHRoYXQgU2FwcGVyIHByZWZldGNoZXNcblx0XHQgICAgIHRoZSBibG9nIGRhdGEgd2hlbiB3ZSBob3ZlciBvdmVyIHRoZSBsaW5rIG9yIHRhcCBpdCBvbiBhIHRvdWNoc2NyZWVuIC0tPlxuXHQ8IS0tXHQ8bGk+PGEgcmVsPXByZWZldGNoIGFyaWEtY3VycmVudD1cIntzZWdtZW50ID09PSAnYmxvZycgPyAncGFnZScgOiB1bmRlZmluZWR9XCIgaHJlZj1cImJsb2dcIj5ibG9nPC9hPjwvbGk+IC0tPlxuXHQ8L3VsPlxuPC9uYXY+XG4iLCI8c2NyaXB0PlxuXHRpbXBvcnQgTmF2IGZyb20gJy4uL2NvbXBvbmVudHMvTmF2LnN2ZWx0ZSc7XG5cdGV4cG9ydCBsZXQgc2VnbWVudDtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdG1haW4ge1xuXHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdH1cbjwvc3R5bGU+XG5cbjxOYXYge3NlZ21lbnR9IC8+XG5cbjxtYWluPlxuXHQ8c2xvdD48L3Nsb3Q+XG48L21haW4+IiwiPHNjcmlwdD5cblx0ZXhwb3J0IGxldCBzdGF0dXM7XG5cdGV4cG9ydCBsZXQgZXJyb3I7XG5cblx0Y29uc3QgZGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCc7XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRoMSwgcCB7XG5cdFx0bWFyZ2luOiAwIGF1dG87XG5cdH1cblxuXHRoMSB7XG5cdFx0Zm9udC1zaXplOiAyLjhlbTtcblx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdG1hcmdpbjogMCAwIDAuNWVtIDA7XG5cdH1cblxuXHRwIHtcblx0XHRtYXJnaW46IDFlbSBhdXRvO1xuXHR9XG5cblx0QG1lZGlhIChtaW4td2lkdGg6IDQ4MHB4KSB7XG5cdFx0aDEge1xuXHRcdFx0Zm9udC1zaXplOiA0ZW07XG5cdFx0fVxuXHR9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG5cdDx0aXRsZT57c3RhdHVzfTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48aDE+e3N0YXR1c308L2gxPlxuXG48cD57ZXJyb3IubWVzc2FnZX08L3A+XG5cbnsjaWYgZGV2ICYmIGVycm9yLnN0YWNrfVxuXHQ8cHJlPntlcnJvci5zdGFja308L3ByZT5cbnsvaWZ9XG4iLCIvLyBUaGlzIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IFNhcHBlciDigJQgZG8gbm90IGVkaXQgaXQhXG5pbXBvcnQgKiBhcyByb3V0ZV8wIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvYmxvZy9pbmRleC5qc29uLmpzXCI7XG5pbXBvcnQgKiBhcyByb3V0ZV8xIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvYmxvZy9bc2x1Z10uanNvbi5qc1wiO1xuaW1wb3J0IGNvbXBvbmVudF8wIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvaW5kZXguc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzEgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9pbmRleF9vbGQuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzIgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9yZXNvdXJjZXMuc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzMgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9xdWl6bWFpbi5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfNCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3Jldmlldy5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfNSBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL2Fib3V0LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF82LCB7IHByZWxvYWQgYXMgcHJlbG9hZF82IH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9ibG9nL2luZGV4LnN2ZWx0ZVwiO1xuaW1wb3J0IGNvbXBvbmVudF83LCB7IHByZWxvYWQgYXMgcHJlbG9hZF83IH0gZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9ibG9nL1tzbHVnXS5zdmVsdGVcIjtcbmltcG9ydCBjb21wb25lbnRfOCBmcm9tIFwiLi4vLi4vLi4vcm91dGVzL3F1aXovUHJvZ3Jlc3Muc3ZlbHRlXCI7XG5pbXBvcnQgY29tcG9uZW50XzkgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9xdWl6LnN2ZWx0ZVwiO1xuaW1wb3J0IHJvb3QgZnJvbSBcIi4uLy4uLy4uL3JvdXRlcy9fbGF5b3V0LnN2ZWx0ZVwiO1xuaW1wb3J0IGVycm9yIGZyb20gXCIuLi8uLi8uLi9yb3V0ZXMvX2Vycm9yLnN2ZWx0ZVwiO1xuXG5jb25zdCBkID0gZGVjb2RlVVJJQ29tcG9uZW50O1xuXG5leHBvcnQgY29uc3QgbWFuaWZlc3QgPSB7XG5cdHNlcnZlcl9yb3V0ZXM6IFtcblx0XHR7XG5cdFx0XHQvLyBibG9nL2luZGV4Lmpzb24uanNcblx0XHRcdHBhdHRlcm46IC9eXFwvYmxvZ1xcLmpzb24kLyxcblx0XHRcdGhhbmRsZXJzOiByb3V0ZV8wLFxuXHRcdFx0cGFyYW1zOiAoKSA9PiAoe30pXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGJsb2cvW3NsdWddLmpzb24uanNcblx0XHRcdHBhdHRlcm46IC9eXFwvYmxvZ1xcLyhbXlxcL10rPylcXC5qc29uJC8sXG5cdFx0XHRoYW5kbGVyczogcm91dGVfMSxcblx0XHRcdHBhcmFtczogbWF0Y2ggPT4gKHsgc2x1ZzogZChtYXRjaFsxXSkgfSlcblx0XHR9XG5cdF0sXG5cblx0cGFnZXM6IFtcblx0XHR7XG5cdFx0XHQvLyBpbmRleC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvJC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwiaW5kZXhcIiwgZmlsZTogXCJpbmRleC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMCB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIGluZGV4X29sZC5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvaW5kZXhfb2xkXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcImluZGV4X29sZFwiLCBmaWxlOiBcImluZGV4X29sZC5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMSB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHJlc291cmNlcy5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvcmVzb3VyY2VzXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcInJlc291cmNlc1wiLCBmaWxlOiBcInJlc291cmNlcy5zdmVsdGVcIiwgY29tcG9uZW50OiBjb21wb25lbnRfMiB9XG5cdFx0XHRdXG5cdFx0fSxcblxuXHRcdHtcblx0XHRcdC8vIHF1aXptYWluLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9xdWl6bWFpblxcLz8kLyxcblx0XHRcdHBhcnRzOiBbXG5cdFx0XHRcdHsgbmFtZTogXCJxdWl6bWFpblwiLCBmaWxlOiBcInF1aXptYWluLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF8zIH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gcmV2aWV3LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9yZXZpZXdcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IFwicmV2aWV3XCIsIGZpbGU6IFwicmV2aWV3LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF80IH1cblx0XHRcdF1cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0Ly8gYWJvdXQuc3ZlbHRlXG5cdFx0XHRwYXR0ZXJuOiAvXlxcL2Fib3V0XFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcImFib3V0XCIsIGZpbGU6IFwiYWJvdXQuc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzUgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBibG9nL2luZGV4LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9ibG9nXFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcImJsb2dcIiwgZmlsZTogXCJibG9nL2luZGV4LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF82LCBwcmVsb2FkOiBwcmVsb2FkXzYgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBibG9nL1tzbHVnXS5zdmVsdGVcblx0XHRcdHBhdHRlcm46IC9eXFwvYmxvZ1xcLyhbXlxcL10rPylcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwiYmxvZ18kc2x1Z1wiLCBmaWxlOiBcImJsb2cvW3NsdWddLnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF83LCBwcmVsb2FkOiBwcmVsb2FkXzcsIHBhcmFtczogbWF0Y2ggPT4gKHsgc2x1ZzogZChtYXRjaFsxXSkgfSkgfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBxdWl6L1Byb2dyZXNzLnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9xdWl6XFwvUHJvZ3Jlc3NcXC8/JC8sXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR7IG5hbWU6IFwicXVpel9Qcm9ncmVzc1wiLCBmaWxlOiBcInF1aXovUHJvZ3Jlc3Muc3ZlbHRlXCIsIGNvbXBvbmVudDogY29tcG9uZW50XzggfVxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XHR7XG5cdFx0XHQvLyBxdWl6LnN2ZWx0ZVxuXHRcdFx0cGF0dGVybjogL15cXC9xdWl6XFwvPyQvLFxuXHRcdFx0cGFydHM6IFtcblx0XHRcdFx0eyBuYW1lOiBcInF1aXpcIiwgZmlsZTogXCJxdWl6LnN2ZWx0ZVwiLCBjb21wb25lbnQ6IGNvbXBvbmVudF85IH1cblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cblx0cm9vdCxcblx0cm9vdF9wcmVsb2FkOiAoKSA9PiB7fSxcblx0ZXJyb3Jcbn07XG5cbmV4cG9ydCBjb25zdCBidWlsZF9kaXIgPSBcIl9fc2FwcGVyX18vZGV2XCI7XG5cbmV4cG9ydCBjb25zdCBzcmNfZGlyID0gXCJzcmNcIjtcblxuZXhwb3J0IGNvbnN0IGRldiA9IHRydWU7IiwiaW1wb3J0IHsgd3JpdGFibGUgfSBmcm9tICdzdmVsdGUvc3RvcmUnO1xuXG5leHBvcnQgY29uc3QgQ09OVEVYVF9LRVkgPSB7fTtcblxuZXhwb3J0IGNvbnN0IHByZWxvYWQgPSAoKSA9PiAoe30pOyIsIjwhLS0gVGhpcyBmaWxlIGlzIGdlbmVyYXRlZCBieSBTYXBwZXIg4oCUIGRvIG5vdCBlZGl0IGl0ISAtLT5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IHNldENvbnRleHQsIGFmdGVyVXBkYXRlIH0gZnJvbSAnc3ZlbHRlJztcblx0aW1wb3J0IHsgQ09OVEVYVF9LRVkgfSBmcm9tICcuL3NoYXJlZCc7XG5cdGltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vLi4vcm91dGVzL19sYXlvdXQuc3ZlbHRlJztcblx0aW1wb3J0IEVycm9yIGZyb20gJy4uLy4uLy4uL3JvdXRlcy9fZXJyb3Iuc3ZlbHRlJztcblxuXHRleHBvcnQgbGV0IHN0b3Jlcztcblx0ZXhwb3J0IGxldCBlcnJvcjtcblx0ZXhwb3J0IGxldCBzdGF0dXM7XG5cdGV4cG9ydCBsZXQgc2VnbWVudHM7XG5cdGV4cG9ydCBsZXQgbGV2ZWwwO1xuXHRleHBvcnQgbGV0IGxldmVsMSA9IG51bGw7XG5cdGV4cG9ydCBsZXQgbm90aWZ5O1xuXG5cdGFmdGVyVXBkYXRlKG5vdGlmeSk7XG5cdHNldENvbnRleHQoQ09OVEVYVF9LRVksIHN0b3Jlcyk7XG48L3NjcmlwdD5cblxuPExheW91dCBzZWdtZW50PVwie3NlZ21lbnRzWzBdfVwiIHsuLi5sZXZlbDAucHJvcHN9PlxuXHR7I2lmIGVycm9yfVxuXHRcdDxFcnJvciB7ZXJyb3J9IHtzdGF0dXN9Lz5cblx0ezplbHNlfVxuXHRcdDxzdmVsdGU6Y29tcG9uZW50IHRoaXM9XCJ7bGV2ZWwxLmNvbXBvbmVudH1cIiB7Li4ubGV2ZWwxLnByb3BzfS8+XG5cdHsvaWZ9XG48L0xheW91dD4iLCJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBkZXYsIGJ1aWxkX2Rpciwgc3JjX2RpciwgbWFuaWZlc3QgfSBmcm9tICcuL2ludGVybmFsL21hbmlmZXN0LXNlcnZlcic7XG5pbXBvcnQgeyB3cml0YWJsZSB9IGZyb20gJ3N2ZWx0ZS9zdG9yZSc7XG5pbXBvcnQgU3RyZWFtIGZyb20gJ3N0cmVhbSc7XG5pbXBvcnQgaHR0cCBmcm9tICdodHRwJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCBodHRwcyBmcm9tICdodHRwcyc7XG5pbXBvcnQgemxpYiBmcm9tICd6bGliJztcbmltcG9ydCBBcHAgZnJvbSAnLi9pbnRlcm5hbC9BcHAuc3ZlbHRlJztcblxuLyoqXG4gKiBAcGFyYW0gdHlwZU1hcCBbT2JqZWN0XSBNYXAgb2YgTUlNRSB0eXBlIC0+IEFycmF5W2V4dGVuc2lvbnNdXG4gKiBAcGFyYW0gLi4uXG4gKi9cbmZ1bmN0aW9uIE1pbWUoKSB7XG4gIHRoaXMuX3R5cGVzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fZXh0ZW5zaW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB0aGlzLmRlZmluZShhcmd1bWVudHNbaV0pO1xuICB9XG5cbiAgdGhpcy5kZWZpbmUgPSB0aGlzLmRlZmluZS5iaW5kKHRoaXMpO1xuICB0aGlzLmdldFR5cGUgPSB0aGlzLmdldFR5cGUuYmluZCh0aGlzKTtcbiAgdGhpcy5nZXRFeHRlbnNpb24gPSB0aGlzLmdldEV4dGVuc2lvbi5iaW5kKHRoaXMpO1xufVxuXG4vKipcbiAqIERlZmluZSBtaW1ldHlwZSAtPiBleHRlbnNpb24gbWFwcGluZ3MuICBFYWNoIGtleSBpcyBhIG1pbWUtdHlwZSB0aGF0IG1hcHNcbiAqIHRvIGFuIGFycmF5IG9mIGV4dGVuc2lvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSB0eXBlLiAgVGhlIGZpcnN0IGV4dGVuc2lvbiBpc1xuICogdXNlZCBhcyB0aGUgZGVmYXVsdCBleHRlbnNpb24gZm9yIHRoZSB0eXBlLlxuICpcbiAqIGUuZy4gbWltZS5kZWZpbmUoeydhdWRpby9vZ2cnLCBbJ29nYScsICdvZ2cnLCAnc3B4J119KTtcbiAqXG4gKiBJZiBhIHR5cGUgZGVjbGFyZXMgYW4gZXh0ZW5zaW9uIHRoYXQgaGFzIGFscmVhZHkgYmVlbiBkZWZpbmVkLCBhbiBlcnJvciB3aWxsXG4gKiBiZSB0aHJvd24uICBUbyBzdXBwcmVzcyB0aGlzIGVycm9yIGFuZCBmb3JjZSB0aGUgZXh0ZW5zaW9uIHRvIGJlIGFzc29jaWF0ZWRcbiAqIHdpdGggdGhlIG5ldyB0eXBlLCBwYXNzIGBmb3JjZWA9dHJ1ZS4gIEFsdGVybmF0aXZlbHksIHlvdSBtYXkgcHJlZml4IHRoZVxuICogZXh0ZW5zaW9uIHdpdGggXCIqXCIgdG8gbWFwIHRoZSB0eXBlIHRvIGV4dGVuc2lvbiwgd2l0aG91dCBtYXBwaW5nIHRoZVxuICogZXh0ZW5zaW9uIHRvIHRoZSB0eXBlLlxuICpcbiAqIGUuZy4gbWltZS5kZWZpbmUoeydhdWRpby93YXYnLCBbJ3dhdiddfSwgeydhdWRpby94LXdhdicsIFsnKndhdiddfSk7XG4gKlxuICpcbiAqIEBwYXJhbSBtYXAgKE9iamVjdCkgdHlwZSBkZWZpbml0aW9uc1xuICogQHBhcmFtIGZvcmNlIChCb29sZWFuKSBpZiB0cnVlLCBmb3JjZSBvdmVycmlkaW5nIG9mIGV4aXN0aW5nIGRlZmluaXRpb25zXG4gKi9cbk1pbWUucHJvdG90eXBlLmRlZmluZSA9IGZ1bmN0aW9uKHR5cGVNYXAsIGZvcmNlKSB7XG4gIGZvciAodmFyIHR5cGUgaW4gdHlwZU1hcCkge1xuICAgIHZhciBleHRlbnNpb25zID0gdHlwZU1hcFt0eXBlXS5tYXAoZnVuY3Rpb24odCkge3JldHVybiB0LnRvTG93ZXJDYXNlKCl9KTtcbiAgICB0eXBlID0gdHlwZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleHRlbnNpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZXh0ID0gZXh0ZW5zaW9uc1tpXTtcblxuICAgICAgLy8gJyonIHByZWZpeCA9IG5vdCB0aGUgcHJlZmVycmVkIHR5cGUgZm9yIHRoaXMgZXh0ZW5zaW9uLiAgU28gZml4dXAgdGhlXG4gICAgICAvLyBleHRlbnNpb24sIGFuZCBza2lwIGl0LlxuICAgICAgaWYgKGV4dFswXSA9PSAnKicpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9yY2UgJiYgKGV4dCBpbiB0aGlzLl90eXBlcykpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdBdHRlbXB0IHRvIGNoYW5nZSBtYXBwaW5nIGZvciBcIicgKyBleHQgK1xuICAgICAgICAgICdcIiBleHRlbnNpb24gZnJvbSBcIicgKyB0aGlzLl90eXBlc1tleHRdICsgJ1wiIHRvIFwiJyArIHR5cGUgK1xuICAgICAgICAgICdcIi4gUGFzcyBgZm9yY2U9dHJ1ZWAgdG8gYWxsb3cgdGhpcywgb3RoZXJ3aXNlIHJlbW92ZSBcIicgKyBleHQgK1xuICAgICAgICAgICdcIiBmcm9tIHRoZSBsaXN0IG9mIGV4dGVuc2lvbnMgZm9yIFwiJyArIHR5cGUgKyAnXCIuJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl90eXBlc1tleHRdID0gdHlwZTtcbiAgICB9XG5cbiAgICAvLyBVc2UgZmlyc3QgZXh0ZW5zaW9uIGFzIGRlZmF1bHRcbiAgICBpZiAoZm9yY2UgfHwgIXRoaXMuX2V4dGVuc2lvbnNbdHlwZV0pIHtcbiAgICAgIHZhciBleHQgPSBleHRlbnNpb25zWzBdO1xuICAgICAgdGhpcy5fZXh0ZW5zaW9uc1t0eXBlXSA9IChleHRbMF0gIT0gJyonKSA/IGV4dCA6IGV4dC5zdWJzdHIoMSk7XG4gICAgfVxuICB9XG59O1xuXG4vKipcbiAqIExvb2t1cCBhIG1pbWUgdHlwZSBiYXNlZCBvbiBleHRlbnNpb25cbiAqL1xuTWltZS5wcm90b3R5cGUuZ2V0VHlwZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgcGF0aCA9IFN0cmluZyhwYXRoKTtcbiAgdmFyIGxhc3QgPSBwYXRoLnJlcGxhY2UoL14uKlsvXFxcXF0vLCAnJykudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGV4dCA9IGxhc3QucmVwbGFjZSgvXi4qXFwuLywgJycpLnRvTG93ZXJDYXNlKCk7XG5cbiAgdmFyIGhhc1BhdGggPSBsYXN0Lmxlbmd0aCA8IHBhdGgubGVuZ3RoO1xuICB2YXIgaGFzRG90ID0gZXh0Lmxlbmd0aCA8IGxhc3QubGVuZ3RoIC0gMTtcblxuICByZXR1cm4gKGhhc0RvdCB8fCAhaGFzUGF0aCkgJiYgdGhpcy5fdHlwZXNbZXh0XSB8fCBudWxsO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gZmlsZSBleHRlbnNpb24gYXNzb2NpYXRlZCB3aXRoIGEgbWltZSB0eXBlXG4gKi9cbk1pbWUucHJvdG90eXBlLmdldEV4dGVuc2lvbiA9IGZ1bmN0aW9uKHR5cGUpIHtcbiAgdHlwZSA9IC9eXFxzKihbXjtcXHNdKikvLnRlc3QodHlwZSkgJiYgUmVnRXhwLiQxO1xuICByZXR1cm4gdHlwZSAmJiB0aGlzLl9leHRlbnNpb25zW3R5cGUudG9Mb3dlckNhc2UoKV0gfHwgbnVsbDtcbn07XG5cbnZhciBNaW1lXzEgPSBNaW1lO1xuXG52YXIgc3RhbmRhcmQgPSB7XCJhcHBsaWNhdGlvbi9hbmRyZXctaW5zZXRcIjpbXCJlelwiXSxcImFwcGxpY2F0aW9uL2FwcGxpeHdhcmVcIjpbXCJhd1wiXSxcImFwcGxpY2F0aW9uL2F0b20reG1sXCI6W1wiYXRvbVwiXSxcImFwcGxpY2F0aW9uL2F0b21jYXQreG1sXCI6W1wiYXRvbWNhdFwiXSxcImFwcGxpY2F0aW9uL2F0b21zdmMreG1sXCI6W1wiYXRvbXN2Y1wiXSxcImFwcGxpY2F0aW9uL2Jkb2NcIjpbXCJiZG9jXCJdLFwiYXBwbGljYXRpb24vY2N4bWwreG1sXCI6W1wiY2N4bWxcIl0sXCJhcHBsaWNhdGlvbi9jZG1pLWNhcGFiaWxpdHlcIjpbXCJjZG1pYVwiXSxcImFwcGxpY2F0aW9uL2NkbWktY29udGFpbmVyXCI6W1wiY2RtaWNcIl0sXCJhcHBsaWNhdGlvbi9jZG1pLWRvbWFpblwiOltcImNkbWlkXCJdLFwiYXBwbGljYXRpb24vY2RtaS1vYmplY3RcIjpbXCJjZG1pb1wiXSxcImFwcGxpY2F0aW9uL2NkbWktcXVldWVcIjpbXCJjZG1pcVwiXSxcImFwcGxpY2F0aW9uL2N1LXNlZW1lXCI6W1wiY3VcIl0sXCJhcHBsaWNhdGlvbi9kYXNoK3htbFwiOltcIm1wZFwiXSxcImFwcGxpY2F0aW9uL2Rhdm1vdW50K3htbFwiOltcImRhdm1vdW50XCJdLFwiYXBwbGljYXRpb24vZG9jYm9vayt4bWxcIjpbXCJkYmtcIl0sXCJhcHBsaWNhdGlvbi9kc3NjK2RlclwiOltcImRzc2NcIl0sXCJhcHBsaWNhdGlvbi9kc3NjK3htbFwiOltcInhkc3NjXCJdLFwiYXBwbGljYXRpb24vZWNtYXNjcmlwdFwiOltcImVjbWFcIixcImVzXCJdLFwiYXBwbGljYXRpb24vZW1tYSt4bWxcIjpbXCJlbW1hXCJdLFwiYXBwbGljYXRpb24vZXB1Yit6aXBcIjpbXCJlcHViXCJdLFwiYXBwbGljYXRpb24vZXhpXCI6W1wiZXhpXCJdLFwiYXBwbGljYXRpb24vZm9udC10ZHBmclwiOltcInBmclwiXSxcImFwcGxpY2F0aW9uL2dlbytqc29uXCI6W1wiZ2VvanNvblwiXSxcImFwcGxpY2F0aW9uL2dtbCt4bWxcIjpbXCJnbWxcIl0sXCJhcHBsaWNhdGlvbi9ncHgreG1sXCI6W1wiZ3B4XCJdLFwiYXBwbGljYXRpb24vZ3hmXCI6W1wiZ3hmXCJdLFwiYXBwbGljYXRpb24vZ3ppcFwiOltcImd6XCJdLFwiYXBwbGljYXRpb24vaGpzb25cIjpbXCJoanNvblwiXSxcImFwcGxpY2F0aW9uL2h5cGVyc3R1ZGlvXCI6W1wic3RrXCJdLFwiYXBwbGljYXRpb24vaW5rbWwreG1sXCI6W1wiaW5rXCIsXCJpbmttbFwiXSxcImFwcGxpY2F0aW9uL2lwZml4XCI6W1wiaXBmaXhcIl0sXCJhcHBsaWNhdGlvbi9qYXZhLWFyY2hpdmVcIjpbXCJqYXJcIixcIndhclwiLFwiZWFyXCJdLFwiYXBwbGljYXRpb24vamF2YS1zZXJpYWxpemVkLW9iamVjdFwiOltcInNlclwiXSxcImFwcGxpY2F0aW9uL2phdmEtdm1cIjpbXCJjbGFzc1wiXSxcImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIjpbXCJqc1wiLFwibWpzXCJdLFwiYXBwbGljYXRpb24vanNvblwiOltcImpzb25cIixcIm1hcFwiXSxcImFwcGxpY2F0aW9uL2pzb241XCI6W1wianNvbjVcIl0sXCJhcHBsaWNhdGlvbi9qc29ubWwranNvblwiOltcImpzb25tbFwiXSxcImFwcGxpY2F0aW9uL2xkK2pzb25cIjpbXCJqc29ubGRcIl0sXCJhcHBsaWNhdGlvbi9sb3N0K3htbFwiOltcImxvc3R4bWxcIl0sXCJhcHBsaWNhdGlvbi9tYWMtYmluaGV4NDBcIjpbXCJocXhcIl0sXCJhcHBsaWNhdGlvbi9tYWMtY29tcGFjdHByb1wiOltcImNwdFwiXSxcImFwcGxpY2F0aW9uL21hZHMreG1sXCI6W1wibWFkc1wiXSxcImFwcGxpY2F0aW9uL21hbmlmZXN0K2pzb25cIjpbXCJ3ZWJtYW5pZmVzdFwiXSxcImFwcGxpY2F0aW9uL21hcmNcIjpbXCJtcmNcIl0sXCJhcHBsaWNhdGlvbi9tYXJjeG1sK3htbFwiOltcIm1yY3hcIl0sXCJhcHBsaWNhdGlvbi9tYXRoZW1hdGljYVwiOltcIm1hXCIsXCJuYlwiLFwibWJcIl0sXCJhcHBsaWNhdGlvbi9tYXRobWwreG1sXCI6W1wibWF0aG1sXCJdLFwiYXBwbGljYXRpb24vbWJveFwiOltcIm1ib3hcIl0sXCJhcHBsaWNhdGlvbi9tZWRpYXNlcnZlcmNvbnRyb2wreG1sXCI6W1wibXNjbWxcIl0sXCJhcHBsaWNhdGlvbi9tZXRhbGluayt4bWxcIjpbXCJtZXRhbGlua1wiXSxcImFwcGxpY2F0aW9uL21ldGFsaW5rNCt4bWxcIjpbXCJtZXRhNFwiXSxcImFwcGxpY2F0aW9uL21ldHMreG1sXCI6W1wibWV0c1wiXSxcImFwcGxpY2F0aW9uL21vZHMreG1sXCI6W1wibW9kc1wiXSxcImFwcGxpY2F0aW9uL21wMjFcIjpbXCJtMjFcIixcIm1wMjFcIl0sXCJhcHBsaWNhdGlvbi9tcDRcIjpbXCJtcDRzXCIsXCJtNHBcIl0sXCJhcHBsaWNhdGlvbi9tc3dvcmRcIjpbXCJkb2NcIixcImRvdFwiXSxcImFwcGxpY2F0aW9uL214ZlwiOltcIm14ZlwiXSxcImFwcGxpY2F0aW9uL24tcXVhZHNcIjpbXCJucVwiXSxcImFwcGxpY2F0aW9uL24tdHJpcGxlc1wiOltcIm50XCJdLFwiYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtXCI6W1wiYmluXCIsXCJkbXNcIixcImxyZlwiLFwibWFyXCIsXCJzb1wiLFwiZGlzdFwiLFwiZGlzdHpcIixcInBrZ1wiLFwiYnBrXCIsXCJkdW1wXCIsXCJlbGNcIixcImRlcGxveVwiLFwiZXhlXCIsXCJkbGxcIixcImRlYlwiLFwiZG1nXCIsXCJpc29cIixcImltZ1wiLFwibXNpXCIsXCJtc3BcIixcIm1zbVwiLFwiYnVmZmVyXCJdLFwiYXBwbGljYXRpb24vb2RhXCI6W1wib2RhXCJdLFwiYXBwbGljYXRpb24vb2VicHMtcGFja2FnZSt4bWxcIjpbXCJvcGZcIl0sXCJhcHBsaWNhdGlvbi9vZ2dcIjpbXCJvZ3hcIl0sXCJhcHBsaWNhdGlvbi9vbWRvYyt4bWxcIjpbXCJvbWRvY1wiXSxcImFwcGxpY2F0aW9uL29uZW5vdGVcIjpbXCJvbmV0b2NcIixcIm9uZXRvYzJcIixcIm9uZXRtcFwiLFwib25lcGtnXCJdLFwiYXBwbGljYXRpb24vb3hwc1wiOltcIm94cHNcIl0sXCJhcHBsaWNhdGlvbi9wYXRjaC1vcHMtZXJyb3IreG1sXCI6W1wieGVyXCJdLFwiYXBwbGljYXRpb24vcGRmXCI6W1wicGRmXCJdLFwiYXBwbGljYXRpb24vcGdwLWVuY3J5cHRlZFwiOltcInBncFwiXSxcImFwcGxpY2F0aW9uL3BncC1zaWduYXR1cmVcIjpbXCJhc2NcIixcInNpZ1wiXSxcImFwcGxpY2F0aW9uL3BpY3MtcnVsZXNcIjpbXCJwcmZcIl0sXCJhcHBsaWNhdGlvbi9wa2NzMTBcIjpbXCJwMTBcIl0sXCJhcHBsaWNhdGlvbi9wa2NzNy1taW1lXCI6W1wicDdtXCIsXCJwN2NcIl0sXCJhcHBsaWNhdGlvbi9wa2NzNy1zaWduYXR1cmVcIjpbXCJwN3NcIl0sXCJhcHBsaWNhdGlvbi9wa2NzOFwiOltcInA4XCJdLFwiYXBwbGljYXRpb24vcGtpeC1hdHRyLWNlcnRcIjpbXCJhY1wiXSxcImFwcGxpY2F0aW9uL3BraXgtY2VydFwiOltcImNlclwiXSxcImFwcGxpY2F0aW9uL3BraXgtY3JsXCI6W1wiY3JsXCJdLFwiYXBwbGljYXRpb24vcGtpeC1wa2lwYXRoXCI6W1wicGtpcGF0aFwiXSxcImFwcGxpY2F0aW9uL3BraXhjbXBcIjpbXCJwa2lcIl0sXCJhcHBsaWNhdGlvbi9wbHMreG1sXCI6W1wicGxzXCJdLFwiYXBwbGljYXRpb24vcG9zdHNjcmlwdFwiOltcImFpXCIsXCJlcHNcIixcInBzXCJdLFwiYXBwbGljYXRpb24vcHNrYyt4bWxcIjpbXCJwc2tjeG1sXCJdLFwiYXBwbGljYXRpb24vcmFtbCt5YW1sXCI6W1wicmFtbFwiXSxcImFwcGxpY2F0aW9uL3JkZit4bWxcIjpbXCJyZGZcIixcIm93bFwiXSxcImFwcGxpY2F0aW9uL3JlZ2luZm8reG1sXCI6W1wicmlmXCJdLFwiYXBwbGljYXRpb24vcmVsYXgtbmctY29tcGFjdC1zeW50YXhcIjpbXCJybmNcIl0sXCJhcHBsaWNhdGlvbi9yZXNvdXJjZS1saXN0cyt4bWxcIjpbXCJybFwiXSxcImFwcGxpY2F0aW9uL3Jlc291cmNlLWxpc3RzLWRpZmYreG1sXCI6W1wicmxkXCJdLFwiYXBwbGljYXRpb24vcmxzLXNlcnZpY2VzK3htbFwiOltcInJzXCJdLFwiYXBwbGljYXRpb24vcnBraS1naG9zdGJ1c3RlcnNcIjpbXCJnYnJcIl0sXCJhcHBsaWNhdGlvbi9ycGtpLW1hbmlmZXN0XCI6W1wibWZ0XCJdLFwiYXBwbGljYXRpb24vcnBraS1yb2FcIjpbXCJyb2FcIl0sXCJhcHBsaWNhdGlvbi9yc2QreG1sXCI6W1wicnNkXCJdLFwiYXBwbGljYXRpb24vcnNzK3htbFwiOltcInJzc1wiXSxcImFwcGxpY2F0aW9uL3J0ZlwiOltcInJ0ZlwiXSxcImFwcGxpY2F0aW9uL3NibWwreG1sXCI6W1wic2JtbFwiXSxcImFwcGxpY2F0aW9uL3NjdnAtY3YtcmVxdWVzdFwiOltcInNjcVwiXSxcImFwcGxpY2F0aW9uL3NjdnAtY3YtcmVzcG9uc2VcIjpbXCJzY3NcIl0sXCJhcHBsaWNhdGlvbi9zY3ZwLXZwLXJlcXVlc3RcIjpbXCJzcHFcIl0sXCJhcHBsaWNhdGlvbi9zY3ZwLXZwLXJlc3BvbnNlXCI6W1wic3BwXCJdLFwiYXBwbGljYXRpb24vc2RwXCI6W1wic2RwXCJdLFwiYXBwbGljYXRpb24vc2V0LXBheW1lbnQtaW5pdGlhdGlvblwiOltcInNldHBheVwiXSxcImFwcGxpY2F0aW9uL3NldC1yZWdpc3RyYXRpb24taW5pdGlhdGlvblwiOltcInNldHJlZ1wiXSxcImFwcGxpY2F0aW9uL3NoZit4bWxcIjpbXCJzaGZcIl0sXCJhcHBsaWNhdGlvbi9zaWV2ZVwiOltcInNpdlwiLFwic2lldmVcIl0sXCJhcHBsaWNhdGlvbi9zbWlsK3htbFwiOltcInNtaVwiLFwic21pbFwiXSxcImFwcGxpY2F0aW9uL3NwYXJxbC1xdWVyeVwiOltcInJxXCJdLFwiYXBwbGljYXRpb24vc3BhcnFsLXJlc3VsdHMreG1sXCI6W1wic3J4XCJdLFwiYXBwbGljYXRpb24vc3Jnc1wiOltcImdyYW1cIl0sXCJhcHBsaWNhdGlvbi9zcmdzK3htbFwiOltcImdyeG1sXCJdLFwiYXBwbGljYXRpb24vc3J1K3htbFwiOltcInNydVwiXSxcImFwcGxpY2F0aW9uL3NzZGwreG1sXCI6W1wic3NkbFwiXSxcImFwcGxpY2F0aW9uL3NzbWwreG1sXCI6W1wic3NtbFwiXSxcImFwcGxpY2F0aW9uL3RlaSt4bWxcIjpbXCJ0ZWlcIixcInRlaWNvcnB1c1wiXSxcImFwcGxpY2F0aW9uL3RocmF1ZCt4bWxcIjpbXCJ0ZmlcIl0sXCJhcHBsaWNhdGlvbi90aW1lc3RhbXBlZC1kYXRhXCI6W1widHNkXCJdLFwiYXBwbGljYXRpb24vdm9pY2V4bWwreG1sXCI6W1widnhtbFwiXSxcImFwcGxpY2F0aW9uL3dhc21cIjpbXCJ3YXNtXCJdLFwiYXBwbGljYXRpb24vd2lkZ2V0XCI6W1wid2d0XCJdLFwiYXBwbGljYXRpb24vd2luaGxwXCI6W1wiaGxwXCJdLFwiYXBwbGljYXRpb24vd3NkbCt4bWxcIjpbXCJ3c2RsXCJdLFwiYXBwbGljYXRpb24vd3Nwb2xpY3kreG1sXCI6W1wid3Nwb2xpY3lcIl0sXCJhcHBsaWNhdGlvbi94YW1sK3htbFwiOltcInhhbWxcIl0sXCJhcHBsaWNhdGlvbi94Y2FwLWRpZmYreG1sXCI6W1wieGRmXCJdLFwiYXBwbGljYXRpb24veGVuYyt4bWxcIjpbXCJ4ZW5jXCJdLFwiYXBwbGljYXRpb24veGh0bWwreG1sXCI6W1wieGh0bWxcIixcInhodFwiXSxcImFwcGxpY2F0aW9uL3htbFwiOltcInhtbFwiLFwieHNsXCIsXCJ4c2RcIixcInJuZ1wiXSxcImFwcGxpY2F0aW9uL3htbC1kdGRcIjpbXCJkdGRcIl0sXCJhcHBsaWNhdGlvbi94b3AreG1sXCI6W1wieG9wXCJdLFwiYXBwbGljYXRpb24veHByb2MreG1sXCI6W1wieHBsXCJdLFwiYXBwbGljYXRpb24veHNsdCt4bWxcIjpbXCJ4c2x0XCJdLFwiYXBwbGljYXRpb24veHNwZit4bWxcIjpbXCJ4c3BmXCJdLFwiYXBwbGljYXRpb24veHYreG1sXCI6W1wibXhtbFwiLFwieGh2bWxcIixcInh2bWxcIixcInh2bVwiXSxcImFwcGxpY2F0aW9uL3lhbmdcIjpbXCJ5YW5nXCJdLFwiYXBwbGljYXRpb24veWluK3htbFwiOltcInlpblwiXSxcImFwcGxpY2F0aW9uL3ppcFwiOltcInppcFwiXSxcImF1ZGlvLzNncHBcIjpbXCIqM2dwcFwiXSxcImF1ZGlvL2FkcGNtXCI6W1wiYWRwXCJdLFwiYXVkaW8vYmFzaWNcIjpbXCJhdVwiLFwic25kXCJdLFwiYXVkaW8vbWlkaVwiOltcIm1pZFwiLFwibWlkaVwiLFwia2FyXCIsXCJybWlcIl0sXCJhdWRpby9tcDNcIjpbXCIqbXAzXCJdLFwiYXVkaW8vbXA0XCI6W1wibTRhXCIsXCJtcDRhXCJdLFwiYXVkaW8vbXBlZ1wiOltcIm1wZ2FcIixcIm1wMlwiLFwibXAyYVwiLFwibXAzXCIsXCJtMmFcIixcIm0zYVwiXSxcImF1ZGlvL29nZ1wiOltcIm9nYVwiLFwib2dnXCIsXCJzcHhcIl0sXCJhdWRpby9zM21cIjpbXCJzM21cIl0sXCJhdWRpby9zaWxrXCI6W1wic2lsXCJdLFwiYXVkaW8vd2F2XCI6W1wid2F2XCJdLFwiYXVkaW8vd2F2ZVwiOltcIip3YXZcIl0sXCJhdWRpby93ZWJtXCI6W1wid2ViYVwiXSxcImF1ZGlvL3htXCI6W1wieG1cIl0sXCJmb250L2NvbGxlY3Rpb25cIjpbXCJ0dGNcIl0sXCJmb250L290ZlwiOltcIm90ZlwiXSxcImZvbnQvdHRmXCI6W1widHRmXCJdLFwiZm9udC93b2ZmXCI6W1wid29mZlwiXSxcImZvbnQvd29mZjJcIjpbXCJ3b2ZmMlwiXSxcImltYWdlL2FjZXNcIjpbXCJleHJcIl0sXCJpbWFnZS9hcG5nXCI6W1wiYXBuZ1wiXSxcImltYWdlL2JtcFwiOltcImJtcFwiXSxcImltYWdlL2NnbVwiOltcImNnbVwiXSxcImltYWdlL2RpY29tLXJsZVwiOltcImRybGVcIl0sXCJpbWFnZS9lbWZcIjpbXCJlbWZcIl0sXCJpbWFnZS9maXRzXCI6W1wiZml0c1wiXSxcImltYWdlL2czZmF4XCI6W1wiZzNcIl0sXCJpbWFnZS9naWZcIjpbXCJnaWZcIl0sXCJpbWFnZS9oZWljXCI6W1wiaGVpY1wiXSxcImltYWdlL2hlaWMtc2VxdWVuY2VcIjpbXCJoZWljc1wiXSxcImltYWdlL2hlaWZcIjpbXCJoZWlmXCJdLFwiaW1hZ2UvaGVpZi1zZXF1ZW5jZVwiOltcImhlaWZzXCJdLFwiaW1hZ2UvaWVmXCI6W1wiaWVmXCJdLFwiaW1hZ2UvamxzXCI6W1wiamxzXCJdLFwiaW1hZ2UvanAyXCI6W1wianAyXCIsXCJqcGcyXCJdLFwiaW1hZ2UvanBlZ1wiOltcImpwZWdcIixcImpwZ1wiLFwianBlXCJdLFwiaW1hZ2UvanBtXCI6W1wianBtXCJdLFwiaW1hZ2UvanB4XCI6W1wianB4XCIsXCJqcGZcIl0sXCJpbWFnZS9qeHJcIjpbXCJqeHJcIl0sXCJpbWFnZS9rdHhcIjpbXCJrdHhcIl0sXCJpbWFnZS9wbmdcIjpbXCJwbmdcIl0sXCJpbWFnZS9zZ2lcIjpbXCJzZ2lcIl0sXCJpbWFnZS9zdmcreG1sXCI6W1wic3ZnXCIsXCJzdmd6XCJdLFwiaW1hZ2UvdDM4XCI6W1widDM4XCJdLFwiaW1hZ2UvdGlmZlwiOltcInRpZlwiLFwidGlmZlwiXSxcImltYWdlL3RpZmYtZnhcIjpbXCJ0ZnhcIl0sXCJpbWFnZS93ZWJwXCI6W1wid2VicFwiXSxcImltYWdlL3dtZlwiOltcIndtZlwiXSxcIm1lc3NhZ2UvZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCI6W1wiZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCJdLFwibWVzc2FnZS9nbG9iYWxcIjpbXCJ1OG1zZ1wiXSxcIm1lc3NhZ2UvZ2xvYmFsLWRlbGl2ZXJ5LXN0YXR1c1wiOltcInU4ZHNuXCJdLFwibWVzc2FnZS9nbG9iYWwtZGlzcG9zaXRpb24tbm90aWZpY2F0aW9uXCI6W1widThtZG5cIl0sXCJtZXNzYWdlL2dsb2JhbC1oZWFkZXJzXCI6W1widThoZHJcIl0sXCJtZXNzYWdlL3JmYzgyMlwiOltcImVtbFwiLFwibWltZVwiXSxcIm1vZGVsLzNtZlwiOltcIjNtZlwiXSxcIm1vZGVsL2dsdGYranNvblwiOltcImdsdGZcIl0sXCJtb2RlbC9nbHRmLWJpbmFyeVwiOltcImdsYlwiXSxcIm1vZGVsL2lnZXNcIjpbXCJpZ3NcIixcImlnZXNcIl0sXCJtb2RlbC9tZXNoXCI6W1wibXNoXCIsXCJtZXNoXCIsXCJzaWxvXCJdLFwibW9kZWwvc3RsXCI6W1wic3RsXCJdLFwibW9kZWwvdnJtbFwiOltcIndybFwiLFwidnJtbFwiXSxcIm1vZGVsL3gzZCtiaW5hcnlcIjpbXCIqeDNkYlwiLFwieDNkYnpcIl0sXCJtb2RlbC94M2QrZmFzdGluZm9zZXRcIjpbXCJ4M2RiXCJdLFwibW9kZWwveDNkK3ZybWxcIjpbXCIqeDNkdlwiLFwieDNkdnpcIl0sXCJtb2RlbC94M2QreG1sXCI6W1wieDNkXCIsXCJ4M2R6XCJdLFwibW9kZWwveDNkLXZybWxcIjpbXCJ4M2R2XCJdLFwidGV4dC9jYWNoZS1tYW5pZmVzdFwiOltcImFwcGNhY2hlXCIsXCJtYW5pZmVzdFwiXSxcInRleHQvY2FsZW5kYXJcIjpbXCJpY3NcIixcImlmYlwiXSxcInRleHQvY29mZmVlc2NyaXB0XCI6W1wiY29mZmVlXCIsXCJsaXRjb2ZmZWVcIl0sXCJ0ZXh0L2Nzc1wiOltcImNzc1wiXSxcInRleHQvY3N2XCI6W1wiY3N2XCJdLFwidGV4dC9odG1sXCI6W1wiaHRtbFwiLFwiaHRtXCIsXCJzaHRtbFwiXSxcInRleHQvamFkZVwiOltcImphZGVcIl0sXCJ0ZXh0L2pzeFwiOltcImpzeFwiXSxcInRleHQvbGVzc1wiOltcImxlc3NcIl0sXCJ0ZXh0L21hcmtkb3duXCI6W1wibWFya2Rvd25cIixcIm1kXCJdLFwidGV4dC9tYXRobWxcIjpbXCJtbWxcIl0sXCJ0ZXh0L21keFwiOltcIm1keFwiXSxcInRleHQvbjNcIjpbXCJuM1wiXSxcInRleHQvcGxhaW5cIjpbXCJ0eHRcIixcInRleHRcIixcImNvbmZcIixcImRlZlwiLFwibGlzdFwiLFwibG9nXCIsXCJpblwiLFwiaW5pXCJdLFwidGV4dC9yaWNodGV4dFwiOltcInJ0eFwiXSxcInRleHQvcnRmXCI6W1wiKnJ0ZlwiXSxcInRleHQvc2dtbFwiOltcInNnbWxcIixcInNnbVwiXSxcInRleHQvc2hleFwiOltcInNoZXhcIl0sXCJ0ZXh0L3NsaW1cIjpbXCJzbGltXCIsXCJzbG1cIl0sXCJ0ZXh0L3N0eWx1c1wiOltcInN0eWx1c1wiLFwic3R5bFwiXSxcInRleHQvdGFiLXNlcGFyYXRlZC12YWx1ZXNcIjpbXCJ0c3ZcIl0sXCJ0ZXh0L3Ryb2ZmXCI6W1widFwiLFwidHJcIixcInJvZmZcIixcIm1hblwiLFwibWVcIixcIm1zXCJdLFwidGV4dC90dXJ0bGVcIjpbXCJ0dGxcIl0sXCJ0ZXh0L3VyaS1saXN0XCI6W1widXJpXCIsXCJ1cmlzXCIsXCJ1cmxzXCJdLFwidGV4dC92Y2FyZFwiOltcInZjYXJkXCJdLFwidGV4dC92dHRcIjpbXCJ2dHRcIl0sXCJ0ZXh0L3htbFwiOltcIip4bWxcIl0sXCJ0ZXh0L3lhbWxcIjpbXCJ5YW1sXCIsXCJ5bWxcIl0sXCJ2aWRlby8zZ3BwXCI6W1wiM2dwXCIsXCIzZ3BwXCJdLFwidmlkZW8vM2dwcDJcIjpbXCIzZzJcIl0sXCJ2aWRlby9oMjYxXCI6W1wiaDI2MVwiXSxcInZpZGVvL2gyNjNcIjpbXCJoMjYzXCJdLFwidmlkZW8vaDI2NFwiOltcImgyNjRcIl0sXCJ2aWRlby9qcGVnXCI6W1wianBndlwiXSxcInZpZGVvL2pwbVwiOltcIipqcG1cIixcImpwZ21cIl0sXCJ2aWRlby9tajJcIjpbXCJtajJcIixcIm1qcDJcIl0sXCJ2aWRlby9tcDJ0XCI6W1widHNcIl0sXCJ2aWRlby9tcDRcIjpbXCJtcDRcIixcIm1wNHZcIixcIm1wZzRcIl0sXCJ2aWRlby9tcGVnXCI6W1wibXBlZ1wiLFwibXBnXCIsXCJtcGVcIixcIm0xdlwiLFwibTJ2XCJdLFwidmlkZW8vb2dnXCI6W1wib2d2XCJdLFwidmlkZW8vcXVpY2t0aW1lXCI6W1wicXRcIixcIm1vdlwiXSxcInZpZGVvL3dlYm1cIjpbXCJ3ZWJtXCJdfTtcblxudmFyIGxpdGUgPSBuZXcgTWltZV8xKHN0YW5kYXJkKTtcblxuZnVuY3Rpb24gZ2V0X3NlcnZlcl9yb3V0ZV9oYW5kbGVyKHJvdXRlcykge1xuXHRhc3luYyBmdW5jdGlvbiBoYW5kbGVfcm91dGUocm91dGUsIHJlcSwgcmVzLCBuZXh0KSB7XG5cdFx0cmVxLnBhcmFtcyA9IHJvdXRlLnBhcmFtcyhyb3V0ZS5wYXR0ZXJuLmV4ZWMocmVxLnBhdGgpKTtcblxuXHRcdGNvbnN0IG1ldGhvZCA9IHJlcS5tZXRob2QudG9Mb3dlckNhc2UoKTtcblx0XHQvLyAnZGVsZXRlJyBjYW5ub3QgYmUgZXhwb3J0ZWQgZnJvbSBhIG1vZHVsZSBiZWNhdXNlIGl0IGlzIGEga2V5d29yZCxcblx0XHQvLyBzbyBjaGVjayBmb3IgJ2RlbCcgaW5zdGVhZFxuXHRcdGNvbnN0IG1ldGhvZF9leHBvcnQgPSBtZXRob2QgPT09ICdkZWxldGUnID8gJ2RlbCcgOiBtZXRob2Q7XG5cdFx0Y29uc3QgaGFuZGxlX21ldGhvZCA9IHJvdXRlLmhhbmRsZXJzW21ldGhvZF9leHBvcnRdO1xuXHRcdGlmIChoYW5kbGVfbWV0aG9kKSB7XG5cdFx0XHRpZiAocHJvY2Vzcy5lbnYuU0FQUEVSX0VYUE9SVCkge1xuXHRcdFx0XHRjb25zdCB7IHdyaXRlLCBlbmQsIHNldEhlYWRlciB9ID0gcmVzO1xuXHRcdFx0XHRjb25zdCBjaHVua3MgPSBbXTtcblx0XHRcdFx0Y29uc3QgaGVhZGVycyA9IHt9O1xuXG5cdFx0XHRcdC8vIGludGVyY2VwdCBkYXRhIHNvIHRoYXQgaXQgY2FuIGJlIGV4cG9ydGVkXG5cdFx0XHRcdHJlcy53cml0ZSA9IGZ1bmN0aW9uKGNodW5rKSB7XG5cdFx0XHRcdFx0Y2h1bmtzLnB1c2goQnVmZmVyLmZyb20oY2h1bmspKTtcblx0XHRcdFx0XHR3cml0ZS5hcHBseShyZXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0cmVzLnNldEhlYWRlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1tuYW1lLnRvTG93ZXJDYXNlKCldID0gdmFsdWU7XG5cdFx0XHRcdFx0c2V0SGVhZGVyLmFwcGx5KHJlcywgYXJndW1lbnRzKTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRyZXMuZW5kID0gZnVuY3Rpb24oY2h1bmspIHtcblx0XHRcdFx0XHRpZiAoY2h1bmspIGNodW5rcy5wdXNoKEJ1ZmZlci5mcm9tKGNodW5rKSk7XG5cdFx0XHRcdFx0ZW5kLmFwcGx5KHJlcywgYXJndW1lbnRzKTtcblxuXHRcdFx0XHRcdHByb2Nlc3Muc2VuZCh7XG5cdFx0XHRcdFx0XHRfX3NhcHBlcl9fOiB0cnVlLFxuXHRcdFx0XHRcdFx0ZXZlbnQ6ICdmaWxlJyxcblx0XHRcdFx0XHRcdHVybDogcmVxLnVybCxcblx0XHRcdFx0XHRcdG1ldGhvZDogcmVxLm1ldGhvZCxcblx0XHRcdFx0XHRcdHN0YXR1czogcmVzLnN0YXR1c0NvZGUsXG5cdFx0XHRcdFx0XHR0eXBlOiBoZWFkZXJzWydjb250ZW50LXR5cGUnXSxcblx0XHRcdFx0XHRcdGJvZHk6IEJ1ZmZlci5jb25jYXQoY2h1bmtzKS50b1N0cmluZygpXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGhhbmRsZV9uZXh0ID0gKGVycikgPT4ge1xuXHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0cmVzLnN0YXR1c0NvZGUgPSA1MDA7XG5cdFx0XHRcdFx0cmVzLmVuZChlcnIubWVzc2FnZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cHJvY2Vzcy5uZXh0VGljayhuZXh0KTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgaGFuZGxlX21ldGhvZChyZXEsIHJlcywgaGFuZGxlX25leHQpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblx0XHRcdFx0aGFuZGxlX25leHQoZXJyKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gbm8gbWF0Y2hpbmcgaGFuZGxlciBmb3IgbWV0aG9kXG5cdFx0XHRwcm9jZXNzLm5leHRUaWNrKG5leHQpO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBmdW5jdGlvbiBmaW5kX3JvdXRlKHJlcSwgcmVzLCBuZXh0KSB7XG5cdFx0Zm9yIChjb25zdCByb3V0ZSBvZiByb3V0ZXMpIHtcblx0XHRcdGlmIChyb3V0ZS5wYXR0ZXJuLnRlc3QocmVxLnBhdGgpKSB7XG5cdFx0XHRcdGhhbmRsZV9yb3V0ZShyb3V0ZSwgcmVxLCByZXMsIG5leHQpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bmV4dCgpO1xuXHR9O1xufVxuXG4vKiFcbiAqIGNvb2tpZVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBSb21hbiBTaHR5bG1hblxuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbi8qKlxuICogTW9kdWxlIGV4cG9ydHMuXG4gKiBAcHVibGljXG4gKi9cblxudmFyIHBhcnNlXzEgPSBwYXJzZTtcbnZhciBzZXJpYWxpemVfMSA9IHNlcmlhbGl6ZTtcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xudmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcbnZhciBwYWlyU3BsaXRSZWdFeHAgPSAvOyAqLztcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggZmllbGQtY29udGVudCBpbiBSRkMgNzIzMCBzZWMgMy4yXG4gKlxuICogZmllbGQtY29udGVudCA9IGZpZWxkLXZjaGFyIFsgMSooIFNQIC8gSFRBQiApIGZpZWxkLXZjaGFyIF1cbiAqIGZpZWxkLXZjaGFyICAgPSBWQ0hBUiAvIG9icy10ZXh0XG4gKiBvYnMtdGV4dCAgICAgID0gJXg4MC1GRlxuICovXG5cbnZhciBmaWVsZENvbnRlbnRSZWdFeHAgPSAvXltcXHUwMDA5XFx1MDAyMC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXSskLztcblxuLyoqXG4gKiBQYXJzZSBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogUGFyc2UgdGhlIGdpdmVuIGNvb2tpZSBoZWFkZXIgc3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKiBUaGUgb2JqZWN0IGhhcyB0aGUgdmFyaW91cyBjb29raWVzIGFzIGtleXMobmFtZXMpID0+IHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3RyIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIHZhciBvYmogPSB7fTtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBwYWlycyA9IHN0ci5zcGxpdChwYWlyU3BsaXRSZWdFeHApO1xuICB2YXIgZGVjID0gb3B0LmRlY29kZSB8fCBkZWNvZGU7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgdmFyIGVxX2lkeCA9IHBhaXIuaW5kZXhPZignPScpO1xuXG4gICAgLy8gc2tpcCB0aGluZ3MgdGhhdCBkb24ndCBsb29rIGxpa2Uga2V5PXZhbHVlXG4gICAgaWYgKGVxX2lkeCA8IDApIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBrZXkgPSBwYWlyLnN1YnN0cigwLCBlcV9pZHgpLnRyaW0oKTtcbiAgICB2YXIgdmFsID0gcGFpci5zdWJzdHIoKytlcV9pZHgsIHBhaXIubGVuZ3RoKS50cmltKCk7XG5cbiAgICAvLyBxdW90ZWQgdmFsdWVzXG4gICAgaWYgKCdcIicgPT0gdmFsWzBdKSB7XG4gICAgICB2YWwgPSB2YWwuc2xpY2UoMSwgLTEpO1xuICAgIH1cblxuICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICBpZiAodW5kZWZpbmVkID09IG9ialtrZXldKSB7XG4gICAgICBvYmpba2V5XSA9IHRyeURlY29kZSh2YWwsIGRlYyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgZGF0YSBpbnRvIGEgY29va2llIGhlYWRlci5cbiAqXG4gKiBTZXJpYWxpemUgdGhlIGEgbmFtZSB2YWx1ZSBwYWlyIGludG8gYSBjb29raWUgc3RyaW5nIHN1aXRhYmxlIGZvclxuICogaHR0cCBoZWFkZXJzLiBBbiBvcHRpb25hbCBvcHRpb25zIG9iamVjdCBzcGVjaWZpZWQgY29va2llIHBhcmFtZXRlcnMuXG4gKlxuICogc2VyaWFsaXplKCdmb28nLCAnYmFyJywgeyBodHRwT25seTogdHJ1ZSB9KVxuICogICA9PiBcImZvbz1iYXI7IGh0dHBPbmx5XCJcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IHZhbFxuICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICogQHJldHVybiB7c3RyaW5nfVxuICogQHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHNlcmlhbGl6ZShuYW1lLCB2YWwsIG9wdGlvbnMpIHtcbiAgdmFyIG9wdCA9IG9wdGlvbnMgfHwge307XG4gIHZhciBlbmMgPSBvcHQuZW5jb2RlIHx8IGVuY29kZTtcblxuICBpZiAodHlwZW9mIGVuYyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBlbmNvZGUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChuYW1lKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IG5hbWUgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHZhbHVlID0gZW5jKHZhbCk7XG5cbiAgaWYgKHZhbHVlICYmICFmaWVsZENvbnRlbnRSZWdFeHAudGVzdCh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCB2YWwgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgdmFyIHN0ciA9IG5hbWUgKyAnPScgKyB2YWx1ZTtcblxuICBpZiAobnVsbCAhPSBvcHQubWF4QWdlKSB7XG4gICAgdmFyIG1heEFnZSA9IG9wdC5tYXhBZ2UgLSAwO1xuICAgIGlmIChpc05hTihtYXhBZ2UpKSB0aHJvdyBuZXcgRXJyb3IoJ21heEFnZSBzaG91bGQgYmUgYSBOdW1iZXInKTtcbiAgICBzdHIgKz0gJzsgTWF4LUFnZT0nICsgTWF0aC5mbG9vcihtYXhBZ2UpO1xuICB9XG5cbiAgaWYgKG9wdC5kb21haW4pIHtcbiAgICBpZiAoIWZpZWxkQ29udGVudFJlZ0V4cC50ZXN0KG9wdC5kb21haW4pKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZG9tYWluIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgRG9tYWluPScgKyBvcHQuZG9tYWluO1xuICB9XG5cbiAgaWYgKG9wdC5wYXRoKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQucGF0aCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBwYXRoIGlzIGludmFsaWQnKTtcbiAgICB9XG5cbiAgICBzdHIgKz0gJzsgUGF0aD0nICsgb3B0LnBhdGg7XG4gIH1cblxuICBpZiAob3B0LmV4cGlyZXMpIHtcbiAgICBpZiAodHlwZW9mIG9wdC5leHBpcmVzLnRvVVRDU3RyaW5nICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZXhwaXJlcyBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IEV4cGlyZXM9JyArIG9wdC5leHBpcmVzLnRvVVRDU3RyaW5nKCk7XG4gIH1cblxuICBpZiAob3B0Lmh0dHBPbmx5KSB7XG4gICAgc3RyICs9ICc7IEh0dHBPbmx5JztcbiAgfVxuXG4gIGlmIChvcHQuc2VjdXJlKSB7XG4gICAgc3RyICs9ICc7IFNlY3VyZSc7XG4gIH1cblxuICBpZiAob3B0LnNhbWVTaXRlKSB7XG4gICAgdmFyIHNhbWVTaXRlID0gdHlwZW9mIG9wdC5zYW1lU2l0ZSA9PT0gJ3N0cmluZydcbiAgICAgID8gb3B0LnNhbWVTaXRlLnRvTG93ZXJDYXNlKCkgOiBvcHQuc2FtZVNpdGU7XG5cbiAgICBzd2l0Y2ggKHNhbWVTaXRlKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2xheCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1MYXgnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N0cmljdCc6XG4gICAgICAgIHN0ciArPSAnOyBTYW1lU2l0ZT1TdHJpY3QnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9Tm9uZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIHNhbWVTaXRlIGlzIGludmFsaWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RyO1xufVxuXG4vKipcbiAqIFRyeSBkZWNvZGluZyBhIHN0cmluZyB1c2luZyBhIGRlY29kaW5nIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGRlY29kZVxuICogQHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiB0cnlEZWNvZGUoc3RyLCBkZWNvZGUpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZGVjb2RlKHN0cik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG59XG5cbnZhciBjb29raWUgPSB7XG5cdHBhcnNlOiBwYXJzZV8xLFxuXHRzZXJpYWxpemU6IHNlcmlhbGl6ZV8xXG59O1xuXG52YXIgY2hhcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWl8kJztcbnZhciB1bnNhZmVDaGFycyA9IC9bPD5cXGJcXGZcXG5cXHJcXHRcXDBcXHUyMDI4XFx1MjAyOV0vZztcbnZhciByZXNlcnZlZCA9IC9eKD86ZG98aWZ8aW58Zm9yfGludHxsZXR8bmV3fHRyeXx2YXJ8Ynl0ZXxjYXNlfGNoYXJ8ZWxzZXxlbnVtfGdvdG98bG9uZ3x0aGlzfHZvaWR8d2l0aHxhd2FpdHxicmVha3xjYXRjaHxjbGFzc3xjb25zdHxmaW5hbHxmbG9hdHxzaG9ydHxzdXBlcnx0aHJvd3x3aGlsZXx5aWVsZHxkZWxldGV8ZG91YmxlfGV4cG9ydHxpbXBvcnR8bmF0aXZlfHJldHVybnxzd2l0Y2h8dGhyb3dzfHR5cGVvZnxib29sZWFufGRlZmF1bHR8ZXh0ZW5kc3xmaW5hbGx5fHBhY2thZ2V8cHJpdmF0ZXxhYnN0cmFjdHxjb250aW51ZXxkZWJ1Z2dlcnxmdW5jdGlvbnx2b2xhdGlsZXxpbnRlcmZhY2V8cHJvdGVjdGVkfHRyYW5zaWVudHxpbXBsZW1lbnRzfGluc3RhbmNlb2Z8c3luY2hyb25pemVkKSQvO1xudmFyIGVzY2FwZWQgPSB7XG4gICAgJzwnOiAnXFxcXHUwMDNDJyxcbiAgICAnPic6ICdcXFxcdTAwM0UnLFxuICAgICcvJzogJ1xcXFx1MDAyRicsXG4gICAgJ1xcXFwnOiAnXFxcXFxcXFwnLFxuICAgICdcXGInOiAnXFxcXGInLFxuICAgICdcXGYnOiAnXFxcXGYnLFxuICAgICdcXG4nOiAnXFxcXG4nLFxuICAgICdcXHInOiAnXFxcXHInLFxuICAgICdcXHQnOiAnXFxcXHQnLFxuICAgICdcXDAnOiAnXFxcXDAnLFxuICAgICdcXHUyMDI4JzogJ1xcXFx1MjAyOCcsXG4gICAgJ1xcdTIwMjknOiAnXFxcXHUyMDI5J1xufTtcbnZhciBvYmplY3RQcm90b093blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPYmplY3QucHJvdG90eXBlKS5zb3J0KCkuam9pbignXFwwJyk7XG5mdW5jdGlvbiBkZXZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIGNvdW50cyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiB3YWxrKHRoaW5nKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdHJpbmdpZnkgYSBmdW5jdGlvblwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRzLmhhcyh0aGluZykpIHtcbiAgICAgICAgICAgIGNvdW50cy5zZXQodGhpbmcsIGNvdW50cy5nZXQodGhpbmcpICsgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY291bnRzLnNldCh0aGluZywgMSk7XG4gICAgICAgIGlmICghaXNQcmltaXRpdmUodGhpbmcpKSB7XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGdldFR5cGUodGhpbmcpO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnTnVtYmVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgICAgICAgICAgICAgIHRoaW5nLmZvckVhY2god2Fsayk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1NldCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnTWFwJzpcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGluZykuZm9yRWFjaCh3YWxrKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb3RvICE9PSBPYmplY3QucHJvdG90eXBlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm90byAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pLnNvcnQoKS5qb2luKCdcXDAnKSAhPT0gb2JqZWN0UHJvdG9Pd25Qcm9wZXJ0eU5hbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3Qgc3RyaW5naWZ5IGFyYml0cmFyeSBub24tUE9KT3NcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHModGhpbmcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzdHJpbmdpZnkgUE9KT3Mgd2l0aCBzeW1ib2xpYyBrZXlzXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaW5nKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHdhbGsodGhpbmdba2V5XSk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHdhbGsodmFsdWUpO1xuICAgIHZhciBuYW1lcyA9IG5ldyBNYXAoKTtcbiAgICBBcnJheS5mcm9tKGNvdW50cylcbiAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoZW50cnkpIHsgcmV0dXJuIGVudHJ5WzFdID4gMTsgfSlcbiAgICAgICAgLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGJbMV0gLSBhWzFdOyB9KVxuICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAoZW50cnksIGkpIHtcbiAgICAgICAgbmFtZXMuc2V0KGVudHJ5WzBdLCBnZXROYW1lKGkpKTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBzdHJpbmdpZnkodGhpbmcpIHtcbiAgICAgICAgaWYgKG5hbWVzLmhhcyh0aGluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBuYW1lcy5nZXQodGhpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1ByaW1pdGl2ZSh0aGluZykpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdpZnlQcmltaXRpdmUodGhpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlID0gZ2V0VHlwZSh0aGluZyk7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnTnVtYmVyJzpcbiAgICAgICAgICAgIGNhc2UgJ1N0cmluZyc6XG4gICAgICAgICAgICBjYXNlICdCb29sZWFuJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJPYmplY3QoXCIgKyBzdHJpbmdpZnkodGhpbmcudmFsdWVPZigpKSArIFwiKVwiO1xuICAgICAgICAgICAgY2FzZSAnUmVnRXhwJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpbmcudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5ldyBEYXRlKFwiICsgdGhpbmcuZ2V0VGltZSgpICsgXCIpXCI7XG4gICAgICAgICAgICBjYXNlICdBcnJheSc6XG4gICAgICAgICAgICAgICAgdmFyIG1lbWJlcnMgPSB0aGluZy5tYXAoZnVuY3Rpb24gKHYsIGkpIHsgcmV0dXJuIGkgaW4gdGhpbmcgPyBzdHJpbmdpZnkodikgOiAnJzsgfSk7XG4gICAgICAgICAgICAgICAgdmFyIHRhaWwgPSB0aGluZy5sZW5ndGggPT09IDAgfHwgKHRoaW5nLmxlbmd0aCAtIDEgaW4gdGhpbmcpID8gJycgOiAnLCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiW1wiICsgbWVtYmVycy5qb2luKCcsJykgKyB0YWlsICsgXCJdXCI7XG4gICAgICAgICAgICBjYXNlICdTZXQnOlxuICAgICAgICAgICAgY2FzZSAnTWFwJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJuZXcgXCIgKyB0eXBlICsgXCIoW1wiICsgQXJyYXkuZnJvbSh0aGluZykubWFwKHN0cmluZ2lmeSkuam9pbignLCcpICsgXCJdKVwiO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB2YXIgb2JqID0gXCJ7XCIgKyBPYmplY3Qua2V5cyh0aGluZykubWFwKGZ1bmN0aW9uIChrZXkpIHsgcmV0dXJuIHNhZmVLZXkoa2V5KSArIFwiOlwiICsgc3RyaW5naWZ5KHRoaW5nW2tleV0pOyB9KS5qb2luKCcsJykgKyBcIn1cIjtcbiAgICAgICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpbmcpO1xuICAgICAgICAgICAgICAgIGlmIChwcm90byA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpbmcpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCJPYmplY3QuYXNzaWduKE9iamVjdC5jcmVhdGUobnVsbCksXCIgKyBvYmogKyBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIk9iamVjdC5jcmVhdGUobnVsbClcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgc3RyID0gc3RyaW5naWZ5KHZhbHVlKTtcbiAgICBpZiAobmFtZXMuc2l6ZSkge1xuICAgICAgICB2YXIgcGFyYW1zXzEgPSBbXTtcbiAgICAgICAgdmFyIHN0YXRlbWVudHNfMSA9IFtdO1xuICAgICAgICB2YXIgdmFsdWVzXzEgPSBbXTtcbiAgICAgICAgbmFtZXMuZm9yRWFjaChmdW5jdGlvbiAobmFtZSwgdGhpbmcpIHtcbiAgICAgICAgICAgIHBhcmFtc18xLnB1c2gobmFtZSk7XG4gICAgICAgICAgICBpZiAoaXNQcmltaXRpdmUodGhpbmcpKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChzdHJpbmdpZnlQcmltaXRpdmUodGhpbmcpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdHlwZSA9IGdldFR5cGUodGhpbmcpO1xuICAgICAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnTnVtYmVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ0Jvb2xlYW4nOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwiT2JqZWN0KFwiICsgc3RyaW5naWZ5KHRoaW5nLnZhbHVlT2YoKSkgKyBcIilcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2godGhpbmcudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0RhdGUnOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXNfMS5wdXNoKFwibmV3IERhdGUoXCIgKyB0aGluZy5nZXRUaW1lKCkgKyBcIilcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0FycmF5JzpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChcIkFycmF5KFwiICsgdGhpbmcubGVuZ3RoICsgXCIpXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGluZy5mb3JFYWNoKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChuYW1lICsgXCJbXCIgKyBpICsgXCJdPVwiICsgc3RyaW5naWZ5KHYpKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1NldCc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goXCJuZXcgU2V0XCIpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChuYW1lICsgXCIuXCIgKyBBcnJheS5mcm9tKHRoaW5nKS5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIFwiYWRkKFwiICsgc3RyaW5naWZ5KHYpICsgXCIpXCI7IH0pLmpvaW4oJy4nKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ01hcCc6XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlc18xLnB1c2goXCJuZXcgTWFwXCIpO1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChuYW1lICsgXCIuXCIgKyBBcnJheS5mcm9tKHRoaW5nKS5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgayA9IF9hWzBdLCB2ID0gX2FbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJzZXQoXCIgKyBzdHJpbmdpZnkoaykgKyBcIiwgXCIgKyBzdHJpbmdpZnkodikgKyBcIilcIjtcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbignLicpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzXzEucHVzaChPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpbmcpID09PSBudWxsID8gJ09iamVjdC5jcmVhdGUobnVsbCknIDogJ3t9Jyk7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaW5nKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudHNfMS5wdXNoKFwiXCIgKyBuYW1lICsgc2FmZVByb3Aoa2V5KSArIFwiPVwiICsgc3RyaW5naWZ5KHRoaW5nW2tleV0pKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzdGF0ZW1lbnRzXzEucHVzaChcInJldHVybiBcIiArIHN0cik7XG4gICAgICAgIHJldHVybiBcIihmdW5jdGlvbihcIiArIHBhcmFtc18xLmpvaW4oJywnKSArIFwiKXtcIiArIHN0YXRlbWVudHNfMS5qb2luKCc7JykgKyBcIn0oXCIgKyB2YWx1ZXNfMS5qb2luKCcsJykgKyBcIikpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGdldE5hbWUobnVtKSB7XG4gICAgdmFyIG5hbWUgPSAnJztcbiAgICBkbyB7XG4gICAgICAgIG5hbWUgPSBjaGFyc1tudW0gJSBjaGFycy5sZW5ndGhdICsgbmFtZTtcbiAgICAgICAgbnVtID0gfn4obnVtIC8gY2hhcnMubGVuZ3RoKSAtIDE7XG4gICAgfSB3aGlsZSAobnVtID49IDApO1xuICAgIHJldHVybiByZXNlcnZlZC50ZXN0KG5hbWUpID8gbmFtZSArIFwiX1wiIDogbmFtZTtcbn1cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHRoaW5nKSB7XG4gICAgcmV0dXJuIE9iamVjdCh0aGluZykgIT09IHRoaW5nO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5UHJpbWl0aXZlKHRoaW5nKSB7XG4gICAgaWYgKHR5cGVvZiB0aGluZyA9PT0gJ3N0cmluZycpXG4gICAgICAgIHJldHVybiBzdHJpbmdpZnlTdHJpbmcodGhpbmcpO1xuICAgIGlmICh0aGluZyA9PT0gdm9pZCAwKVxuICAgICAgICByZXR1cm4gJ3ZvaWQgMCc7XG4gICAgaWYgKHRoaW5nID09PSAwICYmIDEgLyB0aGluZyA8IDApXG4gICAgICAgIHJldHVybiAnLTAnO1xuICAgIHZhciBzdHIgPSBTdHJpbmcodGhpbmcpO1xuICAgIGlmICh0eXBlb2YgdGhpbmcgPT09ICdudW1iZXInKVxuICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoL14oLSk/MFxcLi8sICckMS4nKTtcbiAgICByZXR1cm4gc3RyO1xufVxuZnVuY3Rpb24gZ2V0VHlwZSh0aGluZykge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpLnNsaWNlKDgsIC0xKTtcbn1cbmZ1bmN0aW9uIGVzY2FwZVVuc2FmZUNoYXIoYykge1xuICAgIHJldHVybiBlc2NhcGVkW2NdIHx8IGM7XG59XG5mdW5jdGlvbiBlc2NhcGVVbnNhZmVDaGFycyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UodW5zYWZlQ2hhcnMsIGVzY2FwZVVuc2FmZUNoYXIpO1xufVxuZnVuY3Rpb24gc2FmZUtleShrZXkpIHtcbiAgICByZXR1cm4gL15bXyRhLXpBLVpdW18kYS16QS1aMC05XSokLy50ZXN0KGtleSkgPyBrZXkgOiBlc2NhcGVVbnNhZmVDaGFycyhKU09OLnN0cmluZ2lmeShrZXkpKTtcbn1cbmZ1bmN0aW9uIHNhZmVQcm9wKGtleSkge1xuICAgIHJldHVybiAvXltfJGEtekEtWl1bXyRhLXpBLVowLTldKiQvLnRlc3Qoa2V5KSA/IFwiLlwiICsga2V5IDogXCJbXCIgKyBlc2NhcGVVbnNhZmVDaGFycyhKU09OLnN0cmluZ2lmeShrZXkpKSArIFwiXVwiO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5U3RyaW5nKHN0cikge1xuICAgIHZhciByZXN1bHQgPSAnXCInO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyLmNoYXJBdChpKTtcbiAgICAgICAgdmFyIGNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmIChjaGFyID09PSAnXCInKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gJ1xcXFxcIic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY2hhciBpbiBlc2NhcGVkKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gZXNjYXBlZFtjaGFyXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb2RlID49IDB4ZDgwMCAmJiBjb2RlIDw9IDB4ZGZmZikge1xuICAgICAgICAgICAgdmFyIG5leHQgPSBzdHIuY2hhckNvZGVBdChpICsgMSk7XG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIHRoZSBiZWdpbm5pbmcgb2YgYSBbaGlnaCwgbG93XSBzdXJyb2dhdGUgcGFpcixcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgbmV4dCB0d28gY2hhcmFjdGVycywgb3RoZXJ3aXNlIGVzY2FwZVxuICAgICAgICAgICAgaWYgKGNvZGUgPD0gMHhkYmZmICYmIChuZXh0ID49IDB4ZGMwMCAmJiBuZXh0IDw9IDB4ZGZmZikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gY2hhciArIHN0clsrK2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiXFxcXHVcIiArIGNvZGUudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gY2hhcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQgKz0gJ1wiJztcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG4vLyBCYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vdG1wdmFyL2pzZG9tL2Jsb2IvYWE4NWIyYWJmMDc3NjZmZjdiZjVjMWY2ZGFhZmIzNzI2ZjJmMmRiNS9saWIvanNkb20vbGl2aW5nL2Jsb2IuanNcblxuLy8gZml4IGZvciBcIlJlYWRhYmxlXCIgaXNuJ3QgYSBuYW1lZCBleHBvcnQgaXNzdWVcbmNvbnN0IFJlYWRhYmxlID0gU3RyZWFtLlJlYWRhYmxlO1xuXG5jb25zdCBCVUZGRVIgPSBTeW1ib2woJ2J1ZmZlcicpO1xuY29uc3QgVFlQRSA9IFN5bWJvbCgndHlwZScpO1xuXG5jbGFzcyBCbG9iIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpc1tUWVBFXSA9ICcnO1xuXG5cdFx0Y29uc3QgYmxvYlBhcnRzID0gYXJndW1lbnRzWzBdO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBhcmd1bWVudHNbMV07XG5cblx0XHRjb25zdCBidWZmZXJzID0gW107XG5cdFx0bGV0IHNpemUgPSAwO1xuXG5cdFx0aWYgKGJsb2JQYXJ0cykge1xuXHRcdFx0Y29uc3QgYSA9IGJsb2JQYXJ0cztcblx0XHRcdGNvbnN0IGxlbmd0aCA9IE51bWJlcihhLmxlbmd0aCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGNvbnN0IGVsZW1lbnQgPSBhW2ldO1xuXHRcdFx0XHRsZXQgYnVmZmVyO1xuXHRcdFx0XHRpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEJ1ZmZlcikge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IGVsZW1lbnQ7XG5cdFx0XHRcdH0gZWxzZSBpZiAoQXJyYXlCdWZmZXIuaXNWaWV3KGVsZW1lbnQpKSB7XG5cdFx0XHRcdFx0YnVmZmVyID0gQnVmZmVyLmZyb20oZWxlbWVudC5idWZmZXIsIGVsZW1lbnQuYnl0ZU9mZnNldCwgZWxlbWVudC5ieXRlTGVuZ3RoKTtcblx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcblx0XHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbShlbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQmxvYikge1xuXHRcdFx0XHRcdGJ1ZmZlciA9IGVsZW1lbnRbQlVGRkVSXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRidWZmZXIgPSBCdWZmZXIuZnJvbSh0eXBlb2YgZWxlbWVudCA9PT0gJ3N0cmluZycgPyBlbGVtZW50IDogU3RyaW5nKGVsZW1lbnQpKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzaXplICs9IGJ1ZmZlci5sZW5ndGg7XG5cdFx0XHRcdGJ1ZmZlcnMucHVzaChidWZmZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXNbQlVGRkVSXSA9IEJ1ZmZlci5jb25jYXQoYnVmZmVycyk7XG5cblx0XHRsZXQgdHlwZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy50eXBlICE9PSB1bmRlZmluZWQgJiYgU3RyaW5nKG9wdGlvbnMudHlwZSkudG9Mb3dlckNhc2UoKTtcblx0XHRpZiAodHlwZSAmJiAhL1teXFx1MDAyMC1cXHUwMDdFXS8udGVzdCh0eXBlKSkge1xuXHRcdFx0dGhpc1tUWVBFXSA9IHR5cGU7XG5cdFx0fVxuXHR9XG5cdGdldCBzaXplKCkge1xuXHRcdHJldHVybiB0aGlzW0JVRkZFUl0ubGVuZ3RoO1xuXHR9XG5cdGdldCB0eXBlKCkge1xuXHRcdHJldHVybiB0aGlzW1RZUEVdO1xuXHR9XG5cdHRleHQoKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzW0JVRkZFUl0udG9TdHJpbmcoKSk7XG5cdH1cblx0YXJyYXlCdWZmZXIoKSB7XG5cdFx0Y29uc3QgYnVmID0gdGhpc1tCVUZGRVJdO1xuXHRcdGNvbnN0IGFiID0gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZShhYik7XG5cdH1cblx0c3RyZWFtKCkge1xuXHRcdGNvbnN0IHJlYWRhYmxlID0gbmV3IFJlYWRhYmxlKCk7XG5cdFx0cmVhZGFibGUuX3JlYWQgPSBmdW5jdGlvbiAoKSB7fTtcblx0XHRyZWFkYWJsZS5wdXNoKHRoaXNbQlVGRkVSXSk7XG5cdFx0cmVhZGFibGUucHVzaChudWxsKTtcblx0XHRyZXR1cm4gcmVhZGFibGU7XG5cdH1cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdbb2JqZWN0IEJsb2JdJztcblx0fVxuXHRzbGljZSgpIHtcblx0XHRjb25zdCBzaXplID0gdGhpcy5zaXplO1xuXG5cdFx0Y29uc3Qgc3RhcnQgPSBhcmd1bWVudHNbMF07XG5cdFx0Y29uc3QgZW5kID0gYXJndW1lbnRzWzFdO1xuXHRcdGxldCByZWxhdGl2ZVN0YXJ0LCByZWxhdGl2ZUVuZDtcblx0XHRpZiAoc3RhcnQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmVsYXRpdmVTdGFydCA9IDA7XG5cdFx0fSBlbHNlIGlmIChzdGFydCA8IDApIHtcblx0XHRcdHJlbGF0aXZlU3RhcnQgPSBNYXRoLm1heChzaXplICsgc3RhcnQsIDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWxhdGl2ZVN0YXJ0ID0gTWF0aC5taW4oc3RhcnQsIHNpemUpO1xuXHRcdH1cblx0XHRpZiAoZW5kID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gc2l6ZTtcblx0XHR9IGVsc2UgaWYgKGVuZCA8IDApIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gTWF0aC5tYXgoc2l6ZSArIGVuZCwgMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbGF0aXZlRW5kID0gTWF0aC5taW4oZW5kLCBzaXplKTtcblx0XHR9XG5cdFx0Y29uc3Qgc3BhbiA9IE1hdGgubWF4KHJlbGF0aXZlRW5kIC0gcmVsYXRpdmVTdGFydCwgMCk7XG5cblx0XHRjb25zdCBidWZmZXIgPSB0aGlzW0JVRkZFUl07XG5cdFx0Y29uc3Qgc2xpY2VkQnVmZmVyID0gYnVmZmVyLnNsaWNlKHJlbGF0aXZlU3RhcnQsIHJlbGF0aXZlU3RhcnQgKyBzcGFuKTtcblx0XHRjb25zdCBibG9iID0gbmV3IEJsb2IoW10sIHsgdHlwZTogYXJndW1lbnRzWzJdIH0pO1xuXHRcdGJsb2JbQlVGRkVSXSA9IHNsaWNlZEJ1ZmZlcjtcblx0XHRyZXR1cm4gYmxvYjtcblx0fVxufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhCbG9iLnByb3RvdHlwZSwge1xuXHRzaXplOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dHlwZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHNsaWNlOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCbG9iLnByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnQmxvYicsXG5cdHdyaXRhYmxlOiBmYWxzZSxcblx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdGNvbmZpZ3VyYWJsZTogdHJ1ZVxufSk7XG5cbi8qKlxuICogZmV0Y2gtZXJyb3IuanNcbiAqXG4gKiBGZXRjaEVycm9yIGludGVyZmFjZSBmb3Igb3BlcmF0aW9uYWwgZXJyb3JzXG4gKi9cblxuLyoqXG4gKiBDcmVhdGUgRmV0Y2hFcnJvciBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIG1lc3NhZ2UgICAgICBFcnJvciBtZXNzYWdlIGZvciBodW1hblxuICogQHBhcmFtICAgU3RyaW5nICAgICAgdHlwZSAgICAgICAgIEVycm9yIHR5cGUgZm9yIG1hY2hpbmVcbiAqIEBwYXJhbSAgIFN0cmluZyAgICAgIHN5c3RlbUVycm9yICBGb3IgTm9kZS5qcyBzeXN0ZW0gZXJyb3JcbiAqIEByZXR1cm4gIEZldGNoRXJyb3JcbiAqL1xuZnVuY3Rpb24gRmV0Y2hFcnJvcihtZXNzYWdlLCB0eXBlLCBzeXN0ZW1FcnJvcikge1xuICBFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgLy8gd2hlbiBlcnIudHlwZSBpcyBgc3lzdGVtYCwgZXJyLmNvZGUgY29udGFpbnMgc3lzdGVtIGVycm9yIGNvZGVcbiAgaWYgKHN5c3RlbUVycm9yKSB7XG4gICAgdGhpcy5jb2RlID0gdGhpcy5lcnJubyA9IHN5c3RlbUVycm9yLmNvZGU7XG4gIH1cblxuICAvLyBoaWRlIGN1c3RvbSBlcnJvciBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIGZyb20gZW5kLXVzZXJzXG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xufVxuXG5GZXRjaEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkZldGNoRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gRmV0Y2hFcnJvcjtcbkZldGNoRXJyb3IucHJvdG90eXBlLm5hbWUgPSAnRmV0Y2hFcnJvcic7XG5cbmxldCBjb252ZXJ0O1xudHJ5IHtcblx0Y29udmVydCA9IHJlcXVpcmUoJ2VuY29kaW5nJykuY29udmVydDtcbn0gY2F0Y2ggKGUpIHt9XG5cbmNvbnN0IElOVEVSTkFMUyA9IFN5bWJvbCgnQm9keSBpbnRlcm5hbHMnKTtcblxuLy8gZml4IGFuIGlzc3VlIHdoZXJlIFwiUGFzc1Rocm91Z2hcIiBpc24ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IFBhc3NUaHJvdWdoID0gU3RyZWFtLlBhc3NUaHJvdWdoO1xuXG4vKipcbiAqIEJvZHkgbWl4aW5cbiAqXG4gKiBSZWY6IGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNib2R5XG4gKlxuICogQHBhcmFtICAgU3RyZWFtICBib2R5ICBSZWFkYWJsZSBzdHJlYW1cbiAqIEBwYXJhbSAgIE9iamVjdCAgb3B0cyAgUmVzcG9uc2Ugb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5mdW5jdGlvbiBCb2R5KGJvZHkpIHtcblx0dmFyIF90aGlzID0gdGhpcztcblxuXHR2YXIgX3JlZiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge30sXG5cdCAgICBfcmVmJHNpemUgPSBfcmVmLnNpemU7XG5cblx0bGV0IHNpemUgPSBfcmVmJHNpemUgPT09IHVuZGVmaW5lZCA/IDAgOiBfcmVmJHNpemU7XG5cdHZhciBfcmVmJHRpbWVvdXQgPSBfcmVmLnRpbWVvdXQ7XG5cdGxldCB0aW1lb3V0ID0gX3JlZiR0aW1lb3V0ID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiR0aW1lb3V0O1xuXG5cdGlmIChib2R5ID09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIHVuZGVmaW5lZCBvciBudWxsXG5cdFx0Ym9keSA9IG51bGw7XG5cdH0gZWxzZSBpZiAoaXNVUkxTZWFyY2hQYXJhbXMoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGEgVVJMU2VhcmNoUGFyYW1zXG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkudG9TdHJpbmcoKSk7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSA7IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkgOyBlbHNlIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSkgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXScpIHtcblx0XHQvLyBib2R5IGlzIEFycmF5QnVmZmVyXG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkpO1xuXHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJWaWV3XG5cdFx0Ym9keSA9IEJ1ZmZlci5mcm9tKGJvZHkuYnVmZmVyLCBib2R5LmJ5dGVPZmZzZXQsIGJvZHkuYnl0ZUxlbmd0aCk7XG5cdH0gZWxzZSBpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkgOyBlbHNlIHtcblx0XHQvLyBub25lIG9mIHRoZSBhYm92ZVxuXHRcdC8vIGNvZXJjZSB0byBzdHJpbmcgdGhlbiBidWZmZXJcblx0XHRib2R5ID0gQnVmZmVyLmZyb20oU3RyaW5nKGJvZHkpKTtcblx0fVxuXHR0aGlzW0lOVEVSTkFMU10gPSB7XG5cdFx0Ym9keSxcblx0XHRkaXN0dXJiZWQ6IGZhbHNlLFxuXHRcdGVycm9yOiBudWxsXG5cdH07XG5cdHRoaXMuc2l6ZSA9IHNpemU7XG5cdHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG5cblx0aWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIHtcblx0XHRib2R5Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdGNvbnN0IGVycm9yID0gZXJyLm5hbWUgPT09ICdBYm9ydEVycm9yJyA/IGVyciA6IG5ldyBGZXRjaEVycm9yKGBJbnZhbGlkIHJlc3BvbnNlIGJvZHkgd2hpbGUgdHJ5aW5nIHRvIGZldGNoICR7X3RoaXMudXJsfTogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKTtcblx0XHRcdF90aGlzW0lOVEVSTkFMU10uZXJyb3IgPSBlcnJvcjtcblx0XHR9KTtcblx0fVxufVxuXG5Cb2R5LnByb3RvdHlwZSA9IHtcblx0Z2V0IGJvZHkoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTXS5ib2R5O1xuXHR9LFxuXG5cdGdldCBib2R5VXNlZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZDtcblx0fSxcblxuXHQvKipcbiAgKiBEZWNvZGUgcmVzcG9uc2UgYXMgQXJyYXlCdWZmZXJcbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0YXJyYXlCdWZmZXIoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmKSB7XG5cdFx0XHRyZXR1cm4gYnVmLmJ1ZmZlci5zbGljZShidWYuYnl0ZU9mZnNldCwgYnVmLmJ5dGVPZmZzZXQgKyBidWYuYnl0ZUxlbmd0aCk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogUmV0dXJuIHJhdyByZXNwb25zZSBhcyBCbG9iXG4gICpcbiAgKiBAcmV0dXJuIFByb21pc2VcbiAgKi9cblx0YmxvYigpIHtcblx0XHRsZXQgY3QgPSB0aGlzLmhlYWRlcnMgJiYgdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykgfHwgJyc7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LmFzc2lnbihcblx0XHRcdC8vIFByZXZlbnQgY29weWluZ1xuXHRcdFx0bmV3IEJsb2IoW10sIHtcblx0XHRcdFx0dHlwZTogY3QudG9Mb3dlckNhc2UoKVxuXHRcdFx0fSksIHtcblx0XHRcdFx0W0JVRkZFUl06IGJ1ZlxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIGpzb25cbiAgKlxuICAqIEByZXR1cm4gIFByb21pc2VcbiAgKi9cblx0anNvbigpIHtcblx0XHR2YXIgX3RoaXMyID0gdGhpcztcblxuXHRcdHJldHVybiBjb25zdW1lQm9keS5jYWxsKHRoaXMpLnRoZW4oZnVuY3Rpb24gKGJ1ZmZlcikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIEpTT04ucGFyc2UoYnVmZmVyLnRvU3RyaW5nKCkpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdHJldHVybiBCb2R5LlByb21pc2UucmVqZWN0KG5ldyBGZXRjaEVycm9yKGBpbnZhbGlkIGpzb24gcmVzcG9uc2UgYm9keSBhdCAke190aGlzMi51cmx9IHJlYXNvbjogJHtlcnIubWVzc2FnZX1gLCAnaW52YWxpZC1qc29uJykpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuICAqIERlY29kZSByZXNwb25zZSBhcyB0ZXh0XG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdHRleHQoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcykudGhlbihmdW5jdGlvbiAoYnVmZmVyKSB7XG5cdFx0XHRyZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIGJ1ZmZlciAobm9uLXNwZWMgYXBpKVxuICAqXG4gICogQHJldHVybiAgUHJvbWlzZVxuICAqL1xuXHRidWZmZXIoKSB7XG5cdFx0cmV0dXJuIGNvbnN1bWVCb2R5LmNhbGwodGhpcyk7XG5cdH0sXG5cblx0LyoqXG4gICogRGVjb2RlIHJlc3BvbnNlIGFzIHRleHQsIHdoaWxlIGF1dG9tYXRpY2FsbHkgZGV0ZWN0aW5nIHRoZSBlbmNvZGluZyBhbmRcbiAgKiB0cnlpbmcgdG8gZGVjb2RlIHRvIFVURi04IChub24tc3BlYyBhcGkpXG4gICpcbiAgKiBAcmV0dXJuICBQcm9taXNlXG4gICovXG5cdHRleHRDb252ZXJ0ZWQoKSB7XG5cdFx0dmFyIF90aGlzMyA9IHRoaXM7XG5cblx0XHRyZXR1cm4gY29uc3VtZUJvZHkuY2FsbCh0aGlzKS50aGVuKGZ1bmN0aW9uIChidWZmZXIpIHtcblx0XHRcdHJldHVybiBjb252ZXJ0Qm9keShidWZmZXIsIF90aGlzMy5oZWFkZXJzKTtcblx0XHR9KTtcblx0fVxufTtcblxuLy8gSW4gYnJvd3NlcnMsIGFsbCBwcm9wZXJ0aWVzIGFyZSBlbnVtZXJhYmxlLlxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQm9keS5wcm90b3R5cGUsIHtcblx0Ym9keTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGJvZHlVc2VkOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0YXJyYXlCdWZmZXI6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRibG9iOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0anNvbjogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHRleHQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuQm9keS5taXhJbiA9IGZ1bmN0aW9uIChwcm90bykge1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoQm9keS5wcm90b3R5cGUpKSB7XG5cdFx0Ly8gaXN0YW5idWwgaWdub3JlIGVsc2U6IGZ1dHVyZSBwcm9vZlxuXHRcdGlmICghKG5hbWUgaW4gcHJvdG8pKSB7XG5cdFx0XHRjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihCb2R5LnByb3RvdHlwZSwgbmFtZSk7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvdG8sIG5hbWUsIGRlc2MpO1xuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBDb25zdW1lIGFuZCBjb252ZXJ0IGFuIGVudGlyZSBCb2R5IHRvIGEgQnVmZmVyLlxuICpcbiAqIFJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keS1jb25zdW1lLWJvZHlcbiAqXG4gKiBAcmV0dXJuICBQcm9taXNlXG4gKi9cbmZ1bmN0aW9uIGNvbnN1bWVCb2R5KCkge1xuXHR2YXIgX3RoaXM0ID0gdGhpcztcblxuXHRpZiAodGhpc1tJTlRFUk5BTFNdLmRpc3R1cmJlZCkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoYGJvZHkgdXNlZCBhbHJlYWR5IGZvcjogJHt0aGlzLnVybH1gKSk7XG5cdH1cblxuXHR0aGlzW0lOVEVSTkFMU10uZGlzdHVyYmVkID0gdHJ1ZTtcblxuXHRpZiAodGhpc1tJTlRFUk5BTFNdLmVycm9yKSB7XG5cdFx0cmV0dXJuIEJvZHkuUHJvbWlzZS5yZWplY3QodGhpc1tJTlRFUk5BTFNdLmVycm9yKTtcblx0fVxuXG5cdGxldCBib2R5ID0gdGhpcy5ib2R5O1xuXG5cdC8vIGJvZHkgaXMgbnVsbFxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdHJldHVybiBCb2R5LlByb21pc2UucmVzb2x2ZShCdWZmZXIuYWxsb2MoMCkpO1xuXHR9XG5cblx0Ly8gYm9keSBpcyBibG9iXG5cdGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRib2R5ID0gYm9keS5zdHJlYW0oKTtcblx0fVxuXG5cdC8vIGJvZHkgaXMgYnVmZmVyXG5cdGlmIChCdWZmZXIuaXNCdWZmZXIoYm9keSkpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlc29sdmUoYm9keSk7XG5cdH1cblxuXHQvLyBpc3RhbmJ1bCBpZ25vcmUgaWY6IHNob3VsZCBuZXZlciBoYXBwZW5cblx0aWYgKCEoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSkpIHtcblx0XHRyZXR1cm4gQm9keS5Qcm9taXNlLnJlc29sdmUoQnVmZmVyLmFsbG9jKDApKTtcblx0fVxuXG5cdC8vIGJvZHkgaXMgc3RyZWFtXG5cdC8vIGdldCByZWFkeSB0byBhY3R1YWxseSBjb25zdW1lIHRoZSBib2R5XG5cdGxldCBhY2N1bSA9IFtdO1xuXHRsZXQgYWNjdW1CeXRlcyA9IDA7XG5cdGxldCBhYm9ydCA9IGZhbHNlO1xuXG5cdHJldHVybiBuZXcgQm9keS5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRsZXQgcmVzVGltZW91dDtcblxuXHRcdC8vIGFsbG93IHRpbWVvdXQgb24gc2xvdyByZXNwb25zZSBib2R5XG5cdFx0aWYgKF90aGlzNC50aW1lb3V0KSB7XG5cdFx0XHRyZXNUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGFib3J0ID0gdHJ1ZTtcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBSZXNwb25zZSB0aW1lb3V0IHdoaWxlIHRyeWluZyB0byBmZXRjaCAke190aGlzNC51cmx9IChvdmVyICR7X3RoaXM0LnRpbWVvdXR9bXMpYCwgJ2JvZHktdGltZW91dCcpKTtcblx0XHRcdH0sIF90aGlzNC50aW1lb3V0KTtcblx0XHR9XG5cblx0XHQvLyBoYW5kbGUgc3RyZWFtIGVycm9yc1xuXHRcdGJvZHkub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0aWYgKGVyci5uYW1lID09PSAnQWJvcnRFcnJvcicpIHtcblx0XHRcdFx0Ly8gaWYgdGhlIHJlcXVlc3Qgd2FzIGFib3J0ZWQsIHJlamVjdCB3aXRoIHRoaXMgRXJyb3Jcblx0XHRcdFx0YWJvcnQgPSB0cnVlO1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIG90aGVyIGVycm9ycywgc3VjaCBhcyBpbmNvcnJlY3QgY29udGVudC1lbmNvZGluZ1xuXHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYEludmFsaWQgcmVzcG9uc2UgYm9keSB3aGlsZSB0cnlpbmcgdG8gZmV0Y2ggJHtfdGhpczQudXJsfTogJHtlcnIubWVzc2FnZX1gLCAnc3lzdGVtJywgZXJyKSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRib2R5Lm9uKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XG5cdFx0XHRpZiAoYWJvcnQgfHwgY2h1bmsgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoX3RoaXM0LnNpemUgJiYgYWNjdW1CeXRlcyArIGNodW5rLmxlbmd0aCA+IF90aGlzNC5zaXplKSB7XG5cdFx0XHRcdGFib3J0ID0gdHJ1ZTtcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBjb250ZW50IHNpemUgYXQgJHtfdGhpczQudXJsfSBvdmVyIGxpbWl0OiAke190aGlzNC5zaXplfWAsICdtYXgtc2l6ZScpKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRhY2N1bUJ5dGVzICs9IGNodW5rLmxlbmd0aDtcblx0XHRcdGFjY3VtLnB1c2goY2h1bmspO1xuXHRcdH0pO1xuXG5cdFx0Ym9keS5vbignZW5kJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKGFib3J0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y2xlYXJUaW1lb3V0KHJlc1RpbWVvdXQpO1xuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRyZXNvbHZlKEJ1ZmZlci5jb25jYXQoYWNjdW0sIGFjY3VtQnl0ZXMpKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHQvLyBoYW5kbGUgc3RyZWFtcyB0aGF0IGhhdmUgYWNjdW11bGF0ZWQgdG9vIG11Y2ggZGF0YSAoaXNzdWUgIzQxNClcblx0XHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGBDb3VsZCBub3QgY3JlYXRlIEJ1ZmZlciBmcm9tIHJlc3BvbnNlIGJvZHkgZm9yICR7X3RoaXM0LnVybH06ICR7ZXJyLm1lc3NhZ2V9YCwgJ3N5c3RlbScsIGVycikpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBEZXRlY3QgYnVmZmVyIGVuY29kaW5nIGFuZCBjb252ZXJ0IHRvIHRhcmdldCBlbmNvZGluZ1xuICogcmVmOiBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDExL1dELWh0bWw1LTIwMTEwMTEzL3BhcnNpbmcuaHRtbCNkZXRlcm1pbmluZy10aGUtY2hhcmFjdGVyLWVuY29kaW5nXG4gKlxuICogQHBhcmFtICAgQnVmZmVyICBidWZmZXIgICAgSW5jb21pbmcgYnVmZmVyXG4gKiBAcGFyYW0gICBTdHJpbmcgIGVuY29kaW5nICBUYXJnZXQgZW5jb2RpbmdcbiAqIEByZXR1cm4gIFN0cmluZ1xuICovXG5mdW5jdGlvbiBjb252ZXJ0Qm9keShidWZmZXIsIGhlYWRlcnMpIHtcblx0aWYgKHR5cGVvZiBjb252ZXJ0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdUaGUgcGFja2FnZSBgZW5jb2RpbmdgIG11c3QgYmUgaW5zdGFsbGVkIHRvIHVzZSB0aGUgdGV4dENvbnZlcnRlZCgpIGZ1bmN0aW9uJyk7XG5cdH1cblxuXHRjb25zdCBjdCA9IGhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcblx0bGV0IGNoYXJzZXQgPSAndXRmLTgnO1xuXHRsZXQgcmVzLCBzdHI7XG5cblx0Ly8gaGVhZGVyXG5cdGlmIChjdCkge1xuXHRcdHJlcyA9IC9jaGFyc2V0PShbXjtdKikvaS5leGVjKGN0KTtcblx0fVxuXG5cdC8vIG5vIGNoYXJzZXQgaW4gY29udGVudCB0eXBlLCBwZWVrIGF0IHJlc3BvbnNlIGJvZHkgZm9yIGF0IG1vc3QgMTAyNCBieXRlc1xuXHRzdHIgPSBidWZmZXIuc2xpY2UoMCwgMTAyNCkudG9TdHJpbmcoKTtcblxuXHQvLyBodG1sNVxuXHRpZiAoIXJlcyAmJiBzdHIpIHtcblx0XHRyZXMgPSAvPG1ldGEuKz9jaGFyc2V0PShbJ1wiXSkoLis/KVxcMS9pLmV4ZWMoc3RyKTtcblx0fVxuXG5cdC8vIGh0bWw0XG5cdGlmICghcmVzICYmIHN0cikge1xuXHRcdHJlcyA9IC88bWV0YVtcXHNdKz9odHRwLWVxdWl2PShbJ1wiXSljb250ZW50LXR5cGVcXDFbXFxzXSs/Y29udGVudD0oWydcIl0pKC4rPylcXDIvaS5leGVjKHN0cik7XG5cblx0XHRpZiAocmVzKSB7XG5cdFx0XHRyZXMgPSAvY2hhcnNldD0oLiopL2kuZXhlYyhyZXMucG9wKCkpO1xuXHRcdH1cblx0fVxuXG5cdC8vIHhtbFxuXHRpZiAoIXJlcyAmJiBzdHIpIHtcblx0XHRyZXMgPSAvPFxcP3htbC4rP2VuY29kaW5nPShbJ1wiXSkoLis/KVxcMS9pLmV4ZWMoc3RyKTtcblx0fVxuXG5cdC8vIGZvdW5kIGNoYXJzZXRcblx0aWYgKHJlcykge1xuXHRcdGNoYXJzZXQgPSByZXMucG9wKCk7XG5cblx0XHQvLyBwcmV2ZW50IGRlY29kZSBpc3N1ZXMgd2hlbiBzaXRlcyB1c2UgaW5jb3JyZWN0IGVuY29kaW5nXG5cdFx0Ly8gcmVmOiBodHRwczovL2hzaXZvbmVuLmZpL2VuY29kaW5nLW1lbnUvXG5cdFx0aWYgKGNoYXJzZXQgPT09ICdnYjIzMTInIHx8IGNoYXJzZXQgPT09ICdnYmsnKSB7XG5cdFx0XHRjaGFyc2V0ID0gJ2diMTgwMzAnO1xuXHRcdH1cblx0fVxuXG5cdC8vIHR1cm4gcmF3IGJ1ZmZlcnMgaW50byBhIHNpbmdsZSB1dGYtOCBidWZmZXJcblx0cmV0dXJuIGNvbnZlcnQoYnVmZmVyLCAnVVRGLTgnLCBjaGFyc2V0KS50b1N0cmluZygpO1xufVxuXG4vKipcbiAqIERldGVjdCBhIFVSTFNlYXJjaFBhcmFtcyBvYmplY3RcbiAqIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2JpdGlubi9ub2RlLWZldGNoL2lzc3Vlcy8yOTYjaXNzdWVjb21tZW50LTMwNzU5ODE0M1xuICpcbiAqIEBwYXJhbSAgIE9iamVjdCAgb2JqICAgICBPYmplY3QgdG8gZGV0ZWN0IGJ5IHR5cGUgb3IgYnJhbmRcbiAqIEByZXR1cm4gIFN0cmluZ1xuICovXG5mdW5jdGlvbiBpc1VSTFNlYXJjaFBhcmFtcyhvYmopIHtcblx0Ly8gRHVjay10eXBpbmcgYXMgYSBuZWNlc3NhcnkgY29uZGl0aW9uLlxuXHRpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIG9iai5hcHBlbmQgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG9iai5kZWxldGUgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG9iai5nZXQgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG9iai5nZXRBbGwgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG9iai5oYXMgIT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIG9iai5zZXQgIT09ICdmdW5jdGlvbicpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBCcmFuZC1jaGVja2luZyBhbmQgbW9yZSBkdWNrLXR5cGluZyBhcyBvcHRpb25hbCBjb25kaXRpb24uXG5cdHJldHVybiBvYmouY29uc3RydWN0b3IubmFtZSA9PT0gJ1VSTFNlYXJjaFBhcmFtcycgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFVSTFNlYXJjaFBhcmFtc10nIHx8IHR5cGVvZiBvYmouc29ydCA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBgb2JqYCBpcyBhIFczQyBgQmxvYmAgb2JqZWN0ICh3aGljaCBgRmlsZWAgaW5oZXJpdHMgZnJvbSlcbiAqIEBwYXJhbSAgeyp9IG9ialxuICogQHJldHVybiB7Ym9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNCbG9iKG9iaikge1xuXHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9iai5hcnJheUJ1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnR5cGUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBvYmouc3RyZWFtID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5uYW1lID09PSAnc3RyaW5nJyAmJiAvXihCbG9ifEZpbGUpJC8udGVzdChvYmouY29uc3RydWN0b3IubmFtZSkgJiYgL14oQmxvYnxGaWxlKSQvLnRlc3Qob2JqW1N5bWJvbC50b1N0cmluZ1RhZ10pO1xufVxuXG4vKipcbiAqIENsb25lIGJvZHkgZ2l2ZW4gUmVzL1JlcSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSAgIE1peGVkICBpbnN0YW5jZSAgUmVzcG9uc2Ugb3IgUmVxdWVzdCBpbnN0YW5jZVxuICogQHJldHVybiAgTWl4ZWRcbiAqL1xuZnVuY3Rpb24gY2xvbmUoaW5zdGFuY2UpIHtcblx0bGV0IHAxLCBwMjtcblx0bGV0IGJvZHkgPSBpbnN0YW5jZS5ib2R5O1xuXG5cdC8vIGRvbid0IGFsbG93IGNsb25pbmcgYSB1c2VkIGJvZHlcblx0aWYgKGluc3RhbmNlLmJvZHlVc2VkKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdjYW5ub3QgY2xvbmUgYm9keSBhZnRlciBpdCBpcyB1c2VkJyk7XG5cdH1cblxuXHQvLyBjaGVjayB0aGF0IGJvZHkgaXMgYSBzdHJlYW0gYW5kIG5vdCBmb3JtLWRhdGEgb2JqZWN0XG5cdC8vIG5vdGU6IHdlIGNhbid0IGNsb25lIHRoZSBmb3JtLWRhdGEgb2JqZWN0IHdpdGhvdXQgaGF2aW5nIGl0IGFzIGEgZGVwZW5kZW5jeVxuXHRpZiAoYm9keSBpbnN0YW5jZW9mIFN0cmVhbSAmJiB0eXBlb2YgYm9keS5nZXRCb3VuZGFyeSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIHRlZSBpbnN0YW5jZSBib2R5XG5cdFx0cDEgPSBuZXcgUGFzc1Rocm91Z2goKTtcblx0XHRwMiA9IG5ldyBQYXNzVGhyb3VnaCgpO1xuXHRcdGJvZHkucGlwZShwMSk7XG5cdFx0Ym9keS5waXBlKHAyKTtcblx0XHQvLyBzZXQgaW5zdGFuY2UgYm9keSB0byB0ZWVkIGJvZHkgYW5kIHJldHVybiB0aGUgb3RoZXIgdGVlZCBib2R5XG5cdFx0aW5zdGFuY2VbSU5URVJOQUxTXS5ib2R5ID0gcDE7XG5cdFx0Ym9keSA9IHAyO1xuXHR9XG5cblx0cmV0dXJuIGJvZHk7XG59XG5cbi8qKlxuICogUGVyZm9ybXMgdGhlIG9wZXJhdGlvbiBcImV4dHJhY3QgYSBgQ29udGVudC1UeXBlYCB2YWx1ZSBmcm9tIHxvYmplY3R8XCIgYXNcbiAqIHNwZWNpZmllZCBpbiB0aGUgc3BlY2lmaWNhdGlvbjpcbiAqIGh0dHBzOi8vZmV0Y2guc3BlYy53aGF0d2cub3JnLyNjb25jZXB0LWJvZHlpbml0LWV4dHJhY3RcbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFzc3VtZXMgdGhhdCBpbnN0YW5jZS5ib2R5IGlzIHByZXNlbnQuXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgIGluc3RhbmNlICBBbnkgb3B0aW9ucy5ib2R5IGlucHV0XG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RDb250ZW50VHlwZShib2R5KSB7XG5cdGlmIChib2R5ID09PSBudWxsKSB7XG5cdFx0Ly8gYm9keSBpcyBudWxsXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG5cdFx0Ly8gYm9keSBpcyBzdHJpbmdcblx0XHRyZXR1cm4gJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCc7XG5cdH0gZWxzZSBpZiAoaXNVUkxTZWFyY2hQYXJhbXMoYm9keSkpIHtcblx0XHQvLyBib2R5IGlzIGEgVVJMU2VhcmNoUGFyYW1zXG5cdFx0cmV0dXJuICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCc7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0Ly8gYm9keSBpcyBibG9iXG5cdFx0cmV0dXJuIGJvZHkudHlwZSB8fCBudWxsO1xuXHR9IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYnVmZmVyXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGJvZHkpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nKSB7XG5cdFx0Ly8gYm9keSBpcyBBcnJheUJ1ZmZlclxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2UgaWYgKEFycmF5QnVmZmVyLmlzVmlldyhib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgQXJyYXlCdWZmZXJWaWV3XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGJvZHkuZ2V0Qm91bmRhcnkgPT09ICdmdW5jdGlvbicpIHtcblx0XHQvLyBkZXRlY3QgZm9ybSBkYXRhIGlucHV0IGZyb20gZm9ybS1kYXRhIG1vZHVsZVxuXHRcdHJldHVybiBgbXVsdGlwYXJ0L2Zvcm0tZGF0YTtib3VuZGFyeT0ke2JvZHkuZ2V0Qm91bmRhcnkoKX1gO1xuXHR9IGVsc2UgaWYgKGJvZHkgaW5zdGFuY2VvZiBTdHJlYW0pIHtcblx0XHQvLyBib2R5IGlzIHN0cmVhbVxuXHRcdC8vIGNhbid0IHJlYWxseSBkbyBtdWNoIGFib3V0IHRoaXNcblx0XHRyZXR1cm4gbnVsbDtcblx0fSBlbHNlIHtcblx0XHQvLyBCb2R5IGNvbnN0cnVjdG9yIGRlZmF1bHRzIG90aGVyIHRoaW5ncyB0byBzdHJpbmdcblx0XHRyZXR1cm4gJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCc7XG5cdH1cbn1cblxuLyoqXG4gKiBUaGUgRmV0Y2ggU3RhbmRhcmQgdHJlYXRzIHRoaXMgYXMgaWYgXCJ0b3RhbCBieXRlc1wiIGlzIGEgcHJvcGVydHkgb24gdGhlIGJvZHkuXG4gKiBGb3IgdXMsIHdlIGhhdmUgdG8gZXhwbGljaXRseSBnZXQgaXQgd2l0aCBhIGZ1bmN0aW9uLlxuICpcbiAqIHJlZjogaHR0cHM6Ly9mZXRjaC5zcGVjLndoYXR3Zy5vcmcvI2NvbmNlcHQtYm9keS10b3RhbC1ieXRlc1xuICpcbiAqIEBwYXJhbSAgIEJvZHkgICAgaW5zdGFuY2UgICBJbnN0YW5jZSBvZiBCb2R5XG4gKiBAcmV0dXJuICBOdW1iZXI/ICAgICAgICAgICAgTnVtYmVyIG9mIGJ5dGVzLCBvciBudWxsIGlmIG5vdCBwb3NzaWJsZVxuICovXG5mdW5jdGlvbiBnZXRUb3RhbEJ5dGVzKGluc3RhbmNlKSB7XG5cdGNvbnN0IGJvZHkgPSBpbnN0YW5jZS5ib2R5O1xuXG5cblx0aWYgKGJvZHkgPT09IG51bGwpIHtcblx0XHQvLyBib2R5IGlzIG51bGxcblx0XHRyZXR1cm4gMDtcblx0fSBlbHNlIGlmIChpc0Jsb2IoYm9keSkpIHtcblx0XHRyZXR1cm4gYm9keS5zaXplO1xuXHR9IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYnVmZmVyXG5cdFx0cmV0dXJuIGJvZHkubGVuZ3RoO1xuXHR9IGVsc2UgaWYgKGJvZHkgJiYgdHlwZW9mIGJvZHkuZ2V0TGVuZ3RoU3luYyA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdC8vIGRldGVjdCBmb3JtIGRhdGEgaW5wdXQgZnJvbSBmb3JtLWRhdGEgbW9kdWxlXG5cdFx0aWYgKGJvZHkuX2xlbmd0aFJldHJpZXZlcnMgJiYgYm9keS5fbGVuZ3RoUmV0cmlldmVycy5sZW5ndGggPT0gMCB8fCAvLyAxLnhcblx0XHRib2R5Lmhhc0tub3duTGVuZ3RoICYmIGJvZHkuaGFzS25vd25MZW5ndGgoKSkge1xuXHRcdFx0Ly8gMi54XG5cdFx0XHRyZXR1cm4gYm9keS5nZXRMZW5ndGhTeW5jKCk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGJvZHkgaXMgc3RyZWFtXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuLyoqXG4gKiBXcml0ZSBhIEJvZHkgdG8gYSBOb2RlLmpzIFdyaXRhYmxlU3RyZWFtIChlLmcuIGh0dHAuUmVxdWVzdCkgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSAgIEJvZHkgICAgaW5zdGFuY2UgICBJbnN0YW5jZSBvZiBCb2R5XG4gKiBAcmV0dXJuICBWb2lkXG4gKi9cbmZ1bmN0aW9uIHdyaXRlVG9TdHJlYW0oZGVzdCwgaW5zdGFuY2UpIHtcblx0Y29uc3QgYm9keSA9IGluc3RhbmNlLmJvZHk7XG5cblxuXHRpZiAoYm9keSA9PT0gbnVsbCkge1xuXHRcdC8vIGJvZHkgaXMgbnVsbFxuXHRcdGRlc3QuZW5kKCk7XG5cdH0gZWxzZSBpZiAoaXNCbG9iKGJvZHkpKSB7XG5cdFx0Ym9keS5zdHJlYW0oKS5waXBlKGRlc3QpO1xuXHR9IGVsc2UgaWYgKEJ1ZmZlci5pc0J1ZmZlcihib2R5KSkge1xuXHRcdC8vIGJvZHkgaXMgYnVmZmVyXG5cdFx0ZGVzdC53cml0ZShib2R5KTtcblx0XHRkZXN0LmVuZCgpO1xuXHR9IGVsc2Uge1xuXHRcdC8vIGJvZHkgaXMgc3RyZWFtXG5cdFx0Ym9keS5waXBlKGRlc3QpO1xuXHR9XG59XG5cbi8vIGV4cG9zZSBQcm9taXNlXG5Cb2R5LlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcblxuLyoqXG4gKiBoZWFkZXJzLmpzXG4gKlxuICogSGVhZGVycyBjbGFzcyBvZmZlcnMgY29udmVuaWVudCBoZWxwZXJzXG4gKi9cblxuY29uc3QgaW52YWxpZFRva2VuUmVnZXggPSAvW15cXF5fYGEtekEtWlxcLTAtOSEjJCUmJyorLnx+XS87XG5jb25zdCBpbnZhbGlkSGVhZGVyQ2hhclJlZ2V4ID0gL1teXFx0XFx4MjAtXFx4N2VcXHg4MC1cXHhmZl0vO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWUobmFtZSkge1xuXHRuYW1lID0gYCR7bmFtZX1gO1xuXHRpZiAoaW52YWxpZFRva2VuUmVnZXgudGVzdChuYW1lKSB8fCBuYW1lID09PSAnJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYCR7bmFtZX0gaXMgbm90IGEgbGVnYWwgSFRUUCBoZWFkZXIgbmFtZWApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlVmFsdWUodmFsdWUpIHtcblx0dmFsdWUgPSBgJHt2YWx1ZX1gO1xuXHRpZiAoaW52YWxpZEhlYWRlckNoYXJSZWdleC50ZXN0KHZhbHVlKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYCR7dmFsdWV9IGlzIG5vdCBhIGxlZ2FsIEhUVFAgaGVhZGVyIHZhbHVlYCk7XG5cdH1cbn1cblxuLyoqXG4gKiBGaW5kIHRoZSBrZXkgaW4gdGhlIG1hcCBvYmplY3QgZ2l2ZW4gYSBoZWFkZXIgbmFtZS5cbiAqXG4gKiBSZXR1cm5zIHVuZGVmaW5lZCBpZiBub3QgZm91bmQuXG4gKlxuICogQHBhcmFtICAgU3RyaW5nICBuYW1lICBIZWFkZXIgbmFtZVxuICogQHJldHVybiAgU3RyaW5nfFVuZGVmaW5lZFxuICovXG5mdW5jdGlvbiBmaW5kKG1hcCwgbmFtZSkge1xuXHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRmb3IgKGNvbnN0IGtleSBpbiBtYXApIHtcblx0XHRpZiAoa2V5LnRvTG93ZXJDYXNlKCkgPT09IG5hbWUpIHtcblx0XHRcdHJldHVybiBrZXk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmNvbnN0IE1BUCA9IFN5bWJvbCgnbWFwJyk7XG5jbGFzcyBIZWFkZXJzIHtcblx0LyoqXG4gICogSGVhZGVycyBjbGFzc1xuICAqXG4gICogQHBhcmFtICAgT2JqZWN0ICBoZWFkZXJzICBSZXNwb25zZSBoZWFkZXJzXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRsZXQgaW5pdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkO1xuXG5cdFx0dGhpc1tNQVBdID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuXHRcdGlmIChpbml0IGluc3RhbmNlb2YgSGVhZGVycykge1xuXHRcdFx0Y29uc3QgcmF3SGVhZGVycyA9IGluaXQucmF3KCk7XG5cdFx0XHRjb25zdCBoZWFkZXJOYW1lcyA9IE9iamVjdC5rZXlzKHJhd0hlYWRlcnMpO1xuXG5cdFx0XHRmb3IgKGNvbnN0IGhlYWRlck5hbWUgb2YgaGVhZGVyTmFtZXMpIHtcblx0XHRcdFx0Zm9yIChjb25zdCB2YWx1ZSBvZiByYXdIZWFkZXJzW2hlYWRlck5hbWVdKSB7XG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQoaGVhZGVyTmFtZSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBXZSBkb24ndCB3b3JyeSBhYm91dCBjb252ZXJ0aW5nIHByb3AgdG8gQnl0ZVN0cmluZyBoZXJlIGFzIGFwcGVuZCgpXG5cdFx0Ly8gd2lsbCBoYW5kbGUgaXQuXG5cdFx0aWYgKGluaXQgPT0gbnVsbCkgOyBlbHNlIGlmICh0eXBlb2YgaW5pdCA9PT0gJ29iamVjdCcpIHtcblx0XHRcdGNvbnN0IG1ldGhvZCA9IGluaXRbU3ltYm9sLml0ZXJhdG9yXTtcblx0XHRcdGlmIChtZXRob2QgIT0gbnVsbCkge1xuXHRcdFx0XHRpZiAodHlwZW9mIG1ldGhvZCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0hlYWRlciBwYWlycyBtdXN0IGJlIGl0ZXJhYmxlJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBzZXF1ZW5jZTxzZXF1ZW5jZTxCeXRlU3RyaW5nPj5cblx0XHRcdFx0Ly8gTm90ZTogcGVyIHNwZWMgd2UgaGF2ZSB0byBmaXJzdCBleGhhdXN0IHRoZSBsaXN0cyB0aGVuIHByb2Nlc3MgdGhlbVxuXHRcdFx0XHRjb25zdCBwYWlycyA9IFtdO1xuXHRcdFx0XHRmb3IgKGNvbnN0IHBhaXIgb2YgaW5pdCkge1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcGFpciAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHBhaXJbU3ltYm9sLml0ZXJhdG9yXSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRWFjaCBoZWFkZXIgcGFpciBtdXN0IGJlIGl0ZXJhYmxlJyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBhaXJzLnB1c2goQXJyYXkuZnJvbShwYWlyKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRmb3IgKGNvbnN0IHBhaXIgb2YgcGFpcnMpIHtcblx0XHRcdFx0XHRpZiAocGFpci5sZW5ndGggIT09IDIpIHtcblx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0VhY2ggaGVhZGVyIHBhaXIgbXVzdCBiZSBhIG5hbWUvdmFsdWUgdHVwbGUnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dGhpcy5hcHBlbmQocGFpclswXSwgcGFpclsxXSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIHJlY29yZDxCeXRlU3RyaW5nLCBCeXRlU3RyaW5nPlxuXHRcdFx0XHRmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhpbml0KSkge1xuXHRcdFx0XHRcdGNvbnN0IHZhbHVlID0gaW5pdFtrZXldO1xuXHRcdFx0XHRcdHRoaXMuYXBwZW5kKGtleSwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3ZpZGVkIGluaXRpYWxpemVyIG11c3QgYmUgYW4gb2JqZWN0Jyk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG4gICogUmV0dXJuIGNvbWJpbmVkIGhlYWRlciB2YWx1ZSBnaXZlbiBuYW1lXG4gICpcbiAgKiBAcGFyYW0gICBTdHJpbmcgIG5hbWUgIEhlYWRlciBuYW1lXG4gICogQHJldHVybiAgTWl4ZWRcbiAgKi9cblx0Z2V0KG5hbWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbGlkYXRlTmFtZShuYW1lKTtcblx0XHRjb25zdCBrZXkgPSBmaW5kKHRoaXNbTUFQXSwgbmFtZSk7XG5cdFx0aWYgKGtleSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpc1tNQVBdW2tleV0uam9pbignLCAnKTtcblx0fVxuXG5cdC8qKlxuICAqIEl0ZXJhdGUgb3ZlciBhbGwgaGVhZGVyc1xuICAqXG4gICogQHBhcmFtICAgRnVuY3Rpb24gIGNhbGxiYWNrICBFeGVjdXRlZCBmb3IgZWFjaCBpdGVtIHdpdGggcGFyYW1ldGVycyAodmFsdWUsIG5hbWUsIHRoaXNBcmcpXG4gICogQHBhcmFtICAgQm9vbGVhbiAgIHRoaXNBcmcgICBgdGhpc2AgY29udGV4dCBmb3IgY2FsbGJhY2sgZnVuY3Rpb25cbiAgKiBAcmV0dXJuICBWb2lkXG4gICovXG5cdGZvckVhY2goY2FsbGJhY2spIHtcblx0XHRsZXQgdGhpc0FyZyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkO1xuXG5cdFx0bGV0IHBhaXJzID0gZ2V0SGVhZGVycyh0aGlzKTtcblx0XHRsZXQgaSA9IDA7XG5cdFx0d2hpbGUgKGkgPCBwYWlycy5sZW5ndGgpIHtcblx0XHRcdHZhciBfcGFpcnMkaSA9IHBhaXJzW2ldO1xuXHRcdFx0Y29uc3QgbmFtZSA9IF9wYWlycyRpWzBdLFxuXHRcdFx0ICAgICAgdmFsdWUgPSBfcGFpcnMkaVsxXTtcblxuXHRcdFx0Y2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgbmFtZSwgdGhpcyk7XG5cdFx0XHRwYWlycyA9IGdldEhlYWRlcnModGhpcyk7XG5cdFx0XHRpKys7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG4gICogT3ZlcndyaXRlIGhlYWRlciB2YWx1ZXMgZ2l2ZW4gbmFtZVxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICBuYW1lICAgSGVhZGVyIG5hbWVcbiAgKiBAcGFyYW0gICBTdHJpbmcgIHZhbHVlICBIZWFkZXIgdmFsdWVcbiAgKiBAcmV0dXJuICBWb2lkXG4gICovXG5cdHNldChuYW1lLCB2YWx1ZSkge1xuXHRcdG5hbWUgPSBgJHtuYW1lfWA7XG5cdFx0dmFsdWUgPSBgJHt2YWx1ZX1gO1xuXHRcdHZhbGlkYXRlTmFtZShuYW1lKTtcblx0XHR2YWxpZGF0ZVZhbHVlKHZhbHVlKTtcblx0XHRjb25zdCBrZXkgPSBmaW5kKHRoaXNbTUFQXSwgbmFtZSk7XG5cdFx0dGhpc1tNQVBdW2tleSAhPT0gdW5kZWZpbmVkID8ga2V5IDogbmFtZV0gPSBbdmFsdWVdO1xuXHR9XG5cblx0LyoqXG4gICogQXBwZW5kIGEgdmFsdWUgb250byBleGlzdGluZyBoZWFkZXJcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgIEhlYWRlciBuYW1lXG4gICogQHBhcmFtICAgU3RyaW5nICB2YWx1ZSAgSGVhZGVyIHZhbHVlXG4gICogQHJldHVybiAgVm9pZFxuICAqL1xuXHRhcHBlbmQobmFtZSwgdmFsdWUpIHtcblx0XHRuYW1lID0gYCR7bmFtZX1gO1xuXHRcdHZhbHVlID0gYCR7dmFsdWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0dmFsaWRhdGVWYWx1ZSh2YWx1ZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0dGhpc1tNQVBdW2tleV0ucHVzaCh2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXNbTUFQXVtuYW1lXSA9IFt2YWx1ZV07XG5cdFx0fVxuXHR9XG5cblx0LyoqXG4gICogQ2hlY2sgZm9yIGhlYWRlciBuYW1lIGV4aXN0ZW5jZVxuICAqXG4gICogQHBhcmFtICAgU3RyaW5nICAgbmFtZSAgSGVhZGVyIG5hbWVcbiAgKiBAcmV0dXJuICBCb29sZWFuXG4gICovXG5cdGhhcyhuYW1lKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0cmV0dXJuIGZpbmQodGhpc1tNQVBdLCBuYW1lKSAhPT0gdW5kZWZpbmVkO1xuXHR9XG5cblx0LyoqXG4gICogRGVsZXRlIGFsbCBoZWFkZXIgdmFsdWVzIGdpdmVuIG5hbWVcbiAgKlxuICAqIEBwYXJhbSAgIFN0cmluZyAgbmFtZSAgSGVhZGVyIG5hbWVcbiAgKiBAcmV0dXJuICBWb2lkXG4gICovXG5cdGRlbGV0ZShuYW1lKSB7XG5cdFx0bmFtZSA9IGAke25hbWV9YDtcblx0XHR2YWxpZGF0ZU5hbWUobmFtZSk7XG5cdFx0Y29uc3Qga2V5ID0gZmluZCh0aGlzW01BUF0sIG5hbWUpO1xuXHRcdGlmIChrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0ZGVsZXRlIHRoaXNbTUFQXVtrZXldO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuICAqIFJldHVybiByYXcgaGVhZGVycyAobm9uLXNwZWMgYXBpKVxuICAqXG4gICogQHJldHVybiAgT2JqZWN0XG4gICovXG5cdHJhdygpIHtcblx0XHRyZXR1cm4gdGhpc1tNQVBdO1xuXHR9XG5cblx0LyoqXG4gICogR2V0IGFuIGl0ZXJhdG9yIG9uIGtleXMuXG4gICpcbiAgKiBAcmV0dXJuICBJdGVyYXRvclxuICAqL1xuXHRrZXlzKCkge1xuXHRcdHJldHVybiBjcmVhdGVIZWFkZXJzSXRlcmF0b3IodGhpcywgJ2tleScpO1xuXHR9XG5cblx0LyoqXG4gICogR2V0IGFuIGl0ZXJhdG9yIG9uIHZhbHVlcy5cbiAgKlxuICAqIEByZXR1cm4gIEl0ZXJhdG9yXG4gICovXG5cdHZhbHVlcygpIHtcblx0XHRyZXR1cm4gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRoaXMsICd2YWx1ZScpO1xuXHR9XG5cblx0LyoqXG4gICogR2V0IGFuIGl0ZXJhdG9yIG9uIGVudHJpZXMuXG4gICpcbiAgKiBUaGlzIGlzIHRoZSBkZWZhdWx0IGl0ZXJhdG9yIG9mIHRoZSBIZWFkZXJzIG9iamVjdC5cbiAgKlxuICAqIEByZXR1cm4gIEl0ZXJhdG9yXG4gICovXG5cdFtTeW1ib2wuaXRlcmF0b3JdKCkge1xuXHRcdHJldHVybiBjcmVhdGVIZWFkZXJzSXRlcmF0b3IodGhpcywgJ2tleSt2YWx1ZScpO1xuXHR9XG59XG5IZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhlYWRlcnMucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdIZWFkZXJzJyxcblx0d3JpdGFibGU6IGZhbHNlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoSGVhZGVycy5wcm90b3R5cGUsIHtcblx0Z2V0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0Zm9yRWFjaDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHNldDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGFwcGVuZDogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGhhczogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGRlbGV0ZTogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGtleXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHR2YWx1ZXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRlbnRyaWVzOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbmZ1bmN0aW9uIGdldEhlYWRlcnMoaGVhZGVycykge1xuXHRsZXQga2luZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogJ2tleSt2YWx1ZSc7XG5cblx0Y29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGhlYWRlcnNbTUFQXSkuc29ydCgpO1xuXHRyZXR1cm4ga2V5cy5tYXAoa2luZCA9PT0gJ2tleScgPyBmdW5jdGlvbiAoaykge1xuXHRcdHJldHVybiBrLnRvTG93ZXJDYXNlKCk7XG5cdH0gOiBraW5kID09PSAndmFsdWUnID8gZnVuY3Rpb24gKGspIHtcblx0XHRyZXR1cm4gaGVhZGVyc1tNQVBdW2tdLmpvaW4oJywgJyk7XG5cdH0gOiBmdW5jdGlvbiAoaykge1xuXHRcdHJldHVybiBbay50b0xvd2VyQ2FzZSgpLCBoZWFkZXJzW01BUF1ba10uam9pbignLCAnKV07XG5cdH0pO1xufVxuXG5jb25zdCBJTlRFUk5BTCA9IFN5bWJvbCgnaW50ZXJuYWwnKTtcblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyc0l0ZXJhdG9yKHRhcmdldCwga2luZCkge1xuXHRjb25zdCBpdGVyYXRvciA9IE9iamVjdC5jcmVhdGUoSGVhZGVyc0l0ZXJhdG9yUHJvdG90eXBlKTtcblx0aXRlcmF0b3JbSU5URVJOQUxdID0ge1xuXHRcdHRhcmdldCxcblx0XHRraW5kLFxuXHRcdGluZGV4OiAwXG5cdH07XG5cdHJldHVybiBpdGVyYXRvcjtcbn1cblxuY29uc3QgSGVhZGVyc0l0ZXJhdG9yUHJvdG90eXBlID0gT2JqZWN0LnNldFByb3RvdHlwZU9mKHtcblx0bmV4dCgpIHtcblx0XHQvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcblx0XHRpZiAoIXRoaXMgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMpICE9PSBIZWFkZXJzSXRlcmF0b3JQcm90b3R5cGUpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIG9mIGB0aGlzYCBpcyBub3QgYSBIZWFkZXJzSXRlcmF0b3InKTtcblx0XHR9XG5cblx0XHR2YXIgX0lOVEVSTkFMID0gdGhpc1tJTlRFUk5BTF07XG5cdFx0Y29uc3QgdGFyZ2V0ID0gX0lOVEVSTkFMLnRhcmdldCxcblx0XHQgICAgICBraW5kID0gX0lOVEVSTkFMLmtpbmQsXG5cdFx0ICAgICAgaW5kZXggPSBfSU5URVJOQUwuaW5kZXg7XG5cblx0XHRjb25zdCB2YWx1ZXMgPSBnZXRIZWFkZXJzKHRhcmdldCwga2luZCk7XG5cdFx0Y29uc3QgbGVuID0gdmFsdWVzLmxlbmd0aDtcblx0XHRpZiAoaW5kZXggPj0gbGVuKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHR2YWx1ZTogdW5kZWZpbmVkLFxuXHRcdFx0XHRkb25lOiB0cnVlXG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdHRoaXNbSU5URVJOQUxdLmluZGV4ID0gaW5kZXggKyAxO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHZhbHVlOiB2YWx1ZXNbaW5kZXhdLFxuXHRcdFx0ZG9uZTogZmFsc2Vcblx0XHR9O1xuXHR9XG59LCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT2JqZWN0LmdldFByb3RvdHlwZU9mKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkpKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEhlYWRlcnNJdGVyYXRvclByb3RvdHlwZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG5cdHZhbHVlOiAnSGVhZGVyc0l0ZXJhdG9yJyxcblx0d3JpdGFibGU6IGZhbHNlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuLyoqXG4gKiBFeHBvcnQgdGhlIEhlYWRlcnMgb2JqZWN0IGluIGEgZm9ybSB0aGF0IE5vZGUuanMgY2FuIGNvbnN1bWUuXG4gKlxuICogQHBhcmFtICAgSGVhZGVycyAgaGVhZGVyc1xuICogQHJldHVybiAgT2JqZWN0XG4gKi9cbmZ1bmN0aW9uIGV4cG9ydE5vZGVDb21wYXRpYmxlSGVhZGVycyhoZWFkZXJzKSB7XG5cdGNvbnN0IG9iaiA9IE9iamVjdC5hc3NpZ24oeyBfX3Byb3RvX186IG51bGwgfSwgaGVhZGVyc1tNQVBdKTtcblxuXHQvLyBodHRwLnJlcXVlc3QoKSBvbmx5IHN1cHBvcnRzIHN0cmluZyBhcyBIb3N0IGhlYWRlci4gVGhpcyBoYWNrIG1ha2VzXG5cdC8vIHNwZWNpZnlpbmcgY3VzdG9tIEhvc3QgaGVhZGVyIHBvc3NpYmxlLlxuXHRjb25zdCBob3N0SGVhZGVyS2V5ID0gZmluZChoZWFkZXJzW01BUF0sICdIb3N0Jyk7XG5cdGlmIChob3N0SGVhZGVyS2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHRvYmpbaG9zdEhlYWRlcktleV0gPSBvYmpbaG9zdEhlYWRlcktleV1bMF07XG5cdH1cblxuXHRyZXR1cm4gb2JqO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIEhlYWRlcnMgb2JqZWN0IGZyb20gYW4gb2JqZWN0IG9mIGhlYWRlcnMsIGlnbm9yaW5nIHRob3NlIHRoYXQgZG9cbiAqIG5vdCBjb25mb3JtIHRvIEhUVFAgZ3JhbW1hciBwcm9kdWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0gICBPYmplY3QgIG9iaiAgT2JqZWN0IG9mIGhlYWRlcnNcbiAqIEByZXR1cm4gIEhlYWRlcnNcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSGVhZGVyc0xlbmllbnQob2JqKSB7XG5cdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuXHRmb3IgKGNvbnN0IG5hbWUgb2YgT2JqZWN0LmtleXMob2JqKSkge1xuXHRcdGlmIChpbnZhbGlkVG9rZW5SZWdleC50ZXN0KG5hbWUpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKEFycmF5LmlzQXJyYXkob2JqW25hbWVdKSkge1xuXHRcdFx0Zm9yIChjb25zdCB2YWwgb2Ygb2JqW25hbWVdKSB7XG5cdFx0XHRcdGlmIChpbnZhbGlkSGVhZGVyQ2hhclJlZ2V4LnRlc3QodmFsKSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChoZWFkZXJzW01BUF1bbmFtZV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdGhlYWRlcnNbTUFQXVtuYW1lXSA9IFt2YWxdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGhlYWRlcnNbTUFQXVtuYW1lXS5wdXNoKHZhbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKCFpbnZhbGlkSGVhZGVyQ2hhclJlZ2V4LnRlc3Qob2JqW25hbWVdKSkge1xuXHRcdFx0aGVhZGVyc1tNQVBdW25hbWVdID0gW29ialtuYW1lXV07XG5cdFx0fVxuXHR9XG5cdHJldHVybiBoZWFkZXJzO1xufVxuXG5jb25zdCBJTlRFUk5BTFMkMSA9IFN5bWJvbCgnUmVzcG9uc2UgaW50ZXJuYWxzJyk7XG5cbi8vIGZpeCBhbiBpc3N1ZSB3aGVyZSBcIlNUQVRVU19DT0RFU1wiIGFyZW4ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IFNUQVRVU19DT0RFUyA9IGh0dHAuU1RBVFVTX0NPREVTO1xuXG4vKipcbiAqIFJlc3BvbnNlIGNsYXNzXG4gKlxuICogQHBhcmFtICAgU3RyZWFtICBib2R5ICBSZWFkYWJsZSBzdHJlYW1cbiAqIEBwYXJhbSAgIE9iamVjdCAgb3B0cyAgUmVzcG9uc2Ugb3B0aW9uc1xuICogQHJldHVybiAgVm9pZFxuICovXG5jbGFzcyBSZXNwb25zZSB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGxldCBib2R5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBudWxsO1xuXHRcdGxldCBvcHRzID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuXHRcdEJvZHkuY2FsbCh0aGlzLCBib2R5LCBvcHRzKTtcblxuXHRcdGNvbnN0IHN0YXR1cyA9IG9wdHMuc3RhdHVzIHx8IDIwMDtcblx0XHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0cy5oZWFkZXJzKTtcblxuXHRcdGlmIChib2R5ICE9IG51bGwgJiYgIWhlYWRlcnMuaGFzKCdDb250ZW50LVR5cGUnKSkge1xuXHRcdFx0Y29uc3QgY29udGVudFR5cGUgPSBleHRyYWN0Q29udGVudFR5cGUoYm9keSk7XG5cdFx0XHRpZiAoY29udGVudFR5cGUpIHtcblx0XHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsIGNvbnRlbnRUeXBlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHR0aGlzW0lOVEVSTkFMUyQxXSA9IHtcblx0XHRcdHVybDogb3B0cy51cmwsXG5cdFx0XHRzdGF0dXMsXG5cdFx0XHRzdGF0dXNUZXh0OiBvcHRzLnN0YXR1c1RleHQgfHwgU1RBVFVTX0NPREVTW3N0YXR1c10sXG5cdFx0XHRoZWFkZXJzLFxuXHRcdFx0Y291bnRlcjogb3B0cy5jb3VudGVyXG5cdFx0fTtcblx0fVxuXG5cdGdldCB1cmwoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLnVybCB8fCAnJztcblx0fVxuXG5cdGdldCBzdGF0dXMoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1cztcblx0fVxuXG5cdC8qKlxuICAqIENvbnZlbmllbmNlIHByb3BlcnR5IHJlcHJlc2VudGluZyBpZiB0aGUgcmVxdWVzdCBlbmRlZCBub3JtYWxseVxuICAqL1xuXHRnZXQgb2soKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1cyA+PSAyMDAgJiYgdGhpc1tJTlRFUk5BTFMkMV0uc3RhdHVzIDwgMzAwO1xuXHR9XG5cblx0Z2V0IHJlZGlyZWN0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLmNvdW50ZXIgPiAwO1xuXHR9XG5cblx0Z2V0IHN0YXR1c1RleHQoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDFdLnN0YXR1c1RleHQ7XG5cdH1cblxuXHRnZXQgaGVhZGVycygpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMV0uaGVhZGVycztcblx0fVxuXG5cdC8qKlxuICAqIENsb25lIHRoaXMgcmVzcG9uc2VcbiAgKlxuICAqIEByZXR1cm4gIFJlc3BvbnNlXG4gICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUmVzcG9uc2UoY2xvbmUodGhpcyksIHtcblx0XHRcdHVybDogdGhpcy51cmwsXG5cdFx0XHRzdGF0dXM6IHRoaXMuc3RhdHVzLFxuXHRcdFx0c3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuXHRcdFx0aGVhZGVyczogdGhpcy5oZWFkZXJzLFxuXHRcdFx0b2s6IHRoaXMub2ssXG5cdFx0XHRyZWRpcmVjdGVkOiB0aGlzLnJlZGlyZWN0ZWRcblx0XHR9KTtcblx0fVxufVxuXG5Cb2R5Lm1peEluKFJlc3BvbnNlLnByb3RvdHlwZSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFJlc3BvbnNlLnByb3RvdHlwZSwge1xuXHR1cmw6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzdGF0dXM6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRvazogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHJlZGlyZWN0ZWQ6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzdGF0dXNUZXh0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0aGVhZGVyczogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdGNsb25lOiB7IGVudW1lcmFibGU6IHRydWUgfVxufSk7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXNwb25zZS5wcm90b3R5cGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuXHR2YWx1ZTogJ1Jlc3BvbnNlJyxcblx0d3JpdGFibGU6IGZhbHNlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuY29uc3QgSU5URVJOQUxTJDIgPSBTeW1ib2woJ1JlcXVlc3QgaW50ZXJuYWxzJyk7XG5cbi8vIGZpeCBhbiBpc3N1ZSB3aGVyZSBcImZvcm1hdFwiLCBcInBhcnNlXCIgYXJlbid0IGEgbmFtZWQgZXhwb3J0IGZvciBub2RlIDwxMFxuY29uc3QgcGFyc2VfdXJsID0gVXJsLnBhcnNlO1xuY29uc3QgZm9ybWF0X3VybCA9IFVybC5mb3JtYXQ7XG5cbmNvbnN0IHN0cmVhbURlc3RydWN0aW9uU3VwcG9ydGVkID0gJ2Rlc3Ryb3knIGluIFN0cmVhbS5SZWFkYWJsZS5wcm90b3R5cGU7XG5cbi8qKlxuICogQ2hlY2sgaWYgYSB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBSZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSAgIE1peGVkICAgaW5wdXRcbiAqIEByZXR1cm4gIEJvb2xlYW5cbiAqL1xuZnVuY3Rpb24gaXNSZXF1ZXN0KGlucHV0KSB7XG5cdHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdvYmplY3QnICYmIHR5cGVvZiBpbnB1dFtJTlRFUk5BTFMkMl0gPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0Fib3J0U2lnbmFsKHNpZ25hbCkge1xuXHRjb25zdCBwcm90byA9IHNpZ25hbCAmJiB0eXBlb2Ygc2lnbmFsID09PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc2lnbmFsKTtcblx0cmV0dXJuICEhKHByb3RvICYmIHByb3RvLmNvbnN0cnVjdG9yLm5hbWUgPT09ICdBYm9ydFNpZ25hbCcpO1xufVxuXG4vKipcbiAqIFJlcXVlc3QgY2xhc3NcbiAqXG4gKiBAcGFyYW0gICBNaXhlZCAgIGlucHV0ICBVcmwgb3IgUmVxdWVzdCBpbnN0YW5jZVxuICogQHBhcmFtICAgT2JqZWN0ICBpbml0ICAgQ3VzdG9tIG9wdGlvbnNcbiAqIEByZXR1cm4gIFZvaWRcbiAqL1xuY2xhc3MgUmVxdWVzdCB7XG5cdGNvbnN0cnVjdG9yKGlucHV0KSB7XG5cdFx0bGV0IGluaXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG5cdFx0bGV0IHBhcnNlZFVSTDtcblxuXHRcdC8vIG5vcm1hbGl6ZSBpbnB1dFxuXHRcdGlmICghaXNSZXF1ZXN0KGlucHV0KSkge1xuXHRcdFx0aWYgKGlucHV0ICYmIGlucHV0LmhyZWYpIHtcblx0XHRcdFx0Ly8gaW4gb3JkZXIgdG8gc3VwcG9ydCBOb2RlLmpzJyBVcmwgb2JqZWN0czsgdGhvdWdoIFdIQVRXRydzIFVSTCBvYmplY3RzXG5cdFx0XHRcdC8vIHdpbGwgZmFsbCBpbnRvIHRoaXMgYnJhbmNoIGFsc28gKHNpbmNlIHRoZWlyIGB0b1N0cmluZygpYCB3aWxsIHJldHVyblxuXHRcdFx0XHQvLyBgaHJlZmAgcHJvcGVydHkgYW55d2F5KVxuXHRcdFx0XHRwYXJzZWRVUkwgPSBwYXJzZV91cmwoaW5wdXQuaHJlZik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBjb2VyY2UgaW5wdXQgdG8gYSBzdHJpbmcgYmVmb3JlIGF0dGVtcHRpbmcgdG8gcGFyc2Vcblx0XHRcdFx0cGFyc2VkVVJMID0gcGFyc2VfdXJsKGAke2lucHV0fWApO1xuXHRcdFx0fVxuXHRcdFx0aW5wdXQgPSB7fTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cGFyc2VkVVJMID0gcGFyc2VfdXJsKGlucHV0LnVybCk7XG5cdFx0fVxuXG5cdFx0bGV0IG1ldGhvZCA9IGluaXQubWV0aG9kIHx8IGlucHV0Lm1ldGhvZCB8fCAnR0VUJztcblx0XHRtZXRob2QgPSBtZXRob2QudG9VcHBlckNhc2UoKTtcblxuXHRcdGlmICgoaW5pdC5ib2R5ICE9IG51bGwgfHwgaXNSZXF1ZXN0KGlucHV0KSAmJiBpbnB1dC5ib2R5ICE9PSBudWxsKSAmJiAobWV0aG9kID09PSAnR0VUJyB8fCBtZXRob2QgPT09ICdIRUFEJykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlcXVlc3Qgd2l0aCBHRVQvSEVBRCBtZXRob2QgY2Fubm90IGhhdmUgYm9keScpO1xuXHRcdH1cblxuXHRcdGxldCBpbnB1dEJvZHkgPSBpbml0LmJvZHkgIT0gbnVsbCA/IGluaXQuYm9keSA6IGlzUmVxdWVzdChpbnB1dCkgJiYgaW5wdXQuYm9keSAhPT0gbnVsbCA/IGNsb25lKGlucHV0KSA6IG51bGw7XG5cblx0XHRCb2R5LmNhbGwodGhpcywgaW5wdXRCb2R5LCB7XG5cdFx0XHR0aW1lb3V0OiBpbml0LnRpbWVvdXQgfHwgaW5wdXQudGltZW91dCB8fCAwLFxuXHRcdFx0c2l6ZTogaW5pdC5zaXplIHx8IGlucHV0LnNpemUgfHwgMFxuXHRcdH0pO1xuXG5cdFx0Y29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKGluaXQuaGVhZGVycyB8fCBpbnB1dC5oZWFkZXJzIHx8IHt9KTtcblxuXHRcdGlmIChpbnB1dEJvZHkgIT0gbnVsbCAmJiAhaGVhZGVycy5oYXMoJ0NvbnRlbnQtVHlwZScpKSB7XG5cdFx0XHRjb25zdCBjb250ZW50VHlwZSA9IGV4dHJhY3RDb250ZW50VHlwZShpbnB1dEJvZHkpO1xuXHRcdFx0aWYgKGNvbnRlbnRUeXBlKSB7XG5cdFx0XHRcdGhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCBjb250ZW50VHlwZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHNpZ25hbCA9IGlzUmVxdWVzdChpbnB1dCkgPyBpbnB1dC5zaWduYWwgOiBudWxsO1xuXHRcdGlmICgnc2lnbmFsJyBpbiBpbml0KSBzaWduYWwgPSBpbml0LnNpZ25hbDtcblxuXHRcdGlmIChzaWduYWwgIT0gbnVsbCAmJiAhaXNBYm9ydFNpZ25hbChzaWduYWwpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBzaWduYWwgdG8gYmUgYW4gaW5zdGFuY2VvZiBBYm9ydFNpZ25hbCcpO1xuXHRcdH1cblxuXHRcdHRoaXNbSU5URVJOQUxTJDJdID0ge1xuXHRcdFx0bWV0aG9kLFxuXHRcdFx0cmVkaXJlY3Q6IGluaXQucmVkaXJlY3QgfHwgaW5wdXQucmVkaXJlY3QgfHwgJ2ZvbGxvdycsXG5cdFx0XHRoZWFkZXJzLFxuXHRcdFx0cGFyc2VkVVJMLFxuXHRcdFx0c2lnbmFsXG5cdFx0fTtcblxuXHRcdC8vIG5vZGUtZmV0Y2gtb25seSBvcHRpb25zXG5cdFx0dGhpcy5mb2xsb3cgPSBpbml0LmZvbGxvdyAhPT0gdW5kZWZpbmVkID8gaW5pdC5mb2xsb3cgOiBpbnB1dC5mb2xsb3cgIT09IHVuZGVmaW5lZCA/IGlucHV0LmZvbGxvdyA6IDIwO1xuXHRcdHRoaXMuY29tcHJlc3MgPSBpbml0LmNvbXByZXNzICE9PSB1bmRlZmluZWQgPyBpbml0LmNvbXByZXNzIDogaW5wdXQuY29tcHJlc3MgIT09IHVuZGVmaW5lZCA/IGlucHV0LmNvbXByZXNzIDogdHJ1ZTtcblx0XHR0aGlzLmNvdW50ZXIgPSBpbml0LmNvdW50ZXIgfHwgaW5wdXQuY291bnRlciB8fCAwO1xuXHRcdHRoaXMuYWdlbnQgPSBpbml0LmFnZW50IHx8IGlucHV0LmFnZW50O1xuXHR9XG5cblx0Z2V0IG1ldGhvZCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0ubWV0aG9kO1xuXHR9XG5cblx0Z2V0IHVybCgpIHtcblx0XHRyZXR1cm4gZm9ybWF0X3VybCh0aGlzW0lOVEVSTkFMUyQyXS5wYXJzZWRVUkwpO1xuXHR9XG5cblx0Z2V0IGhlYWRlcnMoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDJdLmhlYWRlcnM7XG5cdH1cblxuXHRnZXQgcmVkaXJlY3QoKSB7XG5cdFx0cmV0dXJuIHRoaXNbSU5URVJOQUxTJDJdLnJlZGlyZWN0O1xuXHR9XG5cblx0Z2V0IHNpZ25hbCgpIHtcblx0XHRyZXR1cm4gdGhpc1tJTlRFUk5BTFMkMl0uc2lnbmFsO1xuXHR9XG5cblx0LyoqXG4gICogQ2xvbmUgdGhpcyByZXF1ZXN0XG4gICpcbiAgKiBAcmV0dXJuICBSZXF1ZXN0XG4gICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUmVxdWVzdCh0aGlzKTtcblx0fVxufVxuXG5Cb2R5Lm1peEluKFJlcXVlc3QucHJvdG90eXBlKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlcXVlc3QucHJvdG90eXBlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcblx0dmFsdWU6ICdSZXF1ZXN0Jyxcblx0d3JpdGFibGU6IGZhbHNlLFxuXHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0Y29uZmlndXJhYmxlOiB0cnVlXG59KTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoUmVxdWVzdC5wcm90b3R5cGUsIHtcblx0bWV0aG9kOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0dXJsOiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0aGVhZGVyczogeyBlbnVtZXJhYmxlOiB0cnVlIH0sXG5cdHJlZGlyZWN0OiB7IGVudW1lcmFibGU6IHRydWUgfSxcblx0Y2xvbmU6IHsgZW51bWVyYWJsZTogdHJ1ZSB9LFxuXHRzaWduYWw6IHsgZW51bWVyYWJsZTogdHJ1ZSB9XG59KTtcblxuLyoqXG4gKiBDb252ZXJ0IGEgUmVxdWVzdCB0byBOb2RlLmpzIGh0dHAgcmVxdWVzdCBvcHRpb25zLlxuICpcbiAqIEBwYXJhbSAgIFJlcXVlc3QgIEEgUmVxdWVzdCBpbnN0YW5jZVxuICogQHJldHVybiAgT2JqZWN0ICAgVGhlIG9wdGlvbnMgb2JqZWN0IHRvIGJlIHBhc3NlZCB0byBodHRwLnJlcXVlc3RcbiAqL1xuZnVuY3Rpb24gZ2V0Tm9kZVJlcXVlc3RPcHRpb25zKHJlcXVlc3QpIHtcblx0Y29uc3QgcGFyc2VkVVJMID0gcmVxdWVzdFtJTlRFUk5BTFMkMl0ucGFyc2VkVVJMO1xuXHRjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMocmVxdWVzdFtJTlRFUk5BTFMkMl0uaGVhZGVycyk7XG5cblx0Ly8gZmV0Y2ggc3RlcCAxLjNcblx0aWYgKCFoZWFkZXJzLmhhcygnQWNjZXB0JykpIHtcblx0XHRoZWFkZXJzLnNldCgnQWNjZXB0JywgJyovKicpO1xuXHR9XG5cblx0Ly8gQmFzaWMgZmV0Y2hcblx0aWYgKCFwYXJzZWRVUkwucHJvdG9jb2wgfHwgIXBhcnNlZFVSTC5ob3N0bmFtZSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgYWJzb2x1dGUgVVJMcyBhcmUgc3VwcG9ydGVkJyk7XG5cdH1cblxuXHRpZiAoIS9eaHR0cHM/OiQvLnRlc3QocGFyc2VkVVJMLnByb3RvY29sKSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09ubHkgSFRUUChTKSBwcm90b2NvbHMgYXJlIHN1cHBvcnRlZCcpO1xuXHR9XG5cblx0aWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3QuYm9keSBpbnN0YW5jZW9mIFN0cmVhbS5SZWFkYWJsZSAmJiAhc3RyZWFtRGVzdHJ1Y3Rpb25TdXBwb3J0ZWQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NhbmNlbGxhdGlvbiBvZiBzdHJlYW1lZCByZXF1ZXN0cyB3aXRoIEFib3J0U2lnbmFsIGlzIG5vdCBzdXBwb3J0ZWQgaW4gbm9kZSA8IDgnKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yay1vci1jYWNoZSBmZXRjaCBzdGVwcyAyLjQtMi43XG5cdGxldCBjb250ZW50TGVuZ3RoVmFsdWUgPSBudWxsO1xuXHRpZiAocmVxdWVzdC5ib2R5ID09IG51bGwgJiYgL14oUE9TVHxQVVQpJC9pLnRlc3QocmVxdWVzdC5tZXRob2QpKSB7XG5cdFx0Y29udGVudExlbmd0aFZhbHVlID0gJzAnO1xuXHR9XG5cdGlmIChyZXF1ZXN0LmJvZHkgIT0gbnVsbCkge1xuXHRcdGNvbnN0IHRvdGFsQnl0ZXMgPSBnZXRUb3RhbEJ5dGVzKHJlcXVlc3QpO1xuXHRcdGlmICh0eXBlb2YgdG90YWxCeXRlcyA9PT0gJ251bWJlcicpIHtcblx0XHRcdGNvbnRlbnRMZW5ndGhWYWx1ZSA9IFN0cmluZyh0b3RhbEJ5dGVzKTtcblx0XHR9XG5cdH1cblx0aWYgKGNvbnRlbnRMZW5ndGhWYWx1ZSkge1xuXHRcdGhlYWRlcnMuc2V0KCdDb250ZW50LUxlbmd0aCcsIGNvbnRlbnRMZW5ndGhWYWx1ZSk7XG5cdH1cblxuXHQvLyBIVFRQLW5ldHdvcmstb3ItY2FjaGUgZmV0Y2ggc3RlcCAyLjExXG5cdGlmICghaGVhZGVycy5oYXMoJ1VzZXItQWdlbnQnKSkge1xuXHRcdGhlYWRlcnMuc2V0KCdVc2VyLUFnZW50JywgJ25vZGUtZmV0Y2gvMS4wICgraHR0cHM6Ly9naXRodWIuY29tL2JpdGlubi9ub2RlLWZldGNoKScpO1xuXHR9XG5cblx0Ly8gSFRUUC1uZXR3b3JrLW9yLWNhY2hlIGZldGNoIHN0ZXAgMi4xNVxuXHRpZiAocmVxdWVzdC5jb21wcmVzcyAmJiAhaGVhZGVycy5oYXMoJ0FjY2VwdC1FbmNvZGluZycpKSB7XG5cdFx0aGVhZGVycy5zZXQoJ0FjY2VwdC1FbmNvZGluZycsICdnemlwLGRlZmxhdGUnKTtcblx0fVxuXG5cdGxldCBhZ2VudCA9IHJlcXVlc3QuYWdlbnQ7XG5cdGlmICh0eXBlb2YgYWdlbnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRhZ2VudCA9IGFnZW50KHBhcnNlZFVSTCk7XG5cdH1cblxuXHRpZiAoIWhlYWRlcnMuaGFzKCdDb25uZWN0aW9uJykgJiYgIWFnZW50KSB7XG5cdFx0aGVhZGVycy5zZXQoJ0Nvbm5lY3Rpb24nLCAnY2xvc2UnKTtcblx0fVxuXG5cdC8vIEhUVFAtbmV0d29yayBmZXRjaCBzdGVwIDQuMlxuXHQvLyBjaHVua2VkIGVuY29kaW5nIGlzIGhhbmRsZWQgYnkgTm9kZS5qc1xuXG5cdHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRVUkwsIHtcblx0XHRtZXRob2Q6IHJlcXVlc3QubWV0aG9kLFxuXHRcdGhlYWRlcnM6IGV4cG9ydE5vZGVDb21wYXRpYmxlSGVhZGVycyhoZWFkZXJzKSxcblx0XHRhZ2VudFxuXHR9KTtcbn1cblxuLyoqXG4gKiBhYm9ydC1lcnJvci5qc1xuICpcbiAqIEFib3J0RXJyb3IgaW50ZXJmYWNlIGZvciBjYW5jZWxsZWQgcmVxdWVzdHNcbiAqL1xuXG4vKipcbiAqIENyZWF0ZSBBYm9ydEVycm9yIGluc3RhbmNlXG4gKlxuICogQHBhcmFtICAgU3RyaW5nICAgICAgbWVzc2FnZSAgICAgIEVycm9yIG1lc3NhZ2UgZm9yIGh1bWFuXG4gKiBAcmV0dXJuICBBYm9ydEVycm9yXG4gKi9cbmZ1bmN0aW9uIEFib3J0RXJyb3IobWVzc2FnZSkge1xuICBFcnJvci5jYWxsKHRoaXMsIG1lc3NhZ2UpO1xuXG4gIHRoaXMudHlwZSA9ICdhYm9ydGVkJztcbiAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcblxuICAvLyBoaWRlIGN1c3RvbSBlcnJvciBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIGZyb20gZW5kLXVzZXJzXG4gIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xufVxuXG5BYm9ydEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcbkFib3J0RXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQWJvcnRFcnJvcjtcbkFib3J0RXJyb3IucHJvdG90eXBlLm5hbWUgPSAnQWJvcnRFcnJvcic7XG5cbi8vIGZpeCBhbiBpc3N1ZSB3aGVyZSBcIlBhc3NUaHJvdWdoXCIsIFwicmVzb2x2ZVwiIGFyZW4ndCBhIG5hbWVkIGV4cG9ydCBmb3Igbm9kZSA8MTBcbmNvbnN0IFBhc3NUaHJvdWdoJDEgPSBTdHJlYW0uUGFzc1Rocm91Z2g7XG5jb25zdCByZXNvbHZlX3VybCA9IFVybC5yZXNvbHZlO1xuXG4vKipcbiAqIEZldGNoIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtICAgTWl4ZWQgICAgdXJsICAgQWJzb2x1dGUgdXJsIG9yIFJlcXVlc3QgaW5zdGFuY2VcbiAqIEBwYXJhbSAgIE9iamVjdCAgIG9wdHMgIEZldGNoIG9wdGlvbnNcbiAqIEByZXR1cm4gIFByb21pc2VcbiAqL1xuZnVuY3Rpb24gZmV0Y2godXJsLCBvcHRzKSB7XG5cblx0Ly8gYWxsb3cgY3VzdG9tIHByb21pc2Vcblx0aWYgKCFmZXRjaC5Qcm9taXNlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCduYXRpdmUgcHJvbWlzZSBtaXNzaW5nLCBzZXQgZmV0Y2guUHJvbWlzZSB0byB5b3VyIGZhdm9yaXRlIGFsdGVybmF0aXZlJyk7XG5cdH1cblxuXHRCb2R5LlByb21pc2UgPSBmZXRjaC5Qcm9taXNlO1xuXG5cdC8vIHdyYXAgaHR0cC5yZXF1ZXN0IGludG8gZmV0Y2hcblx0cmV0dXJuIG5ldyBmZXRjaC5Qcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHQvLyBidWlsZCByZXF1ZXN0IG9iamVjdFxuXHRcdGNvbnN0IHJlcXVlc3QgPSBuZXcgUmVxdWVzdCh1cmwsIG9wdHMpO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSBnZXROb2RlUmVxdWVzdE9wdGlvbnMocmVxdWVzdCk7XG5cblx0XHRjb25zdCBzZW5kID0gKG9wdGlvbnMucHJvdG9jb2wgPT09ICdodHRwczonID8gaHR0cHMgOiBodHRwKS5yZXF1ZXN0O1xuXHRcdGNvbnN0IHNpZ25hbCA9IHJlcXVlc3Quc2lnbmFsO1xuXG5cdFx0bGV0IHJlc3BvbnNlID0gbnVsbDtcblxuXHRcdGNvbnN0IGFib3J0ID0gZnVuY3Rpb24gYWJvcnQoKSB7XG5cdFx0XHRsZXQgZXJyb3IgPSBuZXcgQWJvcnRFcnJvcignVGhlIHVzZXIgYWJvcnRlZCBhIHJlcXVlc3QuJyk7XG5cdFx0XHRyZWplY3QoZXJyb3IpO1xuXHRcdFx0aWYgKHJlcXVlc3QuYm9keSAmJiByZXF1ZXN0LmJvZHkgaW5zdGFuY2VvZiBTdHJlYW0uUmVhZGFibGUpIHtcblx0XHRcdFx0cmVxdWVzdC5ib2R5LmRlc3Ryb3koZXJyb3IpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuYm9keSkgcmV0dXJuO1xuXHRcdFx0cmVzcG9uc2UuYm9keS5lbWl0KCdlcnJvcicsIGVycm9yKTtcblx0XHR9O1xuXG5cdFx0aWYgKHNpZ25hbCAmJiBzaWduYWwuYWJvcnRlZCkge1xuXHRcdFx0YWJvcnQoKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBhYm9ydEFuZEZpbmFsaXplID0gZnVuY3Rpb24gYWJvcnRBbmRGaW5hbGl6ZSgpIHtcblx0XHRcdGFib3J0KCk7XG5cdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdH07XG5cblx0XHQvLyBzZW5kIHJlcXVlc3Rcblx0XHRjb25zdCByZXEgPSBzZW5kKG9wdGlvbnMpO1xuXHRcdGxldCByZXFUaW1lb3V0O1xuXG5cdFx0aWYgKHNpZ25hbCkge1xuXHRcdFx0c2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRBbmRGaW5hbGl6ZSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZmluYWxpemUoKSB7XG5cdFx0XHRyZXEuYWJvcnQoKTtcblx0XHRcdGlmIChzaWduYWwpIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHJlcVRpbWVvdXQpO1xuXHRcdH1cblxuXHRcdGlmIChyZXF1ZXN0LnRpbWVvdXQpIHtcblx0XHRcdHJlcS5vbmNlKCdzb2NrZXQnLCBmdW5jdGlvbiAoc29ja2V0KSB7XG5cdFx0XHRcdHJlcVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoYG5ldHdvcmsgdGltZW91dCBhdDogJHtyZXF1ZXN0LnVybH1gLCAncmVxdWVzdC10aW1lb3V0JykpO1xuXHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdH0sIHJlcXVlc3QudGltZW91dCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXEub24oJ2Vycm9yJywgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0cmVqZWN0KG5ldyBGZXRjaEVycm9yKGByZXF1ZXN0IHRvICR7cmVxdWVzdC51cmx9IGZhaWxlZCwgcmVhc29uOiAke2Vyci5tZXNzYWdlfWAsICdzeXN0ZW0nLCBlcnIpKTtcblx0XHRcdGZpbmFsaXplKCk7XG5cdFx0fSk7XG5cblx0XHRyZXEub24oJ3Jlc3BvbnNlJywgZnVuY3Rpb24gKHJlcykge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHJlcVRpbWVvdXQpO1xuXG5cdFx0XHRjb25zdCBoZWFkZXJzID0gY3JlYXRlSGVhZGVyc0xlbmllbnQocmVzLmhlYWRlcnMpO1xuXG5cdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNVxuXHRcdFx0aWYgKGZldGNoLmlzUmVkaXJlY3QocmVzLnN0YXR1c0NvZGUpKSB7XG5cdFx0XHRcdC8vIEhUVFAgZmV0Y2ggc3RlcCA1LjJcblx0XHRcdFx0Y29uc3QgbG9jYXRpb24gPSBoZWFkZXJzLmdldCgnTG9jYXRpb24nKTtcblxuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS4zXG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uVVJMID0gbG9jYXRpb24gPT09IG51bGwgPyBudWxsIDogcmVzb2x2ZV91cmwocmVxdWVzdC51cmwsIGxvY2F0aW9uKTtcblxuXHRcdFx0XHQvLyBIVFRQIGZldGNoIHN0ZXAgNS41XG5cdFx0XHRcdHN3aXRjaCAocmVxdWVzdC5yZWRpcmVjdCkge1xuXHRcdFx0XHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgcmVkaXJlY3QgbW9kZSBpcyBzZXQgdG8gZXJyb3I6ICR7cmVxdWVzdC51cmx9YCwgJ25vLXJlZGlyZWN0JykpO1xuXHRcdFx0XHRcdFx0ZmluYWxpemUoKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRjYXNlICdtYW51YWwnOlxuXHRcdFx0XHRcdFx0Ly8gbm9kZS1mZXRjaC1zcGVjaWZpYyBzdGVwOiBtYWtlIG1hbnVhbCByZWRpcmVjdCBhIGJpdCBlYXNpZXIgdG8gdXNlIGJ5IHNldHRpbmcgdGhlIExvY2F0aW9uIGhlYWRlciB2YWx1ZSB0byB0aGUgcmVzb2x2ZWQgVVJMLlxuXHRcdFx0XHRcdFx0aWYgKGxvY2F0aW9uVVJMICE9PSBudWxsKSB7XG5cdFx0XHRcdFx0XHRcdC8vIGhhbmRsZSBjb3JydXB0ZWQgaGVhZGVyXG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0aGVhZGVycy5zZXQoJ0xvY2F0aW9uJywgbG9jYXRpb25VUkwpO1xuXHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dDogbm9kZWpzIHNlcnZlciBwcmV2ZW50IGludmFsaWQgcmVzcG9uc2UgaGVhZGVycywgd2UgY2FuJ3QgdGVzdCB0aGlzIHRocm91Z2ggbm9ybWFsIHJlcXVlc3Rcblx0XHRcdFx0XHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAnZm9sbG93Jzpcblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCAyXG5cdFx0XHRcdFx0XHRpZiAobG9jYXRpb25VUkwgPT09IG51bGwpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCA1XG5cdFx0XHRcdFx0XHRpZiAocmVxdWVzdC5jb3VudGVyID49IHJlcXVlc3QuZm9sbG93KSB7XG5cdFx0XHRcdFx0XHRcdHJlamVjdChuZXcgRmV0Y2hFcnJvcihgbWF4aW11bSByZWRpcmVjdCByZWFjaGVkIGF0OiAke3JlcXVlc3QudXJsfWAsICdtYXgtcmVkaXJlY3QnKSk7XG5cdFx0XHRcdFx0XHRcdGZpbmFsaXplKCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSFRUUC1yZWRpcmVjdCBmZXRjaCBzdGVwIDYgKGNvdW50ZXIgaW5jcmVtZW50KVxuXHRcdFx0XHRcdFx0Ly8gQ3JlYXRlIGEgbmV3IFJlcXVlc3Qgb2JqZWN0LlxuXHRcdFx0XHRcdFx0Y29uc3QgcmVxdWVzdE9wdHMgPSB7XG5cdFx0XHRcdFx0XHRcdGhlYWRlcnM6IG5ldyBIZWFkZXJzKHJlcXVlc3QuaGVhZGVycyksXG5cdFx0XHRcdFx0XHRcdGZvbGxvdzogcmVxdWVzdC5mb2xsb3csXG5cdFx0XHRcdFx0XHRcdGNvdW50ZXI6IHJlcXVlc3QuY291bnRlciArIDEsXG5cdFx0XHRcdFx0XHRcdGFnZW50OiByZXF1ZXN0LmFnZW50LFxuXHRcdFx0XHRcdFx0XHRjb21wcmVzczogcmVxdWVzdC5jb21wcmVzcyxcblx0XHRcdFx0XHRcdFx0bWV0aG9kOiByZXF1ZXN0Lm1ldGhvZCxcblx0XHRcdFx0XHRcdFx0Ym9keTogcmVxdWVzdC5ib2R5LFxuXHRcdFx0XHRcdFx0XHRzaWduYWw6IHJlcXVlc3Quc2lnbmFsLFxuXHRcdFx0XHRcdFx0XHR0aW1lb3V0OiByZXF1ZXN0LnRpbWVvdXRcblx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCA5XG5cdFx0XHRcdFx0XHRpZiAocmVzLnN0YXR1c0NvZGUgIT09IDMwMyAmJiByZXF1ZXN0LmJvZHkgJiYgZ2V0VG90YWxCeXRlcyhyZXF1ZXN0KSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0XHRyZWplY3QobmV3IEZldGNoRXJyb3IoJ0Nhbm5vdCBmb2xsb3cgcmVkaXJlY3Qgd2l0aCBib2R5IGJlaW5nIGEgcmVhZGFibGUgc3RyZWFtJywgJ3Vuc3VwcG9ydGVkLXJlZGlyZWN0JykpO1xuXHRcdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCAxMVxuXHRcdFx0XHRcdFx0aWYgKHJlcy5zdGF0dXNDb2RlID09PSAzMDMgfHwgKHJlcy5zdGF0dXNDb2RlID09PSAzMDEgfHwgcmVzLnN0YXR1c0NvZGUgPT09IDMwMikgJiYgcmVxdWVzdC5tZXRob2QgPT09ICdQT1NUJykge1xuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0T3B0cy5tZXRob2QgPSAnR0VUJztcblx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdHMuYm9keSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0cmVxdWVzdE9wdHMuaGVhZGVycy5kZWxldGUoJ2NvbnRlbnQtbGVuZ3RoJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEhUVFAtcmVkaXJlY3QgZmV0Y2ggc3RlcCAxNVxuXHRcdFx0XHRcdFx0cmVzb2x2ZShmZXRjaChuZXcgUmVxdWVzdChsb2NhdGlvblVSTCwgcmVxdWVzdE9wdHMpKSk7XG5cdFx0XHRcdFx0XHRmaW5hbGl6ZSgpO1xuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByZXBhcmUgcmVzcG9uc2Vcblx0XHRcdHJlcy5vbmNlKCdlbmQnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGlmIChzaWduYWwpIHNpZ25hbC5yZW1vdmVFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFib3J0QW5kRmluYWxpemUpO1xuXHRcdFx0fSk7XG5cdFx0XHRsZXQgYm9keSA9IHJlcy5waXBlKG5ldyBQYXNzVGhyb3VnaCQxKCkpO1xuXG5cdFx0XHRjb25zdCByZXNwb25zZV9vcHRpb25zID0ge1xuXHRcdFx0XHR1cmw6IHJlcXVlc3QudXJsLFxuXHRcdFx0XHRzdGF0dXM6IHJlcy5zdGF0dXNDb2RlLFxuXHRcdFx0XHRzdGF0dXNUZXh0OiByZXMuc3RhdHVzTWVzc2FnZSxcblx0XHRcdFx0aGVhZGVyczogaGVhZGVycyxcblx0XHRcdFx0c2l6ZTogcmVxdWVzdC5zaXplLFxuXHRcdFx0XHR0aW1lb3V0OiByZXF1ZXN0LnRpbWVvdXQsXG5cdFx0XHRcdGNvdW50ZXI6IHJlcXVlc3QuY291bnRlclxuXHRcdFx0fTtcblxuXHRcdFx0Ly8gSFRUUC1uZXR3b3JrIGZldGNoIHN0ZXAgMTIuMS4xLjNcblx0XHRcdGNvbnN0IGNvZGluZ3MgPSBoZWFkZXJzLmdldCgnQ29udGVudC1FbmNvZGluZycpO1xuXG5cdFx0XHQvLyBIVFRQLW5ldHdvcmsgZmV0Y2ggc3RlcCAxMi4xLjEuNDogaGFuZGxlIGNvbnRlbnQgY29kaW5nc1xuXG5cdFx0XHQvLyBpbiBmb2xsb3dpbmcgc2NlbmFyaW9zIHdlIGlnbm9yZSBjb21wcmVzc2lvbiBzdXBwb3J0XG5cdFx0XHQvLyAxLiBjb21wcmVzc2lvbiBzdXBwb3J0IGlzIGRpc2FibGVkXG5cdFx0XHQvLyAyLiBIRUFEIHJlcXVlc3Rcblx0XHRcdC8vIDMuIG5vIENvbnRlbnQtRW5jb2RpbmcgaGVhZGVyXG5cdFx0XHQvLyA0LiBubyBjb250ZW50IHJlc3BvbnNlICgyMDQpXG5cdFx0XHQvLyA1LiBjb250ZW50IG5vdCBtb2RpZmllZCByZXNwb25zZSAoMzA0KVxuXHRcdFx0aWYgKCFyZXF1ZXN0LmNvbXByZXNzIHx8IHJlcXVlc3QubWV0aG9kID09PSAnSEVBRCcgfHwgY29kaW5ncyA9PT0gbnVsbCB8fCByZXMuc3RhdHVzQ29kZSA9PT0gMjA0IHx8IHJlcy5zdGF0dXNDb2RlID09PSAzMDQpIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRcdHJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvciBOb2RlIHY2K1xuXHRcdFx0Ly8gQmUgbGVzcyBzdHJpY3Qgd2hlbiBkZWNvZGluZyBjb21wcmVzc2VkIHJlc3BvbnNlcywgc2luY2Ugc29tZXRpbWVzXG5cdFx0XHQvLyBzZXJ2ZXJzIHNlbmQgc2xpZ2h0bHkgaW52YWxpZCByZXNwb25zZXMgdGhhdCBhcmUgc3RpbGwgYWNjZXB0ZWRcblx0XHRcdC8vIGJ5IGNvbW1vbiBicm93c2Vycy5cblx0XHRcdC8vIEFsd2F5cyB1c2luZyBaX1NZTkNfRkxVU0ggaXMgd2hhdCBjVVJMIGRvZXMuXG5cdFx0XHRjb25zdCB6bGliT3B0aW9ucyA9IHtcblx0XHRcdFx0Zmx1c2g6IHpsaWIuWl9TWU5DX0ZMVVNILFxuXHRcdFx0XHRmaW5pc2hGbHVzaDogemxpYi5aX1NZTkNfRkxVU0hcblx0XHRcdH07XG5cblx0XHRcdC8vIGZvciBnemlwXG5cdFx0XHRpZiAoY29kaW5ncyA9PSAnZ3ppcCcgfHwgY29kaW5ncyA9PSAneC1nemlwJykge1xuXHRcdFx0XHRib2R5ID0gYm9keS5waXBlKHpsaWIuY3JlYXRlR3VuemlwKHpsaWJPcHRpb25zKSk7XG5cdFx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3BvbnNlKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBmb3IgZGVmbGF0ZVxuXHRcdFx0aWYgKGNvZGluZ3MgPT0gJ2RlZmxhdGUnIHx8IGNvZGluZ3MgPT0gJ3gtZGVmbGF0ZScpIHtcblx0XHRcdFx0Ly8gaGFuZGxlIHRoZSBpbmZhbW91cyByYXcgZGVmbGF0ZSByZXNwb25zZSBmcm9tIG9sZCBzZXJ2ZXJzXG5cdFx0XHRcdC8vIGEgaGFjayBmb3Igb2xkIElJUyBhbmQgQXBhY2hlIHNlcnZlcnNcblx0XHRcdFx0Y29uc3QgcmF3ID0gcmVzLnBpcGUobmV3IFBhc3NUaHJvdWdoJDEoKSk7XG5cdFx0XHRcdHJhdy5vbmNlKCdkYXRhJywgZnVuY3Rpb24gKGNodW5rKSB7XG5cdFx0XHRcdFx0Ly8gc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzc1MTk4Mjhcblx0XHRcdFx0XHRpZiAoKGNodW5rWzBdICYgMHgwRikgPT09IDB4MDgpIHtcblx0XHRcdFx0XHRcdGJvZHkgPSBib2R5LnBpcGUoemxpYi5jcmVhdGVJbmZsYXRlKCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRib2R5ID0gYm9keS5waXBlKHpsaWIuY3JlYXRlSW5mbGF0ZVJhdygpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVzcG9uc2UgPSBuZXcgUmVzcG9uc2UoYm9keSwgcmVzcG9uc2Vfb3B0aW9ucyk7XG5cdFx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIGZvciBiclxuXHRcdFx0aWYgKGNvZGluZ3MgPT0gJ2JyJyAmJiB0eXBlb2YgemxpYi5jcmVhdGVCcm90bGlEZWNvbXByZXNzID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGJvZHkgPSBib2R5LnBpcGUoemxpYi5jcmVhdGVCcm90bGlEZWNvbXByZXNzKCkpO1xuXHRcdFx0XHRyZXNwb25zZSA9IG5ldyBSZXNwb25zZShib2R5LCByZXNwb25zZV9vcHRpb25zKTtcblx0XHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gb3RoZXJ3aXNlLCB1c2UgcmVzcG9uc2UgYXMtaXNcblx0XHRcdHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKGJvZHksIHJlc3BvbnNlX29wdGlvbnMpO1xuXHRcdFx0cmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSk7XG5cblx0XHR3cml0ZVRvU3RyZWFtKHJlcSwgcmVxdWVzdCk7XG5cdH0pO1xufVxuLyoqXG4gKiBSZWRpcmVjdCBjb2RlIG1hdGNoaW5nXG4gKlxuICogQHBhcmFtICAgTnVtYmVyICAgY29kZSAgU3RhdHVzIGNvZGVcbiAqIEByZXR1cm4gIEJvb2xlYW5cbiAqL1xuZmV0Y2guaXNSZWRpcmVjdCA9IGZ1bmN0aW9uIChjb2RlKSB7XG5cdHJldHVybiBjb2RlID09PSAzMDEgfHwgY29kZSA9PT0gMzAyIHx8IGNvZGUgPT09IDMwMyB8fCBjb2RlID09PSAzMDcgfHwgY29kZSA9PT0gMzA4O1xufTtcblxuLy8gZXhwb3NlIFByb21pc2VcbmZldGNoLlByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcblxuZnVuY3Rpb24gZ2V0X3BhZ2VfaGFuZGxlcihcblx0bWFuaWZlc3QsXG5cdHNlc3Npb25fZ2V0dGVyXG4pIHtcblx0Y29uc3QgZ2V0X2J1aWxkX2luZm8gPSBkZXZcblx0XHQ/ICgpID0+IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihidWlsZF9kaXIsICdidWlsZC5qc29uJyksICd1dGYtOCcpKVxuXHRcdDogKGFzc2V0cyA9PiAoKSA9PiBhc3NldHMpKEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihidWlsZF9kaXIsICdidWlsZC5qc29uJyksICd1dGYtOCcpKSk7XG5cblx0Y29uc3QgdGVtcGxhdGUgPSBkZXZcblx0XHQ/ICgpID0+IHJlYWRfdGVtcGxhdGUoc3JjX2Rpcilcblx0XHQ6IChzdHIgPT4gKCkgPT4gc3RyKShyZWFkX3RlbXBsYXRlKGJ1aWxkX2RpcikpO1xuXG5cdGNvbnN0IGhhc19zZXJ2aWNlX3dvcmtlciA9IGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ3NlcnZpY2Utd29ya2VyLmpzJykpO1xuXG5cdGNvbnN0IHsgc2VydmVyX3JvdXRlcywgcGFnZXMgfSA9IG1hbmlmZXN0O1xuXHRjb25zdCBlcnJvcl9yb3V0ZSA9IG1hbmlmZXN0LmVycm9yO1xuXG5cdGZ1bmN0aW9uIGJhaWwocmVxLCByZXMsIGVycikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuXHRcdGNvbnN0IG1lc3NhZ2UgPSBkZXYgPyBlc2NhcGVfaHRtbChlcnIubWVzc2FnZSkgOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJztcblxuXHRcdHJlcy5zdGF0dXNDb2RlID0gNTAwO1xuXHRcdHJlcy5lbmQoYDxwcmU+JHttZXNzYWdlfTwvcHJlPmApO1xuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlX2Vycm9yKHJlcSwgcmVzLCBzdGF0dXNDb2RlLCBlcnJvcikge1xuXHRcdGhhbmRsZV9wYWdlKHtcblx0XHRcdHBhdHRlcm46IG51bGwsXG5cdFx0XHRwYXJ0czogW1xuXHRcdFx0XHR7IG5hbWU6IG51bGwsIGNvbXBvbmVudDogZXJyb3Jfcm91dGUgfVxuXHRcdFx0XVxuXHRcdH0sIHJlcSwgcmVzLCBzdGF0dXNDb2RlLCBlcnJvciB8fCBuZXcgRXJyb3IoJ1Vua25vd24gZXJyb3IgaW4gcHJlbG9hZCBmdW5jdGlvbicpKTtcblx0fVxuXG5cdGFzeW5jIGZ1bmN0aW9uIGhhbmRsZV9wYWdlKHBhZ2UsIHJlcSwgcmVzLCBzdGF0dXMgPSAyMDAsIGVycm9yID0gbnVsbCkge1xuXHRcdGNvbnN0IGlzX3NlcnZpY2Vfd29ya2VyX2luZGV4ID0gcmVxLnBhdGggPT09ICcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCc7XG5cdFx0Y29uc3QgYnVpbGRfaW5mb1xuXG5cblxuXG4gPSBnZXRfYnVpbGRfaW5mbygpO1xuXG5cdFx0cmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQvaHRtbCcpO1xuXHRcdHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCBkZXYgPyAnbm8tY2FjaGUnIDogJ21heC1hZ2U9NjAwJyk7XG5cblx0XHQvLyBwcmVsb2FkIG1haW4uanMgYW5kIGN1cnJlbnQgcm91dGVcblx0XHQvLyBUT0RPIGRldGVjdCBvdGhlciBzdHVmZiB3ZSBjYW4gcHJlbG9hZD8gaW1hZ2VzLCBDU1MsIGZvbnRzP1xuXHRcdGxldCBwcmVsb2FkZWRfY2h1bmtzID0gQXJyYXkuaXNBcnJheShidWlsZF9pbmZvLmFzc2V0cy5tYWluKSA/IGJ1aWxkX2luZm8uYXNzZXRzLm1haW4gOiBbYnVpbGRfaW5mby5hc3NldHMubWFpbl07XG5cdFx0aWYgKCFlcnJvciAmJiAhaXNfc2VydmljZV93b3JrZXJfaW5kZXgpIHtcblx0XHRcdHBhZ2UucGFydHMuZm9yRWFjaChwYXJ0ID0+IHtcblx0XHRcdFx0aWYgKCFwYXJ0KSByZXR1cm47XG5cblx0XHRcdFx0Ly8gdXNpbmcgY29uY2F0IGJlY2F1c2UgaXQgY291bGQgYmUgYSBzdHJpbmcgb3IgYW4gYXJyYXkuIHRoYW5rcyB3ZWJwYWNrIVxuXHRcdFx0XHRwcmVsb2FkZWRfY2h1bmtzID0gcHJlbG9hZGVkX2NodW5rcy5jb25jYXQoYnVpbGRfaW5mby5hc3NldHNbcGFydC5uYW1lXSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoYnVpbGRfaW5mby5idW5kbGVyID09PSAncm9sbHVwJykge1xuXHRcdFx0Ly8gVE9ETyBhZGQgZGVwZW5kZW5jaWVzIGFuZCBDU1Ncblx0XHRcdGNvbnN0IGxpbmsgPSBwcmVsb2FkZWRfY2h1bmtzXG5cdFx0XHRcdC5maWx0ZXIoZmlsZSA9PiBmaWxlICYmICFmaWxlLm1hdGNoKC9cXC5tYXAkLykpXG5cdFx0XHRcdC5tYXAoZmlsZSA9PiBgPCR7cmVxLmJhc2VVcmx9L2NsaWVudC8ke2ZpbGV9PjtyZWw9XCJtb2R1bGVwcmVsb2FkXCJgKVxuXHRcdFx0XHQuam9pbignLCAnKTtcblxuXHRcdFx0cmVzLnNldEhlYWRlcignTGluaycsIGxpbmspO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zdCBsaW5rID0gcHJlbG9hZGVkX2NodW5rc1xuXHRcdFx0XHQuZmlsdGVyKGZpbGUgPT4gZmlsZSAmJiAhZmlsZS5tYXRjaCgvXFwubWFwJC8pKVxuXHRcdFx0XHQubWFwKChmaWxlKSA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgYXMgPSAvXFwuY3NzJC8udGVzdChmaWxlKSA/ICdzdHlsZScgOiAnc2NyaXB0Jztcblx0XHRcdFx0XHRyZXR1cm4gYDwke3JlcS5iYXNlVXJsfS9jbGllbnQvJHtmaWxlfT47cmVsPVwicHJlbG9hZFwiO2FzPVwiJHthc31cImA7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5qb2luKCcsICcpO1xuXG5cdFx0XHRyZXMuc2V0SGVhZGVyKCdMaW5rJywgbGluayk7XG5cdFx0fVxuXG5cdFx0bGV0IHNlc3Npb247XG5cdFx0dHJ5IHtcblx0XHRcdHNlc3Npb24gPSBhd2FpdCBzZXNzaW9uX2dldHRlcihyZXEsIHJlcyk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRyZXR1cm4gYmFpbChyZXEsIHJlcywgZXJyKTtcblx0XHR9XG5cblx0XHRsZXQgcmVkaXJlY3Q7XG5cdFx0bGV0IHByZWxvYWRfZXJyb3I7XG5cblx0XHRjb25zdCBwcmVsb2FkX2NvbnRleHQgPSB7XG5cdFx0XHRyZWRpcmVjdDogKHN0YXR1c0NvZGUsIGxvY2F0aW9uKSA9PiB7XG5cdFx0XHRcdGlmIChyZWRpcmVjdCAmJiAocmVkaXJlY3Quc3RhdHVzQ29kZSAhPT0gc3RhdHVzQ29kZSB8fCByZWRpcmVjdC5sb2NhdGlvbiAhPT0gbG9jYXRpb24pKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBDb25mbGljdGluZyByZWRpcmVjdHNgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsb2NhdGlvbiA9IGxvY2F0aW9uLnJlcGxhY2UoL15cXC8vZywgJycpOyAvLyBsZWFkaW5nIHNsYXNoIChvbmx5KVxuXHRcdFx0XHRyZWRpcmVjdCA9IHsgc3RhdHVzQ29kZSwgbG9jYXRpb24gfTtcblx0XHRcdH0sXG5cdFx0XHRlcnJvcjogKHN0YXR1c0NvZGUsIG1lc3NhZ2UpID0+IHtcblx0XHRcdFx0cHJlbG9hZF9lcnJvciA9IHsgc3RhdHVzQ29kZSwgbWVzc2FnZSB9O1xuXHRcdFx0fSxcblx0XHRcdGZldGNoOiAodXJsLCBvcHRzKSA9PiB7XG5cdFx0XHRcdGNvbnN0IHBhcnNlZCA9IG5ldyBVcmwuVVJMKHVybCwgYGh0dHA6Ly8xMjcuMC4wLjE6JHtwcm9jZXNzLmVudi5QT1JUfSR7cmVxLmJhc2VVcmwgPyByZXEuYmFzZVVybCArICcvJyA6Jyd9YCk7XG5cblx0XHRcdFx0b3B0cyA9IE9iamVjdC5hc3NpZ24oe30sIG9wdHMpO1xuXG5cdFx0XHRcdGNvbnN0IGluY2x1ZGVfY3JlZGVudGlhbHMgPSAoXG5cdFx0XHRcdFx0b3B0cy5jcmVkZW50aWFscyA9PT0gJ2luY2x1ZGUnIHx8XG5cdFx0XHRcdFx0b3B0cy5jcmVkZW50aWFscyAhPT0gJ29taXQnICYmIHBhcnNlZC5vcmlnaW4gPT09IGBodHRwOi8vMTI3LjAuMC4xOiR7cHJvY2Vzcy5lbnYuUE9SVH1gXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0aWYgKGluY2x1ZGVfY3JlZGVudGlhbHMpIHtcblx0XHRcdFx0XHRvcHRzLmhlYWRlcnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRzLmhlYWRlcnMpO1xuXG5cdFx0XHRcdFx0Y29uc3QgY29va2llcyA9IE9iamVjdC5hc3NpZ24oXG5cdFx0XHRcdFx0XHR7fSxcblx0XHRcdFx0XHRcdGNvb2tpZS5wYXJzZShyZXEuaGVhZGVycy5jb29raWUgfHwgJycpLFxuXHRcdFx0XHRcdFx0Y29va2llLnBhcnNlKG9wdHMuaGVhZGVycy5jb29raWUgfHwgJycpXG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdGNvbnN0IHNldF9jb29raWUgPSByZXMuZ2V0SGVhZGVyKCdTZXQtQ29va2llJyk7XG5cdFx0XHRcdFx0KEFycmF5LmlzQXJyYXkoc2V0X2Nvb2tpZSkgPyBzZXRfY29va2llIDogW3NldF9jb29raWVdKS5mb3JFYWNoKHN0ciA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBtYXRjaCA9IC8oW149XSspPShbXjtdKykvLmV4ZWMoc3RyKTtcblx0XHRcdFx0XHRcdGlmIChtYXRjaCkgY29va2llc1ttYXRjaFsxXV0gPSBtYXRjaFsyXTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdGNvbnN0IHN0ciA9IE9iamVjdC5rZXlzKGNvb2tpZXMpXG5cdFx0XHRcdFx0XHQubWFwKGtleSA9PiBgJHtrZXl9PSR7Y29va2llc1trZXldfWApXG5cdFx0XHRcdFx0XHQuam9pbignOyAnKTtcblxuXHRcdFx0XHRcdG9wdHMuaGVhZGVycy5jb29raWUgPSBzdHI7XG5cblx0XHRcdFx0XHRpZiAoIW9wdHMuaGVhZGVycy5hdXRob3JpemF0aW9uICYmIHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pIHtcblx0XHRcdFx0XHRcdG9wdHMuaGVhZGVycy5hdXRob3JpemF0aW9uID0gcmVxLmhlYWRlcnMuYXV0aG9yaXphdGlvbjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZmV0Y2gocGFyc2VkLmhyZWYsIG9wdHMpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRsZXQgcHJlbG9hZGVkO1xuXHRcdGxldCBtYXRjaDtcblx0XHRsZXQgcGFyYW1zO1xuXG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHJvb3RfcHJlbG9hZGVkID0gbWFuaWZlc3Qucm9vdF9wcmVsb2FkXG5cdFx0XHRcdD8gbWFuaWZlc3Qucm9vdF9wcmVsb2FkLmNhbGwocHJlbG9hZF9jb250ZXh0LCB7XG5cdFx0XHRcdFx0aG9zdDogcmVxLmhlYWRlcnMuaG9zdCxcblx0XHRcdFx0XHRwYXRoOiByZXEucGF0aCxcblx0XHRcdFx0XHRxdWVyeTogcmVxLnF1ZXJ5LFxuXHRcdFx0XHRcdHBhcmFtczoge31cblx0XHRcdFx0fSwgc2Vzc2lvbilcblx0XHRcdFx0OiB7fTtcblxuXHRcdFx0bWF0Y2ggPSBlcnJvciA/IG51bGwgOiBwYWdlLnBhdHRlcm4uZXhlYyhyZXEucGF0aCk7XG5cblxuXHRcdFx0bGV0IHRvUHJlbG9hZCA9IFtyb290X3ByZWxvYWRlZF07XG5cdFx0XHRpZiAoIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XG5cdFx0XHRcdHRvUHJlbG9hZCA9IHRvUHJlbG9hZC5jb25jYXQocGFnZS5wYXJ0cy5tYXAocGFydCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFwYXJ0KSByZXR1cm4gbnVsbDtcblxuXHRcdFx0XHRcdC8vIHRoZSBkZWVwZXN0IGxldmVsIGlzIHVzZWQgYmVsb3csIHRvIGluaXRpYWxpc2UgdGhlIHN0b3JlXG5cdFx0XHRcdFx0cGFyYW1zID0gcGFydC5wYXJhbXMgPyBwYXJ0LnBhcmFtcyhtYXRjaCkgOiB7fTtcblxuXHRcdFx0XHRcdHJldHVybiBwYXJ0LnByZWxvYWRcblx0XHRcdFx0XHRcdD8gcGFydC5wcmVsb2FkLmNhbGwocHJlbG9hZF9jb250ZXh0LCB7XG5cdFx0XHRcdFx0XHRcdGhvc3Q6IHJlcS5oZWFkZXJzLmhvc3QsXG5cdFx0XHRcdFx0XHRcdHBhdGg6IHJlcS5wYXRoLFxuXHRcdFx0XHRcdFx0XHRxdWVyeTogcmVxLnF1ZXJ5LFxuXHRcdFx0XHRcdFx0XHRwYXJhbXNcblx0XHRcdFx0XHRcdH0sIHNlc3Npb24pXG5cdFx0XHRcdFx0XHQ6IHt9O1xuXHRcdFx0XHR9KSk7XG5cdFx0XHR9XG5cblx0XHRcdHByZWxvYWRlZCA9IGF3YWl0IFByb21pc2UuYWxsKHRvUHJlbG9hZCk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdFx0cmV0dXJuIGJhaWwocmVxLCByZXMsIGVycilcblx0XHRcdH1cblxuXHRcdFx0cHJlbG9hZF9lcnJvciA9IHsgc3RhdHVzQ29kZTogNTAwLCBtZXNzYWdlOiBlcnIgfTtcblx0XHRcdHByZWxvYWRlZCA9IFtdOyAvLyBhcHBlYXNlIFR5cGVTY3JpcHRcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0aWYgKHJlZGlyZWN0KSB7XG5cdFx0XHRcdGNvbnN0IGxvY2F0aW9uID0gVXJsLnJlc29sdmUoKHJlcS5iYXNlVXJsIHx8ICcnKSArICcvJywgcmVkaXJlY3QubG9jYXRpb24pO1xuXG5cdFx0XHRcdHJlcy5zdGF0dXNDb2RlID0gcmVkaXJlY3Quc3RhdHVzQ29kZTtcblx0XHRcdFx0cmVzLnNldEhlYWRlcignTG9jYXRpb24nLCBsb2NhdGlvbik7XG5cdFx0XHRcdHJlcy5lbmQoKTtcblxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcmVsb2FkX2Vycm9yKSB7XG5cdFx0XHRcdGhhbmRsZV9lcnJvcihyZXEsIHJlcywgcHJlbG9hZF9lcnJvci5zdGF0dXNDb2RlLCBwcmVsb2FkX2Vycm9yLm1lc3NhZ2UpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHNlZ21lbnRzID0gcmVxLnBhdGguc3BsaXQoJy8nKS5maWx0ZXIoQm9vbGVhbik7XG5cblx0XHRcdC8vIFRPRE8gbWFrZSB0aGlzIGxlc3MgY29uZnVzaW5nXG5cdFx0XHRjb25zdCBsYXlvdXRfc2VnbWVudHMgPSBbc2VnbWVudHNbMF1dO1xuXHRcdFx0bGV0IGwgPSAxO1xuXG5cdFx0XHRwYWdlLnBhcnRzLmZvckVhY2goKHBhcnQsIGkpID0+IHtcblx0XHRcdFx0bGF5b3V0X3NlZ21lbnRzW2xdID0gc2VnbWVudHNbaSArIDFdO1xuXHRcdFx0XHRpZiAoIXBhcnQpIHJldHVybiBudWxsO1xuXHRcdFx0XHRsKys7XG5cdFx0XHR9KTtcblxuXHRcdFx0Y29uc3QgcHJvcHMgPSB7XG5cdFx0XHRcdHN0b3Jlczoge1xuXHRcdFx0XHRcdHBhZ2U6IHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZTogd3JpdGFibGUoe1xuXHRcdFx0XHRcdFx0XHRob3N0OiByZXEuaGVhZGVycy5ob3N0LFxuXHRcdFx0XHRcdFx0XHRwYXRoOiByZXEucGF0aCxcblx0XHRcdFx0XHRcdFx0cXVlcnk6IHJlcS5xdWVyeSxcblx0XHRcdFx0XHRcdFx0cGFyYW1zXG5cdFx0XHRcdFx0XHR9KS5zdWJzY3JpYmVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHByZWxvYWRpbmc6IHtcblx0XHRcdFx0XHRcdHN1YnNjcmliZTogd3JpdGFibGUobnVsbCkuc3Vic2NyaWJlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRzZXNzaW9uOiB3cml0YWJsZShzZXNzaW9uKVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZWdtZW50czogbGF5b3V0X3NlZ21lbnRzLFxuXHRcdFx0XHRzdGF0dXM6IGVycm9yID8gc3RhdHVzIDogMjAwLFxuXHRcdFx0XHRlcnJvcjogZXJyb3IgPyBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiB7IG1lc3NhZ2U6IGVycm9yIH0gOiBudWxsLFxuXHRcdFx0XHRsZXZlbDA6IHtcblx0XHRcdFx0XHRwcm9wczogcHJlbG9hZGVkWzBdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGxldmVsMToge1xuXHRcdFx0XHRcdHNlZ21lbnQ6IHNlZ21lbnRzWzBdLFxuXHRcdFx0XHRcdHByb3BzOiB7fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRpZiAoIWlzX3NlcnZpY2Vfd29ya2VyX2luZGV4KSB7XG5cdFx0XHRcdGxldCBsID0gMTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwYWdlLnBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0Y29uc3QgcGFydCA9IHBhZ2UucGFydHNbaV07XG5cdFx0XHRcdFx0aWYgKCFwYXJ0KSBjb250aW51ZTtcblxuXHRcdFx0XHRcdHByb3BzW2BsZXZlbCR7bCsrfWBdID0ge1xuXHRcdFx0XHRcdFx0Y29tcG9uZW50OiBwYXJ0LmNvbXBvbmVudCxcblx0XHRcdFx0XHRcdHByb3BzOiBwcmVsb2FkZWRbaSArIDFdIHx8IHt9LFxuXHRcdFx0XHRcdFx0c2VnbWVudDogc2VnbWVudHNbaV1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IHsgaHRtbCwgaGVhZCwgY3NzIH0gPSBBcHAucmVuZGVyKHByb3BzKTtcblxuXHRcdFx0Y29uc3Qgc2VyaWFsaXplZCA9IHtcblx0XHRcdFx0cHJlbG9hZGVkOiBgWyR7cHJlbG9hZGVkLm1hcChkYXRhID0+IHRyeV9zZXJpYWxpemUoZGF0YSkpLmpvaW4oJywnKX1dYCxcblx0XHRcdFx0c2Vzc2lvbjogc2Vzc2lvbiAmJiB0cnlfc2VyaWFsaXplKHNlc3Npb24sIGVyciA9PiB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gc2VyaWFsaXplIHNlc3Npb24gZGF0YTogJHtlcnIubWVzc2FnZX1gKTtcblx0XHRcdFx0fSksXG5cdFx0XHRcdGVycm9yOiBlcnJvciAmJiBzZXJpYWxpemVfZXJyb3IocHJvcHMuZXJyb3IpXG5cdFx0XHR9O1xuXG5cdFx0XHRsZXQgc2NyaXB0ID0gYF9fU0FQUEVSX189eyR7W1xuXHRcdFx0XHRlcnJvciAmJiBgZXJyb3I6JHtzZXJpYWxpemVkLmVycm9yfSxzdGF0dXM6JHtzdGF0dXN9YCxcblx0XHRcdFx0YGJhc2VVcmw6XCIke3JlcS5iYXNlVXJsfVwiYCxcblx0XHRcdFx0c2VyaWFsaXplZC5wcmVsb2FkZWQgJiYgYHByZWxvYWRlZDoke3NlcmlhbGl6ZWQucHJlbG9hZGVkfWAsXG5cdFx0XHRcdHNlcmlhbGl6ZWQuc2Vzc2lvbiAmJiBgc2Vzc2lvbjoke3NlcmlhbGl6ZWQuc2Vzc2lvbn1gXG5cdFx0XHRdLmZpbHRlcihCb29sZWFuKS5qb2luKCcsJyl9fTtgO1xuXG5cdFx0XHRpZiAoaGFzX3NlcnZpY2Vfd29ya2VyKSB7XG5cdFx0XHRcdHNjcmlwdCArPSBgaWYoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvciluYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignJHtyZXEuYmFzZVVybH0vc2VydmljZS13b3JrZXIuanMnKTtgO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBmaWxlID0gW10uY29uY2F0KGJ1aWxkX2luZm8uYXNzZXRzLm1haW4pLmZpbHRlcihmaWxlID0+IGZpbGUgJiYgL1xcLmpzJC8udGVzdChmaWxlKSlbMF07XG5cdFx0XHRjb25zdCBtYWluID0gYCR7cmVxLmJhc2VVcmx9L2NsaWVudC8ke2ZpbGV9YDtcblxuXHRcdFx0aWYgKGJ1aWxkX2luZm8uYnVuZGxlciA9PT0gJ3JvbGx1cCcpIHtcblx0XHRcdFx0aWYgKGJ1aWxkX2luZm8ubGVnYWN5X2Fzc2V0cykge1xuXHRcdFx0XHRcdGNvbnN0IGxlZ2FjeV9tYWluID0gYCR7cmVxLmJhc2VVcmx9L2NsaWVudC9sZWdhY3kvJHtidWlsZF9pbmZvLmxlZ2FjeV9hc3NldHMubWFpbn1gO1xuXHRcdFx0XHRcdHNjcmlwdCArPSBgKGZ1bmN0aW9uKCl7dHJ5e2V2YWwoXCJhc3luYyBmdW5jdGlvbiB4KCl7fVwiKTt2YXIgbWFpbj1cIiR7bWFpbn1cIn1jYXRjaChlKXttYWluPVwiJHtsZWdhY3lfbWFpbn1cIn07dmFyIHM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTt0cnl7bmV3IEZ1bmN0aW9uKFwiaWYoMClpbXBvcnQoJycpXCIpKCk7cy5zcmM9bWFpbjtzLnR5cGU9XCJtb2R1bGVcIjtzLmNyb3NzT3JpZ2luPVwidXNlLWNyZWRlbnRpYWxzXCI7fWNhdGNoKGUpe3Muc3JjPVwiJHtyZXEuYmFzZVVybH0vY2xpZW50L3NoaW1wb3J0QCR7YnVpbGRfaW5mby5zaGltcG9ydH0uanNcIjtzLnNldEF0dHJpYnV0ZShcImRhdGEtbWFpblwiLG1haW4pO31kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHMpO30oKSk7YDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzY3JpcHQgKz0gYHZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7dHJ5e25ldyBGdW5jdGlvbihcImlmKDApaW1wb3J0KCcnKVwiKSgpO3Muc3JjPVwiJHttYWlufVwiO3MudHlwZT1cIm1vZHVsZVwiO3MuY3Jvc3NPcmlnaW49XCJ1c2UtY3JlZGVudGlhbHNcIjt9Y2F0Y2goZSl7cy5zcmM9XCIke3JlcS5iYXNlVXJsfS9jbGllbnQvc2hpbXBvcnRAJHtidWlsZF9pbmZvLnNoaW1wb3J0fS5qc1wiO3Muc2V0QXR0cmlidXRlKFwiZGF0YS1tYWluXCIsXCIke21haW59XCIpfWRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQocylgO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzY3JpcHQgKz0gYDwvc2NyaXB0PjxzY3JpcHQgc3JjPVwiJHttYWlufVwiPmA7XG5cdFx0XHR9XG5cblx0XHRcdGxldCBzdHlsZXM7XG5cblx0XHRcdC8vIFRPRE8gbWFrZSB0aGlzIGNvbnNpc3RlbnQgYWNyb3NzIGFwcHNcblx0XHRcdC8vIFRPRE8gZW1iZWQgYnVpbGRfaW5mbyBpbiBwbGFjZWhvbGRlci50c1xuXHRcdFx0aWYgKGJ1aWxkX2luZm8uY3NzICYmIGJ1aWxkX2luZm8uY3NzLm1haW4pIHtcblx0XHRcdFx0Y29uc3QgY3NzX2NodW5rcyA9IG5ldyBTZXQoKTtcblx0XHRcdFx0aWYgKGJ1aWxkX2luZm8uY3NzLm1haW4pIGNzc19jaHVua3MuYWRkKGJ1aWxkX2luZm8uY3NzLm1haW4pO1xuXHRcdFx0XHRwYWdlLnBhcnRzLmZvckVhY2gocGFydCA9PiB7XG5cdFx0XHRcdFx0aWYgKCFwYXJ0KSByZXR1cm47XG5cdFx0XHRcdFx0Y29uc3QgY3NzX2NodW5rc19mb3JfcGFydCA9IGJ1aWxkX2luZm8uY3NzLmNodW5rc1twYXJ0LmZpbGVdO1xuXG5cdFx0XHRcdFx0aWYgKGNzc19jaHVua3NfZm9yX3BhcnQpIHtcblx0XHRcdFx0XHRcdGNzc19jaHVua3NfZm9yX3BhcnQuZm9yRWFjaChmaWxlID0+IHtcblx0XHRcdFx0XHRcdFx0Y3NzX2NodW5rcy5hZGQoZmlsZSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHN0eWxlcyA9IEFycmF5LmZyb20oY3NzX2NodW5rcylcblx0XHRcdFx0XHQubWFwKGhyZWYgPT4gYDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiY2xpZW50LyR7aHJlZn1cIj5gKVxuXHRcdFx0XHRcdC5qb2luKCcnKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0eWxlcyA9IChjc3MgJiYgY3NzLmNvZGUgPyBgPHN0eWxlPiR7Y3NzLmNvZGV9PC9zdHlsZT5gIDogJycpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyB1c2VycyBjYW4gc2V0IGEgQ1NQIG5vbmNlIHVzaW5nIHJlcy5sb2NhbHMubm9uY2Vcblx0XHRcdGNvbnN0IG5vbmNlX2F0dHIgPSAocmVzLmxvY2FscyAmJiByZXMubG9jYWxzLm5vbmNlKSA/IGAgbm9uY2U9XCIke3Jlcy5sb2NhbHMubm9uY2V9XCJgIDogJyc7XG5cblx0XHRcdGNvbnN0IGJvZHkgPSB0ZW1wbGF0ZSgpXG5cdFx0XHRcdC5yZXBsYWNlKCclc2FwcGVyLmJhc2UlJywgKCkgPT4gYDxiYXNlIGhyZWY9XCIke3JlcS5iYXNlVXJsfS9cIj5gKVxuXHRcdFx0XHQucmVwbGFjZSgnJXNhcHBlci5zY3JpcHRzJScsICgpID0+IGA8c2NyaXB0JHtub25jZV9hdHRyfT4ke3NjcmlwdH08L3NjcmlwdD5gKVxuXHRcdFx0XHQucmVwbGFjZSgnJXNhcHBlci5odG1sJScsICgpID0+IGh0bWwpXG5cdFx0XHRcdC5yZXBsYWNlKCclc2FwcGVyLmhlYWQlJywgKCkgPT4gYDxub3NjcmlwdCBpZD0nc2FwcGVyLWhlYWQtc3RhcnQnPjwvbm9zY3JpcHQ+JHtoZWFkfTxub3NjcmlwdCBpZD0nc2FwcGVyLWhlYWQtZW5kJz48L25vc2NyaXB0PmApXG5cdFx0XHRcdC5yZXBsYWNlKCclc2FwcGVyLnN0eWxlcyUnLCAoKSA9PiBzdHlsZXMpO1xuXG5cdFx0XHRyZXMuc3RhdHVzQ29kZSA9IHN0YXR1cztcblx0XHRcdHJlcy5lbmQoYm9keSk7XG5cdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRiYWlsKHJlcSwgcmVzLCBlcnIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlX2Vycm9yKHJlcSwgcmVzLCA1MDAsIGVycik7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZ1bmN0aW9uIGZpbmRfcm91dGUocmVxLCByZXMsIG5leHQpIHtcblx0XHRpZiAocmVxLnBhdGggPT09ICcvc2VydmljZS13b3JrZXItaW5kZXguaHRtbCcpIHtcblx0XHRcdGNvbnN0IGhvbWVQYWdlID0gcGFnZXMuZmluZChwYWdlID0+IHBhZ2UucGF0dGVybi50ZXN0KCcvJykpO1xuXHRcdFx0aGFuZGxlX3BhZ2UoaG9tZVBhZ2UsIHJlcSwgcmVzKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKGNvbnN0IHBhZ2Ugb2YgcGFnZXMpIHtcblx0XHRcdGlmIChwYWdlLnBhdHRlcm4udGVzdChyZXEucGF0aCkpIHtcblx0XHRcdFx0aGFuZGxlX3BhZ2UocGFnZSwgcmVxLCByZXMpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aGFuZGxlX2Vycm9yKHJlcSwgcmVzLCA0MDQsICdOb3QgZm91bmQnKTtcblx0fTtcbn1cblxuZnVuY3Rpb24gcmVhZF90ZW1wbGF0ZShkaXIgPSBidWlsZF9kaXIpIHtcblx0cmV0dXJuIGZzLnJlYWRGaWxlU3luYyhgJHtkaXJ9L3RlbXBsYXRlLmh0bWxgLCAndXRmLTgnKTtcbn1cblxuZnVuY3Rpb24gdHJ5X3NlcmlhbGl6ZShkYXRhLCBmYWlsKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRldmFsdWUoZGF0YSk7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdGlmIChmYWlsKSBmYWlsKGVycik7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuLy8gRW5zdXJlIHdlIHJldHVybiBzb21ldGhpbmcgdHJ1dGh5IHNvIHRoZSBjbGllbnQgd2lsbCBub3QgcmUtcmVuZGVyIHRoZSBwYWdlIG92ZXIgdGhlIGVycm9yXG5mdW5jdGlvbiBzZXJpYWxpemVfZXJyb3IoZXJyb3IpIHtcblx0aWYgKCFlcnJvcikgcmV0dXJuIG51bGw7XG5cdGxldCBzZXJpYWxpemVkID0gdHJ5X3NlcmlhbGl6ZShlcnJvcik7XG5cdGlmICghc2VyaWFsaXplZCkge1xuXHRcdGNvbnN0IHsgbmFtZSwgbWVzc2FnZSwgc3RhY2sgfSA9IGVycm9yIDtcblx0XHRzZXJpYWxpemVkID0gdHJ5X3NlcmlhbGl6ZSh7IG5hbWUsIG1lc3NhZ2UsIHN0YWNrIH0pO1xuXHR9XG5cdGlmICghc2VyaWFsaXplZCkge1xuXHRcdHNlcmlhbGl6ZWQgPSAne30nO1xuXHR9XG5cdHJldHVybiBzZXJpYWxpemVkO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVfaHRtbChodG1sKSB7XG5cdGNvbnN0IGNoYXJzID0ge1xuXHRcdCdcIicgOiAncXVvdCcsXG5cdFx0XCInXCI6ICcjMzknLFxuXHRcdCcmJzogJ2FtcCcsXG5cdFx0JzwnIDogJ2x0Jyxcblx0XHQnPicgOiAnZ3QnXG5cdH07XG5cblx0cmV0dXJuIGh0bWwucmVwbGFjZSgvW1wiJyY8Pl0vZywgYyA9PiBgJiR7Y2hhcnNbY119O2ApO1xufVxuXG5mdW5jdGlvbiBtaWRkbGV3YXJlKG9wdHNcblxuXG4gPSB7fSkge1xuXHRjb25zdCB7IHNlc3Npb24sIGlnbm9yZSB9ID0gb3B0cztcblxuXHRsZXQgZW1pdHRlZF9iYXNlcGF0aCA9IGZhbHNlO1xuXG5cdHJldHVybiBjb21wb3NlX2hhbmRsZXJzKGlnbm9yZSwgW1xuXHRcdChyZXEsIHJlcywgbmV4dCkgPT4ge1xuXHRcdFx0aWYgKHJlcS5iYXNlVXJsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0bGV0IHsgb3JpZ2luYWxVcmwgfSA9IHJlcTtcblx0XHRcdFx0aWYgKHJlcS51cmwgPT09ICcvJyAmJiBvcmlnaW5hbFVybFtvcmlnaW5hbFVybC5sZW5ndGggLSAxXSAhPT0gJy8nKSB7XG5cdFx0XHRcdFx0b3JpZ2luYWxVcmwgKz0gJy8nO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVxLmJhc2VVcmwgPSBvcmlnaW5hbFVybFxuXHRcdFx0XHRcdD8gb3JpZ2luYWxVcmwuc2xpY2UoMCwgLXJlcS51cmwubGVuZ3RoKVxuXHRcdFx0XHRcdDogJyc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghZW1pdHRlZF9iYXNlcGF0aCAmJiBwcm9jZXNzLnNlbmQpIHtcblx0XHRcdFx0cHJvY2Vzcy5zZW5kKHtcblx0XHRcdFx0XHRfX3NhcHBlcl9fOiB0cnVlLFxuXHRcdFx0XHRcdGV2ZW50OiAnYmFzZXBhdGgnLFxuXHRcdFx0XHRcdGJhc2VwYXRoOiByZXEuYmFzZVVybFxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRlbWl0dGVkX2Jhc2VwYXRoID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHJlcS5wYXRoID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0cmVxLnBhdGggPSByZXEudXJsLnJlcGxhY2UoL1xcPy4qLywgJycpO1xuXHRcdFx0fVxuXG5cdFx0XHRuZXh0KCk7XG5cdFx0fSxcblxuXHRcdGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ3NlcnZpY2Utd29ya2VyLmpzJykpICYmIHNlcnZlKHtcblx0XHRcdHBhdGhuYW1lOiAnL3NlcnZpY2Utd29ya2VyLmpzJyxcblx0XHRcdGNhY2hlX2NvbnRyb2w6ICduby1jYWNoZSwgbm8tc3RvcmUsIG11c3QtcmV2YWxpZGF0ZSdcblx0XHR9KSxcblxuXHRcdGZzLmV4aXN0c1N5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgJ3NlcnZpY2Utd29ya2VyLmpzLm1hcCcpKSAmJiBzZXJ2ZSh7XG5cdFx0XHRwYXRobmFtZTogJy9zZXJ2aWNlLXdvcmtlci5qcy5tYXAnLFxuXHRcdFx0Y2FjaGVfY29udHJvbDogJ25vLWNhY2hlLCBuby1zdG9yZSwgbXVzdC1yZXZhbGlkYXRlJ1xuXHRcdH0pLFxuXG5cdFx0c2VydmUoe1xuXHRcdFx0cHJlZml4OiAnL2NsaWVudC8nLFxuXHRcdFx0Y2FjaGVfY29udHJvbDogZGV2ID8gJ25vLWNhY2hlJyA6ICdtYXgtYWdlPTMxNTM2MDAwLCBpbW11dGFibGUnXG5cdFx0fSksXG5cblx0XHRnZXRfc2VydmVyX3JvdXRlX2hhbmRsZXIobWFuaWZlc3Quc2VydmVyX3JvdXRlcyksXG5cblx0XHRnZXRfcGFnZV9oYW5kbGVyKG1hbmlmZXN0LCBzZXNzaW9uIHx8IG5vb3ApXG5cdF0uZmlsdGVyKEJvb2xlYW4pKTtcbn1cblxuZnVuY3Rpb24gY29tcG9zZV9oYW5kbGVycyhpZ25vcmUsIGhhbmRsZXJzKSB7XG5cdGNvbnN0IHRvdGFsID0gaGFuZGxlcnMubGVuZ3RoO1xuXG5cdGZ1bmN0aW9uIG50aF9oYW5kbGVyKG4sIHJlcSwgcmVzLCBuZXh0KSB7XG5cdFx0aWYgKG4gPj0gdG90YWwpIHtcblx0XHRcdHJldHVybiBuZXh0KCk7XG5cdFx0fVxuXG5cdFx0aGFuZGxlcnNbbl0ocmVxLCByZXMsICgpID0+IG50aF9oYW5kbGVyKG4rMSwgcmVxLCByZXMsIG5leHQpKTtcblx0fVxuXG5cdHJldHVybiAhaWdub3JlXG5cdFx0PyAocmVxLCByZXMsIG5leHQpID0+IG50aF9oYW5kbGVyKDAsIHJlcSwgcmVzLCBuZXh0KVxuXHRcdDogKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG5cdFx0XHRpZiAoc2hvdWxkX2lnbm9yZShyZXEucGF0aCwgaWdub3JlKSkge1xuXHRcdFx0XHRuZXh0KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRudGhfaGFuZGxlcigwLCByZXEsIHJlcywgbmV4dCk7XG5cdFx0XHR9XG5cdFx0fTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkX2lnbm9yZSh1cmksIHZhbCkge1xuXHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSByZXR1cm4gdmFsLnNvbWUoeCA9PiBzaG91bGRfaWdub3JlKHVyaSwgeCkpO1xuXHRpZiAodmFsIGluc3RhbmNlb2YgUmVnRXhwKSByZXR1cm4gdmFsLnRlc3QodXJpKTtcblx0aWYgKHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbicpIHJldHVybiB2YWwodXJpKTtcblx0cmV0dXJuIHVyaS5zdGFydHNXaXRoKHZhbC5jaGFyQ29kZUF0KDApID09PSA0NyA/IHZhbCA6IGAvJHt2YWx9YCk7XG59XG5cbmZ1bmN0aW9uIHNlcnZlKHsgcHJlZml4LCBwYXRobmFtZSwgY2FjaGVfY29udHJvbCB9XG5cblxuXG4pIHtcblx0Y29uc3QgZmlsdGVyID0gcGF0aG5hbWVcblx0XHQ/IChyZXEpID0+IHJlcS5wYXRoID09PSBwYXRobmFtZVxuXHRcdDogKHJlcSkgPT4gcmVxLnBhdGguc3RhcnRzV2l0aChwcmVmaXgpO1xuXG5cdGNvbnN0IGNhY2hlID0gbmV3IE1hcCgpO1xuXG5cdGNvbnN0IHJlYWQgPSBkZXZcblx0XHQ/IChmaWxlKSA9PiBmcy5yZWFkRmlsZVN5bmMocGF0aC5qb2luKGJ1aWxkX2RpciwgZmlsZSkpXG5cdFx0OiAoZmlsZSkgPT4gKGNhY2hlLmhhcyhmaWxlKSA/IGNhY2hlIDogY2FjaGUuc2V0KGZpbGUsIGZzLnJlYWRGaWxlU3luYyhwYXRoLmpvaW4oYnVpbGRfZGlyLCBmaWxlKSkpKS5nZXQoZmlsZSk7XG5cblx0cmV0dXJuIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuXHRcdGlmIChmaWx0ZXIocmVxKSkge1xuXHRcdFx0Y29uc3QgdHlwZSA9IGxpdGUuZ2V0VHlwZShyZXEucGF0aCk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbnN0IGZpbGUgPSBwYXRoLnBvc2l4Lm5vcm1hbGl6ZShkZWNvZGVVUklDb21wb25lbnQocmVxLnBhdGgpKTtcblx0XHRcdFx0Y29uc3QgZGF0YSA9IHJlYWQoZmlsZSk7XG5cblx0XHRcdFx0cmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgdHlwZSk7XG5cdFx0XHRcdHJlcy5zZXRIZWFkZXIoJ0NhY2hlLUNvbnRyb2wnLCBjYWNoZV9jb250cm9sKTtcblx0XHRcdFx0cmVzLmVuZChkYXRhKTtcblx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRyZXMuc3RhdHVzQ29kZSA9IDQwNDtcblx0XHRcdFx0cmVzLmVuZCgnbm90IGZvdW5kJyk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5leHQoKTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIG5vb3AoKXt9XG5cbmV4cG9ydCB7IG1pZGRsZXdhcmUgfTtcbiIsImltcG9ydCBzaXJ2IGZyb20gJ3NpcnYnO1xuaW1wb3J0IHBvbGthIGZyb20gJ3BvbGthJztcbmltcG9ydCBjb21wcmVzc2lvbiBmcm9tICdjb21wcmVzc2lvbic7XG5pbXBvcnQgKiBhcyBzYXBwZXIgZnJvbSAnQHNhcHBlci9zZXJ2ZXInO1xuXG5jb25zdCB7IFBPUlQsIE5PREVfRU5WIH0gPSBwcm9jZXNzLmVudjtcbmNvbnN0IGRldiA9IE5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnO1xuXG5wb2xrYSgpIC8vIFlvdSBjYW4gYWxzbyB1c2UgRXhwcmVzc1xuXHQudXNlKFxuXHRcdGNvbXByZXNzaW9uKHsgdGhyZXNob2xkOiAwIH0pLFxuXHRcdHNpcnYoJ3N0YXRpYycsIHsgZGV2IH0pLFxuXHRcdHNhcHBlci5taWRkbGV3YXJlKClcblx0KVxuXHQubGlzdGVuKFBPUlQsIGVyciA9PiB7XG5cdFx0aWYgKGVycikgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyKTtcblx0fSk7XG4iXSwibmFtZXMiOlsiZ2V0IiwibGluZWFyIiwiYmxhemVmYWNlLmxvYWQiLCJRdWl6MSIsIlF1aXoyIiwiUXVpejYiLCJDaGVja3BvaW50MSIsIlF1aXozIiwiUXVpejQiLCJRdWl6NSIsIkNoZWNrcG9pbnQyIiwiUXVpejciLCJRdWl6OCIsIkNoZWNrcG9pbnQzIiwicHJlbG9hZCIsImNvbXBvbmVudF8wIiwiY29tcG9uZW50XzEiLCJjb21wb25lbnRfMiIsImNvbXBvbmVudF8zIiwiY29tcG9uZW50XzQiLCJjb21wb25lbnRfNSIsImNvbXBvbmVudF82IiwicHJlbG9hZF82IiwiY29tcG9uZW50XzciLCJwcmVsb2FkXzciLCJjb21wb25lbnRfOCIsImNvbXBvbmVudF85Iiwicm9vdCIs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QyxDQUFDLHVCQUF1QixDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLHFCQUFxQixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLDBCQUEwQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHlDQUF5QyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztBQUM3c1A7QUFDQSxJQUFJLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNoQztBQUNBLFNBQVMsd0JBQXdCLENBQUMsTUFBTSxFQUFFO0FBQzFDLENBQUMsZUFBZSxZQUFZLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ3BELEVBQUUsR0FBRyxDQUFDLE1B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
