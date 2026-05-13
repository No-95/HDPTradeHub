"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ContactWidgetContextType {
  isOpen: boolean
  openContactWidget: () => void
  closeContactWidget: () => void
  toggleContactWidget: () => void
}

const ContactWidgetContext = createContext<ContactWidgetContextType | undefined>(undefined)

export function ContactWidgetProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openContactWidget = () => setIsOpen(true)
  const closeContactWidget = () => setIsOpen(false)
  const toggleContactWidget = () => setIsOpen(!isOpen)

  return (
    <ContactWidgetContext.Provider value={{ isOpen, openContactWidget, closeContactWidget, toggleContactWidget }}>
      {children}
    </ContactWidgetContext.Provider>
  )
}

export function useContactWidget() {
  const context = useContext(ContactWidgetContext)
  if (!context) {
    throw new Error("useContactWidget must be used within a ContactWidgetProvider")
  }
  return context
}
