import { c as create_ssr_component } from "./ssr.js";
const Navbar_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-125i2v6:hover{color:orange}ul.svelte-125i2v6{font-size:large}a.svelte-125i2v6{font-weight:800}",
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main data-svelte-h="svelte-sq6brl"><nav class="flex w-full items-center content-center justify-center"><ul class="flex flex-col justify-center sm:flex-row sm:justify-between content-center items-center w-fit sm:w-full bg-slate-800 dark:bg-slate-900 rounded-lg pt-1 pb-1 shadow-lg px-1 mb-2 svelte-125i2v6"><li class="text-center"><a href="/Projekte" class="underline text-blue-400 svelte-125i2v6">Projekte</a></li> <li class="sm:pr-2 text-center"><a href="/Equipment" class="underline text-blue-400 svelte-125i2v6">Anforderungen und Equipment</a></li> <li class="sm:pl-2 text-center"><a href="/Kontakt" class="underline text-blue-400 svelte-125i2v6">Kontakt</a></li></ul></nav> </main>`;
});
export {
  Navbar as N
};
