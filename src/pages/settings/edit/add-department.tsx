import React, { useState, ChangeEvent } from 'react';

interface FormValues {
  DepartmentName: string;
}

const initialValues: FormValues = {
  DepartmentName: '',
};

const DepartmentForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Partial<FormValues> = validateForm(values);

    if (Object.keys(validationErrors).length === 0) {
      console.log(values); // Handle form submission
      setValues(initialValues); // Reset form values
      setErrors({}); // Reset errors
    } else {
      setErrors(validationErrors); // Set validation errors
    }
  };

  const validateForm = (values: FormValues): Partial<FormValues> => {
    const validationErrors: Partial<FormValues> = {};

    if (!values.DepartmentName) {
      validationErrors.DepartmentName = 'Department name is required';
    }
    // Add more validation rules for other fields

    return validationErrors;
  };

  return (
    <div>
      <h2 className='text-3xl lg:text-4xl text-center py-10 lg:py-16 font-heading font-bold'>
        Add Department
      </h2>
      <form
        onSubmit={handleSubmit}
        className='max-w-4xl mx-auto flex flex-col items-center justify-center space-y-3 px-3 font-content'
      >
        <div>
          <input
            type='text'
            id='Department Name'
            className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
            name='DEpartment Name'
            placeholder='Department Name'
            value={values.DepartmentName}
            onChange={handleChange}
          />
          {errors.DepartmentName && <div>{errors.DepartmentName}</div>}
        </div>

        <div className='py-16'>
          <button
            type='button'
            className='text-lg text-center px-5 py-2 rounded-lg block border-2 border-brandPink bg-brandPink hover:bg-brandPink4 text-white font-semibold focus:outline-none focus:border-brandPurpleDark'
          >
            Add Doctors
          </button>
        </div>

        <div className='py-16'>
          <button
            type='submit'
            className='text-lg text-center px-5 py-2 rounded-lg block border-2 border-brandPink bg-brandPink hover:bg-brandPink4 text-white font-semibold focus:outline-none focus:border-brandPurpleDark'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepartmentForm;
