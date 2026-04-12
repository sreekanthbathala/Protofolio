import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Terminal, 
  Cpu,
  Menu,
  X,
  ArrowUpRight,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "AI Document Q&A System",
    description: "Built an end-to-end RAG pipeline using Llama 3.2 via Ollama. Features real-time Q&A chat and conversation history, running 100% locally.",
    tags: ["Python", "LangChain", "FAISS", "Ollama", "Streamlit"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/sreekanthbathala"
  },
  {
    title: "College Management System",
    description: "A full-stack MERN application with RESTful APIs to manage student and course records, featuring a clean and responsive UI.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image: "https://images.unsplash.com/photo-1523050335392-9bc5675e7831?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/sreekanthbathala"
  }
];

const skills = [
  "Generative AI", "RAG", "LangChain", "Ollama", "Python", 
  "React.js", "Node.js", "Express.js", "MongoDB", "FAISS", 
  "ChromaDB", "Prompt Engineering", "Hugging Face", "Git", "GitHub"
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-accent selection:text-accent-foreground">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b py-4" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-display font-bold tracking-tighter"
          >
            SREEKANTH<span className="text-accent">.</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-accent transition-colors">
                {item}
              </a>
            ))}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" className="rounded-full border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300">
                Resume
              </Button>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-foreground" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-3xl font-display font-bold">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-accent transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center"
            >
              <Badge variant="outline" className="mb-6 px-4 py-1 border-accent/50 text-accent uppercase tracking-[0.2em] text-[10px]">
                Seeking AI/ML Internships
              </Badge>
              <h1 className="hero-text text-[15vw] md:text-[12vw] lg:text-[10vw] mb-8">
                AI / ML<br />
                <span className="text-accent italic font-light">DEVELOPER</span>
              </h1>
              <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl font-light leading-relaxed mb-10">
                B.Tech CSE student specializing in Generative AI and RAG systems. 
                Building intelligent applications that run locally and efficiently.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="rounded-full px-8 bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(242,125,38,0.3)] hover:shadow-[0_0_30px_rgba(242,125,38,0.5)] transition-all">
                    View Projects <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="rounded-full px-8 border-white/20 hover:bg-white/10 backdrop-blur-sm">
                    Let's Talk
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-20 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_transparent_70%)] blur-[120px]" />
          </div>
        </section>

        {/* Marquee */}
        <div className="py-12 border-y border-white/5 overflow-hidden bg-muted/30">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 mx-8">
                <span className="text-4xl font-display font-bold opacity-20 uppercase tracking-tighter">
                  Generative AI
                </span>
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-4xl font-display font-bold opacity-20 uppercase tracking-tighter">
                  RAG Systems
                </span>
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-4xl font-display font-bold opacity-20 uppercase tracking-tighter">
                  Full Stack Development
                </span>
                <div className="w-2 h-2 rounded-full bg-accent" />
              </div>
            ))}
          </div>
        </div>

        {/* About Section */}
        <section id="about" className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter">
                  I BUILD<br />
                  <span className="text-muted-foreground">INTELLIGENT</span><br />
                  SYSTEMS.
                </h2>
                <div className="space-y-6 text-muted-foreground text-lg font-light leading-relaxed">
                  <p>
                    I'm Sreekanth Bathala, a B.Tech Computer Science student at MITS with a deep 
                    interest in AI/ML and Generative AI. I specialize in building Retrieval-Augmented 
                    Generation (RAG) pipelines that leverage local LLMs for privacy and efficiency.
                  </p>
                  <p>
                    Beyond AI, I'm a full-stack developer experienced in the MERN stack. I enjoy 
                    bridging the gap between complex backend logic and intuitive frontend experiences.
                  </p>
                </div>
                <div className="mt-10 flex gap-6">
                  {[
                    { icon: Github, href: "https://github.com/sreekanthbathala" },
                    { icon: Linkedin, href: "https://linkedin.com/in/sreekanth-bathala" },
                    { icon: Mail, href: "mailto:sreekanthbathala8@gmail.com" }
                  ].map((social, i) => (
                    <motion.a 
                      key={i}
                      href={social.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full glass-card hover:text-accent hover:border-accent/50 transition-colors"
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="aspect-square rounded-3xl overflow-hidden glass-card p-4">
                  <img 
                    src="https://picsum.photos/seed/sreekanth/800/800" 
                    alt="Sreekanth Bathala" 
                    className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Stats */}
                <div className="absolute -bottom-10 -left-10 glass-card p-6 rounded-2xl hidden md:block">
                  <div className="text-4xl font-display font-bold text-accent">2028</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">Graduation</div>
                </div>
                <div className="absolute -top-10 -right-10 glass-card p-6 rounded-2xl hidden md:block">
                  <div className="text-4xl font-display font-bold text-accent">MITS</div>
                  <div className="text-xs uppercase tracking-widest opacity-60">B.Tech CSE</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 bg-muted/20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
              <div>
                <Badge variant="outline" className="mb-4 px-4 py-1 border-accent/50 text-accent uppercase tracking-widest text-[10px]">
                  Projects
                </Badge>
                <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter">
                  FEATURED WORK
                </h2>
              </div>
              <Button variant="link" className="text-accent p-0 h-auto text-lg hover:no-underline group">
                View GitHub <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    ease: [0.21, 0.47, 0.32, 0.98] 
                  }}
                >
                  <Card className="glass-card border-none overflow-hidden group h-full flex flex-col hover:shadow-[0_20px_50px_rgba(242,125,38,0.1)] transition-all duration-500">
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <CardHeader className="flex-grow p-8">
                      <div className="flex gap-2 mb-6 flex-wrap">
                        {project.tags.map(tag => (
                          <Badge key={tag} variant="secondary" className="bg-white/10 text-white border-none text-[10px] uppercase tracking-wider font-medium px-3 py-1">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="text-3xl font-display font-bold group-hover:text-accent transition-colors mb-4">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-base font-light leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          variant="outline" 
                          className="w-full h-12 rounded-xl border-white/20 hover:bg-accent hover:text-white hover:border-accent transition-all font-bold uppercase tracking-widest text-xs"
                          onClick={() => window.open(project.link, '_blank')}
                        >
                          Explore Project
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl md:text-7xl font-display font-bold mb-16 tracking-tighter">
                TECHNICAL <span className="text-accent italic">STACK</span>
              </h2>
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={{
                      hidden: { opacity: 0, y: 20, scale: 0.8 },
                      visible: { opacity: 1, y: 0, scale: 1 }
                    }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  >
                    <Badge 
                      className="px-10 py-5 text-lg md:text-2xl font-display font-bold rounded-full bg-white/10 border-white/20 text-white hover:bg-accent hover:text-white hover:border-accent hover:scale-110 transition-all duration-300 cursor-default shadow-lg backdrop-blur-md"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 bg-muted/20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl mx-auto glass-card p-12 md:p-20 rounded-[3rem] text-center">
              <h2 className="text-5xl md:text-8xl font-display font-bold mb-8 tracking-tighter">
                LET'S <span className="text-accent">CONNECT</span>
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
                Actively seeking AI/ML internship opportunities. Let's build something intelligent together.
              </p>
              <a 
                href="mailto:sreekanthbathala8@gmail.com" 
                className="inline-flex items-center gap-4 text-2xl md:text-4xl lg:text-5xl font-display font-bold hover:text-accent transition-colors group break-all"
              >
                sreekanthbathala8@gmail.com
                <ArrowUpRight className="h-10 w-10 md:h-16 md:w-16 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform shrink-0" />
              </a>
              
              <div className="mt-20 pt-20 border-t border-white/5 grid md:grid-cols-3 gap-12 text-left">
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-accent mb-4">Profiles</h4>
                  <div className="flex flex-col gap-2 font-medium">
                    <a href="https://linkedin.com/in/sreekanth-bathala" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
                    <a href="https://github.com/sreekanthbathala" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">GitHub</a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-accent mb-4">Location</h4>
                  <p className="font-medium">Madanapalle, AP<br />India</p>
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-accent mb-4">Education</h4>
                  <p className="font-medium">B.Tech CSE @ MITS<br />Class of 2028</p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Glow */}
          <div className="absolute bottom-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent blur-[150px] rounded-full" />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-muted-foreground font-light">
            © 2024 SREEKANTH BATHALA. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8 text-xs uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-4 rounded-full glass-card hover:bg-accent hover:text-white transition-all group"
          >
            <ArrowUpRight className="h-5 w-5 -rotate-45 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </footer>
    </div>
  );
}
