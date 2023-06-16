import React, { useState, ChangeEvent } from 'react';

interface FormValues {
  doctorName: string;
  email: string;
  mobile: string;
  department: string;
  gender: string;
  yearsOfExperience: string;
  registrationNumber: string;
  medicalCouncil: string;
  qualification: string;
  username: string;
  bio: string;
  image: string;
  password: string;
}

const initialValues: FormValues = {
  doctorName: '',
  email: '',
  mobile: '',
  department: '',
  gender: '',
  yearsOfExperience: '',
  registrationNumber: '',
  medicalCouncil: '',
  qualification: '',
  username: '',
  bio: '',
  image: '',
  password: '',
};

const DoctorForm: React.FC = () => {
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

    if (!values.doctorName) {
      validationErrors.doctorName = 'Doctor name is required';
    }
    if (!values.email) {
      validationErrors.email = 'Email is required';
    }
    // Add more validation rules for other fields

    return validationErrors;
  };

  return (
    <div>
      <h2 className='text-3xl lg:text-4xl text-center py-10 lg:py-16 font-heading font-bold'>
        Add Doctor
      </h2>
      <form
        onSubmit={handleSubmit}
        className='max-w-4xl mx-auto flex flex-col items-center justify-center space-y-3 px-3 font-content'
      >
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

        <div className='grid lg:grid-cols-2 gap-3'>
          <div>
            <input
              type='text'
              id='username'
              placeholder='Username'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              name='username'
              value={values.username}
              onChange={handleChange}
            />
            {errors.username && <div>{errors.username}</div>}
          </div>
          <div>
            <input
              type='password'
              id='password'
              placeholder='Password'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              name='password'
              value={values.password}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-3'>
          <div>
            <input
              type='email'
              id='email'
              placeholder='Email'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              name='email'
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && <div>{errors.email}</div>}
          </div>
          <div>
            <input
              type='text'
              id='mobile'
              placeholder='Mobile'
              name='mobile'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              value={values.mobile}
              onChange={handleChange}
            />
            {errors.mobile && <div>{errors.mobile}</div>}
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-3'>
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
          <div className='w-full'>
            <select
              id='gender'
              name='gender'
              className='text-lg w-56 text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              value={values.gender}
              onChange={handleChange}
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
            {errors.gender && <div>{errors.gender}</div>}
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-3'>
          <div>
            <input
              type='text'
              id='yearsOfExperience'
              placeholder='Years of Experience'
              name='yearsOfExperience'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              value={values.yearsOfExperience}
              onChange={handleChange}
            />
            {errors.yearsOfExperience && <div>{errors.yearsOfExperience}</div>}
          </div>
          <div>
            <input
              type='text'
              id='registrationNumber'
              name='registrationNumber'
              placeholder='Medical Registration Number'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              value={values.registrationNumber}
              onChange={handleChange}
            />
            {errors.registrationNumber && (
              <div>{errors.registrationNumber}</div>
            )}
          </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-3'>
          <div>
            <input
              type='text'
              id='medicalCouncil'
              name='medicalCouncil'
              placeholder='Medical Council'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              value={values.medicalCouncil}
              onChange={handleChange}
            />
            {errors.medicalCouncil && <div>{errors.medicalCouncil}</div>}
          </div>
          <div>
            <input
              type='text'
              id='qualification'
              name='qualification'
              placeholder='Qualification'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              value={values.qualification}
              onChange={handleChange}
            />
            {errors.qualification && <div>{errors.qualification}</div>}
          </div>
        </div>

        <div className='flex justify-center items-center space-x-3'>
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
        </div>

        <div>
          <textarea
            id='bio'
            name='bio'
            placeholder='Bio'
            className='text-xl lg:w-96 lg:h-44 text-center px-3 py-2 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
            value={values.bio}
            onChange={handleChange}
          />
          {errors.bio && <div>{errors.bio}</div>}
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

export default DoctorForm;
