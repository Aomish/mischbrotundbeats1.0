<script>
	import Nav from '$lib/Components/Navbar.svelte';
</script>

<main class="w-full flex flex-col items-center content-center">
	<section
		class="text-white rounded-lg p-4 pl-6 bg-slate-600 dark:bg-slate-700 mt-4 mx-4 max-w-[550px]"
	>
		<Nav />
		<h2>Projekte:</h2>
		<h3>
			Auf dieser Seite werden alle Workshops dokumentiert!<br />
			Es werden keine Namen, Bilder, oder sonstiges, ohne Einverständnis der betroffenen Personen veröffentlicht!
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
