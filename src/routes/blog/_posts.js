// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

import {readdirSync, readFileSync, statSync} from "fs";
import path from "path";
import marked from 'marked';
import hljs from 'highlight.js';
import fm from 'front-matter';

// in order to add hljs class
const renderer = new marked.Renderer();
renderer.code = (code, lang)=>{
	return `<pre><code class="${lang} hljs">${hljs.highlight(lang, code).value}</code></pre>`;
}
const linkRenderer = renderer.link;
renderer.link = (href, title, text)=>{
	const html = linkRenderer.call(renderer, href, title, text);
	// TODO: check if href is internal link
	return html.replace(/^<a /, "<a target=\"_blank\" rel=\"nofollow noopener\" ");
}
marked.setOptions({
	breaks: true,
	langPrefix: "",
	renderer: renderer,
});

const posts = [];

try {
	const postsDir = path.join(process.cwd(), "posts");
	const fileList = readdirSync(postsDir);
	for(const fileName of fileList){
		if(fileName.length < 4 || fileName.slice(-3) !== ".md")continue;
		const filePath = path.join(postsDir, fileName);
		const stats = statSync(filePath);
		if(!stats.isFile())continue;
		const file = readFileSync(filePath, "utf-8");
		const content = fm(file);
		const post = {
			slug: fileName.slice(0, -3),
			title: content.attributes.title,
			publish_date: content.attributes.publish_date,
			update_date: content.attributes.update_date,
			html: marked(content.body),
		};
		posts.push(post);
	}
} catch (err) {
	console.error(err);
}

posts.sort((a,b)=>{
	return a.date === b.date ? 0 : (a.date < b.date ? 1 : -1);
});

export default posts;
