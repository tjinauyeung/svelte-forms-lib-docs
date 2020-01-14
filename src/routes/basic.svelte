<script>
  import { createForm } from "svelte-forms-lib";
  import Code from "../components/Code.svelte";
  import NoteCSS from "../components/NoteCSS.svelte";
  import { source, highlight } from "../components/Basic";
  import { fmtHTML } from "../util";

  const { form, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      title: "",
      name: "",
      email: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
</script>

<h1>Basic</h1>
<p>Here's an example of a basic form component without any form validation.</p>
<p>
  Note that all
  <code>{fmtHTML('input')}</code>
  ,
  <code>{fmtHTML('select')}</code>
  , and other form elements used, require a
  <code>name</code>
  attribute to bind to the correct field in the state.
</p>
<p>
  Hover over the code snippet to copy over the example and use in your own
  svelte component.
</p>

<NoteCSS />

<form on:submit={handleSubmit}>
  <label for="title">title</label>
  <select
    id="title"
    name="title"
    on:change={handleChange}
    bind:value={$form.title}>
    <option></option>
    <option>Mr.</option>
    <option>Mrs.</option>
    <option>Mx.</option>
  </select>

  <label for="name">name</label>
  <input
    id="name"
    name="name"
    on:change={handleChange}
    bind:value={$form.name} />

  <label for="email">email</label>
  <input
    id="email"
    name="email"
    on:change={handleChange}
    bind:value={$form.email} />
  <button type="submit">Submit</button>
</form>

<Code {source} {highlight} />
