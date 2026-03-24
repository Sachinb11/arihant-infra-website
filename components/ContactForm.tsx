"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  phone: string;
  email?: string;
  interest: string;
  message?: string;
}

interface ContactFormProps {
  projectTitle?: string;
  darkMode?: boolean;
}

export default function ContactForm({ projectTitle, darkMode = true }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      // Try Firebase — gracefully fallback if not configured
      try {
        const { db } = await import("@/lib/firebase");
        const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");
        await addDoc(collection(db, "leads"), {
          ...data,
          project: projectTitle || "General",
          source: "Website Form",
          createdAt: serverTimestamp(),
        });
      } catch (fbError) {
        // Firebase not configured — log and continue with success UX
        console.warn("Firebase not configured:", fbError);
        // Fallback: log to console (replace with EmailJS or backend API as needed)
        console.log("Lead captured:", { ...data, project: projectTitle });
      }
      setStatus("success");
      reset();
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass = darkMode ? "f-in" : "f-in-light";
  const inlineStyle = darkMode
    ? {}
    : {
        background: "rgba(10,15,44,0.04)",
        border: "1px solid rgba(10,15,44,0.12)",
        color: "#1a1a2e",
      };

  const errorStyle = "text-red-400 text-[11px] mt-1 font-body";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      {/* Name & Phone row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            placeholder="Full Name *"
            className={inputClass}
            style={inlineStyle}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className={errorStyle}>{errors.name.message}</p>}
        </div>
        <div>
          <input
            type="tel"
            placeholder="Phone Number *"
            className={inputClass}
            style={inlineStyle}
            {...register("phone", {
              required: "Phone is required",
              pattern: { value: /^[6-9]\d{9}$/, message: "Enter valid 10-digit mobile number" },
            })}
          />
          {errors.phone && <p className={errorStyle}>{errors.phone.message}</p>}
        </div>
      </div>

      {/* Email */}
      <input
        type="email"
        placeholder="Email Address (optional)"
        className={inputClass}
        style={inlineStyle}
        {...register("email", {
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" },
        })}
      />
      {errors.email && <p className={errorStyle}>{errors.email.message}</p>}

      {/* Interest */}
      <select
        className={inputClass}
        style={darkMode ? {} : { ...inlineStyle }}
        {...register("interest", { required: "Please select an option" })}
        defaultValue=""
      >
        <option value="" disabled>
          Interested In... *
        </option>
        <option value="1BHK Flat">1BHK Flat</option>
        <option value="2BHK Flat">2BHK Flat</option>
        <option value="Commercial Shop">Commercial Shop</option>
        <option value="Site Visit">Schedule Site Visit</option>
        <option value="General Inquiry">General Inquiry</option>
      </select>
      {errors.interest && <p className={errorStyle}>{errors.interest.message}</p>}

      {/* Message */}
      <textarea
        rows={3}
        placeholder="Message (optional)"
        className={`${inputClass} resize-none`}
        style={inlineStyle}
        {...register("message")}
      />

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-gold w-full justify-center py-4 text-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <i className="fa-solid fa-spinner fa-spin text-xs"></i> Sending...
          </>
        ) : status === "success" ? (
          <>
            <i className="fa-solid fa-circle-check text-xs"></i> Sent! We&apos;ll call you soon.
          </>
        ) : status === "error" ? (
          <>
            <i className="fa-solid fa-circle-xmark text-xs"></i> Something went wrong. Try again.
          </>
        ) : (
          <>
            <i className="fa-solid fa-paper-plane text-xs"></i> Send Enquiry
          </>
        )}
      </button>

      <p
        className={`text-[10px] font-body text-center ${
          darkMode ? "text-gray-600" : "text-gray-400"
        }`}
      >
        By submitting you agree to be contacted regarding this property.
      </p>
    </form>
  );
}
