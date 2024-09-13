'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaFacebookF, FaTwitter, FaGoogle } from 'react-icons/fa'

const steps = ['Personal Info', 'Contact Details', 'Additional Info', 'Message']

export default function ThemedContactForm() {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const validateStep = () => {
    const newErrors = {}
    if (step === 0 && !formData.name) newErrors.name = 'Name is required'
    if (step === 1) {
      if (!formData.email) {
        newErrors.email = 'Email is required'
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid'
      }
      if (!formData.phone) newErrors.phone = 'Phone number is required'
    }
    if (step === 2 && !formData.address)
      newErrors.address = 'Address is required'
    if (step === 3 && !formData.message)
      newErrors.message = 'Message is required'
    return newErrors
  }

  const handleNext = () => {
    const validationErrors = validateStep()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      setStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    setErrors({})
    setStep(prev => prev - 1)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validateStep()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setSubmitted(true)
      // Handle submission
    }
  }

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  }

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <label className='mb-2 block'>
              <span className='text-black dark:text-white'>Name</span>
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-black bg-white text-black shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50 dark:border-white dark:bg-black dark:text-white dark:focus:border-gray-200 dark:focus:ring-gray-200 ${
                  errors.name ? 'border-red-500' : ''
                }`}
              />
              {errors.name && (
                <p className='text-sm text-red-500'>{errors.name}</p>
              )}
            </label>
          </div>
        )
      case 1:
        return (
          <div>
            <label className='mb-2 block'>
              <span className='text-black dark:text-white'>Email</span>
              <input
                type='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-black bg-white text-black shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50 dark:border-white dark:bg-black dark:text-white dark:focus:border-gray-200 dark:focus:ring-gray-200 ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              {errors.email && (
                <p className='text-sm text-red-500'>{errors.email}</p>
              )}
            </label>
            <label className='mb-2 block'>
              <span className='text-black dark:text-white'>Phone</span>
              <input
                type='text'
                name='phone'
                value={formData.phone}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-black bg-white text-black shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50 dark:border-white dark:bg-black dark:text-white dark:focus:border-gray-200 dark:focus:ring-gray-200 ${
                  errors.phone ? 'border-red-500' : ''
                }`}
              />
              {errors.phone && (
                <p className='text-sm text-red-500'>{errors.phone}</p>
              )}
            </label>
          </div>
        )
      case 2:
        return (
          <div>
            <label className='mb-2 block'>
              <span className='text-black dark:text-white'>Address</span>
              <input
                type='text'
                name='address'
                value={formData.address}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-black bg-white text-black shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50 dark:border-white dark:bg-black dark:text-white dark:focus:border-gray-200 dark:focus:ring-gray-200 ${
                  errors.address ? 'border-red-500' : ''
                }`}
              />
              {errors.address && (
                <p className='text-sm text-red-500'>{errors.address}</p>
              )}
            </label>
          </div>
        )
      case 3:
        return (
          <div>
            <label className='mb-2 block'>
              <span className='text-black dark:text-white'>Subject</span>
              <input
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                className='mt-1 block w-full rounded-md border-black bg-white text-black shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50 dark:border-white dark:bg-black dark:text-white dark:focus:border-gray-200 dark:focus:ring-gray-200'
              />
            </label>
            <label className='mb-2 block'>
              <span className='text-black dark:text-white'>Message</span>
              <textarea
                name='message'
                value={formData.message}
                onChange={handleChange}
                className={`mt-1 block w-full rounded-md border-black bg-white text-black shadow-sm focus:border-gray-700 focus:ring focus:ring-gray-700 focus:ring-opacity-50 dark:border-white dark:bg-black dark:text-white dark:focus:border-gray-200 dark:focus:ring-gray-200 ${
                  errors.message ? 'border-red-500' : ''
                }`}
                rows='4'
              ></textarea>
              {errors.message && (
                <p className='text-sm text-red-500'>{errors.message}</p>
              )}
            </label>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className='mx-auto w-full max-w-xl rounded-lg bg-white p-6 shadow-lg dark:bg-black'>
      <h2 className='mb-6 text-center text-3xl font-bold text-black dark:text-white'>
        Contact Me
      </h2>
      <div className='mb-6 flex items-center justify-between'>
        {steps.map((stepName, index) => (
          <div key={index} className='text-center'>
            <div
              className={`mx-auto h-10 w-10 rounded-full ${
                step === index
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
              } flex items-center justify-center`}
            >
              {index + 1}
            </div>
            <span
              className={`mt-2 block text-xs font-semibold ${
                step === index
                  ? 'text-black dark:text-white'
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {stepName}
            </span>
          </div>
        ))}
      </div>
      <AnimatePresence mode='wait'>
        <motion.div
          key={step}
          initial='hidden'
          animate='visible'
          exit='exit'
          variants={formVariants}
          transition={{ duration: 0.5 }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>
      <div className='mt-6 flex justify-between'>
        {step > 0 && (
          <button
            onClick={handlePrevious}
            className='rounded-lg bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
          >
            Previous
          </button>
        )}
        {step < steps.length - 1 && (
          <button
            onClick={handleNext}
            className='ml-auto rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300'
          >
            Next
          </button>
        )}
        {step === steps.length - 1 && (
          <button
            onClick={handleSubmit}
            className='ml-auto rounded-lg bg-green-500 px-4 py-2 text-white hover:bg-green-600'
          >
            Submit
          </button>
        )}
      </div>
      {submitted && (
        <motion.div
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={formVariants}
          transition={{ duration: 0.5 }}
          className='mt-6 text-center'
        >
          <h3 className='text-2xl font-bold text-black dark:text-white'>
            Thank you!
          </h3>
          <p className='text-gray-700 dark:text-gray-300'>
            Your message has been successfully sent.
          </p>
        </motion.div>
      )}
      <div className='mt-6 text-center'>
        <p className='mb-4 text-black dark:text-white'>Quick Connect</p>
        <div className='flex justify-center space-x-4'>
          <a
            href='#'
            className='text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-300'
            aria-label='Connect with Facebook'
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href='#'
            className='text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-300'
            aria-label='Connect with Twitter'
          >
            <FaTwitter size={24} />
          </a>
          <a
            href='#'
            className='text-black hover:text-gray-800 dark:text-white dark:hover:text-gray-300'
            aria-label='Connect with Google'
          >
            <FaGoogle size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}
