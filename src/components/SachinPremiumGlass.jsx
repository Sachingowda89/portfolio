import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

/* Projects — Minimal Professional Cards */
const projects = [
  {
    title: "Zerodha (Clone)",
    description: "MERN clone of Zerodha with real-time charts, portfolio tracking, and authentication.",
    features: [
      "Real-time stock charts",
      "Secure authentication system",
      "Portfolio & watchlist features",
    ],
    live: "https://zerodha-iyfl.vercel.app/",
    repo: "https://github.com/Sachingowda89/Zerodha.git",
    image: "/images/zerodha-preview.png",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Zoom App",
    description: "Real-time video conferencing app built using WebRTC, Socket.io, and Node.js.",
    features: [
      "Peer-to-peer video calling",
      "Real-time communication using WebRTC",
      "Room-based meeting system",
    ],
    live: "https://zoom-app-5.onrender.com",
    repo: "https://github.com/Sachingowda89/Zoom-app.git",
    image: "/images/zoom-preview.png",
    tags: ["WebRTC", "Socket.io", "React"],
  },
  {
    title: "Wanderlust",
    description: "Travel listing platform (Airbnb style) with reviews, CRUD, and authentication.",
    features: [
      "Full CRUD property listing",
      "User authentication",
      "Review & rating system",
    ],
    live: "https://wonderlust-project-5gcq.onrender.com/",
    repo: "https://github.com/Sachingowda89/wonderlust-project.git",
    image: "/images/wanderlust-preview.png",
    tags: ["Express", "MongoDB", "EJS"],
  },
];

export default function SachinPremiumGlass() {
  // State for Mobile Menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="bg-[#0f172a] text-white min-h-screen font-sans selection:bg-sky-500/30">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-[#0f172a]/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          
          {/* Logo / Name */}
          <div className="flex items-center gap-4">
            <img
              src="/images/sachin.png"
              alt="Sachin"
              className="w-10 h-10 rounded-md object-cover ring-1 ring-sky-400"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-500 text-transparent bg-clip-text">
              SACHIN
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}

            <a
              href="/resume/Sachin_K_S_Resume.pdf"
              download
              className="px-4 py-2 border border-sky-400 rounded-lg text-sky-400 hover:bg-sky-400/10 transition"
            >
              Resume ⬇
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-sky-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f172a] border-b border-white/10"
            >
              <nav className="flex flex-col p-6 gap-4 text-center">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={closeMenu}
                    className="text-slate-300 hover:text-sky-400 text-lg"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/resume/Sachin_K_S_Resume.pdf"
                  download
                  onClick={closeMenu}
                  className="mt-2 px-4 py-2 border border-sky-400 rounded-lg text-sky-400 hover:bg-sky-400/10 inline-block w-full"
                >
                  Download Resume
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-28">

        {/* HERO */}
        <motion.section 
          id="home"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="pt-12 pb-20 max-w-6xl mx-auto px-6"
        >
          <div className="max-w-3xl">
            <p className="text-sky-400 text-lg tracking-wide">
              Hi, I'm <span className="font-semibold text-sky-300">Sachin K S</span>
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-2 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent leading-tight">
              Full Stack Developer
            </h1>

            <p className="text-sky-300 mt-4 text-xl">
              MERN • Java • Real-Time Applications
            </p>

            <p className="mt-6 text-slate-300 leading-relaxed text-lg max-w-2xl">
              I specialize in building fast, scalable applications using MERN and Java,
              with a strong focus on real-time technologies like WebRTC & Socket.io.
            </p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="/resume/Sachin_K_S_Resume.pdf"
                download
                className="px-6 py-3 border border-sky-400 rounded-lg hover:bg-sky-400/10 text-sky-300 transition font-medium"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition font-medium shadow-lg shadow-sky-500/25"
              >
                View Projects
              </a>

              <div className="flex items-center gap-4 ml-4 text-2xl text-slate-400">
                <a href="https://github.com/Sachingowda89" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
                <a href="https://linkedin.com/in/sachin-k-s-754152273" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><FaLinkedin /></a>
                <a href="mailto:sachin17.ks@gmail.com" className="hover:text-red-400 transition"><FaEnvelope /></a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 text-sky-400 decoration-sky-500/30 underline underline-offset-8">About Me</h3>

            <p className="text-slate-300 leading-relaxed text-lg">
              I'm a passionate Full Stack Developer skilled in creating modern,
              scalable web applications using the MERN stack and Java backend.
            </p>

            <p className="text-slate-300 mt-4 leading-relaxed text-lg">
              I enjoy solving real-world problems through efficient backend logic,
              intuitive UI, and real-time communication technologies like WebRTC.
            </p>

            <ul className="text-slate-300 mt-6 space-y-3 font-medium">
              <li className="flex items-center gap-2"><span className="text-sky-400">✔</span> MERN, Java, REST APIs, WebRTC</li>
              <li className="flex items-center gap-2"><span className="text-sky-400">✔</span> Strong in UI design & responsive development</li>
              <li className="flex items-center gap-2"><span className="text-sky-400">✔</span> Quick learner & problem solver</li>
            </ul>
          </div>

          <div className="flex justify-center relative">
            {/* Image background glow */}
            <div className="absolute inset-0 bg-sky-500 blur-[80px] opacity-20 rounded-full"></div>
            <img
              src="/images/sachin.png"
              alt="Sachin"
              className="relative w-64 h-64 rounded-2xl object-cover border-2 border-sky-400/50 shadow-2xl rotate-3 hover:rotate-0 transition duration-500"
            />
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="py-20 max-w-6xl mx-auto px-6"
        >
          <h3 className="text-3xl font-bold text-sky-400 mb-10 text-center md:text-left">Technical Skills</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Languages", items: "Java (DSA), C, JavaScript" },
              { title: "Frontend", items: "React, HTML5, CSS3, Tailwind, Bootstrap" },
              { title: "Backend", items: "Node.js, Express.js, REST APIs, WebRTC" },
              { title: "Databases", items: "MongoDB, MySQL" },
              { title: "Tools", items: "Git, GitHub, Postman, VS Code" },
              { title: "Deployment", items: "Vercel, Render" },
            ].map((skill) => (
              <div key={skill.title} className="bg-[#1e293b]/50 backdrop-blur-sm p-6 rounded-xl border border-white/5 hover:border-sky-500/50 transition duration-300 shadow-lg">
                <h4 className="text-lg font-semibold text-sky-300 mb-2">{skill.title}</h4>
                <p className="text-slate-300">{skill.items}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="py-20 max-w-6xl mx-auto px-6"
        >
          <h3 className="text-3xl font-bold text-sky-400 mb-10">Featured Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -5 }}
                className="bg-[#1e293b] rounded-xl overflow-hidden border border-white/5 shadow-xl flex flex-col h-full"
              >
                <div className="h-44 overflow-hidden relative group">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-4">
                     <a href={p.live} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-sky-500 text-white rounded text-sm font-bold hover:bg-sky-600">Live Demo</a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-white mb-2">{p.title}</h4>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">{p.description}</p>

                  <ul className="text-gray-400 text-xs space-y-1 mb-4">
                    {p.features?.map((f, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-sky-500">›</span> {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 bg-sky-900/40 text-sky-300 border border-sky-500/20 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <a href={p.live} className="flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm font-medium transition" target="_blank" rel="noopener noreferrer">
                      <span>🔗</span> Live Project
                    </a>
                    <a href={p.repo} className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EXPERIENCE */}
        <motion.section
          id="experience"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="py-20 max-w-6xl mx-auto px-6"
        >
          <h3 className="text-3xl font-bold text-sky-400 mb-10 underline underline-offset-8 decoration-sky-500/30">
            Experience
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Elevate Labs */}
            <div className="bg-[#1e293b]/60 backdrop-blur-sm rounded-2xl border border-white/10 p-6 flex gap-4 shadow-lg hover:border-sky-400/50 transition group">
              <div className="w-14 h-14 rounded-lg bg-white p-1 flex-shrink-0">
                <img
                  src="/images/elevatelabs.png"
                  alt="Elevate Labs"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-sky-300 transition">Web Development Intern</h4>
                <p className="text-slate-400 text-sm mt-0.5 font-medium">Elevate Labs</p>
                <p className="text-sky-400 text-xs mt-1 uppercase tracking-wider">Oct 2025 – Dec 2025</p>
                <ul className="text-slate-300 mt-3 space-y-1 text-sm list-disc list-inside marker:text-sky-500">
                  <li>Built responsive UI components using React & Tailwind.</li>
                  <li>Implemented API integrations and optimized performance.</li>
                </ul>

                <a
                  href="/certificates/elevate-labs.png"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-400 mt-4 inline-flex items-center hover:text-emerald-300 hover:underline"
                >
                  📝 View Certificate
                </a>
              </div>
            </div>

            {/* Infosys */}
            <div className="bg-[#1e293b]/60 backdrop-blur-sm rounded-2xl border border-white/10 p-6 flex gap-4 shadow-lg hover:border-sky-400/50 transition group">
              <div className="w-14 h-14 rounded-lg bg-white p-1 flex-shrink-0">
                <img
                  src="/images/infosys.png"
                  alt="Infosys"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-white group-hover:text-sky-300 transition">Java Full Stack Intern</h4>
                <p className="text-slate-400 text-sm mt-0.5 font-medium">Infosys Springboard</p>
                <p className="text-sky-400 text-xs mt-1 uppercase tracking-wider">Dec 2025 – Present</p>
                <ul className="text-slate-300 mt-3 space-y-1 text-sm list-disc list-inside marker:text-sky-500">
                  <li>Working on backend services using Java & Spring concepts.</li>
                  <li>Building end-to-end features and writing unit tests.</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="py-20 max-w-6xl mx-auto px-6"
        >
          <h3 className="text-3xl font-bold text-sky-400 mb-10 underline underline-offset-8 decoration-sky-500/30">
            Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* B.E */}
            <div className="bg-[#1e293b]/60 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-lg hover:border-sky-400/50 transition">
              <h4 className="text-xl font-bold text-white">B.E. in Computer Science</h4>
              <p className="text-sky-300 font-medium mt-1">Navkis College of Engineering</p>
              
              <div className="flex gap-4 mt-3 text-sm text-slate-400">
                <span>📅 2022 – 2026</span>
                <span>🏆 CGPA: <span className="text-white">8.01</span></span>
              </div>
              
              <p className="text-slate-300 mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
                <span className="text-sky-400 font-semibold">Coursework:</span> Data Structures, DBMS, Computer Networks, Operating Systems, Web Development.
              </p>
            </div>

            {/* PU */}
            <div className="bg-[#1e293b]/60 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-lg hover:border-sky-400/50 transition">
              <h4 className="text-xl font-bold text-white">Pre-University (PCMC)</h4>
              <p className="text-sky-300 font-medium mt-1">Sujala PU College</p>

              <div className="flex gap-4 mt-3 text-sm text-slate-400">
                <span>📅 2020 – 2022</span>
                <span>🏆 Percentage: <span className="text-white">85%</span></span>
              </div>

              <p className="text-slate-300 mt-4 text-sm leading-relaxed border-t border-white/10 pt-4">
                <span className="text-sky-400 font-semibold">Highlights:</span> Strong foundation in Mathematics & Computer Science. Developed early interest in software logic.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section 
          id="contact"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="py-20 max-w-6xl mx-auto px-6"
        >
          <h3 className="text-3xl font-bold text-sky-400 mb-12 text-center">
            Get In <span className="text-sky-200">Touch</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT CONTACT INFO */}
            <div className="bg-[#1e293b]/40 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-lg flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold text-white">Let's Connect</h2>
                <p className="text-slate-400 mt-3 leading-relaxed">
                  I'm currently seeking opportunities as a Full Stack Developer.
                  Whether you have a question or just want to say hi, I'll be happy to connect!
                </p>
              </div>

              <div className="space-y-4 mt-8">
                <div className="p-4 bg-[#0f172a] rounded-xl border border-white/5 flex items-center gap-4 hover:border-sky-500/30 transition">
                  <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Email</p>
                    <a href="mailto:sachin17.ks@gmail.com" className="text-white font-medium hover:text-sky-400">sachin17.ks@gmail.com</a>
                  </div>
                </div>

                <div className="p-4 bg-[#0f172a] rounded-xl border border-white/5 flex items-center gap-4 hover:border-sky-500/30 transition">
                   <div className="w-10 h-10 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-400">
                    <span className="text-xl">📍</span>
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium">Bangalore, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — CONTACT FORM */}
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="bg-[#1e293b] p-8 rounded-2xl shadow-2xl border border-white/10"
            >
              <input 
                type="hidden" 
                name="access_key" 
                value="fcae8162-eb70-446f-9e78-95d88a9e84ce" 
              />

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-slate-400 mb-1 block">Your Name</label>
                  <input
                    className="w-full p-3 bg-[#0f172a] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                    placeholder="John Doe"
                    name="name"
                    required
                  />
                </div>

                <div>
                   <label className="text-sm text-slate-400 mb-1 block">Your Email</label>
                  <input
                    className="w-full p-3 bg-[#0f172a] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition"
                    placeholder="john@example.com"
                    name="email"
                    type="email"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-400 mb-1 block">Message</label>
                  <textarea
                    className="w-full p-3 bg-[#0f172a] border border-slate-700 rounded-lg text-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition resize-none"
                    rows="4"
                    placeholder="Hello Sachin..."
                    name="message"
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold rounded-lg hover:from-sky-600 hover:to-blue-700 transition transform hover:scale-[1.02] shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#0b1120] py-10 text-center border-t border-white/5">
        <h3 className="text-xl font-bold text-white tracking-widest">SACHIN K S</h3>

        <div className="flex justify-center gap-8 mt-6 text-2xl text-slate-400">
          <a href="https://linkedin.com/in/sachin-k-s-754152273" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition"><FaLinkedin /></a>
          <a href="https://github.com/Sachingowda89" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
          <a href="mailto:sachin17.ks@gmail.com" className="hover:text-red-400 transition"><FaEnvelope /></a>
        </div>

        <p className="text-slate-500 mt-8 text-sm">
          © {new Date().getFullYear()} Sachin K S — Built with React & Tailwind
        </p>
      </footer>

    </div>
  );
}