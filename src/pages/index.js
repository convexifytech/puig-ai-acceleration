import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import {
  Pencil, Heart, TrendingUp, BarChart3, Search, GraduationCap,
  ChevronRight, ArrowRight, Menu, X, Sparkles
} from 'lucide-react'
import { categories, stats, technologies, brands } from '@/data/useCases'

const iconMap = {
  Pencil, Heart, TrendingUp, BarChart3, Search, GraduationCap
}

// Animated Section Hook
function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return [ref, isInView]
}

// Animated Section Component
function AnimatedSection({ children, delay = 0, className = '' }) {
  const [ref, isInView] = useInView()

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container-custom py-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold">PUIG</span>
          <span className="text-puig-olive text-xs tracking-widest">AI & INNOVATION</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-sm text-white/60 hover:text-white transition-colors">Solutions</a>
          <a href="#how-it-works" className="text-sm text-white/60 hover:text-white transition-colors">How It Works</a>
          <a href="#brands" className="text-sm text-white/60 hover:text-white transition-colors">Brands</a>
          <a href="#contact" className="btn-primary text-sm py-2 px-6">Get Started</a>
        </nav>

        <button
          className="md:hidden p-2 text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-white/10 p-6">
          <nav className="flex flex-col gap-4">
            <a href="#solutions" className="text-sm" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#how-it-works" className="text-sm" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#brands" className="text-sm" onClick={() => setMobileMenuOpen(false)}>Brands</a>
            <a href="#contact" className="btn-primary text-sm text-center mt-2" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
          </nav>
        </div>
      )}
    </header>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial-olive opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-puig-olive/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-puig-gold/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '500ms' }} />

      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-puig-olive font-medium tracking-widest uppercase text-sm mb-6">
              Internal AI Studio
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <h1 className="text-hero text-balance mb-8">
              What problem do you want to{' '}
              <span className="text-gradient">solve?</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-12">
              We help Puig brands accelerate with AI. From content creation to customer experience
              — find the solution that fits your challenge.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#solutions" className="btn-primary group">
                Explore Solutions
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-secondary">
                Talk to Our Team
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}

// Stats Section
function Stats() {
  return (
    <section className="section-padding bg-white/5">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-white/50">{stat.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}

// Solutions Section
function Solutions() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedUseCase, setSelectedUseCase] = useState(null)

  return (
    <section id="solutions" className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-20">
          <p className="text-puig-olive font-medium tracking-widest uppercase text-sm mb-4">
            Our Solutions
          </p>
          <h2 className="text-display text-balance">
            Choose your{' '}
            <span className="text-white/50">challenge</span>
          </h2>
        </AnimatedSection>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = iconMap[category.icon]
            return (
              <AnimatedSection key={category.id} delay={index * 100}>
                <button
                  onClick={() => {
                    setActiveCategory(activeCategory === category.id ? null : category.id)
                    setSelectedUseCase(null)
                  }}
                  className={`card-glass p-8 text-left w-full transition-all ${
                    activeCategory === category.id
                      ? 'border-puig-olive/50 bg-white/10'
                      : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-puig-olive/20 flex items-center justify-center">
                      <Icon size={28} className="text-puig-olive" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                      <p className="text-sm text-white/50 italic">"{category.problem}"</p>
                      <div className="mt-4 text-xs text-puig-olive">
                        {category.useCases.length} solutions
                      </div>
                    </div>
                    <ChevronRight
                      size={20}
                      className={`text-white/30 transition-transform ${
                        activeCategory === category.id ? 'rotate-90' : ''
                      }`}
                    />
                  </div>
                </button>
              </AnimatedSection>
            )
          })}
        </div>

        {/* Use Cases Expansion */}
        {activeCategory && (
          <AnimatedSection>
            <div className="card-glass p-8 md:p-12">
              <h3 className="text-xl font-bold mb-8 text-puig-olive">
                {categories.find(c => c.id === activeCategory)?.title} Solutions
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                {categories.find(c => c.id === activeCategory)?.useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => setSelectedUseCase(selectedUseCase === useCase.id ? null : useCase.id)}
                    className={`bg-white/5 border border-white/10 rounded-xl p-6 text-left transition-all hover:border-puig-olive/30 ${
                      selectedUseCase === useCase.id ? 'border-puig-gold/50 bg-white/10' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h4 className="font-bold mb-2">{useCase.title}</h4>
                        <p className="text-sm text-white/50 mb-3">{useCase.problem}</p>
                        {selectedUseCase === useCase.id && (
                          <div className="animate-fade-in-up">
                            <p className="text-sm text-white/70 mb-4">{useCase.solution}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {useCase.technologies.map((tech, i) => (
                                <span key={i} className="text-xs bg-puig-olive/20 text-puig-olive px-3 py-1 rounded-full">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="pt-4 border-t border-white/10">
                              <div className="text-xs text-white/40 mb-2">Brands using this:</div>
                              <div className="flex flex-wrap gap-2">
                                {useCase.brands.slice(0, 4).map((brand, i) => (
                                  <span key={i} className="text-xs text-white/60">
                                    {brand}{i < Math.min(useCase.brands.length, 4) - 1 ? ',' : ''}
                                  </span>
                                ))}
                                {useCase.brands.length > 4 && (
                                  <span className="text-xs text-white/40">+{useCase.brands.length - 4}</span>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {useCase.impact && (
                        <span className="puig-badge shrink-0">{useCase.impact}</span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}
      </div>
    </section>
  )
}

// How It Works Section
function HowItWorks() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We understand your brand's unique challenges" },
    { num: "02", title: "Design", desc: "We design the right AI solution for you" },
    { num: "03", title: "Build", desc: "We develop and train AI on your brand" },
    { num: "04", title: "Deploy", desc: "We launch with training and support" },
  ]

  return (
    <section id="how-it-works" className="section-padding bg-white/5">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-20">
          <p className="text-puig-olive font-medium tracking-widest uppercase text-sm mb-4">
            Our Process
          </p>
          <h2 className="text-display text-balance">
            From challenge to solution{' '}
            <span className="text-white/50">in weeks</span>
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="text-center">
                <div className="text-5xl font-bold text-gradient mb-4">{step.num}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-white/50 text-sm">{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <div className="border-t border-white/10 pt-20">
          <AnimatedSection className="text-center mb-12">
            <h3 className="text-xl font-bold">Technologies We Use</h3>
          </AnimatedSection>
          <div className="grid md:grid-cols-5 gap-6">
            {technologies.map((tech, i) => (
              <AnimatedSection key={i} delay={i * 50}>
                <div className="text-center p-6 card-glass">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-puig-gold/20 flex items-center justify-center">
                    <Sparkles size={24} className="text-puig-gold" />
                  </div>
                  <h4 className="font-bold mb-2">{tech.shortName}</h4>
                  <p className="text-xs text-white/50">{tech.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Brands Section
function Brands() {
  return (
    <section id="brands" className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-display mb-4">
            Trusted by{' '}
            <span className="text-white/50">Puig Brands</span>
          </h2>
          <p className="text-white/50">
            Join the brands already accelerating with AI
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap justify-center gap-4">
            {brands.map((brand, i) => (
              <div
                key={i}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm hover:border-puig-olive/30 hover:text-white transition-all"
              >
                {brand}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-t from-puig-olive/10 to-transparent">
      <div className="container-custom">
        <AnimatedSection className="max-w-2xl mx-auto text-center">
          <h2 className="text-title mb-6">
            Have a challenge?
          </h2>
          <p className="text-lg text-white/60 mb-8">
            Let's start with a 30-minute conversation. No commitment, no pitch—just an honest exploration of how we can help.
          </p>
          <a href="mailto:ai-innovation@puig.com" className="btn-primary">
            Let's Talk
            <ArrowRight size={18} className="ml-2" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-bold">PUIG</span>
            <span className="text-puig-olive text-xs">AI & INNOVATION</span>
          </div>
          <div className="text-sm text-white/40">
            Internal platform for Puig brand teams
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page
export default function Home() {
  return (
    <>
      <Head>
        <title>Puig AI & Innovation | Internal AI Studio</title>
        <meta name="description" content="AI solutions for Puig brand teams" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-black min-h-screen">
        <Header />
        <Hero />
        <Stats />
        <Solutions />
        <HowItWorks />
        <Brands />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
