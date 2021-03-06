---
title: Sapper + Netlify CMS でポートフォリオとブログを作った
custom_slug: create-portfolio-and-blog-with-sapper-and-netlify-cms
publish_date: '2020-02-07 20:36'
update_date: '2020-02-15 01:12'
thumbnail: /img/noimage.png
tags:
  - diary
---
## 動機

ポートフォリオサイトが若干欲しいなという感情と、最近Svelteを知ったという好奇心と、ブログを作りたかったという欲から、Sapper + Netlify CMS でブログ付きポートフォリオを作りました。

## 作り方

とりあえず sapper-template から適当にページを作ると、ブログのページが申し訳程度に付いてます。中身を見ると `/src/routes/blog/_posts.js` がブログ記事一覧を返す API になっていて、これをいじって markdown ファイルから生成するようにします。`fs` とか `marked` とか `front-matter` を使います。(参考: [該当コミットのファイル](https://github.com/n-ari/portfolio/blob/af5f0f8d6067684a45431de13af8fee378a5d521/src/routes/blog/_posts.js))

今回は markdown ファイルを `/posts` 内に入れるようにしましたが、`npm run dev` で監視されないので、ファイル保存してもブログ部分が更新されない点は微妙です。Netlify CMS 使うので最終的には気にならなくなります。

後は Netlify CMS 用の admin ページを用意します。[Netlify CMS の公式チュートリアル](https://www.netlifycms.org/docs/add-to-your-site/)の通りに進めば大丈夫です。`index.html` には途中で出てくる html ファイルと Netlify Identity Widget を書けば問題なかったです。`config.yml` はお好みで。(参考: [該当コミットのconfig.yml](https://github.com/n-ari/portfolio/blob/c14708463a63f208cdbfceaced11933a52b73fa1/static/admin/config.yml))

ここまで出来たらファイル的には完成で、後は Netlify にデプロイして、Netlify CMS 用の Identity を取得、Content Manager のページからブログ記事が書けることを確認して終わりです。

## 注意点

### Netlify のタイムゾーンが UTC+0

それはそうですが、設定してないとタイムゾーンがずれます。Netlify CMS にも影響するので、slug の date がずれたりします。

Netlify の Settings > Build & deploy > Environment から `TZ: Asia/Tokyo` の環境変数を追加することで解決します。もしくは netlify.toml というファイルを適切に編集してリポジトリに追加してあげても大丈夫らしいです。

### Netlify CMS での日本語入力が怪しい

~~何が問題か知らないしまだ調べてないけど、~~ たまに入力した文字が消えたりカーソルが飛んだりします。

追記: 調べました。

Netlify CMS で利用しているエディタ部分は [Slate](https://github.com/ianstormtaylor/slate) と呼ばれるもので、これ自身が IME との相性が良くないようです。[Close された issue(slate#2944)](https://github.com/ianstormtaylor/slate/issues/2944) にも同様の現象が見られます。

この修正が為されたのは上記 issue#2944 に付いたコメントにある通り、Slate@0.50.0 以降のようで、まだ Netlify CMS に取り込まれていない可能性があります。(参考: [netlify\-cms/package\.json](https://github.com/netlify/netlify-cms/blob/746e5956bc1e2e1bcf6b48ee75f9902aa32f4495/packages/netlify-cms-widget-markdown/package.json))

というわけで Slate さえアップデート出来れば良さそうです~~が、Netlify CMS の詳細を知らないので、多分そんなに簡単な解決策にはなって無いんでしょうね……~~

~~一応、Netlify CMS の issue にも Slate のアップデートを要求するものがありました。同じく IME を使う韓国、中国の方の情報がそこそこ多いので、検索する時はそちらも調べると良いかもしれません。(参考: [Updating Slate editor · Issue \#1347 · netlify/netlify\-cms](https://github.com/netlify/netlify-cms/issues/1347))~~

再追記:

現在、Slate 及び Netlify CMS のコードを読みながら、どうにか Slate 0.57.1 にアップデート出来ないか試しているところです。とりあえず RawEditor (WYSIWYGじゃないほう) については [fork して対応が完了して](https://github.com/n-ari/netlify-cms/tree/1347_update_slate_to_0_57_1)、ビルドして生成された js ファイルを置いて代わりに読み込むことで[実際に使う](https://github.com/n-ari/portfolio/tree/ac650b2d2c70ee58a856387bd1f6de9e6bd05702/static/admin)ことが出来ます。この追記も Slate 0.57.1 を適用した RawEditor で書いていますが、日本語入力の途中で文字が消えることも無く快適に打てています。

ただ、Slate 自体が "currently in beta" なこともあり、例えば Shift + Ctrl + V による Paste without Formatting が正しく処理されないという [issue](https://github.com/ianstormtaylor/slate/issues/3414) / [PR](https://github.com/ianstormtaylor/slate/pull/3415) が出ていたりと、Slate 0.50+ に移植することで IME 対応以外に新たに問題が出る可能性があります。

### Netlify CMS の slug がタイトルから自動生成される

日本語タイトルを入れると、そのまま日本語が slug になるので、Sapper でビルドがこけます。Open な issue に以下のようなものがあり、その中のコメントにある手法を適用すれば解決しそうです。

参考: [Make sluggification visible, customizable, and fail\-safe · Issue \#445 · netlify/netlify\-cms](https://github.com/netlify/netlify-cms/issues/445#issuecomment-463253934)

`fields.slug` を用意し、`slug` からそれを参照するというもの。私は `fields.custom-slug` という項目を用意するようにしています。

### fields は基本的に全部必須

そのうちサムネイル画像とか使うかもしれないなと思って `thumbnail` の項目を作ったんですが、基本的に必須項目になるらしく、急いで No Image の画像を作ったりしました。

## 参考にしたページ

- [Charca/sapper\-blog\-template: Markdown\-based Blog Built with Sapper](https://github.com/Charca/sapper-blog-template)
- [Github \+Gatsby \+ Netlify CMS で個人ブログを公開する \- Qiita](https://qiita.com/Kento75/items/7316dd5b7a8014d6c178)
