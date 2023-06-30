import React, { useState, ChangeEvent } from 'react';

interface FormValues {
  doctorName: string;
  department: string;
  Consultation_type: string;
  Consultation_Fees: string;
}

const initialValues: FormValues = {
  doctorName: '',
  department: '',
  Consultation_type: '',
  Consultation_Fees: '',
};

const BDoctorForm: React.FC = () => {
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

    if (!values.doctorName) {
      validationErrors.doctorName = 'Doctor name is required';
    }
    if (!values.department) {
      validationErrors.department = 'Department is required';
    }
    // if (!values.Consultation_Fees) {
    //   validationErrors.Consultation_Fees = 'Consultaion fee cannot be empty';
    // }
    // Add more validation rules for other fields

    return validationErrors;
  };

  return (
    <div>
      <h2 className='text-3xl lg:text-4xl text-center py-10 lg:py-16 font-heading font-bold'>
        Add Branch Doctor
      </h2>
      <form
        onSubmit={handleSubmit}
        className='max-w-4xl mx-auto flex flex-col items-center justify-center space-y-3 px-3 font-content'
      >
        <div className='grid lg:grid-cols-1 gap-3'>
          <div>
            <input
              type='text'
              id='department'
              placeholder='Department'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              name='department'
              value={values.department}
              onChange={handleChange}
            />
            {errors.department && <div>{errors.department}</div>}
          </div>
        </div>

        <div>
          <input
            type='text'
            id='doctorName'
            className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
            name='doctorName'
            placeholder='Doctor Name'
            value={values.doctorName}
            onChange={handleChange}
          />
          {errors.doctorName && <div>{errors.doctorName}</div>}
        </div>

        {/* <h2 className='text-3xl lg:text-4xl text-center py-10 lg:py-16 font-text font-bold  '>
          Consultation Type Consultation Fee
        </h2> */}

        <div className='grid lg:grid-cols-1 gap-3'>
          <div>
            <input
              type='text'
              id='Consultation_Fees'
              placeholder='Consultation Fee'
              className='text-lg text-centre px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              name='Consultation_Fees'
              value={values.Consultation_Fees}
              onChange={handleChange}
            />
            {errors.Consultation_Fees && <div>{errors.Consultation_Fees}</div>}
          </div>
          <div>
            <input
              type='text'
              id='Consulation_Fees'
              placeholder='Consulation Fee'
              name='Consulation_Fees'
              className='text-lg text-centre px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              value={values.Consultation_Fees}
              onChange={handleChange}
            />
            {errors.Consultation_Fees && <div>{errors.Consultation_Fees}</div>}
          </div>
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

export default BDoctorForm;
