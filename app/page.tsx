"use client"

import { useState, useEffect, useRef } from "react"
import {
  ChevronUp,
  Download,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Menu,
  X,
  Moon,
  Sun,
  Star,
  Rocket,
  Mountain,
  Book,
  Users,
  Microscope,
  Award,
  Plane,
  Instagram,
  Facebook,
  ExternalLink,
  Dumbbell,
  Camera,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

// Recent updates/ventures
const recentUpdates = [
  {
    date: "December 2024",
    title: "Started Canadarm3 Research",
    description:
      "Began my Master's research on AI-powered anomaly detection for space robotics at University of Toronto, collaborating with MDA Space.",
    type: "research",
    icon: Rocket,
  },
  {
    date: "November 2024",
    title: "SGAC ACHIEVED Academy Completion",
    description:
      "Successfully managed educational programs for 60 talented students worldwide, focusing on advanced space topics.",
    type: "outreach",
    icon: Users,
  },
  {
    date: "October 2024",
    title: "Moved to Toronto",
    description: "Started my new chapter in Canada for my Master's degree in Aerospace Science & Engineering.",
    type: "personal",
    icon: Plane,
  },
  {
    date: "June 2024",
    title: "Graduated Magna Cum Laude",
    description:
      "Completed my Bachelor's in Physics at University of the Philippines Diliman as a consistent University Scholar.",
    type: "academic",
    icon: Award,
  },
]

// Research projects with publication links
const researchProjects = [
  {
    id: 1,
    title: "AI for Canadarm3 Anomaly Detection",
    description:
      "Developing deep learning models for autonomous space robotics perception and anomaly detection in collaboration with MDA Space.",
    status: "Active",
    institution: "University of Toronto",
    tags: ["Deep Learning", "Computer Vision", "Space Robotics", "Anomaly Detection"],
    year: "2024-Present",
    links: [
      { type: "Research Proposal", url: "#", icon: ExternalLink },
      { type: "Progress Report", url: "#", icon: ExternalLink },
    ],
  },
  {
    id: 2,
    title: "MOSAIKS Wealth Prediction Philippines",
    description:
      "Using machine learning to predict socioeconomic indicators from satellite imagery for Philippine household clusters.",
    status: "Published",
    institution: "Data and Computation Laboratory",
    tags: ["Machine Learning", "Satellite Data", "Geospatial Analysis", "Social Impact"],
    year: "2021-2023",
    links: [
      { type: "arXiv Preprint", url: "#", icon: ExternalLink },
      { type: "Conference Paper", url: "#", icon: ExternalLink },
      { type: "GitHub Repository", url: "#", icon: Github },
    ],
  },
  {
    id: 3,
    title: "Neuromorphic Vision for Space Applications",
    description:
      "Investigating potential applications of event-based vision sensors in space technology and situational awareness.",
    status: "Ongoing",
    institution: "Data and Computation Laboratory",
    tags: ["Neuromorphic Computing", "Event-based Vision", "Space Technology"],
    year: "2021-Present",
    links: [
      { type: "Research Paper", url: "#", icon: ExternalLink },
      { type: "Technical Report", url: "#", icon: ExternalLink },
    ],
  },
]

// Outreach activities with images
const outreachActivities = [
  {
    organization: "SEDSPH (Students for the Exploration and Development of Space in the Philippines)",
    role: "Founder & Former Chairperson",
    period: "June 2021 - Present",
    description:
      "Established the first-ever nationwide space organization in the Philippines, providing opportunities to 1000+ students across 15 universities.",
    achievements: [
      "Founded and led organization for 3 years",
      "Reached 1000+ students nationwide",
      "Established partnerships with local and international organizations",
      "Created SEDSPH Upskill Groups initiative",
    ],
    impact: "Inspiring the next generation of Filipino space professionals",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: [
      { platform: "Instagram", url: "#", icon: Instagram },
      { platform: "Facebook", url: "#", icon: Facebook },
      { platform: "LinkedIn", url: "#", icon: Linkedin },
    ],
  },
  {
    organization: "Space Generation Advisory Council (SGAC)",
    role: "ACHIEVED Academy Students Manager",
    period: "February 2024 - November 2024",
    description:
      "Coordinated virtual educational programs for 60 talented students worldwide, focusing on advanced space topics.",
    achievements: [
      "Managed cohort of 60 international students",
      "Facilitated discussions on Systems Engineering, Launch Operations",
      "Primary liaison for student inquiries and engagement",
    ],
    impact: "Fostering global collaboration in space education",
    image: "/placeholder.svg?height=300&width=400",
    socialLinks: [{ platform: "Website", url: "#", icon: ExternalLink }],
  },
]

// Simplified other interests
const otherInterests = [
  {
    name: "Hiking",
    icon: Mountain,
    color: "#6B7280",
    description: "Exploring trails and finding perspective in nature's heights",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Fitness",
    icon: Dumbbell,
    color: "#8B5A3C",
    description: "Staying active and maintaining physical and mental well-being",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Photography",
    icon: Camera,
    color: "#6366F1",
    description: "Capturing moments, landscapes, and cultural scenes",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Reading",
    icon: Book,
    color: "#059669",
    description: "Exploring universes through words, from sci-fi to cultural literature",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Constellation animation for hero section only
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = 600 // Fixed height for hero section
    }

    resizeCanvas()

    const stars: Array<{ x: number; y: number; size: number; opacity: number; vx: number; vy: number }> = []

    // Create constellation pattern
    for (let i = 0; i < 40; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.6 + 0.2,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star, index) => {
        // Gentle movement
        star.x += star.vx
        star.y += star.vy

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Subtle twinkling
        star.opacity += (Math.random() - 0.5) * 0.01
        star.opacity = Math.max(0.1, Math.min(0.6, star.opacity))

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(139, 90, 60, ${star.opacity})`
        ctx.fill()

        // Connect nearby stars with subtle lines
        stars.forEach((otherStar, otherIndex) => {
          if (index !== otherIndex) {
            const distance = Math.sqrt(Math.pow(star.x - otherStar.x, 2) + Math.pow(star.y - otherStar.y, 2))
            if (distance < 100) {
              ctx.beginPath()
              ctx.moveTo(star.x, star.y)
              ctx.lineTo(otherStar.x, otherStar.y)
              ctx.strokeStyle = `rgba(139, 90, 60, ${0.2 * (1 - distance / 100)})`
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    window.addEventListener("resize", resizeCanvas)
    return () => window.removeEventListener("resize", resizeCanvas)
  }, [])

  // Scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(Number.parseFloat(scroll) * 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""} bg-[#FEFCF9] dark:bg-[#1A1B23]`}
    >
      {/* Animated Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-[#8B5A3C] via-[#2C3E50] to-[#8B5A3C] transition-all duration-300 relative"
          style={{ width: `${scrollProgress}%` }}
        >
          <div className="absolute right-0 top-0 w-4 h-4 bg-[#8B5A3C] rounded-full transform translate-x-2 -translate-y-1.5 shadow-lg">
            <Rocket className="w-3 h-3 text-white absolute top-0.5 left-0.5" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-1 left-0 right-0 bg-[#2C3E50]/95 dark:bg-[#FEFCF9]/95 backdrop-blur-sm z-40 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* LA Logo */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#8B5A3C] rounded-full flex items-center justify-center">
                <span className="text-white font-playfair font-bold text-lg">LA</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {["Updates", "Research", "Outreach", "Interests", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#FEFCF9] dark:text-[#2C3E50] hover:text-[#8B5A3C] transition-colors duration-200 font-crimson relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5A3C] transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <Button
                onClick={toggleDarkMode}
                variant="ghost"
                size="sm"
                className="text-[#FEFCF9] dark:text-[#2C3E50] hover:text-[#8B5A3C]"
              >
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <Button onClick={toggleDarkMode} variant="ghost" size="sm" className="text-[#FEFCF9] dark:text-[#2C3E50]">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                variant="ghost"
                size="sm"
                className="text-[#FEFCF9] dark:text-[#2C3E50]"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-[#8B5A3C]/20">
              {["Updates", "Research", "Outreach", "Interests", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-2 text-[#FEFCF9] dark:text-[#2C3E50] hover:text-[#8B5A3C] transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Unique Background */}
      <section className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F5F1EB] via-[#F0EBE3] to-[#EBE4DB] dark:from-[#2C3E50] dark:via-[#34495E] dark:to-[#2C3E50] overflow-hidden">
        {/* Constellation Background for Hero Only */}
        <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Introduction */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-[#2C3E50] dark:text-[#FEFCF9] mb-4 font-playfair">
                Hi, I'm Lovely
              </h1>
              <div className="text-lg text-[#6B7280] dark:text-[#9CA3AF] mb-2 font-crimson">
                Aerospace Engineer • AI Researcher • Community Builder
              </div>
              <div className="text-sm text-[#8B5A3C] font-crimson flex items-center space-x-2 mb-6">
                <MapPin className="w-4 h-4" />
                <span>Toronto, Canada</span>
              </div>

              <p className="text-lg text-[#4B5563] dark:text-[#D1D5DB] font-crimson leading-relaxed mb-8">
                I'm a Master's student in Aerospace Science & Engineering at the University of Toronto, working on AI
                for space robotics. I founded SEDSPH, the first nationwide space organization in the Philippines, and
                I'm passionate about making space accessible to everyone.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#8B5A3C] text-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white rounded-full"
                >
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#8B5A3C] text-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white rounded-full"
                >
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#8B5A3C] text-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white rounded-full"
                >
                  <Github className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#8B5A3C] text-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white rounded-full"
                >
                  <GraduationCap className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Right side - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#8B5A3C]/20">
                <img
                  src="/lovely.jpg"
                  alt="Lovely Andeo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section id="updates" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] dark:text-[#FEFCF9] mb-4 font-playfair">Recent Updates</h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] font-crimson max-w-2xl mx-auto">
              Here's what I've been up to lately - from research milestones to new adventures!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentUpdates.map((update, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-[#2C3E50]/80 backdrop-blur-sm border-[#8B5A3C]/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#8B5A3C]/20 rounded-full flex items-center justify-center">
                        <update.icon className="w-6 h-6 text-[#8B5A3C]" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className="bg-[#8B5A3C] text-white font-crimson text-xs">{update.type}</Badge>
                        <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF] font-crimson">{update.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[#2C3E50] dark:text-[#FEFCF9] mb-2 font-playfair group-hover:text-[#8B5A3C] transition-colors duration-200">
                        {update.title}
                      </h3>
                      <p className="text-[#4B5563] dark:text-[#D1D5DB] font-crimson leading-relaxed">
                        {update.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] dark:text-[#FEFCF9] mb-4 font-playfair">Research</h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] font-crimson max-w-3xl mx-auto">
              My research focuses on the intersection of AI and space technology, with a particular interest in making
              space systems more autonomous and reliable.
            </p>
          </div>

          <div className="space-y-8">
            {researchProjects.map((project, index) => (
              <Card
                key={project.id}
                className="bg-white/80 dark:bg-[#2C3E50]/80 backdrop-blur-sm border-[#8B5A3C]/20 shadow-xl overflow-hidden group"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge
                          className={`font-crimson ${
                            project.status === "Active"
                              ? "bg-green-600 text-white"
                              : project.status === "Published"
                                ? "bg-blue-600 text-white"
                                : "bg-[#8B5A3C] text-white"
                          }`}
                        >
                          {project.status}
                        </Badge>
                        <span className="text-sm text-[#6B7280] dark:text-[#9CA3AF] font-crimson">{project.year}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-[#2C3E50] dark:text-[#FEFCF9] mb-2 font-playfair group-hover:text-[#8B5A3C] transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-4 font-crimson leading-relaxed">
                        {project.description}
                      </p>
                      <div className="text-sm text-[#8B5A3C] font-medium font-crimson mb-4">{project.institution}</div>

                      {/* Publication Links */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.links.map((link, i) => (
                          <Button
                            key={i}
                            variant="outline"
                            size="sm"
                            className="border-[#8B5A3C] text-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white font-crimson"
                          >
                            <link.icon className="w-3 h-3 mr-1" />
                            {link.type}
                          </Button>
                        ))}
                      </div>
                    </div>
                    <div className="lg:ml-8">
                      <div className="w-24 h-24 bg-[#8B5A3C]/20 rounded-full flex items-center justify-center">
                        <Microscope className="w-12 h-12 text-[#8B5A3C]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#F3F4F6] dark:bg-[#374151] text-[#2C3E50] dark:text-[#FEFCF9] text-sm rounded-full font-crimson"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Outreach Section */}
      <section id="outreach" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] dark:text-[#FEFCF9] mb-4 font-playfair">Outreach</h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] font-crimson max-w-3xl mx-auto">
              I believe in the power of community and education. Through SEDSPH and other initiatives, I work to make
              space science accessible to students everywhere.
            </p>
          </div>

          <div className="space-y-12">
            {outreachActivities.map((activity, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-[#2C3E50]/80 backdrop-blur-sm border-[#8B5A3C]/20 shadow-xl overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center space-x-3 mb-4">
                        <Users className="w-6 h-6 text-[#8B5A3C]" />
                        <Badge className="bg-[#8B5A3C] text-white font-crimson">{activity.role}</Badge>
                      </div>
                      <h3 className="text-xl font-bold text-[#2C3E50] dark:text-[#FEFCF9] mb-2 font-playfair">
                        {activity.organization}
                      </h3>
                      <div className="text-[#8B5A3C] font-medium mb-4 font-crimson">{activity.period}</div>
                      <p className="text-[#4B5563] dark:text-[#D1D5DB] mb-6 font-crimson leading-relaxed">
                        {activity.description}
                      </p>

                      {/* Social Links */}
                      <div className="flex space-x-3 mb-6">
                        {activity.socialLinks.map((social, i) => (
                          <Button
                            key={i}
                            variant="outline"
                            size="sm"
                            className="border-[#8B5A3C] text-[#8B5A3C] hover:bg-[#8B5A3C] hover:text-white"
                          >
                            <social.icon className="w-4 h-4 mr-1" />
                            {social.platform}
                          </Button>
                        ))}
                      </div>

                      <div className="bg-[#F9FAFB] dark:bg-[#1F2937] p-4 rounded-lg">
                        <h4 className="font-semibold text-[#2C3E50] dark:text-[#FEFCF9] mb-3 font-playfair">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {activity.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start space-x-2">
                              <Star className="w-4 h-4 text-[#8B5A3C] mt-0.5 flex-shrink-0" />
                              <span className="text-[#4B5563] dark:text-[#D1D5DB] font-crimson text-sm">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Image instead of quote */}
                    <div className="flex flex-col justify-center">
                      <div className="aspect-square overflow-hidden rounded-lg mb-4">
                        <img
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.organization}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <div className="text-[#8B5A3C] font-semibold font-crimson italic">"{activity.impact}"</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Other Interests Section */}
      <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#2C3E50] dark:text-[#FEFCF9] mb-4 font-playfair">
              Other Interests
            </h2>
            <p className="text-lg text-[#6B7280] dark:text-[#9CA3AF] font-crimson max-w-3xl mx-auto">
              Beyond research and outreach, I love staying active and exploring the world through different lenses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {otherInterests.map((interest, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-[#2C3E50]/80 backdrop-blur-sm border-[#8B5A3C]/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={interest.image || "/placeholder.svg"}
                    alt={interest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${interest.color}20` }}
                    >
                      <interest.icon className="w-6 h-6" style={{ color: interest.color }} />
                    </div>
                    <h3 className="text-lg font-bold text-[#2C3E50] dark:text-[#FEFCF9] font-playfair group-hover:text-[#8B5A3C] transition-colors duration-200">
                      {interest.name}
                    </h3>
                  </div>
                  <p className="text-[#4B5563] dark:text-[#D1D5DB] text-sm font-crimson">{interest.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F9FAFB] dark:bg-[#1F2937]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#2C3E50] dark:text-[#FEFCF9] mb-4 font-playfair">Let's Connect</h2>
            <p className="text-[#6B7280] dark:text-[#9CA3AF] font-crimson">
              Whether you want to collaborate on research or discuss space education, I'd love to hear from you!
            </p>
          </div>

          <Card className="bg-white/90 dark:bg-[#2C3E50]/90 backdrop-blur-sm border-[#8B5A3C]/20 shadow-lg">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#2C3E50] dark:text-[#FEFCF9] mb-4 font-playfair">
                    Get in Touch
                  </h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-4 h-4 text-[#8B5A3C]" />
                      <span className="text-[#4B5563] dark:text-[#D1D5DB] font-crimson text-sm">
                        lovely.andeo@mail.utoronto.ca
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-4 h-4 text-[#8B5A3C]" />
                      <span className="text-[#4B5563] dark:text-[#D1D5DB] font-crimson text-sm">Toronto, Canada</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#8B5A3C] hover:bg-[#7A4F35] text-white font-crimson">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </div>

                <div>
                  <form className="space-y-3">
                    <Input
                      placeholder="Your Name"
                      className="bg-[#F9FAFB] dark:bg-[#374151] border-[#8B5A3C]/30 focus:border-[#8B5A3C] font-crimson text-sm"
                    />
                    <Input
                      type="email"
                      placeholder="Your Email"
                      className="bg-[#F9FAFB] dark:bg-[#374151] border-[#8B5A3C]/30 focus:border-[#8B5A3C] font-crimson text-sm"
                    />
                    <Textarea
                      placeholder="Your Message"
                      rows={3}
                      className="bg-[#F9FAFB] dark:bg-[#374151] border-[#8B5A3C]/30 focus:border-[#8B5A3C] font-crimson text-sm"
                    />
                    <Button
                      type="submit"
                      className="w-full bg-[#8B5A3C] hover:bg-[#7A4F35] text-white transition-all duration-300 font-crimson"
                    >
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C3E50] dark:bg-[#1A1B23] text-[#D1D5DB] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-crimson mb-1">© 2024 Lovely Andeo</p>
            <p className="text-xs opacity-75 font-crimson">
              Bridging cultures, building communities, reaching for the stars.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#8B5A3C] hover:bg-[#7A4F35] text-white p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 group"
        size="sm"
      >
        <ChevronUp className="w-5 h-5 group-hover:animate-bounce" />
      </Button>
    </div>
  )
}
