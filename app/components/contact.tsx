"use client"
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {

const [state, handleSubmit] = useForm("mnnbrwwk");
  if (state.succeeded) {
    return (
      <section id="contact" className="min-h-[60vh] flex items-center justify-center pt-24 pb-16">
        <div className="panel p-8 md:p-10 max-w-lg w-full text-center">
          <div className="w-14 h-14 bg-[#e5f3ff] rounded-full flex items-center justify-center mx-auto mb-5">
            <svg className="w-7 h-7 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-xl font-semibold mb-2">Thank you!</h2>
          <p className="text-[#374151]">Thanks for reaching out. I&apos;ll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="min-h-[70vh] flex items-center justify-center pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="panel p-8 md:p-10 max-w-lg mx-auto w-full">
          <h1 className="text-2xl font-semibold mb-6 text-center">Contact me</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] outline-none"
              placeholder="your@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-2 border border-[#e5e7eb] rounded-lg focus:ring-2 focus:ring-[#2563eb] focus:border-[#2563eb] outline-none"
              placeholder="Your message..."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#111827] text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#111827] disabled:opacity-50"
          >
            {state.submitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : "Submit"}
          </button>
          </form>
        </div>
      </div>
    </section>
  );
};
