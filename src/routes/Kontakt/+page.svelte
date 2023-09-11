<script>
	import Nav from '$lib/Components/Navbar.svelte';
	import QrCode from '$lib/Components/qrcode-wikipedia.svelte';
</script>

<main class="w-full flex flex-col items-center content-center">
	<section
		class="text-white rounded-lg p-4 pl-6 bg-slate-600 dark:bg-slate-700 mt-4 mx-4 max-w-[550px]"
	>
		<Nav />
		<h2>Kontakt:</h2>
		<h2>Wo?</h2>
		<h3>
			<span>Mischbrot und Beats</span> findet im
			<a
				href="https://archiv-potsdam.de/"
				target="__blank"
				title="Archiv-Website"
				class="underline text-blue-400">Archiv</a
			> in Potsdam statt.
		</h3>
		<h2>Wann?</h2>
		<h3>Sonntags, alle 2 Wochen, von 15-21 Uhr (Open-End)</h3>
		<h2>Wie?</h2>
		<h3>
			Über <a href="#" class="underline text-blue-400" title="Mischbrot und Beats Telegram"
				>Telegram</a
			>
			könnt Ihr Live verfolgen, wann der nächste Workshop ist, was der Plan für diesen ist, Anmeldungen
			für <span class="format underline"><a href="/#Formate">Formate</a></span>
			einreichen, aktuelles, und noch viel mehr!
		</h3>
		<h3>
			Link: <a href="#" class="underline text-blue-400" title="Mischbrot und Beats Telegram"
				>https://www.wikipedia.com/</a
			> <br />
			QR-Code: <QrCode />
		</h3>
		<h3>
			Alternativ für besondere Anfragen schickt uns gerne eine Mail an: <a
				href="mailto:simeonlaza@yahoo.de"
				class="underline text-blue-400">mischbrotundbeats@archiv.de</a
			>
		</h3>
	</section>
</main>

<style>
	span {
		font-weight: 800;
		color: azure;
	}
	span.format {
		color: orange;
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
	h4 {
		padding-left: 32px;
		padding-right: 32px;
		padding-top: 2px;
	}
</style>
