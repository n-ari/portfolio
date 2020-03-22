<script>
    import StylishComponent from "../StylishComponent.svelte";
</script>

<style>
    #ratings {
        display: flex;
        margin-left: 2em;
    }

    a {
        text-decoration: none;
    }
    a::after {
        content: none;
    }

    .ac-red {
        color: red;
        font-weight: bold;
    }
    .tc-red {
        color: rgb(239, 58, 58);
        font-weight: bold;
    }
    .cf-red {
        color: red;
        font-weight: bold;
    }
</style>

<div id="ratings">
    <StylishComponent>
        <p><a href="https://atcoder.jp/users/rickytheta" target="_blank" rel="nofollow noopener">AtCoder</a></p>
        <p><a href="https://atcoder.jp/users/rickytheta" target="_blank" rel="nofollow noopener"><span class="ac-red">2807</span></a></p>
    </StylishComponent>
    <StylishComponent>
        <p><a href="https://www.topcoder.com/members/rickytheta/details/?track=DATA_SCIENCE&subTrack=SRM" target="_blank" rel="nofollow noopener">TopCoder</a></p>
        <p><a href="https://www.topcoder.com/members/rickytheta/details/?track=DATA_SCIENCE&subTrack=SRM" target="_blank" rel="nofollow noopener"><span class="tc-red">2411</span></a></p>
    </StylishComponent>
    <StylishComponent>
        <p><a href="http://codeforces.com/profile/rickytheta" target="_blank" rel="nofollow noopener">CodeForces</a></p>
        <p><a href="http://codeforces.com/profile/rickytheta" target="_blank" rel="nofollow noopener"><span class="cf-red">2444</span></a></p>
    </StylishComponent>
</div>
