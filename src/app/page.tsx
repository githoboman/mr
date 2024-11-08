/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import React, { useRef, useState, useEffect } from 'react';
import { 
  Code2, 
  Layout, 
  BarChart, 
  GitBranch,
  Server,
  Cpu,
  Network,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Data Analysis & Analytics",
    description: "Advanced data processing, visualization, and predictive analytics solutions using cutting-edge technologies",
    icon: <BarChart className="w-8 h-8 mb-4" />,
    technologies: ["Python", "R", "TensorFlow", "PowerBI"]
  },
  {
    title: "UI/UX Design",
    description: "User-centered design solutions with focus on accessibility, usability, and modern aesthetics",
    icon: <Layout className="w-8 h-8 mb-4" />,
    technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping"]
  },
  {
    title: "Frontend Development",
    description: "Responsive and performant web applications using modern frameworks and best practices",
    icon: <Code2 className="w-8 h-8 mb-4" />,
    technologies: ["React", "Vue", "TypeScript", "Next.js"]
  },
  {
    title: "Backend Development",
    description: "Scalable server solutions and robust API development for enterprise applications",
    icon: <Server className="w-8 h-8 mb-4" />,
    technologies: ["Node.js", "Python", "Java", "AWS"]
  }
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Lead Data Scientist",
    expertise: "Machine Learning, Statistical Analysis",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Michael Chen",
    role: "Senior UI/UX Designer",
    expertise: "User Research, Interface Design",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Alex Rodriguez",
    role: "Backend Architect",
    expertise: "System Design, Cloud Infrastructure",
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    name: "Emma Wilson",
    role: "Frontend Lead",
    expertise: "React, Performance Optimization",
    image: "/placeholder.svg?height=400&width=400"
  }
];

const portfolioItems = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Developed a real-time analytics dashboard using machine learning algorithms for predictive insights.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Python", "TensorFlow", "AWS"]
  },
  {
    title: "E-commerce Platform Redesign",
    description: "Completely overhauled the UX/UI of a major e-commerce platform, resulting in a 40% increase in conversions.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Figma", "React", "Node.js", "MongoDB"]
  },
  {
    title: "Blockchain-based Supply Chain Solution",
    description: "Implemented a transparent and secure supply chain management system using blockchain technology.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Ethereum", "Solidity", "React", "Node.js"]
  },
  {
    title: "IoT Smart Home Ecosystem",
    description: "Created an interconnected IoT ecosystem for smart home devices with a user-friendly mobile app interface.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React Native", "Python", "MQTT", "TensorFlow Lite"]
  }
];

const carouselImages = [
  "/placeholder.svg?height=600&width=800&text=Tech+Innovation",
  "/placeholder.svg?height=600&width=800&text=Data+Analytics",
  "/placeholder.svg?height=600&width=800&text=AI+Solutions",
  "/placeholder.svg?height=600&width=800&text=Cloud+Computing",
];

const smoothScroll = (targetId: string) => {
  const target = document.getElementById(targetId);
  if (target) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    };

    window.requestAnimationFrame(step);
  }
};

const easeInOutCubic = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
};

const SideNav = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-b from-purple-800 to-indigo-900 text-white transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202024-11-06%20at%2012.49.37%20PM-ubFrYkwNTZHtdgQd9fWkwE3CKbCmP0.jpeg" 
            alt="Olash Network Logo" 
            className="w-12 h-12"
          />
          <button onClick={() => setIsOpen(false)} className="text-white" aria-label="Close menu">
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="space-y-4">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); smoothScroll('about'); setIsOpen(false); }} className="block py-2 hover:text-yellow-300 transition-colors">About</a></li>
          <li><a href="#services" onClick={(e) => { e.preventDefault(); smoothScroll('services'); setIsOpen(false); }} className="block py-2 hover:text-yellow-300 transition-colors">Services</a></li>
          <li><a href="#work" onClick={(e) => { e.preventDefault(); smoothScroll('work'); setIsOpen(false); }} className="block py-2 hover:text-yellow-300 transition-colors">Our Work</a></li>
          <li><a href="#team" onClick={(e) => { e.preventDefault(); smoothScroll('team'); setIsOpen(false); }} className="block py-2 hover:text-yellow-300 transition-colors">Team</a></li>
          <li><a href="#stack" onClick={(e) => { e.preventDefault(); smoothScroll('stack'); setIsOpen(false); }} className="block py-2 hover:text-yellow-300 transition-colors">Tech Stack</a></li>
        </ul>
      </div>
    </div>
  );
};

export default function OlashNetwork() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const position = scrollRef.current.scrollLeft;
        setScrollPosition(position);
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current && !isScrolling) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      const start = scrollRef.current.scrollLeft;
      const target = start + scrollAmount;
      const duration = 500;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutCubic(timeElapsed, start, scrollAmount, duration);
        if (scrollRef.current) scrollRef.current.scrollLeft = run;
        if (timeElapsed < duration) requestAnimationFrame(animation);
        else setIsScrolling(false);
      };

      setIsScrolling(true);
      requestAnimationFrame(animation);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-pink-900 text-white pr-0 md:pr-16">
      <SideNav isOpen={isNavOpen} setIsOpen={setIsNavOpen} />
      <button
        onClick={() => setIsNavOpen(true)}
        className="fixed top-4 right-4 z-40 bg-purple-600 text-white p-2 rounded-full shadow-lg"
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>
      
      {/* Hero Section */}
      <header className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-purple-800 via-indigo-700 to-pink-600">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white mt-16 sm:mt-0">
                Olash <span className="text-pink-400">Network</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-100">Empowering Innovation Through Technology</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-pink-500 text-white hover:bg-pink-600" onClick={() => smoothScroll('about')}>
                  About Us
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 relative mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-indigo-800 opacity-20 rounded-lg"></div>
              <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden rounded-lg shadow-2xl">
                {carouselImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Tech illustration ${index + 1}`}
                    className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-500 rounded-full w-32 h-32 flex items-center justify-center z-20">
                <Cpu className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-gradient-to-br from-purple-800 via-indigo-800 to-pink-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              About Our Tech Company
            </h2>
            <div className="text-lg text-gray-300 max-w-3xl mx-auto text-center">
              <p className="mb-6">
                Olash Network is a cutting-edge technology company specializing in data analysis,
                UI/UX design, and full-stack development. We deliver comprehensive solutions
                that drive digital transformation and business growth.
              </p>
              <div className="flex flex-wrap justify-center gap-12 mt-12">
                <div className="text-center">
                  <Cpu className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
                  <p className="font-semibold text-lg">Advanced Tech</p>
                </div>
                <div className="text-center">
                  <Network className="w-12 h-12 mx-auto mb-4 text-teal-400" />
                  <p className="font-semibold text-lg">Scalable Solutions</p>
                </div>
                <div className="text-center">
                  <GitBranch className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                  <p className="font-semibold text-lg">Agile Development</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-4 bg-gradient-to-tl from-indigo-800 via-purple-800 to-pink-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900 to-indigo-900 p-8 rounded-xl shadow-lg border border-pink-700 hover:border-pink-500 transition-all duration-300">
                  <div className="text-emerald-400">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-100">{service.title}</h3>
                  <p className="text-gray-400 mb-4">{service.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Scrolly Section */}
        <section id="work" className="py-16 px-4 bg-gradient-to-br from-pink-800 via-indigo-800 to-purple-800 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              Our Work
            </h2>
            <div className="relative">
              <div 
                ref={scrollRef}
                className="flex overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {portfolioItems.map((item, index) => (
                  <div key={index} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4 snap-start">
                    <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-xl overflow-hidden shadow-lg">
                      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-emerald-400">{item.title}</h3>
                        <p className="text-gray-300 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, i) => (
                            <span key={i} className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => scroll('left')} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
                aria-label="Scroll left"
                disabled={scrollPosition === 0 || isScrolling}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button 
                onClick={() => scroll('right')} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full shadow-lg disabled:opacity-50"
                aria-label="Scroll right"
                disabled={scrollPosition >= (scrollRef.current?.scrollWidth ?? 0) - (scrollRef.current?.clientWidth ?? 0) || isScrolling}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 px-4 bg-gradient-to-br from-purple-800 via-pink-800 to-indigo-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              Our Technical Experts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-purple-900 to-indigo-900 p-6 rounded-xl text-center border border-pink-700 hover:border-pink-500 transition-all duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-emerald-500 shadow-lg"
                  />
                  <h3 className="font-semibold text-xl text-gray-100">{member.name}</h3>
                  <p className="text-emerald-400 font-medium">{member.role}</p>
                  <p className="text-gray-400 text-sm mt-2">{member.expertise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Banner */}
        <section id="stack" className="py-16 px-4 bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-800 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="/placeholder.svg?height=1080&width=1920" 
              alt="Tech background" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-semibold mb-4 text-xl text-emerald-400">Data Analysis</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Python</li>
                  <li>R</li>
                  <li>TensorFlow</li>
                  <li>Pandas</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-xl text-teal-400">Frontend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Next.js</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-xl text-yellow-400">Backend</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>PostgreSQL</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-xl text-green-400">Cloud & DevOps</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>AWS</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>CI/CD</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-200">
              Lets collaborate to bring your innovative ideas to life with our cutting-edge technology solutions.
            </p>
            <Button size="lg" className="bg-pink-500 text-white hover:bg-pink-600">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}