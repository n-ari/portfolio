<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>
	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	/* .content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	} */

	.content :global(ul) {
		position: relative;
		padding: 0 0.5em;
		list-style-type: none;
	}
	.content :global(ul) :global(li) {
		position: relative;
		padding: 0.1em 0.3em 0.4em 1.5em;
	}
	.content :global(ul) :global(li)::before {
		position: absolute;
		content: '';
		top: 0.65em;
		left: 0.3em;
		width: 0.3em;
		height: 0.3em;
		border-right: solid 3px #333;
		border-bottom: solid 3px #333;
		transform: rotate(-45deg);
	}
</style>

<svelte:head>
	<title>{post.title} - n-ari.tech/blog</title>
</svelte:head>

<h1>{post.title}</h1>
<p>
	投稿日時: {post.publish_date}
	{#if post.publish_date !== post.update_date}
		(更新日時: {post.update_date})
	{/if}
</p>

<div class='content'>
	{@html post.html}
</div>
