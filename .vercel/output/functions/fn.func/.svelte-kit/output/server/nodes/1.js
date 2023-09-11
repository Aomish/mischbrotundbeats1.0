

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9997d74d.js","_app/immutable/chunks/scheduler.63274e7e.js","_app/immutable/chunks/index.cc14bb38.js","_app/immutable/chunks/singletons.02c13bd0.js"];
export const stylesheets = [];
export const fonts = [];
