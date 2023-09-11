

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Projekte/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.28c52fa3.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.cc14bb38.js","_app/immutable/chunks/Navbar.58cd5dab.js"];
export const stylesheets = ["_app/immutable/assets/5.b1ee3cb0.css","_app/immutable/assets/Navbar.6ad059ea.css"];
export const fonts = [];
