<style>
    ul {
        position: relative;
        padding: 0;
        padding-left: 1em;
        list-style-type: none;
    }
    ul :global(li) {
        position: relative;
        padding: 0.1em 0.3em 0.4em 1.5em;
    }
    ul :global(li)::before {
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

<ul>
    <slot></slot>
</ul>
