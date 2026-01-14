'use client'

import { useEffect, useState } from 'react'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOverNavy, setIsOverNavy] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Detect if button is over navy sections
      // Navy sections: Awards, About, Education, Projects (all have bg-primary)
      const navySections = ['awards', 'about', 'education', 'projects']
      const buttonBottom = window.innerHeight - (window.innerWidth >= 768 ? 128 : 96) // button position from bottom

      let overNavy = false
      for (const sectionId of navySections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const rect = section.getBoundingClientRect()
          // Check if button overlaps with this section
          if (rect.top <= buttonBottom && rect.bottom >= buttonBottom) {
            overNavy = true
            break
          }
        }
      }

      setIsOverNavy(overNavy)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
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
        ${isOverNavy ? 'bg-white text-primary border-white' : 'bg-primary text-white border-primary'}
        font-mono text-2xl font-bold
        transition-all duration-300 ease-out
        hover:bg-red-600 hover:border-red-600 hover:scale-110 hover:shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]
        active:scale-95 active:shadow-[2px_2px_0px_0px_rgba(220,38,38,1)]
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
