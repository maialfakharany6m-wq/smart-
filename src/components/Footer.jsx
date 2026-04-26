export default function Footer() {
  return (
    <footer className="bg-[#06122B] text-white pt-20 pb-10 px-6 relative overflow-hidden">

      {/* soft glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-14 relative z-10">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <img
  src="/logo_footer.png"
  className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover shadow-lg hover:scale-105 transition duration-300"
/>

            <div className="text-xs tracking-[0.3em] text-white/70">
              SMART SMILE WAY
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed">
            Educational Investment Group building future-ready institutions
            through innovation, governance, and international standards.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h3 className="mb-6 tracking-[0.2em] text-sm text-white">
            NAVIGATION
          </h3>

          <div className="space-y-3 text-white/60 text-sm">
            {["home", "About",  "Achievements", "leadership", "contact"].map((item) => (
              <p
                key={item}
                className="hover:text-white hover:translate-x-1 transition duration-300 cursor-pointer"
              >
                {item.toUpperCase()}
              </p>
            ))}
          </div>
        </div>

        {/* CONNECT + SVG ICONS */}
        <div>
          <h3 className="mb-6 tracking-[0.2em] text-sm text-white">
            CONNECT
          </h3>

          <p className="text-white/60 text-sm mb-6">
            Follow us on our official platforms
          </p>

          <div className="flex gap-5">

            {/* LinkedIn */}
<a
  href="https://linkedin.com/company/smart-smile-way"
  target="_blank"
  rel="noopener noreferrer"
  className="group"
>
  <svg
    className="w-6 h-6 text-white/70 group-hover:text-blue-400 group-hover:scale-110 transition"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7 19H4V9h3v10zM5.5 7.5C4.67 7.5 4 6.83 4 6s.67-1.5 1.5-1.5S7 5.17 7 6s-.67 1.5-1.5 1.5zM20 19h-3v-5.5c0-1.38-.02-3.16-1.93-3.16-1.93 0-2.23 1.51-2.23 3.06V19h-3V9h2.88v1.37h.04c.4-.75 1.37-1.54 2.83-1.54 3.03 0 3.59 1.99 3.59 4.58V19z"/>
  </svg>
</a>

{/* Instagram */}
<a
  href="https://www.instagram.com/smartsmile.way/"
  target="_blank"
  rel="noopener noreferrer"
  className="group"
>
  <svg
    className="w-6 h-6 text-white/70 group-hover:text-pink-400 group-hover:scale-110 transition"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 3a5 5 0 110 10 5 5 0 010-10zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
  </svg>
</a>

            {/* Facebook */}
            <a href="https://www.facebook.com/profile.php?id=61560986729345" target="_blank" className="group">
              <svg className="w-6 h-6 text-white/70 group-hover:text-blue-500 group-hover:scale-110 transition"
                fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.7 3.6-3.7 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.7-1.6 1.5V12H17l-.4 3h-2.6v7A10 10 0 0022 12z"/>
              </svg>
            </a>

            {/* WhatsApp */}
            <a href="https://wa.me/201234567890" target="_blank" className="group">
              <svg className="w-6 h-6 text-white/70 group-hover:text-green-400 group-hover:scale-110 transition"
                fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.5 3.5A11.8 11.8 0 0012 0C5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.7 5.9L0 24l6.3-1.6A12 12 0 0012 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 22a10 10 0 01-5.1-1.4l-.4-.2-3.7.9.9-3.6-.3-.4A10 10 0 1122 12c0 5.5-4.5 10-10 10zm5.5-7.5c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 .9s-.2 0-.4-.1c-.2-.1-.9-.3-1.7-1-.6-.5-1-1.2-1.1-1.4-.1-.2 0-.3.1-.4l.3-.3c.1-.1.2-.2.3-.4.1-.1 0-.3 0-.4 0-.1-.7-1.7-1-2.3-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2s.8 2.3.9 2.5c.1.2 1.7 2.6 4.1 3.6.6.3 1.1.5 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.3.2-.6.2-1.1.1-1.2z"/>
              </svg>
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 mt-14 pt-6 text-center text-white/40 text-xs relative z-10">
        © 2026 Smart Smile Way. All Rights Reserved.
      </div>

    </footer>
  );
}
