import Head from 'next/head'
import { useState } from 'react'
import {
  Pencil, Heart, TrendingUp, BarChart3, Search, GraduationCap,
  ChevronRight, CheckCircle2, ArrowRight, Menu, X, Sparkles
} from 'lucide-react'
import { categories, stats, technologies, brands } from '@/data/useCases'

const iconMap = {
  Pencil, Heart, TrendingUp, BarChart3, Search, GraduationCap
}

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-puig-light">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/puig-logo-black.svg" alt="Puig" className="h-8" />
          <div className="hidden sm:block">
            <span className="puig-tagline">AI & INNOVATION</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#solutions" className="text-sm font-medium text-puig-gray hover:text-black transition-colors">Solutions</a>
          <a href="#how-it-works" className="text-sm font-medium text-puig-gray hover:text-black transition-colors">How It Works</a>
          <a href="#brands" className="text-sm font-medium text-puig-gray hover:text-black transition-colors">Brands</a>
          <a href="#contact" className="puig-button text-sm">Get Started</a>
        </nav>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-puig-light p-6">
          <nav className="flex flex-col gap-4">
            <a href="#solutions" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="#how-it-works" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
            <a href="#brands" className="text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Brands</a>
            <a href="#contact" className="puig-button text-sm text-center mt-2" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
          </nav>
        </div>
      )}
    </header>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-white to-puig-light/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="puig-badge mb-6 inline-block">INTERNAL AI STUDIO</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            What problem do you want to solve?
          </h1>
          <p className="text-xl text-puig-gray mb-8 leading-relaxed">
            We help Puig brands accelerate with AI. From content creation to customer experience,
            market intelligence to sales analytics — find the solution that fits your challenge.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#solutions" className="puig-button flex items-center gap-2">
              Explore Solutions <ArrowRight size={18} />
            </a>
            <a href="#contact" className="puig-button puig-button-olive">
              Talk to Our Team
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-16 border-t border-puig-light">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-puig-gray">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Problem Categories Section
function Solutions() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [selectedUseCase, setSelectedUseCase] = useState(null)

  return (
    <section id="solutions" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solutions by Challenge</h2>
          <p className="text-puig-gray max-w-2xl mx-auto">
            Select a challenge area to explore AI solutions already deployed across Puig brands
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => {
            const Icon = iconMap[category.icon]
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(activeCategory === category.id ? null : category.id)
                  setSelectedUseCase(null)
                }}
                className={`puig-card p-6 text-left transition-all border-l-4 ${
                  activeCategory === category.id
                    ? 'border-l-puig-gold bg-puig-light/30'
                    : 'border-l-transparent hover:border-l-puig-olive'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Icon size={24} style={{ color: category.color }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{category.title}</h3>
                    <p className="text-sm text-puig-gray italic">"{category.problem}"</p>
                    <div className="mt-3 text-xs text-puig-olive font-medium">
                      {category.useCases.length} solutions available
                    </div>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`text-puig-gray transition-transform ${
                      activeCategory === category.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Use Cases Expansion */}
        {activeCategory && (
          <div className="animate-fade-in-up">
            <div className="bg-puig-light/30 rounded-xl p-8">
              <h3 className="font-bold text-xl mb-6">
                {categories.find(c => c.id === activeCategory)?.title} Solutions
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {categories.find(c => c.id === activeCategory)?.useCases.map((useCase) => (
                  <button
                    key={useCase.id}
                    onClick={() => setSelectedUseCase(selectedUseCase === useCase.id ? null : useCase.id)}
                    className={`puig-card p-5 text-left ${
                      selectedUseCase === useCase.id ? 'ring-2 ring-puig-gold' : ''
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-bold mb-2">{useCase.title}</h4>
                        <p className="text-sm text-puig-gray mb-3">{useCase.problem}</p>
                        {selectedUseCase === useCase.id && (
                          <div className="animate-fade-in-up">
                            <p className="text-sm mb-4">{useCase.solution}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {useCase.technologies.map((tech, i) => (
                                <span key={i} className="text-xs bg-black text-white px-2 py-1 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="pt-4 border-t border-puig-light">
                              <div className="text-xs text-puig-gray mb-2">Brands using this:</div>
                              <div className="flex flex-wrap gap-1">
                                {useCase.brands.slice(0, 5).map((brand, i) => (
                                  <span key={i} className="text-xs bg-puig-olive/20 text-puig-olive px-2 py-1 rounded">
                                    {brand}
                                  </span>
                                ))}
                                {useCase.brands.length > 5 && (
                                  <span className="text-xs text-puig-gray">+{useCase.brands.length - 5} more</span>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      {useCase.impact && (
                        <div className="text-right shrink-0">
                          <div className="puig-badge">{useCase.impact}</div>
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// How We Work Section
function HowItWorks() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We understand your brand's unique challenges and workflows" },
    { num: "02", title: "Design", desc: "We design the right AI solution tailored to your needs" },
    { num: "03", title: "Build", desc: "We develop and train AI agents on your brand knowledge" },
    { num: "04", title: "Deploy", desc: "We launch with training and ongoing support" },
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
          <p className="text-puig-beige max-w-2xl mx-auto">
            From challenge to solution in weeks, not months
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-bold text-puig-gold mb-4">{step.num}</div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-puig-beige text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-white/20 pt-16">
          <h3 className="text-xl font-bold mb-8 text-center">Technologies We Use</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {technologies.map((tech, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-puig-gold/20 flex items-center justify-center">
                  <Sparkles size={24} className="text-puig-gold" />
                </div>
                <h4 className="font-bold mb-1">{tech.shortName}</h4>
                <p className="text-xs text-puig-beige">{tech.description}</p>
              </div>
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
    <section id="brands" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Puig Brands</h2>
          <p className="text-puig-gray">
            Join the brands already accelerating with AI
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 items-center">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-puig-light/50 rounded-lg text-puig-gray font-medium"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-puig-light/30">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-puig-gray mb-8">
          Tell us about your challenge and we'll help you find the right AI solution for your brand.
        </p>

        <div className="puig-card p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-puig-light rounded-lg focus:outline-none focus:ring-2 focus:ring-puig-olive"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Brand</label>
                <select className="w-full px-4 py-3 border border-puig-light rounded-lg focus:outline-none focus:ring-2 focus:ring-puig-olive bg-white">
                  <option value="">Select your brand</option>
                  {brands.map((brand, i) => (
                    <option key={i} value={brand}>{brand}</option>
                  ))}
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">What challenge do you want to solve?</label>
              <select className="w-full px-4 py-3 border border-puig-light rounded-lg focus:outline-none focus:ring-2 focus:ring-puig-olive bg-white">
                <option value="">Select a challenge area</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.title} - "{cat.problem}"</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Tell us more (optional)</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-puig-light rounded-lg focus:outline-none focus:ring-2 focus:ring-puig-olive"
                placeholder="Describe your specific challenge or use case..."
              />
            </div>

            <button type="submit" className="puig-button w-full flex items-center justify-center gap-2">
              Submit Request <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/images/puig-logo-white.svg" alt="Puig" className="h-6" />
            <span className="text-puig-beige text-sm">AI & INNOVATION</span>
          </div>
          <div className="text-sm text-puig-beige">
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

      <main>
        <Header />
        <Hero />
        <Solutions />
        <HowItWorks />
        <Brands />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
