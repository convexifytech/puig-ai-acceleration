import Head from 'next/head'
import { useState } from 'react'
import {
  Pencil, Heart, TrendingUp, BarChart3, Search, GraduationCap,
  ChevronRight, ChevronDown, CheckCircle2, ArrowRight, Menu, X,
  MessageSquare, Users, Layout, Mail, Sparkles, Clock, Target
} from 'lucide-react'
import { categories, stats, technologies, team, workflow, brands } from '@/data/useCases'

const iconMap = {
  Pencil, Heart, TrendingUp, BarChart3, Search, GraduationCap,
  MessageSquare, Users, Layout
}

// Header con menú extendido
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { href: "#problemas", label: "Problemas" },
    { href: "#como-trabajamos", label: "Cómo Trabajamos" },
    { href: "#tecnologias", label: "Tecnologías" },
    { href: "#equipo", label: "Equipo" },
    { href: "#marcas", label: "Marcas" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-gray-900">PUIG</span>
          <span className="text-sm font-medium text-puig-olive tracking-wider">AI & INNOVATION</span>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-600 hover:text-puig-olive transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#contacto" className="bg-puig-olive text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-puig-olive/90 transition-colors">
            Hablar con el equipo
          </a>
        </nav>

        <button
          className="lg:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 p-6">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-base font-medium text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contacto"
              className="bg-puig-olive text-white px-5 py-3 rounded-lg text-sm font-medium text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hablar con el equipo
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

// Hero Section
function Hero() {
  return (
    <section className="pt-28 pb-16 px-6 bg-gradient-to-b from-white to-puig-cream/30">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-puig-olive/10 text-puig-olive px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles size={16} />
            Tu estudio interno de IA
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ¿Qué problema quieres resolver?
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Ayudamos a las marcas Puig a acelerar con inteligencia artificial.
            Desde crear contenido hasta entender a tus clientes — encuentra la solución que encaja con tu reto.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#problemas" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-puig-olive transition-colors">
              Explorar soluciones <ArrowRight size={18} />
            </a>
            <a href="#como-trabajamos" className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-puig-olive hover:text-puig-olive transition-colors">
              Cómo trabajamos
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-gray-200">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Use Case Card expandido
function UseCaseCard({ useCase, isExpanded, onToggle }) {
  return (
    <div
      className={`bg-white rounded-xl border transition-all duration-300 ${
        isExpanded ? 'border-puig-gold shadow-lg' : 'border-gray-200 hover:border-gray-300'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full p-6 text-left"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h4 className="font-bold text-gray-900 mb-2">{useCase.title}</h4>
            <p className="text-puig-olive font-medium text-sm mb-2">{useCase.headline}</p>
            <p className="text-gray-600 text-sm">{useCase.problem}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            {useCase.impact && (
              <span className="bg-puig-gold/20 text-puig-gold-dark px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                {useCase.impact}
              </span>
            )}
            <ChevronDown
              size={20}
              className={`text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </div>
        </div>
      </button>

      {/* Expanded content */}
      {isExpanded && (
        <div className="px-6 pb-6 border-t border-gray-100 pt-4 animate-fadeIn">
          <p className="text-gray-700 mb-6">{useCase.solution}</p>

          {/* Benefits */}
          <div className="mb-6">
            <h5 className="font-semibold text-gray-900 mb-3">¿Qué consigues?</h5>
            <ul className="grid md:grid-cols-2 gap-2">
              {useCase.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle2 size={16} className="text-puig-olive mt-0.5 shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Example */}
          <div className="bg-puig-cream/50 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-gray-900 mb-2">Ejemplo real</h5>
            <p className="text-sm text-gray-700">{useCase.example}</p>
          </div>

          {/* For you if */}
          <div className="bg-puig-olive/5 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-puig-olive mb-2">Esto es para ti si...</h5>
            <p className="text-sm text-gray-700">{useCase.forYouIf}</p>
          </div>

          {/* Brands using */}
          <div className="mb-6">
            <h5 className="text-xs text-gray-500 uppercase tracking-wide mb-2">Marcas que lo usan</h5>
            <div className="flex flex-wrap gap-2">
              {useCase.brands.slice(0, 6).map((brand, i) => (
                <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {brand}
                </span>
              ))}
              {useCase.brands.length > 6 && (
                <span className="text-xs text-gray-400">+{useCase.brands.length - 6} más</span>
              )}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-puig-gold text-gray-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-puig-gold-light transition-colors"
            >
              Quiero esto <ArrowRight size={16} />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg text-sm font-medium hover:border-puig-olive hover:text-puig-olive transition-colors"
            >
              <Mail size={16} />
              Hablar con el equipo
            </a>
          </div>
        </div>
      )}
    </div>
  )
}

// Problems / Solutions Section
function Problems() {
  const [activeCategory, setActiveCategory] = useState(null)
  const [expandedUseCase, setExpandedUseCase] = useState(null)

  return (
    <section id="problemas" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Soluciones por problema
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selecciona el área que más te resuena para explorar las soluciones de IA que ya funcionan en otras marcas Puig
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {categories.map((category) => {
            const Icon = iconMap[category.icon]
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(isActive ? null : category.id)
                  setExpandedUseCase(null)
                }}
                className={`p-6 rounded-xl text-left transition-all border-2 ${
                  isActive
                    ? 'border-puig-gold bg-puig-cream/30 shadow-md'
                    : 'border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon size={24} style={{ color: category.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-gray-900 mb-1">{category.title}</h3>
                    <p className="text-sm text-puig-olive italic mb-2">"{category.problem}"</p>
                    <p className="text-xs text-gray-500">{category.useCases.length} soluciones disponibles</p>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`text-gray-400 transition-transform shrink-0 ${isActive ? 'rotate-90' : ''}`}
                  />
                </div>
              </button>
            )
          })}
        </div>

        {/* Use Cases Expansion */}
        {activeCategory && (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-b from-puig-cream/40 to-white rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="font-bold text-xl text-gray-900 mb-2">
                  {categories.find(c => c.id === activeCategory)?.title}
                </h3>
                <p className="text-gray-600">
                  {categories.find(c => c.id === activeCategory)?.description}
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-4">
                {categories.find(c => c.id === activeCategory)?.useCases.map((useCase) => (
                  <UseCaseCard
                    key={useCase.id}
                    useCase={useCase}
                    isExpanded={expandedUseCase === useCase.id}
                    onToggle={() => setExpandedUseCase(expandedUseCase === useCase.id ? null : useCase.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// How We Work Section con Workflow visual
function HowWeWork() {
  return (
    <section id="como-trabajamos" className="py-20 px-6 bg-gradient-to-b from-puig-cream/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo trabajamos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            De problema a solución en semanas, no en meses. Sin jerga técnica, sin complicaciones.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-puig-olive via-puig-gold to-puig-olive opacity-20" />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {workflow.map((item, i) => (
              <div key={i} className="relative">
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-puig-gold/50 hover:shadow-md transition-all h-full">
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-puig-olive text-white flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>

                  <div className="pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                      <Clock size={14} />
                      <span>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-puig-olive">
                      <Target size={14} />
                      <span>{item.outcome}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-puig-olive text-white px-6 py-3 rounded-lg font-medium hover:bg-puig-olive/90 transition-colors"
          >
            Cuéntanos tu problema <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}

// Technologies Section
function Technologies() {
  const [activeTech, setActiveTech] = useState(null)

  return (
    <section id="tecnologias" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestras tecnologías
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Usamos diferentes herramientas según lo que necesites. Aquí te explicamos cada una en lenguaje sencillo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech) => {
            const Icon = iconMap[tech.icon] || MessageSquare
            const isActive = activeTech === tech.id

            return (
              <div
                key={tech.id}
                className={`rounded-xl border-2 transition-all cursor-pointer ${
                  isActive
                    ? 'border-puig-gold bg-puig-cream/30'
                    : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
                onClick={() => setActiveTech(isActive ? null : tech.id)}
              >
                <div className="p-6">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${tech.color}15` }}
                  >
                    <Icon size={28} style={{ color: tech.color }} />
                  </div>

                  <h3 className="font-bold text-gray-900 mb-1">{tech.name}</h3>
                  <p className="text-sm text-puig-olive font-medium mb-3">{tech.tagline}</p>
                  <p className="text-sm text-gray-600">{tech.description}</p>

                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-gray-200 animate-fadeIn">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
                        Lo usamos para:
                      </h4>
                      <ul className="space-y-2">
                        {tech.usedFor.map((use, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 size={14} className="text-puig-olive mt-0.5 shrink-0" />
                            <span>{use}</span>
                          </li>
                        ))}
                      </ul>

                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 mt-4">
                        Ejemplos:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {tech.examples.map((ex, i) => (
                          <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {ex}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// Team Section
function Team() {
  return (
    <section id="equipo" className="py-20 px-6 bg-gradient-to-b from-puig-cream/30 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestro equipo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Somos un equipo pequeño pero enfocado. Trabajamos directamente contigo, sin intermediarios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-xl p-6 border border-gray-100 text-center hover:shadow-md transition-all"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-puig-olive to-puig-gold mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>

              <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-puig-olive font-medium text-sm mb-3">{member.role}</p>
              <p className="text-sm text-gray-600 mb-4">{member.description}</p>

              <div className="pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500">{member.focus}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Team message */}
        <div className="mt-12 bg-puig-olive/5 rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <p className="text-gray-700 text-lg">
            "Creemos que la IA debe ser accesible para todos en Puig, no solo para los técnicos.
            Por eso trabajamos para traducir la tecnología en soluciones que cualquiera pueda usar."
          </p>
        </div>
      </div>
    </section>
  )
}

// Brands Section
function Brands() {
  return (
    <section id="marcas" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Marcas que ya aceleran con IA
          </h2>
          <p className="text-gray-600">
            Únete a las marcas Puig que ya están transformando su forma de trabajar
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {brands.map((brand, i) => (
            <div
              key={i}
              className="px-6 py-3 bg-puig-cream/50 rounded-lg text-gray-700 font-medium hover:bg-puig-gold/20 transition-colors"
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
    <section id="contacto" className="py-20 px-6 bg-gradient-to-b from-puig-cream/30 to-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ¿Listo para empezar?
        </h2>
        <p className="text-gray-600 mb-8">
          Cuéntanos qué problema quieres resolver y te ayudamos a encontrar la mejor solución para tu marca.
        </p>

        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tu nombre</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-puig-olive focus:border-transparent"
                  placeholder="Nombre y apellidos"
                />
              </div>
              <div className="text-left">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tu marca</label>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-puig-olive focus:border-transparent bg-white">
                  <option value="">Selecciona tu marca</option>
                  {brands.map((brand, i) => (
                    <option key={i} value={brand}>{brand}</option>
                  ))}
                  <option value="corporate">Corporate / Otra</option>
                </select>
              </div>
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-2">¿Qué problema quieres resolver?</label>
              <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-puig-olive focus:border-transparent bg-white">
                <option value="">Selecciona un área</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>{cat.title} — {cat.problem}</option>
                ))}
              </select>
            </div>

            <div className="text-left">
              <label className="block text-sm font-medium text-gray-700 mb-2">Cuéntanos más (opcional)</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-puig-olive focus:border-transparent"
                placeholder="Describe tu situación: ¿qué te quita tiempo? ¿qué proceso te gustaría mejorar?"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-puig-gold text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-puig-gold-light transition-colors flex items-center justify-center gap-2"
            >
              Enviar solicitud <ArrowRight size={18} />
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
    <footer className="py-12 px-6 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold">PUIG</span>
            <span className="text-gray-400 text-sm">AI & INNOVATION</span>
          </div>
          <div className="text-sm text-gray-400">
            Plataforma interna para equipos de marca Puig
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
        <title>Puig AI & Innovation | Tu estudio interno de IA</title>
        <meta name="description" content="Soluciones de IA para las marcas Puig" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white">
        <Header />
        <Hero />
        <Problems />
        <HowWeWork />
        <Technologies />
        <Team />
        <Brands />
        <Contact />
        <Footer />
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}