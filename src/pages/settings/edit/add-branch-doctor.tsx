import React, { useState, ChangeEvent } from 'react';

interface FormValues {
  doctorName: string;
  department: string;
}

const initialValues: FormValues = {
  doctorName: '',
  department: '',
};

interface Option {
  value: string;
  label: string;
  inputVisible: boolean;
}

const options: Option[] = [
  {
    value: 'Consultation_Fee_Physical',
    label: 'Physical Consultation',
    inputVisible: false,
  },
  {
    value: 'Consultation_Fee_Telephone',
    label: 'Tele Consultation',
    inputVisible: false,
  },
];

const BDoctorForm: React.FC = () => {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [loading, setLoading] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [inputValues, setInputValues] = useState<{ [key: string]: string }>({});

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = event.target.value;
    const isChecked = event.target.checked;

    let updatedSelectedOptions: string[];

    if (isChecked) {
      updatedSelectedOptions = [...selectedOptions, selectedValue];
    } else {
      updatedSelectedOptions = selectedOptions.filter((value) => value !== selectedValue);
    }

    setSelectedOptions(updatedSelectedOptions);

    // Reset input value if the option is deselected
    if (!isChecked) {
      setInputValues((prevInputValues) => {
        const updatedInputValues = { ...prevInputValues };
        delete updatedInputValues[selectedValue];
        return updatedInputValues;
      });
    }};

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const fieldName = event.target.name;
      const fieldValue = event.target.value;
  
      setInputValues((prevInputValues) => ({
        ...prevInputValues,
        [fieldName]: fieldValue,
      }));
    };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Partial<FormValues> = validateForm(values);
    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        const formData = { ...values,
        selectedOptions,
        inputValues,
    };
        const response = await fetch('/api/Branch-doctor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Doctor added to branch successfully');
          console.log(JSON.stringify({ formData }));
          setTimeout(() => 500);
          setValues(initialValues);
          resetForm();
           // Reset form values
          setErrors({}); // Reset errors
        } else {
          alert('Something went wrong!');
        }
      } catch (error) {
        console.error('something went wrong!', error);
      } finally {
        setLoading(false);
      }
    } else {
      setErrors(validationErrors); // Set validation errors
    }
  };

  const resetForm = () => {
    setSelectedOptions([]);
    setInputValues({});
  }; 

  const validateForm = (values: FormValues): Partial<FormValues> => {
    const validationErrors: Partial<FormValues> = {};

    if (!values.doctorName) {
      validationErrors.doctorName = 'Doctor name is required';
    }
    if (!values.department) {
      validationErrors.department = 'Department is required';
    }
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
        <h1 className= 'text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'>Consultation Type</h1>
      {options.map((option) => (
        <div
          key={option.value}
          style={{
            marginBottom: '10px',
            border: `1px solid ${selectedOptions.includes(option.value) ? 'lightblue' : 'white'}`,
            borderRadius: '10px',
            padding: '10px',
            backgroundColor: selectedOptions.includes(option.value) ? 'lightblue' : 'white',
          }}
        >
          <label htmlFor={option.value}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                id={option.value}
                name={option.value}
                value={option.value}
                checked={selectedOptions.includes(option.value)}
                onChange={handleOptionChange}
                style={{ marginRight: '5px' }}
              />
              {option.label}
            </div>
          </label>
          {selectedOptions.includes(option.value) && (
            <div style={{ marginLeft: '30px', marginTop: '10px' }}>
              <label htmlFor={`${option.value}-input`}>Enter value:</label>
              <input
                type="text"
                id={`${option.value}-input`}
                name={option.value}
                value={inputValues[option.value] || ''}
                onChange={handleInputChange}
              />
            </div>
          )}
        </div>
      ))}

      <h2>Selected Options:</h2>
      {selectedOptions.map((option) => (
        <div key={option}>
          {option}: {inputValues[option]}
        </div>
      ))}
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
