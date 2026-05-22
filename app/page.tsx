import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white p-8">
      <section className="max-w-5xl mx-auto py-20">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-400">EuropeLogix OS</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight">
          Intelligent Trade Platform
        </h1>
        <p className="mt-6 text-xl text-neutral-300 max-w-2xl">
          Control tower for trade, logistics, payments, documents and real-time traceability.
        </p>
        <div className="mt-10 flex gap-4">
          <Link className="rounded-2xl bg-white text-black px-6 py-3 font-medium" href="/dashboard">
            Open Dashboard
          </Link>
          <Link className="rounded-2xl border border-neutral-700 px-6 py-3 font-medium" href="/driver">
            Driver App
          </Link>
        </div>
      </section>
    </main>
  );
}
