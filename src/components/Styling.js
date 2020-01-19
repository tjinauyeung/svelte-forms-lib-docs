import Prism from "prismjs";
import "prism-svelte";

export const source = `
  <script>
    import { Form, Field, ErrorMessage } from "svelte-forms-lib";
    import yup from "yup";

    const formProps = {
      initialValues: { name: "", email: "" },
      validationSchema: yup.object().shape({
        name: yup.string().required(),
        email: yup
          .string()
          .email()
          .required()
      }),
      onSubmit: values => {
        alert(JSON.stringify(values));
      }
    };
  </script>

  <style>
    /*
      To avoid css naming collisions, css classes are automatically hashed.
      Unfortunately that means if we want to customize the helper component e.g. the <Field/> component;
      we will need to use the :global(.class-name) and pass .class-name down as a class prop

      See https://github.com/sveltejs/svelte/issues/2870 for about this issue
    */
    :global(.form-field) {
      font-family: monospace;
      padding: 18px;
      border: none;
      border-radius: 0;
      background: #1e2145;
      color: #fff;
    }
    :global(.form-field:focus) {
      border-color: #5be2a9;
      box-shadow: 0 0 0 5px #5be2a9;
    }
    :global(.form-error) {
      font-family: monospace;
      color: #1e2145;
    }
  </style>

  <Form {...formProps}>
    <label>name</label>
    <Field class="form-field" name="name" />
    <ErrorMessage class="form-error" name="name" />

    <label>email</label>
    <Field class="form-field" name="email" />
    <ErrorMessage class="form-error" name="email" />

    <button type="submit">submit</button>
  </Form>
`;

export const highlight = Prism.highlight(source, Prism.languages.svelte, "svelte");
