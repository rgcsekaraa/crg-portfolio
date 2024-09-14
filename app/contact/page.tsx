'use client';
import ContactForm from '@/components/contact-form';

const ContactPage = () => {
  return (
      <div className="max-w-lg w-full space-y-1 p-8 bg-white shadow-lg rounded-xl dark:bg-slate-800">
        <div className="text-center">
          <h2 className="text-3xl font-light text-gray-900 dark:text-gray-50">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-200 mb-4">
            Have a question or want to work together? Fill out the form below and I&apos;ll respond as soon as I can.
          </p>
        </div>
        <div className="space-y-8">
          <ContactForm />
        </div>
      </div>
  );
};

export default ContactPage;
