<script>
  // TODO:
  // Workaround for bug when importing svelte components from linked packages
  // https://github.com/sveltejs/svelte/issues/3165
  import { Form, Field, ErrorMessage } from "svelte-forms-lib";
  import Code from "../components/Code.svelte";
  import { source, highlight } from "../components/Helpers";
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
      alert(JSON.stringify(values, null, 2));
    }
  };

  function fmtHTML(string) {
    return `<${string}/>`;
  }
</script>

<h1>Using helper components</h1>
<hr />
<p>
  Here's an example using the helper components i.e.
  <code>{fmtHTML('Form')}</code>
  ,
  <code>{fmtHTML('Field')}</code>
  and
  <code>{fmtHTML('ErrorMessage')}</code>
  .
  <br />
  These components will reduce the boilerplate and make your form code very
  concise.
</p>

<Form {...formProps}>
  <label>name</label>
  <Field name="name" />
  <ErrorMessage name="name" />

  <label>email</label>
  <Field name="email" />
  <ErrorMessage name="email" />

  <button type="submit">submit</button>
</Form>

<Code {source} {highlight} />
