import { useFormik } from 'formik'
import * as Yup from 'yup'
function SignUp() {
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      company: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Cannot be more than 15 characters')
        .required('Required'),
      lastName: Yup.string()
        .max(15, 'Cannot be more than 15 characters')
        .required('Required'),
      company: Yup.string().max(30, 'Cannot be more than 30 characters'),
      phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid')
        .max(11, 'Cannot be more than 11 digits'),
      email: Yup.string().email('Invalid Email').required('Required'),
      password: Yup.string().required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password does not match')
        .required('Required'),
    }),
    onSubmit: () => {
      console.log(formik.values)
    },
  })
  console.log(formik.errors)
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className='relative z-0 mb-6 w-full group'>
        <input
          type='email'
          name='email'
          id='floating_email'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required=''
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
            <span class='font-medium'>Oops!</span> {formik.errors.email}
          </p>
        ) : null}
        <label
          htmlFor='floating_email'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Email address
        </label>
      </div>
      <div className='relative z-0 mb-6 w-full group'>
        <input
          type='password'
          name='password'
          id='floating_password'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required=''
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.password && formik.errors.password ? (
          <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
            <span class='font-medium'>Oops!</span> {formik.errors.password}
          </p>
        ) : null}
        <label
          htmlFor='floating_password'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Password
        </label>
      </div>
      <div className='relative z-0 mb-6 w-full group'>
        <input
          type='password'
          name='confirmPassword'
          id='floating_repeat_password'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
          placeholder=' '
          required=''
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
            <span class='font-medium'>Oops!</span>{' '}
            {formik.errors.confirmPassword}
          </p>
        ) : null}
        <label
          htmlFor='floating_repeat_password'
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          Confirm password
        </label>
      </div>
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 mb-6 w-full group'>
          <input
            type='text'
            name='firstName'
            id='floating_first_name'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required=''
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
              <span class='font-medium'>Oops!</span> {formik.errors.firstName}
            </p>
          ) : null}
          <label
            htmlFor='floating_first_name'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            First name
          </label>
        </div>
        <div className='relative z-0 mb-6 w-full group'>
          <input
            type='text'
            name='lastName'
            id='floating_last_name'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required=''
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
              <span class='font-medium'>Oops!</span> {formik.errors.lastName}
            </p>
          ) : null}
          <label
            htmlFor='floating_last_name'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Last name
          </label>
        </div>
      </div>
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='relative z-0 mb-6 w-full group'>
          <input
            type='tel'
            name='phone'
            id='floating_phone'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required=''
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
              <span class='font-medium'>Oops!</span> {formik.errors.phone}
            </p>
          ) : null}
          <label
            htmlFor='floating_phone'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Phone number (123-456-7890)
          </label>
        </div>
        <div className='relative z-0 mb-6 w-full group'>
          <input
            type='text'
            name='company'
            id='floating_company'
            className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
            placeholder=' '
            required=''
            value={formik.values.company}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.company && formik.errors.company ? (
            <p class='mt-2 text-sm text-red-600 dark:text-red-500'>
              <span class='font-medium'>Oops!</span> {formik.errors.company}
            </p>
          ) : null}
          <label
            htmlFor='floating_company'
            className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
          >
            Company (Ex. Google)
          </label>
        </div>
      </div>
      <button
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Submit
      </button>
    </form>
  )
}

export default SignUp
