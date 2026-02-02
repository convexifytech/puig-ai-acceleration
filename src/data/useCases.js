export const categories = [
  {
    id: "content-creative",
    title: "Content & Creative",
    icon: "Pencil",
    color: "#E6C229",
    problem: "My team spends too much time creating content",
    useCases: [
      {
        id: "copywriting-assistant",
        title: "Copywriting Assistant",
        problem: "Creating on-brand copy takes too long",
        solution: "AI-powered copywriting trained on your brand guidelines, tone of voice, and product knowledge. Generate social posts, product descriptions, and marketing copy in seconds.",
        brands: ["Rabanne", "Apivita", "Kama Ayurveda", "Uriage", "Jean Paul Gaultier", "Carolina Herrera", "Dries Van Noten", "Nina Ricci", "Penhaligon's", "Byredo"],
        impact: "80% faster content creation",
        technologies: ["LLMs", "Brand Knowledge Base"]
      },
      {
        id: "brand-voice-agent",
        title: "Brand Voice / TOV Agent",
        problem: "Inconsistent tone of voice across markets and teams",
        solution: "Custom AI agent trained specifically on your brand's tone of voice, messaging framework, and communication guidelines. Ensures consistency across all touchpoints.",
        brands: ["All Prestige Brands", "CREO"],
        impact: "100% brand consistency",
        technologies: ["AI Agents", "Brand Knowledge Base"]
      },
      {
        id: "founder-voice",
        title: "Founder's Voice Agent",
        problem: "Teams don't know how to communicate like the founder",
        solution: "Specialized agent trained on founder interviews, speeches, and communications to capture their unique voice and perspective.",
        brands: ["Kama Ayurveda (Vivek Sahni TOV)"],
        impact: "Authentic founder messaging",
        technologies: ["LLMs", "Custom Training"]
      },
      {
        id: "social-media-gpt",
        title: "Social Media GPT",
        problem: "Creating social content is manual and time-consuming",
        solution: "Generate platform-specific social media content including captions, hashtags, and content calendars aligned with your brand strategy.",
        brands: ["Rabanne", "Apivita", "Kama Ayurveda", "Uriage"],
        impact: "5x content output",
        technologies: ["LLMs", "Multi-platform Optimization"]
      },
      {
        id: "image-generation",
        title: "Governed Image Generation",
        problem: "Image generation tools are ungoverned and risky",
        solution: "Secure, compliant image generation integrated within Enterprise environment with brand guardrails and creative integrity controls.",
        brands: ["Rolling out to all brands"],
        impact: "1,000 licenses deployed",
        technologies: ["Image AI", "Enterprise Governance"]
      }
    ]
  },
  {
    id: "customer-experience",
    title: "Customer Experience",
    icon: "Heart",
    color: "#9A8B6D",
    problem: "I want my customers to have a more personalized experience",
    useCases: [
      {
        id: "gifting-engine",
        title: "Gifting Recommendation Engine",
        problem: "Customers don't know what to gift",
        solution: "Interactive gifting concierge that guides customers through a personalized journey to find the perfect gift based on recipient, occasion, and preferences.",
        brands: ["Penhaligon's"],
        impact: "Higher conversion rates",
        technologies: ["AI Agents", "Intelligent AI Apps"]
      },
      {
        id: "beauty-advisor",
        title: "Beauty Advisor / Digital Expert",
        problem: "Need 24/7 expert advice for customers",
        solution: "AI-powered beauty advisor trained on your entire product catalog, ingredients, and beauty expertise to provide personalized recommendations.",
        brands: ["Rabanne", "Kama Ayurveda"],
        impact: "24/7 expert availability",
        technologies: ["AI Agents", "Product Knowledge Base"]
      },
      {
        id: "in-store-expert",
        title: "In-Store Expert Agent",
        problem: "Store advisors need real-time support",
        solution: "Mobile-first AI assistant for store staff providing instant access to product knowledge, recommendations, and customer guidance.",
        brands: ["Kama Ayurveda (Ayurvedic Expert)"],
        impact: "Empowered store teams",
        technologies: ["AI Agents", "Mobile Apps"]
      }
    ]
  },
  {
    id: "market-intelligence",
    title: "Market Intelligence",
    icon: "TrendingUp",
    color: "#6B6B6B",
    problem: "We lack visibility into what's happening in the market",
    useCases: [
      {
        id: "social-listening",
        title: "Social Listening Dashboard",
        problem: "We don't know what people say about us on social",
        solution: "Real-time social listening integrated with Meltwater, providing sentiment analysis, trend detection, and competitive monitoring in one dashboard.",
        brands: ["Charlotte Tilbury", "Rabanne", "Jean Paul Gaultier", "Carolina Herrera", "Nina Ricci", "Kama Ayurveda", "Byredo", "Penhaligon's", "Dries Van Noten"],
        impact: "Real-time brand monitoring",
        technologies: ["Meltwater Integration", "Intelligent AI Apps"]
      },
      {
        id: "consumer-intelligence",
        title: "Consumer Intelligence Platform",
        problem: "Trend reports arrive too late to act on",
        solution: "AI-powered platform that aggregates market trends, consumer insights, and competitive intelligence with automated alerts and analysis.",
        brands: ["Prestige Brands Portfolio"],
        impact: "Faster trend response",
        technologies: ["Multi-Agent Systems", "Data Integration"]
      },
      {
        id: "competitive-intel",
        title: "Competitive Intelligence",
        problem: "We don't know how we compare vs competitors",
        solution: "Automated competitive analysis tracking pricing, positioning, launches, and market share across your competitive set.",
        brands: ["In Development"],
        impact: "Strategic advantage",
        technologies: ["AI Agents", "Market Data"]
      }
    ]
  },
  {
    id: "sales-analytics",
    title: "Sales & Analytics",
    icon: "BarChart3",
    color: "#000000",
    problem: "We don't have actionable data for decisions",
    useCases: [
      {
        id: "sales-forecasting",
        title: "Sales Forecasting Tool",
        problem: "Sell-through analysis is manual and slow",
        solution: "AI-powered sales forecasting combining historical data, market trends, and external factors for accurate demand prediction.",
        brands: ["Carolina Herrera", "Dries Van Noten"],
        impact: "Accurate forecasting",
        technologies: ["Intelligent AI Apps", "Predictive Analytics"]
      },
      {
        id: "wholesale-reporting",
        title: "Wholesale AI Reporting",
        problem: "No visibility into wholesale performance",
        solution: "Automated reporting system for wholesale channels integrating with ELM and retail partners for unified performance visibility.",
        brands: ["Dries Van Noten"],
        impact: "Complete visibility",
        technologies: ["Data Integration", "Intelligent AI Apps"]
      },
      {
        id: "ecommerce-intel",
        title: "E-commerce Intelligence",
        problem: "E-retailer reports are scattered and inconsistent",
        solution: "Unified e-commerce intelligence aggregating data from all e-retailers into actionable insights and performance benchmarks.",
        brands: ["Penhaligon's", "Rabanne"],
        impact: "Unified e-com view",
        technologies: ["Data Aggregation", "AI Analytics"]
      }
    ]
  },
  {
    id: "search-visibility",
    title: "Search & Visibility",
    icon: "Search",
    color: "#E6C229",
    problem: "We're not appearing where we should in search",
    useCases: [
      {
        id: "seo-services",
        title: "SEO Strategy & Content",
        problem: "We're not optimized for Google",
        solution: "Comprehensive SEO strategy including keyword research, content optimization, and technical SEO aligned with AI-powered content creation.",
        brands: ["Rabanne", "Jean Paul Gaultier", "Carolina Herrera"],
        impact: "Higher search rankings",
        technologies: ["SEO Tools", "Content AI"]
      },
      {
        id: "geo-optimization",
        title: "GEO (Generative Engine Optimization)",
        problem: "We don't appear in ChatGPT, Perplexity, or AI searches",
        solution: "New frontier of search optimization ensuring your brand appears correctly in AI-powered search engines and conversational interfaces.",
        brands: ["Jean Paul Gaultier", "Rabanne", "Penhaligon's"],
        impact: "AI search presence",
        technologies: ["GEO Strategy", "Content Optimization"]
      }
    ]
  },
  {
    id: "enablement",
    title: "Training & Enablement",
    icon: "GraduationCap",
    color: "#9A8B6D",
    problem: "My team doesn't know how to use AI tools effectively",
    useCases: [
      {
        id: "prompting-sessions",
        title: "Training & Prompting Sessions",
        problem: "Teams aren't adopting the AI tools we provide",
        solution: "Hands-on training sessions teaching teams how to effectively prompt and use Custom GPTs for their daily workflows.",
        brands: ["All brands (monthly sessions)"],
        impact: "86% adoption rate",
        technologies: ["Training Programs", "Best Practices"]
      },
      {
        id: "use-case-workshops",
        title: "Use Case Discovery Workshops",
        problem: "We don't know which AI use cases apply to us",
        solution: "Collaborative workshops to identify high-impact AI opportunities specific to your brand's challenges and workflows.",
        brands: ["Fashion Brands (March workshop)"],
        impact: "Clear AI roadmap",
        technologies: ["Consulting", "Strategy"]
      },
      {
        id: "governance",
        title: "AI Governance & Best Practices",
        problem: "AI usage is decentralized and difficult to govern",
        solution: "Framework for responsible AI usage including guidelines, approval workflows, and compliance monitoring.",
        brands: ["Enterprise-wide"],
        impact: "Controlled scaling",
        technologies: ["Governance Framework", "Enterprise Controls"]
      }
    ]
  }
];

export const stats = [
  { value: "1,000+", label: "Custom GPT Licenses" },
  { value: "86%", label: "Adoption Rate" },
  { value: "13+", label: "Brands Served" },
  { value: "50+", label: "Use Cases Deployed" }
];

export const technologies = [
  {
    name: "Large Language Models",
    shortName: "LLMs",
    description: "Advanced AI models trained on your brand's unique data and guidelines"
  },
  {
    name: "AI Agents",
    shortName: "Agents",
    description: "Intelligent assistants that automate complex tasks and workflows"
  },
  {
    name: "Multi-Agent Systems",
    shortName: "Multi-Agent",
    description: "Coordinated AI systems that work together on complex problems"
  },
  {
    name: "Intelligent AI Apps",
    shortName: "AI Apps",
    description: "Custom applications with visual interfaces powered by AI"
  },
  {
    name: "Brand Knowledge Bases",
    shortName: "Knowledge",
    description: "Structured repositories of brand guidelines, products, and expertise"
  }
];

export const brands = [
  "Rabanne",
  "Jean Paul Gaultier",
  "Penhaligon's",
  "Nina Ricci",
  "Byredo",
  "Charlotte Tilbury",
  "Carolina Herrera",
  "Dries Van Noten",
  "Apivita",
  "Kama Ayurveda",
  "Uriage"
];
