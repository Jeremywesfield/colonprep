import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { orderSchema, type OrderFormData } from "../schemas/order";
import "./OrderModal.css";

interface OrderModalProps {
  open: boolean;
  onClose: () => void;
}

function OrderModal({ open, onClose }: OrderModalProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    mode: "onBlur",
  });

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !submitted) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, submitted, onClose]);

  // Reset form state when modal closes
  useEffect(() => {
    if (!open) {
      setSubmitted(false);
      reset();
    }
  }, [open, reset]);

  if (!open) return null;

  const onSubmit = async (data: OrderFormData) => {
    // Placeholder for real submission (API call goes here)
    console.log("Order submitted:", data);
    await new Promise((r) => setTimeout(r, 400)); // simulate latency
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 1800);
  };

  const handleBackdropClick = () => {
    if (!submitted && !isSubmitting) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        {!submitted ? (
          <>
            <button
              className="modal-close"
              onClick={onClose}
              aria-label="Close"
              type="button"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>

            <div className="modal-eyebrow">Step 1 of 3</div>
            <h3 id="modal-title" className="modal-title">
              Let's get your box on the way.
            </h3>
            <p className="modal-sub">
              Start with your details — we'll confirm your procedure date and
              shipping next.
            </p>

            <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-row">
                <label className="field">
                  <span className="field-label">First name</span>
                  <input
                    type="text"
                    {...register("firstName")}
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && (
                    <span className="field-error">
                      {errors.firstName.message}
                    </span>
                  )}
                </label>
                <label className="field">
                  <span className="field-label">Last name</span>
                  <input
                    type="text"
                    {...register("lastName")}
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && (
                    <span className="field-error">
                      {errors.lastName.message}
                    </span>
                  )}
                </label>
              </div>

              <label className="field">
                <span className="field-label">Email</span>
                <input
                  type="email"
                  {...register("email")}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <span className="field-error">{errors.email.message}</span>
                )}
              </label>

              <label className="field">
                <span className="field-label">Phone</span>
                <input
                  type="tel"
                  {...register("phone")}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <span className="field-error">{errors.phone.message}</span>
                )}
              </label>

              <button
                type="submit"
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting…" : "Continue"}
              </button>
              <p className="form-fine">
                By continuing you agree to our terms. We'll never share your
                info.
              </p>
            </form>
          </>
        ) : (
          <div className="modal-success">
            <div className="success-mark">
              <svg
                viewBox="0 0 24 24"
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path
                  d="M5 12l5 5L20 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="modal-title">You're all set.</h3>
            <p className="modal-sub">We'll be in touch to confirm your box.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderModal;
