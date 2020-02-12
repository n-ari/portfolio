<style>
	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	ul > li {
		display: block;
		float: left;
		padding: 0.5em 0.5em;
        margin: 0.3em 0.2em;
        border: solid 1px #999999;
        border-radius: 0.3em;

        /* text-align: center; */
        font-size: 0.8em;
	}

    a.ac-red {
        text-decoration: none;
    }
    .ac-red {
        color: red;
        font-weight: bold;
    }

    a.tc-red {
        text-decoration: none;
    }
    .tc-red {
        color: rgb(239, 58, 58);
        font-weight: bold;
    }

    a.cf-red {
        text-decoration: none;
    }
    .cf-red {
        color: red;
        font-weight: bold;
    }
</style>

<div id="ratings">
    <ul>
        <li>
            AtCoder: <a href="https://atcoder.jp/users/rickytheta" class="ac-red">rickytheta</a><br>
            Rating: <span class="ac-red">2807</span> (highest: <span class="ac-red">2866</span>)
        </li>
        <li>
            TopCoder: <a href="https://www.topcoder.com/members/rickytheta/details/?track=DATA_SCIENCE&subTrack=SRM" class="tc-red">rickytheta</a><br>
            Rating: <span class="tc-red">2411</span> (highest: <span class="tc-red">2418</span>)
        </li>
        <li>
            CodeForces: <a href="http://codeforces.com/profile/rickytheta" class="cf-red">rickytheta</a><br>
            Rating: <span class="cf-red">2444</span> (highest: <span class="cf-red">2444</span>)
        </li>
    </ul>
</div>
