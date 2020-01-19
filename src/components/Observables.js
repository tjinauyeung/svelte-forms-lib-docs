import Prism from "prismjs";
import "prism-svelte";

export const source = `
  <script>
    import { createForm } from "svelte-forms-lib";

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
      border-left: 5px solid grey;
    }
    form.valid {
      border-color: green;
    }
    button:disabled {
      background: grey;
    }
  </style>

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
`;

export const highlight = Prism.highlight(
  source,
  Prism.languages.svelte,
  "svelte"
);
