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

  const links = ["home", "about", "cases", "achievements", "leadership", "credibility", "contact"];

  return (
    <div className={`fixed top-0 w-full z-50 transition ${
      scrolled ? "bg-white border-b border-gray-100" : "bg-transparent"
    }`}>

      <div className="max-w-6xl mx-auto flex justify-between items-center px-10 py-5">

        {/* LOGO */}
        <div className="flex items-center gap-3 font-semibold text-[#0B1B3A]">
          <div className="bg-black p-1 rounded">
            <img src="/logo.png" className="w-20 h-10" />
          </div>
          Smart Smile Way
        </div>

        {/* LINKS */}
        <div className="hidden md:flex gap-7 text-sm text-gray-600">
          {links.map((l) => (
            <button
              key={l}
              onClick={() =>
                document.getElementById(l)?.scrollIntoView({ behavior: "smooth" })
              }
              className="hover:text-[#1F3B73] transition"
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

    }, rootRef);

    return () => ctx.revert();
  }, []);

  const leaders = [
    { name: "Eng. Sameer Abdullah", role: "CEO", img: "/team/sameer.jpg" },
    { name: "Eng. Ibrahim", role: "Co-Founder", img: "/team/ibrahim.jpg" },
    { name: "Dr. Heba Sultan", role: "General Manager", img: "/team/heba.jpg" },
    { name: "Eng. Mai Ashraf", role: "Tech Director", img: "/team/mai.jpg" },
    { name: "Dr. Norhan Khaled", role: "American Manager", img: "/team/norhan.jpg" },
    { name: "Mrs. Samar Mansour", role: "British Manager", img: "/team/samar.jpg" },
  ];

  return (
    <div ref={rootRef} className="font-[Inter] text-[#0B1B3A]">

      <Navbar />

      {/* ================= HERO ================= */}
      <section id="home" className="h-screen flex items-center justify-center bg-white text-center px-6 story">

        <div className="max-w-4xl">

          <p className="uppercase tracking-widest text-gray-500 text-sm">
            Educational Management & Institutional Services
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold mt-4 leading-tight">
            We operate and transform educational institutions at scale
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            End-to-end management for schools and nurseries including operations,
            accreditation, infrastructure, and financial systems.
          </p>

        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="py-28 px-10 md:px-24 bg-[#F6F8FC] story">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-semibold mb-12">About Us</h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#1F3B73]">Vision</h3>
              <p className="text-gray-600">
                To become a leading educational management group transforming institutions into accredited systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-[#1F3B73]">Mission</h3>
              <p className="text-gray-600">
                We operate and manage schools and nurseries through structured financial, academic, and operational systems.
              </p>
            </div>

          </div>

          <div className="mt-10 border-t pt-8">

            <h3 className="font-semibold mb-4 text-[#1F3B73]">What We Do</h3>

            <div className="grid md:grid-cols-3 gap-3 text-gray-600">
              <div>School Operations</div>
              <div>Accreditation Systems</div>
              <div>Financial Structuring</div>
              <div>Nursery Development</div>
              <div>Infrastructure Planning</div>
              <div>Educational Consulting</div>
            </div>

          </div>

        </div>

      </section>

      {/* ================= CASE STUDIES ================= */}
      <section id="cases" className="py-28 px-10 md:px-24 bg-white story">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-semibold mb-12">Achievements</h2>

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

          <div>
            <p className="text-4xl font-semibold counter" data-target="120">0</p>
            <p>Schools</p>
          </div>

          <div>
            <p className="text-4xl font-semibold counter" data-target="45">0</p>
            <p>Nurseries</p>
          </div>

          <div>
            <p className="text-4xl font-semibold counter" data-target="8">0</p>
            <p>Countries</p>
          </div>

          <div>
            <p className="text-4xl font-semibold counter" data-target="25">0</p>
            <p>Accreditations</p>
          </div>

        </div>

      </section>

      {/* ================= LEADERSHIP (RESTORED) ================= */}
      <section id="leadership" className="py-28 px-10 md:px-24 bg-white story">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-semibold mb-12">Leadership</h2>

          <div className="grid md:grid-cols-3 gap-10">

            {leaders.map((p, i) => (
              <div key={i} className="text-center">

                <img src={p.img} className="w-20 h-20 mx-auto rounded-full mb-4 grayscale" />

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