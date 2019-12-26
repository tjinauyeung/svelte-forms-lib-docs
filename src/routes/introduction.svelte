<script>
  import Code from "../components/Code.svelte";
</script>

<style>
  pre {
    background: var(--secondary);
    padding: 20px;
    border-radius: 8px;
    line-height: 1.8;
    overflow: scroll;
    font-size: 14px;
    color: #fff;
    font-family: Roboto Mono, monospace;
  }
</style>

<h1>Introduction</h1>
<hr />
<p>
  Svelte forms lib is a
  <a href="https://jaredpalmer.com/formik/" target="_blank">Formik</a>
  inspired library for building forms easily in a
  <a href="http://svelte.dev/" target="_blank">Svelte</a>
  project.
</p>
<br />
<h2>Why</h2>
<hr />
<p>
  When building modern web applications forms often play a big part in it. We
  use forms to log in, place orders, book flights and perform other data-entry
  tasks.
</p>
<p>
  In developing a form, it's important to create a flow that guides the user
  efficiently and effectively through the workflow. This library helps you
  building forms by exposing an easy API for form creation, validation and
  submission.
</p>

<br />
<h2>How to get started</h2>
<hr />
<p>Install the project</p>
<pre>npm i svelte-forms-lib</pre>
<p>Import the lib in your .svelte file</p>
<pre>import &#123; createForm &#125; from "svelte-forms-lib";</pre>
<p>
  The <code>createForm</code> function returns helpers that you can hook onto your form template.
</p>
<p>
  See
  <a href="/basic">examples</a>
  for further usage
</p>
