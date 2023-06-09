import { Formik, Form, Field, ErrorMessage } from "formik";

export default function AddUser() {
  return (
    <div className="max-w-7xl mx-auto flex justify-center flex-col ">
      <h1 className="pt-16 pb-8 text-4xl lg:text-5xl font-heading text-center font-bold">
        Add New User
      </h1>
      <Formik
        initialValues={{
          "First Name": "",
          "Last Name": "",
          Username: "",
          Email: "",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validate={(values) => {
          const errors: { [key: string]: string } = {};

          if (!values["First Name"]) {
            errors["First Name"] = "First Name is required";
          }

          if (!values["Last Name"]) {
            errors["Last Name"] = "Last Name is required";
          }

          if (!values["Username"]) {
            errors["Username"] = "Username is required";
          }

          if (!values["Email"]) {
            errors["Email"] = "Email is required";
          } else if (!/^\S+@\S+\.\S+$/.test(values["Email"])) {
            errors["Email"] = "Invalid email address";
          }

          return errors;
        }}
      >
        <Form className="flex items-center justify-center flex-col space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-center flex-col">
              <Field
                type="text"
                name="First Name"
                placeholder="First Name"
                className="text-xl text-center w-80 px-3 py-2 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark"
              />
              <ErrorMessage
                name="First Name"
                component="div"
                className="error text-sm font-content text-brandPink mt-2"
              />
            </div>
            <div className="flex items-center flex-col">
              <Field
                type="text"
                name="Last Name"
                placeholder="Last Name"
                className="text-xl text-center w-80 px-3 py-2 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark"
              />
              <ErrorMessage
                name="Last Name"
                component="div"
                className="error text-sm font-content text-brandPink mt-2"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-center flex-col">
              <Field
                type="text"
                name="Username"
                placeholder="Username"
                className="text-xl text-center w-80 px-3 py-2 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark"
              />
              <ErrorMessage
                name="Username"
                component="div"
                className="error text-sm font-content text-brandPink mt-2"
              />
            </div>
            <div className="flex items-center justify-center flex-col">
              <Field
                type="email"
                name="Email"
                placeholder="Email"
                className="text-xl text-center w-80 px-3 py-2 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark"
              />
              <ErrorMessage
                name="Email"
                component="div"
                className="error text-sm font-content text-brandPink mt-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-5 py-2 my-8 bg-brandPink hover:bg-brandPink3 text-white font-content font-semibold rounded-lg"
          >
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
}
