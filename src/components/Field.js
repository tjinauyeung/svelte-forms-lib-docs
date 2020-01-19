import Prism from "prismjs";
import "prism-svelte";

export const source = `
  <script>
    import { Form, Field } from "svelte-forms-lib";
    import yup from "yup";

    const formProps = {
      initialValues: {
        text: "",
        email: "",
        password: "",
        number: 0,
        date: ""
      },
      validationSchema: yup.object().shape({
        text: yup.string(),
        email: yup.string().email(),
        password: yup.string(),
        number: yup.number(),
        date: yup.date()
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      }
    };
  </script>

  <Form {...formProps}>
    <label>input[type=text]</label>
    <Field name="text" type="text" />

    <label>input[type=password]</label>
    <Field name="password" type="password" />

    <label>input[type=email]</label>
    <Field name="email" type="email" />

    <label>input[type=number]</label>
    <Field name="number" type="number" />

    <label>input[type=date]</label>
    <Field name="date" type="date" />

    <button type="submit">submit</button>
  </Form>
`;

export const highlight = Prism.highlight(
  source,
  Prism.languages.svelte,
  "svelte"
);
