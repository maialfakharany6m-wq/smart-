import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ================= NAVBAR ================= */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    "home",
    "about",
    "cases",
    "achievements",
    "leadership",
    "credibility",
    "contact",
  ];

  return (
    <div className="fixed top-0 w-full z-50 bg-[#061B3A] border-b border-white/10">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-10 py-4">

        {/* ================= BRAND ================= */}
        <div className="flex items-center gap-4">

          <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
            <img
              src="/logo.png"
              className="w-full h-full object-contain scale-110"
              alt="logo"
            />
          </div>

          <span className="text-gray-200 text-sm font-medium">
            Smart Smile Way
          </span>

        </div>

        {/* ================= LINKS ================= */}
        <div className="hidden md:flex gap-7 text-sm text-white/70">
          {links.map((l) => (
            <button
              key={l}
              onClick={() =>
                document.getElementById(l)?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-white transition"
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}

/* ================= PAGE ================= */
export default function HomePage() {
  const rootRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.utils.toArray(".story").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
          }
        );
      });

      document.querySelectorAll(".counter").forEach((counter) => {
        const target = +counter.getAttribute("data-target");

        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            snap: { innerText: 1 },
            scrollTrigger: { trigger: counter },
          }
        );
      });

      gsap.to(".floating-logo", {
        y: 40,
        x: 20,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".floating-logo", {
        yPercent: 10,
        scrollTrigger: {
          trigger: "#home",
          scrub: true,
        },
      });

    }, rootRef);

    return () => ctx.revert();
  }, []);

  const leaders = [
    { name: "Eng. Sameer Abdullah", role: "Founder- CEO smart smile way Education Consultant for British and  American Education system", img: "/team/sameer.jpg" },
    { name: "Eng. Ibrahim", role: "Co-Founder smart smile way Education Consultant", img: "/team/ibrahim.jpg" },
    { name: "Dr. Heba Sultan", role: "General Manager", img: "/team/heba.jpg" },
    { name: "Eng. Mai Ashraf", role: "Tech Director", img: "/team/mai.jpg" },
    { name: "Dr. Norhan Khaled", role: "American Education Manager", img: "/team/norhan.jpg" },
    { name: "Mrs. Samar Mansour", role: "British Education Manager", img: "/team/samar.jpg" },
  ];

  return (
    <div ref={rootRef} className="font-[Inter] text-[#0B1B3A]">

      <Navbar />

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-white text-center px-6 story overflow-hidden"
      >

        <img
          src="/logo.png"
          className="floating-logo absolute opacity-[0.08] grayscale brightness-125 contrast-110 saturate-110 w-[750px] md:w-[950px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
          alt="background logo"
        />

        <div className="max-w-4xl relative z-10">

          <p className="uppercase tracking-widest text-gray-500 text-sm">
            Educational Investment & Management
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold mt-4 leading-tight">
            We build, operate & transform educational institutions
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            End-to-end solutions for schools and nurseries including operations,
            international accreditation, infrastructure, and financial systems.
          </p>

        </div>

      </section>

      {/* ================= ABOUT (UPGRADED) ================= */}
      <section id="about" className="py-28 px-10 md:px-24 bg-[#F6F8FC] story">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-semibold mb-14">About Us</h2>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-10 mb-14">

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#1F3B73]">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become a leading force in educational investment and management,
                transforming schools and nurseries into globally recognized,
                high-performance institutions through innovation and international standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-[#1F3B73]">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                We design, develop, and operate international schools by integrating academic excellence, 
                institutional governance, and financial efficiency, 
                delivering scalable education models that meet global accreditation standards and workforce demands.
              </p>
            </div>

          </div>

          {/* Services */}
          <h3 className="text-2xl font-semibold mb-8">What We Do</h3>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              "Establishing and operating international schools.",
              "International accreditations (Cambridge, Edexcel, Oxford, Cognia).",
              "British, American & IB education systems.",
              "Licensing under Egyptian Educational Buildings Authority standards.",
              "Educational strategy and organizational structure development.",
              "Teacher training and international curriculum preparation with job placement support.",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition"
              >
                <p className="text-gray-700">{item}</p>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ================= CASE STUDIES ================= */}
      <section id="cases" className="py-28 px-10 md:px-24 bg-white story">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12">Case Studies</h2>

          <div className="space-y-12">
            <div className="border-b pb-8">
              <h3 className="text-2xl font-semibold">School Operational Turnaround</h3>
              <p className="text-gray-600 mt-4">
                Restructured financial and academic systems leading to +35% efficiency.
              </p>
            </div>

            <div className="border-b pb-8">
              <h3 className="text-2xl font-semibold">Nursery Expansion System</h3>
              <p className="text-gray-600 mt-4">
                Built scalable model for multi-branch nursery operations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" className="py-28 px-10 md:px-24 bg-[#F6F8FC] story">
        <div className="grid md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          <div><p className="text-4xl font-semibold counter" data-target="120">0</p><p>Schools</p></div>
          <div><p className="text-4xl font-semibold counter" data-target="45">0</p><p>Nurseries</p></div>
          <div><p className="text-4xl font-semibold counter" data-target="8">0</p><p>Countries</p></div>
          <div><p className="text-4xl font-semibold counter" data-target="25">0</p><p>Accreditations</p></div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section id="leadership" className="py-28 px-10 md:px-24 bg-white story">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12">Leadership</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {leaders.map((p, i) => (
              <div key={i} className="text-center">
                <img src={p.img} className="w-24 h-24 mx-auto rounded-full mb-4 grayscale" />
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-gray-500 text-sm">{p.role}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= CREDIBILITY ================= */}
      <section id="credibility" className="py-28 px-10 md:px-24 bg-white story">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-10">Trusted by institutions</h2>

          <div className="grid md:grid-cols-4 gap-6 text-gray-400">
            <div>Ministry of Education</div>
            <div>Accreditation Bodies</div>
            <div>Private Schools</div>
            <div>Education Councils</div>
          </div>

        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="py-28 px-10 md:px-24 bg-[#0B1B3A] text-white story">
        <div className="max-w-xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>

          <input className="w-full p-3 mb-3 text-black" placeholder="Name" />
          <input className="w-full p-3 mb-3 text-black" placeholder="Email" />
          <textarea className="w-full p-3 mb-3 text-black" rows="4" placeholder="Message" />

          <button className="w-full bg-white text-[#0B1B3A] py-3 font-semibold">
            Send Message
          </button>

        </div>
      </section>

    </div>
  );
}