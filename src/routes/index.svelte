<script>
	import BetterList from "../components/BetterList.svelte";
</script>

<style>
	header > h1 {
		text-align: center;
		margin: 0 auto;
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		header > h1 {
			font-size: 4em;
		}
	}

	/* figure, p {
		text-align: center;
		margin: 0 auto;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	} */

	p {
		text-align: center;
		margin: 1em auto;
	}

	#nari {
		text-align: center;
		font-size: 20em;
		margin: 0 0 0.1em 0;
		padding: 0 0 0 0;
		line-height: 1;
		font-family: 'Noto Serif JP', serif;
	}

	article {
		/* border-top: solid 2px #333; */
		width: 22em;
		display: block;
		margin: 0 auto;
		/* padding: 0em 0.5em; */
	}
</style>

<svelte:head>
	<title>n-ari.tech</title>
	<link href="https://fonts.googleapis.com/css?family=Noto+Serif+JP:900&display=swap" rel="stylesheet">
</svelte:head>

<header>
	<h1>n-ari.tech</h1>
</header>

<div id="nari">
	成
</div>

<p>@n-ari のポートフォリオサイト/ブログです。</p>

<article>
	<h3>更新履歴</h3>
	<BetterList>
		<li>2020/02/07 サイトを公開しました。</li>
	</BetterList>
</article>
