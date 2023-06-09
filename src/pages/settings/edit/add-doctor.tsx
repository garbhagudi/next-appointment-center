import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

interface FormValues {
  doctorName: string;
  email: string;
  mobile: string;
  department: string;
  gender: string;
  yearsOfExperience: number;
  registrationNumber: string;
  medicalCouncil: string;
  qualification: string;
  username: string;
  bio: string;
}

const initialValues: FormValues = {
  doctorName: "",
  email: "",
  mobile: "",
  department: "",
  gender: "",
  yearsOfExperience: 0,
  registrationNumber: "",
  medicalCouncil: "",
  qualification: "",
  username: "",
  bio: "",
};

const validateForm = (values: FormValues) => {
  const errors: Partial<FormValues> = {};

  // Add validation logic for each field
  if (!values.doctorName) {
    errors.doctorName = "Doctor name is required";
  }
  if (!values.email) {
    errors.email = "Email is required";
  }
  // Add more validation rules for other fields

  return errors;
};

const handleSubmit = (values: FormValues) => {
  // Handle form submission
  console.log(values);
};

const DoctorForm: React.FC = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validateForm}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="doctorName">Doctor Name:</label>
          <Field type="text" id="doctorName" name="doctorName" />
          <ErrorMessage name="doctorName" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="mobile">Mobile:</label>
          <Field type="text" id="mobile" name="mobile" />
          <ErrorMessage name="mobile" component="div" />
        </div>

        <div>
          <label htmlFor="department">Department:</label>
          <Field type="text" id="department" name="department" />
          <ErrorMessage name="department" component="div" />
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
          <Field as="select" id="gender" name="gender">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </Field>
          <ErrorMessage name="gender" component="div" />
        </div>

        <div>
          <label htmlFor="yearsOfExperience">Years of Experience:</label>
          <Field
            type="number"
            id="yearsOfExperience"
            name="yearsOfExperience"
          />
          <ErrorMessage name="yearsOfExperience" component="div" />
        </div>

        <div>
          <label htmlFor="registrationNumber">
            Medical Registration Number:
          </label>
          <Field
            type="text"
            id="registrationNumber"
            name="registrationNumber"
          />
          <ErrorMessage name="registrationNumber" component="div" />
        </div>

        <div>
          <label htmlFor="medicalCouncil">Medical Council:</label>
          <Field type="text" id="medicalCouncil" name="medicalCouncil" />
          <ErrorMessage name="medicalCouncil" component="div" />
        </div>

        <div>
          <label htmlFor="qualification">Qualification:</label>
          <Field type="text" id="qualification" name="qualification" />
          <ErrorMessage name="qualification" component="div" />
        </div>

        <div>
          <label htmlFor="username">Username:</label>
          <Field type="text" id="username" name="username" />
          <ErrorMessage name="username" component="div" />
        </div>

        <div>
          <label htmlFor="bio">Bio:</label>
          <Field as="textarea" id="bio" name="bio" />
          <ErrorMessage name="bio" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default DoctorForm;
