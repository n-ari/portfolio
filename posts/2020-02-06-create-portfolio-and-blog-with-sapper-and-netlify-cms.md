---
title: Sapper + Netlify CMS でポートフォリオとブログを作った
custom_slug: create-portfolio-and-blog-with-sapper-and-netlify-cms
date: 2020-02-06T18:05:19.352Z
thumbnail: /img/noimage.png
tags:
  - diary
---
## 動機

ポートフォリオサイトが若干欲しいなという感情と、最近Svelteを知ったという好奇心と、ブログを作りたかったという欲から、Sapper + Netlify CMS でブログ付きポートフォリオを作りました。

## 作り方

とりあえず sapper-template から適当にページを作ると、ブログのページが申し訳程度に付いてます。

中身を見ると `/src/routes/blog/_posts.js` がブログ記事一覧を返す API になっていて、これをいじって markdown ファイルから生成するようにします。`fs` とか `marked` とか `front-matter` を使います。

[参考: 該当コミットのファイル](https://github.com/n-ari/portfolio/blob/af5f0f8d6067684a45431de13af8fee378a5d521/src/routes/blog/_posts.js)

今回は markdown ファイルを `/posts` 内に入れるようにしましたが、`npm run dev` で監視されないので、ファイル保存してもブログ部分が更新されない点は微妙です。Netlify CMS 使うので最終的には気にならなくなります。

後は Netlify CMS 用の admin ページを用意します。

[Netlify CMS の公式チュートリアル](https://www.netlifycms.org/docs/add-to-your-site/)の通りに進めば大丈夫です。`index.html` には途中で出てくる html ファイルと Netlify Identity Widget を書けば問題なかったです。`config.yml` はお好みで。

[参考: 該当コミットのconfig.yml](https://github.com/n-ari/portfolio/blob/c14708463a63f208cdbfceaced11933a52b73fa1/static/admin/config.yml)

ここまで出来たらファイル的には完成で、後は Netlify にデプロイして、Netlify CMS 用の Identity を取得、Content Manager のページからブログ記事が書けることを確認して終わりです。

## 注意点

### Netlify CMS での日本語入力が怪しい

何が問題か知らないしまだ調べてないけど、たまに入力した文字が消えたりカーソルが飛んだりします。

### Netlify CMS の slug がタイトルから自動生成される

日本語タイトルを入れると、そのまま日本語が slug になるので、Sapper でビルドがこけます。

Open な issue に以下のようなものがあり、その中のコメントにある手法を適用すれば解決しそうです。

[Make sluggification visible, customizable, and fail\-safe · Issue \#445 · netlify/netlify\-cms](https://github.com/netlify/netlify-cms/issues/445#issuecomment-463253934)

`fields.slug` を用意し、`slug` からそれを参照するというもの。

私は `fields.custom-slug` という項目を用意するようにしています。

### fields は基本的に全部必須

そのうちサムネイル画像とか使うかもしれないなと思って `thumbnail` の項目を作ったんですが、基本的に必須項目になるらしく、急いで No Image の画像を作ったりしました。

## 参考にしたページ

- [Charca/sapper\-blog\-template: Markdown\-based Blog Built with Sapper](https://github.com/Charca/sapper-blog-template)
- [Github \+Gatsby \+ Netlify CMS で個人ブログを公開する \- Qiita](https://qiita.com/Kento75/items/7316dd5b7a8014d6c178)
