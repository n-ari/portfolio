<script>
    import Rating from "./Rating.svelte";
    import BetterList from "../BetterList.svelte";
    import { fade } from "svelte/transition";

    let showOthers = false;
</script>

<style>
    .showOthers {
        text-decoration-line: underline;
        cursor: pointer;
    }
</style>

<article>
    <h2>競技プログラミング</h2>
    <Rating />
    <BetterList>
        <li>ハル研究所プログラミングコンテスト2017 <strong>5位</strong> <a href="https://www.hallab.co.jp/progcon/2017/result/" target="_blank" rel="nofollow noopener">順位表</a></li>
        <li>ICPC 2017 アジア地区予選つくば大会 <strong>5位・銅メダル</strong> <a href="https://icpc.iisf.or.jp/2017-tsukuba/regional/results/" target="_blank" rel="nofollow noopener">順位表</a></li>
        <li>ICPC 2018 World Finals <strong>出場</strong> <a href="https://www.titech.ac.jp/news/2018/041689.html" target="_blank" rel="nofollow noopener">東工大ニュース</a></li>
        <li>ICPC 2018 国内予選 <strong>2位</strong> <a href="https://www.titech.ac.jp/news/2018/041994.html" target="_blank" rel="nofollow noopener">東工大ニュース</a></li>
    </BetterList>
    
    <p class="showOthers" on:click="{() => showOthers = !showOthers}">{showOthers ? 'hide' : 'show'} others...</p>
    
    {#if showOthers}
        <div transition:fade>
            <BetterList>
                <li>ICPC 2015 国内予選 <strong>出場・表彰</strong> <a href="https://icpc.iisf.or.jp/2015-tsukuba/domestic/standings-and-results/?lang=ja" target="_blank" rel="nofollow noopener">順位表</a></li>
                <li>ICPC 2016 国内予選 <strong>出場・表彰</strong> <a href="https://icpc.iisf.or.jp/2016-tsukuba/standings-results/?lang=ja" target="_blank" rel="nofollow noopener">順位表</a></li>
                <li>ICPC 2018 アジア地区予選横浜大会 <strong>8位</strong> <a href="https://icpc.iisf.or.jp/2018-yokohama/regional-standings/" target="_blank" rel="nofollow noopener">順位表</a></li>
                <li>ICPC 2019 アジア地区予選横浜大会 <strong>14位</strong> <a href="https://icpc.iisf.or.jp/2019-yokohama/regional-standings/" target="_blank" rel="nofollow noopener">順位表</a></li>

                <li>DISCO presents ディスカバリーチャンネルプログラミングコンテスト2016 本選 <strong>出場</strong> <a href="https://atcoder.jp/contests/discovery2016-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>DISCO presents ディスカバリーチャンネル コードコンテスト2016 本戦 <strong>出場</strong> <a href="https://atcoder.jp/contests/ddcc2016-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>DISCO presents ディスカバリーチャンネル コードコンテスト2017 本戦 <strong>出場</strong> <a href="https://atcoder.jp/contests/ddcc2017-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>DISCO presents ディスカバリーチャンネル コードコンテスト2019 本戦 <strong>出場</strong> <a href="https://atcoder.jp/contests/ddcc2019-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>DISCO presents ディスカバリーチャンネル コードコンテスト2020 本戦 <strong>出場</strong> <a href="https://atcoder.jp/contests/ddcc2020-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>

                <li>CODE FESTIVAL 2015 決勝 <strong>出場</strong> <a href="https://code-festival-2015-final.contest.atcoder.jp/" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>CODE FESTIVAL 2016 Final <strong>出場</strong> <a href="https://atcoder.jp/contests/cf16-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>CODE FESTIVAL 2017 Final <strong>出場</strong> <a href="https://atcoder.jp/contests/cf17-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>CODE FESTIVAL 2018 Final <strong>12位</strong> <a href="https://atcoder.jp/contests/code-festival-2018-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>

                <li>第4回 ドワンゴからの挑戦状 本選 <strong>出場</strong> <a href="https://atcoder.jp/contests/dwacon2018-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>第6回 ドワンゴからの挑戦状 本選 <strong>出場</strong> <a href="https://atcoder.jp/contests/dwacon6th-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>

                <li>全国統一プログラミング王決定戦本戦 <stron>20位</stron> <a href="https://atcoder.jp/contests/nikkei2019-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>第二回全国統一プログラミング王決定戦本戦 <strong>出場</strong> <a href="https://atcoder.jp/contests/nikkei2019-2-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>

                <li>天下一プログラマーコンテスト2016本戦 <strong>出場</strong> <a href="https://atcoder.jp/contests/tenka1-2016-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>Japan Russia Exchange Programming Contest 2017 <strong>出場</strong> <a href="https://atcoder.jp/contests/jrex2017" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>COLOCON -Colopl programming contest 2018- Final <strong>出場</strong> <a href="https://atcoder.jp/contests/colopl2018-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>codeFlyer (bitFlyer Programming Contest) 本選 <strong>出場</strong> <a href="https://atcoder.jp/contests/bitflyer2018-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>CADDi 2018 <strong>10位</strong> <a href="https://atcoder.jp/contests/caddi2018" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>エイシングプログラミングコンテスト 2019 <strong>9位</strong> <a href="https://atcoder.jp/contests/aising2019" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>「みんなのプロコン 2019」決勝 <strong>出場</strong> <a href="https://atcoder.jp/contests/yahoo-procon2019-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>第一回日本最強プログラマー学生選手権決勝 <strong>13位</strong> <a href="https://atcoder.jp/contests/jsc2019-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                
                <li>CODE RUNNER 2015 決勝 <strong>10位</strong></li>
                <li>第2回 RCO日本橋ハーフマラソン 本戦 <strong>8位</strong> <a href="https://atcoder.jp/contests/rco-contest-2018-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>第3回 RCO日本橋ハーフマラソン 予選 <strong>10位</strong> <a href="https://atcoder.jp/contests/rco-contest-2019-qual" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>第4回 RECRUIT 日本橋ハーフマラソン 本戦 <strong>出場</strong> <a href="https://atcoder.jp/contests/rcl-contest-2020-final" target="_blank" rel="nofollow noopener">コンテストページ</a></li>
                <li>ハル研究所プログラミングコンテスト2018 <strong>20位</strong> <a href="https://www.hallab.co.jp/progcon/2018/result/" target="_blank" rel="nofollow noopener">順位表</a></li>
                <li>ハル研究所プログラミングコンテスト2019 <strong>11位</strong> <a href="https://www.hallab.co.jp/progcon/2019/result/" target="_blank" rel="nofollow noopener">順位表</a></li>
            </BetterList>
        </div>
    {/if}
</article>
