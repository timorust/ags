import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import Navbar from './Navbar'
import Footer from './Footer'
import { useTranslation } from 'react-i18next'


function Signup() {
  const { t } = useTranslation()

  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async data => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    }
    try {
      const res = await axios.post('https://ags-az.onrender.com/user/signup', userInfo)
      if (res.data) {
        toast.success('Sign up Successfully')
        navigate('/conference', { replace: true })
      }
      localStorage.setItem('Users', JSON.stringify(res.data.user))
    } catch (err) {
      if (err.response) {
        console.log(err)
        toast.error('Error: ' + err.response.data.message)
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className='flex h-screen items-center justify-center'>
        <div className='w-[600px] '>
          <div className='flex modal-box dark:bg-slate-900 dark:text-white items-center justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} method='dialog'>
              <Link
                to='/'
                className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
              >
                ✕
              </Link>

              <h3 className='font-bold text-lg'>{t('Sign up')}</h3>
              <div className='mt-4 space-y-2'>
                <span>{t('Name')}</span>
                <br />
                <input
                  type='text'
                  placeholder={t('Enter your fullname')}
                  className='w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white'
                  {...register('fullname', { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className='text-sm text-red-500'>
                    {t('This field is required')}
                  </span>
                )}
              </div>
              {/* Email */}
              <div className='mt-4 space-y-2'>
                <span>{t('Email')}</span>
                <br />
                <input
                  type='email'
                  placeholder={t('Enter your email')}
                  className='w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white'
                  {...register('email', { required: true })}
                />
                <br />
                {errors.email && (
                  <span className='text-sm text-red-500'>
                    {t('This field is required')}
                  </span>
                )}
              </div>
              {/* Password */}
              <div className='mt-4 space-y-2'>
                <span>{t('Password')}</span>
                <br />
                <input
                  type='text'
                  placeholder={t('Enter your password')}
                  className='w-80 px-3 py-1 border rounded-md outline-none  dark:bg-slate-900 dark:text-white'
                  {...register('password', { required: true })}
                />
                <br />
                {errors.password && (
                  <span className='text-sm text-red-500'>
                    {t('This field is required')}
                  </span>
                )}
              </div>
              {/* Button */}
              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                  {t('Sign up')}
                </button>
                <p className='text-xl'>
                  {t('Have account')}?{' '}
                  <button
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() =>
                      document.getElementById('my_modal_3').showModal()
                    }
                  >
                    {t('Login')}
                  </button>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup
