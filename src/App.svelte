<script lang="ts">
  import EditorAndResult from './EditorAndResult.svelte'
  import HeaderAndInfo from './HeaderAndInfo.svelte'
</script>

<style>
  :global(*) {
    box-sizing: border-box;
  }

  :global(body) {
    font-family: sans-serif;
    font-size: 18px;
  }

  :global(html) {
    height: 100%;
  }
</style>

<div class="h-full w-full flex flex-col divide-y divide-gray-400 items-center">
  <HeaderAndInfo />
  <EditorAndResult />
</div>
