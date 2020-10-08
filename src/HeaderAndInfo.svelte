<script>
  let showInfo = false
</script>

<style>
  .row {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 6ch min-content 6ch 1fr;
  }

  .row > div:nth-child(2) {
    text-align: right;
  }

  .row > div:nth-child(4) {
    text-align: left;
  }

  button:focus {
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 200, 0.7));
  }

  a {
    --text-opacity: 1;
    color: rgba(49, 130, 206, var(--text-opacity));
  }

  a:focus {
    color: rgba(44, 82, 130, var(--text-opacity));
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
  }
</style>

<div class="row p-3 px-4 items-center">
  <div />
  <div>JSX</div>
  <div>→</div>
  <div>HTML</div>
  <div class="text-right flex flex-row items-center">
    <button class="focus:outline-none" on:click={() => (showInfo = !showInfo)}>
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path
          d="M12 20a8 8 0 100-16 8 8 0 000 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4h2v2h-2V7z"
          fill="#000"
          fill-rule="nonzero"
        /></svg>
    </button>
    <div class="flex-1">
      Created by
      <a
        class="focus:outline-none"
        href="https://twitter.com/atomarranger"
        target="_blank"
        rel="noopener"
      >
        @atomarranger
      </a>
    </div>
  </div>
</div>
{#if showInfo}
  <div class="w-full p-3 px-4">
    <div class="prose mx-auto">
      You may wish to use this if you're moving code over from React to another
      framework that does not use{' '}
      <code>camelCase</code>
      attributes, e.g. Svelte or Vue.
      <br />
      <br />
      The name of this is not exactly accurate. It will process any JS code you
      give it and convert JSX prop names to their DOM equivalents (e.g.
      <code>className</code>
      {'=>'}
      <code>class</code>). You'll likely still need to cleanup some things and
      make some changes after using this.
      <br />
      <br />
      <strong>This tool does not:</strong>
      <ul>
        <li>
          Convert React (JS) code to other languages. It really just converts
          the prop names.
        </li>
        <li>
          Expand self closing tags, since other frameworks (Svelte/Vue) also
          support self closing tags.
        </li>
        <li>
          Handle all edge cases in prop names. I can't think of anything it
          doesn't handle, but I'm not claiming it's comprehensive.
        </li>
      </ul>
      <a
        href="https://github.com/DylanVann/jsx-to-html"
        target="_blank"
        rel="noopener"
        class="focus:outline-none"
      >
        Source code is on GitHub.
      </a>
    </div>
  </div>
{/if}
