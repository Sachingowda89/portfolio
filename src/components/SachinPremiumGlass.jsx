import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

/* Projects — Minimal Professional Cards */
const projects = [
  {
    title: "Zerodha (Clone)",
    description:
      "MERN clone of Zerodha with real-time charts, portfolio tracking, and authentication.",
    live: "https://zerodha-iyfl.vercel.app/",
    repo: "https://github.com/Sachingowda89/Zerodha.git",
    image: "/images/zerodha-preview.png",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Zoom App",
    description:
      "Real-time video conferencing app built using WebRTC, Socket.io, and Node.js.",
    live: "https://zoom-app-5.onrender.com",
    repo: "https://github.com/Sachingowda89/Zoom-app.git",
    image: "/images/zoom-preview.png",
    tags: ["WebRTC", "Socket.io", "React"],
  },
  {
    title: "Wanderlust",
    description:
      "Travel listing platform (Airbnb style) with reviews, CRUD, and authentication.",
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

        {/* HERO: No photo, clean text */}
        <section id="home" className="pt-12 pb-20 max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sky-400 text-lg">Hi, my name is</p>

            <h1 className="text-5xl md:text-6xl font-extrabold mt-2 bg-gradient-to-r from-sky-400 to-blue-500 bg-clip-text text-transparent">
              Sachin K S
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold mt-4 text-sky-300">
              I love building & learning new things.
            </h2>

            <p className="mt-6 text-slate-300 leading-relaxed">
              I'm a Full Stack Developer specializing in MERN and Java.
              I build fast, scalable applications and love real-time tech like WebRTC & Socket.io.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="/resume/Sachin_K_S_Resume.pdf"
                download
                className="inline-block px-6 py-3 border border-sky-400 rounded-lg hover:bg-sky-400/20 text-sky-300 transition"
              >
                Take a look on my Resume
              </a>

              <div className="flex items-center gap-3 text-2xl text-slate-300">
                <a href="https://github.com/Sachingowda89" target="_blank" rel="noreferrer" className="hover:text-white"><FaGithub /></a>
                <a href="https://linkedin.com/in/sachin-k-s-754152273" target="_blank" rel="noreferrer" className="hover:text-blue-500"><FaLinkedin /></a>
                <a href="mailto:sachin17.ks@gmail.com" className="hover:text-red-500"><FaEnvelope /></a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-sky-400">About Me</h3>
            <p className="text-slate-300 leading-relaxed">
              I'm a dedicated Full Stack Developer experienced in MERN Stack and Java backend.
            </p>
            <p className="text-slate-300 mt-4 leading-relaxed">
              Passionate about crafting fast apps, exploring new tech,
              and building real-time systems with WebRTC & Socket.io.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/sachin.png"
              alt="Sachin"
              className="w-64 h-64 rounded-2xl object-cover border border-sky-400 shadow-lg"
            />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="py-20 max-w-6xl mx-auto px-6">
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
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-20 max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-sky-400 mb-10">Projects</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p) => (
              <div key={p.title} className="bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition">
                <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />

                <div className="p-6">
                  <h4 className="text-xl font-semibold">{p.title}</h4>
                  <p className="text-gray-400 text-sm mt-2">{p.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1 bg-sky-700/20 text-sky-300 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <a href={p.live} className="text-sky-400 hover:text-sky-300 text-sm" target="_blank" rel="noreferrer">🔗 Live Project</a>
                    <a href={p.repo} className="text-gray-400 hover:text-white text-sm" target="_blank" rel="noreferrer">🖥 GitHub</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-20 max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-sky-400 mb-10 underline underline-offset-4">Experience</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Card 1 */}
            <div className="bg-[#111827] rounded-2xl border border-sky-500/30 p-6 flex gap-4 shadow-xl hover:border-sky-400 transition items-start">
              {/* logo */}
              <img
                src="/images/elevatelabs.png"
                alt="Elevate Labs"
                className="w-14 h-14 rounded-lg object-cover border border-sky-500/40 bg-white"
              />

              <div>
                <h4 className="text-xl font-semibold">Web Development Intern</h4>
                <p className="text-slate-400 mt-1">📍 ELEVATE LABS</p>
                <p className="text-sky-300">Oct 2025 – Nov 2025</p>
                <a href="#" className="text-sm text-emerald-400 mt-3 inline-block hover:text-emerald-300">📝 View Certificate</a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#111827] rounded-2xl border border-sky-500/30 p-6 flex gap-4 shadow-xl hover:border-sky-400 transition items-start">
              {/* logo */}
              <img
                src="/images/infosys.png"
                alt="Infosys"
                className="w-14 h-14 rounded-lg object-cover border border-sky-500/40 bg-white"
              />

              <div>
                <h4 className="text-xl font-semibold">Java Full Stack Developer Intern</h4>
                <p className="text-slate-400 mt-1">📍 Infosys Springboard</p>
                <p className="text-sky-300">Dec 2025 – Present</p>
              </div>
            </div>

          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="py-20 max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-sky-400 mb-10 underline underline-offset-4">Education</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111827] rounded-2xl border border-sky-500/30 p-6 shadow-xl hover:border-sky-400 transition">
              <h4 className="text-xl font-semibold">B.E. in Computer Science Engineering</h4>
              <p className="text-slate-400 text-sm mt-2">🏫 Navkis College of Engineering</p>
              <p className="text-slate-400 text-sm">🎓 Duration: <span className="text-sky-300">2022 – 2026</span></p>
              <p className="text-slate-400 text-sm">📘 CGPA: <span className="text-sky-300">7.81</span></p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20 max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold text-sky-400 mb-6">Get In Touch</h3>

          <form
            action="mailto:sachin17.ks@gmail.com"
            method="post"
            encType="text/plain"
            className="bg-[#1e293b] p-8 rounded-xl shadow max-w-xl mx-auto"
          >
            <input className="w-full p-3 bg-transparent border border-sky-400 rounded-lg text-white mb-4" placeholder="Your Name" name="name" />
            <input className="w-full p-3 bg-transparent border border-sky-400 rounded-lg text-white mb-4" placeholder="Your Email" name="email" />
            <textarea className="w-full p-3 bg-transparent border border-sky-400 rounded-lg text-white" rows="4" placeholder="Message" name="message"></textarea>

            <button type="submit" className="mt-4 px-6 py-3 bg-sky-500 rounded-lg hover:bg-sky-600 transition">
              Submit
            </button>
          </form>


        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-sky-400 to-blue-500 py-10 text-center">
        <h3 className="text-xl font-bold text-white">CONTACT ME</h3>

        <div className="flex justify-center gap-6 mt-6 text-2xl text-white">
          <a href="https://linkedin.com/in/sachin-k-s-754152273" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Sachingowda89" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="mailto:sachin17.ks@gmail.com" target="_blank" rel="noreferrer"><FaEnvelope /></a>
        </div>

        <p className="text-white/80 mt-6">
          © {new Date().getFullYear()} Sachin K S — All Rights Reserved
        </p>
      </footer>
    </div>
  );
}
