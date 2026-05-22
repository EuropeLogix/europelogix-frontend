const cards = [
  ["Active Operations", "18"],
  ["In Transit", "7"],
  ["Pending Payments", "5"],
  ["Critical Incidents", "2"],
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex justify-between items-center">
          <div>
            <p className="text-sm text-neutral-400">EuropeLogix OS</p>
            <h1 className="text-3xl font-semibold">Control Tower</h1>
          </div>
          <div className="rounded-full border border-neutral-800 px-4 py-2 text-sm text-neutral-300">
            MVP v0.1
          </div>
        </header>

        <section className="grid md:grid-cols-4 gap-4 mt-8">
          {cards.map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
              <p className="text-neutral-400 text-sm">{label}</p>
              <p className="text-4xl font-semibold mt-3">{value}</p>
            </div>
          ))}
        </section>

        <section className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h2 className="text-xl font-medium">Live Shipments</h2>
            <div className="mt-4 space-y-3 text-neutral-300">
              <p>PL → ES · Loaded Departed · ETA 18:40</p>
              <p>BG → FR · Going to Loading · ETA 09:20</p>
              <p>DE → ES · Arrived Destination · Awaiting POD</p>
            </div>
          </div>
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <h2 className="text-xl font-medium">Event Timeline</h2>
            <div className="mt-4 space-y-3 text-neutral-300">
              <p>PAYMENT_VALIDATED · Operation EUX-0001</p>
              <p>DRIVER_ARRIVED_LOADING · Shipment SHP-0003</p>
              <p>CMR_UPLOADED · Shipment SHP-0002</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
