<script>
  import { Form, Field, ErrorMessage } from "svelte-forms-lib";
  import Code from "../components/Code.svelte";
  import { source, highlight } from "../components/Field";
  import yup from "yup";
  import { fmtHTML } from "../util";

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

<h1>{fmtHTML('Field')}</h1>
<p>
  The
  <code>{fmtHTML('Field')}</code>
  helper component is essentially an
  <code>{fmtHTML('input')}</code>
  element that is connected to the form state through the context API.
</p>
<p>
  All props passed to the
  <code>{fmtHTML('Field')}</code>
  component are passed on to the input element underneath by default. When you
  need to render a different input type just pass the type as a prop. See
  example underneath.
</p>

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

<Code {source} {highlight} />
