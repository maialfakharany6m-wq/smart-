import { useRef } from "react";
import { motion } from "framer-motion";
import Section from "../components/Section";

/* ================= ANIMATION SYSTEM ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } }
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

/* ================= HERO ================= */
function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={fadeIn}
      className="min-h-screen flex items-center justify-center bg-white pt-24 relative overflow-hidden"
    >

      {/* background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-100/40 blur-3xl rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-100/30 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center"
        >
          <motion.div
            className="absolute w-[420px] h-[420px] bg-blue-100/40 blur-3xl rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <motion.img
            src="/public/logo.png"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="relative w-[420px] md:w-[500px] object-contain z-10"
            style={{
              filter: "drop-shadow(0 25px 80px rgba(30,58,138,0.35))"
            }}
          />
        </motion.div>

        {/* TEXT */}
        <motion.div variants={stagger} initial="hidden" animate="show">

          <motion.p variants={fadeUp} className="text-blue-400 tracking-[0.35em] text-xs mb-6">
            EDUCATIONAL INVESTMENT GROUP
          </motion.p>

          <motion.h1 variants={fadeUp} className="text-[#0B1B3A] text-5xl md:text-6xl font-[Playfair_Display] leading-tight">
            Smart Smile Way
            <br />
            <span className="text-blue-500 text-3xl md:text-4xl">
              for A Brighter Future
            </span>
          </motion.h1>

          <motion.div variants={fadeUp} className="w-28 h-[2px] bg-blue-200 my-10" />

          <motion.p variants={fadeUp} className="text-blue-500/70 max-w-md leading-relaxed text-lg">
            We build, operate & transform educational institutions into global systems.
          </motion.p>

        </motion.div>

      </div>
    </motion.section>
  );
}

/* ================= EXECUTIVE ================= */
function ExecutiveSlider() {
  const leaders = [
    { name: "Eng. Sameer Abdullah", role: "Founder- CEO Smart Smile Way Education Consultant for British and  American Education system", img: "/exec1.jpeg" },
    { name: "Mr. Ibrahim Elbiblany", role: "Co-Founder Smart Smile Way ", img: "/exec2.jpg" },
    { name: "Dr. Heba Sultan", role: "General Manager", img: "/exec3.png" },
    { name: "Eng. Mai Ashraf", role: "Tech Director", img: "/exec4.jpg" },
    { name: "Dr. Norhan Khaled", role: "American Education Manager", img: "/exec5.png" },
    { name: "Mrs. Samar Mansour", role: "British Education Manager", img: "/exec6.png" },
  ];

  const ref = useRef(null);

  const scroll = (dir) => {
    const el = ref.current;
    const amount = el.offsetWidth * 0.75;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <Section title="Executive Team" subtitle="PEOPLE · LEADERSHIP">

      <div className="relative">

        <button
          onClick={() => scroll("prev")}
          className="absolute left-2 md:left-[-20px] top-1/2 -translate-y-1/2
                     w-14 h-14 bg-white/80 backdrop-blur-xl shadow-xl rounded-full
                     flex items-center justify-center hover:scale-110 transition z-20"
        >←</button>

        <button
          onClick={() => scroll("next")}
          className="absolute right-2 md:right-[-20px] top-1/2 -translate-y-1/2
                     w-14 h-14 bg-white/80 backdrop-blur-xl shadow-xl rounded-full
                     flex items-center justify-center hover:scale-110 transition z-20"
        >→</button>

        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex gap-8 overflow-x-auto scroll-smooth px-6 md:px-10 snap-x snap-mandatory"
        >

          {leaders.map((l, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.03, y: -10 }}
              className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[32%]
                         bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden
                         border border-gray-100 shadow-lg"
            >

              <div className="h-[360px] overflow-hidden">
                <img
                  src={l.img}
                  className="w-full h-full object-cover hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-[#0B1B3A] text-lg font-semibold">
                  {l.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {l.role}
                </p>
              </div>

            </motion.div>
          ))}

        </motion.div>

      </div>

    </Section>
  );
}

/* ================= CONTACT ================= */
function ContactSection() {
  return (
    <Section title="Contact Us" subtitle="CONNECT">

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={stagger}
        className="grid md:grid-cols-2 gap-10 items-center"
      >

        <motion.div variants={fadeUp}>
          <h3 className="text-3xl font-semibold text-[#0B1B3A] mb-4">
            Let’s Build Something Great Together
          </h3>

          <p className="text-gray-600 leading-relaxed mb-6">
            Whether you are looking to establish a new institution or transform an existing one,
            our team is ready to support you with expertise and global standards.
          </p>

          <div className="space-y-2 text-gray-600">
            <p>📧 info@smartsmileway.com</p>
            <p>📍 Cairo, Egypt</p>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.01 }}
          className="p-8 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-gray-100"
        >

          <input className="w-full mb-4 p-3 rounded-xl border" placeholder="Your Name" />
          <input className="w-full mb-4 p-3 rounded-xl border" placeholder="Email Address" />
          <textarea className="w-full mb-4 p-3 rounded-xl border" rows={4} placeholder="Your Message" />

          <button className="w-full py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Send Message
          </button>

        </motion.div>

      </motion.div>

    </Section>
  );
}

/* ================= HOME ================= */
export default function Home() {
  return (
    <div className="overflow-x-hidden bg-white relative">

      {/* background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-blue-100/30 blur-3xl rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-indigo-100/20 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10">

        <Hero />

        <Section title="About Us" subtitle="VISION · MISSION">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-10"
          >

            <motion.div variants={fadeUp} className="p-10 bg-blue-50 rounded-3xl border hover:shadow-lg transition">
              <h3 className="text-blue-500 mb-4">VISION</h3>
              <p className="text-[#0B1B3A]/80 leading-relaxed">
                To become a leading force in educational investment and management,
                transforming schools and nurseries into globally recognized institutions.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="p-10 bg-[#0B1B3A] text-white rounded-3xl">
              <h3 className="text-blue-300 mb-4">MISSION</h3>
              <p className="text-white/80 leading-relaxed">
                We design, develop, and operate international schools with global standards
                and scalable systems.
              </p>
            </motion.div>

          </motion.div>
        </Section>

        <Section title="Our Services" subtitle="SYSTEMS · STRUCTURE" dark>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Establishing and operating international schools",
              "Cambridge, Edexcel, Oxford, Cognia accreditation",
              "British, American & IB systems",
              "Licensing under Egyptian Education Authority",
              "Educational strategy & structure development",
              "Teacher training & curriculum preparation",
              "Workforce development & job placement",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6, scale: 1.02 }}
                className="p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </Section>

        <ExecutiveSlider />

        <Section title="Achievements" subtitle="IMPACT · SCALE">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 text-center gap-12"
          >

            {[
              ["4", "Schools"],
              ["10", "Nurseries"],
              ["15", "Accreditations"],
            ].map(([num, label], i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.1 }}>
                <h3 className="text-5xl text-blue-500 font-light">{num}</h3>
                <p className="text-gray-500 mt-2">{label}</p>
              </motion.div>
            ))}

          </motion.div>
        </Section>

        <ContactSection />

      </div>
    </div>
  );
}
