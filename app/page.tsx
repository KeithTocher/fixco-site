import Image from "next/image";

const projects = [
  {
    title: "Bathroom Flooring",
    before: "/images/bathroom-flooring-before.jpg",
    after: "/images/bathroom-flooring-after.jpg",
  },
  {
    title: "Eaves Cupboard Storage",
    before: "/images/eves-cupboard-before.jpg",
    after: "/images/eves-cupboard-after.jpg",
  },
  {
    title: "Garage Lining",
    before: "/images/garage-lining-before.jpg",
    after: "/images/garage-lining-after.jpg",
  },
  {
    title: "Garden Groundworks",
    before: "/images/garden-ground-before.jpg",
    after: "/images/garden-ground-after.jpg",
  },
  {
    title: "Garden Terracing",
    before: "/images/garden-terracing-before.jpg",
    after: "/images/garden-terracing-after.jpg",
  },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

{/* HERO */}
<section className="max-w-7xl mx-auto px-6 py-16">
  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* Left Side */}
    <div>
      <Image
        src="/images/fixco-logo.png"
        alt="FixCo Property Ltd"
        width={220}
        height={110}
        priority
        className="mb-8"
      />

      <p
        className="uppercase tracking-[6px] font-semibold mb-6"
        style={{ color: "#EEFF00" }}
      >
        Practical Solutions. Professional Finish.
      </p>

      <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] mb-8">
        Property
        <br />
        Improvements &
        <br />
        Maintenance
      </h1>

      <p className="text-xl text-zinc-300 max-w-xl mb-10">
        Professional property improvement and maintenance services
        across Edinburgh, Midlothian, East Lothian and West Lothian.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="tel:07968817387"
          className="px-8 py-4 rounded-xl font-semibold text-black transition-all hover:scale-105"
          style={{ backgroundColor: "#EEFF00" }}
        >
          Call Now
        </a>

        <a
          href="mailto:info@fixcoproperty.com"
          className="border border-zinc-700 px-8 py-4 rounded-xl hover:border-white transition-all"
        >
          Email Us
        </a>
      </div>
    </div>

    {/* Right Side */}
    <div className="relative">
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <Image
          src="/images/garden-terracing-after.jpg"
          alt="Garden Terracing Project"
          width={1200}
          height={800}
          className="w-full h-auto object-cover hover:scale-105 transition duration-700"
        />
      </div>

      <div
        className="absolute -bottom-6 -left-6 px-6 py-4 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-xl"
      >
        <p
          className="text-sm uppercase tracking-widest"
          style={{ color: "#EEFF00" }}
        >
          Featured Project
        </p>

        <p className="font-semibold mt-1">
          Garden Terracing Transformation
        </p>
      </div>
    </div>

  </div>
</section>

      {/* SERVICES */}
  
<section className="max-w-7xl mx-auto px-6 py-24">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Why Choose FixCo?
        </h2>
           <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16">
            Professional property improvement and maintenance services delivered with
            quality workmanship, attention to detail and a reliable approach.
          </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  <div className="bg-zinc-900 p-8 rounded-2xl hover:-translate-y-2 transition-all">
    <h3 className="text-xl font-semibold mb-3">Quality Workmanship</h3>
    <p className="text-zinc-400">
      Every project completed to a professional standard.
    </p>
  </div>

  <div className="bg-zinc-900 p-8 rounded-2xl hover:-translate-y-2 transition-all">
    <h3 className="text-xl font-semibold mb-3">Free Quotations</h3>
    <p className="text-zinc-400">
      Clear pricing with no hidden surprises.
    </p>
  </div>

  <div className="bg-zinc-900 p-8 rounded-2xl hover:-translate-y-2 transition-all">
    <h3 className="text-xl font-semibold mb-3">Reliable Service</h3>
    <p className="text-zinc-400">
      Honest communication and dependable workmanship.
    </p>
  </div>

  <div className="bg-zinc-900 p-8 rounded-2xl hover:-translate-y-2 transition-all">
    <h3 className="text-xl font-semibold mb-3">Edinburgh Based</h3>
    <p className="text-zinc-400">
      Serving Edinburgh, Midlothian and the surrounding areas.
    </p>
  </div>
</div>
      <section className="max-w-7xl mx-auto px-6 py-24">

  <h2 className="text-5xl font-bold text-center mb-6">
    Featured Projects
  </h2>

  <p className="text-zinc-400 text-center mb-16">
    Recent examples of completed work.
  </p>

</section>

      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold mb-12">
          Recent Projects
        </h2>

        <div className="space-y-16">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800"
            >

              <div className="p-6 border-b border-zinc-800">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2">

                <div className="p-4">
                  <p className="text-yellow-400 font-semibold mb-4">
                    BEFORE
                  </p>

                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={project.before}
                      alt={`${project.title} before`}
                      width={1200}
                      height={800}
                      className="w-full h-auto hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <p className="text-yellow-400 font-semibold mb-4">
                    AFTER
                  </p>

                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={project.after}
                      alt={`${project.title} after`}
                      width={1200}
                      height={800}
                      className="w-full h-auto hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="bg-zinc-900 rounded-2xl p-10 border border-zinc-800">

          <h2 className="text-4xl font-bold mb-6">
            Get A Free Quote
          </h2>

          <p className="text-gray-300 mb-8">
            Contact FixCo Property Ltd today for a free, no-obligation quotation.
          </p>

          <div className="space-y-3 text-lg">
            <p>📞 07968 817387</p>
            <p>✉️ info@fixcoproperty.com</p>
          </div>

        </div>

      </section>

    </main>
  );
}