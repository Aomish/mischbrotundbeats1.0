import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2.svelte-4flizx{margin-bottom:8px;font-weight:900;font-size:larger;text-transform:uppercase;text-decoration:underline;color:azure}h3.svelte-4flizx{padding:8px;padding-top:2px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="w-full flex flex-col items-center content-center"><section class="text-white rounded-lg p-4 pl-6 bg-slate-600 dark:bg-slate-700 mt-4 mx-4 max-w-[550px]">${validate_component(Navbar, "Nav").$$render($$result, {}, {}, {})} <h2 class="svelte-4flizx" data-svelte-h="svelte-18kiehg">Projekte:</h2> <h3 class="svelte-4flizx" data-svelte-h="svelte-wr689f">Auf dieser Seite werden alle Workshops dokumentiert!<br>
			Es werden keine Namen, Bilder, oder sonstiges, ohne Einverständnis der betroffenen Personen veröffentlicht!</h3></section> </main>`;
});
export {
  Page as default
};
