"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FaPaperPlane, FaCheckCircle } from "react-icons/fa";

// Define types for form state and errors
type FormState = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formState.email))
      newErrors.email = "Email is invalid";
    if (!formState.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate API call
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" }); // Reset form
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" })); // Clear errors
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, staggerChildren: 0.1 },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/20 to-secondary/20">
      <div className="container mx-auto px-4">
      <div className="text-center mb-8">
          <motion.h2
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl md:text-5xl font-bold mb-6 text-primary"
          >
            Contact
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            I’m always excited to connect! Whether you’re looking to collaborate on a potential project, share ideas, or just say hello, feel free to drop me an email—I’ll do my best to respond promptly. You can also find me on<a className="hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="https://linkedin.com/in/rachuri-vijaykumar/" >Linkedin!</a>
          </motion.p>

          </div>

        <motion.div
          className="max-w-2xl mx-auto bg-background rounded-lg shadow-xl overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={formVariants}
        >
          <div className="p-8 sm:p-12">
            <motion.h2 className="text-3xl font-bold text-center mb-8 text-primary" variants={childVariants}>
              
            </motion.h2>

            {isSubmitted ? (
              <motion.div
                className="text-center text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              >
                <FaCheckCircle className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                <p>Your message has been sent successfully. I will get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <motion.div className="space-y-6" variants={formVariants}>
                  <motion.div variants={childVariants}>
                    <Label htmlFor="name" className="text-primary">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className={`mt-1 ${errors.name ? "border-destructive" : ""}`}
                    />
                    {errors.name && <p className="mt-1 text-sm text-destructive">{errors.name}</p>}
                  </motion.div>

                  <motion.div variants={childVariants}>
                    <Label htmlFor="email" className="text-primary">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      className={`mt-1 ${errors.email ? "border-destructive" : ""}`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-destructive">{errors.email}</p>}
                  </motion.div>

                  <motion.div variants={childVariants}>
                    <Label htmlFor="message" className="text-primary">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      className={`mt-1 ${errors.message ? "border-destructive" : ""}`}
                      rows={4}
                    />
                    {errors.message && <p className="mt-1 text-sm text-destructive">{errors.message}</p>}
                  </motion.div>

                  <motion.div variants={childVariants}>
                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          className="h-5 w-5 rounded-full border-t-2 border-r-2 border-background"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      ) : (
                        <>
                          Send Message
                          <FaPaperPlane className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </motion.div>
              </form>
            )}
           
          </div>
        </motion.div>
      </div>
    </section>
  );
}
