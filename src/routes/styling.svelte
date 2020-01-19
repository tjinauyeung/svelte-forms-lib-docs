<script>
  import { Form, Field, ErrorMessage } from "svelte-forms-lib";
  import Code from "../components/Code.svelte";
  import { source, highlight } from "../components/Styling";
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

<style>
  /*
    To avoid css naming collisions, css classes are automatically hashed.
    Unfortunately that means if we want to customize the <Field/> component by passing a class attribute,
    we will need to use the :global(.class-name).
    See https://github.com/sveltejs/svelte/issues/2870
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

<h1>Styling</h1>
<p>
  Styling the helper components can be done by passing a class as prop
  e.g.
  <code>{fmtHTML('Field class="css-class-name')}</code>
  and define it in the
  <code>{fmtHTML('style')}</code>
  block.
</p>
<p>
  There is one caveat though; because css classes are hashed automatically to
  avoid naming collisions we need to use the special
  <code>:global</code>
  selector to exclude the hashing for this class. As the name suggests the css
  class will become a global, so pick the name accordingly.
</p>
<p>See code below for example on how this is done.</p>

<Form {...formProps}>
  <label>name</label>
  <Field class="form-field" name="name" />
  <ErrorMessage class="form-error" name="name" />

  <label>email</label>
  <Field class="form-field" name="email" />
  <ErrorMessage class="form-error" name="email" />

  <button type="submit">submit</button>
</Form>

<Code {source} {highlight} />
