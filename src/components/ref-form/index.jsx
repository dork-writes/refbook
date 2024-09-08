import { Form, Formik } from "formik";
import { Input } from "../../common";
import * as yup from "yup";

const RefForm = ({
  initialValues = { title: "", tag: "", link: "", description: "" },
  submitFunction,
  showForm,
  setForm,
}) => {
  document.body.style.height = showForm ? "100vh" : "100%";
  document.body.style.overflow = showForm ? "hidden" : "visible";

  const handleSubmit = (reference, { resetForm }) => {
    submitFunction(reference);
    resetForm();
    setForm();
  };

  const refSchema = yup.object().shape({
    title: yup.string().required(),
    description: yup.string(),
    link: yup.string().required(),
    tag: yup.string().required(),
  });

  return (
    <aside
      className={`${
        showForm ? "flex top-0 left-0" : "hidden"
      } justify-center items-center min-h-screen bg-zinc-800 bg-opacity-80 w-[100%] absolute z-20 transition-all`}
    >
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={refSchema}
      >
        {({ resetForm, errors, touched, values, setFieldValue }) => (
          <Form
            className={`${
              showForm ? "p-5 h-fit popup" : "h-0 p-0"
            } space-y-2.5 w-[95%] sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-zinc-200 font-mono bg-neutral-800 rounded-md shadow-md z-30 overflow-hidden`}
          >
            <div className="ml-auto w-fit space-x-2 md:space-x-1">
              <button
                type="submit"
                className="font-sans bg-sky-600 hover:bg-sky-700 active:bg-sky-600 px-4 py-2 md:px-2 md:py-0.5 rounded-sm transition-all"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setForm();
                  resetForm();
                }}
                className="font-sans bg-red-400 hover:bg-red-500 active:bg-red-400 px-4 py-2 md:px-2 md:py-0.5 rounded-sm transition-all"
              >
                Cancel
              </button>
            </div>
            <Input
              name="title"
              value={values?.title}
              onChange={(e) => setFieldValue("title", e.target.value)}
              errorMsg={touched?.title && errors?.title && errors?.title}
            />
            <Input
              name="description"
              value={values?.description}
              onChange={(e) => setFieldValue("description", e.target.value)}
              errorMsg={
                touched?.description &&
                errors?.description &&
                errors?.description
              }
              rows={4}
            />
            <Input
              name="link"
              value={values?.link}
              onChange={(e) => setFieldValue("link", e.target.value)}
              errorMsg={touched?.link && errors?.link && errors?.link}
            />
            <Input
              name="tag"
              value={values?.tag}
              onChange={(e) => setFieldValue("tag", e.target.value)}
              errorMsg={touched?.tag && errors?.tag && errors?.tag}
            />
            <article className="pt-5 text-orange-300">
              <span className="text-purple-500">export const </span>
              newRef = {"{"} title, description, link {"}"}
              <span className="text-zinc-200">;</span>
            </article>
          </Form>
        )}
      </Formik>
    </aside>
  );
};

export default RefForm;
