import React, { useState } from "react";
import {
  ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Layers3,
  Palette, BriefcaseBusiness, Trophy, GraduationCap, ExternalLink,
  MapPin, Phone, Download
} from "lucide-react";

// Add GitHub project URLs and a resume PDF when you are ready to publish.
const profile = {
  name: "Dharineesh S S",
  role: "B.Tech Information Technology Student",
  institution: "KPR Institute of Engineering and Technology",
  location: "Coimbatore, India",
  email: "dharineesh090607@gmail.com",
  phone: "+91 97918 09967",
  linkedinLabel: "Dharineesh.linkedin",
  linkedinUrl: "https://www.linkedin.com/in/dharineesh-ss-38a760309/",
  githubUrl: "https://github.com/Dharineesh007",
  cgpa: "8.44",
};

const projects = [
  {
    number: "01",
    name: "Code-Nexus IDE",
    category: "Full-stack development",
    description:
      "Built a collaborative, browser-based cloud development platform designed to deliver a high-performance coding experience.",
    contribution:
      "Engineered a full-stack architecture using React, Vite, Node.js, and MongoDB for optimized speed and flexible data management.",
    stack: ["React", "Vite", "Node.js", "MongoDB"],
    link: "https://github.com/Dharineesh007/code-nexus-ide",
  },
  {
    number: "02",
    name: "FarmerDirect Market",
    category: "Web application",
    description:
      "Developed a direct farm-to-consumer agricultural marketplace that removes intermediaries and streamlines crop trading.",
    contribution:
      "Built a responsive frontend using HTML5, CSS3 with a glassmorphic UI, and JavaScript ES6+. Implemented offline data synchronization via Web Storage and instant localized search.",
    stack: ["HTML5", "CSS3", "JavaScript ES6+", "Web Storage"],
    link: "",
  },
];

const skillGroups = [
  {
    title: "Full-stack web development",
    icon: Code2,
    items: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "HTML/CSS", "Node.js", "Express.js"],
  },
  {
    title: "Databases & programming",
    icon: Layers3,
    items: ["MongoDB", "MySQL", "Python", "Java", "C", "C++", "Machine Learning"],
  },
  {
    title: "Design tools",
    icon: Palette,
    items: ["Adobe Photoshop", "Adobe Illustrator", "Canva"],
  },
];

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 leading-7 text-slate-400">{text}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-slate-200">
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute left-[-15rem] top-[42rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.06] blur-[120px]" />
        <div className="grid-overlay absolute inset-0 opacity-30" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-ink/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="flex items-center gap-3 font-semibold tracking-tight text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-sm text-accent">D</span>
            <span>Dharineesh<span className="text-accent">.</span></span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} className="text-sm text-slate-400 transition hover:text-white">{label}</a>
            ))}
            <a href="#contact" className="rounded-full border border-accent/40 px-4 py-2 text-sm text-accent transition hover:bg-accent hover:text-ink">Let's connect <ArrowUpRight size={14} className="ml-1 inline" /></a>
          </div>
          <button className="rounded-lg border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="border-t border-white/10 px-5 py-4 md:hidden">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="block py-3 text-sm text-slate-300">{label}</a>
            ))}
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-28">
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-xs text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Information Technology · 2024–2028
            </div>
            <p className="mb-4 text-sm font-medium tracking-wide text-accent">HELLO, I'M</p>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.06] tracking-[-0.05em] text-white sm:text-7xl">
              {profile.name}<span className="text-accent">.</span>
            </h1>
            <h2 className="mt-6 text-xl font-medium text-slate-300 sm:text-2xl">{profile.role}</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              B.Tech Information Technology student with hands-on experience building full-stack web applications using React, Next.js, Node.js, Express.js, and MongoDB, along with UI/UX design and team leadership experience.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-blue-300">Explore my work <ArrowUpRight className="ml-2 inline" size={16} /></a>
              <a href="#contact" className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-accent/60 hover:text-accent">Contact me</a>
            </div>
            <div className="mt-12 flex flex-wrap gap-6 text-sm text-slate-500">
              <span className="flex items-center gap-2"><Code2 size={16} className="text-accent" /> Full-stack development</span>
              <span className="flex items-center gap-2"><Palette size={16} className="text-accent" /> UI/UX & design</span>
              <span className="flex items-center gap-2"><BriefcaseBusiness size={16} className="text-accent" /> Internship experience</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2rem] bg-blue-500/10 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white/10 bg-panel/90 p-6 shadow-glow sm:p-8">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">Developer profile</span>
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_#69a8ff]" />
              </div>
              <div className="my-10 flex justify-center">
                <div className="relative h-36 w-36 overflow-hidden rounded-full border border-accent/40 bg-gradient-to-br from-blue-500/20 to-cyan-300/5 shadow-glow sm:h-44 sm:w-44">
                  <img
                    src="/profile-photo.jpeg"
                    alt="Dharineesh S S"
                    className="h-full w-full object-cover object-[50%_34%]"
                  />
                </div>
              </div>
              <h3 className="text-center text-2xl font-semibold text-white">{profile.name}</h3>
              <p className="mt-2 text-center text-sm text-slate-400">{profile.role}</p>
              <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm">
                <div className="flex justify-between gap-4"><span className="text-slate-500">Institution</span><span className="text-right text-slate-300">KPRIET</span></div>
                <div className="flex justify-between gap-4"><span className="text-slate-500">CGPA</span><span className="text-right text-slate-300">{profile.cgpa} / 10</span></div>
                <div className="flex justify-between gap-4"><span className="text-slate-500">Location</span><span className="text-right text-slate-300">{profile.location}</span></div>
              </div>
              <div className="mt-7 flex justify-center gap-3">
                {profile.githubUrl && <a aria-label="GitHub" href={profile.githubUrl} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-accent/40 hover:text-accent"><Github size={18} /></a>}
                {profile.linkedinUrl && <a aria-label="LinkedIn" href={profile.linkedinUrl} target="_blank" rel="noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-accent/40 hover:text-accent"><Linkedin size={18} /></a>}
                <a aria-label="Email" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noopener noreferrer" className="rounded-xl border border-white/10 p-3 text-slate-400 transition hover:border-accent/40 hover:text-accent"><Mail size={18} /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section-wrap border-t border-white/[0.06]">
          <SectionHeading eyebrow="Profile" title="About me." text="I am pursuing a B.Tech in Information Technology at KPR Institute of Engineering and Technology. My experience includes full-stack web application development, frontend development, visual design, and student leadership." />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Education", "B.Tech Information Technology", "KPR Institute of Engineering and Technology · 2024–2028"],
              ["Academic performance", "8.44 CGPA", "Current CGPA as stated in my resume"],
              ["Professional interests", "Web development & design", "Full-stack applications, UI/UX design and technology"],
            ].map(([title, value, sub]) => (
              <div key={title} className="surface-card p-6">
                <p className="text-xs uppercase tracking-[0.2em] text-accent">{title}</p>
                <h3 className="mt-5 text-lg font-semibold text-white">{value}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{sub}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section-wrap border-t border-white/[0.06]">
          <SectionHeading eyebrow="Technical skills" title="Technologies I work with." text="Skills listed below are taken from my resume." />
          <div className="grid gap-5 md:grid-cols-3">
            {skillGroups.map(({ title, icon: Icon, items }) => (
              <div key={title} className="surface-card p-6">
                <Icon className="text-accent" size={22} />
                <h3 className="mt-5 font-semibold text-white">{title}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {items.map((item) => <span key={item} className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-300">{item}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-wrap border-t border-white/[0.06]">
          <SectionHeading eyebrow="Selected work" title="Projects I've built." text="Project summaries and technology details are based on the descriptions in my resume." />
          <div className="grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article key={project.number} className="surface-card group p-6 transition hover:-translate-y-1 hover:border-accent/30 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-sm font-medium text-accent">{project.number} / {project.category}</span>
                  <ArrowUpRight size={18} className="text-slate-500 transition group-hover:text-accent" />
                </div>
                <h3 className="mt-7 text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-5 text-sm leading-7 text-slate-400">{project.description}</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">{project.contribution}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tag) => <span key={tag} className="rounded-full bg-accent/[0.08] px-3 py-1.5 text-xs text-blue-200">{tag}</span>)}
                </div>
                {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm text-accent">View project <ExternalLink size={14} /></a>}
              </article>
            ))}
          </div>
          <p className="mt-5 text-xs leading-6 text-slate-500">Project repository and live-demo links can be added when available.</p>
        </section>

        <section id="experience" className="section-wrap border-t border-white/[0.06]">
          <SectionHeading eyebrow="Professional experience" title="Experience & leadership." text="Internship, design and student leadership experience." />
          <div className="relative ml-2 space-y-7 border-l border-white/10 pl-7">
            <div className="relative">
              <span className="absolute -left-[2.05rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-ink" />
              <div className="surface-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">Frontend Developer Intern</h3>
                  <span className="text-xs text-accent">Dec 2025 – Jan 2026</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">SGVL Group of Innovations</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">Developed frontend components using React.js and CSS; integrated plugins to improve UI/UX.</p>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -left-[2.05rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-ink" />
              <div className="surface-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">Design Team Member</h3>
                  <span className="text-xs text-accent">Jan 2026 – Mar 2026</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">Office of Branding</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">Created promotional posters and branding materials for college events using Photoshop, Illustrator, and Canva.</p>
              </div>
            </div>
            <div className="relative">
              <span className="absolute -left-[2.05rem] top-1 h-3 w-3 rounded-full border-2 border-accent bg-ink" />
              <div className="surface-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-white">President, Design Club</h3>
                  <span className="text-xs text-accent">Leadership</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">KPR Institute of Engineering and Technology</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">Lead club activities, coordinate design teams, and organize creative initiatives and events.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="education" className="section-wrap border-t border-white/[0.06]">
          <SectionHeading eyebrow="Academic background" title="Education." />
          <div className="grid gap-5 md:grid-cols-2">
            <div className="surface-card p-7">
              <GraduationCap className="text-accent" size={24} />
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-accent">2024 – 2028</p>
              <h3 className="mt-3 text-xl font-semibold text-white">B.Tech, Information Technology</h3>
              <p className="mt-2 text-sm text-slate-400">KPR Institute of Engineering and Technology</p>
              <p className="mt-4 text-sm text-slate-300">CGPA: 8.44</p>
              <p className="mt-3 text-sm leading-7 text-slate-400">Coursework: Data Structures and Algorithms, Object-Oriented Programming, Database Systems, Computer Networks, Operating Systems.</p>
            </div>
            <div className="surface-card p-7">
              <GraduationCap className="text-accent" size={24} />
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-accent">2022 – 2024</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Higher Secondary Education</h3>
              <p className="mt-2 text-sm text-slate-400">A.R.C Matric Higher Secondary School</p>
              <div className="mt-5 flex gap-8">
                <div><p className="text-2xl font-semibold text-white">89%</p><p className="mt-1 text-xs text-slate-500">Class X</p></div>
                <div><p className="text-2xl font-semibold text-white">95%</p><p className="mt-1 text-xs text-slate-500">Class XII</p></div>
              </div>
            </div>
          </div>
        </section>

        <section id="certifications" className="section-wrap border-t border-white/[0.06]">
          <SectionHeading eyebrow="Credentials" title="Certifications." text="Certifications listed in my resume." />
          <div className="grid gap-4 md:grid-cols-2">
            {[
              ["Microsoft Certified: Azure Administrator Associate", "Microsoft"],
              ["MongoDB Basics for Students", "MongoDB · 2026"],
              ["Learn Java & Practice Java", "CodeChef · 2026"],
            ].map(([name, issuer]) => (
              <div key={name} className="surface-card flex items-center gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent"><Trophy size={19} /></div>
                <div><h3 className="text-sm font-semibold text-white">{name}</h3><p className="mt-1 text-xs text-slate-500">{issuer}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section-wrap border-t border-white/[0.06]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent">Get in touch</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Let's connect.</h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-slate-400">Interested in placement and internship opportunities, full-stack development, and collaborative technology projects.</p>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-ink transition hover:bg-blue-300"><Mail size={16} className="mr-2" /> Email me <ArrowUpRight size={16} className="ml-2" /></a>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent"><Mail size={16} /> {profile.email}</a>
              <a href="https://wa.me/919791809967" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-accent"><Phone size={16} /> {profile.phone}</a>
              <span className="inline-flex items-center gap-2"><MapPin size={16} /> {profile.location}</span>
            </div>
            {profile.linkedinUrl && (
              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-accent"
              >
                <Linkedin size={14} />
                LinkedIn: {profile.linkedinLabel}
              </a>
            )}
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/[0.07] px-5 py-7 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}

export default App;
