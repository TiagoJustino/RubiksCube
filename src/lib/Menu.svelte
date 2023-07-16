<script lang="ts">
  import { fly } from "svelte/transition";
  export let open;
  export let config;
  export let expanded = {};
  const onFolderClick = (folder: string) => {
    expanded[folder] = !expanded[folder];
  };
  const onClick = (f: Function) => {
    const keys = Object.keys(expanded);
    for(const key of keys) {
      expanded[key] = false;
    }
    open = false;
    return f();
  }
</script>

{#if open}
  <div>
    {#each Object.entries(config) as entry, i}
      {#if typeof entry[1] == "function"}
        <p transition:fly={{ y: -15, delay: 50 * i }} on:click={onClick(entry[1])}>
          {entry[0]}
        </p>
      {:else}
        <p
          transition:fly={{ y: -15, delay: 50 * i }}
          on:click={onFolderClick(entry[0])}
        >
          {`${expanded[entry[0]] ? "V" : ">"} ${entry[0]}`}
        </p>
        {#if expanded[entry[0]]}
          {#each Object.entries(entry[1]) as inEntry, j}
            {#if typeof inEntry[1] == "function"}
              <p
                transition:fly={{ y: -15, delay: 50 * j }}
                on:click={onClick(inEntry[1])}
              >
                {`| ${inEntry[0]}`}
              </p>
            {/if}
          {/each}
        {/if}
      {/if}
    {/each}
  </div>
{/if}

<style>
  :global(html) {
  }
  div {
    border-radius: 0.5em;
    background: #363650cb;
    text-align: right;
    font-size: 1.5em;
    letter-spacing: 0.15em;
    padding-top: 0.3em;
    padding-left: 1em;
    padding-right: 1em;
    padding-bottom: 0.5em;
    color: black;
  }
  p {
    margin-top: 0.1em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    margin-bottom: 0.1em;
    cursor: pointer;
    text-align: right;
    width: max-content;
  }
  p:hover {
    text-decoration: underline;
  }
</style>
