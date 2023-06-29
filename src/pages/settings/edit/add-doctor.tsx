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
  image: ArrayBuffer | string;
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
  const [loading, setLoading] = useState(false);

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

  const handlePhoneChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (value.match(/^\d{0,10}$/)) {
      setValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      setSelectedImage(file);
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      }).then((base64) => {
        setValues((prevValues) => ({
          ...prevValues,
          image: base64 as string,
        }));
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors: Partial<FormValues> = validateForm(values);
    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        const formData = { ...values };
        const response = await fetch('/api/doctors', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Doctor added successfully');
          console.log(JSON.stringify({ formData }));

          // setValues(initialValues); // Reset form values
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

  const validateForm = (values: FormValues): Partial<FormValues> => {
    const validationErrors: Partial<FormValues> = {};

    if (!values.doctorName) {
      validationErrors.doctorName = 'Doctor name is required';
    }
    if (!values.email) {
      validationErrors.email = 'Email is required';
    }
    if (!values.mobile) {
      validationErrors.mobile = 'Mobile number is required';
    }
    if (!values.department) {
      validationErrors.department = 'Department is required';
    }
    if (!values.gender) {
      validationErrors.gender = 'Please Select Gender';
    }
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
          {errors.doctorName && (
            <div className='text-brandPink text-sm text-center'>
              {errors.doctorName}
            </div>
          )}
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
            {errors.username && (
              <div className='text-brandPink text-sm text-center'>
                {errors.username}
              </div>
            )}
          </div>
          <div>
            <input
              type='password'
              id='password'
              name='password'
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
            {errors.email && (
              <div className='text-brandPink text-sm text-center'>
                {errors.email}
              </div>
            )}
          </div>
          <div>
            <input
              type='text'
              id='mobile'
              placeholder='Mobile'
              name='mobile'
              className='text-lg text-center px-2.5 py-1.5 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              value={values.mobile}
              onChange={handlePhoneChnage}
            />
            {errors.mobile && (
              <div className='text-brandPink text-sm text-center'>
                {errors.mobile}
              </div>
            )}
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
            {errors.department && (
              <div className='text-brandPink text-sm text-center'>
                {errors.department}
              </div>
            )}
          </div>
          <div className='w-full flex flex-col gap-3 items-center justify-center'>
            <div className='flex items-center justify-center gap-3'>
              <div className='flex items-center'>
                <input
                  type='radio'
                  id='male'
                  name='gender'
                  value='male'
                  checked={values.gender === 'male'}
                  onChange={handleChange}
                  className='mr-2'
                />
                <label htmlFor='male'>Male</label>
              </div>
              <div className='flex items-center'>
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  value='female'
                  checked={values.gender === 'female'}
                  onChange={handleChange}
                  className='mr-2 bg-slate-400'
                />
                <label htmlFor='female'>Female</label>
              </div>
            </div>
            {errors.gender && (
              <div className='text-brandPink text-sm text-center'>
                {errors.gender}
              </div>
            )}
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
            {errors.medicalCouncil && (
              <div className='text-brandPink text-sm text-center'>
                {errors.medicalCouncil}
              </div>
            )}
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
            {errors.qualification && (
              <div className='text-brandPink text-sm text-center'>
                {errors.qualification}
              </div>
            )}
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
            {loading ? 'Loading' : 'Submit'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DoctorForm;

const Loader = () => {
  <div></div>;
};
