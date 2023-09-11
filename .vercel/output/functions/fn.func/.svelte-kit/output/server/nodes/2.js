

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.3a4d320c.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.cc14bb38.js","_app/immutable/chunks/Navbar.58cd5dab.js"];
export const stylesheets = ["_app/immutable/assets/2.03aebdb9.css","_app/immutable/assets/Navbar.6ad059ea.css"];
export const fonts = [];
