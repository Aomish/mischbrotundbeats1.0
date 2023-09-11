<script>
	import Nav from '$lib/Components/Navbar.svelte';
	import QrCode from '$lib/Components/qrcode-wikipedia.svelte';
</script>

<main class="w-full flex flex-col items-center content-center">
	<section
		class="text-white rounded-lg p-4 pl-6 bg-slate-600 dark:bg-slate-700 mt-4 mx-4 max-w-[550px]"
	>
		<Nav />
		<h2>Anforderungen:</h2>
		<h3>
			<span>Für den Workshop benötigt Ihr nichts</span>, außer Motivation Euch mit Themen rund um
			die Musik auseinanderzusetzen. <br />
			<br />
			<span>Keine Skills, kein Wissen, kein Problem!</span> Hier könnt ihr zusammen mit Anderen euer
			Wissen und eure Skills aufbauen und erweitern.<br />
			<br />
			<span>Sich an Projekten zu beteiligen ist keine Pflicht</span>, aber wir unterstützen Jede*n
			dabei, das richtige für Sich zu finden.
		</h3>
		<h2>Equipment:</h2>
		<h3>
			<span>Ihr benötigt kein Equipment!</span> Wenn Ihr jedoch welches habt, Laptop, Gitarre,
			Mikrofon, Laptop, eure eigenen Kopfhörer, etc., bringt es gerne für Eure eigenen Zwecke, oder
			auch für andere mit. <br />
			<br />
			<span>Sharing is caring!</span>
			Über die
			<a href="#" class="underline text-blue-400" title="Mischbrot und Beats Telegram">Telegram</a>
			Gruppe könnt Ihr immer vorher Nachfragen, ob X-beliebiges Equipment vor Ort sein wird, oder ob
			jemand es Euch für den Tag mitbringen kann.
		</h3>
	</section>
</main>

<style>
	span {
		font-weight: 800;
		color: azure;
	}
	a {
		font-weight: 800;
	}

	h2 {
		margin-bottom: 8px;
		font-weight: 900;
		font-size: larger;
		text-transform: uppercase;
		text-decoration: underline;
		color: azure;
	}
	h3 {
		padding: 8px;
		padding-top: 2px;
	}
</style>
