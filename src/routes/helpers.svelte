<script>
  import { Form, Field, Select, ErrorMessage } from "svelte-forms-lib";
  import Code from "../components/Code.svelte";
  import NoteCSS from "../components/NoteCSS.svelte";
  import { source, highlight } from "../components/Helpers";
  import yup from "yup";
  import { fmtHTML } from "../util";

  const formProps = {
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
  <label>title</label>
  <Select name="title">
    <option />
    <option>Mr.</option>
    <option>Mrs.</option>
    <option>Mx.</option>
  </Select>
  <ErrorMessage name="title" />

  <label>name</label>
  <Field name="name" />
  <ErrorMessage name="name" />

  <label>email</label>
  <Field name="email" type="email" />
  <ErrorMessage name="email" />

  <button type="submit">submit</button>
</Form>

<Code {source} {highlight} />
