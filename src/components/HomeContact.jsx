import { useForm, ValidationError } from "@formspree/react";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
export default function Contact() {
  const [state, handleSubmit] = useForm("xnnvzlyz");
  if (state.succeeded) {
    toast("message sent succesfully");
  }
  return (
    <div>
      <div className="flex flex-col gap-4 md:gap-6">
        <h2 className="mt-16 text-center text-2xl font-bold">Get in Touch</h2>
        <p className="text-lg text-center max-w-xl mx-auto text-gray-700">
          Have a question or want to discuss a project? I'd love to hear from
          you.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-screen-xl mx-auto"
      >
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 md:mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              placeholder="Your name"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 md:mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              placeholder="your@email.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 md:mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
              placeholder="Your message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <Button className="md:w-full block ml-auto">Send Message</Button>
        </div>
      </form>
    </div>
  );
}
