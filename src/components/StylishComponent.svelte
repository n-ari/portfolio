<style>
    :root {
        --w: 0.6em;
        --w2: calc(var(--w) * 0.5);
        --h: 2.2em;
        --h2: calc(var(--h) * 0.5);
    }

    .outer-box {
        position: relative;
        border-bottom: solid 2px black;
        height: var(--h);
        margin: 0.3em;
    }

    .blue-arrow::before {
        content: '';
        position: absolute;
        left: calc(var(--w) * -2 + 0.1px);
        top: calc(var(--h) * -0.5);
        border-left: solid var(--w) transparent;
        border-top: solid var(--h2) #25f2f1;
        border-bottom: solid var(--h2) #25f2f1;
    }
    .blue-arrow {
        position: absolute;
        left: 1em;
        border-left: solid var(--w) #25f2f1;
        border-top: solid var(--h2) transparent;
        border-bottom: solid var(--h2) transparent;
    }

    .black-arrow::before {
        content: '';
        position: absolute;
        left: calc(var(--w2) * -1 - 0.1px);
        border-left: solid var(--w) white;
        border-top: solid var(--h2) transparent;
        border-bottom: solid var(--h2) transparent;
        z-index: 1;
    }
    .black-arrow {
        position: absolute;
        left: 0em;
        height: var(--h);
        border-left: solid var(--w2) black;
    }
    .black-arrow::after {
        content: '';
        position: absolute;
        left: -0.1px;
        border-left: solid var(--w) black;
        border-top: solid var(--h2) transparent;
        border-bottom: solid var(--h2) transparent;
    }

    .content {
        padding: 0;
        margin: 0;
        padding-left: calc(var(--w) * 2.7);
    }
    :global(.content > p) {
        font-size: var(--h2);
        line-height: 1;
    }
    :global(.content *) {
        margin: 0;
        padding: 0;
    }
</style>

<div class="outer-box">
    <div class="black-arrow"></div>
    <div class="blue-arrow"></div>
    <div class="content">
        <slot></slot>
    </div>
</div>
