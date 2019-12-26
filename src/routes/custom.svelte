<script>
  import { createForm } from "svelte-forms-lib";
  import Code from "../components/Code.svelte";
  import { source, highlight } from "../components/Custom";
  import yup from "yup";

  const { form, errors, state, handleChange, handleSubmit } = createForm({
    initialValues: {
      name: "",
      email: ""
    },
    validate: values => {
      let errs = {};
      if (values.name === "") {
        errs["name"] = "custom validation: name is required";
      }
      if (values.email === "") {
        errs["email"] = "custom validation: email is required";
      }
      return errs;
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });
</script>

<h1>Custom validation</h1>
<hr />
<p>
  This example shows how you can use your own validation functions. Validation
  is only fired upon submission. When submitting the
  <code>validate</code>
  callback is called and given the form values at submission time.
</p>
<p>
  In the callback you can construct and return an error object. If the errors
  object contain values the form will not submit and errors can be rendered. If
  an empty object is returned the form will be valid and submit.
</p>

<form on:submit={handleSubmit}>
  <label for="name">name</label>
  <input
    id="name"
    name="name"
    on:change={handleChange}
    bind:value={$form.name} />
  {#if $errors.name}
    <small>{$errors.name}</small>
  {/if}

  <label for="email">email</label>
  <input
    id="email"
    name="email"
    on:change={handleChange}
    bind:value={$form.email} />
  {#if $errors.email}
    <small>{$errors.email}</small>
  {/if}

  <button type="submit">submit</button>
</form>

<Code {source} {highlight} />
