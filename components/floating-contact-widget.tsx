"use client"

import { MessageCircle, X, Mail } from "lucide-react"
import { useLanguage } from "@/lib/language-context"
import { useContactWidget } from "@/lib/contact-widget-context"
import { translations } from "@/lib/translations"

export default function FloatingContactWidget() {
  const { isOpen, toggleContactWidget, closeContactWidget } = useContactWidget()
  const { lang } = useLanguage()
  const t = translations[lang]

  return (
    <div className="fixed bottom-4 right-4 z-[9999] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 mb-2 w-72 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-gray-800">{t.needHelp}</h3>
            <p className="text-sm text-gray-500">{t.contactVia}</p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://zalo.me/0869010169"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors group"
              onClick={() => closeContactWidget()}
            >
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <svg viewBox="0 0 48 48" className="w-6 h-6" fill="white">
                  <path d="M24 4C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm8.5 26.5c-.828 0-1.5-.672-1.5-1.5v-5.5l-3.5 5.5c-.414.621-1.078 1-1.792 1h-.416c-.714 0-1.378-.379-1.792-1L20 23.5V29c0 .828-.672 1.5-1.5 1.5S17 29.828 17 29V19c0-.828.672-1.5 1.5-1.5h.208c.714 0 1.378.379 1.792 1L24 24l3.5-5.5c.414-.621 1.078-1 1.792-1h.208c.828 0 1.5.672 1.5 1.5v10c0 .828-.672 1.5-1.5 1.5z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{t.zalo}</p>
                <p className="text-xs text-gray-500">(+84) 869 010 169</p>
              </div>
            </a>

            <a
              href="https://www.facebook.com/hdpholdings"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-colors group"
              onClick={() => closeContactWidget()}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                  <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.936 1.444 5.544 3.702 7.256v3.501l3.313-1.827c.898.252 1.852.387 2.985.387 5.523 0 10-4.145 10-9.243S17.523 2 12 2zm1.063 12.432l-2.54-2.713-4.96 2.713 5.456-5.794 2.603 2.713 4.896-2.713-5.455 5.794z" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-gray-800 group-hover:text-purple-600 transition-colors">
                  {t.messenger}
                </p>
                <p className="text-xs text-gray-500">{t.facebookMessage}</p>
              </div>
            </a>

            <a
              href="mailto:business@hdpholdings.com.vn"
              className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 hover:bg-orange-100 transition-colors group"
              onClick={() => closeContactWidget()}
            >
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                  {t.emailContact}
                </p>
                <p className="text-xs text-gray-500">business@hdpholdings.com.vn</p>
              </div>
            </a>
          </div>
        </div>
      )}

      <button
        onClick={toggleContactWidget}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-primary hover:bg-primary/90"
        }`}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>
    </div>
  )
}
