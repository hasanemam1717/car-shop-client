import { useState } from "react";
import { useForm } from "react-hook-form";
import { BiLocationPlus } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { PiPhone, PiPlanet } from "react-icons/pi";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("sending");
    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log(data);
      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-neutral mb-6">
            Contact Information
          </h2>

          <div className="space-y-4">
            <div className="flex items-center">
              <BiLocationPlus className="h-6 w-6 text-primary mr-4" />
              <div>
                <h3 className="font-semibold">Our Address</h3>
                <p className="text-neutral">
                  123 Bike Street, Cycling City, BC 12345
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <PiPhone className="h-6 w-6 text-secondary mr-4" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-neutral">(555) 123-4567</p>
                <p className="text-neutral">Support Hours: Mon-Fri, 9am-5pm</p>
              </div>
            </div>

            <div className="flex items-center">
              <MdEmail className="h-6 w-6 text-accent mr-4" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-neutral">support@bikeshop.com</p>
                <p className="text-neutral">sales@bikeshop.com</p>
              </div>
            </div>
          </div>

          {/* Embedded Map Placeholder */}
          <div className="mt-6 bg-base h-64 flex items-center justify-center rounded-lg">
            <span className="text-neutral">Google Maps Integration</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-neutral mb-6">
            Send Us a Message
          </h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-neutral mb-2">Full Name</label>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                })}
                className="w-full p-2 border rounded-md"
                placeholder="Your Full Name"
              />
              {errors.name && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-neutral mb-2">Email Address</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full p-2 border rounded-md"
                placeholder="you@example.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-neutral mb-2">
                Phone Number (Optional)
              </label>
              <input
                {...register("phone", {
                  pattern: {
                    value:
                      /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
                    message: "Invalid phone number",
                  },
                })}
                className="w-full p-2 border rounded-md"
                placeholder="(555) 123-4567"
              />
              {errors.phone && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-neutral mb-2">Your Message</label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                className="w-full p-2 border rounded-md h-32"
                placeholder="Write your message here..."
              ></textarea>
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={submitStatus === "sending"}
              className={`w-full py-3 rounded flex items-center justify-center ${
                submitStatus === "sending"
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-red-600"
              }`}
            >
              {submitStatus === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <PiPlanet className="h-5 w-5 mr-2" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === "success" && (
              <div className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Your message has been sent successfully!
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mt-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                Failed to send message. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
