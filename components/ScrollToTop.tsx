'use client'

import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 z-50
        w-14 h-14
        bg-tertiary
        border-black
        font-mono text-2xl text-black font-bold
        transition-all duration-300 ease-out
        hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]
        active:scale-95 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}
        md:bottom-8 md:right-8 md:w-16 md:h-16 md:text-3xl
      `}
      style={{
        borderWidth: '3px',
        willChange: 'transform, opacity'
      }}
    >
      ↑
    </button>
  )
}
