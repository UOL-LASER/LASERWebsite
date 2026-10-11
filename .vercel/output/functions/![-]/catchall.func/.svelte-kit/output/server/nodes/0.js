import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CFBi3Zis.js","_app/immutable/chunks/eJqPHsYu.js","_app/immutable/chunks/CuSPKpbL.js","_app/immutable/chunks/7BSjD24L.js","_app/immutable/chunks/D_1BMN3e.js","_app/immutable/chunks/B9G59zYk.js"];
export const stylesheets = ["_app/immutable/assets/0.Lj2UNPYu.css","_app/immutable/assets/index.B-hsd_Pt.css"];
export const fonts = ["_app/immutable/assets/exo-2-cyrillic-ext-wght-normal.Duf7tWJ7.woff2","_app/immutable/assets/exo-2-cyrillic-wght-normal.DINSYtDx.woff2","_app/immutable/assets/exo-2-vietnamese-wght-normal.DlPkZmYr.woff2","_app/immutable/assets/exo-2-latin-ext-wght-normal.B5pmZ151.woff2","_app/immutable/assets/exo-2-latin-wght-normal.CQ1lLIdm.woff2","_app/immutable/assets/orbitron-latin-wght-normal.Du7j2Vp2.woff2"];
