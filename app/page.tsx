import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Bathroom Flooring",
    description: "Existing flooring removed and replaced with a durable modern finish.",
    before: "/images/bathroom-flooring-before.jpg",
    after: "/images/bathroom-flooring-after.jpg",
  },

  {
    title: "Eaves Cupboard Storage",
    description: "Unused loft space transformed into practical accessible storage.",
    before: "/images/eves-cupboard-before.jpg",
    after: "/images/eves-cupboard-after.jpg",
  },

  {
    title: "Garage Lining",
    description: "Garage lined and insulated to create a cleaner and more usable space.",
    before: "/images/garage-lining-before.jpg",
    after: "/images/garage-lining-after.jpg",
  },

  {
    title: "Garden Groundworks",
    description: "Ground preparation and landscaping improvements completed.",
    before: "/images/garden-ground-before.jpg",
    after: "/images/garden-ground-after.jpg",
  },

  {
    title: "Garden Terracing",
    description: "Multi-level retaining walls and terracing to maximise usable garden space.",
    before: "/images/garden-terracing-before.jpg",
    after: "/images/garden-terracing-after.jpg",
  },
];

export default function Home() {
  return (
    <main id="home"
  className="text-white min-h-screen"
  style={{
    background: `
      radial-gradient(
        circle at top,
        rgba(238,255,0,0.07) 0%,
        rgba(0,0,0,1) 40%
      ),
      #000000
    `,
  }}
>
<header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-zinc-800">
  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<Link href="#home">
  <Image
    src="/images/fixco-logo.png"
    alt="FixCo Property Ltd"
    width={170}
    height={50}
    className="w-auto h-auto"
  />
</Link>

  <nav className="hidden md:flex gap-8 text-zinc-300">
  <a href="#services" className="hover:text-[#EEFF00] transition-colors">
    Services
  </a>

  <a href="#gallery" className="hover:text-[#EEFF00] transition-colors">
    Projects
  </a>

  <a href="#contact" className="hover:text-[#EEFF00] transition-colors">
    Contact
  </a>
</nav>

    <a
      href="tel:07968817387"
      className="px-5 py-3 rounded-lg font-semibold text-black"
      style={{ backgroundColor: "#EEFF00" }}
    >
      Call Now
    </a>

  </div>
</header>

{/* HERO */}
<section className="max-w-7xl mx-auto px-6 py-10">
  <div className="grid lg:grid-cols-2 gap-10 items-center">

    {/* Left Side */}
    <div className="space-y-4 mb-8 text-lg">

  <p className="flex items-center gap-3">
    <span style={{ color: "#EEFF00" }}>✓</span>
    Flooring & Property Improvements
  </p>

  <p className="flex items-center gap-3">
    <span style={{ color: "#EEFF00" }}>✓</span>
    Garden Projects & Timber Bases
  </p>

  <p className="flex items-center gap-3">
    <span style={{ color: "#EEFF00" }}>✓</span>
    Handyman & Home Repairs
  </p>

  <p className="flex items-center gap-3">
    <span style={{ color: "#EEFF00" }}>✓</span>
    ✓ Restricted Access Specialists
  </p>

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
        Professional property improvement and maintenance services.
        Serving Edinburgh and selected surrounding areas.
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
  <section className="max-w-7xl mx-auto px-6 py-10">

  <div
    className="rounded-3xl p-10 border border-zinc-800"
    style={{ backgroundColor: "#111111" }}
  >

    <p
      className="uppercase tracking-[4px] font-semibold mb-3"
      style={{ color: "#EEFF00" }}
    >
      Restricted Access Specialists
    </p>

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      Restricted Access? No Problem.
    </h2>

    <p className="text-zinc-400 text-lg max-w-4xl">
      Many Edinburgh properties have narrow side passages, stepped gardens,
      basement access, terraced layouts and locations where machinery simply
      cannot reach. We are happy to quote for projects requiring manual access,
      careful planning and a practical approach.
    </p>

  </div>

</section>
  <section className="max-w-7xl mx-auto px-6 py-14">

  <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#EEFF00] transition-all duration-300">

    <Image
      src="/images/raised-timber-base.jpeg"
      alt="Summer House Timber Base"
      width={1400}
      height={900}
      className="w-full h-[400px] object-cover"
    />

    <div className="p-10">

      <p
        className="uppercase tracking-[4px] font-semibold mb-3"
        style={{ color: "#EEFF00" }}
      >
        Featured Project
      </p>

      <h3 className="text-4xl font-bold mb-4">
        Summer House Timber Base
      </h3>

      <p className="text-zinc-400 text-lg max-w-3xl">
        Precision-built timber base constructed to provide a stable,
        level foundation for a summer house, garden room or shed.
        Designed for long-term durability and a professional finish.
      </p>

    </div>

  </div>

</section>

      {/* SERVICES */}
  
<section id="why-us" className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Why Homeowners Choose FixCo?
        </h2>
           <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-10">
            Professional property improvement and maintenance services delivered with
            quality workmanship, attention to detail and a reliable approach.
          </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

  <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-xl font-semibold mb-3">Quality Workmanship</h3>
    <p className="text-zinc-400">
      Every project completed to a professional standard.
    </p>
  </div>

  <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-xl font-semibold mb-3">Free Quotations</h3>
    <p className="text-zinc-400">
      Clear pricing with no hidden surprises.
    </p>
  </div>

  <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-xl font-semibold mb-3">Reliable Service</h3>
    <p className="text-zinc-400">
      Honest communication and dependable workmanship.
    </p>
  </div>

  <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
    <h3 className="text-xl font-semibold mb-3">Edinburgh Based</h3>
    <p className="text-zinc-400">
      Serving Edinburgh, Midlothian and the surrounding areas.
    </p>
  </div>
</div>
</section>
<section className="max-w-5xl mx-auto px-6 py-8 text-center">

  <p
    className="uppercase tracking-[4px] mb-4 font-semibold"
    style={{ color: "#EEFF00" }}
  >
    Small Jobs Welcome. Larger Projects Delivered.
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-8">
    Practical Property Improvements For Every Home
  </h2>

  <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl mx-auto">
    From flooring installations and storage solutions to garage improvements,
    garden projects and timber base construction, FixCo Property Ltd delivers
    practical solutions and a professional finish for projects of all sizes.
  </p>

</section>

<section id="services" className="max-w-7xl mx-auto px-6 py-10">

  <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
    What We Do
  </h2>

  <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-16">
    Reliable property improvement and maintenance services across Edinburgh and the surrounding areas.
  </p>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3">Flooring Installation</h3>
      <p className="text-zinc-400">
        Laminate flooring and other practical flooring solutions.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3">Storage Solutions</h3>
      <p className="text-zinc-400">
        Eaves storage, shelving and practical space optimisation.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3">Garage Improvements</h3>
      <p className="text-zinc-400">
        Garage lining, insulation and organisation projects.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3">Garden Projects</h3>
      <p className="text-zinc-400">
        Landscaping, terracing, outdoor improvements and clearance work.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3">Timber Bases</h3>
      <p className="text-zinc-400">
        Strong foundations for sheds, garden rooms and outdoor structures.
      </p>
    </div>

    <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
      <h3 className="text-xl font-semibold mb-3">General Maintenance</h3>
      <p className="text-zinc-400">
        Ongoing repairs, upgrades and practical improvement work for homeowners.
      </p>
    </div>

<div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
  <h3 className="text-xl font-semibold mb-3">
    Handyman & Home Repairs
  </h3>

  <p className="text-zinc-400">
    Flat-pack assembly, TV mounting, shelving, sealing and general repairs.
  </p>
</div>

<div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300">
  <h3 className="text-xl font-semibold mb-3">
    Home Installations
  </h3>

  <p className="text-zinc-400">
    Replacement light fittings, socket fronts, fixtures and fittings.
  </p>
</div>

  </div>

</section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-14">

        <h2 className="text-4xl font-bold mb-12">
          Projects & Case Studies
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-[#EEFF00] hover:-translate-y-1 transition-all duration-300"
              
            >

              <div className="p-6 border-b border-zinc-800">
                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>
               <p className="text-zinc-400 mt-2 text-sm">
               {project.description}
              </p>
              </div>

              <div className="grid md:grid-cols-2">


                <div className="p-4">
                  <p
  className="font-semibold mb-4"
  style={{ color: "#EEFF00" }}
>
  BEFORE
                  </p>

                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={project.before}
                      alt={`${project.title} before`}
                      width={1200}
                      height={800}
                      className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

                <div className="p-4">
                  <p
  className="font-semibold mb-4"
  style={{ color: "#EEFF00" }}
>
  AFTER
                  </p>

                  <div className="overflow-hidden rounded-xl">
                    <Image
                      src={project.after}
                      alt={`${project.title} after`}
                      width={1200}
                      height={800}
                      className="w-full h-48 object-cover hover:scale-105 transition duration-500"
                    />
                  </div>
                </div>

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="max-w-7xl mx-auto px-6 py-14">

        <div
  className="rounded-3xl p-8 md:p-10 text-center"
  style={{ backgroundColor: "#111111" }}
>

  <p
    className="uppercase tracking-[5px] font-semibold mb-4"
    style={{ color: "#EEFF00" }}
  >
    Ready To Discuss Your Next Project?
  </p>

  <h2 className="text-4xl md:text-6xl font-bold mb-8">
    Get A Free Quote
  </h2>

  <p className="text-zinc-400 max-w-2xl mx-auto mb-12 text-lg">
    From small repairs and flooring installations to larger property
    improvement and landscaping projects, we're happy to discuss your requirements.
  </p>

  <div className="space-y-4 mb-10">

    <p className="text-3xl font-bold">
      07968 817387
    </p>

    <p className="text-xl text-zinc-300">
      info@fixcoproperty.com
    </p>

  </div>

  <a
    href="tel:07968817387"
    className="inline-block px-10 py-5 rounded-xl font-semibold text-black text-lg hover:scale-105 transition"
    style={{ backgroundColor: "#EEFF00" }}
  >
    Call Now
  </a>

</div>

      </section>
<footer className="border-t border-zinc-800 mt-4">
  <div className="max-w-7xl mx-auto px-6 py-10 text-center">

    <p className="font-bold text-xl mb-3">
      FixCo Property Ltd
    </p>

    <p className="text-zinc-400 mb-4">
      Property Improvements & Maintenance
    </p>

    <p className="text-zinc-500 text-sm">
      Serving Edinburgh & Surrounding Areas
    </p>

  </div>
</footer>
    </main>
  );
}