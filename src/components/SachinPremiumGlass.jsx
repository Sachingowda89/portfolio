import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

/* Projects — Minimal Professional Cards */
const projects = [
  {
    title: "Zerodha (Clone)",
    description:
      "MERN clone of Zerodha with real-time charts, portfolio tracking, and authentication.",
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
    description:
      "Real-time video conferencing app built using WebRTC, Socket.io, and Node.js.",
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
    description:
      "Travel listing platform (Airbnb style) with reviews, CRUD, and authentication.",
    features: [
      "Full CRUD property listing",
      "User authentication",
      "Review & rating system",
    ],
    live: "https://wonderlust-project-5gcq.onrender.com/",
    repo: "https://github.com/Sachingowda89/wanderlust-project.git",
    image: "/images/wanderlust-preview.png",
    tags: ["Express", "MongoDB", "EJS"],
  },
];

export default function SachinPremiumGlass() {
  return (
    <div className="bg-[#0f172a] text-white min-h-screen">

      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-[#0f172a]/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
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

          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#home" className="hover:text-sky-400">Home</a>
            <a href="#about" className="hover:text-sky-400">About</a>
            <a href="#skills" className="hover:text-sky-400">Skills</a>
            <a href="#projects" className="hover:text-sky-400">Projects</a>
            <a href="#experience" className="hover:text-sky-400">Experience</a>
            <a href="#education" className="hover:text-sky-400">Education</a>
            <a href="#contact" className="hover:text-sky-400">Contact</a>

            <a
              href="/resume/Sachin_K_S_Resume.pdf"
              download
              className="px-4 py-1 border border-sky-400 rounded-lg hover:bg-sky-400/20 transition"
            >
              Resume ⬇
            </a>
          </nav>
        </div>
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

            {/* Professional Hero Intro */}
            <p className="text-sky-400 text-lg tracking-wide">
              Hi, I'm <span className="font-semibold text-sky-300">Sachin K S</span>
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-2 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Full Stack Developer
            </h1>

            <p className="text-sky-300 mt-3 text-xl">
              MERN • Java • Real-Time Applications
            </p>

            <p className="mt-6 text-slate-300 leading-relaxed">
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
                className="px-6 py-3 border border-sky-400 rounded-lg hover:bg-sky-400/20 text-sky-300 transition"
              >
                Download Resume
              </a>

              <a
                href="#projects"
                className="px-6 py-3 bg-sky-500 rounded-lg hover:bg-sky-600 transition"
              >
                View Projects
              </a>

              <div className="flex items-center gap-3 text-2xl text-slate-300">
                <a href="https://github.com/Sachingowda89" target="_blank" className="hover:text-white"><FaGithub /></a>
                <a href="https://linkedin.com/in/sachin-k-s-754152273" target="_blank" className="hover:text-blue-500"><FaLinkedin /></a>
                <a href="mailto:sachin17.ks@gmail.com" className="hover:text-red-500"><FaEnvelope /></a>
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
          className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4 text-sky-400">About Me</h3>

            <p className="text-slate-300 leading-relaxed">
              I'm a passionate Full Stack Developer skilled in creating modern,
              scalable web applications using the MERN stack and Java backend.
            </p>

            <p className="text-slate-300 mt-4 leading-relaxed">
              I enjoy solving real-world problems through efficient backend logic,
              intuitive UI, and real-time communication technologies like WebRTC.
            </p>

            <ul className="text-slate-300 mt-4 space-y-2">
              <li>✔ MERN, Java, REST APIs, WebRTC</li>
              <li>✔ Strong in UI design & responsive development</li>
              <li>✔ Quick learner & problem solver</li>
            </ul>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/sachin.png"
              alt="Sachin"
              className="w-64 h-64 rounded-2xl object-cover border border-sky-400 shadow-lg"
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
          <h3 className="text-3xl font-bold text-sky-400 mb-10">Skills</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Languages", items: "Java (DSA), C, JavaScript" },
              { title: "Frontend", items: "React, HTML5, CSS3, Tailwind, Bootstrap" },
              { title: "Backend", items: "Node.js, Express.js, REST APIs, WebRTC" },
              { title: "Databases", items: "MongoDB, MySQL" },
              { title: "Tools", items: "Git, GitHub, Postman" },
              { title: "Deployment", items: "Vercel, Render" },
            ].map((skill) => (
              <div key={skill.title} className="bg-[#1e293b] p-6 rounded-xl shadow">
                <h4 className="text-lg font-semibold text-sky-300">{skill.title}</h4>
                <p className="text-slate-300 mt-2">{skill.items}</p>
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
          <h3 className="text-3xl font-bold text-sky-400 mb-10">Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ scale: 1.03 }}
                className="bg-[#111827] rounded-xl overflow-hidden shadow-lg transition"
              >
                <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />

                <div className="p-6">
                  <h4 className="text-xl font-semibold">{p.title}</h4>
                  <p className="text-gray-400 text-sm mt-2">{p.description}</p>

                  {/* Feature bullets */}
                  <ul className="text-gray-400 text-sm mt-2 space-y-1">
                    {p.features?.map((f, i) => (
                      <li key={i}>• {f}</li>
                    ))}
                  </ul>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 bg-sky-700/20 text-sky-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <a href={p.live} className="text-sky-400 hover:text-sky-300 text-sm" target="_blank">🔗 Live Project</a>
                    <a href={p.repo} className="text-gray-400 hover:text-white text-sm" target="_blank">🖥 GitHub</a>
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
          <h3 className="text-3xl font-bold text-sky-400 mb-10 underline underline-offset-4">
            Experience
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Elevate Labs */}
            <div className="bg-[#111827] rounded-2xl border border-sky-500/30 p-6 flex gap-4 shadow-xl hover:border-sky-400 transition">
              <img
                src="/images/elevatelabs.png"
                alt="Elevate Labs"
                className="w-14 h-14 rounded-lg object-cover border border-sky-500/40 bg-white"
              />
              <div>
                <h4 className="text-xl font-semibold">Web Development Intern</h4>
                <p className="text-slate-400 mt-1">📍 ELEVATE LABS</p>
                <p className="text-sky-300">Oct 2025 – Dec 2025</p>
                <ul className="text-slate-300 mt-3 space-y-1 text-sm">
                  <li>• Built responsive UI components using React & Tailwind.</li>
                  <li>• Implemented API integrations and optimized performance.</li>
                </ul>

                <a
                  href="/certificates/elevate-labs.png"
                  target="_blank"
                  className="text-sm text-emerald-400 mt-3 inline-block hover:text-emerald-300"
                >
                  📝 View Certificate
                </a>
              </div>
            </div>

            {/* Infosys */}
            <div className="bg-[#111827] rounded-2xl border border-sky-500/30 p-6 flex gap-4 shadow-xl hover:border-sky-400 transition">
              <img
                src="/images/infosys.png"
                alt="Infosys"
                className="w-14 h-14 rounded-lg object-cover border border-sky-500/40 bg-white"
              />
              <div>
                <h4 className="text-xl font-semibold">Java Full Stack Developer Intern</h4>
                <p className="text-slate-400 mt-1">📍 Infosys Springboard</p>
                <p className="text-sky-300">Dec 2025 – Present</p>
                <ul className="text-slate-300 mt-3 space-y-1 text-sm">
                  <li>• Working on backend services using Java & Spring concepts.</li>
                  <li>• Building end-to-end features and writing unit tests.</li>
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
          <h3 className="text-3xl font-bold text-sky-400 mb-10 underline underline-offset-4">
            Education
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* B.E */}
            <div className="bg-[#111827] rounded-2xl border border-sky-500/30 p-6 shadow-xl hover:border-sky-400 transition">
              <h4 className="text-xl font-semibold">B.E. in Computer Science Engineering</h4>
              <p className="text-slate-400 text-sm mt-2">🏫 Navkis College of Engineering</p>
              <p className="text-slate-400 text-sm">🎓 Duration: <span className="text-sky-300">2022 – 2026</span></p>
              <p className="text-slate-400 text-sm">📘 CGPA: <span className="text-sky-300">8.01</span></p>
              <p className="text-slate-300 mt-3 text-sm">
                Relevant coursework: Data Structures, DBMS, Computer Networks, Operating Systems.
              </p>
            </div>

            {/* PU */}
            <div className="bg-[#111827] rounded-2xl border border-sky-500/30 p-6 shadow-xl hover:border-sky-400 transition">
              <h4 className="text-xl font-semibold">Pre-University Education</h4>
              <p className="text-slate-400 text-sm mt-2">🏫 Sujala PU College</p>
              <p className="text-slate-400 text-sm">📅 June 2020 – July 2022</p>
              <p className="text-slate-400 text-sm">🎯 Grade: <span className="text-sky-300">85%</span></p>

              <p className="text-slate-300 mt-4 text-sm font-medium">Highlights:</p>
              <ul className="text-slate-300 text-sm mt-2 space-y-1">
                <li>• Strong foundation in Mathematics & Computer Science</li>
                <li>• Early interest in programming & software development</li>
              </ul>
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
    Get In <span className="text-sky-300">Touch</span>
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* LEFT CONTACT INFO */}
    <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/10 shadow-lg">
      <h2 className="text-3xl font-semibold text-sky-300">Let's Connect</h2>

      <p className="text-slate-400 mt-3 leading-relaxed">
        I'm currently seeking opportunities as a Full Stack Developer.
        Whether you have a question or just want to say hi, I'll be happy to connect!
      </p>

      {/* Email Box */}
      <div className="mt-6 p-4 bg-[#1e293b] rounded-xl border border-white/10 flex items-center gap-3">
        <span className="text-sky-400 text-2xl">📧</span>
        <div>
          <p className="text-slate-400 text-sm">Email</p>
          <p className="text-white font-medium">sachin17.ks@gmail.com</p>
        </div>
      </div>

      {/* Location Box */}
      <div className="mt-4 p-4 bg-[#1e293b] rounded-xl border border-white/10 flex items-center gap-3">
        <span className="text-sky-400 text-2xl">📍</span>
        <div>
          <p className="text-slate-400 text-sm">Location</p>
          <p className="text-white font-medium">Bangalore, India</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5 mt-8 text-3xl">
        <a 
          href="https://github.com/Sachingowda89" 
          target="_blank" 
          className="hover:text-white text-slate-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/sachin-k-s-754152273" 
          target="_blank"
          className="hover:text-blue-400 text-slate-300"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>

    {/* RIGHT SIDE — CONTACT FORM */}
    <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="bg-[#1e293b] p-8 rounded-2xl shadow-xl border border-white/10"
    >
      <input 
        type="hidden" 
        name="access_key" 
        value="fcae8162-eb70-446f-9e78-95d88a9e84ce" 
      />

      <input
        className="w-full p-3 bg-transparent border border-sky-400 rounded-lg text-white mb-4"
        placeholder="Your Name"
        name="name"
        required
      />

      <input
        className="w-full p-3 bg-transparent border border-sky-400 rounded-lg text-white mb-4"
        placeholder="Your Email"
        name="email"
        type="email"
        required
      />

      <input
        className="w-full p-3 bg-transparent border border-sky-400 rounded-lg text-white mb-4"
        placeholder="Subject"
        name="subject"
      />

      <textarea
        className="w-full p-3 bg-transparent border border-sky-400 rounded-lg text-white"
        rows="4"
        placeholder="Message"
        name="message"
        required
      ></textarea>

      <button
        type="submit"
        className="mt-4 w-full px-6 py-3 bg-sky-500 rounded-lg hover:bg-sky-600 transition"
      >
        Send Message
      </button>
    </form>
  </div>
</motion.section>


      </main>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-sky-400 to-blue-500 py-10 text-center">
        <h3 className="text-xl font-bold text-white">CONTACT ME</h3>

        <div className="flex justify-center gap-6 mt-6 text-2xl text-white">
          <a href="https://linkedin.com/in/sachin-k-s-754152273" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/Sachingowda89" target="_blank"><FaGithub /></a>
          <a href="mailto:sachin17.ks@gmail.com" target="_blank"><FaEnvelope /></a>
        </div>

        <p className="text-white/80 mt-6">
          © {new Date().getFullYear()} Sachin K S — All Rights Reserved
        </p>
      </footer>

    </div>
  );
}
