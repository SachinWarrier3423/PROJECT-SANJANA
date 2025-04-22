import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    alert("Thanks for reaching out!");
    reset();
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-brand-light animate-in fade-in duration-700 delay-400"
    >
      <div className="max-w-xl mx-auto space-y-8">
        <h2 className="text-3xl font-bold text-center text-brand-dark">Contact Me</h2>

        {isSubmitSuccessful && (
          <div className="text-green-700 font-medium text-center">Message sent successfully!</div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">Name</label>
            <input
              type="text"
              {...register('name')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            />
            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">Email</label>
            <input
              type="email"
              {...register('email')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            />
            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium text-gray-800 mb-1">Message</label>
            <textarea
              rows={5}
              {...register('message')}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand"
            ></textarea>
            {errors.message && (
              <p className="text-red-600 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-brand-dark text-white py-2 rounded-lg hover:bg-brand transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
