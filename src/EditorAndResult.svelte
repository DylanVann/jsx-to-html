<script>
  import { transform } from './transform'

  let value = '<div className="my-class" />'
  let code
  let error
  $: {
    try {
      code = transform(value)
      error = undefined
    } catch (e) {
      code = undefined
      error = e
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
    class={`${className}`}
    class:bg-red-200={error}
    class:text-red-800={error}
    value={code || error || ''}
  />
</div>
