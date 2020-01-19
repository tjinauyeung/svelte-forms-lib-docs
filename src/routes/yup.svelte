<script>
  import { createForm } from "svelte-forms-lib";
  import yup from "yup";
  import Code from "../components/Code.svelte";
  import NoteCSS from "../components/NoteCSS.svelte";
  import { source, highlight } from "../components/Yup";

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      title: "",
      name: "",
      email: ""
    },
    validationSchema: yup.object().shape({
      title: yup
        .string()
        .oneOf(["Mr.", "Mrs.", "Mx."])
        .required(),
      name: yup.string().required(),
      email: yup
        .string()
        .email()
        .required()
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
</script>

<h1>Yup validation</h1>
<p>
  Example using
  <a href="https://github.com/jquense/yup" target="_blank">Yup</a>
  as validation. Installing yup in your project:
<p>

<pre>npm i yup</pre>

<p>
  Yup is a json validator that provides a simple api which allow
  us to validate forms of different shapes. Validation happens when input
  changes and upon form submission.
</p>

<NoteCSS />

<form on:submit={handleSubmit}>
  <label for="title">title</label>
  <select
    id="title"
    name="title"
    on:change={handleChange}
    bind:value={$form.title}>
    <option />
    <option>Mr.</option>
    <option>Mrs.</option>
    <option>Mx.</option>
  </select>
  {#if $errors.title}
    <small>{$errors.title}</small>
  {/if}

  <label for="name">name</label>
  <input
    id="name"
    name="name"
    on:change={handleChange}
    on:blur={handleChange}
    bind:value={$form.name} />
  {#if $errors.name}
    <small>{$errors.name}</small>
  {/if}

  <label for="email">email</label>
  <input
    id="email"
    name="email"
    on:change={handleChange}
    on:blur={handleChange}
    bind:value={$form.email} />
  {#if $errors.email}
    <small>{$errors.email}</small>
  {/if}

  <button type="submit">submit</button>
</form>

<Code {source} {highlight} />
