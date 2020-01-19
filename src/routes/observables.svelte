<script>
  import { createForm } from "svelte-forms-lib";
  import Code from "../components/Code.svelte";
  import NoteCSS from "../components/NoteCSS.svelte";
  import { source, highlight } from "../components/Observables";
  import yup from "yup";
  import { fmtHTML } from "../util";

  // mock async request
  const makeRequest = () => new Promise(resolve => setTimeout(resolve, 1000));

  const {
    // observables state
    form,
    errors,
    state,
    touched,
    isValid,
    isSubmitting,
    isValidating,
    // handlers
    handleBlur,
    handleChange,
    handleSubmit
  } = createForm({
    initialValues: {
      name: "",
      email: ""
    },
    validationSchema: yup.object().shape({
      name: yup.string().required(),
      email: yup
        .string()
        .email()
        .required()
    }),
    onSubmit: values => {
      return makeRequest().then(() => {
        alert(JSON.stringify(values, null, 2));
      });
    }
  });
</script>

<style>
  form {
    border-left: 5px solid var(--grey);
  }
  .valid {
    border-color: var(--green);
  }
</style>

<h1>Observables</h1>
<p>
  <code>createForm</code>
  exposes a number of observable values which allows us to observe the state of
  the form and perform UI logic depending on if the form is validating,
  submitting or has an error.
</p>
<p>The complete list of observables are:</p>
<ul>
  <li>
    <code>form</code>
  </li>
  <li>
    <code>state</code>
  </li>
  <li>
    <code>touched</code>
  </li>
  <li>
    <code>errors</code>
  </li>
  <li>
    <code>isValid</code>
  </li>
  <li>
    <code>isValidating</code>
  </li>
  <li>
    <code>isSubmitting</code>
  </li>
</ul>

<p>
  <strong>NOTE:</strong>
  Since they're observables you'll need to either
  <code>subscribe</code>
  or use the the
  <code>$</code>
  prefix in the template to auto-subscribe and access their values e.g.
</p>
<ul>
  <li>
    <code>form</code>
    =
    <code>$form</code>
  </li>
  <li>
    <code>state</code>
    =
    <code>$state</code>
  </li>
  <li>
    <code>touched</code>
    =
    <code>$touched</code>
  </li>
  <li>
    <code>errors</code>
    =
    <code>$errors</code>
  </li>
  <li>
    <code>isValid</code>
    =
    <code>$isValid</code>
  </li>
  <li>
    <code>isValidating</code>
    =
    <code>$isValidating</code>
  </li>
  <li>
    <code>isSubmitting</code>
    =
    <code>$isSubmitting</code>
  </li>
</ul>
<p>
  See the official Svelte
  <a href="https://svelte.dev/tutorial/auto-subscriptions" target="_blank">
    docs
  </a>
  for more on auto subscribing or check out the example below.
</p>

<form class:valid={$isValid} on:submit={handleSubmit}>
  <label>name</label>
  <input name="name" on:keyup={handleChange} />
  {#if $errors.name && $touched.name}
    <small>{$errors.name}</small>
  {/if}

  <label>email</label>
  <input name="email" on:keyup={handleChange} />
  {#if $errors.email && $touched.email}
    <small>{$errors.email}</small>
  {/if}

  <button type="submit" disabled={!$isValid}>
    {#if $isSubmitting}loading...{:else}submit{/if}
  </button>
</form>

<Code {source} {highlight} />
