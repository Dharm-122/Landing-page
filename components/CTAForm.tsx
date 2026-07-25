"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const whatsappPattern = /^[+()\d\s-]{7,}$/;

function isValidOptionalUrl(value: string) {
  if (!value.trim()) return true;

  try {
    new URL(value);
    return true;
  } catch {
    try {
      new URL(`https://${value}`);
      return true;
    } catch {
      return false;
    }
  }
}

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!values.email.trim()) errors.email = "Active email is required.";
  else if (!emailPattern.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";

  if (!values.whatsapp.trim()) errors.whatsapp = "WhatsApp number is required.";
  else if (!whatsappPattern.test(values.whatsapp.trim()))
    errors.whatsapp = "Please enter a valid WhatsApp number.";

  if (!values.businessName.trim())
    errors.businessName = "Business name is required.";

  if (!isValidOptionalUrl(values.website))
    errors.website = "Please enter a valid website or Facebook URL.";

  return errors;
}

export default function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    fullName: false,
    email: false,
    whatsapp: false,
    businessName: false,
    website: false,
    message: false,
  });

  const fieldMeta = useMemo(
    () => [
      {
        name: "fullName" as const,
        label: "Full Name",
        placeholder: "Enter your full name",
        required: true,
        type: "text" as const,
      },
      {
        name: "email" as const,
        label: "Active Email",
        placeholder: "Enter your active email",
        required: true,
        type: "email" as const,
      },
      {
        name: "whatsapp" as const,
        label: "WhatsApp Number",
        placeholder: "Enter your WhatsApp number",
        required: true,
        type: "tel" as const,
      },
      {
        name: "businessName" as const,
        label: "Business Name",
        placeholder: "Enter your business name",
        required: true,
        type: "text" as const,
      },
      {
        name: "website" as const,
        label: "Website or Facebook URL",
        placeholder: "https://example.com",
        required: false,
        type: "url" as const,
      },
    ],
    []
  );

  function updateField<K extends keyof FormValues>(key: K, value: FormValues[K]) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  function blurField<K extends keyof FormValues>(key: K) {
    setTouched((current) => ({ ...current, [key]: true }));
    setErrors(validate(values));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setTouched({
      fullName: true,
      email: true,
      whatsapp: true,
      businessName: true,
      website: true,
      message: true,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 700));
    router.push("/thank-you");
  }

  return (
    <section
      id="lead-form"
      className="mx-auto w-full max-w-4xl px-5 pb-20 pt-10 sm:px-6 lg:px-8"
    >
      <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-soft sm:p-8 lg:p-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
            Book the call
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            Complete the form below to book your free consultation.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
            Share a few details about your business so we can prepare a more
            useful conversation.
          </p>
        </div>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-5 md:grid-cols-2">
            {fieldMeta.map((field) => {
              const isInvalid = touched[field.name] && Boolean(errors[field.name]);
              return (
                <label key={field.name} className="block">
                  <span className="mb-2 block text-sm font-semibold text-ink-800">
                    {field.label}
                    {field.required ? " *" : ""}
                  </span>
                  <input
                    type={field.type}
                    value={values[field.name]}
                    placeholder={field.placeholder}
                    onChange={(event) =>
                      updateField(field.name, event.target.value)
                    }
                    onBlur={() => blurField(field.name)}
                    className={`field-ring w-full rounded-2xl border bg-white px-4 py-4 text-base text-ink-900 outline-none placeholder:text-ink-400 ${
                      isInvalid ? "border-red-400" : "border-ink-200"
                    }`}
                    aria-invalid={isInvalid}
                    aria-describedby={isInvalid ? `${field.name}-error` : undefined}
                  />
                  {isInvalid ? (
                    <p
                      id={`${field.name}-error`}
                      className="mt-2 text-sm font-medium text-red-600"
                    >
                      {errors[field.name]}
                    </p>
                  ) : null}
                </label>
              );
            })}
          </div>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-ink-800">
              Anything You Want to Say
            </span>
            <textarea
              value={values.message}
              placeholder="Tell us anything helpful about your business, goals, or current challenge"
              onChange={(event) => updateField("message", event.target.value)}
              onBlur={() => blurField("message")}
              rows={6}
              className="field-ring w-full rounded-2xl border border-ink-200 bg-white px-4 py-4 text-base text-ink-900 outline-none placeholder:text-ink-400"
            />
          </label>

          <div className="flex flex-col items-stretch gap-4 pt-2 sm:items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center rounded-full bg-gold-300 px-8 py-4 text-base font-bold text-ink-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-200 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {isSubmitting ? "Submitting..." : "Book Free Consultation"}
            </button>
            <p className="text-center text-sm text-ink-600">
              We respect your privacy. No spam.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
