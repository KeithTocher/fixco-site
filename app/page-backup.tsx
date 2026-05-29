import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <Image
          src="/images/fixco-logo.png"
          alt="FixCo Property Ltd"
          width={350}
          height={200}
          priority
        />

        <h1 className="text-5xl font-bold mt-10 mb-6">
          Property Improvements & Maintenance
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mb-10">
          Professional property maintenance and improvement services across
          Edinburgh and the surrounding areas.
        </p>

        <div className="flex gap-4">
          <a
            href="tel:07968817387"
            className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold"
          >
            Call Now
          </a>

          <a
            href="mailto:info@fixcoproperty.com"
            className="border border-white px-6 py-3 rounded"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="font-bold mb-3">Flooring Installation</h3>
            <p>Laminate, engineered wood and general flooring projects.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="font-bold mb-3">Electrical Fixtures</h3>
            <p>Light fittings, sockets, switches and general installations.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="font-bold mb-3">Plumbing Repairs</h3>
            <p>General plumbing repairs and maintenance work.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="font-bold mb-3">Interior Installations</h3>
            <p>Shelving, storage solutions and home improvements.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="font-bold mb-3">Garden Projects</h3>
            <p>Groundworks, garden improvements and outdoor projects.</p>
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            <h3 className="font-bold mb-3">Summer House Bases</h3>
            <p>Timber and solid bases for sheds, offices and garden rooms.</p>
          </div>

        </div>
      </section>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Why Choose FixCo?</h2>

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-zinc-900 p-6 rounded-lg">
            ✓ Local Edinburgh Service
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            ✓ Reliable & Professional
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            ✓ Free Quotations
          </div>

          <div className="bg-zinc-900 p-6 rounded-lg">
            ✓ Quality Workmanship
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className="bg-zinc-900">
        <div className="max-w-6xl mx-auto px-6 py-16">

          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

          <p className="mb-3">
            <strong>Phone:</strong> 07968 817387
          </p>

          <p className="mb-8">
            <strong>Email:</strong> info@fixcoproperty.com
          </p>

          <a
            href="tel:07968817387"
            className="bg-yellow-400 text-black px-6 py-3 rounded font-semibold"
          >
            Call For A Free Quote
          </a>

        </div>
      </section>

    </main>
  );
}