<script>
	import BetterList from "../components/BetterList.svelte";
</script>

<style>
	/* Aldrich font */
	@import url('https://fonts.googleapis.com/css?family=Aldrich&display=swap');
	/* Noto Serif JP */
	@import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP:900&display=swap&subset=japanese');

	header > h1 {
		text-align: center;
		margin: 0 auto;
		font-size: 2.8em;
		font-weight: 700;
		font-family: 'Aldrich', sans-serif;
		margin: 0 0 0.5em 0;
	}

	@media (min-width: 480px) {
		header > h1 {
			font-size: 4em;
		}
	}

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
		font-weight: 900;
	}

	article {
		width: 22em;
		display: block;
		margin: 0 auto;
	}

	.tilt {
		display: inline-block;
		transform: rotate(-15deg);
	}
</style>

<svelte:head>
	<title>n-ari.tech</title>
</svelte:head>

<header>
	<h1>n-ari.t<span class="tilt">e</span>ch</h1>
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
