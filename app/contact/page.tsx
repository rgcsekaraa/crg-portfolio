'use client';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Contact Me
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Fill out the form below, and I'll get back to you shortly.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
