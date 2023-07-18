import React, { useState, ChangeEvent } from 'react';

interface FormValues {
  Name: string;
  Address: string;
}

const initialValues: FormValues = {
  Name: '',
  Address: '',
};

const BranchForm: React.FC = () => {
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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(file);
    }
  };

  const handleImageUpload = () => {
    if (selectedImage) {
      console.log('Selected image:', selectedImage);
      // Add code to upload the image to a server or cloud storage
    }
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

    if (!values.Name) {
      validationErrors.Name = 'Branch name is required';
    }
    if (!values.Address) {
      validationErrors.Address = 'Address is required';
    }
    // Add more validation rules for other fields

    return validationErrors;
  };

  return (
    <div>
      <h2 className='text-3xl lg:text-4xl text-center py-10 lg:py-16 font-heading font-bold'>
        Add Branch
      </h2>
      <form
        onSubmit={handleSubmit}
        className='max-w-4xl mx-auto flex flex-col items-center justify-center space-y-3 px-3 font-content'
      >
        <div>
          <input
            type='text'
            id='Branch Name'
            className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
            name='Branch Name'
            placeholder='Branch Name'
            value={values.Name}
            onChange={handleChange}
          />
          {errors.Name && <div>{errors.Name}</div>}
        </div>

        <div className='grid lg:grid-cols-1 gap-3'>
          <div>
            <input
              type='text'
              id='Branch Address'
              placeholder='Branch Address'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              name='Branch Address'
              value={values.Address}
              onChange={handleChange}
            />
            {errors.Address && <div>{errors.Address}</div>}
          </div>
        </div>
        {/* <div className='flex justify-center items-center space-x-3'>
          <input
            type='file'
            accept='image/*'
            onChange={handleImageChange}
            className='hidden'
            id='image-upload-input'
          />
          <label
            htmlFor='image-upload-input'
            className='px-4 py-2 bg-brandPink text-white rounded-md cursor-pointer'
          >
            Select Image
          </label>
          <button
            onClick={handleImageUpload}
            className='px-4 py-2 bg-brandPurpleDark text-white rounded-md disabled:bg-brandPurple'
            disabled={!selectedImage}
          >
            Upload
          </button>
          {selectedImage && (
            <div className='mt-4'>
              <img
                src={URL.createObjectURL(selectedImage)}
                alt='Selected'
                className='w-48 h-auto rounded-md'
              />
            </div>
          )}
        </div> */}

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

export default BranchForm;
