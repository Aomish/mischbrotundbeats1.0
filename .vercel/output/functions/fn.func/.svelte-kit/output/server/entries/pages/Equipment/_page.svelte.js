import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { N as Navbar } from "../../../chunks/Navbar.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "span.svelte-jynurp{font-weight:800;color:azure}a.svelte-jynurp{font-weight:800}h2.svelte-jynurp{margin-bottom:8px;font-weight:900;font-size:larger;text-transform:uppercase;text-decoration:underline;color:azure}h3.svelte-jynurp{padding:8px;padding-top:2px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<main class="w-full flex flex-col items-center content-center"><section class="text-white rounded-lg p-4 pl-6 bg-slate-600 dark:bg-slate-700 mt-4 mx-4 max-w-[550px]">${validate_component(Navbar, "Nav").$$render($$result, {}, {}, {})} <h2 class="svelte-jynurp" data-svelte-h="svelte-1ewc11w">Anforderungen:</h2> <h3 class="svelte-jynurp" data-svelte-h="svelte-1f5xpdh"><span class="svelte-jynurp">Für den Workshop benötigt Ihr nichts</span>, außer Motivation Euch mit Themen rund um
			die Musik auseinanderzusetzen. <br> <br> <span class="svelte-jynurp">Keine Skills, kein Wissen, kein Problem!</span> Hier könnt ihr zusammen mit Anderen euer
			Wissen und eure Skills aufbauen und erweitern.<br> <br> <span class="svelte-jynurp">Sich an Projekten zu beteiligen ist keine Pflicht</span>, aber wir unterstützen Jede*n
			dabei, das richtige für Sich zu finden.</h3> <h2 class="svelte-jynurp" data-svelte-h="svelte-1g23ay0">Equipment:</h2> <h3 class="svelte-jynurp" data-svelte-h="svelte-1f4s5fw"><span class="svelte-jynurp">Ihr benötigt kein Equipment!</span> Wenn Ihr jedoch welches habt, Laptop, Gitarre,
			Mikrofon, Laptop, eure eigenen Kopfhörer, etc., bringt es gerne für Eure eigenen Zwecke, oder
			auch für andere mit. <br> <br> <span class="svelte-jynurp">Sharing is caring!</span>
			Über die
			<a href="#" class="underline text-blue-400 svelte-jynurp" title="Mischbrot und Beats Telegram">Telegram</a>
			Gruppe könnt Ihr immer vorher Nachfragen, ob X-beliebiges Equipment vor Ort sein wird, oder ob
			jemand es Euch für den Tag mitbringen kann.</h3></section> </main>`;
});
export {
  Page as default
};
