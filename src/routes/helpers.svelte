<script>
  import { Form, Field, ErrorMessage } from "svelte-forms-lib";
  import Code from "../components/Code.svelte";
  import NoteCSS from "../components/NoteCSS.svelte";
  import { source, highlight } from "../components/Helpers";
  import yup from "yup";
  import { fmtHTML } from "../util";

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
</script>

<h1>Helper components</h1>
<p>
  Here is an example using the helper components i.e.
  <code>{fmtHTML('Form')}</code>
  ,
  <code>{fmtHTML('Field')}</code>
  ,
  <code>{fmtHTML('Select')}</code>
  and
  <code>{fmtHTML('ErrorMessage')}</code>
  .
  <br />
  These components will reduce the boilerplate and make your form code very
  concise.
</p>

<NoteCSS />

<Form {...formProps}>
  <label>name</label>
  <Field class="form-input" name="name" />
  <ErrorMessage class="form-error" name="name" />

  <label>email</label>
  <Field class="form-input" name="email" type="email" />
  <ErrorMessage class="form-error" name="email" />

  <button type="submit">submit</button>
</Form>

<Code {source} {highlight} />
