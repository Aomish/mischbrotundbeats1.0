

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/Kontakt/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.53741436.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.cc14bb38.js","_app/immutable/chunks/Navbar.58cd5dab.js"];
export const stylesheets = ["_app/immutable/assets/4.802a65c0.css","_app/immutable/assets/Navbar.6ad059ea.css"];
export const fonts = [];
