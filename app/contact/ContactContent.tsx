"use client"

import type React from "react"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { MapPin, Mail, Phone, Clock, Send, MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"
import MainLayout from "@/components/main-layout"

const sectionColor = "#F5F3ED"
const textColor = "#0C0C0C"
const goldColor = "#D4AF37"

export default function ContactContent() {
  const { lang } = useLanguage()
  const t = translations[lang]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  })
  const imageIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const heroImages = [
    "/images/contact1.png",
    "/images/contact2.png",
    "/images/contact3.png",
  ]

  // Auto-rotate images every 7 seconds
  useEffect(() => {
    imageIntervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 7000)
    return () => {
      if (imageIntervalRef.current) clearInterval(imageIntervalRef.current)
    }
  }, [])

  const contactInfo = [
    {
      icon: MapPin,
      titleKey: "contactAddress",
      value: "Tầng 4, tòa SHG số 8 Quang Trung, Hà Đông, Hà Nội",
    },
    {
      icon: Mail,
      titleKey: "contactEmail",
      value: "business@hdpholdings.com.vn",
      href: "mailto:business@hdpholdings.com.vn",
    },
    {
      icon: Phone,
      titleKey: "contactPhone",
      value: "(+84)869010169",
      href: "tel:+84869010169",
    },
    {
      icon: Clock,
      titleKey: "contactWorkingHours",
      value: "Mon - Fri: 9:00 AM - 5:00 PM",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/form-submissions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          formType: "contact",
          ...contactForm,
          language: lang,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit contact form")
      }

      alert(t.contactFormSuccess)
      setContactForm({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: "",
      })
    } catch (error) {
      console.error("Error submitting contact form:", error)
      alert("Unable to send your message right now. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <MainLayout>
      <div style={{ backgroundColor: "#F5F3ED" }}>
        {/* ── Hero Section with Image Carousel ── */}
        <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={`Contact background ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
          {/* Overlay gradient for better readability */}
          <div className="absolute inset-0 bg-black/20" />
          
          {/* Centered Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 flex flex-col items-center justify-start pt-16 md:pt-20 lg:pt-24 pointer-events-none"
          >
            <h1 className="font-sans text-5xl md:text-7xl lg:text-8xl font-black text-white text-center px-6 leading-tight tracking-tight" style={{ fontFamily: "'Arial Black', 'Helvetica Bold', sans-serif", letterSpacing: "-0.02em" }}>
              HDP HOLDINGS
            </h1>
            <h2 className="font-sans text-2xl md:text-4xl lg:text-5xl font-black text-white text-center px-6 mt-4" style={{ fontFamily: "'Arial Black', 'Helvetica Bold', sans-serif", letterSpacing: "-0.01em" }}>
              WHERE PARTNERSHIPS BEGIN
            </h2>
          </motion.div>
        </section>

        {/* ── Contact Form & Info Section ── */}
        <section
          className="relative py-24 px-6 sm:px-10 lg:px-16 border-t"
          style={{ backgroundColor: "#F5F3ED", borderColor: "#CCCCCC" }}
        >
          <div className="mx-auto max-w-[1600px]">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* ── Contact Form (with premium gold animation) ── */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl md:text-4xl mb-8" style={{ color: "#0C0C0C" }}>
                  Send us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* Name Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: "#0C0C0Ccc" }}>
                        {t.contactFormName} <span style={{ color: "#D4AF37" }}>*</span>
                      </label>
                      <motion.div
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        animate={focusedField === "name" ? { boxShadow: `0 0 20px ${goldColor}40` } : {}}
                        transition={{ duration: 0.3 }}
                        className="relative rounded-sm overflow-hidden"
                      >
                        <input
                          type="text"
                          name="name"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 transition-all rounded-sm"
                          placeholder={t.contactFormNamePlaceholder}
                          style={{
                            backgroundColor: "#FFFFFDcc",
                            color: "#0C0C0C",
                            border: focusedField === "name" ? "1.5px solid #D4AF37" : "1px solid #0C0C0C20",
                          }}
                        />
                        {focusedField === "name" && (
                          <motion.div
                            layoutId="gold-glow-name"
                            className="absolute inset-0 rounded-sm pointer-events-none"
                            style={{
                              background: "linear-gradient(90deg, #D4AF3700, #D4AF3720, #D4AF3700)",
                            }}
                            animate={{ backgroundPosition: ["0%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium mb-2" style={{ color: `${textColor}cc` }}>
                        {t.contactFormEmail} <span style={{ color: goldColor }}>*</span>
                      </label>
                      <motion.div
                        animate={focusedField === "email" ? { boxShadow: `0 0 20px ${goldColor}40` } : {}}
                        transition={{ duration: 0.3 }}
                        className="relative rounded-sm overflow-hidden"
                      >
                        <input
                          type="email"
                          name="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className="w-full px-4 py-3 transition-all rounded-sm"
                          placeholder={t.contactFormEmailPlaceholder}
                          style={{
                            backgroundColor: `${sectionColor}cc`,
                            color: textColor,
                            border: focusedField === "email" ? `1.5px solid ${goldColor}` : `1px solid ${textColor}20`,
                          }}
                        />
                        {focusedField === "email" && (
                          <motion.div
                            className="absolute inset-0 rounded-sm pointer-events-none"
                            style={{
                              background: `linear-gradient(90deg, ${goldColor}00, ${goldColor}20, ${goldColor}00)`,
                            }}
                            animate={{ backgroundPosition: ["0%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                        )}
                      </motion.div>
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: `${textColor}cc` }}>
                      {t.contactFormCompany}
                    </label>
                    <motion.div
                      animate={focusedField === "company" ? { boxShadow: `0 0 20px ${goldColor}30` } : {}}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-sm overflow-hidden"
                    >
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, company: e.target.value }))}
                        onFocus={() => setFocusedField("company")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 transition-all rounded-sm"
                        placeholder={t.contactFormCompanyPlaceholder}
                        style={{
                          backgroundColor: `${sectionColor}cc`,
                          color: textColor,
                          border: focusedField === "company" ? `1.5px solid ${goldColor}` : `1px solid ${textColor}20`,
                        }}
                      />
                      {focusedField === "company" && (
                        <motion.div
                          className="absolute inset-0 rounded-sm pointer-events-none"
                          style={{
                            background: `linear-gradient(90deg, ${goldColor}00, ${goldColor}20, ${goldColor}00)`,
                          }}
                          animate={{ backgroundPosition: ["0%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: `${textColor}cc` }}>
                      {t.contactFormSubject} <span style={{ color: goldColor }}>*</span>
                    </label>
                    <motion.div
                      animate={focusedField === "subject" ? { boxShadow: `0 0 20px ${goldColor}30` } : {}}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-sm overflow-hidden"
                    >
                      <select
                        name="subject"
                        required
                        value={contactForm.subject}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, subject: e.target.value }))}
                        onFocus={() => setFocusedField("subject")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 transition-all rounded-sm appearance-none"
                        style={{
                          backgroundColor: `${sectionColor}cc`,
                          color: textColor,
                          border: focusedField === "subject" ? `1.5px solid ${goldColor}` : `1px solid ${textColor}20`,
                        }}
                      >
                        <option value="" style={{ backgroundColor: sectionColor, color: textColor }}>
                          {t.contactFormSubjectPlaceholder}
                        </option>
                        <option value="general" style={{ backgroundColor: sectionColor, color: textColor }}>
                          {t.contactSubjectGeneral}
                        </option>
                        <option value="partnership" style={{ backgroundColor: sectionColor, color: textColor }}>
                          {t.contactSubjectPartnership}
                        </option>
                        <option value="expo" style={{ backgroundColor: sectionColor, color: textColor }}>
                          {t.contactSubjectExpo}
                        </option>
                        <option value="support" style={{ backgroundColor: sectionColor, color: textColor }}>
                          {t.contactSubjectSupport}
                        </option>
                      </select>
                      {focusedField === "subject" && (
                        <motion.div
                          className="absolute inset-0 rounded-sm pointer-events-none"
                          style={{
                            background: `linear-gradient(90deg, ${goldColor}00, ${goldColor}20, ${goldColor}00)`,
                          }}
                          animate={{ backgroundPosition: ["0%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: `${textColor}cc` }}>
                      {t.contactFormMessage} <span style={{ color: goldColor }}>*</span>
                    </label>
                    <motion.div
                      animate={focusedField === "message" ? { boxShadow: `0 0 20px ${goldColor}30` } : {}}
                      transition={{ duration: 0.3 }}
                      className="relative rounded-sm overflow-hidden"
                    >
                      <textarea
                        name="message"
                        required
                        value={contactForm.message}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        rows={5}
                        className="w-full px-4 py-3 transition-all rounded-sm resize-none"
                        placeholder={t.contactFormMessagePlaceholder}
                        style={{
                          backgroundColor: `${sectionColor}cc`,
                          color: textColor,
                          border: focusedField === "message" ? `1.5px solid ${goldColor}` : `1px solid ${textColor}20`,
                        }}
                      />
                      {focusedField === "message" && (
                        <motion.div
                          className="absolute inset-0 rounded-sm pointer-events-none"
                          style={{
                            background: `linear-gradient(90deg, ${goldColor}00, ${goldColor}20, ${goldColor}00)`,
                          }}
                          animate={{ backgroundPosition: ["0%", "100%"] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </motion.div>
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 font-semibold flex items-center justify-center gap-2 rounded-sm transition-all"
                    style={{
                      backgroundColor: goldColor,
                      color: sectionColor,
                    }}
                  >
                    {isSubmitting ? (
                      t.submitting
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t.contactFormSubmit}
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>

              {/* ── Contact Info Cards ── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl mb-8" style={{ color: textColor }}>
                    Contact Information
                  </h2>

                  <div className="space-y-4">
                    {contactInfo.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="rounded-sm p-4 border transition-all hover:border-opacity-100 group"
                        style={{
                          backgroundColor: `${sectionColor}cc`,
                          borderColor: `${textColor}20`,
                        }}
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: `${goldColor}20` }}>
                            <item.icon className="w-6 h-6" style={{ color: goldColor }} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-1" style={{ color: textColor }}>
                              {t[item.titleKey as keyof typeof t]}
                            </h3>
                            {item.href ? (
                              <a
                                href={item.href}
                                className="transition-colors"
                                style={{ color: `${textColor}80` }}
                              >
                                {item.value}
                              </a>
                            ) : (
                              <p style={{ color: `${textColor}80` }}>{item.value}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="rounded-sm p-6 border"
                  style={{
                    backgroundColor: `${sectionColor}cc`,
                    borderColor: `${textColor}20`,
                  }}
                >
                  <h3 className="font-semibold text-lg mb-4 flex items-center gap-2" style={{ color: textColor }}>
                    <MessageCircle className="w-5 h-5" style={{ color: goldColor }} />
                    Connect on Social
                  </h3>
                  <p className="mb-4" style={{ color: `${textColor}80` }}>
                    Reach out via your preferred platform
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://zalo.me/0869010169"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-sm font-medium transition-all hover:opacity-75"
                      style={{ backgroundColor: "#0084ff", color: "white" }}
                    >
                      Zalo
                    </a>
                    <a
                      href="https://www.facebook.com/hdpholdings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-sm font-medium transition-all hover:opacity-75"
                      style={{ backgroundColor: "#0084ff", color: "white" }}
                    >
                      Messenger
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Map Section ── */}
        <section
           className="relative py-24 px-6 sm:px-10 lg:px-16 border-t"
           style={{ backgroundColor: "#F5F3ED", borderColor: "#CCCCCC" }}
        >
          <div className="mx-auto max-w-[1600px]">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-serif text-3xl md:text-4xl mb-12 text-center"
              style={{ color: "#0C0C0C" }}
            >
              Visit Us
            </motion.h2>

            <motion.a
              href="https://maps.app.goo.gl/zEM8bbhXWTibxpHA6"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group relative block rounded-sm overflow-hidden"
            >
              <div className="relative h-80 w-full">
                <Image
                  src="/images/screenshot-202026-01-15-20111735.png"
                  alt="HDP Holdings Location Map"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex items-end justify-center pb-6">
                  <motion.div
                    className="flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                      backgroundColor: "#F5F3ED",
                      border: "1px solid #0C0C0C",
                      color: "#0C0C0C",
                    }}
                  >
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm font-medium">
                      {lang === "VN" ? "Nhấn để xem trên Google Maps" : "Click to view on Maps"}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.a>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}
