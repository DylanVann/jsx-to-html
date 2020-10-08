<script>
  import { transform } from './transform'

  let value = '<div className="my-class" />'
  let code
  $: {
    try {
      code = transform(value)
    } catch (e) {
      console.error(e)
    }
  }

  const className =
    'flex-1 p-3 px-4 focus:outline-none rounded-none focus:shadow-inner'
</script>

<div class="flex flex-row w-full flex-1 divide-x divide-gray-400">
  <textarea
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    spellcheck="false"
    class={className}
    bind:value
  />
  <textarea
    autocomplete="off"
    autocorrect="off"
    autocapitalize="off"
    spellcheck="false"
    class={className}
    value={code}
  />
</div>
