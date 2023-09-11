export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","images/flyerexample.jpeg","images/qrcode-wikipedia.svg"]),
	mimeTypes: {".png":"image/png",".jpeg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.669a9771.js","app":"_app/immutable/entry/app.42201a4b.js","imports":["_app/immutable/entry/start.669a9771.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/singletons.02c13bd0.js","_app/immutable/entry/app.42201a4b.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.cc14bb38.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/Equipment",
				pattern: /^\/Equipment\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/Kontakt",
				pattern: /^\/Kontakt\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/Projekte",
				pattern: /^\/Projekte\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
