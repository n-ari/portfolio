<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	import BetterList from "../../components/BetterList.svelte";
	export let posts;
</script>

<style>
</style>

<svelte:head>
	<title>n-ari.tech/blog</title>
</svelte:head>

<h1>Blog: Recent posts</h1>

<BetterList>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li>{post.date} - <a rel='prefetch' href='blog/{post.slug}'>{post.title}</a></li>
	{/each}
</BetterList>
