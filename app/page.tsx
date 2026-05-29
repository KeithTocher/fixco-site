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
      <section className="max-w-7xl mx-auto px-6 py-20">

        <Image
          src="/images/fixco-logo.png"
          alt="FixCo Property Ltd"
          width={300}
          height={150}
          priority
          className="mb-10"
        />

        <p className="uppercase tracking-[4px] text-yellow-400 font-semibold mb-6">
          Practical Solutions. Professional Finish.
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
          Property Improvements & Maintenance
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mb-10">
          Professional property maintenance and improvement services across
          Edinburgh, Midlothian, East Lothian and West Lothian.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="tel:07968817387"
            className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition"
          >
            Call Now
          </a>

          <a
            href="mailto:info@fixcoproperty.com"
            className="border border-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition"
          >
            Email Us
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {[
            "Flooring Installation",
            "General Electrical Fixtures",
            "Shelving & Interior Installations",
            "General Property Maintenance",
            "Garden & Outdoor Projects",
            "Summer House & Shed Bases",
            "Plumbing Repairs",
            "Flat Pack Assembly",
            "Handyman Services",
          ].map((service) => (
            <div
              key={service}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-yellow-400 transition"
            >
              <h3 className="font-semibold text-lg">
                {service}
              </h3>
            </div>
          ))}

        </div>
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