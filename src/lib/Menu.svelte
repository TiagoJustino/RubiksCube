<script>
  import { fly, scale } from "svelte/transition";
  import { quadOut } from "svelte/easing";

  export let open;
</script>

{#if open}
  <div>
    {#each ["Home", "Example", "About", "Contact"] as link, i}
      <p transition:fly={{ y: -15, delay: 50 * i }}>
        {link}
      </p>
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
