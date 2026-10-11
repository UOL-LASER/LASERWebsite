export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["assets/newsletter/week10/week10.pdf","assets/newsletter/week10/week10.png","assets/newsletter/week11/week11.pdf","assets/newsletter/week11/week11.png","assets/newsletter/week12/week12.pdf","assets/newsletter/week12/week12.png","assets/newsletter/week13/week13.pdf","assets/newsletter/week13/week13.png","assets/newsletter/week14/week14.pdf","assets/newsletter/week14/week14.png","assets/newsletter/week15/week15.pdf","assets/newsletter/week15/week15.png","assets/newsletter/week16/week16.pdf","assets/newsletter/week16/week16.png","assets/newsletter/week17/week17.pdf","assets/newsletter/week17/week17.png","assets/newsletter/week18/week18.pdf","assets/newsletter/week18/week18.png","assets/newsletter/week19/week19.pdf","assets/newsletter/week19/week19.png","assets/newsletter/week20/week20.pdf","assets/newsletter/week20/week20.png","favicon.png"]),
	mimeTypes: {".pdf":"application/pdf",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DGtmBPSo.js",app:"_app/immutable/entry/app.ivjfigJp.js",imports:["_app/immutable/entry/start.DGtmBPSo.js","_app/immutable/chunks/CTIS16gk.js","_app/immutable/chunks/7BSjD24L.js","_app/immutable/entry/app.ivjfigJp.js","_app/immutable/chunks/7BSjD24L.js","_app/immutable/chunks/D_1BMN3e.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/competitions","/contact","/news","/projects","/projects/cubesat","/projects/rocketry","/projects/rover","/resources"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
