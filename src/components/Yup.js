import Prism from "prismjs";
import "prism-svelte";

export const source = `
  <script>
    import { createForm } from "svelte-forms-lib";
    import yup from "yup";

    const { form, errors, state, handleChange, handleSubmit } = createForm({
      initialValues: {
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
        alert(JSON.stringify(values));
      }
    });
  </script>

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
      bind:value={$form.name}
    />
    {#if $errors.name}
      <small>{$errors.name}</small>
    {/if}

    <label for="email">email</label>
    <input
      id="email"
      name="email"
      on:change={handleChange}
      on:blur={handleChange}
      bind:value={$form.email}
    />
    {#if $errors.email}
      <small>{$errors.email}</small>
    {/if}

    <button type="submit">submit</button>
  </form>
`;

export const highlight = Prism.highlight(source, Prism.languages.svelte, "svelte");
