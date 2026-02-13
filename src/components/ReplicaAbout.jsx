import { motion as Motion } from "framer-motion";

function ReplicaAbout() {
  const reveal = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* TOP IMAGE */}
      {/* TOP IMAGE */}
      <div
        className="h-[300px] w-full bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1600&q=80')",
        }}
      />

      {/* MOBILE BLUE CARD */}
      <div className="block lg:hidden mt-6 px-6">
        <div className="bg-blue-700 text-white rounded-xl p-6 space-y-2">
          <h3 className="text-2xl font-semibold text-right">2015</h3>
          <p className="text-sm leading-relaxed text-right">
            Canada Pension Plan Investment Board (CPPIB) acquires GE’s sponsor
            finance business, inclusive of GCUE, from GCUE Capital, in a
            transaction valued at $20B.
          </p>
        </div>
      </div>

      {/* MOBILE DIVIDER */}
      <div className="flex lg:hidden items-center justify-center my-10">
        <span className="h-px w-16 bg-blue-300" />
        <span className="mx-3 h-3 w-3 rounded-full bg-blue-600" />
        <span className="h-px w-16 bg-blue-300" />
      </div>

      {/* DESKTOP BLUE TRIANGLE */}
      <div
        className="
    hidden lg:flex
    absolute left-16 top-[120px]
    h-[370px] w-[600px]
    bg-blue-700 text-white
    items-center
  "
        style={{
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
        }}
      >
        <div className="w-full max-w-xs ml-10 space-y-4">
          <h3 className="text-4xl font-semibold">2015</h3>

          <p className="text-sm leading-relaxed">
            Canada Pension Plan Investment Board (CPPIB) acquires GCUE’s sponsor
            finance business, inclusive of GCU Enterprise, from GCU Capital, in
            a transaction valued at $20B.
          </p>
        </div>
      </div>

      {/* CONTENT AREA */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-10 pb-10">
        <div className="grid grid-cols-12 gap-8">
          {/* EMPTY LEFT (DESKTOP) */}
          <div className="hidden lg:block lg:col-span-7" />

          {/* DESKTOP CONNECTOR */}
          <div
            className="hidden lg:block absolute"
            style={{
              left: "calc(45% + 2rem)",
              top: "28px",
            }}
          >
            <div className="relative w-px h-60 bg-blue-500">
              <div className="absolute top-24 left-0 h-px w-28 bg-blue-600" />
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="col-span-12 lg:col-span-4">
            <h3 className="text-4xl font-semibold text-blue-700 mb-4">2016</h3>
            <p className="text-gray-700 leading-relaxed">
              Northleaf Capital Partners acquires a 16% stake in GCU Enterprise
              from the Canada Pension Plan Investment Board (CPPIB), cementing a
              strategic relationship for GCUs’ Asset Management initiative.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto font-sans">
        {/* HEADER */}
        <div className="relative">
          <div
            className="h-[240px] sm:h-[280px] md:h-[300px] lg:h-[320px] w-full bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=80')",
            }}
          />

          {/* BLUE TRIANGLE */}
          <div
            className="
        absolute
        right-0 sm:right-4 md:right-6 xl:right-12
        top-[40px] sm:top-[50px] md:top-[60px]
        h-[320px] sm:h-[360px] md:h-[400px] xl:h-[500px]
        w-[75%] sm:w-[68%] md:w-[64%] xl:w-[58%]
        bg-blue-700 shadow-2xl
      "
            style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
          >
            <div className="h-full flex items-center">
              <div className="pl-12 sm:pl-16 md:pl-20 xl:pl-32 pr-6 max-w-md text-white">
                <h3 className="text-4xl sm:text-5xl ml-14 xl:text-6xl font-semibold">
                  2017
                </h3>
                <p className="mt-2 mb-4 justify-center leading-relaxed">
                  GCU Enterprise raises its first CLO, the largest in the U.S.
                  since 2006 at $5.6B.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*  TIMELINE */}
        <div className="relative pt-44 sm:pt-52 md:pt-60 xl:pt-72 pb-20 px-4 sm:px-6 md:px-8">
          {/* Center line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-blue-700 -translate-x-1/2" />

          <div className="space-y-12 xl:space-y-8 relative">
            {/*  2020  */}
            <Motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="relative pl-6 lg:pl-0 lg:text-right lg:pr-28 xl:pr-32 border-l-4 lg:border-none border-blue-600">
                <span className="lg:hidden absolute -left-[10px] top-2 w-4 h-4 bg-blue-600 rounded-full" />
                <h3 className="text-3xl xl:text-5xl font-bold text-blue-900">
                  2020
                </h3>
                <p className="mt-2 text-gray-800 max-w-lg lg:ml-auto">
                  GCU Enterprise closes its inaugural Senior Loan Fund I with
                  approximately $3B in purchasing power.
                </p>
              </div>

              <div className="hidden lg:block relative top-8">
                <div className="absolute right-full top-1/2 h-px w-28 xl:w-32 bg-blue-600 -translate-y-1/2" />
              </div>
            </Motion.div>

            {/* 2021  */}
            <Motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="hidden lg:block relative top-8">
                <div className="absolute left-full top-1/2 h-px w-28 xl:w-32 bg-blue-600 -translate-y-1/2" />
              </div>

              <div className="relative pl-6 lg:pl-28 xl:pl-32 border-l-4 lg:border-none border-blue-600">
                <span className="lg:hidden absolute -left-[10px] top-2 w-4 h-4 bg-blue-600 rounded-full" />
                <h3 className="text-3xl xl:text-5xl font-bold text-blue-900">
                  2021
                </h3>
                <p className="mt-2 text-gray-800 max-w-lg">
                  Demonstrating its commitment to responsible investment, GCU
                  Enterprise becomes a signatory to Principles for Responsible
                  Investment.
                </p>
              </div>
            </Motion.div>

            {/*  2023  */}
            <Motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div className="relative pl-6 lg:pl-0 lg:text-right lg:pr-28 xl:pr-32 border-l-4 lg:border-none border-blue-600">
                <span className="lg:hidden absolute -left-[10px] top-2 w-4 h-4 bg-blue-600 rounded-full" />
                <h3 className="text-3xl xl:text-5xl font-bold text-blue-900">
                  2023
                </h3>
                <p className="mt-2 text-gray-800 max-w-lg lg:ml-auto">
                  GCU Enterprise launches its Liquid Credit business and closes
                  its first two BSL CLOs.
                </p>
              </div>

              <div className="hidden lg:block relative top-8">
                <div className="absolute right-full top-1/2 h-px w-28 xl:w-32 bg-blue-600 -translate-y-1/2" />
              </div>
            </Motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReplicaAbout;
