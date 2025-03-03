"use client";
import { FieldErrors, useForm, UseFormRegister } from 'react-hook-form';
import { useRef, useState} from 'react';
import styles from '@/styles/contact.module.css';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

// New type definitions and components
interface FormField {
  label: string;
  name: keyof ContactFormData;
  type?: string;
  placeholder: string;
  validation?: object;
}


const FormInput = ({ field, register, errors }: {
  field: FormField;
  register: UseFormRegister<ContactFormData>;
  errors: FieldErrors<ContactFormData>;
}) => (
  <div className={styles.inputContainer}>
    {field.type === 'textarea' ? (
      <div className="relative">
        <textarea
          id={field.name}
          {...register(field.name, field.validation)}
          className={styles.textarea}
          placeholder=" "
        />
        <label 
          htmlFor={field.name} 
          className={`${styles.textareaLabel} ${errors[field.name] ? 'text-red-500' : ''}`}
        >
          {field.label}
        </label>
      </div>
    ) : (
      <div className="relative">
        <input
          id={field.name}
          {...register(field.name, field.validation)}
          type={field.type || 'text'}
          className={styles.input}
          placeholder=" "
        />
        <label 
          htmlFor={field.name} 
          className={`${styles.label} ${errors[field.name] ? 'text-red-500' : ''}`}
        >
          {field.label}
        </label>
      </div>
    )}
    {errors[field.name] && (
      <span className={styles.errorMessage} role="alert">
        {errors[field.name]?.message || `${field.label} is required`}
      </span>
    )}
  </div>
);

const ContactPage = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [displayDialog, setDisplayDialog] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
    setIsSubmitting(true)
    try{
      const res = await fetch("/api/contact",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data: data
        })
      })
      setIsSubmitting(false)
      const response = await res.json()
      console.log("Server response:", response);
      setDisplayDialog(true)
      setTimeout(() => {
        window.location.reload();
      }, 2000);
      
    } catch (error) {
        setIsSubmitting(false)
        console.error("Error submitting data:", error);
    }
    // Handle form submission here
  };

  const formFields: FormField[] = [
    {
      label: "Name",
      name: "name",
      placeholder: "Your full name",
      validation: { required: "Name is Required"}
    },
    {
      label: "Email",
      name: "email",
      type: "email",
      placeholder: "your@email.com",
      validation: { 
        required: "Email is required",
        pattern: {
          value: /^\S+@\S+$/i,
          message: "Please enter a valid email address"
        }
      }
    },
    {
      label: "Phone Number",
      name: "phone",
      type: "tel",
      placeholder: "Your phone number",
      validation: { required: false }
    },
    {
      label: "Message",
      name: "message",
      type: "textarea",
      placeholder: "How can we help you?",
      validation: { required: false }
    }
  ];

  return (
    <main className={`w-full min-h-screen transition-colors duration-700`}>
      <section 
        ref={(el: HTMLElement | null) => {
          if (el) sectionRefs.current[0] = el;
        }}
      >
        <div className="max-w-3xl mx-auto p-6">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="leading-tight mt-3">
              Get in Touch With Me!
            </h1>
            <p className="text-gray-600 mt-4">
              I would love to contribute and bring my expertise wherever I can!
            </p>
          </div>

          {/* Contact Form Card */}
          <div className="rounded-3xl shadow-sm border-gray-200 border-2 p-8">
            <div className="grid">
              {/* Form Section */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {formFields.map((field) => (
                  <FormInput
                    key={field.name}
                    field={field}
                    register={register}
                    errors={errors}
                  />
                ))}
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-cardcolour text-black rounded-full hover:bg-gray-200 transition-colors border border-textcolour"
                  disabled = {isSubmitting}
                >
                  {isSubmitting ? (
                    <div className = "w-full relative flex flex-row items-center justify-center">
                        <svg
                            className="animate-spin h-5 w-5 mr-2 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M12 2a10 10 0 00-3.17 19.5 1 1 0 01-1.15-1.63 8 8 0 112.63-15.87 1 1 0 01.69 1.26A10.11 10.11 0 0012 2z"
                            />
                          </svg>
                        Submitting...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
          {displayDialog && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-gray-300/50">
                    <div className="bg-white p-5 rounded shadow-lg">
                        <h2 className="text-lg font-semibold">Thank you!</h2>
                        <p>I have received your details. The page will refresh shortly.</p>
                    </div>
                </div>
            )}
        </div>
      </section>
    </main>
  );
};

export default ContactPage;