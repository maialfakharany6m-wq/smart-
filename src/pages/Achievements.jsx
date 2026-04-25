import { useRef } from "react";
import Cursor from "../components/Cursor";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Achievements() {

  const accreditationsRef = useRef(null);

  const scroll = (dir) => {
    const el = accreditationsRef.current;
    if (!el) return;

    const amount = el.offsetWidth * 0.85;

    el.scrollBy({
      left: dir === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const accreditations = [
    "/accreditations/pearson.jpg",
    "/accreditations/british-council.jpg",
        "/accreditations/cognia.png",
        "/accreditations/cambridge.png",
    "/accreditations/stem.png",
  ];

  return (
    <div className="bg-[#F9FAFB] min-h-screen">

      <Cursor />
      <Navbar />

      <section className="pt-36 pb-24 px-6 md:px-24 max-w-7xl mx-auto">

        {/* ================= TITLE ================= */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl text-[#0B1B3A] font-[Playfair_Display]">
            Achievements
          </h1>
          <p className="text-gray-500 max-w-xl mt-4">
            Our partnerships and institutions reflect global educational excellence.
          </p>
        </div>

        {/* ================= ACCREDITATIONS ================= */}
        <div className="mb-28">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-10">

            <h2 className="text-sm tracking-[0.35em] text-blue-400">
              ACCREDITATIONS
            </h2>

            <div className="flex gap-3">
              <button
                onClick={() => scroll("prev")}
                className="w-10 h-10 bg-white border rounded-full shadow-sm"
              >
                ←
              </button>

              <button
                onClick={() => scroll("next")}
                className="w-10 h-10 bg-white border rounded-full shadow-sm"
              >
                →
              </button>
            </div>

          </div>

          {/* SLIDER */}
          <div
            ref={accreditationsRef}
            className="flex gap-10 overflow-x-auto scroll-smooth pb-2"
          >

            {accreditations.map((img, i) => (
              <div
                key={i}
                className="min-w-[420px] md:min-w-[500px]
                           h-[340px]
                           bg-white border rounded-3xl shadow-sm
                           flex items-center justify-center
                           transition duration-500 ease-out
                           hover:shadow-xl hover:scale-[1.02]"
              >

                <img
                  src={img}
                  className="h-[200px] md:h-[260px] object-contain
                             transition duration-500 ease-out
                             hover:scale-110"
                />

              </div>
            ))}

          </div>

        </div>

        {/* ================= SCHOOLS ================= */}
        <div>

          <h2 className="text-sm tracking-[0.35em] text-blue-400 mb-12">
            SCHOOLS
          </h2>

          <div className="grid md:grid-cols-2 gap-14">

            {/* SCHOOL 1 */}
            <div className="p-14 bg-white border rounded-3xl shadow-sm
                            transition duration-500 hover:shadow-xl hover:scale-[1.01]">

              <div className="h-[260px] flex items-center justify-center mb-8">
                <img 
                  src="/schools/oakland.jpg"
                  className="h-[330px] object-contain transition duration-500 hover:scale-110"
                />
              </div>

              <h3 className="text-2xl text-[#0B1B3A] font-semibold mb-2">
                Oakland College School
              </h3>

              <p className="text-gray-500">
                A modern educational institution focused on academic excellence and international standards.
              </p>

            </div>

            {/* SCHOOL 2 */}
            <div className="p-14 bg-white border rounded-3xl shadow-sm
                            transition duration-500 hover:shadow-xl hover:scale-[1.01]">

              <div className="h-[260px] flex items-center justify-center mb-8">
                <img
                  src="/schools/west_cliff.jfif" 
                  className="h-[200px] object-contain transition duration-500 hover:scale-110"
                />
              </div>

              <h3 className="text-2xl text-[#0B1B3A] font-semibold mb-2">
                West Cliff School
              </h3>

              <p className="text-gray-500">
                Delivering structured international education systems.
              </p>

            </div>

          </div>

        </div>

      </section>

     
    </div>
  );
}