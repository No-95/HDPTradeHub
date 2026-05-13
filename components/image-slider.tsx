"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"

const slides = [
  {
    src: "/images/900-600-9eafd881600aae2b6760c446c9d0.jpg",
    alt: "2025 Korea Seafood Show Opening Ceremony",
  },
  {
    src: "/images/900-600-87a28c5ab19e5fa2f9bb4e39fa43.jpg",
    alt: "Korea Seafood Show Overseas Buyers Welcome Banquet",
  },
  {
    src: "/images/895-593-017f93876506f42bb9a2d1b72d9b.jpg",
    alt: "Cooking Class at Korea Seafood Show",
  },
  {
    src: "/images/900-600-0a83bc869a64afbe0e84acc4914d.jpg",
    alt: "Korea Seafood Show Exhibition Hall",
  },
  {
    src: "/images/899-600-a53c1b4c89c301f2ec09eb038765.jpg",
    alt: "B2B Meeting Seminar at Korea Seafood Show",
  },
  {
    src: "/images/900-598-af53618b93c8f757894667ec5c20.jpg",
    alt: "VIP Ceremony at Korea Seafood Show",
  },
  {
    src: "/images/900-506-6dec7d2580176c98edb468611b60.jpg",
    alt: "Academic Seminar at Seoul International Seafood Show",
  },
  {
    src: "/images/899-595-2eb1cdfe0bfa894dfd9806b14baa.jpg",
    alt: "Food Tasting Event at Korea Seafood Show",
  },
  {
    src: "/images/900-584-8dc8d9226b21113540fedd43462b.jpg",
    alt: "2025 Korea Seafood Show Exhibition Floor",
  },
  {
    src: "/images/900-598-c37994ee5a7d65f18b8f492dc3e7.jpg",
    alt: "B2B Business Meeting at Korea Seafood Show",
  },
  {
    src: "/images/slider-booth-products.jpg",
    alt: "Exhibitor Booth with Frozen Seafood Products",
  },
  {
    src: "/images/slider-keynote-speech.jpg",
    alt: "Keynote Welcome Speech at Seoul International Seafood Show",
  },
  {
    src: "/images/slider-b2b-meeting-booth.jpg",
    alt: "B2B Business Meeting at Booth B-19",
  },
  {
    src: "/images/slider-culinary-workshop.jpg",
    alt: "Master Craftsman Culinary Workshop",
  },
]

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return
      setIsTransitioning(true)
      setCurrentSlide(index)
      setTimeout(() => setIsTransitioning(false), 1000)
    },
    [isTransitioning],
  )

  useEffect(() => {
    const interval = setInterval(() => {
      goToSlide((currentSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlide, goToSlide])

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Slider Container */}
        <div className="relative w-full aspect-[16/7] rounded-2xl overflow-hidden shadow-xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-20 pointer-events-none" />
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 ease-out rounded-full ${
                index === currentSlide ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
