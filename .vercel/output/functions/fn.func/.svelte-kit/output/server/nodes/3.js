

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Equipment/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f6a65a48.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.cc14bb38.js","_app/immutable/chunks/Navbar.58cd5dab.js"];
export const stylesheets = ["_app/immutable/assets/3.1628fcc7.css","_app/immutable/assets/Navbar.6ad059ea.css"];
export const fonts = [];
