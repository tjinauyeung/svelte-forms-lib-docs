<script>
  import { createForm } from "svelte-forms-lib";
  import Code from "../components/Code.svelte";
  import { source, highlight } from "../components/Basic";

  const { form, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      name: "",
      email: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
</script>

<h1>Basic</h1>
<hr />
<p>
  Here's an example of a basic form component without any form validation. Hover
  over the code snippet to copy over the example and use in your own svelte
  component.
</p>

<form on:submit={handleSubmit}>
  <label for="name">name:</label>
  <input
    id="name"
    name="name"
    on:change={handleChange}
    bind:value={$form.name} />
  <label for="email">email:</label>
  <input
    id="email"
    name="email"
    on:change={handleChange}
    bind:value={$form.email} />
  <button type="submit">Submit</button>
</form>

<Code {source} {highlight} />
