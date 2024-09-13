// import React, { useState } from 'react';
// import { z } from 'zod';

// // Contact Form State
// interface FormData {
//   name: string;
//   email: string;
//   jobLink?: string;
//   companyName?: string;
//   projectDescription?: string;
//   message: string;
//   contactReason: string;
//   timeline?: string;
// }

// const ContactForm: React.FC = () => {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     message: '',
//     contactReason: '',
//   });
//   const [errors, setErrors] = useState<Partial<FormData>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitError, setSubmitError] = useState<string | null>(null);

//   const steps = [
//     "Hey there! Let's connect! How can I assist you today?",
//     "Tell me more about yourself.",
//     "Wrap it up with your details.",
//   ];

//   const contactReasons = ['Job Opportunity', 'Project Collaboration', 'Feedback', 'Just Saying Hi'];

//   // Validation schema
//   const formSchema = z.object({
//     name: z.string().min(2, { message: 'Name is required' }),
//     email: z.string().email({ message: 'Invalid email address' }),
//     contactReason: z.enum(contactReasons),
//     jobLink: z.string().url().optional().or(z.literal('')),
//     companyName: z.string().min(1, { message: 'Company name is required' }).optional(),
//     projectDescription: z.string().min(10, { message: 'Project description must be at least 10 characters' }).optional(),
//     message: z.string().min(10, { message: 'Message should be at least 10 characters long' }),
//     timeline: z.string().optional(),
//   });

//   const handleNext = () => {
//     const currentStepValidation = validateCurrentStep();
//     if (currentStepValidation) {
//       setStep((prev) => prev + 1);
//       setErrors({});
//     }
//   };

//   const handlePrev = () => {
//     if (step > 0) setStep((prev) => prev - 1);
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateCurrentStep = () => {
//     let isValid = true;
//     const newErrors: Partial<FormData> = {};

//     if (step === 0) {
//       if (!formData.contactReason) {
//         newErrors.contactReason = 'Please select a reason for contact';
//         isValid = false;
//       }
//     } else if (step === 1) {
//       if (formData.contactReason === 'Job Opportunity') {
//         if (formData.jobLink && !z.string().url().safeParse(formData.jobLink).success) {
//           newErrors.jobLink = 'Please enter a valid URL';
//           isValid = false;
//         }
//         if (!formData.companyName) {
//           newErrors.companyName = 'Company name is required';
//           isValid = false;
//         }
//       } else if (formData.contactReason === 'Project Collaboration') {
//         if (!formData.projectDescription || formData.projectDescription.length < 10) {
//           newErrors.projectDescription = 'Project description must be at least 10 characters';
//           isValid = false;
//         }
//       } else if (formData.contactReason === 'Just Saying Hi' || formData.contactReason === 'Feedback') {
//         if (!formData.message || formData.message.length < 10) {
//           newErrors.message = 'Message should be at least 10 characters long';
//           isValid = false;
//         }
//       }
//     } else if (step === 2) {
//       if (!formData.name || formData.name.length < 2) {
//         newErrors.name = 'Name is required';
//         isValid = false;
//       }
//       if (!formData.email || !z.string().email().safeParse(formData.email).success) {
//         newErrors.email = 'Invalid email address';
//         isValid = false;
//       }
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log('Form submission started'); // Debug log

//     const validation = formSchema.safeParse(formData);
//     console.log('Validation result:', validation); // Debug log

//     if (!validation.success) {
//       const errorsObj: Partial<FormData> = {};
//       validation.error.errors.forEach((err) => {
//         const path = err.path[0] as keyof FormData;
//         errorsObj[path] = err.message;
//       });
//       setErrors(errorsObj);
//       console.log('Validation failed. Errors:', errorsObj); // Debug log
//       return;
//     }

//     setIsSubmitting(true);
//     setSubmitError(null);

//     try {
//       console.log('Sending data to server:', formData); // Debug log
//       const response = await fetch('/api/sendEmail', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       console.log('Server response:', response); // Debug log

//       if (!response.ok) {
//         throw new Error('Failed to send email');
//       }

//       const result = await response.json();
//       console.log('Email sent:', result); // Debug log
//       alert('Form submitted and email sent successfully!');
//       setStep(0);
//       setFormData({
//         name: '',
//         email: '',
//         message: '',
//         contactReason: '',
//         jobLink: '',
//         companyName: '',
//         projectDescription: '',
//         timeline: '',
//       });
//     } catch (error) {
//       console.error('Detailed error:', error); // Debug log
//       setSubmitError('Failed to send email. Please try again later.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-lg w-full bg-white shadow-xl rounded-lg p-8 space-y-8">
//         <h2 className="text-4xl font-extrabold text-center text-gray-900">{steps[step]}</h2>

//         <form onSubmit={handleSubmit}>
//           {step === 0 && (
//             <div>
//               <label className="block text-lg font-medium text-gray-700 mb-1">How can I assist you?</label>
//               <select
//                 name="contactReason"
//                 value={formData.contactReason}
//                 onChange={handleInputChange}
//                 className={`w-full px-4 py-3 border ${errors.contactReason ? 'border-red-500' : 'border-gray-300'} rounded-md focus:ring-blue-500 focus:border-blue-500`}
//               >
//                 <option value="">Select a reason</option>
//                 {contactReasons.map((reason) => (
//                   <option key={reason} value={reason}>
//                     {reason}
//                   </option>
//                 ))}
//               </select>
//               {errors.contactReason && <p className="text-red-500 text-sm mt-2">{errors.contactReason}</p>}
//             </div>
//           )}

//           {step === 1 && (
//             <div>
//               {formData.contactReason === 'Job Opportunity' && (
//                 <>
//                   <label className="block mb-2">Job Post Link</label>
//                   <input
//                     type="url"
//                     name="jobLink"
//                     value={formData.jobLink || ''}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border ${errors.jobLink ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                   />
//                   {errors.jobLink && <p className="text-red-500 text-sm">{errors.jobLink}</p>}

//                   <label className="block mt-4 mb-2">Company Name</label>
//                   <input
//                     type="text"
//                     name="companyName"
//                     value={formData.companyName || ''}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                   />
//                   {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName}</p>}
//                 </>
//               )}

//               {formData.contactReason === 'Project Collaboration' && (
//                 <>
//                   <label className="block mb-2">Project Description</label>
//                   <textarea
//                     name="projectDescription"
//                     value={formData.projectDescription || ''}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border ${errors.projectDescription ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                   ></textarea>
//                   {errors.projectDescription && <p className="text-red-500 text-sm">{errors.projectDescription}</p>}

//                   <label className="block mt-4 mb-2">Timeline</label>
//                   <input
//                     type="date"
//                     name="timeline"
//                     value={formData.timeline || ''}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border ${errors.timeline ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                   />
//                   {errors.timeline && <p className="text-red-500 text-sm">{errors.timeline}</p>}
//                 </>
//               )}

//               {(formData.contactReason === 'Just Saying Hi' || formData.contactReason === 'Feedback') && (
//                 <>
//                   <label className="block mb-2">Your Message</label>
//                   <textarea
//                     name="message"
//                     value={formData.message || ''}
//                     onChange={handleInputChange}
//                     className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//                   ></textarea>
//                   {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
//                 </>
//               )}
//             </div>
//           )}

//           {step === 2 && (
//             <div>
//               <label className="block text-lg font-medium text-gray-700 mb-2">Provide your details</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Your Name"
//                 className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//               />
//               {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Your Email"
//                 className={`w-full mt-4 px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
//               />
//               {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//             </div>
//           )}

//           <div className="flex justify-between mt-6">
//             {step > 0 && (
//               <button
//                 type="button"
//                 onClick={handlePrev}
//                 className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-md"
//                 disabled={isSubmitting}
//               >
//                 Back
//               </button>
//             )}

//             {step < steps.length - 1 && (
//               <button
//                 type="button"
//                 onClick={handleNext}
//                 className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//                 disabled={isSubmitting}
//               >
//                 Next
//               </button>
//             )}

//             {step === steps.length - 1 && (
//               <button
//                 type="submit"
//                 className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400"
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Sending...' : 'Submit'}
//               </button>
//             )}
//           </div>

//           {submitError && (
//             <p className="text-red-500 text-sm mt-4 text-center">{submitError}</p>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ContactForm;