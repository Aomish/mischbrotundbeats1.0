<script>
	import Nav from '$lib/Components/Navbar.svelte';
</script>

<main class="w-full flex flex-col items-center content-center">
	<img src="/images/flyerexample.jpeg" alt="FLYER" class="mt-4 h-[500] w-[400px]" />
	<section
		class="text-white rounded-lg p-4 pl-6 bg-slate-600 dark:bg-slate-700 mt-4 mx-4 max-w-[550px]"
	>
		<Nav />
		<h2>Über Mischbrot und Beats:</h2>
		<h3>
			<span>Mischbrot und Beats</span> ist ein kollaborativer <span>Musik-Workshop</span>. <br />
			Du bist interessiert am Austausch über Themen rund um die Musik?<br />
			Und an der Teilnahme von Projekten? Dann bist Du hier genau richtig, ob erfahren oder unerfahren!<br
			/>
			Bei Mischbrot und Beats kommt Ihr zusammen und könnt Euch im entspannten Ambiente des
			<a
				href="https://archiv-potsdam.de/"
				target="__blank"
				title="Archiv-Website"
				class="underline text-blue-400">Archivs</a
			>
			kennenlernen. <br />
		</h3>
		<h3>
			<span>Der Workshop findet Sonntags, alle 2 Wochen, von 15-21 Uhr (Open-End) statt</span> und
			über
			<a href="#" class="underline text-blue-400" title="Mischbrot und Beats Telegram">Telegram</a>
			könnt Ihr Live-Updates darüber erhalten, was als nächstes in Eurem Workshop ansteht. Euer Workshop?
			Richtig gehört!
		</h3>
		<h3 id="Formate">
			Über unsere
			<a href="#" class="underline text-blue-400" title="Mischbrot und Beats Telegram"
				>Telegram-Gruppe</a
			>
			könnt Ihr
			<a href="#" class="underline text-orange-400" title="Anmeldungen">Anmeldungen</a>
			einreichen für folgende <span class="format">'angemeldete Formate'</span>:
		</h3>
		<h4>
			<span class="format">Vortrag:</span> In einem Vortrag kannst Du/Ihr jegliches Thema Eures Interesses
			vorstellen, solange es mit Musik zu tun hat. Zur Verfügung steht euch hierbei ein Beamer und die
			Anlage.
		</h4>
		<h4 class="italic" style="margin-top: 0px; padding-top: 0px;">
			<span>Beispiel-Themen:</span> Künstler*innen, Genre(s), (Szene-)Kultur, Musik-/Audiovideo, Musikproduktion,
			Audio(-equipment), Performance...
		</h4>
		<br />
		<h4>
			<span class="format">Listening-Sessions:</span> In Listening-Sessions kannst Du/Ihr Eure Musik
			vorstellen und vorspielen. Sei es Digital, oder Analog - ein Track, ein Song, ein Set, ein
			Album, eine Idee. Daraufhin könnt Ihr das
			<a href="/Regeln" title="Feedback Regeln" class="underline text-blue-400">Feedback</a> von Anderen
			einholen (empfohlen) oder Eure Performance für Euch selbst reflektieren.
		</h4>
		<br />

		<h4>
			<span>Somit habt Ihr die Kontrolle darüber, was im Workshop läuft und gemacht wird!</span>
		</h4>

		<br />

		<h3>
			Natürlich wird es den ganzen Tag nicht nur Vorträge geben, dafür haben wir für Euch, <span
				class="freeformat">ohne Anmeldung, freie Formate</span
			>: <br />
		</h3>
		<br />
		<h4>
			<span class="freeformat">Chillouts:</span> Schnappt Euch ein Getränk,
			<a href="/Equipment" title="Anforderungen und Equipment" class="underline text-blue-400"
				>einen Laptop, ein Instrument, ein Mikrofon</a
			>... Setzt Euch zusammen, schmiedet Pläne, arbeitet an Euren Projekten, habt einfach Spaß und
			genießt Euren Sonntag!
		</h4>
		<br />
		<h4>
			<span class="freeformat">Open-Decks:</span> Open-Decks sind genau wie Chillouts, nur mit dem Unterschied,
			dass Du/Ihr die Mucke bestimmt und auflegen könnt.
		</h4>
		<br />
		<h3>
			<span class="underline"><a href="/Projekte" class="projekte">Projekte:</a></span> Ihr habt
			Lust Mucke zu machen und Projekte umzusetzen, aber braucht noch Unterstützung durch weitere
			Künstler*innen? Meldet einfach Euer Projekt bei uns an, sagt uns was ihr sucht, z.B.
			Musiker*innen, Grafikdesigner*innen, Kamerapersonen, Produzent*innen, Tontechniker*innen. Über
			<a href="#" class="underline text-blue-400" title="Mischbrot und Beats Telegram">Telegram</a>,
			oder natürlich in Person, könnt Ihr Euch dann für die Projekte, die Euch interessieren und an
			denen Ihr teilnehmen wollt, melden und Euch connecten.
		</h3>
		<br />
		<h2>Weitere Infos:</h2>
		<ul class="flex flex-col w-full items-center">
			<li>
				<a href="/Equipment" class="underline text-blue-400"> Anforderungen und Equipment </a>
			</li>
			<li>
				<a href="/Projekte" class="underline text-blue-400">Projekte</a>
			</li>
			<li>
				<a href="/Kontakt" class="underline text-blue-400">Kontakt</a>
			</li>
			<li>
				<h4 class="italic text-sm mt-1"><span>Es gelten die Archiv-Hausregeln!</span></h4>
			</li>
		</ul>
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
	span.freeformat {
		color: yellow;
	}
	a {
		font-weight: 800;
	}

	h2 {
		margin-bottom: 8px;
		font-weight: 900;
		font-size: x-large;
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
	a:hover {
		color: orange;
	}
	ul {
		font-size: large;
	}
	a.projekte {
		color: red;
	}
</style>
