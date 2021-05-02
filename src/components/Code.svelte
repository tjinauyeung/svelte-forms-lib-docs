<script>
  import { onMount } from "svelte";
  export let highlight;
  export let source;

  let pre;
  onMount(() => {
    pre.innerHTML = highlight;
  });

  let copyText = "copy";

  function copy() {
    const textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    textarea.value = source;
    textarea.select();

    try {
      const success = document.execCommand("copy");
      if (success) {
        copyText = "copied!";
      }
      setTimeout(() => {
        copyText = "copy";
      }, 2000);
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    document.body.removeChild(textarea);
  }
</script>

<style>
  .wrapper {
    position: relative;
  }

  .wrapper:hover .copy {
    opacity: 1;
  }

  .copy {
    z-index: 10;
    opacity: 0;
    background: #fff;
    color: #000;
    padding: 10px 14px;
    border-radius: 4px;
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .heading {
    position: absolute;
    text-transform: uppercase;
    letter-spacing: 2px;
    top: 35px;
    left: 40px;
    font-size: 14px;
    font-weight: bold;
    color: #c7c7d4;
  }

  pre {
    background: var(--secondary);
    padding: 50px 20px 40px;
    border-radius: 12px;
    line-height: 1.8;
    overflow: scroll;
    font-size: 14px;
    color: #fff;
    font-family: var(--font-mono);
  }
</style>

<div class="wrapper">
  <h2 class="heading">code</h2>
  <pre bind:this={pre} />
  <button class="copy" on:click={copy}>{copyText}</button>
</div>
