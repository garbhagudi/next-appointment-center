import Logo from '@/assets/logo';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { BsArrowRight } from 'react-icons/bs';

interface Values {
  email: string;
  password: string;
}

const initialValues: Values = { email: '', password: '' };

const validate = (values: Values) => {
  const errors: Partial<Values> = {};
  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const onSubmit = (values: Values, { setSubmitting }: any) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const MyForm: React.FC = () => (
  <section className="h-full flex items-stretch text-white bg-[url('https://res.cloudinary.com/garbhagudiivf/image/upload/v1670318557/Misc/5564522_ef0kux.jpg')] bg-cover bg-center bg-no-repeat">
    <div className='lg:flex w-1/2 hidden bg-no-repeat relative items-center '>
      <div className='w-full px-24 z-10'>
        <h1 className='text-5xl font-bold text-left tracking-wide font-heading max-w-xl leading-[1.3] text-gray-800'>
          Welcome to{' '}
          <span className='text-brandPink'>GarbhaGudi IVF Centre!</span>
        </h1>
        <p className='text-3xl my-4 text-gray-800 font-bold hover:underline cursor-pointer'>
          Sign in to continue{' '}
          <BsArrowRight className='inline-block text-2xl ml-2' />
        </p>
      </div>
    </div>
    <div className='hidden lg:block w-1 bg-gradient-to-b from-brandPink to-brandPurpleDark'></div>
    <div className='relative lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-white'>
      <div className='absolute w-full h-full bg-gradient-to-br from-brandPink to-brandPurpleDark via-brandPurple opacity-40 overflow-hidden'></div>
      <div className='w-full py-6 z-20'>
        <div className='flex items-center justify-center my-5 mx-auto w-56 xl:w-72 shadow-2xl'>
          <Logo
            className={
              'w-56 h-full px-3 py-2 xl:w-72 bg-white bg-opacity-70 rounded-md shadow-2xl'
            }
          />
        </div>
        <h1 className='text-2xl pb-4 font-heading font-bold text-brandDark '>
          Sign In
        </h1>
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='space-y-6 flex items-center justify-center flex-col'>
              <Field
                type='email'
                name='email'
                placeholder='Email'
                className='text-xl text-center w-96 px-3 py-2 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
              />
              <ErrorMessage
                name='email'
                component='div'
                className='text-base rounded-lg block text-brandPink font-bold font-content'
              />
              <Field
                type='password'
                name='password'
                className='text-xl text-center w-96 px-3 py-2 rounded-lg block border-2 border-brandPink text-brandPurpleDark focus:outline-none focus:border-brandPurpleDark'
                placeholder='Password'
              />
              <ErrorMessage
                name='password'
                component='div'
                className='text-base rounded-lg block'
              />
              <button
                type='submit'
                disabled={isSubmitting}
                className='text-xl mt-8 px-5 py-2 bg-brandPink rounded-lg hover:bg-brandPink3'
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </section>
);

export default MyForm;
